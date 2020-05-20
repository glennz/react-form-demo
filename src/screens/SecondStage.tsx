import React from 'react';
import {    
  TextInput, 
  TextArea, 
  DateOfBirth,
  Button 
} from '../components';
import DateOfBirthType from '../shared/DateOfBirthType';
import { connect, ConnectedProps } from 'react-redux';
import { setPolicyNo, setDateOfBirth, setDescription, setStage, setIsFormValid } from '../states/action/claimFormAction';
import utility from '../constant/ulitily';
import validation from '../constant/validation';
import ControlDataType from '../shared/ControlDataType';

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    policyNo: state.claimForm.policyNo,
    dateOfBirth: state.claimForm.dateOfBirth,
    description: state.claimForm.description,
    isFormValid: state.claimForm.isFormValid
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setPolicyNo: (policyNo: ControlDataType) => dispatch(setPolicyNo(policyNo)),
    setDateOfBirth: (dateOfBirth: DateOfBirthType) => dispatch(setDateOfBirth(dateOfBirth)),
    setDescription: (description: ControlDataType) => dispatch(setDescription(description)),
    setStage: (stage: number) => dispatch(setStage(stage)),
    setIsFormValid: (valid: boolean) => dispatch(setIsFormValid(valid)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class SecondStage extends React.Component<PropsFromRedux> {
  udpateControlDataDetails = utility.udpateControlDataDetails;
  validateControl = validation.validateControl;

  constructor(props: PropsFromRedux) {
    super(props);

    this.buttonPrevClick = this.buttonPrevClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDateOfBirth = this.setDateOfBirth.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.isSecondStageValid = this.isSecondStageValid.bind(this);
  }

  // move to previous page
  buttonPrevClick() {
    this.props.setStage(1);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    switch(target.name) {
      case 'policyNo':
        const pno = this.udpateControlDataDetails(target.value, '');
        this.props.setPolicyNo(pno);
        break;
      case 'description':
        const desc = this.udpateControlDataDetails(target.value, '');
        this.props.setDescription(desc);
        break;
    }
  };

  setDateOfBirth(dateOfBirth: DateOfBirthType) {
    this.props.setDateOfBirth(dateOfBirth);
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const error = this.validateControl(target.name, target.value) || '';

    if (error && this.props.isFormValid) {
      this.props.setIsFormValid(false);
    }

    switch(target.name) {
      case 'policyNo':
        const pno = this.udpateControlDataDetails(target.value, error);
        this.props.setPolicyNo(pno);
        break;
      case 'description':
        const desc = this.udpateControlDataDetails(target.value, error);
        this.props.setDescription(desc);
        break;
    }
  }

  isSecondStageValid() {
    return !(this.props.policyNo.error || this.props.dateOfBirth.error);
  }

  render() {
    const { policyNo, dateOfBirth, description } = this.props;

    return (
        <div>            
            <TextInput id="policyNo" 
              name="policyNo" 
              label="Policy No."
              value={policyNo.value}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              error={policyNo.error}
              touched={policyNo.touched}>
            </TextInput>

            <DateOfBirth 
              id="dateOfBirth"
              name="dateOfBirth"
              label="Event Date"
              dateOfBirth={dateOfBirth}
              setValue={this.setDateOfBirth}>
            </DateOfBirth>

            <TextArea 
              id="description" 
              name="description" 
              label="Description"
              rows="4"
              value={description.value}              
              onChange={this.handleChange}>
            </TextArea>

            <div className="buttons">
                <Button id="btnPrevious" text="< Prev" click={this.buttonPrevClick}></Button>
                <Button id="btnSubmit" type="submit" text="Submit" disabled={this.isSecondStageValid() ? false : true}></Button>
            </div>
        </div>
      );
  }
}

export default connector(SecondStage);
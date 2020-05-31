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
import { setFormMessage } from '../states/action/messageAction';
import { setPolicyNoState, setDateOfBirthState } from '../states/action/claimFormStateAction';
import ControlStateType from '../shared/ControlStateType';

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    policyNo: state.claimForm.policyNo,
    policyNoState: state.claimFormState.policyNo,
    dateOfBirth: state.claimForm.dateOfBirth,
    dateOfBirthState: state.claimFormState.dateOfBirth,
    description: state.claimForm.description,
    isFormValid: state.claimForm.isFormValid
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setPolicyNo: (policyNo: ControlDataType) => dispatch(setPolicyNo(policyNo)),
    setPolicyNoState: (policyNoState: ControlStateType) => dispatch(setPolicyNoState(policyNoState)),
    setDateOfBirth: (dateOfBirth: DateOfBirthType) => dispatch(setDateOfBirth(dateOfBirth)),
    setDateOfBirthState: (dateOfBirthState: ControlStateType) => dispatch(setDateOfBirthState(dateOfBirthState)),
    setDescription: (description: ControlDataType) => dispatch(setDescription(description)),
    setStage: (stage: number) => dispatch(setStage(stage)),
    setIsFormValid: (valid: boolean) => dispatch(setIsFormValid(valid)),
    setFormMessage: (message: string) => dispatch(setFormMessage(message))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class SecondStage extends React.Component<PropsFromRedux> {

  // initial data
  udpateControlData = utility.updateControlData;
  updateControlState = utility.updateControlState;  
  validateControl = validation.validateControl;
  validateDateOfBirth = validation.validateDateOfBirth;

  constructor(props: PropsFromRedux) {
    super(props);

    this.buttonPrevClick = this.buttonPrevClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDateOfBirth = this.setDateOfBirth.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  // move to previous page
  buttonPrevClick() {
    this.props.setStage(1);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    switch(target.name) {
      case 'policyNo':
        const pno = this.udpateControlData(target.value);
        this.props.setPolicyNo(pno);
        const pnoState = this.updateControlState('');
        this.props.setPolicyNoState(pnoState);
        break;
      case 'description':
        const desc = this.udpateControlData(target.value);
        this.props.setDescription(desc);
        break;
    }

    //clear global message
    this.props.setFormMessage('');
  };

  setDateOfBirth(dateOfBirth: DateOfBirthType) {
    this.props.setDateOfBirth(dateOfBirth);

    const dobValid = this.validateDateOfBirth(dateOfBirth, ['DD MM YYYY']);
    if (dobValid) {
      const dobState = this.updateControlState(dobValid);
      this.props.setDateOfBirthState(dobState);
    }
    else {
      this.props.setDateOfBirthState(this.updateControlState(''));
    }
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const error = this.validateControl(target.name, target.value) || '';

    if (error && this.props.isFormValid) {
      this.props.setIsFormValid(false);
    }

    switch(target.name) {
      case 'policyNo':
        const pnoState = this.updateControlState(error);
        this.props.setPolicyNoState(pnoState);
        break;
    }

    //clear global message
    this.props.setFormMessage('');
  }

  render() {
    const { policyNo, dateOfBirth, description, policyNoState, dateOfBirthState } = this.props;

    return (
        <div>            
            <TextInput id="policyNo" 
              name="policyNo" 
              label="Policy No."
              value={policyNo.value}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              error={policyNoState.error}
              touched={policyNoState.touched}>
            </TextInput>

            <DateOfBirth 
              id="dateOfBirth"
              name="dateOfBirth"
              label="Event Date"
              dateOfBirth={dateOfBirth}
              setValue={this.setDateOfBirth}
              error={dateOfBirthState.error}
              touched={dateOfBirthState.touched}>
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
                <Button id="btnSubmit" type="submit" text="Submit"></Button>
            </div>
        </div>
      );
  }
}

export default connector(SecondStage);
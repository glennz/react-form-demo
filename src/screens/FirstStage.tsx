import React from 'react';
import { TextInput, Button } from '../components';
import { connect, ConnectedProps } from 'react-redux';
import { setFirstName, setLastName, setEmail, setStage } from '../states/action/claimFormAction';
import utility from '../constant/ulitily';
import validation from '../constant/validation';
import ControlDataType from '../shared/ControlDataType';
import ControlStateType from '../shared/ControlStateType';
import { setFormMessage } from '../states/action/messageAction';
import { setFirstNameState, setLastNameState, setEmailState } from '../states/action/claimFormStateAction';


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    firstName: state.claimForm.firstName,
    lastName: state.claimForm.lastName,
    email: state.claimForm.email,
    firstNameState: state.claimFormState.firstName,
    lastNameState: state.claimFormState.lastName,
    emailState: state.claimFormState.email
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setFirstName: (firstname: ControlDataType) => dispatch(setFirstName(firstname)),
    setLastName: (lastname: ControlDataType) => dispatch(setLastName(lastname)),
    setEmail: (email: ControlDataType) => dispatch(setEmail(email)),
    setFirstNameState: (firstname: ControlStateType) => dispatch(setFirstNameState(firstname)),
    setLastNameState: (lastname: ControlStateType) => dispatch(setLastNameState(lastname)),
    setEmailState: (email: ControlStateType) => dispatch(setEmailState(email)),
    setStage: (stage: number) => dispatch(setStage(stage)),
    setFormMessage: (message: string) => dispatch(setFormMessage(message))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class FirstStage extends React.Component<PropsFromRedux> {
  updateControlData = utility.updateControlData;
  updateControlState = utility.updateControlState;
  validateControl = validation.validateControl;

  constructor(props: PropsFromRedux) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.isFirstStageValid = this.isFirstStageValid.bind(this);
  }

  buttonClick() {
    this.props.setStage(2);
  }
  
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    switch(target.name) {
      case 'firstname':
        const fnameData = this.updateControlData(target.value);
        this.props.setFirstName(fnameData);
        const fnameState = this.updateControlState('');
        this.props.setFirstNameState(fnameState);
        break;
      case 'lastname':
        const lnameData = this.updateControlData(target.value);
        this.props.setLastName(lnameData);
        const lnameState = this.updateControlState('');
        this.props.setLastNameState(lnameState);
        break;
      case 'email':
        const emailData = this.updateControlData(target.value);
        this.props.setEmail(emailData);
        const emailState = this.updateControlState('');
        this.props.setEmailState(emailState);
        break;
    }

    //clear global message
    this.props.setFormMessage('');    
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const error = this.validateControl(target.name, target.value) || '';

    switch(target.name) {
      case 'firstname':
        const fnameState = this.updateControlState(error);
        this.props.setFirstNameState(fnameState);
        break;
      case 'lastname':
        const lnameState = this.updateControlState(error);
        this.props.setLastNameState(lnameState);
        break;
      case 'email':
        const emailState = this.updateControlState(error);
        this.props.setEmailState(emailState);
        break;
    }

    //clear global message
    this.props.setFormMessage('');
  }

  isFirstStageValid() {
    const hasNoError = !(this.props.firstName.error || this.props.lastName.error || this.props.email.error);
    const touched = (this.props.firstName.touched || this.props.lastName.touched || this.props.email.touched);
    return hasNoError && touched;
  }

  render() {
    const { firstName, lastName, email, firstNameState, lastNameState,  emailState } = this.props;

    return (
      <div>
        <div>
              <TextInput 
                id="firstname"
                name="firstname" 
                label="First name" 
                value={firstName.value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                error={firstNameState.error}                
                touched={firstNameState.touched}>
              </TextInput>
  
              <TextInput 
                id="lastname"
                name="lastname" 
                label="Last name" 
                value={lastName.value}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={lastNameState.error}
                touched={lastNameState.touched}>
              </TextInput>
  
              <TextInput 
                id="email"
                name="email" 
                type="email"
                label="Email" 
                value={email.value}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={emailState.error}
                touched={emailState.touched}>
              </TextInput>
        </div>
        <div>
            <Button id="btnNext" text="Next >" click={this.buttonClick}></Button>
        </div>
      </div>
    );
  }
}

export default connector(FirstStage);
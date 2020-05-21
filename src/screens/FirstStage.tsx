import React from 'react';
import { TextInput, Button } from '../components';
import { connect, ConnectedProps } from 'react-redux';
import { setFirstName, setLastName, setEmail, setStage, setIsFormValid } from '../states/action/claimFormAction';
import utility from '../constant/ulitily';
import validation from '../constant/validation';
import ControlDataType from '../shared/ControlDataType';
import { setFormMessage } from '../states/action/messageAction';


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    firstName: state.claimForm.firstName,
    lastName: state.claimForm.lastName,
    email: state.claimForm.email,
    isFormValid: state.claimForm.isFormValid
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setFirstName: (firstname: ControlDataType) => dispatch(setFirstName(firstname)),
    setLastName: (lastname: ControlDataType) => dispatch(setLastName(lastname)),
    setEmail: (email: ControlDataType) => dispatch(setEmail(email)),
    setStage: (stage: number) => dispatch(setStage(stage)),
    setIsFormValid: (valid: boolean) => dispatch(setIsFormValid(valid)),
    setFormMessage: (message: string) => dispatch(setFormMessage(message))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class FirstStage extends React.Component<PropsFromRedux> {
  udpateControlDataDetails = utility.udpateControlDataDetails;
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
        const fname = this.udpateControlDataDetails(target.value, '');
        this.props.setFirstName(fname);
        break;
      case 'lastname':
        const lname = this.udpateControlDataDetails(target.value, '');
        this.props.setLastName(lname);
        break;
      case 'email':
        const email = this.udpateControlDataDetails(target.value, '');
        this.props.setEmail(email);
        break;
    }

    //clear global message
    this.props.setFormMessage('');    
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const error = this.validateControl(target.name, target.value) || '';

    if (error && this.props.isFormValid) {
      this.props.setIsFormValid(false);
    }

    switch(target.name) {
      case 'firstname':
        const fname = this.udpateControlDataDetails(target.value, error);
        this.props.setFirstName(fname);
        break;
      case 'lastname':
        const lname = this.udpateControlDataDetails(target.value, error);
        this.props.setLastName(lname);
        break;
      case 'email':
        const email = this.udpateControlDataDetails(target.value, error);
        this.props.setEmail(email);
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
    const { firstName, lastName, email } = this.props;

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
                error={firstName.error}                
                touched={firstName.touched}>
              </TextInput>
  
              <TextInput 
                id="lastname"
                name="lastname" 
                label="Last name" 
                value={lastName.value}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={lastName.error}
                touched={lastName.touched}>
              </TextInput>
  
              <TextInput 
                id="email"
                name="email" 
                type="email"
                label="Email" 
                value={email.value}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={email.error}
                touched={email.touched}>
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
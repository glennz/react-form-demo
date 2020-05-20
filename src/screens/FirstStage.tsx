import React from 'react';
import { TextInput, Button } from '../components';
import { connect, ConnectedProps } from 'react-redux';
import { setFirstName, setLastName, setEmail, setStage } from '../states/action/claimFormAction';


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    firstName: state.claimForm.firstName,
    lastName: state.claimForm.lastName,
    email: state.claimForm.email
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setFirstName: (firstname: string) => dispatch(setFirstName(firstname)),
    setLastName: (lastname: string) => dispatch(setLastName(lastname)),
    setEmail: (email: string) => dispatch(setEmail(email)),
    setStage: (stage: number) => dispatch(setStage(stage))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class FirstStage extends React.Component<PropsFromRedux> {

  constructor(props: PropsFromRedux) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  buttonClick() {
    this.props.setStage(2);
  };
  
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    switch(target.name) {
      case 'firstname':
        this.props.setFirstName(target.value);
        break;
      case 'lastname':
        this.props.setLastName(target.value);
        break;
      case 'email':
        this.props.setEmail(target.value);
        break;
    }
  };

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
                error={firstName.error}                
                touched={firstName.touched}>
              </TextInput>
  
              <TextInput 
                id="lastname"
                name="lastname" 
                label="Last name" 
                value={lastName.value}
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
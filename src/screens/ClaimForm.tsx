import React from 'react';
import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import ThirdStage from './ThirdStage';
import { connect, ConnectedProps } from 'react-redux';
import { clearForm, setStage } from '../states/action/claimFormAction';
import { PageTitle } from '../components';
import stageTitles from '../constant/stageTitles';
import { IStageTitle } from '../shared/IStageTitle';
import '../styles/pageTitle.scss';
import '../styles/layout.scss';
import '../styles/form.scss';
import { IClaim } from '../shared/IClaim';
import { setFormMessage } from '../states/action/messageAction';

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  // Redux Store --> Page Component
  return {
    stage: state.claimForm.stage,
    claimForm: state.claimForm,
    formMessage: state.messageReducer.formMessage
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Props)
const mapDispatchToProps = (dispatch: any) => {
  // Action
  return {
    setStage: (stage: number) => dispatch(setStage(stage)),
    clearForm: () => dispatch(clearForm()),
    setFormMessage: (message: string) => dispatch(setFormMessage(message))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class ClaimForm extends React.Component<PropsFromRedux> {
  state = { formSubmitted: false };

  constructor(props: PropsFromRedux) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showStageTwo = this.showStageTwo.bind(this);
    this.showStage = this.showStage.bind(this);
    this.showStageTitle = this.showStageTitle.bind(this);
    this.isFirstStageValid = this.isFirstStageValid.bind(this);
    this.isSecondStageValid = this.isSecondStageValid.bind(this);
  }

  isFirstStageValid() {
    return !(this.props.claimForm.firstName.error || this.props.claimForm.lastName.error || this.props.claimForm.email.error);
  }

  isSecondStageValid() {
    const hasNoError = !(this.props.claimForm.policyNo.error || this.props.claimForm.dateOfBirth.error);
    const touched = (this.props.claimForm.policyNo.touched || this.props.claimForm.dateOfBirth.touched);
    return hasNoError && touched;
  }
  
  // form submit
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!this.isFirstStageValid() || !this.isSecondStageValid()) {
      this.props.setFormMessage('Form has invalid data, please enter the data and try again.');
      return false;
    }

    if (this.props.formMessage) {
      this.props.setFormMessage('');
    }
    // submit form to api by axios. Do not do this as it is not in requirement
    const claimDetails = this.props.claimForm;
    const claimRequest: IClaim = {
      firstName: claimDetails.firstName.value,
      lastName: claimDetails.lastName.value,
      email: claimDetails.email.value,
      dateOfBirth: `${claimDetails.dateOfBirth.month.value}/${claimDetails.dateOfBirth.day.value}/${claimDetails.dateOfBirth.year.value}`,
      description: claimDetails.description.value,
      policyNo: claimDetails.policyNo.value,
    };
    console.dir(claimRequest);

    // after submit success
    this.setState({ formSubmitted: true });
    if (this.props.stage === 2) {
      this.props.clearForm();
    }  
  }

  showStageOne() {
    return (
      <FirstStage></FirstStage>
    );
  };
  
  showStageTwo() {
    return (
      <SecondStage></SecondStage>
    );
  }
  
  showStageThree() {
    return (
      <ThirdStage></ThirdStage>
    );
  }

  showStageTitle(stage: number, stages: Array<IStageTitle>) {
    const stageTitle = stages[stage-1];
    const className = 'page-title';
    return (
      <PageTitle step={stageTitle.stage.toString()} title={stageTitle.title} className={className}>   
      </PageTitle>
    );
  }
  
  showStage() {
    if (this.state.formSubmitted) {
      return this.showStageThree();
    }

    const { stage } = this.props;
    const stageView = (stage === 2) ? this.showStageTwo() : this.showStageOne();
    return (      

      <form name="claimForm" onSubmit={this.handleSubmit} noValidate={true}>         
        {stageView}
      </form>
    );
  }

  render() {
    const { stage, formMessage } = this.props;
    const index = (this.state.formSubmitted) ? 3 : stage;

    return (
      <div className="main">
        {this.showStageTitle(index, stageTitles.stages)}
        {this.showStage()}

        <div className="form-message">
          {formMessage}
        </div>
      </div>
    );
  }
}

export default connector(ClaimForm);
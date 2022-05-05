import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
//import SocialProfiles from "./SocialProfiles";
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    phone: '',
    password: '',
    facebook: '',
    twitter: '',
    github: '',
    cuotas: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.step !== this.state.step;
  }

  componentDidMount(...p) {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(...p) {
    window.scrollTo(0, 0);
  }

  render() {
    const { step } = this.state;
    const {
      cardname,
      cardnumber,
      codigo,
      date,
      cuotas /*name, email, phone, password, facebook, twitter, github*/,
    } = this.state;
    const values = { cardname, cardnumber, codigo, date, cuotas };

    switch (step) {
      case 1:
        return (
          <AccountSetup
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );

      /*      case 2:
        return (
          <SocialProfiles
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );*/
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        return null;
    }
  }
}

export default Form;

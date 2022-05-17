import React, { useEffect, useState } from 'react';
import AccountSetup from './AccountSetup';
//import SocialProfiles from "./SocialProfiles";
import Confirm from './Confirm';
import Success from './Success';

export const Form = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    facebook: '',
    twitter: '',
    github: '',
    cuotas: 1,
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [step]);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const inputChange = (input, value) => {
    setState((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  const {
    cardname,
    cardnumber,
    codigo,
    date,
    cuotas /*name, email, phone, password, facebook, twitter, github*/,
  } = state;
  const values = { cardname, cardnumber, codigo, date, cuotas };

  switch (step) {
    case 1:
      return (
        <AccountSetup
          nextStep={nextStep}
          inputChange={inputChange}
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
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 3:
      return <Success />;
    default:
      return null;
  }
};

export default Form;

import React, { Component } from "react";
import "./Form.css";

export class SocialProfiles extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className='form-container'>
        <h1 className='mb-5'>Social Profiles</h1>
        <div className='form.group'>
          <label htmlFor='facebook'>Facebook URL</label>
          <input
            type='text'
            className='form-control'
            name='facebook'
            onChange={inputChange("facebook")}
            value={values.facebook}
          />
        </div>
        <div className='form.group'>
          <label htmlFor='twitter'>Twitter URL</label>
          <input
            type='text'
            className='form-control'
            name='twitter'
            onChange={inputChange("twitter")}
            value={values.twitter}
          />
        </div>
        <div className='form.group'>
          <label htmlFor='github'>Github URL</label>
          <input
            type='text'
            className='form-control'
            name='github'
            onChange={inputChange("github")}
            value={values.github}
          />
        </div>
        {/*       <div className='form.group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={inputChange("password")}
            value={values.password}
          />
    </div>*/}
        <br />
        <div className='row'>
          <div className='col-6'>
            <button className='bTnProperty2' onClick={this.back}>
              Atrás
            </button>
          </div>
          <div className='col-6 text-right'>
            <button className='bTnProperty' onClick={this.continue}>
              Siguiente
            </button>
          </div>
        </div>

        <div className='text-right'></div>
      </div>
    );
  }
}

export default SocialProfiles;

import React, { Component } from 'react';
import { ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
//import { Radio, RadioGroup } from 'react-bootstrap-validation';
import $ from 'jquery';
//import fetch from './fetch';
export default class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        password: ''
      };
    }
    render() {
        return (
          <div className="Login">
          <div className="totle-input">
           <h1 text-align="center">Signup</h1>

            <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}

                >
             <div className="name">
                <ValidatedInput
                    type='text'
                    placeholder='firstName'
                    // Each input that you need validated should have
                    // the "name" prop
                    name='name'
                    value={this.state.name}
                    onChange={(event) => { this.setState({name:event.target.value }) }}
                    // Validation rules separated with comma
                    validate='required'
                    // Error messages for each error type
                    errorHelp={{
                    required: 'Please enter your firstName',
                    }}/>
						</div>

            <div className="PhoneNumber">
										<ValidatedInput
										type='text'
  							     placeholder='PhoneNumber'
  							     name='phone'
                     onChange={this.phoneChange.bind(this)}
                     value={this.state.phone}
  							     validate='required,isLength:10:60'
										errorHelp={{
  							     required: 'Please enter your PhoneNumber',
  							     isLength: 'PhoneNumber must be at least 10 characters'
  							     }}
  							   /></div>

           <div className="email">
										<ValidatedInput
									  type='text'
									  placeholder='Email'
									  name='email'
                    onChange={this.emailChange.bind(this)}
                    value={this.state.email}
									  validate='required,isEmail'
									  errorHelp={{
										required: 'Please enter your email',
										isEmail: 'Email is invalid'
									 }}
							 /></div>

          <div className="password">
                   <ValidatedInput
                   type='password'
                   name='password'
                   onChange={this.passwordChange.bind(this)}
                   value={this.state.password}
                   placeholder="password"
                   validate='required,isLength:6:60'
                   errorHelp={{
                   required: 'Please specify a password',
                   isLength: 'Password must be at least 6 characters'
                    }}
                /></div>

          <div className="password">
                   <ValidatedInput
                   type='password'
                   name='password-confirm'
                   placeholder='Confirm Password'
                   validate={(val, context) => val === context.password}
                   errorHelp='Passwords do not match'
                /></div>


          <div className="button">
                   <ButtonInput
                   type="reset"
                   bsSize='large'
                   bsStyle='primary'
                   value="Reset"/>
           </div>

           <div className="button">
                   <ButtonInput
                    type='submit'
                    onClick={this._handleFormSubmit.bind(this)}
                    bsSize='large'
                    bsStyle='primary'
                    value='Save'
                />
            </div>

               </Form>
                 </div>
                   </div>
        );
    }
    _handleValidSubmit(values) {
        // Values is an object containing all values
        // from the inputs
    }

    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names
        // that failed to validate
    }

    _handleFormSubmit(e){
      //console.log(this.props);
      //console.log(this.props.dateURL);
      var data = {
       name: this.state.name,
       email: this.state.email,
       phone: this.state.phone,
       password: this.state.password
     }
     console.log(data);
     debugger;
      var dataURL = 'http://credcashapi.devserver2.com/api/v1';
      $.ajax({
          method:'post',
          url: dataURL+'/signup',
          data:data,
          crossDomain: true,
          datatype: 'application/json',
          cache: false,
          success: function(data) {
            debugger;
            console.log(data);
              this.setState({data: data});
              this.chooseRandomQuote();
          }.bind(this),
          error: function(data, status) {console.log('error');
            debugger;
            console.log(data);
            console.log(status);
          }.bind(this)
      });
    }
    nameChange(e){
      this.setState({name: e.target.value});
    }
    emailChange(e){
     this.setState({email: e.target.value});
    }
    passwordChange(e){
      this.setState({password: e.target.value});
    }
    phoneChange(e){
      this.setState({phone: e.target.value});
    }
}

import React, { Component } from 'react';
import { ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import { Radio, RadioGroup } from 'react-bootstrap-validation';

export default class Login extends Component {
    render() {
        return (
          <div className="Login">
          <div className="totle-input">
            <h1>Login</h1>

            <Form
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
                <div className="email">
                    <ValidatedInput
                      type='text'
                      placeholder='Email'
                      name='email'
                      validate='required,isEmail'
                      errorHelp={{
                          required: 'Please enter your email',
                          isEmail: 'Email is invalid'
                      }}
                  />
                </div>
                <div className="password">
                    <ValidatedInput
                        type='password'
                        name='password'
                        placeholder="password"
                        validate='required,isLength:6:60'
                        errorHelp={{
                            required: 'Please specify a password',
                            isLength: 'Password must be at least 6 characters'
                        }}
                    />
                </div>
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
                        bsSize='large'
                        bsStyle='primary'
                        value='submit'
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


}

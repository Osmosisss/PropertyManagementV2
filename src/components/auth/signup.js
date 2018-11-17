import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import SignupForm from './signupForm';

class SignUp extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('Navigate to dashboard');
            this.props.history.push('/dashboard');
        })
    }
    render() {
        return (
            <div className="sign-up">
                <SignupForm onSubmit={(event) => this.onSubmit(event)} />
            </div>
        );
    }
}

export default connect(null, actions)(SignUp);
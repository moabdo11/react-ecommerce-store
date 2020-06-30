import React, { Component } from 'react';

import FormInput from '../UI/Form-input/form-input';
import SingleButton from '../UI/Buttons/Singlebutton';

import  { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.styles.scss';



class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match")

            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const {  name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return(
            <div className="register">
                <h2 className="title"> Don't have an account?</h2>
                <span>Sign up with email and password</span>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="display name"
                        required
                    />
                      <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                      <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                      <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <SingleButton type="submit">SIGN UP</SingleButton>
                </form>
            </div>
        )
    }
}

export default Register;
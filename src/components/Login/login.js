import React, { Component } from 'react';

import FormInput from '../UI/Form-input/form-input';
import SingleButton from '../UI/Buttons/Singlebutton';

import  { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }


        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="log-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email" 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"  
                        required 
                    />
                    <div className="buttons">
                        <SingleButton type="submit"> Sign In </SingleButton>
                        <SingleButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </SingleButton>
                    </div>
              
                </form>
            </div>
        )
    }
}

export default Login;
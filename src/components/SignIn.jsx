import React, { useState } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../firebase';
import { Button } from '@material-ui/core';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const signIn = async (event) => {
        const { name } = event.target;
        
        if (name === 'google') {
            await signInWithGoogle();
        } else {
            await signInWithFacebook();
        }
     };

    return (
        <div className="SignIn">
            <h1>Sign In</h1>
            <div className="container">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleInputChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleInputChange}/>

                    <button>Sign In</button>
                </form>
                <p className="">or</p>
                <div class="button-container">
                    <Button color="secondary" variant="contained" name="google" onClick={signIn}>Sign in with Google</Button>
                    <Button color="primary" variant="contained" name="facebook" onClick={signIn}>Sign in with Facebook</Button>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
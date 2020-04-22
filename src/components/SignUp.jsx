import React, { useState } from 'react';
import { signInWithGoogle, signInWithFacebook } from '../firebase';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else {
            setName(value);
        }
    };

    const signUp = async (event) => {
        const { name } = event.target;

        if (name === 'google') {
            await signInWithGoogle();
        } else {
            await signInWithFacebook();
        }
    };

    return (
        <div className="SignUp">
            <h1>Sign Up</h1>
            <div className="content">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="name" id="name" name="name" value={name} onChange={handleInputChange}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleInputChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleInputChange}/>

                    <button>Sign Up</button>
                </form>
                <p className="">or</p>
                <button name="google" onClick={signUp}>Sign up with Google</button>
                <button name="facebook" onClick={signUp}>Sign up with Facebook</button>
            </div>
        </div>
    );
}
export default SignUp;
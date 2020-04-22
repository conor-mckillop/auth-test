import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import { UserContext } from '../providers/UserProvider';

function Application () {
    const user = useContext(UserContext);

    return (
        user ? 
            <Home/>
            :
            <Router>
              <SignIn path="/"/>
              <SignUp path="signUp"/>
            </Router>
    );
}

export default Application;
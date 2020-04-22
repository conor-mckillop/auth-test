import React, { createContext, Component } from 'react';
import { auth } from '../firebase';

export const UserContext = createContext({ user: null });

export default class UserProvider extends Component {
    state = {
        user: null
    }

    async componentDidMount() {
        auth.onAuthStateChanged(async (user) => { 
            this.setState({ user }) 
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
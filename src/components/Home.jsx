import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { auth } from '../firebase';

function Home() {
    const user = useContext(UserContext);
    console.log('home', user)
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Hello {user.displayName}</h2>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
}
export default Home;
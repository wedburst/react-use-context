import React, { useContext } from 'react';
import { UserContext } from '../hook/UserContext';

export const HomeScreen = () => {

    const {user} = useContext(UserContext); 

    console.log(user);

    return(
        <>
            <h1>Home Screen</h1>
            <hr />

            <pre>{JSON.stringify(user, null, 3)}</pre>
        </>
    )
}
import React, { useContext, useState } from 'react';
import { UserContext } from '../hook/UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext); 

    const setUserClick = () => {
        console.log('click')
        setUser({
            name: 'Jhon',
            correo: 'jhon@abou.com'
        })
    }

    return(
        <>
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => setUserClick()}>
                Login
            </button>
        </>
    )
}
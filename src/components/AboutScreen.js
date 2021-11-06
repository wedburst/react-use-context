import React, { useContext } from 'react';
import { UserContext } from '../hook/UserContext';

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);
    return(
        <>
            <h1>About Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-warning" onClick={() => setUser({})}>Logout</button>
        </>
    )
}
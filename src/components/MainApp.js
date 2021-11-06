import React, { useState } from 'react';
import { AppRouter } from '../router/AppRouter';
import { UserContext } from '../hook/UserContext';

export const MainApp = () => {

    // const user = {
    //     id: 123,
    //     name: 'Jhon Abou',
    //     email: 'jhon@test.com'
    // }
    const [user, setUser] = useState({})
    return(
        <div className="container">
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter/>
        </UserContext.Provider>
        </div>
    )
}
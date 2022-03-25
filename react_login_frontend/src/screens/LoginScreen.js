import React, { useState, useEffect } from "react";
import UserStore from "../stores/UserStore";
import LoginForm from "../components/login/LoginForm";
import SubmitButton from "../components/login/SubmitButton";
import '../tut.css'

export const LoginScreen = () => {

    console.log(UserStore);

    // const [isLoading, setLoading] = useState(UserStore.loading);
    // const [isLoggedIn, setLoggedIn] = useState(UserStore.isLoggedIn);
    // const [username, setUsername] = useState(UserStore.username);
    
    useEffect( () => {
        console.log(UserStore.loading);
        if (UserStore.loading) {
            return (
                <div className='container'>
                    Loading, please wait..
                </div>
            )
        }
    
        else {
    
            if (UserStore.isLoggedIn) {
                return (
                    <div className='container'>
                        Welcome {UserStore.username}
    
                        <SubmitButton
                            text={'Log out'}
                            disabled={false}
                            onClick={() => this.doLogout()}
                        />
    
                    </div>
                )
            }
    
            return (
                <div className="app">
                    <div className='container'>
                        <LoginForm
                        />
                    </div>
    
                </div>
            );
        }
        
    })

    if (UserStore.loading) {
        return (
            <div className='container'>
                Loading, please wait..
            </div>
        )
    }

    else {

        if (UserStore.isLoggedIn) {
            return (
                <div className='container'>
                    Welcome {UserStore.username}

                    <SubmitButton
                        text={'Log out'}
                        disabled={false}
                        onClick={() => this.doLogout()}
                    />

                </div>
            )
        }

        return (
            <div className="app">
                <div className='container'>
                    <LoginForm
                    />
                </div>

            </div>
        );
    }
}

export default LoginScreen;
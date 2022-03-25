import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import UserStore from "./stores/UserStore";
import LoginForm from "./components/login/LoginForm";
import SubmitButton from "./components/login/SubmitButton";
import { LoginScreen } from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import './tut.css';
import JsonDataDisplay from './loans'
import JsonDataDisplayPayment from './payments'


class App extends React.Component {

    async componentDidUpdate() {

        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }

            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }

        }


        catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }

    }

    async componentDidMount() {

        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }

            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }

        }


        catch (e) {
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }

    async doLogout(accountKey) {

        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }

        }

        catch (e) {
            console.log(e);
        }
    }

    render() {
        
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
                        <Home 
                            store = {UserStore}
                            isLoggedIn = {UserStore.isLoggedIn}
                            username = {UserStore.username}
                            logOut = {this.doLogout}
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
                    <div class='container'>
                        <div class='row'>
                            <h3>Dear, xxxxxx, you have a balance of $200,000.</h3>
                        </div>
                        <div class="row">
                            <div class="col border">
                                <p>Current Loan(s)</p>
                                <JsonDataDisplay/>  
                            </div>
                            <div class="col border">
                                <p>Loan History</p>
                                <JsonDataDisplayPayment/>  
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default observer(App);

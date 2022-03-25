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

class App extends React.Component {

    

    render() {
        return(
            <div className="container">
                      <JsonDataDisplay/>

            {/* <div class="row">
                <div class="col-sm">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Cras justo odio</li>
                    </ol>
                </div>
                <div class="col-sm">
                One of three columns
                </div>
                <div class="col-sm">
                One of three columns
                </div>
            </div> */}
            </div>
        );
    }
}

export default observer(App);

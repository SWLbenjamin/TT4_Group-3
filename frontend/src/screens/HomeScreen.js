import React from 'react';
import UserStore from '../stores/UserStore';
import SubmitButton from "../components/login/SubmitButton";
import ApplyForm from '../components/home/applyform';
import PayOutstanding from '../components/home/applyform';
import '../tut.css'


function Home(props) {

    const username = props.store.username;

    return (
        <div>
            Welcome {username}

            <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={props.logOut}
            />
        <div className ="applyform">
                <div className = 'container'>
                <ApplyForm
                    />
                </div>
            </div>

            <div className ="outstanding">
                <div className = 'container'>
                <PayOutstanding
                    />
                </div>
            </div>

        
        </div>
    )
}

export default Home;
import React from 'react';
import UserStore from '../stores/UserStore';
import SubmitButton from "../components/login/SubmitButton";


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
        </div>
    )
}

export default Home;
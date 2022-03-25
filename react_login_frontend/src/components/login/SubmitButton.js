import React from 'react';
import '../../App.css';

function SubmitButton(props) {
    return (
        <div className="submitButton mar-12">
            <button
                className='btn'
                disabled={props.disabled}
                onClick={() => props.onClick()}
            >
                {props.text}
            </button>
        </div>
    );
}

export default SubmitButton;

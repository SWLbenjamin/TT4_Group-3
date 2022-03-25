import React from 'react';
import InputField from '../login/InputField';
import SubmitButton from '../login/SubmitButton';
import UserStore from '../../stores/UserStore';
import '../../tut.css';

class ApplyForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            date: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            amount: '',
            date: '',
            buttonDisabled: false
        })
    }

    

    render() {
        return (
            <div className="applyform">
                Apply Loan Here
                <InputField
                    type='number'
                    placeholder='Loan Amount'
                    value={this.state.loan ? this.state.loan : ''}
                    onChange={ (val) => this.setInputValue('loan', val) }
                />

                <InputField
                    type='date'
                    placeholder='Date'
                    value={this.state.date ? this.state.date : ''}
                    onChange={ (val) => this.setInputValue('date', val) }
                />

                <SubmitButton
                    text='Submit'
                    disabled={this.state.buttonDisabled}
                    onClick={ () => this.doLogin() }
                />

            </div>
        );
    }
}

export default ApplyForm;

import React from 'react';
import InputField from '../login/InputField';
import SubmitButton from '../login/SubmitButton';
import UserStore from '../../stores/UserStore';
import '../../tut.css';

class PayOutstanding extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            outstanding: '',
            payment: '',
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
            outstanding: '',
            payment: '',
            buttonDisabled: false
        })
    }

    

    render() {
        return (
            <div className="payoutstanding">
                Pay Outstanding Loan

                <label>
                    Pick your outstanding loan:
                    <select value = {this.state.outstanding} >
                        <option value=""></option>
                    </select>
                </label>

                <InputField
                    type='number'
                    placeholder='Loan Payment'
                    value={this.state.payment ? this.state.payment : ''}
                    onChange={ (val) => this.setInputValue('payment', val) }
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

export default PayOutstanding;

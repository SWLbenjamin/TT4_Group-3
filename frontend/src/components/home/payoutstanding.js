import React from 'react';
import InputField from '../login/InputField';
import SubmitButton from '../login/SubmitButton';
import UserStore from '../../stores/UserStore';
import '../../tut.css';
import Multiselect from 'multiselect-react-dropdown';

class PayOutstanding extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            outstanding: [1,2,3],
            payment: '',
            currentLoan: [],
            loanHistory: [],
            accBalance: [],
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

    componentDidMount() {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            this.setState({
                loanHistory: urlOneData,
                accBalance: urlTwoData
            });
        })
      }

      componentDidMount() {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts',
            {method:'GET',
            }).then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            this.setState({
                loanHistory: urlOneData,
                accBalance: urlTwoData
            });
        })
      }

    

    render() {
        
        const { posts } = this.state;        

        const { currentLoan, loanHistory, accBalance } = this.state;

        return (
            <div className="outstanding">
                Pay Outstanding Loan                
                <Multiselect
                    options={this.state.options}
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    displayValue= {this.state.outstanding} // Property name to display in the dropdown options
                />
                

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

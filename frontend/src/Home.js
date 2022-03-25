import logo from './logo.svg';
import './App.css';
import './tut.css';
import React, { Component } from 'react';
import ApplyForm from './components/home/applyform';
import PayOutstanding from './components/home/payoutstanding';
import axios from 'axios';
import JsonDataDisplayPayment from './payments'
import JsonDataDisplay from './loans'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentLoan: [],
        loanHistory: [],
        accBalance: []
      }
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

//   componentDidMount() {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//     .then(response => response.json())
//     .then(json => this.setState({ currentLoan: json }))
//   }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  render() {
    const { posts } = this.state;        

    const { currentLoan, loanHistory, accBalance } = this.state;

    return (
        <div className="app" style={{height:"auto"}}>
            <div class='container'>
                <div class='row'>
                    <h3>Dear, xxxxxx, you have a balance of $200,000.</h3>
                </div>
                <div class="row">
                    <div class="col border">
                        <p>Current Loan(s)</p>
                        <JsonDataDisplay/>  
                    </div>
                    <div class="col border" style={{width:"500px"}}>
                        <p>Loan History</p>
                        <JsonDataDisplayPayment/>  
                    </div>
                </div>
                <div class='row'>
                    <p>Forms</p>
                </div>
                <div class="row">
                    <div class="col border">
                        <p>Current Loan(s)</p>
                        <JsonDataDisplay/>  
                    </div>
                    <div class="col border" style={{width:"500px"}}>
                        <p>Loan History</p>
                        <JsonDataDisplayPayment/>  
                    </div>
                </div>
                <div class='row'>
                    {loanHistory.map((currentLoan) => (
                    <ul>
                        <li>#{currentLoan.id} {currentLoan.title}</li>
                    </ul>
                    ))}
                </div>
            </div>
        

        <hr></hr>

        <div class="ApplyOutstanding">
            <div class = "applyform">
                <ApplyForm/> 
            </div>
            <div class = "outstanding">
                <PayOutstanding/>   
            </div>
        </div>
    </div>
    );
  }
}

export default App;

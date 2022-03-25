import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import './tut.css';
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
        </div>
        // <div className="container">
        //     <div class='row'>
        //         <p>Dear xxxxx, you have a balance of $200,000</p>
        //     </div>
        //     <div className='row'>
        //         <div className='col-sm'>
        //             <JsonDataDisplayPayment/> 
        //         </div>
        //         <div className='col-sm'>

        //             {/* {posts.map((post) => (
        //             <ul>
        //                 <li>#{post.id} {post.title}</li>
        //             </ul>
        //             // <div className="card" key={post.id}>
        //             //     <div className="card-header">
        //             //     #{post.id} {post.title}
        //             //     </div>
        //             //     <div className="card-body">
        //             //     <p className="card-text">{post.body}</p>
        //             //     </div>
        //             // </div>
        //             ))} */}
        //         </div>
        //     </div>
        //     <div class='row'>
        //         <p>bottom</p>
        //     </div>
        
        // </div>
    );
  }
}

export default App;

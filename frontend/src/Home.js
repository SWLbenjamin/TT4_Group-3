import logo from './logo.svg';
import './App.css';
import './tut.css'
import React, { Component } from 'react';
import ApplyForm from './components/home/applyform';
import PayOutstanding from './components/home/payoutstanding';
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        posts: []
      }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  render() {
    const { posts } = this.state;


    return (


        <div className="container">
            <div>
                <div class='row'>
                    <p>Dear xxxxx, you have a balance of $200,000</p>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                    <div className='col-sm'>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        {/* {posts.map((post) => (
                        <ul>
                            <li>#{post.id} {post.title}</li>
                        </ul>
                        // <div className="card" key={post.id}>
                        //     <div className="card-header">
                        //     #{post.id} {post.title}
                        //     </div>
                        //     <div className="card-body">
                        //     <p className="card-text">{post.body}</p>
                        //     </div>
                        // </div>
                        ))} */}
                    </div>
                </div>
                <div class='row'>
                    <p>bottom</p>
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

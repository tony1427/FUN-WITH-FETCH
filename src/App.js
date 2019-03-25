import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user: {},    
  }

  componentDidMount() {
    console.log('The component mounted');
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => this.setState({user: json.results[0]}));
  }



  render() {
    const { name, email, picture } = this.state.user;
    return (
      <div className="App">
       <img src ={ picture ? `${picture.large}` : "Loading....."}/>
       <h1>{ name ? `${name.first}  ${name.last}` : "Loading....." }</h1>
       <h2>{email ? `${email}` : "Loading....." }</h2>
      </div>
    );
  }
}

export default App;

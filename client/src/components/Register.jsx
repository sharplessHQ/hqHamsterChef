import React from 'react';
import $ from 'jquery';
const axios = require('axios');

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key: '',
      username: '',
      password: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  register() {
    console.log("name", document.getElementById("username").value);
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log('state before register', this.state)

    axios.post('/register', data)
      .then(result => {
        console.log(result, typeof result);
        localStorage.setItem('user', this.state.username);
        this.setState({
          username: '',
          password: ''
        });
        console.log('state after register', this.state);
      })
      .catch(err => console.log('err:, err'))
  }

  render() {
    if (localStorage.getItem('user') === null) {
      return (
        <div>
        <h1>Create an account</h1>
        <h2>Please enter username and password:</h2>
        <div>
          <label htmlFor="username">Username </label>
          <input type="text" id="username" className="register" name="username" value ={this.state.username} onChange={this.handleInputChange.bind(this)}></input><br></br>
          <label htmlFor="password">Password </label>
          <input type="text" id="password" className="register" name="password" value ={this.state.password} onChange={this.handleInputChange.bind(this)}></input><br></br>
          <button id="register-Btn" className="register-Btn" onClick={this.register.bind(this)}>Register {'\uD83D\uDC39'}</button>
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <h1>Login</h1>
          <h2>Please enter your password:</h2>
          <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" className="register" name="username" value ={this.state.username} onChange={this.handleInputChange.bind(this)}></input><br></br>
            <label htmlFor="password">Password </label>
            <input type="text" id="password" className="register" name="password" value ={this.state.password} onChange={this.handleInputChange.bind(this)}></input><br></br>
            <button id="register-Btn" className="register-Btn" onClick={this.register.bind(this)}>Login {'\uD83D\uDC39'}</button>
          </div>
        </div>
      )
    }
  }
}

export default Register;

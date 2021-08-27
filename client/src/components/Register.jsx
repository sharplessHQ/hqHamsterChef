import React from 'react';
import $ from 'jquery';
const axios = require('axios');

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (localStorage.getItem('user') === null) {
      return (
        <div>
          <h1>Register or Login</h1>
          <h2>Please enter username and password:</h2>
          <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" className="register" name="username" value ={this.props.username} onChange={this.props.handleRegister}></input><br></br>
            <label htmlFor="password">Password </label>
            <input type="text" id="password" className="register" name="password" value ={this.props.password} onChange={this.props.handleRegister}></input><br></br>
            <button id="register-Btn" className="register-Btn" onClick={this.props.register}>Register {'\uD83D\uDC39'}</button>
            <button id="register-Btn" className="register-Btn" onClick={this.props.login}>Login {'\uD83D\uDC39'}</button>
          </div>
          <h2>{this.props.message}</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Login</h1>
          <h2>Please Login or register with a different username</h2>
          <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" className="register" name="username" placeholder={`${this.props.username} ( \uD83D\uDC39 Different user? Change here)`} onChange={this.props.handleRegister}></input><br></br>
            <label htmlFor="password">Password </label>
            <input type="text" id="password" className="register" name="password" value ={this.props.password} onChange={this.props.handleLogin}></input><br></br>
            <button id="register-Btn" className="register-Btn" onClick={this.props.login}>Login {'\uD83D\uDC39'}</button>
            <button id="register-Btn" className="register-Btn" onClick={this.props.toRegister}>Register {'\uD83D\uDC39'}</button>
          </div>
          <h2>{this.props.message}</h2>
        </div>
      )
    }
  }
}

export default Register;

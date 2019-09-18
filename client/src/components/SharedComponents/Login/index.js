import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ [event.target.name]: value })
  }

  submit = event => {
    event.preventDefault()
    const { email, password } = this.state
    axios
      .post(`/api/login`, {
        email,
        password
      })
      .then(res => {
        if (res.data.status === 'failed') {
          alert(res.data.message)
        } else {
          this.props.history.goBack()
        }
      })
      .catch(err => console.log(err.status))
  }

  render() {
    const { email, password } = this.state
    return (
      <form className="login-form">
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <p>
          If you dont have an account please click
          <a href="/signup">SingUp</a>
        </p>
        <button
          className="login-button"
          id="login"
          type="submit"
          value="Submit"
          onClick={this.submit}
        >
          Login
        </button>
      </form>
    )
  }
}
export default Login

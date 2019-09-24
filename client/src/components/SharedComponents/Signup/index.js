import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayBio: false,
    type: '',
    availability: '',
    photo: '',
    age: '',
    description: '',
    phone: '',
    userType: 'user',
    user: 'tourist'
  }

  onChange = event => {
    const { name, value } = event.target
    console.log('llllll', name, value)

    this.setState({
      [name]: value
    })

    if (name === 'user' && value === 'tourist') {
      this.setState({ displayBio: false })
    } else if (name === 'user' && value === 'guideguide') {
      this.setState({ displayBio: true, userType: '' })
    }
  }

  validatePassword = () => {
    const pss =
      this.state.password.length > 6 &&
      this.state.password == this.state.confirmPassword
    return pss
  }

  pressButton = event => {
    event.preventDefault()
    const { history } = this.props

    const {
      email,
      name,
      password,
      type,
      availability,
      photo,
      age,
      phone,
      description,
      userType,
      confirmPassword
    } = this.state

    axios
      .post('/api/signup', {
        name,
        email,
        password,
        type,
        photo,
        description,
        availability,
        phone,
        age,
        userType
      })
      .then(history.push('/login'))
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <h1 className="signup-title">Signup</h1>

        <form className="extra">
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="Name..."
            value={this.state.name}
            required
          />

          <input
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Email..."
            value={this.state.email}
            required
          />

          <input
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Password..."
            value={this.state.password}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            placeholder="Confirm your password..."
            value={this.state.confirmPassword}
            required
          />

          {!this.validatePassword() ? (
            <div>
              <p className="validate">
                your password must be than 7 character an be same of your
                confirm password
              </p>
            </div>
          ) : (
            <div>
              <p className="true-validate">
                your password equal confirm password
              </p>
            </div>
          )}

          <div className="container">
            <fieldset className="hint">
              <p>If you signup as a guide</p>
              <p> please press guide button and fill the other section</p>

              <div>
                <label>
                  <input
                    type="radio"
                    value="guide"
                    name="user"
                    checked={this.state.user === 'guide'}
                    onChange={this.onChange}
                  />
                  guide
                </label>
                <label>
                  <input
                    type="radio"
                    value="tourist"
                    name="user"
                    checked={this.state.user === 'tourist'}
                    onChange={this.onChange}
                  />
                  Tourist
                </label>
              </div>
            </fieldset>
          </div>

          {this.state.displayBio ? (
            <div>
              <input
                type="text"
                name="type"
                onChange={this.onChange}
                value={this.state.type}
                placeholder="Language..."
                required
              />

              <input
                type="text"
                name="photo"
                onChange={this.onChange}
                value={this.state.photo}
                placeholder="Add your photo..."
                required
              />

              <input
                type="text"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
                placeholder="Description about yourself..."
                required
              />

              <input
                type="text"
                name="availability"
                onChange={this.onChange}
                value={this.state.availability}
                placeholder="Availability time..."
                required
              />
              <input
                type="text"
                name="phone"
                onChange={this.onChange}
                value={this.state.phone}
                placeholder="Phone number..."
                required
              />

              <input
                type="text"
                name="age"
                onChange={this.onChange}
                value={this.state.age}
                placeholder="Age..."
                required
              />
            </div>
          ) : (
            <div></div>
          )}
          <br />
          <button
            className="signup"
            type="submit"
            value="signup"
            name="button"
            onClick={this.pressButton}
          >
            SigUp
          </button>
        </form>
      </>
    )
  }
}

export default Signup

import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class OneGuide extends Component {
  state = {
    token: '',
    loggedIn: false,
    review: ''
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ [event.target.name]: value })
  }

  loginClick = () => {
    axios
      .get('/api/auth')
      .catch(() => this.props.history.push('/login'))
      .then(() => {
        if (!this.state.loggedIn) {
          this.setState({ loggedIn: true })
        } else {
          alert('feature is still in progress')
        }
      })
  }

  render() {
    const { guide } = this.props
    if (guide) {
      return (
        <Fragment>
          <div className="guide-container">
            <img className="guide-img" src={guide.photo} />
            <h5>{guide.name}</h5>
            <p>{guide.description}</p>
            <h5>{guide.phone}</h5>
            <h5>{guide.email}</h5>
            <h5>{guide.type}</h5>
          </div>
          {this.state.loggedIn && (
            <input
              className="write-review-guide"
              value={this.state.review}
              placeholder="Write a review here please"
              name="review"
              onChange={this.handleChange}
              onClick={this.addReview}
            ></input>
          )}
          <button className="add-review-guide" onClick={this.loginClick}>
            Add Review
          </button>
        </Fragment>
      )
    }
    return <div>loading</div>
  }
}
export default withRouter(OneGuide)

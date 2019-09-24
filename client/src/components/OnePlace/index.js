import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

class OnePlace extends Component {
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
    const { place } = this.props
    if (place) {
      return (
        <Fragment>
          <div>
            <div>
              <img src={`${place.image1}`} className="img1" />
            </div>
            <div className="place-information">
              <h2 className="place-name">{place.name}</h2>

              <h2 className="place-availibility">
                Availability Time : {place.availability}
              </h2>
              <h2 className="place-price">
                Transportation Price : {place.price}
              </h2>
              <p className="place-description">{place.description}</p>
              <div>
                <img src={`${place.image2}`} className="description-image" />
                <img src={`${place.image3}`} className="description-image" />
              </div>
            </div>
            {this.state.loggedIn && (
              <input
                className="write-review"
                value={this.state.review}
                placeholder="Write a review here please"
                name="review"
                onChange={this.handleChange}
                onClick={this.addReview}
              />
            )}
            <button className="add-review" onClick={this.loginClick}>
              Add Review
            </button>
          </div>
        </Fragment>
      )
    }
    return <div>loading</div>
  }
}

export default withRouter(OnePlace)

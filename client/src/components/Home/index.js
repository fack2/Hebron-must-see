import React, { Component } from 'react'
import './style.css'

class Home extends Component {
  placesClick = () => {
    this.props.history.push('/places')
  }

  render() {
    return (
      <div>
        <h2 className="city-name">Hebron (Al-khalil)</h2>
        <p className="city-description">
          Hebron is considered one of the oldest towns in the world. Muslims
          initially called the city Masjid Ibrahim (Ibrahim’s Mosque), as it was
          said that Ibrahim (Abraham) was buried there in the Cave of the
          Patriarchs, together with his son Ishaq (Isaac) and grandson Yaqub
          (Jacob), and their respective wives, Sarah, Rebecca, and Leah. Ibrahim
          was said to be an ancestor of the Prophet Muhammad. Ibrahim is
          considered to mean ‘Friend (Khalil) of God’ by Muslims. Traditionally,
          Palestinians used to refer to the city by the same name.
        </p>
        <iframe
          width="370"
          height="300"
          src="https://www.youtube.com/embed/h1bVr3rk1zA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <button className="discover" onClick={this.placesClick}>
            Discover The Places
          </button>
        </div>
      </div>
    )
  }
}

export default Home

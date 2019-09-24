import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import logo from '../../../assets/newLogo.png'

const NavBar = () => (
  <React.Fragment>
    <nav className="navbar">
      <div className="dropdown">
        <img
          alt="menu"
          className="menu"
          src="https://www.malavasig.it/WP/wp-content/uploads/2017/09/mobile_menu.png"
        />
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/places">Places</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/arabic-words">Arabic Words</Link>
        </div>
      </div>
      <img className="logo" alt="logo" src={logo} />
      <h1 className="app-title">HEBRON MUST-SEE</h1>
    </nav>
  </React.Fragment>
)

export default NavBar

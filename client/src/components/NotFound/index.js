import React from 'react'
import './style.css'

const Notfound = () => {
  return (
    <div className="not-found">
      <h1>
        OOPs! <br />
      </h1>
      <h5 classNAme="not-found-message">
        We can't find the page you are looking for, you can go to home page to
        find details <span> </span>
        <a classeName="not-found-anchor" href="/home">
          Home
        </a>
      </h5>
    </div>
  )
}
export default Notfound

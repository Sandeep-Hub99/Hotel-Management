import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1><i class="fa fa-bed" aria-hidden="true" />
          Hotel Manegement
        </h1>
        <p>Made with by Sandeep Sabat</p>
      </div>
      <ul>
        <li>Hello, Idrees</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link" exact>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" exact>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" exact>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    )
}

import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
         <header className="header">
        <div className="container">
          <div className="header__parents">
            <div className="logo">
              <h1>CO</h1>
            </div>
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <a href="#">Color Oracle</a>
                </li>
                <li>
                  <a href="#">How To</a>
                </li>
                <li>
                  <a href="#">Manual</a>
                </li>
                <li>
                  <a href="#">Design Tips</a>
                </li>
                <li>
                  <a href="#">Useful Links</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

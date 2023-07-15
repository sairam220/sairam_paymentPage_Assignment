import {Component} from 'react'
import LOGO from '../../Images/LOGO.png'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <div className="logo">
          <a href="/">
            <img src={LOGO} alt="logo" />
          </a>
        </div>
        <div className="nav-items">
          <li>
            <a href="course">Courses</a>
          </li>
          <i className="fa-solid fa-angle-down">.</i>
          <li>
            <a href="programs">Programs</a>
          </li>
          <i className="fa-solid fa-angle-down">.</i>
        </div>
        <ul className="nav__list">
          <i className="fa-solid fa-magnifying-glass">.</i>
          <li className="nav__item login-button">
            <a href="login" className="nav__link">
              Log in
            </a>
          </li>
          <li className="nav__item login-button">
            <a href="joinNow" className="nav__link2 nav__link--button">
              JOIN NOW
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header

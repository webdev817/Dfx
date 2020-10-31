import React from 'react'
import { NavLink } from 'react-router-dom'

const handleSearch = (e) => {
  e.preventDefault()
  const search = e.target.elements.search.value.trim()
}

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <img className="header__logo--img" alt="Dashboard FX Logo" src="./images/logo.png" />
    </div>
    <div className="header__form">
      <form onSubmit={handleSearch}>
        <input className="header__input header__input--no-outline" type="search" results="0" name="search" placeholder="Search for Lessons or Mentors" />
      </form>
    </div>
    <div className="header__navigation">
      <NavLink to="/" className="link header__link" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/about" className="link header__link" activeClassName="is-active">About Us</NavLink>
      <NavLink to="/contact" className="link header__link" activeClassName="is-active">Contact Us</NavLink>
      <NavLink to="/signin" className="link header__link" activeClassName="is-active">Sign In</NavLink>
      <NavLink to="/register" className="header__navigation--join">Join</NavLink>
    </div>
  </div>
)

export default Header
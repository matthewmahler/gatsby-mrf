import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={props.icon} className="icon" alt="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>{props.title}</h1>
        <h2>
          {props.subtitle} <br />
          <span>{props.callToAction}</span>
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        <li
          onClick={() => {
            props.onOpenArticle('music')
          }}
        >
          Music
        </li>
        <li
          onClick={() => {
            props.onOpenArticle('media')
          }}
        >
          Media
        </li>
        <li
          onClick={() => {
            props.onOpenArticle('about')
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            props.onOpenArticle('contact')
          }}
        >
          contact
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

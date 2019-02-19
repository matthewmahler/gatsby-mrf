import React from 'react'
import PropTypes from 'prop-types'
import icon from '../images/mrf-icon.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={icon} className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>My Rising Fall</h1>
        <h2>
          The Hate You Hold EP <br />
          Available <span>4/20/69</span>
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('music')
            }}
          >
            Music
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('media')
            }}
          >
            Media
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('social')
            }}
          >
            Social
          </a>
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

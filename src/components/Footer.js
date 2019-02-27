import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; My Rising Fall 2019</p>
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/myrisingfall?lang=en"
          className="icon fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/MyRisingFall/"
          className="icon fa-facebook"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/myrisingfallsucks/"
          className="icon fa-instagram"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
    </ul>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

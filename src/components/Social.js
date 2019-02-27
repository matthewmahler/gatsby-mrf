import React from 'react'

const Social = () => {
  return (
    <div>
      <h2 className="major">social</h2>
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
    </div>
  )
}

export default Social

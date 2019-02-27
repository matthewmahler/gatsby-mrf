import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="major">contact us</h2>
      <form action="https://formspree.io/myrisingfall@gmail.com" method="POST">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact

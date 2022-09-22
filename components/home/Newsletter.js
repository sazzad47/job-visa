import React from 'react'

const Newsletter = () => {
  return (
    <section>
    <div className="container">
      <div className="newsletter">
        <h2>Our Newsletter</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatum, deleniti.
        </p>

        <div className="newsletter__input">
          <input type="text" placeholder="Enter your email..." />
          <button className="btn subs__btn">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter

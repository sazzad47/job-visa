import React from 'react'

const Counter = () => {
  return (
    <section>
      <div className="container">
        <div className="counter__wrapper">
          <div className="counter__item">
            <span className="counter__number">130+</span>
            <h5 className="counter__text">Happy Clients</h5>
          </div>

          <div className="counter__item">
            <span className="counter__number">100+</span>
            <h5 className="counter__text">Projects Completed</h5>
          </div>

          <div className="counter__item">
            <span className="counter__number">20+</span>
            <h5 className="counter__text">Win Awards</h5>
          </div>

          <div className="counter__item">
            <span className="counter__number">25+</span>
            <h5 className="counter__text">Team Members</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter

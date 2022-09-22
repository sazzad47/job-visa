import Image from 'next/image'
import React from 'react'
import ava from '../../public/images/demos/ava-1.jpg'

const Review = () => {
  return (
    <section>
      <div className="container">
        <div className="customer__review-wrapper">
          <div className="customer__review-top">
            <h2>What Our Customers Say</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Tempore laboriosam, quam porro nulla quos itaque.
            </p>
          </div>

          <div className="slider">
            <div className="slider__img-wrapper">
              <Image className='img-review' src={ava} alt="" />
              
            </div>

            <div className="slider__content">
              <div className="rating">
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
                <span><i className="ri-star-fill"></i></span>
              </div>

              <p className="review__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga animi consequuntur dignissimos cumque est ducimus dicta
                eveniet doloremque nemo!
              </p>

              <h5 className="customer__name">Jhon Doe</h5>
              <p className="customer__title">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review

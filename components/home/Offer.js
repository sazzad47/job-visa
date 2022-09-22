import Image from 'next/image'
import React from 'react'
import seo from '../../public/images/demos/seo.png'
import letter from '../../public/images/demos/letter.png'
import growth from '../../public/images/demos/growth.png'
import ppc from '../../public/images/demos/ppc.png'
import automation from '../../public/images/demos/automation.png'

const Offer = () => {
  return (
    <section>
      <div className="container">
        <div className="choose__us-top">
          <h2>What We Offer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Ab fugiat fuga tenetur adipisci nobis aperiam.
          </p>
        </div>

        <div className="offer__wrapper">
          
          <div className="offer__box">
            <Image src={letter} alt="" />
            <h4>Visa Loan</h4>
          </div>

          <div className="offer__box">
            <Image src={growth} alt="" />
            <h4>Lorem ipsum</h4>
          </div>

          <div className="offer__box">
            <Image src={ppc} alt="" />
            <h4>Lorem ipsum</h4>
          </div>

          <div className="offer__box">
            <Image src={automation} alt="" />
            <h4>Lorem ipsum</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer

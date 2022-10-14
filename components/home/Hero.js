import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import homeImg from '../../public/images/demos/airplane.png'

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              minus, pariatur voluptatum aliquam eos et.
            </p>
            <div>

            <Link href="/apply/visa"><button className="btn">Get Visa</button></Link>
            
            </div>
          </div>

          <div className="hero__img">
            <Image src={homeImg} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

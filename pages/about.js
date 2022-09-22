import Image from 'next/image'
import React from 'react'
import about from '../public/images/demos/about.png'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="search__engine-wrapper about__us">
          <div className="search__engine-content">
            
            <h2 style={{color:'black'}}>Lorem ipsum dolor sit</h2>
            <p style={{color:'black'}} className="search__engine-text02">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laudantium officiis itaque magnam modi ipsum laboriosam quia
              temporibus minima dignissimos. Quaerat ipsum odio corporis dolore
              expedita esse est officia dolores.
            </p>
            <p style={{color:'black'}} className="search__engine-text02">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laudantium officiis itaque magnam modi ipsum laboriosam quia
              temporibus minima dignissimos. Quaerat ipsum odio corporis dolore
              expedita esse est officia dolores.
            </p>
            <p style={{color:'black'}} className="search__engine-text02">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laudantium officiis itaque magnam modi ipsum laboriosam quia
              temporibus minima dignissimos. Quaerat ipsum odio corporis dolore
              expedita esse est officia dolores.
            </p>

            
          </div>

          <div className="search__img about__img d-flex justify-content-center">
            <Image src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

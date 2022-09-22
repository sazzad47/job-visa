import Image from 'next/image'
import React from 'react'
import contactImg from '../public/images/demos/about.png'

const Contact = () => {
  return (
    <section className="contact" id="contact">

    <div className="container">
    <div className="choose__us-top">
          <h2 style={{color:'black'}}>Contact Us</h2>
          <p style={{color:'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Ab fugiat fuga tenetur adipisci nobis aperiam.
          </p>
        </div>
        <div className="search__engine-wrapper about__us">
          <div className="search__img" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Image src={contactImg} alt="" />
          </div>

          <div className="search__engine-content">
            <h2>Get in touch with us</h2>
            <form className='contact-form about__us'>
                <div className='contact-input-box'>

                    <input className='contact-input'/>
                    <label>Name</label>
                </div>
                <div className='contact-input-box'>

                    <input className='contact-input'/>
                    <label>Email</label>
                </div>
                <div className='contact-input-box'>

                    <input className='contact-input'/>
                    <label>Phone</label>
                </div>
                <div className='contact-input-box'>

                    <textarea className='contact-textarea' required name="" id="" cols="30" rows="5"></textarea>
                    <label>Message</label>
                </div>
            <button className="btn">Send Message</button>
            </form>

          </div>
        </div>
      </div>

</section>
  )
}

export default Contact

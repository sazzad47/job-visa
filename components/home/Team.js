import Image from 'next/image'
import React from 'react'
import ava from '../../public/images/demos/ava-1.jpg'

const Team = () => {
  return (
    <section>
      <div className="container">
        <div className="our__team-wrapper">
          <div className="our__team-top">
            <h2>Meet Our Executive Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Repellendus deleniti sapiente aut quas dolorem! Dolorum?
            </p>
          </div>

          <div className="team__list">
            <div className="single__team">
              <div className="single__team-img">
                <Image src={ava} alt="" />
              </div>
              <div className="single__team-content">
                <h5>Usman Gani</h5>
                <p>Director</p>

                <div className="social__icons">
                  <span><i className="ri-facebook-line"></i></span>
                  <span><i className="ri-linkedin-line"></i></span>
                  <span><i className="ri-instagram-line"></i></span>
                  <span><i className="ri-twitter-line"></i></span>
                </div>
              </div>
            </div>

            <div className="single__team">
              <div className="single__team-img">
                <Image src={ava} alt="" />
              </div>
              <div className="single__team-content">
                <h5>Usman Gani</h5>
                <p>Director</p>

                <div className="social__icons">
                  <span><i className="ri-facebook-line"></i></span>
                  <span><i className="ri-linkedin-line"></i></span>
                  <span><i className="ri-instagram-line"></i></span>
                  <span><i className="ri-twitter-line"></i></span>
                </div>
              </div>
            </div>

            <div className="single__team">
              <div className="single__team-img">
                <Image src={ava} alt="" />
              </div>
              <div className="single__team-content">
                <h5>Usman Gani</h5>
                <p>Director</p>

                <div className="social__icons">
                  <span><i className="ri-facebook-line"></i></span>
                  <span><i className="ri-linkedin-line"></i></span>
                  <span><i className="ri-instagram-line"></i></span>
                  <span><i className="ri-twitter-line"></i></span>
                </div>
              </div>
            </div>

            <div className="single__team">
              <div className="single__team-img">
                <Image src={ava} alt="" />
              </div>
              <div className="single__team-content">
                <h5>Usman Gani</h5>
                <p>Director</p>

                <div className="social__icons">
                  <span><i className="ri-facebook-line"></i></span>
                  <span><i className="ri-linkedin-line"></i></span>
                  <span><i className="ri-instagram-line"></i></span>
                  <span><i className="ri-twitter-line"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

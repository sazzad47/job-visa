import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__item-01">
              <h2>Logo</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid dignissimos perspiciatis itaque ipsa pariatur placeat?
              </p>
              <div className="footer__icon">
                <span><i className="ri-facebook-line"></i></span>
                <span><i className="ri-linkedin-line"></i></span>
                <span><i className="ri-instagram-line"></i></span>
                <span><i className="ri-twitter-line"></i></span>
              </div>
            </div>

            <div className="footer__item-02">
              <h4>Contact</h4>
              <p>250, Dhaka, Bangladesh</p>
              <p className="contact__number">
                <span><i className="ri-phone-line"></i></span> +9855953994
              </p>
              <p className="contact__number">
                <span><i className="ri-map-pin-2-line"></i></span> Dhaka,
                Bangladesh
              </p>
            </div>

            <div className="footer__item-03">
              <h4>Viewer Guide</h4>
              <ul className="quick__list">
                <li><a href="#">Feature</a></li>
                <li><a href="#">Blog Post</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Help & Support</a></li>
              </ul>
            </div>

            <div className="footer__item-03">
              <h4>Community</h4>
              <ul className="quick__list">
                <li><a href="#">About us</a></li>
                <li><a href="#">Our clients</a></li>
                <li><a href="#">Legal Notice</a></li>
               
              </ul>
            </div>
            </div>

            <div className="footer__bottom">
              @Copyright 2022, designed and developed by Novage.
            </div>
          </div>
        </div>
     
      
    </div>
  )
}

export default Footer

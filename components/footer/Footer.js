import Link from 'next/link'
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
                <li><Link href="/terms-&-conditions"><a>Terms & Conditions</a></Link></li>
                <li><Link href="/cookies"><a>Cookies</a></Link></li>
                <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                <li><Link href="/help"><a>Help & Support</a></Link></li>
              </ul>
            </div>

            <div className="footer__item-03">
              <h4>Community</h4>
              <ul className="quick__list">
                <li><Link href="/about"><a>About us</a></Link></li>
                <li><Link href="/legal-notice"><a>Legal Notice</a></Link></li>
                <li><Link href="/accessibility-statement"><a>Accessibility Statement</a></Link></li>
               
              </ul>
            </div>
            </div>

            <div className="footer__bottom">
              @Copyright 2022, Designed and Developed by Novage.
            </div>
          </div>
        </div>
     
      
    </div>
  )
}

export default Footer

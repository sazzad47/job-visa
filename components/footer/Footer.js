import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer_container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
           
            <li><Link href="/about"><a>about us</a></Link></li>
            <li><Link href="/terms-&-conditions"><a>Terms & Conditions</a></Link></li>
            <li><Link href="/cookies"><a>Cookies</a></Link></li>
            <li><Link href="/privacy-policy"><a>privacy policy</a></Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>customer</h4>
          <ul>
           
            <li><Link href="/help"><a>help & support</a></Link></li>
            <li><Link href="/legal-notice"><a>Legal notice</a></Link></li>
            <li><Link href="/contact"><a>contact</a></Link></li>
            <li><Link href="/accessibility-statement"><a>accessibilty statement</a></Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>services</h4>
          <ul>
           
            <li><Link href="/apply/visa"><a>apply for visa</a></Link></li>
            <li><Link href="/apply/jobs"><a>apply for job</a></Link></li>
            <li><Link href="/apply/visaLoan"><a>apply for loan</a></Link></li>
            <li><Link href="/services"><a>services</a></Link></li>
            
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://web.facebook.com/profile.php?id=100085152624717" target="blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://web.facebook.com/profile.php?id=100085152624717" target="blank"><i className="fab fa-twitter"></i></a>
            <a href="https://web.facebook.com/profile.php?id=100085152624717" target="blank"><i className="fab fa-instagram"></i></a>
            <a href="https://web.facebook.com/profile.php?id=100085152624717" target="blank"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  )
}

export default Footer

import Image from 'next/image'
import React from 'react'
import seo from '../../public/images/demos/seo.png'
import letter from '../../public/images/demos/letter.png'
import growth from '../../public/images/demos/growth.png'
import ppc from '../../public/images/demos/ppc.png'
import automation from '../../public/images/demos/automation.png'
import Link from 'next/link'

const Offer = () => {
  return (
    <section>
      <div className="container offer_section">
        
        <div className="customer__review_top">
            <h2>What We Offer</h2>
          </div>
        <div className="offer__wrapper">
          
          <div className="offer__box">
            <div className='offer_front'>
               <Image src={letter} alt="" />
            </div>
            <div className='offer_content'>
               <h4>Visa Loan</h4>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
               </p>
               <Link href="/services"><button>Read more</button></Link>
            </div>
          </div>
          <div className="offer__box">
            <div className='offer_front'>
               <Image src={growth} alt="" />
            </div>
            <div className='offer_content'>
               <h4>Visa Loan</h4>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
               </p>
               <Link href="/services"><button>Read more</button></Link>
            </div>
          </div>
          <div className="offer__box">
            <div className='offer_front'>
               <Image src={ppc} alt="" />
            </div>
            <div className='offer_content'>
               <h4>Visa Loan</h4>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
               </p>
               <Link href="/services"><button>Read more</button></Link>
            </div>
          </div>
          <div className="offer__box">
            <div className='offer_front'>
               <Image src={automation} alt="" />
            </div>
            <div className='offer_content'>
               <h4>Visa Loan</h4>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
               </p>
               <Link href="/services"><button>Read more</button></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Offer

import React from 'react'
import award from '../../public/images/demos/award.png'
import idea from '../../public/images/demos/idea.png'
import handshake from '../../public/images/demos/handshake.png'
import designThinking from '../../public/images/demos/design-thinking.png'
import Image from 'next/image'

const Choose = () => {
  return (
    <section>
      <div className="container">
       
        <div className="customer__review_top">
            <h2>Why Choose us</h2>
          </div>
        <div className="choose__us-wrapper">
          <div className="choose__us-box">
            <div className="choose__img">
              <Image src={award} alt="" />
            </div>
            <div className="choose__us-content">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
              </p>
            </div>
          </div>

          <div className="choose__us-box">
            <div className="choose__img">
              <Image src={idea} alt="" />
            </div>
            <div className="choose__us-content">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
              </p>
            </div>
          </div>

          <div className="choose__us-box">
            <div className="choose__img">
              <Image src={handshake} alt="" />
            </div>
            <div className="choose__us-content">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
              </p>
            </div>
          </div>

          <div className="choose__us-box">
            <div className="choose__img">
              <Image src={designThinking} alt="" />
            </div>
            <div className="choose__us-content">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                ipsam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose

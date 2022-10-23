import React, { useRef } from "react";
import Image from "next/image";
import ava from "../../public/images/demos/ava-1.jpg";
import upArrow from "../../public/up-arrow.png";
import downArrow from "../../public/down-arrow.png";

const Review = () => {
  const slide = useRef(null);
  let x = 0;
  const moveUp = () => {
    if (x > "-900") {
      x = x - 300;
      slide.current.style.top = x + "px";
    }
  };
  const moveDown = () => {
    if (x < 0) {
      x = x + 300;
      slide.current.style.top = x + "px";
    }
  };
  return (
    <section>
      <div className="container">
        <div className="customer__review_wrapper">
          <div className="customer__review_top">
            <h2>What Our Customers Say</h2>
          </div>
          <div className="review_box">
            <div id="slide" ref={slide}>
              <div className="review_card">
                <div className="profile">
                  <div className="img">
                    <Image width="100%" height="100%" src={ava} alt="" />
                  </div>
                  <div>
                    <h3>Jhon Doe</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga animi consequuntur dignissimos cumque est ducimus dicta
                  eveniet doloremque nemo!
                </p>
              </div>
              <div className="review_card">
                <div className="profile">
                  <div className="img">
                    <Image width="100%" height="100%" src={ava} alt="" />
                  </div>
                  <div>
                    <h3>Amir Khan</h3>
                    <p>Web Designer</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga animi consequuntur dignissimos cumque est ducimus dicta
                  eveniet doloremque nemo!
                </p>
              </div>
              <div className="review_card">
                <div className="profile">
                  <div className="img">
                    <Image width="100%" height="100%" src={ava} alt="" />
                  </div>
                  <div>
                    <h3>Hasan Jamil</h3>
                    <p>Graphics Designer</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga animi consequuntur dignissimos cumque est ducimus dicta
                  eveniet doloremque nemo!
                </p>
              </div>
              <div className="review_card">
                <div className="profile">
                  <div className="img">
                    <Image width="100%" height="100%" src={ava} alt="" />
                  </div>
                  <div>
                    <h3>Misbah Amin</h3>
                    <p>Digital Marketer</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga animi consequuntur dignissimos cumque est ducimus dicta
                  eveniet doloremque nemo!
                </p>
              </div>
            </div>
            <div className="review_sidebar">
              <div className="img" onClick={moveUp}>
                <Image width="100%" height="100%" src={upArrow} />
              </div>
              <div className="img" onClick={moveDown}>
                <Image width="100%" height="100%" src={downArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

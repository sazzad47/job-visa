import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import airplane from "../../public/hero/6.png";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="row">
        <div className="col-12 col-md-6 order-2 order-md-1 align-items-center align-items-md-start hero_introduction">
          <h2 className="mt-5 mt-md-0">
            <Typewriter
              options={{
                strings: [
                  "Apply for Visa",
                  "Apply for Job",
                  "Apply for Visa Loan",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Searching for visa? This is a worldwide visa portal: Learn the
            requirements and apply for a visa to any country in the world.
          </p>
          <div className="btn_container">
            <Link href="/apply/visa">
              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Visa
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 hero_img_section">
          <div className="hero_img">
            <div className="airplane_icon_container">
              <div className="airplane_icon_box">
                <Image className="airplane_icon" src={airplane} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

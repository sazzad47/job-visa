import Image from "next/image";
import Link from "next/link";
import React from "react";
import search from "../../public/images/demos/search-engine.png";

const VisaService = () => {
  return (
    <section>
      <div className="container">
        <div className="VisaService-wrapper">
          <div className="search__img">
            <Image src={search} alt="" />
          </div>
          <div className="VisaService-content">
            <h2>Get you Visa with best services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laudantium officiis itaque magnam modi ipsum laboriosam quia
              temporibus minima dignissimos. Quaerat ipsum odio corporis dolore
              expedita esse est officia dolores.
            </p>
            <p className="VisaService-text02">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              soluta vitae neque sed optio explicabo nulla omnis et nobis
              voluptates?
            </p>
            <Link href="/apply/visa">
              <button className="getVisa-btn">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaService;

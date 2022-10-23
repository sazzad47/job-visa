import Image from "next/image";
import React from "react";
import ava from "../../public/images/demos/ava-1.jpg";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Team = () => {
  return (
    <section>
      <div className="container">
        <div className="our__team-wrapper">
          <div className="customer__review_top">
            <h2>Meet Our Executive Team</h2>
          </div>
          <div className="team__list">
            <Carousel breakPoints={breakPoints}>
              <div className="single__team">
                <div className="single__team_img">
                  <Image width="100%" height="100%" src={ava} alt="" />
                </div>
                <div className="single__team-content">
                  <h5>Usman Gani</h5>
                  <p>Director</p>
                  <div className="social__icons">
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="single__team">
                <div className="single__team_img">
                  <Image width="100%" height="100%" src={ava} alt="" />
                </div>
                <div className="single__team-content">
                  <h5>Usman Gani</h5>
                  <p>Director</p>
                  <div className="social__icons">
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="single__team">
                <div className="single__team_img">
                  <Image width="100%" height="100%" src={ava} alt="" />
                </div>
                <div className="single__team-content">
                  <h5>Usman Gani</h5>
                  <p>Director</p>
                  <div className="social__icons">
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="single__team">
                <div className="single__team_img">
                  <Image width="100%" height="100%" src={ava} alt="" />
                </div>
                <div className="single__team-content">
                  <h5>Usman Gani</h5>
                  <p>Director</p>
                  <div className="social__icons">
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://web.facebook.com/profile.php?id=100085152624717"
                        target="blank"
                      >
                        <i className="ri-twitter-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

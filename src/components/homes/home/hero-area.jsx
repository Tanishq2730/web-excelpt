import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="hero-banner hero-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="banner-content">
              <h1
                className="title"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Studying  <span className="color-secondary">online</span> with <br />
                EXCEL PTE.
              </h1>
              <p
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                The most advanced AI powered practice platform for your  PTE Academic / UKVI, and PTE Core preparation.
              </p>
              <div
                className="banner-btn"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <Link href="/course-style-1">
                  <span className="edu-btn">
                    About Us <i className="icon-4"></i>
                  </span>
                </Link>
              </div>
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(25).x,
                    y: mouseReverse(25).y,
                  }}
                >
                  <img src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="banner-thumbnail">
              <div
                className="thumbnail"
                data-sal-delay="500"
                data-sal="slide-left"
                data-sal-duration="1000"
              >
                <img className="bannerImg" src="/assets/images/banner/homebanner.png" alt="Girl Image" />
              </div>
              <div
                className="instructor-info"
                data-sal-delay="600"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <div className="inner">
                  {/* <h5 className="title">Instructor</h5> */}
                  <div className="media">
                    <div className="thumb">
                      <img
                        src="/assets/images/banner/mob.png"
                        alt="Images"
                      />
                    </div>
                    {/* <div className="content">
                      <span>200+</span> Instructors
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <ul className="shape-group">
                <li
                  className="shape-1"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                >
                  <img src="/assets/images/about/shape-15.png" alt="Shape" />
                </li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseDirection(25).x,
                    y: mouseDirection(25).y,
                  }}
                >
                  <img src="/assets/images/about/shape-16.png" alt="Shape" />
                </motion.li>

                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(20).x,
                    y: mouseReverse(20).y,
                  }}
                >
                  <span className="circle-shape d-block"></span>
                </motion.li>

                <li
                  className="shape-4"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                >
                  <img
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </li>
                <motion.li
                  className="shape-5 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseReverse(25).x,
                    y: mouseReverse(25).y,
                  }}
                >
                  <img src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-6 scene"
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-duration="1000"
                  animate={{
                    x: mouseDirection(20).x,
                    y: mouseDirection(20).y,
                  }}
                >
                  <img src="/assets/images/about/shape-18.png" alt="Shape" />
                </motion.li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="shape-7">
        <img src="/assets/images/about/h-1-shape-01.png" alt="Shape" />
      </div>
    </div>
  );
};

export default HeroArea;

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/TweenMax";
import { useRef } from "react";

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { parallaxX, parallaxY } = useParallax(containerRef, 20);

  return (
    <div
      className="banner-area banner-area-2 bg-relative"
      style={{
        backgroundImage: `url("/assets/img/WhatsApp Image 2025-06-25 at 22.02.23.jpeg")`,
      }}
      ref={containerRef}
    >
      <div className="bg-overlay-gradient"></div>
      <motion.div
        animate={{ x: parallaxX * 2, y: parallaxY * 0.5 }}
        className="banner-bg-img"
        style={{ backgroundImage: `url(/assets/img/banner/4.webp)` }}
      ></motion.div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-9">
            <div className="banner-inner">
              <h4 className="sub-title">Pacific Truck School</h4>
              <h2 className="title">
                Drive into Your <span>New Career</span>
              </h2>
              <p className="content">
                Get hands-on training with certified instructors and start your
                journey toward a rewarding trucking career. Learn from the best,
                drive with confidence.
              </p>
              <div className="btn-wrap banner-2-btn">
                <Link className="it-btn btn-base" href="/admissions">
                  Get Started
                </Link>
                <Link className="it-btn btn-black" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

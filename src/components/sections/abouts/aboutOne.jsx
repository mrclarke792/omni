import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import about_4 from "../../../assets/images/about/about-4.jpg";
import about_5 from "../../../assets/images/about/about-5.jpg";
import Members from '../../../assets/icons/members';
import Technology from '../../../assets/icons/technology';
import { slideUp } from '../../../utlits/slideUp';

const AboutOne = () => {
    return (
        <>
       <section className="about-area style-2 pb-75">
  <div className="container">
    <motion.div className="row align-items-center"
      initial="offscreen"
      whileInView="onscreen"
      variants={slideUp()}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="col-lg-6">
        <div className="about-image style-2">
          <div className="image-1">
            <img src={about_4} alt="about-image" />
          </div>
          <div className="image-two">
            <img src={about_5} alt="about-image" />
          </div>
        </div>
      </div> 
      <div className="col-lg-6">
        <div className="about-content style-2">
          <div className="title">
            <span className="d-block">About Omni Digital Solutions</span>
            <h2>Your Trusted Partner for Digital Success</h2>
            <p> We’re not just a service provider—we're your Digital Partner, proudly supporting over 200 businesses across various industries. Specializing in full-stack web and app development, paid advertising, and digital automation, we deliver comprehensive digital solutions that elevate every aspect of your business online presence. Our team of expert developers, marketers, and AI specialists are committed to pushing boundaries and delivering groundbreaking results.</p>
          </div>
          <div className="content-card d-flex align-items-center">
            <div className="icon">
              <Members />
            </div>
            <div className="content">
              <h3>Global Reach</h3>
              <p>With a portfolio of over 200 businesses and counting, we craft bespoke digital strategies that position you at the forefront of your industry. Whether you’re an ambitious startup or an established enterprise, our solutions enhance your digital experience, sharpen your competitive edge, and promote sustainable growth.</p>
            </div>
          </div>
          <div className="content-card d-flex align-items-center">
            <div className="icon">
              <Technology />
            </div>
            <div className="content">
              <h3>Digital Innovation</h3>
              <p>Harnessing advanced technologies and deep market insights, we empower businesses to amplify their online presence. By increasing visibility, engagement, and conversions, we achieve measurable success that transforms digital potential into tangible results. Our expertise ensures that your business flourishes in today’s fast-paced, digital-driven landscape.</p>
            </div>
          </div>
          <Link className="default-btn text-decoration-none" to="/about">
            <i className="ri-arrow-right-line"></i>
            Get Your Free Consultation Now!
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>
        </>
    );
};

export default AboutOne;

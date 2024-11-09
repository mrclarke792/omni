import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { projectData } from '../../utlits/fackData/projectData';
import { slideUp } from '../../utlits/slideUp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import the Slider component

const ProjectOne = () => {
    const [activeIndex, setActiveIndex] = useState(5);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); // State to check if mobile
    const projectListRef = React.useRef(null); // Ref for the project list

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // Update mobile state on resize
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const slideCount = document.querySelectorAll('.main-box li').length - 1;
        const slideWidth = 100 / slideCount + '%';
        document.querySelectorAll('.box').forEach((element) => element.style.width = slideWidth);
    }, []);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const scrollRight = () => {
        if (projectListRef.current) {
            projectListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (projectListRef.current) {
            projectListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    return (
        <div className="projects-area pb-75">
            <div className="container">
                <div className="projects-section-title">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp()}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-7 col-md-8">
                            <div className="title">
                                <span className="d-block">Our Portfolio</span>
                                <h2>Celebrating Our Success: Web Development, SEO & Digital Automation Projects</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <div className="button text-end">
                                <a className="demo text-decoration-none" href="contact">Lets Talk</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="projects-box-info"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp()}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {/* Conditional rendering for mobile carousel */}
                    {isMobile ? (
                        <div className="mobile-carousel">
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                arrows={false} // Disable arrows on mobile
                                prevArrow={<span style={{ display: 'none' }} />} // Hide "Previous" text
                                nextArrow={<span style={{ display: 'none' }} />} // Hide "Next" text
                            >
                                {
                                    projectData.map(({ id, details, project_name, src, cta, url }) => (
                                        <div key={id} className={`box bg-${id}`}>
                                            <span>
                                                <img src={src} alt="projects-image" />
                                            </span>
                                            <div className="detail">
                                                <div className="content">
                                                    <h3>
                                                        <a className="text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                                                            {project_name}
                                                        </a>
                                                    </h3>
                                                    <p>{details}</p>
                                                    <a className="read-more text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                                                        {cta}
                                                        <i className="ri-arrow-right-line"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    ) : (
                        <>
                            <ul className="main-box" ref={projectListRef}>
                                {
                                    projectData.map(({ id, details, project_name, src, cta, url }) => (
                                        <li 
                                            key={id} 
                                            className={`box bg-${id} ${activeIndex === id ? 'active' : ''}`} 
                                            onMouseEnter={() => handleMouseEnter(id)}
                                        >
                                            <span>
                                                <img src={src} alt="projects-image" />
                                            </span>
                                            <div className="detail">
                                                <div className="content">
                                                    <h3>
                                                        <a className="text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                                                            {project_name}
                                                        </a>
                                                    </h3>
                                                    <p>{details}</p>
                                                    <a className="read-more text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                                                        {cta}
                                                        <i className="ri-arrow-right-line"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectOne;

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { projectData } from '../../utlits/fackData/projectData';
import { slideUp } from '../../utlits/slideUp';

const ProjectOne = () => {
    const [activeIndex, setActiveIndex] = useState(5);

    useEffect(() => {
        const slideCount = document.querySelectorAll('.main-box li').length - 1;
        const slideWidth = 100 / slideCount + '%';
        document.querySelectorAll('.box').forEach((element) => element.style.width = slideWidth);
    }, []);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
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
                                <a className="demo text-decoration-none" href="contact.html">View All Projects</a>
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
                    <ul className="main-box">
                        {
 projectData.map(({ id, details, project_name, src, cta, url }) => {
    return (
        <li key={id} className={`box bg-${id} ${activeIndex === id ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter(id)}>
            <span>
                <img src={src} alt="projects-image" />
            </span>
            <div className="detail">
                <div className="content">
                    {/* Use <a> for the project name to navigate externally */}
                    <h3>
                        <a className="text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                            {project_name}
                        </a>
                    </h3>
                    <p>{details}</p>
                    {/* Use <a> for "View Site" to navigate externally */}
                    <a className="read-more text-decoration-none" href={url} target="_blank" rel="noopener noreferrer">
                        {cta}
                        <i className="ri-arrow-right-line"></i>
                    </a>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectOne;

import React from 'react';
import { useResponsiveJSX } from "../../hooks/useResponsiveJSX";
import BannerOne from './sections/banners/bannerOne'; // Adjust the import based on your structure
import AboutOne from './sections/abouts/aboutOne';
import ServicesOne from './sections/services/servicesOne';
import ProjectOne from './sections/projectOne';
import Countter from './sections/countter';
import PricingGrid from "./sections/pricingGrid";
import TestimonialSlider from './sections/testimonialSlider';
import TeamCard from './sections/teamCard';
import BlogCard from './sections/sections/blogCard';
import PartnersSlider from './sections/partnersSlider';
import { partnerDataTwo } from './utlits/fackData/partnerDataTwo';
import { teamData } from './utlits/fackData/teamData';
import { blogData } from './utlits/fackData/blogData';
import { FaqDataOne } from './utlits/fackData/faqDataOne';
import According from './common/according';
import { motion } from 'framer-motion';
import Title from './common/title';

const ResponsiveComponents = () => {
    const breakpoint = useResponsiveJSX([600, 900, 1200]);

    return (
        <>
            {breakpoint === 0 && <div>Mobile View</div>}
            {breakpoint === 1 && (
                <>
                    <BannerOne />
                    <AboutOne />
                    <ServicesOne />
                </>
            )}
            {breakpoint === 2 && (
                <>
                    <BannerOne />
                    <AboutOne />
                    <ServicesOne />
                    <ProjectOne />
                    <Countter />
                    <PricingGrid />
                    <div className="testimonial-area pb-75">
                        <div className="container">
                            <Title sectionName={"Testimonials"} sectionTitle={"What Our Clients Say"} style={"style-2"} />
                            <TestimonialSlider />
                        </div>
                    </div>
                    <div className="team-area pb-75">
                        <div className="container">
                            <Title sectionName={"Our Team"} sectionTitle={"Meet Our Awesome Team Members"} style={"style-2"} />
                            <div className="row">
                                {teamData.slice(0, 4).map(({ id, name, position, social_media, src }) => (
                                    <motion.div key={id} className="col-lg-3 col-sm-6">
                                        <TeamCard id={id} name={name} position={position} social_media={social_media} src={src} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="blog-area pb-75 style-2">
                        <div className="container">
                            <Title sectionName={"Our Blog"} sectionTitle={"Latest Blog & Articles"} style={"style-2"} />
                            <div className="row justify-content-center">
                                {blogData.slice(0, 3).map(({ author, date, id, link, thumb, title, author_link }) => (
                                    <motion.div key={id} className="col-lg-4 col-md-6">
                                        <BlogCard author={author} date={date} author_link={author_link} link={link} style={"style-2"} thumb={thumb} title={title} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {/* Add more breakpoints if needed */}
            <div className="partner-area style-2 pb-75">
                <div className="container">
                    <PartnersSlider data={partnerDataTwo} />
                </div>
            </div>
        </>
    );
};

export default ResponsiveComponents;

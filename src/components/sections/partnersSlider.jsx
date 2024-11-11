import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PartnersSlider = ({ data }) => {
    return (
        <div className="partner-slider-info" data-cue="slideInUp">
            <div className="partner-slider">
                <Swiper
                    spaceBetween={15}
                    breakpoints={{
                        320: { slidesPerView: 1 },   // Mobile portrait
                        480: { slidesPerView: 2 },   // Mobile landscape
                        768: { slidesPerView: 3 },   // Tablet
                        1024: { slidesPerView: 4 },  // Small desktop
                        1280: { slidesPerView: 5 },  // Larger screens
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 2000,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    {
                        data.map(({ id, link, src }) => (
                            <SwiperSlide key={id}>
                                <div className="single-partner-logo">
                                    <img src={src} alt={`partner-${id}`} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default PartnersSlider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Images/image-1.png';
import img2 from '../../../assets/Images/img-2.png';
import img3 from '../../../assets/Images/img-3.png';
import img4 from '../../../assets/Images/img-4.png';
import img5 from '../../../assets/Images/img-5.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ServieceSlider.css";

// import required modules
import { Pagination } from "swiper";


const ServicesSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="grid grid-cols-1">
                    <div className="p-8">
                        <h5>Lines & Call</h5>
                        <h2>NetWork and Cabling</h2>
                    </div>
                    <div className="mt-8">
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide> <SwiperSlide className="grid grid-cols-1">
                    <div className="p-8" >
                        <h5>Lines & Call</h5>
                        <h2>NetWork and Cabling</h2>
                    </div>
                    <div className="mt-8">
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide> <SwiperSlide className="grid grid-cols-1">
                    <div className="p-8" >
                        <h5>Lines & Call</h5>
                        <h2>NetWork and Cabling</h2>
                    </div>
                    <div className="mt-8">
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="grid grid-cols-1">
                    <div className="p-8">
                        <h5>Lines & Call</h5>
                        <h2>NetWork and Cabling</h2>
                    </div>
                    <div className="mt-8">
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default ServicesSlider;
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../../assets/Images/blueHeart (1).png'
import img2 from '../../../assets/Images/redcheck.png'
import img3 from '../../../assets/Images/checked.png'
import img4 from '../../../assets/Images/m.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Awards.css";

// import required modules
import { Pagination, Navigation } from "swiper";


const Awards = () => {
    return (
        <div className="h-[400px] bg-[#F5F5F7] p-4 md:px-20 md:py-16 lg:px-44 lg:py-20">
            <h2 className='text-3xl font-semibold ml-3 mb-3'>Award winnning service. National recognition.</h2>
            <>
                <Swiper
                    breakpoints={{
                        364: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        568: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }

                    }}
                    // slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide
                        className=" grid grid-cols-1 gap-3 font-semibold  bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl">
                        <img className="logoImg" src={img3} alt="" />
                        <div className="ml-2">
                            <h4>Quality assurance</h4>
                            <h4>Only the best for you</h4>
                        </div>
                    </SwiperSlide> <SwiperSlide
                        className=" grid grid-cols-1 gap-3 font-semibold  bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl">
                        <img className="logoImg" src={img2} alt="" />
                        <div className="ml-2">
                            <h4>Price Match. <span className="text-[#EA3357]">Quality great deals promise</span></h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className=" grid grid-cols-1 gap-3 font-semibold  bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl">
                        <img className="logoImg" src={img} alt="" />
                        <div className="ml-2">
                            <h4>Customer service. <span className="text-[#528BFF]">More then just shopping</span></h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className=" grid grid-cols-1 gap-3 font-semibold  bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl">
                        <img className="logoImg" src={img4} alt="" />
                        <div className="ml-2">
                            <h4 className="text-[#E1A483]">Installation</h4>
                            <h4 >and exceed industry standard</h4>

                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
        </div>
    );
};

export default Awards;
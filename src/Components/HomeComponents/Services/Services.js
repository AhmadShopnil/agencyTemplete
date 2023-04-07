import React from 'react';
import ServicesSlider from './ServicesSlider';

const Services = () => {
    return (
        <div className='h-[600px] bg-[#F5F5F7] p-4 md:px-20 md:py-16 lg:px-44 lg:py-20 '>
            <h3 className='ml-2 mb-4 text-2xl font-semibold
             '>Services. Here where the fun begins.</h3>
            <ServicesSlider></ServicesSlider>
        </div>
    );
};

export default Services;
import React from 'react';
import img6 from '../../../assets/Images/img-6.png';
import img7 from '../../../assets/Images/img-7.png';
import img8 from '../../../assets/Images/img-8.png';
import img9 from '../../../assets/Images/img-9.png';
import img10 from '../../../assets/Images/img-10.png';


const OurClients = () => {
    return (
        <div className='bg-[#F5F5F7] p-4 md:px-20 md:py-16 lg:px-44 lg:py-20 divide-y divide-black'>
            <span></span>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-8 pt-10'>
                <div className='font-semibold text-lg tracking-tight'>
                    <h4 className=''>WE’VE BUILT</h4>
                    <h4 className=''>SOLUTIONS FOR</h4>
                </div>
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
            </div>
        </div>
    );
};

export default OurClients;
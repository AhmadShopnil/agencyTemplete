import React from 'react';
import img23 from '../../../assets/Images/img-23.jpg'
import img30 from '../../../assets/Images/img-30.jpg'
import img31 from '../../../assets/Images/img-31.jpg'
const OurBelive = () => {
    return (
        <div className=' bg-[#F5F5F7] p-4 md:px-20 md:py-16 lg:px-44 lg:py-20 '>
            <h2 className='text-3xl mb-6 font-semibold text-[#29303B]'>Our belives.<span className='text-[#888F97]'>The way we do business.</span> </h2>
            <div className='grid grid-cols-1 gap-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 rounded-xl bg-white drop-shadow-md  transition-all duration-500 hover:drop-shadow-2xl pt-8'>
                    <div className='text-center my-auto'>
                        <h3 className='text-2xl font-semibold text-[#3274F6]'>TRUST</h3>
                        <p className=' text-[#4F4F4F] text-2xl font-semibold'>We belive trust is the foundation of any lasting relationship.</p>
                    </div>
                    <img src={img23} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-6'>

                    <div className='rounded-xl bg-white drop-shadow-md  pt-10 transition-all duration-500 hover:drop-shadow-2xl text-center'>
                        <p className='text-xl font-semibold text-[#CA3254]'>PASSION</p>
                        <p className=' text-[#4F4F4F] text-2xl font-semibold'>Think bigger.</p>
                        <img className='mt-4' src={img31} alt="" />
                    </div>

                    <div className='rounded-xl bg-white drop-shadow-md  pt-10 transition-all duration-500 hover:drop-shadow-2xl '>
                        <div className='px-8'>
                            <p className='text-xl font-semibold text-[#B1ACAC]'>EXPERTISE</p>
                            <p className=' text-[#4F4F4F] text-2xl font-semibold'>Over 20 years of experience.</p>
                        </div>
                        <img className='mt-4  mx-auto h-36  mb-[-120px]' src={img30} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBelive;
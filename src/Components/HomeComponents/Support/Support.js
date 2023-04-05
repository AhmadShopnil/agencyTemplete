import React from 'react';
import helpImg from '../../../assets/Images/help1.png';
import helpImg3 from '../../../assets/Images/help3.png';
import helpImg2 from '../../../assets/Images/help2.jpg';
import helpImg5 from '../../../assets/Images/help5.jpg';
import desktop from '../../../assets/Images/desktop.png';


const Support = () => {
    return (
        <div className='bg-[#F5F5F7] p-4 md:px-20 md:py-16 lg:px-44 lg:py-20'>
            <h2 className='text-3xl font-semibold text-left mb-5'>Help is here. <span className='text-[#888F97] '> Always ready for you.</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                <div className=' h-[450px]  rounded-xl bg-white drop-shadow-md p-6  transition-all duration-500 hover:drop-shadow-2xl'>
                    <h4 className='text-[#D1526E] text-left text-lg font-semibold mb-3 '>ADVICE</h4>
                    <h4 className=' text-left text-lg text-[#6A6A6A] font-semibold'>Specialist advice</h4>
                    <div className='flex justify-center '>
                        <img className='w-80 mt-10' src={helpImg} alt="" />
                    </div>
                </div>
                <div className='grid grid-rows-2  gap-4 h-[450px]'>

                    <div className='row-span-1  rounded-xl bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl '>
                        <h4 className='text-[#6194F8] text-left text-lg font-semibold mb-3 '>TRANNING</h4>
                        <h4 className=' text-left text-lg text-[#6A6A6A] font-semibold'>100 + training videos to support you</h4>
                        <img className='w-full h-24' src={helpImg2} alt="" />
                    </div>

                    <div className='row-span-1 grid grid-cols-3    rounded-xl bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl bg-gradient-to-r from-indigo-100 via-indigo-50 to-pink-50 '>
                        <div className='col-span-2'>
                            <h4 className='text-lg font-semibold text-left mb-4 '>SUPPORT</h4>
                            <h4 className='text-lg font-semibold text-left text-[#565657]'>Log a ticket in</h4>
                            <h4 className='text-lg font-semibold text-left text-[#565657]'>our customer</h4
                            ><h4 className='text-lg font-semibold text-left text-[#565657]'>support portal</h4>
                        </div>
                        <img className='h-36 ' src={helpImg3} alt="" />
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
                <div className='grid grid-cols-2   h-full rounded-xl bg-white drop-shadow-md py-8 pl-8  transition-all duration-500 hover:drop-shadow-2xl'>
                    <div className=''>
                        <h4 className='text-lg font-semibold text-left mb-4 text-[#5FE2FF] '>MESSAGING</h4>
                        <h4 className='text-lg font-semibold text-left text-[#565657]'>Quick</h4>
                        <h4 className='text-lg font-semibold text-left text-[#565657]'>and efficent</h4
                        ><h4 className='text-lg font-semibold text-left text-[#565657]'>communication</h4>
                    </div>
                    <img className='h-36 w-64 ' src={helpImg5} alt="" />

                </div>
                <div className='grid grid-cols-2  h-full rounded-xl bg-white drop-shadow-md p-8  transition-all duration-500 hover:drop-shadow-2xl'>
                    <div className=''>
                        <h4 className='text-lg font-semibold text-left mb-4 text-[#B7B7B7] '>GUIDANCE</h4>
                        <h4 className='text-lg font-semibold text-left text-[#565657]'>User guides &</h4>
                        <h4 className='text-lg font-semibold text-left text-[#565657]'>sofwtare</h4
                        >
                    </div>
                    <img className='h-36 w-64 ' src={desktop} alt="" />

                </div>


            </div>
        </div>
    );
};

export default Support;
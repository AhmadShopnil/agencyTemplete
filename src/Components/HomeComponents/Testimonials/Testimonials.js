import React from 'react';
import img19 from '../../../assets/Images/img-19.png';

const Testimonials = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-600 to-blue-800  grid grid-cols-1 p-20'>
            <div className='mb-4 font-semibold'>
                <h2 className='text-4xl text-center text-white mb-2'>Clients testimonials</h2>
                <h4 className='text-xl text-center text-[#AFB9C7]'>Don’t just take our word for it.</h4>
            </div>
            <div className='bg-white h-96 w-3/4 mx-auto rounded-xl grid grid-cols-2'>
                <div className='p-10 font-semibold'>
                    <h3 className='text-3xl'>WEST MIDLANDS</h3>
                    <h3 className='text-3xl'>FIRE SERVICE</h3>
                </div>
                <div>
                    <img src={img19} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
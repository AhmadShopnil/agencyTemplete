import React from 'react';
import img16 from '../../../assets/Images/img-16.png';
import img15 from '../../../assets/Images/img-15.png';
import img13 from '../../../assets/Images/img-13.png';
import img12 from '../../../assets/Images/img-12.png';
import img11 from '../../../assets/Images/img-11.png';

const Partnerships = () => {
    return (
        <div className=' p-4 md:mx-20 md:my-16 lg:mx-44 lg:my-20 divide-y divide-black'>
            <span></span>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-8 pt-10'>
                <div className='font-semibold text-lg tracking-tight'>
                    <h4 className=''>WE’VE BUILT</h4>
                    <h4 className=''>SOLUTIONS FOR</h4>
                </div>
                <img src={img16} alt="" />
                <img src={img15} alt="" />
                <img src={img13} alt="" />
                <img src={img12} alt="" />
                <img src={img11} alt="" />
            </div>
        </div>
    );
};

export default Partnerships;
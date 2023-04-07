import React from 'react';
import img from '../../../assets/Images/img-32.png'
const ContactUs = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 rounded-xl bg-[#F5F5F7] py-10 md:mx-20 md:my-16 lg:mx-44 lg:my-20'>
            <div className='pl-16'>
                <h2 className='text-5xl text-[#1E2839] font-semibold '>Supporting any
                    business size</h2>
                <p className='my-4'>Our clients range from small start-up businesses who just need a phone line and broadband, right through to national retailers who require multi-site business telephone systems, lease line internet connectivity or cloud-based data networks. So we are confident we will be able to help your business.</p>
                <button class="w-32 bg-[#367CF3] border-2 text-white py-2 rounded-lg">
                    Contact Us
                </button>
            </div>
            <div className=''>
                <img className='w-[90%] h-[90%]' src={img} alt="" />
            </div>
        </div>
    );
};

export default ContactUs;
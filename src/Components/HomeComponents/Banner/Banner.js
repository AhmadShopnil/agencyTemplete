import React from 'react';
import bannerImg from '../../../assets/Images/img-17.jpg'
import TypeWriterEffect from 'react-typewriter-effect';


const Banner = () => {
    return (
        <div className='h-[550px]   flex justify-start bg-no-repeat bg-center bg-cover md:bg-contain' style={{ backgroundImage: `url(${bannerImg})`, }}>
            <div className='p-4 md:px-20 md:py-16 lg:px-44 lg:py-20'>
                <div className='w-1/2 mt-14 text-[#29303B]'>
                    <h2 className='text-start text-xl md:text-3xl font-semibold mb-2'>Midland Network</h2>
                    <h2 className='text-start text-xl md:text-3xl font-semibold '>
                        <div className='md:flex gap-2'>
                            <span>We are</span>
                            <span className='mt-1 '>
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Red Hat Display',
                                        color: '#66C4F2',
                                        fontWeight: 700,
                                        fontSize: '1em',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'Telecom Provider',
                                        'Data Cabler',
                                        'Experienced',
                                        'Engineers',

                                    ]}
                                    multiTextDelay={1000}
                                    typeSpeed={30}
                                    multiTextLoop
                                />
                            </span>
                        </div>

                    </h2>
                    <p className='text-start text-xs md:text-sm my-4'>Midland Networks started life as a telecom company and it's still the major part of our business. We have expanded our services over the years at customer request to offer related services, providing our customers with one port of call.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-4 font-semibold text-sm'>
                        <button class="w-32 border-2 text-black hover:text-[#66C4F2] hover:bg-white px-3 py-2  rounded-lg">
                            ABOUT US
                        </button>

                        <button class="w-32 bg-[#66C4F2] border-2 text-white hover:text-[#66C4F2] hover:bg-white py-2  rounded-lg">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
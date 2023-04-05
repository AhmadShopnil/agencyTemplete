import React from 'react';
import Support from '../../Components/HomeComponents/Support/Support';
import Banner from '../../Components/HomeComponents/Banner/Banner';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <Support></Support>
        </div>
    );
};

export default Home;
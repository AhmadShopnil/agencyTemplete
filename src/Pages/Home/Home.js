import React from 'react';
import Support from '../../Components/HomeComponents/Support/Support';
import Banner from '../../Components/HomeComponents/Banner/Banner';
import OurClients from '../../Components/HomeComponents/OurClients/OurClients';
import Services from '../../Components/HomeComponents/Services/Services';
import Commitment from '../../Components/HomeComponents/Commitment/Commitment';
import ContactUs from '../../Components/HomeComponents/Contact/ContactUs';
import Partnerships from '../../Components/HomeComponents/Partnerships/Partnerships';
import Testimonials from '../../Components/HomeComponents/Testimonials/Testimonials';
import Awards from '../../Components/HomeComponents/Awards/Awards';
import OurBelive from '../../Components/HomeComponents/OurBelive/OurBelive';

const Home = () => {
    return (
        <div className='mt-10 '>
            <Banner></Banner>
            <OurClients></OurClients>
            <Services></Services>
            <Support></Support>
            <Commitment></Commitment>
            <ContactUs></ContactUs>
            <Partnerships></Partnerships>
            <Testimonials></Testimonials>
            <Awards></Awards>
            <OurBelive></OurBelive>

        </div>
    );
};

export default Home;
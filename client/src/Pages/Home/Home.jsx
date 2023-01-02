import React from 'react';
import Header from '../Shared/Header/Header';
import BusinessSlider from './Business_Slider/BusinessSlider';
import HeroSection from './Hero_Section/HeroSection';
import DriveResults from './DriveResults/DriveResults';
import EceraWork from './EceraWork/EceraWork';
import ContactUs_Section from './ContactUs_Section/ContactUs_Section';
import ClientTestimonials from './ClientTestimonials/ClientTestimonials';
import Footer from '../Shared/Footer/Footer';
import PageTitle from '../Shared/PageTitle';
import ContactSideButton from '../Shared/ContactSideButton/ContactSideButton';

const Home = () => {
    return (<>
        <PageTitle title='Home' />
        <Header></Header>
        <ContactSideButton />
        <main>
            <HeroSection />
            <BusinessSlider />
            <DriveResults />
            <EceraWork />
            <ContactUs_Section />
            <ClientTestimonials />
        </main>
        <Footer />
    </>);
};

export default Home;
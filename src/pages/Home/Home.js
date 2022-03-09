import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer'

const Home = () => {

    return (
        <div>
            <NavBar />
            <HeroSection/>
            <Cards/>
            <Footer/>
        </div>
    );
}

export default Home;

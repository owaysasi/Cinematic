import React from 'react';
import CarouselP from '../../Components/CarouselP/CarouselP';
import CarouselT from '../../Components/CarouselT/CarouselT';
import CarouselU from '../../Components/CarouselU/CarouselU';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';

function Home() {
    return(
        <div className="home-cont">
            <Navbar/>
            <Header/>
            <CarouselP/>
            <CarouselT/>
            <CarouselU/>
            <Footer/>
        </div>
    );
}

export default Home;
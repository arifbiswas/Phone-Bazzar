import React from 'react';
import Announcement from '../../Announcement/Announcement';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Welcome from '../Welcome/Welcome';


const Home = () => {
    return (
        <section>
            <Announcement></Announcement>
            <Welcome></Welcome>
            <Banner></Banner>
            <Carousel></Carousel>
            <Categories></Categories>
            <Activities></Activities>
        </section>
    );
};

export default Home;
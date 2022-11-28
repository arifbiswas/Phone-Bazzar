import React from 'react';
import Announcement from '../Announcement/Announcement';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';

import Categories from '../Categories/Categories';
import Welcome from '../Welcome/Welcome';
import Advertisement from '../Advertisement/Advertisement';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Home = () => {

    const {data : advertisements=[] , refetch} = useQuery({
        queryKey : ['advertisements'],
        queryFn : ()=> axios.get('https://phone-bazaar-server-arifbiswas.vercel.app/advertisement').then(res => {
          // console.log(res.data);
          return res.data;
    
        }).catch(e => {
          console.log(e);
        })
      })
 
      

    return (
        <section>
            <Announcement></Announcement>
            <Welcome></Welcome>
            <Banner></Banner>
            {
                advertisements.length >0  && <Advertisement advertisements={advertisements}></Advertisement>
            }
            <Categories></Categories>
            <Activities></Activities>
        </section>
    );
};

export default Home;
import React  from 'react';
import './index.css';
import Banner from './components/Banner';
import Section2 from './components/Section2';
import { Gallery } from "react-grid-gallery";
 

const Home =() =>{
  return(
    <>
    <Banner/>
    <Section2/>
    <Gallery/>
    </>
  );
};
export default Home;

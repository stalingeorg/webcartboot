import React  from 'react';
import './index.css';
import Banner from './components/Banner';
import Section2 from './components/Section2';
import Video from './components/Video';
import Gallery1 from './components/Gallery';
import Swp from './components/Swp';
 

const Home =() =>{
  return(
    <>
    <Banner/>
    <Section2/>
    <Gallery1/>
    <Video/>
    <Swp/>
    </>
  );
};
export default Home;

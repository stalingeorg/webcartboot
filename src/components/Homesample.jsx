import React from 'react';
import './index.css';
import mainLogo from'./assets/images/party.jpg';
import sectionLogo from'./assets/images/section1.jpg';


var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".scroll_page"); //element

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});
  
const Home =() =>{
  return(
    <>
    <div className='container-fluid' style={{height: "100vh",background:"url('"+mainLogo+"')",backgroundSize: "cover"}}>
      <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
        <div className="col-12 text-center text-white">
          <h1 className="main_head">Secure World</h1>
          <h2 className='sub_head'>Live Young Live Free</h2>
        </div>
      </div>
    </div>
    <div className='container-fluid scroll_page' style={{height: "100vh",background:"url('"+sectionLogo+"')",backgroundSize: "cover"}}>
      <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
        <div className="col-12 text-center text-white">
          <h2 className='sub_head'><span class="entry">Way</span></h2>
          <div id='container'>
  Make 
  <div id='flip'>
    <div><div>wOrK</div></div>
    <div><div>lifeStyle</div></div>
    <div><div>Everything</div></div>
  </div>
  AweSoMe!
</div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Home;

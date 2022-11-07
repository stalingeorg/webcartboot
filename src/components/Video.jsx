import React from 'react';
import sectionLogo from'../assets/images/section1.jpg';
import '../index.css';
 
  
const Video =() =>{
  return(
    <>
    <div className='container-fluid scroll_page' style={{height: "100vh",background:"url('"+sectionLogo+"')",backgroundSize: "cover"}}>
      <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
        <div className="col-md-12 text-center text-white">
          <div className="d-flex align-items-center justify-content-center flex-column text-start">
           <div className="text-center w-50">
           <h3 className='mb-3 h1 font-weight-bold' >STREAMING, VIDEO CALLS, ONLINE GAMING & MORE</h3>
           <iframe width="100%" height="515" src="https://www.youtube.com/embed/r72GP1PIZa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Video;

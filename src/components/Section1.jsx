import React from 'react';
import '../index.css';
import sectionLogo from'../assets/images/section1.jpg';
 
  
const Section1 =() =>{
  return(
    <>
    <div className='container-fluid scroll_page' style={{height: "100vh",background:"url('"+sectionLogo+"')",backgroundSize: "cover"}}>
      <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
        <div className="col-12 text-center text-white">
          {/* <h2 className='sub_head'><span class="entry">Way</span></h2> */}
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
export default Section1;

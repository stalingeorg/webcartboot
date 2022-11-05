import React from 'react';
import '../index.css';
import sectionLogo from'../assets/images/section1.jpg';
import sideLeft from'../assets/images/sideleft.jpg';
import { Button } from 'react-bootstrap';
 
  
const Section2 =() =>{
  return(
    <>
    <div className='container-fluid scroll_page' style={{height: "100vh",background:"url('"+sectionLogo+"')",backgroundSize: "cover"}}>
      <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
        <div className="col-md-6 text-center text-white">
          <div className="d-flex align-items-center justify-content-center flex-column text-start">
           <div className="text-start w-50">
           <h3 className='mb-3' >STREAMING, VIDEO CALLS, ONLINE GAMING & MORE</h3>
            <p>With Starlink, users can engage in activities that historically have not been possible with satellite internet.

Starlink’s high-speed, low-latency service is made possible via the world’s largest constellation of highly advanced satellites operating in a low orbit around the Earth.</p>
            <Button variant="outline-light" className='px-3'>Learn more</Button>
           </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
        <div className='container-fluid scroll_page' style={{height: "100vh",background:"url('"+sideLeft+"')",backgroundSize: "cover"}}>
        <div className="row h-100 justify-content-center align-items-center" style={{background: "#0000009e"}}>
</div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Section2;

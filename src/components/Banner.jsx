import React from 'react';
import '../index.css';
import mainLogo from'../assets/images/party.jpg';
  
const Bannerhome =() =>{
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
    </>
  );
};
export default Bannerhome;

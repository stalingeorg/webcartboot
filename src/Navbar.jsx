import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Navbar.module.css';
import logoImg from './assets/images/logo.svg';
 
const navbaritems = [  
  {  
    'id': 1,   
    'link': '/ ',   
    'name': 'Home'  
  },  
  {   
    'id': 2,   
    'link': '/about',   
    'name': 'About'  
  },  
];  
const Navbar =() =>{
  
  return(
    <>
    <nav className={`navbar navbar-dark navbar-expand-lg`}  style={{position:"fixed",width: "100%",backgroundColor: "transparent"}}>
  <div className="container-fluid">
     <div className='row'>
      <div className="col-3">
      <NavLink className="navbar-brand d-md-none" to="/ ">
        <img src={logoImg} alt="" style={{width:"123px",height:"123px"}} />
      </NavLink>
      </div>
      <div className="col-9">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand d-none d-md-block" to="/ ">
        <img src={logoImg} alt="" style={{width:"123px",height:"123px"}} />
      </NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-lg-5">
       
        {navbaritems.map((navitem) => (  
             <li className={`nav-item px-4 ${Styles.navItem}`} >
          <NavLink className={(navData) => (navData.isActive ? `${Styles.menu_active} nav-link` : 'nav-link')}   to={navitem.link}>{navitem.name}</NavLink>
        </li>
            ))}   
      </ul>
    </div>
    
    </div>
  </div>
</nav>


    </>
  );
};
export default Navbar;

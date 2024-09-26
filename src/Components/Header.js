import React from 'react';
import {  useLocation } from 'react-router-dom';
import "./header.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const location = useLocation();

  return (
    // <header className="bg-blue-600 p-4 text-white">
    //   <div className="container-header mx-auto flex justify-between items-center">
       
    //       <Link to="/"> <img src='./mainlogo.png' alt='Logo' className='logo'/></Link>
        

    //     <nav>
    //       <ul className="menu">
         
      

          
      
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <header className="bg-blue-600 p-4 text-white">
        <nav className="container-header mx-auto flex justify-between items-center">
            <a className="main_logo" href="/">
                <img src="./mainlogo.png" alt="Logo"/>
            </a>
            <div className="left_nav">
                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Plan</a></li>
                    <li><a href="/about-us">About US</a></li>
                    <li><a href="/contact-us">Contact US</a></li>
                    <li><a href="/tools">Tools</a></li>
                </ul>
                <div className="language">
                    <p>EN</p>
                    <a href=""><IoMdArrowDropdown/></a>
                    {/* <ul class="language_list">
                        <li>EN</li>
                        <li>GJ</li>
                    </ul> */}
                </div>
            </div>
        </nav>
    </header>

  );
};

export default Header;

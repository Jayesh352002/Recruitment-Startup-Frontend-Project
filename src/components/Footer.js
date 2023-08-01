import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer(){
    return (
        <div
          className="container-fluid bg-dark"
          id="footer"
          style={{ textAlign: "center", padding: 100, height: 360, marginTop: 60 }}
        >
          <h2 style={{color:"white"}}>Hire Me</h2>
          <a className="navbar-brand" href="#header" style={{fontSize:20,color:"white"}}>
            Home
          </a>
          <a className="navbar-brand" href="#about" style={{ marginLeft: 30 , fontSize:20 , color:"white" }}>
            Get Started
          </a>
          <a className="navbar-brand" href="#projects" style={{ marginLeft: 30 , fontSize:20 , color:"white"}}>
            Login
          </a>
            <div>
          
          <a
            href="/"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <AiFillInstagram style={{ width: 40, height: 40, margin: 20 }} />
          </a>
          <a
            href="/"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <AiFillLinkedin style={{ width: 40, height: 40, margin: 20 }} />
          </a>
          </div>
          <p style={{color:"white" , marginTop:70}}>Copyright Hire Me by Jayesh © 2023. All rights reserved.</p>
        </div>
      );
}

export default Footer;
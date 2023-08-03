import React from "react";

function About() {
  return (
    <div className="about-section">
      <h1 className="about-title">Find your next job in 1 week</h1>

      <p className="about-p1">Showcase yourself to a curated list of top companies &</p>
      <p style={{fontSize:21 , marginTop:-16 , color: 'rgb(245, 82, 7)' }}>Get placed in top companies.</p>

      <button className="btn btn-outline-primary" type="submit" style={{marginLeft:0 , marginTop:35}}>
        Apply to Join
      </button>
      
      <p className="about-p2">100% free. It takes only 5 minutes</p>
    </div>
  );
}

export default About;

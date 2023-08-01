import React from "react";
import { CiAirportSign1 } from "react-icons/ci";
import {FaWpforms} from 'react-icons/fa';
import { CiSquareCheck } from "react-icons/ci";

function Work() {
  return (
    <div>
        <h2 style={{textAlign:"center" , marginTop:-50}}>How It Works</h2>
    <div className="work-div">
      <div className="card" style={{ width: "21rem" }}>
        <FaWpforms className="card-icons"/>
        <div className="card-body">
          <h5 className="card-title">Step 1 : Complete Profile</h5>
          <p className="card-text">
          Once you are approved, we showcase you to leading Indian technology startups
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "21rem" }}>
        <CiAirportSign1 className="card-icons"/>
        <div className="card-body">
        <h5 className="card-title">Step 2 : Receive Job Offers</h5>
          <p className="card-text">
          Companies start sending interview requests. Talk to only the ones you like.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "21rem" }}>
        <CiSquareCheck className="card-icons"/>
        <div className="card-body">
        <h5 className="card-title">Step 3 : Accept Dream Job  </h5>
          <p className="card-text">
          Compare your offers and accept the best one. Hired!
          </p>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Work;

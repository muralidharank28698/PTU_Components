import React from "react";

import "./CampusLife.css";

import img1 from "../../images/civil.jpg";
import img2 from "../../images/eie 2.jpg";
import img3 from "../../images/ece.jpg";
import img4 from "../../images/eee.jpg";
import img5 from "../../images/ecedept.jpg";

export default function CampusLifeOne() {
  return (
    <>
      <div class="parent-container">
        <div className="topic">
          <h1>Campus Life</h1>
        </div>
        <br />
        <div class="campus-container">
          <div class="col11 items">
            <img src={img1} alt="" />
          </div>
          <div class="col12 items">
            <img src={img2} alt="" />
          </div>
          <div class="col13 items">
            <img src={img3} alt="" />
          </div>

          <div class="col14 items">
            <img src={img4} alt="" />
          </div>
          <div class="col15 items">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

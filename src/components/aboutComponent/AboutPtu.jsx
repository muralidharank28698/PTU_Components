import React from "react";

import "./AboutPtu.css";

import home from "../aboutComponentImage/home.jpg";
import eie2 from "../aboutComponentImage/eie 2.jpg";
import me from "../aboutComponentImage/me.jpg";
import civil from "../aboutComponentImage/civil.jpg";
import mectro from "../aboutComponentImage/mectro.jpg";
import startup from "../aboutComponentImage/Startup.jpg";
import grad from "../aboutComponentImage/grad.jpg";
// import imgs7 from "../aboutComponentImage/eie 2.jpg";
// import imgs2 from "../aboutComponentImage/eie 2.jpg";
function AboutPtu() {
  return (
    <div className="aboutPtu">
      <div className="gridContainer">
        <div className="grid-item grid-item-1 item-1">
          <br />
          <img src={eie2} alt="" />
          <hr style={{ marginTop: "40px" }} />
        </div>
        <div className="grid-item grid-item-2 item-2 mobileView">
          <h2 className="aboutTopic">About PTU</h2>
          <p>
            Puducherry Technological University (Erstwhile Pondicherry
            Engineering College) is an Institution promoted and fully funded by
            the Government of Puducherry, India. It was established as an
            Engineering College in the year 1984 under the VII Five Year Plan.
            The college was upgraded to technological university with the
            approval of the UGC with effect from 5th September, 2020. The PTU
            was inaugurated by Shri. Venkaiah Naidu, Hon'ble Vice President,
            Govt. of India on 13.09.2021. The institution is ranked 144 in
            Engineering Category by NIRF India Rankings 2021.
          </p>
        </div>
        <div className="grid-item grid-item-3 item-3">
          <br />
          <h3>Research</h3>
          <div className="researchImage">
            <img src={mectro} alt="" />
          </div>
        </div>
        <div className="grid-item grid-item-4 item-4">
          <br />
          <img src={me} alt="" />
          <hr style={{ marginTop: "10px" }} />
        </div>
        <div className="grid-item grid-item-5 item-5">
          <img src={home} alt="" />
        </div>
        <div className="grid-item grid-item-6 item-6">
          <br />
          <h3>StartUps</h3>
          <div className="StartUpImage">
            <img src={startup} alt="" />
          </div>
        </div>
        <div className="grid-item grid-item-7 item-7">
          <br />
          <img src={civil} alt="" />
        </div>
        <div className="grid-item grid-item-8 item-8">
          <br />
          <h3>Placements</h3>
          <div className="gradImage">
            <img src={grad} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPtu;

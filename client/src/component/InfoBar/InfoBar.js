import React from "react";
import closeIcon from "../../images/closeIcon.png";

import "./InfoBar.css";

const InfoBar = () => (
   <div className="infoBar">
      <div className="leftInnerContainer">
         <h3>Chat in Sanskrit</h3>
         <a href="/">
            {" "}
            <img src={closeIcon} alt="Close" />
         </a>
      </div>
   </div>
);

export default InfoBar;

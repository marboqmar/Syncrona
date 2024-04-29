import React, { ReactElement, useState } from "react";
import styles from "../style.scss";
import colors from "../colors.scss";
import typography from "../typography.scss";


const Topbar = () => {
    const [dark,setDark] = useState(false);
    const darkmode = () => {
      setDark(!dark);
    }


  return (
    <div className="topbar">
      <input type="text" placeholder="Tittle Page" />
      <label className="switch">
      <input type="checkbox" onClick={darkmode}/>
      <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Topbar;

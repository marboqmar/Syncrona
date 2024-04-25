import React from "react";
import styles from "../style.scss";
import colors from "../colors.scss";
import typography from "../typography.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <input type="text" placeholder="Tittle Page" />
      <div className="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </div>
    </div>
  );
};

export default Topbar;

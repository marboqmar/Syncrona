import React, { ReactElement, useState } from "react";
import styles from "../style.scss";
import colors from "../colors.scss";
import typography from "../typography.scss";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const [dark, setDark] = useState(false);
  const darkmode = () => {
    setDark(!dark);
  };

  const { t, i18n } = useTranslation(["common", "list"]);

  return (
    <div className="topbar">
      <input
        type="text"
        placeholder={t("common:Tittle")}
        className="Board__Page__Tittle livvic-regular"
      />

      <div className="align__items__center">
        <button onClick={() => i18n.changeLanguage("en")} className="move__Y">
          English
        </button>
        <button onClick={() => i18n.changeLanguage("es")} className="move__Y">
          Spanish
        </button>
        <label className="switch">
          <input type="checkbox" onClick={darkmode} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Topbar;

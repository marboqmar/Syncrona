import React, { ReactElement, useState } from "react";
import styles from "../style.scss";
import colors from "../colors.scss";
import typography from "../typography.scss";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const [dark, setDark] = useState(true);
  const darkmode = () => {
    if (dark) {
      document.documentElement.style.setProperty("--color-text", "#fef5f9");
      document.documentElement.style.setProperty("--main-color", "#211C1E");
    } else {
      document.documentElement.style.setProperty("--color-text", "#211C1E");
      document.documentElement.style.setProperty("--main-color", "#fef5f9");
    }
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

      <div className="align__items__center ">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="move__Y Topbar__Options"
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="move__Y Topbar__Options"
        >
          Spanish
        </button>
        <label className="switch">
          <input type="checkbox" onClick={darkmode} />
          <span className="slider round Topbar__Options"></span>
        </label>
      </div>
    </div>
  );
};

export default Topbar;

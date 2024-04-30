import React from "react";
import { useTranslation } from "react-i18next";

const ListTitle = () => {
  const { t, i18n } = useTranslation(["common", "list"]);

  return (
    <div className="List__Title ">
      <input
        type="text"
        placeholder={t("common:Tittle")}
        className="List__Tittle--Text shadow__effect"
      />
    </div>
  );
};

export default ListTitle;

import React, { ChangeEvent, useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "./UserContext/UserContext";

interface ListTitleProps {
  title: string;
  boardId: number;
}

const ListTitle = ({ boardId, title }: ListTitleProps) => {
  const { updateBoard } = useContext(UserContext);
  const { t, i18n } = useTranslation(["common", "list"]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    updateBoard(boardId, { title: newTitle });
  };

  return (
    <div className="List__Title ">
      <input
        type="text"
        placeholder={t("common:Tittle")}
        className="List__Tittle--Text shadow__effect"
        value={title}
        onChange={handleTitleChange}
        maxLength={30}
      />
    </div>
  );
};

export default ListTitle;

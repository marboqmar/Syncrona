import React from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { UserContext } from "./UserContext/UserContext";

interface BoardTasksProps {
  tasks: string;
  boardId: number;
}

const BoardTasks = ({ boardId, tasks }: BoardTasksProps) => {
  const { updateBoard } = useContext(UserContext);
  const { t } = useTranslation(["common", "list"]);

  return (
    <div className="display__flex__between align__items__center">
      <div className="List__Card shadow__effect">
        <input
          type="text"
          placeholder={t("common:placeholder")}
          className="input width__border__box"
          style={{ width: "100%" }}
          value={tasks}
        />
      </div>
    </div>
  );
};

export default BoardTasks;

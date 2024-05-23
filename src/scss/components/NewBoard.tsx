import React, { ReactElement, useState } from "react";

import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardList from "./BoardList";
import { useTranslation } from "react-i18next";
import { UserContext } from "./UserContext/UserContext";
import { useContext } from "react";

const AddNewBoard = () => {
  const { id } = useContext(UserContext);
  const [board, setBoard] = useState<Board[]>([]);
  const createNewBoard = () => {
    const id = board.length + 1;
    const newBoard: Board = { Boards: [], id };
    setBoard([...board, newBoard]);
  };

  const handleTaskBoardID = (event: MouseEvent) => {
    createNewBoard();
  };

  const { t, i18n } = useTranslation(["common", "list"]);

  return (
    <>
      {board.map((Board) => (
        <div key={Board.id} className="List__Container ">
          <BoardList boardInfo={board} />
        </div>
      ))}
      <div
        className="  List__Container margin__bottom__auto"
        style={{ display: "inline-block" }}
      >
        <button
          style={{ width: "50%" }}
          onClick={handleTaskBoardID}
          className="padding__0 "
        >
          {t("new board")}
        </button>
      </div>
    </>
  );
};

export default AddNewBoard;

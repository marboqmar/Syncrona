import React, { ReactElement, useState } from "react";

import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardList from "./BoardList";
import { useTranslation } from "react-i18next";

const AddNewBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const createNewBoard = () => {
    const id = board.length + 1;
    const newBoard: Board = { Boards: [], id };
    setBoard([...board, newBoard]);
  };

  /*const handleTaskBoardID = (event: MouseEvent) => {
    console.log("estás cogiendo el id majo")
    createNewBoard(id);
  };*/

  const { t } = useTranslation(["common", "list"]);

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
          onClick={createNewBoard}
          className="padding__0 "
        >
          {t("new board")}
        </button>
      </div>
    </>
  );
};

export default AddNewBoard;

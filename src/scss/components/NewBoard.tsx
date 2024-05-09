import React, { ReactElement, useState } from "react";

import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardList from "./BoardList";

const AddNewBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const createNewBoard = () => {
    const id = board.length + 1;
    const newBoard: Board = { Boards: [], id };
    setBoard([...board, newBoard]);
  };

  return (
    <>
      <div className="syncrona-white ">
        {board.map((Board) => (
          <div key={Board.id} className="List__Container">
            <BoardList boardInfo={board} />
          </div>
        ))}
      </div>
      <div
        className="  List__Container margin__bottom__auto"
        style={{ display: "inline-block" }}
      >
        <button style={{ width: "100%" }} onClick={createNewBoard}>
          Add new Board
        </button>
      </div>
    </>
  );
};

export default AddNewBoard;

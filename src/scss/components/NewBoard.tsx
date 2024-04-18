import React, { ReactElement, useState } from "react";
import { Card, Paper } from "@material-ui/core";
import { ErrorTwoTone } from "@material-ui/icons";
import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardList from './BoardList'

const AddNewBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const createNewBoard = () => {
    const id = board.length + 1;
    const newBoard: Board = { Boards: [], id };
    setBoard([...board, newBoard]);
  };

  return (
    <>
      <Paper >
        {board.map((Board) => (
          <Paper key={Board.id} className="List__NewCard">
            <BoardList boardInfo={board} />
          </Paper>
        ))}
      </Paper>
      <Paper
        className="List__AddCardOrListButton"
        style={{ display: "inline-block"}}
      >
        <button style={{ width: "100%"}} onClick={createNewBoard}>
          Add new Board
        </button>
      </Paper>
    </>
  );
};

export default AddNewBoard;

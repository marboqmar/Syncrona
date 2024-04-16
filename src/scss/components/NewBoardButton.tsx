import React from "react";
import { Boards } from "./models";
import { newBoard } from "./models";

export interface AddNewBoardProp {
  boardInfo: newBoard;
}

const AddnewBoardButton = (props: AddNewBoardProp) => {
  const { boardInfo } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Add new Board"
        className="input"
        value={boardInfo}
      />
    </div>
  );
};

export default AddnewBoardButton;
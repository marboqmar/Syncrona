import React from "react";
import { Boards } from "./models";
import { Board } from "./models";
import BoardList from './BoardInfo'

export interface AddNewBoardProp {
  boardInfo: Board;
}

const AddnewBoardButton = (props: AddNewBoardProp) => {
  const { boardInfo } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Add new Board"
        className="input"
        value ={boardInfo.Boards}
        
      />
    </div>
  );
};

export default AddnewBoardButton;

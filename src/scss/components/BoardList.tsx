import React, { ReactElement, useState } from "react";
import { UserContext,  } from "./UserContext/UserContext";
import { useContext } from "react";
import { Board } from "./models";
import AddnewBoardButton from "./NewBoardButton";
import BoardInfo from "./BoardInfo";
import { useTranslation } from "react-i18next";


const BoardList = () => {
  const {boards} = useContext(UserContext);

  return (
    <>
      {boards.map((board) => (
        <div key={board.id} className="List__Container ">
          <BoardInfo board={board} />
        </div>
      ))}
      
     
    </>
  );
};

export default BoardList;

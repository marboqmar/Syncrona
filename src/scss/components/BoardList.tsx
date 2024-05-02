import React from "react";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss";
import colors from "../colors.scss";
import typography from "../typography.scss";

import AddNewBoard from "./NewBoard";
import "../colors.scss";

const BoardList = () => {
  return (
    <div className="display__flex shadow__effect align__center ">
      <div className="livvic-thin List List__Container margin__5p">
        <ListTitle />
        <BoardCard />
        <AddCardOrList />
      </div>
    </div>
  );
};

export default BoardList;

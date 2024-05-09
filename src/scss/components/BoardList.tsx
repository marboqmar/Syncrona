import React from "react";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss";
import colors from "../colors.scss";

import AddNewBoard from "./NewBoard";
import "../colors.scss";

const BoardList = () => {
  return (
    <div className="display_flex">
      <div className="List__Container">
        <div className="livvic-thin List ">
          <ListTitle />
          <BoardCard />
          <AddCardOrList />
        </div>
      </div>
    </div>
  );
};

export default BoardList;

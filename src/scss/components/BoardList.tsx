import React from "react";
import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss";
import colors from "../colors.scss";
import { Title } from "@material-ui/icons";
import AddNewBoard from "./NewBoard";
import '../colors.scss'

const BoardList = () => {
  return (
    <div className="display_flex">
      <Paper className="List__Container">
        <div className="livvic-thin List ">
          <CssBaseline />
          <ListTitle />
          <BoardCard />
          <AddCardOrList />
        </div>
       
      </Paper>

     
    </div>
  );
};

export default BoardList;

import React from "react";
import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss";
import colors from "../colors.scss";
import { Title } from "@material-ui/icons";
import AddNewBoard from "./NewBoard";

const BoardList = () => {
  return (
    <>
      <Paper className="List__Container">
        <div className="livvic-thin List ">
          <CssBaseline />
          <ListTitle />
          <BoardCard />
          <AddCardOrList />
        </div>
       
      </Paper>
      
      <Paper>
      <div className="livvic-thin List List__Container ">
          <AddNewBoard />
        </div>
      </Paper>
     
    </>
  );
};

export default BoardList;



import React from "react";
import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss"; 
import colors from "../colors.scss"; 




const BoardList = () => {
   
    return (
        <Paper className="livvic-thin Card">
            <CssBaseline/>
            <ListTitle/>
            <BoardCard/>
            <AddCardOrList/> 
        </Paper>
    );
};


const useStyle = makeStyles (theme => ({
    card: {
        width: "300px",
        background: "#EAD4DE"
    }
}))

export default BoardList;



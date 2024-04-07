

import React from "react";
import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss"; 
import colors from "../colors.scss"; 




const BoardList = () => {
   const classes= useStyle()
    return (
        <Paper className="livvic-thin Card">
            <CssBaseline/>
            <ListTitle className={}/>
            <BoardCard/>
            <AddCardOrList/> 
        </Paper>
    );
};


const useStyle = makeStyles (theme => ({
    
    title: {
        display= "flex",
        
    }
}))

export default BoardList;



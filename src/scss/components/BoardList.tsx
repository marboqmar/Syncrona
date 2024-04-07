import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";

const BoardList = () => {
    return (
        <Paper>
            <CssBaseline/>
            <ListTitle/>
            <BoardCard/>
        </Paper>
    );
}

export default BoardList;
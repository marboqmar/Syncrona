// BoardList.tsx

import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import styles from "../style.scss"; 
import colors from "../colors.scss"; 
import Colors from "../colors.scss"; 

const BoardList = () => {
    const backgroundStyle = {
        backgroundColor: (colors as any)["Syncrona-white-dark"] 
    };

    return (
        <Paper  style={backgroundStyle}>
            <CssBaseline/>
            <ListTitle/>
            <BoardCard/>
            <AddCardOrList/>
        </Paper>
    );
};

export default BoardList;



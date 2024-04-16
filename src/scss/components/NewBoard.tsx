import React, { ReactElement, useState } from "react";
import { Card, Paper } from "@material-ui/core";
import { ErrorTwoTone } from "@material-ui/icons";
import { Board } from "./models";
import AddnewBoardButton  from './NewBoardButton'




const AddNewBoard = () => {
    const [board,setBoard] = useState<Board[]> ([]);
    const createNewBoard = () => {
        const id = board.length + 1;
        const newBoard: Board = {Boards:[], id};
        setBoard([...board,newBoard]);

    }

    return (
        <>
        <Paper>
            {board.map((Board)=> (
                <Paper key={Board.id}>
                    <AddnewBoardButton boardInfo={board}/>

                </Paper>
            ))}
        </Paper>


        </>
    )

}

export default AddNewBoard;
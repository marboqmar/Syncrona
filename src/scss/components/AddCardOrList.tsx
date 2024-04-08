import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import AddCradOrListText from "./AddCardOrListText";



const AddCardOrList = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
        <Paper className="List__AddCard" onClick={open}>
        <AddCradOrListText/>
        </Paper>
        
        <Paper className="List__AddCard" onClick={!open}>
        Add Card
        </Paper>
        </>
        
        
        

    )
}


export default AddCardOrList
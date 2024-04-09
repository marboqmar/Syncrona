import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import AddCradOrListText from "./AddCardOrListText";



const AddCardOrList = () => {
    const [newCard, setNewCard] = useState(false);

    const handleAddCardClick = () => {
        setNewCard(true);
    
    return (
        <>
        <Paper className="List__AddCard" >
        <AddCradOrListText/>
        </Paper>
        
        <Paper className="List__AddCardOrListButton" style={{ display: 'inline-block' }}>
        <button style={{ width: '100%' }}>Add new Card</button>
        </Paper>

        <Paper className="List__AddCard" >
                <AddCradOrListText />
                {!setNewCard && (
                    <button onClick={handleAddCardClick}>Add new Card</button>
                )}
            </Paper>
        </>
        
        
        

    )
}


export default AddCardOrList
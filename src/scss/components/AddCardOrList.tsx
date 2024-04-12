import React, { ReactElement, useState } from "react";
import { Paper } from "@material-ui/core";
import AddCardOrListText from "./AddCardOrListText";
import { ErrorTwoTone } from "@material-ui/icons";

const AddCardOrList = () => {
  const [NewCard,setNewCard] = useState<ReactElement[]> ([]);
  const createNewCard = ( ) => {
  const id = NewCard.length + 1;
  const newCard = <AddCardOrListText  key={id}/>;
  setNewCard([...NewCard,newCard]);


  };
  return (
    <>
      <Paper className="List__AddCard">
        <AddCardOrListText />
      </Paper>

      <Paper >
      {NewCard.map((component) => (
        <Paper key={component.key}>{component}</Paper>
      ))}

      </Paper>
      
      <Paper
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        
        <button style={{ width: "100%" }} onClick={createNewCard}>Add new Card</button>
      </Paper>
    </>
  );
};

export default AddCardOrList;

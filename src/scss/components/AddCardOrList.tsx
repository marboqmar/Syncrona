import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import AddCardOrListText from "./AddCardOrListText";
import { ErrorTwoTone } from "@material-ui/icons";

const AddCardOrList = () => {
  const [Newbutton,setNewButton] = useState (false);
  const createNewButton = ( ) => {
    setNewButton(true);
  };
  return (
    <>
      <Paper className="List__AddCard">
        <AddCardOrListText />
      </Paper>

      <Paper >
      {Newbutton ? <AddCardOrListText /> : null}
      </Paper>
      <Paper
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        
        <button style={{ width: "100%" }} onClick={createNewButton}>Add new Card</button>
      </Paper>
    </>
  );
};

export default AddCardOrList;

import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import AddCardOrListText from "./AddCardOrListText";

const AddCardOrList = () => {
  return (
    <>
      <Paper className="List__AddCard">
        <AddCardOrListText />
      </Paper>

      <Paper
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        <button style={{ width: "100%" }}>Add new Card</button>
      </Paper>
    </>
  );
};

export default AddCardOrList;

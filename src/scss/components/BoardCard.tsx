import React from "react";
import { Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
const BoardCard = () => {
  return (
    <div className="display__flex__between align__items__center">
      <Paper className="List__Card">
        <input type="text" placeholder="Type something" className="input" />
      </Paper>
      <EditIcon />
    </div>
  );
};

export default BoardCard;

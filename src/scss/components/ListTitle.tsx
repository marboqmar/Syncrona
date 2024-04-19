import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core";

const ListTitle = () => {
  return (
    <div className="List__Title">
      <input type="text" placeholder="Tittle" className="List__Tittle--Text" />

      <MoreHorizIcon />
    </div>
  );
};

export default ListTitle;

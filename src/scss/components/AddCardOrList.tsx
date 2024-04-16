import React, { ReactElement, useState } from "react";
import { Card, Paper } from "@material-ui/core";
import AddCardOrListText from "./AddCardOrListText";
import { ErrorTwoTone } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import { Cards } from "./models";

const AddCardOrList = () => {
  const [card, setCard] = useState<Cards[]>([]);
  const createNewCard = () => {
    const id = card.length + 1;
    const newCard: Cards = { text: "", id };
    setCard([...card, newCard]);
  };
  return (
    <>
      <Paper style={{ background: "transparent" }}>
        {card.map((Cards) => (
          <div className="display__flex__between align__items__center">
            <Paper key={Cards.id} className="List__NewCard">
              <AddCardOrListText cardInfo={card} />
            </Paper>
            <EditIcon />
          </div>
        ))}
      </Paper>

      <Paper
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        <button style={{ width: "100%" }} onClick={createNewCard}>
          Add new Card
        </button>
      </Paper>
    </>
  );
};

export default AddCardOrList;

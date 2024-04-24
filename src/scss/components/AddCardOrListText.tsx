import React from "react";
import { useDrag } from "react-dnd";
import { Cards } from "./models";

export interface AddCardOrListTextProp {
  cardInfo: Cards;
}

const AddCardOrListText = (props: AddCardOrListTextProp) => {
  const { cardInfo } = props;
  return (
    <div className="livvic-thin">
      <input
        type="text"
        placeholder="Type something"
        className="input padding__0"
        value={cardInfo.text}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default AddCardOrListText;

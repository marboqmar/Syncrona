import React from "react";

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
        className="input"
        value={cardInfo.text}
      />
    </div>
  );
};

export default AddCardOrListText;

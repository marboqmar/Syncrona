import React from "react";
import { Cards } from "./models";
import { useTranslation } from "react-i18next";
import { useDrag, useDrop } from "react-dnd";

export interface AddCardOrListTextProp {
  cardInfo: Cards;
}

const AddCardOrListText = (props: AddCardOrListTextProp) => {
  const { cardInfo } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: cardInfo,
  }));
  console.log(bchfdihbvsibvsib);
  const { t } = useTranslation(["common", "list"]);

  return (
    <div
      ref={drag}
      className="livvic-thin"
      style={{ padding: "20px", background: "yellow" }}
    >
      <input
        type="text"
        placeholder={t("common:placeholder")}
        className="input padding__0"
        value={cardInfo.text}
        style={{ width: "100%", background: isDragging ? "blue" : undefined }}
      />
    </div>
  );
};

export default AddCardOrListText;

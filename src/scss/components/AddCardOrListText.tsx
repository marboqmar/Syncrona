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

  const { t } = useTranslation(["common", "list"]);

  return (
    <div ref={drag} className="livvic-thin List__Card shadow__effect">
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

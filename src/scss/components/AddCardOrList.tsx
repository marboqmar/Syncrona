import React, { ReactElement, useState } from "react";
import AddCardOrListText from "./AddCardOrListText";
import { useDrag } from "react-dnd";
import { Cards, ItemTypes } from "./models";
import { useTranslation } from "react-i18next";
const AddCardOrList = () => {
  const [card, setCard] = useState<Cards[]>([]);
  const createNewCard = () => {
    const id = card.length + 1;
    const newCard: Cards = { text: "", id };
    setCard([...card, newCard]);
  };

  const { t, i18n } = useTranslation(["common", "list"]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div style={{ background: "transparent" }}>
        {card.map((Cards) => (
          <div className="List__NewCard">
            <div
              key={Cards.id}
              className=" shadow__effect "
              style={{ width: "100%" }}
            >
              <div
                ref={drag}
                style={{
                  opacity: isDragging ? 0.5 : 1,
                  fontSize: 25,
                  fontWeight: "bold",
                  cursor: "move",
                  background: "white",
                  border: "none",
                }}
              >
                <AddCardOrListText cardInfo={card} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        <button style={{ width: "100%" }} onClick={createNewCard}>
          {t("list:card")}
        </button>
      </div>
    </>
  );
};

export default AddCardOrList;

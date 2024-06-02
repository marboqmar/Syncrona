import { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";
import { Cards } from "./models";
import { useTranslation } from "react-i18next";

const AddCardOrList = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const createNewCard = () => {
    const id = cards.length + 1;
    const newCard: Cards = { text: "", id };
    setCards([...cards, newCard]);
  };

  const { t } = useTranslation(["common", "list"]);

  return (
    <>
      <div style={{ background: "transparent" }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className=" shadow__effec  "
            style={{ width: "100%" }}
          >
            <AddCardOrListText cardInfo={card} />
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

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

  const { t, i18n } = useTranslation(["common", "list"]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function Draggable() {
    const ref = useRef(null);

    const [drop] = useDrop(() => ({
      accept: ItemTypes.CARD,
      hover(ItemTypes: any, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = ItemTypes.CARD;
        const hoverIndex = ItemTypes;
        if (dragIndex === hoverIndex) {
          return;
        }
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = hoverBoundingRect.bottom - hoverBoundingRect.top;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveCard(dragIndex, hoverIndex);
        ItemTypes.CARD = hoverIndex;
      },
    }));
  }

  return (
    <>
      <div style={{ background: "transparent" }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className=" shadow__effect "
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

import React, { useState } from "react";
import { Cards } from "./models";
import { useTranslation } from "react-i18next";
import { useDrag } from "react-dnd";

export interface AddCardOrListTextProp {
  cardInfo: Cards;
}

const AddCardOrListText = (props: AddCardOrListTextProp) => {
  const { cardInfo } = props;
  
  // Estado local para el valor del input
  const [inputValue, setInputValue] = useState(cardInfo.text);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: cardInfo,
  }));

  const { t } = useTranslation(["common", "list"]);

  // Función para manejar el cambio en el input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div ref={drag} className="livvic-thin List__Card shadow__effect ">
      <input
        type="text"
        placeholder={t("common:placeholder")}
        className="input padding__0 "
        value={inputValue}  // Usa el estado local
        onChange={handleInputChange}  // Maneja los cambios en el input
        style={{ width: "100%", background: isDragging ? "#b5d1e5" : undefined }}
      />
    </div>
  );
};

export default AddCardOrListText;
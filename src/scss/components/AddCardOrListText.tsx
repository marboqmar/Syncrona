<<<<<<< HEAD
import React from "react";
import { Cards } from "./models";
import { useTranslation } from "react-i18next";
import { useDrag, useDrop } from "react-dnd";
=======
import React from 'react';
import { Cards } from './models';
import { useTranslation } from 'react-i18next';
import { useDrag, useDrop } from 'react-dnd';
>>>>>>> 43c99a2241b3a03c25031452c8a91ab5df4ee924

export interface AddCardOrListTextProp {
  cardInfo: Cards;
}

const AddCardOrListText = (props: AddCardOrListTextProp) => {
  const { cardInfo } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
<<<<<<< HEAD
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: cardInfo,
  }));

  const { t } = useTranslation(["common", "list"]);

  return (
    <div
      ref={drag}
      className="livvic-thin"
      style={{ padding: "20px", background: "yellow" }}
    >
=======
    type: 'card',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
    item: cardInfo
  }));

  const { t } = useTranslation(['common', 'list']);

  return (
    <div ref={drag} className="livvic-thin" style={{ padding: '20px', background: 'yellow' }}>
>>>>>>> 43c99a2241b3a03c25031452c8a91ab5df4ee924
      <input
        type="text"
        placeholder={t("common:placeholder")}
        className="input padding__0"
        value={cardInfo.text}
<<<<<<< HEAD
        style={{ width: "100%", background: isDragging ? "blue" : undefined }}
=======
        style={{ width: '100%', background: isDragging ? 'blue' : undefined }}
>>>>>>> 43c99a2241b3a03c25031452c8a91ab5df4ee924
      />
    </div>
  );
};

export default AddCardOrListText;

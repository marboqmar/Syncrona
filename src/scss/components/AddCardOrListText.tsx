import React from "react";
import { Cards } from "./models";
import {useTranslation} from 'react-i18next';

export interface AddCardOrListTextProp {
  cardInfo: Cards;
}

const AddCardOrListText = (props: AddCardOrListTextProp) => {
  const { cardInfo } = props;
  const {t, i18n} = useTranslation(['common', 'list']);
  return (
    <div className="livvic-thin">
      <input
        type="text"
        placeholder={t('common:placeholder')}
        className="input padding__0"
        value={cardInfo.text}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default AddCardOrListText;

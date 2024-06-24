import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/atoms/icon';
import '../style.scss';

const Topbar = () => {
  const [dark, setDark] = useState(true);

  function DarkMode() {
    const rootElement = document.documentElement; // Selecciona el elemento raíz
    rootElement.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode'
  }

  const { t, i18n } = useTranslation(['common', 'list']);

  return (
    <div className="topbar">
      <div>
        <Link to="/BoardsMenu">
          <Icon className="Topbar__Icon" iconName="LeftArrow2" iconType="navigation" height="20px" fill="black" />
        </Link>
      </div>

      <input type="text" placeholder={t('common:Tittle')} className="Board__Page__Tittle livvic-regular" />
      <div>
        <div className="flex__row ">
          <button onClick={() => i18n.changeLanguage('en')} className="move__Y Topbar__Options">
            English
          </button>
          <button onClick={() => i18n.changeLanguage('es')} className="move__Y Topbar__Options">
            Spanish
          </button>
          <label className="switch">
            <input type="checkbox" onClick={DarkMode} />
            <span className="slider round Topbar__Options"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

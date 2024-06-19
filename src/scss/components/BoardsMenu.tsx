import '../BoardsMenu.scss';
import '../colors.scss';
import '../login.scss';
import '../style.scss';
import '../typography.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

const BoardsMenu = () => {
  return (
    <div className="BoardsMenu__direction__column justify__center  ">
      <div>
        <p className="BoardsMenu__Title">Boards</p>
      </div>
      <div>
        <Link to="/Boards" className="Link__NoColor">
          <div className="BoardsMenu__Selector justify__center align__items__center">
            <p>1st Board</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/Boards">
          <Button
            text="New Board"
            type="primary"
            width={'9.68rem'}
            height={'3.43rem'}
            className="BoardsMenu__button  livvic-regular "
          />
        </Link>
      </div>
    </div>
  );
};

export default BoardsMenu;

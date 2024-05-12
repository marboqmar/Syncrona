import ListTitle from './ListTitle';
import BoardCard from './BoardCards';
import AddCardOrList from './AddCardOrList';
import { useDrop } from 'react-dnd';

import '../colors.scss';


interface BoardListProps {
  board: Board;
}

const BoardInfo = ({board}) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: (item) => {
      console.log('test drop', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
    // Override monitor.canDrop() function
    canDrop: (item) => {
      return true;
    }
  });

  return (
    <div
      ref={drop}
      className="display__flex shadow__effect align__center "
      style={{ background: isOver ? 'red' : undefined }}
    >
      <div className="livvic-thin List List__Container margin__5p">
        <ListTitle />
        <BoardCards cards={board.cards} onAddCard={hola}/>
        <AddCardOrList />
      </div>
    </div>
  );
};

export default BoardInfo;
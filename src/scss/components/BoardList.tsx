<<<<<<< HEAD
import ListTitle from "./ListTitle";
import BoardCard from "./BoardCard";
import AddCardOrList from "./AddCardOrList";
import { useDrop } from "react-dnd";

import "../colors.scss";

const BoardList = () => {
  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log("test drop", item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    // Override monitor.canDrop() function
    canDrop: (item) => {
      return true;
    },
  });

=======
import ListTitle from './ListTitle';
import BoardCards from './BoardCards';
import AddCardOrList from './AddCardOrList';
import { useDrop } from 'react-dnd';

import '../colors.scss';
import { UserContextProvider } from './UserContext/UserContext';
import { Children } from 'react';


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

>>>>>>> 43c99a2241b3a03c25031452c8a91ab5df4ee924
  return (
    <div
      ref={drop}
      className="display__flex shadow__effect align__center "
<<<<<<< HEAD
      style={{ background: isOver ? "red" : undefined }}
    >
      <div className="livvic-thin List List__Container">
        <ListTitle />
        <BoardCard />
=======
      style={{ background: isOver ? 'red' : undefined }}
    >
      <div className="livvic-thin List List__Container margin__5p">
        <ListTitle title={UserContextProvider: ({ListTitle})}/>
        <BoardCards cards={board.cards} onAddCard={hola}/>
>>>>>>> 43c99a2241b3a03c25031452c8a91ab5df4ee924
        <AddCardOrList />
      </div>
    </div>
  );
};

export default BoardInfo;
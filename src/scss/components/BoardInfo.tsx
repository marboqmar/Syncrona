import ListTitle from "./ListTitle";
import BoardCards from "./BoardCards";
import AddCardOrList from "./AddCardOrList";
import { useDrop } from "react-dnd";
import { UserContext,TaskBoardModel } from "./UserContext/UserContext";
import { useContext, useState } from "react";
import { Board } from "./models";
import { useParams } from "react-router-dom";




interface BoardListProps {
  board: TaskBoardModel;
}

const BoardInfo = ({board}:BoardListProps) => {
  const {boards} = useContext(UserContext);
  /*const [id, setId] = useState();
  const { updateTaskBoardTitle } = useContext(UserContext);
  const { setBoard, createNewBoard } = useParams();

  const handleTaskBoardList = (boardListID: number) => {
    const newBoardListMap = createNewBoard.map((boardListInfo: Board) => {
      if (boardListID === boardListInfo.id) {
        const newBoardListInfo = { ...boardListInfo };
        return newBoardListInfo;
      }

      return boardListInfo;
    });

    setBoard(newBoardListMap);
  };*/

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log("test drop", item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => {
      return true;
    },
  });

  return (
    <div
      ref={drop}
      className="display__flex shadow__effect align__center "
      style={{ background: isOver ? "red" : undefined }}
    >
      
      <div className="livvic-thin List List__Container margin__5p">
      
        <ListTitle boardId={board.id} title={board.title}/>
        <BoardCards />
        <AddCardOrList />
      </div>
    </div>
  );
};

export default BoardInfo;

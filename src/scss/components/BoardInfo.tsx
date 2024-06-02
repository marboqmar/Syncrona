import ListTitle from "./ListTitle";
import BoardTasks from "./BoardTasks";
import AddCardOrList from "./AddCardOrList";
import { useDrop } from "react-dnd";
import { UserContext, TaskBoardModel } from "./UserContext/UserContext";
import { useContext, useState } from "react";
import { Board } from "./models";
import { useParams } from "react-router-dom";

interface BoardListProps {
  board: TaskBoardModel;
}

const BoardInfo = ({ board }: BoardListProps) => {
  const { boards } = useContext(UserContext);

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
      className="display__flex shadow__effect align__center margin__5p bg__color__yellow "
      style={{ background: isOver ? "black" : undefined }}
    >
      <div className="livvic-thin List List__Container margin__5p ">
        <ListTitle boardId={board.id} title={board.title} />
        <BoardTasks boardId={board.id} tasks={board.tasks} />
        <AddCardOrList />
      </div>
    </div>
  );
};

export default BoardInfo;

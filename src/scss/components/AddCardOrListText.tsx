import React from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { UserContext, TaskModel } from "./UserContext/UserContext";
import AddCardOrListText from "./AddCardOrListText";
import { useDrop } from "react-dnd";

interface BoardTasksProps {
  tasks: TaskModel[];
  boardId: number;
  moverboard: (sourceIndex: number, destinationIndex: number) => void;
}

const BoardTasks = ({ boardId, tasks, moverboard }: BoardTasksProps) => {
  const { updateBoard } = useContext(UserContext);
  const { t } = useTranslation(["common", "list"]);

  const [, drop] = useDrop({
    accept: "card",
    hover(item: { id: number; boardId: number; index: number }, monitor) {
      const dragIndex = item.index;
      const hoverIndex = tasks.findIndex((task) => task.id === item.id);

      if (dragIndex !== hoverIndex) {
        moverboard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const handleTasksChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    taskIndex: number
  ) => {
    const newTaskText = event.target.value;
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].text = newTaskText;
    updateBoard(boardId, { tasks: updatedTasks });
    console.log("Task updated");
  };

  return (
    <div className="task-list" ref={drop}>
      {tasks.map((task, index) => (
        <div key={task.id} className="List__Card shadow__effect">
          <AddCardOrListText cardInfo={{ ...task, index }} />
          <input
            type="text"
            placeholder={t("common:placeholder")}
            className="input width__border__box"
            style={{ width: "100%" }}
            onChange={(e) => handleTasksChange(e, index)}
            value={task.text}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardTasks;

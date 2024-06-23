import { DragEvent } from 'react'
import { TaskBoardProps, SetTasks, SetDraggedTask } from './interfaces/task-board.interface.tsx';
import { Task, TaskToolBar } from '../molecules';
import { TaskData } from '../molecules/interfaces/task.interface';
import { Image, Button, Droppable, Draggable } from '../atoms';
import '../../scss/components/organisms/task-board/base.scss';

const taskAdder = (
    tasks:TaskData[],
    setTasks: SetTasks,
    index: number,
    task: TaskData = {
        title: '',
        positionId: tasks.length,
        isFinished: false,
        isHighlighted: false,
        isDragging: false,
    }
) => () => {
    setTasks([
        ...tasks.slice(0, index),
        {...task, isDragging: false},
        ...tasks.slice(index)
    ]);
};

const taskDropper =  (
    addTask: () => void,
    draggedTask: TaskData | undefined,
    setDraggedTask: SetDraggedTask,
) => async () => {
  if (draggedTask) addTask();
  setDraggedTask(undefined);
}

const taskBuilder = (
    title: string,
    theme: string,
    setTasks: SetTasks,
    draggedTask: TaskData | undefined,
    setDraggedTask: SetDraggedTask
) => (
    task: TaskData,
    index: number,
    tasks: TaskData[]
) => {
    const editTask = (data: TaskData) => {
        const updatedTasks = [...tasks.slice(0, index), data, ...tasks.slice(index + 1)];
        setTasks(updatedTasks);
    }
    const dragTask = (isDragging: boolean) => {
        const updatedTasks = [
            ...tasks.slice(0, index),
            { ...task, isDragging: isDragging || (task.isDragging && !draggedTask) },
            ...tasks.slice(index + 1),
        ].filter((currentTask) => isDragging || !currentTask.isDragging);
        setTasks(updatedTasks);
        setDraggedTask(isDragging ? task: undefined);
    }
    const deleteTask = () => {
        const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        setTasks(updatedTasks);
    }
    const highlightTask = () => {
        const updatedTasks = [
            ...tasks.slice(0, index),
            { ...task, isHighlighted: !task.isHighlighted },
            ...tasks.slice(index + 1)
        ];
        setTasks(updatedTasks);
    }
    const onDropTool = (toolId: string) => {
        const actions = {
            erase: deleteTask,
            highlight: highlightTask,
            addText: () => {},
            openMenu: () => {},
            default: () => {},
        };

        const actionName = Object.keys(actions).find(
            (name) => name.toLowerCase() === toolId
        ) || 'default';
        const action = actions[actionName as keyof typeof actions];
        action();
    }
    const onDragEndTask = (event: DragEvent) => {
        if(event.dataTransfer.dropEffect != 'none') {
            setDraggedTask(undefined)
        }
    }
    return <Droppable
        key={`${title}-task-${index}`}
        name={`${title}-task-${index}-droppable`}
        type='task-draggable'
        onDrop={taskDropper(
            taskAdder(tasks, setTasks, index + 1, draggedTask),
            draggedTask,
            setDraggedTask
        )}
    >
        <Draggable
            name={`${title}-task-${index}-draggable`}
            type='task-draggable'
            isDragging={task.isDragging}
            setIsDragging={dragTask}
            onDragEnd={onDragEndTask}
        >
            <Droppable
                key={`${title}-task-${index}-tool`}
                name={`${title}-task-${index}-droppable-tool`}
                type='draggable-tool'
                onDrop={onDropTool}
                >
                    <Task
                        name={`${title}-task-${index}`}
                        data={task}
                        setData={editTask}
                        theme={theme}
                    />
            </Droppable>
      </Draggable>
    </Droppable>
};

const TaskBoard = ({
    title,
    banner,
    tasks,
    setTasks,
    draggedTask,
    setDraggedTask,
    theme,
    openSelectThemeModal
}: TaskBoardProps) => {
    return <div className='task-board'>
        <div className={`task-board-card theme-${theme}`}>
            <Droppable
                name={`${title}-task-${tasks.length}-droppable`}
                type='task-draggable'
                onDrop={taskDropper(
                    taskAdder(tasks, setTasks, 0, draggedTask),
                    draggedTask,
                    setDraggedTask)
                }
            >
                <h1 className={`task-board-title theme-${theme}`}>{ title }</h1>
                <Image src={ banner } alt={ title } width='100%' height='120px'/>
                <h2 className={`task-board-subtitle theme-${theme}`}>To do</h2>
            </Droppable>
                { tasks.map(taskBuilder(title, theme, setTasks, draggedTask, setDraggedTask)) }
        </div>
        <Button
            text='New Task'
            type='primary'
            width='150px'
            height='38px'
            onClick={taskAdder(tasks, setTasks, tasks.length)}
            theme={theme}
        />
        <TaskToolBar
            theme={ theme }
            selectedTool=''
            setSelectedTool={() => {}}
            openSelectThemeModal={openSelectThemeModal}
        />
    </div>
}

export default TaskBoard;
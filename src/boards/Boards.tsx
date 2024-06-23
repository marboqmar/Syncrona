import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Topbar from '../scss/components/topbar';
import { UserContextProvider } from '../scss/components/UserContext/UserContext';
import { TaskBoard } from '../components/organisms';
import { TaskBoardProps, SetDraggedTask, SetTaskBoards } from '../components/organisms/interfaces/task-board.interface';
import { TaskData } from '../components/molecules/interfaces/task.interface';
import { SetIsOpen } from '../components/molecules/interfaces/modal.interface';
import { Modal } from '../components/molecules';
import { Button, Checkbox, Input } from '../components/atoms';
import { getMeme } from '../services/imgflip';
import '../scss/style.scss';
import '../scss/layouts/task-board.scss';




const getTaskBoard = (
  theme: string,
  draggedTask: TaskData | undefined,
  setDraggedTask: SetDraggedTask,
  setIsOpenSelectThemeModal: SetIsOpen,
  setTasksBoards: SetTaskBoards) =>
      (taskboard: TaskBoardProps, index: number, taskBoards: TaskBoardProps[]) => {
          const setTasks = (tasks: TaskData[]) => {
              setTasksBoards([
                  ...taskBoards.slice(0, index),
                  { ...taskBoards[index], tasks },
                  ...taskBoards.slice(index + 1)
              ])
          }
          return <div>
            
            <div>
            <TaskBoard
              key={index}
              title={taskboard.title}
              banner={taskboard.banner}
              tasks={taskboard.tasks}
              setTasks={setTasks}
              theme={theme}
              draggedTask={draggedTask}
              setDraggedTask={setDraggedTask}
              openSelectThemeModal={() => setIsOpenSelectThemeModal(true)}
          />
          </div>
          </div>
      }

const Boards = () => {
      
  
  const [theme, setTheme] = useState('syncrona-yellow');
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [previewTheme, setPreviewTheme] = useState(false);
  const [isOpenAddTaskModal, setIsOpenAddTaskModal] = useState(false);
  const [isOpenSelectThemeModal, setIsOpenSelectThemeModal] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [taskBoards, setTasksBoards] = useState([] as TaskBoardProps[]);
  const [draggedTask, setDraggedTask] = useState(undefined as TaskData | undefined);
  const onSubmitAddTaskModal = async () => {
     
      const setTasks = (tasks: TaskData[]) => {
          setTasksBoards([
              ...taskBoards.slice(0, taskBoards.length),
              { ...taskBoards[taskBoards.length], tasks },
              ...taskBoards.slice(taskBoards.length + 1)
          ])
      }
      
      setTasksBoards([
          ...taskBoards,
          {
              title: boardName,
              banner: await getMeme(),
              tasks: [] as TaskData[],
              setTasks,
              theme,
              draggedTask,
              setDraggedTask,
              openSelectThemeModal: () => setIsOpenSelectThemeModal(true),
          }
      ]);
      setBoardName('');
      setIsOpenSelectThemeModal(false);
}
const onSubmitSelectThemeModal = () => {
setTheme(selectedTheme);
setIsOpenSelectThemeModal(false);
}
const changeSelectedTheme = (newTheme: string) => {
if (previewTheme) {
  setTheme(newTheme);
}
setSelectedTheme(newTheme);
}
return <div className={`background theme-${theme}`}>
  
  <Modal
  theme={theme}
  submitText="Let's go"
  onSubmit={onSubmitAddTaskModal}
  isOpen={isOpenAddTaskModal}
    setIsOpen={setIsOpenAddTaskModal}
  >
    <h3>Give your board a name</h3>
    <Input
        type='text'
        placeholder=''
        width='440'
        name='add-taskboard-title'
        value={boardName}
        setValue={setBoardName}
      />

  </Modal>
  <Modal
    theme={theme}
    submitText="Done"
    onSubmit={onSubmitSelectThemeModal}
    isOpen={isOpenSelectThemeModal}
    setIsOpen={setIsOpenSelectThemeModal}
  >
    <h3>Select your theme</h3>
    <div className='theme-selectors'>
      <div
        className='theme-selector theme-syncrona-pink'
        onClick={() => changeSelectedTheme('syncrona-pink')}
      />
      <div
        className='theme-selector theme-syncrona-yellow'
        onClick={() => changeSelectedTheme('syncrona-yellow')}
      />
      <div
        className='theme-selector theme-syncrona-orange'
        onClick={() => changeSelectedTheme('syncrona-orange')}
      />
    </div>
    <Checkbox
      name='preview-theme'
      text='Preview'
      theme={theme}
      checked={previewTheme}
      setChecked={setPreviewTheme}
    />
  </Modal>
  <div>
    <Topbar/>
  </div>
  <div className='task-board-panel'>
    {
      taskBoards.map(getTaskBoard(
        theme,
        draggedTask,
        setDraggedTask,
        setIsOpenSelectThemeModal,
        setTasksBoards
      ))
    }
    <Button
      text='New page'
      type='primary'
      width='min(100%, 326px)'
      height='55px'
      theme={theme}
      onClick={() => setIsOpenAddTaskModal(true)}
    />
  </div>
</div>
}

export default Boards;



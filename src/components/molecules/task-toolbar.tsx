import { Draggable, Icon } from '../atoms';
import { IconNames, IconTypes } from '../atoms/interfaces/icon.interface';
import { TaskToolBarProps, TaskTool, SetSelectedTool } from './interfaces/task-toolbar.interface';
import '../../scss/components/molecules/task-toolbar/base.scss';

const renderTool = (selectedTool: string, setSelectedTool: SetSelectedTool) => ({
    name,
    type,
    isDraggable,
    onClick
}: TaskTool) => {
    const isDragging = name === selectedTool;
    const setIsDragging = () => setSelectedTool(name);
    return isDraggable
    ? <Draggable
        key={name.toLowerCase()}
        name={name.toLowerCase()}
        type='draggable-tool'
        isDragging={isDragging}
        setIsDragging={setIsDragging}
    >
        <Icon iconName={name as IconNames} iconType={type as IconTypes}/>
    </Draggable>
    :
    <Icon
      key={name.toLowerCase()}
      iconName={name as IconNames}
      iconType={type as IconTypes}
      onClick={onClick}
    />
}

const TaskToolBar = ({
  theme,
  selectedTool,
  setSelectedTool,
  openSelectThemeModal,
}: TaskToolBarProps) =>  {
    const tools = [
      {
        name: 'Fill',
        type: 'action',
        isDraggable: false,
        onClick: openSelectThemeModal
      },
      {
        name: 'AddPostIt',
        type: 'action',
        isDraggable: false,
      },
      {
        name: 'Erase',
        type: 'action',
        isDraggable: true,
      },
      {
        name: 'Highlight',
        type: 'action',
        isDraggable: true,
      },
      {
        name: 'AddText',
        type: 'action',
        isDraggable: false,
      },
      {
        name: 'OpenMenu',
        type: 'action',
        isDraggable: false,
      },
    ]
    return <div className={`task-board-toolbar theme-${theme}`}>
        {tools.map(renderTool(selectedTool, setSelectedTool))}
    </div>
}

export default TaskToolBar;
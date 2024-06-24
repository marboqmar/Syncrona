import {Input,Checkbox,Icon} from '../atoms';
import {TaskProps} from './interfaces/task.interface';
import '../../scss/components/molecules/task/base.scss';

const Task = ({name,data,setData,theme}:TaskProps) => {
    const setIsFinished = (isFinished: boolean) =>{setData({...data,isFinished})};
    const setTitle = (title: string) =>{setData({...data,title})};

    return <div id={name} className={`${name} task theme-${theme} ${data.isHighlighted ? 'highlighted': ''}`}>
        <Input
            type='text'
            width='330px'
            setValue={setTitle}
            placeholder='Write Something... |'
            value={data.title}
            name={`${name}-title`}
            theme= {theme}
        />
        <Icon
            iconName='Calendar'
            iconType='settings'
            width='15px'
            height='15px'
            theme= {theme}
        />
        <Checkbox
            checked={data.isFinished}
            setChecked= {setIsFinished}
            name={`${name}-status`}
            theme= {theme}
        />
    </div>
};

export default Task;
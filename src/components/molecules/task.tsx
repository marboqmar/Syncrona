import {Input,Checkbox,Icon} from '../atoms';
import {TaskProps} from './interfaces/task.interface';
//MIGHT HAVE TO ADD THEME LATER FOR STYLES
const Task = ({name,data,setData}:TaskProps) => {
    const setIsFinished = (isFinished: boolean) =>{setData({...data,isFinished})};
    const setTitle = (title: string) =>{setData({...data,title})};

    return <div id={name} className={`${name} task`}>
        <Input
            type='text'
            width='330px'
            setValue={setTitle}
            placeholder='Write Something... |'
            value={data.title}
            name={`${name}-title`}
        />
        <Icon
            iconName='Calendar'
            iconType='settings'
            width='15px'
            height='15px'
            //fill={fill}
            stroke='0px'
            strokeWidth='0px'
        />
        <Checkbox
            checked={data.isFinished}
            setChecked= {setIsFinished}
            name={`${name}-status`}
        />
    </div>
};

export default Task;
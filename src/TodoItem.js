import './TodoItem.css'
import { FaCheck} from 'react-icons/fa';
import { HiXCircle } from "react-icons/hi";


function TodoItem(props) {
    return (
        <li className='box-clicks'>
            <span className={`click-v ${props.completed && "click-v--complete"}`}
            onClick={props.onComplete}> <FaCheck className={`check ${props.completed && "check-completed"}`} /></span>

            <p className={`todo ${props.completed && "todo-v--complete"}`}>{props.text}</p>
            
            <span className='click-x click-x--delete'
            onClick={props.onDelete}><HiXCircle className="exe"/></span>
        </li>
    );
}
export {TodoItem};

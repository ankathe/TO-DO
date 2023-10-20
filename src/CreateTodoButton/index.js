import './CreateTodoButton.css';
import { HiPlus } from "react-icons/hi";

function CreateTodoButton(){
    return(
        <button className='button' 
            onClick={(event) => {
                console.log('click to the button');
                console.log(event.target);
                }
            }
        > <HiPlus/> </button>
    );
}
export{CreateTodoButton};


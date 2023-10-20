import './TodoList.css'

function TodoList({children}){
    return(
    <div className='todo-list'>
      {children}
    </div>
    );
}
export{TodoList};
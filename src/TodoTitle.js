import './TodoTitle.css';

function TodoTitle({total, completed}){
    return(
    <h1 className='title'>You finished <span>{completed}</span> out of <span>{total}</span> TO DO!!</h1>
    );
}
export {TodoTitle};
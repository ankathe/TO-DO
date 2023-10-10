import React from "react";
import { TodoBox } from "./TodoBox";
import { TodoTitle } from "./TodoTitle";
import { BoxClick } from "./BoxClick";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaulTodos = [
  { text: "Cut onion", completed: false },
  { text: "Make course beginner React.js", completed: true },
  { text: "Cry whit baby-cried", completed: true },
  { text: "Other todo", completed: true },
  { text: "aprender javascript", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completed = todos.filter((todo) => !!todo.completed).length;
  const allTodo = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });


  const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
          (todo) => todo.text == text
          );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
  }  

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
        );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
} 

  document.body.style.backgroundImage =
    "radial-gradient(circle at 50% 51.01%, #f6ffff 0, #e9fffb 12.5%, #dbfff6 25%, #cbfdf1 37.5%, #b9f6ed 50%, #a7efea 62.5%, #95e9e9 75%, #84e3e9 87.5%, #74ddea 100%)";
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.padding = "120px";

  return (
    <>
      <TodoBox className="container">
        <TodoTitle completed={completed} total={allTodo} />
        <BoxClick>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CreateTodoButton />
        </BoxClick>
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete ={()=> deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </TodoBox>
    </>
  );
}
export default App;

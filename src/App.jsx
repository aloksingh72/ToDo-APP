import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const editTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === currentTodo ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, ischecked: !todo.ischecked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteHandler =(key)=>{
    const newList = [...todos];
    newList.splice(key,1);
    setTodos([...newList]);
  
  }
  // const deleteHandler = (index) => {
  //   const newList = todos.filter((_, i) => i !== index);
  //   setTodos(newList);
  // };
  const startEditing = (todo) => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <Header />
        <TodoForm
          addTodo={addTodo}
          editTodo={editTodo}
          isEditing={isEditing}
          currentTodo={currentTodo}
        />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteHandler={deleteHandler}
          startEditing={startEditing}
        />
      </div>
    </div>
  );
}

export default App;

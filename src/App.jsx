import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;

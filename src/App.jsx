import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="todo-app">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

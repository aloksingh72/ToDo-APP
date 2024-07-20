import React, { useEffect, useState } from "react";

function TodoList({todos:initialTodos}) {

const [todos,setTodos]=useState([])
  // const[checked,ischecked]=useState();
useEffect(()=>{
  setTodos(initialTodos);
},[initialTodos]);


  const checkHandler=(index) =>{
    const updateTodos = todos.map((todo,i)=>{
      if(i === index){
        return {...todo,ischecked:!todo.ischecked};
      }
      return todo;
    });
    setTodos(updateTodos);

  };
  
// console.log(todos);
  return (
    <div className="todo-list">
      <div className="todolist-items flex ">
        
      <ul >
        {todos.map((todo, index) => (
          <li   key={index} className={todo.ischecked ? "line-through" : ""}>
            <input type="checkbox"
            checked={todo.ischecked}
            onChange={() => checkHandler(index)}
            />
            {todo}
            </li>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default TodoList;

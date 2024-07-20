import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function TodoList({ todos, toggleTodo, deleteHandler, startEditing }) {
  // const [todos,setTodos]=useState([])
  // const[checked,ischecked]=useState();

  // useEffect(()=>{
  //   setTodos(initialTodos);
  // },[initialTodos]);

  //   const checkHandler=(index) =>{
  //     const updateTodos = todos.map((todo,i)=>{
  //       if(i === index){
  //         return {...todo,ischecked:!todo.ischecked};
  //       }
  //       return todo;
  //     });
  //     setTodos(updateTodos);

  //   };

  // console.log(todos);
  return (
    <div className="todo-list">
      <div className="todolist-items flex flex-col ">
        <ul className="w-full">
          {todos.map((todo, index) => (
            <li key={index} className={`flex justify-between items-center p-2 border-b ${todo.ischecked ? "line-through" : ""}`}>
              <div className="flex items-center  ">
                <input
                  type="checkbox"
                  checked={todo.ischecked}
                  onChange={() => toggleTodo(index)}
                  className="mr-2"
                />
                <span className="w-3/4 ">{todo.text}</span>
                </div>
                <div className="flex space-x-4">
                <MdEdit className="cursor-pointer" onClick={() => startEditing(todo)} />
                <MdDelete className="cursor-pointer" onClick={() => deleteHandler(index)} />
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

 

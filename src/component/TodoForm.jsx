import React from "react";

function TodoForm() {
   
  return (
    
      <div className=" relative flex mx-auto mt-1">
        <input
          type="text"
          placeholder="Enter your text here  "
          className="rounded-xl w-[400px] outline-none  bg-blue-300 py-2 px-4 "
          onChange={(e) => setValue(e.target.value)}
        />
        <button  className="absolute rounded-xl px-4 py-2  left-[340px] bg-orange-400">
          Add
        </button>
      </div>
   
  );
}

export default TodoForm;

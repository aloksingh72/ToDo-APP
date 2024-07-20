import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex mx-auto mt-1">
      <input
        type="text"
        value={newTodo}
        placeholder="Enter your text here"
        className="rounded-xl w-[400px] outline-none bg-blue-300 py-2 px-4"
        onChange={handleInputChange}
      />
      <button type="submit" className="absolute rounded-xl px-4 py-2 left-[340px] bg-orange-400">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

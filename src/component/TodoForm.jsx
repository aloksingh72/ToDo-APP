import React, { useState,useEffect } from "react";

function TodoForm({ addTodo, editTodo, isEditing, currentTodo }) {
  const [newTodo, setNewTodo] = useState("");

  // const handleInputChange = (event) => {
  //   setNewTodo(event.target.value);
  // };
  useEffect(() => {
    if (isEditing && currentTodo) {
      setNewTodo(currentTodo.text);
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      if (isEditing) {
        editTodo({
          ...currentTodo,
          text: newTodo,
        });
      } else {
        addTodo({
          text: newTodo,
          isChecked: false,
        });
      }
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex mx-auto mt-1">
      <input
        type="text"
        value={newTodo}
        placeholder="Enter your text here"
        className="rounded-xl w-[400px] outline-none bg-blue-300 py-2 px-4"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="absolute rounded-xl px-4 py-2 left-[340px] bg-orange-400"
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;

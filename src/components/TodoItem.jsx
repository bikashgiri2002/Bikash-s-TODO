/* eslint-disable react/prop-types */
import { useTodos } from "../context/TodoContext";
import { useState } from "react";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleCompleted } = useTodos();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };
  return (
    <div
      className={`flex border rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 ${
        todo.completed
          ? "bg-[#c6e9a7] dark:bg-[#4a9d5d]"
          : "bg-[#ccbed7] dark:bg-[#b58bc7]"
      } border-black/10 dark:border-gray-600 shadow-white/50 dark:shadow-gray-700 text-black dark:text-white`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable
            ? "border-black/10 dark:border-gray-600 px-2"
            : "border-transparent"
        } ${todo.completed ? "line-through" : ""} dark:text-gray-200`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

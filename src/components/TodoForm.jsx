import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodos();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({todo, completed : false});
        setTodo('');
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Todo..."
          className={`w-full border rounded-l-lg px-3 outline-none duration-150 py-1.5 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100`}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className={`rounded-r-lg px-3 py-1 
            text-white 
            bg-green-600 hover:bg-green-500 
            dark:bg-green-700 dark:hover:bg-green-600`}
        >
          Add
        </button>
      </form>      
    );
}

export default TodoForm;


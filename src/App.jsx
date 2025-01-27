import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setToDos] = useState([]);

  // Add a new todo
  const addTodo = (todo) => {
    setToDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setToDos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle completion of a todo
  const toggleCompleted = (id) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load todos from local storage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) setToDos(storedTodos);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <Navbar />
      <div className="bg-[#172842] min-h-screen py-8 dark:bg-[#121212]">
  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white dark:shadow-gray-700">
    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
      Manage Your Todos
    </h1>
    <div className="mb-4">
      <TodoForm />
    </div>
    <div className="flex flex-wrap gap-y-3">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  </div>
</div>

    </TodoProvider>
  );
}

export default App;

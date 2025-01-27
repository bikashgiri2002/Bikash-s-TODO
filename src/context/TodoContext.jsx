/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo Message", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodos = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;
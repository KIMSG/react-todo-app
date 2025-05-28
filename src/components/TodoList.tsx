import React, { useState } from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "../App";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void; // 추가된 editTodo prop
}

function TodoList({ todos, toggleTodo, removeTodo, editTodo }: Props) {

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo} // TodoItem에 editTodo prop 전달
        />
      ))}
    </ul>
  );
}

export default TodoList;
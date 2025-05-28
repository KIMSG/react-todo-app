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
  // TodoList 컴포넌트는 할 일 목록을 렌더링하고, 각 할 일 항목에 대한 TodoItem 컴포넌트를 사용합니다.
  // 이 컴포넌트는 todos, toggleTodo, removeTodo, editTodo props를 받습니다. 

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
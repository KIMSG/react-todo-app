import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import RandomAddButton from "./components/RandomAddButton";
import RemoveTodoSection from "./components/RemoveTodoSection";
import SortButton from "./components/SortButton";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // 삭제된 할 일의 개수를 계산합니다.
  const [removeCount, setRemoveCount] = useState(0); // 필요에 따라 실제 삭제 개수 로직으로 변경하세요.


  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  }; 

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 나의 할 일 목록</h1>
      <h4>삭제 개수 {removeCount}</h4>
      <input
        type="text"
        placeholder="할 일이 랜덤하게 생깁니다."
        className="border p-2 w-full mb-4"
        />
        
      <RandomAddButton onAdd={addTodo} />

      <RemoveTodoSection 
        todos={todos}
        setTodos={setTodos}
        setRemoveCount={setRemoveCount}
      />

        <SortButton 
          todos={todos}
          setTodos={setTodos}
        />


      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo} 
        editTodo={editTodo}
         />
    </div>
  );
}

export default App;
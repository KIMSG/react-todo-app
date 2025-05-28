import React, { useState } from "react";
import type { ChangeEvent } from "react";
import type { Todo } from "../App";

// TodoItem 컴포넌트는 개별 할 일 항목을 표시하고, 수정, 삭제 기능을 제공합니다.
// 이 컴포넌트는 TodoList 컴포넌트에서 사용됩니다.
// TodoItem 컴포넌트는 todo, toggleTodo, removeTodo, editTodo props를 받습니다.


interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void; // 추가된 editTodo prop
}

function TodoItem({ todo, toggleTodo, removeTodo, editTodo }: Props) {
  // isEditing 상태는 현재 할 일이 수정 모드인지 여부를 나타냅니다.
  // editText 상태는 수정 중인 할 일의 텍스트를 저장합니다.

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditClick = (id: number) => {
    // 수정 버튼을 클릭하면 isEditing 상태를 true로 설정하고, editText를 현재 todo의 텍스트로 초기화합니다.
    setIsEditing(true);
    console.log("수정 버튼 클릭", id);
  };  

  const handleSaveClick = (id: number) => {
    // 저장 버튼을 클릭하면 isEditing 상태를 false로 설정하고, editText를 업데이트합니다.
    // editTodo 함수를 호출하여 todo를 수정합니다.
    
    setIsEditing(false);
    setEditText(editText);
    editTodo(id, editText);
    console.log("저장 버튼 클릭", id);
  };



  return (
    <li className="flex items-center justify-between mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          className="border p-1 flex-1 mr-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditText(e.target.value);
            }}
        />


      ) : (

        <span
          className={`flex-1 cursor-pointer ${todo.done ? "line-through text-gray-500" : ""}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )
      }

      <button
        className="text-red-500 ml-2 text-sm"
        onClick={() => removeTodo(todo.id)}
      >
        삭제
      </button>
      {isEditing ? (
        <button className="text-red-500 ml-2 text-sm" 
          onClick={() => handleSaveClick(todo.id)}
        >등록</button>
      ) : (

        <button onClick={() => handleEditClick(todo.id)}>수정</button>
      )}
    </li>
  );
}

export default TodoItem;

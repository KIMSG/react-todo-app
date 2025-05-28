import React, { useState } from "react";
interface TodoFormProps {
  addTodo: (text: string) => void;
}
// TodoForm 컴포넌트는 새로운 할 일을 추가하는 폼을 렌더링합니다.
// 이 컴포넌트는 addTodo prop을 받아 새로운 할 일을 추가하는 기능을 제공합니다.

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 이벤트를 처리합니다.
    // 입력된 텍스트가 비어 있지 않으면 addTodo 함수를 호출하여 새로운 할 일을 추가합니다.
    // 제출 후 입력 필드를 비웁니다.
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        className="flex-1 border rounded px-2 py-1 mr-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="bg-blue-500 text-white px-4 rounded">추가</button>
    </form>
  );
}

export default TodoForm;
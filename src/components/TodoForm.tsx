import React, { useState } from "react";
interface TodoFormProps {
  addTodo: (text: string) => void;
}
function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
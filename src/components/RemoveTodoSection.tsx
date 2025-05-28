import React, { useState } from 'react'
import type { ChangeEvent } from 'react'

import type { Todo } from '../App';

interface RemoveTodoSectionProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    setRemoveCount: (count: number) => void;
}


const RemoveTodoSection = ({todos , setTodos, setRemoveCount}:RemoveTodoSectionProps) => {
    const [removeText, setRemoveText] = useState<string>('');

    const handleClick = () => {
        const filtered = todos.filter((todo) => todo.text !== removeText);
        const removeCountT = todos.length - filtered.length;
        setRemoveCount(todos.length - filtered.length);
        setTodos(filtered);
        alert(`${removeCountT}개의 할 일이 삭제되었습니다.`);
    }

  return (
    <>
      <input
        type="text"
        placeholder="삭제할 일을 입력하세요"
        className="border p-2 w-full mb-4"
        value={removeText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setRemoveText(e.target.value)}
      />
      
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleClick}
      >
        이 일은 삭제됩니다
      </button>
    </>
  )
}

export default RemoveTodoSection;

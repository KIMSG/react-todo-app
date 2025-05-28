import React, { useState } from 'react'
import type { ChangeEvent } from 'react'

import type { Todo } from '../App';

interface RemoveTodoSectionProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    setRemoveCount: (count: number) => void;
}


const RemoveTodoSection = ({todos , setTodos, setRemoveCount}:RemoveTodoSectionProps) => {
    // RemoveTodoSection 컴포넌트는 사용자가 입력한 텍스트에 해당하는 할 일을 삭제하는 기능을 제공합니다.
    // 이 컴포넌트는 todos, setTodos, setRemoveCount props를 받아 삭제 기능을 구현합니다.
    // removeText 상태는 사용자가 삭제할 할 일의 텍스트를 입력하는 데 사용됩니다.
    
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

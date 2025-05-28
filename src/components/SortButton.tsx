import React from 'react'
import type { Todo } from '../App';

interface SortProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}
// SortButton 컴포넌트는 할 일 목록을 알파벳 순으로 정렬하는 버튼을 렌더링합니다.
// 이 컴포넌트는 todos와 setTodos props를 받아 할 일 목록을 정렬하는 기능을 제공합니다.


const SortButton = ({todos, setTodos} : SortProps) => {

    const handleClick = () => {
      // 할 일 목록이 비어 있는 경우 경고 메시지를 표시합니다.
        // 할 일 목록이 비어 있으면 정렬을 수행하지 않습니다.
        // 정렬 버튼을 클릭하면 todos 배열을 알파벳 순으로 정렬합니다.
        // todos 배열이 비어 있으면 경고 메시지를 표시합니다.
        
        if (!todos.length) {
            alert('할 일이 없습니다.');
            return;
        }

        const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setTodos(sorted);
    }

  return (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleClick}
      >
        할 일 정렬 </button>
  )
}

export default SortButton
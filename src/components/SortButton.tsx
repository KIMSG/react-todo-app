import React from 'react'
import type { Todo } from '../App';

interface SortProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}


const SortButton = ({todos, setTodos} : SortProps) => {

    const handleClick = () => {
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
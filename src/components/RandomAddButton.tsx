import React from 'react'

const randomTodos = [
  "책 읽기",
  "운동하기",
  "코딩 연습",
  "산책하기",
  "친구에게 연락하기",
  "영화 보기",
  "정리하기",
  "일기 쓰기",
  "새로운 취미 시작하기",
  "facebook 친구 요청 수락하기",
  "인스타그램 사진 올리기",
  "트위터 글쓰기",
  "블로그 글쓰기",
  "정리 정돈하기",
  "요리하기",
  "음악 듣기",
  "새로운 기술 배우기"
];

interface RandomProps {
    onAdd: (text: string) => void;
}

const RandomAddButton = ({ onAdd }: RandomProps) => {
    // RandomAddButton 컴포넌트는 랜덤한 할 일을 생성하는 버튼을 렌더링합니다.
    // 이 컴포넌트는 onAdd prop을 받아 랜덤한 할 일을 추가하는 기능을 제공합니다.
    // 랜덤한 할 일 목록에서 하나를 선택하여 onAdd 함수를 호출합니다.
    
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * randomTodos.length);
        const randomTodo = randomTodos[randomIndex];
        onAdd(randomTodo);
    }
    
  return (
    <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >할 일 랜덤 생성기 </button>
  )
}

export default RandomAddButton;
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
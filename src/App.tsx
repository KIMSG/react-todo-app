import React, { useEffect, useRef, useState } from "react";
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
  
  const inputFocusRef = useRef<HTMLInputElement>(null);

  const [draftInput, setDraftInput] = useState(""); // 입력값 상태 추가
  const inputTimerRef = useRef<NodeJS.Timeout | null>(null); // 타이머 ID 저장용


    // 🚀 localStorage에서 불러오기
  useEffect(() => {
    const stored = localStorage.getItem("my-todos");
    if (stored) {
      setTodos(JSON.parse(stored));
      console.log("🧾 저장된 할 일 목록:", JSON.parse(stored));
    }
    
    const draft = localStorage.getItem("todo-draft");
    if (draft) {
      setDraftInput(draft); // 초안 불러오기
    }

  }, []);

  // 💾 todos가 바뀔 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);
    
  const prevTodosLengthRef = useRef<number>(todos.length);

  useEffect(() => {
    console.log("🧾 이전 할 일 개수:", prevTodosLengthRef.current);
    console.log("📌 현재 할 일 개수:", todos.length);

    prevTodosLengthRef.current = todos.length; // 항상 최신값으로 업데이트
  }, [todos]);


  const [shouldShake, setShouldShake] = useState(false);



  const addTodo = (text: string) => {
    
    // 새로운 일감을 추가합니다.
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setShouldShake(true);
    setTimeout(() => setShouldShake(false), 500);
  };

  const toggleTodo = (id: number) => {
    // 일감의 완료 상태를 토글합니다. 구현 아직 안됨
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    // 일감을 삭제 합니다. 

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    // 일감의 내용을 수정합니다.
    // 여기서 id와 text를 사용하여 해당 todo를 수정합니다.

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  }; 

  const handleDraftInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDraftInput(value);

    if (inputTimerRef.current) {
      clearTimeout(inputTimerRef.current);
    }

    inputTimerRef.current = setTimeout(() => {
      localStorage.setItem("todo-draft", value);
      console.log("💾 자동 저장됨:", value);
    }, 2000);
  };


  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 나의 할 일 목록</h1>
      <h4>삭제 개수 {removeCount}</h4>
      <input
        // ref={inputFocusRef}
        type="text"
        placeholder="할 일이 랜덤하게 생깁니다."
        className={`border p-2 w-full mb-4 ${shouldShake ? "animate-shake" : ""}`}
        onChange={handleDraftInputChange} // 🔁 자동 저장 로직 연결
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


         <div className="mt-4">
          <h2 className="text-lg font-semibold">📦 저장된 할 일</h2>
          <ul className="list-disc list-inside">
            {(JSON.parse(localStorage.getItem("my-todos") ?? "[]") as Todo[]).map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.done ? "✅" : "❌"}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
# Todo List App

간단한 **React + TypeScript** 기반 Todo List 애플리케이션입니다. Tailwind CSS를 이용한 스타일링과 컴포넌트 분리 구조를 특징으로 합니다.

## 주요 기능

- **할 일 추가** (`TodoForm`)
- **무작위 할 일 추가** (`RandomAddButton`)
- **할 일 삭제** (개별 삭제 및 텍스트 기반 일괄 삭제)
- **할 일 정렬** (텍스트 기준 오름차순)
- **할 일 토글** (완료/미완료)
- **할 일 수정** (인라인 편집)
- **삭제된 할 일 개수 카운트**

## 디렉토리 구조

```
src/
├── App.tsx
├── main.tsx
└── components/
    ├── TodoForm.tsx
    ├── TodoList.tsx
    ├── TodoItem.tsx
    ├── RandomAddButton.tsx
    ├── RemoveTodoSection.tsx
    └── SortButton.tsx
```

## 주요 컴포넌트 설명

### `App.tsx`

- 전역 상태(`todos`, `removeCount`) 관리
- CRUD 및 정렬 로직 구현 (add, toggle, remove, edit, sort)
- 각 컴포넌트에 props 전달

### `TodoForm.tsx`

- 사용자가 직접 텍스트 입력으로 할 일 추가

### `RandomAddButton.tsx`

- 미리 정의된 배열에서 무작위로 할 일을 선택해 추가하는 버튼

### `RemoveTodoSection.tsx`

- 입력된 텍스트와 일치하는 모든 할 일을 삭제
- 삭제된 항목 개수를 부모 `App`에 전달

### `SortButton.tsx`

- 현재 할 일 목록을 텍스트 기준 오름차순으로 정렬

### `TodoList.tsx` & `TodoItem.tsx`

- 할 일 배열을 순회하며 렌더링
- 개별 아이템의 토글, 삭제, 수정 기능 처리

## 설정 및 실행

1. 저장소 클론

   ```bash
   git clone <repo-url>
   cd my-todo-app
   ```

2. 의존성 설치

   ```bash
   npm install
   ```

3. 개발 서버 실행

   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:5173` 열기

## 개선 및 확장 아이디어

- 로컬 스토리지 연동 (페이지 새로고침 시 유지)
- 필터링/검색 기능 (전체, 완료, 미완료)
- 테스트 추가 (Jest + React Testing Library)
- 다크 모드 토글
- 애니메이션 효과 (Framer Motion)

---

코드 리뷰나 추가 기능 제안은 언제든 환영합니다! 😊

## 학습 분량: 약 2~3주

목표: useState, useEffect, props, 컴포넌트 분리

조건부 렌더링, 이벤트 처리, 간단한 폼

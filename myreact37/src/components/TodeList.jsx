import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

const INITIAL_STATE = [
  { content: '2022년 다이어트' },
  { content: '파이썬 익히기' },
  { content: '리액트 익히기' },
];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: '',
    color: 'Amber',
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  // const changeInputText = (e) => {
  //   setinputText(e.target.value);
  // };

  // const appendInputText = (e) => {
  //   if (e.key === 'Enter') {
  //     //todoList 배열 끝에 inputTEXT 추가
  //     // inputText를 다시 비웁니다. => input 박스 UI가 비워보이진 않을 것.

  //     //setTodoList에 함수 넘기기
  //     // TodoList 상탯값을 직접 변경하는 것은 아님(배열의push를 사용x)
  //     setTodoList((prevTodoList) => {
  //       return [...prevTodoList, { content: inputText }];
  //     });
  //     setinputText('');
  //   }
  // };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      <TodoForm fieldValues={fieldValues} handleChange={handleChange} />
      <hr />
      {JSON.stringify(fieldValues)}

      {/* <input
        type="text"
        value={inputText}
        onChange={changeInputText}
        onKeyPress={appendInputText}
      /> */}

      <button
        className="bg-red-500 text-gray-100"
        cursor-pointer
        onClick={() => clearFieldValues()}
      >
        clear
      </button>

      {todoList.map((todo, index) => (
        <Todo
          todo={todo}
          onClick={() => {
            removeTodo(index);
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;

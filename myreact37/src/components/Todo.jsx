import './Todo.css';

function Todo({ todo, onClick }) {
  return (
    <div
      className={`bg-{todo.color}}-300 
      hover:bg-{todo.color}-400 m-1 p-2
      rounded-lg text-lg 
      border-{todo.color}-200 border-2
      hover:border-{todo.color}-500
      hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      {todo.color}
      {todo.content}
    </div>
  );
}
export default Todo;

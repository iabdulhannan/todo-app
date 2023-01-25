import AddNewTodo from "./addNewTodo";
import TodoList from "./todoList";

function TodoBox() {
  return (
    <div className={'p-5 flex items-center justify-center text-white w-full'}>
      <div className={'border border-gray-300 rounded-lg p-5 flex flex-col justify-center items-center md:w-1/2'}>
        <AddNewTodo/>
        <TodoList/>
      </div>
    </div>
  );
}

export default TodoBox;

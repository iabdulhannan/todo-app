'use client'
import Todo from "./todo";
import {useEffect, useState} from "react";

// const getTodos = async () => {
//   let todos = await fetch("http://localhost:3000/api/todo/list");
//   return todos.json();
// };
const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos'));
};


export default function TodoList() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(getTodos())
  }, [JSON.parse(localStorage.getItem('todos'))?.length])

  return (
    <div className={'w-full'}>
      <div className={'my-5'}>
        <h2>TODOs</h2>
      </div>

      <ul style={{listStyleType: "none", padding: 0}}>
        {todos?.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

'use client'
import Todo from "./todo";
import {useEffect, useState} from "react";
import LM from 'localstorage-memory';
// const getTodos = async () => {
//   let todos = await fetch("http://localhost:3000/api/todo/list");
//   return todos.json();
// };


export default function TodoList() {
  let localStorage;

  if (typeof window !== "undefined") {
    localStorage = window.localStorage;
  } else {
    localStorage = LM;
  }

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = () => {
      return JSON.parse(localStorage.getItem('todos'));
    };
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
            <li key={t.id} style={{padding: "5px 0"}}>
              <Todo todo={t}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

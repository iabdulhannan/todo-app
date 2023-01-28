"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

// async function addTodo(name, refresh) {
//   await fetch(`/api/todo/add`, {
//     method: "POST",
//     body: JSON.stringify({name}),
//   });
//
//   refresh();
// }





const addTodo = (name, refresh)=>{
  const newTODO = {
    id: uuidv4(),
    name: name,
    isDone: false,
  }
  let todos = JSON.parse(localStorage.getItem('todos'));
  if (todos) {
    todos.push(newTODO)
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    let newTodos=[]
    newTodos.push(newTODO)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  refresh()
}
export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div className={"flex flex-col items-start w-full"}>
      <label>
        Write your new todo task below
      </label>
      <div className={'w-full flex items-center'}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={'bg-gray-50 text-black px-2 py-1 rounded-md w-2/3'}
        />

        <button
          onClick={() => {
            // await addTodo(name, router.refresh);
            addTodo(name, router.refresh)
            // router.refresh()
          }}
          className={'h-8 flex justify-center items-center border w-1/3 mx-5 rounded hover:bg-gray-300 hover:text-gray-800'}
        >
          Add
        </button>
      </div>
    </div>
  );
}

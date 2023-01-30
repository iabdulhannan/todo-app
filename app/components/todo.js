"use client";

import {useRouter} from "next/navigation";
import {Checkbox} from "@material-tailwind/react";

// async function update(id, isDone, refresh) {
//   await fetch(`/api/todo/update`, {
//     method: "POST",
//     body: JSON.stringify({id, isDone}),
//   });
//
//   refresh();
// }
export const update = (id, isDone ,refresh) => {
  // only isDone can be updated atm
  let newTodos = [];
  JSON.parse(localStorage.getItem('todos')).map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      };
    }
    newTodos.push(newTodo);
  });
  localStorage.setItem('todos', JSON.stringify(newTodos))
  refresh();
};


// async function deleteTodo(id, refresh) {
//   await fetch(`/api/todo/delete?id=${id}`, {
//     method: "DELETE",
//   });
//
//   refresh();
// }
function deleteTodo(id, refresh) {
  const previousTodos = JSON.parse(localStorage.getItem('todos'))
  const latestTodos = previousTodos.filter((todo)=>{return todo.id !== id})
  localStorage.setItem('todos', JSON.stringify(latestTodos))
  refresh();
}

export default function Todo({todo}) {
  const router = useRouter();

  return (
    <div className={'border border-white p-5 rounded-2xl flex justify-between items-center'}>
      <Checkbox label={todo.name} labelProps={{style: {color: '#fff'}}} defaultChecked={todo.isDone} ripple={true}
                color={"gray"}
                onClick={(e) => update(todo.id, e.target.checked, router.refresh)}/>

      <button onClick={() => deleteTodo(todo.id, router.refresh)}
              className={'rounded text-white bg-red-600 px-5 py-2 hover:font-semibold hover:underline w-24'}
      >
        Delete
      </button>
    </div>
  );
}

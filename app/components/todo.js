"use client";

import {useRouter} from "next/navigation";
import {Checkbox} from "@material-tailwind/react";

async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({id, isDone}),
  });

  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({todo}) {
  const router = useRouter();

  return (
    <div className={'border border-white p-5 rounded-2xl flex justify-between items-center'}>
      <Checkbox label={todo.name} labelProps={{style:{color: '#fff'}}} checked={todo.isDone} ripple={true} color={"gray"}
                onClick={(e) => update(todo.id, e.target.checked, router.refresh)}/>

        <button onClick={() => deleteTodo(todo.id, router.refresh)}
                className={'rounded text-white bg-red-600 px-5 py-2 hover:font-semibold hover:underline w-24'}
        >
          Delete
        </button>
    </div>
  );
}

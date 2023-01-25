"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({name}),
  });

  refresh();
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
            onClick={async () => {
              await addTodo(name, router.refresh);
              setName("");
            }}
            className={'h-8 flex justify-center items-center border w-1/3 mx-5 rounded hover:bg-gray-300 hover:text-gray-800'}
          >
            Add
          </button>
      </div>
    </div>
  );
}

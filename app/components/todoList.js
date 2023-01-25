import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();

  return (
    <div className={'w-full'}>
      <div className={'my-5'}>

      <h2>TODOs</h2>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
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

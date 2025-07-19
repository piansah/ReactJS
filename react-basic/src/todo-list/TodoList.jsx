import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    { id: 0, PropsText: "Learn HTML", isCompleted: true },
    { id: 1, PropsText: "Learn CSS", isCompleted: true },
    { id: 2, PropsText: "Learn JavaScript", isCompleted: true },
    { id: 3, PropsText: "Learn React", isCompleted: false },
    { id: 4, PropsText: "Learn PHP", isCompleted: false, isDeleted: true },
    { id: 5, PropsText: "Learn Python", isCompleted: true, isDeleted: true },
    { id: 6, PropsText: "Learn Java", isCompleted: false, isDeleted: true },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

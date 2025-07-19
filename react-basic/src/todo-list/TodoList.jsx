import Todo from "./Todo.jsx";

export default function TodoList() {
  return (
    <ul>
      <Todo PropsText="Belajar React" isCompleted={true} />
      <Todo PropsText="Belajar Javascript" isDeleted={true} />
      <Todo PropsText="Belajar CSS" isCompleted={true} />
      <Todo PropsText="Belajar HTML" isCompleted={false} />
    </ul>
  );
}

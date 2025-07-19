import Todo from "./Todo.jsx";

export default function TodoList() {
  return (
    <ul>
      <Todo PropsText="Belajar React" isCompleted={true} />
      <Todo PropsText="Belajar Javascript" isCompleted={false} />
      <Todo PropsText="Belajar CSS" isCompleted={true} />
      <Todo PropsText="Belajar HTML" isCompleted={false} />
      <Todo PropsText="Belajar PHP" isCompleted={true} />
      <Todo PropsText="Belajar Python" isCompleted={false} />
      <Todo PropsText="Belajar Java" isCompleted={true} />
      <Todo PropsText="Belajar C++" isCompleted={false} />
    </ul>
  );
}

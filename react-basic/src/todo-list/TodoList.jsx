import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    { PropsText: "Learn HTML", isCompleted: true },
    { PropsText: "Learn CSS", isCompleted: true },
    { PropsText: "Learn JavaScript", isCompleted: true },
    { PropsText: "Learn React", isCompleted: false },
    { PropsText: "Learn PHP", isCompleted: false },
    { PropsText: "Learn Python", isCompleted: true },
    { PropsText: "Learn Java", isCompleted: false },
  ];

  const todos = data.map((item, index) => <Todo key={index} {...item} />);

  return <ul>{todos}</ul>;
}

// <ul>
//   <Todo PropsText="Belajar React" isCompleted={true} />
//   <Todo PropsText="Belajar Javascript" isCompleted={true} />
//   <Todo PropsText="Belajar CSS" isCompleted={true} />
//   <Todo PropsText="Belajar HTML" isCompleted={false} />
//   <Todo PropsText="Belajar PHP" isDeleted={true} />
//   <Todo PropsText="Belajar Python" isDeleted={true} />
//   <Todo PropsText="Belajar Java" isDeleted={true} />
// </ul>

import { TodoMain, Todo } from "./TodoMain.jsx";

export default function TodoList() {
  const data = [
    {
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      text: "Learn React.js",
      isCompleted: false,
    },
    {
      text: "Learn Next.js",
      isCompleted: true,
    },
    {
      text: "Learn TypeScript",
      isCompleted: false,
    },
    {
      text: "Learn Node.js",
      isCompleted: true,
    },
    {
      text: "Learn Express.js",
      isCompleted: false,
    },
    {
      text: "Learn MongoDB",
      isCompleted: true,
    },
    {
      text: "Learn GraphQL",
      isCompleted: false,
    },
  ];
  const todos = data.map((todo, index) => <Todo key={index} {...todo} />);

  return (
    <>
      {" "}
      {/* Parent wrapper */}
      <ul>
        <TodoMain isCompleted={true} text="Learn HTML" isDeleted={true} />
        <TodoMain isCompleted={false} text="Learn CSS" />
        <TodoMain isCompleted={true} text="Learn JavaScript" />
        <TodoMain isCompleted={false} text="Learn React.js" />
        <TodoMain isCompleted={true} text="Learn Next.js" />
        <TodoMain isCompleted={false} text="Learn TypeScript" />
        <TodoMain isCompleted={true} text="Learn Node.js" />
        <TodoMain isCompleted={false} text="Learn Express.js" />
        <TodoMain isCompleted={true} text="Learn MongoDB" />
        <TodoMain isCompleted={false} text="Learn GraphQL" />
      </ul>
      <ul>
        <Todo isCompleted={true} text="Learn HTML" isDeleted={true} />
        <Todo isCompleted={false} text="Learn CSS" />
        <Todo isCompleted={true} text="Learn JavaScript" />
        <Todo isCompleted={false} text="Learn React.js" />
        <Todo isCompleted={true} text="Learn Next.js" />
        <Todo isCompleted={false} text="Learn TypeScript" />
        <Todo isCompleted={true} text="Learn Node.js" />
        <Todo isCompleted={false} text="Learn Express.js" />
        <Todo isCompleted={true} text="Learn MongoDB" />
        <Todo isCompleted={false} text="Learn GraphQL" />
      </ul>
      <ul>{todos}</ul>
    </>
  );
}

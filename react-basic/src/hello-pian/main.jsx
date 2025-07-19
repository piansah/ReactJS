import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloPian from "./HelloPian.jsx";
import Container from "./Container.jsx";
import TodoList from "../todo-list/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloPian />
      <TodoList />
    </Container>
  </StrictMode>
);

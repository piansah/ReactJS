import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import Task from "./Task.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Task />
    </Container>
  </StrictMode>
);

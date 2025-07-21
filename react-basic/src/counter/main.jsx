import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <CounterApp />
    </Container>
  </StrictMode>
);

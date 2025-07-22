import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Timer />
    </Container>
  </StrictMode>
);

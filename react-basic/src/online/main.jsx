import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import Online from "./Online.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Online />
    </Container>
  </StrictMode>
);

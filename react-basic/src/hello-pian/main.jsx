import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloPian from "./HelloPian.jsx";
import Container from "./Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloPian />
    </Container>
  </StrictMode>
);

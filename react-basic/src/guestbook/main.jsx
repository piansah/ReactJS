import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import GuestBook from "./GuestBook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <GuestBook />
    </Container>
  </StrictMode>
);

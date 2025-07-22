import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import ProfileApp from "./ProfileApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <ProfileApp />
    </Container>
  </StrictMode>
);

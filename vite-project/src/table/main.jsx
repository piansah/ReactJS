import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../hello-world/Container.jsx";
import Table from "./Table.jsx";
import AlertButton from "./AlertButton.jsx";
import MyButton from "./MyButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Table />
      <AlertButton text="Click Me" message="You Click Me" />

      <MyButton text="Smash me" onSmash={() => alert("You Smash Me")} />
      <MyButton text="Hit me" onSmash={() => alert("You Hit Me")} />
    </Container>
  </StrictMode>
);

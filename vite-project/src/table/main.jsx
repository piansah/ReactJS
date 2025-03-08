import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../hello-world/Container.jsx";
import Table from "./Table.jsx";
import AlertButton, { AlertDuaButton } from "../Button/AlertButton.jsx";
import MyButton from "../Button/MyButton.jsx";
import Toolbar from "../Button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Table />
      <AlertButton text="Click Me" message="You Click Me" />
      <AlertDuaButton text="Click Me 2" message="You Click 2 Me" />

      <MyButton text="Smash me" onSmash={() => alert("You Smash Me")} />
      <MyButton text="Hit me" onSmash={() => alert("You Hit Me")} />

      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("You Clicked Toolbar");
      }}/>

      <SearchForm />
    </Container>
  </StrictMode>
);

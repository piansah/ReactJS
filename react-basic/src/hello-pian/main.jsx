import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloPian from "./HelloPian.jsx";
import Container from "./Container.jsx";
import TodoList from "../todo-list/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MaButton from "../button/MaButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloPian />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="You Click Me" />
      <MaButton text="Hit me" onSmash={() => alert("You hit me")} />
      <MaButton text="Hit me too" onSmash={() => alert("You hit me too")} />

      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar Clicked");
        }}
      />

      <SearchForm />
    </Container>
  </StrictMode>
);

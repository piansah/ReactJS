import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-pian/Container.jsx";
import Productlist from "../product/ProductList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Productlist />
    </Container>
  </StrictMode>
);

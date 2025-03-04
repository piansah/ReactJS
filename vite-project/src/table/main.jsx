import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../hello-world/Container.jsx";
import Table from "./Table.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <Table />
            </Container>
        </StrictMode>
    )
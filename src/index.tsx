import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@ui";
import { routes } from "routes";
import "index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

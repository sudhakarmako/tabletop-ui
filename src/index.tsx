import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@ui";
import { protectedRoutes, publicRoutes } from "routes";
import { AuthLayout, Layout } from "@layout";
import "index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route path={path} element={<Layout>{element}</Layout>} />
          ))}
          {protectedRoutes.map(({ path, element }) => (
            <Route path={path} element={<AuthLayout>{element}</AuthLayout>} />
          ))}
        </Routes>
      </BrowserRouter>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

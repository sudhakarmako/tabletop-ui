import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { Container } from "@ui";
import { protectedRoutes, publicRoutes } from "routes";
import { AuthLayout, Layout } from "@layout";
import { store } from 'store';
import "bootstrap-icons/font/bootstrap-icons.scss";
import "index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Container>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={<Layout>{element}</Layout>} />
          ))}
          {protectedRoutes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={<AuthLayout>{element}</AuthLayout>} />
          ))}
        </Routes>
      </BrowserRouter>
    </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

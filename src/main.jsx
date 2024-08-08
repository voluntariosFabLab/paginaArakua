import React from "react";
import ReactDOM from "react-dom/client";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "./index.css";
import "./flags.css";
import App from "./App";  // Importamos el componente App

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />  {/* Renderizamos el componente App */}
    </PrimeReactProvider>
  </React.StrictMode>
);



/* import React from "react";
import ReactDOM from "react-dom/client";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "./index.css";
import "./flags.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Views/Home";
import Contact from "./Views/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
 */
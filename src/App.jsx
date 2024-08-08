import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Views/Home";
import Contact from "./Views/Contact/Contact";
import "./App.css"; // Asegúrate de tener un archivo CSS si es necesario

const App = () => {
  return (
    <Router> {/* Envolvemos el Router para manejar las rutas */}
      <Header /> {/* El Header siempre visible */}
      <div className="containerApp"> {/* Contenedor principal */}
        <Routes> {/* Definimos las rutas aquí */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes añadir más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/* import Home from "./Views/Home"

const App = () => {
  return (
    <div className='containerApp'>
      <Home/>
    </div>
  )
}

export default App */
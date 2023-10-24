// Aufgabe Projekts-React-FakeStore-api-Level-3_7
//
// Bitte erstellt einen kleinen E-Commerce Store mit der FakeStore_API
// Das Design könnt ihr gern ändern

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

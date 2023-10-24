// Aufgabe React-dynamisches-routing-Level-2_3
//
// Heute erstellst du mit dynamischem Routing eine Autoliste.
// Die Liste soll sich aus der cars.json Datei generieren und auf der Startseite dargestellt werden.
// Jedes Element bekommt eine Read more Verlinkung, die zu einer Unterseite führt.
// Auf der Unterseite werden dann ergänzende Informationen des Autos angezeigt.
// CSS und die json Datei sind vorgegeben (siehe Code-Snippet)
// Die Klasse grid musst du natürlich an der richtigen Stelle in deiner App verwenden.
// Verwende useParams()

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import CarInfo from "./pages/CarInfo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CarInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

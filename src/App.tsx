import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Components/Home";
function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

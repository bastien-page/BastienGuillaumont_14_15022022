import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import House from "./pages/House";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/OC_P11_Kasa/" element={<Home />} />
      <Route path="OC_P11_Kasa/about" element={<About />} />
      <Route path="OC_P11_Kasa/house/:id" element={<House />} />
      <Route path="OC_P11_Kasa/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

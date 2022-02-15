import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./view/Employee";
import Home from "./view/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

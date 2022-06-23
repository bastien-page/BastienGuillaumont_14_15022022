import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./view/Employee";
import Home from "./view/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BastienGuillaumont_14_15022022/" element={<Home />} />
        <Route
          path="/BastienGuillaumont_14_15022022/employee"
          element={<Employee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

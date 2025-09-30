import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Login } from "./components/Login";
import Info from "./pages/Info.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

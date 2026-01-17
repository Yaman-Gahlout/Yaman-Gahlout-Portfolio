import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { PortfolioContext } from "./store/PortfolioContext";
import { useEffect, useState } from "react";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

export default function App() {
  const [tab, setTab] = useState("Home");
  const navigate = useNavigate("");

  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <PortfolioContext.Provider value={{ tab, setTab }}>
      <div className="h-screen w-screen flex flex-col items-center">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </div>
    </PortfolioContext.Provider>
  );
}

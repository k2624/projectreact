import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./componants/Nav";
export function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

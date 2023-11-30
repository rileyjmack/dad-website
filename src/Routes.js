import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Routing;

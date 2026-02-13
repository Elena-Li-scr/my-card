import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatedBackground } from "./components/AnimatedBackground";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import Portfolio from "./pages/Portfolio";
import PortfolioItem from "./components/PortfolioItem";
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
        </Route>
      </Routes>

      <AnimatedBackground className="bg-canvas" intensity={1} speed={0.12} blurPx={12} />
    </BrowserRouter>
  )
}

export default App

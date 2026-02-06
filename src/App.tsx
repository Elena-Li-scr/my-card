import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatedBackground } from "./components/AnimatedBackground";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <AnimatedBackground className="bg-canvas" intensity={1} speed={0.12} blurPx={12} />
    </BrowserRouter>
  )
}

export default App

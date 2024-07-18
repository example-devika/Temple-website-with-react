import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Templetimings from "./components/Templetimings";
import Content from "./Content";
import History from "./components/History";
import Sevas from "./components/Sevas";
import Photos from "./components/Photos";
import Contactus from "./components/Contactus";
import Reachus from "./components/Reachus";
import Founder from "./components/Founder";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Templetimings" element={<Templetimings />} />
        <Route path="/History" element={<History />} />
        <Route path="/Sevas" element={<Sevas />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Reachus" element={<Reachus />} />
        <Route path="/Founder" element={<Founder />} />
      </Routes>
    </>
  );
}

export default App;

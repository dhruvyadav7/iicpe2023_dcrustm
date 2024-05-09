import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Committee from "./components/Committee"
import ContactUs from "./components/ContactUs"
import CallForPapper from "./components/CallForPapper"
import Venue from "./components/Venue"
import Registration from "./components/Registration"
import FinentialSupport from "./components/FinentialSupport"
import PapperSub from "./components/PapperSub"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<CallForPapper />} />
        <Route path="/home" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/finentialSupport" element={<FinentialSupport />} />
        <Route path="/papperSub" element={<PapperSub />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

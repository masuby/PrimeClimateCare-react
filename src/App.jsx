import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {News,Donate, About} from "./components/pages";
import Footer from "./components/Footer/Footer"
import Body from "./components/Body/Body";
import Login from "./components/SignInSignUp/SignInSignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

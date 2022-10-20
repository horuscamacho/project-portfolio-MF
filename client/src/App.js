import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/HomeC/Home";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import ProjectDetail from "./components/Details/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

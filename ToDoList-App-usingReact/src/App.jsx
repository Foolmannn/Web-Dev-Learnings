import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home1 />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";


export default function App() {
  const [color, setColor] = useState('#ef4444'); // Starts as Red

  return (
    <div className="p-10" style={{ '--brand-color': color }}>
      <button 
        className="bg-brand text-white px-6 py-3 rounded-lg transition-colors"
        onClick={() => setColor('#22c55e')} // Changes to Green
      >
        Click to change my color
      </button>
      
      <p className="mt-4 text-brand font-bold">
        This text also changes color!
      </p>
    </div>
  );
}

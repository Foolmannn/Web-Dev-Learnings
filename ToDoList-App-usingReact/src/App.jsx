import { useState } from "react";

import Navbar from "./components/Navbar";
import "./index.css";


export default function App() {
  const [color, setColor] = useState('#ef4444'); // Starts as Red

  return (
    <>
    <Navbar/>
<div className="hello bg-primary p-4  ">
  Tailwind Working 
</div>
    <div className="bg-[rgb(var(--color-primary))] text-white p-4">
      Working Test
    </div>
    </>
  );
}

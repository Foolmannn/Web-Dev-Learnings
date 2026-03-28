import React from "react";
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
      <footer className="flex justify-around bg-slate-800 text-white py-4">
        <div className="text-center ">Copyright Facebook | All rights reserved</div>
        <ul className="flex gap-6 text-sm ">
          <a href="/">
            <li> Home</li>
          </a>
          <a href="/about">
            <li> About</li>
          </a>
          <a href="/contact">
            <li> Contact</li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

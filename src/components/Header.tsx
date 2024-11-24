import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">BioMedConf</div>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="#" className="block md:inline-block p-2">
            Home
          </Link>
          <Link href="#" className="block md:inline-block p-2">
            About
          </Link>
          <Link href="#" className="block md:inline-block p-2">
            Services
          </Link>
          <Link href="#" className="block md:inline-block p-2">
            Contact
          </Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
};

export default Header;

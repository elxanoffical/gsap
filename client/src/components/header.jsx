import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Header = () => {
  const logoRef = useRef();
  const nav = useRef();
  const navBtns = useRef();

  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  useEffect(() => {
    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: -20, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 }
    );

    tl.fromTo(
      navBtns.current,
      { opacity: 0, x: 20, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      "<"
    );

    tl.fromTo(
      nav.current,
      { opacity: 0, x: -20, y: -10, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      "<"
    );
  }, []);

  return (
    <header className="flex items-center bg-teal-700 justify-between py-6 px-10  text-white border-b border-b-gray-500">
      <h1
        ref={logoRef}
        className="text-2xl font-semibold bg-gradient-to-r text-gradient-to-r to-danger bg-clip-text from-pink-500 to-orange-500"
      >
        Logo
      </h1>
      <nav ref={nav} className="flex items-center gap-10">
        <a
          href="#"
          className="text-xl font-medium tracking-wide hover:text-gray-300 transition-colors duration-300 hover:border-b-black"
        >
          Home
        </a>
        <a
          href="#"
          className="text-xl font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-xl font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-xl font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
        >
          Cervise
        </a>
        <a
          href="#"
          className="text-xl font-medium tracking-wide hover:text-gray-300  transition-colors duration-300"
        >
          Faq
        </a>
      </nav>
      <div ref={navBtns} className="flex items-center gap-5">
        <button
          className="py-3 px-7  text-white font-medium tracking-wide rounded-lg
           hover:scale-105 transition-all duration-300 bg-gradient-to-r from-teal-300 to-blue-500 hover:from-pink-500 hover:to-orange-500"
        >
          Sign In
        </button>
        <button
          className="py-3 px-7  text-white font-medium tracking-wide rounded-lg
            hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-teal-300 hover:to-blue-500"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;

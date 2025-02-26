import { useState } from "react";
import headerLogo from "/assets/images/header-logo.svg";
import hamburger from "/assets/icons/hamburger.svg";
import closeIcon from "/assets/icons/close.svg"; // Add a close icon
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-8 absolute z-20 sm:px-16">
      <nav className="flex justify-between items-center max-w-[1440px] m-auto">
        <a href="/">
          <img src={headerLogo} alt="Nike-Logo" width={130} height={29} />
        </a>

        {/* Desktop Menu */}
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-[#6D6D6D]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="hidden max-lg:block">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <img src={hamburger} width={25} height={25} alt="Menu" />
          </button>
        </div>
      </nav>

      {/* Backdrop (overlay) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu (Sliding in from Left) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <img src={closeIcon} width={25} height={25} alt="Close" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col items-start gap-6 pl-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-[#6D6D6D]"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;

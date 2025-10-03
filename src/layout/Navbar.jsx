import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/20 text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <h2 className="font1 text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            MD RIYAZ AKONDO
          </h2>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navbarLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-white text-lg font-medium tracking-wide transition-all duration-300 hover:text-cyan-400 ${
                      isActive ? "text-cyan-400 after:w-full" : "after:w-0"
                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32 }}
              className="fixed top-0 right-0 z-50 h-screen w-64 px-6 py-6 shadow-lg bg-black text-white"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-6">
                {navbarLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

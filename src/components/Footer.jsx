import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center transition-colors duration-500  text-gray-300">
      {/* 🔹 Developer Name */}
      <div className="text-lg md:text-xl font-semibold text-cyan-400">
        &lt;Md Riyaz Akondo /&gt;
      </div>

      {/* 🔹 Role */}
      <div className="my-2 text-sm md:text-base tracking-wide text-gray-400 dark:text-black">
        — A Passionate Web Developer —
      </div>

      {/* 🔹 Copyright */}
      <div className="text-xs md:text-sm mt-2 text-gray-400 dark:text-black">
        © {new Date().getFullYear()} Developed with{" "}
        <span className="text-cyan-400">⚡</span> by{" "}
        <span className="text-cyan-400 font-semibold">Md Riyaz Akondo</span> |
        Made with <span className="text-red-500">❤️</span> in Bangladesh
      </div>
    </footer>
  );
};

export default Footer;

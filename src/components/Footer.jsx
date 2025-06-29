// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black/40 backdrop-blur-md border-t border-cyan-500 text-slate-300 text-sm py-3 px-4 flex flex-col sm:flex-row justify-between items-center z-50">
      <div>
        © 2025 <span className="font-semibold text-white">Voice Auction AI</span>
      </div>
      <div className="mt-2 sm:mt-0">
        Made with <span className="text-red-400">♥</span> by{" "}
        <span className="font-bold text-white">Harshit</span>
      </div>
    </footer>
  );
}

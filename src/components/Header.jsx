import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-cyan-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-cyan-300 tracking-wide">
          🔊 Voice Auction
        </h1>

        <nav className="hidden md:flex gap-6 text-white text-sm">
          <a href="#dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
          <a href="#analytics" className="hover:text-cyan-400 transition">Analytics</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </div>

      <div className="text-center py-4">
        <p className="text-xl md:text-2xl text-white font-mono animate-typing overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 pr-3 w-fit mx-auto">
          Place Your Bids... Real Time. Voice Controlled. Future Ready.
        </p>
      </div>
    </header>
  );
}

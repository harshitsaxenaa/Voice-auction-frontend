import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-cyan-500 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">Voice Auction</h1>
        <nav className="space-x-6 hidden sm:block">
          <a href="#" className="text-white hover:text-cyan-300 transition">Home</a>
          <a href="#analytics" className="text-white hover:text-cyan-300 transition">Analytics</a>
          <a href="#contact" className="text-white hover:text-cyan-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-cyan-500 text-white text-center py-4 fixed bottom-0 w-full z-40"
    >
      <p className="text-sm text-cyan-300">
        Made with ❤️ by <span className="font-bold text-white">Harshit</span> | <a href="mailto:harshit@example.com" className="underline hover:text-pink-400">Contact</a>
      </p>
    </footer>
  );
}

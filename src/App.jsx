import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import LiveAnalytics from "./components/LiveAnalytics";
import Header from "./components/Header";
import Footer from "./components/Footer";

const BACKEND_URL = "https://voice-auction.onrender.com/products";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [previousBids, setPreviousBids] = useState({});

  const fetchProducts = async () => {
    try {
      const res = await fetch(BACKEND_URL);
      const data = await res.json();

      setProducts(data);
      const prev = {};
      data.forEach((p) => {
        prev[p.name] = p.highest_bid;
      });
      setPreviousBids(prev);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 5000);
    return () => clearInterval(interval);
  }, []);

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.highest_bid - b.highest_bid
        : b.highest_bid - a.highest_bid
    );

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen p-6 font-sans">

      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          🏆 Live Auction Hub
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Real-time bids • Interactive • Elegant • Fast
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 px-4">
        <input
          type="text"
          placeholder="🔍 Search items..."
          className="px-5 py-3 rounded-xl bg-slate-800/80 text-white backdrop-blur-md border border-slate-700 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-5 py-3 rounded-xl bg-slate-800/80 text-white backdrop-blur-md border border-slate-700 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Sort: Highest Bid</option>
          <option value="asc">Sort: Lowest Bid</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        {filtered.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            previousBid={previousBids[product.name]}
          />
        ))}
      </div>
      
      {/* Live Analytics Panel */}
      <LiveAnalytics />
	
      {/* Footer */}
      <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-700 mt-12">
        © 2025 Voice Auction AI · Made with ❤️ by <span className="font-bold text-white">Harshit</span>
      </footer>

      {/* Voice Agent Script */}
      <script
        id="omnidimension-web-widget"
        async
        src="https://backend.omnidim.io/web_widget.js?secret_key=46cc15692c43611615a26bf7787faf99"
      ></script>
    </div>
  );
}

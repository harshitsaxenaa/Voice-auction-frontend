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

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "low"
        ? a.highest_bid - b.highest_bid
        : b.highest_bid - a.highest_bid
    );

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="px-4 sm:px-6 lg:px-10 max-w-7xl w-full mx-auto py-10 grow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-400">
          🎯 Live Auction Dashboard
        </h2>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <input
            type="text"
            placeholder="🔍 Search product..."
            className="w-full md:w-1/2 p-3 rounded-md bg-gray-800 border border-cyan-500 focus:outline-none focus:ring focus:ring-cyan-400 transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-60 p-3 rounded-md bg-gray-800 border border-cyan-500 text-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by</option>
            <option value="low">Lowest to Highest Bid</option>
            <option value="high">Highest to Lowest Bid</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              previousBid={previousBids[product.name]}
            />
          ))}
        </div>

        {/* Live Analytics Section */}
        <div id="analytics" className="mt-12">
          <LiveAnalytics />
        </div>
      </main>

      <Footer />

      {/* Voice Agent Widget */}
      <script
        id="omnidimension-web-widget"
        async
        src="https://backend.omnidim.io/web_widget.js?secret_key=46cc15692c43611615a26bf7787faf99"
      ></script>
    </div>
  );
}

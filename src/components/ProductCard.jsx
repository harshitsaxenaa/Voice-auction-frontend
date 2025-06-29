import React, { useEffect, useState } from "react";

export default function ProductCard({ product, previousBid }) {
  const [isIncreased, setIsIncreased] = useState(false);

  useEffect(() => {
    if (product.highest_bid > (previousBid || 0)) {
      setIsIncreased(true);
      const timeout = setTimeout(() => setIsIncreased(false), 10000); // 10 sec glow
      return () => clearTimeout(timeout);
    }
  }, [product.highest_bid]);

  return (
    <div
      className={`relative group rounded-xl p-6 backdrop-blur-lg border transition-all duration-500 overflow-hidden
        ${
          isIncreased
            ? "border-l-4 border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)] animate-pulse"
            : "border border-slate-700"
        }
        bg-gradient-to-tr from-[#0f172a]/60 to-[#1e293b]/60 hover:scale-[1.03] hover:shadow-xl`}
    >
      {/* Glow Tag if bid increased */}
      {isIncreased && (
        <span className="absolute top-2 right-2 text-green-400 font-bold text-xs animate-bounce">
          ↑ New High Bid!
        </span>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold text-cyan-300 mb-1 group-hover:text-cyan-400 transition">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

      {/* Bid Info */}
      <div className="space-y-2">
        <p>
          <span className="text-yellow-400 font-medium">Highest Bid:</span>{" "}
          <span className="text-white">₹{product.highest_bid}</span>
        </p>
        <p>
          <span className="text-blue-400 font-medium">Time Left:</span>{" "}
          <span className="text-white">{product.time_remaining}</span>
        </p>
        <p className="text-sm text-slate-500">
          Total Bids: {product.bidding_history?.length || 0}
        </p>
      </div>
    </div>
  );
}

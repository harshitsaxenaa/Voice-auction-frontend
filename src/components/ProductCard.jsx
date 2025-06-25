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
      className={`relative bg-gray-800 p-4 rounded-lg shadow-md border-l-4 transition-all duration-500 ${
        isIncreased ? "border-green-500 shadow-green-500/30 animate-pulse" : "border-gray-700"
      }`}
    >
      {isIncreased && (
        <span className="absolute top-2 right-2 text-green-400 font-bold text-xs animate-bounce">
          ↑ Higher Bid
        </span>
      )}
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-400 mb-2">{product.description}</p>
      <p>
        <span className="font-bold text-yellow-400">Highest Bid:</span> ₹{product.highest_bid}
      </p>
      <p>
        <span className="font-bold text-blue-300">Time Left:</span> {product.time_remaining}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Total Bids: {product.bidding_history?.length || 0}
      </p>
    </div>
  );
}

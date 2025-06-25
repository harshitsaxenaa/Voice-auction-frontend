import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BACKEND_URL = "https://voice-auction.onrender.com/stats";

export default function LiveAnalytics() {
  const [labels, setLabels] = useState([]);
  const [bids, setBids] = useState([]);

  const fetchStats = async () => {
    try {
      const res = await fetch(BACKEND_URL);
      const data = await res.json();

      const productNames = Object.keys(data);
      const bidCounts = productNames.map((key) => data[key].highest_bid);


      setLabels(productNames);
      setBids(bidCounts);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Bids",
        data: bids,
        backgroundColor: "rgba(0, 255, 255, 0.7)",
        borderColor: "rgba(0, 255, 255, 1)",
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: "rgba(0, 255, 255, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: "#fff" } },
    },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 p-6 rounded-xl shadow-lg mt-8 border border-cyan-400">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center animate-pulse">
        📊 Live Bid Analytics
      </h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

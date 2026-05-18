"use client";
import { useState } from "react";

const symbols = ["🍒", "🍋", "🍇", "💎", "7️⃣", "🎯", "🔥", "⭐", "👾", "💸"];

export default function SlotMachine() {
  const [reels, setReels] = useState(["❓", "❓", "❓"]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("Spin to win!");

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setMessage("Spinning...");

    // একটি ফেক স্পিনিং ইফেক্ট
    let counter = 0;
    const interval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      counter++;
      if (counter > 10) {
        clearInterval(interval);
        setSpinning(false);

        // ফাইনাল রেজাল্ট লজিক
        const finalReels = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setReels(finalReels);

        if (
          finalReels[0] === finalReels[1] &&
          finalReels[1] === finalReels[2]
        ) {
          setMessage("🎉 JACKPOT! 🎉");
        } else {
          setMessage("Try Again, Punk!");
        }
      }
    }, 100);
  };

  return (
    <div className="p-4 border-2 border-purple-500 bg-black text-green-400 font-mono text-center rounded-md shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 font-bold">
        🎰 RETRO SLOTS 🎰
      </h3>

      <div className="relative flex justify-center gap-3 text-4xl my-4 bg-gray-950 p-4 border-2 border-dashed border-green-500 rounded overflow-hidden">
        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.3)_2px,rgba(0,255,0,0.3)_4px)]"></div>

        <div className="relative z-10 flex gap-3">
          {reels.map((symbol, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex items-center justify-center bg-gray-900 border-2 border-green-400 rounded transition-transform ${
                spinning ? "animate-spin" : ""
              }`}
              style={
                spinning ? { animationDuration: `${0.1 * (index + 1)}s` } : {}
              }
            >
              <span className="drop-shadow-lg">{symbol}</span>
            </div>
          ))}
        </div>
      </div>

      <p
        className={`text-xs mb-3 font-bold ${
          message.includes("JACKPOT")
            ? "text-yellow-300 animate-pulse"
            : "text-red-400"
        }`}
      >
        {message}
      </p>

      <button
        onClick={spin}
        disabled={spinning}
        className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-700 text-white border-2 border-purple-400 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
      >
        {spinning ? "⟳ SPINNING..." : "▶ PULL LEVER"}
      </button>
    </div>
  );
}

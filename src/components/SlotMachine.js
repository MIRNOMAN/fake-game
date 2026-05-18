/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";

const symbols = ["🍒", "🍋", "🍇", "💎", "7️⃣", "🎯", "🔥", "⭐", "👾", "💸"];

export default function SlotMachine() {
  const { showSuccess, showWarning } = useToast();
  const [reels, setReels] = useState(["❓", "❓", "❓"]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("Spin to win!");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [totalSpins, setTotalSpins] = useState(0);
  const [wins, setWins] = useState(0);

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem("slotStats");
    if (savedStats) {
      const {
        score: s,
        maxStreak: ms,
        totalSpins: ts,
        wins: w,
      } = JSON.parse(savedStats);
      setScore(s || 0);
      setMaxStreak(ms || 0);
      setTotalSpins(ts || 0);
      setWins(w || 0);
    }
  }, []);

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem(
      "slotStats",
      JSON.stringify({ score, maxStreak, totalSpins, wins }),
    );
  }, [score, maxStreak, totalSpins, wins]);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setMessage("Spinning...");
    setTotalSpins((prev) => prev + 1);

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
          const basePoints = 500;
          const points = Math.floor(basePoints * multiplier);
          setScore((prev) => prev + points);
          setStreak((prev) => prev + 1);
          setWins((prev) => prev + 1);
          setMultiplier((prev) => Math.min(prev + 0.2, 3));

          setMessage("🎉 JACKPOT! 🎉");
          showSuccess(
            `🎉 TRIPLE MATCH! +${points} PTS! (x${multiplier.toFixed(1)})`,
          );

          if (streak + 1 > maxStreak) {
            setMaxStreak(streak + 1);
          }
        } else {
          setMessage("Try Again, Punk!");
          setStreak(0);
          setMultiplier(1);
          showWarning("❌ No match. Streak reset.");
        }
      }
    }, 100);
  };

  const resetStats = () => {
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setMultiplier(1);
    setTotalSpins(0);
    setWins(0);
    setReels(["❓", "❓", "❓"]);
    localStorage.removeItem("slotStats");
  };

  const winRate = totalSpins > 0 ? ((wins / totalSpins) * 100).toFixed(1) : 0;

  return (
    <div className="p-4 border-2 border-purple-500 bg-black text-green-400 font-mono text-center rounded-md shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 font-bold">
        🎰 RETRO SLOTS 🎰
      </h3>

      {/* Stats Display */}
      <div className="grid grid-cols-4 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded border border-purple-600">
        <div>
          <p className="text-yellow-400">Score</p>
          <p className="font-bold">{score}</p>
        </div>
        <div>
          <p className="text-red-400">Streak</p>
          <p className="font-bold">{streak}x</p>
        </div>
        <div>
          <p className="text-cyan-400">Multi</p>
          <p className="font-bold">{multiplier.toFixed(1)}x</p>
        </div>
        <div>
          <p className="text-green-400">W/L</p>
          <p className="font-bold">{winRate}%</p>
        </div>
      </div>

      {/* Reels */}
      <div className="relative flex justify-center gap-3 text-4xl my-4 bg-gray-950 p-4 border-2 border-dashed border-green-500 rounded overflow-hidden">
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

      <div className="flex gap-2">
        <button
          onClick={spin}
          disabled={spinning}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-700 text-white border-2 border-purple-400 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
        >
          {spinning ? "⟳ SPINNING..." : "▶ PULL LEVER"}
        </button>
        <button
          onClick={resetStats}
          className="px-3 py-2 bg-gray-800 text-gray-400 border border-gray-600 hover:border-red-500 hover:text-red-400 text-xs uppercase font-bold transition-all"
        >
          🔄
        </button>
      </div>
    </div>
  );
}

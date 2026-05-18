"use client";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/useToast";

export default function EnhancedSlots() {
  const { showSuccess, showWarning, showInfo } = useToast();
  const [reels, setReels] = useState([0, 0, 0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [totalSpins, setTotalSpins] = useState(0);
  const counterRefs = useRef([]);

  const symbols = ["🍒", "🍋", "🔔", "💎", "👑", "🌟", "7️⃣", "🎰"];

  useEffect(() => {
    const saved = localStorage.getItem("enhancedSlotsStats");
    if (saved) {
      const { score: s, totalSpins: ts, multiplier: m } = JSON.parse(saved);
      setScore(s || 0);
      setTotalSpins(ts || 0);
      setMultiplier(m || 1);
    }
  }, []);

  const saveStats = (newScore, newSpins, newMult) => {
    localStorage.setItem(
      "enhancedSlotsStats",
      JSON.stringify({
        score: newScore,
        totalSpins: newSpins,
        multiplier: newMult,
      }),
    );
  };

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const newReels = [
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
    ];

    // Smooth spinning animation
    let rotation = 0;
    const spinInterval = setInterval(() => {
      rotation += 30;
      if (rotation >= 360 * 3) {
        clearInterval(spinInterval);
        setReels(newReels);
        setIsSpinning(false);

        // Check for win
        if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
          const mult = Math.min(3, Math.floor((totalSpins + 1) / 5) + 1);
          const points = 100 * mult;
          setScore((prev) => {
            const newScore = prev + points;
            setMultiplier(mult);
            saveStats(newScore, totalSpins + 1, mult);
            showSuccess(`🎉 JACKPOT! +${points} × ${mult}x`);
            return newScore;
          });
        } else {
          setTotalSpins((prev) => {
            const newTotal = prev + 1;
            saveStats(score, newTotal, multiplier);
            return newTotal;
          });
          showWarning("Better luck next time!");
        }
      }
    }, 50);
  };

  return (
    <div className="p-4 border-2 border-purple-500 bg-black text-purple-400 font-mono text-center rounded-md shadow-lg shadow-purple-500/50">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
        💎 ENHANCED SLOTS 💎
      </h3>

      <div className="grid grid-cols-4 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded">
        <div>
          <p className="text-cyan-400">Score</p>
          <p className="font-bold text-yellow-300">{score}</p>
        </div>
        <div>
          <p className="text-lime-400">Spins</p>
          <p className="font-bold text-pink-300">{totalSpins}</p>
        </div>
        <div>
          <p className="text-purple-400">Multi</p>
          <p className="font-bold text-purple-300">{multiplier}x</p>
        </div>
        <div>
          <p className="text-orange-400">Luck</p>
          <p className="font-bold text-green-300">
            {Math.round((totalSpins / (totalSpins + 1)) * 100)}%
          </p>
        </div>
      </div>

      <div className="mb-3 bg-gray-950 p-4 rounded border-2 border-purple-600 flex justify-around items-center">
        {reels.map((reel, idx) => (
          <div
            key={idx}
            className="text-5xl p-3 bg-gray-900 rounded border-2 border-purple-500"
          >
            {symbols[reel]}
          </div>
        ))}
      </div>

      <button
        onClick={spin}
        disabled={isSpinning}
        className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-700 text-white border-2 border-purple-400 hover:border-purple-200 disabled:opacity-50 text-xs uppercase font-bold transition active:scale-95"
      >
        {isSpinning ? "🎰 SPINNING..." : "🎰 SPIN"}
      </button>
    </div>
  );
}

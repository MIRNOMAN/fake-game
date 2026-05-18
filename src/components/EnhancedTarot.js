"use client";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useToast } from "@/hooks/useToast";

export default function EnhancedTarot() {
  const { showSuccess, showInfo } = useToast();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [stats, setStats] = useState({ total: 0, unique: 0 });

  const tarotDeck = [
    { name: "The Fool", emoji: "🤡", meaning: "New Beginnings" },
    { name: "The Magician", emoji: "🎩", meaning: "Manifestation" },
    { name: "The High Priestess", emoji: "👑", meaning: "Intuition" },
    { name: "The Empress", emoji: "👸", meaning: "Femininity" },
    { name: "The Emperor", emoji: "🤴", meaning: "Authority" },
    { name: "The Hierophant", emoji: "🕉️", meaning: "Spirituality" },
    { name: "The Lovers", emoji: "💕", meaning: "Relationships" },
    { name: "The Chariot", emoji: "🏎️", meaning: "Determination" },
    { name: "Strength", emoji: "💪", meaning: "Inner Power" },
    { name: "The Hermit", emoji: "🕯️", meaning: "Reflection" },
    { name: "Wheel of Fortune", emoji: "🎡", meaning: "Fate" },
    { name: "Justice", emoji: "⚖️", meaning: "Balance" },
    { name: "The Hanged Man", emoji: "🤸", meaning: "Perspective" },
    { name: "Death", emoji: "💀", meaning: "Transformation" },
    { name: "Temperance", emoji: "🧪", meaning: "Moderation" },
    { name: "The Devil", emoji: "😈", meaning: "Bondage" },
    { name: "The Tower", emoji: "🗼", meaning: "Chaos" },
    { name: "The Star", emoji: "⭐", meaning: "Hope" },
    { name: "The Moon", emoji: "🌙", meaning: "Illusion" },
    { name: "The Sun", emoji: "☀️", meaning: "Success" },
    { name: "Judgement", emoji: "👼", meaning: "Awakening" },
    { name: "The World", emoji: "🌍", meaning: "Completion" },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("enhancedTarotStats");
    if (saved) {
      const { total, unique, drawn } = JSON.parse(saved);
      setStats({ total: total || 0, unique: unique || 0 });
      setDrawnCards(drawn || []);
    }
  }, []);

  const drawCard = () => {
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCurrentCard(card);
    setIsFlipped(false);

    const newDrawn = [...drawnCards, card.name];
    const unique = new Set(newDrawn).size;
    const newStats = { total: newDrawn.length, unique };

    setDrawnCards(newDrawn);
    setStats(newStats);

    localStorage.setItem(
      "enhancedTarotStats",
      JSON.stringify({ total: newDrawn.length, unique, drawn: newDrawn }),
    );

    showInfo(`🔮 Drew: ${card.name}`);
    setTimeout(() => setIsFlipped(true), 500);
  };

  return (
    <div className="p-4 border-2 border-cyan-500 bg-black text-cyan-400 font-mono text-center rounded-md shadow-lg shadow-cyan-500/50">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
        🔮 ENHANCED TAROT 🔮
      </h3>

      <div className="grid grid-cols-3 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded">
        <div>
          <p className="text-blue-400">Total</p>
          <p className="font-bold text-cyan-300">{stats.total}</p>
        </div>
        <div>
          <p className="text-purple-400">Unique</p>
          <p className="font-bold text-cyan-300">{stats.unique}/22</p>
        </div>
        <div>
          <p className="text-pink-400">Complete</p>
          <p className="font-bold text-cyan-300">
            {Math.round((stats.unique / 22) * 100)}%
          </p>
        </div>
      </div>

      <div className="mb-3 flex justify-center">
        <div style={{ perspective: "1000px", width: "120px", height: "160px" }}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Card Back */}
            <div
              className="bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500 rounded w-full h-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <span className="text-4xl">🔮</span>
            </div>

            {/* Card Front */}
            <div
              className="bg-gradient-to-br from-yellow-900 to-orange-900 border-2 border-cyan-500 rounded w-full h-full flex flex-col items-center justify-center p-2 cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <span className="text-3xl">{currentCard?.emoji}</span>
              <p className="text-xs text-cyan-200 mt-1 font-bold">
                {currentCard?.name}
              </p>
            </div>
          </ReactCardFlip>
        </div>
      </div>

      <button
        onClick={drawCard}
        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-700 to-blue-700 text-white border-2 border-cyan-400 hover:border-cyan-200 text-xs uppercase font-bold transition active:scale-95"
      >
        🔮 DRAW CARD
      </button>
    </div>
  );
}

"use client";
import { useState } from "react";

// Expanded Major Arcana - 22 Cards for deeper mystical experience
const tarotDeck = [
  {
    name: "The Fool",
    meaning: "A new beginning, optimism, and trust in the future.",
    image: "🃏",
  },
  {
    name: "The Magician",
    meaning: "Manifestation, resourcefulness, and power.",
    image: "🧙‍♂️",
  },
  {
    name: "The High Priestess",
    meaning: "Intuition, sacred knowledge, and divine feminine.",
    image: "🔮",
  },
  {
    name: "The Empress",
    meaning: "Femininity, beauty, abundance, and nature.",
    image: "👑",
  },
  {
    name: "The Emperor",
    meaning: "Leadership, authority, stability, and structure.",
    image: "🏰",
  },
  {
    name: "The Hierophant",
    meaning: "Tradition, learning, spiritual wisdom, and ritual.",
    image: "📜",
  },
  {
    name: "The Lovers",
    meaning: "Love, relationships, harmony, and communication.",
    image: "💕",
  },
  {
    name: "The Chariot",
    meaning: "Determination, will power, and control.",
    image: "🎯",
  },
  {
    name: "Strength",
    meaning: "Inner strength, courage, patience, and control.",
    image: "💪",
  },
  {
    name: "The Hermit",
    meaning: "Soul-searching, introspection, and inner guidance.",
    image: "🕯️",
  },
  {
    name: "Wheel of Fortune",
    meaning: "Destiny, cycles, abundance, and fate.",
    image: "🎡",
  },
  {
    name: "Justice",
    meaning: "Justice, truth, accountability, and balance.",
    image: "⚖️",
  },
  {
    name: "The Hanged Man",
    meaning: "Letting go, surrender, new perspective, and pause.",
    image: "🌙",
  },
  {
    name: "Death",
    meaning: "Endings, change, transformation, and transition.",
    image: "💀",
  },
  {
    name: "Temperance",
    meaning: "Balance, moderation, healing, and harmony.",
    image: "⚗️",
  },
  {
    name: "The Devil",
    meaning: "Bondage, materialism, playfulness, and detachment.",
    image: "😈",
  },
  {
    name: "The Tower",
    meaning: "Sudden change, upheaval, chaos, and revelation.",
    image: "⚡",
  },
  {
    name: "The Star",
    meaning: "Hope, spirituality, renewed sense of purpose.",
    image: "⭐",
  },
  {
    name: "The Moon",
    meaning: "Illusion, intuition, spiritual dimension, and dreams.",
    image: "🌙",
  },
  {
    name: "The Sun",
    meaning: "Success, happiness, vitality, and joy.",
    image: "☀️",
  },
  {
    name: "Judgement",
    meaning: "Awakening, reckoning, transformation, and renewal.",
    image: "📯",
  },
  {
    name: "The World",
    meaning: "Completion, wholeness, fulfillment, and attainment.",
    image: "🌍",
  },
];

export default function TarotReading() {
  const [card, setCard] = useState(null);
  const [reading, setReading] = useState(false);

  const drawCard = () => {
    setReading(true);
    setCard(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotDeck.length);
      setCard(tarotDeck[randomIndex]);
      setReading(false);
    }, 1500); // একটি মিস্টিক্যাল ডিলে বা লোডিং টাইম
  };

  return (
    <div className="p-4 border-2 border-cyan-500 bg-black text-cyan-400 font-mono text-center rounded-md shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold">
        🔮 CYBER TAROT 🔮
      </h3>

      <div className="relative h-48 flex flex-col items-center justify-center border-2 border-dashed border-cyan-600 my-4 p-4 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
        {/* Glitch effect background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,.2)_25%,rgba(0,255,255,.2)_50%,transparent_50%,transparent_75%,rgba(0,255,255,.2)_75%,rgba(0,255,255,.2))] bg-[length:40px_40px] animate-pulse"></div>

        <div className="relative z-10">
          {reading && (
            <div className="text-center">
              <p className="text-xs mb-3 text-purple-300 animate-pulse font-bold">
                ACCESSING TEMPORAL NEXUS...
              </p>
              <div className="text-5xl animate-spin mb-2">🔮</div>
              <div className="flex gap-1 justify-center">
                <span
                  className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span
                  className="w-1 h-1 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></span>
              </div>
            </div>
          )}

          {!reading && !card && (
            <div className="text-6xl opacity-50 animate-pulse">🎴</div>
          )}

          {!reading && card && (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="text-6xl mb-2 drop-shadow-lg transform hover:scale-110 transition-transform">
                {card.image}
              </div>
              <h4 className="text-white font-bold text-sm uppercase drop-shadow-md bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {card.name}
              </h4>
              <p className="text-[11px] text-cyan-300 mt-2 italic leading-tight max-w-xs">
                &quot;{card.meaning}&quot;
              </p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={drawCard}
        disabled={reading}
        className="w-full px-4 py-2 bg-gradient-to-r from-cyan-900 to-blue-900 text-white border-2 border-cyan-500 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
      >
        {reading ? "◉ READING..." : "◯ DRAW A CARD"}
      </button>
    </div>
  );
}

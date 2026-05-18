"use client";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useToast } from "@/hooks/useToast";

export default function MemoryGame() {
  const { showSuccess, showWarning } = useToast();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const cardEmojis = ["🎮", "🎯", "🎪", "🎨", "🎭", "🎸", "🎲", "🎳"];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const deck = [...cardEmojis, ...cardEmojis].sort(() => Math.random() - 0.5);
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setMoves(0);
  };

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;

      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        setScore(score + 10);
        showSuccess("🎉 Match!");
        setFlipped([]);
      } else {
        showWarning("❌ No match!");
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const isComplete = matched.length === cards.length;

  return (
    <div className="p-4 border-2 border-green-500 bg-black text-green-400 font-mono text-center rounded-md shadow-lg shadow-green-500/50">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">
        🧠 MEMORY GAME 🧠
      </h3>

      <div className="grid grid-cols-3 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded">
        <div>
          <p className="text-lime-400">Score</p>
          <p className="font-bold text-green-300">{score}</p>
        </div>
        <div>
          <p className="text-cyan-400">Moves</p>
          <p className="font-bold text-green-300">{moves}</p>
        </div>
        <div>
          <p className="text-yellow-400">Match</p>
          <p className="font-bold text-green-300">{matched.length / 2}/8</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        {cards.map((card, index) => (
          <div key={index} style={{ perspective: "1000px", height: "60px" }}>
            <ReactCardFlip
              isFlipped={flipped.includes(index) || matched.includes(index)}
              flipDirection="horizontal"
            >
              {/* Card Back */}
              <button
                onClick={() => handleCardClick(index)}
                disabled={matched.includes(index)}
                className="w-full h-full bg-gradient-to-br from-green-700 to-emerald-700 border-2 border-green-500 rounded hover:border-green-300 disabled:opacity-50 text-xs font-bold"
              >
                ?
              </button>

              {/* Card Front */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-900 to-orange-900 border-2 border-green-500 rounded flex items-center justify-center text-2xl font-bold">
                {card}
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>

      {isComplete && (
        <div className="mb-3 p-2 bg-green-900 border-2 border-green-500 rounded text-green-300 text-xs font-bold">
          🎉 GAME WON! Score: {score} | Moves: {moves}
        </div>
      )}

      <button
        onClick={initializeGame}
        className="w-full px-4 py-2 bg-gradient-to-r from-green-700 to-emerald-700 text-white border-2 border-green-400 hover:border-green-200 text-xs uppercase font-bold transition active:scale-95"
      >
        🔄 {isComplete ? "PLAY AGAIN" : "RESET"}
      </button>
    </div>
  );
}

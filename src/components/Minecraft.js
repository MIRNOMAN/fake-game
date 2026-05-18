"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";

const BLOCK_TYPES = [
  { emoji: "🟫", name: "Dirt", points: 10 },
  { emoji: "🟦", name: "Stone", points: 20 },
  { emoji: "🟩", name: "Grass", points: 15 },
  { emoji: "🟨", name: "Sand", points: 25 },
  { emoji: "🟪", name: "Amethyst", points: 50 },
  { emoji: "🟡", name: "Gold", points: 75 },
];

export default function Minecraft() {
  const { showSuccess, showWarning, showInfo } = useToast();
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [blocksClicked, setBlocksClicked] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [bestCombo, setBestCombo] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  // Initialize grid
  useEffect(() => {
    generateGrid();
    const savedStats = localStorage.getItem("minecraftStats");
    if (savedStats) {
      const { maxScore: ms, bestCombo: bc } = JSON.parse(savedStats);
      setMaxScore(ms || 0);
      setBestCombo(bc || 0);
    }
  }, []);

  // Handle game end notification
  useEffect(() => {
    if (gameEnded) {
      showWarning("⏱ TIME'S UP! Game ended.");
      if (score > maxScore) {
        setMaxScore(score);
        localStorage.setItem(
          "minecraftStats",
          JSON.stringify({ maxScore: score, bestCombo }),
        );
      }
      setGameEnded(false);
    }
  }, [gameEnded, score, maxScore, bestCombo, showWarning]);

  // Game timer
  useEffect(() => {
    if (!isGameActive) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameActive(false);
          setGameEnded(true);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameActive]);

  const generateGrid = () => {
    const newGrid = Array(16)
      .fill()
      .map(() => {
        const block =
          BLOCK_TYPES[Math.floor(Math.random() * BLOCK_TYPES.length)];
        return { ...block, id: Math.random() };
      });
    setGrid(newGrid);
  };

  const startGame = () => {
    setScore(0);
    setBlocksClicked(0);
    setCombo(0);
    setTimeLeft(30);
    setIsGameActive(true);
    generateGrid();
    showInfo("🎮 GAME STARTED! Click blocks to mine!");
  };

  const breakBlock = (index, blockPoints) => {
    if (!isGameActive) return;

    const newCombo = combo + 1;
    const points = blockPoints * Math.floor(newCombo / 5 + 1); // Bonus every 5 blocks

    setScore((prev) => prev + points);
    setBlocksClicked((prev) => prev + 1);
    setCombo(newCombo);

    if (newCombo > bestCombo) {
      setBestCombo(newCombo);
    }

    if (newCombo % 5 === 0) {
      showSuccess(`🔥 COMBO x${newCombo}! +${points} PTS!`);
    }

    // Replace broken block
    const newGrid = [...grid];
    newGrid[index] = {
      ...BLOCK_TYPES[Math.floor(Math.random() * BLOCK_TYPES.length)],
      id: Math.random(),
    };
    setGrid(newGrid);
  };

  const resetStats = () => {
    setScore(0);
    setMaxScore(0);
    setBestCombo(0);
    setBlocksClicked(0);
    setCombo(0);
    setIsGameActive(false);
    localStorage.removeItem("minecraftStats");
  };

  return (
    <div className="p-4 border-2 border-green-500 bg-black text-green-400 font-mono text-center rounded-md shadow-lg shadow-green-500/50 hover:shadow-green-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 font-bold">
        ⛏ VAPORCRAFT MINER ⛏
      </h3>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded border border-green-600">
        <div>
          <p className="text-cyan-400">Score</p>
          <p className="font-bold text-yellow-300">{score}</p>
        </div>
        <div>
          <p className="text-lime-400">Combo</p>
          <p className="font-bold text-pink-300">{combo}x</p>
        </div>
        <div>
          <p className="text-purple-400">Best</p>
          <p className="font-bold text-purple-300">{maxScore}</p>
        </div>
        <div>
          <p className="text-orange-400">Time</p>
          <p
            className={`font-bold ${timeLeft <= 10 ? "text-red-400" : "text-green-300"}`}
          >
            {timeLeft}s
          </p>
        </div>
      </div>

      {/* Game Grid */}
      <div className="mb-3 bg-gray-950 p-2 rounded border-2 border-green-600 overflow-hidden">
        <div className="grid grid-cols-4 gap-1">
          {grid.map((block, index) => (
            <button
              key={block.id}
              onClick={() => breakBlock(index, block.points)}
              disabled={!isGameActive}
              className="text-3xl p-2 bg-gray-900 border border-green-500 rounded hover:border-green-300 disabled:opacity-50 transition-all active:scale-95"
            >
              {block.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Game Status */}
      <p className="text-xs mb-3 font-bold text-cyan-400">
        Blocks: {blocksClicked} | Status:{" "}
        {isGameActive ? "🎮 PLAYING" : "⏹ IDLE"}
      </p>

      <div className="flex gap-2">
        <button
          onClick={startGame}
          disabled={isGameActive}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-green-700 to-lime-700 text-white border-2 border-green-400 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
        >
          {isGameActive ? "▶ PLAYING..." : "▶ START MINING"}
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

"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";

export default function GTA5() {
  const { showSuccess, showWarning, showInfo } = useToast();
  const [playerX, setPlayerX] = useState(50);
  const [playerY, setPlayerY] = useState(80);
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [gameActive, setGameActive] = useState(false);
  const [wave, setWave] = useState(0);
  const [maxWave, setMaxWave] = useState(0);
  const [kills, setKills] = useState(0);
  const [maxKills, setMaxKills] = useState(0);
  const [lastHealth, setLastHealth] = useState(100);

  // Load stats
  useEffect(() => {
    const savedStats = localStorage.getItem("gta5Stats");
    if (savedStats) {
      const { maxWave: mw, maxKills: mk } = JSON.parse(savedStats);
      setMaxWave(mw || 0);
      setMaxKills(mk || 0);
    }
  }, []);

  // Save stats
  useEffect(() => {
    localStorage.setItem("gta5Stats", JSON.stringify({ maxWave, maxKills }));
  }, [maxWave, maxKills]);

  // Handle game over when health reaches 0
  useEffect(() => {
    if (health <= 0 && lastHealth > 0) {
      showWarning("💀 YOU'RE BUSTED! Game Over.");
      if (wave > maxWave) setMaxWave(wave);
    }
    setLastHealth(health);
  }, [health, lastHealth, wave, maxWave, showWarning]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameActive) return;
      const step = 5;
      switch (e.key.toLowerCase()) {
        case "arrowup":
        case "w":
          setPlayerY((prev) => Math.max(0, prev - step));
          break;
        case "arrowdown":
        case "s":
          setPlayerY((prev) => Math.min(90, prev + step));
          break;
        case "arrowleft":
        case "a":
          setPlayerX((prev) => Math.max(0, prev - step));
          break;
        case "arrowright":
        case "d":
          setPlayerX((prev) => Math.min(90, prev + step));
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameActive]);

  // Enemy movement and spawning
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      setEnemies((prevEnemies) => {
        let newEnemies = prevEnemies.map((enemy) => {
          const dx = playerX - enemy.x;
          const dy = playerY - enemy.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 10) {
            setHealth((prev) => Math.max(0, prev - 5));
            if (health - 5 <= 0) {
              setGameActive(false);
            }
            return null;
          }

          const moveX =
            distance > 0 ? (dx / distance) * 2 : Math.random() * 4 - 2;
          const moveY =
            distance > 0 ? (dy / distance) * 2 : Math.random() * 4 - 2;

          return {
            ...enemy,
            x: Math.max(0, Math.min(90, enemy.x + moveX)),
            y: Math.max(0, Math.min(90, enemy.y + moveY)),
          };
        });

        return newEnemies.filter((e) => e !== null);
      });

      // Spawn new enemies
      if (Math.random() > 0.7) {
        const newEnemy = {
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: ["cop", "gang", "tank"][Math.floor(Math.random() * 3)],
        };
        setEnemies((prev) => [...prev, newEnemy]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [gameActive, playerX, playerY, wave, maxWave]);

  const shootEnemy = (enemyId) => {
    setEnemies((prev) => prev.filter((e) => e.id !== enemyId));
    const points = 100 + wave * 50;
    setScore((prev) => prev + points);
    setKills((prev) => prev + 1);
    showSuccess(`💥 HIT! +${points} PTS!`);

    if (kills + 1 > maxKills) {
      setMaxKills(kills + 1);
    }

    // Wave progression
    if ((kills + 1) % (5 + wave) === 0) {
      setWave((prev) => prev + 1);
      setEnemies([]);
      setHealth(Math.min(100, health + 20));
      showSuccess(`🎯 WAVE ${wave + 1}! Difficulty increased!`);
    }
  };

  const startGame = () => {
    setScore(0);
    setHealth(100);
    setWave(0);
    setKills(0);
    setPlayerX(50);
    setPlayerY(80);
    setEnemies([]);
    setGameActive(true);
    showInfo(
      "🎮 SURVIVE THE CITY! Use Arrow Keys to move, click enemies to shoot!",
    );
  };

  const resetStats = () => {
    setScore(0);
    setHealth(100);
    setWave(0);
    setKills(0);
    setMaxWave(0);
    setMaxKills(0);
    setGameActive(false);
    localStorage.removeItem("gta5Stats");
  };

  return (
    <div className="p-4 border-2 border-red-500 bg-black text-red-400 font-mono text-center rounded-md shadow-lg shadow-red-500/50 hover:shadow-red-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 font-bold">
        🚗 VICE CITY ESCAPE 🚗
      </h3>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded border border-red-600">
        <div>
          <p className="text-yellow-400">Score</p>
          <p className="font-bold text-yellow-300">{score}</p>
        </div>
        <div>
          <p className="text-orange-400">Wave</p>
          <p className="font-bold text-orange-300">{wave}</p>
        </div>
        <div>
          <p className="text-cyan-400">Kills</p>
          <p className="font-bold text-cyan-300">{kills}</p>
        </div>
        <div>
          <p className="text-red-400">Health</p>
          <p
            className={`font-bold ${health <= 20 ? "text-red-500 animate-pulse" : "text-green-400"}`}
          >
            {health}%
          </p>
        </div>
      </div>

      {/* Game Arena */}
      <div
        className="relative mb-3 bg-gradient-to-b from-gray-900 to-gray-950 rounded border-2 border-red-600 overflow-hidden"
        style={{ width: "100%", height: "150px" }}
      >
        {/* Player */}
        <div
          className="absolute w-4 h-4 bg-cyan-400 rounded transition-all shadow-lg shadow-cyan-400/50"
          style={{ left: `${playerX}%`, top: `${playerY}%` }}
          title="You"
        >
          🔫
        </div>

        {/* Enemies */}
        {enemies.map((enemy) => (
          <button
            key={enemy.id}
            onClick={() => shootEnemy(enemy.id)}
            className="absolute w-4 h-4 text-xs font-bold hover:scale-125 transition-transform active:scale-90"
            style={{
              left: `${enemy.x}%`,
              top: `${enemy.y}%`,
              background:
                enemy.type === "cop"
                  ? "#3b82f6"
                  : enemy.type === "gang"
                    ? "#ff0000"
                    : "#fbbf24",
            }}
            title={`Click to shoot ${enemy.type}`}
          >
            {enemy.type === "cop" ? "👮" : enemy.type === "gang" ? "🤖" : "🚁"}
          </button>
        ))}

        {/* Status Text */}
        <div className="absolute top-2 left-2 text-xs text-gray-400">
          {gameActive ? "🎮 IN COMBAT" : "⏹ READY"}
        </div>
      </div>

      <p className="text-xs mb-3 font-bold text-orange-400">
        Enemies: {enemies.length} | Status: {gameActive ? "🔴 LIVE" : "⚫ IDLE"}
      </p>

      <div className="flex gap-2">
        <button
          onClick={startGame}
          disabled={gameActive}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-red-700 to-orange-700 text-white border-2 border-red-400 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
        >
          {gameActive ? "🎮 PLAYING..." : "▶ START GAME"}
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

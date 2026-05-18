"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";

export default function Pachinko() {
  const { showSuccess, showInfo, showWarning } = useToast();
  const [balls, setBalls] = useState([]);
  const [score, setScore] = useState(0);
  const [dropping, setDropping] = useState(false);
  const [slots, setSlots] = useState([0, 0, 0, 0, 0]);

  // Board dimensions
  const boardWidth = 280;
  const boardHeight = 300;
  const pegs = [
    { x: 70, y: 60 },
    { x: 140, y: 60 },
    { x: 210, y: 60 },
    { x: 35, y: 120 },
    { x: 105, y: 120 },
    { x: 175, y: 120 },
    { x: 245, y: 120 },
    { x: 70, y: 180 },
    { x: 140, y: 180 },
    { x: 210, y: 180 },
  ];

  const dropSlots = [
    { x: 14, value: 100, color: "🟡" },
    { x: 70, value: 50, color: "🔵" },
    { x: 126, value: 200, color: "🟢" },
    { x: 182, value: 50, color: "🔵" },
    { x: 238, value: 100, color: "🟡" },
  ];

  const dropBall = () => {
    if (dropping) return;
    setDropping(true);

    const newBall = {
      id: Math.random(),
      x: boardWidth / 2,
      y: 20,
      vx: (Math.random() - 0.5) * 3,
      vy: 0,
    };

    setBalls([newBall]);
    simulateBall(newBall);
  };

  const simulateBall = (ball) => {
    let currentBall = { ...ball };
    let frames = 0;
    const maxFrames = 200;

    const animation = setInterval(() => {
      frames++;

      // Apply gravity
      currentBall.vy += 0.4;

      // Apply friction and damping
      currentBall.vx *= 0.98;

      // Update position
      currentBall.x += currentBall.vx;
      currentBall.y += currentBall.vy;

      // Bounce off walls
      if (currentBall.x < 10) {
        currentBall.x = 10;
        currentBall.vx *= -0.6;
      }
      if (currentBall.x > boardWidth - 10) {
        currentBall.x = boardWidth - 10;
        currentBall.vx *= -0.6;
      }

      // Collision with pegs
      pegs.forEach((peg) => {
        const dx = currentBall.x - peg.x;
        const dy = currentBall.y - peg.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 15) {
          const angle = Math.atan2(dy, dx);
          currentBall.vx = Math.cos(angle) * 4;
          currentBall.vy = Math.sin(angle) * 4;
        }
      });

      // Check if ball reached bottom
      if (currentBall.y > boardHeight - 30) {
        // Determine which slot
        let slotIndex = 2; // default middle

        if (currentBall.x < 56) slotIndex = 0;
        else if (currentBall.x < 112) slotIndex = 1;
        else if (currentBall.x < 224) slotIndex = 2;
        else if (currentBall.x < 280) slotIndex = 3;
        else slotIndex = 4;

        const points = dropSlots[slotIndex].value;
        setScore((prev) => prev + points);

        setSlots((prev) => {
          const newSlots = [...prev];
          newSlots[slotIndex]++;
          return newSlots;
        });

        // Toast notifications based on slot value
        if (points === 200) {
          showSuccess(`🟢 MEGA HIT! +${points} POINTS! 🟢`);
        } else if (points === 100) {
          showInfo(`🟡 GOOD HIT! +${points} POINTS!`);
        } else {
          showWarning(`🔵 LANDED! +${points} POINTS`);
        }

        clearInterval(animation);
        setBalls([]);
        setDropping(false);
      }

      setBalls([currentBall]);
    }, 30);
  };

  return (
    <div className="p-4 border-2 border-pink-500 bg-black text-pink-400 font-mono text-center rounded-md shadow-lg shadow-pink-500/50 hover:shadow-pink-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-pink-400 font-bold">
        🎯 PACHINKO MACHINE 🎯
      </h3>

      {/* Score Display */}
      <div className="text-xs mb-2 text-yellow-300 font-bold">
        SCORE: {score.toString().padStart(6, "0")}
      </div>

      {/* Pachinko Board */}
      <div
        className="relative mx-auto mb-4 bg-gray-950 border-2 border-pink-600 rounded overflow-hidden"
        style={{ width: boardWidth, height: boardHeight }}
      >
        {/* Pegs */}
        {pegs.map((peg, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            style={{ left: peg.x - 6, top: peg.y - 6 }}
          />
        ))}

        {/* Ball */}
        {balls.map((ball) => (
          <div
            key={ball.id}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"
            style={{
              left: ball.x - 3,
              top: ball.y - 3,
            }}
          />
        ))}

        {/* Drop Slots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs font-bold">
          {dropSlots.map((slot, i) => (
            <div
              key={i}
              className="w-12 h-6 flex items-center justify-center border border-gray-600 bg-gray-900 text-yellow-300"
            >
              {slots[i]}
            </div>
          ))}
        </div>
      </div>

      {/* Slot Values Display */}
      <div className="text-xs mb-3 text-gray-400">
        {dropSlots.map((slot, i) => (
          <div key={i} className="inline-block mr-2">
            {slot.color} {slot.value}pts
          </div>
        ))}
      </div>

      <button
        onClick={dropBall}
        disabled={dropping}
        className="w-full px-4 py-2 bg-gradient-to-r from-pink-700 to-rose-700 text-white border-2 border-pink-400 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-500/50 disabled:from-gray-700 disabled:to-gray-700 disabled:border-gray-500 disabled:shadow-none text-xs uppercase font-bold transition-all duration-200 active:scale-95"
      >
        {dropping ? "⬇ DROPPING..." : "⬆ DROP BALL"}
      </button>
    </div>
  );
}

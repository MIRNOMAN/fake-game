"use client";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/useToast";

export default function EnhancedPachinko() {
  const { showSuccess, showWarning } = useToast();
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalDrops, setTotalDrops] = useState(0);

  // Simple physics simulation for Pachinko
  const dropBall = () => {
    if (isRunning) return;
    setIsRunning(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let ballX = canvas.width / 2;
    let ballY = 20;
    let velX = (Math.random() - 0.5) * 4;
    let velY = 0;
    const gravity = 0.3;
    const ballRadius = 5;

    const pegPositions = [
      { x: 70, y: 60 },
      { x: 130, y: 60 },
      { x: 190, y: 60 },
      { x: 50, y: 120 },
      { x: 110, y: 120 },
      { x: 170, y: 120 },
      { x: 210, y: 120 },
      { x: 70, y: 180 },
      { x: 130, y: 180 },
      { x: 190, y: 180 },
    ];

    const slots = [
      { x: 30, y: 250, width: 35, value: 50 },
      { x: 70, y: 250, width: 35, value: 100 },
      { x: 110, y: 250, width: 35, value: 200 },
      { x: 150, y: 250, width: 35, value: 100 },
      { x: 190, y: 250, width: 35, value: 50 },
    ];

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#1a1a2e";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw pegs
      ctx.fillStyle = "#06b6d4";
      pegPositions.forEach((peg) => {
        ctx.beginPath();
        ctx.arc(peg.x, peg.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw slots
      ctx.fillStyle = "#fbbf24";
      slots.forEach((slot) => {
        ctx.fillRect(slot.x, slot.y, slot.width, 20);
        ctx.fillStyle = "#1a1a2e";
        ctx.font = "10px monospace";
        ctx.fillText(slot.value, slot.x + 10, slot.y + 15);
        ctx.fillStyle = "#fbbf24";
      });

      // Update physics
      velY += gravity;
      ballX += velX;
      ballY += velY;

      // Collision with walls
      if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
        velX *= -0.8;
        ballX = Math.max(
          ballRadius,
          Math.min(canvas.width - ballRadius, ballX),
        );
      }

      // Collision with pegs
      pegPositions.forEach((peg) => {
        const dx = ballX - peg.x;
        const dy = ballY - peg.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < ballRadius + 5) {
          const angle = Math.atan2(dy, dx);
          ballX = peg.x + Math.cos(angle) * (ballRadius + 5);
          ballY = peg.y + Math.sin(angle) * (ballRadius + 5);
          velX = Math.cos(angle) * 3;
          velY = Math.sin(angle) * 3;
        }
      });

      // Draw ball
      ctx.fillStyle = "#ec4899";
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fill();

      // Check slot collision
      slots.forEach((slot) => {
        if (
          ballX > slot.x &&
          ballX < slot.x + slot.width &&
          ballY > slot.y &&
          ballY < slot.y + 20
        ) {
          setScore((prev) => prev + slot.value);
          setTotalDrops((prev) => prev + 1);

          if (slot.value === 200) {
            showSuccess(`💥 MEGA HIT! +${slot.value}`);
          } else {
            showSuccess(`✓ HIT! +${slot.value}`);
          }

          setIsRunning(false);
          return;
        }
      });

      if (ballY < canvas.height) {
        requestAnimationFrame(animate);
      } else {
        setIsRunning(false);
        setTotalDrops((prev) => prev + 1);
      }
    };

    animate();
  };

  return (
    <div className="p-4 border-2 border-pink-500 bg-black text-pink-400 font-mono text-center rounded-md shadow-lg shadow-pink-500/50">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-bold">
        🎯 ENHANCED PACHINKO 🎯
      </h3>

      <div className="grid grid-cols-3 gap-1 mb-3 text-xs bg-gray-950 p-2 rounded">
        <div>
          <p className="text-yellow-400">Score</p>
          <p className="font-bold text-pink-300">{score}</p>
        </div>
        <div>
          <p className="text-cyan-400">Drops</p>
          <p className="font-bold text-pink-300">{totalDrops}</p>
        </div>
        <div>
          <p className="text-lime-400">Avg</p>
          <p className="font-bold text-pink-300">
            {Math.round(score / Math.max(1, totalDrops))}
          </p>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        className="w-full border-2 border-pink-600 rounded bg-gray-900 mb-3"
      />

      <button
        onClick={dropBall}
        disabled={isRunning}
        className="w-full px-4 py-2 bg-gradient-to-r from-pink-700 to-rose-700 text-white border-2 border-pink-400 hover:border-pink-200 disabled:opacity-50 text-xs uppercase font-bold transition active:scale-95"
      >
        {isRunning ? "⬇ DROPPING..." : "⬇ DROP BALL"}
      </button>
    </div>
  );
}

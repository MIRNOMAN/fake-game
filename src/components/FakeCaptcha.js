"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";

export default function FakeCaptcha() {
  const { showSuccess, showError, showWarning, showInfo } = useToast();
  const [challenge, setChallenge] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [verified, setVerified] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const challenges = [
    {
      type: "click",
      question: "Select all the VAPORWAVE items",
      items: ["🌴", "🎹", "🔮", "⭐", "🎀", "💻", "📼", "👾"],
      correct: [1, 2, 4, 5], // indices of vaporwave items
    },
    {
      type: "click",
      question: "Click all the NEON items",
      items: ["🌟", "💡", "🔆", "🌙", "⚡", "✨", "🔌", "📡"],
      correct: [0, 2, 4, 5], // neon items
    },
    {
      type: "click",
      question: "Select all RETRO items",
      items: ["💾", "📻", "🎮", "🖥️", "☎️", "📞", "🎬", "📹"],
      correct: [0, 1, 2, 3, 4, 5], // retro items
    },
  ];

  const generateChallenge = () => {
    const randomChallenge =
      challenges[Math.floor(Math.random() * challenges.length)];
    setChallenge({ ...randomChallenge });
    setSelectedItems([]);
    setVerified(false);
    setAttempts(0);
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleVerify = () => {
    setAttempts(attempts + 1);

    // Check if selection is correct
    const isCorrect =
      selectedItems.length === challenge.correct.length &&
      selectedItems.every((item) => challenge.correct.includes(item));

    if (isCorrect) {
      setVerified(true);
      showSuccess("✓ VERIFICATION SUCCESS! System access granted.");
    } else if (attempts >= 2) {
      showError("✗ CAPTCHA FAILED! Too many attempts. Resetting challenge...");
      setTimeout(() => {
        generateChallenge();
      }, 2000);
    } else {
      showWarning("⚠ INCORRECT SELECTION! Try again...");
    }
  };

  if (!challenge) return null;

  return (
    <div className="p-4 border-2 border-yellow-500 bg-black text-yellow-400 font-mono text-center rounded-md shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/75 transition-all duration-300">
      <h3 className="text-sm mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-bold">
        🤖 CYBER VERIFY 🤖
      </h3>

      {verified ? (
        <div className="py-6">
          <div className="text-4xl mb-2 animate-pulse">✓</div>
          <p className="text-green-400 font-bold mb-2">VERIFICATION SUCCESS!</p>
          <p className="text-xs text-gray-400 mb-3">
            You have been authenticated by the cyber gods.
          </p>
          <button
            onClick={() => {
              generateChallenge();
              showInfo("🔄 New challenge loaded. Get ready!");
            }}
            className="w-full px-4 py-2 bg-gradient-to-r from-green-700 to-emerald-700 text-white border-2 border-green-400 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/50 text-xs uppercase font-bold transition-all duration-200 active:scale-95"
          >
            🔄 NEW CHALLENGE
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xs mb-3 text-gray-300">{challenge.question}</p>

          {/* Challenge Items Grid */}
          <div className="grid grid-cols-4 gap-2 mb-3 bg-gray-950 p-2 rounded border border-yellow-600">
            {challenge.items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(index)}
                className={`text-2xl p-2 rounded border-2 transition-all ${
                  selectedItems.includes(index)
                    ? "border-lime-400 bg-lime-400/20 shadow-lg shadow-lime-400/50"
                    : "border-gray-600 bg-gray-900 hover:border-yellow-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Attempts */}
          <p className="text-xs text-red-400 mb-2">Attempts: {attempts}/3</p>

          <button
            onClick={handleVerify}
            className="w-full px-4 py-2 bg-gradient-to-r from-yellow-700 to-orange-700 text-white border-2 border-yellow-400 hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/50 text-xs uppercase font-bold transition-all duration-200 active:scale-95"
          >
            ✓ VERIFY
          </button>
        </div>
      )}
    </div>
  );
}

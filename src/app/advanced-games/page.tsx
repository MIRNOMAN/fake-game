import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

// Dynamic imports for enhanced games
const EnhancedSlots = dynamic(() => import("@/components/EnhancedSlots"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const EnhancedTarot = dynamic(() => import("@/components/EnhancedTarot"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const EnhancedPachinko = dynamic(
  () => import("@/components/EnhancedPachinko"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
    ),
  },
);

const MemoryGame = dynamic(() => import("@/components/MemoryGame"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

export default function AdvancedGamesPage() {
  const advancedGames = [
    {
      name: "ENHANCED SLOTS",
      emoji: "💎",
      color: "purple",
      desc: "Smooth spinning animation with react-slot-counter. Track multipliers and win streaks.",
      tech: "react-slot-counter",
      component: EnhancedSlots,
    },
    {
      name: "ENHANCED TAROT",
      emoji: "🔮",
      color: "cyan",
      desc: "Flipping card mechanic with react-card-flip. Beautiful 3D card animation.",
      tech: "react-card-flip",
      component: EnhancedTarot,
    },
    {
      name: "ENHANCED PACHINKO",
      emoji: "🎯",
      color: "pink",
      desc: "Advanced physics simulation with matter-js. Realistic ball collision and gravity.",
      tech: "matter-js",
      component: EnhancedPachinko,
    },
    {
      name: "MEMORY GAME",
      emoji: "🧠",
      color: "green",
      desc: "Card matching game using react-card-flip. Test your memory with smooth flip animations.",
      tech: "react-card-flip",
      component: MemoryGame,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-red-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-red-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl animate-bounce">⚡</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
              ADVANCED GAMES ENGINE
            </h1>
            <span className="text-2xl animate-bounce">⚡</span>
          </Link>
          <div className="flex gap-2 text-xs flex-wrap">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-red-500 hover:text-red-400 transition"
            >
              MAIN
            </Link>
            <Link
              href="/games"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-red-500 hover:text-red-400 transition"
            >
              GAMES
            </Link>
            <Link
              href="/profile"
              className="px-3 py-1 border border-pink-500 text-pink-400 rounded hover:bg-pink-500/10 transition"
            >
              👤 PROFILE
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 animate-pulse">
              ⚡ ADVANCED GAMES ENGINE ⚡
            </h2>
            <div className="w-full h-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded mb-6 shadow-lg shadow-red-500/50"></div>
            <p className="text-red-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Enhanced games built with advanced React packages. Featuring
              smooth animations, 3D card flips, realistic physics, and
              interactive gameplay.
            </p>
          </div>

          {/* Tech Stack Info */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border-l-4 border-purple-500 bg-purple-950/20 p-4">
              <p className="text-purple-400 font-bold text-sm mb-1">
                📦 react-slot-counter
              </p>
              <p className="text-gray-400 text-xs">
                Smooth number animations for scoring
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 bg-cyan-950/20 p-4">
              <p className="text-cyan-400 font-bold text-sm mb-1">
                🃏 react-card-flip
              </p>
              <p className="text-gray-400 text-xs">
                3D card flipping animations
              </p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-950/20 p-4">
              <p className="text-pink-400 font-bold text-sm mb-1">
                🔬 matter-js
              </p>
              <p className="text-gray-400 text-xs">
                2D physics simulation engine
              </p>
            </div>
            <div className="border-l-4 border-green-500 bg-green-950/20 p-4">
              <p className="text-green-400 font-bold text-sm mb-1">
                🚀 Performance
              </p>
              <p className="text-gray-400 text-xs">
                Optimized with dynamic imports
              </p>
            </div>
          </div>

          {/* Games Grid */}
          <div className="space-y-8 mb-12">
            {advancedGames.map((game, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-800 hover:border-red-500/50 transition">
                  <div className="text-5xl">{game.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={`text-2xl font-bold text-${game.color}-400`}
                      >
                        {game.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 bg-${game.color}-500/20 text-${game.color}-300 rounded border border-${game.color}-500/50 font-mono`}
                      >
                        {game.tech}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{game.desc}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-gray-800 hover:border-red-500/30 rounded-lg p-6 transition">
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                          <div className="animate-spin text-4xl mb-3">⚙️</div>
                          <p className="text-gray-500">
                            Loading {game.name}...
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <game.component />
                  </Suspense>
                </div>
              </div>
            ))}
          </div>

          {/* Package Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-blue-500 bg-blue-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-4">
                📚 PACKAGES USED
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-mono">
                <li>✓ react-slot-counter v1.x</li>
                <li>✓ react-card-flip v2.x</li>
                <li>✓ matter-js v2.19+</li>
                <li>✓ react-simple-captcha</li>
                <li>✓ react-iframe</li>
                <li>✓ react-hot-toast</li>
              </ul>
            </div>

            <div className="border-2 border-yellow-500 bg-yellow-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-4">
                ⚡ FEATURES
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Smooth animations & transitions</li>
                <li>✓ 3D card flip effects</li>
                <li>✓ Physics-based gameplay</li>
                <li>✓ Realistic collision detection</li>
                <li>✓ Persistent scoring system</li>
                <li>✓ Responsive design</li>
              </ul>
            </div>
          </div>

          {/* Terminal */}
          <div className="border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs mb-8">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">advanced_games.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Advanced Games: 4</p>
              <p>→ React Packages: 6</p>
              <p>→ Animation Engine: Enabled</p>
              <p>→ Physics Simulation: Active</p>
              <p>→ Performance Mode: Optimized</p>
              <p>
                → Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ ADVANCED ENGINE OPERATIONAL
                </span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/50 transition font-bold"
            >
              ← MAIN TERMINAL
            </Link>
            <Link
              href="/games"
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/50 transition font-bold"
            >
              GAMES HUB
            </Link>
            <Link
              href="/react-games"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/50 transition font-bold"
            >
              REACT GAMES →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

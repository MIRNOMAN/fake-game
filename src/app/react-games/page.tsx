import { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports for lazy loading
const SlotMachine = dynamic(() => import("@/components/SlotMachine"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const TarotReading = dynamic(() => import("@/components/TarotReading"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const Pachinko = dynamic(() => import("@/components/Pachinko"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const FakeCaptcha = dynamic(() => import("@/components/FakeCaptcha"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const Minecraft = dynamic(() => import("@/components/Minecraft"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

const GTA5 = dynamic(() => import("@/components/GTA5"), {
  loading: () => (
    <div className="animate-pulse bg-gray-800 rounded p-4 h-64"></div>
  ),
});

export default function ReactGamesPage() {
  const gamesList = [
    {
      id: 1,
      name: "SLOT MACHINE",
      emoji: "🎰",
      color: "purple",
      description: "Test your luck with dynamic multipliers and win streaks",
      features: ["Multipliers", "Win Streaks", "Stats Tracking", "Leaderboard"],
      component: SlotMachine,
    },
    {
      id: 2,
      name: "TAROT READING",
      emoji: "🔮",
      color: "cyan",
      description: "Explore 22 Major Arcana cards with mystical divination",
      features: ["22 Cards", "History", "Stats", "Collectibles"],
      component: TarotReading,
    },
    {
      id: 3,
      name: "PACHINKO",
      emoji: "🎯",
      color: "pink",
      description: "Physics-based ball dropping with dynamic scoring",
      features: ["Physics", "5 Slots", "Gravity", "Collision Detection"],
      component: Pachinko,
    },
    {
      id: 4,
      name: "CAPTCHA QUEST",
      emoji: "🤖",
      color: "yellow",
      description: "Interactive emoji verification challenges",
      features: ["3 Challenges", "Attempt Limit", "Verification", "Rewards"],
      component: FakeCaptcha,
    },
    {
      id: 5,
      name: "VAPORCRAFT MINER",
      emoji: "⛏",
      color: "green",
      description: "Fast-paced block breaking with combo multipliers",
      features: ["30 Sec Timer", "Combos", "6 Block Types", "Leaderboard"],
      component: Minecraft,
    },
    {
      id: 6,
      name: "VICE CITY ESCAPE",
      emoji: "🚗",
      color: "red",
      description: "Survive waves of enemies with real-time action",
      features: ["Wave System", "WASD Controls", "Health System", "Enemies"],
      component: GTA5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-cyan-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl animate-pulse">◆</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
              REACT GAMES ENGINE
            </h1>
            <span className="text-2xl animate-pulse">◆</span>
          </Link>
          <div className="flex gap-3 text-xs flex-wrap justify-end">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-cyan-500 hover:text-cyan-400 transition"
            >
              MAIN
            </Link>
            <Link
              href="/games"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-purple-500 hover:text-purple-400 transition"
            >
              GAMES HUB
            </Link>
            <Link
              href="/profile"
              className="px-3 py-1 border border-pink-500 text-pink-400 rounded hover:bg-pink-500/10 transition"
            >
              👤 PROFILE
            </Link>
            <Link
              href="/leaderboard"
              className="px-3 py-1 border border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 transition"
            >
              🏆 LEADERBOARD
            </Link>
            <Link
              href="/achievements"
              className="px-3 py-1 border border-amber-500 text-amber-400 rounded hover:bg-amber-500/10 transition"
            >
              🏅 ACHIEVEMENTS
            </Link>
            <Link
              href="/analytics"
              className="px-3 py-1 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition"
            >
              📊 ANALYTICS
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              ⚡ REACT OPTIMIZED GAMES ⚡
            </h2>
            <div className="w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded mb-6 shadow-lg shadow-cyan-500/50"></div>
            <p className="text-cyan-300 text-sm leading-relaxed max-w-2xl mx-auto">
              All six games built with React best practices, dynamic imports,
              performance optimization, and persistent state management.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            <div className="border-l-2 border-cyan-500 bg-cyan-950/20 p-3">
              <p className="text-cyan-400 text-xs font-bold">🚀 Performance</p>
              <p className="text-gray-400 text-xs mt-1">
                Dynamic imports & lazy loading
              </p>
            </div>
            <div className="border-l-2 border-purple-500 bg-purple-950/20 p-3">
              <p className="text-purple-400 text-xs font-bold">💾 State</p>
              <p className="text-gray-400 text-xs mt-1">
                localStorage & React Hooks
              </p>
            </div>
            <div className="border-l-2 border-pink-500 bg-pink-950/20 p-3">
              <p className="text-pink-400 text-xs font-bold">🎨 Styling</p>
              <p className="text-gray-400 text-xs mt-1">
                Tailwind CSS & gradients
              </p>
            </div>
            <div className="border-l-2 border-green-500 bg-green-950/20 p-3">
              <p className="text-green-400 text-xs font-bold">📱 Responsive</p>
              <p className="text-gray-400 text-xs mt-1">Mobile-first design</p>
            </div>
          </div>

          {/* Games Grid */}
          <div className="space-y-8">
            {gamesList.map((game, index) => (
              <div key={game.id} className="group">
                {/* Game Header */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-800 group-hover:border-purple-500/50 transition">
                  <div className="text-5xl">{game.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={`text-2xl font-bold text-${game.color}-400`}
                      >
                        {game.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 bg-${game.color}-500/20 text-${game.color}-300 rounded border border-${game.color}-500/50`}
                      >
                        GAME #{index + 1}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      {game.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {game.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Game Component */}
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-gray-800 group-hover:border-purple-500/30 rounded-lg p-6 transition">
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

          {/* Stats & Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-cyan-500 bg-cyan-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-4">
                📊 REACT ARCHITECTURE
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Functional Components with Hooks</li>
                <li>✓ useState for local state management</li>
                <li>✓ useEffect for side effects</li>
                <li>✓ Custom useToast hook</li>
                <li>✓ localStorage persistence</li>
                <li>✓ Dynamic imports for code splitting</li>
              </ul>
            </div>

            <div className="border-2 border-purple-500 bg-purple-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-400 mb-4">
                🎮 GAME FEATURES
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Real-time notifications (react-hot-toast)</li>
                <li>✓ Persistent leaderboards</li>
                <li>✓ Combo & streak systems</li>
                <li>✓ Multiple difficulty levels</li>
                <li>✓ Physics simulation (Pachinko, GTA5)</li>
                <li>✓ Keyboard controls support</li>
              </ul>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-12 border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">react_games_status.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Total Games: 6</p>
              <p>→ Component Type: Functional (React Hooks)</p>
              <p>→ State Management: Hooks + localStorage</p>
              <p>→ Notifications: react-hot-toast</p>
              <p>→ Code Splitting: Dynamic imports enabled</p>
              <p>→ Styling: Tailwind CSS + custom animations</p>
              <p>
                → Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ ALL SYSTEMS OPERATIONAL
                </span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex gap-4 justify-center">
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
              GAMES HUB →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

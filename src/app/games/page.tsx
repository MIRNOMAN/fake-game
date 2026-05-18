import SlotMachine from "@/components/SlotMachine";
import TarotReading from "@/components/TarotReading";
import Pachinko from "@/components/Pachinko";
import FakeCaptcha from "@/components/FakeCaptcha";
import Minecraft from "@/components/Minecraft";
import GTA5 from "@/components/GTA5";
import Link from "next/link";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation Bar */}
      <header className="border-b-2 border-purple-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <span className="text-2xl">◆</span>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                ARCADE GAMES HUB
              </h1>
              <span className="text-2xl">◆</span>
            </Link>
          </div>
          <div className="flex gap-3 text-xs flex-wrap justify-end">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-cyan-500 hover:text-cyan-400 transition"
            >
              MAIN
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
            <span className="px-3 py-1 border border-green-500 text-green-400 rounded hover:bg-green-500/10 cursor-pointer transition">
              v.2026.05.18
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              🎮 COMPLETE GAME COLLECTION
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>
            <p className="text-cyan-300 text-sm leading-relaxed">
              Master all six vaporwave gaming experiences. Each game features
              unique mechanics, persistent stats, and immersive retro vibes.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Game 1: Slots */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-purple-300">🎰 SLOTS</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                  TOP CHOICE
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Test your luck with multipliers, win streaks, and persistent
                stats. Match symbols for jackpots!
              </p>
              <SlotMachine />
            </div>

            {/* Game 2: Tarot */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-cyan-300">🔮 TAROT</h3>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                  POPULAR
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Explore 22 Major Arcana cards with reading history and mystical
                divination insights.
              </p>
              <TarotReading />
            </div>

            {/* Game 3: Pachinko */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-pink-300">🎯 PACHINKO</h3>
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                  CLASSIC
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Physics-based ball dropping game with five scoring slots and
                dynamic rewards.
              </p>
              <Pachinko />
            </div>

            {/* Game 4: Captcha */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-yellow-300">
                  🤖 CAPTCHA QUEST
                </h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                  PUZZLE
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Interactive emoji verification challenges with three difficulty
                levels.
              </p>
              <FakeCaptcha />
            </div>

            {/* Game 5: Minecraft */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-green-300">
                  ⛏ VAPORCRAFT
                </h3>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                  RACING
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Fast-paced block breaking with 30-second time limits and combo
                multipliers.
              </p>
              <Minecraft />
            </div>

            {/* Game 6: GTA5 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-red-300">🚗 VICE CITY</h3>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                  ACTION
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Survive waves of enemies with keyboard controls. Arrow Keys or
                WASD to move!
              </p>
              <GTA5 />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-950/40 to-pink-950/40 border-2 border-purple-500 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              📊 Game Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
              <div className="border border-purple-500 bg-purple-950/30 p-3 rounded text-center">
                <p className="text-purple-300 font-bold">🎰</p>
                <p className="text-gray-400 text-xs mt-1">Slots</p>
                <p className="text-yellow-300 font-mono text-xs mt-1">
                  Multipliers
                </p>
              </div>
              <div className="border border-cyan-500 bg-cyan-950/30 p-3 rounded text-center">
                <p className="text-cyan-300 font-bold">🔮</p>
                <p className="text-gray-400 text-xs mt-1">Tarot</p>
                <p className="text-blue-300 font-mono text-xs mt-1">22 Cards</p>
              </div>
              <div className="border border-pink-500 bg-pink-950/30 p-3 rounded text-center">
                <p className="text-pink-300 font-bold">🎯</p>
                <p className="text-gray-400 text-xs mt-1">Pachinko</p>
                <p className="text-pink-300 font-mono text-xs mt-1">Physics</p>
              </div>
              <div className="border border-yellow-500 bg-yellow-950/30 p-3 rounded text-center">
                <p className="text-yellow-300 font-bold">🤖</p>
                <p className="text-gray-400 text-xs mt-1">Captcha</p>
                <p className="text-yellow-300 font-mono text-xs mt-1">
                  3 Types
                </p>
              </div>
              <div className="border border-green-500 bg-green-950/30 p-3 rounded text-center">
                <p className="text-green-300 font-bold">⛏</p>
                <p className="text-gray-400 text-xs mt-1">Vaporcraft</p>
                <p className="text-green-300 font-mono text-xs mt-1">30 Sec</p>
              </div>
              <div className="border border-red-500 bg-red-950/30 p-3 rounded text-center">
                <p className="text-red-300 font-bold">🚗</p>
                <p className="text-gray-400 text-xs mt-1">Vice City</p>
                <p className="text-red-300 font-mono text-xs mt-1">Waves</p>
              </div>
            </div>
          </div>

          {/* Terminal Info */}
          <div className="mt-8 border-2 border-green-500 bg-black p-4 rounded font-mono text-xs">
            <div className="text-green-400 mb-2">
              $ <span className="text-white">games_all.exe</span>
            </div>
            <div className="text-green-400 mb-1">→ Total Games: 6</div>
            <div className="text-green-400 mb-1">→ All Features: ENABLED</div>
            <div className="text-green-400 mb-1">
              → Persistence: localStorage
            </div>
            <div className="text-green-400">
              → Status: ◉ ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-pink-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-pink-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl">👤</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              PLAYER PROFILE
            </h1>
            <span className="text-2xl">👤</span>
          </Link>
          <div className="flex gap-2 text-xs flex-wrap">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-pink-500 hover:text-pink-400 transition"
            >
              MAIN
            </Link>
            <Link
              href="/achievements"
              className="px-3 py-1 border border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 transition"
            >
              🏅 ACHIEVEMENTS
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Profile Header */}
          <div className="mb-8 p-8 bg-gradient-to-r from-pink-950/50 to-rose-950/50 border-2 border-pink-500 rounded-lg text-center">
            <div className="text-7xl mb-4">🎮</div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">
              PLAYER_001
            </h2>
            <p className="text-pink-300 mb-4">
              Underground Terminal Arcade Master
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="border-l-4 border-pink-500 pl-4">
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-2xl font-bold text-pink-400">🟢 ACTIVE</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-2xl font-bold text-pink-400">2026.05.18</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <p className="text-gray-400 text-sm">Session Time</p>
                <p className="text-2xl font-bold text-pink-400">∞ HRS</p>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-cyan-500 bg-cyan-950/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                📊 OVERALL STATS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
                  <span className="text-gray-400">Total Games Played</span>
                  <span className="text-cyan-400 font-bold">∞</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
                  <span className="text-gray-400">Average Score</span>
                  <span className="text-cyan-400 font-bold">
                    Check localStorage
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
                  <span className="text-gray-400">Play Time</span>
                  <span className="text-cyan-400 font-bold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-cyan-500/30">
                  <span className="text-gray-400">Favorite Game</span>
                  <span className="text-cyan-400 font-bold">🎰 Slots</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Achievement Level</span>
                  <span className="text-cyan-400 font-bold">ELITE 🏆</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-500 bg-purple-950/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                🎯 PERSONAL BESTS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-purple-500/30">
                  <span className="text-gray-400">🎰 Slots Score</span>
                  <span className="text-purple-400 font-bold">
                    localStorage
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-purple-500/30">
                  <span className="text-gray-400">⛏ Vaporcraft Combo</span>
                  <span className="text-purple-400 font-bold">
                    localStorage
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-purple-500/30">
                  <span className="text-gray-400">🚗 Vice City Wave</span>
                  <span className="text-purple-400 font-bold">
                    localStorage
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-purple-500/30">
                  <span className="text-gray-400">🔮 Tarot Readings</span>
                  <span className="text-purple-400 font-bold">
                    localStorage
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">🎯 Pachinko Points</span>
                  <span className="text-purple-400 font-bold">
                    localStorage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Progress */}
          <div className="mb-8 border-2 border-green-500 bg-green-950/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-6">
              🎮 GAME PROGRESSION
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "🎰 SLOTS",
                  progress: "Check your stats",
                  color: "purple",
                },
                {
                  name: "🔮 TAROT",
                  progress: "22 Cards to collect",
                  color: "cyan",
                },
                {
                  name: "🎯 PACHINKO",
                  progress: "Physics Master",
                  color: "pink",
                },
                {
                  name: "🤖 CAPTCHA",
                  progress: "3 Challenges",
                  color: "yellow",
                },
                {
                  name: "⛏ VAPORCRAFT",
                  progress: "Speed Run Records",
                  color: "green",
                },
                {
                  name: "🚗 VICE CITY",
                  progress: "Wave Survival",
                  color: "red",
                },
              ].map((game, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 rounded p-4 border-l-4 border-green-500"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-200">{game.name}</span>
                    <span className={`text-${game.color}-400 text-sm`}>
                      {game.progress}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges & Achievements Preview */}
          <div className="mb-8 border-2 border-yellow-500 bg-yellow-950/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-6">
              🏅 RECENT BADGES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "🎰", name: "Lucky Streak", desc: "Win 5 in a row" },
                { emoji: "⛏", name: "Block Master", desc: "Perfect combo" },
                { emoji: "🚗", name: "Survivor", desc: "Wave 10+" },
                { emoji: "🔮", name: "Mystic", desc: "All 22 cards" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 rounded-lg p-4 text-center border border-yellow-500/50 hover:border-yellow-400 transition"
                >
                  <p className="text-3xl mb-2">{badge.emoji}</p>
                  <p className="font-bold text-yellow-300 text-sm">
                    {badge.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="mb-8 border-2 border-purple-500/50 bg-purple-950/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              ⚙️ SETTINGS
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-gray-900 rounded border-l-4 border-purple-500">
                <span className="text-gray-300">🔊 Sound Effects</span>
                <span className="text-purple-400 font-bold">ON</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900 rounded border-l-4 border-purple-500">
                <span className="text-gray-300">💾 Auto-Save Stats</span>
                <span className="text-purple-400 font-bold">ENABLED</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900 rounded border-l-4 border-purple-500">
                <span className="text-gray-300">🎨 Vaporwave Theme</span>
                <span className="text-purple-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-900 rounded border-l-4 border-purple-500">
                <span className="text-gray-300">📊 Analytics Tracking</span>
                <span className="text-purple-400 font-bold">OFFLINE</span>
              </div>
            </div>
          </div>

          {/* Terminal Info */}
          <div className="border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs mb-8">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">player_profile.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Player ID: PLAYER_001</p>
              <p>→ Status: Active & Gaming</p>
              <p>→ Storage: window.localStorage</p>
              <p>→ Achievement System: Enabled</p>
              <p>→ Auto-Sync: Real-time</p>
              <p>
                → Profile Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ PROFILE LOADED
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
              href="/achievements"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/50 transition font-bold"
            >
              🏅 ACHIEVEMENTS →
            </Link>
            <Link
              href="/leaderboard"
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/50 transition font-bold"
            >
              LEADERBOARD
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

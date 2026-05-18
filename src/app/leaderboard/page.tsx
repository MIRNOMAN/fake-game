import Link from "next/link";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-yellow-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl">🏆</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              GLOBAL LEADERBOARD
            </h1>
            <span className="text-2xl">🏆</span>
          </Link>
          <div className="flex gap-2 text-xs flex-wrap">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-yellow-500 hover:text-yellow-400 transition"
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
              href="/achievements"
              className="px-3 py-1 border border-amber-500 text-amber-400 rounded hover:bg-amber-500/10 transition"
            >
              🏅 ACHIEVEMENTS
            </Link>
            <Link
              href="/analytics"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-yellow-500 hover:text-yellow-400 transition"
            >
              STATS
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              🎮 TOP PERFORMERS 🎮
            </h2>
            <div className="w-full h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded mb-6 shadow-lg shadow-yellow-500/50"></div>
            <p className="text-yellow-300 text-sm">
              Your local game statistics and high scores. Keep refreshing to see
              live updates!
            </p>
          </div>

          {/* Slots Leaderboard */}
          <div className="mb-8 border-2 border-purple-500 bg-purple-950/30 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🎰</span> SLOTS RANKINGS
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded border-l-4 border-yellow-500">
                <div>
                  <p className="font-bold text-yellow-400">🥇 GOLD JACKPOT</p>
                  <p className="text-gray-400 text-sm">Highest score</p>
                </div>
                <p className="text-3xl font-bold text-yellow-300">
                  Check localStorage
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Stats auto-save from your gameplay sessions
              </p>
            </div>
          </div>

          {/* Tarot Leaderboard */}
          <div className="mb-8 border-2 border-cyan-500 bg-cyan-950/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🔮</span> TAROT READINGS
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded border-l-4 border-cyan-400">
                <div>
                  <p className="font-bold text-cyan-400">📚 ARCANA COLLECTOR</p>
                  <p className="text-gray-400 text-sm">
                    Total readings completed
                  </p>
                </div>
                <p className="text-3xl font-bold text-cyan-300">
                  Check localStorage
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Track your card collection progress
              </p>
            </div>
          </div>

          {/* Minecraft Leaderboard */}
          <div className="mb-8 border-2 border-green-500 bg-green-950/30 rounded-lg overflow-hidden shadow-lg shadow-green-500/20">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>⛏</span> VAPORCRAFT MINING
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded border-l-4 border-green-400">
                <div>
                  <p className="font-bold text-green-400">🔥 COMBO MASTER</p>
                  <p className="text-gray-400 text-sm">Best combo streak</p>
                </div>
                <p className="text-3xl font-bold text-green-300">
                  Check localStorage
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Speed and precision are key!
              </p>
            </div>
          </div>

          {/* GTA5 Leaderboard */}
          <div className="mb-8 border-2 border-red-500 bg-red-950/30 rounded-lg overflow-hidden shadow-lg shadow-red-500/20">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span>🚗</span> VICE CITY SURVIVAL
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-900 rounded border-l-4 border-red-400">
                <div>
                  <p className="font-bold text-red-400">🌊 WAVE WARRIOR</p>
                  <p className="text-gray-400 text-sm">Highest wave reached</p>
                </div>
                <p className="text-3xl font-bold text-red-300">
                  Check localStorage
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Survive as many waves as possible
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-12 border-2 border-purple-500/50 bg-purple-950/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-purple-400 mb-4">
              📖 HOW LEADERBOARD WORKS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="border-l-2 border-purple-500 pl-4">
                <p className="font-bold text-purple-300 mb-1">✓ Auto-Save</p>
                <p>
                  Your scores are automatically saved to browser localStorage
                </p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <p className="font-bold text-purple-300 mb-1">✓ Real-Time</p>
                <p>Scores update instantly after each game session</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <p className="font-bold text-purple-300 mb-1">✓ Persistent</p>
                <p>Stats survive page refreshes and browser restarts</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <p className="font-bold text-purple-300 mb-1">
                  ✓ Multiple Metrics
                </p>
                <p>Track different stats for each game type</p>
              </div>
            </div>
          </div>

          {/* Stats Console */}
          <div className="mt-8 border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">leaderboard_sync.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Storage Location: window.localStorage</p>
              <p>→ Keys: slotStats, tarotReadings, minecraftStats, gta5Stats</p>
              <p>→ Auto-Update: Enabled (on game completion)</p>
              <p>→ Sync Interval: Real-time</p>
              <p>
                → Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ LEADERBOARDS ACTIVE
                </span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex gap-4 justify-center flex-wrap">
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
              href="/analytics"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/50 transition font-bold"
            >
              ANALYTICS →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-blue-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl">📊</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              ANALYTICS DASHBOARD
            </h1>
            <span className="text-2xl">📊</span>
          </Link>
          <div className="flex gap-2 text-xs flex-wrap">
            <Link
              href="/"
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-blue-500 hover:text-blue-400 transition"
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
              className="px-3 py-1 border border-gray-500 text-gray-400 rounded hover:border-blue-500 hover:text-blue-400 transition"
            >
              LEADERBOARD
            </Link>
            <Link
              href="/achievements"
              className="px-3 py-1 border border-amber-500 text-amber-400 rounded hover:bg-amber-500/10 transition"
            >
              🏅 ACHIEVEMENTS
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              📈 GAME ANALYTICS 📈
            </h2>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded mb-6 shadow-lg shadow-blue-500/50"></div>
            <p className="text-blue-300 text-sm">
              Real-time insights into your gaming performance across all titles
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border-2 border-purple-500 bg-purple-950/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-purple-400">6</p>
              <p className="text-gray-400 text-sm mt-2">Games Available</p>
              <p className="text-xs text-gray-500 mt-1">100% collection</p>
            </div>
            <div className="border-2 border-cyan-500 bg-cyan-950/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-cyan-400">∞</p>
              <p className="text-gray-400 text-sm mt-2">Replayability</p>
              <p className="text-xs text-gray-500 mt-1">Endless fun</p>
            </div>
            <div className="border-2 border-green-500 bg-green-950/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-400">100%</p>
              <p className="text-gray-400 text-sm mt-2">Persistence</p>
              <p className="text-xs text-gray-500 mt-1">Stats saved</p>
            </div>
            <div className="border-2 border-pink-500 bg-pink-950/30 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-pink-400">0ms</p>
              <p className="text-gray-400 text-sm mt-2">Server Delay</p>
              <p className="text-xs text-gray-500 mt-1">Client-side only</p>
            </div>
          </div>

          {/* Game Analytics */}
          <div className="space-y-6 mb-8">
            {/* Slots Analytics */}
            <div className="border-2 border-purple-500 bg-purple-950/20 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span>🎰</span> SLOTS ANALYTICS
                </h3>
                <span className="text-sm text-purple-200">View Stats</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-purple-500">
                    <p className="text-purple-300 text-xs font-bold">
                      STAT TRACKING
                    </p>
                    <p className="text-2xl font-bold text-purple-400 mt-2">✓</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Score, Streak, Ratio
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-purple-500">
                    <p className="text-purple-300 text-xs font-bold">
                      MULTIPLIERS
                    </p>
                    <p className="text-2xl font-bold text-purple-400 mt-2">
                      3x
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Max multiplier</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-purple-500">
                    <p className="text-purple-300 text-xs font-bold">
                      WIN TRACKING
                    </p>
                    <p className="text-2xl font-bold text-purple-400 mt-2">
                      📊
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Win/Loss ratio</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-purple-500">
                    <p className="text-purple-300 text-xs font-bold">
                      PERSISTENCE
                    </p>
                    <p className="text-2xl font-bold text-purple-400 mt-2">✓</p>
                    <p className="text-xs text-gray-500 mt-1">
                      localStorage save
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Minecraft Analytics */}
            <div className="border-2 border-green-500 bg-green-950/20 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span>⛏</span> VAPORCRAFT ANALYTICS
                </h3>
                <span className="text-sm text-green-200">View Stats</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-green-500">
                    <p className="text-green-300 text-xs font-bold">
                      TIME LIMIT
                    </p>
                    <p className="text-2xl font-bold text-green-400 mt-2">
                      30s
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Race mode</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-green-500">
                    <p className="text-green-300 text-xs font-bold">COMBOS</p>
                    <p className="text-2xl font-bold text-green-400 mt-2">∞</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Unlimited streaks
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-green-500">
                    <p className="text-green-300 text-xs font-bold">
                      BLOCK TYPES
                    </p>
                    <p className="text-2xl font-bold text-green-400 mt-2">6</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Different values
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-green-500">
                    <p className="text-green-300 text-xs font-bold">
                      LEADERBOARD
                    </p>
                    <p className="text-2xl font-bold text-green-400 mt-2">✓</p>
                    <p className="text-xs text-gray-500 mt-1">Personal best</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GTA5 Analytics */}
            <div className="border-2 border-red-500 bg-red-950/20 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span>🚗</span> VICE CITY ANALYTICS
                </h3>
                <span className="text-sm text-red-200">View Stats</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-red-500">
                    <p className="text-red-300 text-xs font-bold">
                      WAVE SYSTEM
                    </p>
                    <p className="text-2xl font-bold text-red-400 mt-2">∞</p>
                    <p className="text-xs text-gray-500 mt-1">Progressive</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-red-500">
                    <p className="text-red-300 text-xs font-bold">KEYBOARD</p>
                    <p className="text-2xl font-bold text-red-400 mt-2">✓</p>
                    <p className="text-xs text-gray-500 mt-1">WASD controls</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-red-500">
                    <p className="text-red-300 text-xs font-bold">ENEMIES</p>
                    <p className="text-2xl font-bold text-red-400 mt-2">3</p>
                    <p className="text-xs text-gray-500 mt-1">Types AI</p>
                  </div>
                  <div className="bg-gray-900 rounded p-4 border-l-4 border-red-500">
                    <p className="text-red-300 text-xs font-bold">TRACKING</p>
                    <p className="text-2xl font-bold text-red-400 mt-2">✓</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Best wave saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-cyan-500 bg-cyan-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-4">
                🛠️ TECH STACK
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Next.js 16.2.6 (React)</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ react-hot-toast</li>
                <li>✓ React Hooks</li>
                <li>✓ Dynamic imports</li>
              </ul>
            </div>

            <div className="border-2 border-pink-500 bg-pink-950/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-pink-400 mb-4">
                📱 FEATURES
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Real-time notifications</li>
                <li>✓ Persistent stats</li>
                <li>✓ Combo systems</li>
                <li>✓ Physics simulation</li>
                <li>✓ Keyboard controls</li>
                <li>✓ Responsive design</li>
              </ul>
            </div>
          </div>

          {/* System Status */}
          <div className="border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs mb-8">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">analytics_dashboard.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Total Games: 6 (100% tracked)</p>
              <p>→ Performance Metrics: Real-time</p>
              <p>→ Data Storage: Client-side localStorage</p>
              <p>→ API Calls: 0 (offline-first)</p>
              <p>→ Analytics Engine: Custom React hooks</p>
              <p>
                → Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ DASHBOARD OPERATIONAL
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
              href="/leaderboard"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/50 transition font-bold"
            >
              LEADERBOARD
            </Link>
            <Link
              href="/react-games"
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/50 transition font-bold"
            >
              REACT GAMES →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

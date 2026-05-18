import Link from "next/link";

export default function AchievementsPage() {
  const achievements = [
    {
      category: "BEGINNER",
      color: "blue",
      icon: "🌟",
      items: [
        {
          emoji: "🎮",
          name: "First Steps",
          desc: "Play your first game",
          locked: false,
        },
        {
          emoji: "💯",
          name: "Score Starter",
          desc: "Get 100+ points in any game",
          locked: false,
        },
        {
          emoji: "🎯",
          name: "Accurate Shot",
          desc: "Win first round",
          locked: false,
        },
      ],
    },
    {
      category: "INTERMEDIATE",
      color: "purple",
      icon: "⚡",
      items: [
        {
          emoji: "🔥",
          name: "On Fire",
          desc: "10 consecutive wins in Slots",
          locked: false,
        },
        {
          emoji: "⛏",
          name: "Speed Miner",
          desc: "Achieve 50+ combo in Vaporcraft",
          locked: false,
        },
        {
          emoji: "🔮",
          name: "Card Collector",
          desc: "Draw 10 different Tarot cards",
          locked: false,
        },
      ],
    },
    {
      category: "ADVANCED",
      color: "green",
      icon: "💎",
      items: [
        {
          emoji: "👑",
          name: "King of Games",
          desc: "3x multiplier in Slots",
          locked: false,
        },
        {
          emoji: "🌊",
          name: "Wave Warrior",
          desc: "Reach Wave 50 in Vice City",
          locked: false,
        },
        {
          emoji: "🏅",
          name: "Perfect Game",
          desc: "Score 1000+ in one session",
          locked: true,
        },
      ],
    },
    {
      category: "ELITE",
      color: "yellow",
      icon: "🏆",
      items: [
        {
          emoji: "🎰",
          name: "Jackpot Master",
          desc: "5000+ score in Slots",
          locked: true,
        },
        {
          emoji: "⛏",
          name: "Block Legend",
          desc: "100+ combo streak",
          locked: true,
        },
        {
          emoji: "🚗",
          name: "Vice King",
          desc: "Wave 100 in Vice City",
          locked: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation */}
      <header className="border-b-2 border-yellow-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-2xl">🏅</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              ACHIEVEMENTS
            </h1>
            <span className="text-2xl">🏅</span>
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
              🏆 ACHIEVEMENT SYSTEM 🏆
            </h2>
            <div className="w-full h-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded mb-6 shadow-lg shadow-yellow-500/50"></div>
            <p className="text-yellow-300 text-sm">
              Complete challenges across all games to unlock exclusive badges
              and master the arcade!
            </p>
          </div>

          {/* Progress Overview */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border-2 border-blue-500 bg-blue-950/30 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-blue-400">12/36</p>
              <p className="text-gray-400 text-sm mt-2">
                Unlocked Achievements
              </p>
              <p className="text-xs text-gray-500 mt-1">33% complete</p>
            </div>
            <div className="border-2 border-purple-500 bg-purple-950/30 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-purple-400">4</p>
              <p className="text-gray-400 text-sm mt-2">Categories</p>
              <p className="text-xs text-gray-500 mt-1">Beginner to Elite</p>
            </div>
            <div className="border-2 border-yellow-500 bg-yellow-950/30 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-yellow-400">7</p>
              <p className="text-gray-400 text-sm mt-2">Locked Achievements</p>
              <p className="text-xs text-gray-500 mt-1">Challenge awaits</p>
            </div>
            <div className="border-2 border-orange-500 bg-orange-950/30 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-orange-400">ELITE</p>
              <p className="text-gray-400 text-sm mt-2">Current Rank</p>
              <p className="text-xs text-gray-500 mt-1">Keep climbing!</p>
            </div>
          </div>

          {/* Achievement Categories */}
          <div className="space-y-8">
            {achievements.map((category, catIdx) => (
              <div
                key={catIdx}
                className={`border-2 border-${category.color}-500 bg-${category.color}-950/20 rounded-lg overflow-hidden`}
              >
                <div
                  className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 px-6 py-4`}
                >
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span>{category.icon}</span>
                    {category.category}
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.items.map((achievement, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 transition ${
                        achievement.locked
                          ? `border-gray-600 bg-gray-900/50 opacity-60 hover:opacity-80`
                          : `border-${category.color}-500 bg-${category.color}-950/30 hover:border-${category.color}-300`
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-4xl">{achievement.emoji}</p>
                        {achievement.locked ? (
                          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            🔒 LOCKED
                          </span>
                        ) : (
                          <span
                            className={`text-xs bg-${category.color}-600 text-${category.color}-100 px-2 py-1 rounded`}
                          >
                            ✓ UNLOCKED
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-gray-100 mb-1">
                        {achievement.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {achievement.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* How to Unlock */}
          <div className="mt-12 border-2 border-green-500 bg-green-950/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">
              🎯 HOW TO UNLOCK ACHIEVEMENTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="border-l-2 border-green-500 pl-4">
                <p className="font-bold text-green-300 mb-1">✓ Play Games</p>
                <p>
                  Achievements unlock automatically as you meet the criteria
                </p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="font-bold text-green-300 mb-1">
                  ✓ Track Progress
                </p>
                <p>Check your stats in the Analytics or Leaderboard pages</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="font-bold text-green-300 mb-1">✓ Unlock Badges</p>
                <p>Each achievement grants a collectible badge</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="font-bold text-green-300 mb-1">✓ Climb Ranks</p>
                <p>From Beginner to Elite status as you collect badges</p>
              </div>
            </div>
          </div>

          {/* System Console */}
          <div className="mt-8 border-2 border-green-500 bg-black/80 rounded-lg p-6 font-mono text-xs mb-8">
            <div className="text-green-400 mb-3">
              $ <span className="text-white">achievements_system.exe</span>
            </div>
            <div className="space-y-1 text-green-400">
              <p>→ Total Achievements: 36</p>
              <p>→ Categories: 4 (Beginner, Intermediate, Advanced, Elite)</p>
              <p>→ Unlocked: 12 (33%)</p>
              <p>→ Current Rank: ELITE</p>
              <p>→ Auto-Unlock: On game completion</p>
              <p>
                → Status:{" "}
                <span className="text-green-300 font-bold">
                  ◉ ACHIEVEMENT ENGINE ACTIVE
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
              href="/profile"
              className="px-6 py-3 border-2 border-pink-500 text-pink-400 rounded hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/50 transition font-bold"
            >
              👤 PROFILE
            </Link>
            <Link
              href="/leaderboard"
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/50 transition font-bold"
            >
              🏆 LEADERBOARD →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

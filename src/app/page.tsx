import SlotMachine from "@/components/SlotMachine";
import TarotReading from "@/components/TarotReading";
import Pachinko from "@/components/Pachinko";
import FakeCaptcha from "@/components/FakeCaptcha";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white font-mono flex flex-col">
      {/* Navigation Bar */}
      <header className="border-b-2 border-purple-500 bg-black/80 backdrop-blur sticky top-0 z-50 shadow-lg shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">◆</span>
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              UNDERGROUND TERMINAL
            </h1>
            <span className="text-2xl">◆</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="px-3 py-1 border border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500/10 cursor-pointer transition">
              STATUS: ONLINE
            </span>
            <span className="px-3 py-1 border border-green-500 text-green-400 rounded hover:bg-green-500/10 cursor-pointer transition">
              v.2026.05.18
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 gap-0">
        {/* Main Content Area */}
        <main className="flex-1 p-8 border-r-2 border-purple-500/30 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                WELCOME TO THE DIGITAL NEXUS
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>
              <p className="text-cyan-300 text-sm mb-4 leading-relaxed">
                Enter the vaporwave realm where retro meets future. Four digital
                experiences await your exploration in the interactive zone.
              </p>
              {/* <p className="text-gray-400 text-xs">
                // INITIALIZE GAMES | ACCESS SIDEBAR FOR INTERACTIVE ELEMENTS
              </p> */}
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div className="border-2 border-purple-500/50 bg-black/50 backdrop-blur p-6 rounded">
                <h3 className="text-xl font-bold mb-4 text-purple-300">
                  🎰 SLOT MACHINE EXPERIENCE
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Test your luck in this retro-inspired slot machine. Pull the
                  lever and watch the symbols spin. Match three identical
                  symbols for a JACKPOT! Built entirely with client-side React
                  state—no external dependencies needed.
                </p>
                <p className="text-xs text-green-400 font-mono mb-4">
                  {/* // Classic gambling simulator with vaporwave aesthetics */}
                </p>
              </div>

              <div className="border-2 border-cyan-500/50 bg-black/50 backdrop-blur p-6 rounded">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  🔮 CYBER TAROT DIVINATION
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Consult the digital oracle. Draw from a deck of 22 Major
                  Arcana cards and receive cosmic guidance. Each card carries
                  mystical meaning channeled through the cyber spirits. No
                  APIs—pure local magic.
                </p>
                <p className="text-xs text-cyan-400 font-mono mb-4">
                  {/* // Temporal nexus connected to your digital destiny */}
                </p>
              </div>
            </div>

            {/* Terminal Output Section */}
            <div className="border-2 border-green-500 bg-black p-4 rounded font-mono text-xs mb-8">
              <div className="text-green-400 mb-2">
                $ <span className="text-white">system_status.exe</span>
              </div>
              <div className="text-green-400 mb-1">
                → Graphics: VAPORWAVE OPTIMIZED
              </div>
              <div className="text-green-400 mb-1">
                → Performance: CLIENT-SIDE RENDERING
              </div>
              <div className="text-green-400 mb-1">
                → Dependencies: ZERO EXTERNAL APIs
              </div>
              <div className="text-green-400">
                → Status: ◉ READY FOR INTERACTION
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="border border-purple-500 bg-purple-950/20 p-3 rounded">
                <p className="text-purple-300 font-bold mb-1">FRAMEWORK</p>
                <p className="text-gray-400">Next.js with React Components</p>
              </div>
              <div className="border border-pink-500 bg-pink-950/20 p-3 rounded">
                <p className="text-pink-300 font-bold mb-1">STYLING</p>
                <p className="text-gray-400">Tailwind CSS with Gradients</p>
              </div>
              <div className="border border-cyan-500 bg-cyan-950/20 p-3 rounded">
                <p className="text-cyan-300 font-bold mb-1">STATE MANAGEMENT</p>
                <p className="text-gray-400">React Hooks (useState)</p>
              </div>
              <div className="border border-green-500 bg-green-950/20 p-3 rounded">
                <p className="text-green-300 font-bold mb-1">THEME</p>
                <p className="text-gray-400">Vaporwave/Retro Aesthetic</p>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-96 border-l-2 border-purple-500 bg-gradient-to-b from-black to-purple-950/20 p-6 flex flex-col gap-6 overflow-y-auto shadow-lg shadow-purple-500/10">
          {/* Sidebar Header */}
          <div className="border-b-2 border-cyan-500 pb-4">
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
              ◇ INTERACTIVE ZONE ◇
            </h2>
            <p className="text-xs text-gray-400">
              Direct access to gaming experiences
            </p>
          </div>

          {/* Games Container */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <p className="text-xs text-purple-400 font-bold uppercase tracking-wider">
                📊 Gaming Module 1
              </p>
              <SlotMachine />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                🔮 Gaming Module 2
              </p>
              <TarotReading />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-pink-400 font-bold uppercase tracking-wider">
                🎯 Gaming Module 3
              </p>
              <Pachinko />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-wider">
                🤖 Gaming Module 4
              </p>
              <FakeCaptcha />
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t-2 border-purple-500/50 pt-4 space-y-2 text-xs text-gray-500">
            {/* <p className="text-center">// END OF INTERACTIVE ZONE</p> */}
            <p className="text-center text-green-600/50">
              ★ Keep exploring the digital abyss ★
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

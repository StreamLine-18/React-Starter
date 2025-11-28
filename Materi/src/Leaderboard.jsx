import { useState } from 'react';
import { Trophy, Medal, Award, TrendingUp, Star, Crown } from 'lucide-react';

// Data Leaderboard (Dummy)
const INITIAL_PLAYERS = [
  { id: 1, name: "Ahmad Rizki", score: 9850, avatar: "🦁", rank: 1, trend: "up" },
  { id: 2, name: "Siti Nurhaliza", score: 9720, avatar: "🦄", rank: 2, trend: "up" },
  { id: 3, name: "Budi Santoso", score: 9500, avatar: "🐯", rank: 3, trend: "same" },
  { id: 4, name: "Dewi Lestari", score: 9200, avatar: "🦋", rank: 4, trend: "down" },
  { id: 5, name: "Eko Prasetyo", score: 8900, avatar: "🦅", rank: 5, trend: "up" },
  { id: 6, name: "Fitri Handayani", score: 8750, avatar: "🦊", rank: 6, trend: "same" },
  { id: 7, name: "Gunawan Wijaya", score: 8500, avatar: "🐺", rank: 7, trend: "down" },
  { id: 8, name: "Hanna Kartika", score: 8300, avatar: "🦩", rank: 8, trend: "up" },
  { id: 9, name: "Irfan Hakim", score: 8100, avatar: "🦈", rank: 9, trend: "same" },
  { id: 10, name: "Julia Perez", score: 7900, avatar: "🐙", rank: 10, trend: "down" },
];

const Leaderboard = () => {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTrend, setFilterTrend] = useState("all");

  // Filter players based on search and trend
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTrend = filterTrend === "all" || player.trend === filterTrend;
    return matchesSearch && matchesTrend;
  });

  // Get medal icon based on rank
  const getMedalIcon = (rank) => {
    if (rank === 1) return <Crown className="text-yellow-400" size={28} />;
    if (rank === 2) return <Medal className="text-slate-400" size={24} />;
    if (rank === 3) return <Award className="text-amber-600" size={24} />;
    return null;
  };

  // Get trend indicator
  const getTrendIndicator = (trend) => {
    if (trend === "up") return <TrendingUp className="text-green-500" size={16} />;
    if (trend === "down") return <TrendingUp className="text-red-500 rotate-180" size={16} />;
    return <span className="text-slate-400">-</span>;
  };

  // Get rank styling
  const getRankStyle = (rank) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-105 shadow-2xl";
    if (rank === 2) return "bg-gradient-to-r from-slate-300 to-slate-400 text-slate-900 scale-102 shadow-xl";
    if (rank === 3) return "bg-gradient-to-r from-amber-500 to-amber-700 text-white scale-102 shadow-xl";
    return "bg-white hover:bg-slate-50";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl text-white shadow-lg">
              <Trophy size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800">
                🏆 Leaderboard
              </h1>
              <p className="text-slate-600 mt-1">
                Top 10 pemain dengan skor tertinggi
              </p>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600">{players.length}</div>
              <div className="text-sm text-blue-800 mt-1">Total Pemain</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600">
                {Math.max(...players.map(p => p.score))}
              </div>
              <div className="text-sm text-green-800 mt-1">Skor Tertinggi</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600">
                {Math.round(players.reduce((sum, p) => sum + p.score, 0) / players.length)}
              </div>
              <div className="text-sm text-purple-800 mt-1">Rata-rata</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="🔍 Cari nama pemain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Trend Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterTrend("all")}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  filterTrend === "all"
                    ? "bg-purple-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilterTrend("up")}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  filterTrend === "up"
                    ? "bg-green-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                📈 Naik
              </button>
              <button
                onClick={() => setFilterTrend("down")}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  filterTrend === "down"
                    ? "bg-red-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                📉 Turun
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {filteredPlayers.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <p className="text-slate-500 text-lg">Tidak ada pemain ditemukan 😢</p>
            </div>
          ) : (
            filteredPlayers.map((player) => (
              <div
                key={player.id}
                className={`${getRankStyle(player.rank)} rounded-2xl shadow-lg p-5 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex flex-col items-center min-w-[60px]">
                    {getMedalIcon(player.rank) || (
                      <div className="text-3xl font-bold text-slate-600">
                        #{player.rank}
                      </div>
                    )}
                  </div>

                  {/* Avatar */}
                  <div className="text-5xl">{player.avatar}</div>

                  {/* Player Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-bold ${player.rank <= 3 ? "" : "text-slate-800"}`}>
                        {player.name}
                      </h3>
                      {player.rank === 1 && (
                        <Star className="text-yellow-300 fill-yellow-300 animate-pulse" size={20} />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-2xl font-bold ${player.rank <= 3 ? "" : "text-purple-600"}`}>
                        {player.score.toLocaleString()} pts
                      </span>
                      {getTrendIndicator(player.trend)}
                    </div>
                  </div>

                  {/* Badge for top 3 */}
                  {player.rank <= 3 && (
                    <div className="hidden md:block">
                      <div className={`px-4 py-2 rounded-full font-bold ${
                        player.rank === 1 ? "bg-yellow-300 text-yellow-900" :
                        player.rank === 2 ? "bg-slate-200 text-slate-700" :
                        "bg-amber-300 text-amber-900"
                      }`}>
                        TOP {player.rank}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-slate-600 text-sm">
          <p>Menampilkan {filteredPlayers.length} dari {players.length} pemain</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

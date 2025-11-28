import React, { useState } from 'react';
import { Users, Plus, X, Trophy } from 'lucide-react';

// --- DATA PEMAIN (DUMMY) ---
const PLAYERS = [
  { id: 1, name: "Budi Satria", skill: 85, role: "Striker", emoji: "⚡" },
  { id: 2, name: "Andi Tembok", skill: 90, role: "Defender", emoji: "🛡️" },
  { id: 3, name: "Dedi Kancil", skill: 78, role: "Midfielder", emoji: "👟" },
  { id: 4, name: "Agus Petir", skill: 88, role: "Striker", emoji: "🔥" },
  { id: 5, name: "Eko Jaring", skill: 92, role: "Goalkeeper", emoji: "🧤" },
];

const DreamTeam = () => {
  // STATE: Tim Saya (Masih Kosong)
  const [squad, setSquad] = useState([]);

  // --- AREA LOGIC (PHASE 1) ---

  // TODO 1: Buat fungsi untuk merekrut pemain ke squad
  const recruitPlayer = (player) => {
    // Tulis kode di sini
  };

  // TODO 2: Buat fungsi untuk mengeluarkan pemain dari squad
  const removePlayer = (playerId) => {
    // Tulis kode di sini
  };

  // --- AREA LOGIC (PHASE 2) ---

  // TODO 3: Hitung Total Skill Power menggunakan .reduce()
  const totalPower = 0; // Ganti dengan rumus reduce

  return (
    <div className="min-h-screen bg-blue-50 font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* BAGIAN KIRI: BURSA TRANSFER */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8 flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-full text-white shadow-lg shadow-blue-600/30">
            <Trophy size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900">Dream Team ⚽</h1>
            <p className="text-blue-700 opacity-80">Bangun skuad juara kampus!</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLAYERS.map((player) => (
            <div 
              key={player.id} 
              className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-3">{player.emoji}</div>
              <h3 className="font-bold text-lg">{player.name}</h3>
              <p className="text-sm text-slate-500 mb-2">{player.role}</p>
              <div className="bg-blue-100 text-blue-800 font-black px-3 py-1 rounded-full text-xs mb-4">
                SKILL: {player.skill}
              </div>
              <button 
                onClick={() => recruitPlayer(player)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Plus size={16} /> Rekrut
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* BAGIAN KANAN: SKUAD SAYA */}
      <aside className="w-full md:w-96 bg-slate-900 text-white p-6 flex flex-col h-[50vh] md:h-screen sticky top-0 shadow-2xl">
        <div className="mb-6 flex items-center justify-between border-b border-slate-700 pb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Users className="text-blue-400" />
            Line Up
          </h2>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {squad.length} / 5
          </span>
        </div>

        {/* List Pemain di Skuad */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
          {squad.length === 0 ? (
            <div className="text-center py-12 opacity-30 border-2 border-dashed border-slate-600 rounded-xl">
              <p>Belum ada pemain.</p>
            </div>
          ) : (
            squad.map((player, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{player.emoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">{player.name}</h4>
                    <p className="text-xs text-blue-400 font-bold">PWR: {player.skill}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removePlayer(player.id)}
                  className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total Power (Phase 2) */}
        <div className="pt-6 border-t border-slate-700 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400 font-medium">Team Power</span>
            <span className="text-3xl font-black text-yellow-400">{totalPower}</span>
          </div>

          {/* Phase 2 Challenge: Tampilkan Badge "Super Team" jika > 400 */}
          {totalPower > 400 && (
            <div className="bg-yellow-400/20 text-yellow-400 text-center text-sm font-bold py-2 rounded-lg mb-4 border border-yellow-400/50">
              🔥 SUPER TEAM!
            </div>
          )}

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50">
            Mulai Pertandingan
          </button>
        </div>
      </aside>

    </div>
  );
};

export default DreamTeam;

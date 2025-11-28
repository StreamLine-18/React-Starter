import React, { useState } from 'react';
import { Backpack, Plus, X, Map, Scale } from 'lucide-react';

// --- DATA BARANG (DUMMY) ---
const ITEMS = [
  { id: 1, name: "Tenda Dome", weight: 2.5, category: "Alat", emoji: "⛺" },
  { id: 2, name: "Sleeping Bag", weight: 1.2, category: "Tidur", emoji: "🛌" },
  { id: 3, name: "Kompor Portabel", weight: 0.8, category: "Masak", emoji: "🔥" },
  { id: 4, name: "Air Galon 2L", weight: 2.0, category: "Minum", emoji: "💧" },
  { id: 5, name: "Kamera DSLR", weight: 1.5, category: "Dokumentasi", emoji: "📷" },
  { id: 6, name: "Jaket Tebal", weight: 0.5, category: "Pakaian", emoji: "🧥" },
];

const Backpacker = () => {
  // STATE: Isi Tas (Masih Kosong)
  const [bag, setBag] = useState([]);

  // --- AREA LOGIC (PHASE 1) ---

  // TODO 1: Buat fungsi untuk menambah barang ke tas
  const packItem = (item) => {
    // Tulis kode di sini
  };

  // TODO 2: Buat fungsi untuk menghapus barang dari tas
  const unpackItem = (itemId) => {
    // Tulis kode di sini
  };

  // --- AREA LOGIC (PHASE 2) ---

  // TODO 3: Hitung Total Berat menggunakan .reduce()
  const totalWeight = 0; // Ganti dengan rumus reduce

  return (
    <div className="min-h-screen bg-green-50 font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* BAGIAN KIRI: GUDANG BARANG */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8 flex items-center gap-3">
          <div className="bg-green-600 p-3 rounded-full text-white shadow-lg shadow-green-600/30">
            <Map size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-green-900">Backpacker Life 🎒</h1>
            <p className="text-green-700 opacity-80">Packing ringan, jalan jauh!</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 rounded-2xl shadow-sm border border-green-100 flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className="text-4xl">{item.emoji}</div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800">{item.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <Scale size={14} />
                  <span>{item.weight} kg</span>
                </div>
              </div>
              <button 
                onClick={() => packItem(item)}
                className="bg-green-100 text-green-700 p-3 rounded-xl hover:bg-green-600 hover:text-white transition-all"
              >
                <Plus size={20} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* BAGIAN KANAN: ISI TAS (BACKPACK) */}
      <aside className="w-full md:w-80 bg-stone-100 border-l border-stone-200 p-6 flex flex-col h-[50vh] md:h-screen sticky top-0">
        <div className="mb-6 flex items-center justify-between border-b border-stone-300 pb-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-stone-700">
            <Backpack className="text-green-600" />
            Tas Kamu
          </h2>
          <span className="bg-stone-300 text-stone-700 text-xs font-bold px-3 py-1 rounded-full">
            {bag.length} Item
          </span>
        </div>

        {/* List Barang di Tas */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {bag.length === 0 ? (
            <div className="text-center py-10 opacity-40 border-2 border-dashed border-stone-400 rounded-xl">
              <p>Tas masih kosong.</p>
            </div>
          ) : (
            bag.map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.weight} kg</p>
                  </div>
                </div>
                <button 
                  onClick={() => unpackItem(item.id)}
                  className="text-stone-400 hover:text-red-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total Berat (Phase 2) */}
        <div className="pt-6 border-t border-stone-300 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-stone-600 font-medium">Total Berat</span>
            <span className={`text-2xl font-bold ${totalWeight > 5 ? 'text-red-600' : 'text-green-600'}`}>
              {totalWeight.toFixed(1)} kg
            </span>
          </div>

          {/* Phase 2 Challenge: Tampilkan Warning jika > 7kg */}
          {totalWeight > 7 && (
             <div className="bg-red-100 text-red-700 text-center text-xs font-bold py-2 rounded-lg mb-4">
               🛑 KELEBIHAN MUATAN! (&gt; 7kg)
             </div>
          )}

          <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            Mulai Petualangan
          </button>
        </div>
      </aside>

    </div>
  );
};

export default Backpacker;

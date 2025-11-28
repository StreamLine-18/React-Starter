import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Utensils } from 'lucide-react';

// --- DATA MENU (DUMMY) ---
const MENU_ITEMS = [
  { id: 1, name: "Nasi Goreng Spesial", price: 25000, category: "Makanan", emoji: "🍛" },
  { id: 2, name: "Ayam Bakar Madu", price: 30000, category: "Makanan", emoji: "🍗" },
  { id: 3, name: "Es Teh Manis", price: 5000, category: "Minuman", emoji: "🥤" },
  { id: 4, name: "Tahu Walik", price: 12000, category: "Snack", emoji: "🥟" },
  { id: 5, name: "Kopi Susu Gula Aren", price: 18000, category: "Minuman", emoji: "☕" },
];

const KantinOnline = () => {
  // STATE: Keranjang Belanja (Masih Kosong)
  const [cart, setCart] = useState([]);

  // --- AREA LOGIC (PHASE 1) ---
  
  // TODO 1: Buat fungsi untuk menambah menu ke cart
  const addToCart = (item) => {
    // Phase 1: Ganti alert ini dengan logic setState!
    // Hint: setCart([...cart, item])
    alert(`Logic belum dibuat! Kamu memilih: ${item.name}`);
  };

  // TODO 2: Buat fungsi untuk menghapus menu dari cart
  const removeFromCart = (itemId) => {
    // Phase 1: Ganti alert ini dengan logic filter!
    // Hint: setCart(cart.filter(...))
    alert(`Logic hapus belum dibuat! ID: ${itemId}`);
  };

  // --- AREA LOGIC (PHASE 2) ---
  
  // TODO 3: Hitung Total Harga menggunakan .reduce()
  const totalPrice = 0; // Ganti 0 dengan rumus reduce

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-slate-800 flex flex-col md:flex-row">
      
      {/* BAGIAN KIRI: DAFTAR MENU */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8 flex items-center gap-3">
          <div className="bg-orange-500 p-3 rounded-full text-white shadow-lg">
            <Utensils size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-orange-900">Kantin Online 🍔</h1>
            <p className="text-orange-700 opacity-80">Pilih menu makan siangmu!</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-slate-500 mb-4">Rp {item.price.toLocaleString()}</p>
              <button 
                onClick={() => addToCart(item)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Plus size={18} /> Tambah
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* BAGIAN KANAN: KERANJANG (CART) */}
      <aside className="w-full md:w-96 bg-white border-l border-orange-100 p-6 flex flex-col h-[50vh] md:h-screen sticky top-0 shadow-2xl">
        <div className="mb-6 flex items-center justify-between border-b border-orange-100 pb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart className="text-orange-500" />
            Pesananmu
          </h2>
          <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
            {cart.length} Item
          </span>
        </div>

        {/* List Item di Keranjang */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {cart.length === 0 ? (
            <div className="text-center py-10 opacity-50 border-2 border-dashed border-slate-200 rounded-xl">
              <p>Keranjang kosong ☹️</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-orange-50 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-700">{item.name}</h4>
                    <p className="text-xs text-slate-500">Rp {item.price.toLocaleString()}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total Harga (Phase 2) */}
        <div className="pt-6 border-t border-orange-100 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-600 font-medium">Total Bayar</span>
            <span className="text-2xl font-bold text-orange-600">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>
          
          {/* Phase 2 Challenge: Tampilkan Badge "Mahal" jika > 50.000 */}
          {totalPrice > 50000 && (
             <div className="bg-red-100 text-red-600 text-center text-sm font-bold py-2 rounded-lg mb-4 animate-pulse">
               {/* FIX: Menggunakan entity &gt; pengganti > */}
               ⚠️ Wah, boros nih! (&gt; 50rb)
             </div>
          )}

          <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition-all">
            Bayar Sekarang
          </button>
        </div>
      </aside>

    </div>
  );
};

export default KantinOnline;
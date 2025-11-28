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
    // Tulis kode di sini
  };

  // TODO 2: Buat fungsi untuk menghapus menu dari cart
  const removeFromCart = (itemId) => {
    // Tulis kode di sini
  };

  // --- AREA LOGIC (PHASE 2) ---
  // TODO 3: Hitung Total Harga menggunakan .reduce()
  const totalPrice = 0; // Ganti dengan rumus reduce

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* BAGIAN KIRI: DAFTAR MENU */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-orange-500" />
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Kantin Online 🍔</h1>
              <p className="text-slate-500">Pilih menu makan siangmu!</p>
            </div>
          </div>

          <div className="space-y-4">
            {MENU_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="border-2 border-slate-200 rounded-2xl p-4 hover:border-orange-300 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                    <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <p className="text-orange-500 font-bold mt-1">
                      Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN KANAN: KERANJANG (CART) */}
        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit sticky top-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-7 h-7 text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-800">Pesananmu</h2>
            </div>
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-bold">
              {cart.length} Item
            </span>
          </div>

          {/* List Item di Keranjang */}
          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <ShoppingCart className="w-16 h-16 mx-auto mb-3 opacity-30" />
                <p className="font-medium">Keranjang kosong ☹️</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl"
                >
                  <div className="text-3xl">{item.emoji}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-orange-500 font-bold text-sm">
                      Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Total Harga (Phase 2) */}
          <div className="border-t-2 border-slate-200 pt-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-slate-600">Total Bayar</span>
              <span className="text-2xl font-bold text-orange-500">
                Rp {totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Phase 2 Challenge: Tampilkan Badge "Mahal" jika > 50.000 */}
            {totalPrice > 50000 && (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-3 text-center">
                <p className="text-yellow-700 font-semibold text-sm">
                  ⚠️ Wah, boros nih! (&gt; 50rb)
                </p>
              </div>
            )}

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition-all">
              💳 Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KantinOnline;
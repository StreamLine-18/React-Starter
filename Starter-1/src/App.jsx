import React, { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Utensils, Moon, Sun, X } from 'lucide-react';

// --- DATA MENU (DENGAN IMAGE URL) ---
const MENU_ITEMS = [
  { 
    id: 1, 
    name: "Nasi Goreng Spesial", 
    price: 25000, 
    category: "Makanan", 
    image: "https://img.lovepik.com/bg/20231213/fried-rice-with-vegetable-and-meat-on-a-plate_2453377_wh1200.png" 
  },
  { 
    id: 2, 
    name: "Ayam Bakar Madu", 
    price: 30000, 
    category: "Makanan", 
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" 
  },
  { 
    id: 3, 
    name: "Es Teh Manis", 
    price: 5000, 
    category: "Minuman", 
    image: "https://franchisebisniskost.com/wp-content/uploads/2025/02/Franchise-Es-Teh.png" 
  },
  { 
    id: 4, 
    name: "Tahu Walik", 
    price: 12000, 
    category: "Snack", 
    image: "https://image.idn.media/post/20200716/tahu-0c803551644ce3c4a20f0966b30c1991.jpg" 
  },
  { 
    id: 5, 
    name: "Kopi Susu Gula Aren", 
    price: 18000, 
    category: "Minuman", 
    image: "https://blog.alfagift.id/wp-content/uploads/2025/08/1.-Resep-Kopi-Susu-Gula-Aren-yang-Praktis-Freepik-valeria_aksakova.webp" 
  },
  { 
    id: 6, 
    name: "Nasi Goreng Sunda", 
    price: 18000, 
    category: "Makanan", 
    image: "https://image.idntimes.com/post/20220209/ngj-5b357a9ad6d7e0b737452134183791d2-d1f6d26cde8b319731658207d32e0cde.jpg" 
  },
  { 
    id: 7, 
    name: "Pisang Goreng Keju", 
    price: 15000, 
    category: "Snack", 
    image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e28bad14-5565-4b21-90b5-8c0e70530663_Go-Biz_20240217_081039.jpeg"
  }
  , {
    id: 8, 
    name: "Coto Makassar", 
    price: 22000, 
    category: "Snack", 
    image: "https://asset.kompas.com/crops/zAJSjgJEPVVmDrApNrdSlNxzRvo=/138x48:936x580/1200x800/data/photo/2024/03/17/65f6c7ff27351.jpg"
  }
];

const KantinOnline = () => {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const index = prev.findIndex(item => item.id === itemId);
      if (index === -1) return prev;
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={`min-h-screen w-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-900' 
        : 'bg-gradient-to-br from-orange-50 to-yellow-50'
    }`}>
      {/* HEADER */}
      <header className={`border-b-2 p-6 transition-colors ${
        darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Utensils className="w-8 h-8 text-orange-500" />
            <div>
              <h1 className={`text-3xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>Kantin Online</h1>
              <p className={`transition-colors ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>Pilih menu makan siangmu!</p>
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full transition-all ${
              darkMode 
                ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <div 
              key={item.id}
              className={`border-2 rounded-2xl overflow-hidden transition-all ${
                darkMode
                  ? 'border-slate-700 hover:border-slate-400 bg-slate-800'
                  : 'border-slate-200 hover:border-orange-500 bg-white'
              } hover:shadow-lg`}
            >
              {/* GAMBAR */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* KONTEN */}
              <div className="p-4">
                <h3 className={`font-bold text-lg transition-colors mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>{item.name}</h3>
                
                <span className={`text-xs px-3 py-1 rounded-full inline-block transition-colors mb-3 ${
                  darkMode
                    ? 'bg-orange-900 text-amber-200'
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  {item.category}
                </span>
                
                <p className="text-orange-500 font-bold mb-3">
                  Rp {item.price.toLocaleString()}
                </p>

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
      </main>

      {/* TOMBOL PESANAN (FLOATING BUTTON) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="bg-white text-orange-500 px-3 py-1 rounded-full font-bold text-sm">
          {cart.length}
        </span>
      </button>

      {/* SIDEBAR PESANAN */}
      <div className={`fixed right-0 top-0 h-screen w-96 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        darkMode 
          ? 'bg-slate-800' 
          : 'bg-white'
      } shadow-2xl z-50 flex flex-col`}>
        
        {/* HEADER SIDEBAR */}
        <div className={`border-b-2 p-6 flex items-center justify-between transition-colors ${
          darkMode ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-7 h-7 text-orange-500" />
            <h2 className={`text-2xl font-bold transition-colors ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Pesananmu</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className={`p-2 transition-colors ${
              darkMode
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-400 hover:text-slate-800'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ISI SIDEBAR */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-3">
            {cart.length === 0 ? (
              <div className={`text-center py-12 transition-colors ${
                darkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <ShoppingCart className="w-16 h-16 mx-auto mb-3 opacity-30" />
                <p className="font-medium">Keranjang kosong ☹️</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    darkMode
                      ? 'bg-slate-700'
                      : 'bg-slate-50'
                  }`}
                >
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className={`font-semibold transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>{item.name}</p>
                    <p className="text-orange-500 font-bold">
                      Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`p-2 transition-colors ${
                      darkMode
                        ? 'text-slate-500 hover:text-red-400'
                        : 'text-slate-400 hover:text-red-500'
                    }`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* FOOTER SIDEBAR */}
        <div className={`border-t-2 p-6 space-y-3 transition-colors ${
          darkMode ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className="flex justify-between items-center">
            <span className={`text-lg font-semibold transition-colors ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>Total</span>
            <span className="text-2xl font-bold text-orange-500">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>

          {totalPrice > 50000 && (
            <div className={`border-2 rounded-xl p-3 text-center transition-colors ${
              darkMode
                ? 'bg-yellow-900 border-yellow-700'
                : 'bg-yellow-50 border-yellow-300'
            }`}>
              <p className={`font-semibold text-sm transition-colors ${
                darkMode ? 'text-yellow-300' : 'text-yellow-700'
              }`}>
                ⚠️ Wah, boros nih! (&gt; 50rb)
              </p>
            </div>
          )}

          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition-all">
            💳 Bayar Sekarang
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default KantinOnline;
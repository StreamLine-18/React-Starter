// ...existing code...
import React, { useState } from 'react';
import Header from './components/Header';
import MenuGrid from './components/MenuGrid';
import CartButton from './components/CartButton';
import SidebarCart from './components/SidebarCart';

// --- DATA MENU (DENGAN IMAGE URL) ---
const MENU_ITEMS = [
  { id: 1, name: "Nasi Goreng Spesial", price: 25000, category: "Makanan", image: "https://img.lovepik.com/bg/20231213/fried-rice-with-vegetable-and-meat-on-a-plate_2453377_wh1200.png" },
  { id: 2, name: "Ayam Bakar Madu", price: 30000, category: "Makanan", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop" },
  { id: 3, name: "Es Teh Manis", price: 5000, category: "Minuman", image: "https://franchisebisniskost.com/wp-content/uploads/2025/02/Franchise-Es-Teh.png" },
  { id: 4, name: "Tahu Walik", price: 12000, category: "Snack", image: "https://image.idn.media/post/20200716/tahu-0c803551644ce3c4a20f0966b30c1991.jpg" },
  { id: 5, name: "Kopi Susu Gula Aren", price: 18000, category: "Minuman", image: "https://blog.alfagift.id/wp-content/uploads/2025/08/1.-Resep-Kopi-Susu-Gula-Aren-yang-Praktis-Freepik-valeria_aksakova.webp" },
  { id: 6, name: "Nasi Goreng Sunda", price: 18000, category: "Makanan", image: "https://image.idntimes.com/post/20220209/ngj-5b357a9ad6d7e0b737452134183791d2-d1f6d26cde8b319731658207d32e0cde.jpg" },
  { id: 7, name: "Pisang Goreng Keju", price: 15000, category: "Snack", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e28bad14-5565-4b21-90b5-8c0e70530663_Go-Biz_20240217_081039.jpeg" },
  { id: 8, name: "Coto Makassar", price: 22000, category: "Snack", image: "https://asset.kompas.com/crops/zAJSjgJEPVVmDrApNrdSlNxzRvo=/138x48:936x580/1200x800/data/photo/2024/03/17/65f6c7ff27351.jpg" }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const addToCart = (item) => setCart(prev => [...prev, item]);
  const removeFromCart = (itemId) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === itemId);
      if (idx === -1) return prev;
      const next = [...prev];
      next.splice(idx, 1);
      return next;
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={`min-h-screen w-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-orange-50 to-yellow-50'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto p-6">
        <MenuGrid items={MENU_ITEMS} addToCart={addToCart} darkMode={darkMode} />
      </main>

      <CartButton count={cart.length} onClick={() => setSidebarOpen(true)} />

      <SidebarCart
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        darkMode={darkMode}
      />

      {sidebarOpen && <div className="fixed inset-0 backdrop-blur-md  bg-opacity-30 z-40" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default App;
import React from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

const SidebarCart = ({ open, onClose, cart, removeFromCart, totalPrice, darkMode }) => (
  <div className={`fixed right-0 top-0 h-screen w-96 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-2xl z-50 flex flex-col`}>
    <div className={`border-b-2 p-6 flex items-center justify-between ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className="flex items-center gap-3">
        <ShoppingCart className="w-7 h-7 text-orange-500" />
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Pesananmu</h2>
      </div>
      <button onClick={onClose} className={`p-2 ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}><X className="w-6 h-6" /></button>
    </div>

    <div className="flex-1 overflow-y-auto p-6">
      <div className="space-y-3">
        {cart.length === 0 ? (
          <div className={`text-center py-12 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <ShoppingCart className="w-16 h-16 mx-auto mb-3 opacity-30" />
            <p className="font-medium">Keranjang kosong ☹️</p>
          </div>
        ) : (
          cart.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>{item.name}</p>
                <p className="text-orange-500 font-bold">Rp {item.price.toLocaleString()}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={`p-2 ${darkMode ? 'text-slate-500 hover:text-red-400' : 'text-slate-400 hover:text-red-500'}`}>
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>

    <div className={`border-t-2 p-6 space-y-3 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className="flex justify-between items-center">
        <span className={`text-lg font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Total</span>
        <span className="text-2xl font-bold text-orange-500">Rp {totalPrice.toLocaleString()}</span>
      </div>

      {totalPrice > 50000 && (
        <div className={`border-2 rounded-xl p-3 text-center ${darkMode ? 'bg-yellow-900 border-yellow-700' : 'bg-yellow-50 border-yellow-300'}`}>
          <p className={`font-semibold text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>⚠️ Wah, boros nih! (&gt; 50rb)</p>
        </div>
      )}

      <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg">💳 Bayar Sekarang</button>
    </div>
  </div>
);

export default SidebarCart;
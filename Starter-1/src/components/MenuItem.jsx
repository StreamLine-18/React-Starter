import React from 'react';
import { Plus } from 'lucide-react';

const MenuItem = ({ item, addToCart, darkMode }) => (
  <div className={`border-2 rounded-2xl overflow-hidden transition-all ${darkMode ? 'border-slate-700 hover:border-slate-400 bg-slate-800' : 'border-slate-200 hover:border-orange-500 bg-white'} hover:shadow-lg`}>
    <div className="h-40 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{item.name}</h3>
      <span className={`text-xs px-3 py-1 rounded-full inline-block mb-3 ${darkMode ? 'bg-orange-900 text-amber-200' : 'bg-orange-100 text-orange-600'}`}>{item.category}</span>
      <p className="text-orange-500 font-bold mb-3">Rp {item.price.toLocaleString()}</p>
      <button onClick={() => addToCart(item)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2">
        <Plus className="w-5 h-5" /> Tambah
      </button>
    </div>
  </div>
);

export default MenuItem;
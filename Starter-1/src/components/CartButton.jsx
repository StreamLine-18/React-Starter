import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartButton = ({ count, onClick }) => (
  <button onClick={onClick} className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2">
    <ShoppingCart className="w-6 h-6" />
    <span className="bg-white text-orange-500 px-3 py-1 rounded-full font-bold text-sm">{count}</span>
  </button>
);

export default CartButton;
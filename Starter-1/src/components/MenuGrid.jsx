import React from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ items, addToCart, darkMode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {items.map(item => (
      <MenuItem key={item.id} item={item} addToCart={addToCart} darkMode={darkMode} />
    ))}
  </div>
);

export default MenuGrid;
import React from 'react';
import { Utensils, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => (
  <header className={`border-b-2 p-6 transition-colors ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Utensils className="w-8 h-8 text-rgb-500" />
        <div>
          <h1 className={`text-3xl font-bold transition-colors ${darkMode ? 'text-white' : 'text-slate-800'}`}>Kantin Online</h1>
          <p className={`transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Pilih menu makan siangmu!</p>
        </div>
      </div>

      <button
        onClick={() => setDarkMode(d => !d)}
        className={`p-3 rounded-full transition-all ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        title="Toggle Dark Mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  </header>
);

export default Header;
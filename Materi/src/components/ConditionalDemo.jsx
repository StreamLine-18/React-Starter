import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function ConditionalDemo() {
  const [isLogin, setIsLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="space-y-4">
      <div className="border-2 border-slate-200 p-6 rounded-xl text-center">
        {isLogin ? (
          <div className="space-y-3">
            <div className="text-green-500 text-5xl">✓</div>
            <h3 className="text-xl font-bold text-slate-800">Selamat Datang!</h3>
            <p className="text-slate-600">Kamu sudah login</p>
            <button
              onClick={() => setIsLogin(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-slate-400 text-5xl">🔒</div>
            <h3 className="text-xl font-bold text-slate-800">Belum Login</h3>
            <p className="text-slate-600">Silakan login terlebih dahulu</p>
            <button
              onClick={() => setIsLogin(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              Login
            </button>
          </div>
        )}
      </div>

      <div className="border-2 border-slate-200 p-6 rounded-xl">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
        >
          {showMenu ? "Tutup Menu" : "Buka Menu"}
          <ChevronRight className={`w-5 h-5 transition-transform ${showMenu ? 'rotate-90' : ''}`} />
        </button>

        {showMenu && (
          <div className="mt-4 space-y-2">
            <div className="bg-slate-50 p-3 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">
              📝 Menu 1 - Profil
            </div>
            <div className="bg-slate-50 p-3 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">
              ⚙️ Menu 2 - Pengaturan
            </div>
            <div className="bg-slate-50 p-3 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">
              🚪 Menu 3 - Keluar
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConditionalDemo;

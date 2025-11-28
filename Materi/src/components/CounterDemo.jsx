import { useState } from 'react';

function CounterDemo() {
  const [angka, setAngka] = useState(0);

  return (
    <div className="bg-slate-100 p-6 rounded-xl text-center">
      <p className="text-5xl font-bold text-slate-800 mb-4">{angka}</p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setAngka(angka - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          - Kurang
        </button>
        <button
          onClick={() => setAngka(0)}
          className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => setAngka(angka + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          + Tambah
        </button>
      </div>
    </div>
  );
}

export default CounterDemo;

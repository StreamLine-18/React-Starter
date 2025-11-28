import { useState } from 'react';

function EventDemo() {
  const [pesan, setPesan] = useState("");

  const tampilkanAlert = () => {
    alert("Halo dari Event Handler! 👋");
  };

  const gantiPesan = (teks) => {
    setPesan(teks);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={tampilkanAlert}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-bold transition-colors"
      >
        Klik untuk Alert
      </button>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => gantiPesan("Senang 😊")}
          className="bg-green-100 hover:bg-green-200 text-green-700 py-2 rounded-lg font-semibold transition-colors"
        >
          Senang
        </button>
        <button
          onClick={() => gantiPesan("Sedih 😢")}
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 rounded-lg font-semibold transition-colors"
        >
          Sedih
        </button>
        <button
          onClick={() => gantiPesan("Marah 😠")}
          className="bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-lg font-semibold transition-colors"
        >
          Marah
        </button>
      </div>

      {pesan && (
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-yellow-800">Mood: {pesan}</p>
        </div>
      )}
    </div>
  );
}

export default EventDemo;

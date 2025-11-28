import { useState } from 'react';

function FormDemo() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");

  return (
    <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Nama Kamu:
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Ketik nama..."
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Umur:
          </label>
          <input
            type="number"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
            placeholder="Masukkan umur..."
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
          <p className="text-slate-700">
            <strong>Preview:</strong> {nama || "(belum diisi)"} - {umur || "0"} tahun
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormDemo;

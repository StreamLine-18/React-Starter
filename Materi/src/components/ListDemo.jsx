import { CheckCircle } from 'lucide-react';

function ListDemo() {
  const siswa = [
    { id: 1, nama: "Budi", nilai: 85 },
    { id: 2, nama: "Siti", nilai: 92 },
    { id: 3, nama: "Andi", nilai: 78 },
    { id: 4, nama: "Rina", nilai: 88 }
  ];

  return (
    <div className="space-y-3">
      {siswa.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white border-2 border-slate-200 p-4 rounded-lg hover:border-blue-300 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {item.id}
            </div>
            <span className="font-semibold text-slate-800">{item.nama}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">{item.nilai}</span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListDemo;

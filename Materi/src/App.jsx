import { Book, Code } from 'lucide-react';
import TombolDemo from './components/TombolDemo';
import KartuProps from './components/KartuProps';
import CounterDemo from './components/CounterDemo';
import FormDemo from './components/FormDemo';
import EventDemo from './components/EventDemo';
import ListDemo from './components/ListDemo';
import ConditionalDemo from './components/ConditionalDemo';
import UseEffectDemo from './components/UseEffectDemo';

function DemoReact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-12 h-12 text-blue-500" />
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                Demo Materi React
              </h1>
              <p className="text-slate-600 mt-1">
                Praktik langsung semua konsep dasar React
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Component */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-slate-800">1. Component</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Fungsi JavaScript yang mengembalikan tampilan (JSX)
          </p>
          <TombolDemo />
        </div>

        {/* Section 2: Props */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-slate-800">2. Props</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Mengirim data dari Parent ke Child
          </p>
          <div className="grid grid-cols-3 gap-4">
            <KartuProps judul="Belajar React" warna="#3b82f6" emoji="📚" />
            <KartuProps judul="Makan Siang" warna="#ef4444" emoji="🍔" />
            <KartuProps judul="Main Game" warna="#8b5cf6" emoji="🎮" />
          </div>
        </div>

        {/* Section 3: State */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-slate-800">3. State (useState)</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Data internal yang bisa berubah dan memicu re-render
          </p>
          <CounterDemo />
        </div>

        {/* Section 4: Two-Way Binding */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-slate-800">4. Two-Way Binding</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Menghubungkan input dengan state secara real-time
          </p>
          <FormDemo />
        </div>

        {/* Section 5: Event Handling */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-slate-800">5. Event Handling</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Menangani interaksi pengguna (klik, input, submit)
          </p>
          <EventDemo />
        </div>

        {/* Section 6: Rendering List */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-teal-500" />
            <h2 className="text-2xl font-bold text-slate-800">6. Rendering List (.map)</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Menampilkan data array dengan .map() dan key unik
          </p>
          <ListDemo />
        </div>

        {/* Section 7: Conditional Rendering */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-800">7. Conditional Rendering</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Menampilkan UI berdasarkan kondisi (ternary & &&)
          </p>
          <ConditionalDemo />
        </div>

        {/* Section 8: useEffect */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-bold text-slate-800">8. useEffect (Side Effects)</h2>
          </div>
          <p className="text-slate-600 mb-4">
            Menjalankan kode setelah render (timer, API calls, subscriptions)
          </p>
          <UseEffectDemo />
        </div>


      </div>
    </div>
  );
}

export default DemoReact;
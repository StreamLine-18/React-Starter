import { useState } from 'react';
import { UserPlus, Save, X, Mail, User, Trophy, Gauge, TrendingUp } from 'lucide-react';

const InputData = () => {
  // Form State
  const [formData, setFormData] = useState({
    teamName: '',
    avatar: '🦁',
    score: ''
  });

  // Submitted Data List
  const [submittedData, setSubmittedData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Avatar Options
  const avatarOptions = ['🦁', '🦄', '🐯', '🦋', '🦅', '🦊', '🐺', '🦩', '🦈', '🐙', '🐼', '🦝', '🦢', '🐸', '🦎'];

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Avatar Select
  const handleAvatarSelect = (avatar) => {
    setFormData(prev => ({
      ...prev,
      avatar
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.teamName || !formData.score) {
      alert('Nama TIM dan Score wajib diisi!');
      return;
    }

    // Create new entry
    const newEntry = {
      id: Date.now(),
      teamName: formData.teamName,
      avatar: formData.avatar,
      score: parseInt(formData.score) || 0,
      timestamp: new Date().toLocaleString('id-ID')
    };

    // Add to list
    setSubmittedData(prev => [newEntry, ...prev]);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setFormData({
      teamName: '',
      avatar: '🦁',
      score: ''
    });
  };

  // Handle Delete
  const handleDelete = (id) => {
    setSubmittedData(prev => prev.filter(item => item.id !== id));
  };

  // Calculate total score
  const totalScore = submittedData.reduce((sum, item) => sum + item.score, 0);
  const avgScore = submittedData.length > 0 ? Math.round(totalScore / submittedData.length) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce">
            ✅ Data berhasil disimpan!
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl text-white shadow-lg">
              <UserPlus size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-slate-800">
                📊 Input Data TIM
              </h1>
              <p className="text-slate-600 mt-1">
                Masukkan nama tim, avatar, dan score
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <UserPlus className="text-indigo-500" />
              Form Input
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Team Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Nama TIM *
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Masukkan nama tim..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Avatar Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Avatar *
                </label>
                <div className="flex flex-wrap gap-2">
                  {avatarOptions.map((avatar) => (
                    <button
                      key={avatar}
                      type="button"
                      onClick={() => handleAvatarSelect(avatar)}
                      className={`text-3xl p-2 rounded-xl transition-all ${
                        formData.avatar === avatar
                          ? 'bg-indigo-100 ring-4 ring-indigo-500 scale-110'
                          : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              {/* Score */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <Trophy size={16} className="inline mr-2" />
                  Score *
                </label>
                <input
                  type="number"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-xl font-bold hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Simpan Data
              </button>
            </form>
          </div>

          {/* Right Side: Submitted Data */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="text-purple-500" />
                Data Tersimpan
              </h2>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                {submittedData.length} entries
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600">{totalScore}</div>
                <div className="text-xs text-blue-800 mt-1">Total Score</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600">{avgScore}</div>
                <div className="text-xs text-purple-800 mt-1">Rata-rata</div>
              </div>
            </div>

            {/* Data List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {submittedData.length === 0 ? (
                <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                  <p className="text-lg">Belum ada data tersimpan</p>
                  <p className="text-sm mt-2">Isi form di sebelah kiri untuk menambah data</p>
                </div>
              ) : (
                submittedData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-3xl">{item.avatar}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800">{item.teamName}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              {item.score} pts
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-2">{item.timestamp}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputData;

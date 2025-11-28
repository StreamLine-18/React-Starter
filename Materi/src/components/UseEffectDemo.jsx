import { useState, useEffect } from 'react';

function UseEffectDemo() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Example 1: Timer with useEffect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds(prev => prev + 10);
      }, 10);
    }
    
    // Cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format time as MM:SS.MS
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  // Example 2: Fetch data on mount
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const joke = await response.json();
      setData(joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []); // Empty array = runs once on mount

  return (
    <div className="space-y-6">
      {/* Timer Example */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-slate-800 mb-3">⏱️ Timer dengan useEffect</h3>
        <div className="text-center">
          <div className="text-5xl font-bold text-blue-600 mb-4 font-mono">{formatTime(milliseconds)}</div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`${
                isRunning 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } text-white px-6 py-2 rounded-lg font-bold transition-colors`}
            >
              {isRunning ? '⏸️ Pause' : '▶️ Start'}
            </button>
            <button
              onClick={() => {
                setMilliseconds(0);
                setIsRunning(false);
              }}
              className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      </div>

      {/* API Fetch Example */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-slate-800 mb-3">😂 Fetch Data dari API</h3>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin text-4xl mb-2">⏳</div>
            <p className="text-slate-600">Loading joke...</p>
          </div>
        ) : data ? (
          <div className="bg-white p-4 rounded-lg">
            <p className="text-slate-800 font-semibold mb-2">{data.setup}</p>
            <p className="text-blue-600 font-bold">{data.punchline} 😄</p>
            <button
              onClick={fetchJoke}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold transition-colors"
            >
              🎲 Joke Baru
            </button>
          </div>
        ) : (
          <p className="text-slate-600">No joke loaded</p>
        )}
      </div>

      {/* Explanation */}
      <div className="bg-slate-50 border-2 border-slate-200 p-4 rounded-lg">
        <p className="text-sm text-slate-700">
          <strong>useEffect</strong> digunakan untuk:
        </p>
        <ul className="text-sm text-slate-600 mt-2 space-y-1 list-disc list-inside">
          <li>Menjalankan kode setelah component render</li>
          <li>Fetch data dari API</li>
          <li>Setup timer/interval</li>
          <li>Subscribe ke event</li>
          <li>Cleanup saat component unmount</li>
        </ul>
      </div>
    </div>
  );
}

export default UseEffectDemo;

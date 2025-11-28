# Dokumentasi React - Panduan Lengkap

## 1. Pengantar

React adalah pustaka JavaScript populer yang digunakan untuk membangun antarmuka pengguna (User Interface/UI). Berbeda dengan pendekatan web tradisional yang memisahkan HTML, CSS, dan JavaScript, React menyatukan semuanya dalam satu konsep: **Component**.

### Konsep Utama dalam React

- **Component-Based**: UI dipecah menjadi bagian-bagian kecil yang dapat digunakan kembali (button, card, navbar, dll).
- **JSX (JavaScript XML)**: Sintaks yang memungkinkan kita menulis kode mirip HTML langsung di dalam JavaScript.
- **Virtual DOM**: React menyimpan versi DOM di memori dan hanya memperbarui bagian yang berubah, sehingga aplikasi menjadi cepat dan efisien.
- **State & Props**:
  - **Props** → data dari komponen Induk (Parent) ke Anak (Child), sifatnya read-only.
  - **State** → data internal komponen yang bisa berubah, dan ketika berubah akan memicu re-render.

---

## 2. Cara Import & Export Komponen

Pemula sering mengalami error di bagian ini. Kuncinya:
1. Simpan komponen di file `.jsx`
2. Export → Import → Gunakan

### Contoh

**File: `/components/Tombol.jsx`**
```jsx
export default function Tombol() {
  return <button>Klik</button>;
}
```

**File: `App.jsx`**
```jsx
import Tombol from "./components/Tombol";

function App() {
  return <Tombol />;
}
```

---

## 3. Component

Komponen adalah fungsi JavaScript yang mengembalikan tampilan (JSX). Nama komponen **harus diawali huruf besar**.

### Contoh:
```jsx
// Nama function WAJIB Huruf Kapital
function Tombol() {
  return <button>Klik Saya</button>;
}

// Cara pakainya di tempat lain:
// <Tombol />
```

---

## 4. Props (Properties)

Digunakan untuk mengirim data dari Parent ke Child, sehingga tampilannya bisa berubah-ubah.

### Child: menerima props
```jsx
function Kartu({ judul, warna }) {
  return <h1 style={{ color: warna }}>{judul}</h1>;
}
```

### Parent: mengirim props
```jsx
<Kartu judul="Belajar React" warna="blue" />
<Kartu judul="Makan Siang" warna="red" />
```

---

## 5. State (useState)

State adalah memori internal komponen. Ketika state berubah, tampilan akan otomatis diperbarui.

### Contoh
```jsx
import { useState } from 'react';

function Counter() {
  // [variable, functionPengubah] = useState(nilaiAwal)
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <p>Skor: {angka}</p>
      {/* Panggil setAngka untuk ubah data */}
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
    </div>
  );
}
```

---

## 6. Two-Way Binding (Form Input)

Digunakan jika ingin membaca dan memperbarui input secara real-time.

```jsx
const [nama, setNama] = useState("");

<input
  value={nama}
  onChange={(e) => setNama(e.target.value)}
/>
```

---

## 7. Event Handling

Menangani interaksi pengguna seperti klik tombol, perubahan input, atau submit form. Menggunakan nama event versi camelCase: `onClick`, `onChange`, `onSubmit`.

```jsx
function Pesan() {
  // Fungsi yang jalan saat diklik
  const sapa = () => {
    alert("Halo Semuanya!");
  };

  return <button onClick={sapa}>Sapa Saya</button>;
}
```

---

## 8. Rendering List (.map)

Digunakan untuk menampilkan data array tanpa menulis elemen satu per satu. Gunakan `key` unik pada setiap elemen list.

### Contoh:
```jsx
function DaftarSiswa() {
  const siswa = [
    { id: 1, nama: "Budi" },
    { id: 2, nama: "Siti" }
  ];

  return (
    <ul>
      {siswa.map((item) => (
        // Key wajib unik
        <li key={item.id}>{item.nama}</li>
      ))}
    </ul>
  );
}
```

---

## 9. Conditional Rendering

Digunakan untuk menampilkan sesuatu berdasarkan kondisi (mirip if dalam UI).

### Contoh sederhana (&&)
```jsx
{isOpen && <p>Menu terbuka</p>}
```

### Contoh dengan ternary (? :)
```jsx
{isLogin ? <Dashboard /> : <Login />}
```

---

## 10. useEffect (Side Effects)

`useEffect` digunakan untuk menjalankan kode setelah komponen di-render. Berguna untuk:
- Fetch data dari API
- Setup timer/interval
- Subscribe ke event
- Cleanup saat komponen unmount

### Sintaks Dasar
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Kode yang dijalankan setelah render
  
  return () => {
    // Cleanup function (opsional)
    // Dijalankan saat komponen unmount
  };
}, [dependencies]); // Array dependencies
```

### Contoh 1: Timer
```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    
    // Cleanup: hapus interval saat component unmount
    return () => clearInterval(interval);
  }, [isRunning]); // Jalankan ulang jika isRunning berubah

  return (
    <div>
      <p>Waktu: {seconds}s</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
```

### Contoh 2: Fetch Data dari API
```jsx
function JokeApp() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data saat component pertama kali render
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      });
  }, []); // Array kosong = hanya jalankan sekali saat mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>{joke.setup}</p>
      <p><strong>{joke.punchline}</strong></p>
    </div>
  );
}
```

### Dependency Array Explained

| Dependency | Kapan useEffect Dijalankan |
|------------|---------------------------|
| `[]` (kosong) | Hanya sekali saat component mount |
| `[count]` | Setiap kali `count` berubah |
| Tidak ada array | Setiap kali component re-render |

### Cleanup Function

Cleanup function digunakan untuk membersihkan side effects seperti:
- Clear interval/timeout
- Unsubscribe dari event
- Cancel API requests

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup: hapus timer saat unmount
  return () => clearInterval(timer);
}, []);
```

---

## Ringkasan Konsep React

| No | Konsep | Kegunaan | Contoh |
|----|--------|----------|--------|
| 1 | Component | Building block UI | `<Button />` |
| 2 | Props | Kirim data ke child | `<Card title="Hello" />` |
| 3 | useState | Data yang bisa berubah | `const [count, setCount] = useState(0)` |
| 4 | Two-Way Binding | Sinkronisasi input & state | `value={name} onChange={...}` |
| 5 | Event Handling | Tangani interaksi user | `onClick={handleClick}` |
| 6 | List Rendering | Tampilkan array | `items.map(item => <li key={item.id}>)` |
| 7 | Conditional Rendering | Tampilkan berdasarkan kondisi | `{isOpen && <Menu />}` |
| 8 | useEffect | Side effects & lifecycle | `useEffect(() => {...}, [])` |

---

## Tips & Best Practices

1. **Nama Komponen**: Selalu gunakan PascalCase (huruf kapital di awal)
2. **Key pada List**: Gunakan ID unik, jangan gunakan index array
3. **State Immutability**: Jangan ubah state langsung, gunakan setter function
4. **useEffect Dependencies**: Selalu deklarasikan semua dependencies yang digunakan
5. **Cleanup**: Selalu cleanup side effects (interval, subscriptions, dll)
6. **Props Destructuring**: Gunakan destructuring untuk props yang lebih clean
7. **Conditional Rendering**: Gunakan `&&` untuk show/hide, `? :` untuk dua pilihan

---

## Contoh Project Lengkap

Lihat folder `/src/components` untuk contoh implementasi lengkap dari semua konsep di atas:
- `TombolDemo.jsx` - Component dasar
- `KartuProps.jsx` - Props
- `CounterDemo.jsx` - useState
- `FormDemo.jsx` - Two-way binding
- `EventDemo.jsx` - Event handling
- `ListDemo.jsx` - List rendering
- `ConditionalDemo.jsx` - Conditional rendering
- `UseEffectDemo.jsx` - useEffect dengan timer & API fetch

---

## Resources Tambahan

- [React Official Docs](https://react.dev)
- [React Hooks Reference](https://react.dev/reference/react)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

---

**Selamat Belajar React! 🚀**

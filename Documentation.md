\# Dokumentasi React - Panduan Lengkap



\## 1. Pengantar



React adalah pustaka JavaScript populer yang digunakan untuk membangun antarmuka pengguna (User Interface/UI). Berbeda dengan pendekatan web tradisional yang memisahkan HTML, CSS, dan JavaScript, React menyatukan semuanya dalam satu konsep: \*\*Component\*\*.



\### Konsep Utama dalam React



\- \*\*Component-Based\*\*: UI dipecah menjadi bagian-bagian kecil yang dapat digunakan kembali (button, card, navbar, dll).

\- \*\*JSX (JavaScript XML)\*\*: Sintaks yang memungkinkan kita menulis kode mirip HTML langsung di dalam JavaScript.

\- \*\*Virtual DOM\*\*: React menyimpan versi DOM di memori dan hanya memperbarui bagian yang berubah, sehingga aplikasi menjadi cepat dan efisien.

\- \*\*State \& Props\*\*:

&nbsp; - \*\*Props\*\* → data dari komponen Induk (Parent) ke Anak (Child), sifatnya read-only.

&nbsp; - \*\*State\*\* → data internal komponen yang bisa berubah, dan ketika berubah akan memicu re-render.



---



\## 2. Cara Import \& Export Komponen



Pemula sering mengalami error di bagian ini. Kuncinya:

1\. Simpan komponen di file `.jsx`

2\. Export → Import → Gunakan



\### Contoh



\*\*File: `/components/Tombol.jsx`\*\*

```jsx

export default function Tombol() {

&nbsp; return <button>Klik</button>;

}

```



\*\*File: `App.jsx`\*\*

```jsx

import Tombol from "./components/Tombol";



function App() {

&nbsp; return <Tombol />;

}

```



---



\## 3. Component



Komponen adalah fungsi JavaScript yang mengembalikan tampilan (JSX). Nama komponen \*\*harus diawali huruf besar\*\*.



\### Contoh:

```jsx

// Nama function WAJIB Huruf Kapital

function Tombol() {

&nbsp; return <button>Klik Saya</button>;

}



// Cara pakainya di tempat lain:

// <Tombol />

```



---



\## 4. Props (Properties)



Digunakan untuk mengirim data dari Parent ke Child, sehingga tampilannya bisa berubah-ubah.



\### Child: menerima props

```jsx

function Kartu({ judul, warna }) {

&nbsp; return <h1 style={{ color: warna }}>{judul}</h1>;

}

```



\### Parent: mengirim props

```jsx

<Kartu judul="Belajar React" warna="blue" />

<Kartu judul="Makan Siang" warna="red" />

```



---



\## 5. State (useState)



State adalah memori internal komponen. Ketika state berubah, tampilan akan otomatis diperbarui.



\### Contoh

```jsx

import { useState } from 'react';



function Counter() {

&nbsp; // \[variable, functionPengubah] = useState(nilaiAwal)

&nbsp; const \[angka, setAngka] = useState(0);



&nbsp; return (

&nbsp;   <div>

&nbsp;     <p>Skor: {angka}</p>

&nbsp;     {/\* Panggil setAngka untuk ubah data \*/}

&nbsp;     <button onClick={() => setAngka(angka + 1)}>Tambah</button>

&nbsp;   </div>

&nbsp; );

}

```



---



\## 6. Two-Way Binding (Form Input)



Digunakan jika ingin membaca dan memperbarui input secara real-time.



```jsx

const \[nama, setNama] = useState("");



<input

&nbsp; value={nama}

&nbsp; onChange={(e) => setNama(e.target.value)}

/>

```



---



\## 7. Event Handling



Menangani interaksi pengguna seperti klik tombol, perubahan input, atau submit form. Menggunakan nama event versi camelCase: `onClick`, `onChange`, `onSubmit`.



```jsx

function Pesan() {

&nbsp; // Fungsi yang jalan saat diklik

&nbsp; const sapa = () => {

&nbsp;   alert("Halo Semuanya!");

&nbsp; };



&nbsp; return <button onClick={sapa}>Sapa Saya</button>;

}

```



---



\## 8. Rendering List (.map)



Digunakan untuk menampilkan data array tanpa menulis elemen satu per satu. Gunakan `key` unik pada setiap elemen list.



\### Contoh:

```jsx

function DaftarSiswa() {

&nbsp; const siswa = \[

&nbsp;   { id: 1, nama: "Budi" },

&nbsp;   { id: 2, nama: "Siti" }

&nbsp; ];



&nbsp; return (

&nbsp;   <ul>

&nbsp;     {siswa.map((item) => (

&nbsp;       // Key wajib unik

&nbsp;       <li key={item.id}>{item.nama}</li>

&nbsp;     ))}

&nbsp;   </ul>

&nbsp; );

}

```



---



\## 9. Conditional Rendering



Digunakan untuk menampilkan sesuatu berdasarkan kondisi (mirip if dalam UI).



\### Contoh sederhana (\&\&)

```jsx

{isOpen \&\& <p>Menu terbuka</p>}

```



\### Contoh dengan ternary (? :)

```jsx

{isLogin ? <Dashboard /> : <Login />}

```



---



\## 10. useEffect (Side Effects)



`useEffect` digunakan untuk menjalankan kode setelah komponen di-render. Berguna untuk:

\- Fetch data dari API

\- Setup timer/interval

\- Subscribe ke event

\- Cleanup saat komponen unmount



\### Sintaks Dasar

```jsx

import { useEffect } from 'react';



useEffect(() => {

&nbsp; // Kode yang dijalankan setelah render

&nbsp; 

&nbsp; return () => {

&nbsp;   // Cleanup function (opsional)

&nbsp;   // Dijalankan saat komponen unmount

&nbsp; };

}, \[dependencies]); // Array dependencies

```



\### Contoh 1: Timer

```jsx

function Timer() {

&nbsp; const \[seconds, setSeconds] = useState(0);

&nbsp; const \[isRunning, setIsRunning] = useState(false);



&nbsp; useEffect(() => {

&nbsp;   let interval;

&nbsp;   if (isRunning) {

&nbsp;     interval = setInterval(() => {

&nbsp;       setSeconds(prev => prev + 1);

&nbsp;     }, 1000);

&nbsp;   }

&nbsp;   

&nbsp;   // Cleanup: hapus interval saat component unmount

&nbsp;   return () => clearInterval(interval);

&nbsp; }, \[isRunning]); // Jalankan ulang jika isRunning berubah



&nbsp; return (

&nbsp;   <div>

&nbsp;     <p>Waktu: {seconds}s</p>

&nbsp;     <button onClick={() => setIsRunning(!isRunning)}>

&nbsp;       {isRunning ? 'Pause' : 'Start'}

&nbsp;     </button>

&nbsp;   </div>

&nbsp; );

}

```



\### Contoh 2: Fetch Data dari API

```jsx

function JokeApp() {

&nbsp; const \[joke, setJoke] = useState(null);

&nbsp; const \[loading, setLoading] = useState(true);



&nbsp; useEffect(() => {

&nbsp;   // Fetch data saat component pertama kali render

&nbsp;   fetch('https://official-joke-api.appspot.com/random\_joke')

&nbsp;     .then(response => response.json())

&nbsp;     .then(data => {

&nbsp;       setJoke(data);

&nbsp;       setLoading(false);

&nbsp;     });

&nbsp; }, \[]); // Array kosong = hanya jalankan sekali saat mount



&nbsp; if (loading) return <p>Loading...</p>;



&nbsp; return (

&nbsp;   <div>

&nbsp;     <p>{joke.setup}</p>

&nbsp;     <p><strong>{joke.punchline}</strong></p>

&nbsp;   </div>

&nbsp; );

}

```



\### Dependency Array Explained



| Dependency | Kapan useEffect Dijalankan |

|------------|---------------------------|

| `\[]` (kosong) | Hanya sekali saat component mount |

| `\[count]` | Setiap kali `count` berubah |

| Tidak ada array | Setiap kali component re-render |



\### Cleanup Function



Cleanup function digunakan untuk membersihkan side effects seperti:

\- Clear interval/timeout

\- Unsubscribe dari event

\- Cancel API requests



```jsx

useEffect(() => {

&nbsp; const timer = setInterval(() => {

&nbsp;   console.log('Tick');

&nbsp; }, 1000);



&nbsp; // Cleanup: hapus timer saat unmount

&nbsp; return () => clearInterval(timer);

}, \[]);

```



---



\## Ringkasan Konsep React



| No | Konsep | Kegunaan | Contoh |

|----|--------|----------|--------|

| 1 | Component | Building block UI | `<Button />` |

| 2 | Props | Kirim data ke child | `<Card title="Hello" />` |

| 3 | useState | Data yang bisa berubah | `const \[count, setCount] = useState(0)` |

| 4 | Two-Way Binding | Sinkronisasi input \& state | `value={name} onChange={...}` |

| 5 | Event Handling | Tangani interaksi user | `onClick={handleClick}` |

| 6 | List Rendering | Tampilkan array | `items.map(item => <li key={item.id}>)` |

| 7 | Conditional Rendering | Tampilkan berdasarkan kondisi | `{isOpen \&\& <Menu />}` |

| 8 | useEffect | Side effects \& lifecycle | `useEffect(() => {...}, \[])` |



---



\## Tips \& Best Practices



1\. \*\*Nama Komponen\*\*: Selalu gunakan PascalCase (huruf kapital di awal)

2\. \*\*Key pada List\*\*: Gunakan ID unik, jangan gunakan index array

3\. \*\*State Immutability\*\*: Jangan ubah state langsung, gunakan setter function

4\. \*\*useEffect Dependencies\*\*: Selalu deklarasikan semua dependencies yang digunakan

5\. \*\*Cleanup\*\*: Selalu cleanup side effects (interval, subscriptions, dll)

6\. \*\*Props Destructuring\*\*: Gunakan destructuring untuk props yang lebih clean

7\. \*\*Conditional Rendering\*\*: Gunakan `\&\&` untuk show/hide, `? :` untuk dua pilihan



---



\## Contoh Project Lengkap



Lihat folder `/src/components` untuk contoh implementasi lengkap dari semua konsep di atas:

\- `TombolDemo.jsx` - Component dasar

\- `KartuProps.jsx` - Props

\- `CounterDemo.jsx` - useState

\- `FormDemo.jsx` - Two-way binding

\- `EventDemo.jsx` - Event handling

\- `ListDemo.jsx` - List rendering

\- `ConditionalDemo.jsx` - Conditional rendering

\- `UseEffectDemo.jsx` - useEffect dengan timer \& API fetch



---



\## Resources Tambahan



\- \[React Official Docs](https://react.dev)

\- \[React Hooks Reference](https://react.dev/reference/react)

\- \[Thinking in React](https://react.dev/learn/thinking-in-react)



---



\*\*Selamat Belajar React! 🚀\*\*




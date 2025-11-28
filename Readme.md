# React Mini Hackathon — Final Brief

## Tujuan Utama

Peserta membangun aplikasi React sederhana berbasis tema pilihan, dengan fokus pada manipulasi state, operasi array, derived state, dan conditional rendering.

Starter code sudah disediakan sehingga peserta tinggal melanjutkan fitur-fitur inti sesuai fase.

---

## Cara Memulai

### 1. Clone Repository

```bash
git clone https://github.com/StreamLine-18/React-Starter
cd React-Starter
```

### 2. Pilih Starter Sesuai Tema

Terdapat 3 folder starter yang bisa dipilih:

- **Starter-1** → Kantin Online
- **Starter-2** → Backpacker
- **Starter-3** → Dream Team

### 3. Install Dependencies

Masuk ke folder starter yang dipilih dan install dependencies:

```bash
cd Starter-1
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

---

## Pemilihan Tema

Setiap peserta memilih satu dari tiga tema. Semua tema memiliki tingkat kesulitan yang sama.

### Opsi A — Kantin Online 🍔
**Folder:** `Starter-1`  
**Misi:** Pilih menu makan siang dan hitung total harga.

### Opsi B — Backpacker 🎒
**Folder:** `Starter-2`  
**Misi:** Pilih barang bawaan dan hitung total berat tas.

### Opsi C — Dream Team ⚽
**Folder:** `Starter-3`  
**Misi:** Rekrut lima pemain dan hitung total kekuatan tim.

> **Catatan:** Starter code hanya berisi struktur dasar dan TODO comments. Peserta perlu membangun UI dan logika dari awal menggunakan Tailwind CSS.

---

## Phase 1 — Skeleton

Fase pertama berfokus pada dasar interaktivitas: menambahkan item ke koleksi dan menghapusnya.

### Target Utama Phase 1

#### 1. Mengubah variabel menjadi state

Contoh:
```javascript
const [cart, setCart] = useState([]);
```

#### 2. Fitur Add Item

- Saat tombol "Tambah" ditekan, data item dipindah ke cart.
- Wajib memakai spread operator.

Contoh:
```javascript
setCart([...cart, item]);
```

#### 3. Fitur Remove Item

- Item yang ada di cart dihapus berdasarkan ID.
- Wajib menggunakan `.filter()`.

Contoh:
```javascript
setCart(cart.filter(i => i.id !== itemId));
```

### Pada akhir Phase 1, aplikasi sudah dapat:

- Menampilkan daftar item.
- Menambahkan item ke keranjang.
- Menghapus item dari keranjang.

---

## Phase 2 — Inovasi

Peserta menambahkan logika matematika dan indikator visual.

### Target Utama Phase 2

#### 1. Menghitung total otomatis

Menggunakan `.reduce()` untuk menghitung total harga/power/berat.

Contoh untuk Kantin Online:
```javascript
const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
```

#### 2. Conditional Rendering (Badge/Peringatan)

Menampilkan badge ketika total melewati batas tertentu.

**Batas nilai berdasarkan tema:**
- **Kantin:** total > 50.000 → tampilkan peringatan.
- **Dream Team:** total > 450.
- **Backpacker:** total > 7 kg.

Contoh:
```javascript
{totalPrice > 50000 && (
  <p className="text-yellow-700 font-semibold">Boros</p>
)}
```

### Pada akhir Phase 2, aplikasi sudah dapat:

- Menghitung total secara otomatis.
- Menampilkan pesan khusus saat batas terlampaui.

---

## Phase 3 — Presentasi

Setiap tim menampilkan hasil karyanya.

### Skenario Presentasi

1. Perkenalan tim dan tema.
2. Menunjukkan fitur Add dan pergerakan data.
3. Menunjukkan fitur Remove.
4. Menampilkan perhitungan total yang berubah otomatis.
5. Memicu kondisi batas sehingga badge peringatan muncul.

---

## Tech Stack

- **React** 18+ dengan Hooks
- **Vite** sebagai build tool
- **Tailwind CSS** untuk styling
- **Lucide React** untuk icons

---

## Struktur Project

```
├── Starter-1/          # Kantin Online
│   ├── src/
│   │   ├── App.jsx     # Main component
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── Starter-2/          # Backpacker
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── Starter-3/          # Dream Team
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

## Tips & Tricks

- 💡 Mulai dengan membangun UI sederhana terlebih dahulu
- 💡 Gunakan Tailwind CSS untuk styling yang cepat
- 💡 Fokus pada logika state management setelah UI dasar selesai
- 💡 Test setiap fitur sebelum lanjut ke fase berikutnya
- 💡 Gunakan `console.log()` untuk debugging
- 💡 Manfaatkan TODO comments sebagai panduan
- 💡 Jangan lupa save file setelah edit!

---

## Troubleshooting

### Port sudah digunakan?
```bash
# Ubah port di vite.config.js atau kill process yang menggunakan port 5173
```

### Dependencies error?
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Aplikasi tidak update?
```bash
# Hard refresh browser: Ctrl + Shift + R (Windows) atau Cmd + Shift + R (Mac)
```

---

## Lisensi

Project ini dibuat untuk keperluan edukasi dan hackathon.

**Selamat Coding! 🚀**

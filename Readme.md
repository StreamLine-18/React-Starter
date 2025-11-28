# React Mini Hackathon — Final Brief

## Tujuan Utama

Peserta membangun aplikasi React sederhana berbasis tema pilihan, dengan fokus pada manipulasi state, operasi array, derived state, dan conditional rendering.

Starter code sudah disediakan sehingga peserta tinggal melanjutkan fitur-fitur inti sesuai fase.

---

## Pemilihan Tema

Setiap peserta memilih satu dari tiga tema. Semua tema memiliki tingkat kesulitan yang sama.

### Opsi A — Kantin Online
**Misi:** Pilih menu makan siang dan hitung total harga.

### Opsi B — Dream Team
**Misi:** Rekrut lima pemain dan hitung total kekuatan tim.

### Opsi C — Backpacker
**Misi:** Pilih barang bawaan dan hitung total berat tas.

> Starter code yang disediakan menggunakan tema Kantin Online, namun struktur tugas sama untuk tema lainnya.

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

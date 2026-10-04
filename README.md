# 🎂 Website Ulang Tahun

Website ulang tahun modern berbasis HTML, CSS, dan JavaScript.

## Struktur

```text
website-ulang-tahun/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── foto-1.jpg
    ├── foto-2.jpg
    ├── foto-3.jpg
    ├── foto-4.jpg
    └── lagu-ulang-tahun.mp3
```

## Cara mengganti nama dan pesan

Buka `script.js`, lalu ubah:

```js
const CONFIG = {
  friendName: "Nama Teman",
  surpriseMessage: "Pesan ulang tahun kamu di sini..."
};
```

## Cara mengganti foto

Masukkan 4 foto ke folder `assets` dan beri nama:

- `foto-1.jpg`
- `foto-2.jpg`
- `foto-3.jpg`
- `foto-4.jpg`

## Cara menambahkan lagu

Masukkan file MP3 ke:

```text
assets/lagu-ulang-tahun.mp3
```

Kemudian klik tombol **Music** di website.

> Catatan: browser biasanya memblokir autoplay audio. Karena itu musik diputar setelah tombol Music diklik.

## Hosting gratis di GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua file dan folder.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Klik **Save**.
7. Tunggu proses deploy selesai.
8. GitHub akan memberikan link website.

Tidak membutuhkan database, backend, Node.js, atau hosting berbayar.

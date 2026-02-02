# Pekon Wonosobo Website

Website Peta Potensi dan Informasi Pekon Wonosobo, Kecamatan Wonosobo, Kabupaten Tanggamus, Provinsi Lampung.

## Deployment ke Vercel

### Persiapan
1. Pastikan semua perubahan sudah di-commit:
   ```bash
   git add .
   git commit -m "Fix paths for Vercel deployment"
   git push
   ```

2. Jika belum punya akun Vercel, buat di [vercel.com](https://vercel.com)

### Cara Deploy

#### Opsi 1: Deploy via Dashboard Vercel
1. Login ke [vercel.com](https://vercel.com)
2. Klik "Add New" → "Project"
3. Import repository GitHub Anda
4. Vercel akan otomatis mendeteksi konfigurasi
5. Klik "Deploy"

#### Opsi 2: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Untuk production deployment:
   ```bash
   vercel --prod
   ```

### Struktur Project
```
coba6-1/
├── main-page/          # Halaman utama
├── asopa/              # Program kerja Asopa (DAGUSIBU)
├── fenty/              # Program kerja Fenty (Edukasi Kereta Api)
├── vania/              # Program kerja Vania (Pembuatan Pupuk)
├── menyuk/             # Program kerja Menyuk (PHBS)
├── img/                # Folder gambar dan media
├── page-transition.js  # Script transisi halaman
├── responsive.js       # Script responsive
├── vercel.json         # Konfigurasi Vercel
└── .vercelignore       # File yang diabaikan saat deploy
```

### Perubahan untuk Deployment
✅ Semua path relatif (`../`) sudah diubah menjadi path absolut (`/`)
✅ File `vercel.json` sudah dikonfigurasi untuk routing
✅ File `.vercelignore` sudah dibuat
✅ Halaman utama akan muncul di root URL (`/`)

### Troubleshooting
Jika ada error 404 setelah deploy:
1. Pastikan semua path menggunakan `/` bukan `../`
2. Cek `vercel.json` sudah ter-commit
3. Redeploy project di dashboard Vercel

### Custom Domain (Opsional)
Setelah deploy, Anda bisa menambahkan custom domain:
1. Buka project di Vercel dashboard
2. Klik "Settings" → "Domains"
3. Tambahkan domain Anda
4. Ikuti instruksi DNS configuration

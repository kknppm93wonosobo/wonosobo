# PANDUAN DEPLOY KE VERCEL

## Perubahan yang Sudah Dilakukan ✅

### 1. File Konfigurasi Vercel
- ✅ `vercel.json` - Konfigurasi routing dan headers
- ✅ `.vercelignore` - File yang diabaikan saat deploy

### 2. Perbaikan Path di Semua File HTML
Semua path relatif (`../`) telah diubah menjadi path absolut (`/`):
- ✅ `main-page/index.html`
- ✅ `asopa/index.html`
- ✅ `fenty/index.html`
- ✅ `vania/index.html`
- ✅ `menyuk/index.html`

### 3. Dokumentasi
- ✅ `README.md` - Dokumentasi lengkap project dan deployment

## Langkah Selanjutnya 🚀

### Step 1: Commit Perubahan
```bash
git add .
git commit -m "Fix all paths for Vercel deployment"
git push
```

### Step 2: Deploy ke Vercel

**Cara Termudah - Via Web Dashboard:**
1. Buka https://vercel.com dan login
2. Klik tombol "Add New" → "Project"
3. Pilih "Import Git Repository"
4. Pilih repository ini
5. Klik "Deploy" (Vercel akan auto-detect konfigurasi)
6. Tunggu hingga selesai (~1-2 menit)
7. Website Anda siap! 🎉

**Alternatif - Via CLI:**
```bash
# Install Vercel CLI (hanya sekali)
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Yang Sudah Diperbaiki 🔧

### Masalah Awal (404 Errors):
- ❌ `/main-page/globals.css:1` - FIXED ✅
- ❌ `progia-diman-card.png:1` - FIXED ✅
- ❌ `video-controls.js:1` - FIXED ✅
- ❌ `page-transition.js:1` - FIXED ✅
- ❌ `/main-page/style.css:1` - FIXED ✅
- ❌ `image-1.png:1` - FIXED ✅
- ❌ All card images - FIXED ✅
- ❌ All icons - FIXED ✅
- ❌ All scripts - FIXED ✅

### Solusi yang Diterapkan:
1. ✅ Path relatif `../folder/file` → `/folder/file`
2. ✅ Routing halaman utama ke `/main-page/index.html`
3. ✅ Cache headers untuk performance
4. ✅ Ignore files yang tidak perlu di-deploy

## Verifikasi Setelah Deploy

Setelah deploy berhasil, cek URL yang diberikan Vercel (misal: `your-project.vercel.app`):

1. Homepage harus muncul (halaman Pekon Wonosobo)
2. Semua gambar harus tampil
3. Video profil harus bisa diputar
4. Link ke program kerja (Asopa, Fenty, Vania, Menyuk) harus berfungsi
5. Tidak ada error 404 di browser console

## Troubleshooting

Jika masih ada error:
1. Pastikan semua perubahan sudah di-push ke GitHub
2. Coba redeploy di Vercel dashboard
3. Cek Vercel logs untuk error details
4. Pastikan `vercel.json` ada di root folder

## Support
Untuk bantuan lebih lanjut, cek:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

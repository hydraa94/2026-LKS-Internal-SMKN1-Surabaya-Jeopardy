# Repository LKS Internal 2026 SMKN 1 Surabaya Cyber Security
---
<br>

## Struktur Template
Untuk probset (pembuat soal), gunakan struktur berikut saat membuat soal baru. Copy template ini ke dalam folder kategori masing-masing dengan nama folder `judul-soal`:

```
judul-soal/
 ├─ dist/
 ├─ src/
 ├─ writeup/
 │   └─ README.md
 └─ README.md
```

### Penjelasan Folder

- **`dist/`** - Semua file di sini akan di-zip dan diberikan kepada peserta sebagai attachment soal
- **`src/`** - File-file yang menjadi soal (source code, binary, file yang perlu dianaisis, dll)
- **`writeup/`** - Berisi solusi lengkap dan Proof of Concept (PoC) dari soal
  - `README.md`
  - `solver.py` di folder ini hanya untuk pembuat soal, tidak dilihat peserta
- **`README.md`** - Deskripsi soal, flag, hints, dan metadata


### Catatan Docker
Jika soalmu perlu deployment (misalnya: web service, database, atau aplikasi yang harus di-run):
- Tambahkan **`Dockerfile`** untuk container image
- Tambahkan **`docker-compose.yml`** jika perlu multiple services
- Dokumentasikan di `README.md` bagian "Deployment" bagaimana cara build dan run

---

## Kategori Soal
- `web/` - Web exploitation, web security
- `reverse/` - Reverse engineering
- `crypto/` - Cryptography
- `forensics/` - Digital forensics
- `pwn/` - Binary exploitation
- `misc/` - Miscellaneous

---

## Guidelines untuk Probset
1. **Folder naming** - Gunakan kebab-case, contoh: `sql-injection-basics`, `rsa-factorization`
2. **Flag format** - Selalu gunakan format `LKS{...}` (atau sesuai convention yg disepakati)
3. **Difficulty** - Berikan level realistis sesuai kompleksitas
4. **Writeup** - Selalu dokumentasikan solusi di folder `writeup/` untuk reference
5. **Testing** - Test soal sebelum submit, pastikan flag dan hints benar
6. **Attachment** - Pastikan semua file yang dibutuhkan peserta ada di folder `public/`

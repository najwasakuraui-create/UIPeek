# UI World! — Website Informasi Fakultas (Project UAS)

**Deskripsi singkat**
Situs statis sederhana yang menampilkan informasi fakultas, jurusan, dan estimasi UKT Universitas Indonesia. Dibuat untuk tugas UAS Teknologi Informasi.

**Fitur**
- Navigasi antar section (smooth scroll)
- Daftar fakultas & jurusan (accordion)
- Estimasi UKT (card)
- Pemutar anthem (Play/Pause)
- Dark mode toggle
- Responsif (mobile & desktop)

**Struktur file**
- `index.html` — markup utama
- `styles.css` — styling
- `script.js` — interaksi JavaScript
- `anthem.mp3` — tambahkan file anthem di root (placeholder)

**Cara jalankan lokal**
1. Clone repo: `git clone https://github.com/USERNAME/REPO.git`
2. Masuk folder: `cd REPO`
3. Buka `index.html` di browser (double click) atau jalankan simple http server:
   - `python -m http.server 8000` lalu buka `http://localhost:8000`

**Deploy (GitHub Pages)**
1. Push semua file ke branch `main`.
2. Di GitHub repo → Settings → Pages → Build and deployment:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Save → tunggu beberapa menit → situs akan live di `https://USERNAME.github.io/REPO/`

**Pembagian tugas (saran)**
- Project Lead: Najwa Sakura Affan — desain & koordinasi
- JS Dev: anggota 2 — fitur Play/Dark/smooth scroll
- Content: anggota 3 — isi deskripsi & data UKT
- CSS: anggota 4 — responsive & styling akhir
- Deployment & Docs: anggota 5 — README & GitHub Pages setup

---


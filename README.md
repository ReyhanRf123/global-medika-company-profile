# Website Landing Page Company Profile PT Global Medika Indonesia

Website profil perusahaan digital resmi untuk **PT Global Medika Indonesia**, distributor alat kesehatan (DAK) berizin yang beroperasi dari Tangerang Selatan dan melayani pengadaan fasilitas kesehatan di seluruh Indonesia.

Dibangun dengan HTML5 semantik, CSS3 modern (*custom design tokens*), dan JavaScript murni (*vanilla*) yang interaktif dengan standar visual tinggi, bebas dari template generik (*no AI-slop*), serta mematuhi seluruh spesifikasi **PRD Versi 1.0**.

---

## 📋 Ringkasan & Identitas Resmi Perusahaan

| Parameter | Keterangan Dokumen Resmi |
| :--- | :--- |
| **Nama Perseroan** | PT Global Medika Indonesia (Perseroan Terbatas swasta nasional) |
| **Bidang Usaha** | Distribusi Alat Kesehatan, Alat Laboratorium, dan Perlengkapan Medis |
| **KBLI** | **46691** · Perdagangan Besar Alat Laboratorium, Farmasi, dan Kedokteran (Risiko Tinggi) |
| **NIB** | `0611250116606` (Sistem OSS BKPM) |
| **IDAK Kemenkes** | `06112501166060002` (Terbit 20 Februari 2026, Status: Telah Terverifikasi) |
| **SK Kemenkumham** | `AHU-0095520.AH.01.01.TAHUN 2025` (Akta No. 01 Notaris Hayati Diyan, S.H., M.Kn.) |
| **PJT Berlisensi** | Aditya Pamungkas (Lulus Pelatihan CDB Kemenkes & GAKESLAB Jawa Barat) |
| **Alamat Kantor** | Ruko Fiera Lt. 2, Jl. Graha Raya Bintaro No.01 FR/B, Pondok Kacang Barat, Pondok Aren, Kota Tangerang Selatan, Banten 15226 |
| **Kontak Resmi** | WhatsApp: [081188099132](https://wa.me/6281188099132) · Email: globalmedikaindonesia4@gmail.com |

---

## ✨ Fitur Utama & Keunggulan Antarmuka

### 1. Hero Dual-Stage Interaktif
- **Tampilan 1 (Kantor Operasional):** Ilustrasi arsitektural gedung kantor di Ruko Fiera Lt. 2 dengan papan nama perusahaan dan **2 titik hotspot berdenyut** (*pulsing pins*) untuk mengeksplorasi fungsi Lantai 2 (Kantor & PJT) serta Lantai 1 (Distribusi).
- **Tampilan 2 (Koridor Distribusi CDAKB):** Simulasi radar logistik nasional dengan *ping animation* dari Hub Tangerang Selatan, garis lintasan pengiriman animasi menuju Rumah Sakit, Klinik, dan Lab, serta pemantauan rentang suhu terkontrol (`15°C - 25°C`).

### 2. Rantai Dokumen Legalitas Terverifikasi (7 Dokumen Asli)
- Stepper navigasi dokumen interaktif dengan indikator visual.
- Segel pengaman holografis pada setiap kartu dokumen.
- Tombol **"Salin"** nomor dokumen instan dengan umpan balik animasi (*toast feedback*).
- Tombol **"Lihat perizinan"** yang langsung terhubung ke tautan Google Drive dokumen resmi:
  1. *SK Kemenkumham (AHU-0095520)* & Akta Notaris No. 01
  2. *NPWP Perusahaan* (Nomor disamarkan untuk perlindungan publik)
  3. *Pernyataan Mandiri K3L*
  4. *Nomor Induk Berusaha (NIB 0611250116606)*
  5. *SPPL (Persetujuan Lingkungan Hidup)*
  6. *IDAK Kemenkes RI (06112501166060002)*
  7. *Sertifikat Pelatihan CDB PJT (FK.02.01/E.VI/2669/2026)*

### 3. Tata Kelola Penyaluran CDAKB & Simulasi Penelusuran Batch
- Komitmen pengawasan Penanggung Jawab Teknis mandiri.
- **Simulasi Penelusuran Lot / Batch:** Fitur interaktif di mana pengunjung dapat menguji audit alur logistik CDAKB (`LOT-2026-MED01` dan `BATCH-2026-LAB04`).
- Empat pilar nyata: Produk berizin edar, penelusuran lot/batch, pelaporan e-report semesteran, serta SOP penarikan (*recall*) dan keluhan.

### 4. Katalog Pengadaan & Laci Penawaran Cerdas
- Filter 5 segmen fasilitas kesehatan: *Rumah sakit, Klinik, Laboratorium, Kampus dan riset, Tenaga medis*.
- Kartu produk instrumen medis dengan ikon SVG khusus (Patient monitor, Syringe pump, Sentrifus, Tensimeter digital, Stetoskop, Tabung sampel).
- Tombol toggle: `+ Tambah ke daftar` $\leftrightarrow$ `✓ Sudah di daftar`.
- **Laci Melayang (*Floating Dock*):** Otomatis meluncur dari bawah layar saat alat dipilih.
- **Generator WhatsApp Otomatis:** Mengirim pesan permohonan Surat Penawaran Harga (SPH) terformat rapi lengkap dengan daftar alat dan nama institusi pemesan.

### 5. Sistem Background Klinis-Logistik Modern (*Ambient Medical Backdrop*)
- Grid presisi blueprint medis 40px dengan efek *vignette* melingkar.
- Tiga bola cahaya gradien lembut (*floating ambient orbs*) bernapas dinamis (Teal, Emerald, Cyan).
- Sorotan kursor interaktif (*cursor spotlight*) yang mengikuti pergerakan mouse di layar desktop.

---

## 📁 Struktur Direktori

```text
first-project/
├── index.html           # Struktur HTML5 semantik & seluruh section landing page
├── styles.css           # Sistem desain tokens, tipografi, grid layout, dan animasi 60fps
├── script.js            # Interaktivitas laci penawaran, simulator lot, stepper, dan modal
├── copy.md              # Salinan naskah lengkap (Copy Deck Versi 2)
├── README.md            # Dokumentasi lengkap proyek
└── .gitignore           # File pengabaian git
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini dibuat murni menggunakan teknologi web modern tanpa dependensi build tools yang berat.

### Cara 1: Buka Langsung (Tanpa Server)
Cukup klik ganda file `index.html` dari File Explorer. Halaman akan langsung berjalan di browser Anda.

### Cara 2: Menggunakan Live Server di VS Code
1. Buka folder ini di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan pada `index.html` lalu pilih **"Open with Live Server"**.

### Cara 3: Menggunakan Node.js / Vite
```bash
npx live-server
# atau
npx vite
```

---

## 🔒 Privasi & Aksesibilitas

- **Aksesibilitas (WCAG 2.2 AA):** Rasio kontras teks $\ge 4.5:1$, navigasi keyboard penuh (`focus-visible`), dan atribut ARIA semantik.
- **Perlindungan Data Publik:** Nomor NIK pada sertifikat PJT disensor, dan nomor NPWP disamarkan pada tampilan teks web.
- **Reduced Motion:** Mendukung preferensi sistem `prefers-reduced-motion` untuk meminimalkan animasi bagi pengguna sensitif.

---

## 📄 Lisensi & Hak Cipta

© 2026 PT Global Medika Indonesia. Seluruh hak cipta dilindungi undang-undang.

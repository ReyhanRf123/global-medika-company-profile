# PROJECT REFERENCE DOCUMENT (`ref.md`)
## PT Global Medika Indonesia — Official Digital Company Profile

> **Dokumen Referensi Induk Proyek (AI & Developer Knowledge Base)**  
> Dibuat untuk memberikan pemahaman menyeluruh, presisi, dan kontekstual bagi AI agent atau pengembang software yang akan membaca, menganalisis, memodifikasi, maupun memperluas ekosistem web PT Global Medika Indonesia.

---

## 1. Ringkasan Eksekutif & Karakter Proyek

- **Nama Proyek:** Company Profile & Digital Identity Web PT Global Medika Indonesia
- **Tipe Aplikasi:** Single-Page Application (SPA) / Landing Page Berperforma Tinggi
- **Tujuan Utama:** Menjadi representasi digital resmi, terverifikasi, dan kredibel dari distributor alat kesehatan (DAK) berizin Kemenkes RI untuk memenuhi kebutuhan pengadaan fasilitas kesehatan (Rumah Sakit, Klinik, Laboratorium, Dinas Kesehatan) serta kesiapan audit regulasi.
- **Filosofi Rekayasa & Desain:**
  - **Zero Build-Step Overhead:** Dibuat menggunakan trio web murni (*Semantic HTML5*, *Modern CSS3 Variables*, *Vanilla ES6+ JavaScript*) tanpa dependensi framework berat (React/Vue/Webpack/Vite) agar sangat ringan, bebas error dependency, dan mudah dibuka langsung di browser.
  - **No AI-Slop / Faktual 100%:** Seluruh narasi, nomor izin, dan struktur kepengurusan mengacu langsung pada dokumen legalitas resmi perusahaan (*PRD & Copy Deck V2*). Tidak ada data monitor palsu, sensor fiktif, atau klaim berlebihan yang melanggar etika alkes.
  - **Interaktivitas Kelas Industri:** Dilengkapi ilustrasi arsitektur 3D Ruko Isometrik dengan parallax mouse-tilt, radar logistik CDAKB, simulator penelusuran batch/lot, interactive Google Maps, dan drawer pengadaan dengan generator penawaran WhatsApp otomatis.

---

## 2. Fact Sheet & Identitas Resmi Perusahaan

Data berikut adalah data valid dan terverifikasi yang digunakan di seluruh komponen website:

| Parameter | Data Resmi | Keterangan / Sumber Regulasi |
| :--- | :--- | :--- |
| **Nama Badan Usaha** | PT Global Medika Indonesia | Perseroan Terbatas Swasta Nasional |
| **Bidang Usaha** | Distributor Alat Kesehatan (DAK), Lab, & Medis | Perdagangan Besar Farmasi & Alkes |
| **KBLI** | **46691** | Perdagangan Besar Alat Laboratorium, Farmasi, dan Kedokteran untuk Manusia (Kategori Risiko Tinggi) |
| **NIB (Nomor Induk Berusaha)** | `0611250116606` | Sistem OSS BKPM |
| **IDAK (Izin Distributor Alkes)** | `06112501166060002` | Terbit: 20 Februari 2026 (Kemenkes RI, Status: Telah Terverifikasi) |
| **SK Pengesahan Menkumham** | `AHU-0095520.AH.01.01.TAHUN 2025` | Tanggal: 6 November 2025 (Akta No. 01 Notaris Hayati Diyan, S.H., M.Kn.) |
| **Penanggung Jawab Teknis (PJT)**| **Aditya Pamungkas** | Sertifikat Pelatihan CDB Alkes Kemenkes RI & GAKESLAB Jabar (`FK.02.01/E.VI/2669/2026`) |
| **Alamat Kantor Operasional** | Ruko Fiera Lt. 2, Jl. Graha Raya Bintaro No. 01 FR/B, Pondok Kacang Barat, Pondok Aren, Tangerang Selatan, Banten 15226 | Koordinat: Ruko Neo Fiera Graha Raya Bintaro |
| **Kontak WhatsApp Resmi** | `+62 811-8809-9132` (`081188099132`) | Direct Link: `https://wa.me/6281188099132` |
| **Email Resmi** | `globalmedikaindonesia4@gmail.com` | Mailto Link |
| **Dewan Pengurus** | - **Farrel Nouvaleo Akbar** (Direktur Utama)<br>- **Aliyyavidy Geraldine** (Komisaris Utama)<br>- **Nuraini** (Komisaris)<br>- **Aditya Pamungkas** (PJT) | Struktur pengurus resmi perseroan |

### Tautan Google Drive Dokumen Legalitas Asli
1. **SK Kemenkumham & Akta:** `https://drive.google.com/file/d/1h010dKpcMVj9cmgIAOLDKFRDwQuOY9lN/view?usp=drive_link`
2. **NPWP Perusahaan:** `https://drive.google.com/file/d/1ltK1WYiCe7fI4zVBc3ovZidKE8_F5TEt/view?usp=drive_link`
3. **Pernyataan Mandiri K3L:** `https://drive.google.com/file/d/1T5hx1KbxegYotjXAdsd32M0c3wU4_qDn/view?usp=drive_link`
4. **NIB (KBLI 46691):** `https://drive.google.com/file/d/1jH-oZnsti3IS1OSuh2ecowjFDdd6PrDZ/view?usp=drive_link`
5. **SPPL (Persetujuan Lingkungan):** `https://drive.google.com/file/d/118vfscojBcqOgdySjyS38Z8cRKz6TPEW/view?usp=drive_link`
6. **Izin IDAK Kemenkes RI:** `https://drive.google.com/file/d/1JMURzfcKlxjZnW0bdhXNGteVs-Q5zuSG/view?usp=drive_link`
7. **Sertifikat CDB PJT:** `https://drive.google.com/file/d/1vSpfm_QMicGObz6YqO0fa3P4Fw684aOS/view?usp=drive_link`

---

## 3. Struktur File & Arsitektur Direktori

```text
d:/anti-gravity/first-project/
├── index.html        # Markup semantik seluruh halaman, modal, drawer, dan SVG icons
├── styles.css        # Desain tokens, tipografi, visual background Uiverse, responsive CSS
├── script.js         # Logika interaktif: drawer, tilt 3D, batch simulator, filter, mobile menu
├── copy.md           # Salinan naskah lengkap (Copy Deck V2) dengan aturan redaksi
├── README.md         # Dokumentasi umum untuk pengembang manusia
├── ref.md            # [File ini] Spesifikasi referensi komprehensif untuk AI & sistem masa depan
├── vercel.json       # Konfigurasi routing & header cache Vercel production deployment
└── .gitignore        # Konfigurasi pengabaian Git
```

---

## 4. Anatomi Komponen & Alur Halaman (`index.html`)

Halaman landing page dirancang secara linier dan bertingkat dengan seksyen berikut:

```
┌──────────────────────────────────────────────────────────────┐
│ Header & Navbar (Logo Medika, Navlink, Drawer Mobile & CTA)   │
├──────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                 │
│ • Kiri : Value Proposition + 3 Proof Badges + Quick CTAs      │
│ • Kanan: Dual-Stage 50:50 Tab Switcher                        │
│          [ Tab 1: 3D Isometrik Ruko Kantor (Mouse Parallax) ] │
│          [ Tab 2: Radar Jalur Distribusi CDAKB (Cold-Chain) ] │
├──────────────────────────────────────────────────────────────┤
│ LEGALITAS (7 Dokumen Rantai Izin Asli + Stepper + Copy Drive)│
├──────────────────────────────────────────────────────────────┤
│ STANDAR CDAKB (4 Pilar Tata Kelola + Simulator Penelusuran)  │
├──────────────────────────────────────────────────────────────┤
│ KATALOG PRODUK (Filter 5 Segmen Faskes + Toggle Keranjang)   │
├──────────────────────────────────────────────────────────────┤
│ TENTANG KAMI (Visi Misi, Profil Organisasi & PJT Berlisensi) │
├──────────────────────────────────────────────────────────────┤
│ KONTAK & GOOGLE MAPS (Peta Interaktif + Info Detail Kantor)  │
├──────────────────────────────────────────────────────────────┤
│ FOOTER (Watermark Raksasa, Hak Cipta & Link Bawah)           │
├──────────────────────────────────────────────────────────────┤
│ FLOATING DOCK & CHECKOUT DRAWER (Koleksi Alat -> WA Template)│
└──────────────────────────────────────────────────────────────┘
```

### Detail Tiap Seksyen:

1. **Header & Navigation (`site-header`):**
   - Menggunakan efek kaca transparan *sticky* (`backdrop-filter: blur(12px)`).
   - Tinggi desktop `76px`, mobile `62px`.
   - Tombol toggle hamburger dengan animasi transformasi silang ($X$) yang mengontrol *slide-down drawer* lengkap pada mobile.
2. **Hero Section (`#beranda`):**
   - Menyajikan H1 natural *"Distributor alat kesehatan berizin"*.
   - Dilengkapi 3 bukti verifikasi (*IDAK*, *SK Kemenkumham*, *PJT Aditya Pamungkas*).
   - **Hero Visual Stage**: Menggunakan kontrol tab bersegmen skala **50% : 50% Full-Width**:
     - *View 1 (Kantor Operasional)*: Representasi arsitektur Ruko Neo Fiera Lt. 2 dengan efek 3D isometric tilt berbasis pergerakan kursor mouse (`--tilt-x`, `--tilt-y`), pantulan kaca dinamis (*glare overlay*), papan nama neon, antena pemancar berkedip, serta 2 titik hotspot interaktif (*Lantai 2* dan *Lantai 1*).
     - *View 2 (Alur Distribusi CDAKB)*: Visualisasi radar logistik dengan hub Tangerang Selatan, lingkaran jangkauan berdenyut (*ping rings*), jalur kurir animasi menuju Rumah Sakit, Klinik, dan Laboratorium, serta indikator suhu cold-chain 15°C–25°C.
3. **Legalitas (`#legalitas`):**
   - Menampilkan 7 dokumen izin resmi berurutan secara kronologis.
   - Stepper interaktif (`step-tracker`) dengan tombol salin nomor izin instan (disertai feedback toast animasi) dan tautan langsung ke dokumen fisik di Google Drive.
4. **Standar CDAKB (`#cdakb`):**
   - Menjelaskan 4 komitmen hukum: *Hanya produk berizin edar*, *Produk bisa dilacak*, *Pelaporan e-report 6 bulanan ke Kemenkes*, dan *Prosedur penarikan (recall) & penanganan keluhan*.
   - **Interactive Batch Trace Simulator:** Pengunjung dapat memilih sampel batch (`LOT-2026-MED01` atau `BATCH-2026-LAB04`) atau mengetik kode sendiri untuk melihat simulasi audit rantai suplai (Tanggal Masuk Gudang $\to$ Verifikasi PJT $\to$ Suhu Rantai Dingin $\to$ Faskes Penerima $\to$ Status Uji Kemenkes).
5. **Katalog Produk (`#produk`):**
   - Filter segmented tab untuk 5 jenis faskes: *Semua*, *Rumah sakit*, *Klinik*, *Laboratorium*, *Kampus & riset*, *Tenaga medis*.
   - 6 instrumen medis representatif dengan ikon SVG teknis: *Patient Monitor*, *Syringe Pump*, *Sentrifus Laboratorium*, *Tensimeter Digital*, *Stetoskop*, *Tabung & Wadah Sampel*.
   - Tombol seleksi alat: `+ Tambah ke daftar` $\leftrightarrow$ `✓ Sudah di daftar`.
6. **Tentang Kami (`#tentang`):**
   - Visi & Misi institusional.
   - Profil dewan pengurus dan profil profesional PJT bersertifikasi Kemenkes.
7. **Kontak & Peta Lokasi (`#kontak`):**
   - Google Maps responsif yang disematkan langsung (Ruko Fiera Bintaro).
   - Tombol navigasi rute Google Maps eksternal.
   - Badge informasi aksesibilitas (Parkir logistik, akses ambulans/mobil box).
8. **Floating Drawer & Bottom Dock (`quote-dock` & `quote-drawer`):**
   - Saat pengguna memilih minimal 1 alat, dock melayang di bawah layar akan otomatis muncul.
   - Klik dock membuka laci pemesanan (*Order Drawer*) yang memungkinkan input nama institusi dan langsung menghasilkan link pesan WhatsApp pre-formatted yang siap dikirim.

---

## 5. Sistem Desain & Visual Tokens (`styles.css`)

### Palet Warna (*Color Tokens*)
- `--color-primary-dark: #0A5A5E;` — *Deep Surgical Teal* (Identitas kredibilitas medis)
- `--color-primary-deeper: #06282B;` — *Deep Canvas Ground*
- `--color-accent-green: #7DBB42;` — *Leaf Green Approval* (Indikator CDAKB & verifikasi)
- `--color-accent-blue: #1A8AB5;` — *Medical Supply Blue* (Aksen logistik & instrumen)
- `--color-bg-base: #F8FAFC;` — *Slate-50 Clean Clinical Canvas*
- `--color-bg-surface: #F4F8F8;` — *Subdued Surface Tint*
- `--color-text-main: #0B2526;` — *High-contrast Ink Text* (Rasio kontras WCAG AAA)
- `--color-text-muted: #486163;` — *Readable Slate Body Text*
- `--color-border: #D2E0E1;` — *Structural Border*

### Tipografi
- **Body & Heading:** `'Plus Jakarta Sans'`, sans-serif (Geometric, modern, humanis).
- **Technical & Numbers:** `'JetBrains Mono'`, monospace (Digunakan pada nomor izin, lot batch, koordinat GPS, dan tag teknis).

### Sistem Background Uiverse (Karya Gautammsharma)
Setiap seksi memiliki wrapper kisi-kisi latar belakang medis dengan aksen warna bertema:
- **Hero:** Slate-200 `#e2e8f0` + mask radial halus.
- **Legalitas:** Cyan neon cyber `rgba(26, 138, 181, 0.18)` dengan grid 24px $\times$ 32px.
- **CDAKB:** Cold-chain emerald `rgba(125, 187, 66, 0.09)`.
- **Produk:** Medical supply blue `rgba(26, 138, 181, 0.11)`.
- **Tentang:** Institutional teal `rgba(10, 90, 94, 0.09)`.
- **Kontak:** Command center green & cyan `rgba(125, 187, 66, 0.14)`.

---

## 6. Arsitektur JavaScript (`script.js`)

Semua fungsi diinisialisasi dalam `DOMContentLoaded` event listener:

1. `initCursorSpotlight()`: Menggerakkan lingkaran cahaya lembut mengikuti mouse di desktop.
2. `initMobileMenu()`: Menangani buka-tutup mobile drawer dan backdrop, sinkron dengan tombol hamburger, mengunci scroll body saat terbuka.
3. `initSmoothScroll()`: Scroll halus ke anchor ID dengan kalkulasi offset tinggi sticky header.
4. `initHeroStageSwitcher()`: Mengatur pergantian view pada tab 50:50 antara `#office-card` dan `#logistics-card`.
5. `initRuko3DHover()`: Menghitung posisi kursor relatif terhadap kartu ruko isometrik dan menyuntikkan CSS variables `--tilt-x`, `--tilt-y`, serta `--mouse-x`, `--mouse-y` untuk simulasi tilt 3D dan kilauan kaca real-time.
6. `initLegalChain()` & `initDocStepper()`: Mengelola scroll horizontal stepper dokumen legalitas dan update status aktif.
7. `initCopyButtons()`: Fitur copy-to-clipboard nomor izin dengan fallback execCommand dan feedback animasi toast.
8. `initBatchTraceSimulator()`: Logika audit penelusuran lot CDAKB, memetakan data mock batch ke timeline status alkes.
9. `initProductFilters()`: Memfilter kartu produk berdasarkan atribut `data-category`.
10. `initQuoteDrawer()`: Mengelola array keranjang `selectedProducts`, kalkulasi counter di floating dock, render item di modal drawer, dan membentuk URL WhatsApp dengan template teks dinamis.

---

## 7. Format Pesan WhatsApp Generator

Generator pada `script.js` membentuk URL encode WhatsApp ke nomor `081188099132`:

**Kondisi A: Tanpa Memilih Alat:**
```text
Halo PT Global Medika Indonesia, saya ingin meminta katalog dan informasi penawaran alat kesehatan.
```

**Kondisi B: Memilih Alat dengan Nama Institusi:**
```text
Halo PT Global Medika Indonesia, saya dari RSUD Kota Tangerang Selatan. Kami ingin meminta penawaran harga untuk:
• Patient monitor
• Syringe pump
Mohon info ketersediaan stoknya. Terima kasih.
```

---

## 8. Panduan DevOps, Repositori & Deployment

- **Version Control:** Git
- **Remote Repository:** `https://github.com/ReyhanRf123/global-medika-company-profile.git`
- **Cabang Utama:** `main`
- **Hosting Platform:** **Vercel**
- **Trigger Deployment:** Otomatis berjalan setiap kali ada `git push origin main`.
- **Konfigurasi Vercel (`vercel.json`):**
  - Menerapkan header keamanan HTTP (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection: 1; mode=block`).
  - Cache-control teroptimasi untuk aset statis.

---

## 9. Konteks Pengembangan Selanjutnya: Menuju Sistem Informasi Operasional (SIM Alkes)

Dokumen ini menjadi landasan saat membangun aplikasi web kedua perusahaan (Sistem Informasi Internal / ERP Distribusi Alkes):
- **Integrasi Master Data:** Seluruh data legalitas (IDAK, KBLI, NIB), data pengurus, dan PJT di dokumen ini akan menjadi master profil entitas di sistem informasi.
- **Transisi Mock ke Database Riil:** Fitur simulator CDAKB (`initBatchTraceSimulator`) pada company profile akan dikembangkan menjadi modul Database Relasional (PostgreSQL) yang mencatat mutasi batch asli per transaksi rumah sakit.
- **Sinkronisasi Katalog:** 6 kategori alat pada landing page akan menjadi referensi awal tabel `products` yang dilengkapi field Nomor Izin Edar (NIE AKD/AKL) dan parameter penyimpanan suhu/kadaluwarsa (FEFO).

---
*Dokumen ini diperbarui secara berkala dan menjadi referensi standar untuk pengembangan teknologi digital PT Global Medika Indonesia.*
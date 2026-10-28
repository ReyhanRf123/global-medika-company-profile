/**
 * PT Global Medika Indonesia - Interactive Engine
 * Versi 2 (Tema Distribusi & Logistik Alat Kesehatan Terverifikasi)
 */

/* =========================================================================
   1. Konfigurasi Dokumen Google Drive (Bagian 3)
   ========================================================================= */
const LEGAL_DRIVE_CONFIG = {
  kemenkumham: "https://drive.google.com/file/d/1h010dKpcMVj9cmgIAOLDKFRDwQuOY9lN/view?usp=drive_link",
  npwp: "https://drive.google.com/file/d/1ltK1WYiCe7fI4zVBc3ovZidKE8_F5TEt/view?usp=drive_link",
  k3l: "https://drive.google.com/file/d/1T5hx1KbxegYotjXAdsd32M0c3wU4_qDn/view?usp=drive_link",
  nib: "https://drive.google.com/file/d/1jH-oZnsti3IS1OSuh2ecowjFDdd6PrDZ/view?usp=drive_link",
  sppl: "https://drive.google.com/file/d/118vfscojBcqOgdySjyS38Z8cRKz6TPEW/view?usp=drive_link",
  idak: "https://drive.google.com/file/d/1JMURzfcKlxjZnW0bdhXNGteVs-Q5zuSG/view?usp=drive_link",
  pjt: "https://drive.google.com/file/d/1vSpfm_QMicGObz6YqO0fa3P4Fw684aOS/view?usp=drive_link"
};

const OFFICIAL_PHONE = "6281188099132";

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeaderScroll();
  initCursorSpotlight();
  initMobileMenu();
  initSmoothScroll();
  initHeroStageSwitcher();
  initLegalChain();
  initDocStepper();
  initCopyButtons();
  initBatchTraceSimulator();
  initProductFilters();
  initQuoteDrawer();
});

/* -------------------------------------------------------------------------
 * Ambient Interactive Cursor Spotlight (Desktop)
 * ------------------------------------------------------------------------- */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      spotlight.classList.add('is-active');
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
      spotlight.classList.remove('is-active');
    });
  }
}

/* -------------------------------------------------------------------------
 * 0. Progressive Enhancement: Scroll Reveal Animation
 * ------------------------------------------------------------------------- */
function initScrollReveal() {
  document.documentElement.classList.add('has-js');

  const revealElements = document.querySelectorAll('.reveal-item');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* -------------------------------------------------------------------------
 * Header Shadow saat scroll
 * ------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

/* -------------------------------------------------------------------------
 * Navigasi Menu Ponsel
 * ------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('is-active');
    drawer.classList.toggle('is-open');
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
    }
  });
}

/* -------------------------------------------------------------------------
 * Switcher Tampilan Hero (Kantor Operasional vs Koridor Distribusi CDAKB)
 * ------------------------------------------------------------------------- */
function initHeroStageSwitcher() {
  const tabOffice = document.getElementById('tab-office-view');
  const tabLogistics = document.getElementById('tab-logistics-view');
  const officeCard = document.getElementById('office-card');
  const logisticsCard = document.getElementById('logistics-card');

  if (!tabOffice || !tabLogistics || !officeCard || !logisticsCard) return;

  tabOffice.addEventListener('click', () => {
    tabOffice.classList.add('is-active');
    tabOffice.setAttribute('aria-selected', 'true');
    tabLogistics.classList.remove('is-active');
    tabLogistics.setAttribute('aria-selected', 'false');

    officeCard.classList.add('is-visible');
    logisticsCard.classList.remove('is-visible');
  });

  tabLogistics.addEventListener('click', () => {
    tabLogistics.classList.add('is-active');
    tabLogistics.setAttribute('aria-selected', 'true');
    tabOffice.classList.remove('is-active');
    tabOffice.setAttribute('aria-selected', 'false');

    logisticsCard.classList.add('is-visible');
    officeCard.classList.remove('is-visible');
  });
}

/* -------------------------------------------------------------------------
 * Tautan Rantai Dokumen Legalitas (Bagian 3)
 * ------------------------------------------------------------------------- */
function initLegalChain() {
  const docLinks = document.querySelectorAll('.btn-doc-link');
  
  docLinks.forEach(link => {
    const docKey = link.getAttribute('data-doc');
    const driveUrl = LEGAL_DRIVE_CONFIG[docKey];

    if (driveUrl && driveUrl.trim() !== '') {
      link.setAttribute('href', driveUrl);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    } else {
      link.removeAttribute('href');
      link.style.opacity = '0.55';
      link.style.cursor = 'default';
      link.innerHTML = `<span>Segera tersedia</span>`;
    }
  });
}

/* -------------------------------------------------------------------------
 * Stepper Navigasi Rantai Dokumen Interaktif
 * ------------------------------------------------------------------------- */
function initDocStepper() {
  const stepperNodes = document.querySelectorAll('.stepper-node');
  if (!stepperNodes.length) return;

  stepperNodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetKey = node.getAttribute('data-target');
      const targetCard = document.getElementById(`doc-${targetKey}`);

      stepperNodes.forEach(n => n.classList.remove('is-active'));
      node.classList.add('is-active');

      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        targetCard.classList.remove('is-highlighted');
        void targetCard.offsetWidth;
        targetCard.classList.add('is-highlighted');

        setTimeout(() => {
          targetCard.classList.remove('is-highlighted');
        }, 2000);
      }
    });
  });
}

/* -------------------------------------------------------------------------
 * Tombol Salin Nomor Izin / Dokumen
 * ------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy-num');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      const textSpan = btn.querySelector('.copy-text');

      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.classList.add('is-copied');
        if (textSpan) textSpan.textContent = 'Tersalin ✓';

        setTimeout(() => {
          btn.classList.remove('is-copied');
          if (textSpan) textSpan.textContent = 'Salin';
        }, 1800);
      }).catch(err => {
        console.error('Gagal menyalin:', err);
      });
    });
  });
}

/* -------------------------------------------------------------------------
 * Simulasi Penelusuran Batch / Lot CDAKB
 * ------------------------------------------------------------------------- */
function initBatchTraceSimulator() {
  const traceButtons = document.querySelectorAll('.btn-trace-pill');
  const traceOutput = document.getElementById('trace-log-output');

  if (!traceButtons.length || !traceOutput) return;

  const batchLogs = {
    'LOT-2026-MED01': [
      { status: 'done', text: '<strong>Penerimaan:</strong> Diverifikasi PJT & Suhu Terjaga' },
      { status: 'done', text: '<strong>Izin Edar:</strong> Terdata Resmi di Katalog Kemenkes' },
      { status: 'in-progress', text: '<strong>Penyaluran:</strong> Tercatat dalam Pelaporan E-Report' }
    ],
    'BATCH-2026-LAB04': [
      { status: 'done', text: '<strong>Karantina:</strong> Uji Kelengkapan Lot & Certificate of Analysis' },
      { status: 'done', text: '<strong>Penyimpanan:</strong> Suhu Ruang 15°-25°C Terpantau' },
      { status: 'in-progress', text: '<strong>Ekspedisi:</strong> Penyaluran Faskes Mitra Jawa-Sumatra' }
    ]
  };

  traceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      traceButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const batchKey = btn.getAttribute('data-batch');
      const steps = batchLogs[batchKey] || batchLogs['LOT-2026-MED01'];

      traceOutput.innerHTML = '';
      steps.forEach(s => {
        const row = document.createElement('div');
        row.className = `log-step ${s.status}`;
        row.innerHTML = `<span>${s.status === 'done' ? '✓' : '⟳'}</span> ${s.text}`;
        traceOutput.appendChild(row);
      });
    });
  });
}

/* -------------------------------------------------------------------------
 * Filter Segmen Produk (Bagian 5)
 * ------------------------------------------------------------------------- */
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterButtons.length || !productCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCats = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCats.includes(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------
 * Laci Permintaan Penawaran, Tray Chips & WhatsApp Generator (Bagian 5 & 8)
 * ------------------------------------------------------------------------- */
let selectedQuoteItems = [];

function initQuoteDrawer() {
  const addButtons = document.querySelectorAll('.btn-add-quote');
  const statusText = document.getElementById('quote-bar-status-text');
  const institutionInput = document.getElementById('institution-input');
  const clearBtn = document.getElementById('btn-clear-quote');
  const waSubmitBtn = document.getElementById('btn-submit-quote-whatsapp');
  const chipsTray = document.getElementById('selected-chips-tray');
  const navCartCount = document.getElementById('nav-cart-count');
  
  const floatingDock = document.getElementById('floating-quote-dock');
  const dockBadgeNum = document.getElementById('dock-badge-num');
  const dockStatusText = document.getElementById('dock-status-text');
  const dockWaBtn = document.getElementById('dock-wa-btn');

  function renderChips() {
    if (!chipsTray) return;
    chipsTray.innerHTML = '';

    selectedQuoteItems.forEach(item => {
      const chip = document.createElement('span');
      chip.className = 'selected-chip';
      chip.innerHTML = `
        <span>${item}</span>
        <button type="button" class="chip-remove" aria-label="Hapus ${item}" title="Hapus">×</button>
      `;

      chip.querySelector('.chip-remove').addEventListener('click', () => {
        removeItemFromQuote(item);
      });

      chipsTray.appendChild(chip);
    });
  }

  function removeItemFromQuote(productName) {
    const index = selectedQuoteItems.indexOf(productName);
    if (index !== -1) {
      selectedQuoteItems.splice(index, 1);
      
      const targetBtn = document.querySelector(`.btn-add-quote[data-product="${productName}"]`);
      if (targetBtn) {
        targetBtn.classList.remove('is-added');
        const iconSpan = targetBtn.querySelector('.btn-state-icon');
        const textSpan = targetBtn.querySelector('.btn-state-text');
        if (iconSpan) iconSpan.textContent = "+";
        if (textSpan) textSpan.textContent = "Tambah ke daftar";
      }

      updateQuoteState();
    }
  }

  function updateQuoteState() {
    const count = selectedQuoteItems.length;
    const institution = institutionInput ? institutionInput.value.trim() : '';

    if (navCartCount) {
      navCartCount.textContent = count;
      navCartCount.classList.add('is-bumped');
      setTimeout(() => navCartCount.classList.remove('is-bumped'), 300);
    }

    renderChips();

    if (floatingDock) {
      if (count > 0) {
        floatingDock.hidden = false;
        floatingDock.classList.add('is-visible');
        if (dockBadgeNum) dockBadgeNum.textContent = count;
        if (dockStatusText) dockStatusText.textContent = `${count} alat di daftar penawaran`;
      } else {
        floatingDock.classList.remove('is-visible');
        setTimeout(() => {
          if (selectedQuoteItems.length === 0) floatingDock.hidden = true;
        }, 400);
      }
    }

    let waUrl = "";
    if (count === 0) {
      if (statusText) statusText.textContent = "Belum ada alat dipilih. Anda tetap bisa meminta katalog lewat WhatsApp.";
      const msg = encodeURIComponent("Halo PT Global Medika Indonesia, saya ingin meminta katalog dan informasi penawaran alat kesehatan.");
      waUrl = `https://wa.me/${OFFICIAL_PHONE}?text=${msg}`;
    } else {
      if (statusText) statusText.innerHTML = `<strong>${count} alat</strong> di daftar penawaran`;
      
      const itemsList = selectedQuoteItems.map(item => `• ${item}`).join('\n');
      
      let msg = "";
      if (institution !== "") {
        msg = `Halo PT Global Medika Indonesia, saya dari ${institution}. Kami ingin meminta penawaran harga untuk:\n${itemsList}\n\nMohon info ketersediaan stoknya. Terima kasih.`;
      } else {
        msg = `Halo PT Global Medika Indonesia. Kami ingin meminta penawaran harga untuk:\n${itemsList}\n\nMohon info ketersediaan stoknya. Terima kasih.`;
      }

      waUrl = `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    if (waSubmitBtn) waSubmitBtn.href = waUrl;
    if (dockWaBtn) dockWaBtn.href = waUrl;
  }

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-product');
      const index = selectedQuoteItems.indexOf(productName);
      const iconSpan = btn.querySelector('.btn-state-icon');
      const textSpan = btn.querySelector('.btn-state-text');

      if (index === -1) {
        selectedQuoteItems.push(productName);
        btn.classList.add('is-added');
        if (iconSpan) iconSpan.textContent = "✓";
        if (textSpan) textSpan.textContent = "Sudah di daftar";
      } else {
        selectedQuoteItems.splice(index, 1);
        btn.classList.remove('is-added');
        if (iconSpan) iconSpan.textContent = "+";
        if (textSpan) textSpan.textContent = "Tambah ke daftar";
      }

      updateQuoteState();
    });
  });

  if (institutionInput) {
    institutionInput.addEventListener('input', () => {
      updateQuoteState();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selectedQuoteItems = [];
      addButtons.forEach(btn => {
        btn.classList.remove('is-added');
        const iconSpan = btn.querySelector('.btn-state-icon');
        const textSpan = btn.querySelector('.btn-state-text');
        if (iconSpan) iconSpan.textContent = "+";
        if (textSpan) textSpan.textContent = "Tambah ke daftar";
      });
      if (institutionInput) {
        institutionInput.value = "";
      }
      updateQuoteState();
    });
  }

  updateQuoteState();
}

/* -------------------------------------------------------------------------
 * Navigasi Gulir Halus
 * ------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

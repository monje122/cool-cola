/**
 * COOL COLA — SCROLLYTELLING & E-COMMERCE CORE ENGINE
 * Native sticky scroll, Canvas LERP 60fps interpolation, WhatsApp checkout
 * Official Brand Palette: Red, White & Blue
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // CONFIGURATION & CONSTANTS
  // -------------------------------------------------------------
  const TOTAL_FRAMES = 75;
  const FRAMES_PATH = 'assets/frames/';
  const FRAME_PREFIX = 'f_';
  const FRAME_EXT = '.jpg';
  const LERP_FACTOR = 0.35; // Butter smooth frame interpolation
  const WHATSAPP_PHONE = '584123714136'; // +584123714136
  const FREE_SHIPPING_THRESHOLD = 8.00;
  const STANDARD_SHIPPING_COST = 2.00;

  // -------------------------------------------------------------
  // PRODUCTS DATABASE (8 OFFICIAL 2L FLAVORS)
  // -------------------------------------------------------------
  const PRODUCTS = [
    {
      id: 'cool-cola-negra',
      name: 'Cool Cola Negra 2L',
      tag: '⭐ El Clásico',
      category: 'clasico',
      price: 1.80,
      image: 'assets/product_cola.jpg',
      desc: 'La legendaria bebida refrescante de cola negra. Notas acarameladas, vainilla suave y burbuja persistente.',
      color: '#e31b23',
      attrs: { refrescancia: 98, burbuja: 95, dulzura: 86, acidez: 65 },
      nutrition: {
        calorias: '84 kcal',
        sodio: '28 mg',
        carbohidratos: '21 g',
        azucares: '21 g',
        grasas: '0 g',
        cafeina: '15 mg'
      },
      ingredients: 'Agua carbonatada purificada, azúcar de caña refinada, colorante caramelo clase IV, acidulante (ácido fosfórico), cafeína, extractos naturales de cola y vainilla.'
    },
    {
      id: 'cool-limon',
      name: 'Cool Limón 2L',
      tag: '🍋 Ultra Cítrico',
      category: 'citrico',
      price: 1.80,
      image: 'assets/product_limon.jpg',
      desc: 'Golpe revitalizante de lima y limón verde natural con máxima acidez equilibrada y frescura polar.',
      color: '#10b981',
      attrs: { refrescancia: 100, burbuja: 94, dulzura: 74, acidez: 96 },
      nutrition: {
        calorias: '80 kcal',
        sodio: '24 mg',
        carbohidratos: '20 g',
        azucares: '20 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua purificada carbonatada, azúcar refinada, jugo concentrado de lima-limón, acidulante (ácido cítrico), citrato de sodio, conservantes naturales.'
    },
    {
      id: 'cool-naranja',
      name: 'Cool Naranja 2L',
      tag: '🍊 Más Vendido',
      category: 'citrico',
      price: 1.80,
      image: 'assets/product_naranja.jpg',
      desc: 'Explosión de naranja valenciana jugosa. Dulzura cítrica brillante y chispeante, la consentida de la casa.',
      color: '#f97316',
      attrs: { refrescancia: 95, burbuja: 90, dulzura: 89, acidez: 84 },
      nutrition: {
        calorias: '85 kcal',
        sodio: '26 mg',
        carbohidratos: '21 g',
        azucares: '21 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua carbonatada, azúcar de caña, concentrado de naranja dulce, acidulante (ácido cítrico), aroma natural de naranja, colorante natural betacaroteno.'
    },
    {
      id: 'cool-uva',
      name: 'Cool Uva 2L',
      tag: '🍇 Favorito Fans',
      category: 'frutal',
      price: 1.80,
      image: 'assets/product_uva.jpg',
      desc: 'Sabor irresistible a uvas moradas recién cosechadas. Dulzor aromático, cuerpo aterciopelado y burbujas finas.',
      color: '#8b5cf6',
      attrs: { refrescancia: 92, burbuja: 91, dulzura: 94, acidez: 72 },
      nutrition: {
        calorias: '88 kcal',
        sodio: '22 mg',
        carbohidratos: '22 g',
        azucares: '22 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua carbonatada tratada, azúcar refinada, extracto aromático de uva negra, acidulante (ácido málico y cítrico), colorantes certificados azul 1 y rojo 40.'
    },
    {
      id: 'cool-roja',
      name: 'Cool Kola Roja 2L',
      tag: '🍓 Tradición',
      category: 'clasico',
      price: 1.80,
      image: 'assets/product_roja.jpg',
      desc: 'La tradicional bebida dulce de fantasía con notas de fresa silvestre, vainilla y caramelo. Nostalgia pura.',
      color: '#ef4444',
      attrs: { refrescancia: 90, burbuja: 88, dulzura: 96, acidez: 60 },
      nutrition: {
        calorias: '86 kcal',
        sodio: '25 mg',
        carbohidratos: '21.5 g',
        azucares: '21.5 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua carbonatada, azúcar de caña, saborizantes idénticos al natural (fresa y vainilla), colorante rojo 40, acidulante cítrico.'
    },
    {
      id: 'cool-manzana',
      name: 'Cool Manzana Verde 2L',
      tag: '🍏 Manzana Crispy',
      category: 'citrico',
      price: 1.80,
      image: 'assets/product_manzana.jpg',
      desc: 'El frescor crujiente de manzana verde recién cortada. Sensación limpia, burbujeante y ultra refrescante.',
      color: '#84cc16',
      attrs: { refrescancia: 96, burbuja: 89, dulzura: 80, acidez: 90 },
      nutrition: {
        calorias: '82 kcal',
        sodio: '20 mg',
        carbohidratos: '20.5 g',
        azucares: '20.5 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua carbonatada purificada, azúcar refinada, concentrado de manzana verde ácida, acidulante málico, colorantes grado alimenticio.'
    },
    {
      id: 'cool-pina',
      name: 'Cool Piña Dorada 2L',
      tag: '🍍 Tropical',
      category: 'frutal',
      price: 1.80,
      image: 'assets/product_pina.jpg',
      desc: 'El sabor del caribe con piña miel jugosa y dulce. El acompañante estrella para pizzas, hamburguesas y comidas familiares.',
      color: '#eab308',
      attrs: { refrescancia: 94, burbuja: 87, dulzura: 91, acidez: 78 },
      nutrition: {
        calorias: '85 kcal',
        sodio: '24 mg',
        carbohidratos: '21 g',
        azucares: '21 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua carbonatada, azúcar de caña, pulpa concentrada de piña tropical, acidulante cítrico, sabor natural de piña, colorante amarillo 5.'
    },
    {
      id: 'cool-maracuya',
      name: 'Cool Maracuyá Citrus 2L',
      tag: '✨ Exótico',
      category: 'frutal',
      price: 1.80,
      image: 'assets/product_maracuya.jpg',
      desc: 'La fruta de la pasión en su máxima expresión efervescente. Cítrico, aromático y exótico en cada sorbo.',
      color: '#fbbf24',
      attrs: { refrescancia: 97, burbuja: 92, dulzura: 83, acidez: 94 },
      nutrition: {
        calorias: '81 kcal',
        sodio: '22 mg',
        carbohidratos: '20 g',
        azucares: '20 g',
        grasas: '0 g',
        cafeina: '0 mg'
      },
      ingredients: 'Agua purificada carbonatada, azúcar, concentrado de maracuyá y mandarina, acidulante cítrico, antioxidante natural.'
    }
  ];

  // Coupons
  const COUPONS = {
    'COOL15': { discountType: 'percent', val: 0.15, label: '15% de descuento especial' },
    'SABORCOOL': { discountType: 'fixed', val: 1.50, label: '$1.50 de descuento directo' },
    'ENVIOGRATIS': { discountType: 'free_shipping', val: 0, label: '¡Envío express gratis!' }
  };

  // -------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------
  let framesCache = [];
  let loadedFramesCount = 0;
  let currentFrameIndex = 0;
  let targetFrameIndex = 0;
  let isCanvasReady = false;
  let appliedCoupon = null;

  // Cart State (Persisted in localStorage)
  let cart = [];
  try {
    const saved = localStorage.getItem('coolcola_cart_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  // -------------------------------------------------------------
  // DOM REFERENCES
  // -------------------------------------------------------------
  const canvas = document.getElementById('story-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const scrollyTrack = document.getElementById('scrolly-track');
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = document.getElementById('progress-percent');
  const siteHeader = document.getElementById('site-header');

  // HUD elements
  const hudChapterText = document.getElementById('hud-chapter-text');
  const hudProgressCircle = document.getElementById('hud-progress-circle');
  const hudProgressNum = document.getElementById('hud-progress-num');
  const hudSpecCard = document.getElementById('hud-spec-card');
  const specFlavorTag = document.getElementById('spec-flavor-tag');
  const specFlavorTitle = document.getElementById('spec-flavor-title');
  const specFlavorDesc = document.getElementById('spec-flavor-desc');
  const specMeterRefrescancia = document.getElementById('spec-meter-refrescancia');
  const specValRefrescancia = document.getElementById('spec-val-refrescancia');
  const specMeterBurbuja = document.getElementById('spec-meter-burbuja');
  const specValBurbuja = document.getElementById('spec-val-burbuja');
  const specMeterIntensidad = document.getElementById('spec-meter-intensidad');
  const specValIntensidad = document.getElementById('spec-val-intensidad');
  const specQuickAddBtn = document.getElementById('spec-quick-add-btn');

  // Milestones
  const milestones = [
    document.getElementById('milestone-1'),
    document.getElementById('milestone-2'),
    document.getElementById('milestone-3'),
    document.getElementById('milestone-4'),
    document.getElementById('milestone-5')
  ];

  // Cart Drawer Elements
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartCounter = document.getElementById('cart-counter');
  const drawerItemCount = document.getElementById('drawer-item-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartItemsList = document.getElementById('cart-items-list');
  const btnEmptyExplore = document.getElementById('btn-empty-explore');

  // Cart summary
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryDiscountRow = document.getElementById('summary-discount-row');
  const summaryDiscount = document.getElementById('summary-discount');
  const summaryShipping = document.getElementById('summary-shipping');
  const summaryTotal = document.getElementById('summary-total');
  const shippingTrackerLabel = document.getElementById('shipping-tracker-label');
  const shippingTrackerStatus = document.getElementById('shipping-tracker-status');
  const shippingProgressBar = document.getElementById('shipping-progress-bar');
  const couponInput = document.getElementById('coupon-input');
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponFeedback = document.getElementById('coupon-feedback');
  const btnWhatsappCheckout = document.getElementById('btn-whatsapp-checkout');

  // Modals & UI Actions
  const nutritionModal = document.getElementById('nutrition-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const viewModeBtn = document.getElementById('view-mode-btn');

  // -------------------------------------------------------------
  // SOUND SYNTHESIS (SUBTLE FEEDBACK)
  // -------------------------------------------------------------
  let audioContext = null;
  function getAudioContext() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    return audioContext;
  }

  function playBubblePopSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx || ctx.state === 'suspended') return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(500 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(800 + Math.random() * 300, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      // Audio autoplay restrictions
    }
  }

  // Mobile Viewport Simulator Toggle
  let isMobileSimActive = false;
  if (viewModeBtn) {
    viewModeBtn.addEventListener('click', () => {
      isMobileSimActive = !isMobileSimActive;
      document.body.classList.toggle('mobile-preview-active', isMobileSimActive);
      viewModeBtn.classList.toggle('active', isMobileSimActive);
      const label = document.getElementById('view-mode-label');
      if (label) label.textContent = isMobileSimActive ? 'Vista PC' : 'Móvil UI';
      resizeCanvas();
      renderFrame(Math.round(currentFrameIndex));
    });
  }

  // -------------------------------------------------------------
  // FRAME PRELOADER ENGINE
  // -------------------------------------------------------------
  function preloadFrames() {
    framesCache = new Array(TOTAL_FRAMES);
    loadedFramesCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const padNum = String(i).padStart(3, '0');
      img.src = `${FRAMES_PATH}${FRAME_PREFIX}${padNum}${FRAME_EXT}`;

      img.onload = () => {
        framesCache[i - 1] = img;
        loadedFramesCount++;
        const pct = Math.round((loadedFramesCount / TOTAL_FRAMES) * 100);
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (progressPercent) progressPercent.textContent = `${pct}%`;

        // Draw first frame immediately as soon as frame 1 arrives
        if (i === 1 && !isCanvasReady) {
          renderInitialFrame(img);
        }

        if (loadedFramesCount === TOTAL_FRAMES) {
          onAllFramesLoaded();
        }
      };

      img.onerror = () => {
        // Fallback gracefully on missing frame
        loadedFramesCount++;
        if (loadedFramesCount === TOTAL_FRAMES) {
          onAllFramesLoaded();
        }
      };
    }
  }

  function renderInitialFrame(img) {
    resizeCanvas();
    drawScaledImage(img);
  }

  function onAllFramesLoaded() {
    isCanvasReady = true;
    setTimeout(() => {
      if (preloader) preloader.classList.add('fade-out');
      // Trigger first render
      calculateScrollProgress();
      startRenderLoop();
    }, 300);
  }

  // -------------------------------------------------------------
  // HIGH-DPI CANVAS RENDER ENGINE
  // -------------------------------------------------------------
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    if (framesCache[Math.round(currentFrameIndex)]) {
      drawScaledImage(framesCache[Math.round(currentFrameIndex)]);
    }
  });

  function drawScaledImage(img) {
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1080;
    const ih = img.naturalHeight || 1920;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cw, ch);

    // Smart Responsiveness:
    // If aspect ratio is widescreen (PC / tablet horizontal), contain/scale nicely
    // If mobile portrait (aspect ratio < 1), cover centered for full immersion
    const isWidescreen = (cw / ch) > 1.1;

    let renderW, renderH, offsetX, offsetY;

    if (isWidescreen && !isMobileSimActive) {
      // Contain mode with soft cinematic lighting
      const scale = Math.min(cw / iw, ch / ih) * 0.95;
      renderW = iw * scale;
      renderH = ih * scale;
      offsetX = (cw - renderW) / 2;
      offsetY = (ch - renderH) / 2;
    } else {
      // Cover mode: fill screen completely
      const scale = Math.max(cw / iw, ch / ih);
      renderW = iw * scale;
      renderH = ih * scale;
      offsetX = (cw - renderW) / 2;
      offsetY = (ch - renderH) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }

  function renderFrame(index) {
    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
    const img = framesCache[safeIdx];
    if (img && img.complete) {
      drawScaledImage(img);
    }
  }

  // -------------------------------------------------------------
  // SCROLL PROGRESS ENGINE (NATIVE STICKY, NO HIJACKING)
  // -------------------------------------------------------------
  function calculateScrollProgress() {
    const trackRect = scrollyTrack.getBoundingClientRect();
    const trackHeight = scrollyTrack.offsetHeight;
    const windowH = window.innerHeight;

    // Track total scrollable distance is trackHeight - windowH
    const maxScroll = trackHeight - windowH;
    const currentScroll = -trackRect.top;

    let progress = currentScroll / maxScroll;
    progress = Math.max(0, Math.min(1, progress));

    // Instant React (zero dead zone): Map 0..1 to 0..74 frames
    targetFrameIndex = progress * (TOTAL_FRAMES - 1);

    // Update HUD & Chapters
    updateHudAndMilestones(progress);

    // Header background elevation
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', calculateScrollProgress, { passive: true });

  // -------------------------------------------------------------
  // LERP ANIMATION LOOP (60 FPS BUTTER SMOOTH)
  // -------------------------------------------------------------
  function startRenderLoop() {
    function tick() {
      // LERP formula: current += (target - current) * factor
      const diff = targetFrameIndex - currentFrameIndex;

      if (Math.abs(diff) > 0.001) {
        currentFrameIndex += diff * LERP_FACTOR;
        renderFrame(Math.round(currentFrameIndex));
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // -------------------------------------------------------------
  // CHAPTERS, HUD & MILESTONES STATE
  // -------------------------------------------------------------
  let activeMilestoneIndex = 0;
  let activeQuickAddProduct = PRODUCTS[1]; // Limon default

  function updateHudAndMilestones(progress) {
    // 1. Circular Progress Meter
    const pct = Math.round(progress * 100);
    if (hudProgressNum) hudProgressNum.textContent = `${pct}%`;
    const circumference = 100.5; // 2 * PI * 16
    const offset = circumference - (progress * circumference);
    if (hudProgressCircle) hudProgressCircle.style.strokeDashoffset = offset;

    // 2. Determine Chapter and Milestone based on progress
    let chapterNum = 1;
    let chapterTitle = 'Explosión de Sabores';
    let milestoneIdx = 0;

    if (progress < 0.20) {
      chapterNum = 1;
      chapterTitle = 'Explosión de Sabores';
      milestoneIdx = 0;
      updateSpecCard({
        tag: '8 SABORES EN 1',
        title: 'Explosión Cítrica & Frutal',
        desc: '8 sabores únicos listos para llevar la máxima efervescencia a tu hogar.',
        refrescancia: 98,
        burbuja: 95,
        intensidad: 92,
        product: PRODUCTS[0]
      });
    } else if (progress < 0.44) {
      chapterNum = 2;
      chapterTitle = 'Cool Limón Cítrico Extremo';
      milestoneIdx = 1;
      updateSpecCard({
        tag: '🍋 2L CÍTRICO',
        title: 'Cool Limón Polar',
        desc: 'Lima-limón natural con toque ácido perfecto y burbujas de larga duración.',
        refrescancia: 100,
        burbuja: 94,
        intensidad: 96,
        product: PRODUCTS[1]
      });
    } else if (progress < 0.66) {
      chapterNum = 3;
      chapterTitle = 'Cool Naranja Valenciana';
      milestoneIdx = 2;
      updateSpecCard({
        tag: '🍊 2L MÁS VENDIDO',
        title: 'Cool Naranja Jugosa',
        desc: 'Dulzura frutal equilibrada y chispa cítrica brillante en botella familiar.',
        refrescancia: 95,
        burbuja: 90,
        intensidad: 90,
        product: PRODUCTS[2]
      });
    } else if (progress < 0.86) {
      chapterNum = 4;
      chapterTitle = 'Cool Uva Inconfundible';
      milestoneIdx = 3;
      updateSpecCard({
        tag: '🍇 2L FAVORITO',
        title: 'Cool Uva Morada',
        desc: 'Efervescencia dulce y aromática que cautiva desde el primer sorbo.',
        refrescancia: 92,
        burbuja: 91,
        intensidad: 98,
        product: PRODUCTS[3]
      });
    } else {
      chapterNum = 5;
      chapterTitle = 'El Lineup Oficial 2L';
      milestoneIdx = 4;
      updateSpecCard({
        tag: '👑 LA FAMILIA COOL',
        title: '8 Sabores Disponibles',
        desc: 'Cola Negra, Limón, Naranja, Uva, Roja, Manzana, Piña y Maracuyá.',
        refrescancia: 99,
        burbuja: 96,
        intensidad: 95,
        product: PRODUCTS[0]
      });
    }

    // Update HUD Chapter Text
    if (hudChapterText) {
      hudChapterText.textContent = `Capítulo 0${chapterNum} / 05 — ${chapterTitle}`;
    }

    // Update Milestones Fade
    if (milestoneIdx !== activeMilestoneIndex) {
      milestones.forEach((m, idx) => {
        if (m) {
          if (idx === milestoneIdx) {
            m.classList.add('active');
          } else {
            m.classList.remove('active');
          }
        }
      });
      activeMilestoneIndex = milestoneIdx;
    }
  }

  function updateSpecCard(data) {
    if (specFlavorTag) specFlavorTag.textContent = data.tag;
    if (specFlavorTitle) specFlavorTitle.textContent = data.title;
    if (specFlavorDesc) specFlavorDesc.textContent = data.desc;

    if (specMeterRefrescancia) specMeterRefrescancia.style.width = `${data.refrescancia}%`;
    if (specValRefrescancia) specValRefrescancia.textContent = `${data.refrescancia}%`;

    if (specMeterBurbuja) specMeterBurbuja.style.width = `${data.burbuja}%`;
    if (specValBurbuja) specValBurbuja.textContent = `${data.burbuja}%`;

    if (specMeterIntensidad) specMeterIntensidad.style.width = `${data.intensidad}%`;
    if (specValIntensidad) specValIntensidad.textContent = `${data.intensidad}%`;

    activeQuickAddProduct = data.product;
  }

  if (specQuickAddBtn) {
    specQuickAddBtn.addEventListener('click', () => {
      if (activeQuickAddProduct) {
        addToCart(activeQuickAddProduct.id);
        playBubblePopSound();
        showToastNotification(`¡Añadido al pedido!`);
      }
    });
  }

  // -------------------------------------------------------------
  // PRODUCT CATALOG RENDERING & FILTERING
  // -------------------------------------------------------------
  const productGrid = document.getElementById('product-grid');

  function renderProducts(filter = 'all') {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="card-media-wrapper">
          <div class="card-top-badges">
            <span class="flavor-tag" style="border-color: ${p.color}; color: ${p.color};">${p.tag}</span>
            <span class="bottle-volume-tag">2 Litros</span>
          </div>
          <img src="${p.image}" alt="${p.name}" class="card-product-img" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-product-name">${p.name}</h3>
          <p class="card-product-desc">${p.desc}</p>
          
          <div class="card-attributes">
            <div class="attr-row">
              <span class="attr-label">Refrescancia</span>
              <div class="attr-track"><div class="attr-fill" style="width: ${p.attrs.refrescancia}%; background: ${p.color};"></div></div>
              <span class="attr-val">${p.attrs.refrescancia}%</span>
            </div>
            <div class="attr-row">
              <span class="attr-label">Gas / Burbuja</span>
              <div class="attr-track"><div class="attr-fill" style="width: ${p.attrs.burbuja}%; background: ${p.color};"></div></div>
              <span class="attr-val">${p.attrs.burbuja}%</span>
            </div>
            <div class="attr-row">
              <span class="attr-label">Dulzura</span>
              <div class="attr-track"><div class="attr-fill" style="width: ${p.attrs.dulzura}%; background: ${p.color};"></div></div>
              <span class="attr-val">${p.attrs.dulzura}%</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-price-box">
              <span class="price-unit-label">Precio 2L</span>
              <span class="card-price">$${p.price.toFixed(2)}</span>
            </div>
            <div class="card-action-btns">
              <button class="btn-info-modal" data-modal-id="${p.id}" title="Ficha Nutricional">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </button>
              <button class="btn-card-add" data-add-id="${p.id}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                <span>Añadir</span>
              </button>
            </div>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Filter Pills Event Listener
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
      playBubblePopSound();
    });
  });

  // Global Click Delegations for Products (Add to Cart / Nutrition Modal)
  document.addEventListener('click', (e) => {
    // Add product to cart
    const addBtn = e.target.closest('[data-add-id]');
    if (addBtn) {
      const pid = addBtn.getAttribute('data-add-id');
      addToCart(pid);
      playBubblePopSound();
      showToastNotification(`¡Añadido al pedido!`);
      return;
    }

    // Open Nutrition Modal
    const modalBtn = e.target.closest('[data-modal-id]');
    if (modalBtn) {
      const pid = modalBtn.getAttribute('data-modal-id');
      openNutritionModal(pid);
      return;
    }
  });

  // -------------------------------------------------------------
  // NUTRITIONAL MODAL LOGIC
  // -------------------------------------------------------------
  let activeModalProductId = null;

  function openNutritionModal(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    activeModalProductId = prod.id;
    document.getElementById('modal-flavor-badge').textContent = prod.name;
    document.getElementById('modal-flavor-title').textContent = `Ficha Nutricional Oficial`;
    document.getElementById('modal-ingredients-text').textContent = prod.ingredients;

    const rowsContainer = document.getElementById('modal-nutrition-rows');
    rowsContainer.innerHTML = `
      <tr><td>Valor Energético</td><td><strong>${prod.nutrition.calorias}</strong></td><td>4%</td></tr>
      <tr><td>Carbohidratos Totales</td><td><strong>${prod.nutrition.carbohidratos}</strong></td><td>7%</td></tr>
      <tr><td>Azúcares Totales</td><td><strong>${prod.nutrition.azucares}</strong></td><td>24%</td></tr>
      <tr><td>Grasas Totales</td><td><strong>${prod.nutrition.grasas}</strong></td><td>0%</td></tr>
      <tr><td>Sodio</td><td><strong>${prod.nutrition.sodio}</strong></td><td>1%</td></tr>
      <tr><td>Cafeína</td><td><strong>${prod.nutrition.cafeina}</strong></td><td>-</td></tr>
    `;

    document.getElementById('modal-add-to-cart-btn').textContent = `Añadir ${prod.name} ($${prod.price.toFixed(2)})`;

    nutritionModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNutritionModal() {
    nutritionModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeNutritionModal);
  if (nutritionModal) {
    nutritionModal.addEventListener('click', (e) => {
      if (e.target === nutritionModal) closeNutritionModal();
    });
  }

  const modalAddBtn = document.getElementById('modal-add-to-cart-btn');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (activeModalProductId) {
        addToCart(activeModalProductId);
        playBubblePopSound();
        closeNutritionModal();
        openCartDrawer();
      }
    });
  }

  // -------------------------------------------------------------
  // CART SLIDE-OVER ENGINE (REVERSIBLE BODY OVERFLOW FIX)
  // -------------------------------------------------------------
  function openCartDrawer() {
    cartDrawerOverlay.classList.add('open');
    cartDrawerOverlay.setAttribute('aria-hidden', 'false');
    // Lock body scroll cleanly
    document.body.style.overflow = 'hidden';
    renderCart();
  }

  function closeCartDrawer() {
    cartDrawerOverlay.classList.remove('open');
    cartDrawerOverlay.setAttribute('aria-hidden', 'true');
    // CRITICAL: Always unconditionally restore body scroll!
    document.body.style.overflow = '';
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }
  if (btnEmptyExplore) {
    btnEmptyExplore.addEventListener('click', () => {
      closeCartDrawer();
      const cat = document.getElementById('catalog-section');
      if (cat) cat.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------
  // CART OPERATIONS & WHATSAPP GENERATION
  // -------------------------------------------------------------
  function saveCart() {
    try {
      localStorage.setItem('coolcola_cart_v1', JSON.stringify(cart));
    } catch (e) {}
    updateCartBadges();
  }

  function updateCartBadges() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCounter) cartCounter.textContent = totalCount;
    if (drawerItemCount) drawerItemCount.textContent = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;
  }

  function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        variant: 'Botella 2L',
        qty: 1
      });
    }
    saveCart();
    renderCart();
  }

  function changeCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    renderCart();
    playBubblePopSound();
  }

  function removeCartItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    playBubblePopSound();
  }

  // Coupon Logic
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (!code) {
        appliedCoupon = null;
        renderCart();
        return;
      }

      if (COUPONS[code]) {
        appliedCoupon = { code, ...COUPONS[code] };
        couponFeedback.className = 'coupon-feedback success';
        couponFeedback.textContent = `¡Cupón aplicado: ${appliedCoupon.label}!`;
      } else {
        appliedCoupon = null;
        couponFeedback.className = 'coupon-feedback error';
        couponFeedback.textContent = `Cupón no válido. Prueba COOL15`;
      }
      renderCart();
    });
  }

  // Render Sliding Cart Drawer
  function renderCart() {
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartEmptyState.style.display = 'block';
      cartItemsList.style.display = 'none';
      document.getElementById('cart-footer').style.display = 'none';
      shippingProgressBar.style.width = '0%';
      shippingTrackerLabel.textContent = `Envío gratis a partir de $${FREE_SHIPPING_THRESHOLD.toFixed(2)}`;
      shippingTrackerStatus.textContent = `Faltan $${FREE_SHIPPING_THRESHOLD.toFixed(2)}`;
      return;
    }

    cartEmptyState.style.display = 'none';
    cartItemsList.style.display = 'flex';
    document.getElementById('cart-footer').style.display = 'block';

    // Render items list
    cartItemsList.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-variant">${item.variant}</span>
          <span class="cart-item-price">$${item.price.toFixed(2)} c/u &bull; <strong>$${lineTotal.toFixed(2)}</strong></span>
        </div>
        <div class="cart-item-controls">
          <div class="qty-control-group">
            <button class="qty-btn" data-qty-dec="${item.id}">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" data-qty-inc="${item.id}">+</button>
          </div>
          <button class="cart-item-remove-btn" data-remove="${item.id}">Eliminar</button>
        </div>
      `;
      cartItemsList.appendChild(itemEl);
    });

    // Calculate Discounts & Shipping
    let discountAmount = 0;
    let isFreeShipping = false;

    if (appliedCoupon) {
      if (appliedCoupon.discountType === 'percent') {
        discountAmount = subtotal * appliedCoupon.val;
      } else if (appliedCoupon.discountType === 'fixed') {
        discountAmount = appliedCoupon.val;
      } else if (appliedCoupon.discountType === 'free_shipping') {
        isFreeShipping = true;
      }
    }

    // Free shipping threshold
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      isFreeShipping = true;
    }

    const shippingCost = isFreeShipping ? 0 : STANDARD_SHIPPING_COST;
    const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

    // Update Shipping Tracker Progress
    const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    shippingProgressBar.style.width = `${progressPct}%`;

    if (isFreeShipping) {
      shippingTrackerLabel.textContent = '¡Felicidades!';
      shippingTrackerStatus.textContent = '¡Envío Gratis Ganado! 🎉';
    } else {
      shippingTrackerLabel.textContent = `Envío gratis a partir de $${FREE_SHIPPING_THRESHOLD.toFixed(2)}`;
      shippingTrackerStatus.textContent = `Faltan $${remainingForFree.toFixed(2)}`;
    }

    // Update Summary Box
    summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;

    if (discountAmount > 0) {
      summaryDiscountRow.style.display = 'flex';
      summaryDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
      summaryDiscountRow.style.display = 'none';
    }

    summaryShipping.textContent = isFreeShipping ? 'GRATIS' : `$${STANDARD_SHIPPING_COST.toFixed(2)}`;
    summaryShipping.className = isFreeShipping ? 'free-shipping-text' : '';
    summaryTotal.textContent = `$${finalTotal.toFixed(2)}`;
  }

  // Cart item events delegation
  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const incBtn = e.target.closest('[data-qty-inc]');
      if (incBtn) {
        changeCartQty(incBtn.dataset.qtyInc, 1);
        return;
      }
      const decBtn = e.target.closest('[data-qty-dec]');
      if (decBtn) {
        changeCartQty(decBtn.dataset.qtyDec, -1);
        return;
      }
      const remBtn = e.target.closest('[data-remove]');
      if (remBtn) {
        removeCartItem(remBtn.dataset.remove);
        return;
      }
    });
  }

  // -------------------------------------------------------------
  // WHATSAPP CHECKOUT URL GENERATOR
  // -------------------------------------------------------------
  if (btnWhatsappCheckout) {
    btnWhatsappCheckout.addEventListener('click', () => {
      if (cart.length === 0) return;

      const customerName = document.getElementById('customer-name').value.trim();
      const customerAddress = document.getElementById('customer-address').value.trim();
      const paymentMethod = document.getElementById('payment-method').value;

      if (!customerName || !customerAddress) {
        alert('Por favor indica tu Nombre y Dirección de Entrega para poder coordinar tu despacho.');
        return;
      }

      let subtotal = 0;
      let itemsText = '';

      cart.forEach(item => {
        const lineTotal = item.price * item.qty;
        subtotal += lineTotal;
        itemsText += `  • *${item.qty}x* ${item.name} ($${item.price.toFixed(2)} c/u) = *$${lineTotal.toFixed(2)}*\n`;
      });

      let discountAmount = 0;
      let isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

      if (appliedCoupon) {
        if (appliedCoupon.discountType === 'percent') {
          discountAmount = subtotal * appliedCoupon.val;
        } else if (appliedCoupon.discountType === 'fixed') {
          discountAmount = appliedCoupon.val;
        } else if (appliedCoupon.discountType === 'free_shipping') {
          isFreeShipping = true;
        }
      }

      const shippingCost = isFreeShipping ? 0 : STANDARD_SHIPPING_COST;
      const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

      // Build formatted message
      let message = `🧊 *¡HOLA COOL COLA! DESEO HACER UN PEDIDO* 🧊\n\n`;
      message += `👤 *Cliente:* ${customerName}\n`;
      message += `📍 *Dirección de Entrega:* ${customerAddress}\n`;
      message += `💳 *Método de Pago:* ${paymentMethod}\n\n`;
      message += `🛒 *DETALLE DEL PEDIDO (2L):*\n${itemsText}\n`;
      message += `💵 *Subtotal:* $${subtotal.toFixed(2)}\n`;

      if (discountAmount > 0) {
        message += `🏷️ *Descuento (${appliedCoupon.code}):* -$${discountAmount.toFixed(2)}\n`;
      }

      message += `🚚 *Envío:* ${isFreeShipping ? 'GRATIS' : '$' + shippingCost.toFixed(2)}\n`;
      message += `⭐ *TOTAL A PAGAR: $${finalTotal.toFixed(2)}*\n\n`;
      message += `¿Me confirman disponibilidad y tiempo estimado de entrega? ¡Gracias!`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }

  // Simple Notification Toast
  function showToastNotification(text) {
    let toast = document.getElementById('cool-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cool-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #e31b23;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 0;
        font-weight: 800;
        font-size: 0.9rem;
        box-shadow: 0 10px 30px rgba(227, 27, 35, 0.45);
        z-index: 9999;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 2200);
  }

  // -------------------------------------------------------------
  // INITIALIZATION
  // -------------------------------------------------------------
  function init() {
    renderProducts();
    updateCartBadges();
    preloadFrames();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

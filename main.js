/**
 * COOL COLA — B2B SCROLLYTELLING & WHOLESALE ENGINE
 * Native sticky scroll, Canvas LERP 60fps interpolation, WhatsApp Wholesale Dispatch
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
  const LERP_FACTOR = 0.35; // Buttery smooth frame interpolation
  const WHATSAPP_PHONE = '584123714136'; // +584123714136

  // -------------------------------------------------------------
  // PRODUCTS DATABASE (8 OFFICIAL 2L FLAVORS - B2B BULTO PRESENTATION)
  // -------------------------------------------------------------
  const PRODUCTS = [
    {
      id: 'cool-cola-negra',
      name: 'Cool Cola Negra 2L',
      tag: '⭐ El Clásico de Mayor Venta',
      category: 'clasico',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_cola.jpg',
      desc: 'La legendaria bebida de cola negra. Notas acarameladas, vainilla suave y burbuja persistente. Líder absoluto en rotación de anaquel.',
      color: '#e31b23',
      attrs: { refrescancia: 98, burbuja: 95, dulzura: 86, rotacion: 99 },
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
      tag: '🍋 Ultra Cítrico • Alta Demanda',
      category: 'citrico',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_limon.jpg',
      desc: 'Golpe revitalizante de lima y limón verde natural con máxima acidez equilibrada y frescura polar. El preferido en días calurosos.',
      color: '#10b981',
      attrs: { refrescancia: 100, burbuja: 94, dulzura: 74, rotacion: 96 },
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
      tag: '🍊 Consentida Familiar',
      category: 'citrico',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_naranja.jpg',
      desc: 'Explosión de naranja valenciana jugosa. Dulzura cítrica brillante y chispeante, infaltable en el surtido de todo abasto y bodega.',
      color: '#f97316',
      attrs: { refrescancia: 95, burbuja: 90, dulzura: 89, rotacion: 95 },
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
      tag: '🍇 Top 1 Pedidos en Bodega',
      category: 'frutal',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_uva.jpg',
      desc: 'Sabor irresistible a uvas moradas. Dulzor aromático, cuerpo aterciopelado y burbujas finas. Producto estrella que vuela de los refrigeradores.',
      color: '#8b5cf6',
      attrs: { refrescancia: 92, burbuja: 91, dulzura: 94, rotacion: 98 },
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
      tag: '🍓 Tradición Inconfundible',
      category: 'clasico',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_roja.jpg',
      desc: 'La tradicional bebida dulce de fantasía con notas de fresa silvestre, vainilla y caramelo. Gran fidelidad de clientes nostálgicos.',
      color: '#ef4444',
      attrs: { refrescancia: 90, burbuja: 88, dulzura: 96, rotacion: 92 },
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
      tag: '🍏 Manzana Crispy Polar',
      category: 'citrico',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_manzana.jpg',
      desc: 'El frescor crujiente de manzana verde recién cortada. Sensación limpia, burbujeante y ultra refrescante para toda la familia.',
      color: '#84cc16',
      attrs: { refrescancia: 96, burbuja: 89, dulzura: 80, rotacion: 90 },
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
      tag: '🍍 Tropical Caribeño',
      category: 'frutal',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_pina.jpg',
      desc: 'El sabor del caribe con piña miel jugosa y dulce. El acompañante estrella para ventas en panaderías, pizzerías y comida rápida.',
      color: '#eab308',
      attrs: { refrescancia: 94, burbuja: 87, dulzura: 91, rotacion: 91 },
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
      tag: '✨ Exótico & Diferenciador',
      category: 'frutal',
      presentation: 'Bulto 6x 2L (12 Litros)',
      image: 'assets/product_maracuya.jpg',
      desc: 'La fruta de la pasión en su máxima expresión efervescente. Cítrico, aromático y exótico que destaca en vitrina.',
      color: '#fbbf24',
      attrs: { refrescancia: 97, burbuja: 92, dulzura: 83, rotacion: 93 },
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

  // -------------------------------------------------------------
  // DISTRIBUTION DIRECTORY (ZONAS DONDE SE CONSIGUE COOL COLA)
  // -------------------------------------------------------------
  const ZONES = [
    {
      id: 'caracas-este',
      region: 'caracas',
      regionTag: 'DISTRITO CAPITAL',
      cadenceTag: 'RUTA DIARIA',
      title: 'Caracas — Eje Este & Sucre',
      places: 'Petare, Boleíta, Los Ruices, La California, Sebucán, Palo Verde, Los Dos Caminos, El Marqués, Macaracuay.',
      pointsCount: '+180 Abastos & Bodegas',
      deliveryTime: 'Despacho diario en 24h',
      status: 'Ruta Activa • Lunes a Sábado'
    },
    {
      id: 'caracas-centro',
      region: 'caracas',
      regionTag: 'DISTRITO CAPITAL',
      cadenceTag: 'RUTA DIARIA',
      title: 'Caracas — Chacao, Baruta & Centro',
      places: 'Chacao, Las Mercedes, El Rosal, Sabana Grande, Bello Monte, La Trinidad, Baruta, El Hatillo, San Bernardino.',
      pointsCount: '+140 Minimarkets & Comercios',
      deliveryTime: 'Despacho diario en 24h',
      status: 'Ruta Activa • Lunes a Sábado'
    },
    {
      id: 'caracas-oeste',
      region: 'caracas',
      regionTag: 'DISTRITO CAPITAL',
      cadenceTag: 'RUTA DIARIA',
      title: 'Caracas — Eje Oeste & Libertador',
      places: 'Catia, Propatria, 23 de Enero, El Valle, Coche, San Martín, El Paraíso, La Pastora, Montalbán, Caricuao.',
      pointsCount: '+160 Bodegas de Alta Rotación',
      deliveryTime: 'Despacho diario en 24h',
      status: 'Ruta Activa • Lunes a Sábado'
    },
    {
      id: 'miranda-guarenas',
      region: 'miranda',
      regionTag: 'ESTADO MIRANDA',
      cadenceTag: 'RUTA 5 DÍAS',
      title: 'Guarenas — Guatire & Valle Arriba',
      places: 'Casco Central Guarenas, Nueva Casarapa, Trapichito, Castillejo, La Villa, Valle Arriba, Guatire Centro, Buenaventura.',
      pointsCount: '+75 Comercios Aliados',
      deliveryTime: 'Despacho 24h a 48h',
      status: 'Ruta Activa • Lunes a Viernes'
    },
    {
      id: 'miranda-altos',
      region: 'miranda',
      regionTag: 'ESTADO MIRANDA',
      cadenceTag: 'RUTA FRECUENTE',
      title: 'Altos Mirandinos',
      places: 'Los Teques, San Antonio de los Altos, Carrizal, El Tambor, La Cascada, Montaña Alta, Corralito.',
      pointsCount: '+50 Puntos de Venta',
      deliveryTime: 'Martes, Jueves y Sábados',
      status: 'Ruta Activa • 3x Semana'
    },
    {
      id: 'miranda-tuy',
      region: 'miranda',
      regionTag: 'ESTADO MIRANDA',
      cadenceTag: 'RUTA MAYORISTA',
      title: 'Valles del Tuy',
      places: 'Charallave, Cúa, Santa Teresa del Tuy, Ocumare del Tuy, San Francisco de Yare, Santa Lucía.',
      pointsCount: '+60 Abastos y Mayoristas',
      deliveryTime: 'Lunes, Miércoles y Viernes',
      status: 'Ruta Activa • 3x Semana'
    },
    {
      id: 'laguaira-central',
      region: 'laguaira',
      regionTag: 'ESTADO LA GUAIRA',
      cadenceTag: 'RUTA COSTERA',
      title: 'La Guaira — Litoral Central',
      places: 'Catia La Mar, Maiquetía, La Guaira Centro, Macuto, Caraballeda, Tanaguarena, Naiguatá.',
      pointsCount: '+65 Puntos de Venta',
      deliveryTime: 'Miércoles, Viernes y Sábados',
      status: 'Ruta Activa • 3x Semana'
    },
    {
      id: 'aragua-maracay',
      region: 'aragua-carabobo',
      regionTag: 'ESTADO ARAGUA',
      cadenceTag: 'CENTRO DE ACOPIO',
      title: 'Maracay & Eje Central Aragüeño',
      places: 'Maracay Centro, Girardot, El Limón, Turmero, Cagua, Palo Negro, Santa Cruz, La Victoria.',
      pointsCount: '+90 Puntos Mayoristas',
      deliveryTime: 'Despacho continuo en 24h-48h',
      status: 'Ruta Activa • Lunes a Sábado'
    },
    {
      id: 'carabobo-valencia',
      region: 'aragua-carabobo',
      regionTag: 'ESTADO CARABOBO',
      cadenceTag: 'RED INDUSTRIAL',
      title: 'Valencia & Eje Carabobeño',
      places: 'Valencia Centro, Naguanagua, San Diego, Guacara, Los Guayos, Tocuyito, Puerto Cabello.',
      pointsCount: '+85 Distribuidores & Abastos',
      deliveryTime: 'Despacho continuo en 24h-48h',
      status: 'Ruta Activa • Lunes a Sábado'
    }
  ];

  // -------------------------------------------------------------
  // STATE MANAGEMENT
  // -------------------------------------------------------------
  let framesCache = [];
  let loadedFramesCount = 0;
  let currentFrameIndex = 0;
  let targetFrameIndex = 0;
  let isCanvasReady = false;
  let activeQuickQuoteProduct = PRODUCTS[0];
  let activeMilestoneIndex = 0;

  // -------------------------------------------------------------
  // DOM REFERENCES
  // -------------------------------------------------------------
  const canvas = document.getElementById('story-canvas');
  const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
  const scrollyTrack = document.getElementById('scrolly-track');
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = document.getElementById('progress-percent');
  const siteHeader = document.getElementById('site-header');

  // HUD elements
  const hudChapterText = document.getElementById('hud-chapter-text');
  const hudProgressCircle = document.getElementById('hud-progress-circle');
  const hudProgressNum = document.getElementById('hud-progress-num');
  const specFlavorTag = document.getElementById('spec-flavor-tag');
  const specFlavorTitle = document.getElementById('spec-flavor-title');
  const specFlavorDesc = document.getElementById('spec-flavor-desc');
  const specMeterRefrescancia = document.getElementById('spec-meter-refrescancia');
  const specValRefrescancia = document.getElementById('spec-val-refrescancia');
  const specMeterBurbuja = document.getElementById('spec-meter-burbuja');
  const specValBurbuja = document.getElementById('spec-val-burbuja');
  const specMeterIntensidad = document.getElementById('spec-meter-intensidad');
  const specValIntensidad = document.getElementById('spec-val-intensidad');
  const specB2bBtn = document.getElementById('spec-b2b-btn');

  // Milestones
  const milestones = [
    document.getElementById('milestone-1'),
    document.getElementById('milestone-2'),
    document.getElementById('milestone-3'),
    document.getElementById('milestone-4'),
    document.getElementById('milestone-5')
  ];

  // B2B Wholesale Form Elements
  const b2bSendWaBtn = document.getElementById('b2b-send-wa-btn');
  const b2bBusinessType = document.getElementById('b2b-business-type');
  const b2bZoneSelect = document.getElementById('b2b-zone-select');
  const b2bVolumeSelect = document.getElementById('b2b-volume-select');
  const b2bBusinessName = document.getElementById('b2b-business-name');

  // Modals & UI Actions
  const nutritionModal = document.getElementById('nutrition-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalB2bQuoteBtn = document.getElementById('modal-b2b-quote-btn');
  const viewModeBtn = document.getElementById('view-mode-btn');

  // -------------------------------------------------------------
  // AUDIO FEEDBACK (CLEAN & SUBTLE)
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
      osc.frequency.setValueAtTime(520 + Math.random() * 150, now);
      osc.frequency.exponentialRampToValueAtTime(820 + Math.random() * 200, now + 0.07);
      gain.gain.setValueAtTime(0.10, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {
      // Browser autoplay policy
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
  // FRAME PRELOADER ENGINE (75 FRAMES)
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
        // Fallback for missing frame
        loadedFramesCount++;
        if (loadedFramesCount === TOTAL_FRAMES) {
          onAllFramesLoaded();
        }
      };
    }
  }

  function renderInitialFrame(img) {
    if (!canvas || !ctx) return;
    resizeCanvas();
    drawFrameToCanvas(img);
    isCanvasReady = true;
    startRenderLoop();
  }

  function onAllFramesLoaded() {
    resizeCanvas();
    renderFrame(Math.round(currentFrameIndex));
  }

  // -------------------------------------------------------------
  // CANVAS RENDERING ENGINE (RETINA HIGH-DPI & ASPECT RATIO)
  // -------------------------------------------------------------
  function resizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for mobile efficiency
    const rect = canvas.getBoundingClientRect();

    const w = rect.width || window.innerWidth;
    const h = rect.height || window.innerHeight;

    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    renderFrame(Math.round(currentFrameIndex));
  });

  function drawFrameToCanvas(img) {
    if (!canvas || !ctx || !img) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Fill crisp clean white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cw, ch);

    const iw = img.naturalWidth || 1920;
    const ih = img.naturalHeight || 1080;

    // On mobile portrait, COVER mode centered; on desktop landscape, CONTAIN mode
    const isMobilePortrait = ch > cw;
    let renderW, renderH, offsetX, offsetY;

    if (isMobilePortrait) {
      // Cover mode: fill viewport with slight zoom to make 3D bottle prominent
      const scale = Math.max(cw / iw, ch / ih);
      renderW = iw * scale;
      renderH = ih * scale;
      offsetX = (cw - renderW) / 2;
      offsetY = (ch - renderH) / 2;
    } else {
      // Desktop Contain mode: preserve full 1080p frame
      const scale = Math.min(cw / iw, ch / ih);
      renderW = iw * scale;
      renderH = ih * scale;
      offsetX = (cw - renderW) / 2;
      offsetY = (ch - renderH) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }

  function renderFrame(index) {
    const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
    const img = framesCache[safeIndex];
    if (img && img.complete) {
      drawFrameToCanvas(img);
    }
  }

  // -------------------------------------------------------------
  // SCROLL SCROLLYTELLING TRACKING & LERP 60FPS LOOP
  // -------------------------------------------------------------
  function calculateScrollProgress() {
    if (!scrollyTrack) return 0;
    const rect = scrollyTrack.getBoundingClientRect();
    const trackHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const scrolled = -rect.top;
    const scrollableDistance = trackHeight - viewportHeight;

    if (scrollableDistance <= 0) return 0;
    const progress = scrolled / scrollableDistance;
    return Math.max(0, Math.min(1, progress));
  }

  function updateHUD(progress) {
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
        desc: '8 sabores únicos listos para surtir abastos, bodegas y distribuidores.',
        refrescancia: 98,
        burbuja: 95,
        intensidad: 'Alta',
        product: PRODUCTS[0]
      });
    } else if (progress < 0.44) {
      chapterNum = 2;
      chapterTitle = 'Cool Limón Cítrico Extremo';
      milestoneIdx = 1;
      updateSpecCard({
        tag: '🍋 2L CÍTRICO',
        title: 'Cool Limón Polar',
        desc: 'Lima-limón natural con toque ácido perfecto. El de mayor venta en verano.',
        refrescancia: 100,
        burbuja: 94,
        intensidad: 'Top Venta',
        product: PRODUCTS[1]
      });
    } else if (progress < 0.66) {
      chapterNum = 3;
      chapterTitle = 'Cool Naranja Valenciana';
      milestoneIdx = 2;
      updateSpecCard({
        tag: '🍊 2L MÁS VENDIDO',
        title: 'Cool Naranja Jugosa',
        desc: 'Dulzura frutal equilibrada y chispa cítrica en fardos sellados de 6 unidades.',
        refrescancia: 95,
        burbuja: 90,
        intensidad: 'Alta',
        product: PRODUCTS[2]
      });
    } else if (progress < 0.86) {
      chapterNum = 4;
      chapterTitle = 'Cool Uva Inconfundible';
      milestoneIdx = 3;
      updateSpecCard({
        tag: '🍇 2L FAVORITO',
        title: 'Cool Uva Morada',
        desc: 'Efervescencia dulce que cautiva. Máxima rotación comercial en refrigerador.',
        refrescancia: 92,
        burbuja: 91,
        intensidad: 'Estrella',
        product: PRODUCTS[3]
      });
    } else {
      chapterNum = 5;
      chapterTitle = 'El Lineup Oficial 2L';
      milestoneIdx = 4;
      updateSpecCard({
        tag: '👑 LA FAMILIA COOL',
        title: '8 Sabores Disponibles',
        desc: 'Cola Negra, Limón, Naranja, Uva, Roja, Manzana, Piña y Maracuyá por bulto.',
        refrescancia: 99,
        burbuja: 96,
        intensidad: 'Completa',
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

    if (specValIntensidad) specValIntensidad.textContent = data.intensidad;

    activeQuickQuoteProduct = data.product;
  }

  // Spec Card Quick WhatsApp Button
  if (specB2bBtn) {
    specB2bBtn.addEventListener('click', () => {
      const prod = activeQuickQuoteProduct || PRODUCTS[0];
      const message = `Hola Cool Cola, tengo un negocio y deseo cotizar bultos de *${prod.name}* (presentación 6x 2L). ¿Me indican lista de precios y condiciones de entrega?`;
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      playBubblePopSound();
    });
  }

  // Header Sticky Effect on Scroll
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // -------------------------------------------------------------
  // RENDER LOOP (BUTTERY SMOOTH 60FPS LERP INTERPOLATION)
  // -------------------------------------------------------------
  function startRenderLoop() {
    function tick() {
      const progress = calculateScrollProgress();
      targetFrameIndex = progress * (TOTAL_FRAMES - 1);

      // Instant react on frame 2 without dead zone: LERP interpolation
      const prevFrame = Math.round(currentFrameIndex);
      currentFrameIndex += (targetFrameIndex - currentFrameIndex) * LERP_FACTOR;
      const nextFrame = Math.round(currentFrameIndex);

      if (prevFrame !== nextFrame) {
        renderFrame(nextFrame);
      }

      updateHUD(progress);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // -------------------------------------------------------------
  // PRODUCT CATALOG RENDERING (B2B FOCUS)
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
            <span class="bottle-volume-tag">${p.presentation}</span>
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
              <span class="attr-label">Rotación en Anaquel</span>
              <div class="attr-track"><div class="attr-fill" style="width: ${p.attrs.rotacion}%; background: ${p.color};"></div></div>
              <span class="attr-val">${p.attrs.rotacion}%</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="card-price-box">
              <span class="price-unit-label">Ventas al Mayor</span>
              <span class="card-price">Fardo 6x 2L</span>
            </div>
            <div class="card-action-btns">
              <button class="btn-info-modal" data-modal-id="${p.id}" title="Ficha Técnica y Nutricional">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </button>
              <button class="btn-card-add b2b-quote-btn" data-quote-id="${p.id}" title="Solicitar lista de precios por bulto">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/>
                </svg>
                <span>Precios por Bulto</span>
              </button>
            </div>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Catalog Filter Pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
      playBubblePopSound();
    });
  });

  // Global Product Actions Delegation
  document.addEventListener('click', (e) => {
    // Quote flavor by bulto
    const quoteBtn = e.target.closest('[data-quote-id]');
    if (quoteBtn) {
      const pid = quoteBtn.getAttribute('data-quote-id');
      const prod = PRODUCTS.find(p => p.id === pid);
      if (prod) {
        const message = `Hola Cool Cola, tengo un negocio y deseo cotizar bultos de *${prod.name}* (6x 2L). ¿Me indican precio por mayor y condiciones de despacho?`;
        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
        playBubblePopSound();
      }
      return;
    }

    // Open Nutrition / Spec Modal
    const modalBtn = e.target.closest('[data-modal-id]');
    if (modalBtn) {
      const pid = modalBtn.getAttribute('data-modal-id');
      openNutritionModal(pid);
      return;
    }

    // Quote specific zone dispatch
    const zoneQuoteBtn = e.target.closest('[data-zone-id]');
    if (zoneQuoteBtn) {
      const zid = zoneQuoteBtn.getAttribute('data-zone-id');
      const zone = ZONES.find(z => z.id === zid);
      if (zone) {
        const message = `Hola Cool Cola, tengo un comercio en *${zone.title}* (${zone.regionTag}) y deseo solicitar lista de precios por bulto y coordinar despacho en mi sector.`;
        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
        playBubblePopSound();
      }
      return;
    }
  });

  // -------------------------------------------------------------
  // DISTRIBUTION ZONES RENDERING & FILTERING
  // -------------------------------------------------------------
  const zonesGrid = document.getElementById('zones-grid');

  function renderZones(filter = 'all') {
    if (!zonesGrid) return;
    zonesGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? ZONES
      : ZONES.filter(z => z.region === filter);

    filtered.forEach(z => {
      const card = document.createElement('div');
      card.className = 'zone-card';
      card.innerHTML = `
        <div class="zone-card-header">
          <span class="zone-region-tag">${z.regionTag}</span>
          <span class="zone-status-badge">
            <span class="zone-live-pulse"></span>
            ${z.cadenceTag}
          </span>
        </div>
        <h3 class="zone-card-title">${z.title}</h3>
        <p class="zone-card-places"><strong>Sectores con ruta:</strong> ${z.places}</p>
        
        <div class="zone-metrics-row">
          <div class="zone-metric-item">
            <span class="metric-icon">🏪</span>
            <span>${z.pointsCount}</span>
          </div>
          <div class="zone-metric-item">
            <span class="metric-icon">🚚</span>
            <span>${z.deliveryTime}</span>
          </div>
        </div>

        <div class="zone-card-footer">
          <span class="zone-active-label">${z.status}</span>
          <button class="btn-zone-request" data-zone-id="${z.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/>
            </svg>
            <span>Pedir Despacho en mi Zona</span>
          </button>
        </div>
      `;
      zonesGrid.appendChild(card);
    });
  }

  // Zone Filter Buttons
  document.querySelectorAll('.zone-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.zone-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderZones(btn.dataset.zone);
      playBubblePopSound();
    });
  });

  // -------------------------------------------------------------
  // B2B QUICK QUOTE BUILDER FORM
  // -------------------------------------------------------------
  if (b2bSendWaBtn) {
    b2bSendWaBtn.addEventListener('click', () => {
      const businessType = b2bBusinessType ? b2bBusinessType.value : 'Abasto / Bodega';
      const zone = b2bZoneSelect ? b2bZoneSelect.value : 'Gran Caracas';
      const volume = b2bVolumeSelect ? b2bVolumeSelect.value : '5 a 20 Bultos';
      const businessName = b2bBusinessName && b2bBusinessName.value.trim() 
        ? b2bBusinessName.value.trim() 
        : 'Comercio Aliado';

      let message = `🧊 *SOLICITUD DE LISTA DE PRECIOS POR BULTO — COOL COLA 2L* 🧊\n\n`;
      message += `🏢 *Negocio / Contacto:* ${businessName}\n`;
      message += `🏬 *Tipo de Comercio:* ${businessType}\n`;
      message += `📍 *Ubicación / Sector:* ${zone}\n`;
      message += `📦 *Volumen Estimado:* ${volume}\n\n`;
      message += `Deseo recibir la lista oficial de precios por bulto (6x 2L), condiciones de despacho y requisitos para ser punto de venta oficial. ¡Gracias!`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      playBubblePopSound();
    });
  }

  // -------------------------------------------------------------
  // TECHNICAL & NUTRITIONAL MODAL LOGIC
  // -------------------------------------------------------------
  let activeModalProduct = null;

  function openNutritionModal(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    activeModalProduct = prod;
    document.getElementById('modal-flavor-badge').textContent = prod.name;
    document.getElementById('modal-flavor-title').textContent = `Ficha Técnica & Nutricional B2B`;
    document.getElementById('modal-ingredients-text').textContent = prod.ingredients;

    const rowsContainer = document.getElementById('modal-nutrition-rows');
    rowsContainer.innerHTML = `
      <tr><td>Presentación Comercial</td><td><strong>Bulto Sellado (6x 2L)</strong></td><td>12 Litros</td></tr>
      <tr><td>Valor Energético</td><td><strong>${prod.nutrition.calorias}</strong></td><td>4% VD</td></tr>
      <tr><td>Carbohidratos Totales</td><td><strong>${prod.nutrition.carbohidratos}</strong></td><td>7% VD</td></tr>
      <tr><td>Azúcares Totales</td><td><strong>${prod.nutrition.azucares}</strong></td><td>24% VD</td></tr>
      <tr><td>Grasas Totales</td><td><strong>${prod.nutrition.grasas}</strong></td><td>0%</td></tr>
      <tr><td>Sodio</td><td><strong>${prod.nutrition.sodio}</strong></td><td>1%</td></tr>
      <tr><td>Cafeína</td><td><strong>${prod.nutrition.cafeina}</strong></td><td>-</td></tr>
    `;

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

  if (modalB2bQuoteBtn) {
    modalB2bQuoteBtn.addEventListener('click', () => {
      if (activeModalProduct) {
        const message = `Hola Cool Cola, tengo un negocio y deseo cotizar bultos de *${activeModalProduct.name}* (presentación 6x 2L). ¿Me indican precios y tiempos de despacho?`;
        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
        playBubblePopSound();
        closeNutritionModal();
      }
    });
  }

  // -------------------------------------------------------------
  // INITIALIZATION
  // -------------------------------------------------------------
  function init() {
    renderProducts();
    renderZones();
    preloadFrames();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

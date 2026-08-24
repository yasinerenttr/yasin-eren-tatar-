import './style.css';

// ===== DATA STORE (localStorage) =====
const STORE_KEYS = {
  PROJECTS: 'portfolio_projects',
  EDUCATION: 'portfolio_education',
  SKILLS: 'portfolio_skills',
  EXPERIENCE: 'portfolio_experience',
  MESSAGES: 'portfolio_messages',
  CV: 'portfolio_cv',
  CV_NAME: 'portfolio_cv_name',
  PROFILE: 'portfolio_profile',
  AUTH: 'portfolio_auth',
};

const DEFAULT_PROFILE = {
  name: 'Yasin Eren Tatar',
  title: 'Yazılım Geliştirici & Siber Güvenlik',
  subtitle: 'Modern web ve mobil teknolojileri ile güvenli, ölçeklenebilir ve yüksek performanslı dijital çözümler geliştiriyorum.',
  email: 'tataryasineren@gmail.com',
  phone: '+90 555 000 00 00',
  location: 'Türkiye / İstanbul',
  github: 'https://github.com/yasinerenttr',
  linkedin: 'https://www.linkedin.com/in/yasin-tatar-74a814372/?locale=tr',
};

const DEFAULT_PROJECTS = [
  { title: 'neyapsak', description: 'Mobil uygulama Apple ve Play Store\'da yayında. Şehirdeki gizli saklanmış kafeleri bulabilirsiniz.', tags: ['React Native', 'Python', 'MongoDB', 'Expo'] },
  { title: 'qres', description: 'Kafe ve restoranlar için yaptığım çalışma. Hem mobil hem de web tabanlı yayında.', tags: ['Node.js', 'React', 'Socket.IO', 'Python', 'MongoDB'] },
  { title: 'izle', description: 'Arkadaşlarınızla grup olarak webden senkronize film ve dizi izleme platformu.', tags: ['JavaScript', 'Python', 'React'] },
  { title: 'randevu', description: 'İşletmeler ve müşteriler için online randevu ve takvim yönetim sistemi (yayında).', tags: ['React', 'Node.js', 'Python', 'HTML', 'CSS'] },
  { title: 'sözleşme', description: 'Gelinlik sahibine yaptığım uzaktan sözleşme; sadece sözleşme değil gelir-gider ve müşteri yönetim paneli.', tags: ['Node.js', 'Python', 'React', 'MongoDB'] },
  { title: 'avelon', description: 'Kendi yapay zeka projemdir. Derin öğrenme (Deep Learning) mimarisiyle eğitilmektedir.', tags: ['Python', 'Deep Learning', 'PyTorch', 'REST API'] },
  { title: 'coffe menü', description: 'Bir özel işletmeye yaptığım dijital ve dinamik QR menü sistemi.', tags: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'neoleap', description: 'Oyun: Kare bir karakterin düşmanlardan kaçtığı dinamik 2D oyun.', tags: ['JavaScript', 'HTML5 Canvas', 'Game Dev'] },
  { title: 'hatıralar', description: 'Arkadaşlarınızla anılarınızı ve fotoğraflarınızı paylaşıp saklayabileceğiniz sosyal platform.', tags: ['React', 'Node.js', 'MongoDB'] }
];

const DEFAULT_EXPERIENCE = [
  { company: 'Freelance & Özel Müşteri Projeleri', position: 'Full-Stack Developer', date: '2023 - Halen', description: 'İşletmelere özel restoran otomasyonları (QRes), uzaktan sözleşme takip sistemleri ve mobil uygulamalar geliştirdim.' },
  { company: 'Neyapsak App & Dijital Sistemler', position: 'Mobile & Web Developer', date: '2022 - 2023', description: 'React Native ve Python backend altyapısı ile şehir rehberi mobil uygulamasını uçtan uca hayata geçirdim.' },
  { company: 'Avelon AI & Siber Güvenlik Ar-Ge', position: 'AI & Security Researcher', date: '2021 - 2022', description: 'Yapay zeka modelleri, güvenli API mimarileri ve veri tabanı koruma sistemleri üzerine çalışmalar yaptım.' }
];

const DEFAULT_EDUCATION = [
  { title: 'Yazılım Geliştirme & Siber Güvenlik', school: 'Eğitim & Sertifika Programları', date: '2020 - 2024' },
  { title: 'Full-Stack Web & Mobile Development', school: 'İleri Seviye Geliştirici Eğitimi', date: '2023' },
  { title: 'Python & Derin Öğrenme (Deep Learning)', school: 'Yapay Zeka ve Makine Öğrenimi', date: '2023' },
  { title: 'Modern React & Node.js Mimarisi', school: 'Web Teknolojileri Uzmanlığı', date: '2022' },
  { title: 'Ağ & Web Sistemleri Güvenliği', school: 'Siber Güvenlik Eğitimi', date: '2022' },
  { title: 'Veritabanı Yönetimi & Modelleme (MongoDB/SQL)', school: 'Veri Tabanı Mimarisi', date: '2021' },
  { title: 'Mobil Uygulama Mimarisi (React Native & Expo)', school: 'Mobil Sistemler', date: '2021' }
];

const DEFAULT_SKILLS = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React.js / Frontend', level: 90 },
  { name: 'Node.js / Express Backend', level: 90 },
  { name: 'Python / AI & Deep Learning', level: 85 },
  { name: 'React Native / Expo Mobil', level: 85 },
  { name: 'MongoDB / Veritabanı', level: 90 },
  { name: 'Siber Güvenlik & Güvenli Auth', level: 85 },
  { name: 'REST API & Socket.IO', level: 90 },
  { name: 'HTML5 & Modern CSS3', level: 95 },
  { name: 'Git & GitHub Versiyonlama', level: 90 },
  { name: 'Linux & Sunucu Yönetimi', level: 80 },
  { name: 'UI / UX & Responsive Tasarım', level: 90 }
];

function getStore(key, fallback = []) {
  try {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
  } catch {}
  
  if (key === STORE_KEYS.PROJECTS) return DEFAULT_PROJECTS;
  if (key === STORE_KEYS.EXPERIENCE) return DEFAULT_EXPERIENCE;
  if (key === STORE_KEYS.EDUCATION) return DEFAULT_EDUCATION;
  if (key === STORE_KEYS.SKILLS) return DEFAULT_SKILLS;
  if (key === STORE_KEYS.PROFILE) return DEFAULT_PROFILE;
  return fallback;
}

function setStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getProfile() {
  return getStore(STORE_KEYS.PROFILE, DEFAULT_PROFILE);
}

// ===== ICONS (Clean SVG) =====
const ICONS = {
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  code: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  send: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  lock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  folder: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  briefcase: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  graduation: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  zap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  fileText: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  message: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  logOut: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  upload: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
};

// ===== ROUTER =====
function getRoute() {
  const hash = window.location.hash.slice(1);
  if (hash) return hash;
  const path = window.location.pathname;
  if (path && path !== '/') return path;
  return '/';
}

function navigate(path) {
  if (path.startsWith('#')) {
    window.location.hash = path;
  } else {
    window.location.hash = '#' + path;
  }
}

// ===== PARTICLES =====
function initParticles(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: count }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.05 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== SKILL BAR ANIMATION =====
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) {
          fill.style.width = fill.dataset.width;
        }
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.hero-stat-number').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const increment = target > 0 ? target / 60 : 0;
    if (target === 0) {
      el.textContent = '0' + suffix;
      return;
    }
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 25);
  });
}

// ===== TOAST =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CV DOWNLOAD =====
function downloadCV() {
  const cvData = localStorage.getItem(STORE_KEYS.CV);
  const cvName = localStorage.getItem(STORE_KEYS.CV_NAME) || 'cv.pdf';
  if (!cvData) {
    showToast('CV henüz yüklenmedi');
    return;
  }
  const link = document.createElement('a');
  link.href = cvData;
  link.download = cvName;
  link.click();
  showToast('CV indiriliyor...');
}

// ===== PROJECT EMOJI HELPER =====
const DEFAULT_PROJECT_ICONS = ['🚀', '💻', '⚡', '📱', '🌐', '🎮', '🤖', '🔮', '🎨', '🔥', '🛡️', '📊'];

function getProjectEmoji(project, index) {
  if (project && project.icon) return project.icon;
  const title = (project?.title || '').toLowerCase();
  const desc = (project?.description || '').toLowerCase();
  const text = title + ' ' + desc;

  if (text.includes('coffe') || text.includes('kahve') || text.includes('cafe')) return '☕';
  if (text.includes('izle') || text.includes('film') || text.includes('dizi') || text.includes('video')) return '🎬';
  if (text.includes('qres') || text.includes('restoran') || text.includes('restaurant') || text.includes('menü') || text.includes('menu')) return '🍽️';
  if (text.includes('randevu') || text.includes('takvim') || text.includes('appointment')) return '📅';
  if (text.includes('sözleşme') || text.includes('belge') || text.includes('contract')) return '📜';
  if (text.includes('avelon') || text.includes('yapay zeka') || text.includes('deep learn') || text.includes('ai') || text.includes('model')) return '🤖';
  if (text.includes('oyun') || text.includes('game') || text.includes('leap')) return '🎮';
  if (text.includes('hatıra') || text.includes('fotoğraf') || text.includes('anı')) return '📸';
  if (text.includes('mobil') || text.includes('app') || text.includes('ios') || text.includes('android')) return '📱';
  if (text.includes('siber') || text.includes('güvenlik') || text.includes('security')) return '🛡️';
  if (text.includes('web') || text.includes('site')) return '🌐';

  return DEFAULT_PROJECT_ICONS[index % DEFAULT_PROJECT_ICONS.length];
}

// ===== PORTFOLIO PAGE =====
function renderPortfolio() {
  const profile = getProfile();
  const projects = getStore(STORE_KEYS.PROJECTS);
  const education = getStore(STORE_KEYS.EDUCATION);
  const skills = getStore(STORE_KEYS.SKILLS);
  const experience = getStore(STORE_KEYS.EXPERIENCE);
  const hasCV = !!localStorage.getItem(STORE_KEYS.CV);

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="bg-orbs">
      <div class="bg-orb"></div>
      <div class="bg-orb"></div>
      <div class="bg-orb"></div>
    </div>
    <div class="grid-overlay"></div>
    <canvas id="particles-canvas"></canvas>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="#/" class="nav-logo">
          <div class="nav-logo-icon">YE</div>
          <span>${profile.name.split(' ').slice(0, 2).join(' ')}</span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="#hero" class="nav-link active" data-section="hero">Ana Sayfa</a>
          <a href="#projects" class="nav-link" data-section="projects">Projeler</a>
          <a href="#education" class="nav-link" data-section="education">Eğitim</a>
          <a href="#experience" class="nav-link" data-section="experience">Deneyim</a>
          <a href="#skills" class="nav-link" data-section="skills">Yetenekler</a>
          <a href="#contact" class="nav-link" data-section="contact">İletişim</a>
          ${hasCV ? `<button class="nav-btn-cv" id="nav-cv-btn">
            ${ICONS.download} CV İndir
          </button>` : ''}
        </div>
        <div class="nav-mobile-toggle" id="mobile-toggle">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero" id="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          Yeni projelere açık
        </div>
        <h1 class="hero-title">
          Merhaba, Ben<br>
          <span class="hero-title-gradient">${profile.name}</span>
        </h1>
        <p class="hero-subtitle">${profile.subtitle}</p>
        <div class="hero-actions">
          ${hasCV ? `<button class="btn-primary" id="hero-cv-btn">
            ${ICONS.download} CV İndir
          </button>` : ''}
          <a href="#projects" class="btn-secondary">
            Projelerimi Gör
          </a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${projects.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Proje</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${experience.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Şirket</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${education.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Eğitim</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${skills.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Yetenek</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    ${projects.length > 0 ? `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Portföy</div>
          <h2 class="section-title">Projelerim</h2>
          <p class="section-desc">Geliştirdiğim projeler ve üzerinde çalıştığım teknolojiler</p>
        </div>
        <div class="projects-grid">
          ${projects.map((p, i) => `
            <div class="project-card animate-on-scroll" style="animation-delay: ${i * 0.1}s">
              <div class="project-icon" style="font-size: 1.8rem; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(108,99,255,0.15); border-radius: 12px; margin-bottom: 16px;">
                ${getProjectEmoji(p, i)}
              </div>
              <h3 class="project-title">${escapeHTML(p.title)}</h3>
              <p class="project-desc">${escapeHTML(p.description)}</p>
              <div class="project-tags">
                ${(p.tags || []).map(t => `<span class="project-tag">${escapeHTML(t)}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <!-- Experience (Çalıştığım Şirketler) -->
    ${experience.length > 0 ? `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Deneyim</div>
          <h2 class="section-title">Çalıştığım Şirketler & Deneyim</h2>
          <p class="section-desc">Profesyonel iş deneyimlerim, görev aldığım şirketler ve projeler</p>
        </div>
        <div class="education-timeline">
          ${experience.map((exp, i) => `
            <div class="education-item animate-on-scroll" style="animation-delay: ${i * 0.15}s">
              <div class="education-dot"></div>
              <div class="education-card" style="border-left: 3px solid var(--accent-secondary);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
                  <h3 class="education-title" style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">
                    ${escapeHTML(exp.company)}
                  </h3>
                  <div class="education-date" style="background: rgba(0,212,170,0.1); color: var(--accent-secondary); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">
                    ${escapeHTML(exp.date)}
                  </div>
                </div>
                <div style="font-size: 1rem; font-weight: 600; color: var(--accent-primary); margin-bottom: 8px;">
                  💼 ${escapeHTML(exp.position)}
                </div>
                ${exp.description ? `<p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.6;margin-top:6px;">${escapeHTML(exp.description)}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <!-- Education -->
    ${education.length > 0 ? `
    <section class="section" id="education">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Eğitim</div>
          <h2 class="section-title">Eğitim & Sertifikalar</h2>
          <p class="section-desc">Aldığım eğitimler ve kazandığım sertifikalar</p>
        </div>
        <div class="education-timeline">
          ${education.map((e, i) => `
            <div class="education-item animate-on-scroll" style="animation-delay: ${i * 0.15}s">
              <div class="education-dot"></div>
              <div class="education-card">
                <div class="education-date">${escapeHTML(e.date)}</div>
                <h3 class="education-title">${escapeHTML(e.title)}</h3>
                <p class="education-school">${escapeHTML(e.school)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <!-- Skills -->
    ${skills.length > 0 ? `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Yetenekler</div>
          <h2 class="section-title">Teknik Yetenekler</h2>
          <p class="section-desc">Deneyimli olduğum teknolojiler ve araçlar</p>
        </div>
        <div class="skills-grid">
          ${skills.map((s, i) => `
            <div class="skill-card animate-on-scroll" style="animation-delay: ${i * 0.08}s">
              <div class="skill-name">
                <span>${escapeHTML(s.name)}</span>
                <span class="skill-level">${s.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" data-width="${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>` : ''}

    <!-- Contact -->
    <section class="section" id="contact">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">İletişim</div>
          <h2 class="section-title">İletişime Geçin</h2>
          <p class="section-desc">Birlikte çalışmak veya projeler hakkında görüşmek için mesaj bırakabilirsiniz.</p>
        </div>
        <div class="contact-grid animate-on-scroll">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">${ICONS.mail}</div>
              <div>
                <div class="contact-label">E-posta</div>
                <div class="contact-value">${escapeHTML(profile.email)}</div>
              </div>
            </div>
            ${profile.phone ? `
            <div class="contact-item">
              <div class="contact-icon">${ICONS.phone}</div>
              <div>
                <div class="contact-label">Telefon</div>
                <div class="contact-value">${escapeHTML(profile.phone)}</div>
              </div>
            </div>` : ''}
            <div class="contact-item">
              <div class="contact-icon">${ICONS.location}</div>
              <div>
                <div class="contact-label">Konum</div>
                <div class="contact-value">${escapeHTML(profile.location)}</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${ICONS.github}</div>
              <div>
                <div class="contact-label">GitHub</div>
                <div class="contact-value">${escapeHTML(profile.github)}</div>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <input type="text" class="form-input" id="contact-name" placeholder="Adınız" required>
            <input type="email" class="form-input" id="contact-email" placeholder="E-posta adresiniz" required>
            <textarea class="form-input" id="contact-message" placeholder="Mesajınız..." required></textarea>
            <button type="submit" class="btn-primary" style="justify-content: center;">
              ${ICONS.send} Gönder
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">© ${new Date().getFullYear()} <span>${profile.name}</span> — Tüm hakları saklıdır. <a href="#/avelon" style="opacity: 0.2; font-size: 0.75rem; margin-left: 10px; transition: opacity 0.2s; display: inline-flex; align-items: center;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.2" title="Admin">${ICONS.lock}</a></p>
    </footer>

    <!-- CV Float Button -->
    ${hasCV ? `
    <button class="cv-float-btn" id="cv-float-btn" title="CV İndir">
      ${ICONS.download}
      <div class="tooltip">CV İndir</div>
    </button>` : ''}
  `;

  // Init particles
  initParticles(document.getElementById('particles-canvas'));

  // Init scroll animations
  setTimeout(() => {
    initScrollAnimations();
    initSkillBars();
    initNavbarScroll();
    animateCounters();
  }, 100);

  // CV download buttons
  document.getElementById('hero-cv-btn')?.addEventListener('click', downloadCV);
  document.getElementById('nav-cv-btn')?.addEventListener('click', downloadCV);
  document.getElementById('cv-float-btn')?.addEventListener('click', downloadCV);

  // Mobile toggle
  document.getElementById('mobile-toggle')?.addEventListener('click', () => {
    document.getElementById('nav-links')?.classList.toggle('open');
  });

  // Contact form submit - save to Admin Messages
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const messages = getStore(STORE_KEYS.MESSAGES, []);
    const now = new Date();
    const dateStr = now.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    
    messages.unshift({
      id: Date.now(),
      name,
      email,
      message,
      date: dateStr,
      read: false
    });
    setStore(STORE_KEYS.MESSAGES, messages);

    showToast('Mesajınız başarıyla iletildi.');
    e.target.reset();
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('.nav-link[href^="#"], a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#') && target !== '#/' && target !== '#') {
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          document.getElementById('nav-links')?.classList.remove('open');
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('.hero, .section');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  });
}

// ===== ADMIN LOGIN =====
function renderAdminLogin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="bg-orbs">
      <div class="bg-orb"></div>
      <div class="bg-orb"></div>
      <div class="bg-orb"></div>
    </div>
    <div class="grid-overlay"></div>
    <canvas id="particles-canvas"></canvas>

    <div class="admin-login-page page-transition">
      <div class="admin-login-card">
        <div class="login-logo">
          <div class="login-logo-icon">${ICONS.lock}</div>
          <h2>Admin Girişi</h2>
          <p>Portföy yönetim paneline giriş yapın</p>
        </div>
        <form class="login-form" id="login-form">
          <div class="login-error" id="login-error">E-posta veya şifre hatalı!</div>
          <div class="login-input-group">
            <label>E-posta</label>
            <input type="email" class="login-input" id="login-email" placeholder="admin@email.com" required>
          </div>
          <div class="login-input-group">
            <label>Şifre</label>
            <input type="password" class="login-input" id="login-password" placeholder="••••••••" required>
          </div>
          <button type="submit" class="login-btn">Giriş Yap</button>
        </form>
      </div>
    </div>
  `;

  initParticles(document.getElementById('particles-canvas'));

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'eren@gmail.com' && password === '145304Eren:') {
      setStore(STORE_KEYS.AUTH, true);
      navigate('/avelon/dashboard');
    } else {
      document.getElementById('login-error').classList.add('show');
      setTimeout(() => document.getElementById('login-error').classList.remove('show'), 3000);
    }
  });
}

// ===== ADMIN DASHBOARD =====
let currentAdminTab = 'projects';

function renderAdminDashboard() {
  if (!getStore(STORE_KEYS.AUTH, false)) {
    navigate('/avelon');
    return;
  }

  const unreadMessagesCount = getStore(STORE_KEYS.MESSAGES, []).filter(m => !m.read).length;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="admin-layout page-transition">
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="admin-sidebar-logo">
          <div class="logo-icon">YE</div>
          <span>Admin Panel</span>
        </div>
        <nav class="admin-nav">
          <div class="admin-nav-item ${currentAdminTab === 'messages' ? 'active' : ''}" data-tab="messages">
            <span class="nav-icon">${ICONS.message}</span> Mesajlar
            ${unreadMessagesCount > 0 ? `<span style="margin-left:auto;background:var(--accent-secondary);color:#0a0a0f;font-weight:700;font-size:0.75rem;padding:2px 8px;border-radius:12px;">${unreadMessagesCount}</span>` : ''}
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'projects' ? 'active' : ''}" data-tab="projects">
            <span class="nav-icon">${ICONS.folder}</span> Projeler
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'education' ? 'active' : ''}" data-tab="education">
            <span class="nav-icon">${ICONS.graduation}</span> Eğitim
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'experience' ? 'active' : ''}" data-tab="experience">
            <span class="nav-icon">${ICONS.briefcase}</span> Deneyim
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'skills' ? 'active' : ''}" data-tab="skills">
            <span class="nav-icon">${ICONS.zap}</span> Yetenekler
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'cv' ? 'active' : ''}" data-tab="cv">
            <span class="nav-icon">${ICONS.fileText}</span> CV Yönetimi
          </div>
          <div class="admin-nav-item ${currentAdminTab === 'profile' ? 'active' : ''}" data-tab="profile">
            <span class="nav-icon">${ICONS.user}</span> Profil
          </div>
        </nav>
        <div class="admin-logout" id="admin-logout">
          <span class="nav-icon">${ICONS.logOut}</span> Çıkış Yap
        </div>
      </aside>

      <main class="admin-main" id="admin-main">
        <!-- Content loaded dynamically -->
      </main>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-content" id="modal-content"></div>
    </div>
  `;

  // Tab navigation
  document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      currentAdminTab = item.dataset.tab;
      renderAdminTab();
      document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Logout
  document.getElementById('admin-logout').addEventListener('click', () => {
    setStore(STORE_KEYS.AUTH, false);
    navigate('/avelon');
  });

  // Render current tab
  renderAdminTab();
}

function renderAdminTab() {
  const main = document.getElementById('admin-main');
  if (!main) return;

  switch (currentAdminTab) {
    case 'messages': renderAdminMessages(main); break;
    case 'projects': renderAdminProjects(main); break;
    case 'education': renderAdminEducation(main); break;
    case 'experience': renderAdminExperience(main); break;
    case 'skills': renderAdminSkills(main); break;
    case 'cv': renderAdminCV(main); break;
    case 'profile': renderAdminProfile(main); break;
  }
}

// ===== ADMIN: PROJECTS =====
function renderAdminProjects(container) {
  const projects = getStore(STORE_KEYS.PROJECTS);
  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Projeler</h1>
      <p class="admin-page-subtitle">Portföyünüzdeki projeleri yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Proje Listesi (${projects.length})</h3>
        <button class="admin-btn" id="add-project-btn">+ Yeni Proje</button>
      </div>
      <div id="projects-list">
        ${projects.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${ICONS.folder}</div>
            <p class="empty-state-text">Henüz proje eklenmemiş</p>
          </div>
        ` : projects.map((p, i) => `
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${escapeHTML(p.title)}</div>
              <div class="admin-list-item-subtitle">${escapeHTML(p.description.substring(0, 80))}...</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-project" data-index="${i}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-project" data-index="${i}">Sil</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('add-project-btn').addEventListener('click', () => showProjectModal());

  container.querySelectorAll('.edit-project').forEach(btn => {
    btn.addEventListener('click', () => showProjectModal(parseInt(btn.dataset.index)));
  });

  container.querySelectorAll('.delete-project').forEach(btn => {
    btn.addEventListener('click', () => {
      const projects = getStore(STORE_KEYS.PROJECTS);
      projects.splice(parseInt(btn.dataset.index), 1);
      setStore(STORE_KEYS.PROJECTS, projects);
      renderAdminProjects(container);
      showToast('Proje silindi');
    });
  });
}

function showProjectModal(editIndex = null) {
  const projects = getStore(STORE_KEYS.PROJECTS);
  const project = editIndex !== null ? projects[editIndex] : { title: '', description: '', tags: [] };
  const isEdit = editIndex !== null;

  const modal = document.getElementById('modal-content');
  const overlay = document.getElementById('modal-overlay');

  modal.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${isEdit ? 'Proje Düzenle' : 'Yeni Proje'}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="project-form">
      <div style="display: grid; grid-template-columns: 80px 1fr; gap: 12px;">
        <div class="admin-form-group">
          <label>İkon / Emoji</label>
          <input type="text" class="admin-input" id="project-icon" value="${escapeHTML(project.icon || '')}" placeholder="🚀" style="text-align: center; font-size: 1.2rem;">
        </div>
        <div class="admin-form-group">
          <label>Proje Adı</label>
          <input type="text" class="admin-input" id="project-title" value="${escapeHTML(project.title)}" placeholder="Proje adını girin" required>
        </div>
      </div>
      <div class="admin-form-group">
        <label>Açıklama</label>
        <textarea class="admin-input admin-textarea" id="project-desc" placeholder="Proje açıklaması" required>${escapeHTML(project.description)}</textarea>
      </div>
      <div class="admin-form-group">
        <label>Teknolojiler (virgülle ayırın)</label>
        <input type="text" class="admin-input" id="project-tags" value="${(project.tags || []).join(', ')}" placeholder="React, Node.js, MongoDB">
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${isEdit ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  `;

  overlay.classList.add('show');

  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });

  document.getElementById('project-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      icon: document.getElementById('project-icon').value.trim(),
      title: document.getElementById('project-title').value,
      description: document.getElementById('project-desc').value,
      tags: document.getElementById('project-tags').value.split(',').map(t => t.trim()).filter(Boolean),
    };

    if (isEdit) {
      projects[editIndex] = data;
    } else {
      projects.push(data);
    }
    setStore(STORE_KEYS.PROJECTS, projects);
    overlay.classList.remove('show');
    renderAdminProjects(document.getElementById('admin-main'));
    showToast(isEdit ? 'Proje güncellendi' : 'Proje eklendi');
  });
}

// ===== ADMIN: EDUCATION =====
function renderAdminEducation(container) {
  const education = getStore(STORE_KEYS.EDUCATION);
  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Eğitim</h1>
      <p class="admin-page-subtitle">Eğitim bilgilerinizi ve sertifikalarınızı yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Eğitim Listesi (${education.length})</h3>
        <button class="admin-btn" id="add-edu-btn">+ Yeni Eğitim</button>
      </div>
      <div id="edu-list">
        ${education.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${ICONS.graduation}</div>
            <p class="empty-state-text">Henüz eğitim eklenmemiş</p>
          </div>
        ` : education.map((e, i) => `
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${escapeHTML(e.title)}</div>
              <div class="admin-list-item-subtitle">${escapeHTML(e.school)} — ${escapeHTML(e.date)}</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-edu" data-index="${i}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-edu" data-index="${i}">Sil</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('add-edu-btn').addEventListener('click', () => showEduModal());

  container.querySelectorAll('.edit-edu').forEach(btn => {
    btn.addEventListener('click', () => showEduModal(parseInt(btn.dataset.index)));
  });

  container.querySelectorAll('.delete-edu').forEach(btn => {
    btn.addEventListener('click', () => {
      const education = getStore(STORE_KEYS.EDUCATION);
      education.splice(parseInt(btn.dataset.index), 1);
      setStore(STORE_KEYS.EDUCATION, education);
      renderAdminEducation(container);
      showToast('Eğitim silindi');
    });
  });
}

function showEduModal(editIndex = null) {
  const education = getStore(STORE_KEYS.EDUCATION);
  const edu = editIndex !== null ? education[editIndex] : { title: '', school: '', date: '' };
  const isEdit = editIndex !== null;

  const modal = document.getElementById('modal-content');
  const overlay = document.getElementById('modal-overlay');

  modal.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${isEdit ? 'Eğitim Düzenle' : 'Yeni Eğitim'}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="edu-form">
      <div class="admin-form-group">
        <label>Eğitim / Sertifika Adı</label>
        <input type="text" class="admin-input" id="edu-title" value="${escapeHTML(edu.title)}" placeholder="Bilgisayar Mühendisliği" required>
      </div>
      <div class="admin-form-group">
        <label>Okul / Kurum</label>
        <input type="text" class="admin-input" id="edu-school" value="${escapeHTML(edu.school)}" placeholder="İstanbul Üniversitesi" required>
      </div>
      <div class="admin-form-group">
        <label>Tarih</label>
        <input type="text" class="admin-input" id="edu-date" value="${escapeHTML(edu.date)}" placeholder="2020 - 2024" required>
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${isEdit ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  `;

  overlay.classList.add('show');

  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });

  document.getElementById('edu-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      title: document.getElementById('edu-title').value,
      school: document.getElementById('edu-school').value,
      date: document.getElementById('edu-date').value,
    };

    if (isEdit) {
      education[editIndex] = data;
    } else {
      education.push(data);
    }
    setStore(STORE_KEYS.EDUCATION, education);
    overlay.classList.remove('show');
    renderAdminEducation(document.getElementById('admin-main'));
    showToast(isEdit ? 'Eğitim güncellendi' : 'Eğitim eklendi');
  });
}

// ===== ADMIN: EXPERIENCE =====
function renderAdminExperience(container) {
  const experience = getStore(STORE_KEYS.EXPERIENCE);
  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Çalıştığım Yerler</h1>
      <p class="admin-page-subtitle">İş deneyimlerinizi ve çalıştığınız şirketleri yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Deneyim Listesi (${experience.length})</h3>
        <button class="admin-btn" id="add-exp-btn">+ Yeni Deneyim</button>
      </div>
      <div id="exp-list">
        ${experience.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${ICONS.briefcase}</div>
            <p class="empty-state-text">Henüz iş deneyimi eklenmemiş</p>
          </div>
        ` : experience.map((exp, i) => `
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${escapeHTML(exp.position)} — ${escapeHTML(exp.company)}</div>
              <div class="admin-list-item-subtitle">${escapeHTML(exp.date)}${exp.description ? ' • ' + escapeHTML(exp.description.substring(0, 60)) + '...' : ''}</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-exp" data-index="${i}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-exp" data-index="${i}">Sil</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('add-exp-btn').addEventListener('click', () => showExperienceModal());

  container.querySelectorAll('.edit-exp').forEach(btn => {
    btn.addEventListener('click', () => showExperienceModal(parseInt(btn.dataset.index)));
  });

  container.querySelectorAll('.delete-exp').forEach(btn => {
    btn.addEventListener('click', () => {
      const experience = getStore(STORE_KEYS.EXPERIENCE);
      experience.splice(parseInt(btn.dataset.index), 1);
      setStore(STORE_KEYS.EXPERIENCE, experience);
      renderAdminExperience(container);
      showToast('Deneyim silindi');
    });
  });
}

function showExperienceModal(editIndex = null) {
  const experience = getStore(STORE_KEYS.EXPERIENCE);
  const exp = editIndex !== null ? experience[editIndex] : { company: '', position: '', date: '', description: '' };
  const isEdit = editIndex !== null;

  const modal = document.getElementById('modal-content');
  const overlay = document.getElementById('modal-overlay');

  modal.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${isEdit ? 'Deneyim Düzenle' : 'Yeni Deneyim'}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="exp-form">
      <div class="admin-form-group">
        <label>Şirket / Kurum Adı</label>
        <input type="text" class="admin-input" id="exp-company" value="${escapeHTML(exp.company)}" placeholder="Şirket adı" required>
      </div>
      <div class="admin-form-group">
        <label>Pozisyon / Görev</label>
        <input type="text" class="admin-input" id="exp-position" value="${escapeHTML(exp.position)}" placeholder="Frontend Developer" required>
      </div>
      <div class="admin-form-group">
        <label>Tarih</label>
        <input type="text" class="admin-input" id="exp-date" value="${escapeHTML(exp.date)}" placeholder="2023 - Halen" required>
      </div>
      <div class="admin-form-group">
        <label>Açıklama (Opsiyonel)</label>
        <textarea class="admin-input admin-textarea" id="exp-desc" placeholder="Bu pozisyonda neler yaptınız?">${escapeHTML(exp.description)}</textarea>
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${isEdit ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  `;

  overlay.classList.add('show');

  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });

  document.getElementById('exp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      company: document.getElementById('exp-company').value,
      position: document.getElementById('exp-position').value,
      date: document.getElementById('exp-date').value,
      description: document.getElementById('exp-desc').value,
    };

    if (isEdit) {
      experience[editIndex] = data;
    } else {
      experience.push(data);
    }
    setStore(STORE_KEYS.EXPERIENCE, experience);
    overlay.classList.remove('show');
    renderAdminExperience(document.getElementById('admin-main'));
    showToast(isEdit ? 'Deneyim güncellendi' : 'Deneyim eklendi');
  });
}

// ===== ADMIN: SKILLS =====
function renderAdminSkills(container) {
  const skills = getStore(STORE_KEYS.SKILLS);
  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Yetenekler</h1>
      <p class="admin-page-subtitle">Teknik yeteneklerinizi ve seviyelerinizi yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Yetenek Listesi (${skills.length})</h3>
        <button class="admin-btn" id="add-skill-btn">+ Yeni Yetenek</button>
      </div>
      <div id="skills-list">
        ${skills.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${ICONS.zap}</div>
            <p class="empty-state-text">Henüz yetenek eklenmemiş</p>
          </div>
        ` : skills.map((s, i) => `
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${escapeHTML(s.name)}</div>
              <div class="admin-list-item-subtitle">Seviye: ${s.level}%</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-skill" data-index="${i}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-skill" data-index="${i}">Sil</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('add-skill-btn').addEventListener('click', () => showSkillModal());

  container.querySelectorAll('.edit-skill').forEach(btn => {
    btn.addEventListener('click', () => showSkillModal(parseInt(btn.dataset.index)));
  });

  container.querySelectorAll('.delete-skill').forEach(btn => {
    btn.addEventListener('click', () => {
      const skills = getStore(STORE_KEYS.SKILLS);
      skills.splice(parseInt(btn.dataset.index), 1);
      setStore(STORE_KEYS.SKILLS, skills);
      renderAdminSkills(container);
      showToast('Yetenek silindi');
    });
  });
}

function showSkillModal(editIndex = null) {
  const skills = getStore(STORE_KEYS.SKILLS);
  const skill = editIndex !== null ? skills[editIndex] : { name: '', level: 80 };
  const isEdit = editIndex !== null;

  const modal = document.getElementById('modal-content');
  const overlay = document.getElementById('modal-overlay');

  modal.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${isEdit ? 'Yetenek Düzenle' : 'Yeni Yetenek'}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="skill-form">
      <div class="admin-form-group">
        <label>Yetenek Adı</label>
        <input type="text" class="admin-input" id="skill-name" value="${escapeHTML(skill.name)}" placeholder="JavaScript" required>
      </div>
      <div class="admin-form-group">
        <label>Seviye (0-100): <span id="level-display">${skill.level}%</span></label>
        <input type="range" id="skill-level" min="0" max="100" value="${skill.level}" style="width:100%;accent-color:var(--accent-primary);">
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${isEdit ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  `;

  overlay.classList.add('show');

  document.getElementById('skill-level').addEventListener('input', (e) => {
    document.getElementById('level-display').textContent = e.target.value + '%';
  });

  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });

  document.getElementById('skill-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('skill-name').value,
      level: parseInt(document.getElementById('skill-level').value),
    };

    if (isEdit) {
      skills[editIndex] = data;
    } else {
      skills.push(data);
    }
    setStore(STORE_KEYS.SKILLS, skills);
    overlay.classList.remove('show');
    renderAdminSkills(document.getElementById('admin-main'));
    showToast(isEdit ? 'Yetenek güncellendi' : 'Yetenek eklendi');
  });
}

// ===== ADMIN: CV =====
function renderAdminCV(container) {
  const cvName = localStorage.getItem(STORE_KEYS.CV_NAME);
  const hasCV = !!localStorage.getItem(STORE_KEYS.CV);

  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">CV Yönetimi</h1>
      <p class="admin-page-subtitle">CV dosyanızı yükleyin, ziyaretçiler otomatik indirebilsin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-title" style="margin-bottom:20px;">CV Dosyası Yükle</div>
      <div class="cv-upload-zone" id="cv-upload-zone">
        <input type="file" id="cv-file-input" accept=".pdf,.doc,.docx">
        <div class="cv-upload-icon">${ICONS.upload}</div>
        <div class="cv-upload-text">CV dosyanızı sürükleyip bırakın veya tıklayın</div>
        <div class="cv-upload-hint">PDF, DOC, DOCX • Maks. 10MB</div>
      </div>
      ${hasCV ? `
        <div class="cv-current">
          <div class="cv-current-icon">${ICONS.check}</div>
          <div class="cv-current-info">
            <div class="cv-current-name">${escapeHTML(cvName || 'cv.pdf')}</div>
            <div class="cv-current-size">Yüklü</div>
          </div>
          <button class="admin-btn admin-btn-danger admin-btn-sm" id="delete-cv-btn">Sil</button>
        </div>
      ` : ''}
    </div>
  `;

  // File upload
  const fileInput = document.getElementById('cv-file-input');
  const uploadZone = document.getElementById('cv-upload-zone');

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) handleCVUpload(file, container);
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleCVUpload(file, container);
  });

  document.getElementById('delete-cv-btn')?.addEventListener('click', () => {
    localStorage.removeItem(STORE_KEYS.CV);
    localStorage.removeItem(STORE_KEYS.CV_NAME);
    renderAdminCV(container);
    showToast('CV silindi');
  });
}

function handleCVUpload(file, container) {
  if (file.size > 10 * 1024 * 1024) {
    showToast('Dosya 10MB\'dan büyük olamaz!');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    localStorage.setItem(STORE_KEYS.CV, e.target.result);
    localStorage.setItem(STORE_KEYS.CV_NAME, file.name);
    renderAdminCV(container);
    showToast('CV başarıyla yüklendi');
  };
  reader.readAsDataURL(file);
}

// ===== ADMIN: PROFILE =====
function renderAdminProfile(container) {
  const profile = getProfile();
  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Profil Ayarları</h1>
      <p class="admin-page-subtitle">Ana sayfada görünecek kişisel bilgilerinizi düzenleyin</p>
    </div>
    <div class="admin-card">
      <form id="profile-form">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="admin-form-group">
            <label>Ad Soyad</label>
            <input type="text" class="admin-input" id="profile-name" value="${escapeHTML(profile.name)}" required>
          </div>
          <div class="admin-form-group">
            <label>Unvan</label>
            <input type="text" class="admin-input" id="profile-title" value="${escapeHTML(profile.title)}" required>
          </div>
        </div>
        <div class="admin-form-group">
          <label>Alt Başlık / Açıklama</label>
          <textarea class="admin-input admin-textarea" id="profile-subtitle" required>${escapeHTML(profile.subtitle)}</textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="admin-form-group">
            <label>E-posta</label>
            <input type="email" class="admin-input" id="profile-email" value="${escapeHTML(profile.email)}" required>
          </div>
          <div class="admin-form-group">
            <label>Telefon</label>
            <input type="text" class="admin-input" id="profile-phone" value="${escapeHTML(profile.phone)}">
          </div>
          <div class="admin-form-group">
            <label>Konum</label>
            <input type="text" class="admin-input" id="profile-location" value="${escapeHTML(profile.location)}">
          </div>
          <div class="admin-form-group">
            <label>GitHub</label>
            <input type="text" class="admin-input" id="profile-github" value="${escapeHTML(profile.github)}">
          </div>
          <div class="admin-form-group">
            <label>LinkedIn</label>
            <input type="text" class="admin-input" id="profile-linkedin" value="${escapeHTML(profile.linkedin)}">
          </div>
        </div>
        <button type="submit" class="admin-btn" style="width:100%;justify-content:center;margin-top:8px;">
          Profili Kaydet
        </button>
      </form>
    </div>
  `;

  document.getElementById('profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('profile-name').value,
      title: document.getElementById('profile-title').value,
      subtitle: document.getElementById('profile-subtitle').value,
      email: document.getElementById('profile-email').value,
      phone: document.getElementById('profile-phone').value,
      location: document.getElementById('profile-location').value,
      github: document.getElementById('profile-github').value,
      linkedin: document.getElementById('profile-linkedin').value,
    };
    setStore(STORE_KEYS.PROFILE, data);
    showToast('Profil kaydedildi');
  });
}

// ===== ADMIN: MESSAGES =====
function renderAdminMessages(container) {
  const messages = getStore(STORE_KEYS.MESSAGES, []);

  // Mark all as read when opening messages tab
  let hasUnread = false;
  messages.forEach(m => {
    if (!m.read) {
      m.read = true;
      hasUnread = true;
    }
  });
  if (hasUnread) {
    setStore(STORE_KEYS.MESSAGES, messages);
  }

  container.innerHTML = `
    <div class="admin-page-header">
      <h1 class="admin-page-title">Gelen Mesajlar</h1>
      <p class="admin-page-subtitle">Web siteniz üzerinden ziyaretçilerin gönderdiği iletişim mesajları</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Mesaj Kutusu (${messages.length})</h3>
        ${messages.length > 0 ? `<button class="admin-btn admin-btn-danger admin-btn-sm" id="clear-all-messages">Tümünü Temizle</button>` : ''}
      </div>
      <div id="messages-list">
        ${messages.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${ICONS.message}</div>
            <p class="empty-state-text">Henüz hiç mesaj alınmadı</p>
          </div>
        ` : messages.map((m, i) => `
          <div class="admin-list-item" style="flex-direction: column; align-items: stretch; gap: 12px; padding: 20px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">
                  ${escapeHTML(m.name)}
                </div>
                <div style="font-size: 0.85rem; color: var(--accent-secondary);">
                  ${escapeHTML(m.email)}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 0.8rem; color: var(--text-secondary); font-family: var(--font-mono);">${escapeHTML(m.date)}</span>
                <a href="mailto:${encodeURIComponent(m.email)}?subject=Portföy Mesajınız Hakkında" class="admin-btn admin-btn-secondary admin-btn-sm" style="text-decoration:none;">
                  Yanıtla
                </a>
                <button class="admin-btn admin-btn-danger admin-btn-sm delete-message" data-index="${i}">
                  Sil
                </button>
              </div>
            </div>
            <div style="background: rgba(10,10,15,0.6); padding: 14px 18px; border-radius: 8px; border-left: 3px solid var(--accent-primary); font-size: 0.92rem; color: var(--text-primary); line-height: 1.6; white-space: pre-wrap;">
              ${escapeHTML(m.message)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Delete message
  container.querySelectorAll('.delete-message').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const list = getStore(STORE_KEYS.MESSAGES, []);
      list.splice(idx, 1);
      setStore(STORE_KEYS.MESSAGES, list);
      renderAdminMessages(container);
      showToast('Mesaj silindi');
    });
  });

  // Clear all
  document.getElementById('clear-all-messages')?.addEventListener('click', () => {
    if (confirm('Tüm mesajları silmek istediğinize emin misiniz?')) {
      setStore(STORE_KEYS.MESSAGES, []);
      renderAdminMessages(container);
      showToast('Tüm mesajlar temizlendi');
    }
  });
}

// ===== UTILITY =====
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== ROUTER HANDLER =====
function handleRoute() {
  const route = getRoute().replace(/^#/, '');

  if (route === '/avelon' || route === '/avelon/' || route === 'avelon' || route === 'avelon/') {
    renderAdminLogin();
  } else if (route.includes('/avelon/dashboard') || route.includes('avelon/dashboard')) {
    renderAdminDashboard();
  } else {
    renderPortfolio();
  }
}

// ===== INIT =====
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// Initial route
handleRoute();

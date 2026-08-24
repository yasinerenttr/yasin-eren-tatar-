(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={PROJECTS:`portfolio_projects`,EDUCATION:`portfolio_education`,SKILLS:`portfolio_skills`,EXPERIENCE:`portfolio_experience`,MESSAGES:`portfolio_messages`,CV:`portfolio_cv`,CV_NAME:`portfolio_cv_name`,PROFILE:`portfolio_profile`,AUTH:`portfolio_auth`},t={name:`Yasin Eren Tatar`,title:`Yazılım Geliştirici & Siber Güvenlik`,subtitle:`Modern web ve mobil teknolojileri ile güvenli, ölçeklenebilir ve yüksek performanslı dijital çözümler geliştiriyorum.`,email:`tataryasineren@gmail.com`,phone:`+90 555 000 00 00`,location:`Türkiye / İstanbul`,github:`https://github.com/yasinerenttr`,linkedin:`https://www.linkedin.com/in/yasin-tatar-74a814372/?locale=tr`},n=[{title:`neyapsak`,description:`Mobil uygulama Apple ve Play Store'da yayında. Şehirdeki gizli saklanmış kafeleri bulabilirsiniz.`,tags:[`React Native`,`Python`,`MongoDB`,`Expo`]},{title:`qres`,description:`Kafe ve restoranlar için yaptığım çalışma. Hem mobil hem de web tabanlı yayında.`,tags:[`Node.js`,`React`,`Socket.IO`,`Python`,`MongoDB`]},{title:`izle`,description:`Arkadaşlarınızla grup olarak webden senkronize film ve dizi izleme platformu.`,tags:[`JavaScript`,`Python`,`React`]},{title:`randevu`,description:`İşletmeler ve müşteriler için online randevu ve takvim yönetim sistemi (yayında).`,tags:[`React`,`Node.js`,`Python`,`HTML`,`CSS`]},{title:`sözleşme`,description:`Gelinlik sahibine yaptığım uzaktan sözleşme; sadece sözleşme değil gelir-gider ve müşteri yönetim paneli.`,tags:[`Node.js`,`Python`,`React`,`MongoDB`]},{title:`avelon`,description:`Kendi yapay zeka projemdir. Derin öğrenme (Deep Learning) mimarisiyle eğitilmektedir.`,tags:[`Python`,`Deep Learning`,`PyTorch`,`REST API`]},{title:`coffe menü`,description:`Bir özel işletmeye yaptığım dijital ve dinamik QR menü sistemi.`,tags:[`React`,`JavaScript`,`HTML`,`CSS`]},{title:`neoleap`,description:`Oyun: Kare bir karakterin düşmanlardan kaçtığı dinamik 2D oyun.`,tags:[`JavaScript`,`HTML5 Canvas`,`Game Dev`]},{title:`hatıralar`,description:`Arkadaşlarınızla anılarınızı ve fotoğraflarınızı paylaşıp saklayabileceğiniz sosyal platform.`,tags:[`React`,`Node.js`,`MongoDB`]}],r=[{company:`Freelance & Özel Müşteri Projeleri`,position:`Full-Stack Developer`,date:`2023 - Halen`,description:`İşletmelere özel restoran otomasyonları (QRes), uzaktan sözleşme takip sistemleri ve mobil uygulamalar geliştirdim.`},{company:`Neyapsak App & Dijital Sistemler`,position:`Mobile & Web Developer`,date:`2022 - 2023`,description:`React Native ve Python backend altyapısı ile şehir rehberi mobil uygulamasını uçtan uca hayata geçirdim.`},{company:`Avelon AI & Siber Güvenlik Ar-Ge`,position:`AI & Security Researcher`,date:`2021 - 2022`,description:`Yapay zeka modelleri, güvenli API mimarileri ve veri tabanı koruma sistemleri üzerine çalışmalar yaptım.`}],i=[{title:`Yazılım Geliştirme & Siber Güvenlik`,school:`Eğitim & Sertifika Programları`,date:`2020 - 2024`},{title:`Full-Stack Web & Mobile Development`,school:`İleri Seviye Geliştirici Eğitimi`,date:`2023`},{title:`Python & Derin Öğrenme (Deep Learning)`,school:`Yapay Zeka ve Makine Öğrenimi`,date:`2023`},{title:`Modern React & Node.js Mimarisi`,school:`Web Teknolojileri Uzmanlığı`,date:`2022`},{title:`Ağ & Web Sistemleri Güvenliği`,school:`Siber Güvenlik Eğitimi`,date:`2022`},{title:`Veritabanı Yönetimi & Modelleme (MongoDB/SQL)`,school:`Veri Tabanı Mimarisi`,date:`2021`},{title:`Mobil Uygulama Mimarisi (React Native & Expo)`,school:`Mobil Sistemler`,date:`2021`}],a=[{name:`JavaScript / TypeScript`,level:95},{name:`React.js / Frontend`,level:90},{name:`Node.js / Express Backend`,level:90},{name:`Python / AI & Deep Learning`,level:85},{name:`React Native / Expo Mobil`,level:85},{name:`MongoDB / Veritabanı`,level:90},{name:`Siber Güvenlik & Güvenli Auth`,level:85},{name:`REST API & Socket.IO`,level:90},{name:`HTML5 & Modern CSS3`,level:95},{name:`Git & GitHub Versiyonlama`,level:90},{name:`Linux & Sunucu Yönetimi`,level:80},{name:`UI / UX & Responsive Tasarım`,level:90}];function o(o,s=[]){try{let e=localStorage.getItem(o);if(e)return JSON.parse(e)}catch{}return o===e.PROJECTS?n:o===e.EXPERIENCE?r:o===e.EDUCATION?i:o===e.SKILLS?a:o===e.PROFILE?t:s}function s(e,t){localStorage.setItem(e,JSON.stringify(t))}function c(){return o(e.PROFILE,t)}var l={download:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,code:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,mail:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,phone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,location:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,github:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,send:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,lock:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,folder:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,briefcase:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,graduation:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,zap:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,fileText:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,user:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,message:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,logOut:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,upload:`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,check:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`};function u(){let e=window.location.hash.slice(1);if(e)return e;let t=window.location.pathname;return t&&t!==`/`?t:`/`}function d(e){e.startsWith(`#`)?window.location.hash=e:window.location.hash=`#`+e}function f(e){if(!e)return;let t=e.getContext(`2d`),n=[];function r(){e.width=window.innerWidth,e.height=window.innerHeight}function i(){return{x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*2+.5,opacity:Math.random()*.4+.1}}function a(){r(),n=Array.from({length:60},i)}function o(){t.clearRect(0,0,e.width,e.height),n.forEach((r,i)=>{r.x+=r.vx,r.y+=r.vy,(r.x<0||r.x>e.width)&&(r.vx*=-1),(r.y<0||r.y>e.height)&&(r.vy*=-1),t.beginPath(),t.arc(r.x,r.y,r.size,0,Math.PI*2),t.fillStyle=`rgba(108, 99, 255, ${r.opacity})`,t.fill();for(let e=i+1;e<n.length;e++){let i=n[e],a=r.x-i.x,o=r.y-i.y,s=Math.sqrt(a*a+o*o);s<150&&(t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(i.x,i.y),t.strokeStyle=`rgba(108, 99, 255, ${.05*(1-s/150)})`,t.lineWidth=.5,t.stroke())}}),requestAnimationFrame(o)}window.addEventListener(`resize`,r),a(),o()}function p(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});document.querySelectorAll(`.animate-on-scroll`).forEach(t=>e.observe(t))}function m(){let e=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target.querySelector(`.skill-bar-fill`);t&&(t.style.width=t.dataset.width)}})},{threshold:.3});document.querySelectorAll(`.skill-card`).forEach(t=>e.observe(t))}function h(){let e=document.querySelector(`.navbar`);e&&window.addEventListener(`scroll`,()=>{e.classList.toggle(`scrolled`,window.scrollY>50)})}function g(){document.querySelectorAll(`.hero-stat-number`).forEach(e=>{let t=parseInt(e.dataset.count),n=e.dataset.suffix||``,r=0,i=t>0?t/60:0;if(t===0){e.textContent=`0`+n;return}let a=setInterval(()=>{r+=i,r>=t&&(r=t,clearInterval(a)),e.textContent=Math.floor(r)+n},25)})}function _(e){let t=document.querySelector(`.toast`);t||(t=document.createElement(`div`),t.className=`toast`,document.body.appendChild(t)),t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),3e3)}function v(){let t=localStorage.getItem(e.CV),n=localStorage.getItem(e.CV_NAME)||`cv.pdf`;if(!t){_(`CV henüz yüklenmedi`);return}let r=document.createElement(`a`);r.href=t,r.download=n,r.click(),_(`CV indiriliyor...`)}var y=[`🚀`,`💻`,`⚡`,`📱`,`🌐`,`🎮`,`🤖`,`🔮`,`🎨`,`🔥`,`🛡️`,`📊`];function b(e,t){if(e&&e.icon)return e.icon;let n=(e?.title||``).toLowerCase(),r=(e?.description||``).toLowerCase(),i=n+` `+r;return i.includes(`coffe`)||i.includes(`kahve`)||i.includes(`cafe`)?`☕`:i.includes(`izle`)||i.includes(`film`)||i.includes(`dizi`)||i.includes(`video`)?`🎬`:i.includes(`qres`)||i.includes(`restoran`)||i.includes(`restaurant`)||i.includes(`menü`)||i.includes(`menu`)?`🍽️`:i.includes(`randevu`)||i.includes(`takvim`)||i.includes(`appointment`)?`📅`:i.includes(`sözleşme`)||i.includes(`belge`)||i.includes(`contract`)?`📜`:i.includes(`avelon`)||i.includes(`yapay zeka`)||i.includes(`deep learn`)||i.includes(`ai`)||i.includes(`model`)?`🤖`:i.includes(`oyun`)||i.includes(`game`)||i.includes(`leap`)?`🎮`:i.includes(`hatıra`)||i.includes(`fotoğraf`)||i.includes(`anı`)?`📸`:i.includes(`mobil`)||i.includes(`app`)||i.includes(`ios`)||i.includes(`android`)?`📱`:i.includes(`siber`)||i.includes(`güvenlik`)||i.includes(`security`)?`🛡️`:i.includes(`web`)||i.includes(`site`)?`🌐`:y[t%y.length]}function x(){let t=c(),n=o(e.PROJECTS),r=o(e.EDUCATION),i=o(e.SKILLS),a=o(e.EXPERIENCE),u=!!localStorage.getItem(e.CV),d=document.getElementById(`app`);d.innerHTML=`
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
          <span>${t.name.split(` `).slice(0,2).join(` `)}</span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="#hero" class="nav-link active" data-section="hero">Ana Sayfa</a>
          <a href="#projects" class="nav-link" data-section="projects">Projeler</a>
          <a href="#education" class="nav-link" data-section="education">Eğitim</a>
          <a href="#experience" class="nav-link" data-section="experience">Deneyim</a>
          <a href="#skills" class="nav-link" data-section="skills">Yetenekler</a>
          <a href="#contact" class="nav-link" data-section="contact">İletişim</a>
          ${u?`<button class="nav-btn-cv" id="nav-cv-btn">
            ${l.download} CV İndir
          </button>`:``}
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
          <span class="hero-title-gradient">${t.name}</span>
        </h1>
        <p class="hero-subtitle">${t.subtitle}</p>
        <div class="hero-actions">
          ${u?`<button class="btn-primary" id="hero-cv-btn">
            ${l.download} CV İndir
          </button>`:``}
          <a href="#projects" class="btn-secondary">
            Projelerimi Gör
          </a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${n.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Proje</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${a.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Şirket</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${r.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Eğitim</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-number" data-count="${i.length}" data-suffix="">0</div>
            <div class="hero-stat-label">Yetenek</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    ${n.length>0?`
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Portföy</div>
          <h2 class="section-title">Projelerim</h2>
          <p class="section-desc">Geliştirdiğim projeler ve üzerinde çalıştığım teknolojiler</p>
        </div>
        <div class="projects-grid">
          ${n.map((e,t)=>`
            <div class="project-card animate-on-scroll" style="animation-delay: ${t*.1}s">
              <div class="project-icon" style="font-size: 1.8rem; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(108,99,255,0.15); border-radius: 12px; margin-bottom: 16px;">
                ${b(e,t)}
              </div>
              <h3 class="project-title">${R(e.title)}</h3>
              <p class="project-desc">${R(e.description)}</p>
              <div class="project-tags">
                ${(e.tags||[]).map(e=>`<span class="project-tag">${R(e)}</span>`).join(``)}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>`:``}

    <!-- Experience (Çalıştığım Şirketler) -->
    ${a.length>0?`
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Deneyim</div>
          <h2 class="section-title">Çalıştığım Şirketler & Deneyim</h2>
          <p class="section-desc">Profesyonel iş deneyimlerim, görev aldığım şirketler ve projeler</p>
        </div>
        <div class="education-timeline">
          ${a.map((e,t)=>`
            <div class="education-item animate-on-scroll" style="animation-delay: ${t*.15}s">
              <div class="education-dot"></div>
              <div class="education-card" style="border-left: 3px solid var(--accent-secondary);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
                  <h3 class="education-title" style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">
                    ${R(e.company)}
                  </h3>
                  <div class="education-date" style="background: rgba(0,212,170,0.1); color: var(--accent-secondary); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">
                    ${R(e.date)}
                  </div>
                </div>
                <div style="font-size: 1rem; font-weight: 600; color: var(--accent-primary); margin-bottom: 8px;">
                  💼 ${R(e.position)}
                </div>
                ${e.description?`<p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.6;margin-top:6px;">${R(e.description)}</p>`:``}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>`:``}

    <!-- Education -->
    ${r.length>0?`
    <section class="section" id="education">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Eğitim</div>
          <h2 class="section-title">Eğitim & Sertifikalar</h2>
          <p class="section-desc">Aldığım eğitimler ve kazandığım sertifikalar</p>
        </div>
        <div class="education-timeline">
          ${r.map((e,t)=>`
            <div class="education-item animate-on-scroll" style="animation-delay: ${t*.15}s">
              <div class="education-dot"></div>
              <div class="education-card">
                <div class="education-date">${R(e.date)}</div>
                <h3 class="education-title">${R(e.title)}</h3>
                <p class="education-school">${R(e.school)}</p>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>`:``}

    <!-- Skills -->
    ${i.length>0?`
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-tag">Yetenekler</div>
          <h2 class="section-title">Teknik Yetenekler</h2>
          <p class="section-desc">Deneyimli olduğum teknolojiler ve araçlar</p>
        </div>
        <div class="skills-grid">
          ${i.map((e,t)=>`
            <div class="skill-card animate-on-scroll" style="animation-delay: ${t*.08}s">
              <div class="skill-name">
                <span>${R(e.name)}</span>
                <span class="skill-level">${e.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" data-width="${e.level}%"></div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>`:``}

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
              <div class="contact-icon">${l.mail}</div>
              <div>
                <div class="contact-label">E-posta</div>
                <div class="contact-value">${R(t.email)}</div>
              </div>
            </div>
            ${t.phone?`
            <div class="contact-item">
              <div class="contact-icon">${l.phone}</div>
              <div>
                <div class="contact-label">Telefon</div>
                <div class="contact-value">${R(t.phone)}</div>
              </div>
            </div>`:``}
            <div class="contact-item">
              <div class="contact-icon">${l.location}</div>
              <div>
                <div class="contact-label">Konum</div>
                <div class="contact-value">${R(t.location)}</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">${l.github}</div>
              <div>
                <div class="contact-label">GitHub</div>
                <div class="contact-value">${R(t.github)}</div>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <input type="text" class="form-input" id="contact-name" placeholder="Adınız" required>
            <input type="email" class="form-input" id="contact-email" placeholder="E-posta adresiniz" required>
            <textarea class="form-input" id="contact-message" placeholder="Mesajınız..." required></textarea>
            <button type="submit" class="btn-primary" style="justify-content: center;">
              ${l.send} Gönder
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">© ${new Date().getFullYear()} <span>${t.name}</span> — Tüm hakları saklıdır. <a href="#/avelon" style="opacity: 0.2; font-size: 0.75rem; margin-left: 10px; transition: opacity 0.2s; display: inline-flex; align-items: center;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.2" title="Admin">${l.lock}</a></p>
    </footer>

    <!-- CV Float Button -->
    ${u?`
    <button class="cv-float-btn" id="cv-float-btn" title="CV İndir">
      ${l.download}
      <div class="tooltip">CV İndir</div>
    </button>`:``}
  `,f(document.getElementById(`particles-canvas`)),setTimeout(()=>{p(),m(),h(),g()},100),document.getElementById(`hero-cv-btn`)?.addEventListener(`click`,v),document.getElementById(`nav-cv-btn`)?.addEventListener(`click`,v),document.getElementById(`cv-float-btn`)?.addEventListener(`click`,v),document.getElementById(`mobile-toggle`)?.addEventListener(`click`,()=>{document.getElementById(`nav-links`)?.classList.toggle(`open`)}),document.getElementById(`contact-form`)?.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`contact-name`).value.trim(),r=document.getElementById(`contact-email`).value.trim(),i=document.getElementById(`contact-message`).value.trim(),a=o(e.MESSAGES,[]),c=new Date,l=c.toLocaleDateString(`tr-TR`,{day:`2-digit`,month:`2-digit`,year:`numeric`})+` `+c.toLocaleTimeString(`tr-TR`,{hour:`2-digit`,minute:`2-digit`});a.unshift({id:Date.now(),name:n,email:r,message:i,date:l,read:!1}),s(e.MESSAGES,a),_(`Mesajınız başarıyla iletildi.`),t.target.reset()}),document.querySelectorAll(`.nav-link[href^="#"], a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(n&&n.startsWith(`#`)&&n!==`#/`&&n!==`#`){let e=document.querySelector(n);e&&(t.preventDefault(),e.scrollIntoView({behavior:`smooth`}),document.getElementById(`nav-links`)?.classList.remove(`open`))}})});let y=document.querySelectorAll(`.hero, .section`),x=document.querySelectorAll(`.nav-link[data-section]`);window.addEventListener(`scroll`,()=>{let e=``;y.forEach(t=>{let n=t.offsetTop-200;window.scrollY>=n&&(e=t.getAttribute(`id`))}),x.forEach(t=>{t.classList.toggle(`active`,t.dataset.section===e)})})}function S(){let t=document.getElementById(`app`);t.innerHTML=`
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
          <div class="login-logo-icon">${l.lock}</div>
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
  `,f(document.getElementById(`particles-canvas`)),document.getElementById(`login-form`).addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`login-email`).value,r=document.getElementById(`login-password`).value;n===`eren@gmail.com`&&r===`145304Eren:`?(s(e.AUTH,!0),d(`/avelon/dashboard`)):(document.getElementById(`login-error`).classList.add(`show`),setTimeout(()=>document.getElementById(`login-error`).classList.remove(`show`),3e3))})}var C=`projects`;function w(){if(!o(e.AUTH,!1)){d(`/avelon`);return}let t=o(e.MESSAGES,[]).filter(e=>!e.read).length,n=document.getElementById(`app`);n.innerHTML=`
    <div class="admin-layout page-transition">
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="admin-sidebar-logo">
          <div class="logo-icon">YE</div>
          <span>Admin Panel</span>
        </div>
        <nav class="admin-nav">
          <div class="admin-nav-item ${C===`messages`?`active`:``}" data-tab="messages">
            <span class="nav-icon">${l.message}</span> Mesajlar
            ${t>0?`<span style="margin-left:auto;background:var(--accent-secondary);color:#0a0a0f;font-weight:700;font-size:0.75rem;padding:2px 8px;border-radius:12px;">${t}</span>`:``}
          </div>
          <div class="admin-nav-item ${C===`projects`?`active`:``}" data-tab="projects">
            <span class="nav-icon">${l.folder}</span> Projeler
          </div>
          <div class="admin-nav-item ${C===`education`?`active`:``}" data-tab="education">
            <span class="nav-icon">${l.graduation}</span> Eğitim
          </div>
          <div class="admin-nav-item ${C===`experience`?`active`:``}" data-tab="experience">
            <span class="nav-icon">${l.briefcase}</span> Deneyim
          </div>
          <div class="admin-nav-item ${C===`skills`?`active`:``}" data-tab="skills">
            <span class="nav-icon">${l.zap}</span> Yetenekler
          </div>
          <div class="admin-nav-item ${C===`cv`?`active`:``}" data-tab="cv">
            <span class="nav-icon">${l.fileText}</span> CV Yönetimi
          </div>
          <div class="admin-nav-item ${C===`profile`?`active`:``}" data-tab="profile">
            <span class="nav-icon">${l.user}</span> Profil
          </div>
        </nav>
        <div class="admin-logout" id="admin-logout">
          <span class="nav-icon">${l.logOut}</span> Çıkış Yap
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
  `,document.querySelectorAll(`.admin-nav-item`).forEach(e=>{e.addEventListener(`click`,()=>{C=e.dataset.tab,T(),document.querySelectorAll(`.admin-nav-item`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})}),document.getElementById(`admin-logout`).addEventListener(`click`,()=>{s(e.AUTH,!1),d(`/avelon`)}),T()}function T(){let e=document.getElementById(`admin-main`);if(e)switch(C){case`messages`:L(e);break;case`projects`:E(e);break;case`education`:O(e);break;case`experience`:A(e);break;case`skills`:M(e);break;case`cv`:P(e);break;case`profile`:I(e)}}function E(t){let n=o(e.PROJECTS);t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Projeler</h1>
      <p class="admin-page-subtitle">Portföyünüzdeki projeleri yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Proje Listesi (${n.length})</h3>
        <button class="admin-btn" id="add-project-btn">+ Yeni Proje</button>
      </div>
      <div id="projects-list">
        ${n.length===0?`
          <div class="empty-state">
            <div class="empty-state-icon">${l.folder}</div>
            <p class="empty-state-text">Henüz proje eklenmemiş</p>
          </div>
        `:n.map((e,t)=>`
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${R(e.title)}</div>
              <div class="admin-list-item-subtitle">${R(e.description.substring(0,80))}...</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-project" data-index="${t}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-project" data-index="${t}">Sil</button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,document.getElementById(`add-project-btn`).addEventListener(`click`,()=>D()),t.querySelectorAll(`.edit-project`).forEach(e=>{e.addEventListener(`click`,()=>D(parseInt(e.dataset.index)))}),t.querySelectorAll(`.delete-project`).forEach(n=>{n.addEventListener(`click`,()=>{let r=o(e.PROJECTS);r.splice(parseInt(n.dataset.index),1),s(e.PROJECTS,r),E(t),_(`Proje silindi`)})})}function D(t=null){let n=o(e.PROJECTS),r=t===null?{title:``,description:``,tags:[]}:n[t],i=t!==null,a=document.getElementById(`modal-content`),c=document.getElementById(`modal-overlay`);a.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">${i?`Proje Düzenle`:`Yeni Proje`}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="project-form">
      <div style="display: grid; grid-template-columns: 80px 1fr; gap: 12px;">
        <div class="admin-form-group">
          <label>İkon / Emoji</label>
          <input type="text" class="admin-input" id="project-icon" value="${R(r.icon||``)}" placeholder="🚀" style="text-align: center; font-size: 1.2rem;">
        </div>
        <div class="admin-form-group">
          <label>Proje Adı</label>
          <input type="text" class="admin-input" id="project-title" value="${R(r.title)}" placeholder="Proje adını girin" required>
        </div>
      </div>
      <div class="admin-form-group">
        <label>Açıklama</label>
        <textarea class="admin-input admin-textarea" id="project-desc" placeholder="Proje açıklaması" required>${R(r.description)}</textarea>
      </div>
      <div class="admin-form-group">
        <label>Teknolojiler (virgülle ayırın)</label>
        <input type="text" class="admin-input" id="project-tags" value="${(r.tags||[]).join(`, `)}" placeholder="React, Node.js, MongoDB">
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${i?`Güncelle`:`Ekle`}
      </button>
    </form>
  `,c.classList.add(`show`),document.getElementById(`modal-close`).addEventListener(`click`,()=>c.classList.remove(`show`)),c.addEventListener(`click`,e=>{e.target===c&&c.classList.remove(`show`)}),document.getElementById(`project-form`).addEventListener(`submit`,r=>{r.preventDefault();let a={icon:document.getElementById(`project-icon`).value.trim(),title:document.getElementById(`project-title`).value,description:document.getElementById(`project-desc`).value,tags:document.getElementById(`project-tags`).value.split(`,`).map(e=>e.trim()).filter(Boolean)};i?n[t]=a:n.push(a),s(e.PROJECTS,n),c.classList.remove(`show`),E(document.getElementById(`admin-main`)),_(i?`Proje güncellendi`:`Proje eklendi`)})}function O(t){let n=o(e.EDUCATION);t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Eğitim</h1>
      <p class="admin-page-subtitle">Eğitim bilgilerinizi ve sertifikalarınızı yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Eğitim Listesi (${n.length})</h3>
        <button class="admin-btn" id="add-edu-btn">+ Yeni Eğitim</button>
      </div>
      <div id="edu-list">
        ${n.length===0?`
          <div class="empty-state">
            <div class="empty-state-icon">${l.graduation}</div>
            <p class="empty-state-text">Henüz eğitim eklenmemiş</p>
          </div>
        `:n.map((e,t)=>`
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${R(e.title)}</div>
              <div class="admin-list-item-subtitle">${R(e.school)} — ${R(e.date)}</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-edu" data-index="${t}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-edu" data-index="${t}">Sil</button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,document.getElementById(`add-edu-btn`).addEventListener(`click`,()=>k()),t.querySelectorAll(`.edit-edu`).forEach(e=>{e.addEventListener(`click`,()=>k(parseInt(e.dataset.index)))}),t.querySelectorAll(`.delete-edu`).forEach(n=>{n.addEventListener(`click`,()=>{let r=o(e.EDUCATION);r.splice(parseInt(n.dataset.index),1),s(e.EDUCATION,r),O(t),_(`Eğitim silindi`)})})}function k(t=null){let n=o(e.EDUCATION),r=t===null?{title:``,school:``,date:``}:n[t],i=t!==null,a=document.getElementById(`modal-content`),c=document.getElementById(`modal-overlay`);a.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">${i?`Eğitim Düzenle`:`Yeni Eğitim`}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="edu-form">
      <div class="admin-form-group">
        <label>Eğitim / Sertifika Adı</label>
        <input type="text" class="admin-input" id="edu-title" value="${R(r.title)}" placeholder="Bilgisayar Mühendisliği" required>
      </div>
      <div class="admin-form-group">
        <label>Okul / Kurum</label>
        <input type="text" class="admin-input" id="edu-school" value="${R(r.school)}" placeholder="İstanbul Üniversitesi" required>
      </div>
      <div class="admin-form-group">
        <label>Tarih</label>
        <input type="text" class="admin-input" id="edu-date" value="${R(r.date)}" placeholder="2020 - 2024" required>
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${i?`Güncelle`:`Ekle`}
      </button>
    </form>
  `,c.classList.add(`show`),document.getElementById(`modal-close`).addEventListener(`click`,()=>c.classList.remove(`show`)),c.addEventListener(`click`,e=>{e.target===c&&c.classList.remove(`show`)}),document.getElementById(`edu-form`).addEventListener(`submit`,r=>{r.preventDefault();let a={title:document.getElementById(`edu-title`).value,school:document.getElementById(`edu-school`).value,date:document.getElementById(`edu-date`).value};i?n[t]=a:n.push(a),s(e.EDUCATION,n),c.classList.remove(`show`),O(document.getElementById(`admin-main`)),_(i?`Eğitim güncellendi`:`Eğitim eklendi`)})}function A(t){let n=o(e.EXPERIENCE);t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Çalıştığım Yerler</h1>
      <p class="admin-page-subtitle">İş deneyimlerinizi ve çalıştığınız şirketleri yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Deneyim Listesi (${n.length})</h3>
        <button class="admin-btn" id="add-exp-btn">+ Yeni Deneyim</button>
      </div>
      <div id="exp-list">
        ${n.length===0?`
          <div class="empty-state">
            <div class="empty-state-icon">${l.briefcase}</div>
            <p class="empty-state-text">Henüz iş deneyimi eklenmemiş</p>
          </div>
        `:n.map((e,t)=>`
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${R(e.position)} — ${R(e.company)}</div>
              <div class="admin-list-item-subtitle">${R(e.date)}${e.description?` • `+R(e.description.substring(0,60))+`...`:``}</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-exp" data-index="${t}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-exp" data-index="${t}">Sil</button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,document.getElementById(`add-exp-btn`).addEventListener(`click`,()=>j()),t.querySelectorAll(`.edit-exp`).forEach(e=>{e.addEventListener(`click`,()=>j(parseInt(e.dataset.index)))}),t.querySelectorAll(`.delete-exp`).forEach(n=>{n.addEventListener(`click`,()=>{let r=o(e.EXPERIENCE);r.splice(parseInt(n.dataset.index),1),s(e.EXPERIENCE,r),A(t),_(`Deneyim silindi`)})})}function j(t=null){let n=o(e.EXPERIENCE),r=t===null?{company:``,position:``,date:``,description:``}:n[t],i=t!==null,a=document.getElementById(`modal-content`),c=document.getElementById(`modal-overlay`);a.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">${i?`Deneyim Düzenle`:`Yeni Deneyim`}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="exp-form">
      <div class="admin-form-group">
        <label>Şirket / Kurum Adı</label>
        <input type="text" class="admin-input" id="exp-company" value="${R(r.company)}" placeholder="Şirket adı" required>
      </div>
      <div class="admin-form-group">
        <label>Pozisyon / Görev</label>
        <input type="text" class="admin-input" id="exp-position" value="${R(r.position)}" placeholder="Frontend Developer" required>
      </div>
      <div class="admin-form-group">
        <label>Tarih</label>
        <input type="text" class="admin-input" id="exp-date" value="${R(r.date)}" placeholder="2023 - Halen" required>
      </div>
      <div class="admin-form-group">
        <label>Açıklama (Opsiyonel)</label>
        <textarea class="admin-input admin-textarea" id="exp-desc" placeholder="Bu pozisyonda neler yaptınız?">${R(r.description)}</textarea>
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${i?`Güncelle`:`Ekle`}
      </button>
    </form>
  `,c.classList.add(`show`),document.getElementById(`modal-close`).addEventListener(`click`,()=>c.classList.remove(`show`)),c.addEventListener(`click`,e=>{e.target===c&&c.classList.remove(`show`)}),document.getElementById(`exp-form`).addEventListener(`submit`,r=>{r.preventDefault();let a={company:document.getElementById(`exp-company`).value,position:document.getElementById(`exp-position`).value,date:document.getElementById(`exp-date`).value,description:document.getElementById(`exp-desc`).value};i?n[t]=a:n.push(a),s(e.EXPERIENCE,n),c.classList.remove(`show`),A(document.getElementById(`admin-main`)),_(i?`Deneyim güncellendi`:`Deneyim eklendi`)})}function M(t){let n=o(e.SKILLS);t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Yetenekler</h1>
      <p class="admin-page-subtitle">Teknik yeteneklerinizi ve seviyelerinizi yönetin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Yetenek Listesi (${n.length})</h3>
        <button class="admin-btn" id="add-skill-btn">+ Yeni Yetenek</button>
      </div>
      <div id="skills-list">
        ${n.length===0?`
          <div class="empty-state">
            <div class="empty-state-icon">${l.zap}</div>
            <p class="empty-state-text">Henüz yetenek eklenmemiş</p>
          </div>
        `:n.map((e,t)=>`
          <div class="admin-list-item">
            <div class="admin-list-item-info">
              <div class="admin-list-item-title">${R(e.name)}</div>
              <div class="admin-list-item-subtitle">Seviye: ${e.level}%</div>
            </div>
            <div class="admin-list-item-actions">
              <button class="admin-btn admin-btn-secondary admin-btn-sm edit-skill" data-index="${t}">Düzenle</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm delete-skill" data-index="${t}">Sil</button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,document.getElementById(`add-skill-btn`).addEventListener(`click`,()=>N()),t.querySelectorAll(`.edit-skill`).forEach(e=>{e.addEventListener(`click`,()=>N(parseInt(e.dataset.index)))}),t.querySelectorAll(`.delete-skill`).forEach(n=>{n.addEventListener(`click`,()=>{let r=o(e.SKILLS);r.splice(parseInt(n.dataset.index),1),s(e.SKILLS,r),M(t),_(`Yetenek silindi`)})})}function N(t=null){let n=o(e.SKILLS),r=t===null?{name:``,level:80}:n[t],i=t!==null,a=document.getElementById(`modal-content`),c=document.getElementById(`modal-overlay`);a.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">${i?`Yetenek Düzenle`:`Yeni Yetenek`}</h3>
      <button class="modal-close" id="modal-close">✕</button>
    </div>
    <form id="skill-form">
      <div class="admin-form-group">
        <label>Yetenek Adı</label>
        <input type="text" class="admin-input" id="skill-name" value="${R(r.name)}" placeholder="JavaScript" required>
      </div>
      <div class="admin-form-group">
        <label>Seviye (0-100): <span id="level-display">${r.level}%</span></label>
        <input type="range" id="skill-level" min="0" max="100" value="${r.level}" style="width:100%;accent-color:var(--accent-primary);">
      </div>
      <button type="submit" class="admin-btn" style="width:100%;justify-content:center;">
        ${i?`Güncelle`:`Ekle`}
      </button>
    </form>
  `,c.classList.add(`show`),document.getElementById(`skill-level`).addEventListener(`input`,e=>{document.getElementById(`level-display`).textContent=e.target.value+`%`}),document.getElementById(`modal-close`).addEventListener(`click`,()=>c.classList.remove(`show`)),c.addEventListener(`click`,e=>{e.target===c&&c.classList.remove(`show`)}),document.getElementById(`skill-form`).addEventListener(`submit`,r=>{r.preventDefault();let a={name:document.getElementById(`skill-name`).value,level:parseInt(document.getElementById(`skill-level`).value)};i?n[t]=a:n.push(a),s(e.SKILLS,n),c.classList.remove(`show`),M(document.getElementById(`admin-main`)),_(i?`Yetenek güncellendi`:`Yetenek eklendi`)})}function P(t){let n=localStorage.getItem(e.CV_NAME),r=!!localStorage.getItem(e.CV);t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">CV Yönetimi</h1>
      <p class="admin-page-subtitle">CV dosyanızı yükleyin, ziyaretçiler otomatik indirebilsin</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-title" style="margin-bottom:20px;">CV Dosyası Yükle</div>
      <div class="cv-upload-zone" id="cv-upload-zone">
        <input type="file" id="cv-file-input" accept=".pdf,.doc,.docx">
        <div class="cv-upload-icon">${l.upload}</div>
        <div class="cv-upload-text">CV dosyanızı sürükleyip bırakın veya tıklayın</div>
        <div class="cv-upload-hint">PDF, DOC, DOCX • Maks. 10MB</div>
      </div>
      ${r?`
        <div class="cv-current">
          <div class="cv-current-icon">${l.check}</div>
          <div class="cv-current-info">
            <div class="cv-current-name">${R(n||`cv.pdf`)}</div>
            <div class="cv-current-size">Yüklü</div>
          </div>
          <button class="admin-btn admin-btn-danger admin-btn-sm" id="delete-cv-btn">Sil</button>
        </div>
      `:``}
    </div>
  `;let i=document.getElementById(`cv-file-input`),a=document.getElementById(`cv-upload-zone`);a.addEventListener(`dragover`,e=>{e.preventDefault(),a.classList.add(`dragover`)}),a.addEventListener(`dragleave`,()=>{a.classList.remove(`dragover`)}),a.addEventListener(`drop`,e=>{e.preventDefault(),a.classList.remove(`dragover`);let n=e.dataTransfer.files[0];n&&F(n,t)}),i.addEventListener(`change`,e=>{let n=e.target.files[0];n&&F(n,t)}),document.getElementById(`delete-cv-btn`)?.addEventListener(`click`,()=>{localStorage.removeItem(e.CV),localStorage.removeItem(e.CV_NAME),P(t),_(`CV silindi`)})}function F(t,n){if(t.size>10485760){_(`Dosya 10MB'dan büyük olamaz!`);return}let r=new FileReader;r.onload=r=>{localStorage.setItem(e.CV,r.target.result),localStorage.setItem(e.CV_NAME,t.name),P(n),_(`CV başarıyla yüklendi`)},r.readAsDataURL(t)}function I(t){let n=c();t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Profil Ayarları</h1>
      <p class="admin-page-subtitle">Ana sayfada görünecek kişisel bilgilerinizi düzenleyin</p>
    </div>
    <div class="admin-card">
      <form id="profile-form">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="admin-form-group">
            <label>Ad Soyad</label>
            <input type="text" class="admin-input" id="profile-name" value="${R(n.name)}" required>
          </div>
          <div class="admin-form-group">
            <label>Unvan</label>
            <input type="text" class="admin-input" id="profile-title" value="${R(n.title)}" required>
          </div>
        </div>
        <div class="admin-form-group">
          <label>Alt Başlık / Açıklama</label>
          <textarea class="admin-input admin-textarea" id="profile-subtitle" required>${R(n.subtitle)}</textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="admin-form-group">
            <label>E-posta</label>
            <input type="email" class="admin-input" id="profile-email" value="${R(n.email)}" required>
          </div>
          <div class="admin-form-group">
            <label>Telefon</label>
            <input type="text" class="admin-input" id="profile-phone" value="${R(n.phone)}">
          </div>
          <div class="admin-form-group">
            <label>Konum</label>
            <input type="text" class="admin-input" id="profile-location" value="${R(n.location)}">
          </div>
          <div class="admin-form-group">
            <label>GitHub</label>
            <input type="text" class="admin-input" id="profile-github" value="${R(n.github)}">
          </div>
          <div class="admin-form-group">
            <label>LinkedIn</label>
            <input type="text" class="admin-input" id="profile-linkedin" value="${R(n.linkedin)}">
          </div>
        </div>
        <button type="submit" class="admin-btn" style="width:100%;justify-content:center;margin-top:8px;">
          Profili Kaydet
        </button>
      </form>
    </div>
  `,document.getElementById(`profile-form`).addEventListener(`submit`,t=>{t.preventDefault();let n={name:document.getElementById(`profile-name`).value,title:document.getElementById(`profile-title`).value,subtitle:document.getElementById(`profile-subtitle`).value,email:document.getElementById(`profile-email`).value,phone:document.getElementById(`profile-phone`).value,location:document.getElementById(`profile-location`).value,github:document.getElementById(`profile-github`).value,linkedin:document.getElementById(`profile-linkedin`).value};s(e.PROFILE,n),_(`Profil kaydedildi`)})}function L(t){let n=o(e.MESSAGES,[]),r=!1;n.forEach(e=>{e.read||(e.read=!0,r=!0)}),r&&s(e.MESSAGES,n),t.innerHTML=`
    <div class="admin-page-header">
      <h1 class="admin-page-title">Gelen Mesajlar</h1>
      <p class="admin-page-subtitle">Web siteniz üzerinden ziyaretçilerin gönderdiği iletişim mesajları</p>
    </div>
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Mesaj Kutusu (${n.length})</h3>
        ${n.length>0?`<button class="admin-btn admin-btn-danger admin-btn-sm" id="clear-all-messages">Tümünü Temizle</button>`:``}
      </div>
      <div id="messages-list">
        ${n.length===0?`
          <div class="empty-state">
            <div class="empty-state-icon">${l.message}</div>
            <p class="empty-state-text">Henüz hiç mesaj alınmadı</p>
          </div>
        `:n.map((e,t)=>`
          <div class="admin-list-item" style="flex-direction: column; align-items: stretch; gap: 12px; padding: 20px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
              <div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">
                  ${R(e.name)}
                </div>
                <div style="font-size: 0.85rem; color: var(--accent-secondary);">
                  ${R(e.email)}
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 0.8rem; color: var(--text-secondary); font-family: var(--font-mono);">${R(e.date)}</span>
                <a href="mailto:${encodeURIComponent(e.email)}?subject=Portföy Mesajınız Hakkında" class="admin-btn admin-btn-secondary admin-btn-sm" style="text-decoration:none;">
                  Yanıtla
                </a>
                <button class="admin-btn admin-btn-danger admin-btn-sm delete-message" data-index="${t}">
                  Sil
                </button>
              </div>
            </div>
            <div style="background: rgba(10,10,15,0.6); padding: 14px 18px; border-radius: 8px; border-left: 3px solid var(--accent-primary); font-size: 0.92rem; color: var(--text-primary); line-height: 1.6; white-space: pre-wrap;">
              ${R(e.message)}
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,t.querySelectorAll(`.delete-message`).forEach(n=>{n.addEventListener(`click`,()=>{let r=parseInt(n.dataset.index),i=o(e.MESSAGES,[]);i.splice(r,1),s(e.MESSAGES,i),L(t),_(`Mesaj silindi`)})}),document.getElementById(`clear-all-messages`)?.addEventListener(`click`,()=>{confirm(`Tüm mesajları silmek istediğinize emin misiniz?`)&&(s(e.MESSAGES,[]),L(t),_(`Tüm mesajlar temizlendi`))})}function R(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function z(){let e=u().replace(/^#/,``);e===`/avelon`||e===`/avelon/`||e===`avelon`||e===`avelon/`?S():e.includes(`/avelon/dashboard`)||e.includes(`avelon/dashboard`)?w():x()}window.addEventListener(`hashchange`,z),window.addEventListener(`DOMContentLoaded`,z),z();
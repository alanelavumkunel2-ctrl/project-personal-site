/**
 * ALAN JOHN - PORTFOLIO INTERACTION & FULL-PAGE ROUTING ENGINE
 * -------------------------------------------------------------
 * Clean vanilla JavaScript handling client-side routing, full-page
 * project case studies, capabilities, lightbox, code copy, and theming.
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.portfolioData || {};

  // --- SVG Icon Library (Feather/Lucide style) ---
  const icons = {
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>`,
    arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    chip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="5" y="5" rx="2"/><path d="M9 2v3"/><path d="M15 2v3"/><path d="M9 19v3"/><path d="M15 19v3"/><path d="M2 9h3"/><path d="M2 15h3"/><path d="M19 9h3"/><path d="M19 15h3"/></svg>`,
    lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M7.76 16.24a6 6 0 0 1 0-8.48"/><path d="M16.24 7.76a6 6 0 0 1 0 8.48"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>`,
    bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    sun_icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
    zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`
  };

  function getIcon(name) {
    if (name === "sun") return icons.sun_icon;
    return icons[name] || icons.cpu;
  }

  // --- Toast Notification Helper ---
  const toastEl = document.getElementById("toast-notice");
  let toastTimer = null;

  function showToast(message, duration = 3000) {
    if (!toastEl) return;
    toastEl.innerHTML = `<span>${icons.info}</span><span>${message}</span>`;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("show");
    }, duration);
  }
  window.showToast = showToast;

  // --- Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("aj_portfolio_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("aj_portfolio_theme", newTheme);
      showToast(`Switched to ${newTheme} theme`);
    });
  }

  // --- Mobile Drawer Menu ---
  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("open");
    if (mobileToggleBtn) {
      mobileToggleBtn.setAttribute("aria-expanded", "false");
      mobileToggleBtn.innerHTML = icons.menu;
    }
  }

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.innerHTML = icons.menu;
    mobileToggleBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        closeMobileDrawer();
      } else {
        mobileDrawer.classList.add("open");
        mobileToggleBtn.setAttribute("aria-expanded", "true");
        mobileToggleBtn.innerHTML = icons.close;
      }
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        closeMobileDrawer();
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          const sectionId = href.substring(1);
          navigateToHome(sectionId);
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (
        mobileDrawer.classList.contains("open") &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggleBtn.contains(e.target)
      ) {
        closeMobileDrawer();
      }
    });
  }

  // --- Scroll Progress Bar & Header Shadow ---
  const scrollProgressBar = document.getElementById("scroll-progress");
  const siteHeader = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (siteHeader) {
      if (scrollTop > 20) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  // --- Image Lightbox Helper ---
  const lightboxOverlay = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

  function openLightbox(imgSrc, captionText) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText || "";
    lightboxOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeMobileDrawer();
    }
  });

  window.openLightbox = openLightbox;

  // --- Code Copy to Clipboard Helper ---
  function copyTextToClipboard(text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (btnElement) {
          const originalHTML = btnElement.innerHTML;
          btnElement.innerHTML = `<span>${icons.check}</span> Copied!`;
          btnElement.style.background = "#10B981";
          btnElement.style.color = "#FFFFFF";
          setTimeout(() => {
            btnElement.innerHTML = originalHTML;
            btnElement.style.background = "";
            btnElement.style.color = "";
          }, 2000);
        }
        showToast("✅ Code copied to clipboard!");
      });
    } else {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("✅ Code copied to clipboard!");
    }
  }
  window.copyTextToClipboard = copyTextToClipboard;

  // --- Download File Helper ---
  function triggerFileDownload(filename, content, mime = "text/plain") {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`📥 Downloading ${filename}`);
  }
  window.triggerFileDownload = triggerFileDownload;

  // =========================================================================
  // VIEW SWITCHING & FULL-PAGE ROUTING
  // =========================================================================
  const mainPortfolioView = document.getElementById("main-portfolio-view");
  const projectDetailView = document.getElementById("project-detail-view");
  const brandHomeLink = document.getElementById("brand-home-link");

  function getProjectFromSlug(slug) {
    if (!data.projects) return null;
    return data.projects.find((p) => p.slug === slug || p.id === slug);
  }

  function navigateToHome(targetSection = "home") {
    if (mainPortfolioView) mainPortfolioView.style.display = "block";
    if (projectDetailView) projectDetailView.style.display = "none";

    document.title = `${data.personal.name} | Student, AI-Assisted Web Creator & Electronics Enthusiast`;

    // Update URL without reloading
    if (window.location.pathname.includes("/projects/")) {
      window.history.pushState(null, "", "/" + (targetSection ? `#${targetSection}` : ""));
    } else {
      window.location.hash = targetSection || "";
    }

    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  function navigateToProject(slug) {
    const project = getProjectFromSlug(slug);
    if (!project) {
      console.warn("Project not found:", slug);
      navigateToHome("projects");
      return;
    }

    // Update browser URL
    const targetUrl = `/projects/${project.slug}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ projectSlug: project.slug }, "", targetUrl);
    }

    // Render Case Study View
    renderProjectCaseStudy(project);

    if (mainPortfolioView) mainPortfolioView.style.display = "none";
    if (projectDetailView) projectDetailView.style.display = "block";

    document.title = `${project.title} | ${data.personal.name}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Handle browser back and forward button events
  window.addEventListener("popstate", () => {
    checkCurrentRoute();
  });

  window.addEventListener("hashchange", () => {
    checkCurrentRoute();
  });

  function checkCurrentRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Check /projects/:slug route
    const pathMatch = path.match(/\/projects\/([a-zA-Z0-9_-]+)/);
    if (pathMatch && pathMatch[1]) {
      navigateToProject(pathMatch[1]);
      return;
    }

    // Check hash route fallback: #project/slug
    if (hash.startsWith("#project/")) {
      const slug = hash.replace("#project/", "");
      navigateToProject(slug);
      return;
    }

    // Default to main home view
    const targetSec = hash ? hash.replace("#", "") : "home";
    navigateToHome(targetSec);
  }

  // Attach home link listener to brand logo
  if (brandHomeLink) {
    brandHomeLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToHome("home");
    });
  }

  // Desktop nav links navigation
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const sectionId = href.substring(1);
        navigateToHome(sectionId);
      }
    });
  });

  // =========================================================================
  // RENDER HOME PAGE CONTENT (From data.js)
  // =========================================================================

  // 1. Social Links
  const socialContainers = document.querySelectorAll(".social-links-render");
  if (data.socialLinks && socialContainers.length > 0) {
    socialContainers.forEach((container) => {
      container.innerHTML = data.socialLinks
        .map((link) => {
          const isReal = link.url && link.url !== "#" && !link.placeholder;
          const hrefAttr = isReal
            ? `href="${link.url}" target="_blank" rel="noopener noreferrer"`
            : `href="javascript:void(0)" data-hint="${link.hint}"`;
          return `
            <a class="social-link-btn ${link.placeholder ? "is-placeholder-link" : ""}" 
               ${hrefAttr}
               aria-label="${link.name}"
               title="${link.placeholder ? link.hint : link.name}">
              ${getIcon(link.icon)}
            </a>
          `;
        })
        .join("");
    });

    document.querySelectorAll(".is-placeholder-link").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const hint = btn.getAttribute("data-hint") || "Add your link in js/data.js";
        showToast(`💡 Notice: ${hint}`);
      });
    });
  }

  // 2. About Extended Story Toggle
  const toggleMoreAboutBtn = document.getElementById("toggle-more-about");
  const expandableAbout = document.getElementById("about-expandable");
  if (toggleMoreAboutBtn && expandableAbout && data.personal && data.personal.aboutExtended) {
    expandableAbout.innerHTML = data.personal.aboutExtended
      .map((p) => `<p class="about-extended-p">${p}</p>`)
      .join("");

    toggleMoreAboutBtn.addEventListener("click", () => {
      const isOpen = expandableAbout.classList.contains("open");
      if (isOpen) {
        expandableAbout.classList.remove("open");
        toggleMoreAboutBtn.innerHTML = `<span>More About Me</span> ${icons.arrowRight}`;
        toggleMoreAboutBtn.setAttribute("aria-expanded", "false");
      } else {
        expandableAbout.classList.add("open");
        toggleMoreAboutBtn.innerHTML = `<span>Show Less</span> ${icons.arrowUp}`;
        toggleMoreAboutBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  // 3. Section 3: "What I Can Do" (5 Cards)
  const capabilitiesGrid = document.getElementById("capabilities-grid");
  if (capabilitiesGrid && data.whatICanDo) {
    capabilitiesGrid.innerHTML = data.whatICanDo
      .map(
        (card) => `
        <div class="capability-card reveal-on-scroll revealed">
          <div class="capability-header">
            <span class="capability-number-badge">${card.cardNumber}</span>
            <div class="capability-icon-box">
              ${getIcon(card.icon)}
            </div>
          </div>
          <h3 class="capability-title">${card.title}</h3>
          <p class="capability-desc">${card.description}</p>
        </div>
      `
      )
      .join("");
  }

  // 4. Section 4: "Technologies & Interests"
  const technologiesGrid = document.getElementById("technologies-grid");
  if (technologiesGrid && data.technologiesAndInterests) {
    technologiesGrid.innerHTML = data.technologiesAndInterests
      .map(
        (item) => `
        <div class="tech-interest-card reveal-on-scroll revealed">
          <div class="tech-interest-header">
            <div class="tech-interest-icon-box">
              ${getIcon(item.icon)}
            </div>
            <span class="tech-interest-cat">${item.category}</span>
          </div>
          <h4 class="tech-interest-title">${item.title}</h4>
          <p class="tech-interest-desc">${item.description}</p>
        </div>
      `
      )
      .join("");
  }

  // 5. Section 5: Education Card
  const educationContainer = document.getElementById("education-card-container");
  if (educationContainer && data.education) {
    const edu = data.education;
    educationContainer.innerHTML = `
      <div class="education-single-card reveal-on-scroll revealed">
        <div class="education-card-grid">
          <div class="education-card-content">
            <div class="education-status-badge">
              <span>●</span> ${edu.status}
            </div>
            <h3 class="education-card-title">${edu.title}</h3>
            <div class="education-card-location">
              ${icons.location}
              <span>${edu.location}</span>
            </div>
            <p class="education-card-desc">${edu.description}</p>
            <ul class="education-highlights-list">
              ${edu.highlights.map((h) => `
                <li class="education-highlight-item">
                  ${icons.check} <span>${h}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="education-card-media">
            <div class="education-photo-frame">
              <img src="${edu.image}" alt="Alan John Academic & Maker Learning" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Section 6: Featured Projects Cards
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderProjects(category = "all") {
    if (!projectsGrid || !data.projects) return;

    const filtered =
      category === "all"
        ? data.projects
        : data.projects.filter((p) => p.category === category);

    projectsGrid.innerHTML = filtered
      .map(
        (p) => `
        <article class="project-card reveal-on-scroll revealed" data-slug="${p.slug}">
          <div class="project-card-image-wrapper">
            <img src="${p.coverImage}" alt="${p.title}" loading="lazy" />
            <span class="project-status-pill">${p.status}</span>
          </div>
          <div class="project-card-body">
            <span class="project-category-tag">${p.category}</span>
            <h3 class="project-card-title">${p.title}</h3>
            <p class="project-card-desc">${p.shortDescription}</p>
            <ul class="project-tags-list">
              ${p.tags.map((t) => `<li class="project-tag">${t}</li>`).join("")}
            </ul>
            <div class="project-card-footer">
              <button class="btn btn-primary btn-sm view-case-study-btn" data-slug="${p.slug}">
                View Project ${icons.arrowRight}
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    // Attach click listeners to open full-page project
    document.querySelectorAll(".view-case-study-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slug = btn.getAttribute("data-slug");
        navigateToProject(slug);
      });
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Only trigger if not clicking button
        if (!e.target.closest(".view-case-study-btn")) {
          const slug = card.getAttribute("data-slug");
          navigateToProject(slug);
        }
      });
    });
  }

  renderProjects("all");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  // =========================================================================
  // FULL-PAGE PROJECT CASE STUDY TEMPLATE RENDERER
  // =========================================================================
  function renderProjectCaseStudy(project) {
    if (!projectDetailView) return;

    // Find previous and next project for bottom navigation
    const currentIndex = data.projects.findIndex((p) => p.id === project.id);
    const prevProject = currentIndex > 0 ? data.projects[currentIndex - 1] : null;
    const nextProject = currentIndex < data.projects.length - 1 ? data.projects[currentIndex + 1] : null;

    projectDetailView.innerHTML = `
      <!-- Sticky Case Study Sub-Navigation -->
      <nav class="project-subnav-sticky" aria-label="Project Case Study Navigation">
        <div class="container project-subnav-inner">
          <button class="project-back-btn" id="subnav-back-btn">
            ${icons.arrowLeft} <span>Back to All Projects</span>
          </button>
          <div class="project-jump-links">
            <a href="#cs-overview" class="project-jump-link">Overview</a>
            ${project.howItWorks ? `<a href="#cs-how-it-works" class="project-jump-link">How It Works</a>` : ""}
            ${project.components && project.components.length > 0 ? `<a href="#cs-components" class="project-jump-link">Components</a>` : ""}
            ${project.transmitterCode || project.receiverCode || project.arduinoCode ? `<a href="#cs-code" class="project-jump-link">Source Code</a>` : ""}
            ${project.diagrams && project.diagrams.length > 0 ? `<a href="#cs-diagrams" class="project-jump-link">Circuit Diagrams</a>` : ""}
            ${project.photographs && project.photographs.length > 0 ? `<a href="#cs-photos" class="project-jump-link">Photographs</a>` : ""}
            <a href="#cs-video" class="project-jump-link">Demonstration</a>
            <a href="#cs-testing" class="project-jump-link">Testing</a>
            <a href="#cs-review" class="project-jump-link">Review</a>
            ${project.downloads && project.downloads.length > 0 ? `<a href="#cs-downloads" class="project-jump-link">Downloads</a>` : ""}
          </div>
        </div>
      </nav>

      <!-- Project Hero Section -->
      <header class="case-study-hero">
        <div class="container case-study-hero-grid">
          <div>
            <div class="case-study-meta-top">
              <span class="case-study-cat-badge">${project.category}</span>
              <span class="case-study-status-badge">● ${project.status}</span>
            </div>
            <h1 class="case-study-title">${project.title}</h1>
            <p class="case-study-subtitle">${project.subtitle}</p>
            <div class="case-study-tags">
              ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
            </div>
            <div class="case-study-actions">
              ${project.transmitterCode || project.receiverCode || project.arduinoCode ? `
                <a href="#cs-code" class="btn btn-primary btn-sm">
                  View Source Code ${icons.arrowRight}
                </a>
              ` : ""}
              <a href="#cs-video" class="btn btn-secondary btn-sm">
                ${icons.play} Demonstration Video
              </a>
              ${project.downloads && project.downloads.length > 0 ? `
                <a href="#cs-downloads" class="btn btn-secondary btn-sm">
                  ${icons.download} Project Resources
                </a>
              ` : ""}
            </div>
          </div>
          <div class="case-study-cover-box" onclick="window.openLightbox('${project.coverImage}', '${project.title}')">
            <img src="${project.coverImage}" alt="${project.title} Cover Graphic" />
          </div>
        </div>
      </header>

      <!-- SECTION A: Project Overview -->
      <section id="cs-overview" class="case-study-section">
        <div class="container">
          <div class="case-study-sec-title-wrap">
            <span class="case-study-sec-label">SECTION 01</span>
            <h2 class="case-study-sec-title">Project Overview</h2>
          </div>

          <div class="overview-card-grid">
            <div class="overview-detail-card">
              <h3 class="overview-card-heading">
                ${icons.info} Problem Statement & Motivation
              </h3>
              <p class="overview-card-text">${project.overview.problem}</p>
              <h3 class="overview-card-heading" style="margin-top: 1rem;">
                ${icons.lightbulb} Project Purpose
              </h3>
              <p class="overview-card-text">${project.overview.purpose}</p>
            </div>

            <div class="overview-detail-card">
              <h3 class="overview-card-heading">
                ${icons.check} Key Objectives
              </h3>
              <ul class="overview-objectives-list">
                ${project.overview.objectives.map((obj) => `
                  <li class="overview-objective-item">
                    ${icons.check} <span>${obj}</span>
                  </li>
                `).join("")}
              </ul>
              <div style="margin-top: 1rem;">
                <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">
                  Intended Community Benefits:
                </h4>
                <p class="overview-card-text">${project.overview.intendedBenefits}</p>
              </div>
            </div>
          </div>

          <div class="case-study-disclaimer-box">
            <strong>⚠️ System Status & Notice:</strong> ${project.overview.description}
            <div style="margin-top: 0.5rem; font-style: italic; color: var(--text-tertiary);">
              ${project.overview.disclaimer}
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION B: How It Works & Architecture Flow -->
      ${project.howItWorks ? `
        <section id="cs-how-it-works" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 02</span>
              <h2 class="case-study-sec-title">How the System Works</h2>
            </div>

            <div class="flow-diagram-container">
              <div class="flow-diagram-img-box" onclick="window.openLightbox('${project.howItWorks.diagramImage}', '${project.howItWorks.caption}')">
                <img src="${project.howItWorks.diagramImage}" alt="${project.howItWorks.caption}" />
              </div>
              <p style="font-size: 0.85rem; color: var(--text-tertiary); text-align: center; margin-top: 0.85rem;">
                ${project.howItWorks.caption}
              </p>

              <div class="flow-steps-grid">
                ${project.howItWorks.steps.map((st) => `
                  <div class="flow-step-card">
                    <span class="flow-step-stage">${st.stage}</span>
                    <p class="flow-step-detail">${st.detail}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>
      ` : ""}

      <!-- SECTION C & D: Components Used & Purchase Resources -->
      ${project.components && project.components.length > 0 ? `
        <section id="cs-components" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 03</span>
              <h2 class="case-study-sec-title">Hardware Components Used</h2>
            </div>

            <div class="component-table-container">
              <div class="table-responsive">
                <table class="component-table">
                  <thead>
                    <tr>
                      <th>Component Name</th>
                      <th>Quantity</th>
                      <th>Model / Specification</th>
                      <th>Purpose in Project</th>
                      <th>Technical Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${project.components.map((c) => `
                      <tr>
                        <td class="comp-name-bold">${c.name}</td>
                        <td><span class="project-tag">${c.quantity}</span></td>
                        <td><code>${c.model}</code></td>
                        <td>${c.purpose}</td>
                        <td>${c.notes}</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SECTION D: Components & Resources -->
            ${project.purchaseResources && project.purchaseResources.length > 0 ? `
              <div style="margin-top: 3.5rem;">
                <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
                  Component Specifications & Resources
                </h3>
                <div class="purchase-resources-grid">
                  ${project.purchaseResources.map((item) => `
                    <div class="purchase-card">
                      <h4 class="purchase-card-title">${item.name}</h4>
                      <div class="purchase-meta-row">
                        <span>Supplier:</span>
                        <strong>${item.supplier}</strong>
                      </div>
                      <p style="font-size: 0.825rem; color: var(--text-secondary);">${item.notes}</p>
                      <div class="purchase-card-links">
                        ${item.productUrl ? `
                          <a href="${item.productUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                            Product Link ${icons.externalLink}
                          </a>
                        ` : `
                          <span style="font-size: 0.8rem; color: var(--text-tertiary); font-style: italic;">
                            Link to be added
                          </span>
                        `}
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            ` : ""}
          </div>
        </section>
      ` : ""}

      <!-- SECTION E & F: Source Code (Transmitter, Receiver, or Arduino) -->
      ${project.transmitterCode || project.receiverCode || project.arduinoCode ? `
        <section id="cs-code" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 04</span>
              <h2 class="case-study-sec-title">Project Source Code & Pinouts</h2>
            </div>

            <!-- Single Node (Arduino Car) or Transmitter/Receiver Nodes (Flood System) -->
            ${project.transmitterCode ? `
              <!-- TRANSMITTER CODE -->
              <div class="code-meta-card">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                  1. ${project.transmitterCode.title}
                </h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  ${project.transmitterCode.explanation}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                  ${project.transmitterCode.libraries.map((lib) => `<span class="project-tag">#include &lt;${lib}&gt;</span>`).join("")}
                </div>
                <table class="pinout-table">
                  <thead>
                    <tr><th>Microcontroller Pin</th><th>Connected Hardware & Function</th></tr>
                  </thead>
                  <tbody>
                    ${project.transmitterCode.pinConnections.map((pc) => `
                      <tr><td><code>${pc.pin}</code></td><td>${pc.role}</td></tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>

              <div class="code-viewer-container">
                <div class="code-viewer-header">
                  <span class="code-viewer-filename">${icons.fileText} Flood_Transmitter_ESP32.ino</span>
                  <div class="code-viewer-actions">
                    <button class="copy-code-btn" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(project.transmitterCode.codePlaceholder)}'), this)">
                      ${icons.copy} Copy Code
                    </button>
                    <button class="copy-code-btn" onclick="window.triggerFileDownload('Flood_Transmitter_ESP32.ino', decodeURIComponent('${encodeURIComponent(project.transmitterCode.codePlaceholder)}'))">
                      ${icons.download} Download .ino
                    </button>
                  </div>
                </div>
                <pre class="code-viewer-pre"><code>${escapeHtml(project.transmitterCode.codePlaceholder)}</code></pre>
              </div>
            ` : ""}

            ${project.receiverCode ? `
              <!-- RECEIVER CODE -->
              <div class="code-meta-card" style="margin-top: 3.5rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                  2. ${project.receiverCode.title}
                </h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  ${project.receiverCode.explanation}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                  ${project.receiverCode.libraries.map((lib) => `<span class="project-tag">#include &lt;${lib}&gt;</span>`).join("")}
                </div>
                <table class="pinout-table">
                  <thead>
                    <tr><th>Microcontroller Pin</th><th>Connected Hardware & Function</th></tr>
                  </thead>
                  <tbody>
                    ${project.receiverCode.pinConnections.map((pc) => `
                      <tr><td><code>${pc.pin}</code></td><td>${pc.role}</td></tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>

              <div class="code-viewer-container">
                <div class="code-viewer-header">
                  <span class="code-viewer-filename">${icons.fileText} Flood_Receiver_ESP32.ino</span>
                  <div class="code-viewer-actions">
                    <button class="copy-code-btn" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(project.receiverCode.codePlaceholder)}'), this)">
                      ${icons.copy} Copy Code
                    </button>
                    <button class="copy-code-btn" onclick="window.triggerFileDownload('Flood_Receiver_ESP32.ino', decodeURIComponent('${encodeURIComponent(project.receiverCode.codePlaceholder)}'))">
                      ${icons.download} Download .ino
                    </button>
                  </div>
                </div>
                <pre class="code-viewer-pre"><code>${escapeHtml(project.receiverCode.codePlaceholder)}</code></pre>
              </div>
            ` : ""}

            ${project.arduinoCode ? `
              <!-- ARDUINO SINGLE NODE CODE -->
              <div class="code-meta-card">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                  ${project.arduinoCode.title}
                </h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  ${project.arduinoCode.explanation}
                </p>
                <table class="pinout-table">
                  <thead>
                    <tr><th>Arduino Pin</th><th>Connection Role</th></tr>
                  </thead>
                  <tbody>
                    ${project.arduinoCode.pinConnections.map((pc) => `
                      <tr><td><code>${pc.pin}</code></td><td>${pc.role}</td></tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>

              <div class="code-viewer-container">
                <div class="code-viewer-header">
                  <span class="code-viewer-filename">${icons.fileText} Arduino_Robot_Controller.ino</span>
                  <div class="code-viewer-actions">
                    <button class="copy-code-btn" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(project.arduinoCode.codePlaceholder)}'), this)">
                      ${icons.copy} Copy Code
                    </button>
                    <button class="copy-code-btn" onclick="window.triggerFileDownload('Arduino_Robot_Controller.ino', decodeURIComponent('${encodeURIComponent(project.arduinoCode.codePlaceholder)}'))">
                      ${icons.download} Download .ino
                    </button>
                  </div>
                </div>
                <pre class="code-viewer-pre"><code>${escapeHtml(project.arduinoCode.codePlaceholder)}</code></pre>
              </div>
            ` : ""}

          </div>
        </section>
      ` : ""}

      <!-- SECTION G: Circuit & Wiring Diagrams -->
      ${project.diagrams && project.diagrams.length > 0 ? `
        <section id="cs-diagrams" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 05</span>
              <h2 class="case-study-sec-title">Circuit & Wiring Diagrams</h2>
            </div>

            <div class="gallery-grid">
              ${project.diagrams.map((d) => `
                <div class="gallery-card">
                  <div class="gallery-img-wrapper" onclick="window.openLightbox('${d.image}', '${d.title} — ${d.description}')">
                    <img src="${d.image}" alt="${d.title}" loading="lazy" />
                    <span class="gallery-zoom-badge">${icons.zoom} Click to Enlarge</span>
                  </div>
                  <div class="gallery-card-body">
                    <h4 class="gallery-card-title">${d.title}</h4>
                    <p class="gallery-card-desc">${d.description}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      ` : ""}

      <!-- SECTION H: Project Photographs Gallery -->
      ${project.photographs && project.photographs.length > 0 ? `
        <section id="cs-photos" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 06</span>
              <h2 class="case-study-sec-title">Project Photographs & Hardware Build</h2>
            </div>

            <div class="gallery-grid">
              ${project.photographs.map((p) => `
                <div class="gallery-card">
                  <div class="gallery-img-wrapper" onclick="window.openLightbox('${p.image}', '${p.title}: ${p.caption}')">
                    <img src="${p.image}" alt="${p.alt}" loading="lazy" />
                    <span class="gallery-zoom-badge">${icons.zoom} View Photo</span>
                  </div>
                  <div class="gallery-card-body">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                      <h4 class="gallery-card-title">${p.title}</h4>
                      <span style="font-size: 0.7rem; color: var(--text-tertiary); font-weight: 600;">${p.date}</span>
                    </div>
                    <p class="gallery-card-desc">${p.caption}</p>
                  </div>
                </div>
              `).join("")}
            </div>
            <p style="font-size: 0.85rem; color: var(--text-tertiary); margin-top: 1.5rem; text-align: center;">
              📷 Note: Conceptual illustration placeholders shown above can be replaced with your actual build photos in <code>js/data.js</code>.
            </p>
          </div>
        </section>
      ` : ""}

      <!-- SECTION I: Project Demonstration Video -->
      <section id="cs-video" class="case-study-section">
        <div class="container">
          <div class="case-study-sec-title-wrap">
            <span class="case-study-sec-label">SECTION 07</span>
            <h2 class="case-study-sec-title">Project Demonstration</h2>
          </div>

          <div class="video-player-wrapper">
            ${project.video && !project.video.isPlaceholder && project.video.videoUrl ? `
              <div class="video-container">
                <video controls width="100%" poster="${project.coverImage}">
                  <source src="${project.video.videoUrl}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            ` : `
              <div class="video-container">
                <div class="video-placeholder-icon">
                  ${icons.play}
                </div>
                <h3 style="color: #FFFFFF; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">
                  Demonstration Video Coming Soon
                </h3>
                <p style="max-width: 480px; font-size: 0.9rem; line-height: 1.6;">
                  ${project.video.placeholderText}
                </p>
              </div>
            `}
            <div class="video-details-box">
              <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
                ${project.video.title}
              </h4>
              <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                ${project.video.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION J: Testing & Observations -->
      <section id="cs-testing" class="case-study-section">
        <div class="container">
          <div class="case-study-sec-title-wrap">
            <span class="case-study-sec-label">SECTION 08</span>
            <h2 class="case-study-sec-title">Testing & Experimental Observations</h2>
          </div>

          <div class="testing-log-box">
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">
                Testing Procedure:
              </h4>
              <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                ${project.testing.procedure}
              </p>
            </div>

            ${project.testing.sensorReadings && project.testing.sensorReadings.length > 0 ? `
              <div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
                  Calibration & Test Measurements:
                </h4>
                <div class="table-responsive">
                  <table class="component-table">
                    <thead>
                      <tr>
                        <th>Target Distance / Condition</th>
                        <th>Measured Reading</th>
                        <th>Variance / Delta</th>
                        <th>Alert System Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${project.testing.sensorReadings.map((r) => `
                        <tr>
                          <td><strong>${r.actual}</strong></td>
                          <td><code>${r.measured}</code></td>
                          <td>${r.delta}</td>
                          <td><span class="project-tag">${r.alertState}</span></td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ""}

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
              <div style="background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem;">
                <h5 style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
                  Problems Encountered:
                </h5>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
                  ${project.testing.problemsEncountered}
                </p>
              </div>
              <div style="background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem;">
                <h5 style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
                  Troubleshooting & Fixes:
                </h5>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
                  ${project.testing.troubleshooting}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION K & L: Challenges, Learning & Future Improvements -->
      <section id="cs-review" class="case-study-section">
        <div class="container">
          <div class="case-study-sec-title-wrap">
            <span class="case-study-sec-label">SECTION 09</span>
            <h2 class="case-study-sec-title">Project Review & Future Improvements</h2>
          </div>

          <div class="overview-card-grid">
            <div class="overview-detail-card">
              <h3 class="overview-card-heading">
                ${icons.check} What Worked Well
              </h3>
              <ul class="overview-objectives-list">
                ${project.reviewAndFuture.whatWorked.map((w) => `
                  <li class="overview-objective-item">${icons.check} <span>${w}</span></li>
                `).join("")}
              </ul>

              <h3 class="overview-card-heading" style="margin-top: 1.5rem;">
                ${icons.lightbulb} Key Technical Learnings
              </h3>
              <p class="overview-card-text">${project.challengesAndLearning.learnings}</p>
            </div>

            <div class="overview-detail-card">
              <h3 class="overview-card-heading">
                ${icons.sparkles} Future Improvements & Roadmap
              </h3>
              <ul class="overview-objectives-list">
                ${project.reviewAndFuture.futureIdeas.map((idea) => `
                  <li class="overview-objective-item">${icons.arrowRight} <span>${idea}</span></li>
                `).join("")}
              </ul>
              <p style="font-size: 0.8rem; color: var(--text-tertiary); font-style: italic; margin-top: 1rem;">
                * Labelled as conceptual roadmap items for future exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION M: Project Downloads & Resources -->
      ${project.downloads && project.downloads.length > 0 ? `
        <section id="cs-downloads" class="case-study-section">
          <div class="container">
            <div class="case-study-sec-title-wrap">
              <span class="case-study-sec-label">SECTION 10</span>
              <h2 class="case-study-sec-title">Downloads & Documentation</h2>
            </div>

            <div class="downloads-grid">
              ${project.downloads.map((d) => `
                <div class="download-tile" onclick="window.showToast('📥 Downloading: ${d.filename}')">
                  <div class="download-icon-box">
                    ${icons.download}
                  </div>
                  <div>
                    <h5 style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${d.title}</h5>
                    <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.35rem;">${d.description}</p>
                    <span class="project-tag">${d.filename}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      ` : ""}

      <!-- SECTION N: Project Bottom Navigation -->
      <footer class="project-nav-footer">
        <div class="container project-nav-footer-inner">
          <div>
            ${prevProject ? `
              <button class="btn btn-secondary btn-sm" onclick="window.navigateToProject('${prevProject.slug}')">
                ${icons.arrowLeft} Previous: ${prevProject.title}
              </button>
            ` : `
              <button class="btn btn-secondary btn-sm" onclick="window.navigateToHome('projects')">
                ${icons.arrowLeft} All Projects
              </button>
            `}
          </div>

          <div>
            <button class="btn btn-primary btn-sm" onclick="window.navigateToHome('projects')">
              Back to All Projects
            </button>
          </div>

          <div>
            ${nextProject ? `
              <button class="btn btn-secondary btn-sm" onclick="window.navigateToProject('${nextProject.slug}')">
                Next: ${nextProject.title} ${icons.arrowRight}
              </button>
            ` : `
              <button class="btn btn-secondary btn-sm" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                Back to Top ${icons.arrowUp}
              </button>
            `}
          </div>
        </div>
      </footer>
    `;

    // Attach Back to All Projects listener to subnav button
    const subnavBackBtn = document.getElementById("subnav-back-btn");
    if (subnavBackBtn) {
      subnavBackBtn.addEventListener("click", () => {
        navigateToHome("projects");
      });
    }

    // Attach smooth jump link navigation
    projectDetailView.querySelectorAll(".project-jump-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const navOffset = 130;
          const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: "smooth"
          });
        }
      });
    });
  }

  window.navigateToProject = navigateToProject;
  window.navigateToHome = navigateToHome;

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================================================================
  // CONTACT FORM VALIDATION & HANDLING
  // =========================================================================
  const contactForm = document.getElementById("contact-form");
  const formSuccessAlert = document.getElementById("form-success-alert");
  const mailtoFallbackBtn = document.getElementById("mailto-fallback-btn");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (contactForm) {
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function checkField(input, condition, errorMsg) {
      const errorEl = document.getElementById(`${input.id}-error`);
      if (!condition) {
        input.classList.add("error");
        if (errorEl) errorEl.textContent = errorMsg;
        return false;
      } else {
        input.classList.remove("error");
        if (errorEl) errorEl.textContent = "";
        return true;
      }
    }

    nameInput.addEventListener("blur", () => {
      checkField(nameInput, nameInput.value.trim().length >= 2, "Please enter your name (at least 2 characters).");
    });
    emailInput.addEventListener("blur", () => {
      checkField(emailInput, validateEmail(emailInput.value.trim()), "Please enter a valid email address.");
    });
    subjectInput.addEventListener("blur", () => {
      checkField(subjectInput, subjectInput.value.trim().length >= 3, "Please enter a subject (at least 3 characters).");
    });
    messageInput.addEventListener("blur", () => {
      checkField(messageInput, messageInput.value.trim().length >= 10, "Please enter a message (at least 10 characters).");
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const isNameValid = checkField(nameInput, nameInput.value.trim().length >= 2, "Please enter your name.");
      const isEmailValid = checkField(emailInput, validateEmail(emailInput.value.trim()), "Please enter a valid email address.");
      const isSubjectValid = checkField(subjectInput, subjectInput.value.trim().length >= 3, "Please enter a subject.");
      const isMessageValid = checkField(messageInput, messageInput.value.trim().length >= 10, "Please enter a message (min 10 characters).");

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        showToast("Please correct the form fields before sending.");
        return;
      }

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Processing...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        const senderName = nameInput.value.trim();
        const senderEmail = emailInput.value.trim();
        const subjectText = subjectInput.value.trim();
        const messageBody = messageInput.value.trim();

        const mailtoUrl = `mailto:${encodeURIComponent(data.personal.emailPlaceholder)}?subject=${encodeURIComponent(
          `[Portfolio Contact] ${subjectText}`
        )}&body=${encodeURIComponent(
          `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${messageBody}`
        )}`;

        if (mailtoFallbackBtn) {
          mailtoFallbackBtn.href = mailtoUrl;
        }

        if (formSuccessAlert) {
          formSuccessAlert.style.display = "flex";
          formSuccessAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        contactForm.reset();
        showToast("✅ Message details validated! Ready to send via your email app.");
      }, 600);
    });
  }

  // --- Dynamic Year in Footer ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Scroll Reveal Observer ---
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal-active");

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("revealed");
      } else {
        revealObserver.observe(el);
      }
    });
  }

  // Check initial route on page load (e.g. /projects/smart-flood-detection or #home)
  checkCurrentRoute();
});

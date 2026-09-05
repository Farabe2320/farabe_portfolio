/* =====================================================================
   RENDER ENGINE — reads PORTFOLIO_DATA (from content.js) and builds
   the page. You shouldn't need to edit this file to update your
   content — edit content.js instead.
   ===================================================================== */

(function () {
  const D = PORTFOLIO_DATA;
  const $ = (id) => document.getElementById(id);

  if (D.meta && D.meta.siteTitle) document.title = D.meta.siteTitle;

  // ---- Nav links ----
  const NAV_ITEMS = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#academic-projects", label: "Projects" },
    { href: "#projects", label: "Internship" },
    { href: "#activities", label: "Activities" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  $("nav-links").innerHTML = NAV_ITEMS.map((i) => `<a href="${i.href}">${i.label}</a>`).join("");
  $("nav-mark").textContent = initials(D.hero.name) || "—";

  $("nav-toggle").addEventListener("click", () => $("nav-links").classList.toggle("open"));

  // ---- Hero ----
  $("hero-eyebrow").textContent = D.hero.eyebrow || "";
  $("hero-name").textContent = D.hero.name || "";
  $("hero-role").textContent = D.hero.role || "";
  $("hero-address").textContent = D.hero.address || "";
  $("hero-tagline").textContent = D.hero.tagline || "";
  $("hero-interest").textContent = D.hero.interestLine || "";
  $("hero-actions").innerHTML = (D.hero.actions || []).map(actionBtn).join("");

  const photoEl = $("hero-photo");
  if (D.hero.photo) {
    photoEl.innerHTML = `<img src="${D.hero.photo}" alt="${escapeHtml(D.hero.name)}">`;
  } else {
    photoEl.textContent = initials(D.hero.name);
  }

  // ---- Hero stats ----
  const computedProjectsCount = (D.academicProjects || []).length + (D.formulaStudentProjects || []).length;
  const computedLeadershipCount = (D.activities || []).length + (D.formulaStudentProjects || []).length;
  const stats = [
    { num: (D.research || []).length, label: "Research Papers" },
    { num: (D.meta && D.meta.projectsCountOverride) || computedProjectsCount, label: "Projects" },
    { num: (D.awards || []).length, label: "Awards & Honors" },
    { num: computedLeadershipCount, label: "Leadership Roles" },
  ].filter((s) => s.num > 0);
  $("hero-stats").innerHTML = stats
    .map((s) => `<div><div class="hero-stat-num">${s.num}</div><div class="hero-stat-label">${escapeHtml(s.label)}</div></div>`)
    .join("");

  // ---- Photo gallery ----
  initGallery(D.gallery || []);

  // ---- About ---- (paragraphs may contain basic HTML like <strong> and <a>)
  $("about-body").innerHTML = (D.about.paragraphs || []).map((p) => `<p>${p}</p>`).join("");

  // ---- Research / Academic Projects / Internship / Certifications ----
  const projectRegistry = {};
  $("research-grid").innerHTML = (D.research || []).map((c) => cardHtml(c, { mode: "inline", closedLabel: "Read Full Abstract", openLabel: "Hide Abstract" })).join("");
  $("academic-projects-grid").innerHTML = (D.academicProjects || []).map((c, i) => cardHtml(c, { mode: "modal", id: registerProject("academicProjects", i, c), label: "View Project Details" })).join("");
  $("formula-projects-grid").innerHTML = (D.formulaStudentProjects && D.formulaStudentProjects.length)
    ? D.formulaStudentProjects.map((c, i) => cardHtml(c, { mode: "modal", id: registerProject("formulaStudentProjects", i, c), label: "View Project Details" })).join("")
    : `<p class="empty-note">More projects coming soon.</p>`;
  $("projects-grid").innerHTML = (D.projects || []).map((c) => cardHtml(c, { mode: "expanded" })).join("");
  $("certifications-grid").innerHTML = (D.certifications || []).map((c) => cardHtml(c, { mode: "inline", closedLabel: "View Details", openLabel: "Hide Details" })).join("");
  initCardGalleries();

  function registerProject(section, i, c) {
    const id = `${section}-${i}`;
    projectRegistry[id] = c;
    return id;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-abstract-toggle]");
    if (!btn) return;
    const box = btn.nextElementSibling;
    box.classList.toggle("open");
    const isOpen = box.classList.contains("open");
    const openLabel = btn.dataset.labelOpen || "Hide Abstract";
    const closedLabel = btn.dataset.labelClosed || "Read Full Abstract";
    btn.textContent = isOpen ? `${openLabel} ▴` : `${closedLabel} ▾`;
  });

  initProjectModal(projectRegistry);

  // ---- Activities & Awards ----
  $("activities-list").innerHTML = (D.activities || []).map((c, i) => cardHtml(c, { mode: "modal", id: registerProject("activities", i, c), label: "View Details" })).join("");
  $("awards-list").innerHTML = (D.awards || []).map((c, i) => cardHtml(c, { mode: "modal", id: registerProject("awards", i, c), label: "View Details" })).join("");
  initCardGalleries();

  // ---- Hobbies ----
  $("hobbies-intro").textContent = D.hobbiesIntro || "";
  $("hobbies-row").innerHTML = (D.hobbies || []).map((c, i) => cardHtml(c, { mode: "modal", id: registerProject("hobbies", i, c), label: "View Photos" })).join("");

  // ---- Contact / Footer ----
  $("footer-heading").textContent = D.contact.heading || "";
  $("footer-note").textContent = D.contact.note || "";
  $("footer-socials").innerHTML = (D.contact.socials || [])
    .map((s) => `<a href="${s.url}" target="${s.url.startsWith("http") ? "_blank" : "_self"}" rel="noopener">${escapeHtml(s.label)}</a>`)
    .join("");
  $("footer-copyright").textContent = D.contact.copyright || "";

  // ---------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------
  function actionBtn(a) {
    if (a.videoTrigger) {
      return `<button type="button" class="btn video-btn${a.primary ? " primary" : ""}" data-open-video="1">${escapeHtml(a.label)}</button>`;
    }
    return `<a class="btn${a.primary ? " primary" : ""}" href="${a.url}" target="${a.url.startsWith("http") ? "_blank" : "_self"}" rel="noopener">${escapeHtml(a.label)}</a>`;
  }

  function cardHtml(c, opts = {}) {
    const mode = opts.mode || "inline";
    const bulletsHtml = c.bullets && c.bullets.length
      ? `<ul class="card-bullets">${c.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
      : "";
    const galleryBlock = (images, title, extraClass) => `
      <div class="card-image${extraClass ? " " + extraClass : ""}" data-card-gallery>
        ${images.map((src, i) => `<img src="${src}" alt="${escapeHtml(title || "")}" class="${i === 0 ? "active" : ""}" data-open-image="${escapeHtml(src)}">`).join("")}
        ${images.length > 1 ? `<div class="card-image-dots">${images.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("")}</div>` : ""}
      </div>`;
    const coverBlock = (cover, title) => `<div class="card-image card-image-clickable" data-open-image="${escapeHtml(cover)}"><img src="${cover}" alt="${escapeHtml(title || "")}" class="active"></div>`;

    const mosaicBlock = (images, title) => `
      <div class="card-image-mosaic">
        ${images.map((src) => `<div class="card-image-mosaic-item" data-open-image="${escapeHtml(src)}"><img src="${src}" alt="${escapeHtml(title || "")}"></div>`).join("")}
      </div>`;

    let imageHtml = "";
    if (mode === "expanded" && c.images && c.images.length) {
      imageHtml = galleryBlock(c.images, c.title, "card-image-large");
    } else if (c.cover) {
      imageHtml = coverBlock(c.cover, c.title);
    } else if (c.showAllPhotos && c.images && c.images.length > 1) {
      imageHtml = mosaicBlock(c.images, c.title);
    } else if (c.images && c.images.length) {
      imageHtml = galleryBlock(c.images, c.title);
    }

    let expandHtml = "";
    if (mode === "modal" && (c.fullAbstract || c.limitations || c.futureScope)) {
      expandHtml = `<button type="button" class="card-abstract-toggle" data-open-project="${escapeHtml(opts.id)}">${escapeHtml(opts.label || "View Project Details")} ↗</button>`;
    } else if (mode === "inline" && c.fullAbstract) {
      const closedLabel = opts.closedLabel || "Read Full Abstract";
      const openLabel = opts.openLabel || "Hide Abstract";
      expandHtml = `
            <button type="button" class="card-abstract-toggle" data-abstract-toggle data-label-closed="${escapeHtml(closedLabel)}" data-label-open="${escapeHtml(openLabel)}">${escapeHtml(closedLabel)} ▾</button>
            <div class="card-abstract-full"><p>${c.fullAbstract}</p></div>
          `;
    } else if (mode === "expanded") {
      const parts = [];
      if (c.fullAbstract) parts.push(`<p class="card-desc card-desc-full">${c.fullAbstract}</p>`);
      if (c.limitations) parts.push(`<div class="project-detail-section"><h3>Limitations</h3><p>${c.limitations}</p></div>`);
      if (c.futureScope) parts.push(`<div class="project-detail-section"><h3>Future Scope</h3><p>${c.futureScope}</p></div>`);
      if (c.pptx) parts.push(`<div class="pptx-actions"><button type="button" class="btn primary" data-open-pptx="${escapeHtml(c.pptx)}">View Presentation ↗</button><a class="btn" href="${escapeHtml(c.pptx)}" download>Download PPTX ⬇</a></div>`);
      expandHtml = parts.join("");
    }
    const showShortDesc = c.description && !(mode === "expanded" && c.fullAbstract);
    return `
      <div class="card${imageHtml ? " has-image" : ""}${mode === "expanded" ? " card-expanded" : ""}${c.showAllPhotos ? " card-photo-mosaic" : ""}">
        ${imageHtml}
        <div class="card-body">
          <p class="card-tag">${escapeHtml(c.tag || c.meta || "")}</p>
          <h3 class="card-title">${escapeHtml(c.title || "")}</h3>
          ${showShortDesc ? `<p class="card-desc">${escapeHtml(c.description)}</p>` : ""}
          ${expandHtml}
          ${bulletsHtml}
          <div class="card-tools">
            ${(c.tools || []).map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="card-links">
            ${(c.links || []).map((l) => `<a href="${l.url}" target="${l.download ? "_self" : "_blank"}" rel="noopener"${l.download ? " download" : ""}>${escapeHtml(l.label)}</a>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function listItemHtml(item) {
    const bulletsHtml = (item.details && item.details.length)
      ? `<ul class="list-item-bullets">${item.details.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}</ul>`
      : `<p class="list-item-desc">${escapeHtml(item.description || "")}</p>`;
    const thumbsHtml = (item.images && item.images.length)
      ? `<div class="list-item-thumbs">${item.images.map((src) => `
          <button type="button" data-open-image="${escapeHtml(src)}">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(item.title || "")}">
          </button>`).join("")}</div>`
      : "";
    return `
      <div class="list-item">
        <button class="list-item-header" type="button">
          <div class="list-item-top">
            <span class="list-item-title">${escapeHtml(item.title || "")}</span>
            <span class="list-item-meta">${escapeHtml(item.meta || "")}</span>
          </div>
          <span class="list-item-chevron">+</span>
        </button>
        <div class="list-item-body">
          ${bulletsHtml}
          ${thumbsHtml}
        </div>
      </div>`;
  }

  function wireExpandables(containerId) {
    const container = $(containerId);
    container.addEventListener("click", (e) => {
      const header = e.target.closest(".list-item-header");
      if (!header) return;
      header.closest(".list-item").classList.toggle("open");
    });
  }

  // ---- Mini slideshow inside project/internship/certification cards ----
  function initCardGalleries() {
    document.querySelectorAll("[data-card-gallery]").forEach((box) => {
      const imgs = box.querySelectorAll("img");
      const dots = box.querySelectorAll(".card-image-dots span");
      if (imgs.length <= 1) return;
      let i = 0;
      setInterval(() => {
        imgs[i].classList.remove("active");
        dots[i] && dots[i].classList.remove("active");
        i = (i + 1) % imgs.length;
        imgs[i].classList.add("active");
        dots[i] && dots[i].classList.add("active");
      }, 3000);
    });
  }

  function initials(name) {
    if (!name) return "";
    return name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join("");
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ---------------------------------------------------------------
  // Photo gallery (auto slideshow under hero)
  // ---------------------------------------------------------------
  function initGallery(slides) {
    const track = $("gallery-track");
    const dotsWrap = $("gallery-dots");
    const prevBtn = $("gallery-prev");
    const nextBtn = $("gallery-next");
    const section = $("gallery");

    if (!slides.length) {
      section.style.display = "none";
      return;
    }

    track.innerHTML = slides
      .map(
        (s) =>
          `<div class="gallery-slide">${
            s.src
              ? `<div class="gallery-slide-card"><div class="gallery-slide-media"><img src="${s.src}" alt="${escapeHtml(s.caption ? s.caption.replace(/<[^>]+>/g, "") : "")}"></div><div class="gallery-slide-text">${s.kicker ? `<span class="gallery-slide-kicker">${escapeHtml(s.kicker)}</span>` : ""}<p class="gallery-slide-caption">${s.caption || ""}</p></div></div>`
              : `<div class="gallery-placeholder">📷 Add photo: <strong>${escapeHtml(s.src || "your-image.jpg")}</strong><br>(put the file in this folder and set its filename in content.js → gallery)</div>`
          }</div>`
      )
      .join("");

    dotsWrap.innerHTML = slides
      .map((_, i) => `<button class="gallery-dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Go to photo ${i + 1}"></button>`)
      .join("");

    let current = 0;
    let timer = null;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      [...dotsWrap.children].forEach((d, idx) => d.classList.toggle("active", idx === current));
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function startAutoplay() { stopAutoplay(); if (slides.length > 1) timer = setInterval(next, 4000); }
    function stopAutoplay() { if (timer) clearInterval(timer); }

    nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
    prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
    dotsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-dot");
      if (!btn) return;
      goTo(parseInt(btn.dataset.i, 10));
      startAutoplay();
    });
    $("gallery-slideshow").addEventListener("mouseenter", stopAutoplay);
    $("gallery-slideshow").addEventListener("mouseleave", startAutoplay);

    if (slides.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      dotsWrap.style.display = "none";
    }
    startAutoplay();
  }

  // ---------------------------------------------------------------
  // Video CV modal
  // ---------------------------------------------------------------
  function initVideoModal() {
    const overlay = $("video-modal-overlay");
    const body = $("video-modal-body");
    const closeBtn = $("video-modal-close");
    const videoSrc = (D.hero && D.hero.videoCV) || "";

    function open() {
      body.innerHTML = videoSrc
        ? `<video src="${videoSrc}" controls autoplay></video>`
        : `<div class="video-modal-placeholder"><div class="play-icon">▶</div>Video CV coming soon.<br>Add a file and set <code>hero.videoCV</code> in content.js to enable this.</div>`;
      overlay.classList.add("open");
    }
    function close() { overlay.classList.remove("open"); body.innerHTML = ""; }

    document.addEventListener("click", (e) => { if (e.target.closest("[data-open-video]")) open(); });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
  initVideoModal();

  // ---------------------------------------------------------------
  // PPTX viewer modal (opened from "View Presentation ↗" in a
  // project's detail modal). Uses Microsoft's Office Online viewer,
  // which needs to fetch the file from a public URL — so this only
  // renders once the site is deployed live, not from a local folder.
  // ---------------------------------------------------------------
  function initPptxModal() {
    const overlay = $("pptx-modal-overlay");
    const body = $("pptx-modal-body");
    const closeBtn = $("pptx-modal-close");

    function open(file) {
      const isPdf = /\.pdf($|\?)/i.test(file);
      if (isPdf) {
        // PDFs render with the browser's own built-in viewer — works
        // locally (file://) and once deployed, no external service needed.
        body.innerHTML = `<iframe src="${escapeHtml(file)}" frameborder="0"></iframe>`;
      } else {
        const absoluteUrl = new URL(file, window.location.href).href;
        const isLocal = window.location.protocol === "file:";
        body.innerHTML = isLocal
          ? `<div class="pptx-modal-placeholder">Live preview only works once this site is deployed online.<br>You can still <a href="${escapeHtml(file)}" download>download the PPTX</a> to view it now.</div>`
          : `<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}" frameborder="0"></iframe>`;
      }
      overlay.classList.add("open");
    }
    function close() { overlay.classList.remove("open"); body.innerHTML = ""; }

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-open-pptx]");
      if (btn) open(btn.getAttribute("data-open-pptx"));
    });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
  initPptxModal();

  // ---------------------------------------------------------------
  // Image lightbox (opened by clicking a card's cover image, e.g.
  // the poster on the Energy-Aware Production Optimizer card).
  // ---------------------------------------------------------------
  function initImageLightbox() {
    const overlay = $("image-lightbox-overlay");
    const body = $("image-lightbox-body");
    const closeBtn = $("image-lightbox-close");

    function open(src, alt) {
      body.innerHTML = `<img src="${src}" alt="${alt || ""}">`;
      overlay.classList.add("open");
    }
    function close() { overlay.classList.remove("open"); body.innerHTML = ""; }

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-image]");
      if (trigger) open(trigger.getAttribute("data-open-image"), trigger.querySelector("img")?.alt);
    });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
  initImageLightbox();

  // ---------------------------------------------------------------
  // Project detail modal (opened from "View Project Details")
  // ---------------------------------------------------------------
  function initProjectModal(registry) {
    const overlay = $("project-modal-overlay");
    const body = $("project-modal-body");
    const closeBtn = $("project-modal-close");
    let galleryTimer = null;

    function sectionHtml(heading, text) {
      if (!text) return "";
      // Note: text is inserted as raw HTML (not escaped) so you can use
      // tags like <strong>...</strong> in content.js to bold parts of it.
      return `<div class="project-detail-section"><h3>${escapeHtml(heading)}</h3><p>${text}</p></div>`;
    }

    function galleryHtml(images, title, layout) {
      if (!images || !images.length) return "";
      if (layout === "grid") {
        // Fixed grid of all images at once — no slideshow/rotation.
        // Each entry can be a plain filename string, or an object
        // { src: "...", caption: "..." } to show a short caption below it.
        return `
          <div class="project-modal-gallery-grid">
            ${images.map((entry) => {
              const src = typeof entry === "string" ? entry : entry.src;
              const caption = typeof entry === "string" ? "" : (entry.caption || "");
              return `
                <div class="project-modal-gallery-grid-cell">
                  <div class="project-modal-gallery-grid-item" data-open-image="${escapeHtml(src)}"><img src="${src}" alt="${escapeHtml(caption || title || "")}"></div>
                  ${caption ? `<p class="project-modal-gallery-grid-caption">${escapeHtml(caption)}</p>` : ""}
                </div>`;
            }).join("")}
          </div>`;
      }
      return `
        <div class="project-modal-gallery" data-modal-gallery>
          ${images.map((src, i) => `<img src="${src}" alt="${escapeHtml(title || "")}" class="${i === 0 ? "active" : ""}">`).join("")}
          ${images.length > 1 ? `
            <button type="button" class="gallery-arrow prev" data-modal-prev aria-label="Previous photo">‹</button>
            <button type="button" class="gallery-arrow next" data-modal-next aria-label="Next photo">›</button>
            <div class="project-modal-dots">${images.map((_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("")}</div>
          ` : ""}
        </div>`;
    }

    function wireGallery() {
      const box = body.querySelector("[data-modal-gallery]");
      if (!box) return;
      const imgs = box.querySelectorAll("img");
      const dots = box.querySelectorAll(".project-modal-dots span");
      if (imgs.length <= 1) return;
      let i = 0;
      function goTo(n) {
        imgs[i].classList.remove("active");
        dots[i] && dots[i].classList.remove("active");
        i = (n + imgs.length) % imgs.length;
        imgs[i].classList.add("active");
        dots[i] && dots[i].classList.add("active");
      }
      box.querySelector("[data-modal-next]")?.addEventListener("click", () => { goTo(i + 1); restart(); });
      box.querySelector("[data-modal-prev]")?.addEventListener("click", () => { goTo(i - 1); restart(); });
      dots.forEach((d, idx) => d.addEventListener("click", () => { goTo(idx); restart(); }));
      function restart() { if (galleryTimer) clearInterval(galleryTimer); galleryTimer = setInterval(() => goTo(i + 1), 3500); }
      restart();
    }

    function pptxHtml(project) {
      if (!project.pptx) return "";
      const isPdf = /\.pdf($|\?)/i.test(project.pptx);
      const heading = isPdf ? "Document" : "Presentation";
      const viewLabel = isPdf ? "View Document ↗" : "View Presentation ↗";
      const downloadLabel = isPdf ? "Download PDF ⬇" : "Download PPTX ⬇";
      return `
        <div class="project-detail-section project-pptx-block">
          <h3>${heading}</h3>
          <div class="pptx-actions">
            <button type="button" class="btn primary" data-open-pptx="${escapeHtml(project.pptx)}">${viewLabel}</button>
            <a class="btn" href="${escapeHtml(project.pptx)}" download>${downloadLabel}</a>
          </div>
        </div>`;
    }

    function timelineHtml(project) {
      if (!project.timeline || !project.timeline.length) return "";
      return `
        <div class="project-detail-section project-timeline-block">
          <h3>Role Timeline</h3>
          <div class="project-timeline">
            ${project.timeline.map((t) => `
              <div class="project-timeline-item">
                <div class="project-timeline-dot"></div>
                <div class="project-timeline-body">
                  <div class="project-timeline-role">${escapeHtml(t.role || "")}</div>
                  <div class="project-timeline-period">${escapeHtml(t.period || "")}</div>
                  ${t.description ? `<p>${escapeHtml(t.description)}</p>` : ""}
                </div>
              </div>`).join("")}
          </div>
        </div>`;
    }

    function open(project) {
      body.innerHTML = `
        ${galleryHtml(project.images, project.title, project.galleryLayout)}
        <div class="project-modal-content">
          <p class="card-tag">${escapeHtml(project.tag || "")}</p>
          <h2 class="project-modal-title">${escapeHtml(project.title || "")}</h2>
          ${project.description ? `<p class="project-modal-lead">${escapeHtml(project.description)}</p>` : ""}
          ${timelineHtml(project)}
          ${sectionHtml("Overview", project.fullAbstract)}
          ${sectionHtml("Limitations", project.limitations)}
          ${sectionHtml("Future Scope", project.futureScope)}
          ${pptxHtml(project)}
          <div class="card-tools">${(project.tools || []).map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
          <div class="card-links">${(project.links || []).map((l) => `<a href="${l.url}" target="${l.download ? "_self" : "_blank"}" rel="noopener"${l.download ? " download" : ""}>${escapeHtml(l.label)}</a>`).join("")}</div>
        </div>`;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      if (project.galleryLayout !== "grid") wireGallery();
    }
    function close() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      if (galleryTimer) clearInterval(galleryTimer);
      body.innerHTML = "";
    }

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-project]");
      if (!trigger) return;
      const project = registry[trigger.dataset.openProject];
      if (project) open(project);
    });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // ---------------------------------------------------------------
  // Page router — Home (Hero + Gallery + About) is always the
  // default view; every other nav link opens its own full page.
  // ---------------------------------------------------------------
  const PAGE_IDS = ["home", "research", "projects-hub", "formula-projects", "internship", "activities", "hobbies", "certifications"];
  // Maps a URL hash to { page, scrollTo } — "home" hashes just scroll
  // within the home page instead of switching pages.
  const HASH_ROUTES = {
    "": { page: "home" },
    "top": { page: "home" },
    "about": { page: "home", scrollTo: "about" },
    "research": { page: "research" },
    "academic-projects": { page: "projects-hub" },
    "formula-student-projects": { page: "formula-projects" },
    "projects": { page: "internship" },
    "activities": { page: "activities" },
    "hobbies": { page: "hobbies" },
    "certifications": { page: "certifications" },
    "contact": { page: "home", scrollTo: "contact" },
  };

  function showPage(pageId) {
    PAGE_IDS.forEach((pid) => {
      const el = $("page-" + pid);
      if (el) el.classList.toggle("active", pid === pageId);
    });
  }

  function routeFromHash() {
    const key = window.location.hash.replace("#", "");
    const route = HASH_ROUTES[key] || { page: "home" };
    showPage(route.page);
    if (route.scrollTo) {
      setTimeout(() => {
        const target = $(route.scrollTo);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
    $("nav-links").classList.remove("open");
  }

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
})();
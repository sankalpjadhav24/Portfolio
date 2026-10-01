/**
 * Sankalp Jadhav — Engineering Portfolio Client Controller
 * Pure Vanilla ES6+ — Zero Dependencies
 */

(function () {
  'use strict';

  // DOM Elements
  const headerNav = document.getElementById('header-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const projectGrid = document.getElementById('project-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastNotice = document.getElementById('toast-notice');

  /**
   * 1. Navigation & Scrollspy
   */
  function handleNavScroll() {
    if (window.scrollY > 40) {
      headerNav.classList.add('scrolled');
    } else {
      headerNav.classList.remove('scrolled');
    }

    // Scrollspy section highlight
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    // Close mobile drawer when clicking a navigation link
    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    mobileToggle.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    mobileToggle.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }

  /**
   * 2. Projects Rendering & Filter Logic
   */
  function renderProjects(filter = 'all') {
    if (!projectGrid || typeof PROJECTS_DATA === 'undefined') return;

    // Filter projects (excluding flagship from the regular grid if featured separately, or keeping all in grid)
    // We showcase the non-flagship in this grid since MindWar Arena has its dedicated flagship showcase above.
    const filtered = PROJECTS_DATA.filter(project => {
      if (project.flagship) return false; // Handled in dedicated flagship hero section
      if (filter === 'all') return true;
      return project.category === filter;
    });

    projectGrid.innerHTML = filtered.map(p => `
      <article class="card project-card" data-category="${p.category}" id="project-card-${p.id}">
        <div>
          <div class="project-preview">
            <img src="${p.visual}" alt="${p.alt}" loading="lazy" />
          </div>
          <div class="card-header">
            <div>
              <span class="badge ${p.badge.includes('HACKATHON') ? 'badge-amber' : 'badge-cyan'}">${p.badge}</span>
              <h3 class="card-title" style="margin-top: 8px;">${p.title}</h3>
              <p class="card-subtitle">${p.categoryLabel}</p>
            </div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.55; color: var(--text-secondary); margin-bottom: 1rem;">
            ${p.summary}
          </p>
          ${p.teamContext ? `
            <div style="font-family: var(--font-mono); font-size: 11px; color: #fbbf24; background: rgba(245, 158, 11, 0.08); padding: 6px 10px; border-radius: 4px; border: 1px solid rgba(245, 158, 11, 0.2); margin-bottom: 12px;">
              ⚡ ${p.teamContext}
            </div>
          ` : ''}
          <div class="tech-tag-group">
            ${p.technologies.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.technologies.length > 5 ? `<span class="tech-tag">+${p.technologies.length - 5}</span>` : ''}
          </div>
        </div>

        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.openProjectModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            View Details
          </button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </article>
    `).join('');
  }

  // Filter Button Click Handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  /**
   * 3. Architecture Deep-Dive Modal
   */
  window.openProjectModal = function (projectId) {
    if (!modalBackdrop || !modalBody || typeof PROJECTS_DATA === 'undefined') return;

    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: var(--space-4);">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
          <span class="badge ${project.badge.toLowerCase().includes('hackathon') ? 'badge-amber' : 'badge-cyan'}">${project.badge}</span>
          <span class="badge">${project.status}</span>
        </div>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: #fff; margin-bottom: 6px;">${project.title}</h2>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan);">${project.categoryLabel}</p>
      </div>

      <div style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-subtle); background: #070b14;">
        <img src="${project.visual}" alt="${project.alt}" style="width: 100%; height: auto; display: block; object-fit: contain;" />
      </div>

      ${project.teamContext ? `
        <div style="font-family: var(--font-mono); font-size: 12px; color: #fbbf24; background: rgba(245, 158, 11, 0.08); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.2); margin-bottom: 1.25rem;">
          ⚡ <strong>Team Context:</strong> ${project.teamContext}
        </div>
      ` : ''}

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: #f87171; text-transform: uppercase; margin-bottom: 6px;">The Challenge</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${project.problem}</p>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: #34d399; text-transform: uppercase; margin-bottom: 6px;">How I Built It</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${project.solution}</p>
        </div>
      </div>

      <h3 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">How It Works Under the Hood</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        ${project.architecture.map((arch, idx) => `
          <div style="padding: 0.85rem; background: rgba(255,255,255,0.02); border-left: 2px solid var(--accent-cyan); border-radius: 0 6px 6px 0;">
            <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600; color: #fff; margin-bottom: 4px;">
              [0${idx + 1}] ${arch.title}
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
              ${arch.detail}
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">Highlights at a Glance</h3>
      <div class="metric-bar" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 1.5rem;">
        ${project.metrics.map(m => `
          <div class="metric-item">
            <span class="metric-label">${m.label}</span>
            <span class="metric-val">${m.value}</span>
          </div>
        `).join('')}
      </div>

      <h3 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem;">Technologies Used</h3>
      <div class="tech-tag-group" style="margin-bottom: 1.5rem;">
        ${project.technologies.map(t => `<span class="tech-tag" style="background: rgba(56, 189, 248, 0.08); border-color: rgba(56, 189, 248, 0.25); color: #e2e8f0;">${t}</span>`).join('')}
      </div>

      <div style="display: flex; align-items: center; justify-content: flex-end; gap: 12px; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <button type="button" class="btn btn-secondary" onclick="window.closeProjectModal()">Close</button>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View on GitHub
        </a>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  };

  window.closeProjectModal = function () {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        window.closeProjectModal();
      }
    });
  }

  // Keyboard accessibility: ESC closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalBackdrop && modalBackdrop.classList.contains('open')) {
        window.closeProjectModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    }
  });

  /**
   * 4. Email Clipboard Copy
   */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'prof.sankalpjadhav@gmail.com';

      try {
        if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(email);
        showToast(`Copied ${email} to clipboard`);
      } catch {
        showToast(`Email: ${email}`);
      }
    });
  }

  function showToast(message) {
    if (!toastNotice) return;
    const textEl = toastNotice.querySelector('.toast-text');
    if (textEl) textEl.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }

  /**
   * Initialize on DOM Load
   */
  document.addEventListener('DOMContentLoaded', () => {
    handleNavScroll();
    renderProjects('all');

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });

})();

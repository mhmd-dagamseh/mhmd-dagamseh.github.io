/**
 * nav.js — shared navigation behavior
 * Include at bottom of <body> on every page.
 * Usage: <script src="components/nav.js" data-page="home"></script>
 *        OR window.NAV_PAGE = 'about'; before including.
 */
(function () {
    const currentPage = document.currentScript?.dataset?.page
        || window.NAV_PAGE
        || document.body.dataset.page
        || 'home';

    const topnav  = document.getElementById('topnav');
    const toggle  = document.getElementById('navToggle');
    const links   = document.getElementById('navLinks');

    // ── Mark active link ──
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === currentPage) link.classList.add('active');
    });

    // ── Light navbar for light-bg pages ──
    const lightPages = ['about', 'quotes', 'certificates'];
    if (lightPages.includes(currentPage)) topnav.classList.add('light');

    // ── Mobile toggle ──
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
        if (!links.contains(e.target) && !toggle.contains(e.target))
            links.classList.remove('open');
    });

    // ── Scroll shadow ──
    window.addEventListener('scroll', () => {
        topnav.style.boxShadow = window.scrollY > 8
            ? '0 2px 20px rgba(0,0,0,.12)' : '';
    }, { passive: true });
})();

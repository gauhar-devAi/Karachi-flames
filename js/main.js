// ── 1. Menu Filter Tabs Logic ──
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card-wrap');

// Shuru mein sirf starters dikhao baaki chupao
menuCards.forEach(card => {
  if (card.getAttribute('data-category') !== 'starters') {
    card.style.display = 'none';
  }
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active class button state update karein
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectCategory = btn.getAttribute('data-category');

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (selectCategory === cardCategory) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// ── 2. Smart Navbar Auto-Close Logic (Links Fix) ──
const navLinks = document.querySelectorAll('.nav-link, .btn-order');
const navMenu = document.getElementById('navMenu');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check karein agar mobile toggler dropdown visible/open hai ('show' class)
    if (navMenu.classList.contains('show')) {
      // Bootstrap native method se programmatic collapse trigger karein
      const bCollapse = bootstrap.Collapse.getInstance(navMenu);
      if (bCollapse) {
        bCollapse.hide();
      } else {
        new bootstrap.Collapse(navMenu).hide();
      }
    }
  });
});
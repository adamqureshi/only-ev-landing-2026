(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // close on click
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Form -> mailto generator (works on GitHub Pages, no backend)
  const form = document.getElementById('offerForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const required = ['name','email','zip','vehicle','mileage','sellerType'];
      for (const key of required) {
        const val = (data.get(key) || '').toString().trim();
        if (!val) {
          alert('Please fill out all required fields.');
          return;
        }
      }

      const subject = `Cash Offer Request - ${data.get('vehicle')}`;
      const lines = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `ZIP: ${data.get('zip')}`,
        `Seller Type: ${data.get('sellerType')}`,
        `Vehicle: ${data.get('vehicle')}`,
        `Mileage: ${data.get('mileage')}`,
        '',
        'Notes:',
        (data.get('notes') || '').toString().trim() || '(none)'
      ];

      const body = encodeURIComponent(lines.join('\n'));
      const href = `mailto:contact@onlyev.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Use location.href for broad compatibility
      window.location.href = href;
    });
  }
})();
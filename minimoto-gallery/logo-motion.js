(() => {
  const brands = [...document.querySelectorAll('.brand, .about-brand')];
  if (!brands.length) return;

  brands.forEach((brand) => {
    if (brand.classList.contains('logo-motion')) return;
    brand.classList.add('logo-motion');

    const masks = document.createElement('span');
    masks.className = 'logo-motion-dot-masks';
    masks.setAttribute('aria-hidden', 'true');
    masks.innerHTML = '<i></i><i></i><i></i>';

    const dots = document.createElement('span');
    dots.className = 'logo-motion-dots';
    dots.setAttribute('aria-hidden', 'true');
    dots.innerHTML = '<i></i><i></i><i></i>';

    brand.append(masks, dots);
  });

  let pointer = { x: -9999, y: -9999 };
  let frame = 0;

  const update = () => {
    frame = 0;
    brands.forEach((brand) => {
      const r = brand.getBoundingClientRect();
      const dx = Math.max(r.left - pointer.x, 0, pointer.x - r.right);
      const dy = Math.max(r.top - pointer.y, 0, pointer.y - r.bottom);
      brand.classList.toggle('is-logo-near', Math.hypot(dx, dy) < 90);
    });
  };

  document.addEventListener('pointermove', (event) => {
    pointer = { x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(update);
  }, { passive: true });

  brands.forEach((brand) => {
    brand.addEventListener('focusin', () => brand.classList.add('is-logo-near'));
    brand.addEventListener('focusout', () => brand.classList.remove('is-logo-near'));
  });
})();

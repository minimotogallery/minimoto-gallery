(() => {
  const links = [...document.querySelectorAll("#primary-nav .drift-link")];
  if (!links.length) return;

  const sectionLinks = links.filter((link) => link.dataset.driftSection);
  const dialogLinks = links.filter((link) => link.dataset.driftDialog);
  const transientLinks = links.filter((link) => link.classList.contains("drift-link--transient"));
  let dialogOwner = null;
  let scrollFrame = 0;

  function skid(link) {
    link.classList.remove("is-skidding");
    void link.offsetWidth;
    link.classList.add("is-skidding");
    window.setTimeout(() => link.classList.remove("is-skidding"), 340);
  }

  function activate(link, animate = false) {
    links.forEach((item) => {
      const active = item === link;
      item.classList.toggle("is-active", active);
      if (active) {
        item.setAttribute("aria-current", "location");
      } else {
        item.removeAttribute("aria-current");
      }
    });
    if (animate && link) skid(link);
  }

  function sectionAtReadingLine() {
    const header = document.querySelector(".site-header");
    const headerHeight = header?.getBoundingClientRect().height || 68;
    const readingLine = window.scrollY + headerHeight + Math.min(window.innerHeight * .28, 240);
    let current = sectionLinks[0] || null;

    sectionLinks.forEach((link) => {
      const target = document.getElementById(link.dataset.driftSection);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY;
      if (top <= readingLine) current = link;
    });

    return current;
  }

  function syncToScroll() {
    scrollFrame = 0;
    if (dialogOwner) return;
    activate(sectionAtReadingLine(), false);
  }

  function scheduleScrollSync() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(syncToScroll);
  }

  links.forEach((link) => {
    link.addEventListener("pointerdown", () => skid(link));
  });

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => activate(link, false));
  });

  transientLinks.forEach((link) => {
    link.addEventListener("click", () => {
      window.setTimeout(syncToScroll, 380);
    });
  });

  dialogLinks.forEach((link) => {
    const dialog = document.getElementById(link.dataset.driftDialog);
    if (!dialog) return;

    link.addEventListener("click", () => {
      dialogOwner = link;
      activate(link, false);
    });

    dialog.addEventListener("close", () => {
      if (dialogOwner === link) dialogOwner = null;
      syncToScroll();
    });

    const observer = new MutationObserver(() => {
      if (dialog.open) {
        dialogOwner = link;
        activate(link, false);
      } else if (dialogOwner === link) {
        dialogOwner = null;
        syncToScroll();
      }
    });

    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
  });

  window.addEventListener("scroll", scheduleScrollSync, { passive: true });
  window.addEventListener("resize", scheduleScrollSync, { passive: true });
  window.addEventListener("hashchange", scheduleScrollSync);

  syncToScroll();
})();

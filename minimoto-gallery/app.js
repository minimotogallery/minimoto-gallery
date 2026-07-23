const projects = [
  {
    id: "MM-001",
    group: "el-cielo",
    title: "El cielo me cuenta algunas mentiras, estoy cayendo",
    artist: "Andrea Angulo + Jose Casas",
    year: "2025",
    type: "Exposición / residencia",
    status: "Archivo activo",
    images: [
      {
        src: "./assets/el-cielo-installation.jpg",
        alt: "Vista general de la exposición en el Centro Párraga.",
        caption: "Vista de exposición / Centro Párraga"
      },
      {
        src: "./assets/jose-casas-01.jpg",
        alt: "Pieza de Jose Casas instalada en la unión entre pared y suelo.",
        caption: "Jose Casas / detalle de instalación"
      },
      {
        src: "./assets/andrea-angulo-01.jpg",
        alt: "Instalación de Andrea Angulo con objetos cotidianos y agua.",
        caption: "Andrea Angulo / proceso e instalación"
      },
      {
        src: "./assets/jose-casas-02.jpg",
        alt: "Piezas materiales de Jose Casas instaladas sobre muro blanco.",
        caption: "Jose Casas / superficies y fragmentos"
      }
    ],
    body: `
      <p>Resultado de una residencia de Andrea Angulo y Jose Casas en Centro Negra, Blanca, organizada por MiniMoto y presentada posteriormente en el Centro Párraga.</p>
      <p>Dos prácticas atravesadas por el extrañamiento, la materialidad, el paisaje y la transformación de objetos y superficies.</p>
      <blockquote>La residencia no funciona como una fábrica de resultados, sino como un tiempo para observar, adaptarse y producir desde el lugar.</blockquote>
    `,
    tags: ["Andrea Angulo", "Jose Casas", "Blanca", "Centro Párraga"],
    x: "25%",
    y: "3%",
    w: "34vw",
    maxW: 600,
    ratio: "16 / 10",
    rotation: "-1.2deg",
    mobileRotation: "-1deg",
    shape: "shape-slashed",
    mark: "project cluster"
  },
  {
    id: "MM-001/A",
    group: "el-cielo",
    title: "Redomesticar los objetos",
    artist: "Andrea Angulo",
    year: "2025",
    type: "Proceso / escultura",
    status: "Constelación I",
    images: [
      {
        src: "./assets/andrea-angulo-01.jpg",
        alt: "Instalación de Andrea Angulo con objetos cotidianos y agua.",
        caption: "Andrea Angulo / objetos, agua y desplazamiento"
      }
    ],
    body: `
      <p>Objetos fabricados en masa, agua, juguetes y materiales de uso diario son desplazados de su función para revelar otras versiones de sí mismos.</p>
      <blockquote>El objeto deja de obedecer y comienza a comportarse como otra cosa.</blockquote>
    `,
    tags: ["Objeto", "Agua", "Extrañamiento", "Escultura"],
    x: "3%",
    y: "19%",
    w: "24vw",
    maxW: 390,
    ratio: "4 / 3",
    rotation: "2.4deg",
    mobileRotation: "1.4deg",
    shape: "shape-codex",
    mark: "persona"
  },
  {
    id: "MM-001/B",
    group: "el-cielo",
    title: "Paisaje, tela, grieta",
    artist: "Jose Casas",
    year: "2025",
    type: "Pintura instalativa",
    status: "Constelación II",
    images: [
      {
        src: "./assets/jose-casas-01.jpg",
        alt: "Pieza de Jose Casas instalada en la unión entre pared y suelo.",
        caption: "Jose Casas / materia situada"
      },
      {
        src: "./assets/jose-casas-02.jpg",
        alt: "Piezas materiales de Jose Casas instaladas sobre muro blanco.",
        caption: "Jose Casas / fragmentos"
      }
    ],
    body: `
      <p>Telas de segunda mano, cal, yeso, presión y accidentes trasladan al espacio la orografía, la luz y las texturas de Blanca.</p>
      <blockquote>Lo doméstico y lo mineral se contaminan.</blockquote>
    `,
    tags: ["Paisaje", "Tela", "Pintura", "Materialidad"],
    x: "62%",
    y: "27%",
    w: "25vw",
    maxW: 430,
    ratio: "4 / 3",
    rotation: "-2.8deg",
    mobileRotation: "-1.2deg",
    shape: "shape-shield",
    mark: "relic"
  },
  {
    id: "MM-002",
    group: "joel",
    title: "Ejercicios para la unificación",
    artist: "Joel Blanco",
    year: "2026",
    type: "Activación / exposición",
    status: "En producción",
    images: [
      {
        src: "./assets/joel-blanco-01.jpg",
        alt: "Minimoto junto a una caja de transporte dentro del espacio.",
        caption: "Joel Blanco / dispositivo en proceso"
      }
    ],
    body: `
      <p>Micromitologías del dormitorio, bienes digitales, ejercicios de mandíbula y una épica masculina desplazada hacia objetos mínimos.</p>
      <p>El proyecto circula entre activación, justa de minimotos y exposición.</p>
    `,
    tags: ["Masculinidad", "Velocidad", "Activación", "Dormitorio"],
    x: "72%",
    y: "6%",
    w: "20vw",
    maxW: 340,
    ratio: "3 / 4",
    rotation: "1.8deg",
    mobileRotation: "1deg",
    shape: "shape-codex",
    mark: "quest"
  },
  {
    id: "MM-003",
    group: "circulacion",
    title: "Circulación",
    artist: "MiniMoto / RE·UTOPÍA",
    year: "2026",
    type: "Red / territorio",
    status: "Proceso abierto",
    images: [
      {
        src: "./assets/minimoto-sigil.png",
        alt: "Símbolo de tres puntos de MiniMoto Gallery.",
        caption: "MiniMoto / diagrama de circulación"
      }
    ],
    body: `
      <p>Una red de desplazamientos entre investigación, producción, exposición y territorio.</p>
      <p>MiniMoto aparece como punto de paso, escala intermedia y artefacto de mediación.</p>
    `,
    tags: ["Circulación", "RE/UTOPÍA", "Archivo", "Territorio"],
    x: "14%",
    y: "53%",
    w: "29vw",
    maxW: 480,
    ratio: "16 / 9",
    rotation: "-1.7deg",
    mobileRotation: "-1deg",
    shape: "text-relic",
    mark: "ordo"
  },
  {
    id: "MM-004",
    group: "identidad",
    title: "No es un cubo blanco",
    artist: "MiniMoto Gallery",
    year: "2026",
    type: "Posición",
    status: "Regla del dispositivo",
    images: [
      {
        src: "./assets/minimoto-wordmark.png",
        alt: "Logotipo de MiniMoto Gallery.",
        caption: "MiniMoto / posición"
      },
      {
        src: "./assets/minimoto-sigil.png",
        alt: "Símbolo de tres puntos de MiniMoto Gallery.",
        caption: "MiniMoto / sigilo"
      }
    ],
    body: `
      <p>MiniMoto trabaja con la escala, la proximidad y la fricción entre proyectos.</p>
      <p>Cada exposición altera el dispositivo y deja restos para la siguiente.</p>
    `,
    tags: ["Site-specific", "Mediación", "Sureste", "Dispositivo"],
    x: "52%",
    y: "68%",
    w: "27vw",
    maxW: 460,
    ratio: "5 / 2",
    rotation: "2.1deg",
    mobileRotation: "1.2deg",
    shape: "text-relic",
    mark: "regula"
  }
];

const artistProfiles = [
  {
    name: "Andrea Angulo",
    role: "Artista",
    note: "Objetos cotidianos, desplazamiento de uso, agua y extrañamiento."
  },
  {
    name: "Jose Casas",
    role: "Artista",
    note: "Pintura instalativa, paisaje, telas encontradas y materialidad."
  },
  {
    name: "Joel Blanco",
    role: "Artista",
    note: "Masculinidad, micromitologías digitales, activación y dormitorio."
  },
  {
    name: "Diego Lobenal",
    role: "Comisariado / gestión",
    note: "Acompañamiento de procesos, mediación y construcción del dispositivo."
  }
];

const projectLayer = document.querySelector("#project-layer");
const projectDialog = document.querySelector("#project-dialog");
const indexDialog = document.querySelector("#index-dialog");
const artistsDialog = document.querySelector("#artists-dialog");
const indexList = document.querySelector("#project-index-list");
const artistsList = document.querySelector("#artists-list");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

let activeProject = null;
let activeImageIndex = 0;
let zCounter = 100;
const originalPositions = new Map();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createProjectCard(project, index) {
  const article = document.createElement("article");
  article.className = `project-card ${project.shape || ""}`;
  article.setAttribute("role", "listitem");
  article.dataset.projectId = project.id;

  const widthValue = `min(${project.w}, ${project.maxW}px)`;
  article.style.setProperty("--x", project.x);
  article.style.setProperty("--y", project.y);
  article.style.setProperty("--w", widthValue);
  article.style.setProperty("--r", project.rotation);
  article.style.setProperty("--mobile-r", project.mobileRotation);
  article.style.setProperty("--ratio", project.ratio);
  article.style.setProperty("--z", String(index + 3));

  originalPositions.set(project.id, {
    left: project.x,
    top: project.y,
    z: index + 3
  });

  const firstImage = project.images[0];

  article.innerHTML = `
    <div class="project-surface">
      <button
        class="project-open"
        type="button"
        aria-label="Ampliar ${project.title}, de ${project.artist}"
      >
        <span class="project-head">
          <span class="project-index">${project.id}</span>
          <span>${project.status}</span>
          <span class="project-year">${project.year}</span>
        </span>

        <span class="project-image">
          <img
            src="${firstImage.src}"
            alt="${firstImage.alt}"
            loading="${index < 3 ? "eager" : "lazy"}"
            decoding="async"
          >
        </span>

        <span class="project-copy">
          <h3>${project.title}</h3>
          <p>${project.artist} / ${project.type}</p>
        </span>
      </button>

      <button
        class="drag-handle"
        type="button"
        aria-label="Mover ${project.title} dentro del tablero"
        title="Mover ficha"
      >⠿</button>

      <span class="project-mark" aria-hidden="true">${project.mark}</span>
    </div>
  `;

  const openButton = article.querySelector(".project-open");
  const handle = article.querySelector(".drag-handle");

  openButton.addEventListener("click", () => openProject(project));
  enableDrag(article, handle);

  return article;
}

function enableDrag(card, handle) {
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  handle.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(max-width: 980px)").matches) return;

    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    card.classList.add("is-moving");
    card.style.setProperty("--z", String(++zCounter));

    const boardRect = projectLayer.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    startX = event.clientX;
    startY = event.clientY;
    startLeft = cardRect.left - boardRect.left;
    startTop = cardRect.top - boardRect.top;
  });

  handle.addEventListener("pointermove", (event) => {
    if (!handle.hasPointerCapture(event.pointerId)) return;

    const maxLeft = Math.max(0, projectLayer.clientWidth - card.offsetWidth);
    const maxTop = Math.max(0, projectLayer.clientHeight - card.offsetHeight);

    const nextLeft = clamp(startLeft + event.clientX - startX, 0, maxLeft);
    const nextTop = clamp(startTop + event.clientY - startY, 0, maxTop);

    card.style.left = `${nextLeft}px`;
    card.style.top = `${nextTop}px`;
  });

  handle.addEventListener("pointerup", (event) => {
    if (!handle.hasPointerCapture(event.pointerId)) return;
    handle.releasePointerCapture(event.pointerId);
    card.classList.remove("is-moving");
  });

  handle.addEventListener("keydown", (event) => {
    if (window.matchMedia("(max-width: 980px)").matches) return;

    const step = event.shiftKey ? 30 : 10;
    const arrows = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (!arrows.includes(event.key)) return;
    event.preventDefault();

    const currentLeft = card.offsetLeft;
    const currentTop = card.offsetTop;
    const maxLeft = Math.max(0, projectLayer.clientWidth - card.offsetWidth);
    const maxTop = Math.max(0, projectLayer.clientHeight - card.offsetHeight);

    const deltaX =
      event.key === "ArrowLeft" ? -step :
      event.key === "ArrowRight" ? step : 0;

    const deltaY =
      event.key === "ArrowUp" ? -step :
      event.key === "ArrowDown" ? step : 0;

    card.style.left = `${clamp(currentLeft + deltaX, 0, maxLeft)}px`;
    card.style.top = `${clamp(currentTop + deltaY, 0, maxTop)}px`;
    card.style.setProperty("--z", String(++zCounter));
  });
}

function renderProjects() {
  projectLayer.replaceChildren();
  projects.forEach((project, index) => {
    projectLayer.append(createProjectCard(project, index));
  });
}

function openProject(project, showModal = true) {
  activeProject = project;
  activeImageIndex = 0;

  const projectNumber = projects.indexOf(project) + 1;
  const frameAccent = projectNumber % 3 === 0 ? "var(--blue)" : "var(--red)";
  const markAccent = projectNumber % 2 === 0 ? "var(--blue)" : "var(--red)";
  const isTextRelic = project.shape === "text-relic";

  const dialogCard = document.querySelector("#dialog-card");
  dialogCard.className = `expanded-project-card ${project.shape || ""}`;
  dialogCard.style.setProperty("--dialog-accent", frameAccent);
  dialogCard.style.setProperty("--dialog-mark-accent", markAccent);
  dialogCard.style.setProperty(
    "--dialog-visual",
    isTextRelic ? "var(--red)" : "var(--black)"
  );

  document.querySelector("#dialog-id").textContent = project.id;
  document.querySelector("#dialog-status").textContent = project.status;
  document.querySelector("#dialog-year").textContent = project.year;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-artist").textContent = project.artist;
  document.querySelector("#dialog-type").textContent = project.type;
  document.querySelector("#dialog-mark").textContent = project.mark;

  document.querySelector("#dialog-body").innerHTML = project.body;
  document.querySelector("#dialog-tags").innerHTML =
    project.tags.map(tag => `<span>${tag}</span>`).join("");

  renderDialogImage();
  renderRelatedProjects();

  if (showModal && !projectDialog.open) {
    projectDialog.showModal();
  }

  requestAnimationFrame(() => {
    projectDialog.scrollTop = 0;
    const card = document.querySelector("#dialog-card");
    if (card) card.scrollTop = 0;
  });
}

function renderDialogImage() {
  if (!activeProject) return;

  const images = activeProject.images;
  const image = images[activeImageIndex];

  const dialogImage = document.querySelector("#dialog-image");
  dialogImage.src = image.src;
  dialogImage.alt = image.alt;

  document.querySelector("#image-count").textContent =
    `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  document.querySelector("#image-caption").textContent = image.caption || "";

  const hasGallery = images.length > 1;
  document.querySelector(".gallery-prev").hidden = !hasGallery;
  document.querySelector(".gallery-next").hidden = !hasGallery;
}

function stepGallery(direction) {
  if (!activeProject) return;

  const total = activeProject.images.length;
  activeImageIndex = (activeImageIndex + direction + total) % total;
  renderDialogImage();
}

function renderRelatedProjects() {
  const relatedList = document.querySelector("#related-list");
  const relatedSection = document.querySelector(".related-projects");

  relatedList.replaceChildren();

  const related = projects.filter(project =>
    project.group === activeProject.group && project.id !== activeProject.id
  );

  relatedSection.hidden = related.length === 0;

  related.forEach(project => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${project.id} — ${project.title}`;
    button.addEventListener("click", () => openProject(project, false));
    relatedList.append(button);
  });
}

function renderIndex() {
  indexList.replaceChildren();

  projects.forEach((project, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    button.type = "button";
    button.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${project.title}<br><small>${project.artist}</small></strong>
      <span>${project.year} / ${project.status}</span>
    `;

    button.addEventListener("click", () => {
      indexDialog.close();
      openProject(project);
    });

    item.append(button);
    indexList.append(item);
  });
}

function renderArtists() {
  artistsList.replaceChildren();

  artistProfiles.forEach(artist => {
    const entry = document.createElement("article");
    entry.className = "artist-entry";
    entry.innerHTML = `
      <h3>${artist.name}</h3>
      <p>${artist.role}</p>
      <p>${artist.note}</p>
    `;
    artistsList.append(entry);
  });
}

function randomizeBoard() {
  if (window.matchMedia("(max-width: 980px)").matches) return;

  const boardWidth = projectLayer.clientWidth;
  const boardHeight = projectLayer.clientHeight;

  [...projectLayer.children].forEach(card => {
    const maxLeft = Math.max(0, boardWidth - card.offsetWidth);
    const maxTop = Math.max(0, boardHeight - card.offsetHeight);

    card.style.left = `${Math.round(Math.random() * maxLeft)}px`;
    card.style.top = `${Math.round(Math.random() * maxTop)}px`;
    card.style.setProperty("--z", String(++zCounter));
  });
}

function restoreBoard() {
  [...projectLayer.children].forEach(card => {
    const position = originalPositions.get(card.dataset.projectId);
    if (!position) return;

    card.style.left = position.left;
    card.style.top = position.top;
    card.style.setProperty("--z", String(position.z));
  });
}

function closeMenu() {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const opening = !primaryNav.classList.contains("is-open");
  primaryNav.classList.toggle("is-open", opening);
  menuToggle.setAttribute("aria-expanded", String(opening));
});

primaryNav.querySelectorAll("a, button").forEach(item => {
  item.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 980px)").matches) closeMenu();
  });
});

document.querySelector("#remix").addEventListener("click", randomizeBoard);
document.querySelector("#reset-layout").addEventListener("click", restoreBoard);

document.querySelector("#index-open").addEventListener("click", () => {
  indexDialog.showModal();
});

document.querySelector("#artists-open").addEventListener("click", () => {
  artistsDialog.showModal();
});

document.querySelectorAll(".dialog-close").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

document.querySelector(".gallery-prev").addEventListener("click", () => stepGallery(-1));
document.querySelector(".gallery-next").addEventListener("click", () => stepGallery(1));

projectDialog.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") stepGallery(-1);
  if (event.key === "ArrowRight") stepGallery(1);
});

[projectDialog, indexDialog, artistsDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (outside) dialog.close();
  });
});

function updateTime() {
  const time = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());

  document.querySelector("#local-time").textContent = `${time} / Murcia`;
}

renderProjects();
renderIndex();
renderArtists();
updateTime();
setInterval(updateTime, 1000);

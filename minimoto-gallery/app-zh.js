const projects = [
  {
    id: "MM-001",
    group: "el-cielo",
    title: "天空向我诉说了一些谎言，我正在坠落",
    artist: "Andrea Angulo + Jose Casas",
    year: "2025",
    type: "展览 / 驻留",
    status: "活跃档案",
    images: [
      {
        src: "./assets/el-cielo-installation.jpg",
        alt: "Centro Párraga 展览现场全景。",
        caption: "展览现场 / Centro Párraga"
      },
      {
        src: "./assets/jose-casas-01.jpg",
        alt: "Jose Casas 的作品安装于墙面与地面的交界处。",
        caption: "Jose Casas / 装置细节"
      },
      {
        src: "./assets/andrea-angulo-01.jpg",
        alt: "Andrea Angulo 以日常物件与水构成的装置。",
        caption: "Andrea Angulo / 过程与装置"
      },
      {
        src: "./assets/jose-casas-02.jpg",
        alt: "Jose Casas 的材料作品安装于白色墙面。",
        caption: "Jose Casas / 表面与碎片"
      }
    ],
    body: `
      <p><em>El cielo me cuenta algunas mentiras, estoy cayendo</em> 源自 Andrea Angulo 与 Jose Casas 在布兰卡的 Centro Negra 完成的一次驻留。项目由 MiniMoto 组织，随后在 Centro Párraga 呈现。</p>
      <p>两种实践共同穿越陌生化、物质性、景观，以及物件与表面的转化。</p>
      <blockquote>驻留并非生产结果的工厂，而是一段用于观察、适应，并从所在之地展开创作的时间。</blockquote>
    `,
    tags: ["Andrea Angulo", "Jose Casas", "布兰卡", "Centro Párraga"],
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
    title: "重新驯化物件",
    artist: "Andrea Angulo",
    year: "2025",
    type: "过程 / 雕塑",
    status: "星座 I",
    images: [
      {
        src: "./assets/andrea-angulo-01.jpg",
        alt: "Andrea Angulo 以日常物件与水构成的装置。",
        caption: "Andrea Angulo / 物件、水与位移"
      }
    ],
    body: `
      <p>批量生产的物件、水、玩具与日常材料被移出原有功能，以显露自身的其他版本。</p>
      <blockquote>物件不再服从，开始以另一种事物的方式行动。</blockquote>
    `,
    tags: ["物件", "水", "陌生化", "雕塑"],
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
    title: "景观、织物、裂隙",
    artist: "Jose Casas",
    year: "2025",
    type: "装置性绘画",
    status: "星座 II",
    images: [
      {
        src: "./assets/jose-casas-01.jpg",
        alt: "Jose Casas 的作品安装于墙面与地面的交界处。",
        caption: "Jose Casas / 被安置的物质"
      },
      {
        src: "./assets/jose-casas-02.jpg",
        alt: "Jose Casas 的材料作品安装于白色墙面。",
        caption: "Jose Casas / 碎片"
      }
    ],
    body: `
      <p>二手织物、石灰、石膏、压力与偶发痕迹，将布兰卡的地貌、光线与肌理带入空间。</p>
      <blockquote>日常性与矿物性彼此污染。</blockquote>
    `,
    tags: ["景观", "织物", "绘画", "物质性"],
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
    title: "统一练习",
    artist: "Joel Blanco",
    year: "2026",
    type: "激活行动 / 展览",
    status: "制作中",
    images: [
      {
        src: "./assets/joel-blanco-01.jpg",
        alt: "MiniMoto 与运输箱置于空间之中。",
        caption: "Joel Blanco / 进行中的装置"
      }
    ],
    body: `
      <p>卧室的微型神话、数字资产、下颌训练，以及一种被转移至微小物件之上的男性史诗。</p>
      <p>项目在激活行动、迷你摩托竞技与展览之间流通。</p>
    `,
    tags: ["男性气质", "速度", "激活行动", "卧室"],
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
    title: "流通",
    artist: "MiniMoto / RE·UTOPÍA",
    year: "2026",
    type: "网络 / 地域",
    status: "开放过程",
    images: [
      {
        src: "./assets/minimoto-sigil.png",
        alt: "MiniMoto Gallery 的三点符号。",
        caption: "MiniMoto / 流通图"
      }
    ],
    body: `
      <p>一张连接研究、生产、展览与地域的移动网络。</p>
      <p>MiniMoto 作为中转点、中间尺度与调解装置出现。</p>
    `,
    tags: ["流通", "RE/UTOPÍA", "档案", "地域"],
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
    title: "这不是一个白盒子",
    artist: "MiniMoto Gallery",
    year: "2026",
    type: "立场",
    status: "装置规则",
    images: [
      {
        src: "./assets/minimoto-wordmark.png",
        alt: "MiniMoto Gallery 标志。",
        caption: "MiniMoto / 立场"
      },
      {
        src: "./assets/minimoto-sigil.png",
        alt: "MiniMoto Gallery 的三点符号。",
        caption: "MiniMoto / 符号"
      }
    ],
    body: `
      <p>MiniMoto 从尺度、邻近性，以及项目之间的摩擦展开工作。</p>
      <p>每一次展览都会改变装置，并为下一次留下残余。</p>
    `,
    tags: ["场域特定", "调解", "东南部", "装置"],
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
    role: "艺术家",
    note: "日常物件、用途转移、水与陌生化。"
  },
  {
    name: "Jose Casas",
    role: "艺术家",
    note: "装置性绘画、景观、拾得织物与物质性。"
  },
  {
    name: "Joel Blanco",
    role: "艺术家",
    note: "男性气质、数字微型神话、激活行动与卧室。"
  },
  {
    name: "Diego Lobenal",
    role: "策展 / 运营",
    note: "过程陪伴、调解与装置建构。"
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
        aria-label="放大项目：${project.title}；艺术家：${project.artist}"
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
        aria-label="在场域中移动项目：${project.title}"
        title="移动卡片"
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
  const time = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());

  document.querySelector("#local-time").textContent = `${time} / 穆尔西亚`;
}

renderProjects();
renderIndex();
renderArtists();
updateTime();
setInterval(updateTime, 1000);

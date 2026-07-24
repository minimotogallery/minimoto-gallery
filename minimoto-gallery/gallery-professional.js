(() => {
  const lang = document.documentElement.lang === "zh-CN"
    ? "zh"
    : document.documentElement.lang.startsWith("en") ? "en" : "es";

  const copy = {
    es: {
      circulationTitle: "Circulación y documentación",
      documentation: "Documentación",
      dossier: "Solicitar dossier ↗",
      availability: "Consultar obra y disponibilidad ↗",
      artistInfo: "Solicitar información ↗",
      rosterIntro: "Prácticas acompañadas, artistas y agentes que construyen el dispositivo de MiniMoto.",
      projectPrefix: "Proyecto"
    },
    en: {
      circulationTitle: "Circulation and documentation",
      documentation: "Documentation",
      dossier: "Request dossier ↗",
      availability: "Ask about works and availability ↗",
      artistInfo: "Request information ↗",
      rosterIntro: "Accompanied practices, artists and agents who construct the MiniMoto device.",
      projectPrefix: "Project"
    },
    zh: {
      circulationTitle: "流通与文献",
      documentation: "文献",
      dossier: "索取项目资料 ↗",
      availability: "咨询作品与可获得性 ↗",
      artistInfo: "索取相关信息 ↗",
      rosterIntro: "由 MiniMoto 陪伴的实践、艺术家与共同建构这一装置的协作者。",
      projectPrefix: "项目"
    }
  }[lang];

  const categories = {
    "MM-001": "exhibitions",
    "MM-001/A": "artists",
    "MM-001/B": "artists",
    "MM-002": "exhibitions",
    "MM-003": "research",
    "MM-004": "research"
  };

  const information = {
    es: {
      "MM-001": {
        circulation: [
          "Residencia · Centro Negra, Blanca",
          "Exposición · Centro Párraga",
          "Organización y acompañamiento · MiniMoto Gallery"
        ],
        documentation: "Dossier, imágenes de instalación y documentación del proceso disponibles bajo consulta."
      },
      "MM-001/A": {
        circulation: [
          "Residencia · Centro Negra, Blanca",
          "Exposición · Centro Párraga",
          "Constelación de proyecto · MM-001"
        ],
        documentation: "Documentación de proceso e información de obra disponibles bajo consulta."
      },
      "MM-001/B": {
        circulation: [
          "Residencia · Centro Negra, Blanca",
          "Exposición · Centro Párraga",
          "Constelación de proyecto · MM-001"
        ],
        documentation: "Documentación de proceso e información de obra disponibles bajo consulta."
      },
      "MM-002": {
        circulation: [
          "Activación · La Justa / La Central Baja",
          "Exposición · MiniMoto Gallery",
          "Próxima exposición individual · Centro Párraga"
        ],
        documentation: "Proyecto en producción. Dossier de trabajo y condiciones de colaboración disponibles bajo consulta."
      },
      "MM-003": {
        circulation: [
          "Investigación y red · RE/UTOPÍA",
          "Territorios · Murcia / Madrid",
          "Mediación y archivo · MiniMoto Gallery"
        ],
        documentation: "Mapa de colaboraciones y memoria del proceso disponibles bajo consulta."
      },
      "MM-004": {
        circulation: [
          "Posición institucional · MiniMoto Gallery",
          "Archivo y metodología del dispositivo"
        ],
        documentation: "Statement, identidad y metodología expositiva disponibles bajo consulta."
      }
    },
    en: {
      "MM-001": {
        circulation: [
          "Residency · Centro Negra, Blanca",
          "Exhibition · Centro Párraga",
          "Organisation and accompaniment · MiniMoto Gallery"
        ],
        documentation: "Dossier, installation images and process documentation are available upon request."
      },
      "MM-001/A": {
        circulation: [
          "Residency · Centro Negra, Blanca",
          "Exhibition · Centro Párraga",
          "Project constellation · MM-001"
        ],
        documentation: "Process documentation and information on works are available upon request."
      },
      "MM-001/B": {
        circulation: [
          "Residency · Centro Negra, Blanca",
          "Exhibition · Centro Párraga",
          "Project constellation · MM-001"
        ],
        documentation: "Process documentation and information on works are available upon request."
      },
      "MM-002": {
        circulation: [
          "Activation · La Justa / La Central Baja",
          "Exhibition · MiniMoto Gallery",
          "Upcoming solo exhibition · Centro Párraga"
        ],
        documentation: "Project in production. Working dossier and collaboration conditions are available upon request."
      },
      "MM-003": {
        circulation: [
          "Research and network · RE/UTOPÍA",
          "Territories · Murcia / Madrid",
          "Mediation and archive · MiniMoto Gallery"
        ],
        documentation: "Collaboration map and process report are available upon request."
      },
      "MM-004": {
        circulation: [
          "Institutional position · MiniMoto Gallery",
          "Archive and methodology of the device"
        ],
        documentation: "Statement, identity system and exhibition methodology are available upon request."
      }
    },
    zh: {
      "MM-001": {
        circulation: [
          "驻留 · Centro Negra，布兰卡",
          "展览 · Centro Párraga",
          "组织与陪伴 · MiniMoto Gallery"
        ],
        documentation: "项目资料、布展图像与过程文献可通过邮件索取。"
      },
      "MM-001/A": {
        circulation: [
          "驻留 · Centro Negra，布兰卡",
          "展览 · Centro Párraga",
          "项目星座 · MM-001"
        ],
        documentation: "过程文献与作品信息可通过邮件索取。"
      },
      "MM-001/B": {
        circulation: [
          "驻留 · Centro Negra，布兰卡",
          "展览 · Centro Párraga",
          "项目星座 · MM-001"
        ],
        documentation: "过程文献与作品信息可通过邮件索取。"
      },
      "MM-002": {
        circulation: [
          "激活行动 · La Justa / La Central Baja",
          "展览 · MiniMoto Gallery",
          "即将举行的个展 · Centro Párraga"
        ],
        documentation: "项目正在制作中。工作资料与合作条件可通过邮件索取。"
      },
      "MM-003": {
        circulation: [
          "研究与网络 · RE/UTOPÍA",
          "地域 · 穆尔西亚 / 马德里",
          "调解与档案 · MiniMoto Gallery"
        ],
        documentation: "合作网络图与过程报告可通过邮件索取。"
      },
      "MM-004": {
        circulation: [
          "机构立场 · MiniMoto Gallery",
          "装置的档案与方法"
        ],
        documentation: "立场文本、视觉身份与展览方法可通过邮件索取。"
      }
    }
  }[lang];

  const artists = {
    es: [
      {
        name: "Andrea Angulo",
        role: "Artista",
        relation: "Práctica acompañada",
        bio: "Trabaja con objetos cotidianos, materiales fabricados en masa, agua y desplazamientos de uso para producir situaciones de extrañamiento.",
        focus: ["objeto", "agua", "escultura", "extrañamiento"],
        projects: ["MM-001", "MM-001/A"]
      },
      {
        name: "Jose Casas",
        role: "Artista",
        relation: "Práctica acompañada",
        bio: "Desarrolla una pintura instalativa atravesada por el paisaje, las telas encontradas y la transformación material del espacio.",
        focus: ["pintura", "paisaje", "materialidad", "instalación"],
        projects: ["MM-001", "MM-001/B"]
      },
      {
        name: "Joel Blanco",
        role: "Artista",
        relation: "Proyecto en producción",
        bio: "Investiga la masculinidad, las micromitologías digitales y la construcción de épicas domésticas mediante objetos, activaciones y dispositivos expositivos.",
        focus: ["masculinidad", "activación", "dormitorio", "bienes digitales"],
        projects: ["MM-002"]
      },
      {
        name: "Diego Lobenal",
        role: "Dirección / comisariado",
        relation: "Estructura y acompañamiento",
        bio: "Acompaña procesos, construye contextos de mediación y articula la circulación de los proyectos dentro y fuera de MiniMoto.",
        focus: ["comisariado", "mediación", "producción", "circulación"],
        projects: ["MM-002", "MM-003", "MM-004"]
      }
    ],
    en: [
      {
        name: "Andrea Angulo",
        role: "Artist",
        relation: "Accompanied practice",
        bio: "She works with everyday objects, mass-produced materials, water and displaced uses to create situations of estrangement.",
        focus: ["object", "water", "sculpture", "estrangement"],
        projects: ["MM-001", "MM-001/A"]
      },
      {
        name: "Jose Casas",
        role: "Artist",
        relation: "Accompanied practice",
        bio: "He develops an installation-based painting practice shaped by landscape, found fabrics and the material transformation of space.",
        focus: ["painting", "landscape", "materiality", "installation"],
        projects: ["MM-001", "MM-001/B"]
      },
      {
        name: "Joel Blanco",
        role: "Artist",
        relation: "Project in production",
        bio: "He investigates masculinity, digital micromythologies and domestic epics through objects, activations and exhibition devices.",
        focus: ["masculinity", "activation", "bedroom", "digital assets"],
        projects: ["MM-002"]
      },
      {
        name: "Diego Lobenal",
        role: "Direction / curating",
        relation: "Structure and accompaniment",
        bio: "He accompanies processes, constructs contexts of mediation and articulates the circulation of projects within and beyond MiniMoto.",
        focus: ["curating", "mediation", "production", "circulation"],
        projects: ["MM-002", "MM-003", "MM-004"]
      }
    ],
    zh: [
      {
        name: "Andrea Angulo",
        role: "艺术家",
        relation: "陪伴中的实践",
        bio: "她以日常物件、批量生产材料、水与用途位移，构成产生陌生感的情境。",
        focus: ["物件", "水", "雕塑", "陌生化"],
        projects: ["MM-001", "MM-001/A"]
      },
      {
        name: "Jose Casas",
        role: "艺术家",
        relation: "陪伴中的实践",
        bio: "他的装置性绘画围绕景观、拾得织物与空间的物质转化展开。",
        focus: ["绘画", "景观", "物质性", "装置"],
        projects: ["MM-001", "MM-001/B"]
      },
      {
        name: "Joel Blanco",
        role: "艺术家",
        relation: "制作中的项目",
        bio: "他通过物件、激活行动与展览装置，研究男性气质、数字微型神话与家庭内部的史诗想象。",
        focus: ["男性气质", "激活行动", "卧室", "数字资产"],
        projects: ["MM-002"]
      },
      {
        name: "Diego Lobenal",
        role: "方向 / 策展",
        relation: "结构与陪伴",
        bio: "他陪伴创作过程、建立调解语境，并组织项目在 MiniMoto 内外的流通。",
        focus: ["策展", "调解", "制作", "流通"],
        projects: ["MM-002", "MM-003", "MM-004"]
      }
    ]
  }[lang];

  function projectById(id) {
    return typeof projects !== "undefined" ? projects.find(project => project.id === id) : null;
  }

  function openProjectById(id) {
    const project = projectById(id);
    if (project && typeof openProject === "function") openProject(project);
  }

  function setupCurrentProject() {
    document.querySelectorAll("[data-open-project]").forEach(button => {
      button.addEventListener("click", () => openProjectById(button.dataset.openProject));
    });
  }

  function setupFilters() {
    const buttons = [...document.querySelectorAll("[data-project-filter]")];
    const cards = [...document.querySelectorAll(".project-card")];
    cards.forEach(card => {
      card.dataset.category = categories[card.dataset.projectId] || "research";
    });

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.projectFilter;
        buttons.forEach(item => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        cards.forEach(card => {
          const hidden = filter !== "all" && card.dataset.category !== filter;
          card.classList.toggle("is-filtered-out", hidden);
          card.setAttribute("aria-hidden", String(hidden));
        });
      });
    });
  }

  function ensureProfessionalPanel() {
    const aside = document.querySelector(".expanded-project-aside");
    if (!aside) return null;
    let panel = aside.querySelector(".project-professional");
    if (!panel) {
      panel = document.createElement("section");
      panel.className = "project-professional";
      aside.append(panel);
    }
    return panel;
  }

  function renderProfessionalProject(id) {
    const data = information[id];
    const project = projectById(id);
    const panel = ensureProfessionalPanel();
    if (!panel || !data || !project) return;

    const subject = encodeURIComponent(`${copy.projectPrefix} — ${project.title}`);
    panel.innerHTML = `
      <h3>${copy.circulationTitle}</h3>
      <ol>${data.circulation.map(item => `<li>${item}</li>`).join("")}</ol>
      <div class="project-documentation">
        <span>${copy.documentation}</span>
        <p>${data.documentation}</p>
      </div>
      <div class="project-professional-actions">
        <a href="mailto:minimotogallery@gmail.com?subject=${subject}%20/%20dossier">${copy.dossier}</a>
        <a href="mailto:minimotogallery@gmail.com?subject=${subject}%20/%20availability">${copy.availability}</a>
      </div>
    `;
  }

  function watchProjectDialog() {
    const idNode = document.querySelector("#dialog-id");
    if (!idNode) return;
    const update = () => renderProfessionalProject(idNode.textContent.trim());
    new MutationObserver(update).observe(idNode, { childList: true, characterData: true, subtree: true });
    update();
  }

  function renderProfessionalArtists() {
    const root = document.querySelector("#artists-list");
    if (!root) return;
    root.replaceChildren();

    const intro = document.createElement("p");
    intro.className = "artists-professional-intro";
    intro.textContent = copy.rosterIntro;
    root.append(intro);

    artists.forEach((artist, index) => {
      const article = document.createElement("article");
      article.className = "artist-entry artist-entry-professional";
      const projectButtons = artist.projects.map(id => {
        const project = projectById(id);
        const label = project ? `${id} — ${project.title}` : id;
        return `<button type="button" data-artist-project="${id}">${label}</button>`;
      }).join("");
      const subject = encodeURIComponent(`${artist.name} — MiniMoto Gallery`);
      article.innerHTML = `
        <header>
          <span>${String(index + 1).padStart(2, "0")} / ${artist.relation}</span>
          <h3>${artist.name}</h3>
          <p>${artist.role}</p>
        </header>
        <div class="artist-entry-professional-copy">
          <p>${artist.bio}</p>
          <div class="artist-entry-focus">${artist.focus.map(item => `<span>${item}</span>`).join("")}</div>
          <div class="artist-entry-projects">${projectButtons}</div>
          <a href="mailto:minimotogallery@gmail.com?subject=${subject}">${copy.artistInfo}</a>
        </div>
      `;
      root.append(article);
    });

    root.querySelectorAll("[data-artist-project]").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelector("#artists-dialog")?.close();
        openProjectById(button.dataset.artistProject);
      });
    });
  }

  function setupArtistOpeners() {
    document.querySelectorAll("[data-open-artists]").forEach(button => {
      button.addEventListener("click", () => document.querySelector("#artists-dialog")?.showModal());
    });
  }

  function init() {
    setupCurrentProject();
    setupFilters();
    watchProjectDialog();
    renderProfessionalArtists();
    setupArtistOpeners();
  }

  init();
})();

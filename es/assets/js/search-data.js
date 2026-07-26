// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-acerca",
    title: "Acerca",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "Encuentra mis publicaciones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositorios",
          title: "Repositorios",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-me-acabo-de-graduar-de-mi-doctorado-en-ingeniería-ambiental-de-vanderbilt-university",
          title: '¡Me acabo de graduar de mi doctorado en ingeniería ambiental de Vanderbilt University!...',
          description: "",
          section: "News",},{id: "news-comencé-una-nueva-posición-como-investigador-post-doctoral-en-the-ohio-state-university-estoy-emocionado-de-trabajar-con-la-doctora-audrey-sawyer-en-el-entedimiento-de-la-dinámica-entre-el-agua-dulce-y-el-agua-salada-en-sistemas-costeros",
          title: 'Comencé una nueva posición como Investigador Post-Doctoral en The Ohio State University. Estoy...',
          description: "",
          section: "News",},{id: "news-tuve-la-increíble-oportunidad-de-presentar-un-seminario-al-grupo-de-hidrología-subterránea-ghs-por-sus-siglas-en-inglés-en-la-universitat-politècnica-de-catalunya-upc-en-barcelona-españa-un-video-de-la-presentación-en-inglés-se-puede-encontrar-en-https-www-youtube-com-watch-v-h-hiinryw-w",
          title: 'Tuve la increíble oportunidad de presentar un seminario al Grupo de Hidrología Subterránea...',
          description: "",
          section: "News",},{id: "news-tuve-la-oportunidad-de-presentar-mi-trabajo-en-el-seminario-de-sciencias-de-la-tierra-en-the-ohio-state-university",
          title: 'Tuve la oportunidad de presentar mi trabajo en el Seminario de Sciencias de...',
          description: "",
          section: "News",},{id: "news-me-ascendieron-a-investigador-centífico-en-the-ohio-state-university-me-entusiasma-continuar-mi-trabajo-en-la-institución-desarrollando-soluciones-innovadoras-para-los-desafíos-ambientales-y-adquiriendo-una-comprensión-mecanicista-de-los-procesos-de-intercambio-hidrológico-en-diversos-entornos-de-aguas-superficiales-y-subterráneas",
          title: 'Me ascendieron a Investigador Centífico en The Ohio State university. Me entusiasma continuar...',
          description: "",
          section: "News",},{id: "news-fui-invitado-a-dar-una-charla-en-el-2026-agu-fall-meeting-en-new-orleans-la-la-charla-integrating-groundwater-hazards-in-coastal-risk-assessment-a-test-case-for-a-community-within-the-greater-boston-area-invited-explora-los-desafíos-de-integrar-las-hazardas-de-agua-subterránea-en-la-evaluación-de-riesgos-costeros",
          title: 'Fui invitado a dar una charla en el 2026 AGU Fall Meeting en...',
          description: "",
          section: "News",},{id: "news-publicamos-un-artículo-en-water-resources-research-from-hydraulic-heads-to-dollars-and-decision-it-s-time-to-integrate-groundwater-in-coastal-risk-assessment-échale-un-vistazo",
          title: 'Publicamos un artículo en Water Resources Research: From Hydraulic Heads to Dollars and...',
          description: "",
          section: "News",},{id: "news-acabo-de-comenzar-una-nueva-posición-como-profesor-de-cátedra-en-la-universidad-eia",
          title: 'Acabo de comenzar una nueva posición como Profesor de Cátedra en la Universidad...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6F%6E%7A%61%6C%65%7A%64%75%71%75%65.%31@%6F%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DGD042", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-gonzalez-duque-1b3157158", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8328-283X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Daniel-Gonzalez-Duque-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tOIQUDwAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

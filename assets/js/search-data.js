// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
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
        },{id: "nav-publications",
          title: "Publications",
          description: "Find my publications here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
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
            },},{id: "news-i-graduated-from-my-phd-in-environmental-engineering-at-vanderbilt-university",
          title: 'I graduated from my PhD in Environmental Engineering at Vanderbilt University!',
          description: "",
          section: "News",},{id: "news-i-started-a-new-position-as-a-post-doctoral-scholar-at-the-ohio-state-university-i-am-excited-to-work-with-dr-audrey-sawyer-in-understanding-the-dynamics-of-freshwater-saltwater-interactions-in-coastal-systems",
          title: 'I started a new position as a Post Doctoral Scholar at The Ohio...',
          description: "",
          section: "News",},{id: "news-i-had-the-incredible-opportunity-to-give-a-seminar-to-the-groundwater-hydrology-group-ghs-at-the-universitat-politècnica-de-catalunya-upc-in-barcelona-spain-a-recording-of-the-seminar-can-be-found-in-https-www-youtube-com-watch-v-h-hiinryw-w",
          title: 'I had the incredible opportunity to give a seminar to the Groundwater Hydrology...',
          description: "",
          section: "News",},{id: "news-i-had-a-great-time-presenting-my-work-at-the-earth-science-seminar-at-the-ohio-state-university",
          title: 'I had a great time presenting my work at the Earth Science Seminar...',
          description: "",
          section: "News",},{id: "news-i-was-promoted-to-research-scientist-at-the-ohio-state-university-i-m-excited-to-continue-my-work-at-the-institution-developing-innovative-solutions-for-environmental-challenges-and-gaining-a-mechanistic-understanding-of-hydrologic-exchange-processes-in-a-range-of-surface-water-groundwater-settings",
          title: 'I was promoted to Research Scientist at The Ohio State University. I’m excited...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-talk-at-the-2026-agu-fall-meeting-in-new-orleans-la-the-talk-integrating-groundwater-hazards-in-coastal-risk-assessment-a-test-case-for-a-community-within-the-greater-boston-area-invited-explores-the-challenges-of-integrating-groundwater-hazards-into-coastal-risk-assessment",
          title: 'I was invited to give talk at the 2026 AGU Fall Meeting in...',
          description: "",
          section: "News",},{id: "news-we-published-a-paper-in-water-resources-research-from-hydraulic-heads-to-dollars-and-decision-it-s-time-to-integrate-groundwater-in-coastal-risk-assessment-come-and-take-a-look",
          title: 'We published a paper in Water Resources Research: From Hydraulic Heads to Dollars...',
          description: "",
          section: "News",},{id: "news-i-started-a-new-position-as-part-time-instructor-at-universidad-eia",
          title: 'I started a new position as part-time instructor at  Universidad EIA.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%65%6C.%67%6F%6E%7A%61%6C%65%7A%31%37@%65%69%61.%65%64%75.%63%6F", "_blank");
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

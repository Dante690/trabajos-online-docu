// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trabajosonline Documentación",
  tagline: "Trabajosonline Portal de Empleo",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.trabajosonline.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Trabajosonline", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "de"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
        label: "English",
        path: "en",
      },
      es: {
        htmlLang: "es-ES",
        label: "Español",
        path: "es",
      },
      de: {
        htmlLang: "de-DE",
        label: "Deutsch",
        path: "de",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dante690/trabajos-online-docu/tree/main",
        },
        blog: false, //{
        // showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo-trabajos.jpg",
      algolia: {
        // The application ID provided by Algolia
        appId: "HC1PI5FDSC",

        // Public API key: it is safe to commit it
        apiKey: "f9f51b03a43e0e8d7380a24cf3f90bce",

        indexName: "trabajosonline",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },

      navbar: {
        title: "Trabajosonline Documentación",
        logo: {
          alt: "Logo Trabajosonline",
          src: "img/logo-trabajos.jpg",
        },
        items: [
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            label: "Inicio",
            to: "/",
            // Suponiendo que tienes un archivo SVG para el icono "Home"
            // en la carpeta estática en la ruta 'img/home-icon.svg'
            icon: "img/house-solid.svg",
          },
          {
            label: "Api Endpoints",
            to: "/category/api",
            // Suponiendo que tienes un archivo SVG para el icono "Home"
            // en la carpeta estática en la ruta 'img/home-icon.svg'
            icon: "img/house-solid.svg",
          },
          {
            label: "Anuncios",
            to: "/Anuncios",
            // Suponiendo que tienes un archivo SVG para el icono "Home"
            // en la carpeta estática en la ruta 'img/home-icon.svg'
            icon: "img/house-solid.svg",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            href: "https://trabajosonline.org",
            label: "Buscar Trabajos",
            position: "right",
          },
          //{ to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
          {
            href: "https://discord.gg/2xhBfw5tQN",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guía de Inicio",
                to: "/",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/trabajo-online/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/2xhBfw5tQN",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Trabajoson54431",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trabajosonline Documentación de Soporte.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

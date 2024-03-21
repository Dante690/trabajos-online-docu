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
  url: "https://your-docusaurus-site.example.com",
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
        htmlLang: "en-GB",
      },
      es: {
        htmlLang: "es-ES",
      },
      de: {
        htmlLang: "de-DE",
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
            to: "/",
            // Suponiendo que tienes un archivo SVG para el icono "Home"
            // en la carpeta estática en la ruta 'img/home-icon.svg'
            icon: "img/house-solid.svg",
          },
          {
            label: "Anuncios",
            to: "/",
            // Suponiendo que tienes un archivo SVG para el icono "Home"
            // en la carpeta estática en la ruta 'img/home-icon.svg'
            icon: "img/house-solid.svg",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
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
                label: "Tutorial",
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
                href: "https://github.com/facebook/docusaurus",
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

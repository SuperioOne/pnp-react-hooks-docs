// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PnP React Hooks',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SuperioOne', // Usually your GitHub org/user name.
  projectName: 'pnp-react-hooks', // Usually your repo name.

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          path: "pnp-react-hooks/docs",
        },
        blog: {
          showReadingTime: false,
          routeBasePath: "changelog",
          path: "changelog"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PnP React Hooks',
        logo: {
          alt: 'PnP React Hooks Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home-page',
            position: 'left',
            label: 'Docs',
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          {
            href: 'https://github.com/SuperioOne/pnp-react-hooks',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Configuration',
                to: '/docs/Getting Started/Configuration',
              },
              {
                label: 'API',
                to: '/docs/API',
              },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                href: 'changelog',
              },
              {
                label: 'Examples',
                href: '/docs/Examples',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SuperioOne/pnp-react-hooks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PnP React Hooks, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

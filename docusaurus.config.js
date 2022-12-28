// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PnP React Hooks',
  url: 'https://superioone.github.io',
  baseUrl: '/pnp-react-hooks/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SuperioOne', // Usually your GitHub org/user name.
  projectName: 'pnp-react-hooks', // Usually your repo name.,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          path: "docs",
        },
        blog: {
          showReadingTime: false,
          routeBasePath: "changelog",
          path: "changelog",
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
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
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
        style: "dark",
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
                to: '/Configuration',
              },
              {
                label: 'API',
                to: '/API',
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
                href: '/ExampleComponents',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SuperioOne/pnp-react-hooks',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: codeTheme,
      },
    }),
};

module.exports = config;

module.exports = {
  title: 'RxView360 API Documentation',
  tagline: 'Zero-footprint viewer API based on HTML5 and JavaScript',
  url: 'https://your-site-url.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rasterex', // Your GitHub org/user name.
  projectName: 'RXView-360-api-docs', // Your repo name.
  themeConfig: {
    navbar: {
      title: 'RxView360',
      logo: {
        alt: 'RxView360 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {to: 'docs/api/methods', label: 'API', position: 'left'},
        {href: 'https://github.com/rasterex/rxview360-api-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: 'docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/facebook/docusaurus'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rasterex Software a.s.`,
    },

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rasterex/rxview360-api-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

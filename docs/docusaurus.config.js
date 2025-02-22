/** @type {import('@docusaurus/types').DocusaurusConfig} */

// const path = require('path');

module.exports = {
  title: 'Jupyter React',
  tagline: 'React.js components to create flexible data products compatible with the Jupyter ecosystem .',
  url: 'https://datalayer.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datalayer',
  projectName: 'Jupyter React',
  plugins: [
    '@datalayer/jupyter-docusaurus-plugin'
  ],
  /*
			'docusaurus-plugin-typedoc',
			{
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
			},
  */
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Jupyter React',
      logo: {
        alt: 'Datalayer Logo',
        src: 'img/datalayer/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: '/category/welcome',
          position: 'left',
          label: 'Welcome',
        },
        {
          type: 'doc',
          docId: '/category/components',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'doc',
          docId: '/category/examples',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'doc',
          docId: '/category/demos',
          position: 'left',
          label: 'Demos',
        },        
        {
          href: 'https://github.com/datalayer/jupyter-react',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/datalayer',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/datalayerio',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/datalayer',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Datalayer',
              to: 'https://datalayer.io',
            },
            {
              label: 'Blog',
              to: 'https://datalayer.blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Datalayer, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/datalayer/jupyter-react/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://datalayer.blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

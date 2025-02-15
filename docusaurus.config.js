import {themes as prismThemes} from 'prism-react-renderer';
import customDarkTheme from './src/utils/darkTheme';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Indi Kusuma',
  tagline: 'DevOps Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gungindikusuma.xyz',
  baseUrl: '/',

  // GitHub pages deployment config.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/profile.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/gungindi',
            // label: 'GitHub',
            position: 'right',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get In Touch',
            items: [
              {
                label: 'Phone',
                to: 'https://wa.me/6281339987413',
              },
              {
                label: 'Email',
                to: 'mailto:gungindikusumaputra@gmail.com',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/anak-agung-indi-kusuma-putra/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/gungindi',
              },
              {
                label: 'Qwiklabs',
                href: 'https://www.cloudskillsboost.google/public_profiles/cb778b3c-dd24-4d6b-91b9-4e9172b84163 ',
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ['bash', 'yaml', 'docker'],
        theme: prismThemes.dracula,
        darkTheme: customDarkTheme,
      },
    }),
};

export default config;

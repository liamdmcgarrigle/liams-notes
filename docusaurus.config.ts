import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Notes',
  tagline: 'My notes of the things I am learning',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://notes.mcgarrigle.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liamdmcgarrigle', // Usually your GitHub org/user name.
  projectName: 'liams-notes', // Usually your repo name.

  onBrokenLinks: 'throw', //TODO fix all broken links
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liamdmcgarrigle/liams-notes/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liamdmcgarrigle/liams-notes/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],



  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Liam\'s Notes',
      logo: {
        alt: 'Liam\'s Notes Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docusaurus',
          position: 'left',
          label: 'Docusaurus',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dev',
          position: 'left',
          label: 'Development',
        },
        {
          type: 'docSidebar',
          sidebarId: 'zoho',
          position: 'left',
          label: 'Zoho',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/liamdmcgarrigle/liams-notes/issues',
          label: 'Report Issue/Bug',
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
              label: 'Zoho',
              to: '/docs/zoho/zoho-introduction',
            },
          ],
        },
        {
          title: 'Get In Touch',
          items: [
            {
              label: 'Email Me',
              href: 'mailto:liam@mcgarrigle.co?body=Hi%20there!%0AI%20am%20reaching%20out%20from%20a%20link%20in%20the%20footer%20of%20you%20website%20notes.mcgarrigle.co%0A%0AMy%20message%20is%3A',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/liamdmcgarrigle/liams-notes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Liam McGarrigle • Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'dart',
        'diff',
        'bash'
      ],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-added-line',
          line: 'Next Line Added',
        },
        {
          className: 'code-block-sub-line',
          line: 'Next Line Subbed',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

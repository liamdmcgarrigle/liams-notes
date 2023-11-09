import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Notes',
  tagline: 'Just Liam\'s notes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://notes.mcgarrigle.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liamdmcgarrigle', // Usually your GitHub org/user name.
  projectName: 'liams-notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liamdmcgarrigle/liams-notes/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liamdmcgarrigle/liams-notes/tree/main/packages/create-docusaurus/templates/shared/',
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
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docusaurus',
          position: 'left',
          label: 'Docusaurus Docs',
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
              to: '/zoho',
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

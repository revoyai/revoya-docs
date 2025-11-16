import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Revoya Documentation',
  tagline: 'Compliance automation for modern engineering teams',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://revoyai.github.io',
  baseUrl: '/revoya-docs/',

  organizationName: 'revoyai',
  projectName: 'revoya-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/revoyai/revoya-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/revoya-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Revoya',
      logo: {
        alt: 'Revoya Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://revoya.ai',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/revoyai/revoya-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Website',
              href: 'https://revoya.ai',
            },
            {
              label: 'Dashboard',
              href: 'https://app.revoya.ai',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact',
              href: 'mailto:support@revoya.ai',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/revoyai/revoya-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Revoya, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

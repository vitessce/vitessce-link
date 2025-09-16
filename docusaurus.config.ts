import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vitessce Link',
  tagline: 'Experience Vitessce with Mixed Reality',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://vitessce.link',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vitessce', 
  projectName: 'vitessce-link',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

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
        theme: {
          customCss: './src/css/index.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Vitessce Link',
      logo: {
        href: '/',
        alt: 'Vitessce Logo',
        src: 'logo-v.png',
      },
      items: [ 
        { to: '/about', label: 'About', position: 'left' },
        { to: '/launch', label: 'Launch', position: 'left' },
        { to: '/examples', label: 'Examples', position: 'left' },
        { to: '/docs/guide', label: 'Docs', position: 'left' }, 
        { to: '/beta', label: 'Beta', position: 'right' },

        {
          href: 'https://github.com/vitessce/vitessce-link/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://vitessce.io/',
          label: 'Vitessce',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

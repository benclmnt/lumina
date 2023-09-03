module.exports = {
  title: 'NUS Guide',
  tagline: 'Bring me to NUS',
  url: 'https://benclmnt.github.io',
  baseUrl: '/lumina/',
  favicon: 'img/logo.png',
  organizationName: 'benclmnt', // Usually your GitHub org/user name.
  projectName: 'lumina', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NUSGuide',
      logo: {
        alt: 'NUSGuide Logo',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        // {
        //   to: 'docs/before/introduction',
        //   activeBasePath: 'docs/before',
        //   label: 'Before Applying',
        //   position: 'left',
        // },
        {
          to: 'docs/after/introduction',
          activeBasePath: 'docs/after',
          label: 'After Offer',
          position: 'left',
        },
        {
          to: 'docs/cca/cca-index',
          activeBasePath: 'docs/cca',
          label: 'CCAs and Clubs',
          position: 'left',
        },
        {
          to: 'docs/contributors',
          label: 'Contributors',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        // {
        //   title: 'Before Acceptance',
        //   items: [
        //     {
        //       label: 'Introduction',
        //       to: 'docs/before/introduction',
        //     },
        //   ],
        // },
        {
          title: 'After Acceptance',
          items: [
            {
              label: 'Introduction',
              to: 'docs/after/introduction',
            },
            {
              label: 'Dormitory',
              to: 'docs/after/housing'
            },
            {
              label: 'Financial Aid',
              to: 'docs/after/financial-aid',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/PerhimpunanIndonesiaNUS/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/pinusonline/',
            },
            {
              label: 'Github',
              href: 'https://www.github.com/benclmnt/lumina',
            },
          ],
        },
      ],
      copyright: `Made by <a href="https://benclmnt.com" target="_blank" rel="noopener noreferrer">Ben</a>.`,
    },
    // announcementBar: {
    //   id: "outdated",
    //   content: 'These docs might contain some outdated information from 2020. If you are an NUS freshman, please fill in <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/PINUSFreshman2021">this survey</a>',
    //   isCloseable: false,
    //   backgroundColor: "#ffba00",
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/benclmnt/lumina/edit/master',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-PDF8GH7GWE',
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    // '@docusaurus/plugin-ideal-image',
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'), ({
        indexBlog: false,
        hashed: true,
        docsRouteBasePath: '/docs'
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
};

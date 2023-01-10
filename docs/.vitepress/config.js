export default {
  title: 'Yamadori Map App',
  description: 'Just playing around.',
  srcDir: './src',
  themeConfig: {
    siteTitle: 'Yamadori Map App',
    nav: [
      { text: 'User Guide', link: '/user/' },
      { text: 'Developers', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar:
      [
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/user/' }, // /guide/index.md
            //{ text: 'One', link: '/user/one' }, // /guide/one.md
            //{ text: 'Two', link: '/user/two' }, // /guide/two.md
          ],
        },
        {
          text: 'Developers',
          collapsible: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/guide/' }, // /config/index.md
            //{ text: 'Three', link: '/guide/three' }, // /config/three.md
            //{ text: 'Four', link: '/guide/four' }, // /config/four.md
          ],
        },
      ],
  },
};

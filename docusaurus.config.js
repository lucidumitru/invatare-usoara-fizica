module.exports = {
    title: 'Invăţarea uşoară a fizicii',
    tagline: 'Invăţăm prin experimente',
    url: 'https://lucidumitru.github.io',
    baseUrl: '/invatare-usoara-fizica/',
    favicon: 'img/favicon.ico',
    organizationName: 'lucidumitru', // Usually your GitHub org/user name.
    projectName: 'invatare-usoara-fizica', // Usually your repo name.
    themeConfig: {
        googleAnalytics: {
              trackingID: 'UA-175175454-1',
        },
        navbar: {
            title: 'Invăţarea uşoară a fizicii',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [{
                    to: 'docs/fizica/clasa6/fizica-clasa6-capitolul1',
                    activeBasePath: 'docs',
                    label: 'Documentaţii',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Documentaţii',
                    items: [{
                            label: 'Invăţarea uşoară a fizicii',
                            to: 'docs/fizica/clasa6/fizica-clasa6-capitolul1',
                        },
                        {
                            label: 'Ghidul de fizica',
                            to: 'docs/ghidul-de-fizica-versus-accidentari',
                        },
                    ],
                },
                {
                    title: 'Comunitate',
                    items: [{
                            label: 'Facebook',
                            href: 'https://www.facebook.com/danielaelena.dumitru.7',
                        },
                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/channel/UCCVEIyugABtorLa_FIEPazw?view_as=subscriber',
                        },
                    ],
                },
                {
                    title: 'Extra',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },

                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Dumitru Elena-Daniela: Invatarea usoara a fizicii. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'doc1',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
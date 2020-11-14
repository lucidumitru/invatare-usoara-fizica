module.exports = {
     plugins: [
//     [require.resolve('@cmfcmf/docusaurus-search-local'),{
//         // Options here
//         language: "ro" // language of your documentation, see next section
//     }]
    ],
//    onBrokenLinks: 'ignore',
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
        algolia: {
            apiKey: '9fca6c4ab075a147ad5ffdb7caf77214',
            indexName: 'lucidumitru_invatare-usoara-fizica',
            searchParameters: {}, // Optional (if provided by Algolia)
        },
        navbar: {
            title: 'Invăţarea uşoară a fizicii',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
//                src: 'img/EasyFizi_Logo.svg',
            },
            items: [{
                   to: '/docs/fizica/clasa6/fizica-clasa6-capitolul1',
//                    to: 'docs/experimente-distractive-fizica',
                    activeBasePath: 'docs',
                    label: 'Documentaţii',
                    position: 'left',
                },
//                { to: 'blog', label: 'Blog', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                     title: 'Documentaţii',
                     items: [{
                              label: 'Invăţarea uşoară a fizicii',
                              to: '/docs/fizica/clasa6/fizica-clasa6-capitolul1',
                         },
                             {
                               label: 'Ghidul de fizica',
                               to: '/docs/ghidul-de-fizica-versus-accidentari',
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
                            label: 'Experimente distractive',
                            to: '/docs/experimente-distractive-fizica',
//                            label: 'Blog',
//                            to: 'blog',
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
//                    homePageId: 'doc1',
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
 ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" type="text/css" href="<%= it.baseUrl %><%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %> itemscope="" itemtype="http://schema.org/Organization">
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script type="text/javascript" src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
    <script>
        var url = window.location.href.replace(window.location.host + '<%= it.baseUrl %>', 'www.fizichim.ro/').replace('http://', 'https://');

        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = 'Noua adresa a site-ului este <a href="' + url + '">www.fizichim.ro</a>, veti fi redirectionat in 3 secunde...';

        document.body.appendChild(overlay);

//        var style = document.createElement('style');
//        style.innerHTML = 'body > *:not(.overlay) { display: none !important; } .overlay { text-align: center; margin-top: 30vh } ';
//        document.head.appendChild(style);
        setTimeout(function(){parent.window.location.href=url},3000);
        </script>
  </body>
</html>`


};


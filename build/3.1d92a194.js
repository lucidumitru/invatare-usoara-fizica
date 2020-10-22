/*! For license information please see 3.1d92a194.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(121),o=n(122),l=n(145),i=n(56),s=n.n(i);var u=function(){var e,t=Object(l.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,i=Object(o.a)().announcementBar;if(!i)return null;var u=i.content,d=i.backgroundColor,f=i.textColor,m=i.isCloseable;return!u||m&&n?null:r.a.createElement("div",{className:s.a.announcementBar,style:{backgroundColor:d,color:f},role:"banner"},r.a.createElement("div",{className:Object(c.a)(s.a.announcementBarContent,(e={},e[s.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:u}}),m?r.a.createElement("button",{type:"button",className:s.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},d=n(2),f=n(118),m=n(119),h=n(6),v=n(22),b=n(125),p=n(116),g=n(127),O=n(147);function E(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var k=n(148);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var C="Ctrl";function _(){return"undefined"==typeof navigator?C:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var N=r.a.forwardRef((function(e,t){var n=y(Object(a.useState)((function(){return _()?"\u2318":C})),2),c=n[0],o=n[1];return Object(a.useEffect)((function(){_()&&o("\u2318")}),[]),r.a.createElement("button",j({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(k.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},c===C?r.a.createElement(E,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),S=n(123),I=n(129),L=n(134);function T(){var e,t,n,a=(e=Object(S.useAllDocsData)(),t=Object(S.useActivePluginAndVersion)(),n=Object(I.b)(),{language:"en",tags:[L.a].concat(Object.keys(e).map((function(a){var r,c,o=(null==t||null===(r=t.activePlugin)||void 0===r?void 0:r.pluginId)===a?t.activeVersion:void 0,l=n[a],i=e[a].versions.find((function(e){return e.isLast})),s=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(L.b)(a,s.name)})))});return{facetFilters:["language:"+a.language,a.tags.map((function(e){return"docusaurus_tag:"+e}))]}}var D=null;function P(e){var t=e.hit,n=e.children;return r.a.createElement(f.a,{to:t.url},n)}function B(e){var t=e.state,n=e.onClose,a=Object(O.a)().generateSearchPageLink;return r.a.createElement(f.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function M(e){var t=e.contextualSearch,c=Object(h.a)(e,["contextualSearch"]),o=Object(m.a)().siteMetadata,l=T(),i=Object.assign({},t?l:{},c.searchParameters),s=Object(p.b)().withBaseUrl,u=Object(b.useHistory)(),f=Object(a.useRef)(null),O=Object(a.useState)(!1),E=O[0],k=O[1],j=Object(a.useState)(null),y=j[0],w=j[1],C=Object(a.useCallback)((function(){return D?Promise.resolve():Promise.all([n.e(52).then(n.bind(null,207)),Promise.all([n.e(0),n.e(53)]).then(n.bind(null,206)),n.e(0).then(n.t.bind(null,112,7))]).then((function(e){var t=e[0].DocSearchModal;D=t}))}),[]),_=Object(a.useCallback)((function(){C().then((function(){k(!0)}))}),[C,k]),S=Object(a.useCallback)((function(){k(!1)}),[k]),I=Object(a.useCallback)((function(e){C().then((function(){k(!0),w(e.key)}))}),[C,k,w]),L=Object(a.useRef)({navigate:function(e){var t=e.suggestionUrl;u.push(t)}}).current,M=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:s(""+t.pathname+t.hash)})}))})).current,x=Object(a.useMemo)((function(){return function(e){return r.a.createElement(B,Object(d.a)({},e,{onClose:S}))}}),[S]),A=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",o.docusaurusVersion),e}),[o.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:E,onOpen:_,onClose:S,onInput:I,searchButtonRef:f}),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+c.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(N,{onTouchStart:C,onFocus:C,onMouseOver:C,onClick:_,ref:f}),E&&Object(v.createPortal)(r.a.createElement(D,Object(d.a)({onClose:S,initialScrollY:window.scrollY,initialQuery:y,navigator:L,transformItems:M,hitComponent:P,resultsFooterComponent:x,transformSearchClient:A},c,{searchParameters:i})),document.body))}var x=function(){var e=Object(m.a)().siteConfig;return r.a.createElement(M,e.themeConfig.algolia)},A=n(173),V=n.n(A),R=n(57),U=n.n(R),F=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.dark),style:n},t)},X=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(c.a)(U.a.toggle,U.a.light),style:n},t)},H=function(e){var t=Object(o.a)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,c=t.lightIcon,l=t.lightIconStyle,i=Object(m.a)().isClient;return r.a.createElement(V.a,Object(d.a)({disabled:!i,icons:{checked:r.a.createElement(F,{icon:n,style:a}),unchecked:r.a.createElement(X,{icon:c,style:l})}},e))},K=n(130);var Y=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},q=n(150),G=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useState)(!1),o=c[0],l=c[1],i=Object(a.useState)(0),s=i[0],u=i[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(b.useLocation)(),p=Y(v.hash),g=p[0],O=p[1];return Object(q.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(o)return l(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&n>=s?r(!1):n+c<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),O(v.hash))}),[v]),Object(a.useEffect)((function(){e&&g&&l(!0)}),[g]),{navbarRef:h,isNavbarVisible:n}},W=n(151),z=n(152),J=n(153),Q=n(58),Z=n.n(Q),$=n(131),ee={default:function(){return $.a},docsVersion:function(){return n(177).default},docsVersionDropdown:function(){return n(178).default},doc:function(){return n(179).default}};function te(e){var t=e.type,n=Object(h.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=ee[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var ne="right";var ae=function(){var e,t,n=Object(m.a)().isClient,l=Object(o.a)(),i=l.navbar,s=i.title,u=i.items,h=i.hideOnScroll,v=i.style,b=l.colorMode.disableSwitch,p=Object(a.useState)(!1),g=p[0],O=p[1],E=Object(a.useState)(!1),k=E[0],j=E[1],y=Object(K.a)(),w=y.isDarkTheme,C=y.setLightTheme,_=y.setDarkTheme,N=G(h),S=N.navbarRef,I=N.isNavbarVisible,L=Object(J.a)(),T=L.logoLink,D=L.logoLinkProps,P=L.logoImageUrl,B=L.logoAlt;Object(W.a)(g);var M=Object(a.useCallback)((function(){O(!0)}),[O]),A=Object(a.useCallback)((function(){O(!1)}),[O]),V=Object(a.useCallback)((function(e){return e.target.checked?_():C()}),[C,_]),R=Object(z.a)();Object(a.useEffect)((function(){R===z.b.desktop&&O(!1)}),[R]);var U=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ne)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ne)}))}}(u),F=U.leftItems,X=U.rightItems;return r.a.createElement("nav",{ref:S,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===v,"navbar--primary":"primary"===v,"navbar-sidebar--show":g},e[Z.a.navbarHideable]=h,e[Z.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(d.a)({className:"navbar__brand",to:T},D),null!=P&&r.a.createElement("img",{key:n,className:"navbar__logo",src:P,alt:B}),null!=s&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",(t={},t[Z.a.hideLogoText]=k,t))},s)),F.map((function(e,t){return r.a.createElement(te,Object(d.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.map((function(e,t){return r.a.createElement(te,Object(d.a)({},e,{key:t}))})),!b&&r.a.createElement(H,{className:Z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:w,onChange:V}),r.a.createElement(x,{handleSearchBarToggle:j,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(d.a)({className:"navbar__brand",onClick:A,to:T},D),null!=P&&r.a.createElement("img",{key:n,className:"navbar__logo",src:P,alt:B}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&g&&r.a.createElement(H,{"aria-label":"Dark mode toggle in sidebar",checked:w,onChange:V})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(te,Object(d.a)({mobile:!0},e,{onClick:A,key:t}))})))))))},re=n(59),ce=n.n(re);function oe(e){var t=e.to,n=e.href,a=e.label,c=e.prependBaseUrlToHref,o=Object(h.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(p.a)(t),i=Object(p.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(f.a,Object(d.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?i:n}:{to:l},o),a)}var le=function(e){var t=e.url,n=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:n,src:t})};var ie=function(){var e=Object(o.a)().footer,t=e||{},n=t.copyright,a=t.links,l=void 0===a?[]:a,i=t.logo,s=void 0===i?{}:i,u=Object(p.a)(s.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(oe,e))}))):null)}))),(s||n)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:ce.a.footerLogoLink},r.a.createElement(le,{alt:s.alt,url:u})):r.a.createElement(le,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null},se=n(8),ue="light",de="dark",fe=function(e){return e===de?de:ue},me=function(){return se.a.canUseDOM?fe(document.documentElement.getAttribute("data-theme")):ue},he=function(e){try{localStorage.setItem("theme",fe(e))}catch(t){console.error(t)}},ve=function(){var e=Object(o.a)().colorMode.disableSwitch,t=void 0!==e&&e,n=Object(a.useState)(me),r=n[0],c=n[1],l=Object(a.useCallback)((function(){c(ue),he(ue)}),[]),i=Object(a.useCallback)((function(){c(de),he(de)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",fe(r))}),[r]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(fe(e))}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?de:ue)}))}),[]),{isDarkTheme:r===de,setLightTheme:l,setDarkTheme:i}},be=n(149);var pe=function(e){var t=ve(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(be.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},ge="docusaurus.tab.",Oe=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(ge))e[a.substring(ge.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},Ee="docusaurus.announcement.dismiss",ke="docusaurus.announcement.id",je=function(){var e=Object(o.a)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem(Ee,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(ke);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(ke,t),a&&localStorage.setItem(Ee,"false"),(a||"false"===localStorage.getItem(Ee))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},ye=n(146);var we=function(e){var t=Oe(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=je(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(ye.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)},Ce=n(166);function _e(e){var t=e.children;return r.a.createElement(pe,null,r.a.createElement(we,null,r.a.createElement(Ce.a,null,t)))}function Ne(e){var t=e.language,n=e.version,a=e.tag;return r.a.createElement(g.a,null,t&&r.a.createElement("meta",{name:"docsearch:language",content:""+t}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function Se(e){var t=Object(m.a)().siteConfig,n=t.favicon,a=t.title,c=t.themeConfig,o=c.image,l=c.metadatas,i=t.url,s=t.titleDelimiter,u=e.title,f=e.description,h=e.image,v=e.keywords,b=e.permalink,O=e.searchMetadatas,E=u?u+" "+s+" "+a:a,k=h||o,j=Object(p.a)(k,{absolute:!0}),y=Object(p.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("html",{lang:"en"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:j}),k&&r.a.createElement("meta",{property:"twitter:image",content:j}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&r.a.createElement("meta",{property:"og:url",content:i+b}),b&&r.a.createElement("link",{rel:"canonical",href:i+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(Ne,Object(d.a)({tag:L.a,language:"en"},O)),r.a.createElement(g.a,null,l.map((function(e,t){return r.a.createElement("meta",Object(d.a)({key:"metadata_"+t},e))}))))}n(60);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return r.a.createElement(_e,null,r.a.createElement(Se,e),r.a.createElement(u,null),r.a.createElement(ae,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(ie,null))}},130:function(e,t,n){"use strict";var a=n(0),r=n(149);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},131:function(e,t,n){"use strict";var a=n(2),r=n(6),c=n(0),o=n.n(c),l=n(121),i=n(118),s=n(116),u=n(125),d=n(154);function f(e){var t=e.activeBasePath,n=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(a.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:m?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function m(e){var t=e.items,n=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),h=m[0],v=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":h})},o.a.createElement(f,Object(a.a)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:n},o.a.createElement(f,Object(a.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},l)))})))):o.a.createElement(f,Object(a.a)({className:b(i)},s))}function h(e){var t=e.items,n=e.className,i=(e.position,Object(r.a)(e,["items","className","position"])),s=Object(u.useLocation)().pathname,m=Object(c.useState)((function(){var e;return null===(e=!(null==t?void 0:t.some((function(e){return Object(d.a)(e.to,s)}))))||void 0===e||e})),h=m[0],v=m[1],b=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":h})},o.a.createElement(f,Object(a.a)({role:"button",className:b(n,!0)},i,{onClick:function(){v((function(e){return!e}))}}),i.label),o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(a.a)({activeClassName:"menu__link--active",className:b(n)},c,{onClick:i.onClick})))})))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(a.a)({className:b(n)},i)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),c=n?h:m;return o.a.createElement(c,a)}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="default";function r(e,t){return"docs-"+e+"-"+t}},145:function(e,t,n){"use strict";var a=n(0),r=n(146);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},146:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},147:function(e,t,n){"use strict";var a=n(125),r=n(8),c=n(119);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.a)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},150:function(e,t,n){"use strict";var a=n(0),r=n(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],l=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},151:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},152:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},153:function(e,t,n){"use strict";var a=n(130),r=n(116),c=n(126),o=n(122);t.a=function(){var e=Object(o.a)().navbar.logo,t=Object(a.a)().isDarkTheme,n=Object(r.a)(e.href||"/"),l={};e.target?l={target:e.target}:Object(c.a)(n)||(l={rel:"noopener noreferrer",target:"_blank"});var i=e.srcDark&&t?e.srcDark:e.src;return{logoLink:n,logoLinkProps:l,logoImageUrl:Object(r.a)(i),logoAlt:e.alt}}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=function(e){return e.endsWith("/")?e:e+"/"};return n(e)===n(t)}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),l=f(n(117)),i=f(n(7)),s=f(n(174)),u=f(n(175)),d=n(176);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},177:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=n(0),o=n.n(c),l=n(131),i=n(123),s=n(129);function u(e){var t,n=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(i.useActiveVersion)(u),m=Object(s.a)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=f?f:m)&&void 0!==t?t:h,b=null!=n?n:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(a.a)({},d,{label:b,to:p}))}},178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=n(0),o=n.n(c),l=n(131),i=n(123),s=n(129),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.a)(d),E=O.preferredVersion,k=O.savePreferredVersionName;var j=null!==(t=null!==(n=b.activeVersion)&&void 0!==n?n:E)&&void 0!==t?t:g,y=c?"Versions":j.label,w=c?void 0:u(j).path;return o.a.createElement(l.a,Object(a.a)({},v,{mobile:c,label:y,to:w,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},179:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=n(0),o=n.n(c),l=n(131),i=n(123),s=n(121),u=n(129);function d(e){var t,n,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(m),b=v.activeVersion,p=v.activeDoc,g=Object(u.a)(m).preferredVersion,O=Object(i.useLatestVersion)(m),E=null!==(t=null!=b?b:g)&&void 0!==t?t:O,k=E.docs.find((function(e){return e.id===c}));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(a.a)({exact:!0},h,{className:Object(s.a)(h.className,(n={},n[d]=p&&p.sidebar===k.sidebar,n)),label:null!=f?f:k.id,to:k.path}))}}}]);
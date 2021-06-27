(self.webpackChunklumina=self.webpackChunklumina||[]).push([[6106],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2735:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(9962),r=n(2735);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5798:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(9524),l=["components"],s={id:"ise-club",title:"NUS ISE Club"},u={unversionedId:"cca/ise-club",id:"cca/ise-club",isDocsHomePage:!1,title:"NUS ISE Club",description:"About CCA",source:"@site/docs/cca/ise-club.mdx",sourceDirName:"cca",slug:"/cca/ise-club",permalink:"/lumina/docs/cca/ise-club",editUrl:"https://github.com/benclmnt/lumina/edit/master/docs/cca/ise-club.mdx",version:"current",lastUpdatedAt:1624804260,formattedLastUpdatedAt:"6/27/2021",frontMatter:{id:"ise-club",title:"NUS ISE Club"},sidebar:"CCAs and Clubs",previous:{title:"NUS Students' Engineering Club",permalink:"/lumina/docs/cca/engin-club"},next:{title:"NUS Statistics Society",permalink:"/lumina/docs/cca/statistics-society"}},c=[{value:"About CCA",id:"about-cca",children:[]},{value:"Why Should You Join?",id:"why-should-you-join",children:[]},{value:"Activites/Events",id:"activitesevents",children:[]},{value:"Testimonials",id:"testimonials",children:[]},{value:"How to Sign Up?",id:"how-to-sign-up",children:[]},{value:"CCA Contact Details",id:"cca-contact-details",children:[]},{value:"Senior Contact Details",id:"senior-contact-details",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{alt:"NUS ISE Club logo",src:(0,o.Z)("/img/cca/ise-club.jpg"),style:{maxWidth:"400px",maxHeight:"300px"}}),(0,a.kt)("h2",{id:"about-cca"},"About CCA"),(0,a.kt)("p",null,"NUS ISE Club is a constituent club under NUS ENGIN Club (which is also under NUSSU) which serves as a platform to bond the whole cohort (Yes, you did not read it wrongly!) and as a bridge that connects students with professors. We proactively organize and innovate new events for the cohort to ensure that our events remain relevant to the cohort."),(0,a.kt)("h2",{id:"why-should-you-join"},"Why Should You Join?"),(0,a.kt)("p",null,"The benefits of joining are as follow, but not limited to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create your own legacy - by brainstorming new initiatives that are relevant for students, professors and partners!"),(0,a.kt)("li",{parentName:"ol"},"Make more friends and establish connections with more people."),(0,a.kt)("li",{parentName:"ol"},"Learn to organize effective events through inputs from not only students, but also professors and external partners."),(0,a.kt)("li",{parentName:"ol"},"Learn to liaise with external organizations such as business & community partners."),(0,a.kt)("li",{parentName:"ol"},"Create a social impact on society.")),(0,a.kt)("p",null,"P.s. it\u2019s a 2 year commitment! Surely you would grow a lot and make solid connections here!"),(0,a.kt)("h2",{id:"activitesevents"},"Activites/Events"),(0,a.kt)("p",null,"NUS ISE Club holds various and constantly updated events such that it would be an onerous task to track each of them! However, you would certainly be a part of these annually - or even biannually - held events, which include: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"NUS ISE Business Analytic Case Competition"),(0,a.kt)("li",{parentName:"ol"},"NUS ISE Freshmen Orientation Programme"),(0,a.kt)("li",{parentName:"ol"},"NUS ISE Community Engagement Projects"),(0,a.kt)("li",{parentName:"ol"},"NUS ISE Night Cycling"),(0,a.kt)("li",{parentName:"ol"},"NUS ISE Club Bonding Sessions\nAnd many more!")),(0,a.kt)("h2",{id:"testimonials"},"Testimonials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Raymond Fendy Julianto\t"),(0,a.kt)("li",{parentName:"ul"},"Current Role: Community Engagement/Involvement Project Director"),(0,a.kt)("li",{parentName:"ul"},"Past Role: Community Engagement/Involvement Project Director"),(0,a.kt)("li",{parentName:"ul"},"Testimony: As a person with great passion in making social impacts, I enjoyed organizing community-oriented programmes in NUS ISE Club! I learned a lot in liaising with community partners so that we can be aligned on our vision and conducting community engagement projects that can be impactful to both the society and the students!")),(0,a.kt)("h2",{id:"how-to-sign-up"},"How to Sign Up?"),(0,a.kt)("p",null,"Keep track on our Instagram page (@nus_ise) to check out the recruitment date! It will most likely be mid August, though!"),(0,a.kt)("h2",{id:"cca-contact-details"},"CCA Contact Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Website: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nusiseclub.com/"},"https://nusiseclub.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.eng.nus.edu.sg/isem/student-life/nus-industrial-and-systems-engineering-club/"},"https://www.eng.nus.edu.sg/isem/student-life/nus-industrial-and-systems-engineering-club/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://enginclub.com/ise-club"},"https://enginclub.com/ise-club")))),(0,a.kt)("li",{parentName:"ul"},"Email Address: ",(0,a.kt)("a",{parentName:"li",href:"mailto:president@nusiseclub.com"},"president@nusiseclub.com")),(0,a.kt)("li",{parentName:"ul"},"Facebook page: ",(0,a.kt)("a",{parentName:"li",href:"https://www.facebook.com/NUSISEClub/"},"https://www.facebook.com/NUSISEClub/")),(0,a.kt)("li",{parentName:"ul"},"Instagram page: ",(0,a.kt)("a",{parentName:"li",href:"https://instagram.com/nus_ise/"},"https://instagram.com/nus_ise/")),(0,a.kt)("li",{parentName:"ul"},"LinkedIn page: ",(0,a.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/nus-industrial-systems-and-engineering-club/?originalSubdomain=sg"},"https://www.linkedin.com/company/nus-industrial-systems-and-engineering-club/?originalSubdomain=sg"))),(0,a.kt)("h2",{id:"senior-contact-details"},"Senior Contact Details"),(0,a.kt)("p",null,"Raymond Fendy"))}p.isMDXComponent=!0}}]);
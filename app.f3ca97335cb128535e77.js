!function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],b=0,p=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([1,4,0]),n()}({1:function(e,t,n){e.exports=n("uGlQ")},"6lls":function(e,t){},MbVc:function(e,t){e.exports=".skyux-app-loading{visibility:hidden}.sky-modal-body-full-page #bb-help-container.bb-help-closed>#bb-help-invoker{display:none}"},NO9k:function(e,t,n){var r=n("LboF"),i=n("MbVc");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},YwUl:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YwUl"},uGlQ:function(e,t,n){"use strict";n.r(t);var r,i=n("hv2d"),o=n("E1rE"),a=n("DUip"),s=n("BUHi"),c=n("n2Nc"),u=n("TYT/"),l=n("p+fK"),b=n("6IyS"),p=n("qkZW"),f=n("vB3b"),d=n("Valr"),m=function(e){return{"skyux-app-loading":e}};function g(e,t,n){return n.runtime.params.getUrl(e+t)}function h(e,t,n){for(var r=0,i=e;r<i.length;r++){var o=i[r];!o.url&&o.route&&(o.url=g(t,o.route,n)),o.items&&h(o.items,t,n)}}n("NO9k");var y=function(){function e(e,t,n,r,i,o,a,s,c,u,l){var b=this;if(this.router=e,this.windowRef=t,this.config=n,this.styleLoader=r,this.helpInitService=i,this.searchProvider=o,this.zone=s,this.omnibarProvider=c,this.themeSvc=l,this.isReady=!1,l){var p=this.getInitialThemeSettings();this.themeSvc.init(document.body,u,p)}this.styleLoader.loadStyles().then((function(e){b.isReady=!0,e&&e.error&&console.log(e.error.message),setTimeout((function(){a.visible.next(!0)}))}))}return e.prototype.ngOnInit=function(){var e=this;this.router.events.subscribe((function(t){t instanceof a.b&&(e.router.parseUrl(t.url).fragment||e.windowRef.nativeWindow.scroll(0,0))})),this.initShellComponents()},e.prototype.ngOnDestroy=function(){r&&(c.BBAuthClientFactory.BBOmnibar.destroy(),r=!1),this.themeSvc&&this.themeSvc.destroy()},e.prototype.setParamsFromQS=function(e){var t=this,n={envid:"envId",leid:"leId",svcid:"svcId"};Object.keys(n).forEach((function(r){t.config.runtime.params.has(r)&&(e[n[r]]=t.config.runtime.params.get(r))}))},e.prototype.setOnSearch=function(e){var t=this;this.searchProvider&&(e.onSearch=function(e){return t.searchProvider.getSearchResults(e)})},e.prototype.setNav=function(e){var t,n=this,r=this.config.skyux,i=(r.host.url+this.config.runtime.app.base.substr(0,this.config.runtime.app.base.length-1)).toLowerCase();if(e.nav?function(e,t,n){var r=e.services;if(r&&r.length>0){for(var i=!1,o=0,a=r;o<a.length;o++){var s=a[o];s.items&&h(s.items,t,n),s.selected&&(i=!0)}i||(r[0].selected=!0)}}(t=e.nav,i,this.config):t=e.nav={},t.beforeNavCallback=function(e){var t=e.url.toLowerCase();if(t===i||0===t.indexOf(i+"/")||0===t.indexOf(i+"?")){var r=e.url.substring(i.length,t.length);return n.zone.run((function(){n.router.navigateByUrl(r)})),!1}return!0},"serve"===this.config.runtime.command){var o=r.routes&&r.routes.public&&r.routes.public.filter((function(e){return e.global}));if(o){for(var a=[],s=0,c=o;s<c.length;s++){var u=c[s];a.push({title:u.name,url:g(i,u.route,this.config),data:u})}t.localNavItems=a}}},e.prototype.setOmnibarArgsOverrides=function(e,t){t&&(t.hasOwnProperty("envId")&&(e.envId=t.envId),t.hasOwnProperty("svcId")&&(e.svcId=t.svcId))},e.prototype.initShellComponents=function(){var e=this,t=this.config.skyux.omnibar,n=this.config.skyux.help,i=function(i){e.setParamsFromQS(t),e.setNav(t),e.setOnSearch(t),n&&(t.enableHelp=!0),t.allowAnonymous=!e.config.skyux.auth,e.setOmnibarArgsOverrides(t,i),e.zone.runOutsideAngular((function(){c.BBAuthClientFactory.BBOmnibar.load(t),r=!0}))};"e2e"===this.config.runtime.command&&this.windowRef.nativeWindow.addEventListener("message",(function(t){"sky-navigate-e2e"===t.data.messageType&&e.router.navigate(t.data.url)})),"1"!==this.config.runtime.params.get("addin")&&(t&&(this.omnibarProvider?this.omnibarProvider.ready().then(i):i()),n&&this.helpInitService&&this.helpInitService.load(n))},e.prototype.getInitialThemeSettings=function(){return new s.g(s.c.presets[this.getInitialThemeName()],s.d.presets.light)},e.prototype.getInitialThemeName=function(){var e=this.config.skyux.app,t=e&&e.theming;if(t){var n=this.config.runtime.params.get("svcid");if(n){var r=this.windowRef.nativeWindow.SKYUX_HOST,i=r&&r.theming&&r.theming.serviceIdMap;if(i){var o=i[n];if(o&&t.supportedThemes.indexOf(o)>=0)return o}}return t.theme}return"default"},e.ɵfac=function(t){return new(t||e)(u.Mb(a.d),u.Mb(l.f),u.Mb(b.a),u.Mb(s.a),u.Mb(p.a,8),u.Mb(f.b,8),u.Mb(s.b,8),u.Mb(u.z,8),u.Mb(f.a,8),u.Mb(u.E,8),u.Mb(s.f,8))},e.ɵcmp=u.Gb({type:e,selectors:[["sky-pages-app"]],decls:2,vars:3,consts:[[3,"ngClass"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Nb(1,"router-outlet"),u.Rb()),2&e&&u.lc("ngClass",u.pc(1,m,!t.isReady))},directives:[d.k,a.g],encapsulation:2}),e}(),v=n("QJY3"),k=n("2txg"),S=n("wuPR"),w=n("kHdV"),R=(n("6lls"),n("HgKx")),O=n("E3Gc"),x=n("XZh+"),M=n("hSfL"),P=n("2WT5"),A=n("ytjF"),C=n("LJ3o"),I=n("fZg6"),B=function(){function e(){}return e.ɵmod=u.Kb({type:e}),e.ɵinj=u.Jb({factory:function(t){return new(t||e)},imports:[O.a,x.a,x.c,M.d,P.a,M.b,M.e,x.b,A.a,M.f,M.c,x.g,l.n,C.b,I.a]}),e}(),G=function(){return function(e){Object.assign(this,e)}}(),_=function(){function e(e){this.beer=e}return e.ɵfac=function(t){return new(t||e)(u.Mb(G))},e.ɵcmp=u.Gb({type:e,selectors:[["app-beer-info-modal"]],decls:29,vars:9,consts:[[3,"name","src","canChange"]],template:function(e,t){1&e&&(u.Sb(0,"sky-modal"),u.Nb(1,"sky-modal-header"),u.Sb(2,"sky-modal-content"),u.Sb(3,"sky-page-summary"),u.Sb(4,"sky-page-summary-image"),u.Nb(5,"sky-avatar",0),u.Rb(),u.Sb(6,"sky-page-summary-title"),u.Gc(7),u.Rb(),u.Sb(8,"sky-page-summary-subtitle"),u.Gc(9),u.Rb(),u.Sb(10,"sky-page-summary-content"),u.Sb(11,"p"),u.Gc(12),u.Rb(),u.Rb(),u.Sb(13,"sky-page-summary-key-info"),u.Sb(14,"sky-key-info"),u.Sb(15,"sky-key-info-value"),u.Gc(16),u.Rb(),u.Sb(17,"sky-key-info-label"),u.Gc(18," Style "),u.Rb(),u.Rb(),u.Sb(19,"sky-key-info"),u.Sb(20,"sky-key-info-value"),u.Gc(21),u.Rb(),u.Sb(22,"sky-key-info-label"),u.Gc(23," ABV "),u.Rb(),u.Rb(),u.Sb(24,"sky-key-info"),u.Sb(25,"sky-key-info-value"),u.Gc(26),u.Rb(),u.Sb(27,"sky-key-info-label"),u.Gc(28," IBU "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Ab(5),u.lc("name",t.beer.brewery.name)("src",t.beer.brewery.imageMediumUrl)("canChange",!1),u.Ab(2),u.Ic(" ",t.beer.name," "),u.Ab(2),u.Ic(" ",t.beer.brewery.name," "),u.Ab(3),u.Hc(t.beer.description),u.Ab(4),u.Ic(" ",t.beer.style," "),u.Ab(5),u.Ic(" ",t.beer.abv,"% "),u.Ab(5),u.Ic(" ",t.beer.ibu," "))},directives:[C.d,C.g,C.e,M.g,M.j,O.b,M.l,M.k,M.i,M.h,x.j,x.l,x.k],styles:[""]}),e}(),T=function(){function e(e){this.beer=e}return e.ɵfac=function(t){return new(t||e)(u.Mb(G))},e.ɵcmp=u.Gb({type:e,selectors:[["app-beer-info-flyout"]],decls:26,vars:9,consts:[[3,"name","src","canChange"]],template:function(e,t){1&e&&(u.Sb(0,"sky-page-summary"),u.Sb(1,"sky-page-summary-image"),u.Nb(2,"sky-avatar",0),u.Rb(),u.Sb(3,"sky-page-summary-title"),u.Gc(4),u.Rb(),u.Sb(5,"sky-page-summary-subtitle"),u.Gc(6),u.Rb(),u.Sb(7,"sky-page-summary-content"),u.Sb(8,"p"),u.Gc(9),u.Rb(),u.Rb(),u.Sb(10,"sky-page-summary-key-info"),u.Sb(11,"sky-key-info"),u.Sb(12,"sky-key-info-value"),u.Gc(13),u.Rb(),u.Sb(14,"sky-key-info-label"),u.Gc(15," Style "),u.Rb(),u.Rb(),u.Sb(16,"sky-key-info"),u.Sb(17,"sky-key-info-value"),u.Gc(18),u.Rb(),u.Sb(19,"sky-key-info-label"),u.Gc(20," ABV "),u.Rb(),u.Rb(),u.Sb(21,"sky-key-info"),u.Sb(22,"sky-key-info-value"),u.Gc(23),u.Rb(),u.Sb(24,"sky-key-info-label"),u.Gc(25," IBU "),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Ab(2),u.lc("name",t.beer.brewery.name)("src",t.beer.brewery.imageMediumUrl)("canChange",!1),u.Ab(2),u.Ic(" ",t.beer.name," "),u.Ab(2),u.Ic(" ",t.beer.brewery.name," "),u.Ab(3),u.Hc(t.beer.description),u.Ab(4),u.Ic(" ",t.beer.style," "),u.Ab(5),u.Ic(" ",t.beer.abv,"% "),u.Ab(5),u.Ic(" ",t.beer.ibu," "))},directives:[M.g,M.j,O.b,M.l,M.k,M.i,M.h,x.j,x.l,x.k],styles:[""]}),e}(),j=function(){function e(){}return e.prototype.transform=function(e,t){if(e){for(var n=Math.floor((+new Date-+new Date(e))/1e3),r=void 0,i=0,o=Object.entries({year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1});i<o.length;i++){var a=o[i],s=a[0],c=a[1];if((r=Math.floor(n/c))>0)return 1===r?r+" "+s:r+" "+s+"s"}return e}},e.ɵfac=function(t){return new(t||e)},e.ɵpipe=u.Lb({name:"dateAgo",type:e,pure:!0}),e}();function N(e,t){if(1&e&&(u.Sb(0,"strong"),u.Gc(1),u.Rb()),2&e){var n=u.ec(2);u.Ab(1),u.Ic("",n.beer.keg.getOuncesRemaining()," ounces")}}function H(e,t){if(1&e&&(u.Sb(0,"strong"),u.Gc(1),u.Rb()),2&e){var n=u.ec(2);u.Ab(1),u.Ic("",n.beer.keg.getPintsRemaining()," pints")}}function U(e,t){if(1&e&&(u.Sb(0,"strong"),u.Gc(1),u.fc(2,"dateAgo"),u.Rb()),2&e){var n=u.ec(2);u.Ab(1),u.Hc(u.gc(2,1,1e3*n.sensor.metadata.lastBeerPour))}}var F=function(e,t){return[e,t]},z=function(e){return[e]};function E(e,t){if(1&e){var n=u.Tb();u.Sb(0,"sky-card",1),u.Sb(1,"sky-card-title"),u.Nb(2,"img",2),u.Sb(3,"sky-key-info"),u.Sb(4,"sky-key-info-value"),u.Gc(5),u.Rb(),u.Sb(6,"sky-key-info-label"),u.Sb(7,"span",3),u.Gc(8),u.Rb(),u.Sb(9,"span",4),u.Gc(10),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(11,"sky-card-content"),u.Sb(12,"div",5),u.Sb(13,"div"),u.Sb(14,"h1",6),u.Gc(15),u.Rb(),u.Sb(16,"h3",7),u.Gc(17),u.Rb(),u.Rb(),u.Rb(),u.Sb(18,"div",8),u.dc(),u.Sb(19,"svg",9),u.Sb(20,"defs"),u.Sb(21,"filter",10),u.Nb(22,"feFlood"),u.Nb(23,"feOffset"),u.Nb(24,"feComposite",11),u.Nb(25,"feComposite",12),u.Rb(),u.Rb(),u.Nb(26,"image",13),u.Rb(),u.Rb(),u.cc(),u.Sb(27,"p"),u.Nb(28,"sky-format",14),u.Ec(29,N,2,1,"ng-template",null,15,u.Fc),u.Ec(31,H,2,1,"ng-template",null,16,u.Fc),u.Rb(),u.Sb(33,"p"),u.Nb(34,"sky-format",17),u.Ec(35,U,3,3,"ng-template",null,18,u.Fc),u.Rb(),u.Rb(),u.Sb(37,"sky-card-actions"),u.Sb(38,"sky-dropdown",19),u.Sb(39,"sky-dropdown-menu"),u.Sb(40,"sky-dropdown-item"),u.Sb(41,"button",20),u.ac("click",(function(){return u.zc(n),u.ec().openBeerInfo()})),u.Gc(42,"View beer info"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var r=u.wc(30),i=u.wc(32),o=u.wc(36),a=u.ec();u.lc("size","large")("selectable",!1),u.Ab(2),u.mc("src",a.beer.brewery.imageSmallUrl,u.Ac),u.Ab(3),u.Ic(" ",a.beer.name," "),u.Ab(3),u.Hc(a.beer.brewery.name),u.Ab(2),u.Hc(a.beer.style),u.Ab(5),u.Ic("",a.beer.keg.getPercentRemaining(),"%"),u.Ab(2),u.Hc(a.beer.keg.kegTypeLabel),u.Ab(5),u.Bb("flood-color",a.getSvgFillColor(a.beer.keg.getPercentRemaining())),u.Ab(1),u.Bb("dy",a.convertSvgFill(a.beer.keg.getPercentRemaining())),u.Ab(3),u.Bb("filter","url(#keg-fill)"),u.Ab(2),u.lc("args",u.qc(13,F,r,i)),u.Ab(6),u.lc("args",u.pc(16,z,o))}}var L=function(){function e(e,t,n){var r=this;this.modalSvc=e,this.flyoutSvc=t,this.mediaQueries=n,this.mediaQuerySubscription=this.mediaQueries.subscribe((function(e){r.screenSize=e}))}return e.prototype.convertSvgFill=function(e){return Math.floor(100-e)},e.prototype.getSvgFillColor=function(e){return e>=60?"#00b4f1":e>=30?"#ffce00":"#f04141"},e.prototype.getSvgLocation=function(){return window.location.href+"assets/beer-keg.svg"},e.prototype.openBeerInfo=function(){switch(this.screenSize){case l.m.xs:this.openBeerInfoFlyout();break;case l.m.sm:case l.m.md:case l.m.lg:this.openBeerInfoModal();break;default:this.openBeerInfoModal()}},e.prototype.openBeerInfoModal=function(){var e=this,t={providers:[{provide:G,useValue:this.beer}],size:"large"};this.modal=this.modalSvc.open(_,t),this.modal.closed.subscribe((function(){e.modal=void 0}))},e.prototype.openBeerInfoFlyout=function(){var e=this,t={providers:[{provide:G,useValue:this.beer}],minWidth:420};this.flyout=this.flyoutSvc.open(T,t),this.flyout.closed.subscribe((function(){e.flyout=void 0}))},e.prototype.ngOnDestroy=function(){this.mediaQuerySubscription&&this.mediaQuerySubscription.unsubscribe()},e.ɵfac=function(t){return new(t||e)(u.Mb(C.c),u.Mb(A.b),u.Mb(l.o))},e.ɵcmp=u.Gb({type:e,selectors:[["app-sensor-card"]],inputs:{sensor:"sensor",beer:"beer"},decls:1,vars:1,consts:[[3,"size","selectable",4,"ngIf"],[3,"size","selectable"],[3,"src"],["id","breweryName"],["id","beerStyle"],[1,"keg-info"],[1,"keg-remaining-percent"],[1,"keg-label"],[1,"keg-remaining-icon"],["width","80px","height","100px"],["id","keg-fill","x","0%","y","0%"],["operator","in","in2","SourceGraphic"],["operator","over","in2","SourceGraphic"],[0,"xlink","href","https://tilleytap.com/assets/beer-keg.d953faf4a9b0faf67f4563bc43aec3b2fe191d42.svg","width","80px","height","100px"],["text","{0} remaining, about {1}.",3,"args"],["ouncesValue",""],["pintsValue",""],["text","A beer was last poured {0} ago.",3,"args"],["lastBeerPourValue",""],["buttonType","context-menu"],["type","button",3,"click"]],template:function(e,t){1&e&&u.Ec(0,E,43,18,"sky-card",0),2&e&&u.lc("ngIf",t.beer)},directives:[d.m,M.q,M.r,x.j,x.l,x.k,M.s,M.w,M.p,I.b,I.d,I.c],pipes:[j],styles:["sky-card-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}sky-card-title[_ngcontent-%COMP%]   sky-key-info[_ngcontent-%COMP%]{display:inline-block}sky-card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:10px;vertical-align:top}sky-card-actions[_ngcontent-%COMP%]   sky-icon[_ngcontent-%COMP%]{color:#0974a1;cursor:pointer}sky-card-content[_ngcontent-%COMP%]{text-align:center;display:block}.keg-info[_ngcontent-%COMP%]{vertical-align:middle;padding-right:25px;display:inline-block}.keg-remaining-percent[_ngcontent-%COMP%]{margin:0px 0px 10px 0px}.keg-label[_ngcontent-%COMP%]{margin:0px}.keg-remaining-icon[_ngcontent-%COMP%]{vertical-align:middle;display:inline-block}#breweryName[_ngcontent-%COMP%]{display:block}#beerStyle[_ngcontent-%COMP%]{font-weight:100}@media screen and (max-width: 767px){  .sky-card{width:100% !important;margin:0 auto !important}}@media screen and (max-width: 350px){  .sky-column{padding:0px !important}sky-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px !important}}"]}),e}(),W=[{provide:R.a,useValue:void 0},{provide:R.b,useClass:R.b}],D=function(){function e(){}return e.ɵmod=u.Kb({type:e}),e.ɵinj=u.Jb({factory:function(t){return new(t||e)},providers:[W,j],imports:[B,R.c]}),e}(),Q=n("IcVP"),V=n("lzbi"),K=function(){function e(){this.nav=[{title:"Home",path:"/"},{title:"About",path:"/about"}]}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Gb({type:e,selectors:[["app-nav"]],decls:2,vars:0,consts:[["src","https://tilleytap.com/assets/logo-hollow.54d543289898574bf27f16f1504ed1f15b6a3cce.png","height","50",1,"logo"]],template:function(e,t){1&e&&(u.Sb(0,"sky-navbar"),u.Nb(1,"img",0),u.Rb())},directives:[P.b],styles:[".logo[_ngcontent-%COMP%]{margin-left:15px;margin-top:6px;margin-bottom:6px;display:block}@media screen and (max-width: 767px){.logo[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}"]}),e}(),J=function(){function e(){this.nodes=[{name:"Animals",isExpanded:!0,children:[{name:"Cats",isExpanded:!0,children:[{name:"Burmese"},{name:"Persian"},{name:"Tabby"}]},{name:"Dogs",isExpanded:!0,children:[{name:"Beagle"},{name:"German Shepard"},{name:"Labrador Retriever"}]}]}]}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Gb({type:e,selectors:[["my-about"]],decls:10,vars:0,consts:[["pageTitle","About","layout","container","showTableOfContents","true","showBreadcrumbs","false"],["stache",""]],template:function(e,t){1&e&&(u.Nb(0,"app-nav"),u.Sb(1,"main"),u.Sb(2,"stache",0,1),u.Sb(4,"stache-page-anchor"),u.Gc(5," Angular + Ionic Capacitor "),u.Rb(),u.Sb(6,"stache-page-anchor"),u.Gc(7," AWS services "),u.Rb(),u.Sb(8,"stache-page-anchor"),u.Gc(9," Tech Thursday topics "),u.Rb(),u.Rb(),u.Rb())},directives:[K,R.e,R.d],encapsulation:2}),e}(),Y=n("psW0"),q=function(){return function(e){Object.assign(this,e)}}(),Z=function(){function e(e){Object.assign(this,e)}return e.prototype.getPercentRemaining=function(){var e=this.getOuncesRemaining();return Math.floor(e/this.kegTypeCapacity*100)},e.prototype.getPintsRemaining=function(){var e=this.getOuncesRemaining();return Math.floor(e/16)},e.prototype.getOuncesRemaining=function(){var e=16*(this.fullWeight-this.currentWeight);return Math.floor(this.kegTypeCapacity-e)},e}(),X=function(e){return e[e.Cornelius=0]="Cornelius",e[e.SixthBbl=1]="SixthBbl",e[e.QuarterBbl=2]="QuarterBbl",e[e.HalfBbl=3]="HalfBbl",e}({}),$=function(){return function(e,t,n){this.name=e,this.label=t,this.capacity=n}}(),ee={map:new Map([[X.Cornelius,new $("Cornelius Keg","Corny Keg",640)],[X.SixthBbl,new $("Sixth Barrel","1/6 BBL",661)],[X.QuarterBbl,new $("Quarter Barrel","1/4 BBL",992)],[X.HalfBbl,new $("Half Barrel","1/2 BBL",1984)]])},te=n("cUzu"),ne="https://cusvfubnx1.execute-api.us-east-2.amazonaws.com/dev/",re=function(){function e(e){this.httpClient=e}return e.prototype.getSensor=function(e){var t=ne+"/sensors/"+e,n=this.getHttpOptions();return this.httpClient.get(t,n)},e.prototype.getBeer=function(e){var t=ne+"/brewerydb/beers/"+e,n=this.getHttpOptions();return this.httpClient.get(t,n)},e.prototype.getHttpOptions=function(){return{headers:new te.d({"Content-Type":"application/json"})}},e.ɵfac=function(t){return new(t||e)(u.Wb(te.b))},e.ɵprov=u.Ib({token:e,factory:e.ɵfac,providedIn:"root"}),e}();function ie(e,t){if(1&e&&u.Nb(0,"app-sensor-card",1),2&e){var n=u.ec();u.lc("sensor",n.sensor)("beer",n.beer)}}var oe=function(){function e(e,t){this.apiSvc=e,this.waitSvc=t}return e.prototype.ngOnInit=function(){var e=this;this.waitSvc.beginBlockingPageWait(),this.apiSvc.getSensor("QTA6MjA6QTY6MTM6NjI6RkE=").pipe(Object(Y.a)((function(t){return e.sensor=t,e.apiSvc.getBeer(t.metadata.breweryDbId)}))).subscribe((function(t){e.buildBeerObject(JSON.parse(t)),e.waitSvc.endBlockingPageWait()}))},e.prototype.buildBeerObject=function(e){this.beer=new G({id:e.data.id,name:e.data.name,description:e.data.description,abv:e.data.abv,ibu:e.data.ibu,style:e.data.style.shortName}),e.data.breweries?this.beer.brewery=new q({id:e.data.breweries[0].id,name:e.data.breweries[0].name,imageSmallUrl:e.data.breweries[0].images.icon,imageMediumUrl:e.data.breweries[0].images.squareMedium}):this.beer.brewery=new q;var t=ee.map.get(+this.sensor.metadata.kegType);this.beer.keg=new Z({currentWeight:this.sensor.metadata.weight,fullWeight:this.sensor.metadata.fullWeight,kegType:+this.sensor.metadata.kegType,kegTypeCapacity:+t.capacity,kegTypeName:t.name,kegTypeLabel:t.label})},e.ɵfac=function(t){return new(t||e)(u.Mb(re),u.Mb(x.h))},e.ɵcmp=u.Gb({type:e,selectors:[["my-home"]],decls:6,vars:1,consts:[[3,"sensor","beer",4,"ngIf"],[3,"sensor","beer"]],template:function(e,t){1&e&&(u.Nb(0,"app-nav"),u.Sb(1,"main"),u.Sb(2,"sky-fluid-grid"),u.Sb(3,"sky-row"),u.Sb(4,"sky-column"),u.Ec(5,ie,1,2,"app-sensor-card",0),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Ab(5),u.lc("ngIf",t.beer))},directives:[K,M.v,M.t,M.u,d.m,L],styles:["main[_ngcontent-%COMP%]{padding-top:15px}"]}),e}(),ae=function(){function e(){this.pathMap={"architecture-diagram-horizontal.png":"https://tilleytap.com/assets/architecture-diagram-horizontal.8b28d60cec852adf5804a58e1399af518a9dad83.png","architecture-diagram-vertical.png":"https://tilleytap.com/assets/architecture-diagram-vertical.a1912d96e3496f2aca51a185a778c94e834ea06f.png","beer-keg.svg":"https://tilleytap.com/assets/beer-keg.d953faf4a9b0faf67f4563bc43aec3b2fe191d42.svg","locales/resources_en_US.json":"https://tilleytap.com/assets/locales/resources_en_US.b0256638e9979c1944cc8c91a04f3f817b3eff00.json","logo-full.png":"https://tilleytap.com/assets/logo-full.162827f5cf9d9996453e36421f02b786dee50fdc.png","logo-hollow.png":"https://tilleytap.com/assets/logo-hollow.54d543289898574bf27f16f1504ed1f15b6a3cce.png"}}return e.prototype.getUrl=function(e){return this.pathMap[e]},e.prototype.getAllUrls=function(){return this.pathMap},e}();function se(e){var t={runtime:{app:{inject:!1,template:"C:\\mycode\\skyux-spa-tilleytap\\node_modules\\@skyux-sdk\\builder\\src\\main.ejs",base:"https://tilleytap.com/",name:"tilleytap"},command:"build",componentsPattern:"**/*.component.ts",componentsIgnorePattern:"./public/**/*",includeRouteModule:!0,routesPattern:"**/index.html",runtimeAlias:"@skyux-sdk/builder/runtime",srcPath:"src/app/",spaPathAlias:"../..",skyPagesOutAlias:"../..",useTemplateUrl:!0,handle404:!0,routes:[{routePath:"about",routeParams:[]},{routePath:"",routeParams:[]},{routePath:""},{routePath:"**",routeParams:[]}]},skyux:{$schema:"./node_modules/@skyux/config/skyuxconfig-schema.json",mode:"easy",host:{url:"https://host.nxt.blackbaud.com",frameOptions:{none:!0}},app:{title:"TilleyTap - Home Kegerator Monitor",base:"https://tilleytap.com/",theming:{supportedThemes:["modern"],theme:"modern"}},compileMode:"aot",params:{addin:!0,envid:!0,leid:!0,svcid:!0},auth:!1,plugins:["@blackbaud/skyux-builder-plugin-stache"],useHashRouting:!0}};return t.runtime.params=new b.b(e.nativeWindow.location.toString(),{addin:!0,envid:!0,leid:!0,svcid:!0}),t}function ce(e){var t=e.skyux.omnibar&&"1"!==e.runtime.params.get("addin"),n=new l.s;return n.viewportMarginTop=t?50:0,n}Q.a.config={$schema:"./node_modules/@skyux/config/skyuxconfig-schema.json",mode:"easy",host:{url:"https://host.nxt.blackbaud.com",frameOptions:{none:!0}},app:{title:"TilleyTap - Home Kegerator Monitor",base:"https://tilleytap.com/",theming:{supportedThemes:["modern"],theme:"modern"}},compileMode:"aot",params:{addin:!0,envid:!0,leid:!0,svcid:!0},auth:!1,plugins:["@blackbaud/skyux-builder-plugin-stache"],useHashRouting:!0};var ue=function(){function e(e,t){this.route=e,this.config=t}return e.prototype.ngOnInit=function(){this.sub=this.route.params.subscribe((function(e){}))},e.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},e.ɵfac=function(t){return new(t||e)(u.Mb(a.a),u.Mb(b.a))},e.ɵcmp=u.Gb({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&u.Nb(0,"my-about")},directives:function(){return[J]},encapsulation:2}),e}(),le=function(){function e(e,t){this.route=e,this.config=t}return e.prototype.ngOnInit=function(){this.sub=this.route.params.subscribe((function(e){}))},e.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},e.ɵfac=function(t){return new(t||e)(u.Mb(a.a),u.Mb(b.a))},e.ɵcmp=u.Gb({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&u.Nb(0,"my-home")},directives:function(){return[oe]},encapsulation:2}),e}(),be=[],pe=[{path:"",component:function(){function e(){}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Gb({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&u.Nb(0,"router-outlet")},directives:[a.g],encapsulation:2}),e}(),canActivate:[],canDeactivate:[],canActivateChild:[],children:[{path:"about",component:ue,canActivate:[],canDeactivate:[],canActivateChild:[],children:[]},{path:"",component:le,canActivate:[],canDeactivate:[],canActivateChild:[],children:[]}]},{path:"**",component:function(){function e(){}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Gb({type:e,selectors:[["ng-component"]],decls:2,vars:3,consts:[["src","https://host.nxt.blackbaud.com/errors/notfound",2,"border","0","height","100vh","width","100%",3,"title"]],template:function(e,t){1&e&&(u.Nb(0,"iframe",0),u.fc(1,"skyAppResources")),2&e&&u.lc("title",u.gc(1,1,"skyux_builder_page_not_found_iframe_title"))},pipes:[S.c],encapsulation:2}),e}(),canActivate:[],canDeactivate:[],canActivateChild:[],children:[]}],fe=a.f.forRoot(pe,{useHash:!0});Object(u.S)(),n("j7uo"),n("D111");var de=function(){function e(){}return e.ɵmod=u.Kb({type:e}),e.ɵinj=u.Jb({factory:function(t){return new(t||e)},providers:[l.f,{provide:b.a,deps:[l.f],useFactory:se},{provide:k.a,useClass:ae},{provide:S.b,useClass:V.a},{provide:l.s,deps:[b.a],useFactory:ce},w.a,s.f,l.e,be],imports:[[d.c,v.f,v.m,D,S.d,s.e,fe]]}),e}(),me=function(){function e(){}return e.ɵmod=u.Kb({type:e,bootstrap:[y]}),e.ɵinj=u.Jb({factory:function(t){return new(t||e)},imports:[[o.a,a.f,de]]}),e}();i.a.processBootstrapConfig().then((function(){o.c().bootstrapModule(me)}))}});
var SKY_PAGES_READY_APP_F3CA97335CB128535E77 = true;
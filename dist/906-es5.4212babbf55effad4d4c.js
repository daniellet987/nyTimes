!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(self.webpackChunkny_times=self.webpackChunkny_times||[]).push([[906],{6906:function(e,n,a){"use strict";a.r(n),a.d(n,{HomePageModule:function(){return Q}});var o=a(8583),r=a(216),c=a(7716),s=a(4069);function l(t,e){if(1&t&&c._UZ(0,"img",9),2&t){var i=c.oxw();c.s9C("src",i.imageDisplayed.url,c.LSH),c.s9C("alt",i.imageDisplayed.copyright)}}function m(t,e){1&t&&c._UZ(0,"img",10)}function d(t,e){1&t&&c._UZ(0,"img",11)}function g(t,e){1&t&&c._UZ(0,"img",12)}function p(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"div",4),c.NdJ("click",function(){return c.CHM(i),c.oxw().showDetails()}),c.TgZ(1,"h3"),c._uU(2),c.qZA(),c.TgZ(3,"h5"),c._uU(4,"More details: "),c.TgZ(5,"a",13),c._uU(6),c.qZA(),c.qZA(),c.qZA()}if(2&t){var n=c.oxw();c.xp6(2),c.Oqu(n.articleAbstract),c.xp6(3),c.s9C("href",n.articleUrl,c.LSH),c.xp6(1),c.Oqu(n.articleUrl)}}var u=function(){var e=function(){function e(){t(this,e),this.image=[],this.bookmarked=!1,this.bookmarkClicked=new c.vpe,this.showDetailsClicked=!1}return i(e,[{key:"ngOnInit",value:function(){this.imageDisplayed=this.image?this.image.find(function(t){return"Standard Thumbnail"==t.format}):null}},{key:"toggleBookmark",value:function(){this.bookmarked=!this.bookmarked,this.bookmarkClicked.emit(this.index)}},{key:"showDetails",value:function(){this.showDetailsClicked=!this.showDetailsClicked}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-article"]],inputs:{image:"image",title:"title",publicationDate:"publicationDate",index:"index",articleAbstract:"articleAbstract",articleUrl:"articleUrl",bookmarked:"bookmarked"},outputs:{bookmarkClicked:"bookmarkClicked"},decls:16,vars:12,consts:[[1,"list-item-container"],[1,"image-container"],[3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],[1,"article-info-container",3,"click"],[1,"bookmarkIcon",3,"click"],["src","./assets/Icons/icons8-bookmark.svg",4,"ngIf","ngIfElse"],["filled",""],["class","article-info-container",3,"click",4,"ngIf"],[3,"src","alt"],["src","./assets/Icons/noimage.png"],["src","./assets/Icons/icons8-bookmark.svg"],["src","./assets/Icons/icons8-bookmark-filled.svg"],["target","_blank",3,"href"]],template:function(t,e){if(1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.YNc(2,l,1,2,"img",2),c.YNc(3,m,1,0,"ng-template",null,3,c.W1O),c.qZA(),c.TgZ(5,"div",4),c.NdJ("click",function(){return e.showDetails()}),c.TgZ(6,"h2"),c._uU(7),c.qZA(),c.TgZ(8,"h4"),c._uU(9),c.ALo(10,"date"),c.qZA(),c.qZA(),c.TgZ(11,"div",5),c.NdJ("click",function(){return e.toggleBookmark()}),c.YNc(12,d,1,0,"img",6),c.YNc(13,g,1,0,"ng-template",null,7,c.W1O),c.qZA(),c.YNc(15,p,7,3,"div",8),c.qZA()),2&t){var i=c.MAs(4),n=c.MAs(14);c.ekj("list-item-container-opened",e.showDetailsClicked),c.xp6(2),c.Q6J("ngIf",e.imageDisplayed)("ngIfElse",i),c.xp6(5),c.Oqu(e.title),c.xp6(2),c.Oqu(c.xi3(10,9,e.publicationDate,"EEEE, MMMM d, y AT h:mm a")),c.xp6(3),c.Q6J("ngIf",!e.bookmarked)("ngIfElse",n),c.xp6(3),c.Q6J("ngIf",e.showDetailsClicked)}},directives:[o.O5],pipes:[o.uU],styles:[".list-item-container[_ngcontent-%COMP%]{width:calc(100% - 40px);border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,.1);height:auto;margin-left:20px;margin-right:20px;padding:25px 20px;position:relative}.list-item-container[_ngcontent-%COMP%]   .bookmarkIcon[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;cursor:pointer}.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:75px;width:75px;overflow:hidden;display:inline-block;vertical-align:middle}.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 rgba(0,0,0,.5);border-radius:10px}.list-item-container[_ngcontent-%COMP%]   .article-info-container[_ngcontent-%COMP%]{width:calc(100% - 130px);display:inline-block;padding:0 15px;vertical-align:top;cursor:pointer}.list-item-container[_ngcontent-%COMP%]:not(:first-child){margin-top:20px}.list-item-container[_ngcontent-%COMP%]:last-child{margin-bottom:20px}.list-item-container-opened[_ngcontent-%COMP%]{height:auto;box-shadow:0 4px 12px rgba(0,0,0,.2)}"]}),e}();function h(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"app-article",4),c.NdJ("bookmarkClicked",function(t){return c.CHM(i),c.oxw(2).bookmarkArticle(t)}),c.qZA()}if(2&t){var n=e.$implicit,a=e.index;c.Q6J("image",null==n?null:n.multimedia)("title",null==n?null:n.title)("publicationDate",null==n?null:n.published_date)("index",a)("articleAbstract",n.abstract)("articleUrl",n.short_url)("bookmarked",n.bookmarked)}}function f(t,e){if(1&t&&(c.TgZ(0,"div",2),c.YNc(1,h,1,7,"app-article",3),c.qZA()),2&t){var i=c.oxw();c.xp6(1),c.Q6J("ngForOf",i.listOfArticles)}}function k(t,e){1&t&&(c.TgZ(0,"div",5),c.TgZ(1,"div",6),c._UZ(2,"img",7),c.qZA(),c.TgZ(3,"div",8),c._uU(4," Empty List "),c.qZA(),c.qZA())}var b=function(){var e=function(){function e(i){t(this,e),this.NyTimesService=i,this.listOfArticles=[],this.Articles=[],this.bookmarkedList=[],this.savedBookmarksArray=[],this.savedBookmarksString=[]}return i(e,[{key:"ngOnInit",value:function(){var t=this,e=this;this.NyTimesService.bookmarks.subscribe(function(e){t.bookmarkedList=e||[]}),this.NyTimesService.articles.subscribe(function(i){i&&(e.Articles=i.results,t.bookMarkArticles(e.Articles))})}},{key:"bookMarkArticles",value:function(t){var e=this;this.bookmarkedList&&this.bookmarkedList.length>0?(t.forEach(function(t){var i=e.bookmarkedList.find(function(e){return t.title==e.title});t.bookmarked=!!i}),this.listOfArticles=t):this.listOfArticles=t}},{key:"bookmarkArticle",value:function(t){var e=this;if(this.bookmarkedList.find(function(i){return e.Articles[t].title==i.title})){var i=this.bookmarkedList.findIndex(function(t){});this.bookmarkedList.splice(i,1)}else this.bookmarkedList.push(this.Articles[t])}},{key:"ngOnDestroy",value:function(){this.NyTimesService.bookmarks.next(this.bookmarkedList),this.NyTimesService.articles.next(void 0)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.Z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-articles-list"]],decls:3,vars:2,consts:[["class","main-container",4,"ngIf","ngIfElse"],["emptyState",""],[1,"main-container"],[3,"image","title","publicationDate","index","articleAbstract","articleUrl","bookmarked","bookmarkClicked",4,"ngFor","ngForOf"],[3,"image","title","publicationDate","index","articleAbstract","articleUrl","bookmarked","bookmarkClicked"],[1,"empty-state-container"],[1,"empty-state-img"],["src","./assets/Icons/empty-state.jpeg"],[1,"empty-state-desc"]],template:function(t,e){if(1&t&&(c.YNc(0,f,2,1,"div",0),c.YNc(1,k,5,0,"ng-template",null,1,c.W1O)),2&t){var i=c.MAs(2);c.Q6J("ngIf",e.listOfArticles.length>0)("ngIfElse",i)}},directives:[o.O5,o.sg,u],styles:[".main-container{width:100%;height:100%;overflow-y:scroll;padding-top:82px}.empty-state-container{text-align:center;padding-top:35vh;width:100%;height:100%}.empty-state-container .empty-state-img{margin-bottom:10px}.empty-state-container .empty-state-img img{width:200px;height:200px;border-radius:70px}.empty-state-container .empty-state-desc{color:#a9a9a9;margin-bottom:10px}"],encapsulation:2}),e}(),v=a(6066),x=a(9992),y=a(665),Z=a(667);function A(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"mat-list-option",17),c.NdJ("click",function(){c.CHM(i);var t=c.oxw();return c.MAs(2).close(),t.goToArticles()}),c._uU(1),c.qZA()}if(2&t){var n=e.$implicit;c.Q6J("value",n),c.xp6(1),c.hij(" ",n," ")}}var C=function(){return["/homePage/bookmarked"]},w=function(){var e=function(){function e(i,n,a){t(this,e),this.NyTimesService=i,this.router=n,this.location=a,this.sectionsList=["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"],this.selectedTitle="Home"}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.NyTimesService.getTopStories(),this.route=this.location.path(),this.headerTitleValue(),this.router.events.subscribe(function(e){t.route=t.location.path(),t.headerTitleValue()})}},{key:"goToArticles",value:function(){"/homePage/articles"!=this.route&&(this.router.navigate(["/homePage/articles"]),this.NyTimesService.getTopStories(this.selectedItem))}},{key:"headerTitleValue",value:function(){"/homePage/bookmarked"==this.route?this.selectedTitle="Bookmarked Articles":"/homePage/articles"==this.route&&(this.selectedTitle=this.selectedItem?this.selectedItem:"Home")}},{key:"selectItem",value:function(t){"/homePage/articles"!=this.route&&this.router.navigate(["/homePage/articles"]),this.selectedTitle=t[0],this.NyTimesService.getTopStories(this.selectedTitle)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.Z),c.Y36(r.F0),c.Y36(o.Ye))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home-page"]],decls:25,vars:10,consts:[[1,"nytimes-container",3,"hasBackdrop","backdropClick"],[3,"mode","position"],["drawer",""],[3,"multiple","ngModel","ngModelChange"],["sectionsSelection",""],[3,"value","click",4,"ngFor","ngForOf"],["SideClass","navbar navbar-expand-lg navbar-dark bg-primary",3,"containerInside"],["href","#",1,"navbar-brand"],[1,"title"],[1,"navbar-nav","ml-auto"],[1,"nav-item","active"],["mdbWavesEffect","",1,"nav-link","waves-light","mr-20",3,"click"],["src","./assets/Icons/icons8-home.svg",1,"nav-link-icon"],["mdbWavesEffect","",1,"nav-link","waves-light","mr-20",3,"routerLink"],["src","./assets/Icons/icons8-bookmark.svg",1,"nav-link-icon"],["mdbWavesEffect","",1,"nav-link","waves-light",3,"click"],["src","./assets/Icons/icons8-menu.svg"],[3,"value","click"]],template:function(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"mat-drawer-container",0),c.NdJ("backdropClick",function(){return c.CHM(i),c.MAs(2).close()}),c.TgZ(1,"mat-drawer",1,2),c.TgZ(3,"mat-selection-list",3,4),c.NdJ("ngModelChange",function(t){return e.selectedItem=t})("ngModelChange",function(t){return e.selectItem(t)}),c.YNc(5,A,2,2,"mat-list-option",5),c.qZA(),c.qZA(),c.TgZ(6,"mat-drawer-content"),c.TgZ(7,"mdb-navbar",6),c.TgZ(8,"mdb-navbar-brand"),c.TgZ(9,"a",7),c._uU(10,"NY TIMES / "),c.TgZ(11,"span",8),c._uU(12),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"links"),c.TgZ(14,"ul",9),c.TgZ(15,"li",10),c.TgZ(16,"a",11),c.NdJ("click",function(){return e.goToArticles()}),c._UZ(17,"img",12),c.qZA(),c.qZA(),c.TgZ(18,"li",10),c.TgZ(19,"a",13),c._UZ(20,"img",14),c.qZA(),c.qZA(),c.TgZ(21,"li",10),c.TgZ(22,"a",15),c.NdJ("click",function(){return c.CHM(i),c.MAs(2).toggle()}),c._UZ(23,"img",16),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"router-outlet"),c.qZA(),c.qZA()}2&t&&(c.Q6J("hasBackdrop",!0),c.xp6(1),c.Q6J("mode","push")("position","end"),c.xp6(2),c.Q6J("multiple",!1)("ngModel",e.selectedItem),c.xp6(2),c.Q6J("ngForOf",e.sectionsList),c.xp6(2),c.Q6J("containerInside",!1),c.xp6(5),c.Oqu(e.selectedTitle),c.xp6(7),c.Q6J("routerLink",c.DdM(9,C)))},directives:[v.kh,v.jA,x.Ub,y.JJ,y.On,o.sg,v.LW,Z.SB,Z.R_,Z.ZR,Z.b6,r.yS,r.lC,x.vS],styles:[".navbar{position:fixed!important;z-index:999999}.title{text-transform:capitalize}.nav-link{cursor:pointer}.nav-link .nav-link-icon{width:26px;height:26px}.nytimes-container{width:100vw;height:100vh}mat-drawer-content{display:flex;flex-direction:column;align-items:flex-start}.mr-20{margin-right:20px}.mat-drawer{width:300px}.mat-drawer .mat-selection-list{background-color:#0d6efd}.mat-drawer .mat-selection-list .list-item-selected{background:rgba(0,0,0,.2)!important}.mat-drawer .mat-selection-list .mat-list-item .mat-list-item-content .mat-list-text{color:#fff}.mat-drawer .mat-selection-list .mat-list-item .mat-list-item-content .mat-pseudo-checkbox{display:none!important}"],encapsulation:2}),e}(),_=a(6237),M=a(2458),T=["*",[["mat-card-footer"]]],O=["*","mat-card-footer"],P=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.lG2({type:e,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),e}(),q=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c.lG2({type:e,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),e}(),I=function(){var e=function e(i){t(this,e),this._animationMode=i};return e.\u0275fac=function(t){return new(t||e)(c.Y36(_.Qb,8))},e.\u0275cmp=c.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&c.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:O,decls:2,vars:0,template:function(t,e){1&t&&(c.F$t(T),c.Hsn(0),c.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),e}(),N=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[M.BQ],M.BQ]}),e}();function S(t,e){if(1&t&&(c.TgZ(0,"div",5),c.TgZ(1,"mat-card",6),c._UZ(2,"img",7),c.TgZ(3,"mat-card-content"),c.TgZ(4,"h2"),c._uU(5),c.qZA(),c.TgZ(6,"h4"),c._uU(7),c.ALo(8,"date"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){var i=e.$implicit,n=c.oxw(2);c.xp6(2),c.Q6J("src",n.getimageSource(i),c.LSH)("alt",n.getimageCopyRight(i)),c.xp6(3),c.Oqu(i.title),c.xp6(2),c.Oqu(c.xi3(8,4,i.published_date,"EEEE, MMMM d, y AT h:mm a"))}}function U(t,e){if(1&t&&(c.TgZ(0,"div",2),c.TgZ(1,"div",3),c.YNc(2,S,9,7,"div",4),c.qZA(),c.qZA()),2&t){var i=c.oxw();c.xp6(2),c.Q6J("ngForOf",i.bookmarkedArticles)}}function J(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"div",8),c.TgZ(1,"div",9),c._UZ(2,"img",10),c.qZA(),c.TgZ(3,"div",11),c._uU(4," Nothing bookmarked yet "),c.qZA(),c.TgZ(5,"div",12),c.TgZ(6,"button",13),c.NdJ("click",function(){return c.CHM(i),c.oxw().goBackToArticles()}),c._uU(7,"Home"),c.qZA(),c.qZA(),c.qZA()}}var E,D,L=[{path:"",component:w,children:[{path:"",pathMatch:"full",redirectTo:"articles"},{path:"articles",component:b},{path:"bookmarked",component:(E=function(){function e(i,n){t(this,e),this.NyTimesService=i,this.router=n,this.bookmarkedArticles=[]}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.NyTimesService.bookmarks.subscribe(function(e){t.bookmarkedArticles=e||void 0})}},{key:"getimageSource",value:function(t){return t.multimedia.find(function(t){return"Normal"==t.format}).url}},{key:"getimageCopyRight",value:function(t){return t.multimedia.find(function(t){return"Normal"==t.format}).copyright}},{key:"goBackToArticles",value:function(){this.router.navigate(["/homePage/articles"])}},{key:"ngOnDestroy",value:function(){this.bookmarkedArticles&&this.NyTimesService.bookmarks.next(this.bookmarkedArticles)}}]),e}(),E.\u0275fac=function(t){return new(t||E)(c.Y36(s.Z),c.Y36(r.F0))},E.\u0275cmp=c.Xpm({type:E,selectors:[["app-bookmark-page"]],decls:3,vars:2,consts:[["class","bookmark-container",4,"ngIf","ngIfElse"],["emptyState",""],[1,"bookmark-container"],[1,"row","sub-container"],["class","col-4 bookmarked-article",4,"ngFor","ngForOf"],[1,"col-4","bookmarked-article"],[1,"article-card"],["mat-card-image","",3,"src","alt"],[1,"empty-state-container"],[1,"empty-state-img"],["src","./assets/Icons/empty-state.jpeg"],[1,"empty-state-desc"],[1,"go-back-button"],[1,"go-back-style",3,"click"]],template:function(t,e){if(1&t&&(c.YNc(0,U,3,1,"div",0),c.YNc(1,J,8,0,"ng-template",null,1,c.W1O)),2&t){var i=c.MAs(2);c.Q6J("ngIf",e.bookmarkedArticles&&e.bookmarkedArticles.length>0)("ngIfElse",i)}},directives:[o.O5,o.sg,I,q,P],pipes:[o.uU],styles:[".bookmark-container[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:scroll;padding-top:82px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]{margin:0 10px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]{padding:5px;margin:0;height:400px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;border:16px solid rgba(0,0,0,.14);max-height:200px;-o-object-fit:fill;object-fit:fill;box-sizing:content-box}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{height:100%}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{height:100px}.empty-state-container[_ngcontent-%COMP%]{text-align:center;padding-top:35vh}.empty-state-container[_ngcontent-%COMP%]   .empty-state-img[_ngcontent-%COMP%]{margin-bottom:10px}.empty-state-container[_ngcontent-%COMP%]   .empty-state-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:70px}.empty-state-container[_ngcontent-%COMP%]   .empty-state-desc[_ngcontent-%COMP%]{color:#a9a9a9;margin-bottom:10px}.empty-state-container[_ngcontent-%COMP%]   .go-back-button[_ngcontent-%COMP%]   .go-back-style[_ngcontent-%COMP%]{width:150px;height:40px;background-color:grey;color:#fff;font-size:20px;border:none;border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,.5)}"]}),E)}]}],Y=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(L)],r.Bz]}),e}(),B=a(9344),Q=((D=function e(){t(this,e)}).\u0275fac=function(t){return new(t||D)},D.\u0275mod=c.oAB({type:D,bootstrap:[w]}),D.\u0275inj=c.cJS({providers:[s.Z,{provide:B._W,useClass:B._W}],imports:[[o.ez,r.Bz,Z.W4,Z.x3,Z.Fq,Z.yi.forRoot(),B.Rh.forRoot({positionClass:"toast-bottom-right"}),v.SJ,x.ie,y.u5,Y,N]]}),D)}}])}();
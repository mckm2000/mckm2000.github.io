"use strict";function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}$(function(){function O(){var t=$("#nav");window.innerWidth<768||e+i>t.width()-30?t.addClass("hide-menu"):t.removeClass("hide-menu")}var o,e=$("#site-name").width(),i=$("#menus").width(),w=!1,t=$("#rightside");function S(t){t.each(function(t,e){var o=$(e),e=o.attr("datetime");o.text(btf.diffDate(e,!0)).css("display","inline")})}t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")}),t.on("click","#hide-aside-btn",function(){var t=$(document.documentElement);t.hasClass("hide-aside")?(t.removeClass("hide-aside"),saveToLocal.set("aside-status","show",2)):(t.addClass("hide-aside"),saveToLocal.set("aside-status","hide",2))}),window.refreshFn=function(){var t,o,e,i,n,a,s,c,l,r,d,f,h,u,p,g,m,y,b,v,C,L,G;function _(){G.css({overflow:"","padding-right":""}),L.fadeOut(),v.removeClass("open").addClass("close"),C.removeClass("open")}O(),$("#nav").addClass("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){var t=$("#card-toc"),c=t.find(".toc-content"),l=c.find(".toc-child"),r=c.find(".toc-link"),i=$("#article-container");function e(){t.css("animation","toc-close .2s"),setTimeout(function(){t.css({display:"",animation:""})},100)}l.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();o(e),n(e)},100));var o=function(t){var e=i.height(),o=$(window).height(),e=(t-i.offset().top)/(o<e?e-o:$(document).height()-o),o=Math.round(100*e),o=100<o?100:o<=0?0:o;c.attr("progress-percentage",o)},d=GLOBAL_CONFIG.isanchor;$("#mobile-toc-button").on("click",function(){(t.is(":visible")?e:function(){t.css("display","block")})()}),r.on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<900&&e()});var f=i.find("h1,h2,h3,h4,h5,h6"),n=function(e){if(0===r.length)return!1;var o="";f.each(function(){var t=$(this);e>t.offset().top-70&&(o="#"+encodeURI($(this).attr("id")))}),""===o&&(r.removeClass("active"),l.hide());var t,i,n,a,s=r.filter(".active");o&&s.attr("href")!==o&&(d&&(a=o,window.history.replaceState&&a!==window.location.hash&&window.history.replaceState(void 0,void 0,a)),r.removeClass("active"),(t=r.filter('[href="'+o+'"]')).addClass("active"),i=e,s=(n=t).offset().top,n=(a=c).scrollTop(),s>i+$(window).height()-100&&a.scrollTop(n+100),s<i+100&&a.scrollTop(n-100),(t=(n=0<(n=t.parents(".toc-child")).length?n.last():t).closest(".toc-item").find(".toc-child")).is(":visible")||t.fadeIn(400),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(g=GLOBAL_CONFIG.noticeOutdate,(m=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=g.limitDay&&(m='<div class="post-outdate-notice">'.concat(g.messagePrev+" "+m+" "+g.messageNext,"</div>"),"top"===g.position?$("#article-container").prepend(m):$("#article-container").append(m))),GLOBAL_CONFIG.relativeDate.post&&S($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&S($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(y=$("#runtimeshow")).length&&(b=y.attr("data-publishDate"),y.text(btf.diffDate(b)+" "+GLOBAL_CONFIG.runtime)),(y=$("#last-push-date")).length&&(b=y.attr("data-lastPushDate"),b=btf.diffDate(b,!0),y.text(b)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault(),$(this).toggleClass("expand").parents(".parent").next().slideToggle(300)})),v=$("#toggle-menu"),C=$("#sidebar-menus"),L=$("#menu-mask"),G=$("body"),v.on("click",function(){btf.sidebarPaddingR(),G.css("overflow","hidden"),L.fadeIn(),v.removeClass("close").addClass("open"),C.addClass("open")}),L.on("click touchstart",function(t){v.hasClass("open")&&_()}),$(window).on("resize",function(t){v.is(":visible")||v.hasClass("open")&&_()}),GLOBAL_CONFIG_SITE.isHome&&$("#scroll-down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&(p=GLOBAL_CONFIG.highlight.highlightCopy,g=GLOBAL_CONFIG.highlight.highlightLang,m=GLOBAL_CONFIG_SITE.isHighlightShrink,y=p||g||void 0!==m,b="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]'),y&&b.length&&(d="prismjs"===GLOBAL_CONFIG.highlight.plugin,u=!(h=f="")===m?"closed":"",void 0!==m&&(f='<i class="fas fa-angle-down expand '.concat(u,'"></i>')),p&&(h='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),g?d?b.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(u,'">').concat(f+e+h,"</div>"))}):b.each(function(t,e){var o=$(this),i=o.attr("class").split(" ")[1];"plain"!==i&&void 0!==i||(i="Code"),i='<div class="code-lang">'.concat(i,"</div>"),o.prepend('<div class="highlight-tools '.concat(u,'">').concat(f+i+h,"</div>"))}):(g='<div class="highlight-tools '.concat(u,'">').concat(f+h,"</div>"),d?b.wrap('<figure class="highlight"></figure>').before(g):b.prepend(g)),void 0!==m&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),p&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e,o=window.getSelection(),i=document.createRange();d?i.selectNodeContents(t.find("> pre code")[0]):i.selectNodeContents(t.find("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),e=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),o.removeAllRanges(),t.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var o=$(e);o.attr("alt")&&(e=$('<div class="img-alt is-center">'+o.attr("alt")+"</div>"),o.after(e))}),(t=$(".justified-gallery")).length&&((e=t.find("img")).unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),w?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),w=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var o=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),i=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(i,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(o=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";o.update({background:e})})),a=!(n=0),s=$("#rightside"),c=$("#nav"),l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop(),o=n<e;56<(n=e)?(o?(c.hasClass("visible")&&c.removeClass("visible"),r&&!0===a&&(chatBtnHide(),a=!1)):(c.hasClass("visible")||c.addClass("visible"),l&&!1===a&&(window.chatBtnShow(),a=!0)),c.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===e&&c.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(e=$(".hide-button")).length&&e.on("click",function(t){var e=$(this),o=$(this).next(".hide-content");e.toggleClass("open"),o.toggle(),e.hasClass("open")&&0<o.find(".justified-gallery").length&&btf.initJustifiedGallery(o.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,o=$(this),i=o.parent();i.hasClass("active")||(e=o.parents(".nav-tabs").next(),i.siblings(".active").removeClass("active"),i.addClass("active"),o=o.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(o)).addClass("active"),0<(o=e.find(o).find(".justified-gallery")).length&&btf.initJustifiedGallery(o))}),$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))}),i=!1,$("#comment-switch > .switch-btn").on("click",function(){var t=$(this);t.hasClass("move")?t.removeClass("move"):t.addClass("move"),$("#post-comment > .comment-wrap > div").each(function(t,e){(e=$(e)).is(":visible")?e.hide():e.css({display:"block",animation:"tabshow .5s"})}),i||"function"!=typeof loadOtherComment||(i=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){O()}),$("#sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(o=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>o.limitCount?e+"\n\n\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});
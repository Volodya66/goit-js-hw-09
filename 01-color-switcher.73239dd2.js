!function(){var t,e=document.querySelector("body"),o=e.querySelector("button[data-start]"),n=e.querySelector("button[data-stop]"),r=(n.hasAttribute("disabled"),!1);function c(){return new Promise((function(o,n){r?n("error, the color changes"):(console.log("статус при натисканні кнопки СТАРТ",r),t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),o()}),1e3))}))}o.addEventListener("click",(function(){r=!1,c().then((function(){o.setAttribute("disabled",!0)})).catch((function(t){console.error(t)}))})),n.addEventListener("click",(function(){r=!0,clearInterval(t),o.removeAttribute("disabled"),e.style.backgroundColor="",console.log("статус при натисканні кнопки СТОП",r)}))}();
//# sourceMappingURL=01-color-switcher.73239dd2.js.map

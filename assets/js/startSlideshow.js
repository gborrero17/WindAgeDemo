startSlideShow = document.getElementsByClassName("slideshow");

for (let slideButton of startSlideShow) {
    slideButton.addEventListener("long-press", function (e) {
        if (slideButton.id === "slide1") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vQNs6N2VArlKjYAJhK-_731JC_Gp8NZKKKUmwEsIIBwrDs-ReUxf-nIP-A82fzCqqwFGGpsUGHwO3fo/pub?start=true&loop=true&delayms=3000", "_blank")        
        }
        if (slideButton.id === "slide2") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vStoUoAwXp00blBEySHGY19sMU_Lqu0m37GER4fo-8aa2njsyotbJ1h-a5-EvRq9oMKJg13_uQ1J2YW/pub?start=true&loop=true&delayms=3000", "_blank")
        }
        if (slideButton.id === "slide3") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vT-I3v254E1YwmdD4LCy5Lsa4l59NQphQa1Q_MsCMRd2TP84mT2c0s8SujwRRP7TLM2g7OAct1Vy_-h/pub?start=true&loop=true&delayms=3000", "_blank")
        }
        if (slideButton.id === "slide4") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vSqX_mxmzU6rawnAKOSDF2DHEU8p1wFVtArSYxwKQakJwTtBAj8bx1kK9WoBt0GzC7Kh_-byYXbAjx3/pub?start=true&loop=true&delayms=3000", "_blank")
        }
    });
}


/*!
 * long-press.js
 * Pure JavaScript long-press event
 * https://github.com/john-doherty/long-press
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function (t, e) { "use strict"; function n() { this.dispatchEvent(new CustomEvent("long-press", { bubbles: !0, cancelable: !0 })), clearTimeout(o), console && console.log && console.log("long-press fired on " + this.outerHTML) } var o = null, u = "ontouchstart" in t || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, s = u ? "touchstart" : "mousedown", i = u ? "touchcancel" : "mouseout", a = u ? "touchend" : "mouseup", c = u ? "touchmove" : "mousemove"; "initCustomEvent" in e.createEvent("CustomEvent") && (t.CustomEvent = function (t, n) { n = n || { bubbles: !1, cancelable: !1, detail: void 0 }; var o = e.createEvent("CustomEvent"); return o.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), o }, t.CustomEvent.prototype = t.Event.prototype), e.addEventListener(s, function (t) { var e = t.target, u = parseInt(e.getAttribute("data-long-press-delay") || "1500", 10); o = setTimeout(n.bind(e), u) }), e.addEventListener(a, function (t) { clearTimeout(o) }), e.addEventListener(i, function (t) { clearTimeout(o) }), e.addEventListener(c, function (t) { clearTimeout(o) }) }(this, document);
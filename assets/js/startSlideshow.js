startSlideShow = document.getElementsByClassName("slideshow");

for (let slideButton of startSlideShow) {
    slideButton.addEventListener("long-press", function (e) {
        if (slideButton.id === "slide1") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vRA6Pokxp18NY5R74Ip-D6k3j6JnR_K-JcRpDAw9IpLFCiTX8SxLipGkqV7Y1lrNVIfLi5c-KP1MXBZ/pub?start=true&loop=true&delayms=3000", "_blank")        
        }
        if (slideButton.id === "slide2") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vQ0bZeNuuSzxSbxCJ1Cdi9mS9fpC4v5XlJUZZfGF7-RorSQXeCt0PJijEuLA2kBXBMBeLcMW__Mho3Y/pub?start=true&loop=true&delayms=3000", "_blank")
        }
        if (slideButton.id === "slide3") {
            window.open("https://docs.google.com/presentation/d/e/2PACX-1vS8TJ3Be7RE0OixVrD4h3bg0hJhlP-_4M370lCNOOgYFEomOty8CE17xJ0RhVDEMuw-5I2nMRqjiJxR/pub?start=true&loop=true&delayms=3000", "_blank")
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
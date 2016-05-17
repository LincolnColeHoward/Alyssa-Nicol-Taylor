/*reset.js*/
function DOM(e){for(var n=e.split("."),t=document.createElement(n[0]),r=1;r<n.length;r++)t.classList.add(n[r])
return t}function MOVE(e,n){e.parentNode.removeChild(e),n.appendChild(e)}function GET(e,n,t){var r=new XMLHttpRequest
r.open("GET",e),r.onload=function(){200===r.status?n&&n(JSON.parse(this.response)):t&&t(r.status)},r.send()}function tabConfig(){function e(){var e=1.25*document.querySelector("#nav").clientHeight,n=DOM("style")
n.innerHTML="div.tab {margin-top:"+e+"px}",document.querySelectorAll("head")[0].replaceChild(n,r),r=n}function n(e){o[i].btn.className="",o[i].tab.className="hidden",o[e].btn.className="active",o[e].tab.className="container-fluid tab",i=e}var t=1.25*document.querySelector("#nav").clientHeight,r=document.querySelectorAll("head")[0].DOM("style")
r.innerHTML="div.tab {margin-top:"+t+"px}",e(),window.addEventListener("resize",e,!1)
var o={gallery:{btn:document.querySelector("#galleryBtn"),tab:document.querySelector("#galleryTab")},bio:{btn:document.querySelector("#bioBtn"),tab:document.querySelector("#bioTab")},cv:{btn:document.querySelector("#cvBtn"),tab:document.querySelector("#cvTab")}},i="bio"
n(i),o.gallery.btn.onclick=function(){n("gallery"),galleryEmpty&&galleryEmpty()},o.bio.btn.onclick=function(){n("bio")},o.cv.btn.onclick=function(){n("cv"),cvConfig()}}function galleryConfig(){function e(){GET("/galleries/length",function(e){for(var r=0;e>r;r++)GET("/galleries/"+r,function(e){n(e),t(e)})})}function n(e){if(!d[e.year]){d[e.year]=[],m[e.year]=[]
var n=l.DOM("tr").DOM("td")
n.innerHTML=e.year,n.onclick=i(e.year)}d[e.year].push(e)}function t(e){var n=u.DOM("div.hidden"),t=n.IMG(e.src)
n.onclick=a(t,e),m[e.year].push(n)}function r(){for(var e=document.querySelectorAll("div.thumbnail-item"),n=0;n<e.length;n++)e[n].className="hidden"}function o(e){var n=m[e],t=Math.floor(Math.random()*n.length)
c(n[t].children[0],d[e][t])
for(var r=0;r<n.length;r++)n[r].className="thumbnail-item"}function i(e){return function(){r(),o(e)}}function c(e,n){s.innerHTML=n.title||"",f.innerHTML=n.copyright||"",g.innerHTML=n.dimensions||"",h.innerHTML=n.media||""
var t=e.cloneNode()
y.innerHTML="",y.appendChild(t),galleryEmpty=!1,t.onclick=function(){var e=t.cloneNode()
v.className="modal show",e.style.height=window.innerHeight+"px",p.appendChild(e)}}function a(e,n){return function(){c(e,n)}}var l=document.querySelector("#galleryList"),u=document.querySelector("#thumbnail"),d={},m={}
galleryEmpty=function(){var e=Object.keys(d),n=Math.floor(Math.random()*e.length)
n=e[n],o(n)}
var y=document.querySelector("#galleryMain"),s=document.querySelector("#image_title"),f=document.querySelector("#image_copyright"),g=document.querySelector("#image_dimensions"),h=document.querySelector("#image_media"),v=document.querySelector("#modal"),p=document.querySelector("#modal-content")
v.onclick=function(){v.className="modal",p.innerHTML=null},e()}function runCvConfig(){var e=document.querySelector("#cvContainer"),n="CV.pdf"
PDFJS.workerSrc="pdf.worker.js",PDFJS.getDocument(n).then(function(n){n.getPage(1).then(function(n){cvConfig=function(){var t=n.getViewport(1),r=e.clientWidth/t.width,t=n.getViewport(r),o=document.querySelector("#CV"),i=o.getContext("2d")
o.height=t.height,o.width=t.width
var c={canvasContext:i,viewport:t}
n.render(c)}})})}Element.prototype.DOM=function(e){var n=DOM(e)
return this.appendChild(n),n},Element.prototype.IMG=function(e){var n=new Image
return e&&(n.src=e),this.appendChild(n),n},Element.prototype.MOVE=function(e){MOVE(this,e)},tabConfig()
var galleryEmpty
galleryConfig()
var cvConfig=null
runCvConfig()

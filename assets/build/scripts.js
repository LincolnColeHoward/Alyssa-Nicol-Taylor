/*reset.js*/
function DOM(e){for(var n=e.split("."),t=document.createElement(n[0]),o=1;o<n.length;o++)t.classList.add(n[o])
return t}function MOVE(e,n){e.parentNode.removeChild(e),n.appendChild(e)}function GET(e,n,t){var o=new XMLHttpRequest
o.open("GET",e),o.onload=function(){200===o.status?n&&n(JSON.parse(this.response)):t&&t(o.status)},o.send()}function tabConfig(){function e(){var e=1.25*document.querySelector("#nav").clientHeight,n=DOM("style")
n.innerHTML="div.tab {margin-top:"+e+"px}",document.querySelectorAll("head")[0].replaceChild(n,o),o=n}function n(e){ga("send","pageview","#"+e+"-tab"),r[i].btn.className="text-muted",r[i].tab.className="hidden",r[e].btn.className="text-primary",r[e].tab.className="container-fluid tab",i=e}var t=1.25*document.querySelector("#nav").clientHeight,o=document.querySelectorAll("head")[0].DOM("style")
o.innerHTML="div.tab {margin-top:"+t+"px}",e(),window.addEventListener("resize",e,!1)
var r={gallery:{btn:document.querySelector("#galleryBtn"),tab:document.querySelector("#galleryTab")},bio:{btn:document.querySelector("#bioBtn"),tab:document.querySelector("#bioTab")},cv:{btn:document.querySelector("#cvBtn"),tab:document.querySelector("#cvTab")}},i="bio"
n(i),r.gallery.btn.onclick=function(){n("gallery"),galleryEmpty&&galleryEmpty()},r.bio.btn.onclick=function(){n("bio")},r.cv.btn.onclick=function(){n("cv"),cvConfig()}}function galleryConfig(){function e(){GET("/galleries/length",function(e){for(var o=0;e>o;o++)GET("/galleries/"+o,function(e){n(e),t(e)})})}function n(e){if(!d[e.year]){d[e.year]=[],m[e.year]=[]
var n=l.DOM("tr").DOM("td")
n.innerHTML=e.year,n.onclick=i(e.year)}d[e.year].push(e)}function t(e){var n=u.DOM("div.hidden"),t=n.IMG(e.src)
n.onclick=c(t,e),m[e.year].push(n)}function o(){for(var e=document.querySelectorAll("div.thumbnail-item"),n=0;n<e.length;n++)e[n].className="hidden"}function r(e){ga("send","event","GalleryYear","open",e)
var n=m[e],t=Math.floor(Math.random()*n.length)
a(n[t].children[0],d[e][t])
for(var o=0;o<n.length;o++)n[o].className="thumbnail-item"}function i(e){return function(){o(),r(e)}}function a(e,n){ga("send","event","Gallery","show",n.title),s.innerHTML=n.title||"",g.innerHTML=n.copyright||"",f.innerHTML=n.dimensions||"",h.innerHTML=n.media||""
var t=e.cloneNode()
y.innerHTML="",y.appendChild(t),galleryEmpty=!1,t.onclick=function(){function e(){0===window.orientation?o.style.width=window.innerWidth+"px":o.style.height=window.innerHeight+"px"}ga("send","event","Photo","enlarge",n.title)
var o=t.cloneNode()
v.className="modal show",e(),window.addEventListener("orientationChange",e,!1),p.appendChild(o)}}function c(e,n){return function(){a(e,n)}}var l=document.querySelector("#galleryList"),u=document.querySelector("#thumbnail"),d={},m={}
galleryEmpty=function(){var e=Object.keys(d),n=Math.floor(Math.random()*e.length)
n=e[n],r(n)}
var y=document.querySelector("#galleryMain"),s=document.querySelector("#image_title"),g=document.querySelector("#image_copyright"),f=document.querySelector("#image_dimensions"),h=document.querySelector("#image_media"),v=document.querySelector("#modal"),p=document.querySelector("#modal-content")
v.onclick=function(){v.className="modal",p.innerHTML=null},e()}function runCvConfig(){document.querySelector("#cvDownload").onclick=function(){ga("send","event","CV","download","CV.pdf")}
var e=document.querySelector("#cvContainer"),n="CV.pdf"
PDFJS.workerSrc="pdf.worker.js",PDFJS.getDocument(n).then(function(n){n.getPage(1).then(function(n){cvConfig=function(){var t=n.getViewport(1),o=e.clientWidth/t.width,t=n.getViewport(o),r=document.querySelector("#CV"),i=r.getContext("2d")
r.height=t.height,r.width=t.width
var a={canvasContext:i,viewport:t}
n.render(a)}})})}Element.prototype.DOM=function(e){var n=DOM(e)
return this.appendChild(n),n},Element.prototype.IMG=function(e){var n=new Image
return e&&(n.src=e),this.appendChild(n),n},Element.prototype.MOVE=function(e){MOVE(this,e)},tabConfig()
var galleryEmpty
galleryConfig()
var cvConfig=null
runCvConfig()

/*reset.js*/
function DOM(e){for(var n=e.split("."),t=document.createElement(n[0]),r=1;r<n.length;r++)t.classList.add(n[r])
return t}function loadcss(e){var n=document.querySelectorAll("head")[0],t=DOM("link")
t.href=e,t.rel="stylesheet",t.media="only x",n.appendChild(t),setTimeout(function(){t.media="all"},0)}function loadjs(e){document.body.DOM("script").src=e}function MOVE(e,n){e.parentNode.removeChild(e),n.appendChild(e)}function GET(e,n,t){var r=new XMLHttpRequest
r.open("GET",e),r.onload=function(){200===r.status?n&&n(JSON.parse(this.response)):t&&t(r.status)},r.send()}function tabConfig(){function e(e){n[t].btn.className="",n[t].tab.className="hidden",n[e].btn.className="active",n[e].tab.className="container-fluid tab",t=e}var n={gallery:{btn:document.querySelector("#galleryBtn"),tab:document.querySelector("#galleryTab")},bio:{btn:document.querySelector("#bioBtn"),tab:document.querySelector("#bioTab")},cv:{btn:document.querySelector("#cvBtn"),tab:document.querySelector("#cvTab")}},t="bio"
e(t),n.gallery.btn.onclick=function(){e("gallery"),galleryEmpty&&galleryEmpty()},n.bio.btn.onclick=function(){e("bio")},n.cv.btn.onclick=function(){e("cv"),cvConfig()}}function galleryConfig(){function e(){GET("/galleries/length",function(e){for(var r=0;e>r;r++)GET("/galleries/"+r,function(e){n(e),t(e)})})}function n(e){if(!d[e.year]){d[e.year]=[],m[e.year]=[]
var n=l.DOM("tr").DOM("td")
n.innerHTML=e.year,n.onclick=i(e.year)}d[e.year].push(e)}function t(e){var n=u.DOM("div.hidden"),t=n.IMG(e.src)
n.onclick=a(t,e),m[e.year].push(n)}function r(){for(var e=document.querySelectorAll("div.thumbnail-item"),n=0;n<e.length;n++)e[n].className="hidden"}function o(e){var n=m[e],t=Math.floor(Math.random()*n.length)
c(n[t].children[0],d[e][t])
for(var r=0;r<n.length;r++)n[r].className="thumbnail-item"}function i(e){return function(){r(),o(e)}}function c(e,n){y.innerHTML=n.title||"",s.innerHTML=n.copyright||"",g.innerHTML=n.dimensions||"",h.innerHTML=n.media||""
var t=e.cloneNode()
f.innerHTML="",f.appendChild(t),galleryEmpty=!1}function a(e,n){return function(){c(e,n)}}var l=document.querySelector("#galleryList"),u=document.querySelector("#thumbnail"),d={},m={}
galleryEmpty=function(){var e=Object.keys(d),n=Math.floor(Math.random()*e.length)
n=e[n],o(n)}
var f=document.querySelector("#galleryMain"),y=document.querySelector("#image_title"),s=document.querySelector("#image_copyright"),g=document.querySelector("#image_dimensions"),h=document.querySelector("#image_media")
e()}function runCvConfig(){var e=document.querySelector("#cvContainer"),n="CV.pdf"
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

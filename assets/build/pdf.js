/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"undefined"==typeof PDFJS&&(("undefined"!=typeof window?window:this).PDFJS={}),PDFJS.version="1.3.91",PDFJS.build="d1e83b5",function(){"use strict"
function t(t){PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.infos&&console.log("Info: "+t)}function e(t){PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.warnings&&console.log("Warning: "+t)}function n(t){e("Deprecated API usage: "+t)}function i(t){throw PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.errors&&(console.log("Error: "+t),console.log(r())),new Error(t)}function r(){try{throw new Error}catch(t){return t.stack?t.stack.split("\n").slice(2).join("\n"):""}}function a(t,e){t||i(e)}function s(t,e){return e?new URL(e,t).href:t}function o(t,e){if(!t)return!1
var n=/^[a-z][a-z0-9+\-.]*(?=:)/i.exec(t)
if(!n)return e
switch(n=n[0].toLowerCase()){case"http":case"https":case"ftp":case"mailto":case"tel":return!0
default:return!1}}function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!1}),n}function l(){switch(PDFJS.openExternalLinksInNewWindow&&(n('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),PDFJS.externalLinkTarget===M.NONE&&(PDFJS.externalLinkTarget=M.BLANK),PDFJS.openExternalLinksInNewWindow=!1),PDFJS.externalLinkTarget){case M.NONE:return!1
case M.SELF:case M.BLANK:case M.PARENT:case M.TOP:return!0}return e("PDFJS.externalLinkTarget is invalid: "+PDFJS.externalLinkTarget),PDFJS.externalLinkTarget=M.NONE,!1}function h(t){a(null!==t&&"object"==typeof t&&void 0!==t.length,"Invalid argument for bytesToString")
var e=t.length,n=8192
if(n>e)return String.fromCharCode.apply(null,t)
for(var i=[],r=0;e>r;r+=n){var s=Math.min(r+n,e),o=t.subarray(r,s)
i.push(String.fromCharCode.apply(null,o))}return i.join("")}function u(t){a("string"==typeof t,"Invalid argument for stringToBytes")
for(var e=t.length,n=new Uint8Array(e),i=0;e>i;++i)n[i]=255&t.charCodeAt(i)
return n}function d(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function f(){var t=new Uint8Array(2)
t[0]=1
var e=new Uint16Array(t.buffer)
return 1===e[0]}function p(){var t=document.createElement("canvas")
t.width=t.height=1
var e=t.getContext("2d"),n=e.createImageData(1,1)
return"undefined"!=typeof n.data.buffer}function g(t){return"number"==typeof t}function A(t){return t instanceof Array}function m(t){return"object"==typeof t&&null!==t&&void 0!==t.byteLength}function v(){var t={}
return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}function b(t,e,n){this.sourceName=t,this.targetName=e,this.comObj=n,this.callbackIndex=1,this.postMessageTransfers=!0
var r=this.callbacksCapabilities={},a=this.actionHandler={}
this._onComObjOnMessage=function(t){var e=t.data
if(e.targetName===this.sourceName)if(e.isReply){var s=e.callbackId
if(e.callbackId in r){var o=r[s]
delete r[s],"error"in e?o.reject(e.error):o.resolve(e.data)}else i("Cannot resolve callback "+s)}else if(e.action in a){var c=a[e.action]
if(e.callbackId){var l=this.sourceName,h=e.sourceName
Promise.resolve().then(function(){return c[0].call(c[1],e.data)}).then(function(t){n.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:e.callbackId,data:t})},function(t){t instanceof Error&&(t+=""),n.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:e.callbackId,error:t})})}else c[0].call(c[1],e.data)}else i("Unknown action from worker: "+e.action)}.bind(this),n.addEventListener("message",this._onComObjOnMessage)}function S(t,n,i){var r=new Image
r.onload=function(){i.resolve(t,r)},r.onerror=function(){i.resolve(t,null),e("Error during JPEG image loading")},r.src=n}function y(t,e,n,i){return t.destroyed?Promise.reject(new Error("Worker was destroyed")):(e.disableAutoFetch=PDFJS.disableAutoFetch,e.disableStream=PDFJS.disableStream,e.chunkedViewerLoading=!!n,n&&(e.length=n.length,e.initialData=n.initialData),t.messageHandler.sendWithPromise("GetDocRequest",{docId:i,source:e,disableRange:PDFJS.disableRange,maxImageSize:PDFJS.maxImageSize,cMapUrl:PDFJS.cMapUrl,cMapPacked:PDFJS.cMapPacked,disableFontFace:PDFJS.disableFontFace,disableCreateObjectURL:PDFJS.disableCreateObjectURL,verbosity:PDFJS.verbosity}).then(function(e){if(t.destroyed)throw new Error("Worker was destroyed")
return e}))}function x(t,e){var n=document.createElement("canvas")
return n.width=t,n.height=e,n}function k(t){t.mozCurrentTransform||(t._originalSave=t.save,t._originalRestore=t.restore,t._originalRotate=t.rotate,t._originalScale=t.scale,t._originalTranslate=t.translate,t._originalTransform=t.transform,t._originalSetTransform=t.setTransform,t._transformMatrix=t._transformMatrix||[1,0,0,1,0,0],t._transformStack=[],Object.defineProperty(t,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(t,"mozCurrentTransformInverse",{get:function(){var t=this._transformMatrix,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=e*r-n*i,c=n*i-e*r
return[r/o,n/c,i/c,e/o,(r*a-i*s)/c,(n*a-e*s)/o]}}),t.save=function(){var t=this._transformMatrix
this._transformStack.push(t),this._transformMatrix=t.slice(0,6),this._originalSave()},t.restore=function(){var t=this._transformStack.pop()
t&&(this._transformMatrix=t,this._originalRestore())},t.translate=function(t,e){var n=this._transformMatrix
n[4]=n[0]*t+n[2]*e+n[4],n[5]=n[1]*t+n[3]*e+n[5],this._originalTranslate(t,e)},t.scale=function(t,e){var n=this._transformMatrix
n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*e,n[3]=n[3]*e,this._originalScale(t,e)},t.transform=function(e,n,i,r,a,s){var o=this._transformMatrix
this._transformMatrix=[o[0]*e+o[2]*n,o[1]*e+o[3]*n,o[0]*i+o[2]*r,o[1]*i+o[3]*r,o[0]*a+o[2]*s+o[4],o[1]*a+o[3]*s+o[5]],t._originalTransform(e,n,i,r,a,s)},t.setTransform=function(e,n,i,r,a,s){this._transformMatrix=[e,n,i,r,a,s],t._originalSetTransform(e,n,i,r,a,s)},t.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),i=this._transformMatrix
this._transformMatrix=[i[0]*e+i[2]*n,i[1]*e+i[3]*n,i[0]*-n+i[2]*e,i[1]*-n+i[3]*e,i[4],i[5]],this._originalRotate(t)})}function C(t){var e,n,i,r,a=1e3,s=t.width,o=t.height,c=s+1,l=new Uint8Array(c*(o+1)),h=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),u=s+7&-8,d=t.data,f=new Uint8Array(u*o),p=0
for(e=0,r=d.length;r>e;e++)for(var g=128,A=d[e];g>0;)f[p++]=A&g?0:255,g>>=1
var m=0
for(p=0,0!==f[p]&&(l[0]=1,++m),n=1;s>n;n++)f[p]!==f[p+1]&&(l[n]=f[p]?2:1,++m),p++
for(0!==f[p]&&(l[n]=2,++m),e=1;o>e;e++){p=e*u,i=e*c,f[p-u]!==f[p]&&(l[i]=f[p]?1:8,++m)
var v=(f[p]?4:0)+(f[p-u]?8:0)
for(n=1;s>n;n++)v=(v>>2)+(f[p+1]?4:0)+(f[p-u+1]?8:0),h[v]&&(l[i+n]=h[v],++m),p++
if(f[p-u]!==f[p]&&(l[i+n]=f[p]?2:4,++m),m>a)return null}for(p=u*(o-1),i=e*c,0!==f[p]&&(l[i]=8,++m),n=1;s>n;n++)f[p]!==f[p+1]&&(l[i+n]=f[p]?4:8,++m),p++
if(0!==f[p]&&(l[i+n]=4,++m),m>a)return null
var b=new Int32Array([0,c,-1,0,-c,0,0,0,1]),S=[]
for(e=0;m&&o>=e;e++){for(var y=e*c,x=y+s;x>y&&!l[y];)y++
if(y!==x){var k,C=[y%c,e],P=l[y],_=y
do{var w=b[P]
do y+=w
while(!l[y])
k=l[y],5!==k&&10!==k?(P=k,l[y]=0):(P=k&51*P>>4,l[y]&=P>>2|P<<2),C.push(y%c),C.push(y/c|0),--m}while(_!==y)
S.push(C),--e}}var F=function(t){t.save(),t.scale(1/s,-1/o),t.translate(0,-o),t.beginPath()
for(var e=0,n=S.length;n>e;e++){var i=S[e]
t.moveTo(i[0],i[1])
for(var r=2,a=i.length;a>r;r+=2)t.lineTo(i[r],i[r+1])}t.fill(),t.beginPath(),t.restore()}
return F}function P(t){var e=pt[t[0]]
return e||i("Unknown IR type: "+t[0]),e.fromIR(t)}function _(t){this.docId=t,this.styleElement=null,this.nativeFontFaces=[],this.loadTestFontId=0,this.loadingContext={requests:[],nextRequestId:0}}var w="undefined"==typeof window?this:window,F="undefined"==typeof window,D=[.001,0,0,.001,0,0],T={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},L={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},R={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},E={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
w.PDFJS||(w.PDFJS={}),w.PDFJS.pdfBug=!1,PDFJS.VERBOSITY_LEVELS={errors:0,warnings:1,infos:5}
var I=PDFJS.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
PDFJS.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"}
PDFJS.isValidUrl=o,PDFJS.shadow=c
var M=PDFJS.LinkTarget={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4},j=["","_self","_blank","_parent","_top"]
PDFJS.isExternalLinkTargetSet=l
var O=PDFJS.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},N=function(){function t(t,e){this.name="PasswordException",this.message=t,this.code=e}return t.prototype=new Error,t.constructor=t,t}()
PDFJS.PasswordException=N
var J=function(){function t(t,e){this.name="UnknownErrorException",this.message=t,this.details=e}return t.prototype=new Error,t.constructor=t,t}()
PDFJS.UnknownErrorException=J
var B=function(){function t(t){this.name="InvalidPDFException",this.message=t}return t.prototype=new Error,t.constructor=t,t}()
PDFJS.InvalidPDFException=B
var U=function(){function t(t){this.name="MissingPDFException",this.message=t}return t.prototype=new Error,t.constructor=t,t}()
PDFJS.MissingPDFException=U
var W=function(){function t(t,e){this.name="UnexpectedResponseException",this.message=t,this.status=e}return t.prototype=new Error,t.constructor=t,t}()
PDFJS.UnexpectedResponseException=W;(function(){function t(t){this.message=t}return t.prototype=new Error,t.prototype.name="NotImplementedException",t.constructor=t,t})(),function(){function t(t,e){this.begin=t,this.end=e,this.message="Missing data ["+t+", "+e+")"}return t.prototype=new Error,t.prototype.name="MissingDataException",t.constructor=t,t}(),function(){function t(t){this.message=t}return t.prototype=new Error,t.prototype.name="XRefParseException",t.constructor=t,t}()
Object.defineProperty(PDFJS,"isLittleEndian",{configurable:!0,get:function(){return c(PDFJS,"isLittleEndian",f())}}),Object.defineProperty(PDFJS,"hasCanvasTypedArrays",{configurable:!0,get:function(){return c(PDFJS,"hasCanvasTypedArrays",p())}})
var G=function(){function t(t,e){this.buffer=t,this.byteLength=t.length,this.length=void 0===e?this.byteLength>>2:e,n(this.length)}function e(t){return{get:function(){var e=this.buffer,n=t<<2
return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},set:function(e){var n=this.buffer,i=t<<2
n[i]=255&e,n[i+1]=e>>8&255,n[i+2]=e>>16&255,n[i+3]=e>>>24&255}}}function n(n){for(;n>i;)Object.defineProperty(t.prototype,i,e(i)),i++}t.prototype=Object.create(null)
var i=0
return t}(),X=[1,0,0,1,0,0],z=PDFJS.Util=function(){function t(){}var e=["rgb(",0,",",0,",",0,")"]
return t.makeCssRgb=function(t,n,i){return e[1]=t,e[3]=n,e[5]=i,e.join("")},t.transform=function(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]},t.applyTransform=function(t,e){var n=t[0]*e[0]+t[1]*e[2]+e[4],i=t[0]*e[1]+t[1]*e[3]+e[5]
return[n,i]},t.applyInverseTransform=function(t,e){var n=e[0]*e[3]-e[1]*e[2],i=(t[0]*e[3]-t[1]*e[2]+e[2]*e[5]-e[4]*e[3])/n,r=(-t[0]*e[1]+t[1]*e[0]+e[4]*e[1]-e[5]*e[0])/n
return[i,r]},t.getAxialAlignedBoundingBox=function(e,n){var i=t.applyTransform(e,n),r=t.applyTransform(e.slice(2,4),n),a=t.applyTransform([e[0],e[3]],n),s=t.applyTransform([e[2],e[1]],n)
return[Math.min(i[0],r[0],a[0],s[0]),Math.min(i[1],r[1],a[1],s[1]),Math.max(i[0],r[0],a[0],s[0]),Math.max(i[1],r[1],a[1],s[1])]},t.inverseTransform=function(t){var e=t[0]*t[3]-t[1]*t[2]
return[t[3]/e,-t[1]/e,-t[2]/e,t[0]/e,(t[2]*t[5]-t[4]*t[3])/e,(t[4]*t[1]-t[5]*t[0])/e]},t.apply3dTransform=function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]},t.singularValueDecompose2dScale=function(t){var e=[t[0],t[2],t[1],t[3]],n=t[0]*e[0]+t[1]*e[2],i=t[0]*e[1]+t[1]*e[3],r=t[2]*e[0]+t[3]*e[2],a=t[2]*e[1]+t[3]*e[3],s=(n+a)/2,o=Math.sqrt((n+a)*(n+a)-4*(n*a-r*i))/2,c=s+o||1,l=s-o||1
return[Math.sqrt(c),Math.sqrt(l)]},t.normalizeRect=function(t){var e=t.slice(0)
return t[0]>t[2]&&(e[0]=t[2],e[2]=t[0]),t[1]>t[3]&&(e[1]=t[3],e[3]=t[1]),e},t.intersect=function(e,n){function i(t,e){return t-e}var r=[e[0],e[2],n[0],n[2]].sort(i),a=[e[1],e[3],n[1],n[3]].sort(i),s=[]
return e=t.normalizeRect(e),n=t.normalizeRect(n),r[0]===e[0]&&r[1]===n[0]||r[0]===n[0]&&r[1]===e[0]?(s[0]=r[1],s[2]=r[2],a[0]===e[1]&&a[1]===n[1]||a[0]===n[1]&&a[1]===e[1]?(s[1]=a[1],s[3]=a[2],s):!1):!1},t.sign=function(t){return 0>t?-1:1},t.appendToArray=function(t,e){Array.prototype.push.apply(t,e)},t.prependToArray=function(t,e){Array.prototype.unshift.apply(t,e)},t.extendObj=function(t,e){for(var n in e)t[n]=e[n]},t.getInheritableProperty=function(t,e){for(;t&&!t.has(e);)t=t.get("Parent")
return t?t.get(e):null},t.inherit=function(t,e,n){t.prototype=Object.create(e.prototype),t.prototype.constructor=t
for(var i in n)t.prototype[i]=n[i]},t.loadScript=function(t,e){var n=document.createElement("script"),i=!1
n.setAttribute("src",t),e&&(n.onload=function(){i||e(),i=!0}),document.getElementsByTagName("head")[0].appendChild(n)},t}()
PDFJS.PageViewport=function(){function t(t,e,n,i,r,a){this.viewBox=t,this.scale=e,this.rotation=n,this.offsetX=i,this.offsetY=r
var s,o,c,l,h=(t[2]+t[0])/2,u=(t[3]+t[1])/2
switch(n%=360,n=0>n?n+360:n){case 180:s=-1,o=0,c=0,l=1
break
case 90:s=0,o=1,c=1,l=0
break
case 270:s=0,o=-1,c=-1,l=0
break
default:s=1,o=0,c=0,l=-1}a&&(c=-c,l=-l)
var d,f,p,g
0===s?(d=Math.abs(u-t[1])*e+i,f=Math.abs(h-t[0])*e+r,p=Math.abs(t[3]-t[1])*e,g=Math.abs(t[2]-t[0])*e):(d=Math.abs(h-t[0])*e+i,f=Math.abs(u-t[1])*e+r,p=Math.abs(t[2]-t[0])*e,g=Math.abs(t[3]-t[1])*e),this.transform=[s*e,o*e,c*e,l*e,d-s*e*h-c*e*u,f-o*e*h-l*e*u],this.width=p,this.height=g,this.fontScale=e}return t.prototype={clone:function(e){e=e||{}
var n="scale"in e?e.scale:this.scale,i="rotation"in e?e.rotation:this.rotation
return new t(this.viewBox.slice(),n,i,this.offsetX,this.offsetY,e.dontFlip)},convertToViewportPoint:function(t,e){return z.applyTransform([t,e],this.transform)},convertToViewportRectangle:function(t){var e=z.applyTransform([t[0],t[1]],this.transform),n=z.applyTransform([t[2],t[3]],this.transform)
return[e[0],e[1],n[0],n[1]]},convertToPdfPoint:function(t,e){return z.applyInverseTransform([t,e],this.transform)}},t}()
PDFJS.createPromiseCapability=v,function(){function t(t){this._status=n,this._handlers=[]
try{t.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(e){this._reject(e)}}if(w.Promise)return"function"!=typeof w.Promise.all&&(w.Promise.all=function(t){var e,n,i=0,r=[],a=new w.Promise(function(t,i){e=t,n=i})
return t.forEach(function(t,a){i++,t.then(function(t){r[a]=t,i--,0===i&&e(r)},n)}),0===i&&e(r),a}),"function"!=typeof w.Promise.resolve&&(w.Promise.resolve=function(t){return new w.Promise(function(e){e(t)})}),"function"!=typeof w.Promise.reject&&(w.Promise.reject=function(t){return new w.Promise(function(e,n){n(t)})}),void("function"!=typeof w.Promise.prototype["catch"]&&(w.Promise.prototype["catch"]=function(t){return w.Promise.prototype.then(void 0,t)}))
var n=0,i=1,r=2,a=500,s={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(t){t._status!==n&&(this.handlers=this.handlers.concat(t._handlers),t._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var t=1,e=Date.now()+t;this.handlers.length>0;){var n=this.handlers.shift(),a=n.thisPromise._status,s=n.thisPromise._value
try{a===i?"function"==typeof n.onResolve&&(s=n.onResolve(s)):"function"==typeof n.onReject&&(s=n.onReject(s),a=i,n.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(n.thisPromise))}catch(o){a=r,s=o}if(n.nextPromise._updateStatus(a,s),Date.now()>=e)break}return this.handlers.length>0?void setTimeout(this.runHandlers.bind(this),0):void(this.running=!1)},addUnhandledRejection:function(t){this.unhandledRejections.push({promise:t,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(t){t._unhandledRejection=!1
for(var e=0;e<this.unhandledRejections.length;e++)this.unhandledRejections[e].promise===t&&(this.unhandledRejections.splice(e),e--)},scheduleRejectionCheck:function(){this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){this.pendingRejectionCheck=!1
for(var t=Date.now(),n=0;n<this.unhandledRejections.length;n++)if(t-this.unhandledRejections[n].time>a){var i=this.unhandledRejections[n].promise._value,r="Unhandled rejection: "+i
i.stack&&(r+="\n"+i.stack),e(r),this.unhandledRejections.splice(n),n--}this.unhandledRejections.length&&this.scheduleRejectionCheck()}.bind(this),a))}}
t.all=function(e){function n(t){s._status!==r&&(c=[],a(t))}var i,a,s=new t(function(t,e){i=t,a=e}),o=e.length,c=[]
if(0===o)return i(c),s
for(var l=0,h=e.length;h>l;++l){var u=e[l],d=function(t){return function(e){s._status!==r&&(c[t]=e,o--,0===o&&i(c))}}(l)
t.isPromise(u)?u.then(d,n):d(u)}return s},t.isPromise=function(t){return t&&"function"==typeof t.then},t.resolve=function(e){return new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(e,n){if(this._status!==i&&this._status!==r){if(e===i&&t.isPromise(n))return void n.then(this._updateStatus.bind(this,i),this._updateStatus.bind(this,r))
this._status=e,this._value=n,e===r&&0===this._handlers.length&&(this._unhandledRejection=!0,s.addUnhandledRejection(this)),s.scheduleHandlers(this)}},_resolve:function(t){this._updateStatus(i,t)},_reject:function(t){this._updateStatus(r,t)},then:function(e,n){var i=new t(function(t,e){this.resolve=t,this.reject=e})
return this._handlers.push({thisPromise:this,onResolve:e,onReject:n,nextPromise:i}),s.scheduleHandlers(this),i},"catch":function(t){return this.then(void 0,t)}},w.Promise=t}()
var H=function(){function t(t,e,n){for(;t.length<n;)t+=e
return t}function n(){this.started={},this.times=[],this.enabled=!0}return n.prototype={time:function(t){this.enabled&&(t in this.started&&e("Timer is already running for "+t),this.started[t]=Date.now())},timeEnd:function(t){this.enabled&&(t in this.started||e("Timer has not been started for "+t),this.times.push({name:t,start:this.started[t],end:Date.now()}),delete this.started[t])},toString:function(){var e,n,i=this.times,r="",a=0
for(e=0,n=i.length;n>e;++e){var s=i[e].name
s.length>a&&(a=s.length)}for(e=0,n=i.length;n>e;++e){var o=i[e],c=o.end-o.start
r+=t(o.name," ",a)+" "+c+"ms\n"}return r}},n}()
PDFJS.createBlob=function(t,e){if("undefined"!=typeof Blob)return new Blob([t],{type:e})
var n=new MozBlobBuilder
return n.append(t),n.getBlob(e)},PDFJS.createObjectURL=function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(e,n){if(!PDFJS.disableCreateObjectURL&&"undefined"!=typeof URL&&URL.createObjectURL){var i=PDFJS.createBlob(e,n)
return URL.createObjectURL(i)}for(var r="data:"+n+";base64,",a=0,s=e.length;s>a;a+=3){var o=255&e[a],c=255&e[a+1],l=255&e[a+2],h=o>>2,u=(3&o)<<4|c>>4,d=s>a+1?(15&c)<<2|l>>6:64,f=s>a+2?63&l:64
r+=t[h]+t[u]+t[d]+t[f]}return r}}(),b.prototype={on:function(t,e,n){var r=this.actionHandler
r[t]&&i('There is already an actionName called "'+t+'"'),r[t]=[e,n]},send:function(t,e,n){var i={sourceName:this.sourceName,targetName:this.targetName,action:t,data:e}
this.postMessage(i,n)},sendWithPromise:function(t,e,n){var i=this.callbackIndex++,r={sourceName:this.sourceName,targetName:this.targetName,action:t,data:e,callbackId:i},a=v()
this.callbacksCapabilities[i]=a
try{this.postMessage(r,n)}catch(s){a.reject(s)}return a.promise},postMessage:function(t,e){e&&this.postMessageTransfers?this.comObj.postMessage(t,e):this.comObj.postMessage(t)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},function(t){function e(t){return void 0!==d[t]}function n(){o.call(this),this._isInvalid=!0}function i(t){return""==t&&n.call(this),t.toLowerCase()}function r(t){var e=t.charCodeAt(0)
return e>32&&127>e&&-1==[34,35,60,62,63,96].indexOf(e)?t:encodeURIComponent(t)}function a(t){var e=t.charCodeAt(0)
return e>32&&127>e&&-1==[34,35,60,62,96].indexOf(e)?t:encodeURIComponent(t)}function s(t,s,o){function c(t){b.push(t)}var l=s||"scheme start",h=0,u="",m=!1,v=!1,b=[]
t:for(;(t[h-1]!=p||0==h)&&!this._isInvalid;){var S=t[h]
switch(l){case"scheme start":if(!S||!g.test(S)){if(s){c("Invalid scheme.")
break t}u="",l="no scheme"
continue}u+=S.toLowerCase(),l="scheme"
break
case"scheme":if(S&&A.test(S))u+=S.toLowerCase()
else{if(":"!=S){if(s){if(p==S)break t
c("Code point not allowed in scheme: "+S)
break t}u="",h=0,l="no scheme"
continue}if(this._scheme=u,u="",s)break t
e(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&o&&o._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"==S?(this._query="?",l="query"):"#"==S?(this._fragment="#",l="fragment"):p!=S&&"	"!=S&&"\n"!=S&&"\r"!=S&&(this._schemeData+=r(S))
break
case"no scheme":if(o&&e(o._scheme)){l="relative"
continue}c("Missing scheme."),n.call(this)
break
case"relative or authority":if("/"!=S||"/"!=t[h+1]){c("Expected /, got: "+S),l="relative"
continue}l="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=o._scheme),p==S){this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._username=o._username,this._password=o._password
break t}if("/"==S||"\\"==S)"\\"==S&&c("\\ is an invalid code point."),l="relative slash"
else if("?"==S)this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query="?",this._username=o._username,this._password=o._password,l="query"
else{if("#"!=S){var y=t[h+1],x=t[h+2];("file"!=this._scheme||!g.test(S)||":"!=y&&"|"!=y||p!=x&&"/"!=x&&"\\"!=x&&"?"!=x&&"#"!=x)&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password,this._path=o._path.slice(),this._path.pop()),l="relative path"
continue}this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._fragment="#",this._username=o._username,this._password=o._password,l="fragment"}break
case"relative slash":if("/"!=S&&"\\"!=S){"file"!=this._scheme&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password),l="relative path"
continue}"\\"==S&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!=S){c("Expected '/', got: "+S),l="authority ignore slashes"
continue}l="authority second slash"
break
case"authority second slash":if(l="authority ignore slashes","/"!=S){c("Expected '/', got: "+S)
continue}break
case"authority ignore slashes":if("/"!=S&&"\\"!=S){l="authority"
continue}c("Expected authority, got: "+S)
break
case"authority":if("@"==S){m&&(c("@ already seen."),u+="%40"),m=!0
for(var k=0;k<u.length;k++){var C=u[k]
if("	"!=C&&"\n"!=C&&"\r"!=C)if(":"!=C||null!==this._password){var P=r(C)
null!==this._password?this._password+=P:this._username+=P}else this._password=""
else c("Invalid whitespace in authority.")}u=""}else{if(p==S||"/"==S||"\\"==S||"?"==S||"#"==S){h-=u.length,u="",l="host"
continue}u+=S}break
case"file host":if(p==S||"/"==S||"\\"==S||"?"==S||"#"==S){2!=u.length||!g.test(u[0])||":"!=u[1]&&"|"!=u[1]?0==u.length?l="relative path start":(this._host=i.call(this,u),u="",l="relative path start"):l="relative path"
continue}"	"==S||"\n"==S||"\r"==S?c("Invalid whitespace in file host."):u+=S
break
case"host":case"hostname":if(":"!=S||v){if(p==S||"/"==S||"\\"==S||"?"==S||"#"==S){if(this._host=i.call(this,u),u="",l="relative path start",s)break t
continue}"	"!=S&&"\n"!=S&&"\r"!=S?("["==S?v=!0:"]"==S&&(v=!1),u+=S):c("Invalid code point in host/hostname: "+S)}else if(this._host=i.call(this,u),u="",l="port","hostname"==s)break t
break
case"port":if(/[0-9]/.test(S))u+=S
else{if(p==S||"/"==S||"\\"==S||"?"==S||"#"==S||s){if(""!=u){var _=parseInt(u,10)
_!=d[this._scheme]&&(this._port=_+""),u=""}if(s)break t
l="relative path start"
continue}"	"==S||"\n"==S||"\r"==S?c("Invalid code point in port: "+S):n.call(this)}break
case"relative path start":if("\\"==S&&c("'\\' not allowed in path."),l="relative path","/"!=S&&"\\"!=S)continue
break
case"relative path":if(p!=S&&"/"!=S&&"\\"!=S&&(s||"?"!=S&&"#"!=S))"	"!=S&&"\n"!=S&&"\r"!=S&&(u+=r(S))
else{"\\"==S&&c("\\ not allowed in relative path.")
var w;(w=f[u.toLowerCase()])&&(u=w),".."==u?(this._path.pop(),"/"!=S&&"\\"!=S&&this._path.push("")):"."==u&&"/"!=S&&"\\"!=S?this._path.push(""):"."!=u&&("file"==this._scheme&&0==this._path.length&&2==u.length&&g.test(u[0])&&"|"==u[1]&&(u=u[0]+":"),this._path.push(u)),u="","?"==S?(this._query="?",l="query"):"#"==S&&(this._fragment="#",l="fragment")}break
case"query":s||"#"!=S?p!=S&&"	"!=S&&"\n"!=S&&"\r"!=S&&(this._query+=a(S)):(this._fragment="#",l="fragment")
break
case"fragment":p!=S&&"	"!=S&&"\n"!=S&&"\r"!=S&&(this._fragment+=S)}h++}}function o(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(t,e){void 0===e||e instanceof c||(e=new c(String(e))),this._url=t,o.call(this)
var n=t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,n,null,e)}var l=!1
if("function"==typeof URL&&"origin"in URL.prototype)try{var h=new URL("b","http://a")
h.pathname="c%20d",l="http://a/c%20d"===h.href}catch(u){}if(!l){var d=Object.create(null)
d.ftp=21,d.file=0,d.gopher=70,d.http=80,d.https=443,d.ws=80,d.wss=443
var f=Object.create(null)
f["%2e"]=".",f[".%2e"]="..",f["%2e."]="..",f["%2e%2e"]=".."
var p=void 0,g=/[a-zA-Z]/,A=/[a-zA-Z0-9\+\-\.]/
c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var t=""
return""==this._username&&null==this._password||(t=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+t+this.host:"")+this.pathname+this._query+this._fragment},set href(t){o.call(this),s.call(this,t)},get protocol(){return this._scheme+":"},set protocol(t){this._isInvalid||s.call(this,t+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"host")},get hostname(){return this._host},set hostname(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"hostname")},get port(){return this._port},set port(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(t){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,t,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(t){!this._isInvalid&&this._isRelative&&(this._query="?","?"==t[0]&&(t=t.slice(1)),s.call(this,t,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(t){this._isInvalid||(this._fragment="#","#"==t[0]&&(t=t.slice(1)),s.call(this,t,"fragment"))},get origin(){var t
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return t=this.host,t?this._scheme+"://"+t:""}}
var m=t.URL
m&&(c.createObjectURL=function(t){return m.createObjectURL.apply(m,arguments)},c.revokeObjectURL=function(t){m.revokeObjectURL(t)}),t.URL=c}}(w)
var Y=65536
PDFJS.maxImageSize=void 0===PDFJS.maxImageSize?-1:PDFJS.maxImageSize,PDFJS.cMapUrl=void 0===PDFJS.cMapUrl?null:PDFJS.cMapUrl,PDFJS.cMapPacked=void 0===PDFJS.cMapPacked?!1:PDFJS.cMapPacked,PDFJS.disableFontFace=void 0===PDFJS.disableFontFace?!1:PDFJS.disableFontFace,PDFJS.imageResourcesPath=void 0===PDFJS.imageResourcesPath?"":PDFJS.imageResourcesPath,PDFJS.disableWorker=void 0===PDFJS.disableWorker?!1:PDFJS.disableWorker,PDFJS.workerSrc=void 0===PDFJS.workerSrc?null:PDFJS.workerSrc,PDFJS.disableRange=void 0===PDFJS.disableRange?!1:PDFJS.disableRange,PDFJS.disableStream=void 0===PDFJS.disableStream?!1:PDFJS.disableStream,PDFJS.disableAutoFetch=void 0===PDFJS.disableAutoFetch?!1:PDFJS.disableAutoFetch,PDFJS.pdfBug=void 0===PDFJS.pdfBug?!1:PDFJS.pdfBug,PDFJS.postMessageTransfers=void 0===PDFJS.postMessageTransfers?!0:PDFJS.postMessageTransfers,PDFJS.disableCreateObjectURL=void 0===PDFJS.disableCreateObjectURL?!1:PDFJS.disableCreateObjectURL,PDFJS.disableWebGL=void 0===PDFJS.disableWebGL?!0:PDFJS.disableWebGL,PDFJS.disableFullscreen=void 0===PDFJS.disableFullscreen?!1:PDFJS.disableFullscreen,PDFJS.useOnlyCssZoom=void 0===PDFJS.useOnlyCssZoom?!1:PDFJS.useOnlyCssZoom,PDFJS.verbosity=void 0===PDFJS.verbosity?PDFJS.VERBOSITY_LEVELS.warnings:PDFJS.verbosity,PDFJS.maxCanvasPixels=void 0===PDFJS.maxCanvasPixels?16777216:PDFJS.maxCanvasPixels,PDFJS.openExternalLinksInNewWindow=void 0===PDFJS.openExternalLinksInNewWindow?!1:PDFJS.openExternalLinksInNewWindow,PDFJS.externalLinkTarget=void 0===PDFJS.externalLinkTarget?PDFJS.LinkTarget.NONE:PDFJS.externalLinkTarget,PDFJS.isEvalSupported=void 0===PDFJS.isEvalSupported?!0:PDFJS.isEvalSupported,PDFJS.getDocument=function(t,e,r,a){var o=new q
arguments.length>1&&n("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"),e&&(e instanceof Q||(e=Object.create(e),e.length=t.length,e.initialData=t.initialData,e.abort||(e.abort=function(){})),t=Object.create(t),t.range=e),o.onPassword=r||null,o.onProgress=a||null
var c
"string"==typeof t?c={url:t}:m(t)?c={data:t}:t instanceof Q?c={range:t}:("object"!=typeof t&&i("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"),t.url||t.data||t.range||i("Invalid parameter object: need either .data, .range or .url"),c=t)
var l={},h=null,d=null
for(var f in c)if("url"!==f||"undefined"==typeof window)if("range"!==f)if("worker"!==f)if("data"!==f||c[f]instanceof Uint8Array)l[f]=c[f]
else{var p=c[f]
"string"==typeof p?l[f]=u(p):"object"!=typeof p||null===p||isNaN(p.length)?m(p)?l[f]=new Uint8Array(p):i("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."):l[f]=new Uint8Array(p)}else d=c[f]
else h=c[f]
else l[f]=s(window.location.href,c[f])
l.rangeChunkSize=l.rangeChunkSize||Y,d||(d=new Z,o._worker=d)
var g=o.docId
return d.promise.then(function(){if(o.destroyed)throw new Error("Loading aborted")
return y(d,l,h,g).then(function(t){if(o.destroyed)throw new Error("Loading aborted")
var e=new b(g,t,d.port)
e.send("Ready",null)
var n=new $(e,o,h)
o._transport=n})},o._capability.reject),o}
var q=function(){function t(){this._capability=v(),this._transport=null,this._worker=null,this.docId="d"+e++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}var e=0
return t.prototype={get promise(){return this._capability.promise},destroy:function(){this.destroyed=!0
var t=this._transport?this._transport.destroy():Promise.resolve()
return t.then(function(){this._transport=null,this._worker&&(this._worker.destroy(),this._worker=null)}.bind(this))},then:function(t,e){return this.promise.then.apply(this.promise,arguments)}},t}(),Q=function(){function t(t,e){this.length=t,this.initialData=e,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._readyCapability=v()}return t.prototype={addRangeListener:function(t){this._rangeListeners.push(t)},addProgressListener:function(t){this._progressListeners.push(t)},addProgressiveReadListener:function(t){this._progressiveReadListeners.push(t)},onDataRange:function(t,e){for(var n=this._rangeListeners,i=0,r=n.length;r>i;++i)n[i](t,e)},onDataProgress:function(t){this._readyCapability.promise.then(function(){for(var e=this._progressListeners,n=0,i=e.length;i>n;++n)e[n](t)}.bind(this))},onDataProgressiveRead:function(t){this._readyCapability.promise.then(function(){for(var e=this._progressiveReadListeners,n=0,i=e.length;i>n;++n)e[n](t)}.bind(this))},transportReady:function(){this._readyCapability.resolve()},requestDataRange:function(t,e){throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")},abort:function(){}},t}()
PDFJS.PDFDataRangeTransport=Q
var V=function(){function t(t,e,n){this.pdfInfo=t,this.transport=e,this.loadingTask=n}return t.prototype={get numPages(){return this.pdfInfo.numPages},get fingerprint(){return this.pdfInfo.fingerprint},getPage:function(t){return this.transport.getPage(t)},getPageIndex:function(t){return this.transport.getPageIndex(t)},getDestinations:function(){return this.transport.getDestinations()},getDestination:function(t){return this.transport.getDestination(t)},getAttachments:function(){return this.transport.getAttachments()},getJavaScript:function(){return this.transport.getJavaScript()},getOutline:function(){return this.transport.getOutline()},getMetadata:function(){return this.transport.getMetadata()},getData:function(){return this.transport.getData()},getDownloadInfo:function(){return this.transport.downloadInfoCapability.promise},getStats:function(){return this.transport.getStats()},cleanup:function(){this.transport.startCleanup()},destroy:function(){return this.loadingTask.destroy()}},t}(),K=function(){function t(t,e,n){this.pageIndex=t,this.pageInfo=e,this.transport=n,this.stats=new H,this.stats.enabled=!!w.PDFJS.enableStats,this.commonObjs=n.commonObjs,this.objs=new tt,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates={},this.destroyed=!1}return t.prototype={get pageNumber(){return this.pageIndex+1},get rotate(){return this.pageInfo.rotate},get ref(){return this.pageInfo.ref},get view(){return this.pageInfo.view},getViewport:function(t,e){return arguments.length<2&&(e=this.rotate),new PDFJS.PageViewport(this.view,t,e,0,0)},getAnnotations:function(t){var e=t&&t.intent||null
return this.annotationsPromise&&this.annotationsIntent===e||(this.annotationsPromise=this.transport.getAnnotations(this.pageIndex,e),this.annotationsIntent=e),this.annotationsPromise},render:function(t){function e(t){var e=a.renderTasks.indexOf(s)
e>=0&&a.renderTasks.splice(e,1),c.cleanupAfterRender&&(c.pendingCleanup=!0),c._tryCleanup(),t?s.capability.reject(t):s.capability.resolve(),i.timeEnd("Rendering"),i.timeEnd("Overall")}var i=this.stats
i.time("Overall"),this.pendingCleanup=!1
var r="print"===t.intent?"print":"display"
this.intentStates[r]||(this.intentStates[r]={})
var a=this.intentStates[r]
a.displayReadyCapability||(a.receivingOperatorList=!0,a.displayReadyCapability=v(),a.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.stats.time("Page Request"),this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageNumber-1,intent:r}))
var s=new nt(e,t,this.objs,this.commonObjs,a.operatorList,this.pageNumber)
s.useRequestAnimationFrame="print"!==r,a.renderTasks||(a.renderTasks=[]),a.renderTasks.push(s)
var o=s.task
t.continueCallback&&(n("render is used with continueCallback parameter"),o.onContinue=t.continueCallback)
var c=this
return a.displayReadyCapability.promise.then(function(t){return c.pendingCleanup?void e():(i.time("Rendering"),s.initalizeGraphics(t),void s.operatorListChanged())},function(t){e(t)}),o},getOperatorList:function(){function t(){n.operatorList.lastChunk&&n.opListReadCapability.resolve(n.operatorList)}var e="oplist"
this.intentStates[e]||(this.intentStates[e]={})
var n=this.intentStates[e]
if(!n.opListReadCapability){var i={}
i.operatorListChanged=t,n.receivingOperatorList=!0,n.opListReadCapability=v(),n.renderTasks=[],n.renderTasks.push(i),n.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageIndex,intent:e})}return n.opListReadCapability.promise},getTextContent:function(t){var e=t&&t.normalizeWhitespace||!1
return this.transport.messageHandler.sendWithPromise("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:e})},_destroy:function(){this.destroyed=!0,this.transport.pageCache[this.pageIndex]=null
var t=[]
return Object.keys(this.intentStates).forEach(function(e){var n=this.intentStates[e]
n.renderTasks.forEach(function(e){var n=e.capability.promise["catch"](function(){})
t.push(n),e.cancel()})},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(t)},destroy:function(){n("page destroy method, use cleanup() instead"),this.cleanup()},cleanup:function(){this.pendingCleanup=!0,this._tryCleanup()},_tryCleanup:function(){this.pendingCleanup&&!Object.keys(this.intentStates).some(function(t){var e=this.intentStates[t]
return 0!==e.renderTasks.length||e.receivingOperatorList},this)&&(Object.keys(this.intentStates).forEach(function(t){delete this.intentStates[t]},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1)},_startRenderPage:function(t,e){var n=this.intentStates[e]
n.displayReadyCapability&&n.displayReadyCapability.resolve(t)},_renderPageChunk:function(t,e){var n,i,r=this.intentStates[e]
for(n=0,i=t.length;i>n;n++)r.operatorList.fnArray.push(t.fnArray[n]),r.operatorList.argsArray.push(t.argsArray[n])
for(r.operatorList.lastChunk=t.lastChunk,n=0;n<r.renderTasks.length;n++)r.renderTasks[n].operatorListChanged()
t.lastChunk&&(r.receivingOperatorList=!1,this._tryCleanup())}},t}(),Z=function(){function n(){return PDFJS.fakeWorkerFilesLoadedCapability||(PDFJS.fakeWorkerFilesLoadedCapability=v(),z.loadScript(PDFJS.workerSrc,function(){PDFJS.fakeWorkerFilesLoadedCapability.resolve()})),PDFJS.fakeWorkerFilesLoadedCapability.promise}function r(t){this.name=t,this.destroyed=!1,this._readyCapability=v(),this._port=null,this._webWorker=null,this._messageHandler=null,this._initialize()}var a=0
return r.prototype={get promise(){return this._readyCapability.promise},get port(){return this._port},get messageHandler(){return this._messageHandler},_initialize:function(){if(!w.PDFJS.disableWorker&&"undefined"!=typeof Worker){var e=PDFJS.workerSrc
e||i("No PDFJS.workerSrc specified")
try{var n=new Worker(e),r=new b("main","worker",n)
r.on("test",function(t){if(this.destroyed)return this._readyCapability.reject(new Error("Worker was destroyed")),r.destroy(),void n.terminate()
var e=t&&t.supportTypedArray
e?(this._messageHandler=r,this._port=n,this._webWorker=n,t.supportTransfers||(PDFJS.postMessageTransfers=!1),this._readyCapability.resolve()):(this._setupFakeWorker(),r.destroy(),n.terminate())}.bind(this)),r.on("console_log",function(t){console.log.apply(console,t)}),r.on("console_error",function(t){console.error.apply(console,t)})
var a=new Uint8Array([PDFJS.postMessageTransfers?255:0])
try{r.send("test",a,[a.buffer])}catch(s){t("Cannot use postMessage transfers"),a[0]=0,r.send("test",a)}return}catch(o){t("The worker has been disabled.")}}this._setupFakeWorker()},_setupFakeWorker:function(){e("Setting up fake worker."),w.PDFJS.disableWorker=!0,n().then(function(){if(this.destroyed)return void this._readyCapability.reject(new Error("Worker was destroyed"))
var t={_listeners:[],postMessage:function(t){var e={data:t}
this._listeners.forEach(function(t){t.call(this,e)},this)},addEventListener:function(t,e){this._listeners.push(e)},removeEventListener:function(t,e){var n=this._listeners.indexOf(e)
this._listeners.splice(n,1)},terminate:function(){}}
this._port=t
var e="fake"+a++,n=new b(e+"_worker",e,t)
PDFJS.WorkerMessageHandler.setup(n,t)
var i=new b(e,e+"_worker",t)
this._messageHandler=i,this._readyCapability.resolve()}.bind(this))},destroy:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},r}()
PDFJS.PDFWorker=Z
var $=function(){function t(t,e,n){this.messageHandler=t,this.loadingTask=e,this.pdfDataRangeTransport=n,this.commonObjs=new tt,this.fontLoader=new _(e.docId),this.destroyed=!1,this.destroyCapability=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=v(),this.setupMessageHandler()}return t.prototype={destroy:function(){if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=v()
var t=[]
this.pageCache.forEach(function(e){e&&t.push(e._destroy())}),this.pageCache=[],this.pagePromises=[]
var e=this,n=this.messageHandler.sendWithPromise("Terminate",null)
return t.push(n),Promise.all(t).then(function(){e.fontLoader.clear(),e.pdfDataRangeTransport&&(e.pdfDataRangeTransport.abort(),e.pdfDataRangeTransport=null),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise},setupMessageHandler:function(){function t(t){n.send("UpdatePassword",t)}var n=this.messageHandler,r=this.pdfDataRangeTransport
r&&(r.addRangeListener(function(t,e){n.send("OnDataRange",{begin:t,chunk:e})}),r.addProgressListener(function(t){n.send("OnDataProgress",{loaded:t})}),r.addProgressiveReadListener(function(t){n.send("OnDataRange",{chunk:t})}),n.on("RequestDataRange",function(t){r.requestDataRange(t.begin,t.end)},this)),n.on("GetDoc",function(t){var e=t.pdfInfo
this.numPages=t.pdfInfo.numPages
var n=this.loadingTask,i=new V(e,this,n)
this.pdfDocument=i,n._capability.resolve(i)},this),n.on("NeedPassword",function(e){var n=this.loadingTask
return n.onPassword?n.onPassword(t,O.NEED_PASSWORD):void n._capability.reject(new N(e.message,e.code))},this),n.on("IncorrectPassword",function(e){var n=this.loadingTask
return n.onPassword?n.onPassword(t,O.INCORRECT_PASSWORD):void n._capability.reject(new N(e.message,e.code))},this),n.on("InvalidPDF",function(t){this.loadingTask._capability.reject(new B(t.message))},this),n.on("MissingPDF",function(t){this.loadingTask._capability.reject(new U(t.message))},this),n.on("UnexpectedResponse",function(t){this.loadingTask._capability.reject(new W(t.message,t.status))},this),n.on("UnknownError",function(t){this.loadingTask._capability.reject(new J(t.message,t.details))},this),n.on("DataLoaded",function(t){this.downloadInfoCapability.resolve(t)},this),n.on("PDFManagerReady",function(t){this.pdfDataRangeTransport&&this.pdfDataRangeTransport.transportReady()},this),n.on("StartRenderPage",function(t){if(!this.destroyed){var e=this.pageCache[t.pageIndex]
e.stats.timeEnd("Page Request"),e._startRenderPage(t.transparency,t.intent)}},this),n.on("RenderPageChunk",function(t){if(!this.destroyed){var e=this.pageCache[t.pageIndex]
e._renderPageChunk(t.operatorList,t.intent)}},this),n.on("commonobj",function(t){if(!this.destroyed){var n=t[0],i=t[1]
if(!this.commonObjs.hasData(n))switch(i){case"Font":var r,a=t[2]
if("error"in a){var s=a.error
e("Error during font loading: "+s),this.commonObjs.resolve(n,s)
break}r=new mt(a),this.fontLoader.bind([r],function(t){this.commonObjs.resolve(n,r)}.bind(this))
break
case"FontPath":this.commonObjs.resolve(n,t[2])
break
default:s("Got unknown common object type "+i)}}},this),n.on("obj",function(t){if(!this.destroyed){var e,n=t[0],r=t[1],a=t[2],s=this.pageCache[r]
if(!s.objs.hasData(n))switch(a){case"JpegStream":e=t[3],S(n,e,s.objs)
break
case"Image":e=t[3],s.objs.resolve(n,e)
var o=8e6
e&&"data"in e&&e.data.length>o&&(s.cleanupAfterRender=!0)
break
default:i("Got unknown object type "+a)}}},this),n.on("DocProgress",function(t){if(!this.destroyed){var e=this.loadingTask
e.onProgress&&e.onProgress({loaded:t.loaded,total:t.total})}},this),n.on("PageError",function(t){if(!this.destroyed){var e=this.pageCache[t.pageNum-1],n=e.intentStates[t.intent]
n.displayReadyCapability?n.displayReadyCapability.reject(t.error):i(t.error)}},this),n.on("UnsupportedFeature",function(t){if(!this.destroyed){var e=t.featureId,n=this.loadingTask
n.onUnsupportedFeature&&n.onUnsupportedFeature(e),PDFJS.UnsupportedManager.notify(e)}},this),n.on("JpegDecode",function(t){if(this.destroyed)return Promise.reject("Worker was terminated")
var e=t[0],n=t[1]
return 3!==n&&1!==n?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise(function(t,i){var r=new Image
r.onload=function(){var e=r.width,i=r.height,a=e*i,s=4*a,o=new Uint8Array(a*n),c=x(e,i),l=c.getContext("2d")
l.drawImage(r,0,0)
var h,u,d=l.getImageData(0,0,e,i).data
if(3===n)for(h=0,u=0;s>h;h+=4,u+=3)o[u]=d[h],o[u+1]=d[h+1],o[u+2]=d[h+2]
else if(1===n)for(h=0,u=0;s>h;h+=4,u++)o[u]=d[h]
t({data:o,width:e,height:i})},r.onerror=function(){i(new Error("JpegDecode failed to load image"))},r.src=e})},this)},getData:function(){return this.messageHandler.sendWithPromise("GetData",null)},getPage:function(t,e){if(0>=t||t>this.numPages||(0|t)!==t)return Promise.reject(new Error("Invalid page request"))
var n=t-1
if(n in this.pagePromises)return this.pagePromises[n]
var i=this.messageHandler.sendWithPromise("GetPage",{pageIndex:n}).then(function(t){if(this.destroyed)throw new Error("Transport destroyed")
var e=new K(n,t,this)
return this.pageCache[n]=e,e}.bind(this))
return this.pagePromises[n]=i,i},getPageIndex:function(t){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:t})},getAnnotations:function(t,e){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:t,intent:e})},getDestinations:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)},getDestination:function(t){return this.messageHandler.sendWithPromise("GetDestination",{id:t})},getAttachments:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)},getJavaScript:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)},getOutline:function(){return this.messageHandler.sendWithPromise("GetOutline",null)},getMetadata:function(){return this.messageHandler.sendWithPromise("GetMetadata",null).then(function(t){return{info:t[0],metadata:t[1]?new PDFJS.Metadata(t[1]):null}})},getStats:function(){return this.messageHandler.sendWithPromise("GetStats",null)},startCleanup:function(){this.messageHandler.sendWithPromise("Cleanup",null).then(function(){for(var t=0,e=this.pageCache.length;e>t;t++){var n=this.pageCache[t]
n&&n.cleanup()}this.commonObjs.clear(),this.fontLoader.clear()}.bind(this))}},t}(),tt=function(){function t(){this.objs={}}return t.prototype={ensureObj:function(t){if(this.objs[t])return this.objs[t]
var e={capability:v(),data:null,resolved:!1}
return this.objs[t]=e,e},get:function(t,e){if(e)return this.ensureObj(t).capability.promise.then(e),null
var n=this.objs[t]
return n&&n.resolved||i("Requesting object that isn't resolved yet "+t),n.data},resolve:function(t,e){var n=this.ensureObj(t)
n.resolved=!0,n.data=e,n.capability.resolve(e)},isResolved:function(t){var e=this.objs
return e[t]?e[t].resolved:!1},hasData:function(t){return this.isResolved(t)},getData:function(t){var e=this.objs
return e[t]&&e[t].resolved?e[t].data:null},clear:function(){this.objs={}}},t}(),et=function(){function t(t){this._internalRenderTask=t,this.onContinue=null}return t.prototype={get promise(){return this._internalRenderTask.capability.promise},cancel:function(){this._internalRenderTask.cancel()},then:function(t,e){return this.promise.then.apply(this.promise,arguments)}},t}(),nt=function(){function t(t,e,n,i,r,a){this.callback=t,this.params=e,this.objs=n,this.commonObjs=i,this.operatorListIdx=null,this.operatorList=r,this.pageNumber=a,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this.useRequestAnimationFrame=!1,this.cancelled=!1,this.capability=v(),this.task=new et(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this)}return t.prototype={initalizeGraphics:function(t){if(!this.cancelled){PDFJS.pdfBug&&"StepperManager"in w&&w.StepperManager.enabled&&(this.stepper=w.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var e=this.params
this.gfx=new dt(e.canvasContext,this.commonObjs,this.objs,e.imageLayer),this.gfx.beginDrawing(e.transform,e.viewport,t),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}},cancel:function(){this.running=!1,this.cancelled=!0,this.callback("cancelled")},operatorListChanged:function(){return this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),void(this.running||this._continue())):void(this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound))},_continue:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue.call(this.task,this._scheduleNextBound):this._scheduleNext())},_scheduleNext:function(){this.useRequestAnimationFrame?window.requestAnimationFrame(this._nextBound):Promise.resolve(void 0).then(this._nextBound)},_next:function(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this.callback())))}},t}()
PDFJS.UnsupportedManager=function(){var t=[]
return{listen:function(e){n("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"),t.push(e)},notify:function(e){for(var n=0,i=t.length;i>n;n++)t[n](e)}}}()
var it=(PDFJS.Metadata=function(){function t(t){return t.replace(/>\\376\\377([^<]+)/g,function(t,e){for(var n=e.replace(/\\([0-3])([0-7])([0-7])/g,function(t,e,n,i){return String.fromCharCode(64*e+8*n+1*i)}),i="",r=0;r<n.length;r+=2){var a=256*n.charCodeAt(r)+n.charCodeAt(r+1)
i+="&#x"+(65536+a).toString(16).substring(1)+";"}return">"+i})}function e(e){if("string"==typeof e){e=t(e)
var n=new DOMParser
e=n.parseFromString(e,"application/xml")}else e instanceof Document||i("Metadata: Invalid metadata object")
this.metaDocument=e,this.metadata={},this.parse()}return e.prototype={parse:function(){var t=this.metaDocument,e=t.documentElement
if("rdf:rdf"!==e.nodeName.toLowerCase())for(e=e.firstChild;e&&"rdf:rdf"!==e.nodeName.toLowerCase();)e=e.nextSibling
var n=e?e.nodeName.toLowerCase():null
if(e&&"rdf:rdf"===n&&e.hasChildNodes()){var i,r,a,s,o,c,l,h=e.childNodes
for(s=0,c=h.length;c>s;s++)if(i=h[s],"rdf:description"===i.nodeName.toLowerCase())for(o=0,l=i.childNodes.length;l>o;o++)"#text"!==i.childNodes[o].nodeName.toLowerCase()&&(r=i.childNodes[o],a=r.nodeName.toLowerCase(),this.metadata[a]=r.textContent.trim())}},get:function(t){return this.metadata[t]||null},has:function(t){return"undefined"!=typeof this.metadata[t]}},e}(),16),rt=100,at=4096,st=.65,ot=!0,ct=1e3,lt=16,ht=function(){function t(){this.cache=Object.create(null)}return t.prototype={getCanvas:function(t,e,n,i){var r
if(void 0!==this.cache[t])r=this.cache[t],r.canvas.width=e,r.canvas.height=n,r.context.setTransform(1,0,0,1,0,0)
else{var a=x(e,n),s=a.getContext("2d")
i&&k(s),this.cache[t]=r={canvas:a,context:s}}return r},clear:function(){for(var t in this.cache){var e=this.cache[t]
e.canvas.width=0,e.canvas.height=0,delete this.cache[t]}}},t}(),ut=function(){function t(t){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=X,this.textMatrixScale=1,this.fontMatrix=D,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=T.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.old=t}return t.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(t,e){this.x=t,this.y=e}},t}(),dt=function(){function n(t,e,n,i){this.ctx=t,this.current=new ut,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=e,this.objs=n,this.imageLayer=i,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new ht,t&&k(t),this.cachedGetSinglePixelWidth=null}function r(t,e){if("undefined"!=typeof ImageData&&e instanceof ImageData)return void t.putImageData(e,0,0)
var n,r,a,s,o,c=e.height,l=e.width,h=c%lt,u=(c-h)/lt,d=0===h?u:u+1,f=t.createImageData(l,lt),p=0,g=e.data,A=f.data
if(e.kind===L.GRAYSCALE_1BPP){var m=g.byteLength,v=PDFJS.hasCanvasTypedArrays?new Uint32Array(A.buffer):new G(A),b=v.length,S=l+7>>3,y=4294967295,x=PDFJS.isLittleEndian||!PDFJS.hasCanvasTypedArrays?4278190080:255
for(r=0;d>r;r++){for(s=u>r?lt:h,n=0,a=0;s>a;a++){for(var k=m-p,C=0,P=k>S?l:8*k-7,_=-8&P,w=0,F=0;_>C;C+=8)F=g[p++],v[n++]=128&F?y:x,v[n++]=64&F?y:x,v[n++]=32&F?y:x,v[n++]=16&F?y:x,v[n++]=8&F?y:x,v[n++]=4&F?y:x,v[n++]=2&F?y:x,v[n++]=1&F?y:x
for(;P>C;C++)0===w&&(F=g[p++],w=128),v[n++]=F&w?y:x,w>>=1}for(;b>n;)v[n++]=0
t.putImageData(f,0,r*lt)}}else if(e.kind===L.RGBA_32BPP){for(a=0,o=l*lt*4,r=0;u>r;r++)A.set(g.subarray(p,p+o)),p+=o,t.putImageData(f,0,a),a+=lt
d>r&&(o=l*h*4,A.set(g.subarray(p,p+o)),t.putImageData(f,0,a))}else if(e.kind===L.RGB_24BPP)for(s=lt,o=l*s,r=0;d>r;r++){for(r>=u&&(s=h,o=l*s),n=0,a=o;a--;)A[n++]=g[p++],A[n++]=g[p++],A[n++]=g[p++],A[n++]=255
t.putImageData(f,0,r*lt)}else i("bad image kind: "+e.kind)}function s(t,e){for(var n=e.height,i=e.width,r=n%lt,a=(n-r)/lt,s=0===r?a:a+1,o=t.createImageData(i,lt),c=0,l=e.data,h=o.data,u=0;s>u;u++){for(var d=a>u?lt:r,f=3,p=0;d>p;p++)for(var g=0,A=0;i>A;A++){if(!g){var m=l[c++]
g=128}h[f]=m&g?0:255,f+=4,g>>=1}t.putImageData(o,0,u*lt)}}function o(t,e){for(var n=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],i=0,r=n.length;r>i;i++){var a=n[i]
void 0!==t[a]&&(e[a]=t[a])}void 0!==t.setLineDash?(e.setLineDash(t.getLineDash()),e.lineDashOffset=t.lineDashOffset):void 0!==t.mozDashOffset&&(e.mozDash=t.mozDash,e.mozDashOffset=t.mozDashOffset)}function l(t,e,n,i){for(var r=t.length,a=3;r>a;a+=4){var s=t[a]
if(0===s)t[a-3]=e,t[a-2]=n,t[a-1]=i
else if(255>s){var o=255-s
t[a-3]=t[a-3]*s+e*o>>8,t[a-2]=t[a-2]*s+n*o>>8,t[a-1]=t[a-1]*s+i*o>>8}}}function h(t,e,n){for(var i=t.length,r=1/255,a=3;i>a;a+=4){var s=n?n[t[a]]:t[a]
e[a]=e[a]*s*r|0}}function u(t,e,n){for(var i=t.length,r=3;i>r;r+=4){var a=77*t[r-3]+152*t[r-2]+28*t[r-1]
e[r]=n?e[r]*n[a>>8]>>8:e[r]*a>>16}}function d(t,e,n,i,r,a,s){var o,c=!!a,d=c?a[0]:0,f=c?a[1]:0,p=c?a[2]:0
o="Luminosity"===r?u:h
for(var g=1048576,A=Math.min(i,Math.ceil(g/n)),m=0;i>m;m+=A){var v=Math.min(A,i-m),b=t.getImageData(0,m,n,v),S=e.getImageData(0,m,n,v)
c&&l(b.data,d,f,p),o(b.data,S.data,s),t.putImageData(S,0,m)}}function f(t,e,n){var i=e.canvas,r=e.context
t.setTransform(e.scaleX,0,0,e.scaleY,e.offsetX,e.offsetY)
var a=e.backdrop||null
if(!e.transferMap&&ft.isEnabled){var s=ft.composeSMask(n.canvas,i,{subtype:e.subtype,backdrop:a})
return t.setTransform(1,0,0,1,0,0),void t.drawImage(s,e.offsetX,e.offsetY)}d(r,n,i.width,i.height,e.subtype,a,e.transferMap),t.drawImage(i,0,0)}var p=15,m=10,v=["butt","round","square"],b=["miter","round","bevel"],S={},y={}
n.prototype={beginDrawing:function(t,e,n){var i=this.ctx.canvas.width,r=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle="rgb(255, 255, 255)",this.ctx.fillRect(0,0,i,r),this.ctx.restore(),n){var a=this.cachedCanvases.getCanvas("transparent",i,r,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=a.canvas,this.ctx=a.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,e.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(t,e,n,i){var r=t.argsArray,a=t.fnArray,s=e||0,o=r.length
if(o===s)return s
for(var c,l=o-s>m&&"function"==typeof n,h=l?Date.now()+p:0,u=0,d=this.commonObjs,f=this.objs;;){if(void 0!==i&&s===i.nextBreakPoint)return i.breakIt(s,n),s
if(c=a[s],c!==I.dependency)this[c].apply(this,r[s])
else for(var g=r[s],A=0,v=g.length;v>A;A++){var b=g[A],S="g"===b[0]&&"_"===b[1],y=S?d:f
if(!y.isResolved(b))return y.get(b,n),s}if(s++,s===o)return s
if(l&&++u>m){if(Date.now()>h)return n(),s
u=0}}},endDrawing:function(){this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.drawImage(this.transparentCanvas,0,0),this.transparentCanvas=null),this.cachedCanvases.clear(),ft.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(t){this.current.lineWidth=t,this.ctx.lineWidth=t},setLineCap:function(t){this.ctx.lineCap=v[t]},setLineJoin:function(t){this.ctx.lineJoin=b[t]},setMiterLimit:function(t){this.ctx.miterLimit=t},setDash:function(t,e){var n=this.ctx
void 0!==n.setLineDash?(n.setLineDash(t),n.lineDashOffset=e):(n.mozDash=t,n.mozDashOffset=e)},setRenderingIntent:function(t){},setFlatness:function(t){},setGState:function(t){for(var n=0,i=t.length;i>n;n++){var r=t[n],a=r[0],s=r[1]
switch(a){case"LW":this.setLineWidth(s)
break
case"LC":this.setLineCap(s)
break
case"LJ":this.setLineJoin(s)
break
case"ML":this.setMiterLimit(s)
break
case"D":this.setDash(s[0],s[1])
break
case"RI":this.setRenderingIntent(s)
break
case"FL":this.setFlatness(s)
break
case"Font":this.setFont(s[0],s[1])
break
case"CA":this.current.strokeAlpha=r[1]
break
case"ca":this.current.fillAlpha=r[1],this.ctx.globalAlpha=r[1]
break
case"BM":if(s&&s.name&&"Normal"!==s.name){var o=s.name.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}).substring(1)
this.ctx.globalCompositeOperation=o,this.ctx.globalCompositeOperation!==o&&e('globalCompositeOperation "'+o+'" is not supported')}else this.ctx.globalCompositeOperation="source-over"
break
case"SMask":this.current.activeSMask&&this.endSMaskGroup(),this.current.activeSMask=s?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var t=this.current.activeSMask,e=t.canvas.width,n=t.canvas.height,i="smaskGroupAt"+this.groupLevel,r=this.cachedCanvases.getCanvas(i,e,n,!0),a=this.ctx,s=a.mozCurrentTransform
this.ctx.save()
var c=r.context
c.scale(1/t.scaleX,1/t.scaleY),c.translate(-t.offsetX,-t.offsetY),c.transform.apply(c,s),o(a,c),this.ctx=c,this.setGState([["BM","Normal"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},endSMaskGroup:function(){var t=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),f(this.ctx,this.current.activeSMask,t),this.ctx.restore(),o(t,this.ctx)},save:function(){this.ctx.save()
var t=this.current
this.stateStack.push(t),this.current=t.clone(),this.current.activeSMask=null},restore:function(){0!==this.stateStack.length&&(null!==this.current.activeSMask&&this.endSMaskGroup(),this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this.cachedGetSinglePixelWidth=null)},transform:function(t,e,n,i,r,a){this.ctx.transform(t,e,n,i,r,a),this.cachedGetSinglePixelWidth=null},constructPath:function(t,e){for(var n=this.ctx,i=this.current,r=i.x,a=i.y,s=0,o=0,c=t.length;c>s;s++)switch(0|t[s]){case I.rectangle:r=e[o++],a=e[o++]
var l=e[o++],h=e[o++]
0===l&&(l=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth())
var u=r+l,d=a+h
this.ctx.moveTo(r,a),this.ctx.lineTo(u,a),this.ctx.lineTo(u,d),this.ctx.lineTo(r,d),this.ctx.lineTo(r,a),this.ctx.closePath()
break
case I.moveTo:r=e[o++],a=e[o++],n.moveTo(r,a)
break
case I.lineTo:r=e[o++],a=e[o++],n.lineTo(r,a)
break
case I.curveTo:r=e[o+4],a=e[o+5],n.bezierCurveTo(e[o],e[o+1],e[o+2],e[o+3],r,a),o+=6
break
case I.curveTo2:n.bezierCurveTo(r,a,e[o],e[o+1],e[o+2],e[o+3]),r=e[o+2],a=e[o+3],o+=4
break
case I.curveTo3:r=e[o+2],a=e[o+3],n.bezierCurveTo(e[o],e[o+1],r,a,r,a),o+=4
break
case I.closePath:n.closePath()}i.setCurrentPoint(r,a)},closePath:function(){this.ctx.closePath()},stroke:function(t){t="undefined"!=typeof t?t:!0
var e=this.ctx,n=this.current.strokeColor
e.lineWidth=Math.max(this.getSinglePixelWidth()*st,this.current.lineWidth),e.globalAlpha=this.current.strokeAlpha,n&&n.hasOwnProperty("type")&&"Pattern"===n.type?(e.save(),e.strokeStyle=n.getPattern(e,this),e.stroke(),e.restore()):e.stroke(),t&&this.consumePath(),e.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(t){t="undefined"!=typeof t?t:!0
var e=this.ctx,n=this.current.fillColor,i=this.current.patternFill,r=!1
i&&(e.save(),this.baseTransform&&e.setTransform.apply(e,this.baseTransform),e.fillStyle=n.getPattern(e,this),r=!0),this.pendingEOFill?(void 0!==e.mozFillRule?(e.mozFillRule="evenodd",e.fill(),e.mozFillRule="nonzero"):e.fill("evenodd"),this.pendingEOFill=!1):e.fill(),r&&e.restore(),t&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=S},eoClip:function(){this.pendingClip=y},beginText:function(){this.current.textMatrix=X,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var t=this.pendingTextPaths,e=this.ctx
if(void 0===t)return void e.beginPath()
e.save(),e.beginPath()
for(var n=0;n<t.length;n++){var i=t[n]
e.setTransform.apply(e,i.transform),e.translate(i.x,i.y),i.addToPath(e,i.fontSize)}e.restore(),e.clip(),e.beginPath(),delete this.pendingTextPaths},setCharSpacing:function(t){this.current.charSpacing=t},setWordSpacing:function(t){this.current.wordSpacing=t},setHScale:function(t){this.current.textHScale=t/100},setLeading:function(t){this.current.leading=-t},setFont:function(t,n){var r=this.commonObjs.get(t),a=this.current
if(r||i("Can't find font for "+t),a.fontMatrix=r.fontMatrix?r.fontMatrix:D,0!==a.fontMatrix[0]&&0!==a.fontMatrix[3]||e("Invalid font matrix for font "+t),0>n?(n=-n,a.fontDirection=-1):a.fontDirection=1,this.current.font=r,this.current.fontSize=n,!r.isType3Font){var s=r.loadedName||"sans-serif",o=r.black?r.bold?"900":"bold":r.bold?"bold":"normal",c=r.italic?"italic":"normal",l='"'+s+'", '+r.fallbackName,h=it>n?it:n>rt?rt:n
this.current.fontSizeScale=n/h
var u=c+" "+o+" "+h+"px "+l
this.ctx.font=u}},setTextRenderingMode:function(t){this.current.textRenderingMode=t},setTextRise:function(t){this.current.textRise=t},moveText:function(t,e){this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=e},setLeadingMoveText:function(t,e){this.setLeading(-e),this.moveText(t,e)},setTextMatrix:function(t,e,n,i,r,a){this.current.textMatrix=[t,e,n,i,r,a],this.current.textMatrixScale=Math.sqrt(t*t+e*e),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(t,e,n){var i,r=this.ctx,a=this.current,s=a.font,o=a.textRenderingMode,c=a.fontSize/a.fontSizeScale,l=o&T.FILL_STROKE_MASK,h=!!(o&T.ADD_TO_PATH_FLAG)
if((s.disableFontFace||h)&&(i=s.getPathGenerator(this.commonObjs,t)),s.disableFontFace?(r.save(),r.translate(e,n),r.beginPath(),i(r,c),l!==T.FILL&&l!==T.FILL_STROKE||r.fill(),l!==T.STROKE&&l!==T.FILL_STROKE||r.stroke(),r.restore()):(l!==T.FILL&&l!==T.FILL_STROKE||r.fillText(t,e,n),l!==T.STROKE&&l!==T.FILL_STROKE||r.strokeText(t,e,n)),h){var u=this.pendingTextPaths||(this.pendingTextPaths=[])
u.push({transform:r.mozCurrentTransform,x:e,y:n,fontSize:c,addToPath:i})}},get isFontSubpixelAAEnabled(){var t=document.createElement("canvas").getContext("2d")
t.scale(1.5,1),t.fillText("I",0,10)
for(var e=t.getImageData(0,0,10,10).data,n=!1,i=3;i<e.length;i+=4)if(e[i]>0&&e[i]<255){n=!0
break}return c(this,"isFontSubpixelAAEnabled",n)},showText:function(t){var e=this.current,n=e.font
if(n.isType3Font)return this.showType3Text(t)
var i=e.fontSize
if(0!==i){var r=this.ctx,a=e.fontSizeScale,s=e.charSpacing,o=e.wordSpacing,c=e.fontDirection,l=e.textHScale*c,h=t.length,u=n.vertical,d=u?1:-1,f=n.defaultVMetrics,p=i*e.fontMatrix[0],A=e.textRenderingMode===T.FILL&&!n.disableFontFace
r.save(),r.transform.apply(r,e.textMatrix),r.translate(e.x,e.y+e.textRise),c>0?r.scale(l,-1):r.scale(l,1)
var m=e.lineWidth,v=e.textMatrixScale
if(0===v||0===m){var b=e.textRenderingMode&T.FILL_STROKE_MASK
b!==T.STROKE&&b!==T.FILL_STROKE||(this.cachedGetSinglePixelWidth=null,m=this.getSinglePixelWidth()*st)}else m/=v
1!==a&&(r.scale(a,a),m/=a),r.lineWidth=m
var S,y=0
for(S=0;h>S;++S){var x=t[S]
if(g(x))y+=d*x*i/1e3
else{var k,C,P,_,w=!1,F=(x.isSpace?o:0)+s,D=x.fontChar,L=x.accent,R=x.width
if(u){var E,I,M
E=x.vmetric||f,I=x.vmetric?E[1]:.5*R,I=-I*p,M=E[2]*p,R=E?-E[0]:R,k=I/a,C=(y+M)/a}else k=y/a,C=0
if(n.remeasure&&R>0){var j=1e3*r.measureText(D).width/i*a
if(j>R&&this.isFontSubpixelAAEnabled){var O=R/j
w=!0,r.save(),r.scale(O,1),k/=O}else R!==j&&(k+=(R-j)/2e3*i/a)}A&&!L?r.fillText(D,k,C):(this.paintChar(D,k,C),L&&(P=k+L.offset.x/a,_=C-L.offset.y/a,this.paintChar(L.fontChar,P,_)))
var N=R*p+F*c
y+=N,w&&r.restore()}}u?e.y-=y*l:e.x+=y*l,r.restore()}},showType3Text:function(t){var n,i,r,a,s=this.ctx,o=this.current,c=o.font,l=o.fontSize,h=o.fontDirection,u=c.vertical?1:-1,d=o.charSpacing,f=o.wordSpacing,p=o.textHScale*h,A=o.fontMatrix||D,m=t.length,v=o.textRenderingMode===T.INVISIBLE
if(!v&&0!==l){for(this.cachedGetSinglePixelWidth=null,s.save(),s.transform.apply(s,o.textMatrix),s.translate(o.x,o.y),s.scale(p,h),n=0;m>n;++n)if(i=t[n],g(i))a=u*i*l/1e3,this.ctx.translate(a,0),o.x+=a*p
else{var b=(i.isSpace?f:0)+d,S=c.charProcOperatorList[i.operatorListId]
if(S){this.processingType3=i,this.save(),s.scale(l,l),s.transform.apply(s,A),this.executeOperatorList(S),this.restore()
var y=z.applyTransform([i.width,0],A)
r=y[0]*l+b,s.translate(r,0),o.x+=r*p}else e('Type3 character "'+i.operatorListId+'" is not available')}s.restore(),this.processingType3=null}},setCharWidth:function(t,e){},setCharWidthAndBounds:function(t,e,n,i,r,a){this.ctx.rect(n,i,r-n,a-i),this.clip(),this.endPath()},getColorN_Pattern:function(t){var e
if("TilingPattern"===t[0]){var n=t[1],i=this.baseTransform||this.ctx.mozCurrentTransform.slice()
e=new At(t,n,this.ctx,this.objs,this.commonObjs,i)}else e=P(t)
return e},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(t,e,n){var i=z.makeCssRgb(t,e,n)
this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(t,e,n){var i=z.makeCssRgb(t,e,n)
this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(t){var e=this.ctx
this.save()
var n=P(t)
e.fillStyle=n.getPattern(e,this,!0)
var i=e.mozCurrentTransformInverse
if(i){var r=e.canvas,a=r.width,s=r.height,o=z.applyTransform([0,0],i),c=z.applyTransform([0,s],i),l=z.applyTransform([a,0],i),h=z.applyTransform([a,s],i),u=Math.min(o[0],c[0],l[0],h[0]),d=Math.min(o[1],c[1],l[1],h[1]),f=Math.max(o[0],c[0],l[0],h[0]),p=Math.max(o[1],c[1],l[1],h[1])
this.ctx.fillRect(u,d,f-u,p-d)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()},beginInlineImage:function(){i("Should not call beginInlineImage")},beginImageData:function(){i("Should not call beginImageData")},paintFormXObjectBegin:function(t,e){if(this.save(),this.baseTransformStack.push(this.baseTransform),A(t)&&6===t.length&&this.transform.apply(this,t),this.baseTransform=this.ctx.mozCurrentTransform,A(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(n){this.save()
var i=this.ctx
n.isolated||t("TODO: Support non-isolated groups."),n.knockout&&e("Knockout groups not supported.")
var r=i.mozCurrentTransform
n.matrix&&i.transform.apply(i,n.matrix),a(n.bbox,"Bounding box is required.")
var s=z.getAxialAlignedBoundingBox(n.bbox,i.mozCurrentTransform),c=[0,0,i.canvas.width,i.canvas.height]
s=z.intersect(s,c)||[0,0,0,0]
var l=Math.floor(s[0]),h=Math.floor(s[1]),u=Math.max(Math.ceil(s[2])-l,1),d=Math.max(Math.ceil(s[3])-h,1),f=1,p=1
u>at&&(f=u/at,u=at),d>at&&(p=d/at,d=at)
var g="groupAt"+this.groupLevel
n.smask&&(g+="_smask_"+this.smaskCounter++%2)
var A=this.cachedCanvases.getCanvas(g,u,d,!0),m=A.context
m.scale(1/f,1/p),m.translate(-l,-h),m.transform.apply(m,r),n.smask?this.smaskStack.push({canvas:A.canvas,context:m,offsetX:l,offsetY:h,scaleX:f,scaleY:p,subtype:n.smask.subtype,backdrop:n.smask.backdrop,transferMap:n.smask.transferMap||null}):(i.setTransform(1,0,0,1,0,0),i.translate(l,h),i.scale(f,p)),o(i,m),this.ctx=m,this.setGState([["BM","Normal"],["ca",1],["CA",1]]),this.groupStack.push(i),this.groupLevel++},endGroup:function(t){this.groupLevel--
var e=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,t.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(e.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.current=new ut},endAnnotations:function(){this.restore()},beginAnnotation:function(t,e,n){if(this.save(),A(t)&&4===t.length){var i=t[2]-t[0],r=t[3]-t[1]
this.ctx.rect(t[0],t[1],i,r),this.clip(),this.endPath()}this.transform.apply(this,e),this.transform.apply(this,n)},endAnnotation:function(){this.restore()},paintJpegXObject:function(t,n,i){var r=this.objs.get(t)
if(!r)return void e("Dependent image isn't ready yet")
this.save()
var a=this.ctx
if(a.scale(1/n,-1/i),a.drawImage(r,0,0,r.width,r.height,0,-i,n,i),this.imageLayer){var s=a.mozCurrentTransformInverse,o=this.getCanvasPosition(0,0)
this.imageLayer.appendImage({objId:t,left:o[0],top:o[1],width:n/s[0],height:i/s[3]})}this.restore()},paintImageMaskXObject:function(t){var e=this.ctx,n=t.width,i=t.height,r=this.current.fillColor,a=this.current.patternFill,o=this.processingType3
if(ot&&o&&void 0===o.compiled&&(ct>=n&&ct>=i?o.compiled=C({data:t.data,width:n,height:i}):o.compiled=null),o&&o.compiled)return void o.compiled(e)
var c=this.cachedCanvases.getCanvas("maskCanvas",n,i),l=c.context
l.save(),s(l,t),l.globalCompositeOperation="source-in",l.fillStyle=a?r.getPattern(l,this):r,l.fillRect(0,0,n,i),l.restore(),this.paintInlineImageXObject(c.canvas)},paintImageMaskXObjectRepeat:function(t,e,n,i){var r=t.width,a=t.height,o=this.current.fillColor,c=this.current.patternFill,l=this.cachedCanvases.getCanvas("maskCanvas",r,a),h=l.context
h.save(),s(h,t),h.globalCompositeOperation="source-in",h.fillStyle=c?o.getPattern(h,this):o,h.fillRect(0,0,r,a),h.restore()
for(var u=this.ctx,d=0,f=i.length;f>d;d+=2)u.save(),u.transform(e,0,0,n,i[d],i[d+1]),u.scale(1,-1),u.drawImage(l.canvas,0,0,r,a,0,-1,1,1),u.restore()},paintImageMaskXObjectGroup:function(t){for(var e=this.ctx,n=this.current.fillColor,i=this.current.patternFill,r=0,a=t.length;a>r;r++){var o=t[r],c=o.width,l=o.height,h=this.cachedCanvases.getCanvas("maskCanvas",c,l),u=h.context
u.save(),s(u,o),u.globalCompositeOperation="source-in",u.fillStyle=i?n.getPattern(u,this):n,u.fillRect(0,0,c,l),u.restore(),e.save(),e.transform.apply(e,o.transform),e.scale(1,-1),e.drawImage(h.canvas,0,0,c,l,0,-1,1,1),e.restore()}},paintImageXObject:function(t){var n=this.objs.get(t)
return n?void this.paintInlineImageXObject(n):void e("Dependent image isn't ready yet")},paintImageXObjectRepeat:function(t,n,i,r){var a=this.objs.get(t)
if(!a)return void e("Dependent image isn't ready yet")
for(var s=a.width,o=a.height,c=[],l=0,h=r.length;h>l;l+=2)c.push({transform:[n,0,0,i,r[l],r[l+1]],x:0,y:0,w:s,h:o})
this.paintInlineImageXObjectGroup(a,c)},paintInlineImageXObject:function(t){var e=t.width,n=t.height,i=this.ctx
this.save(),i.scale(1/e,-1/n)
var a,s,o=i.mozCurrentTransformInverse,c=o[0],l=o[1],h=Math.max(Math.sqrt(c*c+l*l),1),u=o[2],d=o[3],f=Math.max(Math.sqrt(u*u+d*d),1)
if(t instanceof HTMLElement||!t.data)a=t
else{s=this.cachedCanvases.getCanvas("inlineImage",e,n)
var p=s.context
r(p,t),a=s.canvas}for(var g=e,A=n,m="prescale1";h>2&&g>1||f>2&&A>1;){var v=g,b=A
h>2&&g>1&&(v=Math.ceil(g/2),h/=g/v),f>2&&A>1&&(b=Math.ceil(A/2),f/=A/b),s=this.cachedCanvases.getCanvas(m,v,b),p=s.context,p.clearRect(0,0,v,b),p.drawImage(a,0,0,g,A,0,0,v,b),a=s.canvas,g=v,A=b,m="prescale1"===m?"prescale2":"prescale1"}if(i.drawImage(a,0,0,g,A,0,-n,e,n),this.imageLayer){var S=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:t,left:S[0],top:S[1],width:e/o[0],height:n/o[3]})}this.restore()},paintInlineImageXObjectGroup:function(t,e){var n=this.ctx,i=t.width,a=t.height,s=this.cachedCanvases.getCanvas("inlineImage",i,a),o=s.context
r(o,t)
for(var c=0,l=e.length;l>c;c++){var h=e[c]
if(n.save(),n.transform.apply(n,h.transform),n.scale(1,-1),n.drawImage(s.canvas,h.x,h.y,h.w,h.h,0,-1,1,1),this.imageLayer){var u=this.getCanvasPosition(h.x,h.y)
this.imageLayer.appendImage({imgData:t,left:u[0],top:u[1],width:i,height:a})}n.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){e("Unsupported 'paintXObject' command.")},markPoint:function(t){},markPointProps:function(t,e){},beginMarkedContent:function(t){},beginMarkedContentProps:function(t,e){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var t=this.ctx
this.pendingClip&&(this.pendingClip===y?void 0!==t.mozFillRule?(t.mozFillRule="evenodd",t.clip(),t.mozFillRule="nonzero"):t.clip("evenodd"):t.clip(),this.pendingClip=null),t.beginPath()},getSinglePixelWidth:function(t){if(null===this.cachedGetSinglePixelWidth){var e=this.ctx.mozCurrentTransformInverse
this.cachedGetSinglePixelWidth=Math.sqrt(Math.max(e[0]*e[0]+e[1]*e[1],e[2]*e[2]+e[3]*e[3]))}return this.cachedGetSinglePixelWidth},getCanvasPosition:function(t,e){var n=this.ctx.mozCurrentTransform
return[n[0]*t+n[2]*e+n[4],n[1]*t+n[3]*e+n[5]]}}
for(var x in I)n.prototype[I[x]]=n.prototype[x]
return n}(),ft=function(){function t(t,e,n){var i=t.createShader(n)
t.shaderSource(i,e),t.compileShader(i)
var r=t.getShaderParameter(i,t.COMPILE_STATUS)
if(!r){var a=t.getShaderInfoLog(i)
throw new Error("Error during shader compilation: "+a)}return i}function e(e,n){return t(e,n,e.VERTEX_SHADER)}function n(e,n){return t(e,n,e.FRAGMENT_SHADER)}function i(t,e){for(var n=t.createProgram(),i=0,r=e.length;r>i;++i)t.attachShader(n,e[i])
t.linkProgram(n)
var a=t.getProgramParameter(n,t.LINK_STATUS)
if(!a){var s=t.getProgramInfoLog(n)
throw new Error("Error during program linking: "+s)}return n}function r(t,e,n){t.activeTexture(n)
var i=t.createTexture()
return t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),i}function a(){d||(f=document.createElement("canvas"),d=f.getContext("webgl",{premultipliedalpha:!1}))}function s(){var t,r
a(),t=f,f=null,r=d,d=null
var s=e(r,p),o=n(r,g),c=i(r,[s,o])
r.useProgram(c)
var l={}
l.gl=r,l.canvas=t,l.resolutionLocation=r.getUniformLocation(c,"u_resolution"),l.positionLocation=r.getAttribLocation(c,"a_position"),l.backdropLocation=r.getUniformLocation(c,"u_backdrop"),l.subtypeLocation=r.getUniformLocation(c,"u_subtype")
var h=r.getAttribLocation(c,"a_texCoord"),u=r.getUniformLocation(c,"u_image"),m=r.getUniformLocation(c,"u_mask"),v=r.createBuffer()
r.bindBuffer(r.ARRAY_BUFFER,v),r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),r.STATIC_DRAW),r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,0,0),r.uniform1i(u,0),r.uniform1i(m,1),A=l}function o(t,e,n){var i=t.width,a=t.height
A||s()
var o=A,c=o.canvas,l=o.gl
c.width=i,c.height=a,l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),l.uniform2f(o.resolutionLocation,i,a),n.backdrop?l.uniform4f(o.resolutionLocation,n.backdrop[0],n.backdrop[1],n.backdrop[2],1):l.uniform4f(o.resolutionLocation,0,0,0,0),l.uniform1i(o.subtypeLocation,"Luminosity"===n.subtype?1:0)
var h=r(l,t,l.TEXTURE0),u=r(l,e,l.TEXTURE1),d=l.createBuffer()
return l.bindBuffer(l.ARRAY_BUFFER,d),l.bufferData(l.ARRAY_BUFFER,new Float32Array([0,0,i,0,0,a,0,a,i,0,i,a]),l.STATIC_DRAW),l.enableVertexAttribArray(o.positionLocation),l.vertexAttribPointer(o.positionLocation,2,l.FLOAT,!1,0,0),l.clearColor(0,0,0,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.TRIANGLES,0,6),l.flush(),l.deleteTexture(h),l.deleteTexture(u),l.deleteBuffer(d),c}function l(){var t,r
a(),t=f,f=null,r=d,d=null
var s=e(r,m),o=n(r,v),c=i(r,[s,o])
r.useProgram(c)
var l={}
l.gl=r,l.canvas=t,l.resolutionLocation=r.getUniformLocation(c,"u_resolution"),l.scaleLocation=r.getUniformLocation(c,"u_scale"),l.offsetLocation=r.getUniformLocation(c,"u_offset"),l.positionLocation=r.getAttribLocation(c,"a_position"),l.colorLocation=r.getAttribLocation(c,"a_color"),b=l}function h(t,e,n,i,r){b||l()
var a=b,s=a.canvas,o=a.gl
s.width=t,s.height=e,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),o.uniform2f(a.resolutionLocation,t,e)
var c,h,u,d=0
for(c=0,h=i.length;h>c;c++)switch(i[c].type){case"lattice":u=i[c].coords.length/i[c].verticesPerRow|0,d+=(u-1)*(i[c].verticesPerRow-1)*6
break
case"triangles":d+=i[c].coords.length}var f=new Float32Array(2*d),p=new Uint8Array(3*d),g=r.coords,A=r.colors,m=0,v=0
for(c=0,h=i.length;h>c;c++){var S=i[c],y=S.coords,x=S.colors
switch(S.type){case"lattice":var k=S.verticesPerRow
u=y.length/k|0
for(var C=1;u>C;C++)for(var P=C*k+1,_=1;k>_;_++,P++)f[m]=g[y[P-k-1]],f[m+1]=g[y[P-k-1]+1],f[m+2]=g[y[P-k]],f[m+3]=g[y[P-k]+1],f[m+4]=g[y[P-1]],f[m+5]=g[y[P-1]+1],p[v]=A[x[P-k-1]],p[v+1]=A[x[P-k-1]+1],p[v+2]=A[x[P-k-1]+2],p[v+3]=A[x[P-k]],p[v+4]=A[x[P-k]+1],p[v+5]=A[x[P-k]+2],p[v+6]=A[x[P-1]],p[v+7]=A[x[P-1]+1],p[v+8]=A[x[P-1]+2],f[m+6]=f[m+2],f[m+7]=f[m+3],f[m+8]=f[m+4],f[m+9]=f[m+5],f[m+10]=g[y[P]],f[m+11]=g[y[P]+1],p[v+9]=p[v+3],p[v+10]=p[v+4],p[v+11]=p[v+5],p[v+12]=p[v+6],p[v+13]=p[v+7],p[v+14]=p[v+8],p[v+15]=A[x[P]],p[v+16]=A[x[P]+1],p[v+17]=A[x[P]+2],m+=12,v+=18
break
case"triangles":for(var w=0,F=y.length;F>w;w++)f[m]=g[y[w]],f[m+1]=g[y[w]+1],p[v]=A[x[w]],p[v+1]=A[x[w]+1],p[v+2]=A[x[w]+2],m+=2,v+=3}}n?o.clearColor(n[0]/255,n[1]/255,n[2]/255,1):o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT)
var D=o.createBuffer()
o.bindBuffer(o.ARRAY_BUFFER,D),o.bufferData(o.ARRAY_BUFFER,f,o.STATIC_DRAW),o.enableVertexAttribArray(a.positionLocation),o.vertexAttribPointer(a.positionLocation,2,o.FLOAT,!1,0,0)
var T=o.createBuffer()
return o.bindBuffer(o.ARRAY_BUFFER,T),o.bufferData(o.ARRAY_BUFFER,p,o.STATIC_DRAW),o.enableVertexAttribArray(a.colorLocation),o.vertexAttribPointer(a.colorLocation,3,o.UNSIGNED_BYTE,!1,0,0),o.uniform2f(a.scaleLocation,r.scaleX,r.scaleY),o.uniform2f(a.offsetLocation,r.offsetX,r.offsetY),o.drawArrays(o.TRIANGLES,0,d),o.flush(),o.deleteBuffer(D),o.deleteBuffer(T),s}function u(){A&&A.canvas&&(A.canvas.width=0,A.canvas.height=0),b&&b.canvas&&(b.canvas.width=0,b.canvas.height=0),A=null,b=null}var d,f,p="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",g="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",A=null,m="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",v="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",b=null
return{get isEnabled(){if(PDFJS.disableWebGL)return!1
var t=!1
try{a(),t=!!d}catch(e){}return c(this,"isEnabled",t)},composeSMask:o,drawFigures:h,clear:u}}(),pt={}
pt.RadialAxial={fromIR:function(t){var e=t[1],n=t[2],i=t[3],r=t[4],a=t[5],s=t[6]
return{type:"Pattern",getPattern:function(t){var o
"axial"===e?o=t.createLinearGradient(i[0],i[1],r[0],r[1]):"radial"===e&&(o=t.createRadialGradient(i[0],i[1],a,r[0],r[1],s))
for(var c=0,l=n.length;l>c;++c){var h=n[c]
o.addColorStop(h[0],h[1])}return o}}}}
var gt=function(){function t(t,e,n,i,r,a,s,o){var c,l=e.coords,h=e.colors,u=t.data,d=4*t.width
l[n+1]>l[i+1]&&(c=n,n=i,i=c,c=a,a=s,s=c),l[i+1]>l[r+1]&&(c=i,i=r,r=c,c=s,s=o,o=c),l[n+1]>l[i+1]&&(c=n,n=i,i=c,c=a,a=s,s=c)
var f=(l[n]+e.offsetX)*e.scaleX,p=(l[n+1]+e.offsetY)*e.scaleY,g=(l[i]+e.offsetX)*e.scaleX,A=(l[i+1]+e.offsetY)*e.scaleY,m=(l[r]+e.offsetX)*e.scaleX,v=(l[r+1]+e.offsetY)*e.scaleY
if(!(p>=v))for(var b,S,y,x,k,C,P,_,w,F=h[a],D=h[a+1],T=h[a+2],L=h[s],R=h[s+1],E=h[s+2],I=h[o],M=h[o+1],j=h[o+2],O=Math.round(p),N=Math.round(v),J=O;N>=J;J++){A>J?(w=p>J?0:p===A?1:(p-J)/(p-A),b=f-(f-g)*w,S=F-(F-L)*w,y=D-(D-R)*w,x=T-(T-E)*w):(w=J>v?1:A===v?0:(A-J)/(A-v),b=g-(g-m)*w,S=L-(L-I)*w,y=R-(R-M)*w,x=E-(E-j)*w),w=p>J?0:J>v?1:(p-J)/(p-v),k=f-(f-m)*w,C=F-(F-I)*w,P=D-(D-M)*w,_=T-(T-j)*w
for(var B=Math.round(Math.min(b,k)),U=Math.round(Math.max(b,k)),W=d*J+4*B,G=B;U>=G;G++)w=(b-G)/(b-k),w=0>w?0:w>1?1:w,u[W++]=S-(S-C)*w|0,u[W++]=y-(y-P)*w|0,u[W++]=x-(x-_)*w|0,u[W++]=255}}function e(e,n,r){var a,s,o=n.coords,c=n.colors
switch(n.type){case"lattice":var l=n.verticesPerRow,h=Math.floor(o.length/l)-1,u=l-1
for(a=0;h>a;a++)for(var d=a*l,f=0;u>f;f++,d++)t(e,r,o[d],o[d+1],o[d+l],c[d],c[d+1],c[d+l]),t(e,r,o[d+l+1],o[d+1],o[d+l],c[d+l+1],c[d+1],c[d+l])
break
case"triangles":for(a=0,s=o.length;s>a;a+=3)t(e,r,o[a],o[a+1],o[a+2],c[a],c[a+1],c[a+2])
break
default:i("illigal figure")}}function n(t,n,i,r,a,s,o){var c,l,h,u,d=1.1,f=3e3,p=Math.floor(t[0]),g=Math.floor(t[1]),A=Math.ceil(t[2])-p,m=Math.ceil(t[3])-g,v=Math.min(Math.ceil(Math.abs(A*n[0]*d)),f),b=Math.min(Math.ceil(Math.abs(m*n[1]*d)),f),S=A/v,y=m/b,x={coords:i,colors:r,offsetX:-p,offsetY:-g,scaleX:1/S,scaleY:1/y}
if(ft.isEnabled)c=ft.drawFigures(v,b,s,a,x),l=o.getCanvas("mesh",v,b,!1),l.context.drawImage(c,0,0),c=l.canvas
else{l=o.getCanvas("mesh",v,b,!1)
var k=l.context,C=k.createImageData(v,b)
if(s){var P=C.data
for(h=0,u=P.length;u>h;h+=4)P[h]=s[0],P[h+1]=s[1],P[h+2]=s[2],P[h+3]=255}for(h=0;h<a.length;h++)e(C,a[h],x)
k.putImageData(C,0,0),c=l.canvas}return{canvas:c,offsetX:p,offsetY:g,scaleX:S,scaleY:y}}return n}()
pt.Mesh={fromIR:function(t){var e=t[2],n=t[3],i=t[4],r=t[5],a=t[6],s=t[8]
return{type:"Pattern",getPattern:function(t,o,c){var l
if(c)l=z.singularValueDecompose2dScale(t.mozCurrentTransform)
else if(l=z.singularValueDecompose2dScale(o.baseTransform),a){var h=z.singularValueDecompose2dScale(a)
l=[l[0]*h[0],l[1]*h[1]]}var u=gt(r,l,e,n,i,c?null:s,o.cachedCanvases)
return c||(t.setTransform.apply(t,o.baseTransform),a&&t.transform.apply(t,a)),t.translate(u.offsetX,u.offsetY),t.scale(u.scaleX,u.scaleY),t.createPattern(u.canvas,"no-repeat")}}}},pt.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var At=function(){function e(t,e,n,i,r,a){this.operatorList=t[2],this.matrix=t[3]||[1,0,0,1,0,0],this.bbox=t[4],this.xstep=t[5],this.ystep=t[6],this.paintType=t[7],this.tilingType=t[8],this.color=e,this.objs=i,this.commonObjs=r,this.baseTransform=a,this.type="Pattern",this.ctx=n}var n={COLORED:1,UNCOLORED:2},r=3e3
return e.prototype={createPatternCanvas:function(e){var n=this.operatorList,i=this.bbox,a=this.xstep,s=this.ystep,o=this.paintType,c=this.tilingType,l=this.color,h=this.objs,u=this.commonObjs
t("TilingType: "+c)
var d=i[0],f=i[1],p=i[2],g=i[3],A=[d,f],m=[d+a,f+s],v=m[0]-A[0],b=m[1]-A[1],S=z.singularValueDecompose2dScale(this.matrix),y=z.singularValueDecompose2dScale(this.baseTransform),x=[S[0]*y[0],S[1]*y[1]]
v=Math.min(Math.ceil(Math.abs(v*x[0])),r),b=Math.min(Math.ceil(Math.abs(b*x[1])),r)
var k=e.cachedCanvases.getCanvas("pattern",v,b,!0),C=k.context,P=new dt(C,u,h)
P.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(C,o,l),this.setScale(v,b,a,s),this.transformToScale(P)
var _=[1,0,0,1,-A[0],-A[1]]
return P.transform.apply(P,_),this.clipBbox(P,i,d,f,p,g),P.executeOperatorList(n),k.canvas},setScale:function(t,e,n,i){this.scale=[t/n,e/i]},transformToScale:function(t){var e=this.scale,n=[e[0],0,0,e[1],0,0]
t.transform.apply(t,n)},scaleToContext:function(){var t=this.scale
this.ctx.scale(1/t[0],1/t[1])},clipBbox:function(t,e,n,i,r,a){if(e&&A(e)&&4===e.length){var s=r-n,o=a-i
t.ctx.rect(n,i,s,o),t.clip(),t.endPath()}},setFillAndStrokeStyleToContext:function(t,e,r){switch(e){case n.COLORED:var a=this.ctx
t.fillStyle=a.fillStyle,t.strokeStyle=a.strokeStyle
break
case n.UNCOLORED:var s=z.makeCssRgb(r[0],r[1],r[2])
t.fillStyle=s,t.strokeStyle=s
break
default:i("Unsupported paint type: "+e)}},getPattern:function(t,e){var n=this.createPatternCanvas(e)
return t=this.ctx,t.setTransform.apply(t,this.baseTransform),t.transform.apply(t,this.matrix),this.scaleToContext(),t.createPattern(n,"repeat")}},e}()
_.prototype={insertRule:function(t){var e=this.styleElement
e||(e=this.styleElement=document.createElement("style"),e.id="PDFJS_FONT_STYLE_TAG_"+this.docId,document.documentElement.getElementsByTagName("head")[0].appendChild(e))
var n=e.sheet
n.insertRule(t,n.cssRules.length)},clear:function(){var t=this.styleElement
t&&(t.parentNode.removeChild(t),t=this.styleElement=null),this.nativeFontFaces.forEach(function(t){document.fonts["delete"](t)}),this.nativeFontFaces.length=0},get loadTestFont(){return c(this,"loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))},addNativeFontFace:function(t){this.nativeFontFaces.push(t),document.fonts.add(t)},bind:function(t,n){a(!F,"bind() shall be called from main thread")
for(var i=[],r=[],s=[],o=function(t){return t.loaded["catch"](function(n){e('Failed to load font "'+t.family+'": '+n)})},c=0,l=t.length;l>c;c++){var h=t[c]
if(!h.attached&&h.loading!==!1)if(h.attached=!0,_.isFontLoadingAPISupported){var u=h.createNativeFontFace()
u&&(this.addNativeFontFace(u),s.push(o(u)))}else{var d=h.createFontFaceRule()
d&&(this.insertRule(d),i.push(d),r.push(h))}}var f=this.queueLoadingCallback(n)
_.isFontLoadingAPISupported?Promise.all(s).then(function(){f.complete()}):i.length>0&&!_.isSyncFontLoadingSupported?this.prepareFontLoadEvent(i,r,f):f.complete()},queueLoadingCallback:function(t){function e(){for(a(!r.end,"completeRequest() cannot be called twice"),r.end=Date.now();n.requests.length>0&&n.requests[0].end;){var t=n.requests.shift()
setTimeout(t.callback,0)}}var n=this.loadingContext,i="pdfjs-font-loading-"+n.nextRequestId++,r={id:i,complete:e,callback:t,started:Date.now()}
return n.requests.push(r),r},prepareFontLoadEvent:function(t,n,i){function r(t,e){return t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|255&t.charCodeAt(e+3)}function a(t,e,n,i){var r=t.substr(0,e),a=t.substr(e+n)
return r+i+a}function s(t,n){if(u++,u>30)return e("Load test font never loaded."),void n()
h.font="30px "+t,h.fillText(".",0,20)
var i=h.getImageData(0,0,1,1)
return i.data[3]>0?void n():void setTimeout(s.bind(null,t,n))}var o,c,l=document.createElement("canvas")
l.width=1,l.height=1
var h=l.getContext("2d"),u=0,f="lt"+Date.now()+this.loadTestFontId++,p=this.loadTestFont,g=976
p=a(p,g,f.length,f)
var A=16,m=1482184792,v=r(p,A)
for(o=0,c=f.length-3;c>o;o+=4)v=v-m+r(f,o)|0
o<f.length&&(v=v-m+r(f+"XXX",o)|0),p=a(p,A,4,d(v))
var b="url(data:font/opentype;base64,"+btoa(p)+");",S='@font-face { font-family:"'+f+'";src:'+b+"}"
this.insertRule(S)
var y=[]
for(o=0,c=n.length;c>o;o++)y.push(n[o].loadedName)
y.push(f)
var x=document.createElement("div")
for(x.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),o=0,c=y.length;c>o;++o){var k=document.createElement("span")
k.textContent="Hi",k.style.fontFamily=y[o],x.appendChild(k)}document.body.appendChild(x),s(f,function(){document.body.removeChild(x),i.complete()})}},_.isFontLoadingAPISupported=!F&&"undefined"!=typeof document&&!!document.fonts,Object.defineProperty(_,"isSyncFontLoadingSupported",{get:function(){var t=!1,e=window.navigator.userAgent,n=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(e)
return n&&n[1]>=14&&(t=!0),"node"===e&&(t=!0),c(_,"isSyncFontLoadingSupported",t)},enumerable:!0,configurable:!0})
var mt=function(){function t(t){this.compiledGlyphs={}
for(var e in t)this[e]=t[e]}return Object.defineProperty(t,"isEvalSupported",{get:function(){var t=!1
if(PDFJS.isEvalSupported)try{new Function(""),t=!0}catch(e){}return c(this,"isEvalSupported",t)},enumerable:!0,configurable:!0}),t.prototype={createNativeFontFace:function(){if(!this.data)return null
if(PDFJS.disableFontFace)return this.disableFontFace=!0,null
var t=new FontFace(this.loadedName,this.data,{})
return PDFJS.pdfBug&&"FontInspector"in w&&w.FontInspector.enabled&&w.FontInspector.fontAdded(this),t},createFontFaceRule:function(){if(!this.data)return null
if(PDFJS.disableFontFace)return this.disableFontFace=!0,null
var t=h(new Uint8Array(this.data)),e=this.loadedName,n="url(data:"+this.mimetype+";base64,"+window.btoa(t)+");",i='@font-face { font-family:"'+e+'";src:'+n+"}"
return PDFJS.pdfBug&&"FontInspector"in w&&w.FontInspector.enabled&&w.FontInspector.fontAdded(this,n),i},getPathGenerator:function(e,n){if(!(n in this.compiledGlyphs)){var i,r,a,s=e.get(this.loadedName+"_path_"+n)
if(t.isEvalSupported){var o,c=""
for(r=0,a=s.length;a>r;r++)i=s[r],o=void 0!==i.args?i.args.join(","):"",c+="c."+i.cmd+"("+o+");\n"
this.compiledGlyphs[n]=new Function("c","size",c)}else this.compiledGlyphs[n]=function(t,e){for(r=0,a=s.length;a>r;r++)i=s[r],"scale"===i.cmd&&(i.args=[e,-e]),t[i.cmd].apply(t,i.args)}}return this.compiledGlyphs[n]}},t}(),vt=function(){function t(){}var e=["ms","Moz","Webkit","O"],n={}
return t.getProp=function(t,i){if(1===arguments.length&&"string"==typeof n[t])return n[t]
i=i||document.documentElement
var r,a,s=i.style
if("string"==typeof s[t])return n[t]=t
a=t.charAt(0).toUpperCase()+t.slice(1)
for(var o=0,c=e.length;c>o;o++)if(r=e[o]+a,"string"==typeof s[r])return n[t]=r
return n[t]="undefined"},t.setProp=function(t,e,n){var i=this.getProp(t)
"undefined"!==i&&(e.style[i]=n)},t}()
PDFJS.CustomStyle=vt
var bt=10,St=function(){function t(t,e,n){var i=t.style
if(i.fontSize=e.fontSize+"px",i.direction=e.fontDirection<0?"rtl":"ltr",n){i.fontWeight=n.black?n.bold?"bolder":"bold":n.bold?"bold":"normal",i.fontStyle=n.italic?"italic":"normal"
var r=n.loadedName,a=r?'"'+r+'", ':"",s=n.fallbackName||"Helvetica, sans-serif"
i.fontFamily=a+s}}function n(t,n,i){var r=document.createElement("section"),a=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1]
if(r.setAttribute("data-annotation-id",t.id),t.rect=z.normalizeRect([t.rect[0],n.view[3]-t.rect[1]+n.view[1],t.rect[2],n.view[3]-t.rect[3]+n.view[1]]),vt.setProp("transform",r,"matrix("+i.transform.join(",")+")"),vt.setProp("transformOrigin",r,-t.rect[0]+"px "+-t.rect[1]+"px"),t.borderStyle.width>0){r.style.borderWidth=t.borderStyle.width+"px",t.borderStyle.style!==E.UNDERLINE&&(a-=2*t.borderStyle.width,s-=2*t.borderStyle.width)
var o=t.borderStyle.horizontalCornerRadius,c=t.borderStyle.verticalCornerRadius
if(o>0||c>0){var l=o+"px / "+c+"px"
vt.setProp("borderRadius",r,l)}switch(t.borderStyle.style){case E.SOLID:r.style.borderStyle="solid"
break
case E.DASHED:r.style.borderStyle="dashed"
break
case E.BEVELED:e("Unimplemented border style: beveled")
break
case E.INSET:e("Unimplemented border style: inset")
break
case E.UNDERLINE:r.style.borderBottomStyle="solid"}t.color?r.style.borderColor=z.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):r.style.borderWidth=0}return r.style.left=t.rect[0]+"px",r.style.top=t.rect[1]+"px",r.style.width=a+"px",r.style.height=s+"px",r}function i(e,n){var i=document.createElement("div"),r=e.rect[2]-e.rect[0],a=e.rect[3]-e.rect[1]
i.style.width=r+"px",i.style.height=a+"px",i.style.display="table"
var s=document.createElement("div")
s.textContent=e.fieldValue
var o=e.textAlignment
s.style.textAlign=["left","center","right"][o],s.style.verticalAlign="middle",s.style.display="table-cell"
var c=e.fontRefName?n.commonObjs.getData(e.fontRefName):null
return t(s,e,c),i.appendChild(s),i}function r(t,e,i){var r=t.rect
r[3]-r[1]<bt&&(r[3]=r[1]+bt),r[2]-r[0]<bt&&(r[2]=r[0]+(r[3]-r[1]))
var a=n(t,e,i)
a.className="annotText"
var s=document.createElement("img")
s.style.height=a.style.height,s.style.width=a.style.width
var o=t.name
s.src=PDFJS.imageResourcesPath+"annotation-"+o.toLowerCase()+".svg",s.alt="[{{type}} Annotation]",s.dataset.l10nId="text_annotation_type",s.dataset.l10nArgs=JSON.stringify({type:o})
var c=document.createElement("div")
c.className="annotTextContentWrapper",c.style.left=Math.floor(r[2]-r[0]+5)+"px",c.style.top="-10px"
var l=document.createElement("div")
l.className="annotTextContent",l.setAttribute("hidden",!0)
var h,u
if(t.hasBgColor&&t.color){var d=t.color,f=.7,p=f*(255-d[0])+d[0],g=f*(255-d[1])+d[1],A=f*(255-d[2])+d[2]
l.style.backgroundColor=z.makeCssRgb(0|p,0|g,0|A)}var m=document.createElement("h1"),v=document.createElement("p")
if(m.textContent=t.title,t.content||t.title){var b=document.createElement("span"),S=t.content.split(/(?:\r\n?|\n)/)
for(h=0,u=S.length;u>h;++h){var y=S[h]
b.appendChild(document.createTextNode(y)),u-1>h&&b.appendChild(document.createElement("br"))}v.appendChild(b)
var x=!1,k=function(t){t&&(x=!0),l.hasAttribute("hidden")&&(a.style.zIndex+=1,l.removeAttribute("hidden"))},C=function(t){t&&(x=!1),l.hasAttribute("hidden")||x||(a.style.zIndex-=1,l.setAttribute("hidden",!0))},P=function(){x?C(!0):k(!0)}
s.addEventListener("click",function(){P()},!1),s.addEventListener("mouseover",function(){k()},!1),s.addEventListener("mouseout",function(){C()},!1),l.addEventListener("click",function(){C(!0)},!1)}else l.setAttribute("hidden",!0)
return l.appendChild(m),l.appendChild(v),c.appendChild(l),a.appendChild(s),a.appendChild(c),a}function a(t,e,i,r){function a(t,e){t.href=r.getDestinationHash(e),t.onclick=function(){return e&&r.navigateTo(e),!1},e&&(t.className="internalLink")}function s(t,e){t.href=r.getAnchorUrl(""),t.onclick=function(){return r.executeNamedAction(e),!1},t.className="internalLink"}var o=n(t,e,i)
o.className="annotLink"
var c=document.createElement("a")
return c.href=c.title=t.url||"",t.url&&l()&&(c.target=j[PDFJS.externalLinkTarget]),t.url||(t.action?s(c,t.action):a(c,"dest"in t?t.dest:null)),o.appendChild(c),o}function s(t,e,n,s){switch(t.annotationType){case R.WIDGET:return i(t,e)
case R.TEXT:return r(t,e,n)
case R.LINK:return a(t,e,n,s)
default:throw new Error("Unsupported annotationType: "+t.annotationType)}}function o(t,e,n,i,r){for(var a=0,o=n.length;o>a;a++){var c=n[a]
if(c&&c.hasHtml){var l=s(c,i,t,r)
e.appendChild(l)}}}function c(t,e,n){for(var i=0,r=n.length;r>i;i++){var a=n[i],s=e.querySelector('[data-annotation-id="'+a.id+'"]')
s&&vt.setProp("transform",s,"matrix("+t.transform.join(",")+")")}e.removeAttribute("hidden")}return{render:o,update:c}}()
PDFJS.AnnotationLayer=St
var yt=function(){function t(t){return!s.test(t)}function e(e,n,i,r){var a=r[i.fontName],s=document.createElement("div")
if(e.push(s),t(i.str))return void(s.dataset.isWhitespace=!0)
var o=PDFJS.Util.transform(n.transform,i.transform),c=Math.atan2(o[1],o[0])
a.vertical&&(c+=Math.PI/2)
var l=Math.sqrt(o[2]*o[2]+o[3]*o[3]),h=l
a.ascent?h=a.ascent*h:a.descent&&(h=(1+a.descent)*h)
var u,d
0===c?(u=o[4],d=o[5]-h):(u=o[4]+h*Math.sin(c),d=o[5]-h*Math.cos(c)),s.style.left=u+"px",s.style.top=d+"px",s.style.fontSize=l+"px",s.style.fontFamily=a.fontFamily,s.textContent=i.str,PDFJS.pdfBug&&(s.dataset.fontName=i.fontName),0!==c&&(s.dataset.angle=c*(180/Math.PI)),i.str.length>1&&(a.vertical?s.dataset.canvasWidth=i.height*n.scale:s.dataset.canvasWidth=i.width*n.scale)}function n(t){if(!t._canceled){var e=t._container,n=t._textDivs,i=t._capability,r=n.length
if(r>a)return void i.resolve()
var s=document.createElement("canvas")
s.mozOpaque=!0
for(var o,c,l=s.getContext("2d",{alpha:!1}),h=0;r>h;h++){var u=n[h]
if(void 0===u.dataset.isWhitespace){var d=u.style.fontSize,f=u.style.fontFamily
d===o&&f===c||(l.font=d+" "+f,o=d,c=f)
var p=l.measureText(u.textContent).width
if(p>0){e.appendChild(u)
var g
if(void 0!==u.dataset.canvasWidth){var A=u.dataset.canvasWidth/p
g="scaleX("+A+")"}else g=""
var m=u.dataset.angle
m&&(g="rotate("+m+"deg) "+g),g&&PDFJS.CustomStyle.setProp("transform",u,g)}}}i.resolve()}}function i(t,e,n,i){this._textContent=t,this._container=e,this._viewport=n,i=i||[],this._textDivs=i,this._canceled=!1,this._capability=v(),this._renderTimer=null}function r(t){var e=new i(t.textContent,t.container,t.viewport,t.textDivs)
return e._render(t.timeout),e}var a=1e5,s=/\S/
return i.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject("canceled")},_render:function(t){for(var i=this._textContent.items,r=this._textContent.styles,a=this._textDivs,s=this._viewport,o=0,c=i.length;c>o;o++)e(a,s,i[o],r)
if(t){var l=this
this._renderTimer=setTimeout(function(){n(l),l._renderTimer=null},t)}else n(this)}},r}()
PDFJS.renderTextLayer=yt
var xt={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},kt=function(){function t(t,e,n){for(var i=-1,r=e;n>r;r++){var a=255&(i^t[r]),o=s[a]
i=i>>>8^o}return-1^i}function e(e,n,i,r){var a=r,s=n.length
i[a]=s>>24&255,i[a+1]=s>>16&255,i[a+2]=s>>8&255,i[a+3]=255&s,a+=4,i[a]=255&e.charCodeAt(0),i[a+1]=255&e.charCodeAt(1),i[a+2]=255&e.charCodeAt(2),i[a+3]=255&e.charCodeAt(3),a+=4,i.set(n,a),a+=n.length
var o=t(i,r+4,a)
i[a]=o>>24&255,i[a+1]=o>>16&255,i[a+2]=o>>8&255,i[a+3]=255&o}function n(t,e,n){for(var i=1,r=0,a=e;n>a;++a)i=(i+(255&t[a]))%65521,r=(r+i)%65521
return r<<16|i}function i(t,i){var s,o,c,l=t.width,h=t.height,u=t.data
switch(i){case L.GRAYSCALE_1BPP:o=0,s=1,c=l+7>>3
break
case L.RGB_24BPP:o=2,s=8,c=3*l
break
case L.RGBA_32BPP:o=6,s=8,c=4*l
break
default:throw new Error("invalid format")}var d,f,p=new Uint8Array((1+c)*h),g=0,A=0
for(d=0;h>d;++d)p[g++]=0,p.set(u.subarray(A,A+c),g),A+=c,g+=c
if(i===L.GRAYSCALE_1BPP)for(g=0,d=0;h>d;d++)for(g++,f=0;c>f;f++)p[g++]^=255
var m=new Uint8Array([l>>24&255,l>>16&255,l>>8&255,255&l,h>>24&255,h>>16&255,h>>8&255,255&h,s,o,0,0,0]),v=p.length,b=65535,S=Math.ceil(v/b),y=new Uint8Array(2+v+5*S+4),x=0
y[x++]=120,y[x++]=156
for(var k=0;v>b;)y[x++]=0,y[x++]=255,y[x++]=255,y[x++]=0,y[x++]=0,y.set(p.subarray(k,k+b),x),x+=b,k+=b,v-=b
y[x++]=1,y[x++]=255&v,y[x++]=v>>8&255,y[x++]=65535&~v&255,y[x++]=(65535&~v)>>8&255,y.set(p.subarray(k),x),x+=p.length-k
var C=n(p,0,p.length)
y[x++]=C>>24&255,y[x++]=C>>16&255,y[x++]=C>>8&255,y[x++]=255&C
var P=r.length+3*a+m.length+y.length,_=new Uint8Array(P),w=0
return _.set(r,w),w+=r.length,e("IHDR",m,_,w),w+=a+m.length,e("IDATA",y,_,w),w+=a+y.length,e("IEND",new Uint8Array(0),_,w),PDFJS.createObjectURL(_,"image/png")}for(var r=new Uint8Array([137,80,78,71,13,10,26,10]),a=12,s=new Int32Array(256),o=0;256>o;o++){for(var c=o,l=0;8>l;l++)c=1&c?3988292384^c>>1&2147483647:c>>1&2147483647
s[o]=c}return function(t){var e=void 0===t.kind?L.GRAYSCALE_1BPP:t.kind
return i(t,e)}}(),Ct=function(){function t(){this.fontSizeScale=1,this.fontWeight=xt.fontWeight,this.fontSize=0,this.textMatrix=X,this.fontMatrix=D,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=xt.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.clipId="",this.pendingClip=!1,this.maskId=""}return t.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(t,e){this.x=t,this.y=e}},t}(),Pt=function(){function t(t,e){var n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg:svg")
return i.setAttributeNS(null,"version","1.1"),i.setAttributeNS(null,"width",t+"px"),i.setAttributeNS(null,"height",e+"px"),i.setAttributeNS(null,"viewBox","0 0 "+t+" "+e),i}function n(t){for(var e=[],n=[],i=t.length,r=0;i>r;r++)"save"!==t[r].fn?"restore"===t[r].fn?e=n.pop():e.push(t[r]):(e.push({fnId:92,fn:"group",items:[]}),n.push(e),e=e[e.length-1].items)
return e}function i(t){if(t===(0|t))return t.toString()
var e=t.toFixed(10),n=e.length-1
if("0"!==e[n])return e
do n--
while("0"===e[n])
return e.substr(0,"."===e[n]?n:n+1)}function r(t){if(0===t[4]&&0===t[5]){if(0===t[1]&&0===t[2])return 1===t[0]&&1===t[3]?"":"scale("+i(t[0])+" "+i(t[3])+")"
if(t[0]===t[3]&&t[1]===-t[2]){var e=180*Math.acos(t[0])/Math.PI
return"rotate("+i(e)+")"}}else if(1===t[0]&&0===t[1]&&0===t[2]&&1===t[3])return"translate("+i(t[4])+" "+i(t[5])+")"
return"matrix("+i(t[0])+" "+i(t[1])+" "+i(t[2])+" "+i(t[3])+" "+i(t[4])+" "+i(t[5])+")"}function a(t,e){this.current=new Ct,this.transformMatrix=X,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=e,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts={},this.cssStyle=null}var s="http://www.w3.org/2000/svg",o="http://www.w3.org/XML/1998/namespace",c="http://www.w3.org/1999/xlink",l=["butt","round","square"],h=["miter","round","bevel"],u=0,d=0
return a.prototype={save:function(){this.transformStack.push(this.transformMatrix)
var t=this.current
this.extraStack.push(t),this.current=t.clone()},restore:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.tgrp=document.createElementNS(s,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix)),this.pgrp.appendChild(this.tgrp)},group:function(t){this.save(),this.executeOpTree(t),this.restore()},loadDependencies:function(t){for(var e=t.fnArray,n=e.length,i=t.argsArray,r=this,a=0;n>a;a++)if(I.dependency===e[a])for(var s=i[a],o=0,c=s.length;c>o;o++){var l,h=s[o],u="g_"===h.substring(0,2)
l=u?new Promise(function(t){r.commonObjs.get(h,t)}):new Promise(function(t){r.objs.get(h,t)}),this.current.dependencies.push(l)}return Promise.all(this.current.dependencies)},transform:function(t,e,n,i,a,o){var c=[t,e,n,i,a,o]
this.transformMatrix=PDFJS.Util.transform(this.transformMatrix,c),this.tgrp=document.createElementNS(s,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix))},getSVG:function(e,n){return this.svg=t(n.width,n.height),this.viewport=n,this.loadDependencies(e).then(function(){this.transformMatrix=X,this.pgrp=document.createElementNS(s,"svg:g"),this.pgrp.setAttributeNS(null,"transform",r(n.transform)),this.tgrp=document.createElementNS(s,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix)),this.defs=document.createElementNS(s,"svg:defs"),this.pgrp.appendChild(this.defs),this.pgrp.appendChild(this.tgrp),this.svg.appendChild(this.pgrp)
var t=this.convertOpList(e)
return this.executeOpTree(t),this.svg}.bind(this))},convertOpList:function(t){var e=t.argsArray,i=t.fnArray,r=i.length,a=[],s=[]
for(var o in I)a[I[o]]=o
for(var c=0;r>c;c++){var l=i[c]
s.push({fnId:l,fn:a[l],args:e[c]})}return n(s)},executeOpTree:function(t){for(var n=t.length,i=0;n>i;i++){var r=t[i].fn,a=t[i].fnId,s=t[i].args
switch(0|a){case I.beginText:this.beginText()
break
case I.setLeading:this.setLeading(s)
break
case I.setLeadingMoveText:this.setLeadingMoveText(s[0],s[1])
break
case I.setFont:this.setFont(s)
break
case I.showText:this.showText(s[0])
break
case I.showSpacedText:this.showText(s[0])
break
case I.endText:this.endText()
break
case I.moveText:this.moveText(s[0],s[1])
break
case I.setCharSpacing:this.setCharSpacing(s[0])
break
case I.setWordSpacing:this.setWordSpacing(s[0])
break
case I.setHScale:this.setHScale(s[0])
break
case I.setTextMatrix:this.setTextMatrix(s[0],s[1],s[2],s[3],s[4],s[5])
break
case I.setLineWidth:this.setLineWidth(s[0])
break
case I.setLineJoin:this.setLineJoin(s[0])
break
case I.setLineCap:this.setLineCap(s[0])
break
case I.setMiterLimit:this.setMiterLimit(s[0])
break
case I.setFillRGBColor:this.setFillRGBColor(s[0],s[1],s[2])
break
case I.setStrokeRGBColor:this.setStrokeRGBColor(s[0],s[1],s[2])
break
case I.setDash:this.setDash(s[0],s[1])
break
case I.setGState:this.setGState(s[0])
break
case I.fill:this.fill()
break
case I.eoFill:this.eoFill()
break
case I.stroke:this.stroke()
break
case I.fillStroke:this.fillStroke()
break
case I.eoFillStroke:this.eoFillStroke()
break
case I.clip:this.clip("nonzero")
break
case I.eoClip:this.clip("evenodd")
break
case I.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case I.paintJpegXObject:this.paintJpegXObject(s[0],s[1],s[2])
break
case I.paintImageXObject:this.paintImageXObject(s[0])
break
case I.paintInlineImageXObject:this.paintInlineImageXObject(s[0])
break
case I.paintImageMaskXObject:this.paintImageMaskXObject(s[0])
break
case I.paintFormXObjectBegin:this.paintFormXObjectBegin(s[0],s[1])
break
case I.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case I.closePath:this.closePath()
break
case I.closeStroke:this.closeStroke()
break
case I.closeFillStroke:this.closeFillStroke()
break
case I.nextLine:this.nextLine()
break
case I.transform:this.transform(s[0],s[1],s[2],s[3],s[4],s[5])
break
case I.constructPath:this.constructPath(s[0],s[1])
break
case I.endPath:this.endPath()
break
case 92:this.group(t[i].items)
break
default:e("Unimplemented method "+r)}}},setWordSpacing:function(t){this.current.wordSpacing=t},setCharSpacing:function(t){this.current.charSpacing=t},nextLine:function(){this.moveText(0,this.current.leading)},setTextMatrix:function(t,e,n,r,a,o){var c=this.current
this.current.textMatrix=this.current.lineMatrix=[t,e,n,r,a,o],this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,c.xcoords=[],c.tspan=document.createElementNS(s,"svg:tspan"),c.tspan.setAttributeNS(null,"font-family",c.fontFamily),c.tspan.setAttributeNS(null,"font-size",i(c.fontSize)+"px"),c.tspan.setAttributeNS(null,"y",i(-c.y)),c.txtElement=document.createElementNS(s,"svg:text"),c.txtElement.appendChild(c.tspan)},beginText:function(){this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,this.current.textMatrix=X,this.current.lineMatrix=X,this.current.tspan=document.createElementNS(s,"svg:tspan"),this.current.txtElement=document.createElementNS(s,"svg:text"),this.current.txtgrp=document.createElementNS(s,"svg:g"),this.current.xcoords=[]},moveText:function(t,e){var n=this.current
this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=e,n.xcoords=[],n.tspan=document.createElementNS(s,"svg:tspan"),n.tspan.setAttributeNS(null,"font-family",n.fontFamily),n.tspan.setAttributeNS(null,"font-size",i(n.fontSize)+"px"),n.tspan.setAttributeNS(null,"y",i(-n.y))},showText:function(t){var e=this.current,n=e.font,a=e.fontSize
if(0!==a){var s,c=e.charSpacing,l=e.wordSpacing,h=e.fontDirection,u=e.textHScale*h,d=t.length,f=n.vertical,p=a*e.fontMatrix[0],A=0
for(s=0;d>s;++s){var m=t[s]
if(null!==m)if(g(m))A+=-m*a*.001
else{e.xcoords.push(e.x+A*u)
var v=m.width,b=m.fontChar,S=v*p+c*h
A+=S,e.tspan.textContent+=b}else A+=h*l}f?e.y-=A*u:e.x+=A*u,e.tspan.setAttributeNS(null,"x",e.xcoords.map(i).join(" ")),e.tspan.setAttributeNS(null,"y",i(-e.y)),e.tspan.setAttributeNS(null,"font-family",e.fontFamily),e.tspan.setAttributeNS(null,"font-size",i(e.fontSize)+"px"),e.fontStyle!==xt.fontStyle&&e.tspan.setAttributeNS(null,"font-style",e.fontStyle),e.fontWeight!==xt.fontWeight&&e.tspan.setAttributeNS(null,"font-weight",e.fontWeight),e.fillColor!==xt.fillColor&&e.tspan.setAttributeNS(null,"fill",e.fillColor),e.txtElement.setAttributeNS(null,"transform",r(e.textMatrix)+" scale(1, -1)"),e.txtElement.setAttributeNS(o,"xml:space","preserve"),e.txtElement.appendChild(e.tspan),e.txtgrp.appendChild(e.txtElement),this.tgrp.appendChild(e.txtElement)}},setLeadingMoveText:function(t,e){this.setLeading(-e),this.moveText(t,e)},addFontStyle:function(t){this.cssStyle||(this.cssStyle=document.createElementNS(s,"svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var e=PDFJS.createObjectURL(t.data,t.mimetype)
this.cssStyle.textContent+='@font-face { font-family: "'+t.loadedName+'"; src: url('+e+"); }\n"},setFont:function(t){var e=this.current,n=this.commonObjs.get(t[0]),r=t[1]
this.current.font=n,this.embedFonts&&n.data&&!this.embeddedFonts[n.loadedName]&&(this.addFontStyle(n),this.embeddedFonts[n.loadedName]=n),e.fontMatrix=n.fontMatrix?n.fontMatrix:D
var a=n.black?n.bold?"bolder":"bold":n.bold?"bold":"normal",o=n.italic?"italic":"normal"
0>r?(r=-r,e.fontDirection=-1):e.fontDirection=1,e.fontSize=r,e.fontFamily=n.loadedName,e.fontWeight=a,e.fontStyle=o,e.tspan=document.createElementNS(s,"svg:tspan"),e.tspan.setAttributeNS(null,"y",i(-e.y)),e.xcoords=[]},endText:function(){this.current.pendingClip?(this.cgrp.appendChild(this.tgrp),this.pgrp.appendChild(this.cgrp)):this.pgrp.appendChild(this.tgrp),this.tgrp=document.createElementNS(s,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix))},setLineWidth:function(t){this.current.lineWidth=t},setLineCap:function(t){this.current.lineCap=l[t]},setLineJoin:function(t){this.current.lineJoin=h[t]},setMiterLimit:function(t){this.current.miterLimit=t},setStrokeRGBColor:function(t,e,n){var i=z.makeCssRgb(t,e,n)
this.current.strokeColor=i},setFillRGBColor:function(t,e,n){var i=z.makeCssRgb(t,e,n)
this.current.fillColor=i,this.current.tspan=document.createElementNS(s,"svg:tspan"),this.current.xcoords=[]},setDash:function(t,e){this.current.dashArray=t,this.current.dashPhase=e},constructPath:function(t,e){var n=this.current,r=n.x,a=n.y
n.path=document.createElementNS(s,"svg:path")
for(var o=[],c=t.length,l=0,h=0;c>l;l++)switch(0|t[l]){case I.rectangle:r=e[h++],a=e[h++]
var u=e[h++],d=e[h++],f=r+u,p=a+d
o.push("M",i(r),i(a),"L",i(f),i(a),"L",i(f),i(p),"L",i(r),i(p),"Z")
break
case I.moveTo:r=e[h++],a=e[h++],o.push("M",i(r),i(a))
break
case I.lineTo:r=e[h++],a=e[h++],o.push("L",i(r),i(a))
break
case I.curveTo:r=e[h+4],a=e[h+5],o.push("C",i(e[h]),i(e[h+1]),i(e[h+2]),i(e[h+3]),i(r),i(a)),h+=6
break
case I.curveTo2:r=e[h+2],a=e[h+3],o.push("C",i(r),i(a),i(e[h]),i(e[h+1]),i(e[h+2]),i(e[h+3])),h+=4
break
case I.curveTo3:r=e[h+2],a=e[h+3],o.push("C",i(e[h]),i(e[h+1]),i(r),i(a),i(r),i(a)),h+=4
break
case I.closePath:o.push("Z")}n.path.setAttributeNS(null,"d",o.join(" ")),n.path.setAttributeNS(null,"stroke-miterlimit",i(n.miterLimit)),n.path.setAttributeNS(null,"stroke-linecap",n.lineCap),n.path.setAttributeNS(null,"stroke-linejoin",n.lineJoin),n.path.setAttributeNS(null,"stroke-width",i(n.lineWidth)+"px"),n.path.setAttributeNS(null,"stroke-dasharray",n.dashArray.map(i).join(" ")),n.path.setAttributeNS(null,"stroke-dashoffset",i(n.dashPhase)+"px"),n.path.setAttributeNS(null,"fill","none"),this.tgrp.appendChild(n.path),n.pendingClip?(this.cgrp.appendChild(this.tgrp),this.pgrp.appendChild(this.cgrp)):this.pgrp.appendChild(this.tgrp),n.element=n.path,n.setCurrentPoint(r,a)},endPath:function(){var t=this.current
t.pendingClip?(this.cgrp.appendChild(this.tgrp),this.pgrp.appendChild(this.cgrp)):this.pgrp.appendChild(this.tgrp),this.tgrp=document.createElementNS(s,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix))},clip:function(t){var e=this.current
e.clipId="clippath"+u,u++,this.clippath=document.createElementNS(s,"svg:clipPath"),this.clippath.setAttributeNS(null,"id",e.clipId)
var n=e.element.cloneNode()
"evenodd"===t?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.clippath.setAttributeNS(null,"transform",r(this.transformMatrix)),this.clippath.appendChild(n),this.defs.appendChild(this.clippath),e.pendingClip=!0,this.cgrp=document.createElementNS(s,"svg:g"),this.cgrp.setAttributeNS(null,"clip-path","url(#"+e.clipId+")"),this.pgrp.appendChild(this.cgrp)},closePath:function(){var t=this.current,e=t.path.getAttributeNS(null,"d")
e+="Z",t.path.setAttributeNS(null,"d",e)},setLeading:function(t){this.current.leading=-t},setTextRise:function(t){this.current.textRise=t},setHScale:function(t){this.current.textHScale=t/100},setGState:function(t){for(var e=0,n=t.length;n>e;e++){var i=t[e],r=i[0],a=i[1]
switch(r){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"RI":break
case"FL":break
case"Font":this.setFont(a)
break
case"CA":break
case"ca":break
case"BM":break
case"SMask":}}},fill:function(){var t=this.current
t.element.setAttributeNS(null,"fill",t.fillColor)},stroke:function(){var t=this.current
t.element.setAttributeNS(null,"stroke",t.strokeColor),t.element.setAttributeNS(null,"fill","none")},eoFill:function(){var t=this.current
t.element.setAttributeNS(null,"fill",t.fillColor),t.element.setAttributeNS(null,"fill-rule","evenodd")},fillStroke:function(){this.stroke(),this.fill()},eoFillStroke:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()},closeStroke:function(){this.closePath(),this.stroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},paintSolidColorImageMask:function(){var t=this.current,e=document.createElementNS(s,"svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",t.fillColor),this.tgrp.appendChild(e)},paintJpegXObject:function(t,e,n){var r=this.current,a=this.objs.get(t),o=document.createElementNS(s,"svg:image")
o.setAttributeNS(c,"xlink:href",a.src),o.setAttributeNS(null,"width",a.width+"px"),o.setAttributeNS(null,"height",a.height+"px"),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",i(-n)),o.setAttributeNS(null,"transform","scale("+i(1/e)+" "+i(-1/n)+")"),this.tgrp.appendChild(o),r.pendingClip?(this.cgrp.appendChild(this.tgrp),this.pgrp.appendChild(this.cgrp)):this.pgrp.appendChild(this.tgrp)},paintImageXObject:function(t){var n=this.objs.get(t)
return n?void this.paintInlineImageXObject(n):void e("Dependent image isn't ready yet")},paintInlineImageXObject:function(t,e){var n=this.current,r=t.width,a=t.height,o=kt(t),l=document.createElementNS(s,"svg:rect")
l.setAttributeNS(null,"x","0"),l.setAttributeNS(null,"y","0"),l.setAttributeNS(null,"width",i(r)),l.setAttributeNS(null,"height",i(a)),n.element=l,this.clip("nonzero")
var h=document.createElementNS(s,"svg:image")
h.setAttributeNS(c,"xlink:href",o),h.setAttributeNS(null,"x","0"),h.setAttributeNS(null,"y",i(-a)),h.setAttributeNS(null,"width",i(r)+"px"),h.setAttributeNS(null,"height",i(a)+"px"),h.setAttributeNS(null,"transform","scale("+i(1/r)+" "+i(-1/a)+")"),e?e.appendChild(h):this.tgrp.appendChild(h),n.pendingClip?(this.cgrp.appendChild(this.tgrp),this.pgrp.appendChild(this.cgrp)):this.pgrp.appendChild(this.tgrp)},paintImageMaskXObject:function(t){var e=this.current,n=t.width,r=t.height,a=e.fillColor
e.maskId="mask"+d++
var o=document.createElementNS(s,"svg:mask")
o.setAttributeNS(null,"id",e.maskId)
var c=document.createElementNS(s,"svg:rect")
c.setAttributeNS(null,"x","0"),c.setAttributeNS(null,"y","0"),c.setAttributeNS(null,"width",i(n)),c.setAttributeNS(null,"height",i(r)),c.setAttributeNS(null,"fill",a),c.setAttributeNS(null,"mask","url(#"+e.maskId+")"),this.defs.appendChild(o),this.tgrp.appendChild(c),this.paintInlineImageXObject(t,o)},paintFormXObjectBegin:function(t,e){if(this.save(),A(t)&&6===t.length&&this.transform(t[0],t[1],t[2],t[3],t[4],t[5]),A(e)&&4===e.length){var n=e[2]-e[0],r=e[3]-e[1],a=document.createElementNS(s,"svg:rect")
a.setAttributeNS(null,"x",e[0]),a.setAttributeNS(null,"y",e[1]),a.setAttributeNS(null,"width",i(n)),a.setAttributeNS(null,"height",i(r)),this.current.element=a,this.clip("nonzero"),this.endPath()}},paintFormXObjectEnd:function(){this.restore()}},a}()
PDFJS.SVGGraphics=Pt}.call("undefined"==typeof window?this:window),PDFJS.workerSrc||"undefined"==typeof document||(PDFJS.workerSrc=function(){"use strict"
var t=document.currentScript.src
return t&&t.replace(/\.js$/i,".worker.js")}())

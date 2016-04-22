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
function e(e){PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.infos&&console.log("Info: "+e)}function t(e){PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.warnings&&console.log("Warning: "+e)}function a(e){t("Deprecated API usage: "+e)}function r(e){throw PDFJS.verbosity>=PDFJS.VERBOSITY_LEVELS.errors&&(console.log("Error: "+e),console.log(i())),new Error(e)}function i(){try{throw new Error}catch(e){return e.stack?e.stack.split("\n").slice(2).join("\n"):""}}function n(e,t){e||r(t)}function s(e,t){if(!e)return!1
var a=/^[a-z][a-z0-9+\-.]*(?=:)/i.exec(e)
if(!a)return t
switch(a=a[0].toLowerCase()){case"http":case"https":case"ftp":case"mailto":case"tel":return!0
default:return!1}}function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!1}),a}function c(){switch(PDFJS.openExternalLinksInNewWindow&&(a('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),PDFJS.externalLinkTarget===re.NONE&&(PDFJS.externalLinkTarget=re.BLANK),PDFJS.openExternalLinksInNewWindow=!1),PDFJS.externalLinkTarget){case re.NONE:return!1
case re.SELF:case re.BLANK:case re.PARENT:case re.TOP:return!0}return t("PDFJS.externalLinkTarget is invalid: "+PDFJS.externalLinkTarget),PDFJS.externalLinkTarget=re.NONE,!1}function l(e){n(null!==e&&"object"==typeof e&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length,a=8192
if(a>t)return String.fromCharCode.apply(null,e)
for(var r=[],i=0;t>i;i+=a){var s=Math.min(i+a,t),o=e.subarray(i,s)
r.push(String.fromCharCode.apply(null,o))}return r.join("")}function h(e){n("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,a=new Uint8Array(t),r=0;t>r;++r)a[r]=255&e.charCodeAt(r)
return a}function u(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)}function f(e){for(var t=1,a=0;e>t;)t<<=1,a++
return a}function d(e,t){return e[t]<<24>>24}function g(e,t){return e[t]<<8|e[t+1]}function m(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function p(){var e=new Uint8Array(2)
e[0]=1
var t=new Uint16Array(e.buffer)
return 1===t[0]}function b(){var e=document.createElement("canvas")
e.width=e.height=1
var t=e.getContext("2d"),a=t.createImageData(1,1)
return"undefined"!=typeof a.data.buffer}function v(e){var t,a=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(t=2;a>t;t+=2)r.push(String.fromCharCode(e.charCodeAt(t)<<8|e.charCodeAt(t+1)))
else for(t=0;a>t;++t){var i=pe[e.charCodeAt(t)]
r.push(i?String.fromCharCode(i):e.charAt(t))}return r.join("")}function y(e){return decodeURIComponent(escape(e))}function k(e){return unescape(encodeURIComponent(e))}function w(e){for(var t in e)return!1
return!0}function x(e){return"boolean"==typeof e}function C(e){return"number"==typeof e&&(0|e)===e}function S(e){return"number"==typeof e}function A(e){return"string"==typeof e}function I(e){return e instanceof Ae}function B(e,t){return e instanceof Ie&&(void 0===t||e.cmd===t)}function T(e,t){if(!(e instanceof Be))return!1
if(!t)return!0
var a=e.get("Type")
return I(a)&&a.name===t}function O(e){return e instanceof Array}function R(e){return"object"==typeof e&&null!==e&&void 0!==e.getBytes}function L(e){return"object"==typeof e&&null!==e&&void 0!==e.byteLength}function M(e){return e instanceof Te}function P(){var e={}
return e.promise=new Promise(function(t,a){e.resolve=t,e.reject=a}),e}function E(e,t,a){this.sourceName=e,this.targetName=t,this.comObj=a,this.callbackIndex=1,this.postMessageTransfers=!0
var i=this.callbacksCapabilities={},n=this.actionHandler={}
this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===this.sourceName)if(t.isReply){var s=t.callbackId
if(t.callbackId in i){var o=i[s]
delete i[s],"error"in t?o.reject(t.error):o.resolve(t.data)}else r("Cannot resolve callback "+s)}else if(t.action in n){var c=n[t.action]
if(t.callbackId){var l=this.sourceName,h=t.sourceName
Promise.resolve().then(function(){return c[0].call(c[1],t.data)}).then(function(e){a.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:t.callbackId,data:e})},function(e){e instanceof Error&&(e+=""),a.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:t.callbackId,error:e})})}else c[0].call(c[1],t.data)}else r("Unknown action from worker: "+t.action)}.bind(this),a.addEventListener("message",this._onComObjOnMessage)}function D(){}function q(e){var t
if("object"!=typeof e)return!1
if(T(e))t=e
else{if(!R(e))return!1
t=e.dict}return t.has("FunctionType")}function F(e,t,a){var r=t.get("Matrix"),i=t.get("BBox"),n=t.get("XStep"),s=t.get("YStep"),o=t.get("PaintType"),c=t.get("TilingType")
return["TilingPattern",a,e,r,i,n,s,o,c]}function U(e){return e>=65520&&65535>=e?0:e>=62976&&63743>=e?Kt[e]||e:e}function N(e){for(var t=0,a=Yt.length;a>t;t++){var r=Yt[t]
if(e>=r.begin&&e<r.end)return t}return-1}function j(e){var t=Yt[13]
return e>=t.begin&&e<t.end?!0:(t=Yt[11],e>=t.begin&&e<t.end)}function z(e){var t=e.length
if(1>=t||!j(e.charCodeAt(0)))return e
for(var a="",r=t-1;r>=0;r--)a+=e[r]
return a}function H(e){if(e.fontMatrix&&e.fontMatrix[0]!==W[0]){var t=.001/e.fontMatrix[0],a=e.widths
for(var r in a)a[r]*=t
e.defaultWidth*=t}}function _(e,t){switch(e){case"Type1":return"Type1C"===t?ee.TYPE1C:ee.TYPE1
case"CIDFontType0":return"CIDFontType0C"===t?ee.CIDFONTTYPE0C:ee.CIDFONTTYPE0
case"OpenType":return ee.OPENTYPE
case"TrueType":return ee.TRUETYPE
case"CIDFontType2":return ee.CIDFONTTYPE2
case"MMType1":return ee.MMTYPE1
case"Type0":return ee.TYPE0
default:return ee.UNKNOWN}}function G(e,t,a){var r,i,n,s=Object.create(null)
if(e.baseEncodingName)for(n=Ht[e.baseEncodingName],i=0;i<n.length;i++)r=a.indexOf(n[i]),r>=0?s[i]=r:s[i]=0
else if(e.flags&zt.Symbolic)for(i in t)s[i]=t[i]
else for(n=Ht.StandardEncoding,i=0;i<n.length;i++)r=a.indexOf(n[i]),r>=0?s[i]=r:s[i]=0
var o=e.differences
if(o)for(i in o){var c=o[i]
r=a.indexOf(c),r>=0?s[i]=r:s[i]=0}return s}function X(e){return e===Ra}var J="undefined"==typeof window?this:window,W=("undefined"==typeof window,[.001,0,0,.001,0,0]),V={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},K={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},Y={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},Z={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},Q={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},$={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},ee={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10}
J.PDFJS||(J.PDFJS={}),J.PDFJS.pdfBug=!1,PDFJS.VERBOSITY_LEVELS={errors:0,warnings:1,infos:5}
var te=PDFJS.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},ae=PDFJS.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"}
PDFJS.isValidUrl=s,PDFJS.shadow=o
var re=PDFJS.LinkTarget={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4}
PDFJS.isExternalLinkTargetSet=c
var ie=PDFJS.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},ne=function(){function e(e,t){this.name="PasswordException",this.message=e,this.code=t}return e.prototype=new Error,e.constructor=e,e}()
PDFJS.PasswordException=ne
var se=function(){function e(e,t){this.name="UnknownErrorException",this.message=e,this.details=t}return e.prototype=new Error,e.constructor=e,e}()
PDFJS.UnknownErrorException=se
var oe=function(){function e(e){this.name="InvalidPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}()
PDFJS.InvalidPDFException=oe
var ce=function(){function e(e){this.name="MissingPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}()
PDFJS.MissingPDFException=ce
var le=function(){function e(e,t){this.name="UnexpectedResponseException",this.message=e,this.status=t}return e.prototype=new Error,e.constructor=e,e}()
PDFJS.UnexpectedResponseException=le
var he=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="NotImplementedException",e.constructor=e,e}(),ue=function(){function e(e,t){this.begin=e,this.end=t,this.message="Missing data ["+e+", "+t+")"}return e.prototype=new Error,e.prototype.name="MissingDataException",e.constructor=e,e}(),fe=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="XRefParseException",e.constructor=e,e}()
Object.defineProperty(PDFJS,"isLittleEndian",{configurable:!0,get:function(){return o(PDFJS,"isLittleEndian",p())}}),Object.defineProperty(PDFJS,"hasCanvasTypedArrays",{configurable:!0,get:function(){return o(PDFJS,"hasCanvasTypedArrays",b())}})
var de=function(){function e(e,t){this.buffer=e,this.byteLength=e.length,this.length=void 0===t?this.byteLength>>2:t,a(this.length)}function t(e){return{get:function(){var t=this.buffer,a=e<<2
return(t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24)>>>0},set:function(t){var a=this.buffer,r=e<<2
a[r]=255&t,a[r+1]=t>>8&255,a[r+2]=t>>16&255,a[r+3]=t>>>24&255}}}function a(a){for(;a>r;)Object.defineProperty(e.prototype,r,t(r)),r++}e.prototype=Object.create(null)
var r=0
return e}(),ge=[1,0,0,1,0,0],me=PDFJS.Util=function(){function e(){}var t=["rgb(",0,",",0,",",0,")"]
return e.makeCssRgb=function(e,a,r){return t[1]=e,t[3]=a,t[5]=r,t.join("")},e.transform=function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},e.applyTransform=function(e,t){var a=e[0]*t[0]+e[1]*t[2]+t[4],r=e[0]*t[1]+e[1]*t[3]+t[5]
return[a,r]},e.applyInverseTransform=function(e,t){var a=t[0]*t[3]-t[1]*t[2],r=(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/a,i=(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/a
return[r,i]},e.getAxialAlignedBoundingBox=function(t,a){var r=e.applyTransform(t,a),i=e.applyTransform(t.slice(2,4),a),n=e.applyTransform([t[0],t[3]],a),s=e.applyTransform([t[2],t[1]],a)
return[Math.min(r[0],i[0],n[0],s[0]),Math.min(r[1],i[1],n[1],s[1]),Math.max(r[0],i[0],n[0],s[0]),Math.max(r[1],i[1],n[1],s[1])]},e.inverseTransform=function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]},e.apply3dTransform=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]},e.singularValueDecompose2dScale=function(e){var t=[e[0],e[2],e[1],e[3]],a=e[0]*t[0]+e[1]*t[2],r=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],n=e[2]*t[1]+e[3]*t[3],s=(a+n)/2,o=Math.sqrt((a+n)*(a+n)-4*(a*n-i*r))/2,c=s+o||1,l=s-o||1
return[Math.sqrt(c),Math.sqrt(l)]},e.normalizeRect=function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t},e.intersect=function(t,a){function r(e,t){return e-t}var i=[t[0],t[2],a[0],a[2]].sort(r),n=[t[1],t[3],a[1],a[3]].sort(r),s=[]
return t=e.normalizeRect(t),a=e.normalizeRect(a),i[0]===t[0]&&i[1]===a[0]||i[0]===a[0]&&i[1]===t[0]?(s[0]=i[1],s[2]=i[2],n[0]===t[1]&&n[1]===a[1]||n[0]===a[1]&&n[1]===t[1]?(s[1]=n[1],s[3]=n[2],s):!1):!1},e.sign=function(e){return 0>e?-1:1},e.appendToArray=function(e,t){Array.prototype.push.apply(e,t)},e.prependToArray=function(e,t){Array.prototype.unshift.apply(e,t)},e.extendObj=function(e,t){for(var a in t)e[a]=t[a]},e.getInheritableProperty=function(e,t){for(;e&&!e.has(t);)e=e.get("Parent")
return e?e.get(t):null},e.inherit=function(e,t,a){e.prototype=Object.create(t.prototype),e.prototype.constructor=e
for(var r in a)e.prototype[r]=a[r]},e.loadScript=function(e,t){var a=document.createElement("script"),r=!1
a.setAttribute("src",e),t&&(a.onload=function(){r||t(),r=!0}),document.getElementsByTagName("head")[0].appendChild(a)},e}(),pe=(PDFJS.PageViewport=function(){function e(e,t,a,r,i,n){this.viewBox=e,this.scale=t,this.rotation=a,this.offsetX=r,this.offsetY=i
var s,o,c,l,h=(e[2]+e[0])/2,u=(e[3]+e[1])/2
switch(a%=360,a=0>a?a+360:a){case 180:s=-1,o=0,c=0,l=1
break
case 90:s=0,o=1,c=1,l=0
break
case 270:s=0,o=-1,c=-1,l=0
break
default:s=1,o=0,c=0,l=-1}n&&(c=-c,l=-l)
var f,d,g,m
0===s?(f=Math.abs(u-e[1])*t+r,d=Math.abs(h-e[0])*t+i,g=Math.abs(e[3]-e[1])*t,m=Math.abs(e[2]-e[0])*t):(f=Math.abs(h-e[0])*t+r,d=Math.abs(u-e[1])*t+i,g=Math.abs(e[2]-e[0])*t,m=Math.abs(e[3]-e[1])*t),this.transform=[s*t,o*t,c*t,l*t,f-s*t*h-c*t*u,d-o*t*h-l*t*u],this.width=g,this.height=m,this.fontScale=t}return e.prototype={clone:function(t){t=t||{}
var a="scale"in t?t.scale:this.scale,r="rotation"in t?t.rotation:this.rotation
return new e(this.viewBox.slice(),a,r,this.offsetX,this.offsetY,t.dontFlip)},convertToViewportPoint:function(e,t){return me.applyTransform([e,t],this.transform)},convertToViewportRectangle:function(e){var t=me.applyTransform([e[0],e[1]],this.transform),a=me.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],a[0],a[1]]},convertToPdfPoint:function(e,t){return me.applyInverseTransform([e,t],this.transform)}},e}(),[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364])
PDFJS.createPromiseCapability=P,function(){function e(e){this._status=a,this._handlers=[]
try{e.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(t){this._reject(t)}}if(J.Promise)return"function"!=typeof J.Promise.all&&(J.Promise.all=function(e){var t,a,r=0,i=[],n=new J.Promise(function(e,r){t=e,a=r})
return e.forEach(function(e,n){r++,e.then(function(e){i[n]=e,r--,0===r&&t(i)},a)}),0===r&&t(i),n}),"function"!=typeof J.Promise.resolve&&(J.Promise.resolve=function(e){return new J.Promise(function(t){t(e)})}),"function"!=typeof J.Promise.reject&&(J.Promise.reject=function(e){return new J.Promise(function(t,a){a(e)})}),void("function"!=typeof J.Promise.prototype["catch"]&&(J.Promise.prototype["catch"]=function(e){return J.Promise.prototype.then(void 0,e)}))
var a=0,r=1,i=2,n=500,s={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(e){e._status!==a&&(this.handlers=this.handlers.concat(e._handlers),e._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var e=1,t=Date.now()+e;this.handlers.length>0;){var a=this.handlers.shift(),n=a.thisPromise._status,s=a.thisPromise._value
try{n===r?"function"==typeof a.onResolve&&(s=a.onResolve(s)):"function"==typeof a.onReject&&(s=a.onReject(s),n=r,a.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(a.thisPromise))}catch(o){n=i,s=o}if(a.nextPromise._updateStatus(n,s),Date.now()>=t)break}return this.handlers.length>0?void setTimeout(this.runHandlers.bind(this),0):void(this.running=!1)},addUnhandledRejection:function(e){this.unhandledRejections.push({promise:e,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(e){e._unhandledRejection=!1
for(var t=0;t<this.unhandledRejections.length;t++)this.unhandledRejections[t].promise===e&&(this.unhandledRejections.splice(t),t--)},scheduleRejectionCheck:function(){this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){this.pendingRejectionCheck=!1
for(var e=Date.now(),a=0;a<this.unhandledRejections.length;a++)if(e-this.unhandledRejections[a].time>n){var r=this.unhandledRejections[a].promise._value,i="Unhandled rejection: "+r
r.stack&&(i+="\n"+r.stack),t(i),this.unhandledRejections.splice(a),a--}this.unhandledRejections.length&&this.scheduleRejectionCheck()}.bind(this),n))}}
e.all=function(t){function a(e){s._status!==i&&(c=[],n(e))}var r,n,s=new e(function(e,t){r=e,n=t}),o=t.length,c=[]
if(0===o)return r(c),s
for(var l=0,h=t.length;h>l;++l){var u=t[l],f=function(e){return function(t){s._status!==i&&(c[e]=t,o--,0===o&&r(c))}}(l)
e.isPromise(u)?u.then(f,a):f(u)}return s},e.isPromise=function(e){return e&&"function"==typeof e.then},e.resolve=function(t){return new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,a){a(t)})},e.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(t,a){if(this._status!==r&&this._status!==i){if(t===r&&e.isPromise(a))return void a.then(this._updateStatus.bind(this,r),this._updateStatus.bind(this,i))
this._status=t,this._value=a,t===i&&0===this._handlers.length&&(this._unhandledRejection=!0,s.addUnhandledRejection(this)),s.scheduleHandlers(this)}},_resolve:function(e){this._updateStatus(r,e)},_reject:function(e){this._updateStatus(i,e)},then:function(t,a){var r=new e(function(e,t){this.resolve=e,this.reject=t})
return this._handlers.push({thisPromise:this,onResolve:t,onReject:a,nextPromise:r}),s.scheduleHandlers(this),r},"catch":function(e){return this.then(void 0,e)}},J.Promise=e}();(function(){function e(e,t,a){for(;e.length<a;)e+=t
return e}function a(){this.started={},this.times=[],this.enabled=!0}return a.prototype={time:function(e){this.enabled&&(e in this.started&&t("Timer is already running for "+e),this.started[e]=Date.now())},timeEnd:function(e){this.enabled&&(e in this.started||t("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])},toString:function(){var t,a,r=this.times,i="",n=0
for(t=0,a=r.length;a>t;++t){var s=r[t].name
s.length>n&&(n=s.length)}for(t=0,a=r.length;a>t;++t){var o=r[t],c=o.end-o.start
i+=e(o.name," ",n)+" "+c+"ms\n"}return i}},a})()
PDFJS.createBlob=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t})
var a=new MozBlobBuilder
return a.append(e),a.getBlob(t)},PDFJS.createObjectURL=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(t,a){if(!PDFJS.disableCreateObjectURL&&"undefined"!=typeof URL&&URL.createObjectURL){var r=PDFJS.createBlob(t,a)
return URL.createObjectURL(r)}for(var i="data:"+a+";base64,",n=0,s=t.length;s>n;n+=3){var o=255&t[n],c=255&t[n+1],l=255&t[n+2],h=o>>2,u=(3&o)<<4|c>>4,f=s>n+1?(15&c)<<2|l>>6:64,d=s>n+2?63&l:64
i+=e[h]+e[u]+e[f]+e[d]}return i}}(),E.prototype={on:function(e,t,a){var i=this.actionHandler
i[e]&&r('There is already an actionName called "'+e+'"'),i[e]=[t,a]},send:function(e,t,a){var r={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t}
this.postMessage(r,a)},sendWithPromise:function(e,t,a){var r=this.callbackIndex++,i={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t,callbackId:r},n=P()
this.callbacksCapabilities[r]=n
try{this.postMessage(i,a)}catch(s){n.reject(s)}return n.promise},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},function(e){function t(e){return void 0!==f[e]}function a(){o.call(this),this._isInvalid=!0}function r(e){return""==e&&a.call(this),e.toLowerCase()}function i(e){var t=e.charCodeAt(0)
return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function n(e){var t=e.charCodeAt(0)
return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function s(e,s,o){function c(e){y.push(e)}var l=s||"scheme start",h=0,u="",b=!1,v=!1,y=[]
e:for(;(e[h-1]!=g||0==h)&&!this._isInvalid;){var k=e[h]
switch(l){case"scheme start":if(!k||!m.test(k)){if(s){c("Invalid scheme.")
break e}u="",l="no scheme"
continue}u+=k.toLowerCase(),l="scheme"
break
case"scheme":if(k&&p.test(k))u+=k.toLowerCase()
else{if(":"!=k){if(s){if(g==k)break e
c("Code point not allowed in scheme: "+k)
break e}u="",h=0,l="no scheme"
continue}if(this._scheme=u,u="",s)break e
t(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&o&&o._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"==k?(this._query="?",l="query"):"#"==k?(this._fragment="#",l="fragment"):g!=k&&"	"!=k&&"\n"!=k&&"\r"!=k&&(this._schemeData+=i(k))
break
case"no scheme":if(o&&t(o._scheme)){l="relative"
continue}c("Missing scheme."),a.call(this)
break
case"relative or authority":if("/"!=k||"/"!=e[h+1]){c("Expected /, got: "+k),l="relative"
continue}l="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=o._scheme),g==k){this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._username=o._username,this._password=o._password
break e}if("/"==k||"\\"==k)"\\"==k&&c("\\ is an invalid code point."),l="relative slash"
else if("?"==k)this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query="?",this._username=o._username,this._password=o._password,l="query"
else{if("#"!=k){var w=e[h+1],x=e[h+2];("file"!=this._scheme||!m.test(k)||":"!=w&&"|"!=w||g!=x&&"/"!=x&&"\\"!=x&&"?"!=x&&"#"!=x)&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password,this._path=o._path.slice(),this._path.pop()),l="relative path"
continue}this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._fragment="#",this._username=o._username,this._password=o._password,l="fragment"}break
case"relative slash":if("/"!=k&&"\\"!=k){"file"!=this._scheme&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password),l="relative path"
continue}"\\"==k&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!=k){c("Expected '/', got: "+k),l="authority ignore slashes"
continue}l="authority second slash"
break
case"authority second slash":if(l="authority ignore slashes","/"!=k){c("Expected '/', got: "+k)
continue}break
case"authority ignore slashes":if("/"!=k&&"\\"!=k){l="authority"
continue}c("Expected authority, got: "+k)
break
case"authority":if("@"==k){b&&(c("@ already seen."),u+="%40"),b=!0
for(var C=0;C<u.length;C++){var S=u[C]
if("	"!=S&&"\n"!=S&&"\r"!=S)if(":"!=S||null!==this._password){var A=i(S)
null!==this._password?this._password+=A:this._username+=A}else this._password=""
else c("Invalid whitespace in authority.")}u=""}else{if(g==k||"/"==k||"\\"==k||"?"==k||"#"==k){h-=u.length,u="",l="host"
continue}u+=k}break
case"file host":if(g==k||"/"==k||"\\"==k||"?"==k||"#"==k){2!=u.length||!m.test(u[0])||":"!=u[1]&&"|"!=u[1]?0==u.length?l="relative path start":(this._host=r.call(this,u),u="",l="relative path start"):l="relative path"
continue}"	"==k||"\n"==k||"\r"==k?c("Invalid whitespace in file host."):u+=k
break
case"host":case"hostname":if(":"!=k||v){if(g==k||"/"==k||"\\"==k||"?"==k||"#"==k){if(this._host=r.call(this,u),u="",l="relative path start",s)break e
continue}"	"!=k&&"\n"!=k&&"\r"!=k?("["==k?v=!0:"]"==k&&(v=!1),u+=k):c("Invalid code point in host/hostname: "+k)}else if(this._host=r.call(this,u),u="",l="port","hostname"==s)break e
break
case"port":if(/[0-9]/.test(k))u+=k
else{if(g==k||"/"==k||"\\"==k||"?"==k||"#"==k||s){if(""!=u){var I=parseInt(u,10)
I!=f[this._scheme]&&(this._port=I+""),u=""}if(s)break e
l="relative path start"
continue}"	"==k||"\n"==k||"\r"==k?c("Invalid code point in port: "+k):a.call(this)}break
case"relative path start":if("\\"==k&&c("'\\' not allowed in path."),l="relative path","/"!=k&&"\\"!=k)continue
break
case"relative path":if(g!=k&&"/"!=k&&"\\"!=k&&(s||"?"!=k&&"#"!=k))"	"!=k&&"\n"!=k&&"\r"!=k&&(u+=i(k))
else{"\\"==k&&c("\\ not allowed in relative path.")
var B;(B=d[u.toLowerCase()])&&(u=B),".."==u?(this._path.pop(),"/"!=k&&"\\"!=k&&this._path.push("")):"."==u&&"/"!=k&&"\\"!=k?this._path.push(""):"."!=u&&("file"==this._scheme&&0==this._path.length&&2==u.length&&m.test(u[0])&&"|"==u[1]&&(u=u[0]+":"),this._path.push(u)),u="","?"==k?(this._query="?",l="query"):"#"==k&&(this._fragment="#",l="fragment")}break
case"query":s||"#"!=k?g!=k&&"	"!=k&&"\n"!=k&&"\r"!=k&&(this._query+=n(k)):(this._fragment="#",l="fragment")
break
case"fragment":g!=k&&"	"!=k&&"\n"!=k&&"\r"!=k&&(this._fragment+=k)}h++}}function o(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,o.call(this)
var a=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,a,null,t)}var l=!1
if("function"==typeof URL&&"origin"in URL.prototype)try{var h=new URL("b","http://a")
h.pathname="c%20d",l="http://a/c%20d"===h.href}catch(u){}if(!l){var f=Object.create(null)
f.ftp=21,f.file=0,f.gopher=70,f.http=80,f.https=443,f.ws=80,f.wss=443
var d=Object.create(null)
d["%2e"]=".",d[".%2e"]="..",d["%2e."]="..",d["%2e%2e"]=".."
var g=void 0,m=/[a-zA-Z]/,p=/[a-zA-Z0-9\+\-\.]/
c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var e=""
return""==this._username&&null==this._password||(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){o.call(this),s.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||s.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),s.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),s.call(this,e,"fragment"))},get origin(){var e
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}}
var b=e.URL
b&&(c.createObjectURL=function(e){return b.createObjectURL.apply(b,arguments)},c.revokeObjectURL=function(e){b.revokeObjectURL(e)}),e.URL=c}}(J)
var be=function(){function e(e,t){this.url=e,t=t||{},this.isHttp=/^https?:/i.test(e),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this.withCredentials=t.withCredentials||!1,this.getXhr=t.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests={},this.loadedRequests={}}function t(e){var t=e.response
if("string"!=typeof t)return t
for(var a=t.length,r=new Uint8Array(a),i=0;a>i;i++)r[i]=255&t.charCodeAt(i)
return r.buffer}var a=200,r=206,i=function(){try{var e=new XMLHttpRequest
return e.open("GET","https://example.com"),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(t){return!1}}()
return e.prototype={requestRange:function(e,t,a){var r={begin:e,end:t}
for(var i in a)r[i]=a[i]
return this.request(r)},requestFull:function(e){return this.request(e)},request:function(e){var t=this.getXhr(),a=this.currXhrId++,r=this.pendingRequests[a]={xhr:t}
t.open("GET",this.url),t.withCredentials=this.withCredentials
for(var n in this.httpHeaders){var s=this.httpHeaders[n]
"undefined"!=typeof s&&t.setRequestHeader(n,s)}if(this.isHttp&&"begin"in e&&"end"in e){var o=e.begin+"-"+(e.end-1)
t.setRequestHeader("Range","bytes="+o),r.expectedStatus=206}else r.expectedStatus=200
var c=i&&!!e.onProgressiveData
return c?(t.responseType="moz-chunked-arraybuffer",r.onProgressiveData=e.onProgressiveData,r.mozChunked=!0):t.responseType="arraybuffer",e.onError&&(t.onerror=function(a){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,a),t.onprogress=this.onProgress.bind(this,a),r.onHeadersReceived=e.onHeadersReceived,r.onDone=e.onDone,r.onError=e.onError,r.onProgress=e.onProgress,t.send(null),a},onProgress:function(e,a){var r=this.pendingRequests[e]
if(r){if(r.mozChunked){var i=t(r.xhr)
r.onProgressiveData(i)}var n=r.onProgress
n&&n(a)}},onStateChange:function(e,i){var n=this.pendingRequests[e]
if(n){var s=n.xhr
if(s.readyState>=2&&n.onHeadersReceived&&(n.onHeadersReceived(),delete n.onHeadersReceived),4===s.readyState&&e in this.pendingRequests){if(delete this.pendingRequests[e],0===s.status&&this.isHttp)return void(n.onError&&n.onError(s.status))
var o=s.status||a,c=o===a&&n.expectedStatus===r
if(!c&&o!==n.expectedStatus)return void(n.onError&&n.onError(s.status))
this.loadedRequests[e]=!0
var l=t(s)
if(o===r){var h=s.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(h),f=parseInt(u[1],10)
n.onDone({begin:f,chunk:l})}else n.onProgressiveData?n.onDone(null):l?n.onDone({begin:0,chunk:l}):n.onError&&n.onError(s.status)}}},hasPendingRequests:function(){for(var e in this.pendingRequests)return!0
return!1},getRequestXhr:function(e){return this.pendingRequests[e].xhr},isStreamingRequest:function(e){return!!this.pendingRequests[e].onProgressiveData},isPendingRequest:function(e){return e in this.pendingRequests},isLoadedRequest:function(e){return e in this.loadedRequests},abortAllRequests:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)},abortRequest:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}},e}(),ve=function(){function e(e,t,a){this.bytes=new Uint8Array(e),this.start=0,this.pos=0,this.end=e,this.chunkSize=t,this.loadedChunks=[],this.numChunksLoaded=0,this.numChunks=Math.ceil(e/t),this.manager=a,this.progressiveDataLength=0,this.lastSuccessfulEnsureByteChunk=-1}return e.prototype={getMissingChunks:function(){for(var e=[],t=0,a=this.numChunks;a>t;++t)this.loadedChunks[t]||e.push(t)
return e},getBaseStreams:function(){return[this]},allChunksLoaded:function(){return this.numChunksLoaded===this.numChunks},onReceiveData:function(e,t){var a=e+t.byteLength
n(e%this.chunkSize===0,"Bad begin offset: "+e)
var r=this.bytes.length
n(a%this.chunkSize===0||a===r,"Bad end offset: "+a),this.bytes.set(new Uint8Array(t),e)
var i,s=this.chunkSize,o=Math.floor(e/s),c=Math.floor((a-1)/s)+1
for(i=o;c>i;++i)this.loadedChunks[i]||(this.loadedChunks[i]=!0,++this.numChunksLoaded)},onReceiveProgressiveData:function(e){var t=this.progressiveDataLength,a=Math.floor(t/this.chunkSize)
this.bytes.set(new Uint8Array(e),t),t+=e.byteLength,this.progressiveDataLength=t
var r,i=t>=this.end?this.numChunks:Math.floor(t/this.chunkSize)
for(r=a;i>r;++r)this.loadedChunks[r]||(this.loadedChunks[r]=!0,++this.numChunksLoaded)},ensureByte:function(e){var t=Math.floor(e/this.chunkSize)
if(t!==this.lastSuccessfulEnsureByteChunk){if(!this.loadedChunks[t])throw new ue(e,e+1)
this.lastSuccessfulEnsureByteChunk=t}},ensureRange:function(e,t){if(!(e>=t||t<=this.progressiveDataLength))for(var a=this.chunkSize,r=Math.floor(e/a),i=Math.floor((t-1)/a)+1,n=r;i>n;++n)if(!this.loadedChunks[n])throw new ue(e,t)},nextEmptyChunk:function(e){for(var t,a=this.numChunks,r=0;a>r;++r)if(t=(e+r)%a,!this.loadedChunks[t])return t
return null},hasChunk:function(e){return!!this.loadedChunks[e]},get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){var e=this.pos
return e>=this.end?-1:(this.ensureByte(e),this.bytes[this.pos++])},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){var e=this.getByte(),t=this.getByte(),a=this.getByte(),r=this.getByte()
return(e<<24)+(t<<16)+(a<<8)+r},getBytes:function(e){var t=this.bytes,a=this.pos,r=this.end
if(!e)return this.ensureRange(a,r),t.subarray(a,r)
var i=a+e
return i>r&&(i=r),this.ensureRange(a,i),this.pos=i,t.subarray(a,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},getByteRange:function(e,t){return this.ensureRange(e,t),this.bytes.subarray(e,t)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(e,t,a){function r(){}this.ensureRange(e,e+t),r.prototype=Object.create(this),r.prototype.getMissingChunks=function(){for(var e=this.chunkSize,t=Math.floor(this.start/e),a=Math.floor((this.end-1)/e)+1,r=[],i=t;a>i;++i)this.loadedChunks[i]||r.push(i)
return r}
var i=new r
return i.pos=i.start=e,i.end=e+t||this.end,i.dict=a,i},isStream:!0},e}(),ye=function(){function e(e,t,a,r){this.stream=new ve(e,t,this),this.length=e,this.chunkSize=t,this.url=a,this.disableAutoFetch=r.disableAutoFetch
var i=this.msgHandler=r.msgHandler
if(r.chunkedViewerLoading)i.on("OnDataRange",this.onReceiveData.bind(this)),i.on("OnDataProgress",this.onProgress.bind(this)),this.sendRequest=function(e,t){i.send("RequestDataRange",{begin:e,end:t})}
else{var n=function(){return new XMLHttpRequest}
this.networkManager=new be(this.url,{getXhr:n,httpHeaders:r.httpHeaders,withCredentials:r.withCredentials}),this.sendRequest=function(e,t){this.networkManager.requestRange(e,t,{onDone:this.onReceiveData.bind(this),onProgress:this.onProgress.bind(this)})}}this.currRequestId=0,this.chunksNeededByRequest={},this.requestsByChunk={},this.promisesByRequest={},this.progressiveDataLength=0,this._loadedStreamCapability=P(),r.initialData&&this.onReceiveData({chunk:r.initialData})}return e.prototype={onLoadedStream:function(){return this._loadedStreamCapability.promise},requestAllChunks:function(){var e=this.stream.getMissingChunks()
return this._requestChunks(e),this._loadedStreamCapability.promise},_requestChunks:function(e){var t,a,r,i=this.currRequestId++
for(this.chunksNeededByRequest[i]=t={},a=0,r=e.length;r>a;a++)this.stream.hasChunk(e[a])||(t[e[a]]=!0)
if(w(t))return Promise.resolve()
var n=P()
this.promisesByRequest[i]=n
var s=[]
for(var o in t)o=0|o,o in this.requestsByChunk||(this.requestsByChunk[o]=[],s.push(o)),this.requestsByChunk[o].push(i)
if(!s.length)return n.promise
var c=this.groupChunks(s)
for(a=0;a<c.length;++a){var l=c[a],h=l.beginChunk*this.chunkSize,u=Math.min(l.endChunk*this.chunkSize,this.length)
this.sendRequest(h,u)}return n.promise},getStream:function(){return this.stream},requestRange:function(e,t){t=Math.min(t,this.length)
for(var a=this.getBeginChunk(e),r=this.getEndChunk(t),i=[],n=a;r>n;++n)i.push(n)
return this._requestChunks(i)},requestRanges:function(e){e=e||[]
for(var t=[],a=0;a<e.length;a++)for(var r=this.getBeginChunk(e[a].begin),i=this.getEndChunk(e[a].end),n=r;i>n;++n)t.indexOf(n)<0&&t.push(n)
return t.sort(function(e,t){return e-t}),this._requestChunks(t)},groupChunks:function(e){for(var t=[],a=-1,r=-1,i=0;i<e.length;++i){var n=e[i]
0>a&&(a=n),r>=0&&r+1!==n&&(t.push({beginChunk:a,endChunk:r+1}),a=n),i+1===e.length&&t.push({beginChunk:a,endChunk:n+1}),r=n}return t},onProgress:function(e){var t=this.stream.numChunksLoaded*this.chunkSize+e.loaded
this.msgHandler.send("DocProgress",{loaded:t,total:this.length})},onReceiveData:function(e){var t=e.chunk,a=void 0===e.begin,r=a?this.progressiveDataLength:e.begin,i=r+t.byteLength,n=Math.floor(r/this.chunkSize),s=i<this.length?Math.floor(i/this.chunkSize):Math.ceil(i/this.chunkSize)
a?(this.stream.onReceiveProgressiveData(t),this.progressiveDataLength=i):this.stream.onReceiveData(r,t),this.stream.allChunksLoaded()&&this._loadedStreamCapability.resolve(this.stream)
var o,c,l=[]
for(t=n;s>t;++t){var h=this.requestsByChunk[t]||[]
for(delete this.requestsByChunk[t],o=0;o<h.length;++o){c=h[o]
var u=this.chunksNeededByRequest[c]
t in u&&delete u[t],w(u)&&l.push(c)}}if(!this.disableAutoFetch&&w(this.requestsByChunk)){var f
if(1===this.stream.numChunksLoaded){var d=this.stream.numChunks-1
this.stream.hasChunk(d)||(f=d)}else f=this.stream.nextEmptyChunk(s)
C(f)&&this._requestChunks([f])}for(o=0;o<l.length;++o){c=l[o]
var g=this.promisesByRequest[c]
delete this.promisesByRequest[c],g.resolve()}this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize,total:this.length})},onError:function(e){this._loadedStreamCapability.reject(e)},getBeginChunk:function(e){var t=Math.floor(e/this.chunkSize)
return t},getEndChunk:function(e){var t=Math.floor((e-1)/this.chunkSize)+1
return t},abort:function(){this.networkManager&&this.networkManager.abortAllRequests()
for(var e in this.promisesByRequest){var t=this.promisesByRequest[e]
t.reject(new Error("Request was aborted"))}}},e}(),ke=function(){function e(){throw new Error("Cannot initialize BaseManagerManager")}return e.prototype={get docId(){return this._docId},onLoadedStream:function(){throw new he},ensureDoc:function(e,t){return this.ensure(this.pdfDocument,e,t)},ensureXRef:function(e,t){return this.ensure(this.pdfDocument.xref,e,t)},ensureCatalog:function(e,t){return this.ensure(this.pdfDocument.catalog,e,t)},getPage:function(e){return this.pdfDocument.getPage(e)},cleanup:function(){return this.pdfDocument.cleanup()},ensure:function(e,t,a){return new he},requestRange:function(e,t){return new he},requestLoadedStream:function(){return new he},sendProgressiveData:function(e){return new he},updatePassword:function(e){this.pdfDocument.xref.password=this.password=e,this._passwordChangedCapability&&this._passwordChangedCapability.resolve()},passwordChanged:function(){return this._passwordChangedCapability=P(),this._passwordChangedCapability.promise},terminate:function(){return new he}},e}(),we=function(){function e(e,t,a){this._docId=e
var r=new Na(t)
this.pdfDocument=new Se(this,r,a),this._loadedStreamCapability=P(),this._loadedStreamCapability.resolve(r)}return me.inherit(e,ke,{ensure:function(e,t,a){return new Promise(function(r,i){try{var n,s=e[t]
n="function"==typeof s?s.apply(e,a):s,r(n)}catch(o){i(o)}})},requestRange:function(e,t){return Promise.resolve()},requestLoadedStream:function(){},onLoadedStream:function(){return this._loadedStreamCapability.promise},terminate:function(){}}),e}(),xe=function(){function e(e,t,a){this._docId=e,this.msgHandler=a
var r={msgHandler:a,httpHeaders:t.httpHeaders,withCredentials:t.withCredentials,chunkedViewerLoading:t.chunkedViewerLoading,disableAutoFetch:t.disableAutoFetch,initialData:t.initialData}
this.streamManager=new ye(t.length,t.rangeChunkSize,t.url,r),this.pdfDocument=new Se(this,this.streamManager.getStream(),t.password)}return me.inherit(e,ke,{ensure:function(e,t,a){var r=this
return new Promise(function(i,n){function s(){try{var o,c=e[t]
o="function"==typeof c?c.apply(e,a):c,i(o)}catch(l){if(!(l instanceof ue))return void n(l)
r.streamManager.requestRange(l.begin,l.end).then(s,n)}}s()})},requestRange:function(e,t){return this.streamManager.requestRange(e,t)},requestLoadedStream:function(){this.streamManager.requestAllChunks()},sendProgressiveData:function(e){this.streamManager.onReceiveData({chunk:e})},onLoadedStream:function(){return this.streamManager.onLoadedStream()},terminate:function(){this.streamManager.abort()}}),e}(),Ce=function(){function e(e,t,a,r,i,n){this.pdfManager=e,this.pageIndex=a,this.pageDict=r,this.xref=t,this.ref=i,this.fontCache=n,this.idCounters={obj:0},this.resourcesPromise=null}var a=[0,0,612,792]
return e.prototype={getPageProp:function(e){return this.pageDict.get(e)},getInheritedPageProp:function(e){for(var a=this.pageDict,r=null,i=0,n=100;a;){var s=a.get(e)
if(s&&(r||(r=[]),r.push(s)),++i>n){t("Page_getInheritedPageProp: maximum loop count exceeded.")
break}a=a.get("Parent")}return r?1===r.length||!T(r[0])||i>n?r[0]:Be.merge(this.xref,r):Be.empty},get content(){return this.getPageProp("Contents")},get resources(){return o(this,"resources",this.getInheritedPageProp("Resources"))},get mediaBox(){var e=this.getInheritedPageProp("MediaBox")
return O(e)&&4===e.length||(e=a),o(this,"mediaBox",e)},get view(){var e=this.mediaBox,t=this.getInheritedPageProp("CropBox")
return O(t)&&4===t.length?(t=me.intersect(t,e),t?o(this,"view",t):o(this,"view",e)):o(this,"view",e)},get rotate(){var e=this.getInheritedPageProp("Rotate")||0
return e%90!==0?e=0:e>=360?e%=360:0>e&&(e=(e%360+360)%360),o(this,"rotate",e)},getContentStream:function(){var e,t=this.content
if(O(t)){var a,r=this.xref,i=t.length,n=[]
for(a=0;i>a;++a)n.push(r.fetchIfRef(t[a]))
e=new Ha(n)}else e=R(t)?t:new er
return e},loadResources:function(e){return this.resourcesPromise||(this.resourcesPromise=this.pdfManager.ensure(this,"resources")),this.resourcesPromise.then(function(){var t=new De(this.resources.map,e,this.xref)
return t.load()}.bind(this))},getOperatorList:function(e,t,a){var r=this,i=this.pdfManager,n=i.ensure(this,"getContentStream",[]),s=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),o=new xt(i,this.xref,e,this.pageIndex,"p"+this.pageIndex+"_",this.idCounters,this.fontCache),c=Promise.all([n,s]),l=c.then(function(i){var n=i[0],s=new St(a,e,r.pageIndex)
return e.send("StartRenderPage",{transparency:o.hasBlendModes(r.resources),pageIndex:r.pageIndex,intent:a}),o.getOperatorList(n,t,r.resources,s).then(function(){return s})}),h=i.ensure(this,"annotations")
return Promise.all([l,h]).then(function(e){var r=e[0],i=e[1]
if(0===i.length)return r.flush(!0),r
var n=je.appendToOperatorList(i,r,o,t,a)
return n.then(function(){return r.flush(!0),r})})},extractTextContent:function(e,t){var a={on:function(){},send:function(){}},r=this,i=this.pdfManager,n=i.ensure(this,"getContentStream",[]),s=this.loadResources(["ExtGState","XObject","Font"]),o=Promise.all([n,s])
return o.then(function(n){var s=n[0],o=new xt(i,r.xref,a,r.pageIndex,"p"+r.pageIndex+"_",r.idCounters,r.fontCache)
return o.getTextContent(s,e,r.resources,null,t)})},getAnnotationsData:function(e){for(var t=this.annotations,a=[],r=0,i=t.length;i>r;++r)(!e||"display"===e&&t[r].viewable||"print"===e&&t[r].printable)&&a.push(t[r].data)
return a},get annotations(){for(var e=[],t=this.getInheritedPageProp("Annots")||[],a=new D,r=0,i=t.length;i>r;++r){var n=t[r],s=a.create(this.xref,n)
s&&e.push(s)}return o(this,"annotations",e)}},e}(),Se=function(){function t(e,t,i){R(t)?a.call(this,e,t,i):L(t)?a.call(this,e,new Na(t),i):r("PDFDocument: Unknown argument type")}function a(e,t,a){n(t.length>0,"stream must have data"),this.pdfManager=e,this.stream=t
var r=new Me(this.stream,a,e)
this.xref=r}function i(e,t,a,r){var i=e.pos,n=e.end,s=[]
i+a>n&&(a=n-i)
for(var o=0;a>o;++o)s.push(String.fromCharCode(e.getByte()))
var c=s.join("")
e.pos=i
var l=r?c.lastIndexOf(t):c.indexOf(t)
return-1===l?!1:(e.pos+=l,!0)}var s=1024,c="\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00",l={get entries(){return o(this,"entries",{Title:A,Author:A,Subject:A,Keywords:A,Creator:A,Producer:A,CreationDate:A,ModDate:A,Trapped:I})}}
return t.prototype={parse:function(t){this.setup(t)
var a=this.catalog.catDict.get("Version")
I(a)&&(this.pdfFormatVersion=a.name)
try{if(this.acroForm=this.catalog.catDict.get("AcroForm"),this.acroForm){this.xfa=this.acroForm.get("XFA")
var r=this.acroForm.get("Fields")
r&&O(r)&&0!==r.length||this.xfa||(this.acroForm=null)}}catch(i){e("Something wrong with AcroForm entry"),this.acroForm=null}},get linearization(){var t=null
if(this.stream.length)try{t=Ea.create(this.stream)}catch(a){if(a instanceof ue)throw a
e(a)}return o(this,"linearization",t)},get startXRef(){var e=this.stream,t=0,a=this.linearization
if(a)e.reset(),i(e,"endobj",1024)&&(t=e.pos+6)
else{for(var r=1024,n=!1,s=e.end;!n&&s>0;)s-=r-"startxref".length,0>s&&(s=0),e.pos=s,n=i(e,"startxref",r,!0)
if(n){e.skip(9)
var c
do c=e.getByte()
while(Pa.isSpace(c))
for(var l="";c>=32&&57>=c;)l+=String.fromCharCode(c),c=e.getByte()
t=parseInt(l,10),isNaN(t)&&(t=0)}}return o(this,"startXRef",t)},get mainXRefEntriesOffset(){var e=0,t=this.linearization
return t&&(e=t.mainXRefEntriesOffset),o(this,"mainXRefEntriesOffset",e)},checkHeader:function(){var e=this.stream
if(e.reset(),i(e,"%PDF-",1024)){e.moveStart()
for(var t,a=12,r="";(t=e.getByte())>32&&!(r.length>=a);)r+=String.fromCharCode(t)
return void(this.pdfFormatVersion||(this.pdfFormatVersion=r.substring(5)))}},parseStartXRef:function(){var e=this.startXRef
this.xref.setStartXRef(e)},setup:function(e){this.xref.parse(e),this.catalog=new Le(this.pdfManager,this.xref)},get numPages(){var e=this.linearization,t=e?e.numPages:this.catalog.numPages
return o(this,"numPages",t)},get documentInfo(){var t,a={PDFFormatVersion:this.pdfFormatVersion,IsAcroFormPresent:!!this.acroForm,IsXFAPresent:!!this.xfa}
try{t=this.xref.trailer.get("Info")}catch(r){e("The document information dictionary is invalid.")}if(t){var i=l.entries
for(var n in i)if(t.has(n)){var s=t.get(n)
i[n](s)?a[n]="string"!=typeof s?s:v(s):e('Bad value in document info for "'+n+'"')}}return o(this,"documentInfo",a)},get fingerprint(){var e,t=this.xref,a="",r=t.trailer.get("ID")
r&&O(r)&&r[0]&&A(r[0])&&r[0]!==c?e=h(r[0]):(this.stream.ensureRange&&this.stream.ensureRange(0,Math.min(s,this.stream.end)),e=ot(this.stream.bytes.subarray(0,s),0,s))
for(var i=0,n=e.length;n>i;i++){var l=e[i].toString(16)
a+=1===l.length?"0"+l:l}return o(this,"fingerprint",a)},getPage:function(e){return this.catalog.getPage(e)},cleanup:function(){return this.catalog.cleanup()}},t}(),Ae=function(){function e(e){this.name=e}e.prototype={}
var t={}
return e.get=function(a){var r=t[a]
return r?r:t[a]=new e(a)},e}(),Ie=function(){function e(e){this.cmd=e}e.prototype={}
var t={}
return e.get=function(a){var r=t[a]
return r?r:t[a]=new e(a)},e}(),Be=function(){function e(e){if(!I(e.Type))return!0
var t=e.Type.name
return r[t]===!0}function t(e){this.map=Object.create(null),this.xref=e,this.objId=null,this.__nonSerializable__=a}var a=function(){return a},r={Background:!0,ExtGState:!0,Halftone:!0,Layout:!0,Mask:!0,Pagination:!0,Printing:!0}
return t.prototype={assignXref:function(e){this.xref=e},get:function(e,t,a){var r,i=this.xref
return"undefined"!=typeof(r=this.map[e])||e in this.map||"undefined"==typeof t?i?i.fetchIfRef(r):r:"undefined"!=typeof(r=this.map[t])||t in this.map||"undefined"==typeof a?i?i.fetchIfRef(r):r:(r=this.map[a]||null,i?i.fetchIfRef(r):r)},getAsync:function(e,t,a){var r,i=this.xref
return"undefined"!=typeof(r=this.map[e])||e in this.map||"undefined"==typeof t?i?i.fetchIfRefAsync(r):Promise.resolve(r):"undefined"!=typeof(r=this.map[t])||t in this.map||"undefined"==typeof a?i?i.fetchIfRefAsync(r):Promise.resolve(r):(r=this.map[a]||null,i?i.fetchIfRefAsync(r):Promise.resolve(r))},getArray:function(e,t,a){var r=this.get(e,t,a),i=this.xref
if(!O(r)||!i)return r
r=r.slice()
for(var n=0,s=r.length;s>n;n++)M(r[n])&&(r[n]=i.fetch(r[n]))
return r},getRaw:function(e){return this.map[e]},getAll:function(){var a,r,i=Object.create(null),n=null
for(a in this.map)r=this.get(a),r instanceof t?e(r)?(n||(n=[])).push({target:i,key:a,obj:r}):i[a]=this.getRaw(a):i[a]=r
if(!n)return i
for(var s=Object.create(null);n.length>0;){var o=n.shift(),c=o.obj,l=c.objId
if(l&&l in s)o.target[o.key]=s[l]
else{var h=Object.create(null)
for(a in c.map)r=c.get(a),r instanceof t?e(r)?n.push({target:h,key:a,obj:r}):h[a]=c.getRaw(a):h[a]=r
l&&(s[l]=h),o.target[o.key]=h}}return i},getKeys:function(){return Object.keys(this.map)},set:function(e,t){this.map[e]=t},has:function(e){return e in this.map},forEach:function(e){for(var t in this.map)e(t,this.get(t))}},t.empty=new t(null),t.merge=function(e,a){for(var r=new t(e),i=0,n=a.length;n>i;i++){var s=a[i]
if(T(s))for(var o in s.map)r.map[o]||(r.map[o]=s.map[o])}return r},t}(),Te=function(){function e(e,t){this.num=e,this.gen=t}return e.prototype={toString:function(){var e=this.num+"R"
return 0!==this.gen&&(e+=this.gen),e}},e}(),Oe=function(){function e(){this.dict={}}return e.prototype={has:function(e){return e.toString()in this.dict},put:function(e){this.dict[e.toString()]=!0},remove:function(e){delete this.dict[e.toString()]}},e}(),Re=function(){function e(){this.dict=Object.create(null)}return e.prototype={get:function(e){return this.dict[e.toString()]},has:function(e){return e.toString()in this.dict},put:function(e,t){this.dict[e.toString()]=t},putAlias:function(e,t){this.dict[e.toString()]=this.get(t)},forEach:function(e,t){for(var a in this.dict)e.call(t,this.dict[a])},clear:function(){this.dict=Object.create(null)}},e}(),Le=function(){function a(e,t){this.pdfManager=e,this.xref=t,this.catDict=t.getCatalogObj(),this.fontCache=new Re,n(T(this.catDict),"catalog object is not a dictionary"),this.pagePromises=[]}return a.prototype={get metadata(){var t=this.catDict.getRaw("Metadata")
if(!M(t))return o(this,"metadata",null)
var a,r=this.xref.encrypt?this.xref.encrypt.encryptMetadata:!1,i=this.xref.fetch(t,!r)
if(i&&T(i.dict)){var n=i.dict.get("Type"),s=i.dict.get("Subtype")
if(I(n)&&I(s)&&"Metadata"===n.name&&"XML"===s.name)try{a=y(l(i.getBytes()))}catch(c){e("Skipping invalid metadata.")}}return o(this,"metadata",a)},get toplevelPagesDict(){var e=this.catDict.get("Pages")
return n(T(e),"invalid top-level pages dictionary"),o(this,"toplevelPagesDict",e)},get documentOutline(){var e=null
try{e=this.readDocumentOutline()}catch(a){if(a instanceof ue)throw a
t("Unable to read document outline")}return o(this,"documentOutline",e)},readDocumentOutline:function(){var e=this.xref,t=this.catDict.get("Outlines"),a={items:[]}
if(T(t)){t=t.getRaw("First")
var i=new Oe
if(M(t)){var n=[{obj:t,parent:a}]
for(i.put(t);n.length>0;){var s=n.shift(),o=e.fetchIfRef(s.obj)
if(null!==o){o.has("Title")||r("Invalid outline item")
var c=o.get("A")
c?c=c.get("D"):o.has("Dest")&&(c=o.getRaw("Dest"),I(c)&&(c=c.name))
var l=o.get("Title"),h={dest:c,title:v(l),color:o.get("C")||[0,0,0],count:o.get("Count"),bold:!!(2&o.get("F")),italic:!!(1&o.get("F")),items:[]}
s.parent.items.push(h),t=o.getRaw("First"),M(t)&&!i.has(t)&&(n.push({obj:t,parent:h}),i.put(t)),t=o.getRaw("Next"),M(t)&&!i.has(t)&&(n.push({obj:t,parent:s.parent}),i.put(t))}}}}return a.items.length>0?a.items:null},get numPages(){var e=this.toplevelPagesDict.get("Count")
return n(C(e),"page count in top level pages object is not an integer"),o(this,"num",e)},get destinations(){function e(e){return T(e)?e.get("D"):e}var t,a,r=this.xref,i={},n=this.catDict.get("Names")
if(n&&n.has("Dests")?t=n.getRaw("Dests"):this.catDict.has("Dests")&&(a=this.catDict.get("Dests")),a&&(n=a,n.forEach(function(t,a){a&&(i[t]=e(a))})),t){var s=new Pe(t,r),c=s.getAll()
for(var l in c)c.hasOwnProperty(l)&&(i[l]=e(c[l]))}return o(this,"destinations",i)},getDestination:function(e){function t(e){return T(e)?e.get("D"):e}var a,r,i=this.xref,n=null,s=this.catDict.get("Names")
if(s&&s.has("Dests")?a=s.getRaw("Dests"):this.catDict.has("Dests")&&(r=this.catDict.get("Dests")),r){var o=r.get(e)
o&&(n=t(o))}if(a){var c=new Pe(a,i)
n=t(c.get(e))}return n},get attachments(){var e,t=this.xref,a=null,r=this.catDict.get("Names")
if(r&&(e=r.getRaw("EmbeddedFiles")),e){var i=new Pe(e,t),n=i.getAll()
for(var s in n)if(n.hasOwnProperty(s)){var c=new Ee(n[s],t)
a||(a={}),a[v(s)]=c.serializable}}return o(this,"attachments",a)},get javaScript(){function e(e){var t=e.get("S")
if(I(t)&&"JavaScript"===t.name){var a=e.get("JS")
if(R(a))a=l(a.getBytes())
else if(!A(a))return
r.push(v(a))}}var t=this.xref,a=this.catDict.get("Names"),r=[]
if(a&&a.has("JavaScript")){var i=new Pe(a.getRaw("JavaScript"),t),n=i.getAll()
for(var s in n)if(n.hasOwnProperty(s)){var c=n[s]
T(c)&&e(c)}}var h=this.catDict.get("OpenAction")
if(T(h,"Action")){var u=h.get("S")
if(I(u)&&"Named"===u.name){var f=h.get("N")
I(f)&&"Print"===f.name&&r.push("print({});")}else e(h)}return o(this,"javaScript",r)},cleanup:function(){var e=[]
return this.fontCache.forEach(function(t){e.push(t)}),Promise.all(e).then(function(e){for(var t=0,a=e.length;a>t;t++){var r=e[t].dict
delete r.translated}this.fontCache.clear()}.bind(this))},getPage:function(e){return e in this.pagePromises||(this.pagePromises[e]=this.getPageDict(e).then(function(t){var a=t[0],r=t[1]
return new Ce(this.pdfManager,this.xref,e,a,r,this.fontCache)}.bind(this))),this.pagePromises[e]},getPageDict:function(e){function t(){for(;r.length;){var c=r.pop()
if(M(c))return void s.fetchAsync(c).then(function(n){return T(n,"Page")||T(n)&&!n.has("Kids")?void(e===i?a.resolve([n,c]):(i++,t())):(r.push(n),void t())},a.reject)
n(T(c),"page dictionary kid reference points to wrong type of object")
var l=c.get("Count")
if(0===l&&(o=!0),e>=i+l)i+=l
else{var h=c.get("Kids")
if(n(O(h),"page dictionary kids object is not an array"),o||l!==h.length)for(var u=h.length-1;u>=0;u--)r.push(h[u])
else r=[h[e-i]],i=e}}a.reject("Page index "+e+" not found.")}var a=P(),r=[this.catDict.getRaw("Pages")],i=0,s=this.xref,o=!1
return t(),a.promise},getPageIndex:function(e){function t(e){var t,a=0
return i.fetchAsync(e).then(function(e){return e?(t=e.getRaw("Parent"),e.getAsync("Parent")):null}).then(function(e){return e?e.getAsync("Kids"):null}).then(function(s){if(!s)return null
for(var o=[],c=!1,l=0;l<s.length;l++){var h=s[l]
if(n(M(h),"kids must be a ref"),h.num===e.num){c=!0
break}o.push(i.fetchAsync(h).then(function(e){if(e.has("Count")){var t=e.get("Count")
a+=t}else a++}))}return c||r("kid ref not found in parents kids"),Promise.all(o).then(function(){return[a,t]})})}function a(e){return t(e).then(function(e){if(!e)return s
var t=e[0],r=e[1]
return s+=t,a(r)})}var i=this.xref,s=0
return a(e)}},a}(),Me=function(){function a(e,t){this.stream=e,this.entries=[],this.xrefstms={},this.cache=[],this.password=t,this.stats={streamTypes:[],fontTypes:[]}}return a.prototype={setStartXRef:function(e){this.startXRefQueue=[e]},parse:function(e){var a
e?(t("Indexing all PDF objects"),a=this.indexObjects()):a=this.readXRef(),a.assignXref(this),this.trailer=a
var i=a.get("Encrypt")
if(i){var n=a.get("ID"),s=n&&n.length?n[0]:""
this.encrypt=new vt(i,s,this.password)}(this.root=a.get("Root"))||r("Invalid root reference")},processXRefTable:function(e){"tableState"in this||(this.tableState={entryNum:0,streamPos:e.lexer.stream.pos,parserBuf1:e.buf1,parserBuf2:e.buf2})
var t=this.readXRefTable(e)
B(t,"trailer")||r("Invalid XRef table: could not find trailer dictionary")
var a=e.getObj()
return!T(a)&&a.dict&&(a=a.dict),T(a)||r("Invalid XRef table: could not parse trailer dictionary"),delete this.tableState,a},readXRefTable:function(e){var t=e.lexer.stream,a=this.tableState
t.pos=a.streamPos,e.buf1=a.parserBuf1,e.buf2=a.parserBuf2
for(var i;;){if(!("firstEntryNum"in a&&"entryCount"in a)){if(B(i=e.getObj(),"trailer"))break
a.firstEntryNum=i,a.entryCount=e.getObj()}var n=a.firstEntryNum,s=a.entryCount
C(n)&&C(s)||r("Invalid XRef table: wrong types in subsection header")
for(var o=a.entryNum;s>o;o++){a.streamPos=t.pos,a.entryNum=o,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2
var c={}
c.offset=e.getObj(),c.gen=e.getObj()
var l=e.getObj()
B(l,"f")?c.free=!0:B(l,"n")&&(c.uncompressed=!0),C(c.offset)&&C(c.gen)&&(c.free||c.uncompressed)||r("Invalid entry in XRef subsection: "+n+", "+s),this.entries[o+n]||(this.entries[o+n]=c)}a.entryNum=0,a.streamPos=t.pos,a.parserBuf1=e.buf1,a.parserBuf2=e.buf2,delete a.firstEntryNum,delete a.entryCount}return 1===n&&this.entries[1]&&this.entries[1].free&&this.entries.shift(),this.entries[0]&&!this.entries[0].free&&r("Invalid XRef table: unexpected first object"),i},processXRefStream:function(e){if(!("streamState"in this)){var t=e.dict,a=t.get("W"),r=t.get("Index")
r||(r=[0,t.get("Size")]),this.streamState={entryRanges:r,byteWidths:a,entryNum:0,streamPos:e.pos}}return this.readXRefStream(e),delete this.streamState,e.dict},readXRefStream:function(e){var t,a,i=this.streamState
e.pos=i.streamPos
for(var n=i.byteWidths,s=n[0],o=n[1],c=n[2],l=i.entryRanges;l.length>0;){var h=l[0],u=l[1]
for(C(h)&&C(u)||r("Invalid XRef range fields: "+h+", "+u),C(s)&&C(o)&&C(c)||r("Invalid XRef entry fields length: "+h+", "+u),t=i.entryNum;u>t;++t){i.entryNum=t,i.streamPos=e.pos
var f=0,d=0,g=0
for(a=0;s>a;++a)f=f<<8|e.getByte()
for(0===s&&(f=1),a=0;o>a;++a)d=d<<8|e.getByte()
for(a=0;c>a;++a)g=g<<8|e.getByte()
var m={}
switch(m.offset=d,m.gen=g,f){case 0:m.free=!0
break
case 1:m.uncompressed=!0
break
case 2:break
default:r("Invalid XRef entry type: "+f)}this.entries[h+t]||(this.entries[h+t]=m)}i.entryNum=0,i.streamPos=e.pos,l.splice(0,2)}},indexObjects:function(){function e(e,t){for(var a="",n=e[t];n!==r&&n!==i&&n!==o&&!(++t>=e.length);)a+=String.fromCharCode(n),n=e[t]
return a}function t(e,t,a){for(var r=a.length,i=e.length,n=0;i>t;){for(var s=0;r>s&&e[t+s]===a[s];)++s
if(s>=r)break
t++,n++}return n}var a=9,r=10,i=13,n=32,s=37,o=60,c=/^(\d+)\s+(\d+)\s+obj\b/,l=new Uint8Array([116,114,97,105,108,101,114]),h=new Uint8Array([115,116,97,114,116,120,114,101,102]),u=new Uint8Array([101,110,100,111,98,106]),f=new Uint8Array([47,88,82,101,102])
this.entries.length=0
var d=this.stream
d.pos=0
for(var g=d.getBytes(),m=d.start,p=g.length,b=[],v=[];p>m;){var y=g[m]
if(y!==a&&y!==r&&y!==i&&y!==n)if(y!==s){var k,w=e(g,m)
if(0!==w.indexOf("xref")||4!==w.length&&!/\s/.test(w[4]))if(k=c.exec(w)){"undefined"==typeof this.entries[k[1]]&&(this.entries[k[1]]={offset:m-d.start,gen:0|k[2],uncompressed:!0})
var x=t(g,m,u)+7,C=g.subarray(m,m+x),S=t(C,0,f)
x>S&&C[S+5]<64&&(v.push(m-d.start),this.xrefstms[m-d.start]=1),m+=x}else 0!==w.indexOf("trailer")||7!==w.length&&!/\s/.test(w[7])?m+=w.length+1:(b.push(m),m+=t(g,m,h))
else m+=t(g,m,l),b.push(m),m+=t(g,m,h)}else do{if(++m,m>=p)break
y=g[m]}while(y!==r&&y!==i)
else++m}var A,I
for(A=0,I=v.length;I>A;++A)this.startXRefQueue.push(v[A]),this.readXRef(!0)
var O
for(A=0,I=b.length;I>A;++A){d.pos=b[A]
var R=new Ma(new Pa(d),!0,this),L=R.getObj()
if(B(L,"trailer")&&T(O=R.getObj())&&O.has("ID"))return O}if(O)return O
throw new oe("Invalid PDF structure")},readXRef:function(t){var a=this.stream
try{for(;this.startXRefQueue.length;){var i=this.startXRefQueue[0]
a.pos=i+a.start
var n,s=new Ma(new Pa(a),!0,this),o=s.getObj()
if(B(o,"xref")){if(n=this.processXRefTable(s),this.topDict||(this.topDict=n),o=n.get("XRefStm"),C(o)){var c=o
c in this.xrefstms||(this.xrefstms[c]=1,this.startXRefQueue.push(c))}}else C(o)?(C(s.getObj())&&B(s.getObj(),"obj")&&R(o=s.getObj())||r("Invalid XRef stream"),n=this.processXRefStream(o),this.topDict||(this.topDict=n),n||r("Failed to read XRef stream")):r("Invalid XRef stream header")
o=n.get("Prev"),C(o)?this.startXRefQueue.push(o):M(o)&&this.startXRefQueue.push(o.num),this.startXRefQueue.shift()}return this.topDict}catch(l){if(l instanceof ue)throw l
e("(while reading XRef): "+l)}if(!t)throw new fe},getEntry:function(e){var t=this.entries[e]
return t&&!t.free&&t.offset?t:null},fetchIfRef:function(e){return M(e)?this.fetch(e):e},fetch:function(e,t){n(M(e),"ref object is not a reference")
var a=e.num
if(a in this.cache){var r=this.cache[a]
return r}var i=this.getEntry(a)
return null===i?this.cache[a]=null:(i=i.uncompressed?this.fetchUncompressed(e,i,t):this.fetchCompressed(i,t),T(i)?i.objId=e.toString():R(i)&&(i.dict.objId=e.toString()),i)},fetchUncompressed:function(e,t,a){var i=e.gen,n=e.num
t.gen!==i&&r("inconsistent generation in XRef")
var s=this.stream.makeSubStream(t.offset+this.stream.start),o=new Ma(new Pa(s),!0,this),c=o.getObj(),l=o.getObj(),h=o.getObj()
if(C(c)&&parseInt(c,10)===n&&C(l)&&parseInt(l,10)===i&&B(h)||r("bad XRef entry"),!B(h,"obj")){if(0===h.cmd.indexOf("obj")&&(n=parseInt(h.cmd.substring(3),10),!isNaN(n)))return n
r("bad XRef entry")}return t=this.encrypt&&!a?o.getObj(this.encrypt.createCipherTransform(n,i)):o.getObj(),R(t)||(this.cache[n]=t),t},fetchCompressed:function(e,t){var a=e.offset,i=this.fetch(new Te(a,0))
R(i)||r("bad ObjStm stream")
var n=i.dict.get("First"),s=i.dict.get("N")
C(n)&&C(s)||r("invalid first and n parameters for ObjStm stream")
var o=new Ma(new Pa(i),!1,this)
o.allowStreams=!0
var c,l,h=[],u=[]
for(c=0;s>c;++c){l=o.getObj(),C(l)||r("invalid object number in the ObjStm stream: "+l),u.push(l)
var f=o.getObj()
C(f)||r("invalid object offset in the ObjStm stream: "+f)}for(c=0;s>c;++c){h.push(o.getObj()),l=u[c]
var d=this.entries[l]
d&&d.offset===a&&d.gen===c&&(this.cache[l]=h[c])}return e=h[e.gen],void 0===e&&r("bad XRef entry for compressed object"),e},fetchIfRefAsync:function(e){return M(e)?this.fetchAsync(e):Promise.resolve(e)},fetchAsync:function(e,t){var a=this.stream.manager,r=this
return new Promise(function i(n,s){try{n(r.fetch(e,t))}catch(o){if(o instanceof ue)return void a.requestRange(o.begin,o.end).then(function(){i(n,s)},s)
s(o)}})},getCatalogObj:function(){return this.root}},a}(),Pe=function(){function e(e,t){this.root=e,this.xref=t}return e.prototype={getAll:function(){var e={}
if(!this.root)return e
var t=this.xref,a=new Oe
a.put(this.root)
for(var i=[this.root];i.length>0;){var n,s,o=t.fetchIfRef(i.shift())
if(T(o))if(o.has("Kids")){var c=o.get("Kids")
for(n=0,s=c.length;s>n;n++){var l=c[n]
a.has(l)&&r("invalid destinations"),i.push(l),a.put(l)}}else{var h=o.get("Names")
if(h)for(n=0,s=h.length;s>n;n+=2)e[t.fetchIfRef(h[n])]=t.fetchIfRef(h[n+1])}}return e},get:function(e){if(!this.root)return null
for(var a,r,i,n=this.xref,s=n.fetchIfRef(this.root),o=0,c=10;s.has("Kids");){if(o++,o>c)return t("Search depth limit for named destionations has been reached."),null
var l=s.get("Kids")
if(!O(l))return null
for(a=0,r=l.length-1;r>=a;){i=a+r>>1
var h=n.fetchIfRef(l[i]),u=h.get("Limits")
if(e<n.fetchIfRef(u[0]))r=i-1
else{if(!(e>n.fetchIfRef(u[1]))){s=n.fetchIfRef(l[i])
break}a=i+1}}if(a>r)return null}var f=s.get("Names")
if(O(f))for(a=0,r=f.length-2;r>=a;)if(i=a+r&-2,e<n.fetchIfRef(f[i]))r=i-2
else{if(!(e>n.fetchIfRef(f[i])))return n.fetchIfRef(f[i+1])
a=i+2}return null}},e}(),Ee=function(){function e(e,a){e&&T(e)&&(this.xref=a,this.root=e,e.has("FS")&&(this.fs=e.get("FS")),this.description=e.has("Desc")?v(e.get("Desc")):"",e.has("RF")&&t("Related file specifications are not supported"),this.contentAvailable=!0,e.has("EF")||(this.contentAvailable=!1,t("Non-embedded file specifications are not supported")))}function a(e){return e.has("UF")?e.get("UF"):e.has("F")?e.get("F"):e.has("Unix")?e.get("Unix"):e.has("Mac")?e.get("Mac"):e.has("DOS")?e.get("DOS"):null}return e.prototype={get filename(){if(!this._filename&&this.root){var e=a(this.root)||"unnamed"
this._filename=v(e).replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\/g,"/")}return this._filename},get content(){if(!this.contentAvailable)return null
!this.contentRef&&this.root&&(this.contentRef=a(this.root.get("EF")))
var e=null
if(this.contentRef){var r=this.xref,i=r.fetchIfRef(this.contentRef)
i&&R(i)?e=i.getBytes():t("Embedded file specification points to non-existing/invalid content")}else t("Embedded file specification does not have a content")
return e},get serializable(){return{filename:this.filename,content:this.content}}},e}(),De=function(){function e(e){return M(e)||T(e)||O(e)||R(e)}function t(t,a){var r
if(T(t)||R(t)){var i
i=T(t)?t.map:t.dict.map
for(var n in i)r=i[n],e(r)&&a.push(r)}else if(O(t))for(var s=0,o=t.length;o>s;s++)r=t[s],e(r)&&a.push(r)}function a(e,t,a){this.obj=e,this.keys=t,this.xref=a,this.refSet=null,this.capability=null}return a.prototype={load:function(){var e=this.keys
if(this.capability=P(),!(this.xref.stream instanceof ve)||0===this.xref.stream.getMissingChunks().length)return this.capability.resolve(),this.capability.promise
this.refSet=new Oe
for(var t=[],a=0;a<e.length;a++)t.push(this.obj[e[a]])
return this._walk(t),this.capability.promise},_walk:function(e){for(var a=[],r=[];e.length;){var i=e.pop()
if(M(i)){if(this.refSet.has(i))continue
try{var n=i
this.refSet.put(n),i=this.xref.fetch(i)}catch(s){if(!(s instanceof ue))throw s
a.push(i),r.push({begin:s.begin,end:s.end})}}if(i&&i.getBaseStreams){for(var o=i.getBaseStreams(),c=!1,l=0;l<o.length;l++){var h=o[l]
h.getMissingChunks&&h.getMissingChunks().length&&(c=!0,r.push({begin:h.start,end:h.end}))}c&&a.push(i)}t(i,e)}return r.length?void this.xref.stream.manager.requestRanges(r).then(function(){e=a
for(var t=0;t<a.length;t++){var r=a[t]
M(r)&&this.refSet.remove(r)}this._walk(e)}.bind(this),this.capability.reject):(this.refSet=null,void this.capability.resolve())}},a}(),qe=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],Fe=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Ue=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"],Ne=22
D.prototype={create:function(e,a){var r=e.fetchIfRef(a)
if(T(r)){var i=r.get("Subtype")
i=I(i)?i.name:""
var n={dict:r,ref:a}
switch(i){case"Link":return new Xe(n)
case"Text":return new Ge(n)
case"Widget":var s=me.getInheritableProperty(r,"FT")
return I(s)&&"Tx"===s.name?new _e(n):new He(n)
default:return t('Unimplemented annotation type "'+i+'", falling back to base annotation'),new je(n)}}}}
var je=function(){function e(e,t,a){var r=me.getAxialAlignedBoundingBox(t,a),i=r[0],n=r[1],s=r[2],o=r[3]
if(i===s||n===o)return[1,0,0,1,e[0],e[1]]
var c=(e[2]-e[0])/(s-i),l=(e[3]-e[1])/(o-n)
return[c,0,0,l,e[0]-i*c,e[1]-n*l]}function t(e){var t=e.get("AP")
if(T(t)){var a,r=t.get("N")
if(T(r)){var i=e.get("AS")
i&&r.has(i.name)&&(a=r.get(i.name))}else a=r
return a}}function a(e){var a=e.dict
this.setFlags(a.get("F")),this.setRectangle(a.get("Rect")),this.setColor(a.get("C")),this.setBorderStyle(a),this.appearance=t(a),this.data={},this.data.id=e.ref.num,this.data.subtype=a.get("Subtype").name,this.data.annotationFlags=this.flags,this.data.rect=this.rectangle,this.data.color=this.color,this.data.borderStyle=this.borderStyle,this.data.hasAppearance=!!this.appearance}return a.prototype={get viewable(){return this.flags?!this.hasFlag(Z.INVISIBLE)&&!this.hasFlag(Z.HIDDEN)&&!this.hasFlag(Z.NOVIEW):!0},get printable(){return this.flags?this.hasFlag(Z.PRINT)&&!this.hasFlag(Z.INVISIBLE)&&!this.hasFlag(Z.HIDDEN):!1},setFlags:function(e){C(e)?this.flags=e:this.flags=0},hasFlag:function(e){return this.flags?(this.flags&e)>0:!1},setRectangle:function(e){O(e)&&4===e.length?this.rectangle=me.normalizeRect(e):this.rectangle=[0,0,0,0]},setColor:function(e){var t=new Uint8Array(3)
if(!O(e))return void(this.color=t)
switch(e.length){case 0:this.color=null
break
case 1:Ye.singletons.gray.getRgbItem(e,0,t,0),this.color=t
break
case 3:Ye.singletons.rgb.getRgbItem(e,0,t,0),this.color=t
break
case 4:Ye.singletons.cmyk.getRgbItem(e,0,t,0),this.color=t
break
default:this.color=t}},setBorderStyle:function(e){if(this.borderStyle=new ze,T(e))if(e.has("BS")){var t,a=e.get("BS");(!a.has("Type")||I(t=a.get("Type"))&&"Border"===t.name)&&(this.borderStyle.setWidth(a.get("W")),this.borderStyle.setStyle(a.get("S")),this.borderStyle.setDashArray(a.get("D")))}else if(e.has("Border")){var r=e.get("Border")
O(r)&&r.length>=3&&(this.borderStyle.setHorizontalCornerRadius(r[0]),this.borderStyle.setVerticalCornerRadius(r[1]),this.borderStyle.setWidth(r[2]),4===r.length&&this.borderStyle.setDashArray(r[3]))}else this.borderStyle.setWidth(0)},loadResources:function(e){return new Promise(function(t,a){this.appearance.dict.getAsync("Resources").then(function(r){if(!r)return void t()
var i=new De(r.map,e,r.xref)
i.load().then(function(){t(r)},a)},a)}.bind(this))},getOperatorList:function(t,a){if(!this.appearance)return Promise.resolve(new St)
var r=this.data,i=this.appearance.dict,n=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),s=i.get("BBox")||[0,0,1,1],o=i.get("Matrix")||[1,0,0,1,0,0],c=e(r.rect,s,o),l=this
return n.then(function(e){var i=new St
return i.addOp(te.beginAnnotation,[r.rect,c,o]),t.getOperatorList(l.appearance,a,e,i).then(function(){return i.addOp(te.endAnnotation,[]),l.appearance.reset(),i})})}},a.appendToOperatorList=function(e,t,a,r,i){for(var n=[],s=0,o=e.length;o>s;++s)("display"===i&&e[s].viewable||"print"===i&&e[s].printable)&&n.push(e[s].getOperatorList(a,r))
return Promise.all(n).then(function(e){t.addOp(te.beginAnnotations,[])
for(var a=0,r=e.length;r>a;++a)t.addOpList(e[a])
t.addOp(te.endAnnotations,[])})},a}(),ze=function(){function e(){this.width=1,this.style=Q.SOLID,this.dashArray=[3],this.horizontalCornerRadius=0,this.verticalCornerRadius=0}return e.prototype={setWidth:function(e){e===(0|e)&&(this.width=e)},setStyle:function(e){if(e)switch(e.name){case"S":this.style=Q.SOLID
break
case"D":this.style=Q.DASHED
break
case"B":this.style=Q.BEVELED
break
case"I":this.style=Q.INSET
break
case"U":this.style=Q.UNDERLINE}},setDashArray:function(e){if(O(e)&&e.length>0){for(var t=!0,a=!0,r=0,i=e.length;i>r;r++){var n=e[r],s=+n>=0
if(!s){t=!1
break}n>0&&(a=!1)}t&&!a?this.dashArray=e:this.width=0}else e&&(this.width=0)},setHorizontalCornerRadius:function(e){e===(0|e)&&(this.horizontalCornerRadius=e)},setVerticalCornerRadius:function(e){e===(0|e)&&(this.verticalCornerRadius=e)}},e}(),He=function(){function e(e){je.call(this,e)
var a=e.dict,r=this.data
r.annotationType=Y.WIDGET,r.fieldValue=v(me.getInheritableProperty(a,"V")||""),r.alternativeText=v(a.get("TU")||""),r.defaultAppearance=me.getInheritableProperty(a,"DA")||""
var i=me.getInheritableProperty(a,"FT")
r.fieldType=I(i)?i.name:"",r.fieldFlags=me.getInheritableProperty(a,"Ff")||0,this.fieldResources=me.getInheritableProperty(a,"DR")||Be.empty,"Sig"===r.fieldType&&(t("unimplemented annotation type: Widget signature"),this.setFlags(Z.HIDDEN))
for(var n=[],s=a,o=e.ref;s;){var c=s.get("Parent"),l=s.getRaw("Parent"),h=s.get("T")
if(h)n.unshift(v(h))
else if(c&&o){var u,f,d=c.get("Kids")
for(u=0,f=d.length;f>u;u++){var g=d[u]
if(g.num===o.num&&g.gen===o.gen)break}n.unshift("`"+u)}s=c,o=l}r.fullName=n.join(".")}return me.inherit(e,je,{}),e}(),_e=function(){function e(e){He.call(this,e),this.data.textAlignment=me.getInheritableProperty(e.dict,"Q"),this.data.hasHtml=!this.data.hasAppearance&&!!this.data.fieldValue}return me.inherit(e,He,{getOperatorList:function(e,t){if(this.appearance)return je.prototype.getOperatorList.call(this,e,t)
var a=new St,r=this.data
if(!r.defaultAppearance)return Promise.resolve(a)
var i=new Na(h(r.defaultAppearance))
return e.getOperatorList(i,t,this.fieldResources,a).then(function(){return a})}}),e}(),Ge=function(){function e(e){je.call(this,e)
var t=e.dict,a=this.data,r=t.get("Contents"),i=t.get("T")
a.annotationType=Y.TEXT,a.content=v(r||""),a.title=v(i||""),a.hasHtml=!0,a.hasAppearance?a.name="NoIcon":(a.rect[1]=a.rect[3]-Ne,a.rect[2]=a.rect[0]+Ne,a.name=t.has("Name")?t.get("Name").name:"Note"),t.has("C")&&(a.hasBgColor=!0)}return me.inherit(e,je,{}),e}(),Xe=function(){function e(e){je.call(this,e)
var r=e.dict,i=this.data
i.annotationType=Y.LINK,i.hasHtml=!0
var n=r.get("A")
if(n&&T(n)){var o=n.get("S").name
if("URI"===o){var c=n.get("URI")
I(c)?c="/"+c.name:c&&(c=a(c)),s(c,!1)||(c="")
try{i.url=y(c)}catch(l){i.url=c}}else if("GoTo"===o)i.dest=n.get("D")
else if("GoToR"===o){var h=n.get("F")
T(h)&&(c=h.get("F")||""),s(c,!1)||(c=""),i.url=c,i.dest=n.get("D")}else"Named"===o?i.action=n.get("N").name:t("unrecognized link type: "+o)}else if(r.has("Dest")){var u=r.get("Dest")
i.dest=I(u)?u.name:u}}function a(e){return e&&0===e.indexOf("www.")?"http://"+e:e}return me.inherit(e,je,{}),e}(),Je=function(){var t=0,a=2,i=3,n=4
return{getSampleArray:function(e,t,a,r){var i,n,s=1
for(i=0,n=e.length;n>i;i++)s*=e[i]
s*=t
var o=new Array(s),c=0,l=0,h=1/(Math.pow(2,a)-1),u=r.getBytes((s*a+7)/8),f=0
for(i=0;s>i;i++){for(;a>c;)l<<=8,l|=u[f++],c+=8
c-=a,o[i]=(l>>c)*h,l&=(1<<c)-1}return o},getIR:function(e,t){var a=t.dict
a||(a=t)
var i=[this.constructSampled,null,this.constructInterpolated,this.constructStiched,this.constructPostScript],n=a.get("FunctionType"),s=i[n]
return s||r("Unknown type of function"),s.call(this,t,a,e)},fromIR:function(e){var r=e[0]
switch(r){case t:return this.constructSampledFromIR(e)
case a:return this.constructInterpolatedFromIR(e)
case i:return this.constructStichedFromIR(e)
default:return this.constructPostScriptFromIR(e)}},parse:function(e,t){var a=this.getIR(e,t)
return this.fromIR(a)},parseArray:function(e,t){if(!O(t))return this.parse(e,t)
for(var a=[],r=0,i=t.length;i>r;r++){var n=e.fetchIfRef(t[r])
a.push(Je.parse(e,n))}return function(e,t,r,i){for(var n=0,s=a.length;s>n;n++)a[n](e,t,r,i+n)}},constructSampled:function(a,i){function n(e){for(var t=e.length,a=[],r=0,i=0;t>i;i+=2)a[r]=[e[i],e[i+1]],++r
return a}var s=i.get("Domain"),o=i.get("Range")
s&&o||r("No domain or range")
var c=s.length/2,l=o.length/2
s=n(s),o=n(o)
var h=i.get("Size"),u=i.get("BitsPerSample"),f=i.get("Order")||1
1!==f&&e("No support for cubic spline interpolation: "+f)
var d=i.get("Encode")
if(!d){d=[]
for(var g=0;c>g;++g)d.push(0),d.push(h[g]-1)}d=n(d)
var m=i.get("Decode")
m=m?n(m):o
var p=this.getSampleArray(h,l,u,a)
return[t,c,s,d,m,p,h,l,Math.pow(2,u)-1,o]},constructSampledFromIR:function(e){function t(e,t,a,r,i){return r+(e-t)*((i-r)/(a-t))}return function(a,r,i,n){var s,o,c=e[1],l=e[2],h=e[3],u=e[4],f=e[5],d=e[6],g=e[7],m=e[9],p=1<<c,b=new Float64Array(p),v=new Uint32Array(p)
for(o=0;p>o;o++)b[o]=1
var y=g,k=1
for(s=0;c>s;++s){var w=l[s][0],x=l[s][1],C=Math.min(Math.max(a[r+s],w),x),S=t(C,w,x,h[s][0],h[s][1]),A=d[s]
S=Math.min(Math.max(S,0),A-1)
var I=A-1>S?Math.floor(S):S-1,B=I+1-S,T=S-I,O=I*y,R=O+y
for(o=0;p>o;o++)o&k?(b[o]*=T,v[o]+=R):(b[o]*=B,v[o]+=O)
y*=A,k<<=1}for(o=0;g>o;++o){var L=0
for(s=0;p>s;s++)L+=f[v[s]+o]*b[s]
L=t(L,0,1,u[o][0],u[o][1]),i[n+o]=Math.min(Math.max(L,m[o][0]),m[o][1])}}},constructInterpolated:function(e,t){var i=t.get("C0")||[0],n=t.get("C1")||[1],s=t.get("N")
O(i)&&O(n)||r("Illegal dictionary for interpolated function")
for(var o=i.length,c=[],l=0;o>l;++l)c.push(n[l]-i[l])
return[a,i,c,s]},constructInterpolatedFromIR:function(e){var t=e[1],a=e[2],r=e[3],i=a.length
return function(e,n,s,o){for(var c=1===r?e[n]:Math.pow(e[n],r),l=0;i>l;++l)s[o+l]=t[l]+c*a[l]}},constructStiched:function(e,t,a){var n=t.get("Domain")
n||r("No domain")
var s=n.length/2
1!==s&&r("Bad domain for stiched function")
for(var o=t.get("Functions"),c=[],l=0,h=o.length;h>l;++l)c.push(Je.getIR(a,a.fetchIfRef(o[l])))
var u=t.get("Bounds"),f=t.get("Encode")
return[i,n,u,f,c]},constructStichedFromIR:function(e){for(var t=e[1],a=e[2],r=e[3],i=e[4],n=[],s=new Float32Array(1),o=0,c=i.length;c>o;o++)n.push(Je.fromIR(i[o]))
return function(e,i,o,c){for(var l=function(e,t,a){return e>a?e=a:t>e&&(e=t),e},h=l(e[i],t[0],t[1]),u=0,f=a.length;f>u&&!(h<a[u]);++u);var d=t[0]
u>0&&(d=a[u-1])
var g=t[1]
u<a.length&&(g=a[u])
var m=r[2*u],p=r[2*u+1]
s[0]=d===g?m:m+(h-d)*(p-m)/(g-d),n[u](s,0,o,c)}},constructPostScript:function(e,t,a){var i=t.get("Domain"),s=t.get("Range")
i||r("No domain."),s||r("No range.")
var o=new Ua(e),c=new Da(o),l=c.parse()
return[n,i,s,l]},constructPostScriptFromIR:function(t){var a=t[1],r=t[2],i=t[3],n=(new Ke).compile(i,a,r)
if(n)return new Function("src","srcOffset","dest","destOffset",n)
e("Unable to compile PS function")
var s=r.length>>1,o=a.length>>1,c=new Ve(i),l={},h=8192,u=h,f=new Float32Array(o)
return function(e,t,a,i){var n,h,d="",g=f
for(n=0;o>n;n++)h=e[t+n],g[n]=h,d+=h+"_"
var m=l[d]
if(void 0!==m)return void a.set(m,i)
var p=new Float32Array(s),b=c.execute(g),v=b.length-s
for(n=0;s>n;n++){h=b[v+n]
var y=r[2*n]
y>h?h=y:(y=r[2*n+1],h>y&&(h=y)),p[n]=h}u>0&&(u--,l[d]=p),a.set(p,i)}}}}(),We=function(){function e(e){this.stack=e?Array.prototype.slice.call(e,0):[]}var t=100
return e.prototype={push:function(e){this.stack.length>=t&&r("PostScript function stack overflow."),this.stack.push(e)},pop:function(){return this.stack.length<=0&&r("PostScript function stack underflow."),this.stack.pop()},copy:function(e){this.stack.length+e>=t&&r("PostScript function stack overflow.")
for(var a=this.stack,i=a.length-e,n=e-1;n>=0;n--,i++)a.push(a[i])},index:function(e){this.push(this.stack[this.stack.length-e-1])},roll:function(e,t){var a,r,i,n=this.stack,s=n.length-e,o=n.length-1,c=s+(t-Math.floor(t/e)*e)
for(a=s,r=o;r>a;a++,r--)i=n[a],n[a]=n[r],n[r]=i
for(a=s,r=c-1;r>a;a++,r--)i=n[a],n[a]=n[r],n[r]=i
for(a=c,r=o;r>a;a++,r--)i=n[a],n[a]=n[r],n[r]=i}},e}(),Ve=function(){function e(e){this.operators=e}return e.prototype={execute:function(e){for(var t,a,i,n=new We(e),s=0,o=this.operators,c=o.length;c>s;)if(t=o[s++],"number"!=typeof t)switch(t){case"jz":i=n.pop(),a=n.pop(),a||(s=i)
break
case"j":a=n.pop(),s=a
break
case"abs":a=n.pop(),n.push(Math.abs(a))
break
case"add":i=n.pop(),a=n.pop(),n.push(a+i)
break
case"and":i=n.pop(),a=n.pop(),x(a)&&x(i)?n.push(a&&i):n.push(a&i)
break
case"atan":a=n.pop(),n.push(Math.atan(a))
break
case"bitshift":i=n.pop(),a=n.pop(),a>0?n.push(a<<i):n.push(a>>i)
break
case"ceiling":a=n.pop(),n.push(Math.ceil(a))
break
case"copy":a=n.pop(),n.copy(a)
break
case"cos":a=n.pop(),n.push(Math.cos(a))
break
case"cvi":a=0|n.pop(),n.push(a)
break
case"cvr":break
case"div":i=n.pop(),a=n.pop(),n.push(a/i)
break
case"dup":n.copy(1)
break
case"eq":i=n.pop(),a=n.pop(),n.push(a===i)
break
case"exch":n.roll(2,1)
break
case"exp":i=n.pop(),a=n.pop(),n.push(Math.pow(a,i))
break
case"false":n.push(!1)
break
case"floor":a=n.pop(),n.push(Math.floor(a))
break
case"ge":i=n.pop(),a=n.pop(),n.push(a>=i)
break
case"gt":i=n.pop(),a=n.pop(),n.push(a>i)
break
case"idiv":i=n.pop(),a=n.pop(),n.push(a/i|0)
break
case"index":a=n.pop(),n.index(a)
break
case"le":i=n.pop(),a=n.pop(),n.push(i>=a)
break
case"ln":a=n.pop(),n.push(Math.log(a))
break
case"log":a=n.pop(),n.push(Math.log(a)/Math.LN10)
break
case"lt":i=n.pop(),a=n.pop(),n.push(i>a)
break
case"mod":i=n.pop(),a=n.pop(),n.push(a%i)
break
case"mul":i=n.pop(),a=n.pop(),n.push(a*i)
break
case"ne":i=n.pop(),a=n.pop(),n.push(a!==i)
break
case"neg":a=n.pop(),n.push(-a)
break
case"not":a=n.pop(),x(a)?n.push(!a):n.push(~a)
break
case"or":i=n.pop(),a=n.pop(),x(a)&&x(i)?n.push(a||i):n.push(a|i)
break
case"pop":n.pop()
break
case"roll":i=n.pop(),a=n.pop(),n.roll(a,i)
break
case"round":a=n.pop(),n.push(Math.round(a))
break
case"sin":a=n.pop(),n.push(Math.sin(a))
break
case"sqrt":a=n.pop(),n.push(Math.sqrt(a))
break
case"sub":i=n.pop(),a=n.pop(),n.push(a-i)
break
case"true":n.push(!0)
break
case"truncate":a=n.pop(),a=0>a?Math.ceil(a):Math.floor(a),n.push(a)
break
case"xor":i=n.pop(),a=n.pop(),x(a)&&x(i)?n.push(a!==i):n.push(a^i)
break
default:r("Unknown operator "+t)}else n.push(t)
return n.stack}},e}(),Ke=function(){function e(e){this.type=e}function t(t,a,r){e.call(this,"args"),this.index=t,this.min=a,this.max=r}function a(t){e.call(this,"literal"),this.number=t,this.min=t,this.max=t}function r(t,a,r,i,n){e.call(this,"binary"),this.op=t,this.arg1=a,this.arg2=r,this.min=i,this.max=n}function i(t,a){e.call(this,"max"),this.arg=t,this.min=t.min,this.max=a}function n(t,a,r){e.call(this,"var"),this.index=t,this.min=a,this.max=r}function s(t,a){e.call(this,"definition"),this.variable=t,this.arg=a}function o(){this.parts=[]}function c(e,t){return"literal"===t.type&&0===t.number?e:"literal"===e.type&&0===e.number?t:"literal"===t.type&&"literal"===e.type?new a(e.number+t.number):new r("+",e,t,e.min+t.min,e.max+t.max)}function l(e,t){if("literal"===t.type){if(0===t.number)return new a(0)
if(1===t.number)return e
if("literal"===e.type)return new a(e.number*t.number)}if("literal"===e.type){if(0===e.number)return new a(0)
if(1===e.number)return t}var i=Math.min(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max),n=Math.max(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max)
return new r("*",e,t,i,n)}function h(e,t){if("literal"===t.type){if(0===t.number)return e
if("literal"===e.type)return new a(e.number-t.number)}return"binary"===t.type&&"-"===t.op&&"literal"===e.type&&1===e.number&&"literal"===t.arg1.type&&1===t.arg1.number?t.arg2:new r("-",e,t,e.min-t.max,e.max-t.min)}function u(e,t){return e.min>=t?new a(t):e.max<=t?e:new i(e,t)}function f(){}return e.prototype.visit=function(e){throw new Error("abstract method")},t.prototype=Object.create(e.prototype),t.prototype.visit=function(e){e.visitArgument(this)},a.prototype=Object.create(e.prototype),a.prototype.visit=function(e){e.visitLiteral(this)},r.prototype=Object.create(e.prototype),r.prototype.visit=function(e){e.visitBinaryOperation(this)},i.prototype=Object.create(e.prototype),i.prototype.visit=function(e){e.visitMin(this)},n.prototype=Object.create(e.prototype),n.prototype.visit=function(e){e.visitVariable(this)},s.prototype=Object.create(e.prototype),s.prototype.visit=function(e){e.visitVariableDefinition(this)},o.prototype={visitArgument:function(e){this.parts.push("Math.max(",e.min,", Math.min(",e.max,", src[srcOffset + ",e.index,"]))")},visitVariable:function(e){this.parts.push("v",e.index)},visitLiteral:function(e){this.parts.push(e.number)},visitBinaryOperation:function(e){this.parts.push("("),e.arg1.visit(this),this.parts.push(" ",e.op," "),e.arg2.visit(this),this.parts.push(")")},visitVariableDefinition:function(e){this.parts.push("var "),e.variable.visit(this),this.parts.push(" = "),e.arg.visit(this),this.parts.push(";")},visitMin:function(e){this.parts.push("Math.min("),e.arg.visit(this),this.parts.push(", ",e.max,")")},toString:function(){return this.parts.join("")}},f.prototype={compile:function(e,r,i){var f,d,g,m,p,b,v,y,k,w,x=[],C=[],S=r.length>>1,A=i.length>>1,I=0
for(f=0;S>f;f++)x.push(new t(f,r[2*f],r[2*f+1]))
for(f=0,d=e.length;d>f;f++)if(w=e[f],"number"!=typeof w)switch(w){case"add":if(x.length<2)return null
b=x.pop(),p=x.pop(),x.push(c(p,b))
break
case"cvr":if(x.length<1)return null
break
case"mul":if(x.length<2)return null
b=x.pop(),p=x.pop(),x.push(l(p,b))
break
case"sub":if(x.length<2)return null
b=x.pop(),p=x.pop(),x.push(h(p,b))
break
case"exch":if(x.length<2)return null
v=x.pop(),y=x.pop(),x.push(v,y)
break
case"pop":if(x.length<1)return null
x.pop()
break
case"index":if(x.length<1)return null
if(p=x.pop(),"literal"!==p.type)return null
if(g=p.number,0>g||(0|g)!==g||x.length<g)return null
if(v=x[x.length-g-1],"literal"===v.type||"var"===v.type){x.push(v)
break}k=new n(I++,v.min,v.max),x[x.length-g-1]=k,x.push(k),C.push(new s(k,v))
break
case"dup":if(x.length<1)return null
if("number"==typeof e[f+1]&&"gt"===e[f+2]&&e[f+3]===f+7&&"jz"===e[f+4]&&"pop"===e[f+5]&&e[f+6]===e[f+1]){p=x.pop(),x.push(u(p,e[f+1])),f+=6
break}if(v=x[x.length-1],"literal"===v.type||"var"===v.type){x.push(v)
break}k=new n(I++,v.min,v.max),x[x.length-1]=k,x.push(k),C.push(new s(k,v))
break
case"roll":if(x.length<2)return null
if(b=x.pop(),p=x.pop(),"literal"!==b.type||"literal"!==p.type)return null
if(m=b.number,g=p.number,0>=g||(0|g)!==g||(0|m)!==m||x.length<g)return null
if(m=(m%g+g)%g,0===m)break
Array.prototype.push.apply(x,x.splice(x.length-g,g-m))
break
default:return null}else x.push(new a(w))
if(x.length!==A)return null
var B=[]
return C.forEach(function(e){var t=new o
e.visit(t),B.push(t.toString())}),x.forEach(function(e,t){var a=new o
e.visit(a)
var r=i[2*t],n=i[2*t+1],s=[a.toString()]
r>e.min&&(s.unshift("Math.max(",r,", "),s.push(")")),n<e.max&&(s.unshift("Math.min(",n,", "),s.push(")")),s.unshift("dest[destOffset + ",t,"] = "),s.push(";"),B.push(s.join(""))}),B.join("\n")}},f}(),Ye=function(){function e(){r("should not call ColorSpace constructor")}return e.prototype={getRgb:function(e,t){var a=new Uint8Array(3)
return this.getRgbItem(e,t,a,0),a},getRgbItem:function(e,t,a,i){r("Should not call ColorSpace.getRgbItem")},getRgbBuffer:function(e,t,a,i,n,s,o){r("Should not call ColorSpace.getRgbBuffer")},getOutputLength:function(e,t){r("Should not call ColorSpace.getOutputLength")},isPassthrough:function(e){return!1},fillRgb:function(e,t,a,r,i,n,s,o,c){var l,h,u=t*a,f=null,d=1<<s,g=a!==i||t!==r
if(this.isPassthrough(s))f=o
else if(1===this.numComps&&u>d&&"DeviceGray"!==this.name&&"DeviceRGB"!==this.name){var m,p=8>=s?new Uint8Array(d):new Uint16Array(d)
for(l=0;d>l;l++)p[l]=l
var b=new Uint8Array(3*d)
this.getRgbBuffer(p,0,d,b,0,s,0)
var v,y
if(g)for(f=new Uint8Array(3*u),y=0,l=0;u>l;++l)m=3*o[l],f[y++]=b[m],f[y++]=b[m+1],f[y++]=b[m+2]
else for(v=0,l=0;u>l;++l)m=3*o[l],e[v++]=b[m],e[v++]=b[m+1],e[v++]=b[m+2],v+=c}else g?(f=new Uint8Array(3*u),this.getRgbBuffer(o,0,u,f,0,s,0)):this.getRgbBuffer(o,0,r*n,e,0,s,c)
if(f)if(g)Ta.resize(f,s,3,t,a,r,i,e,c)
else for(y=0,v=0,l=0,h=r*n;h>l;l++)e[v++]=f[y++],e[v++]=f[y++],e[v++]=f[y++],v+=c},usesZeroToOneRange:!0},e.parse=function(t,a,r){var i=e.parseToIR(t,a,r)
return i instanceof Ze?i:e.fromIR(i)},e.fromIR=function(t){var a,i,n,s=O(t)?t[0]:t
switch(s){case"DeviceGrayCS":return this.singletons.gray
case"DeviceRgbCS":return this.singletons.rgb
case"DeviceCmykCS":return this.singletons.cmyk
case"CalGrayCS":return a=t[1].WhitePoint,i=t[1].BlackPoint,n=t[1].Gamma,new rt(a,i,n)
case"CalRGBCS":a=t[1].WhitePoint,i=t[1].BlackPoint,n=t[1].Gamma
var o=t[1].Matrix
return new it(a,i,n,o)
case"PatternCS":var c=t[1]
return c&&(c=e.fromIR(c)),new Qe(c)
case"IndexedCS":var l=t[1],h=t[2],u=t[3]
return new $e(e.fromIR(l),h,u)
case"AlternateCS":var f=t[1],d=t[2],g=t[3]
return new Ze(f,e.fromIR(d),Je.fromIR(g))
case"LabCS":a=t[1].WhitePoint,i=t[1].BlackPoint
var m=t[1].Range
return new nt(a,i,m)
default:r("Unknown name "+s)}return null},e.parseToIR=function(a,i,n){if(I(a)){var s=n.get("ColorSpace")
if(T(s)){var o=s.get(a.name)
o&&(a=o)}}a=i.fetchIfRef(a)
var c
if(I(a))switch(c=a.name,this.mode=c,c){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"Pattern":return["PatternCS",null]
default:r("unrecognized colorspace "+c)}else if(O(a)){c=i.fetchIfRef(a[0]).name,this.mode=c
var l,h,u
switch(c){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"CalGray":return h=i.fetchIfRef(a[1]).getAll(),["CalGrayCS",h]
case"CalRGB":return h=i.fetchIfRef(a[1]).getAll(),["CalRGBCS",h]
case"ICCBased":var f=i.fetchIfRef(a[1]),d=f.dict
if(l=d.get("N"),u=d.get("Alternate")){var g=e.parseToIR(u,i,n),m=e.fromIR(g)
if(m.numComps===l)return g
t("ICCBased color space: Ignoring incorrect /Alternate entry.")}if(1===l)return"DeviceGrayCS"
if(3===l)return"DeviceRgbCS"
if(4===l)return"DeviceCmykCS"
break
case"Pattern":var p=a[1]||null
return p&&(p=e.parseToIR(p,i,n)),["PatternCS",p]
case"Indexed":case"I":var b=e.parseToIR(a[1],i,n),v=i.fetchIfRef(a[2])+1,y=i.fetchIfRef(a[3])
return R(y)&&(y=y.getBytes()),["IndexedCS",b,v,y]
case"Separation":case"DeviceN":var k=i.fetchIfRef(a[1])
l=1,I(k)?l=1:O(k)&&(l=k.length),u=e.parseToIR(a[2],i,n)
var w=Je.getIR(i,i.fetchIfRef(a[3]))
return["AlternateCS",l,u,w]
case"Lab":return h=i.fetchIfRef(a[1]).getAll(),["LabCS",h]
default:r('unimplemented color space object "'+c+'"')}}else r('unrecognized color space object: "'+a+'"')
return null},e.isDefaultDecode=function(e,a){if(!O(e))return!0
if(2*a!==e.length)return t("The decode map is not the correct length"),!0
for(var r=0,i=e.length;i>r;r+=2)if(0!==e[r]||1!==e[r+1])return!1
return!0},e.singletons={get gray(){return o(this,"gray",new et)},get rgb(){return o(this,"rgb",new tt)},get cmyk(){return o(this,"cmyk",new at)}},e}(),Ze=function(){function e(e,t,a){this.name="Alternate",this.numComps=e,this.defaultColor=new Float32Array(e)
for(var r=0;e>r;++r)this.defaultColor[r]=1
this.base=t,this.tintFn=a,this.tmpBuf=new Float32Array(t.numComps)}return e.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=this.tmpBuf
this.tintFn(e,t,i,0),this.base.getRgbItem(i,0,a,r)},getRgbBuffer:function(e,t,a,r,i,n,s){var o,c,l=this.tintFn,h=this.base,u=1/((1<<n)-1),f=h.numComps,d=h.usesZeroToOneRange,g=(h.isPassthrough(8)||!d)&&0===s,m=g?i:0,p=g?r:new Uint8Array(f*a),b=this.numComps,v=new Float32Array(b),y=new Float32Array(f)
if(d)for(o=0;a>o;o++){for(c=0;b>c;c++)v[c]=e[t++]*u
for(l(v,0,y,0),c=0;f>c;c++)p[m++]=255*y[c]}else for(o=0;a>o;o++){for(c=0;b>c;c++)v[c]=e[t++]*u
l(v,0,y,0),h.getRgbItem(y,0,p,m),m+=f}g||h.getRgbBuffer(p,0,a,r,i,8,s)},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps/this.numComps,t)},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),Qe=function(){function e(e){this.name="Pattern",this.base=e}return e.prototype={},e}(),$e=function(){function e(e,t,a){this.name="Indexed",this.numComps=1,this.defaultColor=new Uint8Array([0]),this.base=e,this.highVal=t
var i,n=e.numComps,s=n*t
if(R(a)){i=new Uint8Array(s)
var o=a.getBytes(s)
i.set(o)}else if(A(a)){i=new Uint8Array(s)
for(var c=0;s>c;++c)i[c]=a.charCodeAt(c)}else a instanceof Uint8Array||a instanceof Array?i=a:r("Unrecognized lookup table: "+a)
this.lookup=i}return e.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=this.base.numComps,n=e[t]*i
this.base.getRgbItem(this.lookup,n,a,r)},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=this.base,c=o.numComps,l=o.getOutputLength(c,s),h=this.lookup,u=0;a>u;++u){var f=e[t++]*c
o.getRgbBuffer(h,f,1,r,i,8,s),i+=l}},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps,t)},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!0},e}(),et=function(){function e(){this.name="DeviceGray",this.numComps=1,this.defaultColor=new Float32Array([0])}return e.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=255*e[t]|0
i=0>i?0:i>255?255:i,a[r]=a[r+1]=a[r+2]=i},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=255/((1<<n)-1),c=t,l=i,h=0;a>h;++h){var u=o*e[c++]|0
r[l++]=u,r[l++]=u,r[l++]=u,l+=s}},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),tt=function(){function e(){this.name="DeviceRGB",this.numComps=3,this.defaultColor=new Float32Array([0,0,0])}return e.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){var i=255*e[t]|0,n=255*e[t+1]|0,s=255*e[t+2]|0
a[r]=0>i?0:i>255?255:i,a[r+1]=0>n?0:n>255?255:n,a[r+2]=0>s?0:s>255?255:s},getRgbBuffer:function(e,t,a,r,i,n,s){if(8===n&&0===s)return void r.set(e.subarray(t,t+3*a),i)
for(var o=255/((1<<n)-1),c=t,l=i,h=0;a>h;++h)r[l++]=o*e[c++]|0,r[l++]=o*e[c++]|0,r[l++]=o*e[c++]|0,l+=s},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:function(e){return 8===e},fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),at=function(){function e(e,t,a,r,i){var n=e[t+0]*a,s=e[t+1]*a,o=e[t+2]*a,c=e[t+3]*a,l=n*(-4.387332384609988*n+54.48615194189176*s+18.82290502165302*o+212.25662451639585*c+-285.2331026137004)+s*(1.7149763477362134*s-5.6096736904047315*o+-17.873870861415444*c-5.497006427196366)+o*(-2.5217340131683033*o-21.248923337353073*c+17.5119270841813)+c*(-21.86122147463605*c-189.48180835922747)+255|0,h=n*(8.841041422036149*n+60.118027045597366*s+6.871425592049007*o+31.159100130055922*c+-79.2970844816548)+s*(-15.310361306967817*s+17.575251261109482*o+131.35250912493976*c-190.9453302588951)+o*(4.444339102852739*o+9.8632861493405*c-24.86741582555878)+c*(-20.737325471181034*c-187.80453709719578)+255|0,u=n*(.8842522430003296*n+8.078677503112928*s+30.89978309703729*o-.23883238689178934*c+-14.183576799673286)+s*(10.49593273432072*s+63.02378494754052*o+50.606957656360734*c-112.23884253719248)+o*(.03296041114873217*o+115.60384449646641*c+-193.58209356861505)+c*(-22.33816807309886*c-180.12613974708367)+255|0
r[i]=l>255?255:0>l?0:l,r[i+1]=h>255?255:0>h?0:h,r[i+2]=u>255?255:0>u?0:u}function t(){this.name="DeviceCMYK",this.numComps=4,this.defaultColor=new Float32Array([0,0,0,1])}return t.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(t,a,r,i){e(t,a,1,r,i)},getRgbBuffer:function(t,a,r,i,n,s,o){for(var c=1/((1<<s)-1),l=0;r>l;l++)e(t,a,c,i,n),a+=4,n+=3+o},getOutputLength:function(e,t){return e/4*(3+t)|0},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},t}(),rt=function(){function a(a,i,n){this.name="CalGray",this.numComps=1,this.defaultColor=new Float32Array([0]),a||r("WhitePoint missing - required for color space CalGray"),i=i||[0,0,0],n=n||1,this.XW=a[0],this.YW=a[1],this.ZW=a[2],this.XB=i[0],this.YB=i[1],this.ZB=i[2],this.G=n,(this.XW<0||this.ZW<0||1!==this.YW)&&r("Invalid WhitePoint components for "+this.name+", no fallback available"),(this.XB<0||this.YB<0||this.ZB<0)&&(e("Invalid BlackPoint for "+this.name+", falling back to default"),this.XB=this.YB=this.ZB=0),0===this.XB&&0===this.YB&&0===this.ZB||t(this.name+", BlackPoint: XB: "+this.XB+", YB: "+this.YB+", ZB: "+this.ZB+", only default values are supported."),this.G<1&&(e("Invalid Gamma: "+this.G+" for "+this.name+", falling back to default"),this.G=1)}function i(e,t,a,r,i,n){var s=t[a]*n,o=Math.pow(s,e.G),c=e.YW*o,l=0|Math.max(295.8*Math.pow(c,.3333333333333333)-40.8,0)
r[i]=l,r[i+1]=l,r[i+2]=l}return a.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){i(this,e,t,a,r,1)},getRgbBuffer:function(e,t,a,r,n,s,o){for(var c=1/((1<<s)-1),l=0;a>l;++l)i(this,e,t,r,n,c),t+=1,n+=3+o},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},a}(),it=function(){function t(t,a,i,n){this.name="CalRGB",this.numComps=3,this.defaultColor=new Float32Array(3),t||r("WhitePoint missing - required for color space CalRGB"),a=a||new Float32Array(3),i=i||new Float32Array([1,1,1]),n=n||new Float32Array([1,0,0,0,1,0,0,0,1])
var s=t[0],o=t[1],c=t[2]
this.whitePoint=t
var l=a[0],h=a[1],u=a[2]
this.blackPoint=a,this.GR=i[0],this.GG=i[1],this.GB=i[2],this.MXA=n[0],this.MYA=n[1],this.MZA=n[2],this.MXB=n[3],this.MYB=n[4],this.MZB=n[5],this.MXC=n[6],this.MYC=n[7],this.MZC=n[8],(0>s||0>c||1!==o)&&r("Invalid WhitePoint components for "+this.name+", no fallback available"),(0>l||0>h||0>u)&&(e("Invalid BlackPoint for "+this.name+" ["+l+", "+h+", "+u+"], falling back to default"),this.blackPoint=new Float32Array(3)),(this.GR<0||this.GG<0||this.GB<0)&&(e("Invalid Gamma ["+this.GR+", "+this.GG+", "+this.GB+"] for "+this.name+", falling back to default"),this.GR=this.GG=this.GB=1),(this.MXA<0||this.MYA<0||this.MZA<0||this.MXB<0||this.MYB<0||this.MZB<0||this.MXC<0||this.MYC<0||this.MZC<0)&&(e("Invalid Matrix for "+this.name+" ["+this.MXA+", "+this.MYA+", "+this.MZA+this.MXB+", "+this.MYB+", "+this.MZB+this.MXC+", "+this.MYC+", "+this.MZC+"], falling back to default"),this.MXA=this.MYB=this.MZC=1,this.MXB=this.MYA=this.MZA=this.MXC=this.MYC=this.MZB=0)}function a(e,t,a){a[0]=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],a[1]=e[3]*t[0]+e[4]*t[1]+e[5]*t[2],a[2]=e[6]*t[0]+e[7]*t[1]+e[8]*t[2]}function i(e,t,a){a[0]=1*t[0]/e[0],a[1]=1*t[1]/e[1],a[2]=1*t[2]/e[2]}function n(e,t,a){var r=.95047,i=1,n=1.08883
a[0]=t[0]*r/e[0],a[1]=t[1]*i/e[1],a[2]=t[2]*n/e[2]}function s(e){return.0031308>=e?o(0,1,12.92*e):o(0,1,1.055*Math.pow(e,1/2.4)-.055)}function o(e,t,a){return Math.max(e,Math.min(t,a))}function c(e){return 0>e?-c(-e):e>8?Math.pow((e+16)/116,3):e*k}function l(e,t,a){if(0===e[0]&&0===e[1]&&0===e[2])return a[0]=t[0],a[1]=t[1],void(a[2]=t[2])
var r=c(0),i=r,n=c(e[0]),s=r,o=c(e[1]),l=r,h=c(e[2]),u=(1-i)/(1-n),f=1-u,d=(1-s)/(1-o),g=1-d,m=(1-l)/(1-h),p=1-m
a[0]=t[0]*u+f,a[1]=t[1]*d+g,a[2]=t[2]*m+p}function h(e,t,r){if(1===e[0]&&1===e[2])return r[0]=t[0],r[1]=t[1],void(r[2]=t[2])
var n=r
a(d,t,n)
var s=b
i(e,n,s),a(g,s,r)}function u(e,t,r){var i=r
a(d,t,i)
var s=b
n(e,i,s),a(g,s,r)}function f(e,t,r,i,n,c){var f=o(0,1,t[r]*c),d=o(0,1,t[r+1]*c),g=o(0,1,t[r+2]*c),b=Math.pow(f,e.GR),k=Math.pow(d,e.GG),w=Math.pow(g,e.GB),x=e.MXA*b+e.MXB*k+e.MXC*w,C=e.MYA*b+e.MYB*k+e.MYC*w,S=e.MZA*b+e.MZB*k+e.MZC*w,A=v
A[0]=x,A[1]=C,A[2]=S
var I=y
h(e.whitePoint,A,I)
var B=v
l(e.blackPoint,I,B)
var T=y
u(p,B,T)
var O=v
a(m,T,O)
var R=s(O[0]),L=s(O[1]),M=s(O[2])
i[n]=Math.round(255*R),i[n+1]=Math.round(255*L),i[n+2]=Math.round(255*M)}var d=new Float32Array([.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296]),g=new Float32Array([.9869929,-.1470543,.1599627,.4323053,.5183603,.0492912,-.0085287,.0400428,.9684867]),m=new Float32Array([3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]),p=new Float32Array([1,1,1]),b=new Float32Array(3),v=new Float32Array(3),y=new Float32Array(3),k=Math.pow(24/116,3)/8
return t.prototype={getRgb:function(e,t){var a=new Uint8Array(3)
return this.getRgbItem(e,t,a,0),a},getRgbItem:function(e,t,a,r){f(this,e,t,a,r,1)},getRgbBuffer:function(e,t,a,r,i,n,s){for(var o=1/((1<<n)-1),c=0;a>c;++c)f(this,e,t,r,i,o),t+=3,i+=3+s},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return Ye.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},t}(),nt=function(){function t(t,a,i){this.name="Lab",this.numComps=3,this.defaultColor=new Float32Array([0,0,0]),t||r("WhitePoint missing - required for color space Lab"),a=a||[0,0,0],i=i||[-100,100,-100,100],this.XW=t[0],this.YW=t[1],this.ZW=t[2],this.amin=i[0],this.amax=i[1],this.bmin=i[2],this.bmax=i[3],this.XB=a[0],this.YB=a[1],this.ZB=a[2],(this.XW<0||this.ZW<0||1!==this.YW)&&r("Invalid WhitePoint components, no fallback available"),(this.XB<0||this.YB<0||this.ZB<0)&&(e("Invalid BlackPoint, falling back to default"),this.XB=this.YB=this.ZB=0),(this.amin>this.amax||this.bmin>this.bmax)&&(e("Invalid Range, falling back to defaults"),this.amin=-100,this.amax=100,this.bmin=-100,this.bmax=100)}function a(e){return e>=6/29?e*e*e:108/841*(e-4/29)}function i(e,t,a,r){return a+e*(r-a)/t}function n(e,t,r,n,s,o){var c=t[r],l=t[r+1],h=t[r+2]
n!==!1&&(c=i(c,n,0,100),l=i(l,n,e.amin,e.amax),h=i(h,n,e.bmin,e.bmax)),l=l>e.amax?e.amax:l<e.amin?e.amin:l,h=h>e.bmax?e.bmax:h<e.bmin?e.bmin:h
var u,f,d,g=(c+16)/116,m=g+l/500,p=g-h/200,b=e.XW*a(m),v=e.YW*a(g),y=e.ZW*a(p)
e.ZW<1?(u=3.1339*b+-1.617*v+y*-.4906,f=b*-.9785+1.916*v+.0333*y,d=.072*b+v*-.229+1.4057*y):(u=3.2406*b+-1.5372*v+y*-.4986,f=b*-.9689+1.8758*v+.0415*y,d=.0557*b+v*-.204+1.057*y),s[o]=0>=u?0:u>=1?255:255*Math.sqrt(u)|0,s[o+1]=0>=f?0:f>=1?255:255*Math.sqrt(f)|0,s[o+2]=0>=d?0:d>=1?255:255*Math.sqrt(d)|0}return t.prototype={getRgb:Ye.prototype.getRgb,getRgbItem:function(e,t,a,r){n(this,e,t,!1,a,r)},getRgbBuffer:function(e,t,a,r,i,s,o){for(var c=(1<<s)-1,l=0;a>l;l++)n(this,e,t,c,r,i),t+=3,i+=3+o},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:Ye.prototype.isPassthrough,fillRgb:Ye.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!1},t}(),st=function(){function e(e){this.a=0,this.b=0
var t,a,r=new Uint8Array(256),i=0,n=e.length
for(t=0;256>t;++t)r[t]=t
for(t=0;256>t;++t)a=r[t],i=i+a+e[t%n]&255,r[t]=r[i],r[i]=a
this.s=r}return e.prototype={encryptBlock:function(e){var t,a,r,i=e.length,n=this.a,s=this.b,o=this.s,c=new Uint8Array(i)
for(t=0;i>t;++t)n=n+1&255,a=o[n],s=s+a&255,r=o[s],o[n]=r,o[s]=a,c[t]=e[t]^o[a+r&255]
return this.a=n,this.b=s,c}},e.prototype.decryptBlock=e.prototype.encryptBlock,e}(),ot=function(){function e(e,r,i){var n,s,o,c=1732584193,l=-271733879,h=-1732584194,u=271733878,f=i+72&-64,d=new Uint8Array(f)
for(n=0;i>n;++n)d[n]=e[r++]
for(d[n++]=128,o=f-8;o>n;)d[n++]=0
d[n++]=i<<3&255,d[n++]=i>>5&255,d[n++]=i>>13&255,d[n++]=i>>21&255,d[n++]=i>>>29&255,d[n++]=0,d[n++]=0,d[n++]=0
var g=new Int32Array(16)
for(n=0;f>n;){for(s=0;16>s;++s,n+=4)g[s]=d[n]|d[n+1]<<8|d[n+2]<<16|d[n+3]<<24
var m,p,b=c,v=l,y=h,k=u
for(s=0;64>s;++s){16>s?(m=v&y|~v&k,p=s):32>s?(m=k&v|~k&y,p=5*s+1&15):48>s?(m=v^y^k,p=3*s+5&15):(m=y^(v|~k),p=7*s&15)
var w=k,x=b+m+a[s]+g[p]|0,C=t[s]
k=y,y=v,v=v+(x<<C|x>>>32-C)|0,b=w}c=c+b|0,l=l+v|0,h=h+y|0,u=u+k|0}return new Uint8Array([255&c,c>>8&255,c>>16&255,c>>>24&255,255&l,l>>8&255,l>>16&255,l>>>24&255,255&h,h>>8&255,h>>16&255,h>>>24&255,255&u,u>>8&255,u>>16&255,u>>>24&255])}var t=new Uint8Array([7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21]),a=new Int32Array([-680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,-165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,-378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,-198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551])
return e}(),ct=function(){function e(e,t){this.high=0|e,this.low=0|t}return e.prototype={and:function(e){this.high&=e.high,this.low&=e.low},xor:function(e){this.high^=e.high,this.low^=e.low},or:function(e){this.high|=e.high,this.low|=e.low},shiftRight:function(e){e>=32?(this.low=this.high>>>e-32|0,this.high=0):(this.low=this.low>>>e|this.high<<32-e,this.high=this.high>>>e|0)},shiftLeft:function(e){e>=32?(this.high=this.low<<e-32,this.low=0):(this.high=this.high<<e|this.low>>>32-e,this.low=this.low<<e)},rotateRight:function(e){var t,a
32&e?(a=this.low,t=this.high):(t=this.low,a=this.high),e&=31,this.low=t>>>e|a<<32-e,this.high=a>>>e|t<<32-e},not:function(){this.high=~this.high,this.low=~this.low},add:function(e){var t=(this.low>>>0)+(e.low>>>0),a=(this.high>>>0)+(e.high>>>0)
t>4294967295&&(a+=1),this.low=0|t,this.high=0|a},copyTo:function(e,t){e[t]=this.high>>>24&255,e[t+1]=this.high>>16&255,e[t+2]=this.high>>8&255,e[t+3]=255&this.high,e[t+4]=this.low>>>24&255,e[t+5]=this.low>>16&255,e[t+6]=this.low>>8&255,e[t+7]=255&this.low},assign:function(e){this.high=e.high,this.low=e.low}},e}(),lt=function(){function e(e,t){return e>>>t|e<<32-t}function t(e,t,a){return e&t^~e&a}function a(e,t,a){return e&t^e&a^t&a}function r(t){return e(t,2)^e(t,13)^e(t,22)}function i(t){return e(t,6)^e(t,11)^e(t,25)}function n(t){return e(t,7)^e(t,18)^t>>>3}function s(t){return e(t,17)^e(t,19)^t>>>10}function o(e,o,l){var h,u,f,d=1779033703,g=3144134277,m=1013904242,p=2773480762,b=1359893119,v=2600822924,y=528734635,k=1541459225,w=64*Math.ceil((l+9)/64),x=new Uint8Array(w)
for(h=0;l>h;++h)x[h]=e[o++]
for(x[h++]=128,f=w-8;f>h;)x[h++]=0
x[h++]=0,x[h++]=0,x[h++]=0,x[h++]=l>>>29&255,x[h++]=l>>21&255,x[h++]=l>>13&255,x[h++]=l>>5&255,x[h++]=l<<3&255
var C=new Uint32Array(64)
for(h=0;w>h;){for(u=0;16>u;++u)C[u]=x[h]<<24|x[h+1]<<16|x[h+2]<<8|x[h+3],h+=4
for(u=16;64>u;++u)C[u]=s(C[u-2])+C[u-7]+n(C[u-15])+C[u-16]|0
var S,A,I=d,B=g,T=m,O=p,R=b,L=v,M=y,P=k
for(u=0;64>u;++u)S=P+i(R)+t(R,L,M)+c[u]+C[u],A=r(I)+a(I,B,T),P=M,M=L,L=R,R=O+S|0,O=T,T=B,B=I,I=S+A|0
d=d+I|0,g=g+B|0,m=m+T|0,p=p+O|0,b=b+R|0,v=v+L|0,y=y+M|0,k=k+P|0}return new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,g>>24&255,g>>16&255,g>>8&255,255&g,m>>24&255,m>>16&255,m>>8&255,255&m,p>>24&255,p>>16&255,p>>8&255,255&p,b>>24&255,b>>16&255,b>>8&255,255&b,v>>24&255,v>>16&255,v>>8&255,255&v,y>>24&255,y>>16&255,y>>8&255,255&y,k>>24&255,k>>16&255,k>>8&255,255&k])}var c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
return o}(),ht=function(){function e(e,t,a,r,i){e.assign(t),e.and(a),i.assign(t),i.not(),i.and(r),e.xor(i)}function t(e,t,a,r,i){e.assign(t),e.and(a),i.assign(t),i.and(r),e.xor(i),i.assign(a),i.and(r),e.xor(i)}function a(e,t,a){e.assign(t),e.rotateRight(28),a.assign(t),a.rotateRight(34),e.xor(a),a.assign(t),a.rotateRight(39),e.xor(a)}function r(e,t,a){e.assign(t),e.rotateRight(14),a.assign(t),a.rotateRight(18),e.xor(a),a.assign(t),a.rotateRight(41),e.xor(a)}function i(e,t,a){e.assign(t),e.rotateRight(1),a.assign(t),a.rotateRight(8),e.xor(a),a.assign(t),a.shiftRight(7),e.xor(a)}function n(e,t,a){e.assign(t),e.rotateRight(19),a.assign(t),a.rotateRight(61),e.xor(a),a.assign(t),a.shiftRight(6),e.xor(a)}function s(s,c,l,h){h=!!h
var u,f,d,g,m,p,b,v
h?(u=new ct(3418070365,3238371032),f=new ct(1654270250,914150663),d=new ct(2438529370,812702999),g=new ct(355462360,4144912697),m=new ct(1731405415,4290775857),p=new ct(2394180231,1750603025),b=new ct(3675008525,1694076839),v=new ct(1203062813,3204075428)):(u=new ct(1779033703,4089235720),f=new ct(3144134277,2227873595),d=new ct(1013904242,4271175723),g=new ct(2773480762,1595750129),m=new ct(1359893119,2917565137),p=new ct(2600822924,725511199),b=new ct(528734635,4215389547),v=new ct(1541459225,327033209))
var y,k,w,x=128*Math.ceil((l+17)/128),C=new Uint8Array(x)
for(y=0;l>y;++y)C[y]=s[c++]
for(C[y++]=128,w=x-16;w>y;)C[y++]=0
C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=0,C[y++]=l>>>29&255,C[y++]=l>>21&255,C[y++]=l>>13&255,C[y++]=l>>5&255,C[y++]=l<<3&255
var S=new Array(80)
for(y=0;80>y;y++)S[y]=new ct(0,0)
var A,I=new ct(0,0),B=new ct(0,0),T=new ct(0,0),O=new ct(0,0),R=new ct(0,0),L=new ct(0,0),M=new ct(0,0),P=new ct(0,0),E=new ct(0,0),D=new ct(0,0),q=new ct(0,0),F=new ct(0,0)
for(y=0;x>y;){for(k=0;16>k;++k)S[k].high=C[y]<<24|C[y+1]<<16|C[y+2]<<8|C[y+3],S[k].low=C[y+4]<<24|C[y+5]<<16|C[y+6]<<8|C[y+7],y+=8
for(k=16;80>k;++k)A=S[k],n(A,S[k-2],F),A.add(S[k-7]),i(q,S[k-15],F),A.add(q),A.add(S[k-16])
for(I.assign(u),B.assign(f),T.assign(d),O.assign(g),R.assign(m),L.assign(p),M.assign(b),P.assign(v),k=0;80>k;++k)E.assign(P),r(q,R,F),E.add(q),e(q,R,L,M,F),E.add(q),E.add(o[k]),E.add(S[k]),a(D,I,F),t(q,I,B,T,F),D.add(q),A=P,P=M,M=L,L=R,O.add(E),R=O,O=T,T=B,B=I,A.assign(E),A.add(D),I=A
u.add(I),f.add(B),d.add(T),g.add(O),m.add(R),p.add(L),b.add(M),v.add(P)}var U
return h?(U=new Uint8Array(48),u.copyTo(U,0),f.copyTo(U,8),d.copyTo(U,16),g.copyTo(U,24),m.copyTo(U,32),p.copyTo(U,40)):(U=new Uint8Array(64),u.copyTo(U,0),f.copyTo(U,8),d.copyTo(U,16),g.copyTo(U,24),m.copyTo(U,32),p.copyTo(U,40),b.copyTo(U,48),v.copyTo(U,56)),U}var o=[new ct(1116352408,3609767458),new ct(1899447441,602891725),new ct(3049323471,3964484399),new ct(3921009573,2173295548),new ct(961987163,4081628472),new ct(1508970993,3053834265),new ct(2453635748,2937671579),new ct(2870763221,3664609560),new ct(3624381080,2734883394),new ct(310598401,1164996542),new ct(607225278,1323610764),new ct(1426881987,3590304994),new ct(1925078388,4068182383),new ct(2162078206,991336113),new ct(2614888103,633803317),new ct(3248222580,3479774868),new ct(3835390401,2666613458),new ct(4022224774,944711139),new ct(264347078,2341262773),new ct(604807628,2007800933),new ct(770255983,1495990901),new ct(1249150122,1856431235),new ct(1555081692,3175218132),new ct(1996064986,2198950837),new ct(2554220882,3999719339),new ct(2821834349,766784016),new ct(2952996808,2566594879),new ct(3210313671,3203337956),new ct(3336571891,1034457026),new ct(3584528711,2466948901),new ct(113926993,3758326383),new ct(338241895,168717936),new ct(666307205,1188179964),new ct(773529912,1546045734),new ct(1294757372,1522805485),new ct(1396182291,2643833823),new ct(1695183700,2343527390),new ct(1986661051,1014477480),new ct(2177026350,1206759142),new ct(2456956037,344077627),new ct(2730485921,1290863460),new ct(2820302411,3158454273),new ct(3259730800,3505952657),new ct(3345764771,106217008),new ct(3516065817,3606008344),new ct(3600352804,1432725776),new ct(4094571909,1467031594),new ct(275423344,851169720),new ct(430227734,3100823752),new ct(506948616,1363258195),new ct(659060556,3750685593),new ct(883997877,3785050280),new ct(958139571,3318307427),new ct(1322822218,3812723403),new ct(1537002063,2003034995),new ct(1747873779,3602036899),new ct(1955562222,1575990012),new ct(2024104815,1125592928),new ct(2227730452,2716904306),new ct(2361852424,442776044),new ct(2428436474,593698344),new ct(2756734187,3733110249),new ct(3204031479,2999351573),new ct(3329325298,3815920427),new ct(3391569614,3928383900),new ct(3515267271,566280711),new ct(3940187606,3454069534),new ct(4118630271,4000239992),new ct(116418474,1914138554),new ct(174292421,2731055270),new ct(289380356,3203993006),new ct(460393269,320620315),new ct(685471733,587496836),new ct(852142971,1086792851),new ct(1017036298,365543100),new ct(1126000580,2618297676),new ct(1288033470,3409855158),new ct(1501505948,4234509866),new ct(1607167915,987167468),new ct(1816402316,1246189591)]
return s}(),ut=function(){function e(e,t,a){return ht(e,t,a,!0)}return e}(),ft=function(){function e(){}return e.prototype={decryptBlock:function(e){return e}},e}(),dt=function(){function e(e){var t=176,a=new Uint8Array(t)
a.set(e)
for(var r=16,i=1;t>r;++i){var o=a[r-3],c=a[r-2],l=a[r-1],h=a[r-4]
o=s[o],c=s[c],l=s[l],h=s[h],o^=n[i]
for(var u=0;4>u;++u)a[r]=o^=a[r-16],r++,a[r]=c^=a[r-16],r++,a[r]=l^=a[r-16],r++,a[r]=h^=a[r-16],r++}return a}function t(e,t){var a=new Uint8Array(16)
a.set(e)
var r,i,n,s,c,l
for(i=0,n=160;16>i;++i,++n)a[i]^=t[n]
for(r=9;r>=1;--r){for(s=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=s,s=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=s,a[2]=c,s=a[15],c=a[11],l=a[7],a[15]=a[3],a[11]=s,a[7]=c,a[3]=l,i=0;16>i;++i)a[i]=o[a[i]]
for(i=0,n=16*r;16>i;++i,++n)a[i]^=t[n]
for(i=0;16>i;i+=4){var u=h[a[i]],f=h[a[i+1]],d=h[a[i+2]],g=h[a[i+3]]
s=u^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,a[i]=s>>>24&255,a[i+1]=s>>16&255,a[i+2]=s>>8&255,a[i+3]=255&s}}for(s=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=s,s=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=s,a[2]=c,s=a[15],c=a[11],l=a[7],a[15]=a[3],a[11]=s,a[7]=c,a[3]=l,i=0;16>i;++i)a[i]=o[a[i]],a[i]^=t[i]
return a}function a(e,t){var a,r,i,n,o=new Uint8Array(16)
for(o.set(e),h=0;16>h;++h)o[h]^=t[h]
for(l=1;10>l;l++){for(h=0;16>h;++h)o[h]=s[o[h]]
i=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=i,i=o[2],r=o[6],o[2]=o[10],o[6]=o[14],o[10]=i,o[14]=r,i=o[3],r=o[7],a=o[11],o[3]=o[15],o[7]=i,o[11]=r,o[15]=a
for(var h=0;16>h;h+=4){var u=o[h+0],f=o[h+1],d=o[h+2],g=o[h+3]
a=u^f^d^g,o[h+0]^=a^c[u^f],o[h+1]^=a^c[f^d],o[h+2]^=a^c[d^g],o[h+3]^=a^c[g^u]}for(h=0,n=16*l;16>h;++h,++n)o[h]^=t[n]}for(h=0;16>h;++h)o[h]=s[o[h]]
for(i=o[1],o[1]=o[5],o[5]=o[9],o[9]=o[13],o[13]=i,i=o[2],r=o[6],o[2]=o[10],o[6]=o[14],o[10]=i,o[14]=r,i=o[3],r=o[7],a=o[11],o[3]=o[15],o[7]=i,o[11]=r,o[15]=a,h=0,n=160;16>h;++h,++n)o[h]^=t[n]
return o}function r(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,a){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[],h=this.iv
for(r=0;s>r;++r)if(o[c]=e[r],++c,!(16>c)){var u=t(o,this.key)
for(i=0;16>i;++i)u[i]^=h[i]
h=o,l.push(u),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=h,0===l.length)return new Uint8Array([])
var f=16*l.length
if(a){var d=l[l.length-1],g=d[15]
if(16>=g){for(r=15,n=16-g;r>=n;--r)if(d[r]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var m=new Uint8Array(f)
for(r=0,i=0,n=l.length;n>r;++r,i+=16)m.set(l[r],i)
return m}for(var n=new Uint8Array([141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141]),s=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),o=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),c=new Uint8Array(256),l=0;256>l;l++)128>l?c[l]=l<<1:c[l]=l<<1^27
var h=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return r.prototype={decryptBlock:function(e,t){var a,r=e.length,n=this.buffer,s=this.bufferPosition
for(a=0;16>s&&r>a;++a,++s)n[s]=e[a]
return 16>s?(this.bufferLength=s,new Uint8Array([])):(this.iv=n,this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e.subarray(16),t))},encrypt:function(e,t){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),r=0;s>r;++r)if(o[c]=e[r],++c,!(16>c)){for(i=0;16>i;++i)o[i]^=t[i]
var h=a(o,this.key)
t=h,l.push(h),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var u=16*l.length,f=new Uint8Array(u)
for(r=0,i=0,n=l.length;n>r;++r,i+=16)f.set(l[r],i)
return f}},r}(),gt=function(){function e(e){var t=240,a=new Uint8Array(t),r=1
a.set(e)
for(var i=32,s=1;t>i;++s){if(i%32===16)o=n[o],c=n[c],l=n[l],h=n[h]
else if(i%32===0){var o=a[i-3],c=a[i-2],l=a[i-1],h=a[i-4]
o=n[o],c=n[c],l=n[l],h=n[h],o^=r,(r<<=1)>=256&&(r=255&(27^r))}for(var u=0;4>u;++u)a[i]=o^=a[i-32],i++,a[i]=c^=a[i-32],i++,a[i]=l^=a[i-32],i++,a[i]=h^=a[i-32],i++}return a}function t(e,t){var a=new Uint8Array(16)
a.set(e)
var r,i,n,o,c,h
for(i=0,n=224;16>i;++i,++n)a[i]^=t[n]
for(r=13;r>=1;--r){for(o=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=o,o=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=o,a[2]=c,o=a[15],c=a[11],h=a[7],a[15]=a[3],a[11]=o,a[7]=c,a[3]=h,i=0;16>i;++i)a[i]=s[a[i]]
for(i=0,n=16*r;16>i;++i,++n)a[i]^=t[n]
for(i=0;16>i;i+=4){var u=l[a[i]],f=l[a[i+1]],d=l[a[i+2]],g=l[a[i+3]]
o=u^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,a[i]=o>>>24&255,a[i+1]=o>>16&255,a[i+2]=o>>8&255,a[i+3]=255&o}}for(o=a[13],a[13]=a[9],a[9]=a[5],a[5]=a[1],a[1]=o,o=a[14],c=a[10],a[14]=a[6],a[10]=a[2],a[6]=o,a[2]=c,o=a[15],c=a[11],h=a[7],a[15]=a[3],a[11]=o,a[7]=c,a[3]=h,i=0;16>i;++i)a[i]=s[a[i]],a[i]^=t[i]
return a}function a(e,t){var a,r,i,s,l=new Uint8Array(16)
for(l.set(e),h=0;16>h;++h)l[h]^=t[h]
for(c=1;14>c;c++){for(h=0;16>h;++h)l[h]=n[l[h]]
i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],r=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=r,i=l[3],r=l[7],a=l[11],l[3]=l[15],l[7]=i,l[11]=r,l[15]=a
for(var h=0;16>h;h+=4){var u=l[h+0],f=l[h+1],d=l[h+2],g=l[h+3]
a=u^f^d^g,l[h+0]^=a^o[u^f],l[h+1]^=a^o[f^d],l[h+2]^=a^o[d^g],l[h+3]^=a^o[g^u]}for(h=0,s=16*c;16>h;++h,++s)l[h]^=t[s]}for(h=0;16>h;++h)l[h]=n[l[h]]
for(i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],r=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=r,i=l[3],r=l[7],a=l[11],l[3]=l[15],l[7]=i,l[11]=r,l[15]=a,h=0,s=224;16>h;++h,++s)l[h]^=t[s]
return l}function r(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,a){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[],h=this.iv
for(r=0;s>r;++r)if(o[c]=e[r],++c,!(16>c)){var u=t(o,this.key)
for(i=0;16>i;++i)u[i]^=h[i]
h=o,l.push(u),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=h,0===l.length)return new Uint8Array([])
var f=16*l.length
if(a){var d=l[l.length-1],g=d[15]
if(16>=g){for(r=15,n=16-g;r>=n;--r)if(d[r]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var m=new Uint8Array(f)
for(r=0,i=0,n=l.length;n>r;++r,i+=16)m.set(l[r],i)
return m}for(var n=(new Uint8Array([141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141]),new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22])),s=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),o=new Uint8Array(256),c=0;256>c;c++)128>c?o[c]=c<<1:o[c]=c<<1^27
var l=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return r.prototype={decryptBlock:function(e,t,a){var r,n=e.length,s=this.buffer,o=this.bufferPosition
if(a)this.iv=a
else{for(r=0;16>o&&n>r;++r,++o)s[o]=e[r]
if(16>o)return this.bufferLength=o,new Uint8Array([])
this.iv=s,e=e.subarray(16)}return this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e,t)},encrypt:function(e,t){var r,i,n,s=e.length,o=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),r=0;s>r;++r)if(o[c]=e[r],++c,!(16>c)){for(i=0;16>i;++i)o[i]^=t[i]
var h=a(o,this.key)
this.iv=h,l.push(h),o=new Uint8Array(16),c=0}if(this.buffer=o,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var u=16*l.length,f=new Uint8Array(u)
for(r=0,i=0,n=l.length;n>r;++r,i+=16)f.set(l[r],i)
return f}},r}(),mt=function(){function e(e,t){if(e.length!==t.length)return!1
for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1
return!0}function t(){}return t.prototype={checkOwnerPassword:function(t,a,r,i){var n=new Uint8Array(t.length+56)
n.set(t,0),n.set(a,t.length),n.set(r,t.length+a.length)
var s=lt(n,0,n.length)
return e(s,i)},checkUserPassword:function(t,a,r){var i=new Uint8Array(t.length+8)
i.set(t,0),i.set(a,t.length)
var n=lt(i,0,i.length)
return e(n,r)},getOwnerKey:function(e,t,a,r){var i=new Uint8Array(e.length+56)
i.set(e,0),i.set(t,e.length),i.set(a,e.length+t.length)
var n=lt(i,0,i.length),s=new gt(n)
return s.decryptBlock(r,!1,new Uint8Array(16))},getUserKey:function(e,t,a){var r=new Uint8Array(e.length+8)
r.set(e,0),r.set(t,e.length)
var i=lt(r,0,r.length),n=new gt(i)
return n.decryptBlock(a,!1,new Uint8Array(16))}},t}(),pt=function(){function e(e,t){var a=new Uint8Array(e.length+t.length)
return a.set(e,0),a.set(t,e.length),a}function t(t,a,r){for(var i=lt(a,0,a.length).subarray(0,32),n=[0],s=0;64>s||n[n.length-1]>s-32;){var o=t.length+i.length+r.length,c=new Uint8Array(64*o),l=e(t,i)
l=e(l,r)
for(var h=0,u=0;64>h;h++,u+=o)c.set(l,u)
var f=new dt(i.subarray(0,16))
n=f.encrypt(c,i.subarray(16,32))
for(var d=0,g=0;16>g;g++)d*=1,d%=3,d+=(n[g]>>>0)%3,d%=3
0===d?i=lt(n,0,n.length):1===d?i=ut(n,0,n.length):2===d&&(i=ht(n,0,n.length)),s++}return i.subarray(0,32)}function a(){}function r(e,t){if(e.length!==t.length)return!1
for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1
return!0}return a.prototype={hash:function(e,a,r){return t(e,a,r)},checkOwnerPassword:function(e,a,i,n){var s=new Uint8Array(e.length+56)
s.set(e,0),s.set(a,e.length),s.set(i,e.length+a.length)
var o=t(e,s,i)
return r(o,n)},checkUserPassword:function(e,a,i){var n=new Uint8Array(e.length+8)
n.set(e,0),n.set(a,e.length)
var s=t(e,n,[])
return r(s,i)},getOwnerKey:function(e,a,r,i){var n=new Uint8Array(e.length+56)
n.set(e,0),n.set(a,e.length),n.set(r,e.length+a.length)
var s=t(e,n,r),o=new gt(s)
return o.decryptBlock(i,!1,new Uint8Array(16))},getUserKey:function(e,a,r){var i=new Uint8Array(e.length+8)
i.set(e,0),i.set(a,e.length)
var n=t(e,i,[]),s=new gt(n)
return s.decryptBlock(r,!1,new Uint8Array(16))}},a}(),bt=function(){function e(e,t){this.stringCipherConstructor=e,this.streamCipherConstructor=t}return e.prototype={createStream:function(e,t){var a=new this.streamCipherConstructor
return new Va(e,t,function(e,t){return a.decryptBlock(e,t)})},decryptString:function(e){var t=new this.stringCipherConstructor,a=h(e)
return a=t.decryptBlock(a,!0),l(a)}},e}(),vt=function(){function e(e,t,a,r,i,n,s,o,c,l,h,u){if(t){var f=Math.min(127,t.length)
t=t.subarray(0,f)}else t=[]
var d
if(d=6===e?new pt:new mt){if(d.checkUserPassword(t,o,s))return d.getUserKey(t,c,h)
if(t.length&&d.checkOwnerPassword(t,r,n,a))return d.getOwnerKey(t,i,n,l)}return null}function a(e,t,a,r,i,n,s,o){var l,h,u=40+a.length+e.length,f=new Uint8Array(u),d=0
if(t)for(h=Math.min(32,t.length);h>d;++d)f[d]=t[d]
for(l=0;32>d;)f[d++]=c[l++]
for(l=0,h=a.length;h>l;++l)f[d++]=a[l]
for(f[d++]=255&i,f[d++]=i>>8&255,f[d++]=i>>16&255,f[d++]=i>>>24&255,l=0,h=e.length;h>l;++l)f[d++]=e[l]
n>=4&&!o&&(f[d++]=255,f[d++]=255,f[d++]=255,f[d++]=255)
var g=ot(f,0,d),m=s>>3
if(n>=3)for(l=0;50>l;++l)g=ot(g,0,m)
var p,b,v=g.subarray(0,m)
if(n>=3){for(d=0;32>d;++d)f[d]=c[d]
for(l=0,h=e.length;h>l;++l)f[d++]=e[l]
p=new st(v),b=p.encryptBlock(ot(f,0,d)),h=v.length
var y,k=new Uint8Array(h)
for(l=1;19>=l;++l){for(y=0;h>y;++y)k[y]=v[y]^l
p=new st(k),b=p.encryptBlock(b)}for(l=0,h=b.length;h>l;++l)if(r[l]!==b[l])return null}else for(p=new st(v),b=p.encryptBlock(c),l=0,h=b.length;h>l;++l)if(r[l]!==b[l])return null
return v}function i(e,t,a,r){var i,n,s=new Uint8Array(32),o=0
for(n=Math.min(32,e.length);n>o;++o)s[o]=e[o]
for(i=0;32>o;)s[o++]=c[i++]
var l=ot(s,0,o),h=r>>3
if(a>=3)for(i=0;50>i;++i)l=ot(l,0,l.length)
var u,f
if(a>=3){f=t
var d,g=new Uint8Array(h)
for(i=19;i>=0;i--){for(d=0;h>d;++d)g[d]=l[d]^i
u=new st(g),f=u.encryptBlock(f)}}else u=new st(l.subarray(0,h)),f=u.encryptBlock(t)
return f}function n(n,s,o){var c=n.get("Filter")
I(c)&&"Standard"===c.name||r("unknown encryption method"),this.dict=n
var u=n.get("V");(!C(u)||1!==u&&2!==u&&4!==u&&5!==u)&&r("unsupported encryption algorithm"),this.algorithm=u
var f=n.get("Length")||40;(!C(f)||40>f||f%8!==0)&&r("invalid key length")
var d=h(n.get("O")).subarray(0,32),g=h(n.get("U")).subarray(0,32),m=n.get("P"),p=n.get("R"),b=(4===u||5===u)&&n.get("EncryptMetadata")!==!1
this.encryptMetadata=b
var v,y=h(s)
if(o){if(6===p)try{o=k(o)}catch(w){t("CipherTransformFactory: Unable to convert UTF8 encoded password.")}v=h(o)}var x
if(5!==u)x=a(y,v,d,g,m,p,f,b)
else{var S=h(n.get("O")).subarray(32,40),A=h(n.get("O")).subarray(40,48),B=h(n.get("U")).subarray(0,48),T=h(n.get("U")).subarray(32,40),O=h(n.get("U")).subarray(40,48),R=h(n.get("OE")),L=h(n.get("UE")),M=h(n.get("Perms"))
x=e(p,v,d,S,A,B,g,T,O,R,L,M)}if(!x&&!o)throw new ne("No password given",ie.NEED_PASSWORD)
if(!x&&o){var P=i(v,d,p,f)
x=a(y,P,d,g,m,p,f,b)}if(!x)throw new ne("Incorrect Password",ie.INCORRECT_PASSWORD)
this.encryptionKey=x,u>=4&&(this.cf=n.get("CF"),this.stmf=n.get("StmF")||l,this.strf=n.get("StrF")||l,this.eff=n.get("EFF")||this.stmf)}function s(e,t,a,r){var i,n,s=new Uint8Array(a.length+9)
for(i=0,n=a.length;n>i;++i)s[i]=a[i]
s[i++]=255&e,s[i++]=e>>8&255,s[i++]=e>>16&255,s[i++]=255&t,s[i++]=t>>8&255,r&&(s[i++]=115,s[i++]=65,s[i++]=108,s[i++]=84)
var o=ot(s,0,i)
return o.subarray(0,Math.min(a.length+5,16))}function o(e,t,a,i,n){var o,c=e.get(t.name)
return null!==c&&void 0!==c&&(o=c.get("CFM")),o&&"None"!==o.name?"V2"===o.name?function(){return new st(s(a,i,n,!1))}:"AESV2"===o.name?function(){return new dt(s(a,i,n,!0))}:"AESV3"===o.name?function(){return new gt(n)}:void r("Unknown crypto method"):function(){return new ft}}var c=new Uint8Array([40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122]),l=Ae.get("Identity")
return n.prototype={createCipherTransform:function(e,t){if(4===this.algorithm||5===this.algorithm)return new bt(o(this.cf,this.stmf,e,t,this.encryptionKey),o(this.cf,this.strf,e,t,this.encryptionKey))
var a=s(e,t,this.encryptionKey,!1),r=function(){return new st(a)}
return new bt(r,r)}},n}(),yt={FUNCTION_BASED:1,AXIAL:2,RADIAL:3,FREE_FORM_MESH:4,LATTICE_FORM_MESH:5,COONS_PATCH_MESH:6,TENSOR_PATCH_MESH:7},kt=function(){function e(){r("should not call Pattern constructor")}return e.prototype={getPattern:function(e){r("Should not call Pattern.getStyle: "+e)}},e.parseShading=function(e,a,r,i,n){var s=R(e)?e.dict:e,o=s.get("ShadingType")
try{switch(o){case yt.AXIAL:case yt.RADIAL:return new wt.RadialAxial(s,a,r,i)
case yt.FREE_FORM_MESH:case yt.LATTICE_FORM_MESH:case yt.COONS_PATCH_MESH:case yt.TENSOR_PATCH_MESH:return new wt.Mesh(e,a,r,i)
default:throw new Error("Unsupported ShadingType: "+o)}}catch(c){if(c instanceof ue)throw c
return n.send("UnsupportedFeature",{featureId:ae.shadingPattern}),t(c),new wt.Dummy}},e}(),wt={}
wt.SMALL_NUMBER=.01,wt.RadialAxial=function(){function a(a,r,i,n){this.matrix=r,this.coordsArr=a.get("Coords"),this.shadingType=a.get("ShadingType"),this.type="Pattern"
var s=a.get("ColorSpace","CS")
s=Ye.parse(s,i,n),this.cs=s
var o=0,c=1
if(a.has("Domain")){var l=a.get("Domain")
o=l[0],c=l[1]}var h=!1,u=!1
if(a.has("Extend")){var f=a.get("Extend")
h=f[0],u=f[1]}if(!(this.shadingType!==yt.RADIAL||h&&u)){var d=this.coordsArr[0],g=this.coordsArr[1],m=this.coordsArr[2],p=this.coordsArr[3],b=this.coordsArr[4],v=this.coordsArr[5],y=Math.sqrt((d-p)*(d-p)+(g-b)*(g-b))
v+y>=m&&m+y>=v&&t("Unsupported radial gradient.")}this.extendStart=h,this.extendEnd=u
var k=a.get("Function"),w=Je.parseArray(i,k),x=c-o,C=x/10,S=this.colorStops=[]
if(o>=c||0>=C)return void e("Bad shading domain.")
for(var A,I=new Float32Array(s.numComps),B=new Float32Array(1),T=o;c>=T;T+=C){B[0]=T,w(B,0,I,0),A=s.getRgb(I,0)
var O=me.makeCssRgb(A[0],A[1],A[2])
S.push([(T-o)/x,O])}var R="transparent"
a.has("Background")&&(A=s.getRgb(a.get("Background"),0),R=me.makeCssRgb(A[0],A[1],A[2])),h||(S.unshift([0,R]),S[1][0]+=wt.SMALL_NUMBER),u||(S[S.length-1][0]-=wt.SMALL_NUMBER,S.push([1,R])),this.colorStops=S}return a.prototype={getIR:function(){var e,t,a,i,n,s=this.coordsArr,o=this.shadingType
o===yt.AXIAL?(t=[s[0],s[1]],a=[s[2],s[3]],i=null,n=null,e="axial"):o===yt.RADIAL?(t=[s[0],s[1]],a=[s[3],s[4]],i=s[2],n=s[5],e="radial"):r("getPattern type unknown: "+o)
var c=this.matrix
if(c&&(t=me.applyTransform(t,c),a=me.applyTransform(a,c),o===yt.RADIAL)){var l=me.singularValueDecompose2dScale(c)
i*=l[0],n*=l[1]}return["RadialAxial",e,this.colorStops,t,a,i,n]}},a}(),wt.Mesh=function(){function e(e,t){this.stream=e,this.context=t,this.buffer=0,this.bufferLength=0
var a=t.numComps
this.tmpCompsBuf=new Float32Array(a)
var r=t.colorSpace.numComps
this.tmpCsCompsBuf=t.colorFn?new Float32Array(r):this.tmpCompsBuf}function t(e,t){for(var a=e.coords,r=e.colors,i=[],s=[],o=0;t.hasData;){var c=t.readFlag(),l=t.readCoordinate(),h=t.readComponents()
if(0===o){switch(n(c>=0&&2>=c,"Unknown type4 flag"),c){case 0:o=3
break
case 1:s.push(s[s.length-2],s[s.length-1]),o=1
break
case 2:s.push(s[s.length-3],s[s.length-1]),o=1}i.push(c)}s.push(a.length),a.push(l),r.push(h),o--,t.align()}e.figures.push({type:"triangles",coords:new Int32Array(s),colors:new Int32Array(s)})}function a(e,t,a){for(var r=e.coords,i=e.colors,n=[];t.hasData;){var s=t.readCoordinate(),o=t.readComponents()
n.push(r.length),r.push(s),i.push(o)}e.figures.push({type:"lattice",coords:new Int32Array(n),colors:new Int32Array(n),verticesPerRow:a})}function i(e,t){var a=e.figures[t]
n("patch"===a.type,"Unexpected patch mesh figure")
var r=e.coords,i=e.colors,s=a.coords,o=a.colors,c=Math.min(r[s[0]][0],r[s[3]][0],r[s[12]][0],r[s[15]][0]),l=Math.min(r[s[0]][1],r[s[3]][1],r[s[12]][1],r[s[15]][1]),h=Math.max(r[s[0]][0],r[s[3]][0],r[s[12]][0],r[s[15]][0]),m=Math.max(r[s[0]][1],r[s[3]][1],r[s[12]][1],r[s[15]][1]),p=Math.ceil((h-c)*d/(e.bounds[2]-e.bounds[0]))
p=Math.max(u,Math.min(f,p))
var b=Math.ceil((m-l)*d/(e.bounds[3]-e.bounds[1]))
b=Math.max(u,Math.min(f,b))
for(var v=p+1,y=new Int32Array((b+1)*v),k=new Int32Array((b+1)*v),w=0,x=new Uint8Array(3),C=new Uint8Array(3),S=i[o[0]],A=i[o[1]],I=i[o[2]],B=i[o[3]],T=g(b),O=g(p),R=0;b>=R;R++){x[0]=(S[0]*(b-R)+I[0]*R)/b|0,x[1]=(S[1]*(b-R)+I[1]*R)/b|0,x[2]=(S[2]*(b-R)+I[2]*R)/b|0,C[0]=(A[0]*(b-R)+B[0]*R)/b|0,C[1]=(A[1]*(b-R)+B[1]*R)/b|0,C[2]=(A[2]*(b-R)+B[2]*R)/b|0
for(var L=0;p>=L;L++,w++)if(0!==R&&R!==b||0!==L&&L!==p){for(var M=0,P=0,E=0,D=0;3>=D;D++)for(var q=0;3>=q;q++,E++){var F=T[R][D]*O[L][q]
M+=r[s[E]][0]*F,P+=r[s[E]][1]*F}y[w]=r.length,r.push([M,P]),k[w]=i.length
var U=new Uint8Array(3)
U[0]=(x[0]*(p-L)+C[0]*L)/p|0,U[1]=(x[1]*(p-L)+C[1]*L)/p|0,U[2]=(x[2]*(p-L)+C[2]*L)/p|0,i.push(U)}}y[0]=s[0],k[0]=o[0],y[p]=s[3],k[p]=o[1],y[v*b]=s[12],k[v*b]=o[2],y[v*b+p]=s[15],k[v*b+p]=o[3],e.figures[t]={type:"lattice",coords:y,colors:k,verticesPerRow:v}}function s(e,t){for(var a=e.coords,r=e.colors,i=new Int32Array(16),s=new Int32Array(4);t.hasData;){var o=t.readFlag()
n(o>=0&&3>=o,"Unknown type6 flag")
var c,l,h=a.length
for(c=0,l=0!==o?8:12;l>c;c++)a.push(t.readCoordinate())
var u=r.length
for(c=0,l=0!==o?2:4;l>c;c++)r.push(t.readComponents())
var f,d,g,m
switch(o){case 0:i[12]=h+3,i[13]=h+4,i[14]=h+5,i[15]=h+6,i[8]=h+2,i[11]=h+7,i[4]=h+1,i[7]=h+8,i[0]=h,i[1]=h+11,i[2]=h+10,i[3]=h+9,s[2]=u+1,s[3]=u+2,s[0]=u,s[1]=u+3
break
case 1:f=i[12],d=i[13],g=i[14],m=i[15],i[12]=m,i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=g,i[11]=h+3,i[4]=d,i[7]=h+4,i[0]=f,i[1]=h+7,i[2]=h+6,i[3]=h+5,f=s[2],d=s[3],s[2]=d,s[3]=u,s[0]=f,s[1]=u+1
break
case 2:f=i[15],d=i[11],i[12]=i[3],i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=i[7],i[11]=h+3,i[4]=d,i[7]=h+4,i[0]=f,i[1]=h+7,i[2]=h+6,i[3]=h+5,f=s[3],s[2]=s[1],s[3]=u,s[0]=f,s[1]=u+1
break
case 3:i[12]=i[0],i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=i[1],i[11]=h+3,i[4]=i[2],i[7]=h+4,i[0]=i[3],i[1]=h+7,i[2]=h+6,i[3]=h+5,s[2]=s[0],s[3]=u,s[0]=s[1],s[1]=u+1}i[5]=a.length,a.push([(-4*a[i[0]][0]-a[i[15]][0]+6*(a[i[4]][0]+a[i[1]][0])-2*(a[i[12]][0]+a[i[3]][0])+3*(a[i[13]][0]+a[i[7]][0]))/9,(-4*a[i[0]][1]-a[i[15]][1]+6*(a[i[4]][1]+a[i[1]][1])-2*(a[i[12]][1]+a[i[3]][1])+3*(a[i[13]][1]+a[i[7]][1]))/9]),i[6]=a.length,a.push([(-4*a[i[3]][0]-a[i[12]][0]+6*(a[i[2]][0]+a[i[7]][0])-2*(a[i[0]][0]+a[i[15]][0])+3*(a[i[4]][0]+a[i[14]][0]))/9,(-4*a[i[3]][1]-a[i[12]][1]+6*(a[i[2]][1]+a[i[7]][1])-2*(a[i[0]][1]+a[i[15]][1])+3*(a[i[4]][1]+a[i[14]][1]))/9]),i[9]=a.length,a.push([(-4*a[i[12]][0]-a[i[3]][0]+6*(a[i[8]][0]+a[i[13]][0])-2*(a[i[0]][0]+a[i[15]][0])+3*(a[i[11]][0]+a[i[1]][0]))/9,(-4*a[i[12]][1]-a[i[3]][1]+6*(a[i[8]][1]+a[i[13]][1])-2*(a[i[0]][1]+a[i[15]][1])+3*(a[i[11]][1]+a[i[1]][1]))/9]),i[10]=a.length,a.push([(-4*a[i[15]][0]-a[i[0]][0]+6*(a[i[11]][0]+a[i[14]][0])-2*(a[i[12]][0]+a[i[3]][0])+3*(a[i[2]][0]+a[i[8]][0]))/9,(-4*a[i[15]][1]-a[i[0]][1]+6*(a[i[11]][1]+a[i[14]][1])-2*(a[i[12]][1]+a[i[3]][1])+3*(a[i[2]][1]+a[i[8]][1]))/9]),e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(s)})}}function o(e,t){for(var a=e.coords,r=e.colors,i=new Int32Array(16),s=new Int32Array(4);t.hasData;){var o=t.readFlag()
n(o>=0&&3>=o,"Unknown type7 flag")
var c,l,h=a.length
for(c=0,l=0!==o?12:16;l>c;c++)a.push(t.readCoordinate())
var u=r.length
for(c=0,l=0!==o?2:4;l>c;c++)r.push(t.readComponents())
var f,d,g,m
switch(o){case 0:i[12]=h+3,i[13]=h+4,i[14]=h+5,i[15]=h+6,i[8]=h+2,i[9]=h+13,i[10]=h+14,i[11]=h+7,i[4]=h+1,i[5]=h+12,i[6]=h+15,i[7]=h+8,i[0]=h,i[1]=h+11,i[2]=h+10,i[3]=h+9,s[2]=u+1,s[3]=u+2,s[0]=u,s[1]=u+3
break
case 1:f=i[12],d=i[13],g=i[14],m=i[15],i[12]=m,i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=g,i[9]=h+9,i[10]=h+10,i[11]=h+3,i[4]=d,i[5]=h+8,i[6]=h+11,i[7]=h+4,i[0]=f,i[1]=h+7,i[2]=h+6,i[3]=h+5,f=s[2],d=s[3],s[2]=d,s[3]=u,s[0]=f,s[1]=u+1
break
case 2:f=i[15],d=i[11],i[12]=i[3],i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=i[7],i[9]=h+9,i[10]=h+10,i[11]=h+3,i[4]=d,i[5]=h+8,i[6]=h+11,i[7]=h+4,i[0]=f,i[1]=h+7,i[2]=h+6,i[3]=h+5,f=s[3],s[2]=s[1],s[3]=u,s[0]=f,s[1]=u+1
break
case 3:i[12]=i[0],i[13]=h+0,i[14]=h+1,i[15]=h+2,i[8]=i[1],i[9]=h+9,i[10]=h+10,i[11]=h+3,i[4]=i[2],i[5]=h+8,i[6]=h+11,i[7]=h+4,i[0]=i[3],i[1]=h+7,i[2]=h+6,i[3]=h+5,s[2]=s[0],s[3]=u,s[0]=s[1],s[1]=u+1}e.figures.push({type:"patch",coords:new Int32Array(i),colors:new Int32Array(s)})}}function c(e){for(var t=e.coords[0][0],a=e.coords[0][1],r=t,i=a,n=1,s=e.coords.length;s>n;n++){var o=e.coords[n][0],c=e.coords[n][1]
t=t>o?o:t,a=a>c?c:a,r=o>r?o:r,i=c>i?c:i}e.bounds=[t,a,r,i]}function l(e){var t,a,r,i,n=e.coords,s=new Float32Array(2*n.length)
for(t=0,r=0,a=n.length;a>t;t++){var o=n[t]
s[r++]=o[0],s[r++]=o[1]}e.coords=s
var c=e.colors,l=new Uint8Array(3*c.length)
for(t=0,r=0,a=c.length;a>t;t++){var h=c[t]
l[r++]=h[0],l[r++]=h[1],l[r++]=h[2]}e.colors=l
var u=e.figures
for(t=0,a=u.length;a>t;t++){var f=u[t],d=f.coords,g=f.colors
for(r=0,i=d.length;i>r;r++)d[r]*=2,g[r]*=3}}function h(h,u,f,d){n(R(h),"Mesh data is not a stream")
var g=h.dict
this.matrix=u,this.shadingType=g.get("ShadingType"),this.type="Pattern",this.bbox=g.get("BBox")
var m=g.get("ColorSpace","CS")
m=Ye.parse(m,f,d),this.cs=m,this.background=g.has("Background")?m.getRgb(g.get("Background"),0):null
var p=g.get("Function"),b=p?Je.parseArray(f,p):null
this.coords=[],this.colors=[],this.figures=[]
var v={bitsPerCoordinate:g.get("BitsPerCoordinate"),bitsPerComponent:g.get("BitsPerComponent"),bitsPerFlag:g.get("BitsPerFlag"),decode:g.get("Decode"),colorFn:b,colorSpace:m,numComps:b?1:m.numComps},y=new e(h,v),k=!1
switch(this.shadingType){case yt.FREE_FORM_MESH:t(this,y)
break
case yt.LATTICE_FORM_MESH:var w=0|g.get("VerticesPerRow")
n(w>=2,"Invalid VerticesPerRow"),a(this,y,w)
break
case yt.COONS_PATCH_MESH:s(this,y),k=!0
break
case yt.TENSOR_PATCH_MESH:o(this,y),k=!0
break
default:r("Unsupported mesh type.")}if(k){c(this)
for(var x=0,C=this.figures.length;C>x;x++)i(this,x)}c(this),l(this)}e.prototype={get hasData(){if(this.stream.end)return this.stream.pos<this.stream.end
if(this.bufferLength>0)return!0
var e=this.stream.getByte()
return 0>e?!1:(this.buffer=e,this.bufferLength=8,!0)},readBits:function(e){var t=this.buffer,a=this.bufferLength
if(32===e){if(0===a)return(this.stream.getByte()<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte())>>>0
t=t<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte()
var r=this.stream.getByte()
return this.buffer=r&(1<<a)-1,(t<<8-a|(255&r)>>a)>>>0}if(8===e&&0===a)return this.stream.getByte()
for(;e>a;)t=t<<8|this.stream.getByte(),a+=8
return a-=e,this.bufferLength=a,this.buffer=t&(1<<a)-1,t>>a},align:function(){this.buffer=0,this.bufferLength=0},readFlag:function(){return this.readBits(this.context.bitsPerFlag)},readCoordinate:function(){var e=this.context.bitsPerCoordinate,t=this.readBits(e),a=this.readBits(e),r=this.context.decode,i=32>e?1/((1<<e)-1):2.3283064365386963e-10
return[t*i*(r[1]-r[0])+r[0],a*i*(r[3]-r[2])+r[2]]},readComponents:function(){for(var e=this.context.numComps,t=this.context.bitsPerComponent,a=32>t?1/((1<<t)-1):2.3283064365386963e-10,r=this.context.decode,i=this.tmpCompsBuf,n=0,s=4;e>n;n++,s+=2){var o=this.readBits(t)
i[n]=o*a*(r[s+1]-r[s])+r[s]}var c=this.tmpCsCompsBuf
return this.context.colorFn&&this.context.colorFn(i,0,c,0),this.context.colorSpace.getRgb(c,0)}}
var u=3,f=20,d=20,g=function(){function e(e){for(var t=[],a=0;e>=a;a++){var r=a/e,i=1-r
t.push(new Float32Array([i*i*i,3*r*i*i,3*r*r*i,r*r*r]))}return t}var t=[]
return function(a){return t[a]||(t[a]=e(a)),t[a]}}()
return h.prototype={getIR:function(){return["Mesh",this.shadingType,this.coords,this.colors,this.figures,this.bounds,this.matrix,this.bbox,this.background]}},h}(),wt.Dummy=function(){function e(){this.type="Pattern"}return e.prototype={getIR:function(){return["Dummy"]}},e}()
var xt=function(){function a(e,t,a,r,i,n,s){this.pdfManager=e,this.xref=t,this.handler=a,this.pageIndex=r,this.uniquePrefix=i,this.idCounters=n,this.fontCache=s}function i(){this.reset()}var s=20,o=100
i.prototype={check:function(){return++this.checked<o?!1:(this.checked=0,this.endTime<=Date.now())},reset:function(){this.endTime=Date.now()+s,this.checked=0}}
var c=Promise.resolve(),l=1,h=2
return a.prototype={hasBlendModes:function(e){if(!T(e))return!1
var t=Object.create(null)
e.objId&&(t[e.objId]=!0)
for(var a=[e];a.length;){var r,i=a.shift(),n=i.get("ExtGState")
if(T(n)){n=n.getAll()
for(r in n){var s=n[r],o=s.BM
if(I(o)&&"Normal"!==o.name)return!0}}var c=i.get("XObject")
if(T(c)){c=c.getAll()
for(r in c){var l=c[r]
if(R(l)){if(l.dict.objId){if(t[l.dict.objId])continue
t[l.dict.objId]=!0}var h=l.dict.get("Resources")
!T(h)||h.objId&&t[h.objId]||(a.push(h),h.objId&&(t[h.objId]=!0))}}}}return!1},buildFormXObject:function(e,t,a,r,i,n){var s=t.dict.getArray("Matrix"),o=t.dict.getArray("BBox"),c=t.dict.get("Group")
if(c){var l,h={matrix:s,bbox:o,smask:a,isolated:!1,knockout:!1},u=c.get("S")
I(u)&&"Transparency"===u.name&&(h.isolated=c.get("I")||!1,h.knockout=c.get("K")||!1,l=c.has("CS")?Ye.parse(c.get("CS"),this.xref,e):null),a&&a.backdrop&&(l=l||Ye.singletons.rgb,a.backdrop=l.getRgb(a.backdrop,0)),r.addOp(te.beginGroup,[h])}return r.addOp(te.paintFormXObjectBegin,[s,o]),this.getOperatorList(t,i,t.dict.get("Resources")||e,r,n).then(function(){r.addOp(te.paintFormXObjectEnd,[]),c&&r.addOp(te.endGroup,[h])})},buildPaintImageXObject:function(e,a,r,i,n,s){var o=this,c=a.dict,l=c.get("Width","W"),h=c.get("Height","H")
if(!(l&&S(l)&&h&&S(h)))return void t("Image dimensions are missing, or not numbers.")
if(-1!==PDFJS.maxImageSize&&l*h>PDFJS.maxImageSize)return void t("Image exceeded maximum allowed size and was removed.")
var u,f,d=c.get("ImageMask","IM")||!1
if(d){var g=c.get("Width","W"),m=c.get("Height","H"),p=g+7>>3,b=a.getBytes(p*m),v=c.get("Decode","D"),y=!!v&&v[0]>0
return u=Ta.createMask(b,g,m,a instanceof za,y),u.cached=!0,f=[u],i.addOp(te.paintImageMaskXObject,f),void(n&&(s[n]={fn:te.paintImageMaskXObject,args:f}))}var k=c.get("SMask","SM")||!1,w=c.get("Mask")||!1,x=200
if(r&&!k&&!w&&!(a instanceof Xa)&&x>l+h){var C=new Ta(this.xref,e,a,r,null,null)
return u=C.createImageData(!0),void i.addOp(te.paintInlineImageXObject,[u])}var A=this.uniquePrefix||"",I="img_"+A+ ++this.idCounters.obj
return i.addDependency(I),f=[I,l,h],!k&&!w&&a instanceof Xa&&a.isNativelySupported(this.xref,e)?(i.addOp(te.paintJpegXObject,f),void this.handler.send("obj",[I,this.pageIndex,"JpegStream",a.getIR()])):(Ta.buildImage(o.handler,o.xref,e,a,r).then(function(e){var t=e.createImageData(!1)
o.handler.send("obj",[I,o.pageIndex,"Image",t],[t.data.buffer])}).then(void 0,function(e){t("Unable to decode image: "+e),o.handler.send("obj",[I,o.pageIndex,"Image",null])}),i.addOp(te.paintImageXObject,f),void(n&&(s[n]={fn:te.paintImageXObject,args:f})))},handleSMask:function(e,t,a,r,i){var n=e.get("G"),s={subtype:e.get("S").name,backdrop:e.get("BC")},o=e.get("TR")
if(q(o)){for(var c=Je.parse(this.xref,o),l=new Uint8Array(256),h=new Float32Array(1),u=0;255>u;u++)h[0]=u/255,c(h,0,h,0),l[u]=255*h[0]|0
s.transferMap=l}return this.buildFormXObject(t,n,s,a,r,i.state.clone())},handleTilingType:function(e,t,a,r,i,n,s){var o=new St,c=[i.get("Resources"),a],l=Be.merge(this.xref,c)
return this.getOperatorList(r,s,l,o).then(function(){n.addDependencies(o.dependencies),n.addOp(e,F({fnArray:o.fnArray,argsArray:o.argsArray},i,t))})},handleSetFont:function(e,t,a,r,i,n){var s
t&&(t=t.slice(),s=t[0].name)
var o=this
return this.loadFont(s,a,this.xref,e).then(function(t){return t.font.isType3Font?t.loadType3Data(o,e,r,i).then(function(){return t},function(e){return o.handler.send("UnsupportedFeature",{featureId:ae.font}),new Ct("g_font_error",new na("Type3 font load error: "+e),t.font)}):t}).then(function(e){return n.font=e.font,e.send(o.handler),e.loadedName})},handleText:function(e,t){var a=t.font,r=a.charsToGlyphs(e),i=!!(t.textRenderingMode&V.ADD_TO_PATH_FLAG)
if(a.data&&(i||PDFJS.disableFontFace))for(var n=function(e){if(!a.renderer.hasBuiltPath(e)){var t=a.renderer.getPathJs(e)
this.handler.send("commonobj",[a.loadedName+"_path_"+e,"FontPath",t])}}.bind(this),s=0,o=r.length;o>s;s++){var c=r[s]
n(c.fontChar)
var l=c.accent
l&&l.fontChar&&n(l.fontChar)}return r},setGState:function(a,r,i,n,s,o){var c=[],l=r.map,h=this,u=Promise.resolve()
for(var f in l){var d=l[f]
switch(f){case"Type":break
case"LW":case"LC":case"LJ":case"ML":case"D":case"RI":case"FL":case"CA":case"ca":c.push([f,d])
break
case"Font":u=u.then(function(){return h.handleSetFont(a,null,d[0],i,n,o.state).then(function(e){i.addDependency(e),c.push([f,[e,d[1]]])})})
break
case"BM":c.push([f,d])
break
case"SMask":if(I(d)&&"None"===d.name){c.push([f,!1])
break}var g=s.fetchIfRef(d)
T(g)?(u=u.then(function(){return h.handleSMask(g,a,i,n,o)}),c.push([f,!0])):t("Unsupported SMask type")
break
case"OP":case"op":case"OPM":case"BG":case"BG2":case"UCR":case"UCR2":case"TR":case"TR2":case"HT":case"SM":case"SA":case"AIS":case"TK":e("graphic state operator "+f)
break
default:e("Unknown graphic state operator "+f)}}return u.then(function(){c.length>=0&&i.addOp(te.setGState,[c])})},loadFont:function(e,a,r,i){function s(){return Promise.resolve(new Ct("g_font_error",new na("Font "+e+" is not available"),a))}var o
if(a)n(M(a)),o=a
else{var c=i.get("Font")
if(!c)return t("fontRes not available"),s()
o=c.getRaw(e)}if(!o)return t("fontRef not available"),s()
if(this.fontCache.has(o))return this.fontCache.get(o)
if(a=r.fetchIfRef(o),!T(a))return s()
if(a.translated)return a.translated
var l=P(),h=this.preEvaluateFont(a,r),u=h.descriptor,f=o.num+"_"+o.gen
if(T(u)){u.fontAliases||(u.fontAliases=Object.create(null))
var d=u.fontAliases,g=h.hash
if(d[g]){var m=d[g].aliasRef
if(m&&this.fontCache.has(m))return this.fontCache.putAlias(o,m),this.fontCache.get(o)}d[g]||(d[g]={fontID:ia.getFontID()}),d[g].aliasRef=o,f=d[g].fontID}var p=T(o)
p||this.fontCache.put(o,l.promise),a.loadedName="g_"+this.pdfManager.docId+"_f"+(p?e.replace(/\W/g,""):f),a.translated=l.promise
var b
try{b=Promise.resolve(this.translateFont(h,r))}catch(v){b=Promise.reject(v)}var y=this
return b.then(function(e){if(void 0!==e.fontType){var t=r.stats.fontTypes
t[e.fontType]=!0}l.resolve(new Ct(a.loadedName,e,a))},function(e){y.handler.send("UnsupportedFeature",{featureId:ae.font})
try{var t=h.descriptor,i=t&&t.get("FontFile3"),n=i&&i.get("Subtype"),s=_(h.type,n&&n.name),o=r.stats.fontTypes
o[s]=!0}catch(c){}l.resolve(new Ct(a.loadedName,new na(e instanceof Error?e.message:e),a))}),l.promise},buildPath:function(e,t,a){var r=e.length-1
if(a||(a=[]),0>r||e.fnArray[r]!==te.constructPath)e.addOp(te.constructPath,[[t],a])
else{var i=e.argsArray[r]
i[0].push(t),Array.prototype.push.apply(i[1],a)}},handleColorN:function(e,t,a,r,i,n,s,o){var c,u=a[a.length-1]
if(I(u)&&(c=i.get(u.name))){var f=R(c)?c.dict:c,d=f.get("PatternType")
if(d===l){var g=r.base?r.base.getRgb(a,0):null
return this.handleTilingType(t,g,n,c,f,e,s)}if(d===h){var m=f.get("Shading"),p=f.get("Matrix")
return c=kt.parseShading(m,p,o,n,this.handler),e.addOp(t,c.getIR()),Promise.resolve()}return Promise.reject("Unknown PatternType: "+d)}return e.addOp(t,a),Promise.resolve()},getOperatorList:function(a,s,o,l,h){var u=this,f=this.xref,d={}
n(l),o=o||Be.empty
var g=o.get("XObject")||Be.empty,m=o.get("Pattern")||Be.empty,p=new At(h||new Bt),b=new Tt(a,f,p),v=new i
return new Promise(function y(a,i){s.ensureNotTerminated(),v.reset()
for(var h,k,w,x,C={};!(h=v.check())&&(C.args=null,b.read(C));){var B=C.args,O=C.fn
switch(0|O){case te.paintXObject:if(B[0].code)break
var L=B[0].name
if(!L){t("XObject must be referred to by name.")
continue}if(void 0!==d[L]){l.addOp(d[L].fn,d[L].args),B=null
continue}var M=g.get(L)
if(M){n(R(M),"XObject should be a stream")
var P=M.dict.get("Subtype")
if(n(I(P),"XObject should have a Name subtype"),"Form"===P.name)return p.save(),u.buildFormXObject(o,M,null,l,s,p.state.clone()).then(function(){p.restore(),y(a,i)},i)
if("Image"===P.name){u.buildPaintImageXObject(o,M,!1,l,L,d),B=null
continue}if("PS"===P.name){e("Ignored XObject subtype PS")
continue}r("Unhandled XObject subtype "+P.name)}break
case te.setFont:var E=B[1]
return u.handleSetFont(o,B,null,l,s,p.state).then(function(e){l.addDependency(e),l.addOp(te.setFont,[e,E]),y(a,i)},i)
case te.endInlineImage:var D=B[0].cacheKey
if(D){var q=d[D]
if(void 0!==q){l.addOp(q.fn,q.args),B=null
continue}}u.buildPaintImageXObject(o,B[0],!0,l,D,d),B=null
continue
case te.showText:B[0]=u.handleText(B[0],p.state)
break
case te.showSpacedText:var F=B[0],U=[],N=F.length,j=p.state
for(k=0;N>k;++k){var z=F[k]
A(z)?Array.prototype.push.apply(U,u.handleText(z,j)):S(z)&&U.push(z)}B[0]=U,O=te.showText
break
case te.nextLineShowText:l.addOp(te.nextLine),B[0]=u.handleText(B[0],p.state),O=te.showText
break
case te.nextLineSetSpacingShowText:l.addOp(te.nextLine),l.addOp(te.setWordSpacing,[B.shift()]),l.addOp(te.setCharSpacing,[B.shift()]),B[0]=u.handleText(B[0],p.state),O=te.showText
break
case te.setTextRenderingMode:p.state.textRenderingMode=B[0]
break
case te.setFillColorSpace:p.state.fillColorSpace=Ye.parse(B[0],f,o)
continue
case te.setStrokeColorSpace:p.state.strokeColorSpace=Ye.parse(B[0],f,o)
continue
case te.setFillColor:x=p.state.fillColorSpace,B=x.getRgb(B,0),O=te.setFillRGBColor
break
case te.setStrokeColor:x=p.state.strokeColorSpace,B=x.getRgb(B,0),O=te.setStrokeRGBColor
break
case te.setFillGray:p.state.fillColorSpace=Ye.singletons.gray,B=Ye.singletons.gray.getRgb(B,0),O=te.setFillRGBColor
break
case te.setStrokeGray:p.state.strokeColorSpace=Ye.singletons.gray,B=Ye.singletons.gray.getRgb(B,0),O=te.setStrokeRGBColor
break
case te.setFillCMYKColor:p.state.fillColorSpace=Ye.singletons.cmyk,B=Ye.singletons.cmyk.getRgb(B,0),O=te.setFillRGBColor
break
case te.setStrokeCMYKColor:p.state.strokeColorSpace=Ye.singletons.cmyk,B=Ye.singletons.cmyk.getRgb(B,0),O=te.setStrokeRGBColor
break
case te.setFillRGBColor:p.state.fillColorSpace=Ye.singletons.rgb,B=Ye.singletons.rgb.getRgb(B,0)
break
case te.setStrokeRGBColor:p.state.strokeColorSpace=Ye.singletons.rgb,B=Ye.singletons.rgb.getRgb(B,0)
break
case te.setFillColorN:if(x=p.state.fillColorSpace,"Pattern"===x.name)return u.handleColorN(l,te.setFillColorN,B,x,m,o,s,f).then(function(){y(a,i)},i)
B=x.getRgb(B,0),O=te.setFillRGBColor
break
case te.setStrokeColorN:if(x=p.state.strokeColorSpace,"Pattern"===x.name)return u.handleColorN(l,te.setStrokeColorN,B,x,m,o,s,f).then(function(){y(a,i)},i)
B=x.getRgb(B,0),O=te.setStrokeRGBColor
break
case te.shadingFill:var H=o.get("Shading")
H||r("No shading resource found")
var _=H.get(B[0].name)
_||r("No shading object found")
var G=kt.parseShading(_,null,f,o,u.handler),X=G.getIR()
B=[X],O=te.shadingFill
break
case te.setGState:var J=B[0],W=o.get("ExtGState")
if(!T(W)||!W.has(J.name))break
var V=W.get(J.name)
return u.setGState(o,V,l,s,f,p).then(function(){y(a,i)},i)
case te.moveTo:case te.lineTo:case te.curveTo:case te.curveTo2:case te.curveTo3:case te.closePath:u.buildPath(l,O,B)
continue
case te.rectangle:u.buildPath(l,O,B)
continue
case te.markPoint:case te.markPointProps:case te.beginMarkedContent:case te.beginMarkedContentProps:case te.endMarkedContent:case te.beginCompat:case te.endCompat:continue}l.addOp(O,B)}if(h)return void c.then(function(){y(a,i)},i)
for(k=0,w=b.savedStatesDepth;w>k;k++)l.addOp(te.restore,[])
a()})},getTextContent:function(e,t,a,r,s){function o(){if(b.initialized)return b
var e=C.font
e.loadedName in p.styles||(p.styles[e.loadedName]={fontFamily:e.fallbackName,ascent:e.ascent,descent:e.descent,vertical:e.vertical}),b.fontName=e.loadedName
var t=[C.fontSize*C.textHScale,0,0,C.fontSize,0,C.textRise]
if(e.isType3Font&&C.fontMatrix!==W&&1===C.fontSize){var a=e.bbox[3]-e.bbox[1]
a>0&&(a*=C.fontMatrix[3],t[3]*=a)}var r=me.transform(C.ctm,me.transform(C.textMatrix,t))
b.transform=r,e.vertical?(b.width=Math.sqrt(r[0]*r[0]+r[1]*r[1]),b.height=0,b.vertical=!0):(b.width=0,b.height=Math.sqrt(r[2]*r[2]+r[3]*r[3]),b.vertical=!1)
var i=C.textLineMatrix[0],n=C.textLineMatrix[1],s=Math.sqrt(i*i+n*n)
i=C.ctm[0],n=C.ctm[1]
var o=Math.sqrt(i*i+n*n)
b.textAdvanceScale=o*s,b.lastAdvanceWidth=0,b.lastAdvanceHeight=0
var c=e.spaceWidth/1e3*C.fontSize
return c?(b.spaceWidth=c,b.fakeSpaceMin=c*v,b.fakeMultiSpaceMin=c*y,b.fakeMultiSpaceMax=c*k,b.textRunBreakAllowed=!e.isMonospace):(b.spaceWidth=0,b.fakeSpaceMin=1/0,b.fakeMultiSpaceMin=1/0,b.fakeMultiSpaceMax=0,b.textRunBreakAllowed=!1),b.initialized=!0,b}function l(e){for(var t,a=0,r=e.length;r>a&&(t=e.charCodeAt(a))>=32&&127>=t;)a++
return r>a?e.replace(m," "):e}function h(e){var t=e.str.join(""),a=PDFJS.bidi(t,-1,e.vertical)
return{str:s?l(a.str):a.str,dir:a.dir,width:e.width,height:e.height,transform:e.transform,fontName:e.fontName}}function u(e,t){return w.loadFont(e,t,x,a).then(function(e){C.font=e.font,C.fontMatrix=e.font.fontMatrix||W})}function f(e){for(var t=C.font,a=o(),r=0,i=0,n=t.charsToGlyphs(e),s=t.defaultVMetrics,c=0;c<n.length;c++){var l=n[c],h=null,u=null,f=null
t.vertical?l.vmetric?(f=l.vmetric[0],h=l.vmetric[1],u=l.vmetric[2]):(f=l.width,h=.5*l.width,u=s[2]):f=l.width
var g=l.unicode
void 0!==Qt[g]&&(g=Qt[g]),g=z(g)
var m=C.charSpacing
if(l.isSpace){var p=C.wordSpacing
m+=p,p>0&&d(p,a.str)}var b=0,v=0
if(t.vertical){var y=f*C.fontMatrix[0]
v=y*C.fontSize+m,i+=v}else{var k=f*C.fontMatrix[0]
b=(k*C.fontSize+m)*C.textHScale,r+=b}C.translateTextMatrix(b,v),a.str.push(g)}return t.vertical?(a.lastAdvanceHeight=i,a.height+=Math.abs(i*a.textAdvanceScale)):(a.lastAdvanceWidth=r,a.width+=r*a.textAdvanceScale),a}function d(e,t){if(!(e<b.fakeSpaceMin)){if(e<b.fakeMultiSpaceMin)return void t.push(" ")
for(var a=Math.round(e/b.spaceWidth);a-- >0;)t.push(" ")}}function g(){b.initialized&&(p.items.push(h(b)),b.initialized=!1,b.str.length=0)}r=r||new At(new It)
var m=/\s/g,p={items:[],styles:Object.create(null)},b={initialized:!1,str:[],width:0,height:0,vertical:!1,lastAdvanceWidth:0,lastAdvanceHeight:0,textAdvanceScale:0,spaceWidth:0,fakeSpaceMin:1/0,fakeMultiSpaceMin:1/0,fakeMultiSpaceMax:-0,textRunBreakAllowed:!1,transform:null,fontName:null},v=.3,y=1.5,k=4,w=this,x=this.xref
a=x.fetchIfRef(a)||Be.empty
var C,S=null,A={},B=new Tt(e,x,r),L=new i
return new Promise(function M(e,i){t.ensureNotTerminated(),L.reset()
for(var l,h={},m=[];!(l=L.check())&&(m.length=0,h.args=m,B.read(h));){C=r.state
var v=h.fn
m=h.args
var y
switch(0|v){case te.setFont:return g(),C.fontSize=m[1],u(m[0].name).then(function(){M(e,i)},i)
case te.setTextRise:g(),C.textRise=m[0]
break
case te.setHScale:g(),C.textHScale=m[0]/100
break
case te.setLeading:g(),C.leading=m[0]
break
case te.moveText:var k=C.font?0===(C.font.vertical?m[0]:m[1]):!1
if(y=m[0]-m[1],k&&b.initialized&&y>0&&y<=b.fakeMultiSpaceMax){C.translateTextLineMatrix(m[0],m[1]),b.width+=m[0]-b.lastAdvanceWidth,b.height+=m[1]-b.lastAdvanceHeight
var x=m[0]-b.lastAdvanceWidth-(m[1]-b.lastAdvanceHeight)
d(x,b.str)
break}g(),C.translateTextLineMatrix(m[0],m[1]),C.textMatrix=C.textLineMatrix.slice()
break
case te.setLeadingMoveText:g(),C.leading=-m[1],C.translateTextLineMatrix(m[0],m[1]),C.textMatrix=C.textLineMatrix.slice()
break
case te.nextLine:g(),C.carriageReturn()
break
case te.setTextMatrix:g(),C.setTextMatrix(m[0],m[1],m[2],m[3],m[4],m[5]),C.setTextLineMatrix(m[0],m[1],m[2],m[3],m[4],m[5])
break
case te.setCharSpacing:C.charSpacing=m[0]
break
case te.setWordSpacing:C.wordSpacing=m[0]
break
case te.beginText:g(),C.textMatrix=ge.slice(),C.textLineMatrix=ge.slice()
break
case te.showSpacedText:for(var P,E=m[0],D=0,q=E.length;q>D;D++)if("string"==typeof E[D])f(E[D])
else{o(),y=E[D]*C.fontSize/1e3
var F=!1
C.font.vertical?(P=y*(C.textHScale*C.textMatrix[2]+C.textMatrix[3]),C.translateTextMatrix(0,y),F=b.textRunBreakAllowed&&y>b.fakeMultiSpaceMax,F||(b.height+=P)):(y=-y,P=y*(C.textHScale*C.textMatrix[0]+C.textMatrix[1]),C.translateTextMatrix(y,0),F=b.textRunBreakAllowed&&y>b.fakeMultiSpaceMax,F||(b.width+=P)),F?g():y>0&&d(y,b.str)}break
case te.showText:f(m[0])
break
case te.nextLineShowText:g(),C.carriageReturn(),f(m[0])
break
case te.nextLineSetSpacingShowText:g(),C.wordSpacing=m[0],C.charSpacing=m[1],C.carriageReturn(),f(m[2])
break
case te.paintXObject:if(g(),m[0].code)break
S||(S=a.get("XObject")||Be.empty)
var U=m[0].name
if(A.key===U){A.texts&&(me.appendToArray(p.items,A.texts.items),me.extendObj(p.styles,A.texts.styles))
break}var N=S.get(U)
if(!N)break
n(R(N),"XObject should be a stream")
var j=N.dict.get("Subtype")
if(n(I(j),"XObject should have a Name subtype"),"Form"!==j.name){A.key=U,A.texts=null
break}r.save()
var z=N.dict.get("Matrix")
return O(z)&&6===z.length&&r.transform(z),w.getTextContent(N,t,N.dict.get("Resources")||a,r,s).then(function(t){me.appendToArray(p.items,t.items),me.extendObj(p.styles,t.styles),r.restore(),A.key=U,A.texts=t,M(e,i)},i)
case te.setGState:g()
var H=m[0],_=a.get("ExtGState")
if(!T(_)||!_.has(H.name))break
var G=_.get(H.name),X=null
for(var J in G)"Font"===J&&(n(!X),X=G[J])
if(X)return C.fontSize=X[1],u(X[0]).then(function(){M(e,i)},i)}}return l?void c.then(function(){M(e,i)},i):(g(),void e(p))})},extractDataStructures:function(e,t,a,i){var n=e.get("ToUnicode")||t.get("ToUnicode")
if(n&&(i.toUnicode=this.readToUnicode(n)),i.composite){var s=e.get("CIDSystemInfo")
T(s)&&(i.cidSystemInfo={registry:s.get("Registry"),ordering:s.get("Ordering"),supplement:s.get("Supplement")})
var o=e.get("CIDToGIDMap")
R(o)&&(i.cidToGidMap=this.readCidToGidMap(o))}var c,l=[],h=null
if(e.has("Encoding")){if(c=e.get("Encoding"),T(c)){if(h=c.get("BaseEncoding"),h=I(h)?h.name:null,c.has("Differences"))for(var u=c.get("Differences"),f=0,d=0,g=u.length;g>d;d++){var m=u[d]
if(S(m))f=m
else if(I(m))l[f++]=m.name
else{if(M(m)){u[d--]=a.fetch(m)
continue}r("Invalid entry in 'Differences' array: "+m)}}}else I(c)?h=c.name:r("Encoding is not a Name nor a Dict")
"MacRomanEncoding"!==h&&"MacExpertEncoding"!==h&&"WinAnsiEncoding"!==h&&(h=null)}h?i.defaultEncoding=Ht[h].slice():(c="TrueType"===i.type?Ht.WinAnsiEncoding:Ht.StandardEncoding,i.flags&zt.Symbolic&&(c=Ht.MacRomanEncoding,i.file||(/Symbol/i.test(i.name)?c=Ht.SymbolSetEncoding:/Dingbats/i.test(i.name)&&(c=Ht.ZapfDingbatsEncoding))),i.defaultEncoding=c),i.differences=l,i.baseEncodingName=h,i.dict=e},readToUnicode:function(e){var t,a=e
if(I(a))return t=Et.create(a,{url:PDFJS.cMapUrl,packed:PDFJS.cMapPacked},null),t instanceof Mt?new ta(0,65535):new ea(t.getMap())
if(R(a)){if(t=Et.create(a,{url:PDFJS.cMapUrl,packed:PDFJS.cMapPacked},null),t instanceof Mt)return new ta(0,65535)
var r=new Array(t.length)
return t.forEach(function(e,t){for(var a=[],i=0;i<t.length;i+=2){var n=t.charCodeAt(i)<<8|t.charCodeAt(i+1)
if(55296===(63488&n)){i+=2
var s=t.charCodeAt(i)<<8|t.charCodeAt(i+1)
a.push(((1023&n)<<10)+(1023&s)+65536)}else a.push(n)}r[e]=String.fromCharCode.apply(String,a)}),new ea(r)}return null},readCidToGidMap:function(e){for(var t=e.getBytes(),a=[],r=0,i=t.length;i>r;r++){var n=t[r++]<<8|t[r]
if(0!==n){var s=r>>1
a[s]=n}}return a},extractWidths:function(e,t,a,r){var i,n,s,o,c,l,h,u,f=[],d=0,g=[]
if(r.composite){if(d=e.get("DW")||1e3,u=e.get("W"))for(n=0,s=u.length;s>n;n++)if(l=u[n++],h=t.fetchIfRef(u[n]),O(h))for(o=0,c=h.length;c>o;o++)f[l++]=h[o]
else{var m=u[++n]
for(o=l;h>=o;o++)f[o]=m}if(r.vertical){var p=e.get("DW2")||[880,-1e3]
if(i=[p[1],.5*d,p[0]],p=e.get("W2"))for(n=0,s=p.length;s>n;n++)if(l=p[n++],h=t.fetchIfRef(p[n]),O(h))for(o=0,c=h.length;c>o;o++)g[l++]=[h[o++],h[o++],h[o]]
else{var b=[p[++n],p[++n],p[++n]]
for(o=l;h>=o;o++)g[o]=b}}}else{var v=r.firstChar
if(u=e.get("Widths")){for(o=v,n=0,s=u.length;s>n;n++)f[o++]=u[n]
d=parseFloat(a.get("MissingWidth"))||0}else{var y=e.get("BaseFont")
if(I(y)){var k=this.getBaseFontMetrics(y.name)
f=this.buildCharCodeToWidth(k.widths,r),d=k.defaultWidth}}}var w=!0,x=d
for(var C in f){var S=f[C]
if(S)if(x){if(x!==S){w=!1
break}}else x=S}w&&(r.flags|=zt.FixedPitch),r.defaultWidth=d,r.widths=f,r.defaultVMetrics=i,r.vmetrics=g},isSerifFont:function(e){var t=e.split("-")[0]
return t in Xt||-1!==t.search(/serif/gi)},getBaseFontMetrics:function(e){var t=0,a=[],r=!1,i=_t[e]||e
i in Oa||(i=this.isSerifFont(e)?"Times-Roman":"Helvetica")
var n=Oa[i]
return S(n)?(t=n,r=!0):a=n,{defaultWidth:t,monospace:r,widths:a}},buildCharCodeToWidth:function(e,t){for(var a=Object.create(null),r=t.differences,i=t.defaultEncoding,n=0;256>n;n++)n in r&&e[r[n]]?a[n]=e[r[n]]:n in i&&e[i[n]]&&(a[n]=e[i[n]])
return a},preEvaluateFont:function(e,t){var a=e,i=e.get("Subtype")
n(I(i),"invalid font Subtype")
var s,o=!1
if("Type0"===i.name){var c=e.get("DescendantFonts")
c||r("Descendant fonts are not specified"),e=O(c)?t.fetchIfRef(c[0]):c,i=e.get("Subtype"),n(I(i),"invalid font Subtype"),o=!0}var l=e.get("FontDescriptor")
if(l){var h=new hr,u=a.getRaw("Encoding")
if(I(u))h.update(u.name)
else if(M(u))h.update(u.num+"_"+u.gen)
else if(T(u))for(var f=u.getKeys(),d=0,g=f.length;g>d;d++){var m=u.getRaw(f[d])
I(m)?h.update(m.name):M(m)?h.update(m.num+"_"+m.gen):O(m)&&h.update(m.length.toString())}var p=e.get("ToUnicode")||a.get("ToUnicode")
if(R(p)){var b=p.str||p
s=b.buffer?new Uint8Array(b.buffer.buffer,0,b.bufferLength):new Uint8Array(b.bytes.buffer,b.start,b.end-b.start),h.update(s)}else I(p)&&h.update(p.name)
var v=e.get("Widths")||a.get("Widths")
v&&(s=new Uint8Array(new Uint32Array(v).buffer),h.update(s))}return{descriptor:l,dict:e,baseDict:a,composite:o,type:i.name,hash:h?h.hexdigest():""}},translateFont:function(t,a){var i,s=t.baseDict,o=t.dict,c=t.composite,l=t.descriptor,h=t.type,u=c?65535:255
if(!l){if("Type3"!==h){var f=o.get("BaseFont")
I(f)||r("Base font is not specified"),f=f.name.replace(/[,_]/g,"-")
var d=this.getBaseFontMetrics(f),g=f.split("-")[0],m=(this.isSerifFont(g)?zt.Serif:0)|(d.monospace?zt.FixedPitch:0)|(Jt[g]?zt.Symbolic:zt.Nonsymbolic)
return i={type:h,name:f,widths:d.widths,defaultWidth:d.defaultWidth,flags:m,firstChar:0,lastChar:u},this.extractDataStructures(o,o,a,i),i.widths=this.buildCharCodeToWidth(d.widths,i),new ia(f,null,i)}l=new Be(null),l.set("FontName",Ae.get(h)),l.set("FontBBox",o.get("FontBBox"))}var p=o.get("FirstChar")||0,b=o.get("LastChar")||u,v=l.get("FontName"),y=o.get("BaseFont")
if(A(v)&&(v=Ae.get(v)),A(y)&&(y=Ae.get(y)),"Type3"!==h){var k=v&&v.name,w=y&&y.name
k!==w&&(e("The FontDescriptor's FontName is \""+k+'" but should be the same as the Font\'s BaseFont "'+w+'"'),k&&w&&0===w.indexOf(k)&&(v=y))}v=v||y,n(I(v),"invalid font name")
var x=l.get("FontFile","FontFile2","FontFile3")
if(x&&x.dict){var C=x.dict.get("Subtype")
C&&(C=C.name)
var S=x.dict.get("Length1"),B=x.dict.get("Length2")}if(i={type:h,name:v.name,subtype:C,file:x,length1:S,length2:B,loadedName:s.loadedName,composite:c,wideChars:c,fixedPitch:!1,fontMatrix:o.get("FontMatrix")||W,firstChar:p||0,lastChar:b||u,bbox:l.get("FontBBox"),ascent:l.get("Ascent"),descent:l.get("Descent"),xHeight:l.get("XHeight"),capHeight:l.get("CapHeight"),flags:l.get("Flags"),italicAngle:l.get("ItalicAngle"),coded:!1},c){var T=s.get("Encoding")
I(T)&&(i.cidEncoding=T.name),i.cMap=Et.create(T,{url:PDFJS.cMapUrl,packed:PDFJS.cMapPacked},null),i.vertical=i.cMap.vertical}return this.extractDataStructures(o,s,a,i),this.extractWidths(o,a,l,i),"Type3"===h&&(i.isType3Font=!0),new ia(v.name,x,i)}},a}(),Ct=function(){function e(e,t,a){this.loadedName=e,this.font=t,this.dict=a,this.type3Loaded=null,this.sent=!1}return e.prototype={send:function(e){if(!this.sent){var t=this.font.exportData()
e.send("commonobj",[this.loadedName,"Font",t]),this.sent=!0}},loadType3Data:function(e,a,r,i){if(n(this.font.isType3Font),this.type3Loaded)return this.type3Loaded
for(var s=this.font,o=Promise.resolve(),c=this.dict.get("CharProcs").getAll(),l=this.dict.get("Resources")||a,h=Object.keys(c),u={},f=0,d=h.length;d>f;++f)o=o.then(function(a){var n=c[a],s=new St
return e.getOperatorList(n,i,l,s).then(function(){u[a]=s.getIR(),r.addDependencies(s.dependencies)},function(e){t('Type3 font resource "'+a+'" is not available')
var r=new St
u[a]=r.getIR()})}.bind(this,h[f]))
return this.type3Loaded=o.then(function(){s.charProcOperatorList=u}),this.type3Loaded}},e}(),St=function(){function e(e){for(var t=[],a=e.fnArray,r=e.argsArray,i=0,n=e.length;n>i;i++)switch(a[i]){case te.paintInlineImageXObject:case te.paintInlineImageXObjectGroup:case te.paintImageMaskXObject:var s=r[i][0]
s.cached||t.push(s.data.buffer)}return t}function t(e,t,a){this.messageHandler=t,this.fnArray=[],this.argsArray=[],this.dependencies={},this._totalLength=0,this.pageIndex=a,this.intent=e}var a=1e3,r=a-5
return t.prototype={get length(){return this.argsArray.length},get totalLength(){return this._totalLength+this.length},addOp:function(e,t){this.fnArray.push(e),this.argsArray.push(t),this.messageHandler&&(this.fnArray.length>=a?this.flush():this.fnArray.length>=r&&(e===te.restore||e===te.endText)&&this.flush())},addDependency:function(e){e in this.dependencies||(this.dependencies[e]=!0,this.addOp(te.dependency,[e]))},addDependencies:function(e){for(var t in e)this.addDependency(t)},addOpList:function(e){me.extendObj(this.dependencies,e.dependencies)
for(var t=0,a=e.length;a>t;t++)this.addOp(e.fnArray[t],e.argsArray[t])},getIR:function(){return{fnArray:this.fnArray,argsArray:this.argsArray,length:this.length}},flush:function(t){"oplist"!==this.intent&&(new Ot).optimize(this)
var a=e(this),r=this.length
this._totalLength+=r,this.messageHandler.send("RenderPageChunk",{operatorList:{fnArray:this.fnArray,argsArray:this.argsArray,lastChunk:t,length:r},pageIndex:this.pageIndex,intent:this.intent},a),this.dependencies={},this.fnArray.length=0,this.argsArray.length=0}},t}(),At=function(){function e(e){this.state=e,this.stateStack=[]}return e.prototype={save:function(){var e=this.state
this.stateStack.push(this.state),this.state=e.clone()},restore:function(){var e=this.stateStack.pop()
e&&(this.state=e)},transform:function(e){this.state.ctm=me.transform(this.state.ctm,e)}},e}(),It=function(){function e(){this.ctm=new Float32Array(ge),this.fontSize=0,this.font=null,this.fontMatrix=W,this.textMatrix=ge.slice(),this.textLineMatrix=ge.slice(),this.charSpacing=0,this.wordSpacing=0,this.leading=0,this.textHScale=1,this.textRise=0}return e.prototype={setTextMatrix:function(e,t,a,r,i,n){var s=this.textMatrix
s[0]=e,s[1]=t,s[2]=a,s[3]=r,s[4]=i,s[5]=n},setTextLineMatrix:function(e,t,a,r,i,n){var s=this.textLineMatrix
s[0]=e,s[1]=t,s[2]=a,s[3]=r,s[4]=i,s[5]=n},translateTextMatrix:function(e,t){var a=this.textMatrix
a[4]=a[0]*e+a[2]*t+a[4],a[5]=a[1]*e+a[3]*t+a[5]},translateTextLineMatrix:function(e,t){var a=this.textLineMatrix
a[4]=a[0]*e+a[2]*t+a[4],a[5]=a[1]*e+a[3]*t+a[5]},calcRenderMatrix:function(e){var t=[this.fontSize*this.textHScale,0,0,this.fontSize,0,this.textRise]
return me.transform(e,me.transform(this.textMatrix,t))},carriageReturn:function(){this.translateTextLineMatrix(0,-this.leading),this.textMatrix=this.textLineMatrix.slice()},clone:function(){var e=Object.create(this)
return e.textMatrix=this.textMatrix.slice(),e.textLineMatrix=this.textLineMatrix.slice(),e.fontMatrix=this.fontMatrix.slice(),e}},e}(),Bt=function(){function e(){this.ctm=new Float32Array(ge),this.font=null,this.textRenderingMode=V.FILL,this.fillColorSpace=Ye.singletons.gray,this.strokeColorSpace=Ye.singletons.gray}return e.prototype={clone:function(){return Object.create(this)}},e}(),Tt=function(){function a(e,t,a){this.parser=new Ma(new Pa(e,r),!1,t),this.stateManager=a,this.nonProcessedArgs=[]}var r={w:{id:te.setLineWidth,numArgs:1,variableArgs:!1},J:{id:te.setLineCap,numArgs:1,variableArgs:!1},j:{id:te.setLineJoin,numArgs:1,variableArgs:!1},M:{id:te.setMiterLimit,numArgs:1,variableArgs:!1},d:{id:te.setDash,numArgs:2,variableArgs:!1},ri:{id:te.setRenderingIntent,numArgs:1,variableArgs:!1},i:{id:te.setFlatness,numArgs:1,variableArgs:!1},gs:{id:te.setGState,numArgs:1,variableArgs:!1},q:{id:te.save,numArgs:0,variableArgs:!1},Q:{id:te.restore,numArgs:0,variableArgs:!1},cm:{id:te.transform,numArgs:6,variableArgs:!1},m:{id:te.moveTo,numArgs:2,variableArgs:!1},l:{id:te.lineTo,numArgs:2,variableArgs:!1},c:{id:te.curveTo,numArgs:6,variableArgs:!1},v:{id:te.curveTo2,numArgs:4,variableArgs:!1},y:{id:te.curveTo3,numArgs:4,variableArgs:!1},h:{id:te.closePath,numArgs:0,variableArgs:!1},re:{id:te.rectangle,numArgs:4,variableArgs:!1},S:{id:te.stroke,numArgs:0,variableArgs:!1},s:{id:te.closeStroke,numArgs:0,variableArgs:!1},f:{id:te.fill,numArgs:0,variableArgs:!1},F:{id:te.fill,numArgs:0,variableArgs:!1},"f*":{id:te.eoFill,numArgs:0,variableArgs:!1},B:{id:te.fillStroke,numArgs:0,variableArgs:!1},"B*":{id:te.eoFillStroke,numArgs:0,variableArgs:!1},b:{id:te.closeFillStroke,numArgs:0,variableArgs:!1},"b*":{id:te.closeEOFillStroke,numArgs:0,variableArgs:!1},n:{id:te.endPath,numArgs:0,variableArgs:!1},W:{id:te.clip,numArgs:0,variableArgs:!1},"W*":{id:te.eoClip,numArgs:0,variableArgs:!1},BT:{id:te.beginText,numArgs:0,variableArgs:!1},ET:{id:te.endText,numArgs:0,variableArgs:!1},Tc:{id:te.setCharSpacing,numArgs:1,variableArgs:!1},Tw:{id:te.setWordSpacing,numArgs:1,variableArgs:!1},Tz:{id:te.setHScale,numArgs:1,variableArgs:!1},TL:{id:te.setLeading,numArgs:1,variableArgs:!1},Tf:{id:te.setFont,numArgs:2,variableArgs:!1},Tr:{id:te.setTextRenderingMode,numArgs:1,variableArgs:!1},Ts:{id:te.setTextRise,numArgs:1,variableArgs:!1},Td:{id:te.moveText,numArgs:2,variableArgs:!1},TD:{id:te.setLeadingMoveText,numArgs:2,variableArgs:!1},Tm:{id:te.setTextMatrix,numArgs:6,variableArgs:!1},"T*":{id:te.nextLine,numArgs:0,variableArgs:!1},Tj:{id:te.showText,numArgs:1,variableArgs:!1},TJ:{id:te.showSpacedText,numArgs:1,variableArgs:!1},"'":{id:te.nextLineShowText,numArgs:1,variableArgs:!1},'"':{id:te.nextLineSetSpacingShowText,numArgs:3,variableArgs:!1},d0:{id:te.setCharWidth,numArgs:2,variableArgs:!1},d1:{id:te.setCharWidthAndBounds,numArgs:6,variableArgs:!1},CS:{id:te.setStrokeColorSpace,numArgs:1,variableArgs:!1},cs:{id:te.setFillColorSpace,numArgs:1,variableArgs:!1},SC:{id:te.setStrokeColor,numArgs:4,variableArgs:!0},SCN:{id:te.setStrokeColorN,numArgs:33,variableArgs:!0},sc:{id:te.setFillColor,numArgs:4,variableArgs:!0},scn:{id:te.setFillColorN,numArgs:33,variableArgs:!0},G:{id:te.setStrokeGray,numArgs:1,variableArgs:!1},g:{id:te.setFillGray,numArgs:1,variableArgs:!1},RG:{id:te.setStrokeRGBColor,numArgs:3,variableArgs:!1},rg:{id:te.setFillRGBColor,numArgs:3,variableArgs:!1},K:{id:te.setStrokeCMYKColor,numArgs:4,variableArgs:!1},k:{id:te.setFillCMYKColor,numArgs:4,variableArgs:!1},sh:{id:te.shadingFill,numArgs:1,variableArgs:!1},BI:{id:te.beginInlineImage,numArgs:0,variableArgs:!1},ID:{id:te.beginImageData,numArgs:0,variableArgs:!1},EI:{id:te.endInlineImage,numArgs:1,variableArgs:!1},Do:{id:te.paintXObject,numArgs:1,variableArgs:!1},MP:{id:te.markPoint,numArgs:1,variableArgs:!1},DP:{id:te.markPointProps,numArgs:2,variableArgs:!1},BMC:{id:te.beginMarkedContent,numArgs:1,variableArgs:!1},BDC:{id:te.beginMarkedContentProps,numArgs:2,variableArgs:!1},EMC:{id:te.endMarkedContent,numArgs:0,variableArgs:!1},BX:{id:te.beginCompat,numArgs:0,variableArgs:!1},EX:{id:te.endCompat,numArgs:0,variableArgs:!1},BM:null,BD:null,"true":null,fa:null,fal:null,fals:null,"false":null,nu:null,nul:null,"null":null}
return a.prototype={get savedStatesDepth(){return this.stateManager.stateStack.length},read:function(a){for(var i=a.args;;){var s=this.parser.getObj()
if(B(s)){var o=s.cmd,c=r[o]
if(!c){t('Unknown command "'+o+'"')
continue}var l=c.id,h=c.numArgs,u=null!==i?i.length:0
if(c.variableArgs)u>h&&e("Command "+l+": expected [0,"+h+"] args, but received "+u+" args")
else{if(u!==h){for(var f=this.nonProcessedArgs;u>h;)f.push(i.shift()),u--
for(;h>u&&0!==f.length;)i||(i=[]),i.unshift(f.pop()),u++}if(h>u){e("Command "+l+": because expected "+h+" args, but received "+u+" args; skipping"),i=null
continue}}return this.preprocessCommand(l,i),a.fn=l,a.args=i,!0}if(X(s))return!1
null!==s&&(i||(i=[]),i.push(s instanceof Be?s.getAll():s),n(i.length<=33,"Too many arguments"))}},preprocessCommand:function(e,t){switch(0|e){case te.save:this.stateManager.save()
break
case te.restore:this.stateManager.restore()
break
case te.transform:this.stateManager.transform(t)}}},a}(),Ot=function(){function e(e,t,a){for(var r=e,i=0,n=t.length-1;n>i;i++){var s=t[i]
r=r[s]||(r[s]=[])}r[t[t.length-1]]=a}function t(e,t,a,r){for(var i=e+2,n=0;t>n;n++){var s=r[i+4*n],o=1===s.length&&s[0]
if(!o||1!==o.width||1!==o.height||o.data.length&&(1!==o.data.length||0!==o.data[0]))break
a[i+4*n]=te.paintSolidColorImageMask}return t-n}function a(){}var r=[]
return e(r,[te.save,te.transform,te.paintInlineImageXObject,te.restore],function(e){for(var t=10,a=200,r=1e3,i=1,n=e.fnArray,s=e.argsArray,o=e.iCurr,c=o-3,l=o-2,h=o-1,u=c+4,f=n.length;f>u+3&&n[u]===te.save&&n[u+1]===te.transform&&n[u+2]===te.paintInlineImageXObject&&n[u+3]===te.restore;)u+=4
var d=Math.min((u-c)/4,a)
if(t>d)return u
var g,m=0,p=[],b=0,v=i,y=i
for(g=0;d>g;g++){var k=s[l+(g<<2)],w=s[h+(g<<2)][0]
v+w.width>r&&(m=Math.max(m,v),y+=b+2*i,v=0,b=0),p.push({transform:k,x:v,y:y,w:w.width,h:w.height}),v+=w.width+2*i,b=Math.max(b,w.height)}var x=Math.max(m,v)+i,C=y+b+i,S=new Uint8Array(x*C*4),A=x<<2
for(g=0;d>g;g++){var I=s[h+(g<<2)][0].data,B=p[g].w<<2,T=0,O=p[g].x+p[g].y*x<<2
S.set(I.subarray(0,B),O-A)
for(var R=0,L=p[g].h;L>R;R++)S.set(I.subarray(T,T+B),O),T+=B,O+=A
for(S.set(I.subarray(T-B,T),O);O>=0;)I[O-4]=I[O],I[O-3]=I[O+1],I[O-2]=I[O+2],I[O-1]=I[O+3],I[O+B]=I[O+B-4],I[O+B+1]=I[O+B-3],I[O+B+2]=I[O+B-2],I[O+B+3]=I[O+B-1],O-=A}return n.splice(c,4*d,te.paintInlineImageXObjectGroup),s.splice(c,4*d,[{width:x,height:C,kind:K.RGBA_32BPP,data:S},p]),c+1}),e(r,[te.save,te.transform,te.paintImageMaskXObject,te.restore],function(e){for(var a=10,r=100,i=1e3,n=e.fnArray,s=e.argsArray,o=e.iCurr,c=o-3,l=o-2,h=o-1,u=c+4,f=n.length;f>u+3&&n[u]===te.save&&n[u+1]===te.transform&&n[u+2]===te.paintImageMaskXObject&&n[u+3]===te.restore;)u+=4
var d=(u-c)/4
if(d=t(c,d,n,s),a>d)return u
var g,m,p,b=!1,v=s[h][0]
if(0===s[l][1]&&0===s[l][2]){b=!0
var y=s[l][0],k=s[l][3]
m=l+4
var w=h+4
for(g=1;d>g;g++,m+=4,w+=4)if(p=s[m],s[w][0]!==v||p[0]!==y||0!==p[1]||0!==p[2]||p[3]!==k){a>g?b=!1:d=g
break}}if(b){d=Math.min(d,i)
var x=new Float32Array(2*d)
for(m=l,g=0;d>g;g++,m+=4)p=s[m],x[g<<1]=p[4],x[(g<<1)+1]=p[5]
n.splice(c,4*d,te.paintImageMaskXObjectRepeat),s.splice(c,4*d,[v,y,k,x])}else{d=Math.min(d,r)
var C=[]
for(g=0;d>g;g++){p=s[l+(g<<2)]
var S=s[h+(g<<2)][0]
C.push({data:S.data,width:S.width,height:S.height,transform:p})}n.splice(c,4*d,te.paintImageMaskXObjectGroup),s.splice(c,4*d,[C])}return c+1}),e(r,[te.save,te.transform,te.paintImageXObject,te.restore],function(e){var t=3,a=1e3,r=e.fnArray,i=e.argsArray,n=e.iCurr,s=n-3,o=n-2,c=n-1,l=n
if(0!==i[o][1]||0!==i[o][2])return l+1
for(var h=i[c][0],u=i[o][0],f=i[o][3],d=s+4,g=r.length;g>d+3&&r[d]===te.save&&r[d+1]===te.transform&&r[d+2]===te.paintImageXObject&&r[d+3]===te.restore&&i[d+1][0]===u&&0===i[d+1][1]&&0===i[d+1][2]&&i[d+1][3]===f&&i[d+2][0]===h;)d+=4
var m=Math.min((d-s)/4,a)
if(t>m)return d
for(var p=new Float32Array(2*m),b=o,v=0;m>v;v++,b+=4){var y=i[b]
p[v<<1]=y[4],p[(v<<1)+1]=y[5]}var k=[h,u,f,p]
return r.splice(s,4*m,te.paintImageXObjectRepeat),i.splice(s,4*m,k),s+1}),e(r,[te.beginText,te.setFont,te.setTextMatrix,te.showText,te.endText],function(e){for(var t=3,a=1e3,r=e.fnArray,i=e.argsArray,n=e.iCurr,s=n-4,o=n-3,c=n-2,l=n-1,h=n,u=i[o][0],f=i[o][1],d=s+5,g=r.length;g>d+4&&r[d]===te.beginText&&r[d+1]===te.setFont&&r[d+2]===te.setTextMatrix&&r[d+3]===te.showText&&r[d+4]===te.endText&&i[d+1][0]===u&&i[d+1][1]===f;)d+=5
var m=Math.min((d-s)/5,a)
if(t>m)return d
var p=s
s>=4&&r[s-4]===r[o]&&r[s-3]===r[c]&&r[s-2]===r[l]&&r[s-1]===r[h]&&i[s-4][0]===u&&i[s-4][1]===f&&(m++,p-=5)
for(var b=p+4,v=1;m>v;v++)r.splice(b,3),i.splice(b,3),b+=2
return b+1}),a.prototype={optimize:function(e){for(var t,a=e.fnArray,i=e.argsArray,n={iCurr:0,fnArray:a,argsArray:i},s=0,o=a.length;o>s;)t=(t||r)[a[s]],"function"==typeof t?(n.iCurr=s,s=t(n),t=void 0,o=n.fnArray.length):s++}},a}(),Rt=["Adobe-GB1-UCS2","Adobe-CNS1-UCS2","Adobe-Japan1-UCS2","Adobe-Korea1-UCS2","78-EUC-H","78-EUC-V","78-H","78-RKSJ-H","78-RKSJ-V","78-V","78ms-RKSJ-H","78ms-RKSJ-V","83pv-RKSJ-H","90ms-RKSJ-H","90ms-RKSJ-V","90msp-RKSJ-H","90msp-RKSJ-V","90pv-RKSJ-H","90pv-RKSJ-V","Add-H","Add-RKSJ-H","Add-RKSJ-V","Add-V","Adobe-CNS1-0","Adobe-CNS1-1","Adobe-CNS1-2","Adobe-CNS1-3","Adobe-CNS1-4","Adobe-CNS1-5","Adobe-CNS1-6","Adobe-GB1-0","Adobe-GB1-1","Adobe-GB1-2","Adobe-GB1-3","Adobe-GB1-4","Adobe-GB1-5","Adobe-Japan1-0","Adobe-Japan1-1","Adobe-Japan1-2","Adobe-Japan1-3","Adobe-Japan1-4","Adobe-Japan1-5","Adobe-Japan1-6","Adobe-Korea1-0","Adobe-Korea1-1","Adobe-Korea1-2","B5-H","B5-V","B5pc-H","B5pc-V","CNS-EUC-H","CNS-EUC-V","CNS1-H","CNS1-V","CNS2-H","CNS2-V","ETHK-B5-H","ETHK-B5-V","ETen-B5-H","ETen-B5-V","ETenms-B5-H","ETenms-B5-V","EUC-H","EUC-V","Ext-H","Ext-RKSJ-H","Ext-RKSJ-V","Ext-V","GB-EUC-H","GB-EUC-V","GB-H","GB-V","GBK-EUC-H","GBK-EUC-V","GBK2K-H","GBK2K-V","GBKp-EUC-H","GBKp-EUC-V","GBT-EUC-H","GBT-EUC-V","GBT-H","GBT-V","GBTpc-EUC-H","GBTpc-EUC-V","GBpc-EUC-H","GBpc-EUC-V","H","HKdla-B5-H","HKdla-B5-V","HKdlb-B5-H","HKdlb-B5-V","HKgccs-B5-H","HKgccs-B5-V","HKm314-B5-H","HKm314-B5-V","HKm471-B5-H","HKm471-B5-V","HKscs-B5-H","HKscs-B5-V","Hankaku","Hiragana","KSC-EUC-H","KSC-EUC-V","KSC-H","KSC-Johab-H","KSC-Johab-V","KSC-V","KSCms-UHC-H","KSCms-UHC-HW-H","KSCms-UHC-HW-V","KSCms-UHC-V","KSCpc-EUC-H","KSCpc-EUC-V","Katakana","NWP-H","NWP-V","RKSJ-H","RKSJ-V","Roman","UniCNS-UCS2-H","UniCNS-UCS2-V","UniCNS-UTF16-H","UniCNS-UTF16-V","UniCNS-UTF32-H","UniCNS-UTF32-V","UniCNS-UTF8-H","UniCNS-UTF8-V","UniGB-UCS2-H","UniGB-UCS2-V","UniGB-UTF16-H","UniGB-UTF16-V","UniGB-UTF32-H","UniGB-UTF32-V","UniGB-UTF8-H","UniGB-UTF8-V","UniJIS-UCS2-H","UniJIS-UCS2-HW-H","UniJIS-UCS2-HW-V","UniJIS-UCS2-V","UniJIS-UTF16-H","UniJIS-UTF16-V","UniJIS-UTF32-H","UniJIS-UTF32-V","UniJIS-UTF8-H","UniJIS-UTF8-V","UniJIS2004-UTF16-H","UniJIS2004-UTF16-V","UniJIS2004-UTF32-H","UniJIS2004-UTF32-V","UniJIS2004-UTF8-H","UniJIS2004-UTF8-V","UniJISPro-UCS2-HW-V","UniJISPro-UCS2-V","UniJISPro-UTF8-V","UniJISX0213-UTF32-H","UniJISX0213-UTF32-V","UniJISX02132004-UTF32-H","UniJISX02132004-UTF32-V","UniKS-UCS2-H","UniKS-UCS2-V","UniKS-UTF16-H","UniKS-UTF16-V","UniKS-UTF32-H","UniKS-UTF32-V","UniKS-UTF8-H","UniKS-UTF8-V","V","WP-Symbol"],Lt=function(){function e(e){this.codespaceRanges=[[],[],[],[]],this.numCodespaceRanges=0,this._map=[],this.name="",this.vertical=!1,this.useCMap=null,this.builtInCMap=e}return e.prototype={addCodespaceRange:function(e,t,a){this.codespaceRanges[e-1].push(t,a),this.numCodespaceRanges++},mapCidRange:function(e,t,a){for(;t>=e;)this._map[e++]=a++},mapBfRange:function(e,t,a){for(var r=a.length-1;t>=e;)this._map[e++]=a,a=a.substr(0,r)+String.fromCharCode(a.charCodeAt(r)+1)},mapBfRangeToArray:function(e,t,a){for(var r=0,i=a.length;t>=e&&i>r;)this._map[e]=a[r++],++e},mapOne:function(e,t){this._map[e]=t},lookup:function(e){return this._map[e]},contains:function(e){return void 0!==this._map[e]},forEach:function(e){var t,a=this._map,r=a.length
if(65536>=r)for(t=0;r>t;t++)void 0!==a[t]&&e(t,a[t])
else for(t in this._map)e(t,a[t])},charCodeOf:function(e){return this._map.indexOf(e)},getMap:function(){return this._map},readCharCode:function(e,t,a){for(var r=0,i=this.codespaceRanges,n=this.codespaceRanges.length,s=0;n>s;s++){r=(r<<8|e.charCodeAt(t+s))>>>0
for(var o=i[s],c=0,l=o.length;l>c;){var h=o[c++],u=o[c++]
if(r>=h&&u>=r)return a.charcode=r,void(a.length=s+1)}}a.charcode=0,a.length=1},get length(){return this._map.length},get isIdentityCMap(){if("Identity-H"!==this.name&&"Identity-V"!==this.name)return!1
if(65536!==this._map.length)return!1
for(var e=0;65536>e;e++)if(this._map[e]!==e)return!1
return!0}},e}(),Mt=function(){function e(e,t){Lt.call(this),this.vertical=e,this.addCodespaceRange(t,0,65535)}return me.inherit(e,Lt,{}),e.prototype={addCodespaceRange:Lt.prototype.addCodespaceRange,mapCidRange:function(e,t,a){r("should not call mapCidRange")},mapBfRange:function(e,t,a){r("should not call mapBfRange")},mapBfRangeToArray:function(e,t,a){r("should not call mapBfRangeToArray")},mapOne:function(e,t){r("should not call mapCidOne")},lookup:function(e){return C(e)&&65535>=e?e:void 0},contains:function(e){return C(e)&&65535>=e},forEach:function(e){for(var t=0;65535>=t;t++)e(t,t)},charCodeOf:function(e){return C(e)&&65535>=e?e:-1},getMap:function(){for(var e=new Array(65536),t=0;65535>=t;t++)e[t]=t
return e},readCharCode:Lt.prototype.readCharCode,get length(){return 65536},get isIdentityCMap(){r("should not access .isIdentityCMap")}},e}(),Pt=function(){function e(e){var t=PDFJS.disableWorker,a=new XMLHttpRequest
if(a.open("GET",e,!1),!t)try{a.responseType="arraybuffer",t="arraybuffer"!==a.responseType}catch(i){t=!0}if(t&&a.overrideMimeType&&a.overrideMimeType("text/plain; charset=x-user-defined"),a.send(null),(t?a.responseText:a.response)||r("Unable to get binary cMap at: "+e),t){var n=Array.prototype.map.call(a.responseText,function(e){return 255&e.charCodeAt(0)})
return new Uint8Array(n)}return new Uint8Array(a.response)}function t(e,t){for(var a=0,r=0;t>=r;r++)a=a<<8|e[r]
return a>>>0}function a(e,t){return 1===t?String.fromCharCode(e[0],e[1]):3===t?String.fromCharCode(e[0],e[1],e[2],e[3]):String.fromCharCode.apply(null,e.subarray(0,t+1))}function i(e,t,a){for(var r=0,i=a;i>=0;i--)r+=e[i]+t[i],e[i]=255&r,r>>=8}function s(e,t){for(var a=1,r=t;r>=0&&a>0;r--)a+=e[r],e[r]=255&a,a>>=8}function o(e){this.buffer=e,this.pos=0,this.end=e.length,this.tmpBuf=new Uint8Array(u)}function c(c,l,u){var f=e(c),d=new o(f),g=d.readByte()
l.vertical=!!(1&g)
for(var m,p,b=null,v=new Uint8Array(h),y=new Uint8Array(h),k=new Uint8Array(h),w=new Uint8Array(h),x=new Uint8Array(h);(p=d.readByte())>=0;){var C=p>>5
if(7!==C){var S=!!(16&p),A=15&p
n(h>=A+1)
var I,B=1,T=d.readNumber()
switch(C){case 0:for(d.readHex(v,A),d.readHexNumber(y,A),i(y,v,A),l.addCodespaceRange(A+1,t(v,A),t(y,A)),I=1;T>I;I++)s(y,A),d.readHexNumber(v,A),i(v,y,A),d.readHexNumber(y,A),i(y,v,A),l.addCodespaceRange(A+1,t(v,A),t(y,A))
break
case 1:for(d.readHex(v,A),d.readHexNumber(y,A),i(y,v,A),m=d.readNumber(),I=1;T>I;I++)s(y,A),d.readHexNumber(v,A),i(v,y,A),d.readHexNumber(y,A),i(y,v,A),m=d.readNumber()
break
case 2:for(d.readHex(k,A),m=d.readNumber(),l.mapOne(t(k,A),m),I=1;T>I;I++)s(k,A),S||(d.readHexNumber(x,A),i(k,x,A)),m=d.readSigned()+(m+1),l.mapOne(t(k,A),m)
break
case 3:for(d.readHex(v,A),d.readHexNumber(y,A),i(y,v,A),m=d.readNumber(),l.mapCidRange(t(v,A),t(y,A),m),I=1;T>I;I++)s(y,A),S?v.set(y):(d.readHexNumber(v,A),i(v,y,A)),d.readHexNumber(y,A),i(y,v,A),m=d.readNumber(),l.mapCidRange(t(v,A),t(y,A),m)
break
case 4:for(d.readHex(k,B),d.readHex(w,A),l.mapOne(t(k,B),a(w,A)),I=1;T>I;I++)s(k,B),S||(d.readHexNumber(x,B),i(k,x,B)),s(w,A),d.readHexSigned(x,A),i(w,x,A),l.mapOne(t(k,B),a(w,A))
break
case 5:for(d.readHex(v,B),d.readHexNumber(y,B),i(y,v,B),d.readHex(w,A),l.mapBfRange(t(v,B),t(y,B),a(w,A)),I=1;T>I;I++)s(y,B),S?v.set(y):(d.readHexNumber(v,B),i(v,y,B)),d.readHexNumber(y,B),i(y,v,B),d.readHex(w,A),l.mapBfRange(t(v,B),t(y,B),a(w,A))
break
default:r("Unknown type: "+C)}}else switch(31&p){case 0:d.readString()
break
case 1:b=d.readString()}}return b&&u(b),l}function l(){}var h=16,u=19
return o.prototype={readByte:function(){return this.pos>=this.end?-1:this.buffer[this.pos++]},readNumber:function(){var e,t=0
do{var a=this.readByte()
0>a&&r("unexpected EOF in bcmap"),e=!(128&a),t=t<<7|127&a}while(!e)
return t},readSigned:function(){var e=this.readNumber()
return 1&e?~(e>>>1):e>>>1},readHex:function(e,t){e.set(this.buffer.subarray(this.pos,this.pos+t+1)),this.pos+=t+1},readHexNumber:function(e,t){var a,i=this.tmpBuf,n=0
do{var s=this.readByte()
0>s&&r("unexpected EOF in bcmap"),a=!(128&s),i[n++]=127&s}while(!a)
for(var o=t,c=0,l=0;o>=0;){for(;8>l&&i.length>0;)c=i[--n]<<l|c,l+=7
e[o]=255&c,o--,c>>=8,l-=8}},readHexSigned:function(e,t){this.readHexNumber(e,t)
for(var a=1&e[t]?255:0,r=0,i=0;t>=i;i++)r=(1&r)<<8|e[i],e[i]=r>>1^a},readString:function(){for(var e=this.readNumber(),t="",a=0;e>a;a++)t+=String.fromCharCode(this.readNumber())
return t}},l.prototype={read:c},l}(),Et=function(){function e(e){for(var t=0,a=0;a<e.length;a++)t=t<<8|e.charCodeAt(a)
return t>>>0}function a(e){A(e)||r("Malformed CMap: expected string.")}function i(e){C(e)||r("Malformed CMap: expected int.")}function s(t,r){for(;;){var i=r.getObj()
if(X(i))break
if(B(i,"endbfchar"))return
a(i)
var n=e(i)
i=r.getObj(),a(i)
var s=i
t.mapOne(n,s)}}function o(t,i){for(;;){var n=i.getObj()
if(X(n))break
if(B(n,"endbfrange"))return
a(n)
var s=e(n)
n=i.getObj(),a(n)
var o=e(n)
if(n=i.getObj(),C(n)||A(n)){var c=C(n)?String.fromCharCode(n):n
t.mapBfRange(s,o,c)}else{if(!B(n,"["))break
n=i.getObj()
for(var l=[];!B(n,"]")&&!X(n);)l.push(n),n=i.getObj()
t.mapBfRangeToArray(s,o,l)}}r("Invalid bf range.")}function c(t,r){for(;;){var n=r.getObj()
if(X(n))break
if(B(n,"endcidchar"))return
a(n)
var s=e(n)
n=r.getObj(),i(n)
var o=n
t.mapOne(s,o)}}function l(t,r){for(;;){var n=r.getObj()
if(X(n))break
if(B(n,"endcidrange"))return
a(n)
var s=e(n)
n=r.getObj(),a(n)
var o=e(n)
n=r.getObj(),i(n)
var c=n
t.mapCidRange(s,o,c)}}function h(t,a){for(;;){var i=a.getObj()
if(X(i))break
if(B(i,"endcodespacerange"))return
if(!A(i))break
var n=e(i)
if(i=a.getObj(),!A(i))break
var s=e(i)
t.addCodespaceRange(i.length,n,s)}r("Invalid codespace range.")}function u(e,t){var a=t.getObj()
C(a)&&(e.vertical=!!a)}function f(e,t){var a=t.getObj()
I(a)&&A(a.name)&&(e.name=a.name)}function d(e,t,a,r){var i,n
e:for(;;){var d=t.getObj()
if(X(d))break
if(I(d))"WMode"===d.name?u(e,t):"CMapName"===d.name&&f(e,t),i=d
else if(B(d))switch(d.cmd){case"endcmap":break e
case"usecmap":I(i)&&(n=i.name)
break
case"begincodespacerange":h(e,t)
break
case"beginbfchar":s(e,t)
break
case"begincidchar":c(e,t)
break
case"beginbfrange":o(e,t)
break
case"begincidrange":l(e,t)}}!r&&n&&(r=n),r&&g(e,a,r)}function g(e,t,a){if(e.useCMap=p(a,t),0===e.numCodespaceRanges){for(var r=e.useCMap.codespaceRanges,i=0;i<r.length;i++)e.codespaceRanges[i]=r[i].slice()
e.numCodespaceRanges=e.useCMap.numCodespaceRanges}e.useCMap.forEach(function(t,a){e.contains(t)||e.mapOne(t,e.useCMap.lookup(t))})}function m(e,t){var a=t.url+e+".bcmap",r=new Lt(!0)
return(new Pt).read(a,r,function(e){g(r,t,e)}),r}function p(e,t){if("Identity-H"===e)return new Mt(!1,2)
if("Identity-V"===e)return new Mt(!0,2)
if(-1===Rt.indexOf(e)&&r("Unknown cMap name: "+e),n(t,"built-in cMap parameters are not provided"),t.packed)return m(e,t)
var a=new XMLHttpRequest,i=t.url+e
a.open("GET",i,!1),a.send(null),a.responseText||r("Unable to get cMap at: "+i)
var s=new Lt(!0),o=new Pa(new ja(a.responseText))
return d(s,o,t,null),s}return{create:function(e,a,i){if(I(e))return p(e.name,a)
if(R(e)){var n=new Lt,s=new Pa(e)
try{d(n,s,a,i)}catch(o){t("Invalid CMap data. "+o)}return n.isIdentityCMap?p(n.name,a):n}r("Encoding required.")}}}(),Dt=57344,qt=63743,Ft=!1,Ut=1e3,Nt=!1,jt=!1,zt={FixedPitch:1,Serif:2,Symbolic:4,Script:8,Nonsymbolic:32,Italic:64,AllCap:65536,SmallCap:131072,ForceBold:262144},Ht={ExpertEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],MacExpertEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","centoldstyle","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","","threequartersemdash","","questionsmall","","","","","Ethsmall","","","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","","","","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hypheninferior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","asuperior","centsuperior","","","","","Aacutesmall","Agravesmall","Acircumflexsmall","Adieresissmall","Atildesmall","Aringsmall","Ccedillasmall","Eacutesmall","Egravesmall","Ecircumflexsmall","Edieresissmall","Iacutesmall","Igravesmall","Icircumflexsmall","Idieresissmall","Ntildesmall","Oacutesmall","Ogravesmall","Ocircumflexsmall","Odieresissmall","Otildesmall","Uacutesmall","Ugravesmall","Ucircumflexsmall","Udieresissmall","","eightsuperior","fourinferior","threeinferior","sixinferior","eightinferior","seveninferior","Scaronsmall","","centinferior","twoinferior","","Dieresissmall","","Caronsmall","osuperior","fiveinferior","","commainferior","periodinferior","Yacutesmall","","dollarinferior","","Thornsmall","","nineinferior","zeroinferior","Zcaronsmall","AEsmall","Oslashsmall","questiondownsmall","oneinferior","Lslashsmall","","","","","","","Cedillasmall","","","","","","OEsmall","figuredash","hyphensuperior","","","","","exclamdownsmall","","Ydieresissmall","","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","ninesuperior","zerosuperior","","esuperior","rsuperior","tsuperior","","","isuperior","ssuperior","dsuperior","","","","","","lsuperior","Ogoneksmall","Brevesmall","Macronsmall","bsuperior","nsuperior","msuperior","commasuperior","periodsuperior","Dotaccentsmall","Ringsmall"],MacRomanEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","space","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron"],StandardEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],WinAnsiEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","bullet","Euro","bullet","quotesinglbase","florin","quotedblbase","ellipsis","dagger","daggerdbl","circumflex","perthousand","Scaron","guilsinglleft","OE","bullet","Zcaron","bullet","bullet","quoteleft","quoteright","quotedblleft","quotedblright","bullet","endash","emdash","tilde","trademark","scaron","guilsinglright","oe","bullet","zcaron","Ydieresis","space","exclamdown","cent","sterling","currency","yen","brokenbar","section","dieresis","copyright","ordfeminine","guillemotleft","logicalnot","hyphen","registered","macron","degree","plusminus","twosuperior","threesuperior","acute","mu","paragraph","periodcentered","cedilla","onesuperior","ordmasculine","guillemotright","onequarter","onehalf","threequarters","questiondown","Agrave","Aacute","Acircumflex","Atilde","Adieresis","Aring","AE","Ccedilla","Egrave","Eacute","Ecircumflex","Edieresis","Igrave","Iacute","Icircumflex","Idieresis","Eth","Ntilde","Ograve","Oacute","Ocircumflex","Otilde","Odieresis","multiply","Oslash","Ugrave","Uacute","Ucircumflex","Udieresis","Yacute","Thorn","germandbls","agrave","aacute","acircumflex","atilde","adieresis","aring","ae","ccedilla","egrave","eacute","ecircumflex","edieresis","igrave","iacute","icircumflex","idieresis","eth","ntilde","ograve","oacute","ocircumflex","otilde","odieresis","divide","oslash","ugrave","uacute","ucircumflex","udieresis","yacute","thorn","ydieresis"],SymbolSetEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","universal","numbersign","existential","percent","ampersand","suchthat","parenleft","parenright","asteriskmath","plus","comma","minus","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","congruent","Alpha","Beta","Chi","Delta","Epsilon","Phi","Gamma","Eta","Iota","theta1","Kappa","Lambda","Mu","Nu","Omicron","Pi","Theta","Rho","Sigma","Tau","Upsilon","sigma1","Omega","Xi","Psi","Zeta","bracketleft","therefore","bracketright","perpendicular","underscore","radicalex","alpha","beta","chi","delta","epsilon","phi","gamma","eta","iota","phi1","kappa","lambda","mu","nu","omicron","pi","theta","rho","sigma","tau","upsilon","omega1","omega","xi","psi","zeta","braceleft","bar","braceright","similar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Euro","Upsilon1","minute","lessequal","fraction","infinity","florin","club","diamond","heart","spade","arrowboth","arrowleft","arrowup","arrowright","arrowdown","degree","plusminus","second","greaterequal","multiply","proportional","partialdiff","bullet","divide","notequal","equivalence","approxequal","ellipsis","arrowvertex","arrowhorizex","carriagereturn","aleph","Ifraktur","Rfraktur","weierstrass","circlemultiply","circleplus","emptyset","intersection","union","propersuperset","reflexsuperset","notsubset","propersubset","reflexsubset","element","notelement","angle","gradient","registerserif","copyrightserif","trademarkserif","product","radical","dotmath","logicalnot","logicaland","logicalor","arrowdblboth","arrowdblleft","arrowdblup","arrowdblright","arrowdbldown","lozenge","angleleft","registersans","copyrightsans","trademarksans","summation","parenlefttp","parenleftex","parenleftbt","bracketlefttp","bracketleftex","bracketleftbt","bracelefttp","braceleftmid","braceleftbt","braceex","","angleright","integral","integraltp","integralex","integralbt","parenrighttp","parenrightex","parenrightbt","bracketrighttp","bracketrightex","bracketrightbt","bracerighttp","bracerightmid","bracerightbt"],ZapfDingbatsEncoding:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","a1","a2","a202","a3","a4","a5","a119","a118","a117","a11","a12","a13","a14","a15","a16","a105","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a6","a7","a8","a9","a10","a29","a30","a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42","a43","a44","a45","a46","a47","a48","a49","a50","a51","a52","a53","a54","a55","a56","a57","a58","a59","a60","a61","a62","a63","a64","a65","a66","a67","a68","a69","a70","a71","a72","a73","a74","a203","a75","a204","a76","a77","a78","a79","a81","a82","a83","a84","a97","a98","a99","a100","","a89","a90","a93","a94","a91","a92","a205","a85","a206","a86","a87","a88","a95","a96","","","","","","","","","","","","","","","","","","","","a101","a102","a103","a104","a106","a107","a108","a112","a111","a110","a109","a120","a121","a122","a123","a124","a125","a126","a127","a128","a129","a130","a131","a132","a133","a134","a135","a136","a137","a138","a139","a140","a141","a142","a143","a144","a145","a146","a147","a148","a149","a150","a151","a152","a153","a154","a155","a156","a157","a158","a159","a160","a161","a163","a164","a196","a165","a192","a166","a167","a168","a169","a170","a171","a172","a173","a162","a174","a175","a176","a177","a178","a179","a193","a180","a199","a181","a200","a182","","a201","a183","a184","a197","a185","a194","a198","a186","a195","a187","a188","a189","a190","a191"]},_t={ArialNarrow:"Helvetica","ArialNarrow-Bold":"Helvetica-Bold","ArialNarrow-BoldItalic":"Helvetica-BoldOblique","ArialNarrow-Italic":"Helvetica-Oblique",ArialBlack:"Helvetica","ArialBlack-Bold":"Helvetica-Bold","ArialBlack-BoldItalic":"Helvetica-BoldOblique","ArialBlack-Italic":"Helvetica-Oblique",Arial:"Helvetica","Arial-Bold":"Helvetica-Bold","Arial-BoldItalic":"Helvetica-BoldOblique","Arial-Italic":"Helvetica-Oblique","Arial-BoldItalicMT":"Helvetica-BoldOblique","Arial-BoldMT":"Helvetica-Bold","Arial-ItalicMT":"Helvetica-Oblique",ArialMT:"Helvetica","Courier-Bold":"Courier-Bold","Courier-BoldItalic":"Courier-BoldOblique","Courier-Italic":"Courier-Oblique",CourierNew:"Courier","CourierNew-Bold":"Courier-Bold","CourierNew-BoldItalic":"Courier-BoldOblique","CourierNew-Italic":"Courier-Oblique","CourierNewPS-BoldItalicMT":"Courier-BoldOblique","CourierNewPS-BoldMT":"Courier-Bold","CourierNewPS-ItalicMT":"Courier-Oblique",CourierNewPSMT:"Courier",Helvetica:"Helvetica","Helvetica-Bold":"Helvetica-Bold","Helvetica-BoldItalic":"Helvetica-BoldOblique","Helvetica-BoldOblique":"Helvetica-BoldOblique","Helvetica-Italic":"Helvetica-Oblique","Helvetica-Oblique":"Helvetica-Oblique","Symbol-Bold":"Symbol","Symbol-BoldItalic":"Symbol","Symbol-Italic":"Symbol",TimesNewRoman:"Times-Roman","TimesNewRoman-Bold":"Times-Bold","TimesNewRoman-BoldItalic":"Times-BoldItalic","TimesNewRoman-Italic":"Times-Italic",TimesNewRomanPS:"Times-Roman","TimesNewRomanPS-Bold":"Times-Bold","TimesNewRomanPS-BoldItalic":"Times-BoldItalic","TimesNewRomanPS-BoldItalicMT":"Times-BoldItalic","TimesNewRomanPS-BoldMT":"Times-Bold","TimesNewRomanPS-Italic":"Times-Italic","TimesNewRomanPS-ItalicMT":"Times-Italic",TimesNewRomanPSMT:"Times-Roman","TimesNewRomanPSMT-Bold":"Times-Bold","TimesNewRomanPSMT-BoldItalic":"Times-BoldItalic","TimesNewRomanPSMT-Italic":"Times-Italic"},Gt={CenturyGothic:"Helvetica","CenturyGothic-Bold":"Helvetica-Bold","CenturyGothic-BoldItalic":"Helvetica-BoldOblique","CenturyGothic-Italic":"Helvetica-Oblique",ComicSansMS:"Comic Sans MS","ComicSansMS-Bold":"Comic Sans MS-Bold","ComicSansMS-BoldItalic":"Comic Sans MS-BoldItalic","ComicSansMS-Italic":"Comic Sans MS-Italic",LucidaConsole:"Courier","LucidaConsole-Bold":"Courier-Bold","LucidaConsole-BoldItalic":"Courier-BoldOblique","LucidaConsole-Italic":"Courier-Oblique","MS-Gothic":"MS Gothic","MS-Gothic-Bold":"MS Gothic-Bold","MS-Gothic-BoldItalic":"MS Gothic-BoldItalic","MS-Gothic-Italic":"MS Gothic-Italic","MS-Mincho":"MS Mincho","MS-Mincho-Bold":"MS Mincho-Bold","MS-Mincho-BoldItalic":"MS Mincho-BoldItalic","MS-Mincho-Italic":"MS Mincho-Italic","MS-PGothic":"MS PGothic","MS-PGothic-Bold":"MS PGothic-Bold","MS-PGothic-BoldItalic":"MS PGothic-BoldItalic","MS-PGothic-Italic":"MS PGothic-Italic","MS-PMincho":"MS PMincho","MS-PMincho-Bold":"MS PMincho-Bold","MS-PMincho-BoldItalic":"MS PMincho-BoldItalic","MS-PMincho-Italic":"MS PMincho-Italic",Wingdings:"ZapfDingbats"},Xt={"Adobe Jenson":!0,"Adobe Text":!0,Albertus:!0,Aldus:!0,Alexandria:!0,Algerian:!0,"American Typewriter":!0,Antiqua:!0,Apex:!0,Arno:!0,Aster:!0,Aurora:!0,Baskerville:!0,Bell:!0,Bembo:!0,"Bembo Schoolbook":!0,Benguiat:!0,"Berkeley Old Style":!0,"Bernhard Modern":!0,"Berthold City":!0,Bodoni:!0,"Bauer Bodoni":!0,"Book Antiqua":!0,Bookman:!0,"Bordeaux Roman":!0,"Californian FB":!0,Calisto:!0,Calvert:!0,Capitals:!0,Cambria:!0,Cartier:!0,Caslon:!0,Catull:!0,Centaur:!0,"Century Old Style":!0,"Century Schoolbook":!0,Chaparral:!0,"Charis SIL":!0,Cheltenham:!0,"Cholla Slab":!0,Clarendon:!0,Clearface:!0,Cochin:!0,Colonna:!0,"Computer Modern":!0,"Concrete Roman":!0,Constantia:!0,"Cooper Black":!0,Corona:!0,Ecotype:!0,Egyptienne:!0,Elephant:!0,Excelsior:!0,Fairfield:!0,"FF Scala":!0,Folkard:!0,Footlight:!0,FreeSerif:!0,"Friz Quadrata":!0,Garamond:!0,Gentium:!0,Georgia:!0,Gloucester:!0,"Goudy Old Style":!0,"Goudy Schoolbook":!0,"Goudy Pro Font":!0,Granjon:!0,"Guardian Egyptian":!0,Heather:!0,Hercules:!0,"High Tower Text":!0,Hiroshige:!0,"Hoefler Text":!0,"Humana Serif":!0,Imprint:!0,"Ionic No. 5":!0,Janson:!0,Joanna:!0,Korinna:!0,Lexicon:!0,"Liberation Serif":!0,"Linux Libertine":!0,Literaturnaya:!0,Lucida:!0,"Lucida Bright":!0,Melior:!0,Memphis:!0,Miller:!0,Minion:!0,Modern:!0,"Mona Lisa":!0,"Mrs Eaves":!0,"MS Serif":!0,"Museo Slab":!0,"New York":!0,"Nimbus Roman":!0,"NPS Rawlinson Roadway":!0,Palatino:!0,Perpetua:!0,Plantin:!0,"Plantin Schoolbook":!0,Playbill:!0,"Poor Richard":!0,"Rawlinson Roadway":!0,Renault:!0,Requiem:!0,Rockwell:!0,Roman:!0,"Rotis Serif":!0,Sabon:!0,Scala:!0,Seagull:!0,Sistina:!0,Souvenir:!0,STIX:!0,"Stone Informal":!0,"Stone Serif":!0,Sylfaen:!0,Times:!0,Trajan:!0,"Trinité":!0,"Trump Mediaeval":!0,Utopia:!0,"Vale Type":!0,"Bitstream Vera":!0,"Vera Serif":!0,Versailles:!0,Wanted:!0,Weiss:!0,"Wide Latin":!0,Windsor:!0,XITS:!0},Jt={Dingbats:!0,Symbol:!0,ZapfDingbats:!0},Wt={2:10,3:32,4:33,5:34,6:35,7:36,8:37,9:38,10:39,11:40,12:41,13:42,14:43,15:44,16:45,17:46,18:47,19:48,20:49,21:50,22:51,23:52,24:53,25:54,26:55,27:56,28:57,29:58,30:894,31:60,32:61,33:62,34:63,35:64,36:65,37:66,38:67,39:68,40:69,41:70,42:71,43:72,44:73,45:74,46:75,47:76,48:77,49:78,50:79,51:80,52:81,53:82,54:83,55:84,56:85,57:86,58:87,59:88,60:89,61:90,62:91,63:92,64:93,65:94,66:95,67:96,68:97,69:98,70:99,71:100,72:101,73:102,74:103,75:104,76:105,77:106,78:107,79:108,80:109,81:110,82:111,83:112,84:113,85:114,86:115,87:116,88:117,89:118,90:119,91:120,92:121,93:122,94:123,95:124,96:125,97:126,98:196,99:197,100:199,101:201,102:209,103:214,104:220,105:225,106:224,107:226,108:228,109:227,110:229,111:231,112:233,113:232,114:234,115:235,116:237,117:236,118:238,119:239,120:241,121:243,122:242,123:244,124:246,125:245,126:250,127:249,128:251,129:252,130:8224,131:176,132:162,133:163,134:167,135:8226,136:182,137:223,138:174,139:169,140:8482,141:180,142:168,143:8800,144:198,145:216,146:8734,147:177,148:8804,149:8805,150:165,151:181,152:8706,153:8721,154:8719,156:8747,157:170,158:186,159:8486,160:230,161:248,162:191,163:161,164:172,165:8730,166:402,167:8776,168:8710,169:171,170:187,171:8230,210:218,223:711,224:321,225:322,227:353,229:382,234:253,252:263,253:268,254:269,258:258,260:260,261:261,265:280,266:281,268:283,269:313,275:323,276:324,278:328,284:345,285:346,286:347,292:367,295:377,296:378,298:380,305:963,306:964,307:966,308:8215,309:8252,310:8319,311:8359,312:8592,313:8593,337:9552,493:1039,494:1040,705:1524,706:8362,710:64288,711:64298,759:1617,761:1776,763:1778,775:1652,777:1764,778:1780,779:1781,780:1782,782:771,783:64726,786:8363,788:8532,790:768,791:769,792:768,795:803,797:64336,798:64337,799:64342,800:64343,801:64344,802:64345,803:64362,804:64363,805:64364,2424:7821,2425:7822,2426:7823,2427:7824,2428:7825,2429:7826,2430:7827,2433:7682,2678:8045,2679:8046,2830:1552,2838:686,2840:751,2842:753,2843:754,2844:755,2846:757,2856:767,2857:848,2858:849,2862:853,2863:854,2864:855,2865:861,2866:862,2906:7460,2908:7462,2909:7463,2910:7464,2912:7466,2913:7467,2914:7468,2916:7470,2917:7471,2918:7472,2920:7474,2921:7475,2922:7476,2924:7478,2925:7479,2926:7480,2928:7482,2929:7483,2930:7484,2932:7486,2933:7487,2934:7488,2936:7490,2937:7491,2938:7492,2940:7494,2941:7495,2942:7496,2944:7498,2946:7500,2948:7502,2950:7504,2951:7505,2952:7506,2954:7508,2955:7509,2956:7510,2958:7512,2959:7513,2960:7514,2962:7516,2963:7517,2964:7518,2966:7520,2967:7521,2968:7522,2970:7524,2971:7525,2972:7526,2974:7528,2975:7529,2976:7530,2978:1537,2979:1538,2980:1539,2982:1549,2983:1551,2984:1552,2986:1554,2987:1555,2988:1556,2990:1623,2991:1624,2995:1775,2999:1791,3002:64290,3003:64291,3004:64292,3006:64294,3007:64295,3008:64296,3011:1900,3014:8223,3015:8244,3017:7532,3018:7533,3019:7534,3075:7590,3076:7591,3079:7594,3080:7595,3083:7598,3084:7599,3087:7602,3088:7603,3091:7606,3092:7607,3095:7610,3096:7611,3099:7614,3100:7615,3103:7618,3104:7619,3107:8337,3108:8338,3116:1884,3119:1885,3120:1885,3123:1886,3124:1886,3127:1887,3128:1887,3131:1888,3132:1888,3135:1889,3136:1889,3139:1890,3140:1890,3143:1891,3144:1891,3147:1892,3148:1892,3153:580,3154:581,3157:584,3158:585,3161:588,3162:589,3165:891,3166:892,3169:1274,3170:1275,3173:1278,3174:1279,3181:7622,3182:7623,3282:11799,3316:578,3379:42785,3393:1159,3416:8377},Vt={227:322,264:261,291:346},Kt={63721:169,63193:169,63720:174,63194:174,63722:8482,63195:8482,63729:9127,63730:9128,63731:9129,63740:9131,63741:9132,63742:9133,63726:9121,63727:9122,63728:9123,63737:9124,63738:9125,63739:9126,63723:9115,63724:9116,63725:9117,63734:9118,63735:9119,63736:9120},Yt=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],Zt=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"],Qt={"¨":" ̈","¯":" ̄","´":" ́","µ":"μ","¸":" ̧","Ĳ":"IJ","ĳ":"ij","Ŀ":"L·","ŀ":"l·","ŉ":"ʼn","ſ":"s","Ǆ":"DŽ","ǅ":"Dž","ǆ":"dž","Ǉ":"LJ","ǈ":"Lj","ǉ":"lj","Ǌ":"NJ","ǋ":"Nj","ǌ":"nj","Ǳ":"DZ","ǲ":"Dz","ǳ":"dz","˘":" ̆","˙":" ̇","˚":" ̊","˛":" ̨","˜":" ̃","˝":" ̋","ͺ":" ͅ","΄":" ́","ϐ":"β","ϑ":"θ","ϒ":"Υ","ϕ":"φ","ϖ":"π","ϰ":"κ","ϱ":"ρ","ϲ":"ς","ϴ":"Θ","ϵ":"ε","Ϲ":"Σ","և":"եւ","ٵ":"اٴ","ٶ":"وٴ","ٷ":"ۇٴ","ٸ":"يٴ","ำ":"ํา","ຳ":"ໍາ","ໜ":"ຫນ","ໝ":"ຫມ","ཷ":"ྲཱྀ","ཹ":"ླཱྀ","ẚ":"aʾ","᾽":" ̓","᾿":" ̓","῀":" ͂","῾":" ̔"," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" "," ":" ","‗":" ̳","․":".","‥":"..","…":"...","″":"′′","‴":"′′′","‶":"‵‵","‷":"‵‵‵","‼":"!!","‾":" ̅","⁇":"??","⁈":"?!","⁉":"!?","⁗":"′′′′"," ":" ","₨":"Rs","℀":"a/c","℁":"a/s","℃":"°C","℅":"c/o","℆":"c/u","ℇ":"Ɛ","℉":"°F","№":"No","℡":"TEL","ℵ":"א","ℶ":"ב","ℷ":"ג","ℸ":"ד","℻":"FAX","Ⅰ":"I","Ⅱ":"II","Ⅲ":"III","Ⅳ":"IV","Ⅴ":"V","Ⅵ":"VI","Ⅶ":"VII","Ⅷ":"VIII","Ⅸ":"IX","Ⅹ":"X","Ⅺ":"XI","Ⅻ":"XII","Ⅼ":"L","Ⅽ":"C","Ⅾ":"D","Ⅿ":"M","ⅰ":"i","ⅱ":"ii","ⅲ":"iii","ⅳ":"iv","ⅴ":"v","ⅵ":"vi","ⅶ":"vii","ⅷ":"viii","ⅸ":"ix","ⅹ":"x","ⅺ":"xi","ⅻ":"xii","ⅼ":"l","ⅽ":"c","ⅾ":"d","ⅿ":"m","∬":"∫∫","∭":"∫∫∫","∯":"∮∮","∰":"∮∮∮","⑴":"(1)","⑵":"(2)","⑶":"(3)","⑷":"(4)","⑸":"(5)","⑹":"(6)","⑺":"(7)","⑻":"(8)","⑼":"(9)","⑽":"(10)","⑾":"(11)","⑿":"(12)","⒀":"(13)","⒁":"(14)","⒂":"(15)","⒃":"(16)","⒄":"(17)","⒅":"(18)","⒆":"(19)","⒇":"(20)","⒈":"1.","⒉":"2.","⒊":"3.","⒋":"4.","⒌":"5.","⒍":"6.","⒎":"7.","⒏":"8.","⒐":"9.","⒑":"10.","⒒":"11.","⒓":"12.","⒔":"13.","⒕":"14.","⒖":"15.","⒗":"16.","⒘":"17.","⒙":"18.","⒚":"19.","⒛":"20.","⒜":"(a)","⒝":"(b)","⒞":"(c)","⒟":"(d)","⒠":"(e)","⒡":"(f)","⒢":"(g)","⒣":"(h)","⒤":"(i)","⒥":"(j)","⒦":"(k)","⒧":"(l)","⒨":"(m)","⒩":"(n)","⒪":"(o)","⒫":"(p)","⒬":"(q)","⒭":"(r)","⒮":"(s)","⒯":"(t)","⒰":"(u)","⒱":"(v)","⒲":"(w)","⒳":"(x)","⒴":"(y)","⒵":"(z)","⨌":"∫∫∫∫","⩴":"::=","⩵":"==","⩶":"===","⺟":"母","⻳":"龟","⼀":"一","⼁":"丨","⼂":"丶","⼃":"丿","⼄":"乙","⼅":"亅","⼆":"二","⼇":"亠","⼈":"人","⼉":"儿","⼊":"入","⼋":"八","⼌":"冂","⼍":"冖","⼎":"冫","⼏":"几","⼐":"凵","⼑":"刀","⼒":"力","⼓":"勹","⼔":"匕","⼕":"匚","⼖":"匸","⼗":"十","⼘":"卜","⼙":"卩","⼚":"厂","⼛":"厶","⼜":"又","⼝":"口","⼞":"囗","⼟":"土","⼠":"士","⼡":"夂","⼢":"夊","⼣":"夕","⼤":"大","⼥":"女","⼦":"子","⼧":"宀","⼨":"寸","⼩":"小","⼪":"尢","⼫":"尸","⼬":"屮","⼭":"山","⼮":"巛","⼯":"工","⼰":"己","⼱":"巾","⼲":"干","⼳":"幺","⼴":"广","⼵":"廴","⼶":"廾","⼷":"弋","⼸":"弓","⼹":"彐","⼺":"彡","⼻":"彳","⼼":"心","⼽":"戈","⼾":"戶","⼿":"手","⽀":"支","⽁":"攴","⽂":"文","⽃":"斗","⽄":"斤","⽅":"方","⽆":"无","⽇":"日","⽈":"曰","⽉":"月","⽊":"木","⽋":"欠","⽌":"止","⽍":"歹","⽎":"殳","⽏":"毋","⽐":"比","⽑":"毛","⽒":"氏","⽓":"气","⽔":"水","⽕":"火","⽖":"爪","⽗":"父","⽘":"爻","⽙":"爿","⽚":"片","⽛":"牙","⽜":"牛","⽝":"犬","⽞":"玄","⽟":"玉","⽠":"瓜","⽡":"瓦","⽢":"甘","⽣":"生","⽤":"用","⽥":"田","⽦":"疋","⽧":"疒","⽨":"癶","⽩":"白","⽪":"皮","⽫":"皿","⽬":"目","⽭":"矛","⽮":"矢","⽯":"石","⽰":"示","⽱":"禸","⽲":"禾","⽳":"穴","⽴":"立","⽵":"竹","⽶":"米","⽷":"糸","⽸":"缶","⽹":"网","⽺":"羊","⽻":"羽","⽼":"老","⽽":"而","⽾":"耒","⽿":"耳","⾀":"聿","⾁":"肉","⾂":"臣","⾃":"自","⾄":"至","⾅":"臼","⾆":"舌","⾇":"舛","⾈":"舟","⾉":"艮","⾊":"色","⾋":"艸","⾌":"虍","⾍":"虫","⾎":"血","⾏":"行","⾐":"衣","⾑":"襾","⾒":"見","⾓":"角","⾔":"言","⾕":"谷","⾖":"豆","⾗":"豕","⾘":"豸","⾙":"貝","⾚":"赤","⾛":"走","⾜":"足","⾝":"身","⾞":"車","⾟":"辛","⾠":"辰","⾡":"辵","⾢":"邑","⾣":"酉","⾤":"釆","⾥":"里","⾦":"金","⾧":"長","⾨":"門","⾩":"阜","⾪":"隶","⾫":"隹","⾬":"雨","⾭":"靑","⾮":"非","⾯":"面","⾰":"革","⾱":"韋","⾲":"韭","⾳":"音","⾴":"頁","⾵":"風","⾶":"飛","⾷":"食","⾸":"首","⾹":"香","⾺":"馬","⾻":"骨","⾼":"高","⾽":"髟","⾾":"鬥","⾿":"鬯","⿀":"鬲","⿁":"鬼","⿂":"魚","⿃":"鳥","⿄":"鹵","⿅":"鹿","⿆":"麥","⿇":"麻","⿈":"黃","⿉":"黍","⿊":"黑","⿋":"黹","⿌":"黽","⿍":"鼎",
"⿎":"鼓","⿏":"鼠","⿐":"鼻","⿑":"齊","⿒":"齒","⿓":"龍","⿔":"龜","⿕":"龠","〶":"〒","〸":"十","〹":"卄","〺":"卅","゛":" ゙","゜":" ゚","ㄱ":"ᄀ","ㄲ":"ᄁ","ㄳ":"ᆪ","ㄴ":"ᄂ","ㄵ":"ᆬ","ㄶ":"ᆭ","ㄷ":"ᄃ","ㄸ":"ᄄ","ㄹ":"ᄅ","ㄺ":"ᆰ","ㄻ":"ᆱ","ㄼ":"ᆲ","ㄽ":"ᆳ","ㄾ":"ᆴ","ㄿ":"ᆵ","ㅀ":"ᄚ","ㅁ":"ᄆ","ㅂ":"ᄇ","ㅃ":"ᄈ","ㅄ":"ᄡ","ㅅ":"ᄉ","ㅆ":"ᄊ","ㅇ":"ᄋ","ㅈ":"ᄌ","ㅉ":"ᄍ","ㅊ":"ᄎ","ㅋ":"ᄏ","ㅌ":"ᄐ","ㅍ":"ᄑ","ㅎ":"ᄒ","ㅏ":"ᅡ","ㅐ":"ᅢ","ㅑ":"ᅣ","ㅒ":"ᅤ","ㅓ":"ᅥ","ㅔ":"ᅦ","ㅕ":"ᅧ","ㅖ":"ᅨ","ㅗ":"ᅩ","ㅘ":"ᅪ","ㅙ":"ᅫ","ㅚ":"ᅬ","ㅛ":"ᅭ","ㅜ":"ᅮ","ㅝ":"ᅯ","ㅞ":"ᅰ","ㅟ":"ᅱ","ㅠ":"ᅲ","ㅡ":"ᅳ","ㅢ":"ᅴ","ㅣ":"ᅵ","ㅤ":"ᅠ","ㅥ":"ᄔ","ㅦ":"ᄕ","ㅧ":"ᇇ","ㅨ":"ᇈ","ㅩ":"ᇌ","ㅪ":"ᇎ","ㅫ":"ᇓ","ㅬ":"ᇗ","ㅭ":"ᇙ","ㅮ":"ᄜ","ㅯ":"ᇝ","ㅰ":"ᇟ","ㅱ":"ᄝ","ㅲ":"ᄞ","ㅳ":"ᄠ","ㅴ":"ᄢ","ㅵ":"ᄣ","ㅶ":"ᄧ","ㅷ":"ᄩ","ㅸ":"ᄫ","ㅹ":"ᄬ","ㅺ":"ᄭ","ㅻ":"ᄮ","ㅼ":"ᄯ","ㅽ":"ᄲ","ㅾ":"ᄶ","ㅿ":"ᅀ","ㆀ":"ᅇ","ㆁ":"ᅌ","ㆂ":"ᇱ","ㆃ":"ᇲ","ㆄ":"ᅗ","ㆅ":"ᅘ","ㆆ":"ᅙ","ㆇ":"ᆄ","ㆈ":"ᆅ","ㆉ":"ᆈ","ㆊ":"ᆑ","ㆋ":"ᆒ","ㆌ":"ᆔ","ㆍ":"ᆞ","ㆎ":"ᆡ","㈀":"(ᄀ)","㈁":"(ᄂ)","㈂":"(ᄃ)","㈃":"(ᄅ)","㈄":"(ᄆ)","㈅":"(ᄇ)","㈆":"(ᄉ)","㈇":"(ᄋ)","㈈":"(ᄌ)","㈉":"(ᄎ)","㈊":"(ᄏ)","㈋":"(ᄐ)","㈌":"(ᄑ)","㈍":"(ᄒ)","㈎":"(가)","㈏":"(나)","㈐":"(다)","㈑":"(라)","㈒":"(마)","㈓":"(바)","㈔":"(사)","㈕":"(아)","㈖":"(자)","㈗":"(차)","㈘":"(카)","㈙":"(타)","㈚":"(파)","㈛":"(하)","㈜":"(주)","㈝":"(오전)","㈞":"(오후)","㈠":"(一)","㈡":"(二)","㈢":"(三)","㈣":"(四)","㈤":"(五)","㈥":"(六)","㈦":"(七)","㈧":"(八)","㈨":"(九)","㈩":"(十)","㈪":"(月)","㈫":"(火)","㈬":"(水)","㈭":"(木)","㈮":"(金)","㈯":"(土)","㈰":"(日)","㈱":"(株)","㈲":"(有)","㈳":"(社)","㈴":"(名)","㈵":"(特)","㈶":"(財)","㈷":"(祝)","㈸":"(労)","㈹":"(代)","㈺":"(呼)","㈻":"(学)","㈼":"(監)","㈽":"(企)","㈾":"(資)","㈿":"(協)","㉀":"(祭)","㉁":"(休)","㉂":"(自)","㉃":"(至)","㋀":"1月","㋁":"2月","㋂":"3月","㋃":"4月","㋄":"5月","㋅":"6月","㋆":"7月","㋇":"8月","㋈":"9月","㋉":"10月","㋊":"11月","㋋":"12月","㍘":"0点","㍙":"1点","㍚":"2点","㍛":"3点","㍜":"4点","㍝":"5点","㍞":"6点","㍟":"7点","㍠":"8点","㍡":"9点","㍢":"10点","㍣":"11点","㍤":"12点","㍥":"13点","㍦":"14点","㍧":"15点","㍨":"16点","㍩":"17点","㍪":"18点","㍫":"19点","㍬":"20点","㍭":"21点","㍮":"22点","㍯":"23点","㍰":"24点","㏠":"1日","㏡":"2日","㏢":"3日","㏣":"4日","㏤":"5日","㏥":"6日","㏦":"7日","㏧":"8日","㏨":"9日","㏩":"10日","㏪":"11日","㏫":"12日","㏬":"13日","㏭":"14日","㏮":"15日","㏯":"16日","㏰":"17日","㏱":"18日","㏲":"19日","㏳":"20日","㏴":"21日","㏵":"22日","㏶":"23日","㏷":"24日","㏸":"25日","㏹":"26日","㏺":"27日","㏻":"28日","㏼":"29日","㏽":"30日","㏾":"31日","ﬀ":"ff","ﬁ":"fi","ﬂ":"fl","ﬃ":"ffi","ﬄ":"ffl","ﬅ":"ſt","ﬆ":"st","ﬓ":"մն","ﬔ":"մե","ﬕ":"մի","ﬖ":"վն","ﬗ":"մխ","ﭏ":"אל","ﭐ":"ٱ","ﭑ":"ٱ","ﭒ":"ٻ","ﭓ":"ٻ","ﭔ":"ٻ","ﭕ":"ٻ","ﭖ":"پ","ﭗ":"پ","ﭘ":"پ","ﭙ":"پ","ﭚ":"ڀ","ﭛ":"ڀ","ﭜ":"ڀ","ﭝ":"ڀ","ﭞ":"ٺ","ﭟ":"ٺ","ﭠ":"ٺ","ﭡ":"ٺ","ﭢ":"ٿ","ﭣ":"ٿ","ﭤ":"ٿ","ﭥ":"ٿ","ﭦ":"ٹ","ﭧ":"ٹ","ﭨ":"ٹ","ﭩ":"ٹ","ﭪ":"ڤ","ﭫ":"ڤ","ﭬ":"ڤ","ﭭ":"ڤ","ﭮ":"ڦ","ﭯ":"ڦ","ﭰ":"ڦ","ﭱ":"ڦ","ﭲ":"ڄ","ﭳ":"ڄ","ﭴ":"ڄ","ﭵ":"ڄ","ﭶ":"ڃ","ﭷ":"ڃ","ﭸ":"ڃ","ﭹ":"ڃ","ﭺ":"چ","ﭻ":"چ","ﭼ":"چ","ﭽ":"چ","ﭾ":"ڇ","ﭿ":"ڇ","ﮀ":"ڇ","ﮁ":"ڇ","ﮂ":"ڍ","ﮃ":"ڍ","ﮄ":"ڌ","ﮅ":"ڌ","ﮆ":"ڎ","ﮇ":"ڎ","ﮈ":"ڈ","ﮉ":"ڈ","ﮊ":"ژ","ﮋ":"ژ","ﮌ":"ڑ","ﮍ":"ڑ","ﮎ":"ک","ﮏ":"ک","ﮐ":"ک","ﮑ":"ک","ﮒ":"گ","ﮓ":"گ","ﮔ":"گ","ﮕ":"گ","ﮖ":"ڳ","ﮗ":"ڳ","ﮘ":"ڳ","ﮙ":"ڳ","ﮚ":"ڱ","ﮛ":"ڱ","ﮜ":"ڱ","ﮝ":"ڱ","ﮞ":"ں","ﮟ":"ں","ﮠ":"ڻ","ﮡ":"ڻ","ﮢ":"ڻ","ﮣ":"ڻ","ﮤ":"ۀ","ﮥ":"ۀ","ﮦ":"ہ","ﮧ":"ہ","ﮨ":"ہ","ﮩ":"ہ","ﮪ":"ھ","ﮫ":"ھ","ﮬ":"ھ","ﮭ":"ھ","ﮮ":"ے","ﮯ":"ے","ﮰ":"ۓ","ﮱ":"ۓ","ﯓ":"ڭ","ﯔ":"ڭ","ﯕ":"ڭ","ﯖ":"ڭ","ﯗ":"ۇ","ﯘ":"ۇ","ﯙ":"ۆ","ﯚ":"ۆ","ﯛ":"ۈ","ﯜ":"ۈ","ﯝ":"ٷ","ﯞ":"ۋ","ﯟ":"ۋ","ﯠ":"ۅ","ﯡ":"ۅ","ﯢ":"ۉ","ﯣ":"ۉ","ﯤ":"ې","ﯥ":"ې","ﯦ":"ې","ﯧ":"ې","ﯨ":"ى","ﯩ":"ى","ﯪ":"ئا","ﯫ":"ئا","ﯬ":"ئە","ﯭ":"ئە","ﯮ":"ئو","ﯯ":"ئو","ﯰ":"ئۇ","ﯱ":"ئۇ","ﯲ":"ئۆ","ﯳ":"ئۆ","ﯴ":"ئۈ","ﯵ":"ئۈ","ﯶ":"ئې","ﯷ":"ئې","ﯸ":"ئې","ﯹ":"ئى","ﯺ":"ئى","ﯻ":"ئى","ﯼ":"ی","ﯽ":"ی","ﯾ":"ی","ﯿ":"ی","ﰀ":"ئج","ﰁ":"ئح","ﰂ":"ئم","ﰃ":"ئى","ﰄ":"ئي","ﰅ":"بج","ﰆ":"بح","ﰇ":"بخ","ﰈ":"بم","ﰉ":"بى","ﰊ":"بي","ﰋ":"تج","ﰌ":"تح","ﰍ":"تخ","ﰎ":"تم","ﰏ":"تى","ﰐ":"تي","ﰑ":"ثج","ﰒ":"ثم","ﰓ":"ثى","ﰔ":"ثي","ﰕ":"جح","ﰖ":"جم","ﰗ":"حج","ﰘ":"حم","ﰙ":"خج","ﰚ":"خح","ﰛ":"خم","ﰜ":"سج","ﰝ":"سح","ﰞ":"سخ","ﰟ":"سم","ﰠ":"صح","ﰡ":"صم","ﰢ":"ضج","ﰣ":"ضح","ﰤ":"ضخ","ﰥ":"ضم","ﰦ":"طح","ﰧ":"طم","ﰨ":"ظم","ﰩ":"عج","ﰪ":"عم","ﰫ":"غج","ﰬ":"غم","ﰭ":"فج","ﰮ":"فح","ﰯ":"فخ","ﰰ":"فم","ﰱ":"فى","ﰲ":"في","ﰳ":"قح","ﰴ":"قم","ﰵ":"قى","ﰶ":"قي","ﰷ":"كا","ﰸ":"كج","ﰹ":"كح","ﰺ":"كخ","ﰻ":"كل","ﰼ":"كم","ﰽ":"كى","ﰾ":"كي","ﰿ":"لج","ﱀ":"لح","ﱁ":"لخ","ﱂ":"لم","ﱃ":"لى","ﱄ":"لي","ﱅ":"مج","ﱆ":"مح","ﱇ":"مخ","ﱈ":"مم","ﱉ":"مى","ﱊ":"مي","ﱋ":"نج","ﱌ":"نح","ﱍ":"نخ","ﱎ":"نم","ﱏ":"نى","ﱐ":"ني","ﱑ":"هج","ﱒ":"هم","ﱓ":"هى","ﱔ":"هي","ﱕ":"يج","ﱖ":"يح","ﱗ":"يخ","ﱘ":"يم","ﱙ":"يى","ﱚ":"يي","ﱛ":"ذٰ","ﱜ":"رٰ","ﱝ":"ىٰ","ﱞ":" ٌّ","ﱟ":" ٍّ","ﱠ":" َّ","ﱡ":" ُّ","ﱢ":" ِّ","ﱣ":" ّٰ","ﱤ":"ئر","ﱥ":"ئز","ﱦ":"ئم","ﱧ":"ئن","ﱨ":"ئى","ﱩ":"ئي","ﱪ":"بر","ﱫ":"بز","ﱬ":"بم","ﱭ":"بن","ﱮ":"بى","ﱯ":"بي","ﱰ":"تر","ﱱ":"تز","ﱲ":"تم","ﱳ":"تن","ﱴ":"تى","ﱵ":"تي","ﱶ":"ثر","ﱷ":"ثز","ﱸ":"ثم","ﱹ":"ثن","ﱺ":"ثى","ﱻ":"ثي","ﱼ":"فى","ﱽ":"في","ﱾ":"قى","ﱿ":"قي","ﲀ":"كا","ﲁ":"كل","ﲂ":"كم","ﲃ":"كى","ﲄ":"كي","ﲅ":"لم","ﲆ":"لى","ﲇ":"لي","ﲈ":"ما","ﲉ":"مم","ﲊ":"نر","ﲋ":"نز","ﲌ":"نم","ﲍ":"نن","ﲎ":"نى","ﲏ":"ني","ﲐ":"ىٰ","ﲑ":"ير","ﲒ":"يز","ﲓ":"يم","ﲔ":"ين","ﲕ":"يى","ﲖ":"يي","ﲗ":"ئج","ﲘ":"ئح","ﲙ":"ئخ","ﲚ":"ئم","ﲛ":"ئه","ﲜ":"بج","ﲝ":"بح","ﲞ":"بخ","ﲟ":"بم","ﲠ":"به","ﲡ":"تج","ﲢ":"تح","ﲣ":"تخ","ﲤ":"تم","ﲥ":"ته","ﲦ":"ثم","ﲧ":"جح","ﲨ":"جم","ﲩ":"حج","ﲪ":"حم","ﲫ":"خج","ﲬ":"خم","ﲭ":"سج","ﲮ":"سح","ﲯ":"سخ","ﲰ":"سم","ﲱ":"صح","ﲲ":"صخ","ﲳ":"صم","ﲴ":"ضج","ﲵ":"ضح","ﲶ":"ضخ","ﲷ":"ضم","ﲸ":"طح","ﲹ":"ظم","ﲺ":"عج","ﲻ":"عم","ﲼ":"غج","ﲽ":"غم","ﲾ":"فج","ﲿ":"فح","ﳀ":"فخ","ﳁ":"فم","ﳂ":"قح","ﳃ":"قم","ﳄ":"كج","ﳅ":"كح","ﳆ":"كخ","ﳇ":"كل","ﳈ":"كم","ﳉ":"لج","ﳊ":"لح","ﳋ":"لخ","ﳌ":"لم","ﳍ":"له","ﳎ":"مج","ﳏ":"مح","ﳐ":"مخ","ﳑ":"مم","ﳒ":"نج","ﳓ":"نح","ﳔ":"نخ","ﳕ":"نم","ﳖ":"نه","ﳗ":"هج","ﳘ":"هم","ﳙ":"هٰ","ﳚ":"يج","ﳛ":"يح","ﳜ":"يخ","ﳝ":"يم","ﳞ":"يه","ﳟ":"ئم","ﳠ":"ئه","ﳡ":"بم","ﳢ":"به","ﳣ":"تم","ﳤ":"ته","ﳥ":"ثم","ﳦ":"ثه","ﳧ":"سم","ﳨ":"سه","ﳩ":"شم","ﳪ":"شه","ﳫ":"كل","ﳬ":"كم","ﳭ":"لم","ﳮ":"نم","ﳯ":"نه","ﳰ":"يم","ﳱ":"يه","ﳲ":"ـَّ","ﳳ":"ـُّ","ﳴ":"ـِّ","ﳵ":"طى","ﳶ":"طي","ﳷ":"عى","ﳸ":"عي","ﳹ":"غى","ﳺ":"غي","ﳻ":"سى","ﳼ":"سي","ﳽ":"شى","ﳾ":"شي","ﳿ":"حى","ﴀ":"حي","ﴁ":"جى","ﴂ":"جي","ﴃ":"خى","ﴄ":"خي","ﴅ":"صى","ﴆ":"صي","ﴇ":"ضى","ﴈ":"ضي","ﴉ":"شج","ﴊ":"شح","ﴋ":"شخ","ﴌ":"شم","ﴍ":"شر","ﴎ":"سر","ﴏ":"صر","ﴐ":"ضر","ﴑ":"طى","ﴒ":"طي","ﴓ":"عى","ﴔ":"عي","ﴕ":"غى","ﴖ":"غي","ﴗ":"سى","ﴘ":"سي","ﴙ":"شى","ﴚ":"شي","ﴛ":"حى","ﴜ":"حي","ﴝ":"جى","ﴞ":"جي","ﴟ":"خى","ﴠ":"خي","ﴡ":"صى","ﴢ":"صي","ﴣ":"ضى","ﴤ":"ضي","ﴥ":"شج","ﴦ":"شح","ﴧ":"شخ","ﴨ":"شم","ﴩ":"شر","ﴪ":"سر","ﴫ":"صر","ﴬ":"ضر","ﴭ":"شج","ﴮ":"شح","ﴯ":"شخ","ﴰ":"شم","ﴱ":"سه","ﴲ":"شه","ﴳ":"طم","ﴴ":"سج","ﴵ":"سح","ﴶ":"سخ","ﴷ":"شج","ﴸ":"شح","ﴹ":"شخ","ﴺ":"طم","ﴻ":"ظم","ﴼ":"اً","ﴽ":"اً","ﵐ":"تجم","ﵑ":"تحج","ﵒ":"تحج","ﵓ":"تحم","ﵔ":"تخم","ﵕ":"تمج","ﵖ":"تمح","ﵗ":"تمخ","ﵘ":"جمح","ﵙ":"جمح","ﵚ":"حمي","ﵛ":"حمى","ﵜ":"سحج","ﵝ":"سجح","ﵞ":"سجى","ﵟ":"سمح","ﵠ":"سمح","ﵡ":"سمج","ﵢ":"سمم","ﵣ":"سمم","ﵤ":"صحح","ﵥ":"صحح","ﵦ":"صمم","ﵧ":"شحم","ﵨ":"شحم","ﵩ":"شجي","ﵪ":"شمخ","ﵫ":"شمخ","ﵬ":"شمم","ﵭ":"شمم","ﵮ":"ضحى","ﵯ":"ضخم","ﵰ":"ضخم","ﵱ":"طمح","ﵲ":"طمح","ﵳ":"طمم","ﵴ":"طمي","ﵵ":"عجم","ﵶ":"عمم","ﵷ":"عمم","ﵸ":"عمى","ﵹ":"غمم","ﵺ":"غمي","ﵻ":"غمى","ﵼ":"فخم","ﵽ":"فخم","ﵾ":"قمح","ﵿ":"قمم","ﶀ":"لحم","ﶁ":"لحي","ﶂ":"لحى","ﶃ":"لجج","ﶄ":"لجج","ﶅ":"لخم","ﶆ":"لخم","ﶇ":"لمح","ﶈ":"لمح","ﶉ":"محج","ﶊ":"محم","ﶋ":"محي","ﶌ":"مجح","ﶍ":"مجم","ﶎ":"مخج","ﶏ":"مخم","ﶒ":"مجخ","ﶓ":"همج","ﶔ":"همم","ﶕ":"نحم","ﶖ":"نحى","ﶗ":"نجم","ﶘ":"نجم","ﶙ":"نجى","ﶚ":"نمي","ﶛ":"نمى","ﶜ":"يمم","ﶝ":"يمم","ﶞ":"بخي","ﶟ":"تجي","ﶠ":"تجى","ﶡ":"تخي","ﶢ":"تخى","ﶣ":"تمي","ﶤ":"تمى","ﶥ":"جمي","ﶦ":"جحى","ﶧ":"جمى","ﶨ":"سخى","ﶩ":"صحي","ﶪ":"شحي","ﶫ":"ضحي","ﶬ":"لجي","ﶭ":"لمي","ﶮ":"يحي","ﶯ":"يجي","ﶰ":"يمي","ﶱ":"ممي","ﶲ":"قمي","ﶳ":"نحي","ﶴ":"قمح","ﶵ":"لحم","ﶶ":"عمي","ﶷ":"كمي","ﶸ":"نجح","ﶹ":"مخي","ﶺ":"لجم","ﶻ":"كمم","ﶼ":"لجم","ﶽ":"نجح","ﶾ":"جحي","ﶿ":"حجي","ﷀ":"مجي","ﷁ":"فمي","ﷂ":"بحي","ﷃ":"كمم","ﷄ":"عجم","ﷅ":"صمم","ﷆ":"سخي","ﷇ":"نجي","﹉":"‾","﹊":"‾","﹋":"‾","﹌":"‾","﹍":"_","﹎":"_","﹏":"_","ﺀ":"ء","ﺁ":"آ","ﺂ":"آ","ﺃ":"أ","ﺄ":"أ","ﺅ":"ؤ","ﺆ":"ؤ","ﺇ":"إ","ﺈ":"إ","ﺉ":"ئ","ﺊ":"ئ","ﺋ":"ئ","ﺌ":"ئ","ﺍ":"ا","ﺎ":"ا","ﺏ":"ب","ﺐ":"ب","ﺑ":"ب","ﺒ":"ب","ﺓ":"ة","ﺔ":"ة","ﺕ":"ت","ﺖ":"ت","ﺗ":"ت","ﺘ":"ت","ﺙ":"ث","ﺚ":"ث","ﺛ":"ث","ﺜ":"ث","ﺝ":"ج","ﺞ":"ج","ﺟ":"ج","ﺠ":"ج","ﺡ":"ح","ﺢ":"ح","ﺣ":"ح","ﺤ":"ح","ﺥ":"خ","ﺦ":"خ","ﺧ":"خ","ﺨ":"خ","ﺩ":"د","ﺪ":"د","ﺫ":"ذ","ﺬ":"ذ","ﺭ":"ر","ﺮ":"ر","ﺯ":"ز","ﺰ":"ز","ﺱ":"س","ﺲ":"س","ﺳ":"س","ﺴ":"س","ﺵ":"ش","ﺶ":"ش","ﺷ":"ش","ﺸ":"ش","ﺹ":"ص","ﺺ":"ص","ﺻ":"ص","ﺼ":"ص","ﺽ":"ض","ﺾ":"ض","ﺿ":"ض","ﻀ":"ض","ﻁ":"ط","ﻂ":"ط","ﻃ":"ط","ﻄ":"ط","ﻅ":"ظ","ﻆ":"ظ","ﻇ":"ظ","ﻈ":"ظ","ﻉ":"ع","ﻊ":"ع","ﻋ":"ع","ﻌ":"ع","ﻍ":"غ","ﻎ":"غ","ﻏ":"غ","ﻐ":"غ","ﻑ":"ف","ﻒ":"ف","ﻓ":"ف","ﻔ":"ف","ﻕ":"ق","ﻖ":"ق","ﻗ":"ق","ﻘ":"ق","ﻙ":"ك","ﻚ":"ك","ﻛ":"ك","ﻜ":"ك","ﻝ":"ل","ﻞ":"ل","ﻟ":"ل","ﻠ":"ل","ﻡ":"م","ﻢ":"م","ﻣ":"م","ﻤ":"م","ﻥ":"ن","ﻦ":"ن","ﻧ":"ن","ﻨ":"ن","ﻩ":"ه","ﻪ":"ه","ﻫ":"ه","ﻬ":"ه","ﻭ":"و","ﻮ":"و","ﻯ":"ى","ﻰ":"ى","ﻱ":"ي","ﻲ":"ي","ﻳ":"ي","ﻴ":"ي","ﻵ":"لآ","ﻶ":"لآ","ﻷ":"لأ","ﻸ":"لأ","ﻹ":"لإ","ﻺ":"لإ","ﻻ":"لا","ﻼ":"لا"},$t=function(){function e(e,t,a,r,i,n,s){this.fontChar=e,this.unicode=t,this.accent=a,this.width=r,this.vmetric=i,this.operatorListId=n,this.isSpace=s}return e.prototype.matchesForCache=function(e,t,a,r,i,n,s){return this.fontChar===e&&this.unicode===t&&this.accent===a&&this.width===r&&this.vmetric===i&&this.operatorListId===n&&this.isSpace===s},e}(),ea=function(){function e(e){this._map=e}return e.prototype={get length(){return this._map.length},forEach:function(e){for(var t in this._map)e(t,this._map[t].charCodeAt(0))},has:function(e){return void 0!==this._map[e]},get:function(e){return this._map[e]},charCodeOf:function(e){return this._map.indexOf(e)}},e}(),ta=function(){function e(e,t){this.firstChar=e,this.lastChar=t}return e.prototype={get length(){return this.lastChar+1-this.firstChar},forEach:function(e){for(var t=this.firstChar,a=this.lastChar;a>=t;t++)e(t,t)},has:function(e){return this.firstChar<=e&&e<=this.lastChar},get:function(e){return this.firstChar<=e&&e<=this.lastChar?String.fromCharCode(e):void 0},charCodeOf:function(e){return C(e)&&e>=this.firstChar&&e<=this.lastChar?e:-1}},e}(),aa=function(){function e(e,t,a){e[t]=a>>8&255,e[t+1]=255&a}function t(e,t,a){e[t]=a>>24&255,e[t+1]=a>>16&255,e[t+2]=a>>8&255,e[t+3]=255&a}function a(e,t,a){var r,i
if(a instanceof Uint8Array)e.set(a,t)
else if("string"==typeof a)for(r=0,i=a.length;i>r;r++)e[t++]=255&a.charCodeAt(r)
else for(r=0,i=a.length;i>r;r++)e[t++]=255&a[r]}function r(e){this.sfnt=e,this.tables=Object.create(null)}r.getSearchParams=function(e,t){for(var a=1,r=0;(a^e)>a;)a<<=1,r++
var i=a*t
return{range:i,entry:r,rangeShift:t*e-i}}
var i=12,n=16
return r.prototype={toArray:function(){var s=this.sfnt,o=this.tables,c=Object.keys(o)
c.sort()
var l,h,f,d,g,m=c.length,p=i+m*n,b=[p]
for(l=0;m>l;l++){d=o[c[l]]
var v=(d.length+3&-4)>>>0
p+=v,b.push(p)}var y=new Uint8Array(p)
for(l=0;m>l;l++)d=o[c[l]],a(y,b[l],d)
"true"===s&&(s=u(65536)),y[0]=255&s.charCodeAt(0),y[1]=255&s.charCodeAt(1),y[2]=255&s.charCodeAt(2),y[3]=255&s.charCodeAt(3),e(y,4,m)
var k=r.getSearchParams(m,16)
for(e(y,6,k.range),e(y,8,k.entry),e(y,10,k.rangeShift),p=i,l=0;m>l;l++){g=c[l],y[p]=255&g.charCodeAt(0),y[p+1]=255&g.charCodeAt(1),y[p+2]=255&g.charCodeAt(2),y[p+3]=255&g.charCodeAt(3)
var w=0
for(h=b[l],f=b[l+1];f>h;h+=4){var x=(y[h]<<24)+(y[h+1]<<16)+(y[h+2]<<8)+y[h+3]
w=w+x|0}t(y,p+4,w),t(y,p+8,b[l]),t(y,p+12,o[g].length),p+=n}return y},addTable:function(e,t){if(e in this.tables)throw new Error("Table "+e+" already exists")
this.tables[e]=t}},r}(),ra=new Int32Array([0,32,127,161,173,174,1536,1920,2208,4256,6016,6144,8192,8208,8209,8210,8232,8240,8287,8304,9676,9677,43616,43648,65520,65536]),ia=function(){function a(a,i,n){var s,o,c
this.name=a,this.loadedName=n.loadedName,this.isType3Font=n.isType3Font,this.sizes=[],this.glyphCache={}
var l=a.split("+")
l=l.length>1?l[1]:l[0],l=l.split(/[-,_]/g)[0],this.isSerifFont=!!(n.flags&zt.Serif),this.isSymbolicFont=!!(n.flags&zt.Symbolic),this.isMonospace=!!(n.flags&zt.FixedPitch)
var h=n.type,u=n.subtype
if(this.type=h,this.fallbackName=this.isMonospace?"monospace":this.isSerifFont?"serif":"sans-serif",this.differences=n.differences,this.widths=n.widths,this.defaultWidth=n.defaultWidth,this.composite=n.composite,this.wideChars=n.wideChars,this.cMap=n.cMap,this.ascent=n.ascent/Ut,this.descent=n.descent/Ut,this.fontMatrix=n.fontMatrix,this.bbox=n.bbox,this.toUnicode=n.toUnicode=this.buildToUnicode(n),this.toFontChar=[],"Type3"===n.type){for(s=0;256>s;s++)this.toFontChar[s]=this.differences[s]||n.defaultEncoding[s]
return void(this.fontType=ee.TYPE3)}if(this.cidEncoding=n.cidEncoding,this.vertical=n.vertical,this.vertical&&(this.vmetrics=n.vmetrics,this.defaultVMetrics=n.defaultVMetrics),!i||i.isEmpty){i&&t('Font file is empty in "'+a+'" ('+this.loadedName+")"),this.missingFile=!0
var g=a.replace(/[,_]/g,"-"),m=!!_t[g]||!(!Gt[g]||!_t[Gt[g]])
if(g=_t[g]||Gt[g]||g,this.bold=-1!==g.search(/bold/gi),this.italic=-1!==g.search(/oblique/gi)||-1!==g.search(/italic/gi),this.black=-1!==a.search(/Black/g),this.remeasure=Object.keys(this.widths).length>0,m&&"CIDFontType2"===h&&0===n.cidEncoding.indexOf("Identity-")){var p=[]
for(s in Wt)p[+s]=Wt[s]
if(/ArialBlack/i.test(a))for(s in Vt)p[+s]=Vt[s]
var b=this.toUnicode instanceof ta
b||this.toUnicode.forEach(function(e,t){p[+e]=t}),this.toFontChar=p,this.toUnicode=new ea(p)}else if(/Symbol/i.test(g)){var v=Ht.SymbolSetEncoding
for(s in v)c=Ia[v[s]],c&&(this.toFontChar[s]=c)
for(s in n.differences)c=Ia[n.differences[s]],c&&(this.toFontChar[s]=c)}else if(/Dingbats/i.test(g)){/Wingdings/i.test(a)&&t("Wingdings font without embedded font file, falling back to the ZapfDingbats encoding.")
var y=Ht.ZapfDingbatsEncoding
for(s in y)c=Ba[y[s]],c&&(this.toFontChar[s]=c)
for(s in n.differences)c=Ba[n.differences[s]],c&&(this.toFontChar[s]=c)}else if(m){this.toFontChar=[]
for(s in n.defaultEncoding)o=n.differences[s]||n.defaultEncoding[s],this.toFontChar[s]=Ia[o]}else{var k=-1===h.indexOf("CIDFontType")
this.toUnicode.forEach(function(e,t){k&&(o=n.differences[e]||n.defaultEncoding[e],t=Ia[o]||t),this.toFontChar[e]=t}.bind(this))}return this.loadedName=g.split("-")[0],this.loading=!1,void(this.fontType=_(h,u))}"Type1C"===u&&"Type1"!==h&&"MMType1"!==h&&(f(i)?u="TrueType":h="Type1"),"CIDFontType0C"===u&&"CIDFontType0"!==h&&(h="CIDFontType0"),"OpenType"===u&&(h="OpenType"),"CIDFontType0"===h&&(u=d(i)?"CIDFontType0":"CIDFontType0C")
var w
switch(h){case"MMType1":e("MMType1 font ("+a+"), falling back to Type1.")
case"Type1":case"CIDFontType0":this.mimetype="font/opentype"
var x="Type1C"===u||"CIDFontType0C"===u?new ha(i,n):new la(a,i,n)
H(n),w=this.convert(a,x,n)
break
case"OpenType":case"TrueType":case"CIDFontType2":this.mimetype="font/opentype",w=this.checkAndRepair(a,i,n),this.isOpenType&&(H(n),h="OpenType")
break
default:r("Font "+h+" is not supported")}this.data=w,this.fontType=_(h,u),this.fontMatrix=n.fontMatrix,this.widths=n.widths,this.defaultWidth=n.defaultWidth,this.encoding=n.baseEncoding,this.seacMap=n.seacMap,this.loading=!0}function i(e,t){return(e<<8)+t}function s(e,t,a,r){return(e<<24)+(t<<16)+(a<<8)+r}function c(e){return String.fromCharCode(e>>8&255,255&e)}function h(e){return e=e>32767?32767:-32768>e?-32768:e,String.fromCharCode(e>>8&255,255&e)}function f(e){var t=e.peekBytes(4)
return 65536===m(t,0)}function d(e){var t=e.peekBytes(2)
return 37===t[0]&&33===t[1]?!0:128===t[0]&&1===t[1]}function g(e){for(var t=0,a=ra.length-1;a>t;){var r=t+a+1>>1
e<ra[r]?a=r-1:t=r}return!(1&t)}function p(e,t){var a=t.toUnicode,r=!!(t.flags&zt.Symbolic),i=t.toUnicode instanceof ta,n=Object.create(null),s=[],o=[],c=Dt
for(var l in e){l|=0
var h=e[l],u=l
if(!i&&a.has(l)){var f=a.get(u)
1===f.length&&(u=f.charCodeAt(0))}if((void 0!==o[u]||g(u)||r&&i)&&qt>=c)do u=c++,Ft&&61440===u&&(u=61472,c=u+1)
while(void 0!==o[u]&&qt>=c)
n[u]=h,s[l]=u,o[u]=!0}return{toFontChar:s,charCodeToGlyphId:n,nextAvailableFontCharCode:c}}function b(e,t){var a=[]
for(var r in e)e[r]>=t||a.push({fontCharCode:0|r,glyphId:e[r]})
a.sort(function(e,t){return e.fontCharCode-t.fontCharCode})
for(var i=[],n=a.length,s=0;n>s;){var o=a[s].fontCharCode,c=[a[s].glyphId];++s
for(var l=o;n>s&&l+1===a[s].fontCharCode&&(c.push(a[s].glyphId),++l,++s,65535!==l););i.push([o,l,c])}return i}function v(e,t){var a,r,i,n,s=b(e,t),o=s[s.length-1][1]>65535?2:1,l="\x00\x00"+c(o)+"\x00\x00"+u(4+8*o)
for(a=s.length-1;a>=0&&!(s[a][0]<=65535);--a);var h=a+1
s[a][0]<65535&&65535===s[a][1]&&(s[a][1]=65534)
var f,d,g,m,p=s[a][1]<65535?1:0,v=h+p,y=aa.getSearchParams(v,2),k="",w="",x="",C="",S="",A=0
for(a=0,r=h;r>a;a++){f=s[a],d=f[0],g=f[1],k+=c(d),w+=c(g),m=f[2]
var I=!0
for(i=1,n=m.length;n>i;++i)if(m[i]!==m[i-1]+1){I=!1
break}if(I){var B=m[0]
x+=c(B-d&65535),C+=c(0)}else{var T=2*(v-a)+2*A
for(A+=g-d+1,x+=c(0),C+=c(T),i=0,n=m.length;n>i;++i)S+=c(m[i])}}p>0&&(w+="ÿÿ",k+="ÿÿ",x+="\x00",C+="\x00\x00")
var O="\x00\x00"+c(2*v)+c(y.range)+c(y.entry)+c(y.rangeShift)+w+"\x00\x00"+k+x+C+S,R="",L=""
if(o>1){for(l+="\x00\x00\n"+u(4+8*o+4+O.length),R="",a=0,r=s.length;r>a;a++){f=s[a],d=f[0],m=f[2]
var M=m[0]
for(i=1,n=m.length;n>i;++i)m[i]!==m[i-1]+1&&(g=f[0]+i-1,R+=u(d)+u(g)+u(M),d=g+1,M=m[i])
R+=u(d)+u(f[1])+u(M)}L="\x00\f\x00\x00"+u(R.length+16)+"\x00\x00\x00\x00"+u(R.length/12)}return l+"\x00"+c(O.length+4)+O+L+R}function y(e){var t=new Na(e.data),a=t.getUint16()
t.getBytes(60)
var r=t.getUint16()
if(4>a&&768&r)return!1
var i=t.getUint16(),n=t.getUint16()
if(i>n)return!1
t.getBytes(6)
var s=t.getUint16()
return 0===s?!1:(e.data[8]=e.data[9]=0,!0)}function k(e,t,a){a=a||{unitsPerEm:0,yMax:0,yMin:0,ascent:0,descent:0}
var i=0,n=0,s=0,o=0,l=null,h=0
if(t)for(var f in t){f|=0,(l>f||!l)&&(l=f),f>h&&(h=f)
var d=N(f)
32>d?i|=1<<d:64>d?n|=1<<d-32:96>d?s|=1<<d-64:123>d?o|=1<<d-96:r("Unicode ranges Bits > 123 are reserved for internal usage")}else l=0,h=255
var g=e.bbox||[0,0,0,0],m=a.unitsPerEm||1/(e.fontMatrix||W)[0],p=e.ascentScaled?1:m/Ut,b=a.ascent||Math.round(p*(e.ascent||g[3])),v=a.descent||Math.round(p*(e.descent||g[1]))
v>0&&e.descent>0&&g[1]<0&&(v=-v)
var y=a.yMax||b,k=-a.yMin||-v
return"\x00$ô\x00\x00\x00»\x00\x00\x00»\x00\x00ß\x001\x00\x00\x00\x00"+String.fromCharCode(e.fixedPitch?9:0)+"\x00\x00\x00\x00\x00\x00"+u(i)+u(n)+u(s)+u(o)+"*21*"+c(e.italicAngle?1:0)+c(l||e.firstChar)+c(h||e.lastChar)+c(b)+c(v)+"\x00d"+c(y)+c(k)+"\x00\x00\x00\x00\x00\x00\x00\x00"+c(e.xHeight)+c(e.capHeight)+c(0)+c(l||e.firstChar)+"\x00"}function w(e){var t=Math.floor(e.italicAngle*Math.pow(2,16))
return"\x00\x00\x00"+u(t)+"\x00\x00\x00\x00"+u(e.fixedPitch)+"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"}function x(e,t){t||(t=[[],[]])
var a,r,i,n,s,o=[t[0][0]||"Original licence",t[0][1]||e,t[0][2]||"Unknown",t[0][3]||"uniqueID",t[0][4]||e,t[0][5]||"Version 0.11",t[0][6]||"",t[0][7]||"Unknown",t[0][8]||"Unknown",t[0][9]||"Unknown"],l=[]
for(a=0,r=o.length;r>a;a++){s=t[1][a]||o[a]
var h=[]
for(i=0,n=s.length;n>i;i++)h.push(c(s.charCodeAt(i)))
l.push(h.join(""))}var u=[o,l],f=["\x00","\x00"],d=["\x00\x00","\x00"],g=["\x00\x00","	"],m=o.length*f.length,p="\x00\x00"+c(m)+c(12*m+6),b=0
for(a=0,r=f.length;r>a;a++){var v=u[a]
for(i=0,n=v.length;n>i;i++){s=v[i]
var y=f[a]+d[a]+g[a]+c(i)+c(s.length)+c(b)
p+=y,b+=s.length}}return p+=o.join("")+l.join("")}return a.getFontID=function(){var e=1
return function(){return String(e++)}}(),a.prototype={name:null,font:null,mimetype:null,encoding:null,get renderer(){var e=Aa.create(this)
return o(this,"renderer",e)},exportData:function(){var e={}
for(var t in this)this.hasOwnProperty(t)&&(e[t]=this[t])
return e},checkAndRepair:function(a,o,c){function h(e){var t=l(e.getBytes(4)),a=e.getInt32(),r=e.getInt32()>>>0,i=e.getInt32()>>>0,n=e.pos
e.pos=e.start?e.start:0,e.skip(r)
var s=e.getBytes(i)
return e.pos=n,"head"===t&&(s[8]=s[9]=s[10]=s[11]=0,s[17]|=32),{tag:t,checksum:a,length:i,offset:r,data:s}}function u(e){return{version:l(e.getBytes(4)),numTables:e.getUint16(),searchRange:e.getUint16(),entrySelector:e.getUint16(),rangeShift:e.getUint16()}}function f(e,a,r,i){if(!e)return t("No cmap table available."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var n,s=(a.start?a.start:0)+e.offset
a.pos=s
for(var o,c=(a.getUint16(),a.getUint16()),l=!1,h=0;c>h;h++){var u=a.getUint16(),f=a.getUint16(),d=a.getInt32()>>>0,g=!1
if(0===u&&0===f?g=!0:1===u&&0===f?g=!0:3!==u||1!==f||(r||!i)&&o?r&&3===u&&0===f&&(g=!0,l=!0):(g=!0,r||(l=!0)),g&&(o={platformId:u,encodingId:f,offset:d}),l)break}if(o&&(a.pos=s+o.offset),!o||-1===a.peekByte())return t("Could not find a preferred cmap table."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var m,p,b=a.getUint16(),v=(a.getUint16(),a.getUint16(),!1),y=[]
if(0===b){for(m=0;256>m;m++){var k=a.getByte()
k&&y.push({charCode:m,glyphId:k})}v=!0}else if(4===b){var w=a.getUint16()>>1
a.getBytes(6)
var x,C=[]
for(x=0;w>x;x++)C.push({end:a.getUint16()})
for(a.getUint16(),x=0;w>x;x++)C[x].start=a.getUint16()
for(x=0;w>x;x++)C[x].delta=a.getUint16()
var S=0
for(x=0;w>x;x++){n=C[x]
var A=a.getUint16()
if(A){var I=(A>>1)-(w-x)
n.offsetIndex=I,S=Math.max(S,I+n.end-n.start+1)}else n.offsetIndex=-1}var B=[]
for(m=0;S>m;m++)B.push(a.getUint16())
for(x=0;w>x;x++){n=C[x],s=n.start
var T=n.end,O=n.delta
for(I=n.offsetIndex,m=s;T>=m;m++)65535!==m&&(p=0>I?m:B[I+m-s],p=p+O&65535,0!==p&&y.push({charCode:m,glyphId:p}))}}else{if(6!==b)return t("cmap table has unsupported format: "+b),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var R=a.getUint16(),L=a.getUint16()
for(m=0;L>m;m++){p=a.getUint16()
var M=R+m
y.push({charCode:M,glyphId:p})}}for(y.sort(function(e,t){return e.charCode-t.charCode}),h=1;h<y.length;h++)y[h-1].charCode===y[h].charCode&&(y.splice(h,1),h--)
return{platformId:o.platformId,encodingId:o.encodingId,mappings:y,hasShortCmap:v}}function d(t,a,r,i){if(!a)return void(r&&(r.data=null))
t.pos=(t.start?t.start:0)+a.offset,t.pos+=a.length-2
var n=t.getUint16()
n>i&&(e("The numOfMetrics ("+n+") should not be greater than the numGlyphs ("+i+")"),n=i,a.data[34]=(65280&n)>>8,a.data[35]=255&n)
var s=i-n,o=s-(r.length-4*n>>1)
if(o>0){var c=new Uint8Array(r.length+2*o)
c.set(r.data),r.data=c}}function g(e,t,a,r,i,n){if(12>=a-t)return 0
var s=e.subarray(t,a),o=s[0]<<8|s[1]
if(32768&o)return r.set(s,i),s.length
var c,l=10,h=0
for(c=0;o>c;c++){var u=s[l]<<8|s[l+1]
h=u+1,l+=2}var f=l,d=s[l]<<8|s[l+1]
l+=2+d
var g=l,m=0
for(c=0;h>c;c++){var p=s[l++]
192&p&&(s[l-1]=63&p)
var b=(2&p?1:16&p?0:2)+(4&p?1:32&p?0:2)
if(m+=b,8&p){var v=s[l++]
c+=v,m+=v*b}}if(0===m)return 0
var y=l+m
return y>s.length?0:!n&&d>0?(r.set(s.subarray(0,f),i),r.set([0,0],i+f),r.set(s.subarray(g,y),i+f+2),y-=d,s.length-y>3&&(y=y+3&-4),y):s.length-y>3?(y=y+3&-4,r.set(s.subarray(0,y),i),y):(r.set(s,i),s.length)}function m(a,r,n){var o=a.data,c=s(o[0],o[1],o[2],o[3])
c>>16!==1&&(e("Attempting to fix invalid version in head table: "+c),o[0]=0,o[1]=1,o[2]=0,o[3]=0)
var l=i(o[50],o[51])
if(0>l||l>1){e("Attempting to fix invalid indexToLocFormat in head table: "+l)
var h=r+1
n===h<<1?(o[50]=0,o[51]=0):n===h<<2?(o[50]=0,o[51]=1):t("Could not fix indexToLocFormat: "+l)}}function b(e,t,a,r,i,n){var s,o,c
r?(s=4,o=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]},c=function(e,t,a){e[t]=a>>>24&255,e[t+1]=a>>16&255,e[t+2]=a>>8&255,e[t+3]=255&a}):(s=2,o=function(e,t){return e[t]<<9|e[t+1]<<1},c=function(e,t,a){e[t]=a>>9&255,e[t+1]=a>>1&255})
var l=e.data,h=s*(1+a)
l.length!==h&&(l=new Uint8Array(h),l.set(e.data.subarray(0,h)),e.data=l)
var u=t.data,f=u.length,d=new Uint8Array(f),m=o(l,0),p=0,b={}
c(l,0,p)
var v,y
for(v=0,y=s;a>v;v++,y+=s){var k=o(l,y)
if(k>f&&(f+3&-4)===k&&(k=f),k>f)c(l,y,p),m=k
else{m===k&&(b[v]=!0)
var w=g(u,m,k,d,p,i)
p+=w,c(l,y,p),m=k}}if(0===p){var x=new Uint8Array([0,1,0,0,0,0,0,0,0,0,0,0,0,0,49,0])
for(v=0,y=s;a>v;v++,y+=s)c(l,y,x.length)
return t.data=x,b}if(n){var C=o(l,s)
d.length>C+p?t.data=d.subarray(0,C+p):(t.data=new Uint8Array(C+p),t.data.set(d.subarray(0,p))),t.data.set(d.subarray(0,C),p),c(e.data,l.length-s,p+C)}else t.data=d.subarray(0,p)
return b}function C(e,a,r){var i=(o.start?o.start:0)+e.offset
o.pos=i
var n=e.length,s=i+n,c=o.getInt32()
o.getBytes(28)
var l,h,u=!0
switch(c){case 65536:l=Zt
break
case 131072:var f=o.getUint16()
if(f!==r){u=!1
break}var d=[]
for(h=0;f>h;++h){var g=o.getUint16()
if(g>=32768){u=!1
break}d.push(g)}if(!u)break
for(var m=[],p=[];o.pos<s;){var b=o.getByte()
for(p.length=b,h=0;b>h;++h)p[h]=String.fromCharCode(o.getByte())
m.push(p.join(""))}for(l=[],h=0;f>h;++h){var v=d[h]
258>v?l.push(Zt[v]):l.push(m[v-258])}break
case 196608:break
default:t("Unknown/unsupported post table version "+c),u=!1,a.defaultEncoding&&(l=a.defaultEncoding)}return a.glyphNames=l,u}function A(e){var t=(o.start?o.start:0)+e.offset
o.pos=t
var a=[[],[]],r=e.length,i=t+r,n=o.getUint16(),s=6
if(0!==n||s>r)return a
var c,h,u=o.getUint16(),f=o.getUint16(),d=[],g=12
for(c=0;u>c&&o.pos+g<=i;c++){var m={platform:o.getUint16(),encoding:o.getUint16(),language:o.getUint16(),name:o.getUint16(),length:o.getUint16(),offset:o.getUint16()};(1===m.platform&&0===m.encoding&&0===m.language||3===m.platform&&1===m.encoding&&1033===m.language)&&d.push(m)}for(c=0,h=d.length;h>c;c++){var p=d[c],b=t+f+p.offset
if(!(b+p.length>i)){o.pos=b
var v=p.name
if(p.encoding){for(var y="",k=0,w=p.length;w>k;k+=2)y+=String.fromCharCode(o.getUint16())
a[1][v]=y}else a[0][v]=l(o.getBytes(p.length))}}return a}function I(e,a){for(var r,i,n,s,o,c=e.data,l=0,h=0,u=0,f=[],d=[],g=[],m=a.tooComplexToFollowFunctions,p=!1,b=0,v=0,y=c.length;y>l;){var k=c[l++]
if(64===k)if(i=c[l++],p||v)l+=i
else for(r=0;i>r;r++)f.push(c[l++])
else if(65===k)if(i=c[l++],p||v)l+=2*i
else for(r=0;i>r;r++)n=c[l++],f.push(n<<8|c[l++])
else if(176===(248&k))if(i=k-176+1,p||v)l+=i
else for(r=0;i>r;r++)f.push(c[l++])
else if(184===(248&k))if(i=k-184+1,p||v)l+=2*i
else for(r=0;i>r;r++)n=c[l++],f.push(n<<8|c[l++])
else if(43!==k||m)if(44!==k||m){if(45===k)if(p)p=!1,h=l
else{if(o=d.pop(),!o)return t("TT: ENDF bad stack"),void(a.hintsValid=!1)
s=g.pop(),c=o.data,l=o.i,a.functionsStackDeltas[s]=f.length-o.stackTop}else if(137===k)(p||v)&&(t("TT: nested IDEFs not allowed"),m=!0),p=!0,u=l
else if(88===k)++b
else if(27===k)v=b
else if(89===k)v===b&&(v=0),--b
else if(28===k&&!p&&!v){var w=f[f.length-1]
w>0&&(l+=w-1)}}else(p||v)&&(t("TT: nested FDEFs not allowed"),m=!0),p=!0,u=l,s=f.pop(),a.functionsDefined[s]={data:c,i:l}
else if(!p&&!v)if(s=f[f.length-1],a.functionsUsed[s]=!0,s in a.functionsStackDeltas)f.length+=a.functionsStackDeltas[s]
else if(s in a.functionsDefined&&g.indexOf(s)<0){if(d.push({data:c,i:l,stackTop:f.length-1}),g.push(s),o=a.functionsDefined[s],!o)return t("TT: CALL non-existent function"),void(a.hintsValid=!1)
c=o.data,l=o.i}if(!p&&!v){var x=142>=k?L[k]:k>=192&&223>=k?-1:k>=224?-2:0
for(k>=113&&117>=k&&(i=f.pop(),i===i&&(x=2*-i));0>x&&f.length>0;)f.pop(),x++
for(;x>0;)f.push(NaN),x--}}a.tooComplexToFollowFunctions=m
var C=[c]
l>c.length&&C.push(new Uint8Array(l-c.length)),u>h&&(t("TT: complementing a missing function tail"),C.push(new Uint8Array([34,45]))),T(e,C)}function B(e,a){if(!e.tooComplexToFollowFunctions){if(e.functionsDefined.length>a)return t("TT: more functions defined than expected"),void(e.hintsValid=!1)
for(var r=0,i=e.functionsUsed.length;i>r;r++){if(r>a)return t("TT: invalid function id: "+r),void(e.hintsValid=!1)
if(e.functionsUsed[r]&&!e.functionsDefined[r])return t("TT: undefined function: "+r),void(e.hintsValid=!1)}}}function T(e,t){if(t.length>1){var a,r,i=0
for(a=0,r=t.length;r>a;a++)i+=t[a].length
i=i+3&-4
var n=new Uint8Array(i),s=0
for(a=0,r=t.length;r>a;a++)n.set(t[a],s),s+=t[a].length
e.data=n,e.length=i}}function O(e,t,a){var r={functionsDefined:[],functionsUsed:[],functionsStackDeltas:[],tooComplexToFollowFunctions:!1,hintsValid:!0}
if(e&&I(e,r),t&&I(t,r),e&&B(r,G),a&&1&a.length){var i=new Uint8Array(a.length+1)
i.set(a.data),a.data=i}return r.hintsValid}function R(e,t,a){return V[e]?!ae&&t>=0&&ee.has(t)?!0:!!(te&&a>=0&&S(te[a])):!0}var L=[0,0,0,0,0,0,0,0,-2,-2,-2,-2,0,0,-2,-5,-1,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,-1,-1,1,-1,-999,0,1,0,-1,-2,0,-1,-2,-1,-1,0,-1,-1,0,0,-999,-999,-1,-1,-1,-1,-2,-999,-2,-2,-999,0,-2,-2,0,0,-2,0,-2,0,0,0,-2,-1,-1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,0,-999,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,-2,-999,-999,-999,-999,-999,-1,-1,-2,-2,0,0,0,0,-1,-1,-999,-2,-2,0,0,-1,-2,-2,0,0,0,-1,-1,-1,-2]
o=new Na(new Uint8Array(o.getBytes()))
for(var M,P,E,D=["OS/2","cmap","head","hhea","hmtx","maxp","name","post","loca","glyf","fpgm","prep","cvt ","CFF "],q=u(o),F=q.numTables,U={"OS/2":null,cmap:null,head:null,hhea:null,hmtx:null,maxp:null,name:null,post:null},N=0;F>N;N++)E=h(o),D.indexOf(E.tag)<0||0!==E.length&&(U[E.tag]=E)
var j=!U["CFF "]
if(j)U.glyf&&U.loca||r('Required "glyf" or "loca" tables are not found'),this.isOpenType=!1
else{if("OTTO"===q.version&&"CIDFontType2"!==c.type||!U.head||!U.hhea||!U.maxp||!U.post)return P=new Na(U["CFF "].data),M=new ha(P,c),H(c),this.convert(a,M,c)
delete U.glyf,delete U.loca,delete U.fpgm,delete U.prep,delete U["cvt "],this.isOpenType=!0}U.maxp||r('Required "maxp" table is not found'),o.pos=(o.start||0)+U.maxp.offset
var z=o.getInt32(),_=o.getUint16(),G=0
if(z>=65536&&U.maxp.length>=22){o.pos+=8
var X=o.getUint16()
X>2&&(U.maxp.data[14]=0,U.maxp.data[15]=2),o.pos+=4,G=o.getUint16()}var J=!1
"CIDFontType2"===c.type&&c.toUnicode&&c.toUnicode.get(0)>"\x00"&&(J=!0,_++,U.maxp.data[4]=_>>8,U.maxp.data[5]=255&_)
var W=O(U.fpgm,U.prep,U["cvt "],G)
W||(delete U.fpgm,delete U.prep,delete U["cvt "]),d(o,U.hhea,U.hmtx,_),U.head||r('Required "head" table is not found'),m(U.head,_,j?U.loca.length:0)
var V={}
if(j){var K=i(U.head.data[50],U.head.data[51])
V=b(U.loca,U.glyf,_,K,W,J)}U.hhea||r('Required "hhea" table is not found'),0===U.hhea.data[10]&&0===U.hhea.data[11]&&(U.hhea.data[10]=255,U.hhea.data[11]=255)
var Y={unitsPerEm:i(U.head.data[18],U.head.data[19]),yMax:i(U.head.data[42],U.head.data[43]),yMin:i(U.head.data[38],U.head.data[39])-65536,ascent:i(U.hhea.data[4],U.hhea.data[5]),descent:i(U.hhea.data[6],U.hhea.data[7])-65536}
if(this.ascent=Y.ascent/Y.unitsPerEm,this.descent=Y.descent/Y.unitsPerEm,U.post){var Z=C(U.post,c,_)
Z||(U.post=null)}var Q,$=[],ee=c.toUnicode,te=c.widths,ae=ee instanceof ta||65536===ee.length
if("CIDFontType2"===c.type){var re=c.cidToGidMap||[],ie=0===re.length
c.cMap.forEach(function(e,t){n(65535>=t,"Max size of CID is 65,535")
var a=-1
ie?a=e:void 0!==re[t]&&(a=re[t]),a>=0&&_>a&&R(a,e,t)&&($[e]=a)}),J&&($[0]=_-1)}else{var ne=c.differences.length>0||!!c.baseEncodingName,se=f(U.cmap,o,this.isSymbolicFont,ne),oe=se.platformId,ce=se.encodingId,le=se.mappings,he=le.length
if(ne&&(3===oe&&1===ce||1===oe&&0===ce)||-1===oe&&-1===ce&&Ht[c.baseEncodingName]){var ue=[]
for("MacRomanEncoding"!==c.baseEncodingName&&"WinAnsiEncoding"!==c.baseEncodingName||(ue=Ht[c.baseEncodingName]),Q=0;256>Q;Q++){var fe
if(fe=this.differences&&Q in this.differences?this.differences[Q]:Q in ue&&""!==ue[Q]?ue[Q]:Ht.StandardEncoding[Q]){var de,ge=!1
3===oe&&1===ce?(de=Ia[fe],ge=!0):1===oe&&0===ce&&(de=Ht.MacRomanEncoding.indexOf(fe))
var me=!1
for(N=0;he>N;++N)if(le[N].charCode===de){var pe=ge?Q:de
if(R(le[N].glyphId,pe,-1)){$[Q]=le[N].glyphId,me=!0
break}}if(!me&&c.glyphNames){var be=c.glyphNames.indexOf(fe)
be>0&&R(be,-1,-1)?$[Q]=be:$[Q]=0}}}}else if(0===oe&&0===ce)for(N=0;he>N;++N)$[le[N].charCode]=le[N].glyphId
else for(N=0;he>N;++N)Q=255&le[N].charCode,$[Q]=le[N].glyphId}0===$.length&&($[0]=0)
var ve=p($,c)
if(this.toFontChar=ve.toFontChar,U.cmap={tag:"cmap",data:v(ve.charCodeToGlyphId,_)},U["OS/2"]&&y(U["OS/2"])||(U["OS/2"]={tag:"OS/2",data:k(c,ve.charCodeToGlyphId,Y)}),U.post||(U.post={tag:"post",data:w(c)}),!j)try{P=new Na(U["CFF "].data)
var ye=new ua(P,c)
M=ye.parse()
var ke=new Sa(M)
U["CFF "].data=ke.compile()}catch(we){t("Failed to compile font "+c.loadedName)}if(U.name){var xe=A(U.name)
U.name.data=x(a,xe)}else U.name={tag:"name",data:x(this.name)}
var Ce=new aa(q.version)
for(var Se in U)Ce.addTable(Se,U[Se].data)
return Ce.toArray()},convert:function(e,t,a){function r(e,t){var a=null
for(var r in e)t===e[r]&&(a||(a=[]),a.push(0|r))
return a}function i(e,t){for(var a in e)if(t===e[a])return 0|a
return s.charCodeToGlyphId[s.nextAvailableFontCharCode]=t,s.nextAvailableFontCharCode++}a.fixedPitch=!1
var n=t.getGlyphMapping(a),s=p(n,a)
this.toFontChar=s.toFontChar
var o=t.numGlyphs,l=t.seacs
if(jt&&l&&l.length){var u=a.fontMatrix||W,f=t.getCharset(),d=Object.create(null)
for(var g in l){g|=0
var m=l[g],b=Ht.StandardEncoding[m[2]],y=Ht.StandardEncoding[m[3]],C=f.indexOf(b),S=f.indexOf(y)
if(!(0>C||0>S)){var A={x:m[0]*u[0]+m[1]*u[2]+u[4],y:m[0]*u[1]+m[1]*u[3]+u[5]},I=r(n,g)
if(I)for(var B=0,T=I.length;T>B;B++){var O=I[B],R=s.charCodeToGlyphId,L=i(R,C),M=i(R,S)
d[O]={baseFontCharCode:L,accentFontCharCode:M,accentOffset:A}}}}a.seacMap=d}var P=1/(a.fontMatrix||W)[0],E=new aa("OTTO")
return E.addTable("CFF ",t.data),E.addTable("OS/2",k(a,s.charCodeToGlyphId)),E.addTable("cmap",v(s.charCodeToGlyphId,o)),E.addTable("head","\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00_<õ\x00\x00"+h(P)+"\x00\x00\x00\x00\x0B~'\x00\x00\x00\x00\x0B~'\x00\x00"+h(a.descent)+"ÿ"+h(a.ascent)+c(a.italicAngle?2:0)+"\x00\x00\x00\x00\x00\x00\x00"),E.addTable("hhea","\x00\x00\x00"+h(a.ascent)+h(a.descent)+"\x00\x00ÿÿ\x00\x00\x00\x00\x00\x00"+h(a.capHeight)+h(Math.tan(a.italicAngle)*a.xHeight)+"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"+c(o)),E.addTable("hmtx",function(){for(var e=t.charstrings,a=t.cff?t.cff.widths:null,r="\x00\x00\x00\x00",i=1,n=o;n>i;i++){var s=0
if(e){var l=e[i-1]
s="width"in l?l.width:0}else a&&(s=Math.ceil(a[i]||0))
r+=c(s)+c(0)}return r}()),E.addTable("maxp","\x00\x00P\x00"+c(o)),E.addTable("name",x(e)),E.addTable("post",w(a)),E.toArray()},buildToUnicode:function(e){if(e.toUnicode&&0!==e.toUnicode.length)return e.toUnicode
var t,a
if(!e.composite){t=[]
var r=e.defaultEncoding.slice(),i=e.baseEncodingName,s=e.differences
for(a in s)r[a]=s[a]
for(a in r){var o=r[a]
if(""!==o)if(void 0!==Ia[o])t[a]=String.fromCharCode(Ia[o])
else{var c=0
switch(o[0]){case"G":3===o.length&&(c=parseInt(o.substr(1),16))
break
case"g":5===o.length&&(c=parseInt(o.substr(1),16))
break
case"C":case"c":o.length>=3&&(c=+o.substr(1))}if(c){if(i&&c===+a){var l=Ht[i]
if(l&&(o=l[a])){t[a]=String.fromCharCode(Ia[o])
continue}}t[a]=String.fromCharCode(c)}}}return new ea(t)}if(e.composite&&(e.cMap.builtInCMap&&!(e.cMap instanceof Mt)||"Adobe"===e.cidSystemInfo.registry&&("GB1"===e.cidSystemInfo.ordering||"CNS1"===e.cidSystemInfo.ordering||"Japan1"===e.cidSystemInfo.ordering||"Korea1"===e.cidSystemInfo.ordering))){var h=e.cidSystemInfo.registry,u=e.cidSystemInfo.ordering,f=new Ae(h+"-"+u+"-UCS2"),d=Et.create(f,{url:PDFJS.cMapUrl,packed:PDFJS.cMapPacked},null),g=e.cMap
return t=[],g.forEach(function(e,a){n(65535>=a,"Max size of CID is 65,535")
var r=d.lookup(a)
r&&(t[e]=String.fromCharCode((r.charCodeAt(0)<<8)+r.charCodeAt(1)))}),new ea(t)}return new ta(e.firstChar,e.lastChar)},get spaceWidth(){if("_shadowWidth"in this)return this._shadowWidth
for(var e,t=["space","minus","one","i"],a=0,r=t.length;r>a;a++){var i=t[a]
if(i in this.widths){e=this.widths[i]
break}var n=Ia[i],s=0
if(this.composite&&this.cMap.contains(n)&&(s=this.cMap.lookup(n)),!s&&this.toUnicode&&(s=this.toUnicode.charCodeOf(n)),0>=s&&(s=n),e=this.widths[s])break}return e=e||this.defaultWidth,this._shadowWidth=e,e},charToGlyph:function(e,t){var a,r,i,n=e
this.cMap&&this.cMap.contains(e)&&(n=this.cMap.lookup(e)),r=this.widths[n],r=S(r)?r:this.defaultWidth
var s=this.vmetrics&&this.vmetrics[n],o=this.toUnicode.get(e)||e
"number"==typeof o&&(o=String.fromCharCode(o)),a=this.toFontChar[e]||e,this.missingFile&&(a=U(a)),this.isType3Font&&(i=a)
var c=null
if(this.seacMap&&this.seacMap[e]){var l=this.seacMap[e]
a=l.baseFontCharCode,c={fontChar:String.fromCharCode(l.accentFontCharCode),offset:l.accentOffset}}var h=String.fromCharCode(a),u=this.glyphCache[e]
return u&&u.matchesForCache(h,o,c,r,s,i,t)||(u=new $t(h,o,c,r,s,i,t),this.glyphCache[e]=u),u},charsToGlyphs:function(e){var t,a,r,i=this.charsCache
if(i&&(t=i[e]))return t
i||(i=this.charsCache=Object.create(null)),t=[]
var n,s=e,o=0
if(this.cMap)for(var c={};o<e.length;){this.cMap.readCharCode(e,o,c),r=c.charcode
var l=c.length
o+=l
var h=1===l&&32===e.charCodeAt(o-1)
a=this.charToGlyph(r,h),t.push(a)}else for(o=0,n=e.length;n>o;++o)r=e.charCodeAt(o),a=this.charToGlyph(r,32===r),t.push(a)
return i[s]=t}},a}(),na=function(){function e(e){this.error=e,this.loadedName="g_font_error",this.loading=!1}return e.prototype={charsToGlyphs:function(){return[]},exportData:function(){return{error:this.error}}},e}(),sa=function(){function e(){this.width=0,this.lsb=0,this.flexing=!1,this.output=[],this.stack=[]}var a={hstem:[1],vstem:[3],vmoveto:[4],rlineto:[5],hlineto:[6],vlineto:[7],rrcurveto:[8],callsubr:[10],flex:[12,35],drop:[12,18],endchar:[14],rmoveto:[21],hmoveto:[22],vhcurveto:[30],hvcurveto:[31]}
return e.prototype={convert:function(e,r){for(var i,n,s,o=e.length,c=!1,l=0;o>l;l++){var h=e[l]
if(32>h){switch(12===h&&(h=(h<<8)+e[++l]),h){case 1:if(!Nt){this.stack=[]
break}c=this.executeCommand(2,a.hstem)
break
case 3:if(!Nt){this.stack=[]
break}c=this.executeCommand(2,a.vstem)
break
case 4:if(this.flexing){if(this.stack.length<1){c=!0
break}var u=this.stack.pop()
this.stack.push(0,u)
break}c=this.executeCommand(1,a.vmoveto)
break
case 5:c=this.executeCommand(2,a.rlineto)
break
case 6:c=this.executeCommand(1,a.hlineto)
break
case 7:c=this.executeCommand(1,a.vlineto)
break
case 8:c=this.executeCommand(6,a.rrcurveto)
break
case 9:this.stack=[]
break
case 10:if(this.stack.length<1){c=!0
break}s=this.stack.pop(),c=this.convert(r[s],r)
break
case 11:return c
case 13:if(this.stack.length<2){c=!0
break}i=this.stack.pop(),n=this.stack.pop(),this.lsb=n,this.width=i,this.stack.push(i,n),c=this.executeCommand(2,a.hmoveto)
break
case 14:this.output.push(a.endchar[0])
break
case 21:if(this.flexing)break
c=this.executeCommand(2,a.rmoveto)
break
case 22:if(this.flexing){this.stack.push(0)
break}c=this.executeCommand(1,a.hmoveto)
break
case 30:c=this.executeCommand(4,a.vhcurveto)
break
case 31:c=this.executeCommand(4,a.hvcurveto)
break
case 3072:this.stack=[]
break
case 3073:if(!Nt){this.stack=[]
break}c=this.executeCommand(2,a.vstem)
break
case 3074:if(!Nt){this.stack=[]
break}c=this.executeCommand(2,a.hstem)
break
case 3078:jt?(this.seac=this.stack.splice(-4,4),c=this.executeCommand(0,a.endchar)):c=this.executeCommand(4,a.endchar)
break
case 3079:if(this.stack.length<4){c=!0
break}this.stack.pop()
i=this.stack.pop()
var f=this.stack.pop()
n=this.stack.pop(),this.lsb=n,this.width=i,this.stack.push(i,n,f),c=this.executeCommand(3,a.rmoveto)
break
case 3084:if(this.stack.length<2){c=!0
break}var d=this.stack.pop(),g=this.stack.pop()
this.stack.push(g/d)
break
case 3088:if(this.stack.length<2){c=!0
break}s=this.stack.pop()
var m=this.stack.pop()
if(0===s&&3===m){var p=this.stack.splice(this.stack.length-17,17)
this.stack.push(p[2]+p[0],p[3]+p[1],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14]),c=this.executeCommand(13,a.flex,!0),this.flexing=!1,this.stack.push(p[15],p[16])}else 1===s&&0===m&&(this.flexing=!0)
break
case 3089:break
case 3105:this.stack=[]
break
default:t('Unknown type 1 charstring command of "'+h+'"')}if(c)break}else 246>=h?h-=139:h=250>=h?256*(h-247)+e[++l]+108:254>=h?-(256*(h-251))-e[++l]-108:(255&e[++l])<<24|(255&e[++l])<<16|(255&e[++l])<<8|(255&e[++l])<<0,this.stack.push(h)}return c},executeCommand:function(e,t,a){var r=this.stack.length
if(e>r)return!0
for(var i=r-e,n=i;r>n;n++){var s=this.stack[n]
s===(0|s)?this.output.push(28,s>>8&255,255&s):(s=65536*s|0,this.output.push(255,s>>24&255,s>>16&255,s>>8&255,255&s))}return this.output.push.apply(this.output,t),a?this.stack.splice(i,e):this.stack.length=0,!1}},e}(),oa=function(){function e(e){return e>=48&&57>=e||e>=65&&70>=e||e>=97&&102>=e}function t(e,t,a){for(var r=0|t,i=52845,n=22719,s=e.length,o=new Uint8Array(s),c=0;s>c;c++){var l=e[c]
o[c]=l^r>>8,r=(l+r)*i+n&65535}return Array.prototype.slice.call(o,a)}function a(t,a,r){var i,n,s=0|a,o=52845,c=22719,l=t.length,h=l>>>1,u=new Uint8Array(h)
for(i=0,n=0;l>i;i++){var f=t[i]
if(e(f)){i++
for(var d;l>i&&!e(d=t[i]);)i++
if(l>i){var g=parseInt(String.fromCharCode(f,d),16)
u[n++]=g^s>>8,s=(g+s)*o+c&65535}}}return Array.prototype.slice.call(u,r,n)}function r(e){return 47===e||91===e||93===e||123===e||125===e||40===e||41===e}function i(r,i){if(i){var s=r.getBytes(),o=!(e(s[0])&&e(s[1])&&e(s[2])&&e(s[3]))
r=new Na(o?t(s,n,4):a(s,n,4))}this.stream=r,this.nextChar()}var n=55665,s=4330
return i.prototype={readNumberArray:function(){this.getToken()
for(var e=[];;){var t=this.getToken()
if(null===t||"]"===t||"}"===t)break
e.push(parseFloat(t||0))}return e},readNumber:function(){var e=this.getToken()
return parseFloat(e||0)},readInt:function(){var e=this.getToken()
return 0|parseInt(e||0,10)},readBoolean:function(){var e=this.getToken()
return"true"===e?1:0},nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(-1===t)return null
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!Pa.isSpace(t))break
t=this.nextChar()}if(r(t))return this.nextChar(),String.fromCharCode(t)
var a=""
do a+=String.fromCharCode(t),t=this.nextChar()
while(t>=0&&!Pa.isSpace(t)&&!r(t))
return a},extractFontProgram:function(){for(var e,a,r,i,n,o=this.stream,c=[],l=[],h={subrs:[],charstrings:[],properties:{privateData:{lenIV:4}}};null!==(e=this.getToken());)if("/"===e)switch(e=this.getToken()){case"CharStrings":for(this.getToken(),this.getToken(),this.getToken(),this.getToken();;){if(e=this.getToken(),null===e||"end"===e)break
if("/"===e){var u=this.getToken()
a=this.readInt(),this.getToken(),r=o.makeSubStream(o.pos,a),i=h.properties.privateData.lenIV,n=t(r.getBytes(),s,i),o.skip(a),this.nextChar(),e=this.getToken(),"noaccess"===e&&this.getToken(),l.push({glyph:u,encoded:n})}}break
case"Subrs":this.readInt()
for(this.getToken();"dup"===(e=this.getToken());){var f=this.readInt()
a=this.readInt(),this.getToken(),r=o.makeSubStream(o.pos,a),i=h.properties.privateData.lenIV,n=t(r.getBytes(),s,i),o.skip(a),this.nextChar(),e=this.getToken(),"noaccess"===e&&this.getToken(),c[f]=n}break
case"BlueValues":case"OtherBlues":case"FamilyBlues":case"FamilyOtherBlues":var d=this.readNumberArray()
d.length>0&&d.length%2===0&&Nt&&(h.properties.privateData[e]=d)
break
case"StemSnapH":case"StemSnapV":h.properties.privateData[e]=this.readNumberArray()
break
case"StdHW":case"StdVW":h.properties.privateData[e]=this.readNumberArray()[0]
break
case"BlueShift":case"lenIV":case"BlueFuzz":case"BlueScale":case"LanguageGroup":case"ExpansionFactor":h.properties.privateData[e]=this.readNumber()
break
case"ForceBold":h.properties.privateData[e]=this.readBoolean()}for(var g=0;g<l.length;g++){u=l[g].glyph,n=l[g].encoded
var m=new sa,p=m.convert(n,c),b=m.output
p&&(b=[14]),h.charstrings.push({glyphName:u,charstring:b,width:m.width,lsb:m.lsb,seac:m.seac})}return h},extractFontHeader:function(e){for(var t;null!==(t=this.getToken());)if("/"===t)switch(t=this.getToken()){case"FontMatrix":var a=this.readNumberArray()
e.fontMatrix=a
break
case"Encoding":var r,i=this.getToken()
if(/^\d+$/.test(i)){r=[]
var n=0|parseInt(i,10)
this.getToken()
for(var s=0;n>s;s++){for(t=this.getToken();"dup"!==t&&"def"!==t;)if(t=this.getToken(),null===t)return
if("def"===t)break
var o=this.readInt()
this.getToken()
var c=this.getToken()
r[o]=c,this.getToken()}}else r=Ht[i]
e.builtInEncoding=r
break
case"FontBBox":var l=this.readNumberArray()
e.ascent=l[3],e.descent=l[1],e.ascentScaled=!0}}},i}(),ca=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],la=function(e,t,a){var r=6,i=a.length1,n=a.length2,s=t.peekBytes(r),o=128===s[0]&&1===s[1]
o&&(t.skip(r),i=s[5]<<24|s[4]<<16|s[3]<<8|s[2])
var c=new Na(t.getBytes(i)),l=new oa(c)
l.extractFontHeader(a),o&&(s=t.getBytes(r),n=s[5]<<24|s[4]<<16|s[3]<<8|s[2])
var h=new Na(t.getBytes(n)),u=new oa(h,!0),f=u.extractFontProgram()
for(var d in f.properties)a[d]=f.properties[d]
var g=f.charstrings,m=this.getType2Charstrings(g),p=this.getType2Subrs(f.subrs)
this.charstrings=g,this.data=this.wrap(e,m,this.charstrings,p,a),this.seacs=this.getSeacs(f.charstrings)}
la.prototype={get numGlyphs(){return this.charstrings.length+1},getCharset:function(){for(var e=[".notdef"],t=this.charstrings,a=0;a<t.length;a++)e.push(t[a].glyphName)
return e},getGlyphMapping:function(e){var t,a=this.charstrings,r=[".notdef"]
for(t=0;t<a.length;t++)r.push(a[t].glyphName)
var i=e.builtInEncoding
if(i){var n={}
for(var s in i)t=r.indexOf(i[s]),t>=0&&(n[s]=t)}return G(e,n,r)},getSeacs:function(e){var t,a,r=[]
for(t=0,a=e.length;a>t;t++){var i=e[t]
i.seac&&(r[t+1]=i.seac)}return r},getType2Charstrings:function(e){for(var t=[],a=0,r=e.length;r>a;a++)t.push(e[a].charstring)
return t},getType2Subrs:function(e){var t=0,a=e.length
t=1133>a?107:33769>a?1131:32768
var r,i=[]
for(r=0;t>r;r++)i.push([11])
for(r=0;a>r;r++)i.push(e[r])
return i},wrap:function(e,t,a,r,i){var n=new fa
n.header=new da(1,0,4,4),n.names=[e]
var s=new ba
s.setByName("version",391),s.setByName("Notice",392),s.setByName("FullName",393),s.setByName("FamilyName",394),s.setByName("Weight",395),s.setByName("Encoding",null),s.setByName("FontMatrix",i.fontMatrix),s.setByName("FontBBox",i.bbox),s.setByName("charset",null),s.setByName("CharStrings",null),s.setByName("Private",null),n.topDict=s
var o=new ga
o.add("Version 0.11"),o.add("See original notice"),o.add(e),o.add(e),o.add("Medium"),n.strings=o,n.globalSubrIndex=new ma
var c,l,h=t.length,u=[0]
for(c=0;h>c;c++){var f=ca.indexOf(a[c].glyphName);-1===f&&(f=0),u.push(f>>8&255,255&f)}n.charset=new ka(!1,0,[],u)
var d=new ma
for(d.add([139,14]),c=0;h>c;c++)d.add(t[c])
n.charStrings=d
var g=new va
g.setByName("Subrs",null)
var m=["BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StemSnapH","StemSnapV","BlueShift","BlueFuzz","BlueScale","LanguageGroup","ExpansionFactor","ForceBold","StdHW","StdVW"]
for(c=0,l=m.length;l>c;c++){var p=m[c]
if(i.privateData.hasOwnProperty(p)){var b=i.privateData[p]
if(O(b))for(var v=b.length-1;v>0;v--)b[v]-=b[v-1]
g.setByName(p,b)}}n.topDict.privateDict=g
var y=new ma
for(c=0,l=r.length;l>c;c++)y.add(r[c])
g.subrsIndex=y
var k=new Sa(n)
return k.compile()}}
var ha=function(){function e(e,a){this.properties=a
var r=new ua(e,a)
this.cff=r.parse()
var i=new Sa(this.cff)
this.seacs=this.cff.seacs
try{this.data=i.compile()}catch(n){t("Failed to compile font "+a.loadedName),this.data=e}}return e.prototype={get numGlyphs(){return this.cff.charStrings.count},getCharset:function(){return this.cff.charset.charset},getGlyphMapping:function(){var e,t,a=this.cff,r=this.properties,i=a.charset.charset
if(r.composite){if(e=Object.create(null),a.isCIDFont)for(t=0;t<i.length;t++){var n=i[t],s=r.cMap.charCodeOf(n)
e[s]=t}else for(t=0;t<a.charStrings.count;t++)e[t]=t
return e}var o=a.encoding?a.encoding.encoding:null
return e=G(r,o,i)}},e}(),ua=function(){function a(e,t){this.bytes=e.getBytes(),this.properties=t}var i=[null,{id:"hstem",min:2,stackClearing:!0,stem:!0},null,{id:"vstem",min:2,stackClearing:!0,stem:!0},{id:"vmoveto",min:1,stackClearing:!0},{id:"rlineto",min:2,resetStack:!0},{id:"hlineto",min:1,resetStack:!0},{id:"vlineto",min:1,resetStack:!0},{id:"rrcurveto",min:6,resetStack:!0},null,{id:"callsubr",min:1,undefStack:!0},{id:"return",min:0,undefStack:!0},null,null,{id:"endchar",min:0,stackClearing:!0},null,null,null,{id:"hstemhm",min:2,stackClearing:!0,stem:!0},{id:"hintmask",min:0,stackClearing:!0},{id:"cntrmask",min:0,stackClearing:!0},{id:"rmoveto",min:2,stackClearing:!0},{id:"hmoveto",min:1,stackClearing:!0},{id:"vstemhm",min:2,stackClearing:!0,stem:!0},{id:"rcurveline",min:8,resetStack:!0},{id:"rlinecurve",min:8,resetStack:!0},{id:"vvcurveto",min:4,resetStack:!0},{id:"hhcurveto",min:4,resetStack:!0},null,{id:"callgsubr",min:1,undefStack:!0},{id:"vhcurveto",min:4,resetStack:!0},{id:"hvcurveto",min:4,resetStack:!0}],n=[null,null,null,{id:"and",min:2,stackDelta:-1},{id:"or",min:2,stackDelta:-1},{id:"not",min:1,stackDelta:0},null,null,null,{id:"abs",min:1,stackDelta:0},{id:"add",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]+e[t-1]}},{id:"sub",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]-e[t-1]}},{id:"div",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]/e[t-1]}},null,{id:"neg",min:1,stackDelta:0,stackFn:function(e,t){e[t-1]=-e[t-1]}},{id:"eq",min:2,stackDelta:-1},null,null,{id:"drop",min:1,stackDelta:-1},null,{id:"put",min:2,stackDelta:-2},{id:"get",min:1,stackDelta:0},{id:"ifelse",min:4,stackDelta:-3},{id:"random",min:0,stackDelta:1},{id:"mul",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]*e[t-1]}},null,{id:"sqrt",min:1,stackDelta:0},{id:"dup",min:1,stackDelta:1},{id:"exch",min:2,stackDelta:0},{id:"index",min:2,stackDelta:0},{id:"roll",min:3,stackDelta:-2},null,null,null,{id:"hflex",min:7,resetStack:!0},{id:"flex",min:13,resetStack:!0},{id:"hflex1",min:9,resetStack:!0},{id:"flex1",min:11,resetStack:!0}]
return a.prototype={parse:function(){var e=this.properties,t=new fa
this.cff=t
var a=this.parseHeader(),r=this.parseIndex(a.endPos),i=this.parseIndex(r.endPos),n=this.parseIndex(i.endPos),s=this.parseIndex(n.endPos),o=this.parseDict(i.obj.get(0)),c=this.createDict(ba,o,t.strings)
t.header=a.obj,t.names=this.parseNameIndex(r.obj),t.strings=this.parseStringIndex(n.obj),t.topDict=c,t.globalSubrIndex=s.obj,this.parsePrivateDict(t.topDict),t.isCIDFont=c.hasName("ROS")
var l=c.getByName("CharStrings"),h=this.parseCharStrings(l)
t.charStrings=h.charStrings,t.seacs=h.seacs,t.widths=h.widths
var u=c.getByName("FontMatrix")
u&&(e.fontMatrix=u)
var f=c.getByName("FontBBox")
f&&(e.ascent=f[3],e.descent=f[1],e.ascentScaled=!0)
var d,g
if(t.isCIDFont){for(var m=this.parseIndex(c.getByName("FDArray")).obj,p=0,b=m.count;b>p;++p){var v=m.get(p),y=this.createDict(ba,this.parseDict(v),t.strings)
this.parsePrivateDict(y),t.fdArray.push(y)}g=null,d=this.parseCharsets(c.getByName("charset"),t.charStrings.count,t.strings,!0),t.fdSelect=this.parseFDSelect(c.getByName("FDSelect"),t.charStrings.count)}else d=this.parseCharsets(c.getByName("charset"),t.charStrings.count,t.strings,!1),g=this.parseEncoding(c.getByName("Encoding"),e,t.strings,d.charset)
return t.charset=d,t.encoding=g,t},parseHeader:function(){for(var t=this.bytes,a=t.length,i=0;a>i&&1!==t[i];)++i
i>=a?r("Invalid CFF header"):0!==i&&(e("cff data is shifted"),t=t.subarray(i),this.bytes=t)
var n=t[0],s=t[1],o=t[2],c=t[3],l=new da(n,s,o,c)
return{obj:l,endPos:o}},parseDict:function(e){function t(){var t=e[i++]
return 30===t?a(i):28===t?(t=e[i++],t=(t<<24|e[i++]<<16)>>16):29===t?(t=e[i++],t=t<<8|e[i++],t=t<<8|e[i++],t=t<<8|e[i++]):t>=32&&246>=t?t-139:t>=247&&250>=t?256*(t-247)+e[i++]+108:t>=251&&254>=t?-(256*(t-251))-e[i++]-108:(r("255 is not a valid DICT command"),-1)}function a(){for(var t="",a=15,r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],n=e.length;n>i;){var s=e[i++],o=s>>4,c=15&s
if(o===a)break
if(t+=r[o],c===a)break
t+=r[c]}return parseFloat(t)}var i=0,n=[],s=[]
i=0
for(var o=e.length;o>i;){var c=e[i]
21>=c?(12===c&&(c=c<<8|e[++i]),s.push([c,n]),n=[],++i):n.push(t())}return s},parseIndex:function(e){var t,a,r=new ma,i=this.bytes,n=i[e++]<<8|i[e++],s=[],o=e
if(0!==n){var c=i[e++],l=e+(n+1)*c-1
for(t=0,a=n+1;a>t;++t){for(var h=0,u=0;c>u;++u)h<<=8,h+=i[e++]
s.push(l+h)}o=s[n]}for(t=0,a=s.length-1;a>t;++t){var f=s[t],d=s[t+1]
r.add(i.subarray(f,d))}return{obj:r,endPos:o}},parseNameIndex:function(e){for(var t=[],a=0,r=e.count;r>a;++a){for(var i=e.get(a),n=Math.min(i.length,127),s=[],o=0;n>o;++o){var c=i[o];(0!==o||0!==c)&&(33>c||c>126||91===c||93===c||40===c||41===c||123===c||125===c||60===c||62===c||47===c||37===c||35===c)?s[o]=95:s[o]=c}t.push(l(s))}return t},parseStringIndex:function(e){for(var t=new ga,a=0,r=e.count;r>a;++a){var i=e.get(a)
t.add(l(i))}return t},createDict:function(e,t,a){for(var r=new e(a),i=0,n=t.length;n>i;++i){var s=t[i],o=s[0],c=s[1]
r.setByKey(o,c)}return r},parseCharStrings:function(e){for(var a=this.parseIndex(e).obj,r=[],s=[],o=a.count,c=0;o>c;c++){for(var l=a.get(c),h=0,u=[],f=!0,d=0,g=!0,m=l,p=m.length,b=!0,v=0;p>v;){var y=m[v++],k=null
if(12===y){var w=m[v++]
0===w?(m[v-2]=139,m[v-1]=22,h=0):k=n[w]}else 28===y?(u[h]=(m[v]<<24|m[v+1]<<16)>>16,v+=2,h++):14===y?(h>=4&&(h-=4,jt&&(r[c]=u.slice(h,h+4),g=!1)),k=i[y]):y>=32&&246>=y?(u[h]=y-139,h++):y>=247&&254>=y?(u[h]=251>y?(y-247<<8)+m[v]+108:-(y-251<<8)-m[v]-108,v++,h++):255===y?(u[h]=(m[v]<<24|m[v+1]<<16|m[v+2]<<8|m[v+3])/65536,v+=4,h++):19===y||20===y?(d+=h>>1,v+=d+7>>3,h%=2,k=i[y]):k=i[y]
if(k){if(k.stem&&(d+=h>>1),"min"in k&&!f&&h<k.min){t("Not enough parameters for "+k.id+"; actual: "+h+", expected: "+k.min),g=!1
break}b&&k.stackClearing&&(b=!1,h-=k.min,h>=2&&k.stem?h%=2:h>1&&t("Found too many parameters for stack-clearing command"),h>0&&u[h-1]>=0&&(s[c]=u[h-1])),"stackDelta"in k?("stackFn"in k&&k.stackFn(u,h),h+=k.stackDelta):k.stackClearing?h=0:k.resetStack?(h=0,f=!1):k.undefStack&&(h=0,f=!0,b=!1)}}g||a.set(c,new Uint8Array([14]))}return{charStrings:a,seacs:r,widths:s}},emptyPrivateDictionary:function(e){var t=this.createDict(va,[],e.strings)
e.setByKey(18,[0,0]),e.privateDict=t},parsePrivateDict:function(e){if(!e.hasName("Private"))return void this.emptyPrivateDictionary(e)
var t=e.getByName("Private")
if(!O(t)||2!==t.length)return void e.removeByName("Private")
var a=t[0],r=t[1]
if(0===a||r>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var i=r+a,n=this.bytes.subarray(r,i),s=this.parseDict(n),o=this.createDict(va,s,e.strings)
if(e.privateDict=o,o.getByName("Subrs")){var c=o.getByName("Subrs"),l=r+c
if(0===c||l>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var h=this.parseIndex(l)
o.subrsIndex=h.obj}},parseCharsets:function(e,t,a,i){if(0===e)return new ka(!0,ya.ISO_ADOBE,qe)
if(1===e)return new ka(!0,ya.EXPERT,Fe)
if(2===e)return new ka(!0,ya.EXPERT_SUBSET,Ue)
var n,s,o,c=this.bytes,l=e,h=c[e++],u=[".notdef"]
switch(t-=1,h){case 0:for(o=0;t>o;o++)n=c[e++]<<8|c[e++],u.push(i?n:a.get(n))
break
case 1:for(;u.length<=t;)for(n=c[e++]<<8|c[e++],s=c[e++],o=0;s>=o;o++)u.push(i?n++:a.get(n++))
break
case 2:for(;u.length<=t;)for(n=c[e++]<<8|c[e++],s=c[e++]<<8|c[e++],o=0;s>=o;o++)u.push(i?n++:a.get(n++))
break
default:r("Unknown charset format")}var f=e,d=c.subarray(l,f)
return new ka(!1,h,u,d)},parseEncoding:function(e,t,a,i){function n(){var t=h[e++]
for(o=0;t>o;o++){var r=h[e++],n=(h[e++]<<8)+(255&h[e++])
l[r]=i.indexOf(a.get(n))}}var s,o,c,l={},h=this.bytes,u=!1,f=!1,d=null
if(0===e||1===e){u=!0,s=e
var g=e?Ht.ExpertEncoding:Ht.StandardEncoding
for(o=0,c=i.length;c>o;o++){var m=g.indexOf(i[o]);-1!==m&&(l[m]=o)}}else{var p=e
switch(s=h[e++],127&s){case 0:var b=h[e++]
for(o=1;b>=o;o++)l[h[e++]]=o
break
case 1:var v=h[e++],y=1
for(o=0;v>o;o++)for(var k=h[e++],w=h[e++],x=k;k+w>=x;x++)l[x]=y++
break
default:r("Unknow encoding format: "+s+" in CFF")}var C=e
128&s&&(h[p]&=127,n(),f=!0),d=h.subarray(p,C)}return s=127&s,new wa(u,s,l,d)},parseFDSelect:function(e,t){var a,i=e,n=this.bytes,s=n[e++],o=[]
switch(s){case 0:for(a=0;t>a;++a){var c=n[e++]
o.push(c)}break
case 3:var l=n[e++]<<8|n[e++]
for(a=0;l>a;++a)for(var h=n[e++]<<8|n[e++],u=n[e++],f=n[e]<<8|n[e+1],d=h;f>d;++d)o.push(u)
e+=2
break
default:r("Unknown fdselect format "+s)}var g=e
return new xa(o,n.subarray(i,g))}},a}(),fa=function(){function e(){this.header=null,this.names=[],this.topDict=null,this.strings=new ga,this.globalSubrIndex=null,this.encoding=null,this.charset=null,this.charStrings=null,this.fdArray=[],this.fdSelect=null,this.isCIDFont=!1}return e}(),da=function(){function e(e,t,a,r){this.major=e,this.minor=t,this.hdrSize=a,this.offSize=r}return e}(),ga=function(){function e(){this.strings=[]}return e.prototype={get:function(e){return e>=0&&390>=e?ca[e]:e-391<=this.strings.length?this.strings[e-391]:ca[0]},add:function(e){this.strings.push(e)},get count(){return this.strings.length}},e}(),ma=function(){function e(){this.objects=[],this.length=0}return e.prototype={add:function(e){this.length+=e.length,this.objects.push(e)},set:function(e,t){this.length+=t.length-this.objects[e].length,this.objects[e]=t},get:function(e){return this.objects[e]},get count(){return this.objects.length}},e}(),pa=function(){function e(e,t){this.keyToNameMap=e.keyToNameMap,this.nameToKeyMap=e.nameToKeyMap,this.defaults=e.defaults,this.types=e.types,this.opcodes=e.opcodes,this.order=e.order,this.strings=t,this.values={}}return e.prototype={setByKey:function(e,t){if(!(e in this.keyToNameMap))return!1
if(0===t.length)return!0
var a=this.types[e]
return"num"!==a&&"sid"!==a&&"offset"!==a||(t=t[0]),this.values[e]=t,!0},setByName:function(e,t){e in this.nameToKeyMap||r('Invalid dictionary name "'+e+'"'),this.values[this.nameToKeyMap[e]]=t},hasName:function(e){return this.nameToKeyMap[e]in this.values},getByName:function(e){e in this.nameToKeyMap||r('Invalid dictionary name "'+e+'"')
var t=this.nameToKeyMap[e]
return t in this.values?this.values[t]:this.defaults[t]},removeByName:function(e){delete this.values[this.nameToKeyMap[e]]}},e.createTables=function(e){for(var t={keyToNameMap:{},nameToKeyMap:{},defaults:{},types:{},opcodes:{},order:[]},a=0,r=e.length;r>a;++a){var i=e[a],n=O(i[0])?(i[0][0]<<8)+i[0][1]:i[0]
t.keyToNameMap[n]=i[1],t.nameToKeyMap[i[1]]=n,t.types[n]=i[2],t.defaults[n]=i[3],t.opcodes[n]=O(i[0])?i[0]:[i[0]],t.order.push(n)}return t},e}(),ba=function(){function e(e){null===a&&(a=pa.createTables(t)),pa.call(this,a,e),this.privateDict=null}var t=[[[12,30],"ROS",["sid","sid","num"],null],[[12,20],"SyntheticBase","num",null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","num",0],[[12,2],"ItalicAngle","num",0],[[12,3],"UnderlinePosition","num",-100],[[12,4],"UnderlineThickness","num",50],[[12,5],"PaintType","num",0],[[12,6],"CharstringType","num",2],[[12,7],"FontMatrix",["num","num","num","num","num","num"],[.001,0,0,.001,0,0]],[13,"UniqueID","num",null],[5,"FontBBox",["num","num","num","num"],[0,0,0,0]],[[12,8],"StrokeWidth","num",0],[14,"XUID","array",null],[15,"charset","offset",0],[16,"Encoding","offset",0],[17,"CharStrings","offset",0],[18,"Private",["offset","offset"],null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","num",0],[[12,32],"CIDFontRevision","num",0],[[12,33],"CIDFontType","num",0],[[12,34],"CIDCount","num",8720],[[12,35],"UIDBase","num",null],[[12,37],"FDSelect","offset",null],[[12,36],"FDArray","offset",null],[[12,38],"FontName","sid",null]],a=null
return e.prototype=Object.create(pa.prototype),e}(),va=function(){function e(e){null===a&&(a=pa.createTables(t)),pa.call(this,a,e),this.subrsIndex=null}var t=[[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","num",.039625],[[12,10],"BlueShift","num",7],[[12,11],"BlueFuzz","num",1],[10,"StdHW","num",null],[11,"StdVW","num",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","num",0],[[12,17],"LanguageGroup","num",0],[[12,18],"ExpansionFactor","num",.06],[[12,19],"initialRandomSeed","num",0],[20,"defaultWidthX","num",0],[21,"nominalWidthX","num",0],[19,"Subrs","offset",null]],a=null
return e.prototype=Object.create(pa.prototype),e}(),ya={ISO_ADOBE:0,EXPERT:1,EXPERT_SUBSET:2},ka=function(){function e(e,t,a,r){this.predefined=e,this.format=t,this.charset=a,this.raw=r}return e}(),wa=function(){function e(e,t,a,r){this.predefined=e,this.format=t,this.encoding=a,this.raw=r}return e}(),xa=function(){function e(e,t){this.fdSelect=e,this.raw=t}return e}(),Ca=function(){function e(){this.offsets={}}return e.prototype={isTracking:function(e){return e in this.offsets},track:function(e,t){e in this.offsets&&r("Already tracking location of "+e),this.offsets[e]=t},offset:function(e){for(var t in this.offsets)this.offsets[t]+=e},setEntryLocation:function(e,t,a){e in this.offsets||r("Not tracking location of "+e)
for(var i=a.data,n=this.offsets[e],s=5,o=0,c=t.length;c>o;++o){var l=o*s+n,h=l+1,u=l+2,f=l+3,d=l+4
29===i[l]&&0===i[h]&&0===i[u]&&0===i[f]&&0===i[d]||r("writing to an offset that is not empty")
var g=t[o]
i[l]=29,i[h]=g>>24&255,i[u]=g>>16&255,i[f]=g>>8&255,i[d]=255&g}}},e}(),Sa=function(){function e(e){this.cff=e}return e.prototype={compile:function(){var e=this.cff,t={data:[],length:0,add:function(e){this.data=this.data.concat(e),this.length=this.data.length}},a=this.compileHeader(e.header)
t.add(a)
var r=this.compileNameIndex(e.names)
if(t.add(r),e.isCIDFont&&e.topDict.hasName("FontMatrix")){var i=e.topDict.getByName("FontMatrix")
e.topDict.removeByName("FontMatrix")
for(var n=0,s=e.fdArray.length;s>n;n++){var o=e.fdArray[n],c=i.slice(0)
o.hasName("FontMatrix")&&(c=me.transform(c,o.getByName("FontMatrix"))),o.setByName("FontMatrix",c)}}var l=this.compileTopDicts([e.topDict],t.length,e.isCIDFont)
t.add(l.output)
var h=l.trackers[0],u=this.compileStringIndex(e.strings.strings)
t.add(u)
var f=this.compileIndex(e.globalSubrIndex)
if(t.add(f),e.encoding&&e.topDict.hasName("Encoding"))if(e.encoding.predefined)h.setEntryLocation("Encoding",[e.encoding.format],t)
else{var d=this.compileEncoding(e.encoding)
h.setEntryLocation("Encoding",[t.length],t),t.add(d)}if(e.charset&&e.topDict.hasName("charset"))if(e.charset.predefined)h.setEntryLocation("charset",[e.charset.format],t)
else{var g=this.compileCharset(e.charset)
h.setEntryLocation("charset",[t.length],t),t.add(g)}var m=this.compileCharStrings(e.charStrings)
if(h.setEntryLocation("CharStrings",[t.length],t),t.add(m),e.isCIDFont){h.setEntryLocation("FDSelect",[t.length],t)
var p=this.compileFDSelect(e.fdSelect.raw)
t.add(p),l=this.compileTopDicts(e.fdArray,t.length,!0),h.setEntryLocation("FDArray",[t.length],t),t.add(l.output)
var b=l.trackers
this.compilePrivateDicts(e.fdArray,b,t)}return this.compilePrivateDicts([e.topDict],[h],t),t.add([0]),t.data},encodeNumber:function(e){return parseFloat(e)!==parseInt(e,10)||isNaN(e)?this.encodeFloat(e):this.encodeInteger(e)},encodeFloat:function(e){var t=e.toString(),a=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t)
if(a){var r=parseFloat("1e"+((a[2]?+a[2]:0)+a[1].length))
t=(Math.round(e*r)/r).toString()}var i,n,s=""
for(i=0,n=t.length;n>i;++i){var o=t[i]
s+="e"===o?"-"===t[++i]?"c":"b":"."===o?"a":"-"===o?"e":o}s+=1&s.length?"f":"ff"
var c=[30]
for(i=0,n=s.length;n>i;i+=2)c.push(parseInt(s.substr(i,2),16))
return c},encodeInteger:function(e){var t
return e>=-107&&107>=e?t=[e+139]:e>=108&&1131>=e?(e=[e-108],t=[(e>>8)+247,255&e]):e>=-1131&&-108>=e?(e=-e-108,t=[(e>>8)+251,255&e]):t=e>=-32768&&32767>=e?[28,e>>8&255,255&e]:[29,e>>24&255,e>>16&255,e>>8&255,255&e],t},compileHeader:function(e){return[e.major,e.minor,e.hdrSize,e.offSize]},compileNameIndex:function(e){for(var t=new ma,a=0,r=e.length;r>a;++a)t.add(h(e[a]))
return this.compileIndex(t)},compileTopDicts:function(e,t,a){for(var r=[],i=new ma,n=0,s=e.length;s>n;++n){var o=e[n]
a&&(o.removeByName("CIDFontVersion"),o.removeByName("CIDFontRevision"),o.removeByName("CIDFontType"),o.removeByName("CIDCount"),o.removeByName("UIDBase"))
var c=new Ca,l=this.compileDict(o,c)
r.push(c),i.add(l),c.offset(t)}return i=this.compileIndex(i,r),{trackers:r,output:i}},compilePrivateDicts:function(e,t,a){for(var r=0,i=e.length;i>r;++r){var s=e[r]
n(s.privateDict&&s.hasName("Private"),"There must be an private dictionary.")
var o=s.privateDict,c=new Ca,l=this.compileDict(o,c),h=a.length
if(c.offset(h),l.length||(h=0),t[r].setEntryLocation("Private",[l.length,h],a),a.add(l),o.subrsIndex&&o.hasName("Subrs")){var u=this.compileIndex(o.subrsIndex)
c.setEntryLocation("Subrs",[l.length],a),a.add(u)}}},compileDict:function(e,t){for(var a=[],i=e.order,n=0;n<i.length;++n){var s=i[n]
if(s in e.values){var o=e.values[s],c=e.types[s]
if(O(c)||(c=[c]),O(o)||(o=[o]),0!==o.length){for(var l=0,h=c.length;h>l;++l){var u=c[l],f=o[l]
switch(u){case"num":case"sid":a=a.concat(this.encodeNumber(f))
break
case"offset":var d=e.keyToNameMap[s]
t.isTracking(d)||t.track(d,a.length),a=a.concat([29,0,0,0,0])
break
case"array":case"delta":a=a.concat(this.encodeNumber(f))
for(var g=1,m=o.length;m>g;++g)a=a.concat(this.encodeNumber(o[g]))
break
default:r("Unknown data type of "+u)}}a=a.concat(e.opcodes[s])}}}return a},compileStringIndex:function(e){for(var t=new ma,a=0,r=e.length;r>a;++a)t.add(h(e[a]))
return this.compileIndex(t)},compileGlobalSubrIndex:function(){var e=this.cff.globalSubrIndex
this.out.writeByteArray(this.compileIndex(e))},compileCharStrings:function(e){return this.compileIndex(e)},compileCharset:function(e){return this.compileTypedArray(e.raw)},compileEncoding:function(e){return this.compileTypedArray(e.raw)},compileFDSelect:function(e){return this.compileTypedArray(e)},compileTypedArray:function(e){for(var t=[],a=0,r=e.length;r>a;++a)t[a]=e[a]
return t},compileIndex:function(e,t){t=t||[]
var a=e.objects,r=a.length
if(0===r)return[0,0,0]
var i,n=[r>>8&255,255&r],s=1
for(i=0;r>i;++i)s+=a[i].length
var o
o=256>s?1:65536>s?2:16777216>s?3:4,n.push(o)
var c=1
for(i=0;r+1>i;i++)1===o?n.push(255&c):2===o?n.push(c>>8&255,255&c):3===o?n.push(c>>16&255,c>>8&255,255&c):n.push(c>>>24&255,c>>16&255,c>>8&255,255&c),a[i]&&(c+=a[i].length)
for(i=0;r>i;i++){t[i]&&t[i].offset(n.length)
for(var l=0,h=a[i].length;h>l;l++)n.push(a[i][l])}return n}},e}()
!function(){/Windows/.test(navigator.userAgent)&&(jt=!0)}(),function(){/Windows.*Chrome/.test(navigator.userAgent)&&(Ft=!0)}()
var Aa=function(){function e(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function t(e,t){return e[t]<<8|e[t+1]}function a(a,i,n){var s,o,c,l,h=1===t(a,i+2)?e(a,i+8):e(a,i+16),u=t(a,i+h)
if(4===u){s=t(a,i+h+2)
var f=t(a,i+h+6)>>1
for(c=i+h+14,o=[],l=0;f>l;l++,c+=2)o[l]={end:t(a,c)}
for(c+=2,l=0;f>l;l++,c+=2)o[l].start=t(a,c)
for(l=0;f>l;l++,c+=2)o[l].idDelta=t(a,c)
for(l=0;f>l;l++,c+=2){var d=t(a,c)
if(0!==d){o[l].ids=[]
for(var g=0,m=o[l].end-o[l].start+1;m>g;g++)o[l].ids[g]=t(a,c+d),d+=2}}return o}if(12===u){s=e(a,i+h+4)
var p=e(a,i+h+12)
for(c=i+h+16,o=[],l=0;p>l;l++)o.push({start:e(a,c),end:e(a,c+4),idDelta:e(a,c+8)-e(a,c)}),c+=12
return o}r("not supported cmap: "+u)}function i(e,t,a){var r={},i=new ua(new Na(e,t,a-t),r),n=i.parse()
return{glyphs:n.charStrings.objects,subrs:n.topDict.privateDict&&n.topDict.privateDict.subrsIndex&&n.topDict.privateDict.subrsIndex.objects,gsubrs:n.globalSubrIndex&&n.globalSubrIndex.objects}}function n(e,t,a){var r,i
a?(r=4,i=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}):(r=2,i=function(e,t){return e[t]<<9|e[t+1]<<1})
for(var n=[],s=i(t,0),o=r;o<t.length;o+=r){var c=i(t,o)
n.push(e.subarray(s,c)),s=c}return n}function s(e,t){for(var a=t.charCodeAt(0),r=0,i=e.length-1;i>r;){var n=r+i+1>>1
a<e[n].start?i=n-1:r=n}return e[r].start<=a&&a<=e[r].end?e[r].idDelta+(e[r].ids?e[r].ids[a-e[r].start]:a)&65535:0}function o(e,t,a){function r(e,a){t.push({cmd:"moveTo",args:[e,a]})}function i(e,a){t.push({cmd:"lineTo",args:[e,a]})}function n(e,a,r,i){t.push({cmd:"quadraticCurveTo",args:[e,a,r,i]})}var s,c=0,l=(e[c]<<24|e[c+1]<<16)>>16,h=0,u=0
if(c+=10,0>l){do{s=e[c]<<8|e[c+1]
var f=e[c+2]<<8|e[c+3]
c+=4
var d,g
1&s?(d=(e[c]<<24|e[c+1]<<16)>>16,g=(e[c+2]<<24|e[c+3]<<16)>>16,c+=4):(d=e[c++],g=e[c++]),2&s?(h=d,u=g):(h=0,u=0)
var m=1,p=1,b=0,v=0
8&s?(m=p=(e[c]<<24|e[c+1]<<16)/1073741824,c+=2):64&s?(m=(e[c]<<24|e[c+1]<<16)/1073741824,p=(e[c+2]<<24|e[c+3]<<16)/1073741824,c+=4):128&s&&(m=(e[c]<<24|e[c+1]<<16)/1073741824,b=(e[c+2]<<24|e[c+3]<<16)/1073741824,v=(e[c+4]<<24|e[c+5]<<16)/1073741824,p=(e[c+6]<<24|e[c+7]<<16)/1073741824,c+=8)
var y=a.glyphs[f]
y&&(t.push({cmd:"save"}),t.push({cmd:"transform",args:[m,b,v,p,h,u]}),o(y,t,a),t.push({cmd:"restore"}))}while(32&s)}else{var k,w,x=[]
for(k=0;l>k;k++)x.push(e[c]<<8|e[c+1]),c+=2
var C=e[c]<<8|e[c+1]
c+=2+C
for(var S=x[x.length-1]+1,A=[];A.length<S;){s=e[c++]
var I=1
for(8&s&&(I+=e[c++]);I-- >0;)A.push({flags:s})}for(k=0;S>k;k++){switch(18&A[k].flags){case 0:h+=(e[c]<<24|e[c+1]<<16)>>16,c+=2
break
case 2:h-=e[c++]
break
case 18:h+=e[c++]}A[k].x=h}for(k=0;S>k;k++){switch(36&A[k].flags){case 0:u+=(e[c]<<24|e[c+1]<<16)>>16,c+=2
break
case 4:u-=e[c++]
break
case 36:u+=e[c++]}A[k].y=u}var B=0
for(c=0;l>c;c++){var T=x[c],O=A.slice(B,T+1)
if(1&O[0].flags)O.push(O[0])
else if(1&O[O.length-1].flags)O.unshift(O[O.length-1])
else{var R={flags:1,x:(O[0].x+O[O.length-1].x)/2,y:(O[0].y+O[O.length-1].y)/2}
O.unshift(R),O.push(R)}for(r(O[0].x,O[0].y),k=1,w=O.length;w>k;k++)1&O[k].flags?i(O[k].x,O[k].y):1&O[k+1].flags?(n(O[k].x,O[k].y,O[k+1].x,O[k+1].y),k++):n(O[k].x,O[k].y,(O[k].x+O[k+1].x)/2,(O[k].y+O[k+1].y)/2)
B=T+1}}}function c(e,t,a){function i(e,a){t.push({cmd:"moveTo",args:[e,a]})}function n(e,a){t.push({cmd:"lineTo",args:[e,a]})}function o(e,a,r,i,n,s){t.push({cmd:"bezierCurveTo",args:[e,a,r,i,n,s]})}function l(e){for(var g=0;g<e.length;){var m,p,b,v,y,k,w,x,C,S=!1,A=e[g++]
switch(A){case 1:d+=h.length>>1,S=!0
break
case 3:d+=h.length>>1,S=!0
break
case 4:f+=h.pop(),i(u,f),S=!0
break
case 5:for(;h.length>0;)u+=h.shift(),f+=h.shift(),n(u,f)
break
case 6:for(;h.length>0&&(u+=h.shift(),n(u,f),0!==h.length);)f+=h.shift(),n(u,f)
break
case 7:for(;h.length>0&&(f+=h.shift(),n(u,f),0!==h.length);)u+=h.shift(),n(u,f)
break
case 8:for(;h.length>0;)m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f)
break
case 10:x=h.pop()+a.subrsBias,C=a.subrs[x],C&&l(C)
break
case 11:return
case 12:switch(A=e[g++]){case 34:m=u+h.shift(),p=m+h.shift(),y=f+h.shift(),u=p+h.shift(),o(m,f,p,y,u,y),m=u+h.shift(),p=m+h.shift(),u=p+h.shift(),o(m,y,p,f,u,f)
break
case 35:m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f),m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f),h.pop()
break
case 36:m=u+h.shift(),y=f+h.shift(),p=m+h.shift(),k=y+h.shift(),u=p+h.shift(),o(m,y,p,k,u,k),m=u+h.shift(),p=m+h.shift(),w=k+h.shift(),u=p+h.shift(),o(m,k,p,w,u,f)
break
case 37:var I=u,B=f
m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f),m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p,f=v,Math.abs(u-I)>Math.abs(f-B)?u+=h.shift():f+=h.shift(),o(m,b,p,v,u,f)
break
default:r("unknown operator: 12 "+A)}break
case 14:if(h.length>=4){var T=h.pop(),O=h.pop()
f=h.pop(),u=h.pop(),t.push({cmd:"save"}),t.push({cmd:"translate",args:[u,f]})
var R=s(a.cmap,String.fromCharCode(a.glyphNameMap[Ht.StandardEncoding[T]]))
c(a.glyphs[R],t,a),t.push({cmd:"restore"}),R=s(a.cmap,String.fromCharCode(a.glyphNameMap[Ht.StandardEncoding[O]])),c(a.glyphs[R],t,a)}return
case 18:d+=h.length>>1,S=!0
break
case 19:d+=h.length>>1,g+=d+7>>3,S=!0
break
case 20:d+=h.length>>1,g+=d+7>>3,S=!0
break
case 21:f+=h.pop(),u+=h.pop(),i(u,f),S=!0
break
case 22:u+=h.pop(),i(u,f),S=!0
break
case 23:d+=h.length>>1,S=!0
break
case 24:for(;h.length>2;)m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f)
u+=h.shift(),f+=h.shift(),n(u,f)
break
case 25:for(;h.length>6;)u+=h.shift(),f+=h.shift(),n(u,f)
m=u+h.shift(),b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+h.shift(),o(m,b,p,v,u,f)
break
case 26:for(h.length%2&&(u+=h.shift());h.length>0;)m=u,b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p,f=v+h.shift(),o(m,b,p,v,u,f)
break
case 27:for(h.length%2&&(f+=h.shift());h.length>0;)m=u+h.shift(),b=f,p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v,o(m,b,p,v,u,f)
break
case 28:h.push((e[g]<<24|e[g+1]<<16)>>16),g+=2
break
case 29:x=h.pop()+a.gsubrsBias,C=a.gsubrs[x],C&&l(C)
break
case 30:for(;h.length>0&&(m=u,b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+(1===h.length?h.shift():0),o(m,b,p,v,u,f),0!==h.length);)m=u+h.shift(),b=f,p=m+h.shift(),v=b+h.shift(),f=v+h.shift(),u=p+(1===h.length?h.shift():0),o(m,b,p,v,u,f)
break
case 31:for(;h.length>0&&(m=u+h.shift(),b=f,p=m+h.shift(),v=b+h.shift(),f=v+h.shift(),u=p+(1===h.length?h.shift():0),o(m,b,p,v,u,f),0!==h.length);)m=u,b=f+h.shift(),p=m+h.shift(),v=b+h.shift(),u=p+h.shift(),f=v+(1===h.length?h.shift():0),o(m,b,p,v,u,f)
break
default:32>A&&r("unknown operator: "+A),247>A?h.push(A-139):251>A?h.push(256*(A-247)+e[g++]+108):255>A?h.push(256*-(A-251)-e[g++]-108):(h.push((e[g]<<24|e[g+1]<<16|e[g+2]<<8|e[g+3])/65536),g+=4)}S&&(h.length=0)}}var h=[],u=0,f=0,d=0
l(e)}function h(e){this.compiledGlyphs={},this.fontMatrix=e}function u(e,t,a){a=a||[488e-6,0,0,488e-6,0,0],h.call(this,a),this.glyphs=e,this.cmap=t,this.compiledGlyphs=[]}function f(e,t,a,r){a=a||[.001,0,0,.001,0,0],h.call(this,a),this.glyphs=e.glyphs,this.gsubrs=e.gsubrs||[],this.subrs=e.subrs||[],this.cmap=t,this.glyphNameMap=r||Ia,this.compiledGlyphs=[],this.gsubrsBias=this.gsubrs.length<1240?107:this.gsubrs.length<33900?1131:32768,this.subrsBias=this.subrs.length<1240?107:this.subrs.length<33900?1131:32768}var d=""
return h.prototype={getPathJs:function(e){var t=s(this.cmap,e),a=this.compiledGlyphs[t]
return a||(this.compiledGlyphs[t]=a=this.compileGlyph(this.glyphs[t])),a},compileGlyph:function(e){if(!e||0===e.length||14===e[0])return d
var t=[]
return t.push({cmd:"save"}),t.push({cmd:"transform",args:this.fontMatrix.slice()}),t.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(e,t),t.push({cmd:"restore"}),t},compileGlyphImpl:function(){r("Children classes should implement this.")},hasBuiltPath:function(e){var t=s(this.cmap,e)
return t in this.compiledGlyphs}},me.inherit(u,h,{compileGlyphImpl:function(e,t){o(e,t,this)}}),me.inherit(f,h,{compileGlyphImpl:function(e,t){c(e,t,this)}}),{create:function(r){for(var s,o,c,h,d,g,m=new Uint8Array(r.data),p=t(m,4),b=0,v=12;p>b;b++,v+=16){var y=l(m.subarray(v,v+4)),k=e(m,v+8),w=e(m,v+12)
switch(y){case"cmap":s=a(m,k,k+w)
break
case"glyf":o=m.subarray(k,k+w)
break
case"loca":c=m.subarray(k,k+w)
break
case"head":g=t(m,k+18),d=t(m,k+50)
break
case"CFF ":h=i(m,k,k+w)}}if(o){var x=g?[1/g,0,0,1/g,0,0]:r.fontMatrix
return new u(n(o,c,d),s,x)}return new f(h,s,r.fontMatrix,r.glyphNameMap)}}}(),Ia={A:65,AE:198,AEacute:508,AEmacron:482,AEsmall:63462,Aacute:193,Aacutesmall:63457,Abreve:258,Abreveacute:7854,Abrevecyrillic:1232,Abrevedotbelow:7862,Abrevegrave:7856,Abrevehookabove:7858,Abrevetilde:7860,Acaron:461,Acircle:9398,Acircumflex:194,Acircumflexacute:7844,Acircumflexdotbelow:7852,Acircumflexgrave:7846,Acircumflexhookabove:7848,Acircumflexsmall:63458,Acircumflextilde:7850,Acute:63177,Acutesmall:63412,Acyrillic:1040,Adblgrave:512,Adieresis:196,Adieresiscyrillic:1234,Adieresismacron:478,Adieresissmall:63460,Adotbelow:7840,Adotmacron:480,Agrave:192,Agravesmall:63456,Ahookabove:7842,Aiecyrillic:1236,Ainvertedbreve:514,Alpha:913,Alphatonos:902,Amacron:256,Amonospace:65313,Aogonek:260,Aring:197,Aringacute:506,Aringbelow:7680,Aringsmall:63461,Asmall:63329,Atilde:195,Atildesmall:63459,Aybarmenian:1329,B:66,Bcircle:9399,Bdotaccent:7682,Bdotbelow:7684,Becyrillic:1041,Benarmenian:1330,Beta:914,Bhook:385,Blinebelow:7686,Bmonospace:65314,Brevesmall:63220,Bsmall:63330,Btopbar:386,C:67,Caarmenian:1342,Cacute:262,Caron:63178,Caronsmall:63221,Ccaron:268,Ccedilla:199,Ccedillaacute:7688,Ccedillasmall:63463,Ccircle:9400,Ccircumflex:264,Cdot:266,Cdotaccent:266,Cedillasmall:63416,Chaarmenian:1353,Cheabkhasiancyrillic:1212,Checyrillic:1063,Chedescenderabkhasiancyrillic:1214,Chedescendercyrillic:1206,Chedieresiscyrillic:1268,Cheharmenian:1347,Chekhakassiancyrillic:1227,Cheverticalstrokecyrillic:1208,Chi:935,Chook:391,Circumflexsmall:63222,Cmonospace:65315,Coarmenian:1361,Csmall:63331,D:68,DZ:497,DZcaron:452,Daarmenian:1332,Dafrican:393,Dcaron:270,Dcedilla:7696,Dcircle:9401,Dcircumflexbelow:7698,Dcroat:272,Ddotaccent:7690,Ddotbelow:7692,Decyrillic:1044,Deicoptic:1006,Delta:8710,Deltagreek:916,Dhook:394,Dieresis:63179,DieresisAcute:63180,DieresisGrave:63181,Dieresissmall:63400,Digammagreek:988,Djecyrillic:1026,Dlinebelow:7694,Dmonospace:65316,Dotaccentsmall:63223,Dslash:272,Dsmall:63332,Dtopbar:395,Dz:498,Dzcaron:453,Dzeabkhasiancyrillic:1248,Dzecyrillic:1029,Dzhecyrillic:1039,E:69,Eacute:201,Eacutesmall:63465,Ebreve:276,Ecaron:282,Ecedillabreve:7708,Echarmenian:1333,Ecircle:9402,Ecircumflex:202,Ecircumflexacute:7870,Ecircumflexbelow:7704,Ecircumflexdotbelow:7878,Ecircumflexgrave:7872,Ecircumflexhookabove:7874,Ecircumflexsmall:63466,Ecircumflextilde:7876,Ecyrillic:1028,Edblgrave:516,Edieresis:203,Edieresissmall:63467,Edot:278,Edotaccent:278,Edotbelow:7864,Efcyrillic:1060,Egrave:200,Egravesmall:63464,Eharmenian:1335,Ehookabove:7866,Eightroman:8551,Einvertedbreve:518,Eiotifiedcyrillic:1124,Elcyrillic:1051,Elevenroman:8554,Emacron:274,Emacronacute:7702,Emacrongrave:7700,Emcyrillic:1052,Emonospace:65317,Encyrillic:1053,Endescendercyrillic:1186,Eng:330,Enghecyrillic:1188,Enhookcyrillic:1223,Eogonek:280,Eopen:400,Epsilon:917,Epsilontonos:904,Ercyrillic:1056,Ereversed:398,Ereversedcyrillic:1069,Escyrillic:1057,Esdescendercyrillic:1194,Esh:425,Esmall:63333,Eta:919,Etarmenian:1336,Etatonos:905,Eth:208,Ethsmall:63472,Etilde:7868,Etildebelow:7706,Euro:8364,Ezh:439,Ezhcaron:494,Ezhreversed:440,F:70,Fcircle:9403,Fdotaccent:7710,Feharmenian:1366,Feicoptic:996,Fhook:401,Fitacyrillic:1138,Fiveroman:8548,Fmonospace:65318,Fourroman:8547,Fsmall:63334,G:71,GBsquare:13191,Gacute:500,Gamma:915,Gammaafrican:404,Gangiacoptic:1002,Gbreve:286,Gcaron:486,Gcedilla:290,Gcircle:9404,Gcircumflex:284,Gcommaaccent:290,Gdot:288,Gdotaccent:288,Gecyrillic:1043,Ghadarmenian:1346,Ghemiddlehookcyrillic:1172,Ghestrokecyrillic:1170,Gheupturncyrillic:1168,Ghook:403,Gimarmenian:1331,Gjecyrillic:1027,Gmacron:7712,Gmonospace:65319,Grave:63182,Gravesmall:63328,Gsmall:63335,Gsmallhook:667,Gstroke:484,H:72,H18533:9679,H18543:9642,H18551:9643,H22073:9633,HPsquare:13259,Haabkhasiancyrillic:1192,Hadescendercyrillic:1202,Hardsigncyrillic:1066,Hbar:294,Hbrevebelow:7722,Hcedilla:7720,Hcircle:9405,Hcircumflex:292,Hdieresis:7718,Hdotaccent:7714,Hdotbelow:7716,Hmonospace:65320,Hoarmenian:1344,Horicoptic:1e3,Hsmall:63336,Hungarumlaut:63183,Hungarumlautsmall:63224,Hzsquare:13200,I:73,IAcyrillic:1071,IJ:306,IUcyrillic:1070,Iacute:205,Iacutesmall:63469,Ibreve:300,Icaron:463,Icircle:9406,Icircumflex:206,Icircumflexsmall:63470,Icyrillic:1030,Idblgrave:520,Idieresis:207,Idieresisacute:7726,Idieresiscyrillic:1252,Idieresissmall:63471,Idot:304,Idotaccent:304,Idotbelow:7882,Iebrevecyrillic:1238,Iecyrillic:1045,Ifraktur:8465,Igrave:204,Igravesmall:63468,Ihookabove:7880,Iicyrillic:1048,Iinvertedbreve:522,Iishortcyrillic:1049,Imacron:298,Imacroncyrillic:1250,Imonospace:65321,Iniarmenian:1339,Iocyrillic:1025,Iogonek:302,Iota:921,Iotaafrican:406,Iotadieresis:938,Iotatonos:906,Ismall:63337,Istroke:407,Itilde:296,Itildebelow:7724,Izhitsacyrillic:1140,Izhitsadblgravecyrillic:1142,J:74,Jaarmenian:1345,Jcircle:9407,Jcircumflex:308,Jecyrillic:1032,Jheharmenian:1355,Jmonospace:65322,Jsmall:63338,K:75,KBsquare:13189,KKsquare:13261,Kabashkircyrillic:1184,Kacute:7728,Kacyrillic:1050,Kadescendercyrillic:1178,Kahookcyrillic:1219,Kappa:922,Kastrokecyrillic:1182,Kaverticalstrokecyrillic:1180,Kcaron:488,Kcedilla:310,Kcircle:9408,Kcommaaccent:310,Kdotbelow:7730,Keharmenian:1364,Kenarmenian:1343,Khacyrillic:1061,Kheicoptic:998,Khook:408,Kjecyrillic:1036,Klinebelow:7732,Kmonospace:65323,Koppacyrillic:1152,Koppagreek:990,Ksicyrillic:1134,Ksmall:63339,L:76,LJ:455,LL:63167,Lacute:313,Lambda:923,Lcaron:317,Lcedilla:315,Lcircle:9409,Lcircumflexbelow:7740,Lcommaaccent:315,Ldot:319,Ldotaccent:319,Ldotbelow:7734,Ldotbelowmacron:7736,Liwnarmenian:1340,Lj:456,Ljecyrillic:1033,Llinebelow:7738,Lmonospace:65324,Lslash:321,Lslashsmall:63225,Lsmall:63340,M:77,MBsquare:13190,Macron:63184,Macronsmall:63407,Macute:7742,Mcircle:9410,Mdotaccent:7744,Mdotbelow:7746,Menarmenian:1348,Mmonospace:65325,Msmall:63341,Mturned:412,Mu:924,N:78,NJ:458,Nacute:323,Ncaron:327,Ncedilla:325,Ncircle:9411,Ncircumflexbelow:7754,Ncommaaccent:325,Ndotaccent:7748,Ndotbelow:7750,Nhookleft:413,Nineroman:8552,Nj:459,Njecyrillic:1034,Nlinebelow:7752,Nmonospace:65326,Nowarmenian:1350,Nsmall:63342,Ntilde:209,Ntildesmall:63473,Nu:925,O:79,OE:338,OEsmall:63226,Oacute:211,Oacutesmall:63475,Obarredcyrillic:1256,Obarreddieresiscyrillic:1258,Obreve:334,Ocaron:465,Ocenteredtilde:415,Ocircle:9412,Ocircumflex:212,Ocircumflexacute:7888,Ocircumflexdotbelow:7896,Ocircumflexgrave:7890,Ocircumflexhookabove:7892,Ocircumflexsmall:63476,Ocircumflextilde:7894,Ocyrillic:1054,Odblacute:336,Odblgrave:524,Odieresis:214,Odieresiscyrillic:1254,Odieresissmall:63478,Odotbelow:7884,Ogoneksmall:63227,Ograve:210,Ogravesmall:63474,Oharmenian:1365,Ohm:8486,Ohookabove:7886,Ohorn:416,Ohornacute:7898,Ohorndotbelow:7906,Ohorngrave:7900,Ohornhookabove:7902,Ohorntilde:7904,Ohungarumlaut:336,Oi:418,Oinvertedbreve:526,Omacron:332,Omacronacute:7762,Omacrongrave:7760,Omega:8486,Omegacyrillic:1120,Omegagreek:937,Omegaroundcyrillic:1146,Omegatitlocyrillic:1148,Omegatonos:911,Omicron:927,Omicrontonos:908,Omonospace:65327,Oneroman:8544,Oogonek:490,Oogonekmacron:492,Oopen:390,Oslash:216,Oslashacute:510,Oslashsmall:63480,Osmall:63343,Ostrokeacute:510,Otcyrillic:1150,Otilde:213,Otildeacute:7756,Otildedieresis:7758,Otildesmall:63477,P:80,Pacute:7764,Pcircle:9413,Pdotaccent:7766,Pecyrillic:1055,Peharmenian:1354,Pemiddlehookcyrillic:1190,Phi:934,Phook:420,Pi:928,Piwrarmenian:1363,Pmonospace:65328,Psi:936,Psicyrillic:1136,Psmall:63344,Q:81,Qcircle:9414,Qmonospace:65329,Qsmall:63345,R:82,Raarmenian:1356,Racute:340,Rcaron:344,Rcedilla:342,Rcircle:9415,Rcommaaccent:342,Rdblgrave:528,Rdotaccent:7768,Rdotbelow:7770,Rdotbelowmacron:7772,Reharmenian:1360,Rfraktur:8476,Rho:929,Ringsmall:63228,Rinvertedbreve:530,Rlinebelow:7774,Rmonospace:65330,Rsmall:63346,Rsmallinverted:641,Rsmallinvertedsuperior:694,S:83,SF010000:9484,SF020000:9492,SF030000:9488,SF040000:9496,SF050000:9532,SF060000:9516,SF070000:9524,SF080000:9500,SF090000:9508,SF100000:9472,SF110000:9474,SF190000:9569,SF200000:9570,SF210000:9558,SF220000:9557,SF230000:9571,SF240000:9553,SF250000:9559,SF260000:9565,SF270000:9564,SF280000:9563,SF360000:9566,SF370000:9567,SF380000:9562,SF390000:9556,SF400000:9577,SF410000:9574,SF420000:9568,SF430000:9552,SF440000:9580,SF450000:9575,SF460000:9576,SF470000:9572,SF480000:9573,SF490000:9561,SF500000:9560,SF510000:9554,SF520000:9555,SF530000:9579,SF540000:9578,Sacute:346,Sacutedotaccent:7780,Sampigreek:992,Scaron:352,Scarondotaccent:7782,Scaronsmall:63229,Scedilla:350,Schwa:399,Schwacyrillic:1240,Schwadieresiscyrillic:1242,Scircle:9416,Scircumflex:348,Scommaaccent:536,Sdotaccent:7776,Sdotbelow:7778,Sdotbelowdotaccent:7784,Seharmenian:1357,Sevenroman:8550,Shaarmenian:1351,Shacyrillic:1064,Shchacyrillic:1065,Sheicoptic:994,Shhacyrillic:1210,Shimacoptic:1004,Sigma:931,Sixroman:8549,Smonospace:65331,Softsigncyrillic:1068,Ssmall:63347,Stigmagreek:986,T:84,Tau:932,Tbar:358,Tcaron:356,Tcedilla:354,Tcircle:9417,Tcircumflexbelow:7792,Tcommaaccent:354,Tdotaccent:7786,Tdotbelow:7788,Tecyrillic:1058,Tedescendercyrillic:1196,Tenroman:8553,Tetsecyrillic:1204,Theta:920,Thook:428,Thorn:222,Thornsmall:63486,Threeroman:8546,Tildesmall:63230,Tiwnarmenian:1359,Tlinebelow:7790,Tmonospace:65332,Toarmenian:1337,Tonefive:444,Tonesix:388,Tonetwo:423,Tretroflexhook:430,Tsecyrillic:1062,Tshecyrillic:1035,Tsmall:63348,Twelveroman:8555,Tworoman:8545,U:85,Uacute:218,Uacutesmall:63482,Ubreve:364,Ucaron:467,Ucircle:9418,Ucircumflex:219,Ucircumflexbelow:7798,Ucircumflexsmall:63483,Ucyrillic:1059,Udblacute:368,Udblgrave:532,Udieresis:220,Udieresisacute:471,Udieresisbelow:7794,Udieresiscaron:473,Udieresiscyrillic:1264,Udieresisgrave:475,Udieresismacron:469,Udieresissmall:63484,Udotbelow:7908,Ugrave:217,Ugravesmall:63481,Uhookabove:7910,Uhorn:431,Uhornacute:7912,Uhorndotbelow:7920,Uhorngrave:7914,Uhornhookabove:7916,Uhorntilde:7918,Uhungarumlaut:368,Uhungarumlautcyrillic:1266,Uinvertedbreve:534,Ukcyrillic:1144,Umacron:362,Umacroncyrillic:1262,Umacrondieresis:7802,Umonospace:65333,Uogonek:370,Upsilon:933,Upsilon1:978,Upsilonacutehooksymbolgreek:979,Upsilonafrican:433,Upsilondieresis:939,Upsilondieresishooksymbolgreek:980,Upsilonhooksymbol:978,Upsilontonos:910,Uring:366,Ushortcyrillic:1038,Usmall:63349,Ustraightcyrillic:1198,Ustraightstrokecyrillic:1200,Utilde:360,Utildeacute:7800,Utildebelow:7796,V:86,Vcircle:9419,Vdotbelow:7806,Vecyrillic:1042,Vewarmenian:1358,Vhook:434,Vmonospace:65334,Voarmenian:1352,Vsmall:63350,Vtilde:7804,W:87,Wacute:7810,Wcircle:9420,Wcircumflex:372,Wdieresis:7812,Wdotaccent:7814,Wdotbelow:7816,Wgrave:7808,Wmonospace:65335,Wsmall:63351,X:88,Xcircle:9421,Xdieresis:7820,Xdotaccent:7818,Xeharmenian:1341,Xi:926,Xmonospace:65336,Xsmall:63352,Y:89,Yacute:221,Yacutesmall:63485,Yatcyrillic:1122,Ycircle:9422,Ycircumflex:374,Ydieresis:376,Ydieresissmall:63487,Ydotaccent:7822,Ydotbelow:7924,Yericyrillic:1067,Yerudieresiscyrillic:1272,Ygrave:7922,Yhook:435,Yhookabove:7926,Yiarmenian:1349,Yicyrillic:1031,Yiwnarmenian:1362,Ymonospace:65337,Ysmall:63353,Ytilde:7928,Yusbigcyrillic:1130,Yusbigiotifiedcyrillic:1132,Yuslittlecyrillic:1126,Yuslittleiotifiedcyrillic:1128,Z:90,Zaarmenian:1334,Zacute:377,Zcaron:381,Zcaronsmall:63231,Zcircle:9423,Zcircumflex:7824,Zdot:379,Zdotaccent:379,Zdotbelow:7826,Zecyrillic:1047,Zedescendercyrillic:1176,Zedieresiscyrillic:1246,Zeta:918,Zhearmenian:1338,Zhebrevecyrillic:1217,Zhecyrillic:1046,Zhedescendercyrillic:1174,Zhedieresiscyrillic:1244,Zlinebelow:7828,Zmonospace:65338,Zsmall:63354,Zstroke:437,a:97,aabengali:2438,aacute:225,aadeva:2310,aagujarati:2694,aagurmukhi:2566,aamatragurmukhi:2622,aarusquare:13059,aavowelsignbengali:2494,aavowelsigndeva:2366,aavowelsigngujarati:2750,abbreviationmarkarmenian:1375,abbreviationsigndeva:2416,abengali:2437,abopomofo:12570,abreve:259,abreveacute:7855,abrevecyrillic:1233,abrevedotbelow:7863,abrevegrave:7857,abrevehookabove:7859,abrevetilde:7861,acaron:462,acircle:9424,acircumflex:226,acircumflexacute:7845,acircumflexdotbelow:7853,acircumflexgrave:7847,acircumflexhookabove:7849,acircumflextilde:7851,acute:180,acutebelowcmb:791,acutecmb:769,acutecomb:769,acutedeva:2388,acutelowmod:719,acutetonecmb:833,acyrillic:1072,adblgrave:513,addakgurmukhi:2673,adeva:2309,adieresis:228,adieresiscyrillic:1235,adieresismacron:479,adotbelow:7841,adotmacron:481,ae:230,aeacute:509,aekorean:12624,aemacron:483,afii00208:8213,afii08941:8356,afii10017:1040,afii10018:1041,afii10019:1042,afii10020:1043,afii10021:1044,afii10022:1045,afii10023:1025,afii10024:1046,afii10025:1047,afii10026:1048,afii10027:1049,afii10028:1050,afii10029:1051,afii10030:1052,afii10031:1053,afii10032:1054,afii10033:1055,afii10034:1056,afii10035:1057,afii10036:1058,afii10037:1059,afii10038:1060,afii10039:1061,afii10040:1062,afii10041:1063,afii10042:1064,afii10043:1065,afii10044:1066,afii10045:1067,afii10046:1068,afii10047:1069,afii10048:1070,afii10049:1071,afii10050:1168,afii10051:1026,afii10052:1027,afii10053:1028,afii10054:1029,afii10055:1030,afii10056:1031,afii10057:1032,afii10058:1033,afii10059:1034,afii10060:1035,afii10061:1036,afii10062:1038,afii10063:63172,afii10064:63173,afii10065:1072,afii10066:1073,afii10067:1074,afii10068:1075,afii10069:1076,afii10070:1077,afii10071:1105,afii10072:1078,afii10073:1079,afii10074:1080,afii10075:1081,afii10076:1082,afii10077:1083,afii10078:1084,afii10079:1085,afii10080:1086,afii10081:1087,afii10082:1088,afii10083:1089,afii10084:1090,afii10085:1091,afii10086:1092,afii10087:1093,afii10088:1094,afii10089:1095,afii10090:1096,afii10091:1097,afii10092:1098,afii10093:1099,afii10094:1100,afii10095:1101,afii10096:1102,afii10097:1103,afii10098:1169,afii10099:1106,afii10100:1107,afii10101:1108,afii10102:1109,afii10103:1110,afii10104:1111,afii10105:1112,afii10106:1113,afii10107:1114,afii10108:1115,afii10109:1116,afii10110:1118,afii10145:1039,afii10146:1122,afii10147:1138,afii10148:1140,afii10192:63174,afii10193:1119,afii10194:1123,afii10195:1139,afii10196:1141,afii10831:63175,afii10832:63176,afii10846:1241,afii299:8206,afii300:8207,afii301:8205,afii57381:1642,afii57388:1548,afii57392:1632,afii57393:1633,afii57394:1634,afii57395:1635,afii57396:1636,afii57397:1637,afii57398:1638,afii57399:1639,afii57400:1640,afii57401:1641,afii57403:1563,afii57407:1567,afii57409:1569,afii57410:1570,afii57411:1571,afii57412:1572,afii57413:1573,afii57414:1574,afii57415:1575,afii57416:1576,afii57417:1577,afii57418:1578,afii57419:1579,afii57420:1580,afii57421:1581,afii57422:1582,afii57423:1583,afii57424:1584,afii57425:1585,afii57426:1586,afii57427:1587,afii57428:1588,afii57429:1589,afii57430:1590,afii57431:1591,afii57432:1592,afii57433:1593,afii57434:1594,afii57440:1600,afii57441:1601,afii57442:1602,afii57443:1603,afii57444:1604,afii57445:1605,afii57446:1606,afii57448:1608,afii57449:1609,afii57450:1610,afii57451:1611,afii57452:1612,afii57453:1613,afii57454:1614,afii57455:1615,afii57456:1616,afii57457:1617,afii57458:1618,afii57470:1607,afii57505:1700,afii57506:1662,afii57507:1670,afii57508:1688,afii57509:1711,afii57511:1657,afii57512:1672,afii57513:1681,afii57514:1722,afii57519:1746,afii57534:1749,afii57636:8362,afii57645:1470,afii57658:1475,afii57664:1488,afii57665:1489,afii57666:1490,afii57667:1491,afii57668:1492,afii57669:1493,afii57670:1494,afii57671:1495,afii57672:1496,afii57673:1497,afii57674:1498,afii57675:1499,afii57676:1500,afii57677:1501,afii57678:1502,afii57679:1503,afii57680:1504,afii57681:1505,afii57682:1506,afii57683:1507,afii57684:1508,afii57685:1509,afii57686:1510,afii57687:1511,afii57688:1512,afii57689:1513,afii57690:1514,afii57694:64298,afii57695:64299,afii57700:64331,afii57705:64287,afii57716:1520,afii57717:1521,afii57718:1522,afii57723:64309,afii57793:1460,afii57794:1461,afii57795:1462,afii57796:1467,afii57797:1464,afii57798:1463,afii57799:1456,afii57800:1458,afii57801:1457,afii57802:1459,afii57803:1474,afii57804:1473,afii57806:1465,afii57807:1468,afii57839:1469,afii57841:1471,afii57842:1472,afii57929:700,afii61248:8453,afii61289:8467,afii61352:8470,afii61573:8236,afii61574:8237,afii61575:8238,afii61664:8204,afii63167:1645,afii64937:701,agrave:224,agujarati:2693,agurmukhi:2565,ahiragana:12354,ahookabove:7843,aibengali:2448,aibopomofo:12574,aideva:2320,aiecyrillic:1237,aigujarati:2704,aigurmukhi:2576,aimatragurmukhi:2632,ainarabic:1593,ainfinalarabic:65226,aininitialarabic:65227,ainmedialarabic:65228,ainvertedbreve:515,aivowelsignbengali:2504,aivowelsigndeva:2376,aivowelsigngujarati:2760,akatakana:12450,akatakanahalfwidth:65393,akorean:12623,alef:1488,alefarabic:1575,alefdageshhebrew:64304,aleffinalarabic:65166,alefhamzaabovearabic:1571,alefhamzaabovefinalarabic:65156,alefhamzabelowarabic:1573,alefhamzabelowfinalarabic:65160,alefhebrew:1488,aleflamedhebrew:64335,alefmaddaabovearabic:1570,alefmaddaabovefinalarabic:65154,alefmaksuraarabic:1609,alefmaksurafinalarabic:65264,alefmaksurainitialarabic:65267,alefmaksuramedialarabic:65268,alefpatahhebrew:64302,alefqamatshebrew:64303,aleph:8501,allequal:8780,alpha:945,alphatonos:940,amacron:257,amonospace:65345,ampersand:38,ampersandmonospace:65286,ampersandsmall:63270,amsquare:13250,anbopomofo:12578,angbopomofo:12580,angbracketleft:12296,angbracketright:12297,angkhankhuthai:3674,angle:8736,anglebracketleft:12296,anglebracketleftvertical:65087,anglebracketright:12297,anglebracketrightvertical:65088,angleleft:9001,angleright:9002,angstrom:8491,anoteleia:903,anudattadeva:2386,anusvarabengali:2434,anusvaradeva:2306,anusvaragujarati:2690,aogonek:261,apaatosquare:13056,aparen:9372,apostrophearmenian:1370,apostrophemod:700,apple:63743,approaches:8784,approxequal:8776,approxequalorimage:8786,approximatelyequal:8773,araeaekorean:12686,araeakorean:12685,arc:8978,arighthalfring:7834,aring:229,aringacute:507,aringbelow:7681,arrowboth:8596,arrowdashdown:8675,arrowdashleft:8672,arrowdashright:8674,arrowdashup:8673,arrowdblboth:8660,arrowdbldown:8659,arrowdblleft:8656,arrowdblright:8658,arrowdblup:8657,arrowdown:8595,arrowdownleft:8601,arrowdownright:8600,arrowdownwhite:8681,arrowheaddownmod:709,arrowheadleftmod:706,arrowheadrightmod:707,arrowheadupmod:708,arrowhorizex:63719,arrowleft:8592,arrowleftdbl:8656,arrowleftdblstroke:8653,arrowleftoverright:8646,arrowleftwhite:8678,arrowright:8594,arrowrightdblstroke:8655,arrowrightheavy:10142,arrowrightoverleft:8644,arrowrightwhite:8680,arrowtableft:8676,arrowtabright:8677,arrowup:8593,arrowupdn:8597,arrowupdnbse:8616,arrowupdownbase:8616,arrowupleft:8598,arrowupleftofdown:8645,arrowupright:8599,arrowupwhite:8679,arrowvertex:63718,asciicircum:94,asciicircummonospace:65342,asciitilde:126,asciitildemonospace:65374,ascript:593,ascriptturned:594,asmallhiragana:12353,asmallkatakana:12449,asmallkatakanahalfwidth:65383,asterisk:42,asteriskaltonearabic:1645,asteriskarabic:1645,asteriskmath:8727,asteriskmonospace:65290,asterisksmall:65121,asterism:8258,asuperior:63209,asymptoticallyequal:8771,at:64,atilde:227,atmonospace:65312,atsmall:65131,aturned:592,aubengali:2452,aubopomofo:12576,audeva:2324,augujarati:2708,augurmukhi:2580,aulengthmarkbengali:2519,aumatragurmukhi:2636,auvowelsignbengali:2508,auvowelsigndeva:2380,auvowelsigngujarati:2764,avagrahadeva:2365,aybarmenian:1377,ayin:1506,ayinaltonehebrew:64288,ayinhebrew:1506,b:98,babengali:2476,backslash:92,backslashmonospace:65340,badeva:2348,bagujarati:2732,bagurmukhi:2604,bahiragana:12400,bahtthai:3647,bakatakana:12496,bar:124,barmonospace:65372,bbopomofo:12549,bcircle:9425,bdotaccent:7683,bdotbelow:7685,beamedsixteenthnotes:9836,because:8757,becyrillic:1073,beharabic:1576,behfinalarabic:65168,behinitialarabic:65169,behiragana:12409,behmedialarabic:65170,behmeeminitialarabic:64671,behmeemisolatedarabic:64520,behnoonfinalarabic:64621,bekatakana:12505,benarmenian:1378,bet:1489,beta:946,betasymbolgreek:976,betdagesh:64305,betdageshhebrew:64305,bethebrew:1489,betrafehebrew:64332,bhabengali:2477,bhadeva:2349,bhagujarati:2733,bhagurmukhi:2605,bhook:595,bihiragana:12403,bikatakana:12499,bilabialclick:664,bindigurmukhi:2562,birusquare:13105,blackcircle:9679,blackdiamond:9670,blackdownpointingtriangle:9660,blackleftpointingpointer:9668,blackleftpointingtriangle:9664,blacklenticularbracketleft:12304,blacklenticularbracketleftvertical:65083,blacklenticularbracketright:12305,blacklenticularbracketrightvertical:65084,blacklowerlefttriangle:9699,blacklowerrighttriangle:9698,blackrectangle:9644,blackrightpointingpointer:9658,blackrightpointingtriangle:9654,blacksmallsquare:9642,blacksmilingface:9787,blacksquare:9632,blackstar:9733,blackupperlefttriangle:9700,blackupperrighttriangle:9701,blackuppointingsmalltriangle:9652,blackuppointingtriangle:9650,blank:9251,blinebelow:7687,block:9608,bmonospace:65346,bobaimaithai:3610,bohiragana:12412,bokatakana:12508,bparen:9373,bqsquare:13251,braceex:63732,braceleft:123,braceleftbt:63731,braceleftmid:63730,braceleftmonospace:65371,braceleftsmall:65115,bracelefttp:63729,braceleftvertical:65079,braceright:125,bracerightbt:63742,bracerightmid:63741,bracerightmonospace:65373,bracerightsmall:65116,bracerighttp:63740,bracerightvertical:65080,bracketleft:91,bracketleftbt:63728,bracketleftex:63727,bracketleftmonospace:65339,bracketlefttp:63726,bracketright:93,bracketrightbt:63739,bracketrightex:63738,bracketrightmonospace:65341,bracketrighttp:63737,breve:728,brevebelowcmb:814,brevecmb:774,breveinvertedbelowcmb:815,breveinvertedcmb:785,breveinverteddoublecmb:865,bridgebelowcmb:810,bridgeinvertedbelowcmb:826,brokenbar:166,bstroke:384,bsuperior:63210,btopbar:387,buhiragana:12406,bukatakana:12502,bullet:8226,bulletinverse:9688,bulletoperator:8729,bullseye:9678,c:99,caarmenian:1390,cabengali:2458,cacute:263,cadeva:2330,cagujarati:2714,cagurmukhi:2586,calsquare:13192,candrabindubengali:2433,candrabinducmb:784,candrabindudeva:2305,candrabindugujarati:2689,capslock:8682,careof:8453,caron:711,caronbelowcmb:812,caroncmb:780,carriagereturn:8629,cbopomofo:12568,ccaron:269,ccedilla:231,ccedillaacute:7689,ccircle:9426,ccircumflex:265,ccurl:597,cdot:267,cdotaccent:267,cdsquare:13253,cedilla:184,cedillacmb:807,cent:162,centigrade:8451,centinferior:63199,centmonospace:65504,centoldstyle:63394,centsuperior:63200,chaarmenian:1401,chabengali:2459,chadeva:2331,chagujarati:2715,chagurmukhi:2587,chbopomofo:12564,cheabkhasiancyrillic:1213,checkmark:10003,checyrillic:1095,chedescenderabkhasiancyrillic:1215,chedescendercyrillic:1207,chedieresiscyrillic:1269,cheharmenian:1395,chekhakassiancyrillic:1228,cheverticalstrokecyrillic:1209,chi:967,chieuchacirclekorean:12919,chieuchaparenkorean:12823,chieuchcirclekorean:12905,chieuchkorean:12618,chieuchparenkorean:12809,chochangthai:3594,chochanthai:3592,chochingthai:3593,chochoethai:3596,chook:392,cieucacirclekorean:12918,cieucaparenkorean:12822,cieuccirclekorean:12904,cieuckorean:12616,cieucparenkorean:12808,cieucuparenkorean:12828,circle:9675,circlecopyrt:169,circlemultiply:8855,circleot:8857,circleplus:8853,circlepostalmark:12342,circlewithlefthalfblack:9680,circlewithrighthalfblack:9681,circumflex:710,circumflexbelowcmb:813,circumflexcmb:770,clear:8999,clickalveolar:450,clickdental:448,clicklateral:449,clickretroflex:451,club:9827,clubsuitblack:9827,clubsuitwhite:9831,cmcubedsquare:13220,cmonospace:65347,cmsquaredsquare:13216,coarmenian:1409,colon:58,colonmonetary:8353,colonmonospace:65306,colonsign:8353,colonsmall:65109,colontriangularhalfmod:721,colontriangularmod:720,comma:44,commaabovecmb:787,commaaboverightcmb:789,commaaccent:63171,commaarabic:1548,commaarmenian:1373,commainferior:63201,commamonospace:65292,commareversedabovecmb:788,commareversedmod:701,commasmall:65104,commasuperior:63202,commaturnedabovecmb:786,commaturnedmod:699,compass:9788,congruent:8773,contourintegral:8750,control:8963,controlACK:6,controlBEL:7,controlBS:8,controlCAN:24,controlCR:13,controlDC1:17,controlDC2:18,controlDC3:19,controlDC4:20,controlDEL:127,controlDLE:16,controlEM:25,controlENQ:5,controlEOT:4,controlESC:27,controlETB:23,controlETX:3,controlFF:12,controlFS:28,controlGS:29,controlHT:9,controlLF:10,controlNAK:21,controlRS:30,controlSI:15,controlSO:14,controlSOT:2,controlSTX:1,controlSUB:26,controlSYN:22,controlUS:31,controlVT:11,copyright:169,copyrightsans:63721,copyrightserif:63193,cornerbracketleft:12300,cornerbracketlefthalfwidth:65378,cornerbracketleftvertical:65089,cornerbracketright:12301,cornerbracketrighthalfwidth:65379,cornerbracketrightvertical:65090,corporationsquare:13183,cosquare:13255,coverkgsquare:13254,cparen:9374,cruzeiro:8354,cstretched:663,curlyand:8911,curlyor:8910,currency:164,cyrBreve:63185,cyrFlex:63186,cyrbreve:63188,cyrflex:63189,d:100,daarmenian:1380,dabengali:2470,dadarabic:1590,dadeva:2342,dadfinalarabic:65214,dadinitialarabic:65215,dadmedialarabic:65216,dagesh:1468,dageshhebrew:1468,dagger:8224,daggerdbl:8225,dagujarati:2726,dagurmukhi:2598,dahiragana:12384,dakatakana:12480,dalarabic:1583,dalet:1491,daletdagesh:64307,daletdageshhebrew:64307,dalethebrew:1491,dalfinalarabic:65194,dammaarabic:1615,dammalowarabic:1615,dammatanaltonearabic:1612,dammatanarabic:1612,danda:2404,dargahebrew:1447,dargalefthebrew:1447,dasiapneumatacyrilliccmb:1157,dblGrave:63187,dblanglebracketleft:12298,dblanglebracketleftvertical:65085,dblanglebracketright:12299,dblanglebracketrightvertical:65086,dblarchinvertedbelowcmb:811,dblarrowleft:8660,dblarrowright:8658,dbldanda:2405,dblgrave:63190,dblgravecmb:783,dblintegral:8748,dbllowline:8215,dbllowlinecmb:819,dbloverlinecmb:831,dblprimemod:698,dblverticalbar:8214,dblverticallineabovecmb:782,dbopomofo:12553,dbsquare:13256,dcaron:271,dcedilla:7697,dcircle:9427,dcircumflexbelow:7699,dcroat:273,ddabengali:2465,ddadeva:2337,ddagujarati:2721,ddagurmukhi:2593,ddalarabic:1672,ddalfinalarabic:64393,dddhadeva:2396,ddhabengali:2466,ddhadeva:2338,ddhagujarati:2722,ddhagurmukhi:2594,ddotaccent:7691,ddotbelow:7693,decimalseparatorarabic:1643,decimalseparatorpersian:1643,decyrillic:1076,degree:176,dehihebrew:1453,dehiragana:12391,deicoptic:1007,dekatakana:12487,deleteleft:9003,deleteright:8998,delta:948,deltaturned:397,denominatorminusonenumeratorbengali:2552,dezh:676,dhabengali:2471,dhadeva:2343,dhagujarati:2727,dhagurmukhi:2599,dhook:599,dialytikatonos:901,dialytikatonoscmb:836,diamond:9830,diamondsuitwhite:9826,dieresis:168,dieresisacute:63191,dieresisbelowcmb:804,dieresiscmb:776,dieresisgrave:63192,dieresistonos:901,dihiragana:12386,dikatakana:12482,dittomark:12291,divide:247,divides:8739,divisionslash:8725,djecyrillic:1106,dkshade:9619,dlinebelow:7695,dlsquare:13207,dmacron:273,dmonospace:65348,dnblock:9604,dochadathai:3598,dodekthai:3604,dohiragana:12393,dokatakana:12489,dollar:36,dollarinferior:63203,dollarmonospace:65284,dollaroldstyle:63268,dollarsmall:65129,dollarsuperior:63204,dong:8363,dorusquare:13094,dotaccent:729,dotaccentcmb:775,dotbelowcmb:803,dotbelowcomb:803,dotkatakana:12539,dotlessi:305,dotlessj:63166,dotlessjstrokehook:644,dotmath:8901,dottedcircle:9676,doubleyodpatah:64287,doubleyodpatahhebrew:64287,downtackbelowcmb:798,downtackmod:725,dparen:9375,dsuperior:63211,dtail:598,dtopbar:396,duhiragana:12389,dukatakana:12485,dz:499,dzaltone:675,dzcaron:454,dzcurl:677,dzeabkhasiancyrillic:1249,dzecyrillic:1109,dzhecyrillic:1119,e:101,eacute:233,earth:9793,ebengali:2447,ebopomofo:12572,ebreve:277,ecandradeva:2317,ecandragujarati:2701,ecandravowelsigndeva:2373,ecandravowelsigngujarati:2757,ecaron:283,ecedillabreve:7709,echarmenian:1381,echyiwnarmenian:1415,ecircle:9428,ecircumflex:234,ecircumflexacute:7871,ecircumflexbelow:7705,ecircumflexdotbelow:7879,ecircumflexgrave:7873,ecircumflexhookabove:7875,ecircumflextilde:7877,ecyrillic:1108,edblgrave:517,edeva:2319,edieresis:235,edot:279,edotaccent:279,edotbelow:7865,eegurmukhi:2575,eematragurmukhi:2631,efcyrillic:1092,egrave:232,egujarati:2703,eharmenian:1383,ehbopomofo:12573,ehiragana:12360,ehookabove:7867,eibopomofo:12575,eight:56,eightarabic:1640,eightbengali:2542,eightcircle:9319,eightcircleinversesansserif:10129,eightdeva:2414,eighteencircle:9329,eighteenparen:9349,eighteenperiod:9369,eightgujarati:2798,eightgurmukhi:2670,eighthackarabic:1640,eighthangzhou:12328,eighthnotebeamed:9835,eightideographicparen:12839,eightinferior:8328,eightmonospace:65304,eightoldstyle:63288,eightparen:9339,eightperiod:9359,eightpersian:1784,eightroman:8567,eightsuperior:8312,eightthai:3672,einvertedbreve:519,eiotifiedcyrillic:1125,ekatakana:12456,ekatakanahalfwidth:65396,ekonkargurmukhi:2676,ekorean:12628,elcyrillic:1083,element:8712,elevencircle:9322,elevenparen:9342,elevenperiod:9362,elevenroman:8570,ellipsis:8230,ellipsisvertical:8942,emacron:275,emacronacute:7703,emacrongrave:7701,emcyrillic:1084,emdash:8212,emdashvertical:65073,emonospace:65349,emphasismarkarmenian:1371,emptyset:8709,enbopomofo:12579,encyrillic:1085,endash:8211,endashvertical:65074,endescendercyrillic:1187,eng:331,engbopomofo:12581,enghecyrillic:1189,enhookcyrillic:1224,enspace:8194,eogonek:281,eokorean:12627,eopen:603,eopenclosed:666,eopenreversed:604,eopenreversedclosed:606,eopenreversedhook:605,eparen:9376,epsilon:949,epsilontonos:941,equal:61,equalmonospace:65309,equalsmall:65126,equalsuperior:8316,equivalence:8801,erbopomofo:12582,ercyrillic:1088,ereversed:600,ereversedcyrillic:1101,escyrillic:1089,esdescendercyrillic:1195,esh:643,eshcurl:646,eshortdeva:2318,eshortvowelsigndeva:2374,eshreversedloop:426,eshsquatreversed:645,esmallhiragana:12359,esmallkatakana:12455,esmallkatakanahalfwidth:65386,estimated:8494,esuperior:63212,eta:951,etarmenian:1384,etatonos:942,eth:240,etilde:7869,etildebelow:7707,etnahtafoukhhebrew:1425,etnahtafoukhlefthebrew:1425,etnahtahebrew:1425,etnahtalefthebrew:1425,eturned:477,eukorean:12641,euro:8364,evowelsignbengali:2503,evowelsigndeva:2375,evowelsigngujarati:2759,exclam:33,exclamarmenian:1372,exclamdbl:8252,exclamdown:161,exclamdownsmall:63393,exclammonospace:65281,exclamsmall:63265,existential:8707,ezh:658,ezhcaron:495,ezhcurl:659,ezhreversed:441,ezhtail:442,f:102,fadeva:2398,fagurmukhi:2654,fahrenheit:8457,fathaarabic:1614,fathalowarabic:1614,fathatanarabic:1611,fbopomofo:12552,fcircle:9429,fdotaccent:7711,feharabic:1601,feharmenian:1414,fehfinalarabic:65234,fehinitialarabic:65235,fehmedialarabic:65236,feicoptic:997,female:9792,ff:64256,ffi:64259,ffl:64260,fi:64257,fifteencircle:9326,fifteenparen:9346,fifteenperiod:9366,figuredash:8210,filledbox:9632,filledrect:9644,finalkaf:1498,finalkafdagesh:64314,finalkafdageshhebrew:64314,finalkafhebrew:1498,finalmem:1501,finalmemhebrew:1501,finalnun:1503,finalnunhebrew:1503,finalpe:1507,finalpehebrew:1507,finaltsadi:1509,finaltsadihebrew:1509,firsttonechinese:713,fisheye:9673,fitacyrillic:1139,five:53,fivearabic:1637,fivebengali:2539,fivecircle:9316,fivecircleinversesansserif:10126,fivedeva:2411,fiveeighths:8541,fivegujarati:2795,fivegurmukhi:2667,fivehackarabic:1637,fivehangzhou:12325,fiveideographicparen:12836,fiveinferior:8325,fivemonospace:65301,fiveoldstyle:63285,fiveparen:9336,fiveperiod:9356,fivepersian:1781,fiveroman:8564,fivesuperior:8309,fivethai:3669,fl:64258,florin:402,fmonospace:65350,fmsquare:13209,fofanthai:3615,fofathai:3613,fongmanthai:3663,forall:8704,four:52,fourarabic:1636,fourbengali:2538,fourcircle:9315,fourcircleinversesansserif:10125,fourdeva:2410,fourgujarati:2794,fourgurmukhi:2666,fourhackarabic:1636,fourhangzhou:12324,fourideographicparen:12835,fourinferior:8324,fourmonospace:65300,fournumeratorbengali:2551,fouroldstyle:63284,fourparen:9335,fourperiod:9355,fourpersian:1780,fourroman:8563,foursuperior:8308,fourteencircle:9325,fourteenparen:9345,fourteenperiod:9365,fourthai:3668,fourthtonechinese:715,fparen:9377,fraction:8260,franc:8355,g:103,gabengali:2455,gacute:501,gadeva:2327,gafarabic:1711,gaffinalarabic:64403,gafinitialarabic:64404,gafmedialarabic:64405,gagujarati:2711,gagurmukhi:2583,gahiragana:12364,gakatakana:12460,gamma:947,gammalatinsmall:611,gammasuperior:736,gangiacoptic:1003,gbopomofo:12557,gbreve:287,gcaron:487,gcedilla:291,gcircle:9430,gcircumflex:285,gcommaaccent:291,gdot:289,gdotaccent:289,gecyrillic:1075,gehiragana:12370,gekatakana:12466,geometricallyequal:8785,gereshaccenthebrew:1436,gereshhebrew:1523,gereshmuqdamhebrew:1437,germandbls:223,gershayimaccenthebrew:1438,gershayimhebrew:1524,getamark:12307,ghabengali:2456,ghadarmenian:1394,ghadeva:2328,ghagujarati:2712,ghagurmukhi:2584,ghainarabic:1594,ghainfinalarabic:65230,
ghaininitialarabic:65231,ghainmedialarabic:65232,ghemiddlehookcyrillic:1173,ghestrokecyrillic:1171,gheupturncyrillic:1169,ghhadeva:2394,ghhagurmukhi:2650,ghook:608,ghzsquare:13203,gihiragana:12366,gikatakana:12462,gimarmenian:1379,gimel:1490,gimeldagesh:64306,gimeldageshhebrew:64306,gimelhebrew:1490,gjecyrillic:1107,glottalinvertedstroke:446,glottalstop:660,glottalstopinverted:662,glottalstopmod:704,glottalstopreversed:661,glottalstopreversedmod:705,glottalstopreversedsuperior:740,glottalstopstroke:673,glottalstopstrokereversed:674,gmacron:7713,gmonospace:65351,gohiragana:12372,gokatakana:12468,gparen:9378,gpasquare:13228,gradient:8711,grave:96,gravebelowcmb:790,gravecmb:768,gravecomb:768,gravedeva:2387,gravelowmod:718,gravemonospace:65344,gravetonecmb:832,greater:62,greaterequal:8805,greaterequalorless:8923,greatermonospace:65310,greaterorequivalent:8819,greaterorless:8823,greateroverequal:8807,greatersmall:65125,gscript:609,gstroke:485,guhiragana:12368,guillemotleft:171,guillemotright:187,guilsinglleft:8249,guilsinglright:8250,gukatakana:12464,guramusquare:13080,gysquare:13257,h:104,haabkhasiancyrillic:1193,haaltonearabic:1729,habengali:2489,hadescendercyrillic:1203,hadeva:2361,hagujarati:2745,hagurmukhi:2617,haharabic:1581,hahfinalarabic:65186,hahinitialarabic:65187,hahiragana:12399,hahmedialarabic:65188,haitusquare:13098,hakatakana:12495,hakatakanahalfwidth:65418,halantgurmukhi:2637,hamzaarabic:1569,hamzalowarabic:1569,hangulfiller:12644,hardsigncyrillic:1098,harpoonleftbarbup:8636,harpoonrightbarbup:8640,hasquare:13258,hatafpatah:1458,hatafpatah16:1458,hatafpatah23:1458,hatafpatah2f:1458,hatafpatahhebrew:1458,hatafpatahnarrowhebrew:1458,hatafpatahquarterhebrew:1458,hatafpatahwidehebrew:1458,hatafqamats:1459,hatafqamats1b:1459,hatafqamats28:1459,hatafqamats34:1459,hatafqamatshebrew:1459,hatafqamatsnarrowhebrew:1459,hatafqamatsquarterhebrew:1459,hatafqamatswidehebrew:1459,hatafsegol:1457,hatafsegol17:1457,hatafsegol24:1457,hatafsegol30:1457,hatafsegolhebrew:1457,hatafsegolnarrowhebrew:1457,hatafsegolquarterhebrew:1457,hatafsegolwidehebrew:1457,hbar:295,hbopomofo:12559,hbrevebelow:7723,hcedilla:7721,hcircle:9431,hcircumflex:293,hdieresis:7719,hdotaccent:7715,hdotbelow:7717,he:1492,heart:9829,heartsuitblack:9829,heartsuitwhite:9825,hedagesh:64308,hedageshhebrew:64308,hehaltonearabic:1729,heharabic:1607,hehebrew:1492,hehfinalaltonearabic:64423,hehfinalalttwoarabic:65258,hehfinalarabic:65258,hehhamzaabovefinalarabic:64421,hehhamzaaboveisolatedarabic:64420,hehinitialaltonearabic:64424,hehinitialarabic:65259,hehiragana:12408,hehmedialaltonearabic:64425,hehmedialarabic:65260,heiseierasquare:13179,hekatakana:12504,hekatakanahalfwidth:65421,hekutaarusquare:13110,henghook:615,herutusquare:13113,het:1495,hethebrew:1495,hhook:614,hhooksuperior:689,hieuhacirclekorean:12923,hieuhaparenkorean:12827,hieuhcirclekorean:12909,hieuhkorean:12622,hieuhparenkorean:12813,hihiragana:12402,hikatakana:12498,hikatakanahalfwidth:65419,hiriq:1460,hiriq14:1460,hiriq21:1460,hiriq2d:1460,hiriqhebrew:1460,hiriqnarrowhebrew:1460,hiriqquarterhebrew:1460,hiriqwidehebrew:1460,hlinebelow:7830,hmonospace:65352,hoarmenian:1392,hohipthai:3627,hohiragana:12411,hokatakana:12507,hokatakanahalfwidth:65422,holam:1465,holam19:1465,holam26:1465,holam32:1465,holamhebrew:1465,holamnarrowhebrew:1465,holamquarterhebrew:1465,holamwidehebrew:1465,honokhukthai:3630,hookabovecomb:777,hookcmb:777,hookpalatalizedbelowcmb:801,hookretroflexbelowcmb:802,hoonsquare:13122,horicoptic:1001,horizontalbar:8213,horncmb:795,hotsprings:9832,house:8962,hparen:9379,hsuperior:688,hturned:613,huhiragana:12405,huiitosquare:13107,hukatakana:12501,hukatakanahalfwidth:65420,hungarumlaut:733,hungarumlautcmb:779,hv:405,hyphen:45,hypheninferior:63205,hyphenmonospace:65293,hyphensmall:65123,hyphensuperior:63206,hyphentwo:8208,i:105,iacute:237,iacyrillic:1103,ibengali:2439,ibopomofo:12583,ibreve:301,icaron:464,icircle:9432,icircumflex:238,icyrillic:1110,idblgrave:521,ideographearthcircle:12943,ideographfirecircle:12939,ideographicallianceparen:12863,ideographiccallparen:12858,ideographiccentrecircle:12965,ideographicclose:12294,ideographiccomma:12289,ideographiccommaleft:65380,ideographiccongratulationparen:12855,ideographiccorrectcircle:12963,ideographicearthparen:12847,ideographicenterpriseparen:12861,ideographicexcellentcircle:12957,ideographicfestivalparen:12864,ideographicfinancialcircle:12950,ideographicfinancialparen:12854,ideographicfireparen:12843,ideographichaveparen:12850,ideographichighcircle:12964,ideographiciterationmark:12293,ideographiclaborcircle:12952,ideographiclaborparen:12856,ideographicleftcircle:12967,ideographiclowcircle:12966,ideographicmedicinecircle:12969,ideographicmetalparen:12846,ideographicmoonparen:12842,ideographicnameparen:12852,ideographicperiod:12290,ideographicprintcircle:12958,ideographicreachparen:12867,ideographicrepresentparen:12857,ideographicresourceparen:12862,ideographicrightcircle:12968,ideographicsecretcircle:12953,ideographicselfparen:12866,ideographicsocietyparen:12851,ideographicspace:12288,ideographicspecialparen:12853,ideographicstockparen:12849,ideographicstudyparen:12859,ideographicsunparen:12848,ideographicsuperviseparen:12860,ideographicwaterparen:12844,ideographicwoodparen:12845,ideographiczero:12295,ideographmetalcircle:12942,ideographmooncircle:12938,ideographnamecircle:12948,ideographsuncircle:12944,ideographwatercircle:12940,ideographwoodcircle:12941,ideva:2311,idieresis:239,idieresisacute:7727,idieresiscyrillic:1253,idotbelow:7883,iebrevecyrillic:1239,iecyrillic:1077,ieungacirclekorean:12917,ieungaparenkorean:12821,ieungcirclekorean:12903,ieungkorean:12615,ieungparenkorean:12807,igrave:236,igujarati:2695,igurmukhi:2567,ihiragana:12356,ihookabove:7881,iibengali:2440,iicyrillic:1080,iideva:2312,iigujarati:2696,iigurmukhi:2568,iimatragurmukhi:2624,iinvertedbreve:523,iishortcyrillic:1081,iivowelsignbengali:2496,iivowelsigndeva:2368,iivowelsigngujarati:2752,ij:307,ikatakana:12452,ikatakanahalfwidth:65394,ikorean:12643,ilde:732,iluyhebrew:1452,imacron:299,imacroncyrillic:1251,imageorapproximatelyequal:8787,imatragurmukhi:2623,imonospace:65353,increment:8710,infinity:8734,iniarmenian:1387,integral:8747,integralbottom:8993,integralbt:8993,integralex:63733,integraltop:8992,integraltp:8992,intersection:8745,intisquare:13061,invbullet:9688,invcircle:9689,invsmileface:9787,iocyrillic:1105,iogonek:303,iota:953,iotadieresis:970,iotadieresistonos:912,iotalatin:617,iotatonos:943,iparen:9380,irigurmukhi:2674,ismallhiragana:12355,ismallkatakana:12451,ismallkatakanahalfwidth:65384,issharbengali:2554,istroke:616,isuperior:63213,iterationhiragana:12445,iterationkatakana:12541,itilde:297,itildebelow:7725,iubopomofo:12585,iucyrillic:1102,ivowelsignbengali:2495,ivowelsigndeva:2367,ivowelsigngujarati:2751,izhitsacyrillic:1141,izhitsadblgravecyrillic:1143,j:106,jaarmenian:1393,jabengali:2460,jadeva:2332,jagujarati:2716,jagurmukhi:2588,jbopomofo:12560,jcaron:496,jcircle:9433,jcircumflex:309,jcrossedtail:669,jdotlessstroke:607,jecyrillic:1112,jeemarabic:1580,jeemfinalarabic:65182,jeeminitialarabic:65183,jeemmedialarabic:65184,jeharabic:1688,jehfinalarabic:64395,jhabengali:2461,jhadeva:2333,jhagujarati:2717,jhagurmukhi:2589,jheharmenian:1403,jis:12292,jmonospace:65354,jparen:9381,jsuperior:690,k:107,kabashkircyrillic:1185,kabengali:2453,kacute:7729,kacyrillic:1082,kadescendercyrillic:1179,kadeva:2325,kaf:1499,kafarabic:1603,kafdagesh:64315,kafdageshhebrew:64315,kaffinalarabic:65242,kafhebrew:1499,kafinitialarabic:65243,kafmedialarabic:65244,kafrafehebrew:64333,kagujarati:2709,kagurmukhi:2581,kahiragana:12363,kahookcyrillic:1220,kakatakana:12459,kakatakanahalfwidth:65398,kappa:954,kappasymbolgreek:1008,kapyeounmieumkorean:12657,kapyeounphieuphkorean:12676,kapyeounpieupkorean:12664,kapyeounssangpieupkorean:12665,karoriisquare:13069,kashidaautoarabic:1600,kashidaautonosidebearingarabic:1600,kasmallkatakana:12533,kasquare:13188,kasraarabic:1616,kasratanarabic:1613,kastrokecyrillic:1183,katahiraprolongmarkhalfwidth:65392,kaverticalstrokecyrillic:1181,kbopomofo:12558,kcalsquare:13193,kcaron:489,kcedilla:311,kcircle:9434,kcommaaccent:311,kdotbelow:7731,keharmenian:1412,kehiragana:12369,kekatakana:12465,kekatakanahalfwidth:65401,kenarmenian:1391,kesmallkatakana:12534,kgreenlandic:312,khabengali:2454,khacyrillic:1093,khadeva:2326,khagujarati:2710,khagurmukhi:2582,khaharabic:1582,khahfinalarabic:65190,khahinitialarabic:65191,khahmedialarabic:65192,kheicoptic:999,khhadeva:2393,khhagurmukhi:2649,khieukhacirclekorean:12920,khieukhaparenkorean:12824,khieukhcirclekorean:12906,khieukhkorean:12619,khieukhparenkorean:12810,khokhaithai:3586,khokhonthai:3589,khokhuatthai:3587,khokhwaithai:3588,khomutthai:3675,khook:409,khorakhangthai:3590,khzsquare:13201,kihiragana:12365,kikatakana:12461,kikatakanahalfwidth:65399,kiroguramusquare:13077,kiromeetorusquare:13078,kirosquare:13076,kiyeokacirclekorean:12910,kiyeokaparenkorean:12814,kiyeokcirclekorean:12896,kiyeokkorean:12593,kiyeokparenkorean:12800,kiyeoksioskorean:12595,kjecyrillic:1116,klinebelow:7733,klsquare:13208,kmcubedsquare:13222,kmonospace:65355,kmsquaredsquare:13218,kohiragana:12371,kohmsquare:13248,kokaithai:3585,kokatakana:12467,kokatakanahalfwidth:65402,kooposquare:13086,koppacyrillic:1153,koreanstandardsymbol:12927,koroniscmb:835,kparen:9382,kpasquare:13226,ksicyrillic:1135,ktsquare:13263,kturned:670,kuhiragana:12367,kukatakana:12463,kukatakanahalfwidth:65400,kvsquare:13240,kwsquare:13246,l:108,labengali:2482,lacute:314,ladeva:2354,lagujarati:2738,lagurmukhi:2610,lakkhangyaothai:3653,lamaleffinalarabic:65276,lamalefhamzaabovefinalarabic:65272,lamalefhamzaaboveisolatedarabic:65271,lamalefhamzabelowfinalarabic:65274,lamalefhamzabelowisolatedarabic:65273,lamalefisolatedarabic:65275,lamalefmaddaabovefinalarabic:65270,lamalefmaddaaboveisolatedarabic:65269,lamarabic:1604,lambda:955,lambdastroke:411,lamed:1500,lameddagesh:64316,lameddageshhebrew:64316,lamedhebrew:1500,lamfinalarabic:65246,lamhahinitialarabic:64714,laminitialarabic:65247,lamjeeminitialarabic:64713,lamkhahinitialarabic:64715,lamlamhehisolatedarabic:65010,lammedialarabic:65248,lammeemhahinitialarabic:64904,lammeeminitialarabic:64716,largecircle:9711,lbar:410,lbelt:620,lbopomofo:12556,lcaron:318,lcedilla:316,lcircle:9435,lcircumflexbelow:7741,lcommaaccent:316,ldot:320,ldotaccent:320,ldotbelow:7735,ldotbelowmacron:7737,leftangleabovecmb:794,lefttackbelowcmb:792,less:60,lessequal:8804,lessequalorgreater:8922,lessmonospace:65308,lessorequivalent:8818,lessorgreater:8822,lessoverequal:8806,lesssmall:65124,lezh:622,lfblock:9612,lhookretroflex:621,lira:8356,liwnarmenian:1388,lj:457,ljecyrillic:1113,ll:63168,lladeva:2355,llagujarati:2739,llinebelow:7739,llladeva:2356,llvocalicbengali:2529,llvocalicdeva:2401,llvocalicvowelsignbengali:2531,llvocalicvowelsigndeva:2403,lmiddletilde:619,lmonospace:65356,lmsquare:13264,lochulathai:3628,logicaland:8743,logicalnot:172,logicalnotreversed:8976,logicalor:8744,lolingthai:3621,longs:383,lowlinecenterline:65102,lowlinecmb:818,lowlinedashed:65101,lozenge:9674,lparen:9383,lslash:322,lsquare:8467,lsuperior:63214,ltshade:9617,luthai:3622,lvocalicbengali:2444,lvocalicdeva:2316,lvocalicvowelsignbengali:2530,lvocalicvowelsigndeva:2402,lxsquare:13267,m:109,mabengali:2478,macron:175,macronbelowcmb:817,macroncmb:772,macronlowmod:717,macronmonospace:65507,macute:7743,madeva:2350,magujarati:2734,magurmukhi:2606,mahapakhhebrew:1444,mahapakhlefthebrew:1444,mahiragana:12414,maichattawalowleftthai:63637,maichattawalowrightthai:63636,maichattawathai:3659,maichattawaupperleftthai:63635,maieklowleftthai:63628,maieklowrightthai:63627,maiekthai:3656,maiekupperleftthai:63626,maihanakatleftthai:63620,maihanakatthai:3633,maitaikhuleftthai:63625,maitaikhuthai:3655,maitholowleftthai:63631,maitholowrightthai:63630,maithothai:3657,maithoupperleftthai:63629,maitrilowleftthai:63634,maitrilowrightthai:63633,maitrithai:3658,maitriupperleftthai:63632,maiyamokthai:3654,makatakana:12510,makatakanahalfwidth:65423,male:9794,mansyonsquare:13127,maqafhebrew:1470,mars:9794,masoracirclehebrew:1455,masquare:13187,mbopomofo:12551,mbsquare:13268,mcircle:9436,mcubedsquare:13221,mdotaccent:7745,mdotbelow:7747,meemarabic:1605,meemfinalarabic:65250,meeminitialarabic:65251,meemmedialarabic:65252,meemmeeminitialarabic:64721,meemmeemisolatedarabic:64584,meetorusquare:13133,mehiragana:12417,meizierasquare:13182,mekatakana:12513,mekatakanahalfwidth:65426,mem:1502,memdagesh:64318,memdageshhebrew:64318,memhebrew:1502,menarmenian:1396,merkhahebrew:1445,merkhakefulahebrew:1446,merkhakefulalefthebrew:1446,merkhalefthebrew:1445,mhook:625,mhzsquare:13202,middledotkatakanahalfwidth:65381,middot:183,mieumacirclekorean:12914,mieumaparenkorean:12818,mieumcirclekorean:12900,mieumkorean:12609,mieumpansioskorean:12656,mieumparenkorean:12804,mieumpieupkorean:12654,mieumsioskorean:12655,mihiragana:12415,mikatakana:12511,mikatakanahalfwidth:65424,minus:8722,minusbelowcmb:800,minuscircle:8854,minusmod:727,minusplus:8723,minute:8242,miribaarusquare:13130,mirisquare:13129,mlonglegturned:624,mlsquare:13206,mmcubedsquare:13219,mmonospace:65357,mmsquaredsquare:13215,mohiragana:12418,mohmsquare:13249,mokatakana:12514,mokatakanahalfwidth:65427,molsquare:13270,momathai:3617,moverssquare:13223,moverssquaredsquare:13224,mparen:9384,mpasquare:13227,mssquare:13235,msuperior:63215,mturned:623,mu:181,mu1:181,muasquare:13186,muchgreater:8811,muchless:8810,mufsquare:13196,mugreek:956,mugsquare:13197,muhiragana:12416,mukatakana:12512,mukatakanahalfwidth:65425,mulsquare:13205,multiply:215,mumsquare:13211,munahhebrew:1443,munahlefthebrew:1443,musicalnote:9834,musicalnotedbl:9835,musicflatsign:9837,musicsharpsign:9839,mussquare:13234,muvsquare:13238,muwsquare:13244,mvmegasquare:13241,mvsquare:13239,mwmegasquare:13247,mwsquare:13245,n:110,nabengali:2472,nabla:8711,nacute:324,nadeva:2344,nagujarati:2728,nagurmukhi:2600,nahiragana:12394,nakatakana:12490,nakatakanahalfwidth:65413,napostrophe:329,nasquare:13185,nbopomofo:12555,nbspace:160,ncaron:328,ncedilla:326,ncircle:9437,ncircumflexbelow:7755,ncommaaccent:326,ndotaccent:7749,ndotbelow:7751,nehiragana:12397,nekatakana:12493,nekatakanahalfwidth:65416,newsheqelsign:8362,nfsquare:13195,ngabengali:2457,ngadeva:2329,ngagujarati:2713,ngagurmukhi:2585,ngonguthai:3591,nhiragana:12435,nhookleft:626,nhookretroflex:627,nieunacirclekorean:12911,nieunaparenkorean:12815,nieuncieuckorean:12597,nieuncirclekorean:12897,nieunhieuhkorean:12598,nieunkorean:12596,nieunpansioskorean:12648,nieunparenkorean:12801,nieunsioskorean:12647,nieuntikeutkorean:12646,nihiragana:12395,nikatakana:12491,nikatakanahalfwidth:65414,nikhahitleftthai:63641,nikhahitthai:3661,nine:57,ninearabic:1641,ninebengali:2543,ninecircle:9320,ninecircleinversesansserif:10130,ninedeva:2415,ninegujarati:2799,ninegurmukhi:2671,ninehackarabic:1641,ninehangzhou:12329,nineideographicparen:12840,nineinferior:8329,ninemonospace:65305,nineoldstyle:63289,nineparen:9340,nineperiod:9360,ninepersian:1785,nineroman:8568,ninesuperior:8313,nineteencircle:9330,nineteenparen:9350,nineteenperiod:9370,ninethai:3673,nj:460,njecyrillic:1114,nkatakana:12531,nkatakanahalfwidth:65437,nlegrightlong:414,nlinebelow:7753,nmonospace:65358,nmsquare:13210,nnabengali:2467,nnadeva:2339,nnagujarati:2723,nnagurmukhi:2595,nnnadeva:2345,nohiragana:12398,nokatakana:12494,nokatakanahalfwidth:65417,nonbreakingspace:160,nonenthai:3603,nonuthai:3609,noonarabic:1606,noonfinalarabic:65254,noonghunnaarabic:1722,noonghunnafinalarabic:64415,nooninitialarabic:65255,noonjeeminitialarabic:64722,noonjeemisolatedarabic:64587,noonmedialarabic:65256,noonmeeminitialarabic:64725,noonmeemisolatedarabic:64590,noonnoonfinalarabic:64653,notcontains:8716,notelement:8713,notelementof:8713,notequal:8800,notgreater:8815,notgreaternorequal:8817,notgreaternorless:8825,notidentical:8802,notless:8814,notlessnorequal:8816,notparallel:8742,notprecedes:8832,notsubset:8836,notsucceeds:8833,notsuperset:8837,nowarmenian:1398,nparen:9385,nssquare:13233,nsuperior:8319,ntilde:241,nu:957,nuhiragana:12396,nukatakana:12492,nukatakanahalfwidth:65415,nuktabengali:2492,nuktadeva:2364,nuktagujarati:2748,nuktagurmukhi:2620,numbersign:35,numbersignmonospace:65283,numbersignsmall:65119,numeralsigngreek:884,numeralsignlowergreek:885,numero:8470,nun:1504,nundagesh:64320,nundageshhebrew:64320,nunhebrew:1504,nvsquare:13237,nwsquare:13243,nyabengali:2462,nyadeva:2334,nyagujarati:2718,nyagurmukhi:2590,o:111,oacute:243,oangthai:3629,obarred:629,obarredcyrillic:1257,obarreddieresiscyrillic:1259,obengali:2451,obopomofo:12571,obreve:335,ocandradeva:2321,ocandragujarati:2705,ocandravowelsigndeva:2377,ocandravowelsigngujarati:2761,ocaron:466,ocircle:9438,ocircumflex:244,ocircumflexacute:7889,ocircumflexdotbelow:7897,ocircumflexgrave:7891,ocircumflexhookabove:7893,ocircumflextilde:7895,ocyrillic:1086,odblacute:337,odblgrave:525,odeva:2323,odieresis:246,odieresiscyrillic:1255,odotbelow:7885,oe:339,oekorean:12634,ogonek:731,ogonekcmb:808,ograve:242,ogujarati:2707,oharmenian:1413,ohiragana:12362,ohookabove:7887,ohorn:417,ohornacute:7899,ohorndotbelow:7907,ohorngrave:7901,ohornhookabove:7903,ohorntilde:7905,ohungarumlaut:337,oi:419,oinvertedbreve:527,okatakana:12458,okatakanahalfwidth:65397,okorean:12631,olehebrew:1451,omacron:333,omacronacute:7763,omacrongrave:7761,omdeva:2384,omega:969,omega1:982,omegacyrillic:1121,omegalatinclosed:631,omegaroundcyrillic:1147,omegatitlocyrillic:1149,omegatonos:974,omgujarati:2768,omicron:959,omicrontonos:972,omonospace:65359,one:49,onearabic:1633,onebengali:2535,onecircle:9312,onecircleinversesansserif:10122,onedeva:2407,onedotenleader:8228,oneeighth:8539,onefitted:63196,onegujarati:2791,onegurmukhi:2663,onehackarabic:1633,onehalf:189,onehangzhou:12321,oneideographicparen:12832,oneinferior:8321,onemonospace:65297,onenumeratorbengali:2548,oneoldstyle:63281,oneparen:9332,oneperiod:9352,onepersian:1777,onequarter:188,oneroman:8560,onesuperior:185,onethai:3665,onethird:8531,oogonek:491,oogonekmacron:493,oogurmukhi:2579,oomatragurmukhi:2635,oopen:596,oparen:9386,openbullet:9702,option:8997,ordfeminine:170,ordmasculine:186,orthogonal:8735,oshortdeva:2322,oshortvowelsigndeva:2378,oslash:248,oslashacute:511,osmallhiragana:12361,osmallkatakana:12457,osmallkatakanahalfwidth:65387,ostrokeacute:511,osuperior:63216,otcyrillic:1151,otilde:245,otildeacute:7757,otildedieresis:7759,oubopomofo:12577,overline:8254,overlinecenterline:65098,overlinecmb:773,overlinedashed:65097,overlinedblwavy:65100,overlinewavy:65099,overscore:175,ovowelsignbengali:2507,ovowelsigndeva:2379,ovowelsigngujarati:2763,p:112,paampssquare:13184,paasentosquare:13099,pabengali:2474,pacute:7765,padeva:2346,pagedown:8671,pageup:8670,pagujarati:2730,pagurmukhi:2602,pahiragana:12401,paiyannoithai:3631,pakatakana:12497,palatalizationcyrilliccmb:1156,palochkacyrillic:1216,pansioskorean:12671,paragraph:182,parallel:8741,parenleft:40,parenleftaltonearabic:64830,parenleftbt:63725,parenleftex:63724,parenleftinferior:8333,parenleftmonospace:65288,parenleftsmall:65113,parenleftsuperior:8317,parenlefttp:63723,parenleftvertical:65077,parenright:41,parenrightaltonearabic:64831,parenrightbt:63736,parenrightex:63735,parenrightinferior:8334,parenrightmonospace:65289,parenrightsmall:65114,parenrightsuperior:8318,parenrighttp:63734,parenrightvertical:65078,partialdiff:8706,paseqhebrew:1472,pashtahebrew:1433,pasquare:13225,patah:1463,patah11:1463,patah1d:1463,patah2a:1463,patahhebrew:1463,patahnarrowhebrew:1463,patahquarterhebrew:1463,patahwidehebrew:1463,pazerhebrew:1441,pbopomofo:12550,pcircle:9439,pdotaccent:7767,pe:1508,pecyrillic:1087,pedagesh:64324,pedageshhebrew:64324,peezisquare:13115,pefinaldageshhebrew:64323,peharabic:1662,peharmenian:1402,pehebrew:1508,pehfinalarabic:64343,pehinitialarabic:64344,pehiragana:12410,pehmedialarabic:64345,pekatakana:12506,pemiddlehookcyrillic:1191,perafehebrew:64334,percent:37,percentarabic:1642,percentmonospace:65285,percentsmall:65130,period:46,periodarmenian:1417,periodcentered:183,periodhalfwidth:65377,periodinferior:63207,periodmonospace:65294,periodsmall:65106,periodsuperior:63208,perispomenigreekcmb:834,perpendicular:8869,perthousand:8240,peseta:8359,pfsquare:13194,phabengali:2475,phadeva:2347,phagujarati:2731,phagurmukhi:2603,phi:966,phi1:981,phieuphacirclekorean:12922,phieuphaparenkorean:12826,phieuphcirclekorean:12908,phieuphkorean:12621,phieuphparenkorean:12812,philatin:632,phinthuthai:3642,phisymbolgreek:981,phook:421,phophanthai:3614,phophungthai:3612,phosamphaothai:3616,pi:960,pieupacirclekorean:12915,pieupaparenkorean:12819,pieupcieuckorean:12662,pieupcirclekorean:12901,pieupkiyeokkorean:12658,pieupkorean:12610,pieupparenkorean:12805,pieupsioskiyeokkorean:12660,pieupsioskorean:12612,pieupsiostikeutkorean:12661,pieupthieuthkorean:12663,pieuptikeutkorean:12659,pihiragana:12404,pikatakana:12500,pisymbolgreek:982,piwrarmenian:1411,plus:43,plusbelowcmb:799,pluscircle:8853,plusminus:177,plusmod:726,plusmonospace:65291,plussmall:65122,plussuperior:8314,pmonospace:65360,pmsquare:13272,pohiragana:12413,pointingindexdownwhite:9759,pointingindexleftwhite:9756,pointingindexrightwhite:9758,pointingindexupwhite:9757,pokatakana:12509,poplathai:3611,postalmark:12306,postalmarkface:12320,pparen:9387,precedes:8826,prescription:8478,primemod:697,primereversed:8245,product:8719,projective:8965,prolongedkana:12540,propellor:8984,propersubset:8834,propersuperset:8835,proportion:8759,proportional:8733,psi:968,psicyrillic:1137,psilipneumatacyrilliccmb:1158,pssquare:13232,puhiragana:12407,pukatakana:12503,pvsquare:13236,pwsquare:13242,q:113,qadeva:2392,qadmahebrew:1448,qafarabic:1602,qaffinalarabic:65238,qafinitialarabic:65239,qafmedialarabic:65240,qamats:1464,qamats10:1464,qamats1a:1464,qamats1c:1464,qamats27:1464,qamats29:1464,qamats33:1464,qamatsde:1464,qamatshebrew:1464,qamatsnarrowhebrew:1464,qamatsqatanhebrew:1464,qamatsqatannarrowhebrew:1464,qamatsqatanquarterhebrew:1464,qamatsqatanwidehebrew:1464,qamatsquarterhebrew:1464,qamatswidehebrew:1464,qarneyparahebrew:1439,qbopomofo:12561,qcircle:9440,qhook:672,qmonospace:65361,qof:1511,qofdagesh:64327,qofdageshhebrew:64327,qofhebrew:1511,qparen:9388,quarternote:9833,qubuts:1467,qubuts18:1467,qubuts25:1467,qubuts31:1467,qubutshebrew:1467,qubutsnarrowhebrew:1467,qubutsquarterhebrew:1467,qubutswidehebrew:1467,question:63,questionarabic:1567,questionarmenian:1374,questiondown:191,questiondownsmall:63423,questiongreek:894,questionmonospace:65311,questionsmall:63295,quotedbl:34,quotedblbase:8222,quotedblleft:8220,quotedblmonospace:65282,quotedblprime:12318,quotedblprimereversed:12317,quotedblright:8221,quoteleft:8216,quoteleftreversed:8219,quotereversed:8219,quoteright:8217,quoterightn:329,quotesinglbase:8218,quotesingle:39,quotesinglemonospace:65287,r:114,raarmenian:1404,rabengali:2480,racute:341,radeva:2352,radical:8730,radicalex:63717,radoverssquare:13230,radoverssquaredsquare:13231,radsquare:13229,rafe:1471,rafehebrew:1471,ragujarati:2736,ragurmukhi:2608,rahiragana:12425,rakatakana:12521,rakatakanahalfwidth:65431,ralowerdiagonalbengali:2545,ramiddlediagonalbengali:2544,ramshorn:612,ratio:8758,rbopomofo:12566,rcaron:345,rcedilla:343,rcircle:9441,rcommaaccent:343,rdblgrave:529,rdotaccent:7769,rdotbelow:7771,rdotbelowmacron:7773,referencemark:8251,reflexsubset:8838,reflexsuperset:8839,registered:174,registersans:63720,registerserif:63194,reharabic:1585,reharmenian:1408,rehfinalarabic:65198,rehiragana:12428,rekatakana:12524,rekatakanahalfwidth:65434,resh:1512,reshdageshhebrew:64328,reshhebrew:1512,reversedtilde:8765,reviahebrew:1431,reviamugrashhebrew:1431,revlogicalnot:8976,rfishhook:638,rfishhookreversed:639,rhabengali:2525,rhadeva:2397,rho:961,rhook:637,rhookturned:635,rhookturnedsuperior:693,rhosymbolgreek:1009,rhotichookmod:734,rieulacirclekorean:12913,rieulaparenkorean:12817,rieulcirclekorean:12899,rieulhieuhkorean:12608,rieulkiyeokkorean:12602,rieulkiyeoksioskorean:12649,rieulkorean:12601,rieulmieumkorean:12603,rieulpansioskorean:12652,rieulparenkorean:12803,rieulphieuphkorean:12607,rieulpieupkorean:12604,rieulpieupsioskorean:12651,rieulsioskorean:12605,rieulthieuthkorean:12606,rieultikeutkorean:12650,rieulyeorinhieuhkorean:12653,rightangle:8735,righttackbelowcmb:793,righttriangle:8895,rihiragana:12426,rikatakana:12522,rikatakanahalfwidth:65432,ring:730,ringbelowcmb:805,ringcmb:778,ringhalfleft:703,ringhalfleftarmenian:1369,ringhalfleftbelowcmb:796,ringhalfleftcentered:723,ringhalfright:702,ringhalfrightbelowcmb:825,ringhalfrightcentered:722,rinvertedbreve:531,rittorusquare:13137,rlinebelow:7775,rlongleg:636,rlonglegturned:634,rmonospace:65362,rohiragana:12429,rokatakana:12525,rokatakanahalfwidth:65435,roruathai:3619,rparen:9389,rrabengali:2524,rradeva:2353,rragurmukhi:2652,rreharabic:1681,rrehfinalarabic:64397,rrvocalicbengali:2528,rrvocalicdeva:2400,rrvocalicgujarati:2784,rrvocalicvowelsignbengali:2500,rrvocalicvowelsigndeva:2372,rrvocalicvowelsigngujarati:2756,rsuperior:63217,rtblock:9616,rturned:633,rturnedsuperior:692,ruhiragana:12427,rukatakana:12523,rukatakanahalfwidth:65433,rupeemarkbengali:2546,rupeesignbengali:2547,rupiah:63197,ruthai:3620,rvocalicbengali:2443,rvocalicdeva:2315,rvocalicgujarati:2699,rvocalicvowelsignbengali:2499,rvocalicvowelsigndeva:2371,rvocalicvowelsigngujarati:2755,s:115,sabengali:2488,sacute:347,sacutedotaccent:7781,sadarabic:1589,sadeva:2360,sadfinalarabic:65210,sadinitialarabic:65211,sadmedialarabic:65212,sagujarati:2744,sagurmukhi:2616,sahiragana:12373,sakatakana:12469,sakatakanahalfwidth:65403,sallallahoualayhewasallamarabic:65018,samekh:1505,samekhdagesh:64321,samekhdageshhebrew:64321,samekhhebrew:1505,saraaathai:3634,saraaethai:3649,saraaimaimalaithai:3652,saraaimaimuanthai:3651,saraamthai:3635,saraathai:3632,saraethai:3648,saraiileftthai:63622,saraiithai:3637,saraileftthai:63621,saraithai:3636,saraothai:3650,saraueeleftthai:63624,saraueethai:3639,saraueleftthai:63623,sarauethai:3638,sarauthai:3640,sarauuthai:3641,sbopomofo:12569,scaron:353,scarondotaccent:7783,scedilla:351,schwa:601,schwacyrillic:1241,schwadieresiscyrillic:1243,schwahook:602,scircle:9442,scircumflex:349,scommaaccent:537,sdotaccent:7777,sdotbelow:7779,sdotbelowdotaccent:7785,seagullbelowcmb:828,second:8243,secondtonechinese:714,section:167,seenarabic:1587,seenfinalarabic:65202,seeninitialarabic:65203,seenmedialarabic:65204,segol:1462,segol13:1462,segol1f:1462,segol2c:1462,segolhebrew:1462,segolnarrowhebrew:1462,segolquarterhebrew:1462,segoltahebrew:1426,segolwidehebrew:1462,seharmenian:1405,sehiragana:12379,sekatakana:12475,sekatakanahalfwidth:65406,semicolon:59,semicolonarabic:1563,semicolonmonospace:65307,semicolonsmall:65108,semivoicedmarkkana:12444,semivoicedmarkkanahalfwidth:65439,sentisquare:13090,sentosquare:13091,seven:55,sevenarabic:1639,sevenbengali:2541,sevencircle:9318,sevencircleinversesansserif:10128,sevendeva:2413,seveneighths:8542,sevengujarati:2797,sevengurmukhi:2669,sevenhackarabic:1639,sevenhangzhou:12327,sevenideographicparen:12838,seveninferior:8327,sevenmonospace:65303,sevenoldstyle:63287,sevenparen:9338,sevenperiod:9358,sevenpersian:1783,sevenroman:8566,sevensuperior:8311,seventeencircle:9328,seventeenparen:9348,seventeenperiod:9368,seventhai:3671,sfthyphen:173,shaarmenian:1399,shabengali:2486,shacyrillic:1096,shaddaarabic:1617,shaddadammaarabic:64609,shaddadammatanarabic:64606,shaddafathaarabic:64608,shaddakasraarabic:64610,shaddakasratanarabic:64607,shade:9618,shadedark:9619,shadelight:9617,shademedium:9618,shadeva:2358,shagujarati:2742,shagurmukhi:2614,shalshelethebrew:1427,shbopomofo:12565,shchacyrillic:1097,sheenarabic:1588,sheenfinalarabic:65206,sheeninitialarabic:65207,sheenmedialarabic:65208,sheicoptic:995,sheqel:8362,sheqelhebrew:8362,sheva:1456,sheva115:1456,sheva15:1456,sheva22:1456,sheva2e:1456,shevahebrew:1456,shevanarrowhebrew:1456,shevaquarterhebrew:1456,shevawidehebrew:1456,shhacyrillic:1211,shimacoptic:1005,shin:1513,shindagesh:64329,shindageshhebrew:64329,shindageshshindot:64300,shindageshshindothebrew:64300,shindageshsindot:64301,shindageshsindothebrew:64301,shindothebrew:1473,shinhebrew:1513,shinshindot:64298,shinshindothebrew:64298,shinsindot:64299,shinsindothebrew:64299,shook:642,sigma:963,sigma1:962,sigmafinal:962,sigmalunatesymbolgreek:1010,sihiragana:12375,sikatakana:12471,sikatakanahalfwidth:65404,siluqhebrew:1469,siluqlefthebrew:1469,similar:8764,sindothebrew:1474,siosacirclekorean:12916,siosaparenkorean:12820,sioscieuckorean:12670,sioscirclekorean:12902,sioskiyeokkorean:12666,sioskorean:12613,siosnieunkorean:12667,siosparenkorean:12806,siospieupkorean:12669,siostikeutkorean:12668,six:54,sixarabic:1638,sixbengali:2540,sixcircle:9317,sixcircleinversesansserif:10127,sixdeva:2412,sixgujarati:2796,sixgurmukhi:2668,sixhackarabic:1638,sixhangzhou:12326,sixideographicparen:12837,sixinferior:8326,sixmonospace:65302,sixoldstyle:63286,sixparen:9337,sixperiod:9357,sixpersian:1782,sixroman:8565,sixsuperior:8310,sixteencircle:9327,sixteencurrencydenominatorbengali:2553,sixteenparen:9347,sixteenperiod:9367,sixthai:3670,slash:47,slashmonospace:65295,slong:383,slongdotaccent:7835,smileface:9786,smonospace:65363,sofpasuqhebrew:1475,softhyphen:173,softsigncyrillic:1100,sohiragana:12381,sokatakana:12477,sokatakanahalfwidth:65407,soliduslongoverlaycmb:824,solidusshortoverlaycmb:823,sorusithai:3625,sosalathai:3624,sosothai:3595,sosuathai:3626,space:32,spacehackarabic:32,spade:9824,spadesuitblack:9824,spadesuitwhite:9828,sparen:9390,squarebelowcmb:827,squarecc:13252,squarecm:13213,squarediagonalcrosshatchfill:9641,squarehorizontalfill:9636,squarekg:13199,squarekm:13214,squarekmcapital:13262,squareln:13265,squarelog:13266,squaremg:13198,squaremil:13269,squaremm:13212,squaremsquared:13217,squareorthogonalcrosshatchfill:9638,squareupperlefttolowerrightfill:9639,squareupperrighttolowerleftfill:9640,squareverticalfill:9637,squarewhitewithsmallblack:9635,srsquare:13275,ssabengali:2487,ssadeva:2359,ssagujarati:2743,ssangcieuckorean:12617,ssanghieuhkorean:12677,ssangieungkorean:12672,ssangkiyeokkorean:12594,ssangnieunkorean:12645,ssangpieupkorean:12611,ssangsioskorean:12614,ssangtikeutkorean:12600,ssuperior:63218,sterling:163,sterlingmonospace:65505,strokelongoverlaycmb:822,strokeshortoverlaycmb:821,subset:8834,subsetnotequal:8842,subsetorequal:8838,succeeds:8827,suchthat:8715,suhiragana:12377,sukatakana:12473,sukatakanahalfwidth:65405,sukunarabic:1618,summation:8721,sun:9788,superset:8835,supersetnotequal:8843,supersetorequal:8839,svsquare:13276,syouwaerasquare:13180,t:116,tabengali:2468,tackdown:8868,tackleft:8867,tadeva:2340,tagujarati:2724,tagurmukhi:2596,taharabic:1591,tahfinalarabic:65218,tahinitialarabic:65219,tahiragana:12383,tahmedialarabic:65220,taisyouerasquare:13181,takatakana:12479,takatakanahalfwidth:65408,tatweelarabic:1600,tau:964,tav:1514,tavdages:64330,tavdagesh:64330,tavdageshhebrew:64330,tavhebrew:1514,tbar:359,tbopomofo:12554,tcaron:357,tccurl:680,tcedilla:355,tcheharabic:1670,tchehfinalarabic:64379,tchehinitialarabic:64380,tchehmedialarabic:64381,tcircle:9443,tcircumflexbelow:7793,tcommaaccent:355,tdieresis:7831,tdotaccent:7787,tdotbelow:7789,tecyrillic:1090,tedescendercyrillic:1197,teharabic:1578,tehfinalarabic:65174,tehhahinitialarabic:64674,tehhahisolatedarabic:64524,tehinitialarabic:65175,tehiragana:12390,tehjeeminitialarabic:64673,tehjeemisolatedarabic:64523,tehmarbutaarabic:1577,tehmarbutafinalarabic:65172,tehmedialarabic:65176,tehmeeminitialarabic:64676,tehmeemisolatedarabic:64526,tehnoonfinalarabic:64627,tekatakana:12486,tekatakanahalfwidth:65411,telephone:8481,telephoneblack:9742,telishagedolahebrew:1440,telishaqetanahebrew:1449,tencircle:9321,tenideographicparen:12841,tenparen:9341,tenperiod:9361,tenroman:8569,tesh:679,tet:1496,tetdagesh:64312,tetdageshhebrew:64312,tethebrew:1496,tetsecyrillic:1205,tevirhebrew:1435,tevirlefthebrew:1435,thabengali:2469,thadeva:2341,thagujarati:2725,thagurmukhi:2597,thalarabic:1584,thalfinalarabic:65196,thanthakhatlowleftthai:63640,thanthakhatlowrightthai:63639,thanthakhatthai:3660,thanthakhatupperleftthai:63638,theharabic:1579,thehfinalarabic:65178,thehinitialarabic:65179,
thehmedialarabic:65180,thereexists:8707,therefore:8756,theta:952,theta1:977,thetasymbolgreek:977,thieuthacirclekorean:12921,thieuthaparenkorean:12825,thieuthcirclekorean:12907,thieuthkorean:12620,thieuthparenkorean:12811,thirteencircle:9324,thirteenparen:9344,thirteenperiod:9364,thonangmonthothai:3601,thook:429,thophuthaothai:3602,thorn:254,thothahanthai:3607,thothanthai:3600,thothongthai:3608,thothungthai:3606,thousandcyrillic:1154,thousandsseparatorarabic:1644,thousandsseparatorpersian:1644,three:51,threearabic:1635,threebengali:2537,threecircle:9314,threecircleinversesansserif:10124,threedeva:2409,threeeighths:8540,threegujarati:2793,threegurmukhi:2665,threehackarabic:1635,threehangzhou:12323,threeideographicparen:12834,threeinferior:8323,threemonospace:65299,threenumeratorbengali:2550,threeoldstyle:63283,threeparen:9334,threeperiod:9354,threepersian:1779,threequarters:190,threequartersemdash:63198,threeroman:8562,threesuperior:179,threethai:3667,thzsquare:13204,tihiragana:12385,tikatakana:12481,tikatakanahalfwidth:65409,tikeutacirclekorean:12912,tikeutaparenkorean:12816,tikeutcirclekorean:12898,tikeutkorean:12599,tikeutparenkorean:12802,tilde:732,tildebelowcmb:816,tildecmb:771,tildecomb:771,tildedoublecmb:864,tildeoperator:8764,tildeoverlaycmb:820,tildeverticalcmb:830,timescircle:8855,tipehahebrew:1430,tipehalefthebrew:1430,tippigurmukhi:2672,titlocyrilliccmb:1155,tiwnarmenian:1407,tlinebelow:7791,tmonospace:65364,toarmenian:1385,tohiragana:12392,tokatakana:12488,tokatakanahalfwidth:65412,tonebarextrahighmod:741,tonebarextralowmod:745,tonebarhighmod:742,tonebarlowmod:744,tonebarmidmod:743,tonefive:445,tonesix:389,tonetwo:424,tonos:900,tonsquare:13095,topatakthai:3599,tortoiseshellbracketleft:12308,tortoiseshellbracketleftsmall:65117,tortoiseshellbracketleftvertical:65081,tortoiseshellbracketright:12309,tortoiseshellbracketrightsmall:65118,tortoiseshellbracketrightvertical:65082,totaothai:3605,tpalatalhook:427,tparen:9391,trademark:8482,trademarksans:63722,trademarkserif:63195,tretroflexhook:648,triagdn:9660,triaglf:9668,triagrt:9658,triagup:9650,ts:678,tsadi:1510,tsadidagesh:64326,tsadidageshhebrew:64326,tsadihebrew:1510,tsecyrillic:1094,tsere:1461,tsere12:1461,tsere1e:1461,tsere2b:1461,tserehebrew:1461,tserenarrowhebrew:1461,tserequarterhebrew:1461,tserewidehebrew:1461,tshecyrillic:1115,tsuperior:63219,ttabengali:2463,ttadeva:2335,ttagujarati:2719,ttagurmukhi:2591,tteharabic:1657,ttehfinalarabic:64359,ttehinitialarabic:64360,ttehmedialarabic:64361,tthabengali:2464,tthadeva:2336,tthagujarati:2720,tthagurmukhi:2592,tturned:647,tuhiragana:12388,tukatakana:12484,tukatakanahalfwidth:65410,tusmallhiragana:12387,tusmallkatakana:12483,tusmallkatakanahalfwidth:65391,twelvecircle:9323,twelveparen:9343,twelveperiod:9363,twelveroman:8571,twentycircle:9331,twentyhangzhou:21316,twentyparen:9351,twentyperiod:9371,two:50,twoarabic:1634,twobengali:2536,twocircle:9313,twocircleinversesansserif:10123,twodeva:2408,twodotenleader:8229,twodotleader:8229,twodotleadervertical:65072,twogujarati:2792,twogurmukhi:2664,twohackarabic:1634,twohangzhou:12322,twoideographicparen:12833,twoinferior:8322,twomonospace:65298,twonumeratorbengali:2549,twooldstyle:63282,twoparen:9333,twoperiod:9353,twopersian:1778,tworoman:8561,twostroke:443,twosuperior:178,twothai:3666,twothirds:8532,u:117,uacute:250,ubar:649,ubengali:2441,ubopomofo:12584,ubreve:365,ucaron:468,ucircle:9444,ucircumflex:251,ucircumflexbelow:7799,ucyrillic:1091,udattadeva:2385,udblacute:369,udblgrave:533,udeva:2313,udieresis:252,udieresisacute:472,udieresisbelow:7795,udieresiscaron:474,udieresiscyrillic:1265,udieresisgrave:476,udieresismacron:470,udotbelow:7909,ugrave:249,ugujarati:2697,ugurmukhi:2569,uhiragana:12358,uhookabove:7911,uhorn:432,uhornacute:7913,uhorndotbelow:7921,uhorngrave:7915,uhornhookabove:7917,uhorntilde:7919,uhungarumlaut:369,uhungarumlautcyrillic:1267,uinvertedbreve:535,ukatakana:12454,ukatakanahalfwidth:65395,ukcyrillic:1145,ukorean:12636,umacron:363,umacroncyrillic:1263,umacrondieresis:7803,umatragurmukhi:2625,umonospace:65365,underscore:95,underscoredbl:8215,underscoremonospace:65343,underscorevertical:65075,underscorewavy:65103,union:8746,universal:8704,uogonek:371,uparen:9392,upblock:9600,upperdothebrew:1476,upsilon:965,upsilondieresis:971,upsilondieresistonos:944,upsilonlatin:650,upsilontonos:973,uptackbelowcmb:797,uptackmod:724,uragurmukhi:2675,uring:367,ushortcyrillic:1118,usmallhiragana:12357,usmallkatakana:12453,usmallkatakanahalfwidth:65385,ustraightcyrillic:1199,ustraightstrokecyrillic:1201,utilde:361,utildeacute:7801,utildebelow:7797,uubengali:2442,uudeva:2314,uugujarati:2698,uugurmukhi:2570,uumatragurmukhi:2626,uuvowelsignbengali:2498,uuvowelsigndeva:2370,uuvowelsigngujarati:2754,uvowelsignbengali:2497,uvowelsigndeva:2369,uvowelsigngujarati:2753,v:118,vadeva:2357,vagujarati:2741,vagurmukhi:2613,vakatakana:12535,vav:1493,vavdagesh:64309,vavdagesh65:64309,vavdageshhebrew:64309,vavhebrew:1493,vavholam:64331,vavholamhebrew:64331,vavvavhebrew:1520,vavyodhebrew:1521,vcircle:9445,vdotbelow:7807,vecyrillic:1074,veharabic:1700,vehfinalarabic:64363,vehinitialarabic:64364,vehmedialarabic:64365,vekatakana:12537,venus:9792,verticalbar:124,verticallineabovecmb:781,verticallinebelowcmb:809,verticallinelowmod:716,verticallinemod:712,vewarmenian:1406,vhook:651,vikatakana:12536,viramabengali:2509,viramadeva:2381,viramagujarati:2765,visargabengali:2435,visargadeva:2307,visargagujarati:2691,vmonospace:65366,voarmenian:1400,voicediterationhiragana:12446,voicediterationkatakana:12542,voicedmarkkana:12443,voicedmarkkanahalfwidth:65438,vokatakana:12538,vparen:9393,vtilde:7805,vturned:652,vuhiragana:12436,vukatakana:12532,w:119,wacute:7811,waekorean:12633,wahiragana:12431,wakatakana:12527,wakatakanahalfwidth:65436,wakorean:12632,wasmallhiragana:12430,wasmallkatakana:12526,wattosquare:13143,wavedash:12316,wavyunderscorevertical:65076,wawarabic:1608,wawfinalarabic:65262,wawhamzaabovearabic:1572,wawhamzaabovefinalarabic:65158,wbsquare:13277,wcircle:9446,wcircumflex:373,wdieresis:7813,wdotaccent:7815,wdotbelow:7817,wehiragana:12433,weierstrass:8472,wekatakana:12529,wekorean:12638,weokorean:12637,wgrave:7809,whitebullet:9702,whitecircle:9675,whitecircleinverse:9689,whitecornerbracketleft:12302,whitecornerbracketleftvertical:65091,whitecornerbracketright:12303,whitecornerbracketrightvertical:65092,whitediamond:9671,whitediamondcontainingblacksmalldiamond:9672,whitedownpointingsmalltriangle:9663,whitedownpointingtriangle:9661,whiteleftpointingsmalltriangle:9667,whiteleftpointingtriangle:9665,whitelenticularbracketleft:12310,whitelenticularbracketright:12311,whiterightpointingsmalltriangle:9657,whiterightpointingtriangle:9655,whitesmallsquare:9643,whitesmilingface:9786,whitesquare:9633,whitestar:9734,whitetelephone:9743,whitetortoiseshellbracketleft:12312,whitetortoiseshellbracketright:12313,whiteuppointingsmalltriangle:9653,whiteuppointingtriangle:9651,wihiragana:12432,wikatakana:12528,wikorean:12639,wmonospace:65367,wohiragana:12434,wokatakana:12530,wokatakanahalfwidth:65382,won:8361,wonmonospace:65510,wowaenthai:3623,wparen:9394,wring:7832,wsuperior:695,wturned:653,wynn:447,x:120,xabovecmb:829,xbopomofo:12562,xcircle:9447,xdieresis:7821,xdotaccent:7819,xeharmenian:1389,xi:958,xmonospace:65368,xparen:9395,xsuperior:739,y:121,yaadosquare:13134,yabengali:2479,yacute:253,yadeva:2351,yaekorean:12626,yagujarati:2735,yagurmukhi:2607,yahiragana:12420,yakatakana:12516,yakatakanahalfwidth:65428,yakorean:12625,yamakkanthai:3662,yasmallhiragana:12419,yasmallkatakana:12515,yasmallkatakanahalfwidth:65388,yatcyrillic:1123,ycircle:9448,ycircumflex:375,ydieresis:255,ydotaccent:7823,ydotbelow:7925,yeharabic:1610,yehbarreearabic:1746,yehbarreefinalarabic:64431,yehfinalarabic:65266,yehhamzaabovearabic:1574,yehhamzaabovefinalarabic:65162,yehhamzaaboveinitialarabic:65163,yehhamzaabovemedialarabic:65164,yehinitialarabic:65267,yehmedialarabic:65268,yehmeeminitialarabic:64733,yehmeemisolatedarabic:64600,yehnoonfinalarabic:64660,yehthreedotsbelowarabic:1745,yekorean:12630,yen:165,yenmonospace:65509,yeokorean:12629,yeorinhieuhkorean:12678,yerahbenyomohebrew:1450,yerahbenyomolefthebrew:1450,yericyrillic:1099,yerudieresiscyrillic:1273,yesieungkorean:12673,yesieungpansioskorean:12675,yesieungsioskorean:12674,yetivhebrew:1434,ygrave:7923,yhook:436,yhookabove:7927,yiarmenian:1397,yicyrillic:1111,yikorean:12642,yinyang:9775,yiwnarmenian:1410,ymonospace:65369,yod:1497,yoddagesh:64313,yoddageshhebrew:64313,yodhebrew:1497,yodyodhebrew:1522,yodyodpatahhebrew:64287,yohiragana:12424,yoikorean:12681,yokatakana:12520,yokatakanahalfwidth:65430,yokorean:12635,yosmallhiragana:12423,yosmallkatakana:12519,yosmallkatakanahalfwidth:65390,yotgreek:1011,yoyaekorean:12680,yoyakorean:12679,yoyakthai:3618,yoyingthai:3597,yparen:9396,ypogegrammeni:890,ypogegrammenigreekcmb:837,yr:422,yring:7833,ysuperior:696,ytilde:7929,yturned:654,yuhiragana:12422,yuikorean:12684,yukatakana:12518,yukatakanahalfwidth:65429,yukorean:12640,yusbigcyrillic:1131,yusbigiotifiedcyrillic:1133,yuslittlecyrillic:1127,yuslittleiotifiedcyrillic:1129,yusmallhiragana:12421,yusmallkatakana:12517,yusmallkatakanahalfwidth:65389,yuyekorean:12683,yuyeokorean:12682,yyabengali:2527,yyadeva:2399,z:122,zaarmenian:1382,zacute:378,zadeva:2395,zagurmukhi:2651,zaharabic:1592,zahfinalarabic:65222,zahinitialarabic:65223,zahiragana:12374,zahmedialarabic:65224,zainarabic:1586,zainfinalarabic:65200,zakatakana:12470,zaqefgadolhebrew:1429,zaqefqatanhebrew:1428,zarqahebrew:1432,zayin:1494,zayindagesh:64310,zayindageshhebrew:64310,zayinhebrew:1494,zbopomofo:12567,zcaron:382,zcircle:9449,zcircumflex:7825,zcurl:657,zdot:380,zdotaccent:380,zdotbelow:7827,zecyrillic:1079,zedescendercyrillic:1177,zedieresiscyrillic:1247,zehiragana:12380,zekatakana:12476,zero:48,zeroarabic:1632,zerobengali:2534,zerodeva:2406,zerogujarati:2790,zerogurmukhi:2662,zerohackarabic:1632,zeroinferior:8320,zeromonospace:65296,zerooldstyle:63280,zeropersian:1776,zerosuperior:8304,zerothai:3664,zerowidthjoiner:65279,zerowidthnonjoiner:8204,zerowidthspace:8203,zeta:950,zhbopomofo:12563,zhearmenian:1386,zhebrevecyrillic:1218,zhecyrillic:1078,zhedescendercyrillic:1175,zhedieresiscyrillic:1245,zihiragana:12376,zikatakana:12472,zinorhebrew:1454,zlinebelow:7829,zmonospace:65370,zohiragana:12382,zokatakana:12478,zparen:9397,zretroflexhook:656,zstroke:438,zuhiragana:12378,zukatakana:12474,".notdef":0},Ba={space:32,a1:9985,a2:9986,a202:9987,a3:9988,a4:9742,a5:9990,a119:9991,a118:9992,a117:9993,a11:9755,a12:9758,a13:9996,a14:9997,a15:9998,a16:9999,a105:1e4,a17:10001,a18:10002,a19:10003,a20:10004,a21:10005,a22:10006,a23:10007,a24:10008,a25:10009,a26:10010,a27:10011,a28:10012,a6:10013,a7:10014,a8:10015,a9:10016,a10:10017,a29:10018,a30:10019,a31:10020,a32:10021,a33:10022,a34:10023,a35:9733,a36:10025,a37:10026,a38:10027,a39:10028,a40:10029,a41:10030,a42:10031,a43:10032,a44:10033,a45:10034,a46:10035,a47:10036,a48:10037,a49:10038,a50:10039,a51:10040,a52:10041,a53:10042,a54:10043,a55:10044,a56:10045,a57:10046,a58:10047,a59:10048,a60:10049,a61:10050,a62:10051,a63:10052,a64:10053,a65:10054,a66:10055,a67:10056,a68:10057,a69:10058,a70:10059,a71:9679,a72:10061,a73:9632,a74:10063,a203:10064,a75:10065,a204:10066,a76:9650,a77:9660,a78:9670,a79:10070,a81:9687,a82:10072,a83:10073,a84:10074,a97:10075,a98:10076,a99:10077,a100:10078,a101:10081,a102:10082,a103:10083,a104:10084,a106:10085,a107:10086,a108:10087,a112:9827,a111:9830,a110:9829,a109:9824,a120:9312,a121:9313,a122:9314,a123:9315,a124:9316,a125:9317,a126:9318,a127:9319,a128:9320,a129:9321,a130:10102,a131:10103,a132:10104,a133:10105,a134:10106,a135:10107,a136:10108,a137:10109,a138:10110,a139:10111,a140:10112,a141:10113,a142:10114,a143:10115,a144:10116,a145:10117,a146:10118,a147:10119,a148:10120,a149:10121,a150:10122,a151:10123,a152:10124,a153:10125,a154:10126,a155:10127,a156:10128,a157:10129,a158:10130,a159:10131,a160:10132,a161:8594,a163:8596,a164:8597,a196:10136,a165:10137,a192:10138,a166:10139,a167:10140,a168:10141,a169:10142,a170:10143,a171:10144,a172:10145,a173:10146,a162:10147,a174:10148,a175:10149,a176:10150,a177:10151,a178:10152,a179:10153,a193:10154,a180:10155,a199:10156,a181:10157,a200:10158,a182:10159,a201:10161,a183:10162,a184:10163,a197:10164,a185:10165,a194:10166,a198:10167,a186:10168,a195:10169,a187:10170,a188:10171,a189:10172,a190:10173,a191:10174,a89:10088,a90:10089,a93:10090,a94:10091,a91:10092,a92:10093,a205:10094,a85:10095,a206:10096,a86:10097,a87:10098,a88:10099,a95:10100,a96:10101,".notdef":0},Ta=function(){function a(e,t,a,r){if(r instanceof Xa&&r.isNativelyDecodable(t,a)){var i=r.dict,n=i.get("ColorSpace","CS")
n=Ye.parse(n,t,a)
var s=n.numComps,o=e.sendWithPromise("JpegDecode",[r.getIR(),s])
return o.then(function(e){var t=e.data
return new Na(t,0,t.length,r.dict)})}return Promise.resolve(r)}function i(e,t,a,r){return e=t+e*a,0>e?0:e>r?r:e}function s(a,i,n,o,c,l,h){this.image=n
var u=n.dict
if(u.has("Filter")){var f=u.get("Filter").name
if("JPXDecode"===f){var d=new cr
d.parseImageProperties(n.stream),n.stream.reset(),n.bitsPerComponent=d.bitsPerComponent,n.numComps=d.componentsCount}else"JBIG2Decode"===f&&(n.bitsPerComponent=1,n.numComps=1)}this.width=u.get("Width","W"),this.height=u.get("Height","H"),(this.width<1||this.height<1)&&r("Invalid image width: "+this.width+" or height: "+this.height),this.interpolate=u.get("Interpolate","I")||!1,this.imageMask=u.get("ImageMask","IM")||!1,this.matte=u.get("Matte")||!1
var g=n.bitsPerComponent
if(g||(g=u.get("BitsPerComponent","BPC"),g||(this.imageMask?g=1:r("Bits per component missing in image: "+this.imageMask))),this.bpc=g,!this.imageMask){var m=u.get("ColorSpace","CS")
if(!m)switch(e("JPX images (which do not require color spaces)"),n.numComps){case 1:m=Ae.get("DeviceGray")
break
case 3:m=Ae.get("DeviceRGB")
break
case 4:m=Ae.get("DeviceCMYK")
break
default:r("JPX images with "+this.numComps+" color components not supported.")}this.colorSpace=Ye.parse(m,a,i),this.numComps=this.colorSpace.numComps}if(this.decode=u.get("Decode","D"),this.needsDecode=!1,this.decode&&(this.colorSpace&&!this.colorSpace.isDefaultDecode(this.decode)||h&&!Ye.isDefaultDecode(this.decode,1))){this.needsDecode=!0
var p=(1<<g)-1
this.decodeCoefficients=[],this.decodeAddends=[]
for(var b=0,v=0;b<this.decode.length;b+=2,++v){var y=this.decode[b],k=this.decode[b+1]
this.decodeCoefficients[v]=k-y,this.decodeAddends[v]=p*y}}if(c)this.smask=new s(a,i,c,!1)
else if(l)if(R(l)){var w=l.dict,x=w.get("ImageMask","IM")
x?this.mask=new s(a,i,l,!1,null,null,!0):t("Ignoring /Mask in image without /ImageMask.")}else this.mask=l}return s.buildImage=function(e,r,i,n,o){var c,l,h=a(e,r,i,n),u=n.dict.get("SMask"),f=n.dict.get("Mask")
return u?(c=a(e,r,i,u),l=Promise.resolve(null)):(c=Promise.resolve(null),f?R(f)?l=a(e,r,i,f):O(f)?l=Promise.resolve(f):(t("Unsupported mask format."),l=Promise.resolve(null)):l=Promise.resolve(null)),Promise.all([h,c,l]).then(function(e){var t=e[0],a=e[1],n=e[2]
return new s(r,i,t,o,a,n)})},s.resize=function(e,t,a,i,n,s,o,c,l){1!==a&&3!==a&&r("Unsupported component count for resizing.")
var h,u,f,d,g=s*o*a,m=c?c:8>=t?new Uint8Array(g):16>=t?new Uint16Array(g):new Uint32Array(g),p=i/s,b=n/o,v=0,y=new Uint16Array(s),k=i*a
for(1!==l&&(l=0),u=0;s>u;u++)y[u]=Math.floor(u*p)*a
if(1===a)for(h=0;o>h;h++)for(f=Math.floor(h*b)*k,u=0;s>u;u++)d=f+y[u],m[v++]=e[d]
else if(3===a)for(h=0;o>h;h++)for(f=Math.floor(h*b)*k,u=0;s>u;u++)d=f+y[u],m[v++]=e[d++],m[v++]=e[d++],m[v++]=e[d++],v+=l
return m},s.createMask=function(e,t,a,r,i){var n,s,o=(t+7>>3)*a,c=e.byteLength,l=o===c
if(!r||i&&!l)if(i)for(n=new Uint8Array(o),n.set(e),s=c;o>s;s++)n[s]=255
else n=new Uint8Array(c),n.set(e)
else n=e
if(i)for(s=0;c>s;s++)n[s]=~n[s]
return{data:n,width:t,height:a}},s.prototype={get drawWidth(){return Math.max(this.width,this.smask&&this.smask.width||0,this.mask&&this.mask.width||0)},get drawHeight(){return Math.max(this.height,this.smask&&this.smask.height||0,this.mask&&this.mask.height||0)},decodeBuffer:function(e){var t,a,r=this.bpc,n=this.numComps,s=this.decodeAddends,o=this.decodeCoefficients,c=(1<<r)-1
if(1!==r){var l=0
for(t=0,a=this.width*this.height;a>t;t++)for(var h=0;n>h;h++)e[l]=i(e[l],s[h],o[h],c),l++}else for(t=0,a=e.length;a>t;t++)e[t]=+!e[t]},getComponents:function(e){var t=this.bpc
if(8===t)return e
var a,r,i=this.width,n=this.height,s=this.numComps,o=i*n*s,c=0,l=8>=t?new Uint8Array(o):16>=t?new Uint16Array(o):new Uint32Array(o),h=i*s,u=(1<<t)-1,f=0
if(1===t)for(var d,g,m,p=0;n>p;p++){for(g=f+(-8&h),m=f+h;g>f;)r=e[c++],l[f]=r>>7&1,l[f+1]=r>>6&1,l[f+2]=r>>5&1,l[f+3]=r>>4&1,l[f+4]=r>>3&1,l[f+5]=r>>2&1,l[f+6]=r>>1&1,l[f+7]=1&r,f+=8
if(m>f)for(r=e[c++],d=128;m>f;)l[f++]=+!!(r&d),d>>=1}else{var b=0
for(r=0,f=0,a=o;a>f;++f){for(f%h===0&&(r=0,b=0);t>b;)r=r<<8|e[c++],b+=8
var v=b-t,y=r>>v
l[f]=0>y?0:y>u?u:y,r&=(1<<v)-1,b=v}}return l},fillOpacity:function(e,t,a,i,n){var o,c,l,h,u,f,d=this.smask,g=this.mask
if(d)c=d.width,l=d.height,o=new Uint8Array(c*l),d.fillGrayBuffer(o),c===t&&l===a||(o=s.resize(o,d.bpc,1,c,l,t,a))
else if(g)if(g instanceof s){for(c=g.width,l=g.height,o=new Uint8Array(c*l),g.numComps=1,g.fillGrayBuffer(o),h=0,u=c*l;u>h;++h)o[h]=255-o[h]
c===t&&l===a||(o=s.resize(o,g.bpc,1,c,l,t,a))}else if(O(g)){o=new Uint8Array(t*a)
var m=this.numComps
for(h=0,u=t*a;u>h;++h){var p=0,b=h*m
for(f=0;m>f;++f){var v=n[b+f],y=2*f
if(v<g[y]||v>g[y+1]){p=255
break}}o[h]=p}}else r("Unknown mask format.")
if(o)for(h=0,f=3,u=t*i;u>h;++h,f+=4)e[f]=o[h]
else for(h=0,f=3,u=t*i;u>h;++h,f+=4)e[f]=255},undoPreblend:function(e,t,a){var r=this.smask&&this.smask.matte
if(r)for(var i,n,s,o=this.colorSpace.getRgb(r,0),c=o[0],l=o[1],h=o[2],u=t*a*4,f=0;u>f;f+=4){var d=e[f+3]
if(0!==d){var g=255/d
i=(e[f]-c)*g+c,n=(e[f+1]-l)*g+l,s=(e[f+2]-h)*g+h,e[f]=0>=i?0:i>=255?255:0|i,e[f+1]=0>=n?0:n>=255?255:0|n,e[f+2]=0>=s?0:s>=255?255:0|s}else e[f]=255,e[f+1]=255,e[f+2]=255}},createImageData:function(e){var t,a=this.drawWidth,r=this.drawHeight,i={width:a,height:r},s=this.numComps,o=this.width,c=this.height,l=this.bpc,h=o*s*l+7>>3
if(!e){var u
if("DeviceGray"===this.colorSpace.name&&1===l?u=K.GRAYSCALE_1BPP:"DeviceRGB"!==this.colorSpace.name||8!==l||this.needsDecode||(u=K.RGB_24BPP),u&&!this.smask&&!this.mask&&a===o&&r===c){if(i.kind=u,t=this.getImageBytes(c*h),this.image instanceof za)i.data=t
else{var f=new Uint8Array(t.length)
f.set(t),i.data=f}if(this.needsDecode){n(u===K.GRAYSCALE_1BPP)
for(var d=i.data,g=0,m=d.length;m>g;g++)d[g]^=255}return i}if(this.image instanceof Xa&&!this.smask&&!this.mask&&("DeviceGray"===this.colorSpace.name||"DeviceRGB"===this.colorSpace.name||"DeviceCMYK"===this.colorSpace.name))return i.kind=K.RGB_24BPP,i.data=this.getImageBytes(c*h,a,r,!0),i}t=this.getImageBytes(c*h)
var p,b,v=0|t.length/h*r/c,y=this.getComponents(t)
return e||this.smask||this.mask?(i.kind=K.RGBA_32BPP,i.data=new Uint8Array(a*r*4),p=1,b=!0,this.fillOpacity(i.data,a,r,v,y)):(i.kind=K.RGB_24BPP,i.data=new Uint8Array(a*r*3),p=0,b=!1),this.needsDecode&&this.decodeBuffer(y),this.colorSpace.fillRgb(i.data,o,c,a,r,v,l,y,p),b&&this.undoPreblend(i.data,a,v),i},fillGrayBuffer:function(e){var t=this.numComps
1!==t&&r("Reading gray scale from a color image: "+t)
var a,i,n=this.width,s=this.height,o=this.bpc,c=n*t*o+7>>3,l=this.getImageBytes(s*c),h=this.getComponents(l)
if(1!==o){this.needsDecode&&this.decodeBuffer(h),i=n*s
var u=255/((1<<o)-1)
for(a=0;i>a;++a)e[a]=u*h[a]|0}else if(i=n*s,this.needsDecode)for(a=0;i>a;++a)e[a]=h[a]-1&255
else for(a=0;i>a;++a)e[a]=255&-h[a]},getImageBytes:function(e,t,a,r){return this.image.reset(),this.image.drawWidth=t||this.width,this.image.drawHeight=a||this.height,this.image.forceRGB=!!r,this.image.getBytes(e)}},s}(),Oa={Courier:600,"Courier-Bold":600,"Courier-BoldOblique":600,"Courier-Oblique":600,Helvetica:{space:278,exclam:278,quotedbl:355,numbersign:556,dollar:556,percent:889,ampersand:667,quoteright:222,parenleft:333,parenright:333,asterisk:389,plus:584,comma:278,hyphen:333,period:278,slash:278,zero:556,one:556,two:556,three:556,four:556,five:556,six:556,seven:556,eight:556,nine:556,colon:278,semicolon:278,less:584,equal:584,greater:584,question:556,at:1015,A:667,B:667,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:500,K:667,L:556,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611,bracketleft:278,backslash:278,bracketright:278,asciicircum:469,underscore:556,quoteleft:222,a:556,b:556,c:500,d:556,e:556,f:278,g:556,h:556,i:222,j:222,k:500,l:222,m:833,n:556,o:556,p:556,q:556,r:333,s:500,t:278,u:556,v:500,w:722,x:500,y:500,z:500,braceleft:334,bar:260,braceright:334,asciitilde:584,exclamdown:333,cent:556,sterling:556,fraction:167,yen:556,florin:556,section:556,currency:556,quotesingle:191,quotedblleft:333,guillemotleft:556,guilsinglleft:333,guilsinglright:333,fi:500,fl:500,endash:556,dagger:556,daggerdbl:556,periodcentered:278,paragraph:537,bullet:350,quotesinglbase:222,quotedblbase:333,quotedblright:333,guillemotright:556,ellipsis:1e3,perthousand:1e3,questiondown:611,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:1e3,ordfeminine:370,Lslash:556,Oslash:778,OE:1e3,ordmasculine:365,ae:889,dotlessi:278,lslash:222,oslash:611,oe:944,germandbls:611,Idieresis:278,eacute:556,abreve:556,uhungarumlaut:556,ecaron:556,Ydieresis:667,divide:584,Yacute:667,Acircumflex:667,aacute:556,Ucircumflex:722,yacute:500,scommaaccent:500,ecircumflex:556,Uring:722,Udieresis:722,aogonek:556,Uacute:722,uogonek:556,Edieresis:667,Dcroat:722,commaaccent:250,copyright:737,Emacron:667,ccaron:500,aring:556,Ncommaaccent:722,lacute:222,agrave:556,Tcommaaccent:611,Cacute:722,atilde:556,Edotaccent:667,scaron:500,scedilla:500,iacute:278,lozenge:471,Rcaron:722,Gcommaaccent:778,ucircumflex:556,acircumflex:556,Amacron:667,rcaron:333,ccedilla:500,Zdotaccent:611,Thorn:667,Omacron:778,Racute:722,Sacute:667,dcaron:643,Umacron:722,uring:556,threesuperior:333,Ograve:778,Agrave:667,Abreve:667,multiply:584,uacute:556,Tcaron:611,partialdiff:476,ydieresis:500,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:556,edieresis:556,cacute:500,nacute:556,umacron:556,Ncaron:722,Iacute:278,plusminus:584,brokenbar:260,registered:737,Gbreve:778,Idotaccent:278,summation:600,Egrave:667,racute:333,omacron:556,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:722,lcommaaccent:222,tcaron:317,eogonek:556,Uogonek:722,Aacute:667,Adieresis:667,egrave:556,zacute:500,iogonek:222,Oacute:778,oacute:556,amacron:556,sacute:500,idieresis:278,Ocircumflex:778,Ugrave:722,Delta:612,thorn:556,twosuperior:333,Odieresis:778,mu:556,igrave:278,ohungarumlaut:556,Eogonek:667,dcroat:556,threequarters:834,Scedilla:667,lcaron:299,Kcommaaccent:667,Lacute:556,trademark:1e3,edotaccent:556,Igrave:278,Imacron:278,Lcaron:556,onehalf:834,lessequal:549,ocircumflex:556,ntilde:556,Uhungarumlaut:722,Eacute:667,emacron:556,gbreve:556,onequarter:834,Scaron:667,Scommaaccent:667,Ohungarumlaut:778,degree:400,ograve:556,Ccaron:722,ugrave:556,radical:453,Dcaron:722,rcommaaccent:333,Ntilde:722,otilde:556,Rcommaaccent:722,Lcommaaccent:556,Atilde:667,Aogonek:667,Aring:667,Otilde:778,zdotaccent:500,Ecaron:667,Iogonek:278,kcommaaccent:500,minus:584,Icircumflex:278,ncaron:556,tcommaaccent:278,logicalnot:584,odieresis:556,udieresis:556,notequal:549,gcommaaccent:556,eth:556,zcaron:500,ncommaaccent:556,onesuperior:333,imacron:278,Euro:556},"Helvetica-Bold":{space:278,exclam:333,quotedbl:474,numbersign:556,dollar:556,percent:889,ampersand:722,quoteright:278,parenleft:333,parenright:333,asterisk:389,plus:584,comma:278,hyphen:333,period:278,slash:278,zero:556,one:556,two:556,three:556,four:556,five:556,six:556,seven:556,eight:556,nine:556,colon:333,semicolon:333,less:584,equal:584,greater:584,question:611,at:975,A:722,B:722,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:556,K:722,L:611,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611,bracketleft:333,backslash:278,bracketright:333,asciicircum:584,underscore:556,quoteleft:278,a:556,b:611,c:556,d:611,e:556,f:333,g:611,h:611,i:278,j:278,k:556,l:278,m:889,n:611,o:611,p:611,q:611,r:389,s:556,t:333,u:611,v:556,w:778,x:556,y:556,z:500,braceleft:389,bar:280,braceright:389,asciitilde:584,exclamdown:333,cent:556,sterling:556,fraction:167,yen:556,florin:556,section:556,currency:556,quotesingle:238,quotedblleft:500,guillemotleft:556,guilsinglleft:333,guilsinglright:333,fi:611,fl:611,endash:556,dagger:556,daggerdbl:556,periodcentered:278,paragraph:556,bullet:350,quotesinglbase:278,quotedblbase:500,quotedblright:500,guillemotright:556,ellipsis:1e3,perthousand:1e3,questiondown:611,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:1e3,ordfeminine:370,Lslash:611,Oslash:778,OE:1e3,ordmasculine:365,ae:889,dotlessi:278,lslash:278,oslash:611,oe:944,germandbls:611,Idieresis:278,eacute:556,abreve:556,uhungarumlaut:611,ecaron:556,Ydieresis:667,divide:584,Yacute:667,Acircumflex:722,aacute:556,Ucircumflex:722,yacute:556,scommaaccent:556,ecircumflex:556,Uring:722,Udieresis:722,aogonek:556,Uacute:722,uogonek:611,Edieresis:667,Dcroat:722,commaaccent:250,copyright:737,Emacron:667,ccaron:556,aring:556,Ncommaaccent:722,lacute:278,agrave:556,Tcommaaccent:611,Cacute:722,atilde:556,Edotaccent:667,scaron:556,scedilla:556,iacute:278,lozenge:494,Rcaron:722,Gcommaaccent:778,ucircumflex:611,acircumflex:556,Amacron:722,rcaron:389,ccedilla:556,Zdotaccent:611,Thorn:667,Omacron:778,Racute:722,Sacute:667,dcaron:743,Umacron:722,uring:611,threesuperior:333,Ograve:778,Agrave:722,Abreve:722,multiply:584,uacute:611,Tcaron:611,partialdiff:494,ydieresis:556,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:556,edieresis:556,cacute:556,nacute:611,umacron:611,Ncaron:722,Iacute:278,plusminus:584,brokenbar:280,registered:737,Gbreve:778,Idotaccent:278,summation:600,Egrave:667,racute:389,omacron:611,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:722,lcommaaccent:278,tcaron:389,eogonek:556,Uogonek:722,Aacute:722,Adieresis:722,egrave:556,zacute:500,iogonek:278,Oacute:778,oacute:611,amacron:556,sacute:556,idieresis:278,Ocircumflex:778,Ugrave:722,Delta:612,thorn:611,twosuperior:333,Odieresis:778,mu:611,igrave:278,ohungarumlaut:611,Eogonek:667,dcroat:611,threequarters:834,Scedilla:667,lcaron:400,Kcommaaccent:722,Lacute:611,trademark:1e3,edotaccent:556,Igrave:278,Imacron:278,Lcaron:611,onehalf:834,lessequal:549,ocircumflex:611,ntilde:611,Uhungarumlaut:722,Eacute:667,emacron:556,gbreve:611,onequarter:834,Scaron:667,Scommaaccent:667,Ohungarumlaut:778,degree:400,ograve:611,Ccaron:722,ugrave:611,radical:549,Dcaron:722,rcommaaccent:389,Ntilde:722,otilde:611,Rcommaaccent:722,Lcommaaccent:611,Atilde:722,Aogonek:722,Aring:722,Otilde:778,zdotaccent:500,Ecaron:667,Iogonek:278,kcommaaccent:556,minus:584,Icircumflex:278,ncaron:611,tcommaaccent:333,logicalnot:584,odieresis:611,udieresis:611,notequal:549,gcommaaccent:611,eth:611,zcaron:500,ncommaaccent:611,onesuperior:333,imacron:278,Euro:556},"Helvetica-BoldOblique":{space:278,exclam:333,quotedbl:474,numbersign:556,dollar:556,percent:889,ampersand:722,quoteright:278,parenleft:333,parenright:333,asterisk:389,plus:584,comma:278,hyphen:333,period:278,slash:278,zero:556,one:556,two:556,three:556,four:556,five:556,six:556,seven:556,eight:556,nine:556,colon:333,semicolon:333,less:584,equal:584,greater:584,question:611,at:975,A:722,B:722,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:556,K:722,L:611,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611,bracketleft:333,backslash:278,bracketright:333,asciicircum:584,underscore:556,quoteleft:278,a:556,b:611,c:556,d:611,e:556,f:333,g:611,h:611,i:278,j:278,k:556,l:278,m:889,n:611,o:611,p:611,q:611,r:389,s:556,t:333,u:611,v:556,w:778,x:556,y:556,z:500,braceleft:389,bar:280,braceright:389,asciitilde:584,exclamdown:333,cent:556,sterling:556,fraction:167,yen:556,florin:556,section:556,currency:556,quotesingle:238,quotedblleft:500,guillemotleft:556,guilsinglleft:333,guilsinglright:333,fi:611,fl:611,endash:556,dagger:556,daggerdbl:556,periodcentered:278,paragraph:556,bullet:350,quotesinglbase:278,quotedblbase:500,quotedblright:500,guillemotright:556,ellipsis:1e3,perthousand:1e3,questiondown:611,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:1e3,ordfeminine:370,Lslash:611,Oslash:778,OE:1e3,ordmasculine:365,ae:889,dotlessi:278,lslash:278,oslash:611,oe:944,germandbls:611,Idieresis:278,eacute:556,abreve:556,uhungarumlaut:611,ecaron:556,Ydieresis:667,divide:584,Yacute:667,Acircumflex:722,aacute:556,Ucircumflex:722,yacute:556,scommaaccent:556,ecircumflex:556,Uring:722,Udieresis:722,aogonek:556,Uacute:722,uogonek:611,Edieresis:667,Dcroat:722,commaaccent:250,copyright:737,Emacron:667,ccaron:556,aring:556,Ncommaaccent:722,lacute:278,agrave:556,Tcommaaccent:611,Cacute:722,atilde:556,Edotaccent:667,scaron:556,scedilla:556,iacute:278,lozenge:494,Rcaron:722,Gcommaaccent:778,ucircumflex:611,acircumflex:556,Amacron:722,rcaron:389,ccedilla:556,Zdotaccent:611,Thorn:667,Omacron:778,Racute:722,Sacute:667,dcaron:743,Umacron:722,uring:611,threesuperior:333,Ograve:778,Agrave:722,Abreve:722,multiply:584,uacute:611,Tcaron:611,partialdiff:494,ydieresis:556,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:556,edieresis:556,cacute:556,nacute:611,umacron:611,Ncaron:722,Iacute:278,plusminus:584,brokenbar:280,registered:737,Gbreve:778,Idotaccent:278,summation:600,Egrave:667,racute:389,omacron:611,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:722,lcommaaccent:278,tcaron:389,eogonek:556,Uogonek:722,Aacute:722,Adieresis:722,egrave:556,zacute:500,iogonek:278,Oacute:778,oacute:611,amacron:556,sacute:556,idieresis:278,Ocircumflex:778,Ugrave:722,Delta:612,thorn:611,twosuperior:333,Odieresis:778,mu:611,igrave:278,ohungarumlaut:611,Eogonek:667,dcroat:611,threequarters:834,Scedilla:667,lcaron:400,Kcommaaccent:722,Lacute:611,trademark:1e3,edotaccent:556,Igrave:278,Imacron:278,Lcaron:611,onehalf:834,lessequal:549,ocircumflex:611,ntilde:611,Uhungarumlaut:722,Eacute:667,emacron:556,gbreve:611,onequarter:834,Scaron:667,Scommaaccent:667,Ohungarumlaut:778,degree:400,ograve:611,Ccaron:722,ugrave:611,radical:549,Dcaron:722,rcommaaccent:389,Ntilde:722,otilde:611,Rcommaaccent:722,Lcommaaccent:611,Atilde:722,Aogonek:722,Aring:722,Otilde:778,zdotaccent:500,Ecaron:667,Iogonek:278,kcommaaccent:556,minus:584,Icircumflex:278,ncaron:611,tcommaaccent:333,logicalnot:584,odieresis:611,udieresis:611,notequal:549,gcommaaccent:611,eth:611,zcaron:500,ncommaaccent:611,onesuperior:333,imacron:278,Euro:556},"Helvetica-Oblique":{space:278,exclam:278,quotedbl:355,numbersign:556,dollar:556,percent:889,ampersand:667,quoteright:222,parenleft:333,parenright:333,asterisk:389,plus:584,comma:278,hyphen:333,period:278,slash:278,zero:556,one:556,two:556,three:556,four:556,five:556,six:556,seven:556,eight:556,nine:556,colon:278,semicolon:278,less:584,equal:584,greater:584,question:556,at:1015,A:667,B:667,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:500,K:667,L:556,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611,bracketleft:278,backslash:278,bracketright:278,asciicircum:469,underscore:556,quoteleft:222,a:556,b:556,c:500,d:556,e:556,f:278,g:556,h:556,i:222,j:222,k:500,l:222,m:833,n:556,o:556,p:556,q:556,r:333,s:500,t:278,u:556,v:500,w:722,x:500,y:500,z:500,braceleft:334,bar:260,braceright:334,asciitilde:584,exclamdown:333,cent:556,sterling:556,fraction:167,yen:556,florin:556,section:556,currency:556,quotesingle:191,quotedblleft:333,guillemotleft:556,guilsinglleft:333,guilsinglright:333,fi:500,fl:500,endash:556,dagger:556,daggerdbl:556,periodcentered:278,paragraph:537,bullet:350,quotesinglbase:222,quotedblbase:333,quotedblright:333,guillemotright:556,ellipsis:1e3,perthousand:1e3,questiondown:611,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:1e3,ordfeminine:370,Lslash:556,Oslash:778,OE:1e3,ordmasculine:365,ae:889,dotlessi:278,lslash:222,oslash:611,oe:944,germandbls:611,Idieresis:278,eacute:556,abreve:556,uhungarumlaut:556,ecaron:556,Ydieresis:667,divide:584,Yacute:667,Acircumflex:667,aacute:556,Ucircumflex:722,yacute:500,scommaaccent:500,ecircumflex:556,Uring:722,Udieresis:722,aogonek:556,Uacute:722,uogonek:556,Edieresis:667,Dcroat:722,commaaccent:250,copyright:737,Emacron:667,ccaron:500,aring:556,Ncommaaccent:722,lacute:222,agrave:556,Tcommaaccent:611,Cacute:722,atilde:556,Edotaccent:667,scaron:500,scedilla:500,iacute:278,lozenge:471,Rcaron:722,Gcommaaccent:778,ucircumflex:556,acircumflex:556,Amacron:667,rcaron:333,ccedilla:500,Zdotaccent:611,Thorn:667,Omacron:778,Racute:722,Sacute:667,dcaron:643,Umacron:722,uring:556,threesuperior:333,Ograve:778,Agrave:667,Abreve:667,multiply:584,uacute:556,Tcaron:611,partialdiff:476,ydieresis:500,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:556,edieresis:556,cacute:500,nacute:556,umacron:556,Ncaron:722,Iacute:278,plusminus:584,brokenbar:260,registered:737,Gbreve:778,Idotaccent:278,summation:600,Egrave:667,racute:333,omacron:556,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:722,lcommaaccent:222,tcaron:317,eogonek:556,Uogonek:722,Aacute:667,Adieresis:667,egrave:556,zacute:500,iogonek:222,Oacute:778,oacute:556,amacron:556,sacute:500,idieresis:278,Ocircumflex:778,Ugrave:722,Delta:612,thorn:556,twosuperior:333,Odieresis:778,mu:556,igrave:278,ohungarumlaut:556,Eogonek:667,dcroat:556,threequarters:834,Scedilla:667,lcaron:299,Kcommaaccent:667,Lacute:556,trademark:1e3,edotaccent:556,Igrave:278,Imacron:278,Lcaron:556,onehalf:834,lessequal:549,ocircumflex:556,ntilde:556,Uhungarumlaut:722,Eacute:667,emacron:556,gbreve:556,onequarter:834,Scaron:667,Scommaaccent:667,Ohungarumlaut:778,degree:400,ograve:556,Ccaron:722,ugrave:556,radical:453,Dcaron:722,rcommaaccent:333,Ntilde:722,otilde:556,Rcommaaccent:722,Lcommaaccent:556,Atilde:667,Aogonek:667,Aring:667,Otilde:778,zdotaccent:500,Ecaron:667,Iogonek:278,kcommaaccent:500,minus:584,Icircumflex:278,ncaron:556,tcommaaccent:278,logicalnot:584,odieresis:556,udieresis:556,notequal:549,gcommaaccent:556,eth:556,zcaron:500,ncommaaccent:556,onesuperior:333,imacron:278,Euro:556},Symbol:{space:250,exclam:333,universal:713,numbersign:500,existential:549,percent:833,ampersand:778,suchthat:439,parenleft:333,parenright:333,asteriskmath:500,plus:549,comma:250,minus:549,period:250,slash:278,zero:500,one:500,two:500,three:500,four:500,five:500,six:500,seven:500,eight:500,nine:500,colon:278,semicolon:278,less:549,equal:549,greater:549,question:444,congruent:549,Alpha:722,Beta:667,Chi:722,Delta:612,Epsilon:611,Phi:763,Gamma:603,Eta:722,Iota:333,theta1:631,Kappa:722,Lambda:686,Mu:889,Nu:722,Omicron:722,Pi:768,Theta:741,Rho:556,Sigma:592,Tau:611,Upsilon:690,sigma1:439,Omega:768,Xi:645,Psi:795,Zeta:611,bracketleft:333,therefore:863,bracketright:333,perpendicular:658,underscore:500,radicalex:500,alpha:631,beta:549,chi:549,delta:494,epsilon:439,phi:521,gamma:411,eta:603,iota:329,phi1:603,kappa:549,lambda:549,mu:576,nu:521,omicron:549,pi:549,theta:521,rho:549,sigma:603,tau:439,upsilon:576,omega1:713,omega:686,xi:493,psi:686,zeta:494,braceleft:480,bar:200,braceright:480,similar:549,Euro:750,Upsilon1:620,minute:247,lessequal:549,fraction:167,infinity:713,florin:500,club:753,diamond:753,heart:753,spade:753,arrowboth:1042,arrowleft:987,arrowup:603,arrowright:987,arrowdown:603,degree:400,plusminus:549,second:411,greaterequal:549,multiply:549,proportional:713,partialdiff:494,bullet:460,divide:549,notequal:549,equivalence:549,approxequal:549,ellipsis:1e3,arrowvertex:603,arrowhorizex:1e3,carriagereturn:658,aleph:823,Ifraktur:686,Rfraktur:795,weierstrass:987,circlemultiply:768,circleplus:768,emptyset:823,intersection:768,union:768,propersuperset:713,reflexsuperset:713,notsubset:713,propersubset:713,reflexsubset:713,element:713,notelement:713,angle:768,gradient:713,registerserif:790,copyrightserif:790,trademarkserif:890,product:823,radical:549,dotmath:250,logicalnot:713,logicaland:603,logicalor:603,arrowdblboth:1042,arrowdblleft:987,arrowdblup:603,arrowdblright:987,arrowdbldown:603,lozenge:494,angleleft:329,registersans:790,copyrightsans:790,trademarksans:786,summation:713,parenlefttp:384,parenleftex:384,parenleftbt:384,bracketlefttp:384,bracketleftex:384,bracketleftbt:384,bracelefttp:494,braceleftmid:494,braceleftbt:494,braceex:494,angleright:329,integral:274,integraltp:686,integralex:686,integralbt:686,parenrighttp:384,parenrightex:384,parenrightbt:384,bracketrighttp:384,bracketrightex:384,bracketrightbt:384,bracerighttp:494,bracerightmid:494,bracerightbt:494,apple:790},"Times-Roman":{space:250,exclam:333,quotedbl:408,numbersign:500,dollar:500,percent:833,ampersand:778,quoteright:333,parenleft:333,parenright:333,asterisk:500,plus:564,comma:250,hyphen:333,period:250,slash:278,zero:500,one:500,two:500,three:500,four:500,five:500,six:500,seven:500,eight:500,nine:500,colon:278,semicolon:278,less:564,equal:564,greater:564,question:444,at:921,A:722,B:667,C:667,D:722,E:611,F:556,G:722,H:722,I:333,J:389,K:722,L:611,M:889,N:722,O:722,P:556,Q:722,R:667,S:556,T:611,U:722,V:722,W:944,X:722,Y:722,Z:611,bracketleft:333,backslash:278,bracketright:333,asciicircum:469,underscore:500,quoteleft:333,a:444,b:500,c:444,d:500,e:444,f:333,g:500,h:500,i:278,j:278,k:500,l:278,m:778,n:500,o:500,p:500,q:500,r:333,s:389,t:278,u:500,v:500,w:722,x:500,y:500,z:444,braceleft:480,bar:200,braceright:480,asciitilde:541,exclamdown:333,cent:500,sterling:500,fraction:167,yen:500,florin:500,section:500,currency:500,quotesingle:180,quotedblleft:444,guillemotleft:500,guilsinglleft:333,guilsinglright:333,fi:556,fl:556,endash:500,dagger:500,daggerdbl:500,periodcentered:250,paragraph:453,bullet:350,quotesinglbase:333,quotedblbase:444,quotedblright:444,guillemotright:500,ellipsis:1e3,perthousand:1e3,questiondown:444,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:889,ordfeminine:276,Lslash:611,Oslash:722,OE:889,ordmasculine:310,ae:667,dotlessi:278,lslash:278,oslash:500,oe:722,germandbls:500,Idieresis:333,eacute:444,abreve:444,uhungarumlaut:500,ecaron:444,Ydieresis:722,divide:564,Yacute:722,Acircumflex:722,aacute:444,Ucircumflex:722,yacute:500,scommaaccent:389,ecircumflex:444,Uring:722,Udieresis:722,aogonek:444,Uacute:722,uogonek:500,Edieresis:611,Dcroat:722,commaaccent:250,copyright:760,Emacron:611,ccaron:444,aring:444,Ncommaaccent:722,lacute:278,agrave:444,Tcommaaccent:611,Cacute:667,atilde:444,Edotaccent:611,scaron:389,scedilla:389,iacute:278,lozenge:471,Rcaron:667,Gcommaaccent:722,ucircumflex:500,acircumflex:444,Amacron:722,rcaron:333,ccedilla:444,Zdotaccent:611,Thorn:556,Omacron:722,Racute:667,Sacute:556,dcaron:588,Umacron:722,uring:500,threesuperior:300,Ograve:722,Agrave:722,Abreve:722,multiply:564,uacute:500,Tcaron:611,partialdiff:476,ydieresis:500,Nacute:722,icircumflex:278,Ecircumflex:611,adieresis:444,edieresis:444,cacute:444,nacute:500,umacron:500,Ncaron:722,Iacute:333,plusminus:564,brokenbar:200,registered:760,Gbreve:722,Idotaccent:333,summation:600,Egrave:611,racute:333,omacron:500,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:667,lcommaaccent:278,tcaron:326,eogonek:444,Uogonek:722,Aacute:722,Adieresis:722,egrave:444,zacute:444,iogonek:278,Oacute:722,oacute:500,amacron:444,sacute:389,idieresis:278,Ocircumflex:722,Ugrave:722,Delta:612,thorn:500,twosuperior:300,Odieresis:722,mu:500,igrave:278,ohungarumlaut:500,Eogonek:611,dcroat:500,threequarters:750,Scedilla:556,lcaron:344,Kcommaaccent:722,Lacute:611,trademark:980,edotaccent:444,Igrave:333,Imacron:333,Lcaron:611,onehalf:750,lessequal:549,ocircumflex:500,ntilde:500,Uhungarumlaut:722,Eacute:611,emacron:444,gbreve:500,onequarter:750,Scaron:556,Scommaaccent:556,Ohungarumlaut:722,degree:400,ograve:500,Ccaron:667,ugrave:500,radical:453,Dcaron:722,rcommaaccent:333,Ntilde:722,otilde:500,Rcommaaccent:667,Lcommaaccent:611,Atilde:722,Aogonek:722,Aring:722,Otilde:722,zdotaccent:444,Ecaron:611,Iogonek:333,kcommaaccent:500,minus:564,Icircumflex:333,ncaron:500,tcommaaccent:278,logicalnot:564,odieresis:500,udieresis:500,notequal:549,gcommaaccent:500,eth:500,zcaron:444,ncommaaccent:500,onesuperior:300,imacron:278,Euro:500},"Times-Bold":{space:250,exclam:333,quotedbl:555,numbersign:500,dollar:500,percent:1e3,ampersand:833,quoteright:333,parenleft:333,parenright:333,asterisk:500,plus:570,comma:250,hyphen:333,period:250,slash:278,zero:500,one:500,two:500,three:500,four:500,five:500,six:500,seven:500,eight:500,nine:500,colon:333,semicolon:333,less:570,equal:570,greater:570,question:500,at:930,A:722,B:667,C:722,D:722,E:667,F:611,G:778,H:778,I:389,J:500,K:778,L:667,M:944,N:722,O:778,P:611,Q:778,R:722,S:556,T:667,U:722,V:722,W:1e3,X:722,Y:722,Z:667,bracketleft:333,backslash:278,bracketright:333,asciicircum:581,underscore:500,quoteleft:333,a:500,b:556,c:444,d:556,e:444,f:333,g:500,h:556,i:278,j:333,k:556,l:278,m:833,n:556,o:500,p:556,q:556,r:444,s:389,t:333,u:556,v:500,w:722,x:500,y:500,z:444,braceleft:394,bar:220,braceright:394,asciitilde:520,exclamdown:333,cent:500,sterling:500,fraction:167,yen:500,florin:500,section:500,currency:500,quotesingle:278,quotedblleft:500,guillemotleft:500,guilsinglleft:333,guilsinglright:333,fi:556,fl:556,endash:500,dagger:500,daggerdbl:500,periodcentered:250,paragraph:540,bullet:350,quotesinglbase:333,quotedblbase:500,quotedblright:500,guillemotright:500,ellipsis:1e3,perthousand:1e3,questiondown:500,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:1e3,ordfeminine:300,Lslash:667,Oslash:778,OE:1e3,ordmasculine:330,ae:722,dotlessi:278,lslash:278,oslash:500,oe:722,germandbls:556,Idieresis:389,eacute:444,abreve:500,uhungarumlaut:556,ecaron:444,Ydieresis:722,divide:570,Yacute:722,Acircumflex:722,aacute:500,Ucircumflex:722,yacute:500,scommaaccent:389,ecircumflex:444,Uring:722,Udieresis:722,aogonek:500,Uacute:722,uogonek:556,Edieresis:667,Dcroat:722,commaaccent:250,copyright:747,Emacron:667,ccaron:444,aring:500,Ncommaaccent:722,lacute:278,agrave:500,Tcommaaccent:667,Cacute:722,atilde:500,Edotaccent:667,scaron:389,scedilla:389,iacute:278,lozenge:494,Rcaron:722,Gcommaaccent:778,ucircumflex:556,acircumflex:500,Amacron:722,rcaron:444,ccedilla:444,Zdotaccent:667,Thorn:611,Omacron:778,Racute:722,Sacute:556,dcaron:672,Umacron:722,uring:556,threesuperior:300,Ograve:778,Agrave:722,Abreve:722,multiply:570,uacute:556,Tcaron:667,partialdiff:494,ydieresis:500,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:500,edieresis:444,cacute:444,nacute:556,umacron:556,Ncaron:722,Iacute:389,plusminus:570,brokenbar:220,registered:747,Gbreve:778,Idotaccent:389,summation:600,Egrave:667,racute:444,omacron:500,Zacute:667,Zcaron:667,greaterequal:549,Eth:722,Ccedilla:722,lcommaaccent:278,tcaron:416,eogonek:444,Uogonek:722,Aacute:722,Adieresis:722,egrave:444,zacute:444,iogonek:278,Oacute:778,oacute:500,amacron:500,sacute:389,idieresis:278,Ocircumflex:778,Ugrave:722,Delta:612,thorn:556,twosuperior:300,Odieresis:778,mu:556,igrave:278,ohungarumlaut:500,Eogonek:667,dcroat:556,threequarters:750,Scedilla:556,lcaron:394,Kcommaaccent:778,Lacute:667,trademark:1e3,edotaccent:444,Igrave:389,Imacron:389,Lcaron:667,onehalf:750,lessequal:549,ocircumflex:500,ntilde:556,Uhungarumlaut:722,Eacute:667,emacron:444,gbreve:500,onequarter:750,Scaron:556,Scommaaccent:556,Ohungarumlaut:778,degree:400,ograve:500,Ccaron:722,ugrave:556,radical:549,Dcaron:722,rcommaaccent:444,Ntilde:722,otilde:500,Rcommaaccent:722,Lcommaaccent:667,Atilde:722,Aogonek:722,Aring:722,Otilde:778,zdotaccent:444,Ecaron:667,Iogonek:389,kcommaaccent:556,minus:570,Icircumflex:389,ncaron:556,tcommaaccent:333,logicalnot:570,odieresis:500,udieresis:556,notequal:549,gcommaaccent:500,eth:500,zcaron:444,ncommaaccent:556,onesuperior:300,imacron:278,Euro:500},"Times-BoldItalic":{space:250,exclam:389,quotedbl:555,numbersign:500,dollar:500,percent:833,ampersand:778,quoteright:333,parenleft:333,parenright:333,asterisk:500,plus:570,comma:250,hyphen:333,period:250,slash:278,zero:500,one:500,two:500,three:500,four:500,five:500,six:500,seven:500,eight:500,nine:500,colon:333,semicolon:333,less:570,equal:570,greater:570,question:500,at:832,A:667,B:667,C:667,D:722,E:667,F:667,G:722,H:778,I:389,J:500,K:667,L:611,M:889,N:722,O:722,P:611,Q:722,R:667,S:556,T:611,U:722,V:667,W:889,X:667,Y:611,Z:611,bracketleft:333,backslash:278,bracketright:333,asciicircum:570,underscore:500,quoteleft:333,a:500,b:500,c:444,d:500,e:444,f:333,g:500,h:556,i:278,j:278,k:500,l:278,m:778,n:556,o:500,p:500,q:500,r:389,s:389,t:278,u:556,v:444,w:667,x:500,y:444,z:389,braceleft:348,bar:220,braceright:348,asciitilde:570,exclamdown:389,cent:500,sterling:500,fraction:167,yen:500,florin:500,section:500,currency:500,quotesingle:278,quotedblleft:500,guillemotleft:500,guilsinglleft:333,guilsinglright:333,fi:556,fl:556,endash:500,dagger:500,daggerdbl:500,periodcentered:250,paragraph:500,bullet:350,quotesinglbase:333,quotedblbase:500,quotedblright:500,guillemotright:500,ellipsis:1e3,perthousand:1e3,questiondown:500,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:1e3,AE:944,ordfeminine:266,Lslash:611,Oslash:722,OE:944,ordmasculine:300,ae:722,dotlessi:278,lslash:278,oslash:500,oe:722,germandbls:500,Idieresis:389,eacute:444,abreve:500,uhungarumlaut:556,ecaron:444,Ydieresis:611,divide:570,Yacute:611,Acircumflex:667,aacute:500,Ucircumflex:722,yacute:444,scommaaccent:389,ecircumflex:444,Uring:722,Udieresis:722,aogonek:500,Uacute:722,uogonek:556,Edieresis:667,Dcroat:722,commaaccent:250,copyright:747,Emacron:667,ccaron:444,aring:500,Ncommaaccent:722,lacute:278,agrave:500,Tcommaaccent:611,Cacute:667,atilde:500,Edotaccent:667,scaron:389,scedilla:389,iacute:278,lozenge:494,Rcaron:667,Gcommaaccent:722,ucircumflex:556,acircumflex:500,Amacron:667,rcaron:389,ccedilla:444,Zdotaccent:611,Thorn:611,Omacron:722,Racute:667,Sacute:556,dcaron:608,Umacron:722,uring:556,threesuperior:300,Ograve:722,Agrave:667,Abreve:667,multiply:570,uacute:556,Tcaron:611,partialdiff:494,ydieresis:444,Nacute:722,icircumflex:278,Ecircumflex:667,adieresis:500,edieresis:444,cacute:444,nacute:556,umacron:556,Ncaron:722,Iacute:389,plusminus:570,brokenbar:220,registered:747,Gbreve:722,Idotaccent:389,summation:600,Egrave:667,racute:389,omacron:500,Zacute:611,Zcaron:611,greaterequal:549,Eth:722,Ccedilla:667,lcommaaccent:278,tcaron:366,eogonek:444,Uogonek:722,Aacute:667,Adieresis:667,egrave:444,zacute:389,iogonek:278,Oacute:722,oacute:500,amacron:500,sacute:389,idieresis:278,Ocircumflex:722,Ugrave:722,Delta:612,thorn:500,twosuperior:300,Odieresis:722,mu:576,igrave:278,ohungarumlaut:500,Eogonek:667,dcroat:500,threequarters:750,Scedilla:556,lcaron:382,Kcommaaccent:667,Lacute:611,trademark:1e3,edotaccent:444,Igrave:389,Imacron:389,Lcaron:611,onehalf:750,lessequal:549,ocircumflex:500,ntilde:556,Uhungarumlaut:722,Eacute:667,emacron:444,gbreve:500,onequarter:750,Scaron:556,Scommaaccent:556,Ohungarumlaut:722,degree:400,ograve:500,Ccaron:667,ugrave:556,radical:549,Dcaron:722,rcommaaccent:389,Ntilde:722,otilde:500,Rcommaaccent:667,Lcommaaccent:611,Atilde:667,Aogonek:667,Aring:667,Otilde:722,zdotaccent:389,Ecaron:667,Iogonek:389,kcommaaccent:500,minus:606,Icircumflex:389,ncaron:556,tcommaaccent:278,logicalnot:606,odieresis:500,udieresis:556,notequal:549,gcommaaccent:500,eth:500,zcaron:389,ncommaaccent:556,onesuperior:300,imacron:278,Euro:500},"Times-Italic":{space:250,exclam:333,quotedbl:420,numbersign:500,dollar:500,percent:833,ampersand:778,quoteright:333,parenleft:333,parenright:333,asterisk:500,plus:675,comma:250,hyphen:333,period:250,slash:278,zero:500,one:500,two:500,three:500,four:500,five:500,six:500,seven:500,eight:500,nine:500,colon:333,semicolon:333,less:675,equal:675,greater:675,question:500,at:920,A:611,B:611,C:667,D:722,E:611,F:611,G:722,H:722,I:333,J:444,K:667,L:556,M:833,N:667,O:722,P:611,Q:722,R:611,S:500,T:556,U:722,V:611,W:833,X:611,Y:556,Z:556,bracketleft:389,backslash:278,bracketright:389,asciicircum:422,underscore:500,quoteleft:333,a:500,b:500,c:444,d:500,e:444,f:278,g:500,h:500,i:278,j:278,k:444,l:278,m:722,n:500,o:500,p:500,q:500,r:389,s:389,t:278,u:500,v:444,w:667,x:444,y:444,z:389,braceleft:400,bar:275,braceright:400,asciitilde:541,exclamdown:389,cent:500,sterling:500,fraction:167,yen:500,florin:500,section:500,currency:500,quotesingle:214,quotedblleft:556,guillemotleft:500,guilsinglleft:333,guilsinglright:333,fi:500,fl:500,endash:500,dagger:500,daggerdbl:500,periodcentered:250,paragraph:523,bullet:350,quotesinglbase:333,quotedblbase:556,quotedblright:556,guillemotright:500,ellipsis:889,perthousand:1e3,questiondown:500,grave:333,acute:333,circumflex:333,tilde:333,macron:333,breve:333,dotaccent:333,dieresis:333,ring:333,cedilla:333,hungarumlaut:333,ogonek:333,caron:333,emdash:889,AE:889,ordfeminine:276,Lslash:556,Oslash:722,OE:944,ordmasculine:310,ae:667,dotlessi:278,lslash:278,oslash:500,oe:667,germandbls:500,Idieresis:333,eacute:444,abreve:500,uhungarumlaut:500,ecaron:444,Ydieresis:556,divide:675,Yacute:556,Acircumflex:611,aacute:500,Ucircumflex:722,yacute:444,scommaaccent:389,ecircumflex:444,Uring:722,Udieresis:722,aogonek:500,Uacute:722,uogonek:500,Edieresis:611,Dcroat:722,commaaccent:250,copyright:760,Emacron:611,ccaron:444,aring:500,Ncommaaccent:667,lacute:278,agrave:500,Tcommaaccent:556,Cacute:667,atilde:500,Edotaccent:611,scaron:389,scedilla:389,iacute:278,lozenge:471,Rcaron:611,Gcommaaccent:722,ucircumflex:500,acircumflex:500,Amacron:611,rcaron:389,ccedilla:444,Zdotaccent:556,Thorn:611,Omacron:722,Racute:611,Sacute:500,dcaron:544,Umacron:722,uring:500,threesuperior:300,Ograve:722,Agrave:611,Abreve:611,multiply:675,uacute:500,Tcaron:556,partialdiff:476,ydieresis:444,Nacute:667,icircumflex:278,Ecircumflex:611,adieresis:500,edieresis:444,cacute:444,nacute:500,umacron:500,Ncaron:667,Iacute:333,plusminus:675,brokenbar:275,registered:760,Gbreve:722,Idotaccent:333,summation:600,Egrave:611,racute:389,omacron:500,Zacute:556,Zcaron:556,greaterequal:549,Eth:722,Ccedilla:667,lcommaaccent:278,tcaron:300,eogonek:444,Uogonek:722,Aacute:611,Adieresis:611,egrave:444,zacute:389,iogonek:278,Oacute:722,oacute:500,amacron:500,sacute:389,idieresis:278,Ocircumflex:722,Ugrave:722,Delta:612,thorn:500,twosuperior:300,Odieresis:722,mu:500,igrave:278,ohungarumlaut:500,Eogonek:611,dcroat:500,threequarters:750,Scedilla:500,lcaron:300,Kcommaaccent:667,Lacute:556,trademark:980,edotaccent:444,Igrave:333,Imacron:333,Lcaron:611,onehalf:750,lessequal:549,ocircumflex:500,ntilde:500,Uhungarumlaut:722,Eacute:611,emacron:444,gbreve:500,onequarter:750,Scaron:500,Scommaaccent:500,Ohungarumlaut:722,degree:400,ograve:500,Ccaron:667,ugrave:500,radical:453,Dcaron:722,rcommaaccent:389,Ntilde:667,otilde:500,Rcommaaccent:611,Lcommaaccent:556,Atilde:611,Aogonek:611,Aring:611,Otilde:722,zdotaccent:389,Ecaron:611,Iogonek:333,kcommaaccent:444,minus:675,Icircumflex:333,ncaron:500,tcommaaccent:278,logicalnot:675,odieresis:500,udieresis:500,notequal:549,gcommaaccent:500,eth:500,zcaron:389,ncommaaccent:500,onesuperior:300,imacron:278,Euro:500},ZapfDingbats:{space:278,a1:974,a2:961,a202:974,a3:980,a4:719,a5:789,
a119:790,a118:791,a117:690,a11:960,a12:939,a13:549,a14:855,a15:911,a16:933,a105:911,a17:945,a18:974,a19:755,a20:846,a21:762,a22:761,a23:571,a24:677,a25:763,a26:760,a27:759,a28:754,a6:494,a7:552,a8:537,a9:577,a10:692,a29:786,a30:788,a31:788,a32:790,a33:793,a34:794,a35:816,a36:823,a37:789,a38:841,a39:823,a40:833,a41:816,a42:831,a43:923,a44:744,a45:723,a46:749,a47:790,a48:792,a49:695,a50:776,a51:768,a52:792,a53:759,a54:707,a55:708,a56:682,a57:701,a58:826,a59:815,a60:789,a61:789,a62:707,a63:687,a64:696,a65:689,a66:786,a67:787,a68:713,a69:791,a70:785,a71:791,a72:873,a73:761,a74:762,a203:762,a75:759,a204:759,a76:892,a77:892,a78:788,a79:784,a81:438,a82:138,a83:277,a84:415,a97:392,a98:392,a99:668,a100:668,a89:390,a90:390,a93:317,a94:317,a91:276,a92:276,a205:509,a85:509,a206:410,a86:410,a87:234,a88:234,a95:334,a96:334,a101:732,a102:544,a103:544,a104:910,a106:667,a107:760,a108:760,a112:776,a111:595,a110:694,a109:626,a120:788,a121:788,a122:788,a123:788,a124:788,a125:788,a126:788,a127:788,a128:788,a129:788,a130:788,a131:788,a132:788,a133:788,a134:788,a135:788,a136:788,a137:788,a138:788,a139:788,a140:788,a141:788,a142:788,a143:788,a144:788,a145:788,a146:788,a147:788,a148:788,a149:788,a150:788,a151:788,a152:788,a153:788,a154:788,a155:788,a156:788,a157:788,a158:788,a159:788,a160:894,a161:838,a163:1016,a164:458,a196:748,a165:924,a192:748,a166:918,a167:927,a168:928,a169:928,a170:834,a171:873,a172:828,a173:924,a162:924,a174:917,a175:930,a176:931,a177:463,a178:883,a179:836,a193:836,a180:867,a199:867,a181:696,a200:696,a182:874,a201:874,a183:760,a184:946,a197:771,a185:865,a194:771,a198:888,a186:967,a195:888,a187:831,a188:873,a189:927,a190:970,a191:918}},Ra={},La=1e3,Ma=function(){function a(e,t,a){this.lexer=e,this.allowStreams=t,this.xref=a,this.imageCache={},this.refill()}return a.prototype={refill:function(){this.buf1=this.lexer.getObj(),this.buf2=this.lexer.getObj()},shift:function(){B(this.buf2,"ID")?(this.buf1=this.buf2,this.buf2=null):(this.buf1=this.buf2,this.buf2=this.lexer.getObj())},tryShift:function(){try{return this.shift(),!0}catch(e){if(e instanceof ue)throw e
return!1}},getObj:function(t){var a=this.buf1
if(this.shift(),a instanceof Ie)switch(a.cmd){case"BI":return this.makeInlineImage(t)
case"[":for(var i=[];!B(this.buf1,"]")&&!X(this.buf1);)i.push(this.getObj(t))
return X(this.buf1)&&r("End of file inside array"),this.shift(),i
case"<<":for(var n=new Be(this.xref);!B(this.buf1,">>")&&!X(this.buf1);)if(I(this.buf1)){var s=this.buf1.name
if(this.shift(),X(this.buf1))break
n.set(s,this.getObj(t))}else e("Malformed dictionary: key must be a name object"),this.shift()
return X(this.buf1)&&r("End of file inside dictionary"),B(this.buf2,"stream")?this.allowStreams?this.makeStream(n,t):n:(this.shift(),n)
default:return a}if(C(a)){var o=a
if(C(this.buf1)&&B(this.buf2,"R")){var c=new Te(o,this.buf1)
return this.shift(),this.shift(),c}return o}if(A(a)){var l=a
return t&&(l=t.decryptString(l)),l}return a},findDefaultInlineStreamEnd:function(e){for(var t,a,r,i,s=69,o=73,c=32,l=10,h=13,u=e.pos,f=0;-1!==(t=e.getByte());)if(0===f)f=t===s?1:0
else if(1===f)f=t===o?2:0
else if(n(2===f),t===c||t===l||t===h){for(r=5,i=e.peekBytes(r),a=0;r>a;a++)if(t=i[a],t!==l&&t!==h&&(c>t||t>127)){f=0
break}if(2===f)break}else f=0
return e.pos-4-u},findDCTDecodeInlineStreamEnd:function(e){for(var a,r,i,n=e.pos,s=!1;-1!==(a=e.getByte());)if(255===a){switch(e.getByte()){case 0:break
case 255:e.skip(-1)
break
case 217:s=!0
break
case 192:case 193:case 194:case 195:case 197:case 198:case 199:case 201:case 202:case 203:case 205:case 206:case 207:case 196:case 204:case 218:case 219:case 220:case 221:case 222:case 223:case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:r=e.getUint16(),r>2?e.skip(r-2):e.skip(-2)}if(s)break}return i=e.pos-n,-1===a?(t("Inline DCTDecode image stream: EOI marker not found, searching for /EI/ instead."),e.skip(-i),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),i)},findASCII85DecodeInlineStreamEnd:function(e){for(var a,r,i=126,n=62,s=e.pos;-1!==(a=e.getByte());)if(a===i&&e.peekByte()===n){e.skip()
break}return r=e.pos-s,-1===a?(t("Inline ASCII85Decode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-r),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),r)},findASCIIHexDecodeInlineStreamEnd:function(e){for(var a,r,i=62,n=e.pos;-1!==(a=e.getByte())&&a!==i;);return r=e.pos-n,-1===a?(t("Inline ASCIIHexDecode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-r),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),r)},inlineStreamSkipEI:function(e){for(var t,a=69,r=73,i=0;-1!==(t=e.getByte());)if(0===i)i=t===a?1:0
else if(1===i)i=t===r?2:0
else if(2===i)break},makeInlineImage:function(e){for(var t=this.lexer,a=t.stream,i=new Be(this.xref);!B(this.buf1,"ID")&&!X(this.buf1);){I(this.buf1)||r("Dictionary key must be a name object")
var n=this.buf1.name
if(this.shift(),X(this.buf1))break
i.set(n,this.getObj(e))}var s,o=i.get("Filter","F")
I(o)?s=o.name:O(o)&&I(o[0])&&(s=o[0].name)
var c,l,h,u=a.pos
c="DCTDecode"===s||"DCT"===s?this.findDCTDecodeInlineStreamEnd(a):"ASCII85Decide"===s||"A85"===s?this.findASCII85DecodeInlineStreamEnd(a):"ASCIIHexDecode"===s||"AHx"===s?this.findASCIIHexDecodeInlineStreamEnd(a):this.findDefaultInlineStreamEnd(a)
var f,d=a.makeSubStream(u,c,i)
if(La>c){var g=d.getBytes()
d.reset()
var m=1,p=0
for(l=0,h=g.length;h>l;++l)m+=255&g[l],p+=m
if(f=p%65521<<16|m%65521,this.imageCache.adler32===f)return this.buf2=Ie.get("EI"),this.shift(),this.imageCache[f].reset(),this.imageCache[f]}return e&&(d=e.createStream(d,c)),d=this.filter(d,i,c),d.dict=i,void 0!==f&&(d.cacheKey="inline_"+c+"_"+f,this.imageCache[f]=d),this.buf2=Ie.get("EI"),this.shift(),d},makeStream:function(t,a){var i=this.lexer,n=i.stream
i.skipToNextLine()
var s=n.pos-1,o=t.get("Length")
if(C(o)||(e("Bad "+o+" attribute in stream"),o=0),n.pos=s+o,i.nextChar(),this.tryShift()&&B(this.buf2,"endstream"))this.shift()
else{n.pos=s
for(var c,l,h=2048,u=9,f=[101,110,100,115,116,114,101,97,109],d=0,g=!1;n.pos<n.end;){var m=n.peekBytes(h),p=m.length-u
if(0>=p)break
for(g=!1,c=0,l=0;p>c;c++){var b=m[c]
if(b!==f[l])c-=l,l=0
else if(l++,l>=u){c++,g=!0
break}}if(g){d+=c-u,n.pos+=c-u
break}d+=p,n.pos+=p}g||r("Missing endstream"),o=d,i.nextChar(),this.shift(),this.shift()}return this.shift(),n=n.makeSubStream(s,o,t),a&&(n=a.createStream(n,o)),n=this.filter(n,t,o),n.dict=t,n},filter:function(e,t,a){var i=t.get("Filter","F"),n=t.get("DecodeParms","DP")
if(I(i))return this.makeFilter(e,i.name,a,n)
var s=a
if(O(i))for(var o=i,c=n,l=0,h=o.length;h>l;++l)i=o[l],I(i)||r("Bad filter name: "+i),n=null,O(c)&&l in c&&(n=c[l]),e=this.makeFilter(e,i.name,s,n),s=null
return e},makeFilter:function(e,a,r,i){if(0===e.dict.get("Length")&&!r)return t('Empty "'+a+'" stream.'),new er(e)
try{i&&this.xref&&(i=this.xref.fetchIfRef(i))
var n=this.xref.stats.streamTypes
if("FlateDecode"===a||"Fl"===a)return n[$.FLATE]=!0,i?new Ga(new _a(e,r),r,i):new _a(e,r)
if("LZWDecode"===a||"LZW"===a){n[$.LZW]=!0
var s=1
return i?(i.has("EarlyChange")&&(s=i.get("EarlyChange")),new Ga(new $a(e,r,s),r,i)):new $a(e,r,s)}return"DCTDecode"===a||"DCT"===a?(n[$.DCT]=!0,new Xa(e,r,e.dict,this.xref)):"JPXDecode"===a||"JPX"===a?(n[$.JPX]=!0,new Ja(e,r,e.dict)):"ASCII85Decode"===a||"A85"===a?(n[$.A85]=!0,new Ka(e,r)):"ASCIIHexDecode"===a||"AHx"===a?(n[$.AHX]=!0,new Ya(e,r)):"CCITTFaxDecode"===a||"CCF"===a?(n[$.CCF]=!0,new Qa(e,r,i)):"RunLengthDecode"===a||"RL"===a?(n[$.RL]=!0,new Za(e,r)):"JBIG2Decode"===a?(n[$.JBIG]=!0,new Wa(e,r,e.dict)):(t('filter "'+a+'" not supported yet'),e)}catch(o){if(o instanceof ue)throw o
return t('Invalid stream: "'+o+'"'),new er(e)}}},a}(),Pa=function(){function e(e,t){this.stream=e,this.nextChar(),this.strBuf=[],this.knownCommands=t}function a(e){return e>=48&&57>=e?15&e:e>=65&&70>=e||e>=97&&102>=e?(15&e)+9:-1}e.isSpace=function(e){return 32===e||9===e||13===e||10===e}
var i=[1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},peekChar:function(){return this.stream.peekByte()},getNumber:function(){var e=this.currentChar,a=!1,i=0,n=1
if(45===e?(n=-1,e=this.nextChar(),45===e&&(e=this.nextChar())):43===e&&(e=this.nextChar()),46===e&&(i=10,e=this.nextChar()),48>e||e>57)return r("Invalid number: "+String.fromCharCode(e)),0
for(var s=e-48,o=0,c=1;(e=this.nextChar())>=0;)if(e>=48&&57>=e){var l=e-48
a?o=10*o+l:(0!==i&&(i*=10),s=10*s+l)}else if(46===e){if(0!==i)break
i=1}else if(45===e)t("Badly formated number")
else{if(69!==e&&101!==e)break
if(e=this.peekChar(),43===e||45===e)c=45===e?-1:1,this.nextChar()
else if(48>e||e>57)break
a=!0}return 0!==i&&(s/=i),a&&(s*=Math.pow(10,c*o)),n*s},getString:function(){var e=1,a=!1,r=this.strBuf
r.length=0
for(var i=this.nextChar();;){var n=!1
switch(0|i){case-1:t("Unterminated string"),a=!0
break
case 40:++e,r.push("(")
break
case 41:0===--e?(this.nextChar(),a=!0):r.push(")")
break
case 92:switch(i=this.nextChar()){case-1:t("Unterminated string"),a=!0
break
case 110:r.push("\n")
break
case 114:r.push("\r")
break
case 116:r.push("	")
break
case 98:r.push("\b")
break
case 102:r.push("\f")
break
case 92:case 40:case 41:r.push(String.fromCharCode(i))
break
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:var s=15&i
i=this.nextChar(),n=!0,i>=48&&55>=i&&(s=(s<<3)+(15&i),i=this.nextChar(),i>=48&&55>=i&&(n=!1,s=(s<<3)+(15&i))),r.push(String.fromCharCode(s))
break
case 13:10===this.peekChar()&&this.nextChar()
break
case 10:break
default:r.push(String.fromCharCode(i))}break
default:r.push(String.fromCharCode(i))}if(a)break
n||(i=this.nextChar())}return r.join("")},getName:function(){var e,r,n=this.strBuf
for(n.length=0;(e=this.nextChar())>=0&&!i[e];)if(35===e){if(e=this.nextChar(),i[e]){t("Lexer_getName: NUMBER SIGN (#) should be followed by a hexadecimal number."),n.push("#")
break}var s=a(e)
if(-1!==s){r=e,e=this.nextChar()
var o=a(e)
if(-1===o){if(t("Lexer_getName: Illegal digit ("+String.fromCharCode(e)+") in hexadecimal number."),n.push("#",String.fromCharCode(r)),i[e])break
n.push(String.fromCharCode(e))
continue}n.push(String.fromCharCode(s<<4|o))}else n.push("#",String.fromCharCode(e))}else n.push(String.fromCharCode(e))
return n.length>127&&t("name token is longer than allowed by the spec: "+n.length),Ae.get(n.join(""))},getHexString:function(){var e=this.strBuf
e.length=0
for(var r,n,s=this.currentChar,o=!0;;){if(0>s){t("Unterminated hex string")
break}if(62===s){this.nextChar()
break}if(1!==i[s]){if(o){if(r=a(s),-1===r){t('Ignoring invalid character "'+s+'" in hex string'),s=this.nextChar()
continue}}else{if(n=a(s),-1===n){t('Ignoring invalid character "'+s+'" in hex string'),s=this.nextChar()
continue}e.push(String.fromCharCode(r<<4|n))}o=!o,s=this.nextChar()}else s=this.nextChar()}return e.join("")},getObj:function(){for(var e=!1,t=this.currentChar;;){if(0>t)return Ra
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(1!==i[t])break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return this.getNumber()
case 40:return this.getString()
case 47:return this.getName()
case 91:return this.nextChar(),Ie.get("[")
case 93:return this.nextChar(),Ie.get("]")
case 60:return t=this.nextChar(),60===t?(this.nextChar(),Ie.get("<<")):this.getHexString()
case 62:return t=this.nextChar(),62===t?(this.nextChar(),Ie.get(">>")):Ie.get(">")
case 123:return this.nextChar(),Ie.get("{")
case 125:return this.nextChar(),Ie.get("}")
case 41:r("Illegal character: "+t)}for(var a=String.fromCharCode(t),n=this.knownCommands,s=n&&void 0!==n[a];(t=this.nextChar())>=0&&!i[t];){var o=a+String.fromCharCode(t)
if(s&&void 0===n[o])break
128===a.length&&r("Command token too long: "+a.length),a=o,s=n&&void 0!==n[a]}return"true"===a?!0:"false"===a?!1:"null"===a?null:Ie.get(a)},skipToNextLine:function(){for(var e=this.currentChar;e>=0;){if(13===e){e=this.nextChar(),10===e&&this.nextChar()
break}if(10===e){this.nextChar()
break}e=this.nextChar()}}},e}(),Ea={create:function(e){function t(e,t){var a=l.get(e)
if(C(a)&&(t?a>=0:a>0))return a
throw new Error('The "'+e+'" parameter in the linearization dictionary is invalid.')}function a(){var e,t,a=l.get("H")
if(O(a)&&(2===(e=a.length)||4===e)){for(var r=0;e>r;r++)if(!(C(t=a[r])&&t>0))throw new Error("Hint ("+r+") in the linearization dictionary is invalid.")
return a}throw new Error("Hint array in the linearization dictionary is invalid.")}var r,i,n=new Ma(new Pa(e),!1,null),s=n.getObj(),o=n.getObj(),c=n.getObj(),l=n.getObj()
if(!(C(s)&&C(o)&&B(c,"obj")&&T(l)&&S(r=l.get("Linearized"))&&r>0))return null
if((i=t("L"))!==e.length)throw new Error('The "L" parameter in the linearization dictionary does not equal the stream length.')
return{length:i,hints:a(),objectNumberFirst:t("O"),endFirst:t("E"),numPages:t("N"),mainXRefEntriesOffset:t("T"),pageFirst:l.has("P")?t("P",!0):0}}},Da=function(){function e(e){this.lexer=e,this.operators=[],this.token=null,this.prev=null}return e.prototype={nextToken:function(){this.prev=this.token,this.token=this.lexer.getToken()},accept:function(e){return this.token.type===e?(this.nextToken(),!0):!1},expect:function(e){return this.accept(e)?!0:void r("Unexpected symbol: found "+this.token.type+" expected "+e+".")},parse:function(){return this.nextToken(),this.expect(qa.LBRACE),this.parseBlock(),this.expect(qa.RBRACE),this.operators},parseBlock:function(){for(;;)if(this.accept(qa.NUMBER))this.operators.push(this.prev.value)
else if(this.accept(qa.OPERATOR))this.operators.push(this.prev.value)
else{if(!this.accept(qa.LBRACE))return
this.parseCondition()}},parseCondition:function(){var e=this.operators.length
if(this.operators.push(null,null),this.parseBlock(),this.expect(qa.RBRACE),this.accept(qa.IF))this.operators[e]=this.operators.length,this.operators[e+1]="jz"
else if(this.accept(qa.LBRACE)){var t=this.operators.length
this.operators.push(null,null)
var a=this.operators.length
this.parseBlock(),this.expect(qa.RBRACE),this.expect(qa.IFELSE),this.operators[t]=this.operators.length,this.operators[t+1]="j",this.operators[e]=a,this.operators[e+1]="jz"}else r("PS Function: error parsing conditional.")}},e}(),qa={LBRACE:0,RBRACE:1,NUMBER:2,OPERATOR:3,IF:4,IFELSE:5},Fa=function(){function e(e,t){this.type=e,this.value=t}var t={}
return e.getOperator=function(a){var r=t[a]
return r?r:t[a]=new e(qa.OPERATOR,a)},e.LBRACE=new e(qa.LBRACE,"{"),e.RBRACE=new e(qa.RBRACE,"}"),e.IF=new e(qa.IF,"IF"),e.IFELSE=new e(qa.IFELSE,"IFELSE"),e}(),Ua=function(){function e(e){this.stream=e,this.nextChar(),this.strBuf=[]}return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(0>t)return Ra
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!Pa.isSpace(t))break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return new Fa(qa.NUMBER,this.getNumber())
case 123:return this.nextChar(),Fa.LBRACE
case 125:return this.nextChar(),Fa.RBRACE}var a=this.strBuf
for(a.length=0,a[0]=String.fromCharCode(t);(t=this.nextChar())>=0&&(t>=65&&90>=t||t>=97&&122>=t);)a.push(String.fromCharCode(t))
var r=a.join("")
switch(r.toLowerCase()){case"if":return Fa.IF
case"ifelse":return Fa.IFELSE
default:return Fa.getOperator(r)}},getNumber:function(){var e=this.currentChar,t=this.strBuf
for(t.length=0,t[0]=String.fromCharCode(e);(e=this.nextChar())>=0&&(e>=48&&57>=e||45===e||46===e);)t.push(String.fromCharCode(e))
var a=parseFloat(t.join(""))
return isNaN(a)&&r("Invalid floating point number: "+a),a}},e}(),Na=function(){function e(e,t,a,r){this.bytes=e instanceof Uint8Array?e:new Uint8Array(e),this.start=t||0,this.pos=this.start,this.end=t+a||this.bytes.length,this.dict=r}return e.prototype={get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){var e=this.getByte(),t=this.getByte(),a=this.getByte(),r=this.getByte()
return(e<<24)+(t<<16)+(a<<8)+r},getBytes:function(e){var t=this.bytes,a=this.pos,r=this.end
if(!e)return t.subarray(a,r)
var i=a+e
return i>r&&(i=r),this.pos=i,t.subarray(a,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(t,a,r){return new e(this.bytes.buffer,t,a,r)},isStream:!0},e}(),ja=function(){function e(e){for(var t=e.length,a=new Uint8Array(t),r=0;t>r;++r)a[r]=e.charCodeAt(r)
Na.call(this,a)}return e.prototype=Na.prototype,e}(),za=function(){function e(e){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=t,this.minBufferLength=512,e)for(;this.minBufferLength<e;)this.minBufferLength*=2}var t=new Uint8Array(0)
return e.prototype={get isEmpty(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
return 0===this.bufferLength},ensureBuffer:function(e){var t=this.buffer
if(e<=t.byteLength)return t
for(var a=this.minBufferLength;e>a;)a*=2
var r=new Uint8Array(a)
return r.set(t),this.buffer=r},getByte:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return-1
this.readBlock()}return this.buffer[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){var e=this.getByte(),t=this.getByte(),a=this.getByte(),r=this.getByte()
return(e<<24)+(t<<16)+(a<<8)+r},getBytes:function(e){var t,a=this.pos
if(e){for(this.ensureBuffer(a+e),t=a+e;!this.eof&&this.bufferLength<t;)this.readBlock()
var r=this.bufferLength
t>r&&(t=r)}else{for(;!this.eof;)this.readBlock()
t=this.bufferLength}return this.pos=t,this.buffer.subarray(a,t)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},makeSubStream:function(e,t,a){for(var r=e+t;this.bufferLength<=r&&!this.eof;)this.readBlock()
return new Na(this.buffer,e,t,a)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=0},getBaseStreams:function(){return this.str&&this.str.getBaseStreams?this.str.getBaseStreams():[]}},e}(),Ha=function(){function e(e){this.streams=e,za.call(this,null)}return e.prototype=Object.create(za.prototype),e.prototype.readBlock=function(){var e=this.streams
if(0===e.length)return void(this.eof=!0)
var t=e.shift(),a=t.getBytes(),r=this.bufferLength,i=r+a.length,n=this.ensureBuffer(i)
n.set(a,r),this.bufferLength=i},e.prototype.getBaseStreams=function(){for(var e=[],t=0,a=this.streams.length;a>t;t++){var r=this.streams[t]
r.getBaseStreams&&me.appendToArray(e,r.getBaseStreams())}return e},e}(),_a=function(){function e(e,t){this.str=e,this.dict=e.dict
var a=e.getByte(),i=e.getByte();-1!==a&&-1!==i||r("Invalid header in flate stream: "+a+", "+i),8!==(15&a)&&r("Unknown compression method in flate stream: "+a+", "+i),((a<<8)+i)%31!==0&&r("Bad FCHECK in flate stream: "+a+", "+i),32&i&&r("FDICT bit set in flate stream: "+a+", "+i),this.codeSize=0,this.codeBuf=0,za.call(this,t)}var t=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),i=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),n=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],s=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5]
return e.prototype=Object.create(za.prototype),e.prototype.getBits=function(e){for(var t,a=this.str,i=this.codeSize,n=this.codeBuf;e>i;)-1===(t=a.getByte())&&r("Bad encoding in flate stream"),n|=t<<i,i+=8
return t=n&(1<<e)-1,this.codeBuf=n>>e,this.codeSize=i-=e,t},e.prototype.getCode=function(e){for(var t,a=this.str,i=e[0],n=e[1],s=this.codeSize,o=this.codeBuf;n>s&&-1!==(t=a.getByte());)o|=t<<s,s+=8
var c=i[o&(1<<n)-1],l=c>>16,h=65535&c
return(1>l||l>s)&&r("Bad encoding in flate stream"),this.codeBuf=o>>l,this.codeSize=s-l,h},e.prototype.generateHuffmanTable=function(e){var t,a=e.length,r=0
for(t=0;a>t;++t)e[t]>r&&(r=e[t])
for(var i=1<<r,n=new Int32Array(i),s=1,o=0,c=2;r>=s;++s,o<<=1,c<<=1)for(var l=0;a>l;++l)if(e[l]===s){var h=0,u=o
for(t=0;s>t;++t)h=h<<1|1&u,u>>=1
for(t=h;i>t;t+=c)n[t]=s<<16|l;++o}return[n,r]},e.prototype.readBlock=function(){var e,o,c=this.str,l=this.getBits(3)
if(1&l&&(this.eof=!0),l>>=1,0!==l){var h,u
if(1===l)h=n,u=s
else if(2===l){var f,d=this.getBits(5)+257,g=this.getBits(5)+1,m=this.getBits(4)+4,p=new Uint8Array(t.length)
for(f=0;m>f;++f)p[t[f]]=this.getBits(3)
var b=this.generateHuffmanTable(p)
o=0,f=0
for(var v,y,k,w=d+g,x=new Uint8Array(w);w>f;){var C=this.getCode(b)
if(16===C)v=2,y=3,k=o
else if(17===C)v=3,y=3,k=o=0
else{if(18!==C){x[f++]=o=C
continue}v=7,y=11,k=o=0}for(var S=this.getBits(v)+y;S-- >0;)x[f++]=k}h=this.generateHuffmanTable(x.subarray(0,d)),u=this.generateHuffmanTable(x.subarray(d,w))}else r("Unknown block type in flate stream")
e=this.buffer
for(var A=e?e.length:0,I=this.bufferLength;;){var B=this.getCode(h)
if(256>B)I+1>=A&&(e=this.ensureBuffer(I+1),A=e.length),e[I++]=B
else{if(256===B)return void(this.bufferLength=I)
B-=257,B=a[B]
var T=B>>16
T>0&&(T=this.getBits(T)),o=(65535&B)+T,B=this.getCode(u),B=i[B],T=B>>16,T>0&&(T=this.getBits(T))
var O=(65535&B)+T
I+o>=A&&(e=this.ensureBuffer(I+o),A=e.length)
for(var R=0;o>R;++R,++I)e[I]=e[I-O]}}}else{var L;-1===(L=c.getByte())&&r("Bad block header in flate stream")
var M=L;-1===(L=c.getByte())&&r("Bad block header in flate stream"),M|=L<<8,-1===(L=c.getByte())&&r("Bad block header in flate stream")
var P=L;-1===(L=c.getByte())&&r("Bad block header in flate stream"),P|=L<<8,P===(65535&~M)||0===M&&0===P||r("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0
var E=this.bufferLength
e=this.ensureBuffer(E+M)
var D=E+M
if(this.bufferLength=D,0===M)-1===c.peekByte()&&(this.eof=!0)
else for(var q=E;D>q;++q){if(-1===(L=c.getByte())){this.eof=!0
break}e[q]=L}}},e}(),Ga=function(){function e(e,t,a){var i=this.predictor=a.get("Predictor")||1
if(1>=i)return e
2!==i&&(10>i||i>15)&&r("Unsupported predictor: "+i),2===i?this.readBlock=this.readBlockTiff:this.readBlock=this.readBlockPng,this.str=e,this.dict=e.dict
var n=this.colors=a.get("Colors")||1,s=this.bits=a.get("BitsPerComponent")||8,o=this.columns=a.get("Columns")||1
return this.pixBytes=n*s+7>>3,this.rowBytes=o*n*s+7>>3,za.call(this,t),this}return e.prototype=Object.create(za.prototype),e.prototype.readBlockTiff=function(){var e=this.rowBytes,t=this.bufferLength,a=this.ensureBuffer(t+e),r=this.bits,i=this.colors,n=this.str.getBytes(e)
if(this.eof=!n.length,!this.eof){var s,o=0,c=0,l=0,h=0,u=t
if(1===r)for(s=0;e>s;++s){var f=n[s]
o=o<<8|f,a[u++]=255&(f^o>>i),o&=65535}else if(8===r){for(s=0;i>s;++s)a[u++]=n[s]
for(;e>s;++s)a[u]=a[u-i]+n[s],u++}else{var d=new Uint8Array(i+1),g=(1<<r)-1,m=0,p=t,b=this.columns
for(s=0;b>s;++s)for(var v=0;i>v;++v)r>l&&(o=o<<8|255&n[m++],l+=8),d[v]=d[v]+(o>>l-r)&g,l-=r,c=c<<r|d[v],h+=r,h>=8&&(a[p++]=c>>h-8&255,h-=8)
h>0&&(a[p++]=(c<<8-h)+(o&(1<<8-h)-1))}this.bufferLength+=e}},e.prototype.readBlockPng=function(){var e=this.rowBytes,t=this.pixBytes,a=this.str.getByte(),i=this.str.getBytes(e)
if(this.eof=!i.length,!this.eof){var n=this.bufferLength,s=this.ensureBuffer(n+e),o=s.subarray(n-e,n)
0===o.length&&(o=new Uint8Array(e))
var c,l,h,u=n
switch(a){case 0:for(c=0;e>c;++c)s[u++]=i[c]
break
case 1:for(c=0;t>c;++c)s[u++]=i[c]
for(;e>c;++c)s[u]=s[u-t]+i[c]&255,u++
break
case 2:for(c=0;e>c;++c)s[u++]=o[c]+i[c]&255
break
case 3:for(c=0;t>c;++c)s[u++]=(o[c]>>1)+i[c]
for(;e>c;++c)s[u]=(o[c]+s[u-t]>>1)+i[c]&255,u++
break
case 4:for(c=0;t>c;++c)l=o[c],h=i[c],s[u++]=l+h
for(;e>c;++c){l=o[c]
var f=o[c-t],d=s[u-t],g=d+l-f,m=g-d
0>m&&(m=-m)
var p=g-l
0>p&&(p=-p)
var b=g-f
0>b&&(b=-b),h=i[c],p>=m&&b>=m?s[u++]=d+h:b>=p?s[u++]=l+h:s[u++]=f+h}break
default:r("Unsupported predictor: "+a)}this.bufferLength+=e}},e}(),Xa=function(){function e(e,t,a,r){for(var i;-1!==(i=e.getByte());)if(255===i){e.skip(-1)
break}this.stream=e,this.maybeLength=t,this.dict=a,za.call(this,t)}return e.prototype=Object.create(za.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return o(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength)try{var t=new or
if(this.forceRGB&&this.dict&&O(this.dict.get("Decode"))){for(var a=this.dict.get("Decode"),i=this.dict.get("BitsPerComponent")||8,n=a.length,s=new Int32Array(n),o=!1,c=(1<<i)-1,l=0;n>l;l+=2)s[l]=256*(a[l+1]-a[l])|0,s[l+1]=a[l]*c|0,256===s[l]&&0===s[l+1]||(o=!0)
o&&(t.decodeTransform=s)}t.parse(this.bytes)
var h=t.getData(this.drawWidth,this.drawHeight,this.forceRGB)
this.buffer=h,this.bufferLength=h.length,this.eof=!0}catch(u){r("JPEG error: "+u)}},e.prototype.getBytes=function(e){return this.ensureBuffer(),this.buffer},e.prototype.getIR=function(){return PDFJS.createObjectURL(this.bytes,"image/jpeg")},e.prototype.isNativelySupported=function(e,t){var a=Ye.parse(this.dict.get("ColorSpace","CS"),e,t)
return("DeviceGray"===a.name||"DeviceRGB"===a.name)&&a.isDefaultDecode(this.dict.get("Decode","D"))},e.prototype.isNativelyDecodable=function(e,t){var a=Ye.parse(this.dict.get("ColorSpace","CS"),e,t)
return(1===a.numComps||3===a.numComps)&&a.isDefaultDecode(this.dict.get("Decode","D"))},e}(),Ja=function(){function e(e,t,a){this.stream=e,this.maybeLength=t,this.dict=a,za.call(this,t)}return e.prototype=Object.create(za.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return o(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new cr
t.parse(this.bytes)
var a=t.width,r=t.height,i=t.componentsCount,n=t.tiles.length
if(1===n)this.buffer=t.tiles[0].items
else{for(var s=new Uint8Array(a*r*i),o=0;n>o;o++)for(var c=t.tiles[o],l=c.width,h=c.height,u=c.left,f=c.top,d=c.items,g=0,m=(a*f+u)*i,p=a*i,b=l*i,v=0;h>v;v++){var y=d.subarray(g,g+b)
s.set(y,m),g+=b,m+=p}this.buffer=s}this.bufferLength=this.buffer.length,this.eof=!0}},e}(),Wa=function(){function e(e,t,a){this.stream=e,this.maybeLength=t,this.dict=a,za.call(this,t)}return e.prototype=Object.create(za.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return o(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var a=new lr,r=[],i=this.dict.xref,n=i.fetchIfRef(this.dict.get("DecodeParms"))
if(O(n)&&(n.length>1&&t("JBIG2 - 'DecodeParms' array with multiple elements not supported."),n=i.fetchIfRef(n[0])),n&&n.has("JBIG2Globals")){var s=n.get("JBIG2Globals"),o=s.getBytes()
r.push({data:o,start:0,end:o.length})}r.push({data:this.bytes,start:0,end:this.bytes.length})
for(var c=a.parseChunks(r),l=c.length,h=0;l>h;h++)c[h]^=255
this.buffer=c,this.bufferLength=l,this.eof=!0}},e}(),Va=function(){function e(e,t,a){this.str=e,this.dict=e.dict,this.decrypt=a,this.nextChunk=null,this.initialized=!1,za.call(this,t)}var t=512
return e.prototype=Object.create(za.prototype),e.prototype.readBlock=function(){var e
if(this.initialized?e=this.nextChunk:(e=this.str.getBytes(t),this.initialized=!0),!e||0===e.length)return void(this.eof=!0)
this.nextChunk=this.str.getBytes(t)
var a=this.nextChunk&&this.nextChunk.length>0,r=this.decrypt
e=r(e,!a)
var i,n=this.bufferLength,s=e.length,o=this.ensureBuffer(n+s)
for(i=0;s>i;i++)o[n++]=e[i]
this.bufferLength=n},e}(),Ka=function(){function e(e,t){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),t&&(t=.8*t),za.call(this,t)}return e.prototype=Object.create(za.prototype),e.prototype.readBlock=function(){for(var e=126,t=122,a=-1,r=this.str,i=r.getByte();Pa.isSpace(i);)i=r.getByte()
if(i===a||i===e)return void(this.eof=!0)
var n,s,o=this.bufferLength
if(i===t){for(n=this.ensureBuffer(o+4),s=0;4>s;++s)n[o+s]=0
this.bufferLength+=4}else{var c=this.input
for(c[0]=i,s=1;5>s;++s){for(i=r.getByte();Pa.isSpace(i);)i=r.getByte()
if(c[s]=i,i===a||i===e)break}if(n=this.ensureBuffer(o+s-1),this.bufferLength+=s-1,5>s){for(;5>s;++s)c[s]=117
this.eof=!0}var l=0
for(s=0;5>s;++s)l=85*l+(c[s]-33)
for(s=3;s>=0;--s)n[o+s]=255&l,l>>=8}},e}(),Ya=function(){function e(e,t){this.str=e,this.dict=e.dict,this.firstDigit=-1,t&&(t=.5*t),za.call(this,t)}return e.prototype=Object.create(za.prototype),e.prototype.readBlock=function(){var e=8e3,t=this.str.getBytes(e)
if(!t.length)return void(this.eof=!0)
for(var a=t.length+1>>1,r=this.ensureBuffer(this.bufferLength+a),i=this.bufferLength,n=this.firstDigit,s=0,o=t.length;o>s;s++){var c,l=t[s]
if(l>=48&&57>=l)c=15&l
else{if(!(l>=65&&70>=l||l>=97&&102>=l)){if(62===l){this.eof=!0
break}continue}c=(15&l)+9}0>n?n=c:(r[i++]=n<<4|c,n=-1)}n>=0&&this.eof&&(r[i++]=n<<4,n=-1),this.firstDigit=n,this.bufferLength=i},e}(),Za=function(){function e(e,t){this.str=e,this.dict=e.dict,za.call(this,t)}return e.prototype=Object.create(za.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(2)
if(!e||e.length<2||128===e[0])return void(this.eof=!0)
var t,a=this.bufferLength,r=e[0]
if(128>r){if(t=this.ensureBuffer(a+r+1),t[a++]=e[1],r>0){var i=this.str.getBytes(r)
t.set(i,a),a+=r}}else{r=257-r
var n=e[1]
t=this.ensureBuffer(a+r+1)
for(var s=0;r>s;s++)t[a++]=n}this.bufferLength=a},e}(),Qa=function(){function t(e,t,a){this.str=e,this.dict=e.dict,a=a||Be.empty,this.encoding=a.get("K")||0,this.eoline=a.get("EndOfLine")||!1,this.byteAlign=a.get("EncodedByteAlign")||!1,this.columns=a.get("Columns")||1728,this.rows=a.get("Rows")||0
var r=a.get("EndOfBlock")
null!==r&&void 0!==r||(r=!0),this.eoblock=r,this.black=a.get("BlackIs1")||!1,this.codingLine=new Uint32Array(this.columns+1),this.refLine=new Uint32Array(this.columns+2),this.codingLine[0]=this.columns,this.codingPos=0,this.row=0,this.nextLine2D=this.encoding<0,this.inputBits=0,this.inputBuf=0,this.outputBits=0
for(var i;0===(i=this.lookBits(12));)this.eatBits(1)
1===i&&this.eatBits(12),this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),za.call(this,t)}var a=-2,r=0,i=1,n=2,s=3,o=4,c=5,l=6,h=7,u=8,f=[[-1,-1],[-1,-1],[7,u],[7,h],[6,l],[6,l],[6,c],[6,c],[4,r],[4,r],[4,r],[4,r],[4,r],[4,r],[4,r],[4,r],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,i],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,o],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[3,s],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n],[1,n]],d=[[-1,-1],[12,a],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],g=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],m=[[-1,-1],[-1,-1],[12,a],[12,a],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],p=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],b=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]]
return t.prototype=Object.create(za.prototype),t.prototype.readBlock=function(){for(;!this.eof;){var e=this.lookChar()
this.ensureBuffer(this.bufferLength+1),this.buffer[this.bufferLength++]=e}},t.prototype.addPixels=function(t,a){var r=this.codingLine,i=this.codingPos
t>r[i]&&(t>this.columns&&(e("row is wrong length"),this.err=!0,t=this.columns),1&i^a&&++i,r[i]=t),this.codingPos=i},t.prototype.addPixelsNeg=function(t,a){var r=this.codingLine,i=this.codingPos
if(t>r[i])t>this.columns&&(e("row is wrong length"),this.err=!0,t=this.columns),1&i^a&&++i,r[i]=t
else if(t<r[i]){for(0>t&&(e("invalid code"),this.err=!0,t=0);i>0&&t<r[i-1];)--i
r[i]=t}this.codingPos=i},t.prototype.lookChar=function(){var t,a,f,d,g=this.refLine,m=this.codingLine,p=this.columns
if(0===this.outputBits){if(this.eof)return null
this.err=!1
var b,v,y
if(this.nextLine2D){for(d=0;m[d]<p;++d)g[d]=m[d]
for(g[d++]=p,g[d]=p,m[0]=0,this.codingPos=0,t=0,a=0;m[this.codingPos]<p;)switch(b=this.getTwoDimCode()){case r:this.addPixels(g[t+1],a),g[t+1]<p&&(t+=2)
break
case i:if(b=v=0,a){do b+=y=this.getBlackCode()
while(y>=64)
do v+=y=this.getWhiteCode()
while(y>=64)}else{do b+=y=this.getWhiteCode()
while(y>=64)
do v+=y=this.getBlackCode()
while(y>=64)}for(this.addPixels(m[this.codingPos]+b,a),m[this.codingPos]<p&&this.addPixels(m[this.codingPos]+v,1^a);g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case h:if(this.addPixels(g[t]+3,a),a^=1,m[this.codingPos]<p)for(++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case c:if(this.addPixels(g[t]+2,a),a^=1,m[this.codingPos]<p)for(++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case s:if(this.addPixels(g[t]+1,a),a^=1,m[this.codingPos]<p)for(++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case n:if(this.addPixels(g[t],a),a^=1,m[this.codingPos]<p)for(++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case u:if(this.addPixelsNeg(g[t]-3,a),a^=1,m[this.codingPos]<p)for(t>0?--t:++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case l:if(this.addPixelsNeg(g[t]-2,a),a^=1,m[this.codingPos]<p)for(t>0?--t:++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case o:if(this.addPixelsNeg(g[t]-1,a),a^=1,m[this.codingPos]<p)for(t>0?--t:++t;g[t]<=m[this.codingPos]&&g[t]<p;)t+=2
break
case Ra:this.addPixels(p,0),this.eof=!0
break
default:e("bad 2d code"),this.addPixels(p,0),this.err=!0}}else for(m[0]=0,this.codingPos=0,a=0;m[this.codingPos]<p;){if(b=0,a){do b+=y=this.getBlackCode()
while(y>=64)}else do b+=y=this.getWhiteCode()
while(y>=64)
this.addPixels(m[this.codingPos]+b,a),a^=1}var k=!1
if(this.byteAlign&&(this.inputBits&=-8),this.eoblock||this.row!==this.rows-1){if(b=this.lookBits(12),this.eoline)for(;b!==Ra&&1!==b;)this.eatBits(1),b=this.lookBits(12)
else for(;0===b;)this.eatBits(1),b=this.lookBits(12)
1===b?(this.eatBits(12),k=!0):b===Ra&&(this.eof=!0)}else this.eof=!0
if(!this.eof&&this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),this.eoblock&&k&&this.byteAlign){if(b=this.lookBits(12),1===b){if(this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1)),this.encoding>=0)for(d=0;4>d;++d)b=this.lookBits(12),1!==b&&e("bad rtc code: "+b),this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1))
this.eof=!0}}else if(this.err&&this.eoline){for(;;){if(b=this.lookBits(13),b===Ra)return this.eof=!0,null
if(b>>1===1)break
this.eatBits(1)}this.eatBits(12),this.encoding>0&&(this.eatBits(1),this.nextLine2D=!(1&b))}m[0]>0?this.outputBits=m[this.codingPos=0]:this.outputBits=m[this.codingPos=1],this.row++}var w
if(this.outputBits>=8)w=1&this.codingPos?0:255,this.outputBits-=8,0===this.outputBits&&m[this.codingPos]<p&&(this.codingPos++,this.outputBits=m[this.codingPos]-m[this.codingPos-1])
else{f=8,w=0
do this.outputBits>f?(w<<=f,1&this.codingPos||(w|=255>>8-f),this.outputBits-=f,f=0):(w<<=this.outputBits,1&this.codingPos||(w|=255>>8-this.outputBits),f-=this.outputBits,this.outputBits=0,m[this.codingPos]<p?(this.codingPos++,this.outputBits=m[this.codingPos]-m[this.codingPos-1]):f>0&&(w<<=f,f=0))
while(f)}return this.black&&(w^=255),w},t.prototype.findTableCode=function(e,t,a,r){for(var i=r||0,n=e;t>=n;++n){var s=this.lookBits(n)
if(s===Ra)return[!0,1,!1]
if(t>n&&(s<<=t-n),!i||s>=i){var o=a[s-i]
if(o[0]===n)return this.eatBits(n),[!0,o[1],!0]}}return[!1,0,!1]},t.prototype.getTwoDimCode=function(){var t,a=0
if(this.eoblock){if(a=this.lookBits(7),t=f[a],t&&t[0]>0)return this.eatBits(t[0]),t[1]}else{var r=this.findTableCode(1,7,f)
if(r[0]&&r[2])return r[1]}return e("Bad two dim code"),Ra},t.prototype.getWhiteCode=function(){var t,a=0
if(this.eoblock){if(a=this.lookBits(12),a===Ra)return 1
if(t=a>>5===0?d[a]:g[a>>3],t[0]>0)return this.eatBits(t[0]),t[1]}else{var r=this.findTableCode(1,9,g)
if(r[0])return r[1]
if(r=this.findTableCode(11,12,d),r[0])return r[1]}return e("bad white code"),this.eatBits(1),1},t.prototype.getBlackCode=function(){var t,a
if(this.eoblock){if(t=this.lookBits(13),t===Ra)return 1
if(a=t>>7===0?m[t]:t>>9===0&&t>>7!==0?p[(t>>1)-64]:b[t>>7],a[0]>0)return this.eatBits(a[0]),a[1]}else{var r=this.findTableCode(2,6,b)
if(r[0])return r[1]
if(r=this.findTableCode(7,12,p,64),r[0])return r[1]
if(r=this.findTableCode(10,13,m),r[0])return r[1]}return e("bad black code"),this.eatBits(1),1},t.prototype.lookBits=function(e){for(var t;this.inputBits<e;){if(-1===(t=this.str.getByte()))return 0===this.inputBits?Ra:this.inputBuf<<e-this.inputBits&65535>>16-e
this.inputBuf=(this.inputBuf<<8)+t,this.inputBits+=8}return this.inputBuf>>this.inputBits-e&65535>>16-e},t.prototype.eatBits=function(e){(this.inputBits-=e)<0&&(this.inputBits=0)},t}(),$a=function(){function e(e,t,a){this.str=e,this.dict=e.dict,this.cachedData=0,this.bitsCached=0
for(var r=4096,i={earlyChange:a,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(r),dictionaryLengths:new Uint16Array(r),dictionaryPrevCodes:new Uint16Array(r),currentSequence:new Uint8Array(r),currentSequenceLength:0},n=0;256>n;++n)i.dictionaryValues[n]=n,i.dictionaryLengths[n]=1
this.lzwState=i,za.call(this,t)}return e.prototype=Object.create(za.prototype),e.prototype.readBits=function(e){for(var t=this.bitsCached,a=this.cachedData;e>t;){var r=this.str.getByte()
if(-1===r)return this.eof=!0,null
a=a<<8|r,t+=8}return this.bitsCached=t-=e,this.cachedData=a,this.lastCode=null,a>>>t&(1<<e)-1},e.prototype.readBlock=function(){var e,t,a,r=512,i=2*r,n=r,s=this.lzwState
if(s){var o=s.earlyChange,c=s.nextCode,l=s.dictionaryValues,h=s.dictionaryLengths,u=s.dictionaryPrevCodes,f=s.codeLength,d=s.prevCode,g=s.currentSequence,m=s.currentSequenceLength,p=0,b=this.bufferLength,v=this.ensureBuffer(this.bufferLength+i)
for(e=0;r>e;e++){var y=this.readBits(f),k=m>0
if(256>y)g[0]=y,m=1
else{if(!(y>=258)){if(256===y){f=9,c=258,m=0
continue}this.eof=!0,delete this.lzwState
break}if(c>y)for(m=h[y],t=m-1,a=y;t>=0;t--)g[t]=l[a],a=u[a]
else g[m++]=g[0]}if(k&&(u[c]=d,h[c]=h[d]+1,l[c]=g[0],c++,f=c+o&c+o-1?f:0|Math.min(Math.log(c+o)/.6931471805599453+1,12)),d=y,p+=m,p>i){do i+=n
while(p>i)
v=this.ensureBuffer(this.bufferLength+i)}for(t=0;m>t;t++)v[b++]=g[t]}s.nextCode=c,s.codeLength=f,s.prevCode=d,s.currentSequenceLength=m,this.bufferLength=b}},e}(),er=function(){function e(){Na.call(this,new Uint8Array(0))}return e.prototype=Na.prototype,e}(),tr=function(){function e(e){this.name=e,this.terminated=!1,this._capability=P()}return e.prototype={get finished(){return this._capability.promise},finish:function(){this._capability.resolve()},terminate:function(){this.terminated=!0},ensureNotTerminated:function(){if(this.terminated)throw new Error("Worker task was terminated")}},e}(),ar=PDFJS.WorkerMessageHandler={setup:function(e,t){e.on("test",function(t){if(!(t instanceof Uint8Array))return void e.send("test","main",!1)
var a=255===t[0]
e.postMessageTransfers=a
var r=new XMLHttpRequest,i="response"in r
try{r.responseType}catch(n){i=!1}return i?void e.send("test",{supportTypedArray:!0,supportTransfers:a}):void e.send("test",!1)}),e.on("GetDocRequest",function(e){return ar.createDocumentHandler(e,t)})},createDocumentHandler:function(a,r){function i(){if(h)throw new Error("Worker was terminated")}function n(e){f.push(e)}function s(e){e.finish()
var t=f.indexOf(e)
f.splice(t,1)}function o(e){var t=P(),a=function(){var e=l.ensureDoc("numPages"),a=l.ensureDoc("fingerprint"),i=l.ensureXRef("encrypt")
Promise.all([e,a,i]).then(function(e){var a={numPages:e[0],fingerprint:e[1],encrypted:!!e[2]}
t.resolve(a)},r)},r=function(e){t.reject(e)}
return l.ensureDoc("checkHeader",[]).then(function(){l.ensureDoc("parseStartXRef",[]).then(function(){l.ensureDoc("parse",[e]).then(a,r)},r)},r),t.promise}function c(e){var a,r=P(),i=e.source,n=e.disableRange
if(i.data){try{a=new we(d,i.data,i.password),r.resolve(a)}catch(s){r.reject(s)}return r.promise}if(i.chunkedViewerLoading){try{a=new xe(d,i,m),r.resolve(a)}catch(s){r.reject(s)}return r.promise}var o=new be(i.url,{httpHeaders:i.httpHeaders,withCredentials:i.withCredentials}),c=[],l=o.requestFull({onHeadersReceived:function(){if(!n){var e=o.getRequestXhr(l)
if("bytes"===e.getResponseHeader("Accept-Ranges")){var t=e.getResponseHeader("Content-Encoding")||"identity"
if("identity"===t){var s=e.getResponseHeader("Content-Length")
if(s=parseInt(s,10),C(s)&&(i.length=s,!(s<=2*i.rangeChunkSize))){o.isStreamingRequest(l)?i.disableAutoFetch=!0:o.abortRequest(l)
try{a=new xe(d,i,m),r.resolve(a)}catch(c){r.reject(c)}u=null}}}}},onProgressiveData:i.disableStream?null:function(e){return a?void a.sendProgressiveData(e):void c.push(e)},onDone:function(e){if(!a){var n
if(null===e){var s=0,o=0
c.forEach(function(e){s+=e.byteLength}),i.length&&s!==i.length&&t("reported HTTP length is different from actual")
var l=new Uint8Array(s)
c.forEach(function(e){l.set(new Uint8Array(e),o),o+=e.byteLength}),n=l.buffer}else n=e.chunk
try{a=new we(d,n,i.password),r.resolve(a)}catch(h){r.reject(h)}u=null}},onError:function(e){var t
404===e||0===e&&/^file:/.test(i.url)?(t=new ce('Missing PDF "'+i.url+'".'),m.send("MissingPDF",t)):(t=new le("Unexpected server response ("+e+') while retrieving PDF "'+i.url+'".',e),m.send("UnexpectedResponse",t)),u=null},onProgress:function(e){m.send("DocProgress",{loaded:e.loaded,total:e.lengthComputable?e.total:i.length})}})
return u=function(){o.abortRequest(l)},r.promise}var l,h=!1,u=null,f=[],d=a.docId,g=a.docId+"_worker",m=new E(g,d,r),p=function(e){var t=function(e){i(),m.send("GetDoc",{pdfInfo:e})},a=function(e){e instanceof ne?e.code===ie.NEED_PASSWORD?m.send("NeedPassword",e):e.code===ie.INCORRECT_PASSWORD&&m.send("IncorrectPassword",e):e instanceof oe?m.send("InvalidPDF",e):e instanceof ce?m.send("MissingPDF",e):e instanceof le?m.send("UnexpectedResponse",e):m.send("UnknownError",new se(e.message,e.toString()))}
i(),PDFJS.maxImageSize=void 0===e.maxImageSize?-1:e.maxImageSize,PDFJS.disableFontFace=e.disableFontFace,PDFJS.disableCreateObjectURL=e.disableCreateObjectURL,PDFJS.verbosity=e.verbosity,PDFJS.cMapUrl=void 0===e.cMapUrl?null:e.cMapUrl,PDFJS.cMapPacked=e.cMapPacked===!0,c(e).then(function(e){if(h)throw e.terminate(),new Error("Worker was terminated")
l=e,m.send("PDFManagerReady",null),l.onLoadedStream().then(function(e){m.send("DataLoaded",{length:e.bytes.byteLength})})}).then(function r(){i(),o(!1).then(t,function(e){return i(),e instanceof fe?(l.requestLoadedStream(),void l.onLoadedStream().then(function(){i(),o(!0).then(t,a)})):(e instanceof ne&&l.passwordChanged().then(r),void a(e))},a)},a)}
return m.on("GetPage",function(e){return l.getPage(e.pageIndex).then(function(e){var t=l.ensure(e,"rotate"),a=l.ensure(e,"ref"),r=l.ensure(e,"view")
return Promise.all([t,a,r]).then(function(e){return{rotate:e[0],ref:e[1],view:e[2]}})})}),m.on("GetPageIndex",function(e){var t=new Te(e.ref.num,e.ref.gen),a=l.pdfDocument.catalog
return a.getPageIndex(t)}),m.on("GetDestinations",function(e){return l.ensureCatalog("destinations")}),m.on("GetDestination",function(e){return l.ensureCatalog("getDestination",[e.id])}),m.on("GetAttachments",function(e){return l.ensureCatalog("attachments")}),m.on("GetJavaScript",function(e){return l.ensureCatalog("javaScript")}),m.on("GetOutline",function(e){return l.ensureCatalog("documentOutline")}),m.on("GetMetadata",function(e){return Promise.all([l.ensureDoc("documentInfo"),l.ensureCatalog("metadata")])}),m.on("GetData",function(e){return l.requestLoadedStream(),l.onLoadedStream().then(function(e){return e.bytes})}),m.on("GetStats",function(e){return l.pdfDocument.xref.stats}),m.on("UpdatePassword",function(e){l.updatePassword(e)}),m.on("GetAnnotations",function(e){return l.getPage(e.pageIndex).then(function(t){return l.ensure(t,"getAnnotationsData",[e.intent])})}),m.on("RenderPageRequest",function(t){var a=t.pageIndex
l.getPage(a).then(function(r){var i=new tr("RenderPageRequest: page "+a)
n(i)
var o=a+1,c=Date.now()
r.getOperatorList(m,i,t.intent).then(function(t){s(i),e("page="+o+" - getOperatorList: time="+(Date.now()-c)+"ms, len="+t.totalLength)},function(e){if(s(i),!i.terminated){m.send("UnsupportedFeature",{featureId:ae.unknown})
var a,r="worker.js: while trying to getPage() and getOperatorList()"
a="string"==typeof e?{message:e,stack:r}:"object"==typeof e?{message:e.message||e.toString(),stack:e.stack||r}:{message:"Unknown exception type: "+typeof e,stack:r},m.send("PageError",{pageNum:o,error:a,intent:t.intent})}})})},this),m.on("GetTextContent",function(t){var a=t.pageIndex,r=t.normalizeWhitespace
return l.getPage(a).then(function(t){var i=new tr("GetTextContent: page "+a)
n(i)
var o=a+1,c=Date.now()
return t.extractTextContent(i,r).then(function(t){return s(i),e("text indexing: page="+o+" - time="+(Date.now()-c)+"ms"),t},function(e){if(s(i),!i.terminated)throw e})})}),m.on("Cleanup",function(e){return l.cleanup()}),m.on("Terminate",function(e){h=!0,l&&(l.terminate(),l=null),u&&u()
var t=[]
return f.forEach(function(e){t.push(e.finished),e.terminate()}),Promise.all(t).then(function(){m.destroy(),m=null})}),m.on("Ready",function(e){p(a),a=null}),g}},rr={},ir={log:function(){var e=Array.prototype.slice.call(arguments)
J.postMessage({targetName:"main",action:"console_log",data:e})},error:function(){var e=Array.prototype.slice.call(arguments)
throw J.postMessage({targetName:"main",action:"console_error",data:e}),"pdf.js execution error"},time:function(e){rr[e]=Date.now()},timeEnd:function(e){var t=rr[e]
t||r("Unknown timer name "+e),this.log("Timer:",e,Date.now()-t)}}
if("undefined"==typeof window){"console"in J||(J.console=ir)
var nr=new E("worker","main",this)
ar.setup(nr,this)}var sr=function(){function e(e,t,a){this.data=e,this.bp=t,this.dataEnd=a,this.chigh=e[t],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}var t=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}]
return e.prototype={byteIn:function(){var e=this.data,t=this.bp
if(255===e[t]){var a=e[t+1]
a>143?(this.clow+=65280,this.ct=8):(t++,this.clow+=e[t]<<9,this.ct=7,this.bp=t)}else t++,this.clow+=t<this.dataEnd?e[t]<<8:65280,this.ct=8,this.bp=t
this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)},readBit:function(e,a){var r,i=e[a]>>1,n=1&e[a],s=t[i],o=s.qe,c=this.a-o
if(this.chigh<o)o>c?(c=o,r=n,i=s.nmps):(c=o,r=1^n,1===s.switchFlag&&(n=r),i=s.nlps)
else{if(this.chigh-=o,0!==(32768&c))return this.a=c,n
o>c?(r=1^n,1===s.switchFlag&&(n=r),i=s.nlps):(r=n,i=s.nmps)}do 0===this.ct&&this.byteIn(),c<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--
while(0===(32768&c))
return this.a=c,e[a]=i<<1|n,r}},e}(),or=function(){function e(){}function t(e,t){for(var a,r,i=0,n=[],s=16;s>0&&!e[s-1];)s--
n.push({children:[],index:0})
var o,c=n[0]
for(a=0;s>a;a++){for(r=0;r<e[a];r++){for(c=n.pop(),c.children[c.index]=t[i];c.index>0;)c=n.pop()
for(c.index++,n.push(c);n.length<=a;)n.push(o={children:[],index:0}),c.children[c.index]=o.children,c=o
i++}s>a+1&&(n.push(o={children:[],index:0}),c.children[c.index]=o.children,c=o)}return n[0].children}function a(e,t,a){return 64*((e.blocksPerLine+1)*t+a)}function r(e,t,r,i,n,s,c,l,h){function u(){if(P>0)return P--,M>>P&1
if(M=e[t++],255===M){var a=e[t++]
if(a)throw"unexpected marker: "+(M<<8|a).toString(16)}return P=7,M>>>7}function f(e){for(var t=e;;){if(t=t[u()],"number"==typeof t)return t
if("object"!=typeof t)throw"invalid huffman sequence"}}function d(e){for(var t=0;e>0;)t=t<<1|u(),e--
return t}function g(e){if(1===e)return 1===u()?1:-1
var t=d(e)
return t>=1<<e-1?t:t+(-1<<e)+1}function m(e,t){var a=f(e.huffmanTableDC),r=0===a?0:g(a)
e.blockData[t]=e.pred+=r
for(var i=1;64>i;){var n=f(e.huffmanTableAC),s=15&n,c=n>>4
if(0!==s){i+=c
var l=o[i]
e.blockData[t+l]=g(s),i++}else{if(15>c)break
i+=16}}}function p(e,t){var a=f(e.huffmanTableDC),r=0===a?0:g(a)<<h
e.blockData[t]=e.pred+=r}function b(e,t){e.blockData[t]|=u()<<h}function v(e,t){if(E>0)return void E--
for(var a=s,r=c;r>=a;){var i=f(e.huffmanTableAC),n=15&i,l=i>>4
if(0!==n){a+=l
var u=o[a]
e.blockData[t+u]=g(n)*(1<<h),a++}else{if(15>l){E=d(l)+(1<<l)-1
break}a+=16}}}function y(e,t){for(var a,r,i=s,n=c,l=0;n>=i;){var m=o[i]
switch(D){case 0:if(r=f(e.huffmanTableAC),a=15&r,l=r>>4,0===a)15>l?(E=d(l)+(1<<l),D=4):(l=16,D=1)
else{if(1!==a)throw"invalid ACn encoding"
x=g(a),D=l?2:3}continue
case 1:case 2:e.blockData[t+m]?e.blockData[t+m]+=u()<<h:(l--,0===l&&(D=2===D?3:0))
break
case 3:e.blockData[t+m]?e.blockData[t+m]+=u()<<h:(e.blockData[t+m]=x<<h,D=0)
break
case 4:e.blockData[t+m]&&(e.blockData[t+m]+=u()<<h)}i++}4===D&&(E--,0===E&&(D=0))}function k(e,t,r,i,n){var s=r/O|0,o=r%O,c=s*e.v+i,l=o*e.h+n,h=a(e,c,l)
t(e,h)}function w(e,t,r){var i=r/e.blocksPerLine|0,n=r%e.blocksPerLine,s=a(e,i,n)
t(e,s)}var x,C,S,A,I,B,T,O=(r.precision,r.samplesPerLine,r.scanLines,r.mcusPerLine),R=r.progressive,L=(r.maxH,r.maxV,t),M=0,P=0,E=0,D=0,q=i.length
T=R?0===s?0===l?p:b:0===l?v:y:m
var F,U,N=0
U=1===q?i[0].blocksPerLine*i[0].blocksPerColumn:O*r.mcusPerColumn,n||(n=U)
for(var j,z;U>N;){for(S=0;q>S;S++)i[S].pred=0
if(E=0,1===q)for(C=i[0],B=0;n>B;B++)w(C,T,N),N++
else for(B=0;n>B;B++){for(S=0;q>S;S++)for(C=i[S],j=C.h,z=C.v,A=0;z>A;A++)for(I=0;j>I;I++)k(C,T,N,A,I)
N++}if(P=0,F=e[t]<<8|e[t+1],65280>=F)throw"marker was not found"
if(!(F>=65488&&65495>=F))break
t+=2}return t-L}function i(e,t,a){for(var r,i,n,s,o,p,b,v,y,k,w,x,C,S,A,I,B,T=e.quantizationTable,O=e.blockData,R=0;64>R;R+=8)y=O[t+R],k=O[t+R+1],w=O[t+R+2],x=O[t+R+3],C=O[t+R+4],S=O[t+R+5],A=O[t+R+6],I=O[t+R+7],y*=T[R],0!==(k|w|x|C|S|A|I)?(k*=T[R+1],w*=T[R+2],x*=T[R+3],C*=T[R+4],S*=T[R+5],A*=T[R+6],I*=T[R+7],r=g*y+128>>8,i=g*C+128>>8,n=w,s=A,o=m*(k-I)+128>>8,v=m*(k+I)+128>>8,p=x<<4,b=S<<4,r=r+i+1>>1,i=r-i,B=n*d+s*f+128>>8,n=n*f-s*d+128>>8,s=B,o=o+b+1>>1,b=o-b,v=v+p+1>>1,p=v-p,r=r+s+1>>1,s=r-s,i=i+n+1>>1,n=i-n,B=o*u+v*h+2048>>12,o=o*h-v*u+2048>>12,v=B,B=p*l+b*c+2048>>12,p=p*c-b*l+2048>>12,b=B,a[R]=r+v,a[R+7]=r-v,a[R+1]=i+b,a[R+6]=i-b,a[R+2]=n+p,a[R+5]=n-p,a[R+3]=s+o,a[R+4]=s-o):(B=g*y+512>>10,a[R]=B,a[R+1]=B,a[R+2]=B,a[R+3]=B,a[R+4]=B,a[R+5]=B,a[R+6]=B,a[R+7]=B)
for(var L=0;8>L;++L)y=a[L],k=a[L+8],w=a[L+16],x=a[L+24],C=a[L+32],S=a[L+40],A=a[L+48],I=a[L+56],0!==(k|w|x|C|S|A|I)?(r=g*y+2048>>12,i=g*C+2048>>12,n=w,s=A,o=m*(k-I)+2048>>12,v=m*(k+I)+2048>>12,p=x,b=S,r=(r+i+1>>1)+4112,i=r-i,B=n*d+s*f+2048>>12,n=n*f-s*d+2048>>12,s=B,o=o+b+1>>1,b=o-b,v=v+p+1>>1,p=v-p,r=r+s+1>>1,s=r-s,i=i+n+1>>1,n=i-n,B=o*u+v*h+2048>>12,o=o*h-v*u+2048>>12,v=B,B=p*l+b*c+2048>>12,p=p*c-b*l+2048>>12,b=B,y=r+v,I=r-v,k=i+b,A=i-b,w=n+p,S=n-p,x=s+o,C=s-o,y=16>y?0:y>=4080?255:y>>4,k=16>k?0:k>=4080?255:k>>4,w=16>w?0:w>=4080?255:w>>4,x=16>x?0:x>=4080?255:x>>4,C=16>C?0:C>=4080?255:C>>4,S=16>S?0:S>=4080?255:S>>4,A=16>A?0:A>=4080?255:A>>4,I=16>I?0:I>=4080?255:I>>4,O[t+L]=y,O[t+L+8]=k,O[t+L+16]=w,O[t+L+24]=x,O[t+L+32]=C,O[t+L+40]=S,O[t+L+48]=A,O[t+L+56]=I):(B=g*y+8192>>14,B=-2040>B?0:B>=2024?255:B+2056>>4,O[t+L]=B,O[t+L+8]=B,O[t+L+16]=B,O[t+L+24]=B,O[t+L+32]=B,O[t+L+40]=B,O[t+L+48]=B,O[t+L+56]=B)}function n(e,t){for(var r=t.blocksPerLine,n=t.blocksPerColumn,s=new Int16Array(64),o=0;n>o;o++)for(var c=0;r>c;c++){var l=a(t,o,c)
i(t,l,s)}return t.blockData}function s(e){return 0>=e?0:e>=255?255:e}var o=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),c=4017,l=799,h=3406,u=2276,f=1567,d=3784,g=5793,m=2896
return e.prototype={parse:function(e){function a(){var t=e[h]<<8|e[h+1]
return h+=2,t}function i(){var t=a(),r=e.subarray(h,h+t-2)
return h+=r.length,r}function s(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),a=Math.ceil(e.scanLines/8/e.maxV),r=0;r<e.components.length;r++){U=e.components[r]
var i=Math.ceil(Math.ceil(e.samplesPerLine/8)*U.h/e.maxH),n=Math.ceil(Math.ceil(e.scanLines/8)*U.v/e.maxV),s=t*U.h,o=a*U.v,c=64*o*(s+1)
U.blockData=new Int16Array(c),U.blocksPerLine=i,U.blocksPerColumn=n}e.mcusPerLine=t,e.mcusPerColumn=a}var c,l,h=0,u=(e.length,null),f=null,d=[],g=[],m=[],p=a()
if(65496!==p)throw"SOI not found"
for(p=a();65497!==p;){var b,v,y
switch(p){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var k=i()
65504===p&&74===k[0]&&70===k[1]&&73===k[2]&&70===k[3]&&0===k[4]&&(u={version:{major:k[5],minor:k[6]},densityUnits:k[7],xDensity:k[8]<<8|k[9],yDensity:k[10]<<8|k[11],thumbWidth:k[12],thumbHeight:k[13],thumbData:k.subarray(14,14+3*k[12]*k[13])}),65518===p&&65===k[0]&&100===k[1]&&111===k[2]&&98===k[3]&&101===k[4]&&(f={version:k[5]<<8|k[6],flags0:k[7]<<8|k[8],flags1:k[9]<<8|k[10],transformCode:k[11]})
break
case 65499:for(var w,x=a(),C=x+h-2;C>h;){var S=e[h++],A=new Uint16Array(64)
if(S>>4===0)for(v=0;64>v;v++)w=o[v],A[w]=e[h++]
else{if(S>>4!==1)throw"DQT: invalid table spec"
for(v=0;64>v;v++)w=o[v],A[w]=a()}d[15&S]=A}break
case 65472:case 65473:case 65474:if(c)throw"Only single frame JPEGs supported"
a(),c={},c.extended=65473===p,c.progressive=65474===p,c.precision=e[h++],c.scanLines=a(),c.samplesPerLine=a(),c.components=[],c.componentIds={}
var I,B=e[h++],T=0,O=0
for(b=0;B>b;b++){I=e[h]
var R=e[h+1]>>4,L=15&e[h+1]
R>T&&(T=R),L>O&&(O=L)
var M=e[h+2]
y=c.components.push({h:R,v:L,quantizationTable:d[M]}),c.componentIds[I]=y-1,h+=3}c.maxH=T,c.maxV=O,s(c)
break
case 65476:var P=a()
for(b=2;P>b;){var E=e[h++],D=new Uint8Array(16),q=0
for(v=0;16>v;v++,h++)q+=D[v]=e[h]
var F=new Uint8Array(q)
for(v=0;q>v;v++,h++)F[v]=e[h]
b+=17+q,(E>>4===0?m:g)[15&E]=t(D,F)}break
case 65501:a(),l=a()
break
case 65498:var U,N=(a(),e[h++]),j=[]
for(b=0;N>b;b++){var z=c.componentIds[e[h++]]
U=c.components[z]
var H=e[h++]
U.huffmanTableDC=m[H>>4],U.huffmanTableAC=g[15&H],j.push(U)}var _=e[h++],G=e[h++],X=e[h++],J=r(e,h,c,j,l,_,G,X>>4,15&X)
h+=J
break
case 65535:255!==e[h]&&h--
break
default:if(255===e[h-3]&&e[h-2]>=192&&e[h-2]<=254){h-=3
break}throw"unknown JPEG marker "+p.toString(16)}p=a()}for(this.width=c.samplesPerLine,this.height=c.scanLines,this.jfif=u,this.adobe=f,this.components=[],b=0;b<c.components.length;b++)U=c.components[b],this.components.push({output:n(c,U),scaleX:U.h/c.maxH,scaleY:U.v/c.maxV,blocksPerLine:U.blocksPerLine,blocksPerColumn:U.blocksPerColumn})
this.numComponents=this.components.length},_getLinearizedBlockData:function(e,t){var a,r,i,n,s,o,c,l,h,u,f,d=this.width/e,g=this.height/t,m=0,p=this.components.length,b=e*t*p,v=new Uint8Array(b),y=new Uint32Array(e),k=4294967288
for(c=0;p>c;c++){for(a=this.components[c],r=a.scaleX*d,i=a.scaleY*g,m=c,f=a.output,n=a.blocksPerLine+1<<3,s=0;e>s;s++)l=0|s*r,y[s]=(l&k)<<3|7&l
for(o=0;t>o;o++)for(l=0|o*i,u=n*(l&k)|(7&l)<<3,s=0;e>s;s++)v[m]=f[u+y[s]],m+=p}var w=this.decodeTransform
if(w)for(c=0;b>c;)for(l=0,h=0;p>l;l++,c++,h+=2)v[c]=(v[c]*w[h]>>8)+w[h+1]
return v},_isColorConversionNeeded:function(){return this.adobe&&this.adobe.transformCode?!0:3===this.numComponents},_convertYccToRgb:function(e){for(var t,a,r,i=0,n=e.length;n>i;i+=3)t=e[i],a=e[i+1],r=e[i+2],e[i]=s(t-179.456+1.402*r),e[i+1]=s(t+135.459-.344*a-.714*r),e[i+2]=s(t-226.816+1.772*a)
return e},_convertYcckToRgb:function(e){for(var t,a,r,i,n=0,o=0,c=e.length;c>o;o+=4){t=e[o],a=e[o+1],r=e[o+2],i=e[o+3]
var l=-122.67195406894+a*(-660635669420364e-19*a+.000437130475926232*r-54080610064599e-18*t+.00048449797120281*i-.154362151871126)+r*(-.000957964378445773*r+.000817076911346625*t-.00477271405408747*i+1.53380253221734)+t*(.000961250184130688*t-.00266257332283933*i+.48357088451265)+i*(-.000336197177618394*i+.484791561490776),h=107.268039397724+a*(219927104525741e-19*a-.000640992018297945*r+.000659397001245577*t+.000426105652938837*i-.176491792462875)+r*(-.000778269941513683*r+.00130872261408275*t+.000770482631801132*i-.151051492775562)+t*(.00126935368114843*t-.00265090189010898*i+.25802910206845)+i*(-.000318913117588328*i-.213742400323665),u=-20.810012546947+a*(-.000570115196973677*a-263409051004589e-19*r+.0020741088115012*t-.00288260236853442*i+.814272968359295)+r*(-153496057440975e-19*r-.000132689043961446*t+.000560833691242812*i-.195152027534049)+t*(.00174418132927582*t-.00255243321439347*i+.116935020465145)+i*(-.000343531996510555*i+.24165260232407)
e[n++]=s(l),e[n++]=s(h),e[n++]=s(u)}return e},_convertYcckToCmyk:function(e){for(var t,a,r,i=0,n=e.length;n>i;i+=4)t=e[i],a=e[i+1],r=e[i+2],e[i]=s(434.456-t-1.402*r),e[i+1]=s(119.541-t+.344*a+.714*r),e[i+2]=s(481.816-t-1.772*a)
return e},_convertCmykToRgb:function(e){for(var t,a,r,i,n=0,s=-16581375,o=1/255/255,c=0,l=e.length;l>c;c+=4){t=e[c],a=e[c+1],r=e[c+2],i=e[c+3]
var h=t*(-4.387332384609988*t+54.48615194189176*a+18.82290502165302*r+212.25662451639585*i-72734.4411664936)+a*(1.7149763477362134*a-5.6096736904047315*r-17.873870861415444*i-1401.7366389350734)+r*(-2.5217340131683033*r-21.248923337353073*i+4465.541406466231)-i*(21.86122147463605*i+48317.86113160301),u=t*(8.841041422036149*t+60.118027045597366*a+6.871425592049007*r+31.159100130055922*i-20220.756542821975)+a*(-15.310361306967817*a+17.575251261109482*r+131.35250912493976*i-48691.05921601825)+r*(4.444339102852739*r+9.8632861493405*i-6341.191035517494)-i*(20.737325471181034*i+47890.15695978492),f=t*(.8842522430003296*t+8.078677503112928*a+30.89978309703729*r-.23883238689178934*i-3616.812083916688)+a*(10.49593273432072*a+63.02378494754052*r+50.606957656360734*i-28620.90484698408)+r*(.03296041114873217*r+115.60384449646641*i-49363.43385999684)-i*(22.33816807309886*i+45932.16563550634)
e[n++]=h>=0?255:s>=h?0:255+h*o|0,e[n++]=u>=0?255:s>=u?0:255+u*o|0,e[n++]=f>=0?255:s>=f?0:255+f*o|0}return e},getData:function(e,t,a){if(this.numComponents>4)throw"Unsupported color mode"
var r=this._getLinearizedBlockData(e,t)
if(3===this.numComponents)return this._convertYccToRgb(r)
if(4===this.numComponents){if(this._isColorConversionNeeded())return a?this._convertYcckToRgb(r):this._convertYcckToCmyk(r)
if(a)return this._convertCmykToRgb(r)}return r}},e}(),cr=function(){function a(){this.failOnCorruptedImage=!1}function r(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz),e.x1=Math.ceil(t.Xsiz/e.XRsiz),e.y0=Math.ceil(t.YOsiz/e.YRsiz),e.y1=Math.ceil(t.Ysiz/e.YRsiz),e.width=e.x1-e.x0,e.height=e.y1-e.y0}function i(e,t){for(var a,r=e.SIZ,i=[],n=Math.ceil((r.Xsiz-r.XTOsiz)/r.XTsiz),s=Math.ceil((r.Ysiz-r.YTOsiz)/r.YTsiz),o=0;s>o;o++)for(var c=0;n>c;c++)a={},a.tx0=Math.max(r.XTOsiz+c*r.XTsiz,r.XOsiz),a.ty0=Math.max(r.YTOsiz+o*r.YTsiz,r.YOsiz),a.tx1=Math.min(r.XTOsiz+(c+1)*r.XTsiz,r.Xsiz),a.ty1=Math.min(r.YTOsiz+(o+1)*r.YTsiz,r.Ysiz),a.width=a.tx1-a.tx0,a.height=a.ty1-a.ty0,a.components=[],i.push(a)
e.tiles=i
for(var l=r.Csiz,h=0,u=l;u>h;h++)for(var f=t[h],d=0,g=i.length;g>d;d++){var m={}
a=i[d],m.tcx0=Math.ceil(a.tx0/f.XRsiz),m.tcy0=Math.ceil(a.ty0/f.YRsiz),m.tcx1=Math.ceil(a.tx1/f.XRsiz),m.tcy1=Math.ceil(a.ty1/f.YRsiz),m.width=m.tcx1-m.tcx0,m.height=m.tcy1-m.tcy0,a.components[h]=m}}function n(e,t,a){var r=t.codingStyleParameters,i={}
return r.entropyCoderWithCustomPrecincts?(i.PPx=r.precinctsSizes[a].PPx,i.PPy=r.precinctsSizes[a].PPy):(i.PPx=15,i.PPy=15),i.xcb_=a>0?Math.min(r.xcb,i.PPx-1):Math.min(r.xcb,i.PPx),i.ycb_=a>0?Math.min(r.ycb,i.PPy-1):Math.min(r.ycb,i.PPy),i}function s(e,t,a){var r=1<<a.PPx,i=1<<a.PPy,n=0===t.resLevel,s=1<<a.PPx+(n?0:-1),o=1<<a.PPy+(n?0:-1),c=t.trx1>t.trx0?Math.ceil(t.trx1/r)-Math.floor(t.trx0/r):0,l=t.try1>t.try0?Math.ceil(t.try1/i)-Math.floor(t.try0/i):0,h=c*l
t.precinctParameters={precinctWidth:r,precinctHeight:i,numprecinctswide:c,numprecinctshigh:l,numprecincts:h,precinctWidthInSubband:s,precinctHeightInSubband:o}}function o(e,t,a){var r,i,n,s,o=a.xcb_,c=a.ycb_,l=1<<o,h=1<<c,u=t.tbx0>>o,f=t.tby0>>c,d=t.tbx1+l-1>>o,g=t.tby1+h-1>>c,m=t.resolution.precinctParameters,p=[],b=[]
for(i=f;g>i;i++)for(r=u;d>r;r++){n={cbx:r,cby:i,tbx0:l*r,tby0:h*i,tbx1:l*(r+1),tby1:h*(i+1)},n.tbx0_=Math.max(t.tbx0,n.tbx0),n.tby0_=Math.max(t.tby0,n.tby0),n.tbx1_=Math.min(t.tbx1,n.tbx1),n.tby1_=Math.min(t.tby1,n.tby1)
var v=Math.floor((n.tbx0_-t.tbx0)/m.precinctWidthInSubband),y=Math.floor((n.tby0_-t.tby0)/m.precinctHeightInSubband)
if(s=v+y*m.numprecinctswide,n.precinctNumber=s,n.subbandType=t.type,n.Lblock=3,!(n.tbx1_<=n.tbx0_||n.tby1_<=n.tby0_)){p.push(n)
var k=b[s]
void 0!==k?(r<k.cbxMin?k.cbxMin=r:r>k.cbxMax&&(k.cbxMax=r),i<k.cbyMin?k.cbxMin=i:i>k.cbyMax&&(k.cbyMax=i)):b[s]=k={cbxMin:r,cbyMin:i,cbxMax:r,cbyMax:i},n.precinct=k}}t.codeblockParameters={codeblockWidth:o,codeblockHeight:c,numcodeblockwide:d-u+1,numcodeblockhigh:g-f+1},t.codeblocks=p,t.precincts=b}function c(e,t,a){for(var r=[],i=e.subbands,n=0,s=i.length;s>n;n++)for(var o=i[n],c=o.codeblocks,l=0,h=c.length;h>l;l++){var u=c[l]
u.precinctNumber===t&&r.push(u)}return{layerNumber:a,codeblocks:r}}function l(e){for(var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=0,o=0;n>o;o++)s=Math.max(s,r.components[o].codingStyleParameters.decompositionLevelsCount)
var l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;i>l;l++){for(;s>=h;h++){for(;n>u;u++){var e=r.components[u]
if(!(h>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[h],a=t.precinctParameters.numprecincts;a>f;){var o=c(t,f,l)
return f++,o}f=0}}u=0}h=0}throw new Error("JPX Error: Out of packets")}}function h(e){for(var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=0,o=0;n>o;o++)s=Math.max(s,r.components[o].codingStyleParameters.decompositionLevelsCount)
var l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;s>=l;l++){for(;i>h;h++){for(;n>u;u++){var e=r.components[u]
if(!(l>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[l],a=t.precinctParameters.numprecincts;a>f;){var o=c(t,f,h)
return f++,o}f=0}}u=0}h=0}throw new Error("JPX Error: Out of packets")}}function u(e){var t,a,r,i,n=e.SIZ,s=e.currentTile.index,o=e.tiles[s],l=o.codingStyleDefaultParameters.layersCount,h=n.Csiz,u=0
for(r=0;h>r;r++){var f=o.components[r]
u=Math.max(u,f.codingStyleParameters.decompositionLevelsCount)}var d=new Int32Array(u+1)
for(a=0;u>=a;++a){var g=0
for(r=0;h>r;++r){var m=o.components[r].resolutions
a<m.length&&(g=Math.max(g,m[a].precinctParameters.numprecincts))}d[a]=g}t=0,a=0,r=0,i=0,this.nextPacket=function(){for(;u>=a;a++){for(;i<d[a];i++){for(;h>r;r++){var e=o.components[r]
if(!(a>e.codingStyleParameters.decompositionLevelsCount)){var n=e.resolutions[a],s=n.precinctParameters.numprecincts
if(!(i>=s)){for(;l>t;){var f=c(n,i,t)
return t++,f}t=0}}}r=0}i=0}throw new Error("JPX Error: Out of packets")}}function d(e){var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=v(r),o=s,l=0,h=0,u=0,f=0,d=0
this.nextPacket=function(){for(;d<o.maxNumHigh;d++){for(;f<o.maxNumWide;f++){for(;n>u;u++){for(var e=r.components[u],t=e.codingStyleParameters.decompositionLevelsCount;t>=h;h++){var a=e.resolutions[h],g=s.components[u].resolutions[h],m=b(f,d,g,o,a)
if(null!==m){for(;i>l;){var p=c(a,m,l)
return l++,p}l=0}}h=0}u=0}f=0}throw new Error("JPX Error: Out of packets")}}function p(e){var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=r.codingStyleDefaultParameters.layersCount,n=t.Csiz,s=v(r),o=0,l=0,h=0,u=0,f=0
this.nextPacket=function(){for(;n>h;++h){for(var e=r.components[h],t=s.components[h],a=e.codingStyleParameters.decompositionLevelsCount;f<t.maxNumHigh;f++){for(;u<t.maxNumWide;u++){for(;a>=l;l++){var d=e.resolutions[l],g=t.resolutions[l],m=b(u,f,g,t,d)
if(null!==m){for(;i>o;){var p=c(d,m,o)
return o++,p}o=0}}l=0}u=0}f=0}throw new Error("JPX Error: Out of packets")}}function b(e,t,a,r,i){var n=e*r.minWidth,s=t*r.minHeight
if(n%a.width!==0||s%a.height!==0)return null
var o=s/a.width*i.precinctParameters.numprecinctswide
return n/a.height+o}function v(e){for(var t=e.components.length,a=Number.MAX_VALUE,r=Number.MAX_VALUE,i=0,n=0,s=new Array(t),o=0;t>o;o++){for(var c=e.components[o],l=c.codingStyleParameters.decompositionLevelsCount,h=new Array(l+1),u=Number.MAX_VALUE,f=Number.MAX_VALUE,d=0,g=0,m=1,p=l;p>=0;--p){var b=c.resolutions[p],v=m*b.precinctParameters.precinctWidth,y=m*b.precinctParameters.precinctHeight
u=Math.min(u,v),f=Math.min(f,y),d=Math.max(d,b.precinctParameters.numprecinctswide),g=Math.max(g,b.precinctParameters.numprecinctshigh),h[p]={width:v,height:y},m<<=1}a=Math.min(a,u),r=Math.min(r,f),i=Math.max(i,d),n=Math.max(n,g),s[o]={resolutions:h,minWidth:u,minHeight:f,maxNumWide:d,maxNumHigh:g}}return{components:s,minWidth:a,minHeight:r,maxNumWide:i,maxNumHigh:n}}function y(e){for(var t=e.SIZ,a=e.currentTile.index,r=e.tiles[a],i=t.Csiz,c=0;i>c;c++){for(var f=r.components[c],g=f.codingStyleParameters.decompositionLevelsCount,m=[],b=[],v=0;g>=v;v++){var y=n(e,f,v),k={},w=1<<g-v
k.trx0=Math.ceil(f.tcx0/w),k.try0=Math.ceil(f.tcy0/w),k.trx1=Math.ceil(f.tcx1/w),k.try1=Math.ceil(f.tcy1/w),k.resLevel=v,s(e,k,y),m.push(k)
var x
if(0===v)x={},x.type="LL",x.tbx0=Math.ceil(f.tcx0/w),x.tby0=Math.ceil(f.tcy0/w),x.tbx1=Math.ceil(f.tcx1/w),x.tby1=Math.ceil(f.tcy1/w),x.resolution=k,o(e,x,y),b.push(x),k.subbands=[x]
else{var C=1<<g-v+1,S=[]
x={},x.type="HL",x.tbx0=Math.ceil(f.tcx0/C-.5),x.tby0=Math.ceil(f.tcy0/C),x.tbx1=Math.ceil(f.tcx1/C-.5),x.tby1=Math.ceil(f.tcy1/C),x.resolution=k,o(e,x,y),b.push(x),S.push(x),x={},x.type="LH",x.tbx0=Math.ceil(f.tcx0/C),x.tby0=Math.ceil(f.tcy0/C-.5),x.tbx1=Math.ceil(f.tcx1/C),x.tby1=Math.ceil(f.tcy1/C-.5),x.resolution=k,o(e,x,y),b.push(x),S.push(x),x={},x.type="HH",x.tbx0=Math.ceil(f.tcx0/C-.5),x.tby0=Math.ceil(f.tcy0/C-.5),x.tbx1=Math.ceil(f.tcx1/C-.5),x.tby1=Math.ceil(f.tcy1/C-.5),x.resolution=k,o(e,x,y),b.push(x),S.push(x),k.subbands=S}}f.resolutions=m,f.subbands=b}var A=r.codingStyleDefaultParameters.progressionOrder
switch(A){case 0:r.packetsIterator=new l(e)
break
case 1:r.packetsIterator=new h(e)
break
case 2:r.packetsIterator=new u(e)
break
case 3:r.packetsIterator=new d(e)
break
case 4:r.packetsIterator=new p(e)
break
default:throw new Error("JPX Error: Unsupported progression order "+A)}}function k(e,t,a,r){function i(e){for(;e>u;){var r=t[a+h]
h++,d?(l=l<<7|r,u+=7,d=!1):(l=l<<8|r,u+=8),255===r&&(d=!0)}return u-=e,l>>>u&(1<<e)-1}function n(e){return 255===t[a+h-1]&&t[a+h]===e?(s(1),!0):255===t[a+h]&&t[a+h+1]===e?(s(2),!0):!1}function s(e){h+=e}function o(){u=0,d&&(h++,d=!1)}function c(){if(0===i(1))return 1
if(0===i(1))return 2
var e=i(2)
return 3>e?e+3:(e=i(5),31>e?e+6:(e=i(7),e+37))}for(var l,h=0,u=0,d=!1,g=e.currentTile.index,m=e.tiles[g],p=e.COD.sopMarkerUsed,b=e.COD.ephMarkerUsed,v=m.packetsIterator;r>h;){o(),p&&n(145)&&s(4)
var y=v.nextPacket()
if(i(1)){for(var k,w=y.layerNumber,x=[],C=0,S=y.codeblocks.length;S>C;C++){k=y.codeblocks[C]
var A,T=k.precinct,O=k.cbx-T.cbxMin,R=k.cby-T.cbyMin,L=!1,M=!1
if(void 0!==k.included)L=!!i(1)
else{T=k.precinct
var P,E
if(void 0!==T.inclusionTree)P=T.inclusionTree
else{var D=T.cbxMax-T.cbxMin+1,q=T.cbyMax-T.cbyMin+1
P=new B(D,q,w),E=new I(D,q),T.inclusionTree=P,T.zeroBitPlanesTree=E}if(P.reset(O,R,w))for(;;){if(!i(1)){P.incrementValue(w)
break}if(A=!P.nextLevel()){k.included=!0,L=M=!0
break}}}if(L){if(M){for(E=T.zeroBitPlanesTree,E.reset(O,R);;)if(i(1)){if(A=!E.nextLevel())break}else E.incrementValue()
k.zeroBitPlanes=E.value}for(var F=c();i(1);)k.Lblock++
var U=f(F),N=(1<<U>F?U-1:U)+k.Lblock,j=i(N)
x.push({codeblock:k,codingpasses:F,dataLength:j})}}for(o(),b&&n(146);x.length>0;){var z=x.shift()
k=z.codeblock,void 0===k.data&&(k.data=[]),k.data.push({data:t,start:a+h,end:a+h+z.dataLength,codingpasses:z.codingpasses}),h+=z.dataLength}}}return h}function w(e,t,a,r,i,n,s,o){for(var c=r.tbx0,l=r.tby0,h=r.tbx1-r.tbx0,u=r.codeblocks,f="H"===r.type.charAt(0)?1:0,d="H"===r.type.charAt(1)?t:0,g=0,m=u.length;m>g;++g){var p=u[g],b=p.tbx1_-p.tbx0_,v=p.tby1_-p.tby0_
if(0!==b&&0!==v&&void 0!==p.data){var y,k
y=new T(b,v,p.subbandType,p.zeroBitPlanes,n),k=2
var w,x,C,S=p.data,A=0,I=0
for(w=0,x=S.length;x>w;w++)C=S[w],A+=C.end-C.start,I+=C.codingpasses
var B=new Uint8Array(A),O=0
for(w=0,x=S.length;x>w;w++){C=S[w]
var R=C.data.subarray(C.start,C.end)
B.set(R,O),O+=R.length}var L=new sr(B,0,A)
for(y.setDecoder(L),w=0;I>w;w++){switch(k){case 0:y.runSignificancePropogationPass()
break
case 1:y.runMagnitudeRefinementPass()
break
case 2:y.runCleanupPass(),o&&y.checkSegmentationSymbol()}k=(k+1)%3}var M,P,E,D=p.tbx0_-c+(p.tby0_-l)*h,q=y.coefficentsSign,F=y.coefficentsMagnitude,U=y.bitsDecoded,N=s?0:.5
O=0
var j="LL"!==r.type
for(w=0;v>w;w++){var z=D/h|0,H=2*z*(t-h)+f+d
for(M=0;b>M;M++){if(P=F[O],0!==P){P=(P+N)*i,0!==q[O]&&(P=-P),E=U[O]
var _=j?H+(D<<1):D
s&&E>=n?e[_]=P:e[_]=P*(1<<n-E)}D++,O++}D+=h-b}}}}function x(e,t,a){for(var r=t.components[a],i=r.codingStyleParameters,n=r.quantizationParameters,s=i.decompositionLevelsCount,o=n.SPqcds,c=n.scalarExpounded,l=n.guardBits,h=i.segmentationSymbolUsed,u=e.components[a].precision,f=i.reversibleTransformation,d=f?new L:new R,g=[],m=0,p=0;s>=p;p++){for(var b=r.resolutions[p],v=b.trx1-b.trx0,y=b.try1-b.try0,k=new Float32Array(v*y),x=0,C=b.subbands.length;C>x;x++){var S,I
c?(S=o[m].mu,I=o[m].epsilon,m++):(S=o[0].mu,I=o[0].epsilon+(p>0?1-p:0))
var B=b.subbands[x],T=A[B.type],O=f?1:Math.pow(2,u+T-I)*(1+S/2048),M=l+I-1
w(k,v,y,B,O,M,f,h)}g.push({width:v,height:y,items:k})}var P=d.calculate(g,r.tcx0,r.tcy0)
return{left:r.tcx0,top:r.tcy0,width:P.width,height:P.height,items:P.items}}function C(e){for(var t=e.SIZ,a=e.components,r=t.Csiz,i=[],n=0,s=e.tiles.length;s>n;n++){var o,c=e.tiles[n],l=[]
for(o=0;r>o;o++)l[o]=x(e,c,o)
var h,u,f,d,g,m,p,b,v,y,k,w,C,S,A,I=l[0],B=new Uint8Array(I.items.length*r),T={left:I.left,top:I.top,width:I.width,height:I.height,items:B},O=0
if(c.codingStyleDefaultParameters.multipleComponentTransform){var R=4===r,L=l[0].items,M=l[1].items,P=l[2].items,E=R?l[3].items:null
h=a[0].precision-8,u=(128<<h)+.5,f=255*(1<<h),g=.5*f,d=-g
var D=c.components[0],q=r-3
if(p=L.length,D.codingStyleParameters.reversibleTransformation)for(m=0;p>m;m++,O+=q)b=L[m]+u,v=M[m],y=P[m],w=b-(y+v>>2),k=w+y,C=w+v,B[O++]=0>=k?0:k>=f?255:k>>h,B[O++]=0>=w?0:w>=f?255:w>>h,B[O++]=0>=C?0:C>=f?255:C>>h
else for(m=0;p>m;m++,O+=q)b=L[m]+u,v=M[m],y=P[m],k=b+1.402*y,w=b-.34413*v-.71414*y,C=b+1.772*v,B[O++]=0>=k?0:k>=f?255:k>>h,B[O++]=0>=w?0:w>=f?255:w>>h,B[O++]=0>=C?0:C>=f?255:C>>h
if(R)for(m=0,O=3;p>m;m++,O+=4)S=E[m],B[O]=d>=S?0:S>=g?255:S+u>>h}else for(o=0;r>o;o++){var F=l[o].items
for(h=a[o].precision-8,u=(128<<h)+.5,f=127.5*(1<<h),d=-f,O=o,m=0,p=F.length;p>m;m++)A=F[m],B[O]=d>=A?0:A>=f?255:A+u>>h,O+=r}i.push(T)}return i}function S(e,t){for(var a=e.SIZ,r=a.Csiz,i=e.tiles[t],n=0;r>n;n++){var s=i.components[n],o=void 0!==e.currentTile.QCC[n]?e.currentTile.QCC[n]:e.currentTile.QCD
s.quantizationParameters=o
var c=void 0!==e.currentTile.COC[n]?e.currentTile.COC[n]:e.currentTile.COD
s.codingStyleParameters=c}i.codingStyleDefaultParameters=e.currentTile.COD}var A={LL:0,LH:1,HL:1,HH:2}
a.prototype={parse:function(a){var r=g(a,0)
if(65359===r)return void this.parseCodestream(a,0,a.length)
for(var i=0,n=a.length;n>i;){var s=8,o=m(a,i),c=m(a,i+4)
if(i+=s,1===o&&(o=4294967296*m(a,i)+m(a,i+4),i+=8,s+=8),0===o&&(o=n-i+s),s>o)throw new Error("JPX Error: Invalid box field size")
var l=o-s,h=!0
switch(c){case 1785737832:h=!1
break
case 1668246642:var u=a[i]
a[i+1],a[i+2]
if(1===u){var f=m(a,i+3)
switch(f){case 16:case 17:case 18:break
default:t("Unknown colorspace "+f)}}else 2===u&&e("ICC profile not supported")
break
case 1785737827:this.parseCodestream(a,i,i+l)
break
case 1783636e3:218793738!==m(a,i)&&t("Invalid JP2 signature")
break
case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break
default:var d=String.fromCharCode(c>>24&255,c>>16&255,c>>8&255,255&c)
t("Unsupported header type "+c+" ("+d+")")}h&&(i+=l)}},parseImageProperties:function(e){for(var t=e.getByte();t>=0;){var a=t
t=e.getByte()
var r=a<<8|t
if(65361===r){e.skip(4)
var i=e.getInt32()>>>0,n=e.getInt32()>>>0,s=e.getInt32()>>>0,o=e.getInt32()>>>0
e.skip(16)
var c=e.getUint16()
return this.width=i-s,this.height=n-o,this.componentsCount=c,void(this.bitsPerComponent=8)}}throw new Error("JPX Error: No size marker found in JPX stream")},parseCodestream:function(e,a,n){var s={}
try{for(var o=!1,c=a;n>c+1;){var l=g(e,c)
c+=2
var h,u,f,d,p,b,v=0
switch(l){case 65359:s.mainHeader=!0
break
case 65497:break
case 65361:v=g(e,c)
var w={}
w.Xsiz=m(e,c+4),w.Ysiz=m(e,c+8),w.XOsiz=m(e,c+12),w.YOsiz=m(e,c+16),w.XTsiz=m(e,c+20),w.YTsiz=m(e,c+24),w.XTOsiz=m(e,c+28),w.YTOsiz=m(e,c+32)
var x=g(e,c+36)
w.Csiz=x
var A=[]
h=c+38
for(var I=0;x>I;I++){var B={precision:(127&e[h])+1,isSigned:!!(128&e[h]),XRsiz:e[h+1],YRsiz:e[h+1]}
r(B,w),A.push(B)}s.SIZ=w,s.components=A,i(s,A),s.QCC=[],s.COC=[]
break
case 65372:v=g(e,c)
var T={}
switch(h=c+2,u=e[h++],31&u){case 0:d=8,p=!0
break
case 1:d=16,p=!1
break
case 2:d=16,p=!0
break
default:throw new Error("JPX Error: Invalid SQcd value "+u)}for(T.noQuantization=8===d,T.scalarExpounded=p,T.guardBits=u>>5,f=[];v+c>h;){var O={}
8===d?(O.epsilon=e[h++]>>3,O.mu=0):(O.epsilon=e[h]>>3,O.mu=(7&e[h])<<8|e[h+1],h+=2),f.push(O)}T.SPqcds=f,s.mainHeader?s.QCD=T:(s.currentTile.QCD=T,s.currentTile.QCC=[])
break
case 65373:v=g(e,c)
var R={}
h=c+2
var L
switch(s.SIZ.Csiz<257?L=e[h++]:(L=g(e,h),h+=2),u=e[h++],31&u){case 0:d=8,p=!0
break
case 1:d=16,p=!1
break
case 2:d=16,p=!0
break
default:throw new Error("JPX Error: Invalid SQcd value "+u)}for(R.noQuantization=8===d,R.scalarExpounded=p,R.guardBits=u>>5,f=[];v+c>h;)O={},8===d?(O.epsilon=e[h++]>>3,O.mu=0):(O.epsilon=e[h]>>3,O.mu=(7&e[h])<<8|e[h+1],h+=2),f.push(O)
R.SPqcds=f,s.mainHeader?s.QCC[L]=R:s.currentTile.QCC[L]=R
break
case 65362:v=g(e,c)
var M={}
h=c+2
var P=e[h++]
M.entropyCoderWithCustomPrecincts=!!(1&P),M.sopMarkerUsed=!!(2&P),M.ephMarkerUsed=!!(4&P),M.progressionOrder=e[h++],M.layersCount=g(e,h),h+=2,M.multipleComponentTransform=e[h++],M.decompositionLevelsCount=e[h++],M.xcb=(15&e[h++])+2,M.ycb=(15&e[h++])+2
var E=e[h++]
if(M.selectiveArithmeticCodingBypass=!!(1&E),M.resetContextProbabilities=!!(2&E),M.terminationOnEachCodingPass=!!(4&E),M.verticalyStripe=!!(8&E),M.predictableTermination=!!(16&E),M.segmentationSymbolUsed=!!(32&E),M.reversibleTransformation=e[h++],M.entropyCoderWithCustomPrecincts){for(var D=[];v+c>h;){var q=e[h++]
D.push({PPx:15&q,PPy:q>>4})}M.precinctsSizes=D}var F=[]
if(M.selectiveArithmeticCodingBypass&&F.push("selectiveArithmeticCodingBypass"),M.resetContextProbabilities&&F.push("resetContextProbabilities"),M.terminationOnEachCodingPass&&F.push("terminationOnEachCodingPass"),M.verticalyStripe&&F.push("verticalyStripe"),M.predictableTermination&&F.push("predictableTermination"),F.length>0)throw o=!0,new Error("JPX Error: Unsupported COD options ("+F.join(", ")+")")
s.mainHeader?s.COD=M:(s.currentTile.COD=M,s.currentTile.COC=[])
break
case 65424:v=g(e,c),b={},b.index=g(e,c+2),b.length=m(e,c+4),b.dataEnd=b.length+c-2,b.partIndex=e[c+8],b.partsCount=e[c+9],s.mainHeader=!1,0===b.partIndex&&(b.COD=s.COD,b.COC=s.COC.slice(0),b.QCD=s.QCD,b.QCC=s.QCC.slice(0)),s.currentTile=b
break
case 65427:b=s.currentTile,0===b.partIndex&&(S(s,b.index),y(s)),v=b.dataEnd-c,k(s,e,c,v)
break
case 65365:case 65367:case 65368:case 65380:v=g(e,c)
break
case 65363:throw new Error("JPX Error: Codestream code 0xFF53 (COC) is not implemented")
default:throw new Error("JPX Error: Unknown codestream code: "+l.toString(16))}c+=v}}catch(U){if(o||this.failOnCorruptedImage)throw U
t("Trying to recover from "+U.message)}this.tiles=C(s),this.width=s.SIZ.Xsiz-s.SIZ.XOsiz,this.height=s.SIZ.Ysiz-s.SIZ.YOsiz,this.componentsCount=s.SIZ.Csiz}}
var I=function(){function e(e,t){var a=f(Math.max(e,t))+1
this.levels=[]
for(var r=0;a>r;r++){var i={width:e,height:t,items:[]}
this.levels.push(i),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t){for(var a,r=0,i=0;r<this.levels.length;){a=this.levels[r]
var n=e+t*a.width
if(void 0!==a.items[n]){i=a.items[n]
break}a.index=n,e>>=1,t>>=1,r++}r--,a=this.levels[r],a.items[a.index]=i,this.currentLevel=r,delete this.value},incrementValue:function(){var e=this.levels[this.currentLevel]
e.items[e.index]++},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],a=t.items[t.index]
return e--,0>e?(this.value=a,!1):(this.currentLevel=e,t=this.levels[e],t.items[t.index]=a,!0)}},e}(),B=function(){function e(e,t,a){var r=f(Math.max(e,t))+1
this.levels=[]
for(var i=0;r>i;i++){for(var n=new Uint8Array(e*t),s=0,o=n.length;o>s;s++)n[s]=a
var c={width:e,height:t,items:n}
this.levels.push(c),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t,a){for(var r=0;r<this.levels.length;){var i=this.levels[r],n=e+t*i.width
i.index=n
var s=i.items[n]
if(255===s)break
if(s>a)return this.currentLevel=r,this.propagateValues(),!1
e>>=1,t>>=1,r++}return this.currentLevel=r-1,!0},incrementValue:function(e){var t=this.levels[this.currentLevel]
t.items[t.index]=e+1,this.propagateValues()},propagateValues:function(){for(var e=this.currentLevel,t=this.levels[e],a=t.items[t.index];--e>=0;)t=this.levels[e],t.items[t.index]=a},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],a=t.items[t.index]
return t.items[t.index]=255,e--,0>e?!1:(this.currentLevel=e,t=this.levels[e],t.items[t.index]=a,!0)}},e}(),T=function(){function e(e,t,a,s,o){this.width=e,this.height=t,this.contextLabelTable="HH"===a?n:"HL"===a?i:r
var c=e*t
this.neighborsSignificance=new Uint8Array(c),this.coefficentsSign=new Uint8Array(c),this.coefficentsMagnitude=o>14?new Uint32Array(c):o>6?new Uint16Array(c):new Uint8Array(c),this.processingFlags=new Uint8Array(c)
var l=new Uint8Array(c)
if(0!==s)for(var h=0;c>h;h++)l[h]=s
this.bitsDecoded=l,this.reset()}var t=17,a=18,r=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),i=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),n=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8])
return e.prototype={setDecoder:function(e){this.decoder=e},reset:function(){this.contexts=new Int8Array(19),this.contexts[0]=8,this.contexts[t]=92,this.contexts[a]=6},setNeighborsSignificance:function(e,t,a){var r,i=this.neighborsSignificance,n=this.width,s=this.height,o=t>0,c=n>t+1
e>0&&(r=a-n,o&&(i[r-1]+=16),c&&(i[r+1]+=16),i[r]+=4),s>e+1&&(r=a+n,o&&(i[r-1]+=16),c&&(i[r+1]+=16),i[r]+=4),o&&(i[a-1]+=1),c&&(i[a+1]+=1),i[a]|=128},runSignificancePropogationPass:function(){for(var e=this.decoder,t=this.width,a=this.height,r=this.coefficentsMagnitude,i=this.coefficentsSign,n=this.neighborsSignificance,s=this.processingFlags,o=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,h=-2,u=1,f=2,d=0;a>d;d+=4)for(var g=0;t>g;g++)for(var m=d*t+g,p=0;4>p;p++,m+=t){var b=d+p
if(b>=a)break
if(s[m]&=h,!r[m]&&n[m]){var v=c[n[m]],y=e.readBit(o,v)
if(y){var k=this.decodeSignBit(b,g,m)
i[m]=k,r[m]=1,this.setNeighborsSignificance(b,g,m),s[m]|=f}l[m]++,s[m]|=u}}},decodeSignBit:function(e,t,a){var r,i,n,s,o,c,l=this.width,h=this.height,u=this.coefficentsMagnitude,f=this.coefficentsSign
s=t>0&&0!==u[a-1],l>t+1&&0!==u[a+1]?(n=f[a+1],s?(i=f[a-1],r=1-n-i):r=1-n-n):s?(i=f[a-1],r=1-i-i):r=0
var d=3*r
return s=e>0&&0!==u[a-l],h>e+1&&0!==u[a+l]?(n=f[a+l],s?(i=f[a-l],r=1-n-i+d):r=1-n-n+d):s?(i=f[a-l],r=1-i-i+d):r=d,r>=0?(o=9+r,c=this.decoder.readBit(this.contexts,o)):(o=9-r,c=1^this.decoder.readBit(this.contexts,o)),c},runMagnitudeRefinementPass:function(){for(var e,t=this.decoder,a=this.width,r=this.height,i=this.coefficentsMagnitude,n=this.neighborsSignificance,s=this.contexts,o=this.bitsDecoded,c=this.processingFlags,l=1,h=2,u=a*r,f=4*a,d=0;u>d;d=e){e=Math.min(u,d+f)
for(var g=0;a>g;g++)for(var m=d+g;e>m;m+=a)if(i[m]&&0===(c[m]&l)){var p=16
if(0!==(c[m]&h)){c[m]^=h
var b=127&n[m]
p=0===b?15:14}var v=t.readBit(s,p)
i[m]=i[m]<<1|v,o[m]++,c[m]|=l}}},runCleanupPass:function(){for(var e,r=this.decoder,i=this.width,n=this.height,s=this.neighborsSignificance,o=this.coefficentsMagnitude,c=this.coefficentsSign,l=this.contexts,h=this.contextLabelTable,u=this.bitsDecoded,f=this.processingFlags,d=1,g=2,m=i,p=2*i,b=3*i,v=0;n>v;v=e){e=Math.min(v+4,n)
for(var y=v*i,k=n>v+3,w=0;i>w;w++){var x,C=y+w,S=k&&0===f[C]&&0===f[C+m]&&0===f[C+p]&&0===f[C+b]&&0===s[C]&&0===s[C+m]&&0===s[C+p]&&0===s[C+b],A=0,I=C,B=v
if(S){var T=r.readBit(l,a)
if(!T){u[C]++,u[C+m]++,u[C+p]++,u[C+b]++
continue}A=r.readBit(l,t)<<1|r.readBit(l,t),0!==A&&(B=v+A,I+=A*i),x=this.decodeSignBit(B,w,I),c[I]=x,o[I]=1,this.setNeighborsSignificance(B,w,I),f[I]|=g,I=C
for(var O=v;B>=O;O++,I+=i)u[I]++
A++}for(B=v+A;e>B;B++,I+=i)if(!o[I]&&0===(f[I]&d)){var R=h[s[I]],L=r.readBit(l,R)
1===L&&(x=this.decodeSignBit(B,w,I),c[I]=x,o[I]=1,this.setNeighborsSignificance(B,w,I),f[I]|=g),u[I]++}}}},checkSegmentationSymbol:function(){var e=this.decoder,a=this.contexts,r=e.readBit(a,t)<<3|e.readBit(a,t)<<2|e.readBit(a,t)<<1|e.readBit(a,t)
if(10!==r)throw new Error("JPX Error: Invalid segmentation symbol")}},e}(),O=function(){function e(){}return e.prototype.calculate=function(e,t,a){for(var r=e[0],i=1,n=e.length;n>i;i++)r=this.iterate(r,e[i],t,a)
return r},e.prototype.extend=function(e,t,a){var r=t-1,i=t+1,n=t+a-2,s=t+a
e[r--]=e[i++],e[s++]=e[n--],e[r--]=e[i++],e[s++]=e[n--],e[r--]=e[i++],e[s++]=e[n--],e[r]=e[i],e[s]=e[n]},e.prototype.iterate=function(e,t,a,r){var i,n,s,o,c,l,h=e.width,u=e.height,f=e.items,d=t.width,g=t.height,m=t.items
for(s=0,i=0;u>i;i++)for(o=2*i*d,n=0;h>n;n++,s++,o+=2)m[o]=f[s]
f=e.items=null
var p=4,b=new Float32Array(d+2*p)
if(1===d){if(0!==(1&a))for(l=0,s=0;g>l;l++,s+=d)m[s]*=.5}else for(l=0,s=0;g>l;l++,s+=d)b.set(m.subarray(s,s+d),p),this.extend(b,p,d),this.filter(b,p,d),m.set(b.subarray(p,p+d),s)
var v=16,y=[]
for(i=0;v>i;i++)y.push(new Float32Array(g+2*p))
var k,w=0
if(e=p+g,1===g){if(0!==(1&r))for(c=0;d>c;c++)m[c]*=.5}else for(c=0;d>c;c++){if(0===w){for(v=Math.min(d-c,v),s=c,o=p;e>o;s+=d,o++)for(k=0;v>k;k++)y[k][o]=m[s+k]
w=v}w--
var x=y[w]
if(this.extend(x,p,g),this.filter(x,p,g),0===w)for(s=c-v+1,o=p;e>o;s+=d,o++)for(k=0;v>k;k++)m[s+k]=y[k][o]}return{width:d,height:g,items:m}},e}(),R=function(){function e(){O.call(this)}return e.prototype=Object.create(O.prototype),e.prototype.filter=function(e,t,a){var r=a>>1
t=0|t
var i,n,s,o,c=-1.586134342059924,l=-.052980118572961,h=.882911075530934,u=.443506852043971,f=1.230174104914001,d=1/f
for(i=t-3,n=r+4;n--;i+=2)e[i]*=d
for(i=t-2,s=u*e[i-1],n=r+3;n--&&(o=u*e[i+1],e[i]=f*e[i]-s-o,n--);i+=2)i+=2,s=u*e[i+1],e[i]=f*e[i]-s-o
for(i=t-1,s=h*e[i-1],n=r+2;n--&&(o=h*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=h*e[i+1],e[i]-=s+o
for(i=t,s=l*e[i-1],n=r+1;n--&&(o=l*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=l*e[i+1],e[i]-=s+o
if(0!==r)for(i=t+1,s=c*e[i-1],n=r;n--&&(o=c*e[i+1],e[i]-=s+o,n--);i+=2)i+=2,s=c*e[i+1],e[i]-=s+o},e}(),L=function(){function e(){O.call(this)}return e.prototype=Object.create(O.prototype),e.prototype.filter=function(e,t,a){var r=a>>1
t=0|t
var i,n
for(i=t,n=r+1;n--;i+=2)e[i]-=e[i-1]+e[i+1]+2>>2
for(i=t+1,n=r;n--;i+=2)e[i]+=e[i-1]+e[i+1]>>1},e}()
return a}(),lr=function(){function e(){}function t(e,t,a){this.data=e,this.start=t,this.end=a}function a(e,t,a){function r(e){for(var t=0,r=0;e>r;r++){var s=a.readBit(i,n)
n=256>n?n<<1|s:511&(n<<1|s)|256,t=t<<1|s}return t>>>0}var i=e.getContexts(t),n=1,s=r(1),o=r(1)?r(1)?r(1)?r(1)?r(1)?r(32)+4436:r(12)+340:r(8)+84:r(6)+20:r(4)+4:r(2)
return 0===s?o:o>0?-o:null}function i(e,t,a){for(var r=e.getContexts("IAID"),i=1,n=0;a>n;n++){var s=t.readBit(r,i)
i=i<<1|s}return 31>a?i&(1<<a)-1:2147483647&i}function n(e,t,a){var r,i,n,s,o,c,l,h=a.decoder,u=a.contextCache.getContexts("GB"),f=[],d=31735
for(i=0;t>i;i++)for(o=f[i]=new Uint8Array(e),c=1>i?o:f[i-1],l=2>i?o:f[i-2],r=l[0]<<13|l[1]<<12|l[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4,n=0;e>n;n++)o[n]=s=h.readBit(u,r),r=(r&d)<<1|(e>n+3?l[n+3]<<11:0)|(e>n+4?c[n+4]<<4:0)|s
return f}function s(e,t,a,i,s,o,c,l){if(e&&r("JBIG2 error: MMR encoding is not supported"),0===i&&!o&&!s&&4===c.length&&3===c[0].x&&-1===c[0].y&&-3===c[1].x&&-1===c[1].y&&2===c[2].x&&-2===c[2].y&&-2===c[3].x&&-2===c[3].y)return n(t,a,l)
var h=!!o,u=S[i].concat(c)
u.sort(function(e,t){return e.y-t.y||e.x-t.x})
var f,d,g=u.length,m=new Int8Array(g),p=new Int8Array(g),b=[],v=0,y=0,k=0,w=0
for(d=0;g>d;d++)m[d]=u[d].x,p[d]=u[d].y,y=Math.min(y,u[d].x),k=Math.max(k,u[d].x),w=Math.min(w,u[d].y),g-1>d&&u[d].y===u[d+1].y&&u[d].x===u[d+1].x-1?v|=1<<g-1-d:b.push(d)
var x=b.length,C=new Int8Array(x),A=new Int8Array(x),B=new Uint16Array(x)
for(f=0;x>f;f++)d=b[f],C[f]=u[d].x,A[f]=u[d].y,B[f]=1<<g-1-d
for(var T,O,R,L,M,P=-y,E=-w,D=t-k,q=I[i],F=new Uint8Array(t),U=[],N=l.decoder,j=l.contextCache.getContexts("GB"),z=0,H=0,_=0;a>_;_++){if(s){var G=N.readBit(j,q)
if(z^=G){U.push(F)
continue}}for(F=new Uint8Array(F),U.push(F),T=0;t>T;T++)if(h&&o[_][T])F[T]=0
else{if(T>=P&&D>T&&_>=E)for(H=H<<1&v,d=0;x>d;d++)O=_+A[d],R=T+C[d],L=U[O][R],L&&(L=B[d],H|=L)
else for(H=0,M=g-1,d=0;g>d;d++,M--)R=T+m[d],R>=0&&t>R&&(O=_+p[d],O>=0&&(L=U[O][R],L&&(H|=L<<M)))
var X=N.readBit(j,H)
F[T]=X}}return U}function c(e,t,a,i,n,s,o,c,l){var h=A[a].coding
0===a&&(h=h.concat([c[0]]))
var u,f=h.length,d=new Int32Array(f),g=new Int32Array(f)
for(u=0;f>u;u++)d[u]=h[u].x,g[u]=h[u].y
var m=A[a].reference
0===a&&(m=m.concat([c[1]]))
var p=m.length,b=new Int32Array(p),v=new Int32Array(p)
for(u=0;p>u;u++)b[u]=m[u].x,v[u]=m[u].y
for(var y=i[0].length,k=i.length,w=B[a],x=[],C=l.decoder,S=l.contextCache.getContexts("GR"),I=0,T=0;t>T;T++){if(o){var O=C.readBit(S,w)
I^=O,I&&r("JBIG2 error: prediction is not supported")}var R=new Uint8Array(e)
x.push(R)
for(var L=0;e>L;L++){var M,P,E=0
for(u=0;f>u;u++)M=T+g[u],P=L+d[u],0>M||0>P||P>=e?E<<=1:E=E<<1|x[M][P]
for(u=0;p>u;u++)M=T+v[u]+s,P=L+b[u]+n,0>M||M>=k||0>P||P>=y?E<<=1:E=E<<1|i[M][P]
var D=C.readBit(S,E)
R[L]=D}}return x}function l(e,t,n,o,l,u,d,g,m,p,b){e&&r("JBIG2 error: huffman is not supported")
for(var v=[],y=0,k=f(n.length+o),w=b.decoder,x=b.contextCache;v.length<o;){var C=a(x,"IADH",w)
y+=C
for(var S=0,A=0;;){var I=a(x,"IADW",w)
if(null===I)break
S+=I,A+=S
var B
if(t){var T=a(x,"IAAI",w)
if(T>1)B=h(e,t,S,y,0,T,1,n.concat(v),k,0,0,1,0,u,m,p,b)
else{var O=i(x,w,k),R=a(x,"IARDX",w),L=a(x,"IARDY",w),M=O<n.length?n[O]:v[O-n.length]
B=c(S,y,m,M,R,L,!1,p,b)}}else B=s(!1,S,y,d,!1,null,g,b)
v.push(B)}}for(var P=[],E=[],D=!1,q=n.length+o;E.length<q;){for(var F=a(x,"IAEX",w);F--;)E.push(D)
D=!D}for(var U=0,N=n.length;N>U;U++)E[U]&&P.push(n[U])
for(var j=0;o>j;U++,j++)E[U]&&P.push(v[j])
return P}function h(e,t,n,s,o,l,h,u,f,d,g,m,p,b,v,y,k){e&&r("JBIG2 error: huffman is not supported")
var w,x,C=[]
for(w=0;s>w;w++){if(x=new Uint8Array(n),o)for(var S=0;n>S;S++)x[S]=o
C.push(x)}var A=k.decoder,I=k.contextCache,B=-a(I,"IADT",A),T=0
for(w=0;l>w;){var O=a(I,"IADT",A)
B+=O
var R=a(I,"IAFS",A)
T+=R
for(var L=T;;){var M=1===h?0:a(I,"IAIT",A),P=h*B+M,E=i(I,A,f),D=t&&a(I,"IARI",A),q=u[E],F=q[0].length,U=q.length
if(D){var N=a(I,"IARDW",A),j=a(I,"IARDH",A),z=a(I,"IARDX",A),H=a(I,"IARDY",A)
F+=N,U+=j,q=c(F,U,v,q,(N>>1)+z,(j>>1)+H,!1,y,k)}var _,G,X,J=P-(1&m?0:U),W=L-(2&m?F:0)
if(d){for(_=0;U>_;_++)if(x=C[W+_]){X=q[_]
var V=Math.min(n-J,F)
switch(p){case 0:for(G=0;V>G;G++)x[J+G]|=X[G]
break
case 2:for(G=0;V>G;G++)x[J+G]^=X[G]
break
default:r("JBIG2 error: operator "+p+" is not supported")}}L+=U-1}else{for(G=0;U>G;G++)if(x=C[J+G])switch(X=q[G],p){case 0:for(_=0;F>_;_++)x[W+_]|=X[_]
break
case 2:for(_=0;F>_;_++)x[W+_]^=X[_]
break
default:r("JBIG2 error: operator "+p+" is not supported")}L+=F-1}w++
var K=a(I,"IADS",A)
if(null===K)break
L+=K+g}}return C}function u(e,t){var a={}
a.number=m(e,t)
var i=e[t+4],n=63&i
C[n]||r("JBIG2 error: invalid segment type: "+n),a.type=n,a.typeName=C[n],a.deferredNonRetain=!!(128&i)
var s=!!(64&i),o=e[t+5],c=o>>5&7,l=[31&o],h=t+6
if(7===o){c=536870911&m(e,h-1),h+=3
var u=c+7>>3
for(l[0]=e[h++];--u>0;)l.push(e[h++])}else 5!==o&&6!==o||r("JBIG2 error: invalid referred-to flags")
a.retainBits=l
var f,d,p=a.number<=256?1:a.number<=65536?2:4,v=[]
for(f=0;c>f;f++){var y=1===p?e[h]:2===p?g(e,h):m(e,h)
v.push(y),h+=p}if(a.referredTo=v,s?(a.pageAssociation=m(e,h),h+=4):a.pageAssociation=e[h++],a.length=m(e,h),h+=4,4294967295===a.length)if(38===n){var k=b(e,h),w=e[h+T],x=!!(1&w),S=6,A=new Uint8Array(S)
for(x||(A[0]=255,A[1]=172),A[2]=k.height>>>24&255,A[3]=k.height>>16&255,A[4]=k.height>>8&255,A[5]=255&k.height,f=h,d=e.length;d>f;f++){for(var I=0;S>I&&A[I]===e[f+I];)I++
if(I===S){a.length=f+S
break}}4294967295===a.length&&r("JBIG2 error: segment end was not found")}else r("JBIG2 error: invalid unknown segment length")
return a.headerEnd=h,a}function p(e,t,a,r){for(var i=[],n=a;r>n;){var s=u(t,n)
n=s.headerEnd
var o={header:s,data:t}
if(e.randomAccess||(o.start=n,n+=s.length,o.end=n),i.push(o),51===s.type)break}if(e.randomAccess)for(var c=0,l=i.length;l>c;c++)i[c].start=n,n+=i[c].header.length,i[c].end=n
return i}function b(e,t){return{width:m(e,t),height:m(e,t+4),x:m(e,t+8),y:m(e,t+12),combinationOperator:7&e[t+16]}}function v(e,t){var a,i,n,s,o=e.header,c=e.data,l=e.start,h=e.end
switch(o.type){case 0:var u={},f=g(c,l)
if(u.huffman=!!(1&f),u.refinement=!!(2&f),u.huffmanDHSelector=f>>2&3,u.huffmanDWSelector=f>>4&3,u.bitmapSizeSelector=f>>6&1,u.aggregationInstancesSelector=f>>7&1,u.bitmapCodingContextUsed=!!(256&f),u.bitmapCodingContextRetained=!!(512&f),u.template=f>>10&3,u.refinementTemplate=f>>12&1,l+=2,!u.huffman){for(s=0===u.template?4:1,i=[],n=0;s>n;n++)i.push({x:d(c,l),y:d(c,l+1)}),l+=2
u.at=i}if(u.refinement&&!u.refinementTemplate){for(i=[],n=0;2>n;n++)i.push({x:d(c,l),y:d(c,l+1)}),l+=2
u.refinementAt=i}u.numberOfExportedSymbols=m(c,l),l+=4,u.numberOfNewSymbols=m(c,l),l+=4,a=[u,o.number,o.referredTo,c,l,h]
break
case 6:case 7:var p={}
p.info=b(c,l),l+=T
var v=g(c,l)
if(l+=2,p.huffman=!!(1&v),p.refinement=!!(2&v),p.stripSize=1<<(v>>2&3),p.referenceCorner=v>>4&3,p.transposed=!!(64&v),p.combinationOperator=v>>7&3,p.defaultPixelValue=v>>9&1,p.dsOffset=v<<17>>27,p.refinementTemplate=v>>15&1,p.huffman){var y=g(c,l)
l+=2,p.huffmanFS=3&y,p.huffmanDS=y>>2&3,p.huffmanDT=y>>4&3,p.huffmanRefinementDW=y>>6&3,p.huffmanRefinementDH=y>>8&3,p.huffmanRefinementDX=y>>10&3,p.huffmanRefinementDY=y>>12&3,p.huffmanRefinementSizeSelector=!!(14&y)}if(p.refinement&&!p.refinementTemplate){for(i=[],n=0;2>n;n++)i.push({x:d(c,l),y:d(c,l+1)}),l+=2
p.refinementAt=i}p.numberOfSymbolInstances=m(c,l),l+=4,p.huffman&&r("JBIG2 error: huffman is not supported"),a=[p,o.referredTo,c,l,h]
break
case 38:case 39:var k={}
k.info=b(c,l),l+=T
var w=c[l++]
if(k.mmr=!!(1&w),k.template=w>>1&3,k.prediction=!!(8&w),!k.mmr){for(s=0===k.template?4:1,i=[],n=0;s>n;n++)i.push({x:d(c,l),y:d(c,l+1)}),l+=2
k.at=i}a=[k,c,l,h]
break
case 48:var x={width:m(c,l),height:m(c,l+4),resolutionX:m(c,l+8),resolutionY:m(c,l+12)}
4294967295===x.height&&delete x.height
var C=c[l+16]
g(c,l+17)
x.lossless=!!(1&C),x.refinement=!!(2&C),x.defaultPixelValue=C>>2&1,x.combinationOperator=C>>3&3,x.requiresBuffer=!!(32&C),x.combinationOperatorOverride=!!(64&C),a=[x]
break
case 49:break
case 50:break
case 51:break
case 62:break
default:r("JBIG2 error: segment type "+o.typeName+"("+o.type+") is not implemented")}var S="on"+o.typeName
S in t&&t[S].apply(t,a)}function y(e,t){for(var a=0,r=e.length;r>a;a++)v(e[a],t)}function k(e){for(var t=new w,a=0,r=e.length;r>a;a++){var i=e[a],n=p({},i.data,i.start,i.end)
y(n,t)}return t.buffer}function w(){}function x(){}e.prototype={getContexts:function(e){return e in this?this[e]:this[e]=new Int8Array(65536)}},t.prototype={get decoder(){var e=new sr(this.data,this.start,this.end)
return o(this,"decoder",e)},get contextCache(){var t=new e
return o(this,"contextCache",t)}}
var C=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"patternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],S=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],A=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],I=[39717,1941,229,405],B=[32,8],T=17
return w.prototype={onPageInformation:function(e){this.currentPageInfo=e
var t=e.width+7>>3,a=new Uint8Array(t*e.height)
if(e.defaultPixelValue)for(var r=0,i=a.length;i>r;r++)a[r]=255
this.buffer=a},drawBitmap:function(e,t){var a,i,n,s,o=this.currentPageInfo,c=e.width,l=e.height,h=o.width+7>>3,u=o.combinationOperatorOverride?e.combinationOperator:o.combinationOperator,f=this.buffer,d=128>>(7&e.x),g=e.y*h+(e.x>>3)
switch(u){case 0:for(a=0;l>a;a++){for(n=d,s=g,i=0;c>i;i++)t[a][i]&&(f[s]|=n),n>>=1,n||(n=128,s++)
g+=h}break
case 2:for(a=0;l>a;a++){for(n=d,s=g,i=0;c>i;i++)t[a][i]&&(f[s]^=n),n>>=1,n||(n=128,s++)
g+=h}break
default:r("JBIG2 error: operator "+u+" is not supported")}},onImmediateGenericRegion:function(e,a,r,i){var n=e.info,o=new t(a,r,i),c=s(e.mmr,n.width,n.height,e.template,e.prediction,null,e.at,o)
this.drawBitmap(n,c)},onImmediateLosslessGenericRegion:function(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function(e,a,i,n,s,o){var c
e.huffman&&r("JBIG2 error: huffman is not supported")
var h=this.symbols
h||(this.symbols=h={})
for(var u=[],f=0,d=i.length;d>f;f++)u=u.concat(h[i[f]])
var g=new t(n,s,o)
h[a]=l(e.huffman,e.refinement,u,e.numberOfNewSymbols,e.numberOfExportedSymbols,c,e.template,e.at,e.refinementTemplate,e.refinementAt,g)},onImmediateTextRegion:function(e,a,r,i,n){for(var s,o=e.info,c=this.symbols,l=[],u=0,d=a.length;d>u;u++)l=l.concat(c[a[u]])
var g=f(l.length),m=new t(r,i,n),p=h(e.huffman,e.refinement,o.width,o.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,l,g,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,s,e.refinementTemplate,e.refinementAt,m)
this.drawBitmap(o,p)},onImmediateLosslessTextRegion:function(){this.onImmediateTextRegion.apply(this,arguments)}},x.prototype={parseChunks:function(e){return k(e)}},x}(),hr=(PDFJS.bidi=function(){function e(e){return 0!==(1&e)}function t(e){return 0===(1&e)}function a(e,t,a){for(var r=t,i=e.length;i>r;++r)if(e[r]!==a)return r
return r}function r(e,t,a,r){for(var i=t;a>i;++i)e[i]=r}function i(e,t,a){for(var r=t,i=a-1;i>r;++r,--i){var n=e[r]
e[r]=e[i],e[i]=n}}function n(e,t,a){return{str:e,dir:a?"ttb":t?"ltr":"rtl"}}function s(s,u,f){var d=!0,g=s.length
if(0===g||f)return n(s,d,f)
l.length=g,h.length=g
var m,p,b=0
for(m=0;g>m;++m){l[m]=s.charAt(m)
var v=s.charCodeAt(m),y="L"
255>=v?y=o[v]:v>=1424&&1524>=v?y="R":v>=1536&&1791>=v?y=c[255&v]:v>=1792&&2220>=v&&(y="AL"),"R"!==y&&"AL"!==y&&"AN"!==y||b++,h[m]=y}if(0===b)return d=!0,n(s,d);-1===u&&(.3>g/b?(d=!0,u=0):(d=!1,u=1))
var k=[]
for(m=0;g>m;++m)k[m]=u
var w=e(u)?"R":"L",x=w,C=x,S=x
for(m=0;g>m;++m)"NSM"===h[m]?h[m]=S:S=h[m]
S=x
var A
for(m=0;g>m;++m)A=h[m],"EN"===A?h[m]="AL"===S?"AN":"EN":"R"!==A&&"L"!==A&&"AL"!==A||(S=A)
for(m=0;g>m;++m)A=h[m],"AL"===A&&(h[m]="R")
for(m=1;g-1>m;++m)"ES"===h[m]&&"EN"===h[m-1]&&"EN"===h[m+1]&&(h[m]="EN"),"CS"!==h[m]||"EN"!==h[m-1]&&"AN"!==h[m-1]||h[m+1]!==h[m-1]||(h[m]=h[m-1])
for(m=0;g>m;++m)if("EN"===h[m]){var I
for(I=m-1;I>=0&&"ET"===h[I];--I)h[I]="EN"
for(I=m+1;g>I&&"ET"===h[I];--I)h[I]="EN"}for(m=0;g>m;++m)A=h[m],"WS"!==A&&"ES"!==A&&"ET"!==A&&"CS"!==A||(h[m]="ON")
for(S=x,m=0;g>m;++m)A=h[m],"EN"===A?h[m]="L"===S?"L":"EN":"R"!==A&&"L"!==A||(S=A)
for(m=0;g>m;++m)if("ON"===h[m]){var B=a(h,m+1,"ON"),T=x
m>0&&(T=h[m-1])
var O=C
g>B+1&&(O=h[B+1]),"L"!==T&&(T="R"),"L"!==O&&(O="R"),T===O&&r(h,m,B,T),m=B-1}for(m=0;g>m;++m)"ON"===h[m]&&(h[m]=w)
for(m=0;g>m;++m)A=h[m],t(k[m])?"R"===A?k[m]+=1:"AN"!==A&&"EN"!==A||(k[m]+=2):"L"!==A&&"AN"!==A&&"EN"!==A||(k[m]+=1)
var R,L=-1,M=99
for(m=0,p=k.length;p>m;++m)R=k[m],R>L&&(L=R),M>R&&e(R)&&(M=R)
for(R=L;R>=M;--R){var P=-1
for(m=0,p=k.length;p>m;++m)k[m]<R?P>=0&&(i(l,P,m),P=-1):0>P&&(P=m)
P>=0&&i(l,P,k.length)}for(m=0,p=l.length;p>m;++m){var E=l[m]
"<"!==E&&">"!==E||(l[m]="")}return n(l.join(""),d)}var o=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ON","CS","ON","CS","ON","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ON","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","ON","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],c=["AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL"],l=[],h=[]
return s}(),function(e){function t(e){var t=3285377520
this.h1=e?4294967295&e:t,this.h2=e?4294967295&e:t}var a=4294901760,r=65535,i=!1
try{new Uint32Array(new Uint8Array(5).buffer,0,1)}catch(n){i=!0}return t.prototype={update:function(e){var t,n=i
if("string"==typeof e){var s=new Uint8Array(2*e.length),o=0
for(t=0;t<e.length;t++){var c=e.charCodeAt(t)
255>=c?s[o++]=c:(s[o++]=c>>>8,s[o++]=255&c)}}else if(e instanceof Uint8Array)s=e,o=s.length
else{if(!("object"==typeof e&&"length"in e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
s=e,o=s.length,n=!0}var l=o>>2,h=o-4*l,u=n?new de(s,l):new Uint32Array(s.buffer,0,l),f=0,d=0,g=this.h1,m=this.h2,p=3432918353,b=461845907,v=p&r,y=b&r
for(t=0;l>t;t++)1&t?(f=u[t],f=f*p&a|f*v&r,f=f<<15|f>>>17,f=f*b&a|f*y&r,g^=f,g=g<<13|g>>>19,g=5*g+3864292196):(d=u[t],d=d*p&a|d*v&r,d=d<<15|d>>>17,d=d*b&a|d*y&r,m^=d,m=m<<13|m>>>19,m=5*m+3864292196)
switch(f=0,h){case 3:f^=s[4*l+2]<<16
case 2:f^=s[4*l+1]<<8
case 1:f^=s[4*l],f=f*p&a|f*v&r,f=f<<15|f>>>17,f=f*b&a|f*y&r,1&l?g^=f:m^=f}return this.h1=g,this.h2=m,this},hexdigest:function(){var e=this.h1,t=this.h2
e^=t>>>1,e=3981806797*e&a|36045*e&r,t=4283543511*t&a|(2950163797*(t<<16|e>>>16)&a)>>>16,e^=t>>>1,e=444984403*e&a|60499*e&r,t=3301882366*t&a|(3120437893*(t<<16|e>>>16)&a)>>>16,e^=t>>>1
for(var i=0,n=[e,t],s="";i<n.length;i++){for(var o=(n[i]>>>0).toString(16);o.length<8;)o="0"+o
s+=o}return s}},t}())}.call("undefined"==typeof window?this:window),PDFJS.workerSrc||"undefined"==typeof document||(PDFJS.workerSrc=function(){"use strict"
var e=document.currentScript.src
return e&&e.replace(/\.js$/i,".worker.js")}())

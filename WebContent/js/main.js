/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
 */
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
    d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
    a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
    a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
    top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
    e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
    b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
                d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
    c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
    q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
    f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
    function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
        for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
        if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
            ""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
        c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
        -1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
    function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
        n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
        h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
        for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
        -1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
        f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
        c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
        n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
        j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
        q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
        e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
        [a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
            !0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
        l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
        a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
    wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
        "":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
        return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
        m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
        g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
        d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
        caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
        1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
        f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
            d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
        new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
        b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
            (d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
        s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
        {"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
        0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
        j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
        u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
            v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
            A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
            (x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
        e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
        j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
            j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
        v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
        ""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
        "string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
        "");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
            D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
    function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
        c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
        b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
    k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
            " - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
        h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
        ".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
                c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
        [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
        function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
        this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
            return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
        this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
            a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
            break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
            g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
                ["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
                "user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
                    !o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
                J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
                g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
                e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
                    o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
                    o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
    isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
        b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
        /<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
        t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
        this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
        m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
            e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
        1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
        b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
        f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
        d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
        "table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
        this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
        d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
        this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
        [b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
        d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
    p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
        b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
        1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
    g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
        this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
        k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
        k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
        function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
        return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
        j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
    k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
        function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
        "column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
        g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
        a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
        if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
        c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
        "search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
        function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
    p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
        this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
        !0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
        function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
        function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
        p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
        ", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
        "row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
        _aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
        {aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
            "_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
            sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
    Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
        bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
        aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
        aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
            this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
        header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
        sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
        sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
        m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
            sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
        b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
        h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
    " "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
        return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
        a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
    b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
        h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
            "&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
        _fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
        _fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
        _fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
        _fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! flatpickr v3.0.6, @license MIT */
function FlatpickrInstance(element, config) {
	var self = this;

	self._ = {};
	self._.afterDayAnim = afterDayAnim;
	self._bind = bind;
	self._compareDates = compareDates;
	self._setHoursFromDate = setHoursFromDate;
	self.changeMonth = changeMonth;
	self.changeYear = changeYear;
	self.clear = clear;
	self.close = close;
	self._createElement = createElement;
	self.destroy = destroy;
	self.isEnabled = isEnabled;
	self.jumpToDate = jumpToDate;
	self.open = open;
	self.redraw = redraw;
	self.set = set;
	self.setDate = setDate;
	self.toggle = toggle;

	function init() {
		self.element = self.input = element;
		self.instanceConfig = config || {};
		self.parseDate = FlatpickrInstance.prototype.parseDate.bind(self);
		self.formatDate = FlatpickrInstance.prototype.formatDate.bind(self);

		setupFormats();
		parseConfig();
		setupLocale();
		setupInputs();
		setupDates();
		setupHelperFunctions();

		self.isOpen = false;

		self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if (!self.isMobile) build();

		bindEvents();

		if (self.selectedDates.length || self.config.noCalendar) {
			if (self.config.enableTime) {
				setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : null);
			}
			updateValue();
		}

		self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;

		if (self.config.weekNumbers) {
			self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
		}

		if (!self.isMobile) positionCalendar();

		triggerEvent("Ready");
	}

	/**
  * Binds a function to the current flatpickr instance
  * @param {Function} fn the function
  * @return {Function} the function bound to the instance
  */
	function bindToInstance(fn) {
		return fn.bind(self);
	}

	/**
  * The handler for all events targeting the time inputs
  * @param {Event} e the event - "input", "wheel", "increment", etc
  */
	function updateTime(e) {
		if (self.config.noCalendar && !self.selectedDates.length)
			// picking time only
			self.selectedDates = [self.now];

		timeWrapper(e);

		if (!self.selectedDates.length) return;

		if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
			setHoursFromInputs();
			updateValue();
		} else {
			setTimeout(function () {
				setHoursFromInputs();
				updateValue();
			}, 1000);
		}
	}

	/**
  * Syncs the selected date object time with user's time input
  */
	function setHoursFromInputs() {
		if (!self.config.enableTime) return;

		var hours = (parseInt(self.hourElement.value, 10) || 0) % (self.amPM ? 12 : 24),
		    minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
		    seconds = self.config.enableSeconds ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

		if (self.amPM !== undefined) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

		if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

			hours = Math.max(hours, self.config.minDate.getHours());
			if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
		}

		if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
			hours = Math.min(hours, self.config.maxDate.getHours());
			if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
		}

		setHours(hours, minutes, seconds);
	}

	/**
  * Syncs time input values with a date
  * @param {Date} dateObj the date to sync with
  */
	function setHoursFromDate(dateObj) {
		var date = dateObj || self.latestSelectedDateObj;

		if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
	}

	/**
  * Sets the hours, minutes, and optionally seconds
  * of the latest selected date object and the
  * corresponding time inputs
  * @param {Number} hours the hour. whether its military
  *                 or am-pm gets inferred from config
  * @param {Number} minutes the minutes
  * @param {Number} seconds the seconds (optional)
  */
	function setHours(hours, minutes, seconds) {
		if (self.selectedDates.length) {
			self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
		}

		if (!self.config.enableTime || self.isMobile) return;

		self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

		self.minuteElement.value = self.pad(minutes);

		if (!self.config.time_24hr) self.amPM.textContent = hours >= 12 ? "PM" : "AM";

		if (self.config.enableSeconds === true) self.secondElement.value = self.pad(seconds);
	}

	/**
  * Handles the year input and incrementing events
  * @param {Event} event the keyup or increment event
  */
	function onYearInput(event) {
		var year = event.target.value;
		if (event.delta) year = (parseInt(year) + event.delta).toString();

		if (year.length === 4 || event.key === "Enter") {
			self.currentYearElement.blur();
			if (!/[^\d]/.test(year)) changeYear(year);
		}
	}

	/**
  * Essentially addEventListener + tracking
  * @param {Element} element the element to addEventListener to
  * @param {String} event the event name
  * @param {Function} handler the event handler
  */
	function bind(element, event, handler) {
		if (event instanceof Array) return event.forEach(function (ev) {
			return bind(element, ev, handler);
		});

		if (element instanceof Array) return element.forEach(function (el) {
			return bind(el, event, handler);
		});

		element.addEventListener(event, handler);
		self._handlers.push({ element: element, event: event, handler: handler });
	}

	/**
  * A mousedown handler which mimics click.
  * Minimizes latency, since we don't need to wait for mouseup in most cases.
  * Also, avoids handling right clicks.
  *
  * @param {Function} handler the event handler
  */
	function onClick(handler) {
		return function (evt) {
			return evt.which === 1 && handler(evt);
		};
	}

	/**
  * Adds all the necessary event listeners
  */
	function bindEvents() {
		self._handlers = [];
		self._animationLoop = [];
		if (self.config.wrap) {
			["open", "close", "toggle", "clear"].forEach(function (evt) {
				Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
					return bind(el, "mousedown", onClick(self[evt]));
				});
			});
		}

		if (self.isMobile) return setupMobile();

		self.debouncedResize = debounce(onResize, 50);
		self.triggerChange = function () {
			triggerEvent("Change");
		};
		self.debouncedChange = debounce(self.triggerChange, 300);

		if (self.config.mode === "range" && self.daysContainer) bind(self.daysContainer, "mouseover", function (e) {
			return onMouseOver(e.target);
		});

		bind(window.document.body, "keydown", onKeyDown);

		if (!self.config.static) bind(self._input, "keydown", onKeyDown);

		if (!self.config.inline && !self.config.static) bind(window, "resize", self.debouncedResize);

		if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);

		bind(window.document, "mousedown", onClick(documentClick));
		bind(self._input, "blur", documentClick);

		if (self.config.clickOpens === true) {
			bind(self._input, "focus", self.open);
			bind(self._input, "mousedown", onClick(self.open));
		}

		if (!self.config.noCalendar) {
			self.monthNav.addEventListener("wheel", function (e) {
				return e.preventDefault();
			});
			bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
			bind(self.monthNav, "mousedown", onClick(onMonthNavClick));

			bind(self.monthNav, ["keyup", "increment"], onYearInput);
			bind(self.daysContainer, "mousedown", onClick(selectDate));

			if (self.config.animate) {
				bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
				bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
			}
		}

		if (self.config.enableTime) {
			var selText = function selText(e) {
				return e.target.select();
			};
			bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
			bind(self.timeContainer, "mousedown", onClick(timeIncrement));

			bind(self.timeContainer, ["wheel", "increment"], self.debouncedChange);
			bind(self.timeContainer, "input", self.triggerChange);

			bind([self.hourElement, self.minuteElement], "focus", selText);

			if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
				return self.secondElement.select();
			});

			if (self.amPM !== undefined) {
				bind(self.amPM, "mousedown", onClick(function (e) {
					updateTime(e);
					self.triggerChange(e);
				}));
			}
		}
	}

	function processPostDayAnimation() {
		for (var i = self._animationLoop.length; i--;) {
			self._animationLoop[i]();
			self._animationLoop.splice(i, 1);
		}
	}

	/**
  * Removes the day container that slided out of view
  * @param {Event} e the animation event
  */
	function animateDays(e) {
		if (self.daysContainer.childNodes.length > 1) {
			switch (e.animationName) {
				case "fpSlideLeft":
					self.daysContainer.lastChild.classList.remove("slideLeftNew");
					self.daysContainer.removeChild(self.daysContainer.firstChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				case "fpSlideRight":
					self.daysContainer.firstChild.classList.remove("slideRightNew");
					self.daysContainer.removeChild(self.daysContainer.lastChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				default:
					break;
			}
		}
	}

	/**
  * Removes the month element that animated out of view
  * @param {Event} e the animation event
  */
	function animateMonths(e) {
		switch (e.animationName) {
			case "fpSlideLeftNew":
			case "fpSlideRightNew":
				self.navigationCurrentMonth.classList.remove("slideLeftNew");
				self.navigationCurrentMonth.classList.remove("slideRightNew");
				var nav = self.navigationCurrentMonth;

				while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
					self.monthNav.removeChild(nav.nextSibling);
				}while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
					self.monthNav.removeChild(nav.previousSibling);
				}self.oldCurMonth = null;
				break;
		}
	}

	/**
  * Set the calendar view to a particular date.
  * @param {Date} jumpDate the date to set the view to
  */
	function jumpToDate(jumpDate) {
		jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

		try {
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
		} catch (e) {
			/* istanbul ignore next */
			console.error(e.stack);
			/* istanbul ignore next */
			console.warn("Invalid date supplied: " + jumpDate);
		}

		self.redraw();
	}

	/**
  * The up/down arrow handler for time inputs
  * @param {Event} e the click event
  */
	function timeIncrement(e) {
		if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
	}

	/**
  * Increments/decrements the value of input associ-
  * ated with the up/down arrow by dispatching an
  * "increment" event on the input.
  *
  * @param {Event} e the click event
  * @param {Number} delta the diff (usually 1 or -1)
  * @param {Element} inputElem the input element
  */
	function incrementNumInput(e, delta, inputElem) {
		var input = inputElem || e.target.parentNode.childNodes[0];
		var event = createEvent("increment");
		event.delta = delta;
		input.dispatchEvent(event);
	}

	function createNumberInput(inputClassName) {
		var wrapper = createElement("div", "numInputWrapper"),
		    numInput = createElement("input", "numInput " + inputClassName),
		    arrowUp = createElement("span", "arrowUp"),
		    arrowDown = createElement("span", "arrowDown");

		numInput.type = "text";
		numInput.pattern = "\\d*";

		wrapper.appendChild(numInput);
		wrapper.appendChild(arrowUp);
		wrapper.appendChild(arrowDown);

		return wrapper;
	}

	function build() {
		var fragment = window.document.createDocumentFragment();
		self.calendarContainer = createElement("div", "flatpickr-calendar");
		self.calendarContainer.tabIndex = -1;

		if (!self.config.noCalendar) {
			fragment.appendChild(buildMonthNav());
			self.innerContainer = createElement("div", "flatpickr-innerContainer");

			if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

			self.rContainer = createElement("div", "flatpickr-rContainer");
			self.rContainer.appendChild(buildWeekdays());

			if (!self.daysContainer) {
				self.daysContainer = createElement("div", "flatpickr-days");
				self.daysContainer.tabIndex = -1;
			}

			buildDays();
			self.rContainer.appendChild(self.daysContainer);

			self.innerContainer.appendChild(self.rContainer);
			fragment.appendChild(self.innerContainer);
		}

		if (self.config.enableTime) fragment.appendChild(buildTime());

		toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
		toggleClass(self.calendarContainer, "animate", self.config.animate);

		self.calendarContainer.appendChild(fragment);

		var customAppend = self.config.appendTo && self.config.appendTo.nodeType;

		if (self.config.inline || self.config.static) {
			self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

			if (self.config.inline && !customAppend) {
				return self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
			}

			if (self.config.static) {
				var wrapper = createElement("div", "flatpickr-wrapper");
				self.element.parentNode.insertBefore(wrapper, self.element);
				wrapper.appendChild(self.element);

				if (self.altInput) wrapper.appendChild(self.altInput);

				wrapper.appendChild(self.calendarContainer);
				return;
			}
		}

		(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
	}

	function createDay(className, date, dayNumber, i) {
		var dateIsEnabled = isEnabled(date, true),
		    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

		dayElement.dateObj = date;
		dayElement.$i = i;
		dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

		if (compareDates(date, self.now) === 0) {
			self.todayDateElem = dayElement;
			dayElement.classList.add("today");
		}

		if (dateIsEnabled) {
			dayElement.tabIndex = -1;
			if (isDateSelected(date)) {
				dayElement.classList.add("selected");
				self.selectedDateElem = dayElement;
				if (self.config.mode === "range") {
					toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);

					toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
				}
			}
		} else {
			dayElement.classList.add("disabled");
			if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
		}

		if (self.config.mode === "range") {
			if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

			if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
		}

		if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
			self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
		}

		triggerEvent("DayCreate", dayElement);

		return dayElement;
	}

	function focusOnDay(currentIndex, offset) {
		var newIndex = currentIndex + offset || 0,
		    targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0],
		    focus = function focus() {
			targetNode = targetNode || self.days.childNodes[newIndex];
			targetNode.focus();

			if (self.config.mode === "range") onMouseOver(targetNode);
		};

		if (targetNode === undefined && offset !== 0) {
			if (offset > 0) {
				self.changeMonth(1);
				newIndex = newIndex % 42;
			} else if (offset < 0) {
				self.changeMonth(-1);
				newIndex += 42;
			}

			return afterDayAnim(focus);
		}

		focus();
	}

	function afterDayAnim(fn) {
		if (self.config.animate === true) return self._animationLoop.push(fn);
		fn();
	}

	function buildDays(delta) {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    isRangeMode = self.config.mode === "range";

		self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);
		self.selectedDateElem = undefined;
		self.todayDateElem = undefined;

		var daysInMonth = self.utils.getDaysinMonth(),
		    days = window.document.createDocumentFragment();

		var dayNumber = self.prevMonthDays + 1 - firstOfMonth,
		    dayIndex = 0;

		if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

		if (isRangeMode) {
			// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
			self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
			self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
		}

		// prepend days from the ending of previous month
		for (; dayNumber <= self.prevMonthDays; dayNumber++, dayIndex++) {
			days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
			days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
			days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
		}

		if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
			self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;

			self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
		} else updateNavigationCurrentMonth();

		var dayContainer = createElement("div", "dayContainer");
		dayContainer.appendChild(days);

		if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
			while (self.daysContainer.childNodes.length > 1) {
				self.daysContainer.removeChild(self.daysContainer.firstChild);
			}
		}

		if (delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);

		self.days = self.daysContainer.firstChild;
		return self.daysContainer;
	}

	function clearNode(node) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}

	function buildMonthNav() {
		var monthNavFragment = window.document.createDocumentFragment();
		self.monthNav = createElement("div", "flatpickr-month");

		self.prevMonthNav = createElement("span", "flatpickr-prev-month");
		self.prevMonthNav.innerHTML = self.config.prevArrow;

		self.currentMonthElement = createElement("span", "cur-month");
		self.currentMonthElement.title = self.l10n.scrollTitle;

		var yearInput = createNumberInput("cur-year");
		self.currentYearElement = yearInput.childNodes[0];
		self.currentYearElement.title = self.l10n.scrollTitle;

		if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

		if (self.config.maxDate) {
			self.currentYearElement.max = self.config.maxDate.getFullYear();

			self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
		}

		self.nextMonthNav = createElement("span", "flatpickr-next-month");
		self.nextMonthNav.innerHTML = self.config.nextArrow;

		self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		self.navigationCurrentMonth.appendChild(self.currentMonthElement);
		self.navigationCurrentMonth.appendChild(yearInput);

		monthNavFragment.appendChild(self.prevMonthNav);
		monthNavFragment.appendChild(self.navigationCurrentMonth);
		monthNavFragment.appendChild(self.nextMonthNav);
		self.monthNav.appendChild(monthNavFragment);

		Object.defineProperty(self, "_hidePrevMonthArrow", {
			get: function get() {
				return this.__hidePrevMonthArrow;
			},
			set: function set(bool) {
				if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
				this.__hidePrevMonthArrow = bool;
			}
		});

		Object.defineProperty(self, "_hideNextMonthArrow", {
			get: function get() {
				return this.__hideNextMonthArrow;
			},
			set: function set(bool) {
				if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
				this.__hideNextMonthArrow = bool;
			}
		});

		updateNavigationCurrentMonth();

		return self.monthNav;
	}

	function buildTime() {
		self.calendarContainer.classList.add("hasTime");
		if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
		self.timeContainer = createElement("div", "flatpickr-time");
		self.timeContainer.tabIndex = -1;
		var separator = createElement("span", "flatpickr-time-separator", ":");

		var hourInput = createNumberInput("flatpickr-hour");
		self.hourElement = hourInput.childNodes[0];

		var minuteInput = createNumberInput("flatpickr-minute");
		self.minuteElement = minuteInput.childNodes[0];

		self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;

		self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

		self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = self.config.time_24hr ? 0 : 1;
		self.hourElement.max = self.config.time_24hr ? 23 : 12;

		self.minuteElement.min = 0;
		self.minuteElement.max = 59;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		self.timeContainer.appendChild(hourInput);
		self.timeContainer.appendChild(separator);
		self.timeContainer.appendChild(minuteInput);

		if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

		if (self.config.enableSeconds) {
			self.timeContainer.classList.add("hasSeconds");

			var secondInput = createNumberInput("flatpickr-second");
			self.secondElement = secondInput.childNodes[0];

			self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			self.timeContainer.appendChild(secondInput);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = -1;
			self.timeContainer.appendChild(self.amPM);
		}

		return self.timeContainer;
	}

	function buildWeekdays() {
		if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

		var firstDayOfWeek = self.l10n.firstDayOfWeek;
		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

		return self.weekdayContainer;
	}

	/* istanbul ignore next */
	function buildWeeks() {
		self.calendarContainer.classList.add("hasWeeks");
		self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
		self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
		self.weekNumbers = createElement("div", "flatpickr-weeks");
		self.weekWrapper.appendChild(self.weekNumbers);

		return self.weekWrapper;
	}

	function changeMonth(value, is_offset, animate) {
		is_offset = is_offset === undefined || is_offset;
		var delta = is_offset ? value : value - self.currentMonth;
		var skipAnimations = !self.config.animate || animate === false;

		if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;

		self.currentMonth += delta;

		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth > 11 ? 1 : -1;
			self.currentMonth = (self.currentMonth + 12) % 12;

			triggerEvent("YearChange");
		}

		buildDays(!skipAnimations ? delta : undefined);

		if (skipAnimations) {
			triggerEvent("MonthChange");
			return updateNavigationCurrentMonth();
		}

		// remove possible remnants from clicking too fast
		var nav = self.navigationCurrentMonth;
		if (delta < 0) {
			while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
				self.monthNav.removeChild(nav.nextSibling);
			}
		} else if (delta > 0) {
			while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
				self.monthNav.removeChild(nav.previousSibling);
			}
		}

		self.oldCurMonth = self.navigationCurrentMonth;

		self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);

		if (delta > 0) {
			self.daysContainer.firstChild.classList.add("slideLeft");
			self.daysContainer.lastChild.classList.add("slideLeftNew");

			self.oldCurMonth.classList.add("slideLeft");
			self.navigationCurrentMonth.classList.add("slideLeftNew");
		} else if (delta < 0) {
			self.daysContainer.firstChild.classList.add("slideRightNew");
			self.daysContainer.lastChild.classList.add("slideRight");

			self.oldCurMonth.classList.add("slideRight");
			self.navigationCurrentMonth.classList.add("slideRightNew");
		}

		self.currentMonthElement = self.navigationCurrentMonth.firstChild;
		self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];

		updateNavigationCurrentMonth();
		self.oldCurMonth.firstChild.textContent = self.utils.monthToStr(self.currentMonth - delta);

		triggerEvent("MonthChange");

		if (document.activeElement && document.activeElement.$i) {
			var index = document.activeElement.$i;
			afterDayAnim(function () {
				focusOnDay(index, 0);
			});
		}
	}

	function clear(triggerChangeEvent) {
		self.input.value = "";

		if (self.altInput) self.altInput.value = "";

		if (self.mobileInput) self.mobileInput.value = "";

		self.selectedDates = [];
		self.latestSelectedDateObj = undefined;
		self.showTimeInput = false;

		self.redraw();

		if (triggerChangeEvent !== false)
			// triggerChangeEvent is true (default) or an Event
			triggerEvent("Change");
	}

	function close() {
		self.isOpen = false;

		if (!self.isMobile) {
			self.calendarContainer.classList.remove("open");
			self._input.classList.remove("active");
		}

		triggerEvent("Close");
	}

	function destroy() {
		if (self.config !== undefined) triggerEvent("Destroy");

		for (var i = self._handlers.length; i--;) {
			var h = self._handlers[i];
			h.element.removeEventListener(h.event, h.handler);
		}

		self._handlers = [];

		if (self.mobileInput) {
			if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
			self.mobileInput = null;
		} else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);

		if (self.altInput) {
			self.input.type = "text";
			if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
			delete self.altInput;
		}

		if (self.input) {
			self.input.type = self.input._type;
			self.input.classList.remove("flatpickr-input");
			self.input.removeAttribute("readonly");
			self.input.value = "";
		}

		["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
			return delete self[k];
		});
	}

	function isCalendarElem(elem) {
		if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;

		return self.calendarContainer.contains(elem);
	}

	function documentClick(e) {
		if (self.isOpen && !self.config.inline) {
			var isCalendarElement = isCalendarElem(e.target);
			var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) ||
			// web components
			e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

			var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;

			if (lostFocus && self.config.ignoredFocusElements.indexOf(e.target) === -1) {
				self.close();

				if (self.config.mode === "range" && self.selectedDates.length === 1) {
					self.clear(false);
					self.redraw();
				}
			}
		}
	}

	function changeYear(newYear) {
		if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;

		var newYearNum = parseInt(newYear, 10),
		    isNewYear = self.currentYear !== newYearNum;

		self.currentYear = newYearNum || self.currentYear;

		if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
			self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
		} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
			self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
		}

		if (isNewYear) {
			self.redraw();
			triggerEvent("YearChange");
		}
	}

	function isEnabled(date, timeless) {
		if (self.config.minDate && compareDates(date, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && compareDates(date, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;

		if (!self.config.enable.length && !self.config.disable.length) return true;

		var dateToCheck = self.parseDate(date, null, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		for (var i = 0, d; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) // disabled by function
				return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
				// disabled by date
				return bool;else if (typeof d === "string" && self.parseDate(d, null, true).getTime() === dateToCheck.getTime())
				// disabled by date string
				return bool;else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
		}

		return !bool;
	}

	function onKeyDown(e) {
		var isInput = e.target === self._input;
		var calendarElem = isCalendarElem(e.target);
		var allowInput = self.config.allowInput;
		var allowKeydown = self.isOpen && (!allowInput || !isInput);
		var allowInlineKeydown = self.config.inline && isInput && !allowInput;

		if (e.key === "Enter" && allowInput && isInput) {
			self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
			return e.target.blur();
		} else if (calendarElem || allowKeydown || allowInlineKeydown) {
			var isTimeObj = self.timeContainer && self.timeContainer.contains(e.target);
			switch (e.key) {
				case "Enter":
					if (isTimeObj) updateValue();else selectDate(e);

					break;

				case "Escape":
					// escape
					e.preventDefault();
					self.close();
					break;

				case "ArrowLeft":
				case "ArrowRight":
					if (!isTimeObj) {
						e.preventDefault();

						if (self.daysContainer) {
							var _delta = e.key === "ArrowRight" ? 1 : -1;

							if (!e.ctrlKey) focusOnDay(e.target.$i, _delta);else changeMonth(_delta, true);
						} else if (self.config.enableTime && !isTimeObj) self.hourElement.focus();
					}

					break;

				case "ArrowUp":
				case "ArrowDown":
					e.preventDefault();
					var delta = e.key === "ArrowDown" ? 1 : -1;

					if (self.daysContainer) {
						if (e.ctrlKey) {
							changeYear(self.currentYear - delta);
							focusOnDay(e.target.$i, 0);
						} else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
					} else if (self.config.enableTime) {
						if (!isTimeObj) self.hourElement.focus();
						updateTime(e);
					}

					break;

				case "Tab":
					if (e.target === self.hourElement) {
						e.preventDefault();
						self.minuteElement.select();
					} else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
						e.preventDefault();
						(self.secondElement || self.amPM).focus();
					} else if (e.target === self.secondElement) {
						e.preventDefault();
						self.amPM.focus();
					}

					break;

				case "a":
					if (e.target === self.amPM) {
						self.amPM.textContent = "AM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				case "p":
					if (e.target === self.amPM) {
						self.amPM.textContent = "PM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				default:
					break;

			}

			triggerEvent("KeyDown", e);
		}
	}

	function onMouseOver(elem) {
		if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day")) return;

		var hoverDate = elem.dateObj,
		    initialDate = self.parseDate(self.selectedDates[0], null, true),
		    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    containsDisabled = false;

		for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
			if (!isEnabled(new Date(t))) {
				containsDisabled = true;
				break;
			}
		}

		var _loop = function _loop(timestamp, i) {
			var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
			    dayElem = self.days.childNodes[i];

			if (outOfRange) {
				self.days.childNodes[i].classList.add("notAllowed");
				["inRange", "startRange", "endRange"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
				return "continue";
			} else if (containsDisabled && !outOfRange) return "continue";

			["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
				dayElem.classList.remove(c);
			});

			var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
			    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

			elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

			if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");

			if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
		};

		for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
			var _ret = _loop(timestamp, i);

			if (_ret === "continue") continue;
		}
	}

	function onResize() {
		if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
	}

	function open(e, positionElement) {
		if (self.isMobile) {
			if (e) {
				e.preventDefault();
				e.target.blur();
			}

			setTimeout(function () {
				self.mobileInput.click();
			}, 0);

			triggerEvent("Open");
			return;
		}

		if (self.isOpen || self._input.disabled || self.config.inline) return;

		self.isOpen = true;
		self.calendarContainer.classList.add("open");
		positionCalendar(positionElement);
		self._input.classList.add("active");

		triggerEvent("Open");
	}

	function minMaxDateSetter(type) {
		return function (date) {
			var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);

			var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
			var isValidDate = date && dateObj instanceof Date;

			if (isValidDate) {
				self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
			}

			if (self.selectedDates) {
				self.selectedDates = self.selectedDates.filter(function (d) {
					return isEnabled(d);
				});
				if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
				updateValue();
			}

			if (self.daysContainer) {
				redraw();

				if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);

				self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
			}
		};
	}

	function parseConfig() {
		var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

		var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];

		self.config = Object.create(flatpickr.defaultConfig);

		var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

		self.config.parseDate = userConfig.parseDate;
		self.config.formatDate = userConfig.formatDate;

		Object.defineProperty(self.config, "enable", {
			get: function get() {
				return self.config._enable || [];
			},
			set: function set(dates) {
				return self.config._enable = parseDateRules(dates);
			}
		});

		Object.defineProperty(self.config, "disable", {
			get: function get() {
				return self.config._disable || [];
			},
			set: function set(dates) {
				return self.config._disable = parseDateRules(dates);
			}
		});

		_extends(self.config, userConfig);

		if (!userConfig.dateFormat && userConfig.enableTime) {
			self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
		}

		if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
			self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
		}

		Object.defineProperty(self.config, "minDate", {
			get: function get() {
				return this._minDate;
			},
			set: minMaxDateSetter("min")
		});

		Object.defineProperty(self.config, "maxDate", {
			get: function get() {
				return this._maxDate;
			},
			set: minMaxDateSetter("max")
		});

		self.config.minDate = userConfig.minDate;
		self.config.maxDate = userConfig.maxDate;

		for (var i = 0; i < boolOpts.length; i++) {
			self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
		}for (var _i = hooks.length; _i--;) {
			if (self.config[hooks[_i]] !== undefined) {
				self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
			}
		}

		for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
			var pluginConf = self.config.plugins[_i2](self) || {};
			for (var key in pluginConf) {

				if (self.config[key] instanceof Array || ~hooks.indexOf(key)) {
					self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
				} else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
			}
		}

		triggerEvent("ParseConfig");
	}

	function setupLocale() {
		if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

		self.l10n = _extends(Object.create(flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] || {} : {});
	}

	function positionCalendar() {
		var positionElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self._positionElement;

		if (self.calendarContainer === undefined) return;

		var calendarHeight = self.calendarContainer.offsetHeight,
		    calendarWidth = self.calendarContainer.offsetWidth,
		    configPos = self.config.position,
		    inputBounds = positionElement.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom,
		    showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;

		var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);

		toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
		toggleClass(self.calendarContainer, "arrowBottom", showOnTop);

		if (self.config.inline) return;

		var left = window.pageXOffset + inputBounds.left;
		var right = window.document.body.offsetWidth - inputBounds.right;
		var rightMost = left + calendarWidth > window.document.body.offsetWidth;

		toggleClass(self.calendarContainer, "rightMost", rightMost);

		if (self.config.static) return;

		self.calendarContainer.style.top = top + "px";

		if (!rightMost) {
			self.calendarContainer.style.left = left + "px";
			self.calendarContainer.style.right = "auto";
		} else {
			self.calendarContainer.style.left = "auto";
			self.calendarContainer.style.right = right + "px";
		}
	}

	function redraw() {
		if (self.config.noCalendar || self.isMobile) return;

		buildWeekdays();
		updateNavigationCurrentMonth();
		buildDays();
	}

	function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

		var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

		var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";

		self.selectedDateElem = e.target;

		if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
			var selectedIndex = isDateSelected(selectedDate);
			if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
		} else if (self.config.mode === "range") {
			if (self.selectedDates.length === 2) self.clear();

			self.selectedDates.push(selectedDate);

			// unless selecting same date twice, sort ascendingly
			if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});
		}

		setHoursFromInputs();

		if (shouldChangeMonth) {
			var isNewYear = self.currentYear !== selectedDate.getFullYear();
			self.currentYear = selectedDate.getFullYear();
			self.currentMonth = selectedDate.getMonth();

			if (isNewYear) triggerEvent("YearChange");

			triggerEvent("MonthChange");
		}

		buildDays();

		if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

		updateValue();

		if (self.config.enableTime) setTimeout(function () {
			return self.showTimeInput = true;
		}, 50);

		if (self.config.mode === "range") {
			if (self.selectedDates.length === 1) {
				onMouseOver(e.target);

				self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;

				self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
			} else updateNavigationCurrentMonth();
		}

		triggerEvent("Change");

		// maintain focus
		if (!shouldChangeMonth) focusOnDay(e.target.$i, 0);else afterDayAnim(function () {
			return self.selectedDateElem.focus();
		});

		if (self.config.enableTime) setTimeout(function () {
			return self.hourElement.select();
		}, 451);

		if (self.config.closeOnSelect) {
			var single = self.config.mode === "single" && !self.config.enableTime;
			var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

			if (single || range) self.close();
		}
	}

	function set(option, value) {
		self.config[option] = value;
		self.redraw();
		jumpToDate();
	}

	function setSelectedDate(inputDate, format) {
		if (inputDate instanceof Array) self.selectedDates = inputDate.map(function (d) {
			return self.parseDate(d, format);
		});else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate, format)];else if (inputDate && inputDate.substring) {
			switch (self.config.mode) {
				case "single":
					self.selectedDates = [self.parseDate(inputDate, format)];
					break;

				case "multiple":
					self.selectedDates = inputDate.split("; ").map(function (date) {
						return self.parseDate(date, format);
					});
					break;

				case "range":
					self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
						return self.parseDate(date, format);
					});

					break;

				default:
					break;
			}
		}

		self.selectedDates = self.selectedDates.filter(function (d) {
			return d instanceof Date && isEnabled(d, false);
		});

		self.selectedDates.sort(function (a, b) {
			return a.getTime() - b.getTime();
		});
	}

	function setDate(date, triggerChange, format) {
		if (date !== 0 && !date) return self.clear(triggerChange);

		setSelectedDate(date, format);

		self.showTimeInput = self.selectedDates.length > 0;
		self.latestSelectedDateObj = self.selectedDates[0];

		self.redraw();
		jumpToDate();

		setHoursFromDate();
		updateValue(triggerChange);

		if (triggerChange) triggerEvent("Change");
	}

	function parseDateRules(arr) {
		for (var i = arr.length; i--;) {
			if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], null, true);else if (arr[i] && arr[i].from && arr[i].to) {
				arr[i].from = self.parseDate(arr[i].from);
				arr[i].to = self.parseDate(arr[i].to);
			}
		}

		return arr.filter(function (x) {
			return x;
		}); // remove falsy values
	}

	function setupDates() {
		self.selectedDates = [];
		self.now = new Date();

		var preloadedDate = self.config.defaultDate || self.input.value;
		if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);

		var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

		self.currentYear = initialDate.getFullYear();
		self.currentMonth = initialDate.getMonth();

		if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

		self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

		self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

		Object.defineProperty(self, "latestSelectedDateObj", {
			get: function get() {
				return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1];
			},
			set: function set(date) {
				self._selectedDateObj = date;
			}
		});

		if (!self.isMobile) {
			Object.defineProperty(self, "showTimeInput", {
				get: function get() {
					return self._showTimeInput;
				},
				set: function set(bool) {
					self._showTimeInput = bool;
					if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
					positionCalendar();
				}
			});
		}
	}

	function setupHelperFunctions() {
		self.utils = {
			duration: {
				DAY: 86400000
			},
			getDaysinMonth: function getDaysinMonth(month, yr) {
				month = typeof month === "undefined" ? self.currentMonth : month;

				yr = typeof yr === "undefined" ? self.currentYear : yr;

				if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

				return self.l10n.daysInMonth[month];
			},
			monthToStr: function monthToStr(monthNumber, shorthand) {
				shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

				return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
			}
		};
	}

	/* istanbul ignore next */
	function setupFormats() {
		self.formats = Object.create(FlatpickrInstance.prototype.formats);
		["D", "F", "J", "M", "W", "l"].forEach(function (f) {
			self.formats[f] = FlatpickrInstance.prototype.formats[f].bind(self);
		});

		self.revFormat.F = FlatpickrInstance.prototype.revFormat.F.bind(self);
		self.revFormat.M = FlatpickrInstance.prototype.revFormat.M.bind(self);
	}

	function setupInputs() {
		self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

		/* istanbul ignore next */
		if (!self.input) return console.warn("Error: invalid input element specified", self.input);

		self.input._type = self.input.type;
		self.input.type = "text";

		self.input.classList.add("flatpickr-input");
		self._input = self.input;

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
			self._input = self.altInput;
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.disabled = self.input.disabled;
			self.altInput.required = self.input.required;
			self.altInput.type = "text";
			self.input.type = "hidden";

			if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
		}

		if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");

		self._positionElement = self.config.positionElement || self._input;
	}

	function setupMobile() {
		var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

		self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
		self.mobileInput.step = "any";
		self.mobileInput.tabIndex = 1;
		self.mobileInput.type = inputType;
		self.mobileInput.disabled = self.input.disabled;
		self.mobileInput.placeholder = self.input.placeholder;

		self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

		if (self.selectedDates.length) {
			self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
		}

		if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");

		if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");

		self.input.type = "hidden";
		if (self.config.altInput) self.altInput.type = "hidden";

		try {
			self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
		} catch (e) {
			//
		}

		self.mobileInput.addEventListener("change", function (e) {
			self.setDate(e.target.value, false, self.mobileFormatStr);
			triggerEvent("Change");
			triggerEvent("Close");
		});
	}

	function toggle() {
		if (self.isOpen) return self.close();
		self.open();
	}

	function triggerEvent(event, data) {
		var hooks = self.config["on" + event];

		if (hooks !== undefined && hooks.length > 0) {
			for (var i = 0; hooks[i] && i < hooks.length; i++) {
				hooks[i](self.selectedDates, self.input.value, self, data);
			}
		}

		if (event === "Change") {
			self.input.dispatchEvent(createEvent("change"));

			// many front-end frameworks bind to the input event
			self.input.dispatchEvent(createEvent("input"));
		}
	}

	/**
  * Creates an Event, normalized across browsers
  * @param {String} name the event name, e.g. "click"
  * @return {Event} the created event
  */
	function createEvent(name) {
		if (self._supportsEvents) return new Event(name, { bubbles: true });

		self._[name + "Event"] = document.createEvent("Event");
		self._[name + "Event"].initEvent(name, true, true);
		return self._[name + "Event"];
	}

	function isDateSelected(date) {
		for (var i = 0; i < self.selectedDates.length; i++) {
			if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
		}

		return false;
	}

	function isDateInRange(date) {
		if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
		return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
	}

	function updateNavigationCurrentMonth() {
		if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

		self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
		self.currentYearElement.value = self.currentYear;

		self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());

		self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
	}

	/**
  * Updates the values of inputs associated with the calendar
  * @return {void}
  */
	function updateValue(triggerChange) {
		if (!self.selectedDates.length) return self.clear(triggerChange);

		if (self.isMobile) {
			self.mobileInput.value = self.selectedDates.length ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
		}

		var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

		self.input.value = self.selectedDates.map(function (dObj) {
			return self.formatDate(dObj, self.config.dateFormat);
		}).join(joinChar);

		if (self.config.altInput) {
			self.altInput.value = self.selectedDates.map(function (dObj) {
				return self.formatDate(dObj, self.config.altFormat);
			}).join(joinChar);
		}

		if (triggerChange !== false) triggerEvent("ValueUpdate");
	}

	function mouseDelta(e) {
		return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
	}

	function onMonthNavScroll(e) {
		e.preventDefault();
		var isYear = self.currentYearElement.parentNode.contains(e.target);

		if (e.target === self.currentMonthElement || isYear) {

			var delta = mouseDelta(e);

			if (isYear) {
				changeYear(self.currentYear + delta);
				e.target.value = self.currentYear;
			} else self.changeMonth(delta, true, false);
		}
	}

	function onMonthNavClick(e) {
		var isPrevMonth = self.prevMonthNav.contains(e.target);
		var isNextMonth = self.nextMonthNav.contains(e.target);

		if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
			e.preventDefault();
			self.currentYearElement.select();
		} else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
	}

	/**
  * Creates an HTMLElement with given tag, class, and textual content
  * @param {String} tag the HTML tag
  * @param {String} className the new element's class name
  * @param {String} content The new element's text content
  * @return {HTMLElement} the created HTML element
  */
	function createElement(tag, className, content) {
		var e = window.document.createElement(tag);
		className = className || "";
		content = content || "";

		e.className = className;

		if (content !== undefined) e.textContent = content;

		return e;
	}

	function arrayify(obj) {
		if (obj instanceof Array) return obj;
		return [obj];
	}

	function toggleClass(elem, className, bool) {
		if (bool) return elem.classList.add(className);
		elem.classList.remove(className);
	}

	/* istanbul ignore next */
	function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			var context = this,
			    args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	/**
  * Compute the difference in dates, measured in ms
  * @param {Date} date1
  * @param {Date} date2
  * @param {Boolean} timeless whether to reset times of both dates to 00:00
  * @return {Number} the difference in ms
  */
	function compareDates(date1, date2, timeless) {
		if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

		if (timeless !== false) {
			return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
		}

		return date1.getTime() - date2.getTime();
	}

	function timeWrapper(e) {
		e.preventDefault();

		var isKeyDown = e.type === "keydown",
		    isWheel = e.type === "wheel",
		    isIncrement = e.type === "increment",
		    input = e.target;

		if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

		var min = Number(input.min),
		    max = Number(input.max),
		    step = Number(input.step),
		    curValue = parseInt(input.value, 10),
		    delta = e.delta || (!isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1);

		var newValue = curValue + step * delta;

		if (typeof input.value !== "undefined" && input.value.length === 2) {
			var isHourElem = input === self.hourElement,
			    isMinuteElem = input === self.minuteElement;

			if (newValue < min) {
				newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);

				if (isMinuteElem) incrementNumInput(null, -1, self.hourElement);
			} else if (newValue > max) {
				newValue = input === self.hourElement ? newValue - max - !self.amPM : min;

				if (isMinuteElem) incrementNumInput(null, 1, self.hourElement);
			}

			if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

			input.value = self.pad(newValue);
		}
	}

	init();
	return self;
}

FlatpickrInstance.prototype = {
	formats: {
		// get the date in UTC
		Z: function Z(date) {
			return date.toISOString();
		},

		// weekday name, short, e.g. Thu
		D: function D(date) {
			return this.l10n.weekdays.shorthand[this.formats.w(date)];
		},

		// full month name e.g. January
		F: function F(date) {
			return this.utils.monthToStr(this.formats.n(date) - 1, false);
		},

		// padded hour 1-12
		G: function G(date) {
			return FlatpickrInstance.prototype.pad(FlatpickrInstance.prototype.formats.h(date));
		},

		// hours with leading zero e.g. 03
		H: function H(date) {
			return FlatpickrInstance.prototype.pad(date.getHours());
		},

		// day (1-30) with ordinal suffix e.g. 1st, 2nd
		J: function J(date) {
			return date.getDate() + this.l10n.ordinal(date.getDate());
		},

		// AM/PM
		K: function K(date) {
			return date.getHours() > 11 ? "PM" : "AM";
		},

		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function M(date) {
			return this.utils.monthToStr(date.getMonth(), true);
		},

		// seconds 00-59
		S: function S(date) {
			return FlatpickrInstance.prototype.pad(date.getSeconds());
		},

		// unix timestamp
		U: function U(date) {
			return date.getTime() / 1000;
		},

		W: function W(date) {
			return this.config.getWeek(date);
		},

		// full year e.g. 2016
		Y: function Y(date) {
			return date.getFullYear();
		},

		// day in month, padded (01-30)
		d: function d(date) {
			return FlatpickrInstance.prototype.pad(date.getDate());
		},

		// hour from 1-12 (am/pm)
		h: function h(date) {
			return date.getHours() % 12 ? date.getHours() % 12 : 12;
		},

		// minutes, padded with leading zero e.g. 09
		i: function i(date) {
			return FlatpickrInstance.prototype.pad(date.getMinutes());
		},

		// day in month (1-30)
		j: function j(date) {
			return date.getDate();
		},

		// weekday name, full, e.g. Thursday
		l: function l(date) {
			return this.l10n.weekdays.longhand[date.getDay()];
		},

		// padded month number (01-12)
		m: function m(date) {
			return FlatpickrInstance.prototype.pad(date.getMonth() + 1);
		},

		// the month number (1-12)
		n: function n(date) {
			return date.getMonth() + 1;
		},

		// seconds 0-59
		s: function s(date) {
			return date.getSeconds();
		},

		// number of the day of the week
		w: function w(date) {
			return date.getDay();
		},

		// last two digits of year e.g. 16 for 2016
		y: function y(date) {
			return String(date.getFullYear()).substring(2);
		}
	},

	/**
  * Formats a given Date object into a string based on supplied format
  * @param {Date} dateObj the date object
  * @param {String} frmt a string composed of formatting tokens e.g. "Y-m-d"
  * @return {String} The textual representation of the date e.g. 2017-02-03
  */
	formatDate: function formatDate(dateObj, frmt) {
		var _this = this;

		if (this.config !== undefined && this.config.formatDate !== undefined) return this.config.formatDate(dateObj, frmt);

		return frmt.split("").map(function (c, i, arr) {
			return _this.formats[c] && arr[i - 1] !== "\\" ? _this.formats[c](dateObj) : c !== "\\" ? c : "";
		}).join("");
	},


	revFormat: {
		D: function D() {},
		F: function F(dateObj, monthName) {
			dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName));
		},
		G: function G(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		H: function H(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		J: function J(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		K: function K(dateObj, amPM) {
			var hours = dateObj.getHours();

			if (hours !== 12) dateObj.setHours(hours % 12 + 12 * /pm/i.test(amPM));
		},
		M: function M(dateObj, shortMonth) {
			dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth));
		},
		S: function S(dateObj, seconds) {
			dateObj.setSeconds(seconds);
		},
		U: function U(dateObj, unixSeconds) {
			return new Date(parseFloat(unixSeconds) * 1000);
		},

		W: function W(dateObj, weekNumber) {
			weekNumber = parseInt(weekNumber);
			return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0, 0);
		},
		Y: function Y(dateObj, year) {
			dateObj.setFullYear(year);
		},
		Z: function Z(dateObj, ISODate) {
			return new Date(ISODate);
		},

		d: function d(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		h: function h(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		i: function i(dateObj, minutes) {
			dateObj.setMinutes(parseFloat(minutes));
		},
		j: function j(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		l: function l() {},
		m: function m(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		n: function n(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		s: function s(dateObj, seconds) {
			dateObj.setSeconds(parseFloat(seconds));
		},
		w: function w() {},
		y: function y(dateObj, year) {
			dateObj.setFullYear(2000 + parseFloat(year));
		}
	},

	tokenRegex: {
		D: "(\\w+)",
		F: "(\\w+)",
		G: "(\\d\\d|\\d)",
		H: "(\\d\\d|\\d)",
		J: "(\\d\\d|\\d)\\w+",
		K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
		M: "(\\w+)",
		S: "(\\d\\d|\\d)",
		U: "(.+)",
		W: "(\\d\\d|\\d)",
		Y: "(\\d{4})",
		Z: "(.+)",
		d: "(\\d\\d|\\d)",
		h: "(\\d\\d|\\d)",
		i: "(\\d\\d|\\d)",
		j: "(\\d\\d|\\d)",
		l: "(\\w+)",
		m: "(\\d\\d|\\d)",
		n: "(\\d\\d|\\d)",
		s: "(\\d\\d|\\d)",
		w: "(\\d\\d|\\d)",
		y: "(\\d{2})"
	},

	pad: function pad(number) {
		return ("0" + number).slice(-2);
	},

	/**
  * Parses a date(+time) string into a Date object
  * @param {String} date the date string, e.g. 2017-02-03 14:45
  * @param {String} givenFormat the date format, e.g. Y-m-d H:i
  * @param {Boolean} timeless whether to reset the time of Date object
  * @return {Date} the parsed Date object
  */
	parseDate: function parseDate(date, givenFormat, timeless) {
		if (date !== 0 && !date) return null;

		var date_orig = date;

		if (date instanceof Date) date = new Date(date.getTime()); // create a copy

		else if (date.toFixed !== undefined) // timestamp
				date = new Date(date);else {
				// date string
				var format = givenFormat || (this.config || flatpickr.defaultConfig).dateFormat;
				date = String(date).trim();

				if (date === "today") {
					date = new Date();
					timeless = true;
				} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
					date = new Date(date);else if (this.config && this.config.parseDate) date = this.config.parseDate(date, format);else {
					var parsedDate = !this.config || !this.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));

					var matched = void 0;

					for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
						var token = format[i];
						var isBackSlash = token === "\\";
						var escaped = format[i - 1] === "\\" || isBackSlash;

						if (this.tokenRegex[token] && !escaped) {
							regexStr += this.tokenRegex[token];
							var match = new RegExp(regexStr).exec(date);
							if (match && (matched = true)) {
								parsedDate = this.revFormat[token](parsedDate, match[++matchIndex]) || parsedDate;
							}
						} else if (!isBackSlash) regexStr += "."; // don't really care
					}

					date = matched ? parsedDate : null;
				}
			}

		/* istanbul ignore next */
		if (!(date instanceof Date)) {
			console.warn("flatpickr: invalid date " + date_orig);
			console.info(this.element);
			return null;
		}

		if (timeless === true) date.setHours(0, 0, 0, 0);

		return date;
	}
};

/* istanbul ignore next */
function _flatpickr(nodeList, config) {
	var nodes = Array.prototype.slice.call(nodeList); // static list
	var instances = [];
	for (var i = 0; i < nodes.length; i++) {
		try {
			if (nodes[i].getAttribute("data-fp-omit") !== null) continue;

			if (nodes[i]._flatpickr) {
				nodes[i]._flatpickr.destroy();
				nodes[i]._flatpickr = null;
			}

			nodes[i]._flatpickr = new FlatpickrInstance(nodes[i], config || {});
			instances.push(nodes[i]._flatpickr);
		} catch (e) {
			console.warn(e, e.stack);
		}
	}

	return instances.length === 1 ? instances[0] : instances;
}

/* istanbul ignore next */
if (typeof HTMLElement !== "undefined") {
	// browser env
	HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
		return _flatpickr(this, config);
	};

	HTMLElement.prototype.flatpickr = function (config) {
		return _flatpickr([this], config);
	};
}

/* istanbul ignore next */
function flatpickr(selector, config) {
	if (selector instanceof NodeList) return _flatpickr(selector, config);else if (!(selector instanceof HTMLElement)) return _flatpickr(window.document.querySelectorAll(selector), config);

	return _flatpickr([selector], config);
}

/* istanbul ignore next */
flatpickr.defaultConfig = FlatpickrInstance.defaultConfig = {
	mode: "single",

	position: "auto",

	animate: window.navigator.userAgent.indexOf("MSIE") === -1,

	// wrap: see https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
	wrap: false,

	// enables week numbers
	weekNumbers: false,

	// allow manual datetime input
	allowInput: false,

	/*
 	clicking on input opens the date(time)picker.
 	disable if you wish to open the calendar manually with .open()
 */
	clickOpens: true,

	/*
 	closes calendar after date selection,
 	unless 'mode' is 'multiple' or enableTime is true
 */
	closeOnSelect: true,

	// display time picker in 24 hour mode
	time_24hr: false,

	// enables the time picker functionality
	enableTime: false,

	// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
	noCalendar: false,

	// more date format chars at https://chmln.github.io/flatpickr/#dateformat
	dateFormat: "Y-m-d",

	// date format used in aria-label for days
	ariaDateFormat: "F j, Y",

	// altInput - see https://chmln.github.io/flatpickr/#altinput
	altInput: false,

	// the created altInput element will have this class.
	altInputClass: "form-control input",

	// same as dateFormat, but for altInput
	altFormat: "F j, Y", // defaults to e.g. June 10, 2016

	// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
	defaultDate: null,

	// the minimum date that user can pick (inclusive)
	minDate: null,

	// the maximum date that user can pick (inclusive)
	maxDate: null,

	// dateparser that transforms a given string to a date object
	parseDate: null,

	// dateformatter that transforms a given date object to a string, according to passed format
	formatDate: null,

	getWeek: function getWeek(givenDate) {
		var date = new Date(givenDate.getTime());
		var onejan = new Date(date.getFullYear(), 0, 1);
		return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
	},


	// see https://chmln.github.io/flatpickr/#disable
	enable: [],

	// see https://chmln.github.io/flatpickr/#disable
	disable: [],

	// display the short version of month names - e.g. Sep instead of September
	shorthandCurrentMonth: false,

	// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
	inline: false,

	// position calendar inside wrapper and next to the input element
	// leave at false unless you know what you"re doing
	"static": false,

	// DOM node to append the calendar to in *static* mode
	appendTo: null,

	// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
	prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

	// enables seconds in the time picker
	enableSeconds: false,

	// step size used when scrolling/incrementing the hour element
	hourIncrement: 1,

	// step size used when scrolling/incrementing the minute element
	minuteIncrement: 5,

	// initial value in the hour element
	defaultHour: 12,

	// initial value in the minute element
	defaultMinute: 0,

	// disable native mobile datetime input support
	disableMobile: false,

	// default locale
	locale: "default",

	plugins: [],

	ignoredFocusElements: [],

	// called every time calendar is closed
	onClose: undefined, // function (dateObj, dateStr) {}

	// onChange callback when user selects a date or time
	onChange: undefined, // function (dateObj, dateStr) {}

	// called for every day element
	onDayCreate: undefined,

	// called every time the month is changed
	onMonthChange: undefined,

	// called every time calendar is opened
	onOpen: undefined, // function (dateObj, dateStr) {}

	// called after the configuration has been parsed
	onParseConfig: undefined,

	// called after calendar is ready
	onReady: undefined, // function (dateObj, dateStr) {}

	// called after input value updated
	onValueUpdate: undefined,

	// called every time the year is changed
	onYearChange: undefined,

	onKeyDown: undefined,

	onDestroy: undefined
};

/* istanbul ignore next */
flatpickr.l10ns = {
	en: {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		months: {
			shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function ordinal(nth) {
			var s = nth % 100;
			if (s > 3 && s < 21) return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle"
	}
};

flatpickr.l10ns.default = Object.create(flatpickr.l10ns.en);
flatpickr.localize = function (l10n) {
	return _extends(flatpickr.l10ns.default, l10n || {});
};
flatpickr.setDefaults = function (config) {
	return _extends(flatpickr.defaultConfig, config || {});
};

/* istanbul ignore next */
if (typeof jQuery !== "undefined") {
	jQuery.fn.flatpickr = function (config) {
		return _flatpickr(this, config);
	};
}

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

if (typeof module !== "undefined") module.exports = flatpickr;
/*
 * SOL - Searchable Option List jQuery plugin
 * Version 2.0.2
 * https://pbauerochse.github.io/searchable-option-list/
 *
 * Copyright 2015, Patrick Bauerochse
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */

/*jslint nomen: true */
;
(function ($, window, document) {
    'use strict';

    // constructor
    var SearchableOptionList = function ($element, options) {
        this.$originalElement = $element;
        this.options = options;

        // allow setting options as data attribute
        // e.g. <select data-sol-options="{'allowNullSelection':true}">
        this.metadata = this.$originalElement.data('sol-options');
    };

    // plugin prototype
    SearchableOptionList.prototype = {

        SOL_OPTION_FORMAT: {
            type:     'option',        // fixed
            value:    undefined,       // value that will be submitted
            selected: false,           // boolean selected state
            disabled: false,           // boolean disabled state
            label:    undefined,       // label string
            tooltip:  undefined,       // tooltip string
            cssClass: ''               // custom css class for container
        },
        SOL_OPTIONGROUP_FORMAT: {
            type:     'optiongroup',    // fixed
            label:    undefined,        // label string
            tooltip:  undefined,        // tooltip string
            disabled: false,            // all children disabled boolean property
            children: undefined         // array of SOL_OPTION_FORMAT objects
        },

        DATA_KEY: 'sol-element',
        WINDOW_EVENTS_KEY: 'sol-window-events',

        // default option values
        defaults: {
            data: undefined,
            name: undefined,           // name attribute, can also be set as name="" attribute on original element or data-sol-name=""

            texts: {
                noItemsAvailable: 'No entries found',
                selectAll: 'Select all',
                selectNone: 'Select none',
                quickDelete: '&times;',
                searchplaceholder: 'Click here to search',
                loadingData: 'Still loading data...',
                itemsSelected: '{$a} items selected'
            },

            events: {
                onInitialized: undefined,
                onRendered: undefined,
                onOpen: undefined,
                onClose: undefined,
                onChange: undefined,
                onScroll: function () {

                    var selectionContainerYPos = this.$input.offset().top - this.config.scrollTarget.scrollTop() + this.$input.outerHeight(false),
                        selectionContainerHeight = this.$selectionContainer.outerHeight(false),
                        selectionContainerBottom = selectionContainerYPos + selectionContainerHeight,
                        displayContainerAboveInput = this.config.displayContainerAboveInput || document.documentElement.clientHeight - this.config.scrollTarget.scrollTop() < selectionContainerBottom,
                        selectionContainerWidth = this.$innerContainer.outerWidth(false) - parseInt(this.$selectionContainer.css('border-left-width'), 10) - parseInt(this.$selectionContainer.css('border-right-width'), 10);

                    if (displayContainerAboveInput) {
                        // position the popup above the input
                        selectionContainerYPos = this.$input.offset().top - selectionContainerHeight - this.config.scrollTarget.scrollTop() + parseInt(this.$selectionContainer.css('border-bottom-width'), 10);
                        this.$container
                            .removeClass('sol-selection-bottom')
                            .addClass('sol-selection-top');
                    } else {
                        this.$container
                            .removeClass('sol-selection-top')
                            .addClass('sol-selection-bottom');
                    }

                    if (this.$innerContainer.css('display') !== 'block') {
                        // container has a certain width
                        // make selection container a bit wider
                        selectionContainerWidth = selectionContainerWidth * 1.2;
                    } else {

                        var borderRadiusSelector = displayContainerAboveInput ? 'border-bottom-right-radius' : 'border-top-right-radius';

                        // no border radius on top
                        this.$selectionContainer
                            .css(borderRadiusSelector, 'initial');

                        if (this.$actionButtons) {
                            this.$actionButtons
                                .css(borderRadiusSelector, 'initial');
                        }
                    }

                    this.$selectionContainer
                        .css('top', Math.floor(selectionContainerYPos))
                        .css('left', Math.floor(this.$container.offset().left))
                        .css('width', selectionContainerWidth);

                    // remember the position
                    this.config.displayContainerAboveInput = displayContainerAboveInput;
                }
            },

            selectAllMaxItemsThreshold: 30,
            showSelectAll: function () {
                return this.config.multiple && this.config.selectAllMaxItemsThreshold && this.items && this.items.length <= this.config.selectAllMaxItemsThreshold;
            },

            useBracketParameters: false,
            multiple: undefined,
            resultsContainer: undefined, // jquery element where the results should be appended
            closeOnClick: true, // close when user clicked 'select all' or 'deselect all'
            showSelectionBelowList: false,
            allowNullSelection: false,
            scrollTarget: undefined,
            maxHeight: undefined,
            converter: undefined,
            asyncBatchSize: 300,
            maxShow: 0
        },

        // initialize the plugin
        init: function () {
            this.config = $.extend(true, {}, this.defaults, this.options, this.metadata);

            var originalName = this._getNameAttribute(),
                sol = this;

            if (!originalName) {
                this._showErrorLabel('name attribute is required');
                return;
            }

            // old IE does not support trim
            if (typeof String.prototype.trim !== 'function') {
                String.prototype.trim = function () {
                    return this.replace(/^\s+|\s+$/g, '');
                }
            }

            this.config.multiple = this.config.multiple || this.$originalElement.attr('multiple');

            if (!this.config.scrollTarget) {
                this.config.scrollTarget = $(window);
            }

            this._registerWindowEventsIfNeccessary();
            this._initializeUiElements();
            this._initializeInputEvents();

            setTimeout(function () {
                sol._initializeData();

                // take original form element out of form submission
                // by removing the name attribute
                sol.$originalElement
                    .data(sol.DATA_KEY, sol)
                    .removeAttr('name')
                    .data('sol-name', originalName);
            }, 0);

            this.$originalElement.hide();
            this.$container
                .css('visibility', 'initial')
                .show();

            return this;
        },

        _getNameAttribute: function () {
            return this.config.name || this.$originalElement.data('sol-name') || this.$originalElement.attr('name');
        },

        // shows an error label
        _showErrorLabel: function (message) {
            var $errorMessage = $('<div style="color: red; font-weight: bold;" />').html(message);
            if (!this.$container) {
                $errorMessage.insertAfter(this.$originalElement);
            } else {
                this.$container.append($errorMessage);
            }
        },

        // register click handler to determine when to trigger the close event
        _registerWindowEventsIfNeccessary: function () {
            if (!window[this.WINDOW_EVENTS_KEY]) {
                $(document).click(function (event) {
                    // if clicked inside a sol element close all others
                    // else close all sol containers

                    var $clickedElement = $(event.target),
                        $closestSelectionContainer = $clickedElement.closest('.sol-selection-container'),
                        $closestInnerContainer = $clickedElement.closest('.sol-inner-container'),
                        $clickedWithinThisSolContainer;

                    if ($closestInnerContainer.length) {
                        $clickedWithinThisSolContainer = $closestInnerContainer.first().parent('.sol-container');
                    } else if ($closestSelectionContainer.length) {
                        $clickedWithinThisSolContainer = $closestSelectionContainer.first().parent('.sol-container');
                    }

                    $('.sol-active')
                        .not($clickedWithinThisSolContainer)
                        .each(function (index, item) {
                            $(item)
                                .data(SearchableOptionList.prototype.DATA_KEY)
                                .close();
                        });
                });

                // remember we already registered the global events
                window[this.WINDOW_EVENTS_KEY] = true;
            }
        },

        // add sol ui elements
        _initializeUiElements: function () {
            var self = this;

            this.internalScrollWrapper = function () {
                if ($.isFunction(self.config.events.onScroll)) {
                    self.config.events.onScroll.call(self);
                }
            };

            this.$input = $('<input type="text"/>')
                .attr('placeholder', this.config.texts.searchplaceholder);

            this.$noResultsItem = $('<div class="sol-no-results"/>').html(this.config.texts.noItemsAvailable).hide();
            this.$loadingData = $('<div class="sol-loading-data"/>').html(this.config.texts.loadingData);
            this.$xItemsSelected = $('<div class="sol-results-count"/>');

            this.$caret = $('<div class="sol-caret-container"><b class="sol-caret"/></div>').click(function (e) {
                self.toggle();
                e.preventDefault();
                return false;
            });

            var $inputContainer = $('<div class="sol-input-container"/>').append(this.$input);
            this.$innerContainer = $('<div class="sol-inner-container"/>').append($inputContainer).append(this.$caret);
            this.$selection = $('<div class="sol-selection"/>');
            this.$selectionContainer = $('<div class="sol-selection-container"/>')
                .append(this.$noResultsItem)
                .append(this.$loadingData)
                .append(this.$selection);

            this.$container = $('<div class="sol-container"/>')
                .hide()
                .data(this.DATA_KEY, this)
                .append(this.$selectionContainer)
                .append(this.$innerContainer)
                .insertBefore(this.$originalElement);

            // add selected items display container
            this.$showSelectionContainer = $('<div class="sol-current-selection"/>');

            var $el = this.config.resultsContainer || this.$innerContainer
            if (this.config.resultsContainer) {
                this.$showSelectionContainer.appendTo($el)
            } else {
                if (this.config.showSelectionBelowList) {
                    this.$showSelectionContainer.insertAfter($el);
                } else {
                    this.$showSelectionContainer.insertBefore($el);
                }
            }


            // dimensions
            if (this.config.maxHeight) {
                this.$selection.css('max-height', this.config.maxHeight);
            }

            // detect inline css classes and styles
            var cssClassesAsString = this.$originalElement.attr('class'),
                cssStylesAsString = this.$originalElement.attr('style'),
                cssClassList = [],
                stylesList = [];

            if (cssClassesAsString && cssClassesAsString.length > 0) {
                cssClassList = cssClassesAsString.split(/\s+/);

                // apply css classes to $container
                for (var i = 0; i < cssClassList.length; i++) {
                    this.$container.addClass(cssClassList[i]);
                }
            }

            if (cssStylesAsString && cssStylesAsString.length > 0) {
                stylesList = cssStylesAsString.split(/\;/);

                // apply css inline styles to $container
                for (var i = 0; i < stylesList.length; i++) {
                    var splitted = stylesList[i].split(/\s*\:\s*/g);

                    if (splitted.length === 2) {

                        if (splitted[0].toLowerCase().indexOf('height') >= 0) {
                            // height property, apply to innerContainer instead of outer
                            this.$innerContainer.css(splitted[0].trim(), splitted[1].trim());
                        } else {
                            this.$container.css(splitted[0].trim(), splitted[1].trim());
                        }
                    }
                }
            }

            if (this.$originalElement.css('display') !== 'block') {
                this.$container.css('width', this._getActualCssPropertyValue(this.$originalElement, 'width'));
            }

            if ($.isFunction(this.config.events.onRendered)) {
                this.config.events.onRendered.call(this, this);
            }
        },

        _getActualCssPropertyValue: function ($element, property) {

            var domElement = $element.get(0),
                originalDisplayProperty = $element.css('display');

            // set invisible to get original width setting instead of translated to px
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=707691#c7
            $element.css('display', 'none');

            if (domElement.currentStyle) {
                return domElement.currentStyle[property];
            } else if (window.getComputedStyle) {
                return document.defaultView.getComputedStyle(domElement, null).getPropertyValue(property);
            }

            $element.css('display', originalDisplayProperty);

            return $element.css(property);
        },

        _initializeInputEvents: function () {
            // form event
            var self = this,
                $form = this.$input.parents('form').first();

            if ($form && $form.length === 1 && !$form.data(this.WINDOW_EVENTS_KEY)) {
                var resetFunction = function () {
                    var $changedItems = [];

                    $form.find('.sol-option input').each(function (index, item) {
                        var $item = $(item),
                            initialState = $item.data('sol-item').selected;

                        if ($item.prop('checked') !== initialState) {
                            $item
                                .prop('checked', initialState)
                                .trigger('sol-change', true);
                            $changedItems.push($item);
                        }
                    });

                    if ($changedItems.length > 0 && $.isFunction(self.config.events.onChange)) {
                        self.config.events.onChange.call(self, self, $changedItems);
                    }
                };

                $form.on('reset', function (event) {
                    // unfortunately the reset event gets fired _before_
                    // the inputs are actually reset. The only possibility
                    // to overcome this is to set an interval to execute
                    // own scripts some time after the actual reset event

                    // before fields are actually reset by the browser
                    // needed to reset newly checked fields
                    resetFunction.call(self);

                    // timeout for selection after form reset
                    // needed to reset previously checked fields
                    setTimeout(function () {
                        resetFunction.call(self);
                    }, 100);
                });

                $form.data(this.WINDOW_EVENTS_KEY, true);
            }

            // text input events
            this.$input
                .focus(function () {
                    self.open();
                })
                .on('propertychange input', function (e) {
                    var valueChanged = true;
                    if (e.type=='propertychange') {
                        valueChanged = e.originalEvent.propertyName.toLowerCase()=='value';
                    }
                    if (valueChanged) {
                        self._applySearchTermFilter();
                    }
                });

            // keyboard navigation
            this.$container
                .on('keydown', function (e) {
                    var keyCode = e.keyCode;

                    // event handling for keyboard navigation
                    // only when there are results to be shown
                    if (!self.$noResultsItem.is(':visible')) {

                        var $currentHighlightedOption,
                            $nextHighlightedOption,
                            directionValue,
                            preventDefault = false,
                            $allVisibleOptions = self.$selection.find('.sol-option:visible');

                        if (keyCode === 40 || keyCode === 38) {
                            // arrow up or down to select an item
                            self._setKeyBoardNavigationMode(true);

                            $currentHighlightedOption = self.$selection.find('.sol-option.keyboard-selection');
                            directionValue = (keyCode === 38) ? -1 : 1;   // negative for up, positive for down

                            var indexOfNextHighlightedOption = $allVisibleOptions.index($currentHighlightedOption) + directionValue;
                            if (indexOfNextHighlightedOption < 0) {
                                indexOfNextHighlightedOption = $allVisibleOptions.length - 1;
                            } else if (indexOfNextHighlightedOption >= $allVisibleOptions.length) {
                                indexOfNextHighlightedOption = 0;
                            }

                            $currentHighlightedOption.removeClass('keyboard-selection');
                            $nextHighlightedOption = $($allVisibleOptions[indexOfNextHighlightedOption])
                                .addClass('keyboard-selection');

                            self.$selection.scrollTop(self.$selection.scrollTop() + $nextHighlightedOption.position().top);

                            preventDefault = true;
                        } else if (self.keyboardNavigationMode === true && keyCode === 32) {
                            // toggle current selected item with space bar
                            $currentHighlightedOption = self.$selection.find('.sol-option.keyboard-selection input');
                            $currentHighlightedOption
                                .prop('checked', !$currentHighlightedOption.prop('checked'))
                                .trigger('change');

                            preventDefault = true;
                        }

                        if (preventDefault) {
                            // dont trigger any events in the input
                            e.preventDefault();
                            return false;
                        }
                    }
                })
                .on('keyup', function (e) {
                    var keyCode = e.keyCode;

                    if (keyCode === 27) {
                        // escape key
                        if (self.keyboardNavigationMode === true) {
                            self._setKeyBoardNavigationMode(false);
                        } else if (self.$input.val() === '') {
                            // trigger closing of container
                            self.$caret.trigger('click');
                            self.$input.trigger('blur');
                        } else {
                            // reset input and result filter
                            self.$input.val('').trigger('input');
                        }
                    } else if (keyCode === 16 || keyCode === 17 || keyCode === 18 || keyCode === 20) {
                        // special events like shift and control
                        return;
                    }
                });
        },

        _setKeyBoardNavigationMode: function (keyboardNavigationOn) {

            if (keyboardNavigationOn) {
                // on
                this.keyboardNavigationMode = true;
                this.$selection.addClass('sol-keyboard-navigation');
            } else {
                // off
                this.keyboardNavigationMode = false;
                this.$selection.find('.sol-option.keyboard-selection')
                this.$selection.removeClass('sol-keyboard-navigation');
                this.$selectionContainer.find('.sol-option.keyboard-selection').removeClass('keyboard-selection');
                this.$selection.scrollTop(0);
            }
        },

        _applySearchTermFilter: function () {
            if (!this.items || this.items.length === 0) {
                return;
            }

            var searchTerm = this.$input.val(),
                lowerCased = (searchTerm || '').toLowerCase();

            // show previously filtered elements again
            this.$selectionContainer.find('.sol-filtered-search').removeClass('sol-filtered-search');
            this._setNoResultsItemVisible(false);

            if (lowerCased.trim().length > 0) {
                this._findTerms(this.items, lowerCased);
            }

            // call onScroll to position the popup again
            // important if showing popup above list
            if ($.isFunction(this.config.events.onScroll)) {
                this.config.events.onScroll.call(this);
            }
        },

        _findTerms: function (dataArray, searchTerm) {
            if (!dataArray || !$.isArray(dataArray) || dataArray.length === 0) {
                return;
            }

            var self = this;

            // reset keyboard navigation mode when applying new filter
            this._setKeyBoardNavigationMode(false);

            $.each(dataArray, function (index, item) {
                if (item.type === 'option') {
                    var $element = item.displayElement,
                        elementSearchableTerms = (item.label + ' ' + item.tooltip).trim().toLowerCase();

                    if (elementSearchableTerms.indexOf(searchTerm) === -1) {
                        $element.addClass('sol-filtered-search');
                    }
                } else {
                    self._findTerms(item.children, searchTerm);
                    var amountOfUnfilteredChildren = item.displayElement.find('.sol-option:not(.sol-filtered-search)');

                    if (amountOfUnfilteredChildren.length === 0) {
                        item.displayElement.addClass('sol-filtered-search');
                    }
                }
            });

            this._setNoResultsItemVisible(this.$selectionContainer.find('.sol-option:not(.sol-filtered-search)').length === 0);
        },

        _initializeData: function () {
            if (!this.config.data) {
                this.items = this._detectDataFromOriginalElement();
            } else if ($.isFunction(this.config.data)) {
                this.items = this._fetchDataFromFunction(this.config.data);
            } else if ($.isArray(this.config.data)) {
                this.items = this._fetchDataFromArray(this.config.data);
            } else if (typeof this.config.data === (typeof 'a string')) {
                this._loadItemsFromUrl(this.config.data);
            } else {
                this._showErrorLabel('Unknown data type');
            }

            if (this.items) {
                // done right away -> invoke postprocessing
                this._processDataItems(this.items);
            }
        },

        _detectDataFromOriginalElement: function () {
            if (this.$originalElement.prop('tagName').toLowerCase() === 'select') {
                var self = this,
                    solData = [];

                $.each(this.$originalElement.children(), function (index, item) {
                    var $item = $(item),
                        itemTagName = $item.prop('tagName').toLowerCase(),
                        solDataItem;

                    if (itemTagName === 'option') {
                        solDataItem = self._processSelectOption($item);
                        if (solDataItem) {
                            solData.push(solDataItem);
                        }
                    } else if (itemTagName === 'optgroup') {
                        solDataItem = self._processSelectOptgroup($item);
                        if (solDataItem) {
                            solData.push(solDataItem);
                        }
                    } else {
                        self._showErrorLabel('Invalid element found in select: ' + itemTagName + '. Only option and optgroup are allowed');
                    }
                });
                return this._invokeConverterIfNeccessary(solData);
            } else if (this.$originalElement.data('sol-data')) {
                var solDataAttributeValue = this.$originalElement.data('sol-data');
                return this._invokeConverterIfNeccessary(solDataAttributeValue);
            } else {
                this._showErrorLabel('Could not determine data from original element. Must be a select or data must be provided as data-sol-data="" attribute');
            }
        },

        _processSelectOption: function ($option) {
            return $.extend({}, this.SOL_OPTION_FORMAT, {
                value: $option.val(),
                selected: $option.prop('selected'),
                disabled: $option.prop('disabled'),
                cssClass: $option.attr('class'),
                label: $option.html(),
                tooltip: $option.attr('title'),
                element: $option
            });
        },

        _processSelectOptgroup: function ($optgroup) {
            var self = this,
                solOptiongroup = $.extend({}, this.SOL_OPTIONGROUP_FORMAT, {
                    label: $optgroup.attr('label'),
                    tooltip: $optgroup.attr('title'),
                    disabled: $optgroup.prop('disabled'),
                    children: []
                }),
                optgroupChildren = $optgroup.children('option');

            $.each(optgroupChildren, function (index, item) {
                var $child = $(item),
                    solOption = self._processSelectOption($child);

                // explicitly disable children when optgroup is disabled
                if (solOptiongroup.disabled) {
                    solOption.disabled = true;
                }

                solOptiongroup.children.push(solOption);
            });

            return solOptiongroup;
        },

        _fetchDataFromFunction: function (dataFunction) {
            return this._invokeConverterIfNeccessary(dataFunction(this));
        },

        _fetchDataFromArray: function (dataArray) {
            return this._invokeConverterIfNeccessary(dataArray);
        },

        _loadItemsFromUrl: function (url) {
            var self = this;
            $.ajax(url, {
                success: function (actualData) {
                    self.items = self._invokeConverterIfNeccessary(actualData);
                    if (self.items) {
                        self._processDataItems(self.items);
                    }
                },
                error: function (xhr, status, message) {
                    self._showErrorLabel('Error loading from url ' + url + ': ' + message);
                },
                dataType: 'json'
            });
        },

        _invokeConverterIfNeccessary: function (dataItems) {
            if ($.isFunction(this.config.converter)) {
                return this.config.converter.call(this, this, dataItems);
            }
            return dataItems;
        },

        _processDataItems: function (solItems) {
            if (!solItems) {
                this._showErrorLabel('Data items not present. Maybe the converter did not return any values');
                return;
            }

            if (solItems.length === 0) {
                this._setNoResultsItemVisible(true);
                this.$loadingData.remove();
                return;
            }

            var self = this,
                nextIndex = 0,
                dataProcessedFunction = function () {
                    // hide "loading data"
                    this.$loadingData.remove();
                    this._initializeSelectAll();

                    if ($.isFunction(this.config.events.onInitialized)) {
                        this.config.events.onInitialized.call(this, this, solItems);
                    }
                },
                loopFunction = function () {

                    var currentBatch = 0,
                        item;

                    while (currentBatch++ < self.config.asyncBatchSize && nextIndex < solItems.length) {
                        item = solItems[nextIndex++];
                        if (item.type === self.SOL_OPTION_FORMAT.type) {
                            self._renderOption(item);
                        } else if (item.type === self.SOL_OPTIONGROUP_FORMAT.type) {
                            self._renderOptiongroup(item);
                        } else {
                            self._showErrorLabel('Invalid item type found ' + item.type);
                            return;
                        }
                    }

                    if (nextIndex >= solItems.length) {
                        dataProcessedFunction.call(self);
                    } else {
                        setTimeout(loopFunction, 0);
                    }
                };

            // start async rendering of html elements
            loopFunction.call(this);
        },

        _renderOption: function (solOption, $optionalTargetContainer) {
            var self = this,
                $actualTargetContainer = $optionalTargetContainer || this.$selection,
                $inputElement,
                $labelText = $('<div class="sol-label-text"/>')
                    .html(solOption.label.trim().length === 0 ? '&nbsp;' : solOption.label)
                    .addClass(solOption.cssClass),
                $label,
                $displayElement,
                inputName = this._getNameAttribute();

            if (this.config.multiple) {
                // use checkboxes
                $inputElement = $('<input type="checkbox" class="sol-checkbox"/>');

                if (this.config.useBracketParameters) {
                    inputName += '[]';
                }
            } else {
                // use radio buttons
                $inputElement = $('<input type="radio" class="sol-radio"/>')
                    .on('change', function () {
                        // when selected notify all others of being deselected
                        self.$selectionContainer.find('input[type="radio"][name="' + inputName + '"]').not($(this)).trigger('sol-deselect');
                    })
                    .on('sol-deselect', function () {
                        // remove display selection item
                        // TODO also better show it inline instead of above or below to save space
                        self._removeSelectionDisplayItem($(this));
                    });
            }

            $inputElement
                .on('change', function (event, skipCallback) {
                    $(this).trigger('sol-change', skipCallback);
                })
                .on('sol-change', function (event, skipCallback) {
                    self._selectionChange($(this), skipCallback);
                })
                .data('sol-item', solOption)
                .prop('checked', solOption.selected)
                .prop('disabled', solOption.disabled)
                .attr('name', inputName)
                .val(solOption.value);

            $label = $('<label class="sol-label"/>')
                .attr('title', solOption.tooltip)
                .append($inputElement)
                .append($labelText);

            $displayElement = $('<div class="sol-option"/>').append($label);
            solOption.displayElement = $displayElement;

            $actualTargetContainer.append($displayElement);

            if (solOption.selected) {
                this._addSelectionDisplayItem($inputElement);
            }
        },

        _renderOptiongroup: function (solOptiongroup) {
            var self = this,
                $groupCaption = $('<div class="sol-optiongroup-label"/>')
                    .attr('title', solOptiongroup.tooltip)
                    .html(solOptiongroup.label),
                $groupItem = $('<div class="sol-optiongroup"/>').append($groupCaption);

            if (solOptiongroup.disabled) {
                $groupItem.addClass('disabled');
            }

            if ($.isArray(solOptiongroup.children)) {
                $.each(solOptiongroup.children, function (index, item) {
                    self._renderOption(item, $groupItem);
                });
            }

            solOptiongroup.displayElement = $groupItem;
            this.$selection.append($groupItem);
        },

        _initializeSelectAll: function () {
            // multiple values selectable
            if (this.config.showSelectAll === true || ($.isFunction(this.config.showSelectAll) && this.config.showSelectAll.call(this))) {
                // buttons for (de-)select all
                var self = this,
                    $deselectAllButton = $('<a href="#" class="sol-deselect-all"/>').html(this.config.texts.selectNone).click(function (e) {
                        self.deselectAll();
                        e.preventDefault();
                        return false;
                    }),
                    $selectAllButton = $('<a href="#" class="sol-select-all"/>').html(this.config.texts.selectAll).click(function (e) {
                        self.selectAll();
                        e.preventDefault();
                        return false;
                    });

                this.$actionButtons = $('<div class="sol-action-buttons"/>').append($selectAllButton).append($deselectAllButton).append('<div class="sol-clearfix"/>');
                this.$selectionContainer.prepend(this.$actionButtons);
            }
        },

        _selectionChange: function ($changeItem, skipCallback) {

            // apply state to original select if neccessary
            // helps to keep old legacy code running which depends
            // on retrieving the value via jQuery option selectors
            // e.g. $('#myPreviousSelectWhichNowIsSol').val()
            if (this.$originalElement && this.$originalElement.prop('tagName').toLowerCase() === 'select') {
                var self = this;
                this.$originalElement.find('option').each(function (index, item) {
                    var $currentOriginalOption = $(item);
                    if ($currentOriginalOption.val() === $changeItem.val()) {
                        $currentOriginalOption.prop('selected', $changeItem.prop('checked'));
                        self.$originalElement.trigger('change');
                        return;
                    }
                });
            }

            if ($changeItem.prop('checked')) {
                this._addSelectionDisplayItem($changeItem);
            } else {
                this._removeSelectionDisplayItem($changeItem);
            }

            if (this.config.multiple) {
                // update position of selection container
                // to allow selecting more entries
                this.config.scrollTarget.trigger('scroll');
            } else {
                // only one option selectable
                // close selection container
                this.close();
            }

            var selected = this.$showSelectionContainer.children('.sol-selected-display-item');
            if (this.config.maxShow != 0 && selected.length > this.config.maxShow) {
                selected.hide();
                var xitemstext = this.config.texts.itemsSelected.replace('{$a}', selected.length);
                this.$xItemsSelected.html('<div class="sol-selected-display-item-text">' + xitemstext + '<div>');
                this.$showSelectionContainer.append(this.$xItemsSelected);
                this.$xItemsSelected.show();
            } else {
                selected.show();
                this.$xItemsSelected.hide();
            }

            if (!skipCallback && $.isFunction(this.config.events.onChange)) {
                this.config.events.onChange.call(this, this, $changeItem);
            }
        },

        _addSelectionDisplayItem: function ($changedItem) {
            var solOptionItem = $changedItem.data('sol-item'),
                $existingDisplayItem = solOptionItem.displaySelectionItem,
                $displayItemText;

            if (!$existingDisplayItem) {
                $displayItemText = $('<span class="sol-selected-display-item-text" />').html(solOptionItem.label);
                $existingDisplayItem = $('<div class="sol-selected-display-item"/>')
                    .append($displayItemText)
                    .attr('title', solOptionItem.tooltip)
                    .appendTo(this.$showSelectionContainer);

                // show remove button on display items if not disabled and null selection allowed
                if ((this.config.multiple || this.config.allowNullSelection) && !$changedItem.prop('disabled')) {
                    $('<span class="sol-quick-delete"/>')
                        .html(this.config.texts.quickDelete)
                        .click(function () {
                            $changedItem
                                .prop('checked', false)
                                .trigger('change');
                        })
                        .prependTo($existingDisplayItem);
                }

                solOptionItem.displaySelectionItem = $existingDisplayItem;
            }
        },

        _removeSelectionDisplayItem: function ($changedItem) {
            var solOptionItem = $changedItem.data('sol-item'),
                $myDisplayItem = solOptionItem.displaySelectionItem;

            if ($myDisplayItem) {
                $myDisplayItem.remove();
                solOptionItem.displaySelectionItem = undefined;
            }
        },

        _setNoResultsItemVisible: function (visible) {
            if (visible) {
                this.$noResultsItem.show();
                this.$selection.hide();

                if (this.$actionButtons) {
                    this.$actionButtons.hide();
                }
            } else {
                this.$noResultsItem.hide();
                this.$selection.show();

                if (this.$actionButtons) {
                    this.$actionButtons.show();
                }
            }
        },

        isOpen: function () {
            return this.$container.hasClass('sol-active');
        },

        isClosed: function () {
            return !this.isOpen();
        },

        toggle: function () {
            if (this.isOpen()) {
                this.close();
            } else {
                this.open();
            }
        },

        open: function () {
            if (this.isClosed()) {
                this.$container.addClass('sol-active');
                this.config.scrollTarget.bind('scroll', this.internalScrollWrapper).trigger('scroll');
                $(window).on('resize', this.internalScrollWrapper);

                if ($.isFunction(this.config.events.onOpen)) {
                    this.config.events.onOpen.call(this, this);
                }
            }
        },

        close: function () {
            if (this.isOpen()) {
                this._setKeyBoardNavigationMode(false);


                this.$container.removeClass('sol-active');
                this.config.scrollTarget.unbind('scroll', this.internalScrollWrapper);
                $(window).off('resize');

                // reset search on close
                this.$input.val('');
                this._applySearchTermFilter();

                // clear to recalculate position again the next time sol is opened
                this.config.displayContainerAboveInput = undefined;

                if ($.isFunction(this.config.events.onClose)) {
                    this.config.events.onClose.call(this, this);
                }
            }
        },

        selectAll: function () {
            if (this.config.multiple) {
                var $changedInputs = this.$selectionContainer
                    .find('input[type="checkbox"]:not([disabled], :checked)')
                    .prop('checked', true)
                    .trigger('change', true);

                this.config.closeOnClick && this.close();

                if ($.isFunction(this.config.events.onChange)) {
                    this.config.events.onChange.call(this, this, $changedInputs);
                }
            }
        },
        invert: function() {
            if (this.config.multiple) {
                var $closedInputs = this.$selectionContainer
                    .find('input[type="checkbox"]:not([disabled], :checked)')
                var $openedInputs = this.$selectionContainer
                    .find('input[type="checkbox"]').filter('[disabled], :checked')

                $openedInputs.prop('checked', false)
                    .trigger('change', true);
                $closedInputs.prop('checked', true)
                    .trigger('change', true)

                this.options.closeOnClick && this.close();

                if ($.isFunction(this.config.events.onChange)) {
                    this.config.events.onChange.call(this, this, $openedInputs.add($closedInputs));
                }
            }
        },
        deselectAll: function () {
            if (this.config.multiple) {
                var $changedInputs = this.$selectionContainer
                    .find('input[type="checkbox"]:not([disabled]):checked')
                    .prop('checked', false)
                    .trigger('change', true);

                this.config.closeOnClick && this.close();

                if ($.isFunction(this.config.events.onChange)) {
                    this.config.events.onChange.call(this, this, $changedInputs);
                }
            }
        },

        getSelection: function () {
            return this.$selection.find('input:checked');
        }
    };

    // jquery plugin boiler plate code
    SearchableOptionList.defaults = SearchableOptionList.prototype.defaults;
    window.SearchableOptionList = SearchableOptionList;

    $.fn.searchableOptionList = function (options) {
        var result = [];
        this.each(function () {
            var $this = $(this),
                $alreadyInitializedSol = $this.data(SearchableOptionList.prototype.DATA_KEY);

            if ($alreadyInitializedSol) {
                result.push($alreadyInitializedSol);
            } else {
                var newSol = new SearchableOptionList($this, options);
                result.push(newSol);

                setTimeout(function() {
                    newSol.init();
                }, 0);
            }
        });

        if (result.length === 1) {
            return result[0];
        }

        return result;
    };

}(jQuery, window, document));
/*!
 * jquery.sumoselect - v3.0.3
 * http://hemantnegi.github.io/jquery.sumoselect
 * 2016-12-12
 *
 * Copyright 2015 Hemant Negi
 * Email : hemant.frnz@gmail.com
 * Compressor http://refresh-sf.com/
 */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

})(function ($) {

    'namespace sumo';
    $.fn.SumoSelect = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            placeholder: 'Select Here',   // Dont change it here.
            csvDispCount: 3,              // display no. of items in multiselect. 0 to display all.
            captionFormat:'{0} Selected', // format of caption text. you can set your locale.
            captionFormatAllSelected:'{0} all selected!', // format of caption text when all elements are selected. set null to use captionFormat. It will not work if there are disabled elements in select.
            floatWidth: 400,              // Screen width of device at which the list is rendered in floating popup fashion.
            forceCustomRendering: false,  // force the custom modal on all devices below floatWidth resolution.
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'], //
            outputAsCSV: false,           // true to POST data as csv ( false for Html control array ie. default select )
            csvSepChar: ',',              // separation char in csv mode
            okCancelInMulti: false,       // display ok cancel buttons in desktop mode multiselect also.
            isClickAwayOk: false,         // for okCancelInMulti=true. sets whether click outside will trigger Ok or Cancel (default is cancel).
            triggerChangeCombined: true,  // im multi select mode whether to trigger change event on individual selection or combined selection.
            selectAll: false,             // to display select all button in multiselect mode.|| also select all will not be available on mobile devices.

            search: true,                // to display input for filtering content. selectAlltext will be input text placeholder
            searchText: 'Type in',      // placeholder for search input
            noMatch: 'No matches for "{0}"',
            prefix: '',                   // some prefix usually the field name. eg. '<b>Hello</b>'
            locale: ['OK', 'Cancel', 'Select All'],  // all text that is used. don't change the index.
            up: false,                    // set true to open upside.
            showTitle: true               // set to false to prevent title (tooltip) from appearing
        }, options);

        var ret = this.each(function () {
            var selObj = this; // the original select object.
            if (this.sumo || !$(this).is('select')) return; //already initialized

            this.sumo = {
                E: $(selObj),   //the jquery object of original select element.
                is_multi: $(selObj).attr('multiple'),  //if its a multiple select
                select: '',
                caption: '',
                placeholder: '',
                optDiv: '',
                CaptionCont: '',
                ul:'',
                is_floating: false,
                is_opened: false,
                //backdrop: '',
                mob:false, // if to open device default select
                Pstate: [],

                createElems: function () {
                    var O = this;
                    O.E.wrap('<div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">');
                    O.select = O.E.parent();
                    O.caption = $('<span>');
                    O.CaptionCont = $('<p class="CaptionCont SelectBox" ><label><i></i></label></p>')
                        .attr('style', O.E.attr('style'))
                        .prepend(O.caption);
                    O.select.append(O.CaptionCont);

                    // default turn off if no multiselect
                    if(!O.is_multi)settings.okCancelInMulti = false

                    if(O.E.attr('disabled'))
                        O.select.addClass('disabled').removeAttr('tabindex');

                    //if output as csv and is a multiselect.
                    if (settings.outputAsCSV && O.is_multi && O.E.attr('name')) {
                        //create a hidden field to store csv value.
                        O.select.append($('<input class="HEMANT123" type="hidden" />').attr('name', O.E.attr('name')).val(O.getSelStr()));

                        // so it can not post the original select.
                        O.E.removeAttr('name');
                    }

                    //break for mobile rendring.. if forceCustomRendering is false
                    if (O.isMobile() && !settings.forceCustomRendering) {
                        O.setNativeMobile();
                        return;
                    }

                    // if there is a name attr in select add a class to container div
                    if(O.E.attr('name')) O.select.addClass('sumo_'+O.E.attr('name').replace(/\[\]/, ''))

                    //hide original select
                    O.E.addClass('SumoUnder').attr('tabindex','-1');

                    //## Creating the list...
                    O.optDiv = $('<div class="optWrapper '+ (settings.up?'up':'') +'">');

                    //branch for floating list in low res devices.
                    O.floatingList();

                    //Creating the markup for the available options
                    O.ul = $('<ul class="options">');
                    O.optDiv.append(O.ul);

                    // Select all functionality
                    if(settings.selectAll && O.is_multi) O.SelAll();

                    // search functionality
                    if(settings.search) O.Search();

                    O.ul.append(O.prepItems(O.E.children()));

                    //if multiple then add the class multiple and add OK / CANCEL button
                    if (O.is_multi) O.multiSelelect();

                    O.select.append(O.optDiv);
                    O.basicEvents();
                    O.selAllState();
                },

                prepItems: function(opts, d){
                    var lis = [], O=this;
                    $(opts).each(function (i, opt) {       // parsing options to li
                        opt = $(opt);
                        lis.push(opt.is('optgroup')?
                            $('<li class="group '+ (opt[0].disabled?'disabled':'') +'"><label>' + opt.attr('label') +'</label><ul></ul></li>')
                            .find('ul')
                            .append(O.prepItems(opt.children(), opt[0].disabled))
                            .end()
                            :
                            O.createLi(opt, d)
                        );
                    });
                    return lis;
                },

                //## Creates a LI element from a given option and binds events to it
                //## returns the jquery instance of li (not inserted in dom)
                createLi: function (opt, d) {
                    var O = this;

                    if(!opt.attr('value'))opt.attr('value',opt.val());
                    var li = $('<li class="opt"><label>' + opt.text() + '</label></li>');

                    li.data('opt', opt);    // store a direct reference to option.
                    opt.data('li', li);    // store a direct reference to list item.
                    if (O.is_multi) li.prepend('<span><i></i></span>');

                    if (opt[0].disabled || d)
                        li = li.addClass('disabled');

                    O.onOptClick(li);

                    if (opt[0].selected)
                        li.addClass('selected');

                    if (opt.attr('class'))
                        li.addClass(opt.attr('class'));

                    if (opt.attr('title'))
                        li.attr('title', opt.attr('title'));

                    return li;
                },

                //## Returns the selected items as string in a Multiselect.
                getSelStr: function () {
                    // get the pre selected items.
                    sopt = [];
                    this.E.find('option:selected').each(function () { sopt.push($(this).val()); });
                    return sopt.join(settings.csvSepChar);
                },

                //## THOSE OK/CANCEL BUTTONS ON MULTIPLE SELECT.
                multiSelelect: function () {
                    var O = this;
                    O.optDiv.addClass('multiple');
                    O.okbtn = $('<p tabindex="0" class="btnOk">'+settings.locale[0]+'</p>').click(function () {
                        //if combined change event is set.
                        O._okbtn();
                        O.hideOpts();
                    });
                    O.cancelBtn = $('<p tabindex="0" class="btnCancel">'+settings.locale[1]+'</p>').click(function () {
                        O._cnbtn();
                        O.hideOpts();
                    });
                    var btns = O.okbtn.add(O.cancelBtn);
                    O.optDiv.append($('<div class="MultiControls">').append(btns));

                    // handling keyboard navigation on ok cancel buttons.
                    btns.on('keydown.sumo', function (e) {
                            var el = $(this);
                            switch (e.which) {
                                case 32: // space
                                case 13: // enter
                                    el.trigger('click');
                                    break;

                                case 9:  //tab
                                    if(el.hasClass('btnOk'))return;
                                case 27: // esc
                                    O._cnbtn();
                                    O.hideOpts();
                                    return;
                            }
                            e.stopPropagation();
                            e.preventDefault();
                        });
                },

                _okbtn:function(){
                    var O = this, cg = 0;
                    //if combined change event is set.
                    if (settings.triggerChangeCombined) {
                        //check for a change in the selection.
                        if (O.E.find('option:selected').length != O.Pstate.length) {
                            cg = 1;
                        }
                        else {
                            O.E.find('option').each(function (i,e) {
                                if(e.selected && O.Pstate.indexOf(i) < 0) cg = 1;
                            });
                        }

                        if (cg) {
                            O.callChange();
                            O.setText();
                        }
                    }
                },
                _cnbtn:function(){
                    var O = this;
                    //remove all selections
                    O.E.find('option:selected').each(function () { this.selected = false; });
                    O.optDiv.find('li.selected').removeClass('selected')

                    //restore selections from saved state.
                    for(var i = 0; i < O.Pstate.length; i++) {
                        O.E.find('option')[O.Pstate[i]].selected = true;
                        O.ul.find('li.opt').eq(O.Pstate[i]).addClass('selected');
                    }
                    O.selAllState();
                },

                SelAll:function(){
                    var O = this;
                    if(!O.is_multi)return;
                    O.selAll = $('<p class="select-all"><span><i></i></span><label>' + settings.locale[2] + '</label></p>');
                    O.optDiv.addClass('selall');
                    O.selAll.on('click',function(){
                        O.selAll.toggleClass('selected');
                        O.toggSelAll(O.selAll.hasClass('selected'), 1);
                        //O.selAllState();
                    });

                    O.optDiv.prepend(O.selAll);
                },

                // search module (can be removed if not required.)
                Search: function(){
                    var O = this,
                        cc = O.CaptionCont.addClass('search'),
                        P = $('<p class="no-match">');

                    O.ftxt = $('<input type="text" class="search-txt" value="" placeholder="' + settings.searchText + '">')
                        .on('click', function(e){
                            e.stopPropagation();
                        });
                    cc.append(O.ftxt);
                    O.optDiv.children('ul').after(P);

                    O.ftxt.on('keyup.sumo',function(){
                        var hid = O.optDiv.find('ul.options li.opt').each(function(ix,e){
                            var e = $(e),
                                opt = e.data('opt')[0];
                            opt.hidden = e.text().toLowerCase().indexOf(O.ftxt.val().toLowerCase()) < 0;
                            e.toggleClass('hidden', opt.hidden);
                        }).not('.hidden');

                        P.html(settings.noMatch.replace(/\{0\}/g, '<em></em>')).toggle(!hid.length);
                        P.find('em').text(O.ftxt.val());
                        O.selAllState();
                    });
                },

                selAllState: function () {
                    var O = this;
                    if (settings.selectAll && O.is_multi) {
                        var sc = 0, vc = 0;
                        O.optDiv.find('li.opt').not('.hidden').each(function (ix, e) {
                            if ($(e).hasClass('selected')) sc++;
                            if (!$(e).hasClass('disabled')) vc++;
                        });
                        //select all checkbox state change.
                        if (sc == vc) O.selAll.removeClass('partial').addClass('selected');
                        else if (sc == 0) O.selAll.removeClass('selected partial');
                        else O.selAll.addClass('partial')//.removeClass('selected');
                    }
                },

                showOpts: function () {
                    var O = this;
                    if (O.E.attr('disabled')) return; // if select is disabled then retrun
                    O.E.trigger('sumo:opening', O);
                    O.is_opened = true;
                    O.select.addClass('open').attr('aria-expanded', 'true');
                    O.E.trigger('sumo:opened', O);

                    if(O.ftxt)O.ftxt.focus();
                    else O.select.focus();

                    // hide options on click outside.
                    $(document).on('click.sumo', function (e) {
                        if (!O.select.is(e.target)                  // if the target of the click isn't the container...
                            && O.select.has(e.target).length === 0){ // ... nor a descendant of the container
                            if(!O.is_opened)return;
                            O.hideOpts();
                            if (settings.okCancelInMulti){
                              if(settings.isClickAwayOk)
                                O._okbtn();
                              else
                                O._cnbtn();
                            }
                        }
                    });

                    if (O.is_floating) {
                        H = O.optDiv.children('ul').outerHeight() + 2;  // +2 is clear fix
                        if (O.is_multi) H = H + parseInt(O.optDiv.css('padding-bottom'));
                        O.optDiv.css('height', H);
                        $('body').addClass('sumoStopScroll');
                    }

                    O.setPstate();
                },

                //maintain state when ok/cancel buttons are available storing the indexes.
                setPstate: function(){
                    var O = this;
                    if (O.is_multi && (O.is_floating || settings.okCancelInMulti)){
                        O.Pstate = [];
                        // assuming that find returns elements in tree order
                        O.E.find('option').each(function (i, e){if(e.selected) O.Pstate.push(i);});
                    }
                },

                callChange:function(){
                    this.E.trigger('change').trigger('click');
                },

                hideOpts: function () {
                    var O = this;
                    if(O.is_opened){
                        O.E.trigger('sumo:closing', O);
                        O.is_opened = false;
                        O.select.removeClass('open').attr('aria-expanded', 'true').find('ul li.sel').removeClass('sel');
                        O.E.trigger('sumo:closed', O);
                        $(document).off('click.sumo');
                        O.select.focus();
                        $('body').removeClass('sumoStopScroll');

                        // clear the search
                        if(settings.search){
                            O.ftxt.val('');
                            O.ftxt.trigger('keyup.sumo');
                        }
                    }
                },
                setOnOpen: function () {
                    var O = this,
                        li = O.optDiv.find('li.opt:not(.hidden)').eq(settings.search?0:O.E[0].selectedIndex);
                    if(li.hasClass('disabled')){
                        li = li.next(':not(disabled)')
                        if(!li.length) return;
                     }
                    O.optDiv.find('li.sel').removeClass('sel');
                    li.addClass('sel');
                    O.showOpts();
                },
                nav: function (up) {
                    var O = this, c,
                    s=O.ul.find('li.opt:not(.disabled, .hidden)'),
                    sel = O.ul.find('li.opt.sel:not(.hidden)'),
                    idx = s.index(sel);
                    if (O.is_opened && sel.length) {

                        if (up && idx > 0)
                            c = s.eq(idx-1);
                        else if(!up && idx < s.length-1 && idx > -1)
                            c = s.eq(idx+1);
                        else return; // if no items before or after

                        sel.removeClass('sel');
                        sel = c.addClass('sel');

                        // setting sel item to visible view.
                        var ul = O.ul,
                            st = ul.scrollTop(),
                            t = sel.position().top + st;
                        if(t >= st + ul.height()-sel.outerHeight())
                            ul.scrollTop(t - ul.height() + sel.outerHeight());
                        if(t<st)
                            ul.scrollTop(t);

                    }
                    else
                        O.setOnOpen();
                },

                basicEvents: function () {
                    var O = this;
                    O.CaptionCont.click(function (evt) {
                        O.E.trigger('click');
                        if (O.is_opened) O.hideOpts(); else O.showOpts();
                        evt.stopPropagation();
                    });

                    O.select.on('keydown.sumo', function (e) {
                        switch (e.which) {
                            case 38: // up
                                O.nav(true);
                                break;

                            case 40: // down
                                O.nav(false);
                                break;

                            case 65: // shortcut ctrl + a to select all and ctrl + shift + a to unselect all.
                                if (O.is_multi && e.ctrlKey){
                                    O.toggSelAll(!e.shiftKey, 1);
                                    break;
                                }
                                else
                                    return;

                            case 32: // space
                                if(settings.search && O.ftxt.is(e.target))return;
                            case 13: // enter
                                if (O.is_opened)
                                    O.optDiv.find('ul li.sel').trigger('click');
                                else
                                    O.setOnOpen();
                                break;
                            case 9:	 //tab
                                if(!settings.okCancelInMulti)
                                    O.hideOpts();
                                return;
                            case 27: // esc
                                if(settings.okCancelInMulti)O._cnbtn();
                                O.hideOpts();
                                return;

                            default:
                                return; // exit this handler for other keys
                        }
                        e.preventDefault(); // prevent the default action (scroll / move caret)
                    });

                    $(window).on('resize.sumo', function () {
                        O.floatingList();
                    });
                },

                onOptClick: function (li) {
                    var O = this;
                    li.click(function () {
                        var li = $(this);
                        if(li.hasClass('disabled'))return;
                        var txt = "";
                        if (O.is_multi) {
                            li.toggleClass('selected');
                            li.data('opt')[0].selected = li.hasClass('selected');
                            O.selAllState();
                        }
                        else {
                            li.parent().find('li.selected').removeClass('selected'); //if not multiselect then remove all selections from this list
                            li.toggleClass('selected');
                            li.data('opt')[0].selected = true;
                        }

                        //branch for combined change event.
                        if (!(O.is_multi && settings.triggerChangeCombined && (O.is_floating || settings.okCancelInMulti))) {
                            O.setText();
                            O.callChange();
                        }

                        if (!O.is_multi) O.hideOpts(); //if its not a multiselect then hide on single select.
                    });
                },

                setText: function () {
                    var O = this;
                    O.placeholder = "";
                    if (O.is_multi) {
                        sels = O.E.find(':selected').not(':disabled'); //selected options.

                        for (i = 0; i < sels.length; i++) {
                            if (i + 1 >= settings.csvDispCount && settings.csvDispCount) {
                                if (sels.length == O.E.find('option').length && settings.captionFormatAllSelected) {
                                    O.placeholder = settings.captionFormatAllSelected.replace(/\{0\}/g, sels.length)+',';
                                } else {
                                    O.placeholder = settings.captionFormat.replace(/\{0\}/g, sels.length)+',';
                                }

                                break;
                            }
                            else O.placeholder += $(sels[i]).text() + ", ";
                        }
                        O.placeholder = O.placeholder.replace(/,([^,]*)$/, '$1'); //remove unexpected "," from last.
                    }
                    else {
                        O.placeholder = O.E.find(':selected').not(':disabled').text();
                    }

                    var is_placeholder = false;

                    if (!O.placeholder) {

                        is_placeholder = true;

                        O.placeholder = O.E.attr('placeholder');
                        if (!O.placeholder)                  //if placeholder is there then set it
                            O.placeholder = O.E.find('option:disabled:selected').text();
                    }

                    O.placeholder = O.placeholder ? (settings.prefix + ' ' + O.placeholder) : settings.placeholder

                    //set display text
                    O.caption.html(O.placeholder);
                    if (settings.showTitle) O.CaptionCont.attr('title', O.placeholder);

                    //set the hidden field if post as csv is true.
                    var csvField = O.select.find('input.HEMANT123');
                    if (csvField.length) csvField.val(O.getSelStr());

                    //add class placeholder if its a placeholder text.
                    if (is_placeholder) O.caption.addClass('placeholder'); else O.caption.removeClass('placeholder');
                    return O.placeholder;
                },

                isMobile: function () {

                    // Adapted from http://www.detectmobilebrowsers.com
                    var ua = navigator.userAgent || navigator.vendor || window.opera;

                    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                    for (var i = 0; i < settings.nativeOnDevice.length; i++) if (ua.toString().toLowerCase().indexOf(settings.nativeOnDevice[i].toLowerCase()) > 0) return settings.nativeOnDevice[i];
                    return false;
                },

                setNativeMobile: function () {
                    var O = this;
                    O.E.addClass('SelectClass')//.css('height', O.select.outerHeight());
                    O.mob = true;
                    O.E.change(function () {
                        O.setText();
                    });
                },

                floatingList: function () {
                    var O = this;
                    //called on init and also on resize.
                    //O.is_floating = true if window width is < specified float width
                    O.is_floating = $(window).width() <= settings.floatWidth;

                    //set class isFloating
                    O.optDiv.toggleClass('isFloating', O.is_floating);

                    //remove height if not floating
                    if (!O.is_floating) O.optDiv.css('height', '');

                    //toggle class according to okCancelInMulti flag only when it is not floating
                    O.optDiv.toggleClass('okCancelInMulti', settings.okCancelInMulti && !O.is_floating);
                },

                //HELPERS FOR OUTSIDERS
                // validates range of given item operations
                vRange: function (i) {
                    var O = this;
                    var opts = O.E.find('option');
                    if (opts.length <= i || i < 0) throw "index out of bounds"
                    return O;
                },

                //toggles selection on c as boolean.
                toggSel: function (c, i) {
                    var O = this;
                    var opt;
                    if (typeof(i) === "number"){
                        O.vRange(i);
                        opt = O.E.find('option')[i];
                    }
                    else{
                        opt = O.E.find('option[value="'+i+'"]')[0]||0;
                    }
                    if (!opt || opt.disabled)
                        return;

                    if(opt.selected != c){
                        opt.selected = c;
                        if(!O.mob) $(opt).data('li').toggleClass('selected',c);

                        O.callChange();
                        O.setPstate();
                        O.setText();
                        O.selAllState();
                    }
                },

                //toggles disabled on c as boolean.
                toggDis: function (c, i) {
                    var O = this.vRange(i);
                    O.E.find('option')[i].disabled = c;
                    if(c)O.E.find('option')[i].selected = false;
                    if(!O.mob)O.optDiv.find('ul.options li').eq(i).toggleClass('disabled', c).removeClass('selected');
                    O.setText();
                },

                // toggle disable/enable on complete select control
                toggSumo: function(val) {
                    var O = this;
                    O.enabled = val;
                    O.select.toggleClass('disabled', val);

                    if (val) {
                        O.E.attr('disabled', 'disabled');
                        O.select.removeAttr('tabindex');
                    }
                    else{
                        O.E.removeAttr('disabled');
                        O.select.attr('tabindex','0');
                    }

                    return O;
                },

                // toggles all option on c as boolean.
                // set direct=false/0 bypasses okCancelInMulti behaviour.
                toggSelAll: function (c, direct) {
                    var O = this;
                    O.E.find('option:not(:disabled,:hidden)')
                    .each(function(ix,e){
                        var is_selected=e.selected,
                            e = $(e).data('li');
                        if(e.hasClass('hidden'))return;
                        if(!!c){
                            if(!is_selected)e.trigger('click');
                        }
                        else{
                            if(is_selected)e.trigger('click');
                        }
                    });

                    if(!direct){
                        if(!O.mob && O.selAll)O.selAll.removeClass('partial').toggleClass('selected',!!c);
                        O.callChange();
                        O.setText();
                        O.setPstate();
                    }
                },

                /* outside accessibility options
                 which can be accessed from the element instance.
                 */
                reload:function(){
                    var elm = this.unload();
                    return $(elm).SumoSelect(settings);
                },

                unload: function () {
                    var O = this;
                    O.select.before(O.E);
                    O.E.show();

                    if (settings.outputAsCSV && O.is_multi && O.select.find('input.HEMANT123').length) {
                        O.E.attr('name', O.select.find('input.HEMANT123').attr('name')); // restore the name;
                    }
                    O.select.remove();
                    delete selObj.sumo;
                    return selObj;
                },

                //## add a new option to select at a given index.
                add: function (val, txt, i) {
                    if (typeof val == "undefined") throw "No value to add"

                    var O = this;
                    opts=O.E.find('option')
                    if (typeof txt == "number") { i = txt; txt = val; }
                    if (typeof txt == "undefined") { txt = val; }

                    opt = $("<option></option>").val(val).html(txt);

                    if (opts.length < i) throw "index out of bounds"

                    if (typeof i == "undefined" || opts.length == i) { // add it to the last if given index is last no or no index provides.
                        O.E.append(opt);
                        if(!O.mob)O.ul.append(O.createLi(opt));
                    }
                    else {
                        opts.eq(i).before(opt);
                        if(!O.mob)O.ul.find('li.opt').eq(i).before(O.createLi(opt));
                    }

                    return selObj;
                },

                //## removes an item at a given index.
                remove: function (i) {
                    var O = this.vRange(i);
                    O.E.find('option').eq(i).remove();
                    if(!O.mob)O.optDiv.find('ul.options li').eq(i).remove();
                    O.setText();
                },

                //## Select an item at a given index.
                selectItem: function (i) { this.toggSel(true, i); },

                //## UnSelect an iten at a given index.
                unSelectItem: function (i) { this.toggSel(false, i); },

                //## Select all items  of the select.
                selectAll: function () { this.toggSelAll(true); },

                //## UnSelect all items of the select.
                unSelectAll: function () { this.toggSelAll(false); },

                //## Disable an iten at a given index.
                disableItem: function (i) { this.toggDis(true, i) },

                //## Removes disabled an iten at a given index.
                enableItem: function (i) { this.toggDis(false, i) },

                //## New simple methods as getter and setter are not working fine in ie8-
                //## variable to check state of control if enabled or disabled.
                enabled : true,
                //## Enables the control
                enable: function(){return this.toggSumo(false)},

                //## Disables the control
                disable: function(){return this.toggSumo(true)},


                init: function () {
                    var O = this;
                    O.createElems();
                    O.setText();
                    return O
                }

            };

            selObj.sumo.init();
        });

        return ret.length == 1 ? ret[0] : ret;
    };


});
/*!
 Responsive 2.1.1
 2014-2016 SpryMedia Ltd - datatables.net/license
 */
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(l){return c(l,window,document)}):"object"===typeof exports?module.exports=function(l,k){l||(l=window);if(!k||!k.fn.dataTable)k=require("datatables.net")(l,k).$;return c(k,l,l.document)}:c(jQuery,window,document)})(function(c,l,k,p){var m=c.fn.dataTable,j=function(b,a){if(!m.versionCheck||!m.versionCheck("1.10.3"))throw"DataTables Responsive requires DataTables 1.10.3 or newer";this.s={dt:new m.Api(b),columns:[],
    current:[]};this.s.dt.settings()[0].responsive||(a&&"string"===typeof a.details?a.details={type:a.details}:a&&!1===a.details?a.details={type:!1}:a&&!0===a.details&&(a.details={type:"inline"}),this.c=c.extend(!0,{},j.defaults,m.defaults.responsive,a),b.responsive=this,this._constructor())};c.extend(j.prototype,{_constructor:function(){var b=this,a=this.s.dt,d=a.settings()[0],e=c(l).width();a.settings()[0]._responsive=this;c(l).on("resize.dtr orientationchange.dtr",m.util.throttle(function(){var a=
    c(l).width();a!==e&&(b._resize(),e=a)}));d.oApi._fnCallbackReg(d,"aoRowCreatedCallback",function(e){-1!==c.inArray(!1,b.s.current)&&c(">td, >th",e).each(function(e){e=a.column.index("toData",e);!1===b.s.current[e]&&c(this).css("display","none")})});a.on("destroy.dtr",function(){a.off(".dtr");c(a.table().body()).off(".dtr");c(l).off("resize.dtr orientationchange.dtr");c.each(b.s.current,function(a,e){!1===e&&b._setColumnVis(a,!0)})});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>
    b.width?-1:0});this._classLogic();this._resizeAuto();d=this.c.details;!1!==d.type&&(b._detailsInit(),a.on("column-visibility.dtr",function(){b._classLogic();b._resizeAuto();b._resize()}),a.on("draw.dtr",function(){b._redrawChildren()}),c(a.table().node()).addClass("dtr-"+d.type));a.on("column-reorder.dtr",function(){b._classLogic();b._resizeAuto();b._resize()});a.on("column-sizing.dtr",function(){b._resizeAuto();b._resize()});a.on("preXhr.dtr",function(){var e=[];a.rows().every(function(){this.child.isShown()&&
e.push(this.id(true))});a.one("draw.dtr",function(){a.rows(e).every(function(){b._detailsDisplay(this,false)})})});a.on("init.dtr",function(){b._resizeAuto();b._resize();c.inArray(false,b.s.current)&&a.columns.adjust()});this._resize()},_columnsVisiblity:function(b){var a=this.s.dt,d=this.s.columns,e,f,g=d.map(function(a,b){return{columnIdx:b,priority:a.priority}}).sort(function(a,b){return a.priority!==b.priority?a.priority-b.priority:a.columnIdx-b.columnIdx}),h=c.map(d,function(a){return a.auto&&
null===a.minWidth?!1:!0===a.auto?"-":-1!==c.inArray(b,a.includeIn)}),n=0;e=0;for(f=h.length;e<f;e++)!0===h[e]&&(n+=d[e].minWidth);e=a.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;a=a.table().container().offsetWidth-e-n;e=0;for(f=h.length;e<f;e++)d[e].control&&(a-=d[e].minWidth);n=!1;e=0;for(f=g.length;e<f;e++){var i=g[e].columnIdx;"-"===h[i]&&(!d[i].control&&d[i].minWidth)&&(n||0>a-d[i].minWidth?(n=!0,h[i]=!1):h[i]=!0,a-=d[i].minWidth)}g=!1;e=0;for(f=d.length;e<f;e++)if(!d[e].control&&!d[e].never&&
    !h[e]){g=!0;break}e=0;for(f=d.length;e<f;e++)d[e].control&&(h[e]=g);-1===c.inArray(!0,h)&&(h[0]=!0);return h},_classLogic:function(){var b=this,a=this.c.breakpoints,d=this.s.dt,e=d.columns().eq(0).map(function(a){var b=this.column(a),e=b.header().className,a=d.settings()[0].aoColumns[a].responsivePriority;a===p&&(b=c(b.header()).data("priority"),a=b!==p?1*b:1E4);return{className:e,includeIn:[],auto:!1,control:!1,never:e.match(/\bnever\b/)?!0:!1,priority:a}}),f=function(a,b){var d=e[a].includeIn;-1===
c.inArray(b,d)&&d.push(b)},g=function(c,d,i,g){if(i)if("max-"===i){g=b._find(d).width;d=0;for(i=a.length;d<i;d++)a[d].width<=g&&f(c,a[d].name)}else if("min-"===i){g=b._find(d).width;d=0;for(i=a.length;d<i;d++)a[d].width>=g&&f(c,a[d].name)}else{if("not-"===i){d=0;for(i=a.length;d<i;d++)-1===a[d].name.indexOf(g)&&f(c,a[d].name)}}else e[c].includeIn.push(d)};e.each(function(b,e){for(var d=b.className.split(" "),f=!1,j=0,l=d.length;j<l;j++){var k=c.trim(d[j]);if("all"===k){f=!0;b.includeIn=c.map(a,function(a){return a.name});
    return}if("none"===k||b.never){f=!0;return}if("control"===k){f=!0;b.control=!0;return}c.each(a,function(a,b){var d=b.name.split("-"),c=k.match(RegExp("(min\\-|max\\-|not\\-)?("+d[0]+")(\\-[_a-zA-Z0-9])?"));c&&(f=!0,c[2]===d[0]&&c[3]==="-"+d[1]?g(e,b.name,c[1],c[2]+c[3]):c[2]===d[0]&&!c[3]&&g(e,b.name,c[1],c[2]))})}f||(b.auto=!0)});this.s.columns=e},_detailsDisplay:function(b,a){var d=this,e=this.s.dt,f=this.c.details;if(f&&!1!==f.type){var g=f.display(b,a,function(){return f.renderer(e,b[0],d._detailsObj(b[0]))});
    (!0===g||!1===g)&&c(e.table().node()).triggerHandler("responsive-display.dt",[e,b,g,a])}},_detailsInit:function(){var b=this,a=this.s.dt,d=this.c.details;"inline"===d.type&&(d.target="td:first-child, th:first-child");a.on("draw.dtr",function(){b._tabIndexes()});b._tabIndexes();c(a.table().body()).on("keyup.dtr","td, th",function(b){b.keyCode===13&&c(this).data("dtr-keyboard")&&c(this).click()});var e=d.target;c(a.table().body()).on("click.dtr mousedown.dtr mouseup.dtr","string"===typeof e?e:"td, th",
    function(d){if(c(a.table().node()).hasClass("collapsed")&&c.inArray(c(this).closest("tr").get(0),a.rows().nodes().toArray())!==-1){if(typeof e==="number"){var g=e<0?a.columns().eq(0).length+e:e;if(a.cell(this).index().column!==g)return}g=a.row(c(this).closest("tr"));d.type==="click"?b._detailsDisplay(g,false):d.type==="mousedown"?c(this).css("outline","none"):d.type==="mouseup"&&c(this).blur().css("outline","")}})},_detailsObj:function(b){var a=this,d=this.s.dt;return c.map(this.s.columns,function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c){if(!e.never&&!e.control)return{title:d.settings()[0].aoColumns[c].sTitle,data:d.cell(b,c).render(a.c.orthogonal),hidden:d.column(c).visible()&&!a.s.current[c],columnIndex:c,rowIndex:b}})},_find:function(b){for(var a=this.c.breakpoints,d=0,c=a.length;d<c;d++)if(a[d].name===b)return a[d]},_redrawChildren:function(){var b=this,a=this.s.dt;a.rows({page:"current"}).iterator("row",function(c,e){a.row(e);b._detailsDisplay(a.row(e),!0)})},_resize:function(){var b=this,a=this.s.dt,d=c(l).width(),e=this.c.breakpoints,
    f=e[0].name,g=this.s.columns,h,j=this.s.current.slice();for(h=e.length-1;0<=h;h--)if(d<=e[h].width){f=e[h].name;break}var i=this._columnsVisiblity(f);this.s.current=i;e=!1;h=0;for(d=g.length;h<d;h++)if(!1===i[h]&&!g[h].never&&!g[h].control){e=!0;break}c(a.table().node()).toggleClass("collapsed",e);var k=!1;a.columns().eq(0).each(function(a,c){i[c]!==j[c]&&(k=!0,b._setColumnVis(a,i[c]))});k&&(this._redrawChildren(),c(a.table().node()).trigger("responsive-resize.dt",[a,this.s.current]))},_resizeAuto:function(){var b=
    this.s.dt,a=this.s.columns;if(this.c.auto&&-1!==c.inArray(!0,c.map(a,function(b){return b.auto}))){b.table().node();var d=b.table().node().cloneNode(!1),e=c(b.table().header().cloneNode(!1)).appendTo(d),f=c(b.table().body()).clone(!1,!1).empty().appendTo(d),g=b.columns().header().filter(function(a){return b.column(a).visible()}).to$().clone(!1).css("display","table-cell");c(f).append(c(b.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(f=b.table().footer()){var f=c(f.cloneNode(!1)).appendTo(d),
    h=b.columns().footer().filter(function(a){return b.column(a).visible()}).to$().clone(!1).css("display","table-cell");c("<tr/>").append(h).appendTo(f)}c("<tr/>").append(g).appendTo(e);"inline"===this.c.details.type&&c(d).addClass("dtr-inline collapsed");c(d).find("[name]").removeAttr("name");d=c("<div/>").css({width:1,height:1,overflow:"hidden"}).append(d);d.insertBefore(b.table().node());g.each(function(c){c=b.column.index("fromVisible",c);a[c].minWidth=this.offsetWidth||0});d.remove()}},_setColumnVis:function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a){var d=this.s.dt,e=a?"":"none";c(d.column(b).header()).css("display",e);c(d.column(b).footer()).css("display",e);d.column(b).nodes().to$().css("display",e)},_tabIndexes:function(){var b=this.s.dt,a=b.cells({page:"current"}).nodes().to$(),d=b.settings()[0],e=this.c.details.target;a.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");a="number"===typeof e?":eq("+e+")":e;"td:first-child, th:first-child"===a&&(a=">td:first-child, >th:first-child");c(a,b.rows({page:"current"}).nodes()).attr("tabIndex",
    d.iTabIndex).data("dtr-keyboard",1)}});j.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];j.display={childRow:function(b,a,d){if(a){if(c(b.node()).hasClass("parent"))return b.child(d(),"child").show(),!0}else{if(b.child.isShown())return b.child(!1),c(b.node()).removeClass("parent"),!1;b.child(d(),"child").show();c(b.node()).addClass("parent");return!0}},childRowImmediate:function(b,a,d){if(!a&&
    b.child.isShown()||!b.responsive.hasHidden())return b.child(!1),c(b.node()).removeClass("parent"),!1;b.child(d(),"child").show();c(b.node()).addClass("parent");return!0},modal:function(b){return function(a,d,e){if(d)c("div.dtr-modal-content").empty().append(e());else{var f=function(){g.remove();c(k).off("keypress.dtr")},g=c('<div class="dtr-modal"/>').append(c('<div class="dtr-modal-display"/>').append(c('<div class="dtr-modal-content"/>').append(e())).append(c('<div class="dtr-modal-close">&times;</div>').click(function(){f()}))).append(c('<div class="dtr-modal-background"/>').click(function(){f()})).appendTo("body");
    c(k).on("keyup.dtr",function(a){27===a.keyCode&&(a.stopPropagation(),f())})}b&&b.header&&c("div.dtr-modal-content").prepend("<h2>"+b.header(a)+"</h2>")}}};j.renderer={listHidden:function(){return function(b,a,d){return(b=c.map(d,function(a){return a.hidden?'<li data-dtr-index="'+a.columnIndex+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":""}).join(""))?c('<ul data-dtr-index="'+a+'" class="dtr-details"/>').append(b):
    !1}},tableAll:function(b){b=c.extend({tableClass:""},b);return function(a,d,e){a=c.map(e,function(a){return'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>"}).join("");return c('<table class="'+b.tableClass+' dtr-details" width="100%"/>').append(a)}}};j.defaults={breakpoints:j.breakpoints,auto:!0,details:{display:j.display.childRow,renderer:j.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var o=c.fn.dataTable.Api;
    o.register("responsive()",function(){return this});o.register("responsive.index()",function(b){b=c(b);return{column:b.data("dtr-index"),row:b.parent().data("dtr-index")}});o.register("responsive.rebuild()",function(){return this.iterator("table",function(b){b._responsive&&b._responsive._classLogic()})});o.register("responsive.recalc()",function(){return this.iterator("table",function(b){b._responsive&&(b._responsive._resizeAuto(),b._responsive._resize())})});o.register("responsive.hasHidden()",function(){var b=
        this.context[0];return b._responsive?-1!==c.inArray(!1,b._responsive.s.current):!1});j.version="2.1.1";c.fn.dataTable.Responsive=j;c.fn.DataTable.Responsive=j;c(k).on("preInit.dt.dtr",function(b,a){if("dt"===b.namespace&&(c(a.nTable).hasClass("responsive")||c(a.nTable).hasClass("dt-responsive")||a.oInit.responsive||m.defaults.responsive)){var d=a.oInit.responsive;!1!==d&&new j(a,c.isPlainObject(d)?d:{})}});return j});

/*
 * Custom
 */
$(function(){
    $(".date-picker-block").flatpickr({
        wrap: true,
        dateFormat: "d/m/Y",
        disableMobile: "true"
    });

    $(".time-picker-block").flatpickr({
        wrap: true,
        enableTime: true,
        noCalendar: true,
        enableSeconds: true,
        time_24hr: true,
        disableMobile: "true",
        dateFormat: "H:i:s"
    });

    $('.select').searchableOptionList({
        showSelectionBelowList: true,
        showSelectAll: false,
        texts: {
            searchplaceholder: 'Choose accounts...'
        },
        resultsContainer: $(".column-2.column-account"),
        events: {
            onInitialized: undefined,
            onRendered: undefined,
            onOpen: undefined,
            onClose: undefined,
            onChange: undefined,
            onScroll: function () {

                $('.sol-inner-container').css('width', Math.floor(this.$innerContainer.outerWidth(false)));

                var selectionContainerYPos = this.$input.offset().top - this.config.scrollTarget.scrollTop() + this.$input.outerHeight(false),
                    selectionContainerHeight = this.$selectionContainer.outerHeight(false),
                    selectionContainerBottom = selectionContainerYPos + selectionContainerHeight,
                    displayContainerAboveInput = this.config.displayContainerAboveInput || document.documentElement.clientHeight - this.config.scrollTarget.scrollTop() < selectionContainerBottom,
                    selectionContainerWidth = this.$innerContainer.outerWidth(false) - parseInt(this.$selectionContainer.css('border-left-width'), 10) - parseInt(this.$selectionContainer.css('border-right-width'), 10);

                this.$container
                    .removeClass('sol-selection-top')
                    .addClass('sol-selection-bottom');

                if (this.$innerContainer.css('display') !== 'block') {
                    selectionContainerWidth = selectionContainerWidth * 1.2;
                } else {

                    var borderRadiusSelector = displayContainerAboveInput ? 'border-bottom-right-radius' : 'border-top-right-radius';
                    this.$selectionContainer
                        .css(borderRadiusSelector, 'initial');

                    if (this.$actionButtons) {
                        this.$actionButtons
                            .css(borderRadiusSelector, 'initial');
                    }
                }

                this.$selectionContainer
                    .css('top', Math.floor(selectionContainerYPos))
                    .css('left', Math.floor(this.$container.offset().left))
                    .css('width', Math.floor(selectionContainerWidth));

                this.config.displayContainerAboveInput = displayContainerAboveInput;
            }
        }
    });

    $('.select-place').searchableOptionList({
        showSelectionBelowList: true,
        showSelectAll: false,
        texts: {
            searchplaceholder: 'Choose cities...'
        },
        events: {
            onInitialized: undefined,
            onRendered: undefined,
            onOpen: undefined,
            onClose: undefined,
            onChange: undefined,
            onScroll: function () {

                var selectionContainerYPos = this.$input.offset().top - this.config.scrollTarget.scrollTop() + this.$input.outerHeight(false),
                    selectionContainerHeight = this.$selectionContainer.outerHeight(false),
                    selectionContainerBottom = selectionContainerYPos + selectionContainerHeight,
                    displayContainerAboveInput = this.config.displayContainerAboveInput || document.documentElement.clientHeight - this.config.scrollTarget.scrollTop() < selectionContainerBottom,
                    selectionContainerWidth = this.$innerContainer.outerWidth(false) - parseInt(this.$selectionContainer.css('border-left-width'), 10) - parseInt(this.$selectionContainer.css('border-right-width'), 10);

                this.$container
                    .removeClass('sol-selection-top')
                    .addClass('sol-selection-bottom');

                if (this.$innerContainer.css('display') !== 'block') {
                    selectionContainerWidth = selectionContainerWidth * 1.2;
                } else {

                    var borderRadiusSelector = displayContainerAboveInput ? 'border-bottom-right-radius' : 'border-top-right-radius';
                    this.$selectionContainer
                        .css(borderRadiusSelector, 'initial');

                    if (this.$actionButtons) {
                        this.$actionButtons
                            .css(borderRadiusSelector, 'initial');
                    }
                }

                this.$selectionContainer
                    .css('top', Math.floor(selectionContainerYPos))
                    .css('left', Math.floor(this.$container.offset().left))
                    .css('width', Math.floor(selectionContainerWidth));


                this.config.displayContainerAboveInput = displayContainerAboveInput;
            }
        }
    });

    $('.select-multi').searchableOptionList({
        showSelectionBelowList: true,
        showSelectAll: false,
        texts: {
            searchplaceholder: 'Search...'
        },
        events: {
            onInitialized: undefined,
            onRendered: undefined,
            onOpen: undefined,
            onClose: undefined,
            onChange: undefined,
            onScroll: function () {

                var selectionContainerYPos = this.$input.offset().top - this.config.scrollTarget.scrollTop() + this.$input.outerHeight(false),
                    selectionContainerHeight = this.$selectionContainer.outerHeight(false),
                    selectionContainerBottom = selectionContainerYPos + selectionContainerHeight,
                    displayContainerAboveInput = this.config.displayContainerAboveInput || document.documentElement.clientHeight - this.config.scrollTarget.scrollTop() < selectionContainerBottom,
                    selectionContainerWidth = this.$innerContainer.outerWidth(false) - parseInt(this.$selectionContainer.css('border-left-width'), 10) - parseInt(this.$selectionContainer.css('border-right-width'), 10);

                this.$container
                    .removeClass('sol-selection-top')
                    .addClass('sol-selection-bottom');

                if (this.$innerContainer.css('display') !== 'block') {
                    selectionContainerWidth = selectionContainerWidth * 1.2;
                } else {

                    var borderRadiusSelector = displayContainerAboveInput ? 'border-bottom-right-radius' : 'border-top-right-radius';
                    this.$selectionContainer
                        .css(borderRadiusSelector, 'initial');

                    if (this.$actionButtons) {
                        this.$actionButtons
                            .css(borderRadiusSelector, 'initial');
                    }
                }

                this.$selectionContainer
                    .css('top', Math.floor(selectionContainerYPos))
                    .css('left', Math.floor(this.$container.offset().left))
                    .css('width', Math.floor(selectionContainerWidth));


                this.config.displayContainerAboveInput = displayContainerAboveInput;
            }
        }
    });

    $('.sumoselect').SumoSelect();

    $('.accordion-title').on('click', function () {
        if( $(this).hasClass('open') == false ) {
            $(this).addClass('open');
            $(this).next('.accordion-container').addClass('open');
        } else {
            $(this).removeClass('open');
            $(this).next('.accordion-container').removeClass('open');
        }
    });

    $('.button-submit').on('click', function () {
            $('.results-wrap').toggle();
        }).one('click', function () {
            $('#results-table').DataTable({
                "dom": 't',
                "info":     false,
                scrollY: '50vh',
                scrollCollapse: true,
                paging: false,
                responsive: true,
                columnDefs: [
                    {
                        className: "dt-left", 'targets': [0]
                    },
                    {
                        className: "dt-center", targets: '_all'
                    }
                ]
            });
        });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjIuMS40IHwgKGMpIDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSkrMT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1cImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPU0ucmVwbGFjZShcIndcIixcIncjXCIpLE89XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTitcIikpfClcIitMK1wiKlxcXFxdXCIsUD1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTytcIikqKXwuKilcXFxcKXwpXCIsUT1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFU9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxWPW5ldyBSZWdFeHAoUCksVz1uZXcgUmVnRXhwKFwiXlwiK04rXCIkXCIpLFg9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK08pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1ApLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFo9L15oXFxkJC9pLCQ9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxfPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGFhPS9bK35dLyxiYT0vJ3xcXFxcL2csY2E9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksZGE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZWE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHcseDtpZigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixkPWR8fFtdLGs9Yi5ub2RlVHlwZSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT1rJiY5IT09ayYmMTEhPT1rKXJldHVybiBkO2lmKCFlJiZwKXtpZigxMSE9PWsmJihmPV8uZXhlYyhhKSkpaWYoaj1mWzFdKXtpZig5PT09ayl7aWYoaD1iLmdldEVsZW1lbnRCeUlkKGopLCFofHwhaC5wYXJlbnROb2RlKXJldHVybiBkO2lmKGguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNlIGlmKGIub3duZXJEb2N1bWVudCYmKGg9Yi5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGopKSYmdChiLGgpJiZoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZXtpZihmWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoaj1mWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGopKSxkfWlmKGMucXNhJiYoIXF8fCFxLnRlc3QoYSkpKXtpZihzPXI9dSx3PWIseD0xIT09ayYmYSwxPT09ayYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bz1nKGEpLChyPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9ci5yZXBsYWNlKGJhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixzKSxzPVwiW2lkPSdcIitzK1wiJ10gXCIsbD1vLmxlbmd0aDt3aGlsZShsLS0pb1tsXT1zK3JhKG9bbF0pO3c9YWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8Yix4PW8uam9pbihcIixcIil9aWYoeCl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwoeCkpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7cnx8Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShSLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHBhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1nLmRvY3VtZW50RWxlbWVudCxlPWcuZGVmYXVsdFZpZXcsZSYmZSE9PWUudG9wJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGVhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixlYSkpLHA9IWYoZyksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKGcuY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT0kLnRlc3QoZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhZy5nZXRFbGVtZW50c0J5TmFtZXx8IWcuZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYyYmYy5wYXJlbnROb2RlP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT0kLnRlc3QoZy5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXGZdJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe3ZhciBiPWcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9JC50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsUCl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj0kLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHwkLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1nfHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PWd8fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxoPVthXSxpPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1nPy0xOmI9PT1nPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaS51bnNoaWZ0KGMpO3doaWxlKGhbZF09PT1pW2RdKWQrKztyZXR1cm4gZD9sYShoW2RdLGlbZF0pOmhbZF09PT12Py0xOmlbZF09PT12PzE6MH0sZyk6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFUsXCI9JyQxJ11cIiksISghYy5tYXRjaGVzU2VsZWN0b3J8fCFwfHxyJiZyLnRlc3QoYil8fHEmJnEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpYLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGNhLGRhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGNhLGRhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gWC5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlYudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFEsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWg7aWYocSl7aWYoZil7d2hpbGUocCl7bD1iO3doaWxlKGw9bFtwXSlpZihoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7az1xW3VdfHwocVt1XT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLG09alswXT09PXcmJmpbMl0sbD1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoMT09PWwubm9kZVR5cGUmJisrbSYmbD09PWIpe2tbYV09W3csbixtXTticmVha319ZWxzZSBpZihzJiYoaj0oYlt1XXx8KGJbdV09e30pKVthXSkmJmpbMF09PT13KW09alsxXTtlbHNlIHdoaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKChoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpJiYrK20mJihzJiYoKGxbdV18fChsW3VdPXt9KSlbYV09W3csbV0pLGw9PT1iKSlicmVhaztyZXR1cm4gbS09ZSxtPT09ZHx8bSVkPT09MCYmbS9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFIsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGNhLGRhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFoudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpvYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6b2EoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm9hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiBxYSgpe31xYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHFhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVMuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1ULmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFIsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVhbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHJhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiBzYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGo9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihpPWJbdV18fChiW3VdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBqWzJdPWhbMl07aWYoaVtkXT1qLGpbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiB0YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB1YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB2YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXdhKGQpKSxlJiYhZVt1XSYmKGU9d2EoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dWEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp2YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dmEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXZhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB4YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3NhKHRhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB3YShpPjEmJnRhKG0pLGk+MSYmcmEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShSLFwiJDFcIiksYyxlPmkmJnhhKGEuc2xpY2UoaSxlKSksZj5lJiZ4YShhPWEuc2xpY2UoZSkpLGY+ZSYmcmEoYSkpfW0ucHVzaChjKX1yZXR1cm4gdGEobSl9ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbSxvLHA9MCxxPVwiMFwiLHI9ZiYmW10scz1bXSx0PWosdT1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHY9dys9bnVsbD09dD8xOk1hdGgucmFuZG9tKCl8fC4xLHg9dS5sZW5ndGg7Zm9yKGsmJihqPWchPT1uJiZnKTtxIT09eCYmbnVsbCE9KGw9dVtxXSk7cSsrKXtpZihlJiZsKXttPTA7d2hpbGUobz1hW20rK10paWYobyhsLGcsaCkpe2kucHVzaChsKTticmVha31rJiYodz12KX1jJiYoKGw9IW8mJmwpJiZwLS0sZiYmci5wdXNoKGwpKX1pZihwKz1xLGMmJnEhPT1wKXttPTA7d2hpbGUobz1iW20rK10pbyhyLHMsZyxoKTtpZihmKXtpZihwPjApd2hpbGUocS0tKXJbcV18fHNbcV18fChzW3FdPUYuY2FsbChpKSk7cz12YShzKX1ILmFwcGx5KGkscyksayYmIWYmJnMubGVuZ3RoPjAmJnArYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9dixqPXQpLHJ9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eGEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHlhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVgubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxhYS50ZXN0KGpbMF0udHlwZSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZyYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSxhYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsdj0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sdz0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geChhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHcudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2FsbChiLGEpPj0wIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXgodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdS50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgeSx6PS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEE9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTp6LmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8eSkuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6bCwhMCkpLHYudGVzdChjWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGQ9bC5nZXRFbGVtZW50QnlJZChjWzJdKSxkJiZkLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZCksdGhpcy5jb250ZXh0PWwsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHkucmVhZHk/eS5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtBLnByb3RvdHlwZT1uLmZuLHk9bihsKTt2YXIgQj0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxDPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSxzaWJsaW5nOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfX0pLG4uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dS50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2cuY2FsbChuKGEpLHRoaXNbMF0pOmcuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWUobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRChhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKENbYV18fG4udW5pcXVlKGUpLEIudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBFPS9cXFMrL2csRj17fTtmdW5jdGlvbiBHKGEpe3ZhciBiPUZbYV09e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEUpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/RlthXXx8RyhhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGI9YS5tZW1vcnkmJmwsYz0hMCxnPWV8fDAsZT0wLGY9aC5sZW5ndGgsZD0hMDtoJiZmPmc7ZysrKWlmKGhbZ10uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtiPSExO2JyZWFrfWQ9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpiP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgYz1oLmxlbmd0aDshZnVuY3Rpb24gZyhiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW4udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZyhjKX0pfShhcmd1bWVudHMpLGQ/Zj1oLmxlbmd0aDpiJiYoZT1jLGooYikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGgsYykpPi0xKWguc3BsaWNlKGMsMSksZCYmKGY+PWMmJmYtLSxnPj1jJiZnLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZj0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWI9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsYnx8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIWh8fGMmJiFpfHwoYj1ifHxbXSxiPVthLGIuc2xpY2U/Yi5zbGljZSgpOmJdLGQ/aS5wdXNoKGIpOmooYikpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWN9fTtyZXR1cm4ga30sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBIO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChILnJlc29sdmVXaXRoKGwsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihsKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4obCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSSgpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixJLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSSwhMSksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSHx8KEg9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWwucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4ucmVhZHkpOihsLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpKSksSC5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSj1uLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyluLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfTtuLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBLKCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY2FjaGU9e30sMCx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue319fSksdGhpcy5leHBhbmRvPW4uZXhwYW5kbytLLnVpZCsrfUsudWlkPTEsSy5hY2NlcHRzPW4uYWNjZXB0RGF0YSxLLnByb3RvdHlwZT17a2V5OmZ1bmN0aW9uKGEpe2lmKCFLLmFjY2VwdHMoYSkpcmV0dXJuIDA7dmFyIGI9e30sYz1hW3RoaXMuZXhwYW5kb107aWYoIWMpe2M9Sy51aWQrKzt0cnl7Ylt0aGlzLmV4cGFuZG9dPXt2YWx1ZTpjfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLGIpfWNhdGNoKGQpe2JbdGhpcy5leHBhbmRvXT1jLG4uZXh0ZW5kKGEsYil9fXJldHVybiB0aGlzLmNhY2hlW2NdfHwodGhpcy5jYWNoZVtjXT17fSksY30sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMua2V5KGEpLGY9dGhpcy5jYWNoZVtlXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYilmW2JdPWM7ZWxzZSBpZihuLmlzRW1wdHlPYmplY3QoZikpbi5leHRlbmQodGhpcy5jYWNoZVtlXSxiKTtlbHNlIGZvcihkIGluIGIpZltkXT1iW2RdO3JldHVybiBmfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNhY2hlW3RoaXMua2V5KGEpXTtyZXR1cm4gdm9pZCAwPT09Yj9jOmNbYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpcy5rZXkoYSksZz10aGlzLmNhY2hlW2ZdO2lmKHZvaWQgMD09PWIpdGhpcy5jYWNoZVtmXT17fTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBnP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZz9bZF06ZC5tYXRjaChFKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZ1tkW2NdXX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNFbXB0eU9iamVjdCh0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV18fHt9KX0sZGlzY2FyZDpmdW5jdGlvbihhKXthW3RoaXMuZXhwYW5kb10mJmRlbGV0ZSB0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV19fTt2YXIgTD1uZXcgSyxNPW5ldyBLLE49L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLE89LyhbQS1aXSkvZztmdW5jdGlvbiBQKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoTyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOk4udGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31NLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTS5oYXNEYXRhKGEpfHxMLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe1xyXG5yZXR1cm4gTS5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TS5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBMLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TC5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU0uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTC5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFAoZixkLGVbZF0pKSk7TC5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtNLnNldCh0aGlzLGEpfSk6Sih0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ9bi5jYW1lbENhc2UoYSk7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1NLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1NLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1QKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1NLmdldCh0aGlzLGQpO00uc2V0KHRoaXMsZCxiKSwtMSE9PWEuaW5kZXhPZihcIi1cIikmJnZvaWQgMCE9PWMmJk0uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtNLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1MLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9TC5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTC5nZXQoYSxjKXx8TC5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe0wucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPUwuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFI9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX0sVD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFU9XCJ1bmRlZmluZWRcIjtrLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBWPS9ea2V5LyxXPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFg9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFk9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gWigpe3JldHVybiEwfWZ1bmN0aW9uICQoKXtyZXR1cm4hMX1mdW5jdGlvbiBfKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1VJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuaGFzRGF0YShhKSYmTC5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTC5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWC50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxYLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KEwuZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZMLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KEwuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVcudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vi50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09XygpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1fKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP24uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bi5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/WjokKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDokLGlzUHJvcGFnYXRpb25TdG9wcGVkOiQsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6JCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1aLGEmJmEucHJldmVudERlZmF1bHQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5mb2N1c2luQnViYmxlc3x8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSksITApfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYiktMTtlP0wuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTC5yZW1vdmUoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGc7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1jfHxiLGI9dm9pZCAwKTtmb3IoZyBpbiBhKXRoaXMub24oZyxiLGMsYVtnXSxlKTtyZXR1cm4gdGhpc31pZihudWxsPT1jJiZudWxsPT1kPyhkPWIsYz1iPXZvaWQgMCk6bnVsbD09ZCYmKFwic3RyaW5nXCI9PXR5cGVvZiBiPyhkPWMsYz12b2lkIDApOihkPWMsYz1iLGI9dm9pZCAwKSksZD09PSExKWQ9JDtlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGY9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zi5ndWlkfHwoZi5ndWlkPW4uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9JCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgYWE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGJhPS88KFtcXHc6XSspLyxjYT0vPHwmIz9cXHcrOy8sZGE9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxlYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGZhPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksZ2E9L150cnVlXFwvKC4qKS8saGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLGlhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07aWEub3B0Z3JvdXA9aWEub3B0aW9uLGlhLnRib2R5PWlhLnRmb290PWlhLmNvbGdyb3VwPWlhLmNhcHRpb249aWEudGhlYWQsaWEudGg9aWEudGQ7ZnVuY3Rpb24gamEoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24ga2EoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9Z2EuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIG1hKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKUwuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fEwuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBuYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKEwuaGFzRGF0YShhKSYmKGY9TC5hY2Nlc3MoYSksZz1MLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9TS5oYXNEYXRhKGEpJiYoaD1NLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE0uc2V0KGIsaSkpfX1mdW5jdGlvbiBvYShhLGIpe3ZhciBjPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6YS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIHBhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlQudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfW4uZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPW9hKGgpLGY9b2EoYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylwYShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxvYShhKSxnPWd8fG9hKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspbmEoZltkXSxnW2RdKTtlbHNlIG5hKGEsaCk7cmV0dXJuIGc9b2EoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZtYShnLCFpJiZvYShhLFwic2NyaXB0XCIpKSxofSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZSxmLGcsaCxpLGosaz1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxsPVtdLG09MCxvPWEubGVuZ3RoO28+bTttKyspaWYoZT1hW21dLGV8fDA9PT1lKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZSkpbi5tZXJnZShsLGUubm9kZVR5cGU/W2VdOmUpO2Vsc2UgaWYoY2EudGVzdChlKSl7Zj1mfHxrLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZz0oYmEuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaD1pYVtnXXx8aWEuX2RlZmF1bHQsZi5pbm5lckhUTUw9aFsxXStlLnJlcGxhY2UoYWEsXCI8JDE+PC8kMj5cIikraFsyXSxqPWhbMF07d2hpbGUoai0tKWY9Zi5sYXN0Q2hpbGQ7bi5tZXJnZShsLGYuY2hpbGROb2RlcyksZj1rLmZpcnN0Q2hpbGQsZi50ZXh0Q29udGVudD1cIlwifWVsc2UgbC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZSkpO2sudGV4dENvbnRlbnQ9XCJcIixtPTA7d2hpbGUoZT1sW20rK10paWYoKCFkfHwtMT09PW4uaW5BcnJheShlLGQpKSYmKGk9bi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSksZj1vYShrLmFwcGVuZENoaWxkKGUpLFwic2NyaXB0XCIpLGkmJm1hKGYpLGMpKXtqPTA7d2hpbGUoZT1mW2orK10pZmEudGVzdChlLnR5cGV8fFwiXCIpJiZjLnB1c2goZSl9cmV0dXJuIGt9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGUsZj1uLmV2ZW50LnNwZWNpYWwsZz0wO3ZvaWQgMCE9PShjPWFbZ10pO2crKyl7aWYobi5hY2NlcHREYXRhKGMpJiYoZT1jW0wuZXhwYW5kb10sZSYmKGI9TC5jYWNoZVtlXSkpKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cylmW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO0wuY2FjaGVbZV0mJmRlbGV0ZSBMLmNhY2hlW2VdfWRlbGV0ZSBNLmNhY2hlW2NbTS5leHBhbmRvXV19fX0pLG4uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWphKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP24uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShvYShjKSksYy5wYXJlbnROb2RlJiYoYiYmbi5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm1hKG9hKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShvYShhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZGEudGVzdChhKSYmIWlhWyhiYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGFhLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxuLmNsZWFuRGF0YShvYSh0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbT10aGlzLG89bC0xLHA9YVswXSxxPW4uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZlYS50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGM9bi5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9bi5tYXAob2EoYyxcInNjcmlwdFwiKSxrYSksZz1mLmxlbmd0aDtsPmo7aisrKWg9YyxqIT09byYmKGg9bi5jbG9uZShoLCEwLCEwKSxnJiZuLm1lcmdlKGYsb2EoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7aWYoZylmb3IoaT1mW2YubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoZixsYSksaj0wO2c+ajtqKyspaD1mW2pdLGZhLnRlc3QoaC50eXBlfHxcIlwiKSYmIUwuYWNjZXNzKGgsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGksaCkmJihoLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGguc3JjKTpuLmdsb2JhbEV2YWwoaC50ZXh0Q29udGVudC5yZXBsYWNlKGhhLFwiXCIpKSl9cmV0dXJuIHRoaXN9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZz1lLmxlbmd0aC0xLGg9MDtnPj1oO2grKyljPWg9PT1nP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxmLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBxYSxyYT17fTtmdW5jdGlvbiBzYShiLGMpe3ZhciBkLGU9bihjLmNyZWF0ZUVsZW1lbnQoYikpLmFwcGVuZFRvKGMuYm9keSksZj1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlJiYoZD1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlKGVbMF0pKT9kLmRpc3BsYXk6bi5jc3MoZVswXSxcImRpc3BsYXlcIik7cmV0dXJuIGUuZGV0YWNoKCksZn1mdW5jdGlvbiB0YShhKXt2YXIgYj1sLGM9cmFbYV07cmV0dXJuIGN8fChjPXNhKGEsYiksXCJub25lXCIhPT1jJiZjfHwocWE9KHFhfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9cWFbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1zYShhLGIpLHFhLmRldGFjaCgpKSxyYVthXT1jKSxjfXZhciB1YT0vXm1hcmdpbi8sdmE9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSx3YT1mdW5jdGlvbihiKXtyZXR1cm4gYi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lm9wZW5lcj9iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpOmEuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpfTtmdW5jdGlvbiB4YShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fHdhKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSksYyYmKFwiXCIhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSx2YS50ZXN0KGcpJiZ1YS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIHlhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSFmdW5jdGlvbigpe3ZhciBiLGMsZD1sLmRvY3VtZW50RWxlbWVudCxlPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihmLnN0eWxlKXtmLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixmLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixrLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1mLnN0eWxlLmJhY2tncm91bmRDbGlwLGUuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZS5hcHBlbmRDaGlsZChmKTtmdW5jdGlvbiBnKCl7Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxJTt0b3A6MSU7Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo0cHg7cG9zaXRpb246YWJzb2x1dGVcIixmLmlubmVySFRNTD1cIlwiLGQuYXBwZW5kQ2hpbGQoZSk7dmFyIGc9YS5nZXRDb21wdXRlZFN0eWxlKGYsbnVsbCk7Yj1cIjElXCIhPT1nLnRvcCxjPVwiNHB4XCI9PT1nLndpZHRoLGQucmVtb3ZlQ2hpbGQoZSl9YS5nZXRDb21wdXRlZFN0eWxlJiZuLmV4dGVuZChrLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGcoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZnKCksY30scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9Zi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGYuc3R5bGUud2lkdGg9XCIxcHhcIixkLmFwcGVuZENoaWxkKGUpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMsbnVsbCkubWFyZ2luUmlnaHQpLGQucmVtb3ZlQ2hpbGQoZSksZi5yZW1vdmVDaGlsZChjKSxifX0pfX0oKSxuLnN3YXA9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9O3ZhciB6YT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sQWE9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoLiopJFwiLFwiaVwiKSxCYT1uZXcgUmVnRXhwKFwiXihbKy1dKT0oXCIrUStcIilcIixcImlcIiksQ2E9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LERhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sRWE9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIEZhKGEsYil7aWYoYiBpbiBhKXJldHVybiBiO3ZhciBjPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGQ9YixlPUVhLmxlbmd0aDt3aGlsZShlLS0paWYoYj1FYVtlXStjLGIgaW4gYSlyZXR1cm4gYjtyZXR1cm4gZH1mdW5jdGlvbiBHYShhLGIsYyl7dmFyIGQ9QWEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMV0tKGN8fDApKSsoZFsyXXx8XCJweFwiKTpifWZ1bmN0aW9uIEhhKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytSW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBJYShhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj13YShhKSxnPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9eGEoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSx2YS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGsuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStIYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9ZnVuY3Rpb24gSmEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109TC5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlMoZCkmJihmW2ddPUwuYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsdGEoZC5ub2RlTmFtZSkpKSk6KGU9UyhkKSxcIm5vbmVcIj09PWMmJmV8fEwuc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9eGEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOntjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09RmEoaSxoKSksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9QmEuZXhlYyhjKSkmJihjPShlWzFdKzEpKmVbMl0rcGFyc2VGbG9hdChuLmNzcyhhLGIpKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIiE9PWZ8fG4uY3NzTnVtYmVyW2hdfHwoYys9XCJweFwiKSxrLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPUZhKGEuc3R5bGUsaCkpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9eGEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBEYSYmKGU9RGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxuLmlzTnVtZXJpYyhmKT9mfHwwOmUpOmV9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP3phLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9uLnN3YXAoYSxDYSxmdW5jdGlvbigpe3JldHVybiBJYShhLGIsZCl9KTpJYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWQmJndhKGEpO3JldHVybiBHYShhLGMsZD9IYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKSxlKTowKX19fSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD15YShrLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9uLnN3YXAoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSx4YSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErUltkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSx1YS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1HYSl9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPXdhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1ModGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBLYShhLGIsYyxkLGUpe3JldHVybiBuZXcgS2EucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPUthLEthLnByb3RvdHlwZT17Y29uc3RydWN0b3I6S2EsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8XCJzd2luZ1wiLHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1LYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6S2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9S2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpLYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxLYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9S2EucHJvdG90eXBlLEthLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbnVsbD09YS5lbGVtW2EucHJvcF18fGEuZWxlbS5zdHlsZSYmbnVsbCE9YS5lbGVtLnN0eWxlW2EucHJvcF0/KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKTphLmVsZW1bYS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOmEuZWxlbS5zdHlsZSYmKG51bGwhPWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dfHxuLmNzc0hvb2tzW2EucHJvcF0pP24uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpOmEuZWxlbVthLnByb3BdPWEubm93fX19LEthLnByb3BIb29rcy5zY3JvbGxUb3A9S2EucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfX0sbi5meD1LYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIExhLE1hLE5hPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxPYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitRK1wiKShbYS16JV0qKSRcIixcImlcIiksUGE9L3F1ZXVlSG9va3MkLyxRYT1bVmFdLFJhPXtcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYiksZD1jLmN1cigpLGU9T2EuZXhlYyhiKSxmPWUmJmVbM118fChuLmNzc051bWJlclthXT9cIlwiOlwicHhcIiksZz0obi5jc3NOdW1iZXJbYV18fFwicHhcIiE9PWYmJitkKSYmT2EuZXhlYyhuLmNzcyhjLmVsZW0sYSkpLGg9MSxpPTIwO2lmKGcmJmdbM10hPT1mKXtmPWZ8fGdbM10sZT1lfHxbXSxnPStkfHwxO2RvIGg9aHx8XCIuNVwiLGcvPWgsbi5zdHlsZShjLmVsZW0sYSxnK2YpO3doaWxlKGghPT0oaD1jLmN1cigpL2QpJiYxIT09aCYmLS1pKX1yZXR1cm4gZSYmKGc9Yy5zdGFydD0rZ3x8K2R8fDAsYy51bml0PWYsYy5lbmQ9ZVsxXT9nKyhlWzFdKzEpKmVbMl06K2VbMl0pLGN9XX07ZnVuY3Rpb24gU2EoKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe0xhPXZvaWQgMH0pLExhPW4ubm93KCl9ZnVuY3Rpb24gVGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1SW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFVhKGEsYixjKXtmb3IodmFyIGQsZT0oUmFbYl18fFtdKS5jb25jYXQoUmFbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBWYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZTKGEpLHE9TC5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/TC5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHRhKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxOYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj90YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPUwuYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7TC5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVVhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uIFdhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBYYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1RYS5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1MYXx8U2EoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fX0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOkxhfHxTYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj9oLnJlc29sdmVXaXRoKGEsW2osYl0pOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoV2EoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPVFhW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gZDtyZXR1cm4gbi5tYXAoayxVYSxqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKFhhLHt0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxSYVtjXT1SYVtjXXx8W10sUmFbY10udW5zaGlmdChiKX0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9RYS51bnNoaWZ0KGEpOlFhLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PWQucXVldWV8fGQucXVldWU9PT0hMCkmJihkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoUykuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9WGEodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8TC5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9TC5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmUGEudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTsoYnx8IWMpJiZuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPUwuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoVGEoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlRhKFwic2hvd1wiKSxzbGlkZVVwOlRhKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpUYShcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoTGE9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxMYT12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtNYXx8KE1hPXNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoTWEpLE1hPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1uLmZ4P24uZnguc3BlZWRzW2FdfHxhOmEsYj1ifHxcImZ4XCIsdGhpcy5xdWV1ZShiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9c2V0VGltZW91dChiLGEpO2Muc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChkKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWwuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGsuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxrLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxrLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGsucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIFlhLFphLCRhPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKGEmJjMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIHR5cGVvZiBhLmdldEF0dHJpYnV0ZT09PVU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxkPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9aYTpZYSkpLFxyXG52b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChFKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksWmE9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9JGFbYl18fG4uZmluZC5hdHRyOyRhW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj0kYVtiXSwkYVtiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsJGFbYl09ZiksZX19KTt2YXIgX2E9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8X2EudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBhYj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09VXx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZMLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6TC5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYmI9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIGNiPW4ubm93KCksZGI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIGViPS8jLiokLyxmYj0vKFs/Jl0pXz1bXiZdKi8sZ2I9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxoYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxpYj0vXig/OkdFVHxIRUFEKSQvLGpiPS9eXFwvXFwvLyxrYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxsYj17fSxtYj17fSxuYj1cIiovXCIuY29uY2F0KFwiKlwiKSxvYj1hLmxvY2F0aW9uLmhyZWYscGI9a2IuZXhlYyhvYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gcmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09bWI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBzYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gdGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gdWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6b2IsdHlwZTpcIkdFVFwiLGlzTG9jYWw6aGIudGVzdChwYlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6bmIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9zYihzYihhLG4uYWpheFNldHRpbmdzKSxiKTpzYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpxYihsYiksYWpheFRyYW5zcG9ydDpxYihtYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1nYi5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxvYikrXCJcIikucmVwbGFjZShlYixcIlwiKS5yZXBsYWNlKGpiLHBiWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9a2IuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT1wYlsxXSYmaFsyXT09PXBiWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShwYlszXXx8KFwiaHR0cDpcIj09PXBiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLHJiKGxiLGssYix2KSwyPT09dClyZXR1cm4gdjtpPW4uZXZlbnQmJmsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0haWIudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KGRiLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1mYi50ZXN0KGQpP2QucmVwbGFjZShmYixcIiQxXz1cIitjYisrKTpkKyhkYi50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIrY2IrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK25iK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPXJiKG1iLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT10YihrLHYsZikpLHU9dWIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX06ZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciB2Yj0vJTIwL2csd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx3Yi50ZXN0KGEpP2QoYSxlKTpBYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUFiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlBYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKHZiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ6Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYheWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVQudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBCYj0wLENiPXt9LERiPXswOjIwMCwxMjIzOjIwNH0sRWI9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gQ2IpQ2JbYV0oKX0pLGsuY29ycz0hIUViJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gRWIsay5hamF4PUViPSEhRWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fEViJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrQmI7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgQ2JbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKERiW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9Q2JbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgRmI9W10sR2I9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1GYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2NiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEdiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZHYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEdiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGRiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxGYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD12LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBIYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmSGIpcmV0dXJuIEhiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O3ZhciBJYj1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtmdW5jdGlvbiBKYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxoKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyh0eXBlb2YgZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1VJiYoZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPUpiKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxJYjt3aGlsZShhJiYhbi5ub2RlTmFtZShhLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxJYn0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYixjKXt2YXIgZD1cInBhZ2VZT2Zmc2V0XCI9PT1jO24uZm5bYl09ZnVuY3Rpb24oZSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGUsZil7dmFyIGc9SmIoYik7cmV0dXJuIHZvaWQgMD09PWY/Zz9nW2NdOmJbZV06dm9pZChnP2cuc2Nyb2xsVG8oZD9hLnBhZ2VYT2Zmc2V0OmYsZD9mOmEucGFnZVlPZmZzZXQpOmJbZV09Zil9LGIsZSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXlhKGsucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPXhhKGEsYiksdmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgS2I9YS5qUXVlcnksTGI9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TGIpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PUtiKSxufSx0eXBlb2YgYj09PVUmJihhLmpRdWVyeT1hLiQ9biksbn0pO1xyXG4vKiFcclxuIERhdGFUYWJsZXMgMS4xMC4xNVxyXG4gwqkyMDA4LTIwMTcgU3ByeU1lZGlhIEx0ZCAtIGRhdGF0YWJsZXMubmV0L2xpY2Vuc2VcclxuICovXHJcbihmdW5jdGlvbihoKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oRSl7cmV0dXJuIGgoRSx3aW5kb3csZG9jdW1lbnQpfSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKEUsSCl7RXx8KEU9d2luZG93KTtIfHwoSD1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdz9yZXF1aXJlKFwianF1ZXJ5XCIpOnJlcXVpcmUoXCJqcXVlcnlcIikoRSkpO3JldHVybiBoKEgsRSxFLmRvY3VtZW50KX06aChqUXVlcnksd2luZG93LGRvY3VtZW50KX0pKGZ1bmN0aW9uKGgsRSxILGspe2Z1bmN0aW9uIFkoYSl7dmFyIGIsYyxkPXt9O2guZWFjaChhLGZ1bmN0aW9uKGUpe2lmKChiPWUubWF0Y2goL14oW15BLVpdKz8pKFtBLVpdKS8pKSYmLTEhPT1cImEgYWEgYWkgYW8gYXMgYiBmbiBpIG0gbyBzIFwiLmluZGV4T2YoYlsxXStcIiBcIikpYz1lLnJlcGxhY2UoYlswXSxiWzJdLnRvTG93ZXJDYXNlKCkpLFxyXG4gICAgZFtjXT1lLFwib1wiPT09YlsxXSYmWShhW2VdKX0pO2EuX2h1bmdhcmlhbk1hcD1kfWZ1bmN0aW9uIEooYSxiLGMpe2EuX2h1bmdhcmlhbk1hcHx8WShhKTt2YXIgZDtoLmVhY2goYixmdW5jdGlvbihlKXtkPWEuX2h1bmdhcmlhbk1hcFtlXTtpZihkIT09ayYmKGN8fGJbZF09PT1rKSlcIm9cIj09PWQuY2hhckF0KDApPyhiW2RdfHwoYltkXT17fSksaC5leHRlbmQoITAsYltkXSxiW2VdKSxKKGFbZF0sYltkXSxjKSk6YltkXT1iW2VdfSl9ZnVuY3Rpb24gRmEoYSl7dmFyIGI9bS5kZWZhdWx0cy5vTGFuZ3VhZ2UsYz1hLnNaZXJvUmVjb3JkczshYS5zRW1wdHlUYWJsZSYmKGMmJlwiTm8gZGF0YSBhdmFpbGFibGUgaW4gdGFibGVcIj09PWIuc0VtcHR5VGFibGUpJiZGKGEsYSxcInNaZXJvUmVjb3Jkc1wiLFwic0VtcHR5VGFibGVcIik7IWEuc0xvYWRpbmdSZWNvcmRzJiYoYyYmXCJMb2FkaW5nLi4uXCI9PT1iLnNMb2FkaW5nUmVjb3JkcykmJkYoYSxhLFwic1plcm9SZWNvcmRzXCIsXCJzTG9hZGluZ1JlY29yZHNcIik7XHJcbiAgICBhLnNJbmZvVGhvdXNhbmRzJiYoYS5zVGhvdXNhbmRzPWEuc0luZm9UaG91c2FuZHMpOyhhPWEuc0RlY2ltYWwpJiZmYihhKX1mdW5jdGlvbiBnYihhKXtBKGEsXCJvcmRlcmluZ1wiLFwiYlNvcnRcIik7QShhLFwib3JkZXJNdWx0aVwiLFwiYlNvcnRNdWx0aVwiKTtBKGEsXCJvcmRlckNsYXNzZXNcIixcImJTb3J0Q2xhc3Nlc1wiKTtBKGEsXCJvcmRlckNlbGxzVG9wXCIsXCJiU29ydENlbGxzVG9wXCIpO0EoYSxcIm9yZGVyXCIsXCJhYVNvcnRpbmdcIik7QShhLFwib3JkZXJGaXhlZFwiLFwiYWFTb3J0aW5nRml4ZWRcIik7QShhLFwicGFnaW5nXCIsXCJiUGFnaW5hdGVcIik7QShhLFwicGFnaW5nVHlwZVwiLFwic1BhZ2luYXRpb25UeXBlXCIpO0EoYSxcInBhZ2VMZW5ndGhcIixcImlEaXNwbGF5TGVuZ3RoXCIpO0EoYSxcInNlYXJjaGluZ1wiLFwiYkZpbHRlclwiKTtcImJvb2xlYW5cIj09PXR5cGVvZiBhLnNTY3JvbGxYJiYoYS5zU2Nyb2xsWD1hLnNTY3JvbGxYP1wiMTAwJVwiOlwiXCIpO1wiYm9vbGVhblwiPT09dHlwZW9mIGEuc2Nyb2xsWCYmKGEuc2Nyb2xsWD1cclxuICAgIGEuc2Nyb2xsWD9cIjEwMCVcIjpcIlwiKTtpZihhPWEuYW9TZWFyY2hDb2xzKWZvcih2YXIgYj0wLGM9YS5sZW5ndGg7YjxjO2IrKylhW2JdJiZKKG0ubW9kZWxzLm9TZWFyY2gsYVtiXSl9ZnVuY3Rpb24gaGIoYSl7QShhLFwib3JkZXJhYmxlXCIsXCJiU29ydGFibGVcIik7QShhLFwib3JkZXJEYXRhXCIsXCJhRGF0YVNvcnRcIik7QShhLFwib3JkZXJTZXF1ZW5jZVwiLFwiYXNTb3J0aW5nXCIpO0EoYSxcIm9yZGVyRGF0YVR5cGVcIixcInNvcnREYXRhVHlwZVwiKTt2YXIgYj1hLmFEYXRhU29ydDtcIm51bWJlclwiPT09dHlwZW9mIGImJiFoLmlzQXJyYXkoYikmJihhLmFEYXRhU29ydD1bYl0pfWZ1bmN0aW9uIGliKGEpe2lmKCFtLl9fYnJvd3Nlcil7dmFyIGI9e307bS5fX2Jyb3dzZXI9Yjt2YXIgYz1oKFwiPGRpdi8+XCIpLmNzcyh7cG9zaXRpb246XCJmaXhlZFwiLHRvcDowLGxlZnQ6LTEqaChFKS5zY3JvbGxMZWZ0KCksaGVpZ2h0OjEsd2lkdGg6MSxvdmVyZmxvdzpcImhpZGRlblwifSkuYXBwZW5kKGgoXCI8ZGl2Lz5cIikuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcbiAgICB0b3A6MSxsZWZ0OjEsd2lkdGg6MTAwLG92ZXJmbG93Olwic2Nyb2xsXCJ9KS5hcHBlbmQoaChcIjxkaXYvPlwiKS5jc3Moe3dpZHRoOlwiMTAwJVwiLGhlaWdodDoxMH0pKSkuYXBwZW5kVG8oXCJib2R5XCIpLGQ9Yy5jaGlsZHJlbigpLGU9ZC5jaGlsZHJlbigpO2IuYmFyV2lkdGg9ZFswXS5vZmZzZXRXaWR0aC1kWzBdLmNsaWVudFdpZHRoO2IuYlNjcm9sbE92ZXJzaXplPTEwMD09PWVbMF0ub2Zmc2V0V2lkdGgmJjEwMCE9PWRbMF0uY2xpZW50V2lkdGg7Yi5iU2Nyb2xsYmFyTGVmdD0xIT09TWF0aC5yb3VuZChlLm9mZnNldCgpLmxlZnQpO2IuYkJvdW5kaW5nPWNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/ITA6ITE7Yy5yZW1vdmUoKX1oLmV4dGVuZChhLm9Ccm93c2VyLG0uX19icm93c2VyKTthLm9TY3JvbGwuaUJhcldpZHRoPW0uX19icm93c2VyLmJhcldpZHRofWZ1bmN0aW9uIGpiKGEsYixjLGQsZSxmKXt2YXIgZyxqPSExO2MhPT1rJiYoZz1jLGo9ITApO2Zvcig7ZCE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOylhLmhhc093blByb3BlcnR5KGQpJiYoZz1qP2IoZyxhW2RdLGQsYSk6YVtkXSxqPSEwLGQrPWYpO3JldHVybiBnfWZ1bmN0aW9uIEdhKGEsYil7dmFyIGM9bS5kZWZhdWx0cy5jb2x1bW4sZD1hLmFvQ29sdW1ucy5sZW5ndGgsYz1oLmV4dGVuZCh7fSxtLm1vZGVscy5vQ29sdW1uLGMse25UaDpiP2I6SC5jcmVhdGVFbGVtZW50KFwidGhcIiksc1RpdGxlOmMuc1RpdGxlP2Muc1RpdGxlOmI/Yi5pbm5lckhUTUw6XCJcIixhRGF0YVNvcnQ6Yy5hRGF0YVNvcnQ/Yy5hRGF0YVNvcnQ6W2RdLG1EYXRhOmMubURhdGE/Yy5tRGF0YTpkLGlkeDpkfSk7YS5hb0NvbHVtbnMucHVzaChjKTtjPWEuYW9QcmVTZWFyY2hDb2xzO2NbZF09aC5leHRlbmQoe30sbS5tb2RlbHMub1NlYXJjaCxjW2RdKTtsYShhLGQsaChiKS5kYXRhKCkpfWZ1bmN0aW9uIGxhKGEsYixjKXt2YXIgYj1hLmFvQ29sdW1uc1tiXSxkPWEub0NsYXNzZXMsZT1oKGIublRoKTtpZighYi5zV2lkdGhPcmlnKXtiLnNXaWR0aE9yaWc9XHJcbiAgICBlLmF0dHIoXCJ3aWR0aFwiKXx8bnVsbDt2YXIgZj0oZS5hdHRyKFwic3R5bGVcIil8fFwiXCIpLm1hdGNoKC93aWR0aDpcXHMqKFxcZCtbcHhlbSVdKykvKTtmJiYoYi5zV2lkdGhPcmlnPWZbMV0pfWMhPT1rJiZudWxsIT09YyYmKGhiKGMpLEoobS5kZWZhdWx0cy5jb2x1bW4sYyksYy5tRGF0YVByb3AhPT1rJiYhYy5tRGF0YSYmKGMubURhdGE9Yy5tRGF0YVByb3ApLGMuc1R5cGUmJihiLl9zTWFudWFsVHlwZT1jLnNUeXBlKSxjLmNsYXNzTmFtZSYmIWMuc0NsYXNzJiYoYy5zQ2xhc3M9Yy5jbGFzc05hbWUpLGguZXh0ZW5kKGIsYyksRihiLGMsXCJzV2lkdGhcIixcInNXaWR0aE9yaWdcIiksYy5pRGF0YVNvcnQhPT1rJiYoYi5hRGF0YVNvcnQ9W2MuaURhdGFTb3J0XSksRihiLGMsXCJhRGF0YVNvcnRcIikpO3ZhciBnPWIubURhdGEsaj1SKGcpLGk9Yi5tUmVuZGVyP1IoYi5tUmVuZGVyKTpudWxsLGM9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhJiYtMSE9PWEuaW5kZXhPZihcIkBcIil9O1xyXG4gICAgYi5fYkF0dHJTcmM9aC5pc1BsYWluT2JqZWN0KGcpJiYoYyhnLnNvcnQpfHxjKGcudHlwZSl8fGMoZy5maWx0ZXIpKTtiLl9zZXR0ZXI9bnVsbDtiLmZuR2V0RGF0YT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9aihhLGIsayxjKTtyZXR1cm4gaSYmYj9pKGQsYixhLGMpOmR9O2IuZm5TZXREYXRhPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUyhnKShhLGIsYyl9O1wibnVtYmVyXCIhPT10eXBlb2YgZyYmKGEuX3Jvd1JlYWRPYmplY3Q9ITApO2Eub0ZlYXR1cmVzLmJTb3J0fHwoYi5iU29ydGFibGU9ITEsZS5hZGRDbGFzcyhkLnNTb3J0YWJsZU5vbmUpKTthPS0xIT09aC5pbkFycmF5KFwiYXNjXCIsYi5hc1NvcnRpbmcpO2M9LTEhPT1oLmluQXJyYXkoXCJkZXNjXCIsYi5hc1NvcnRpbmcpOyFiLmJTb3J0YWJsZXx8IWEmJiFjPyhiLnNTb3J0aW5nQ2xhc3M9ZC5zU29ydGFibGVOb25lLGIuc1NvcnRpbmdDbGFzc0pVST1cIlwiKTphJiYhYz8oYi5zU29ydGluZ0NsYXNzPWQuc1NvcnRhYmxlQXNjLGIuc1NvcnRpbmdDbGFzc0pVST1cclxuICAgICAgICAgICAgICAgIGQuc1NvcnRKVUlBc2NBbGxvd2VkKTohYSYmYz8oYi5zU29ydGluZ0NsYXNzPWQuc1NvcnRhYmxlRGVzYyxiLnNTb3J0aW5nQ2xhc3NKVUk9ZC5zU29ydEpVSURlc2NBbGxvd2VkKTooYi5zU29ydGluZ0NsYXNzPWQuc1NvcnRhYmxlLGIuc1NvcnRpbmdDbGFzc0pVST1kLnNTb3J0SlVJKX1mdW5jdGlvbiBaKGEpe2lmKCExIT09YS5vRmVhdHVyZXMuYkF1dG9XaWR0aCl7dmFyIGI9YS5hb0NvbHVtbnM7SGEoYSk7Zm9yKHZhciBjPTAsZD1iLmxlbmd0aDtjPGQ7YysrKWJbY10ublRoLnN0eWxlLndpZHRoPWJbY10uc1dpZHRofWI9YS5vU2Nyb2xsOyhcIlwiIT09Yi5zWXx8XCJcIiE9PWIuc1gpJiZtYShhKTtzKGEsbnVsbCxcImNvbHVtbi1zaXppbmdcIixbYV0pfWZ1bmN0aW9uICQoYSxiKXt2YXIgYz1uYShhLFwiYlZpc2libGVcIik7cmV0dXJuXCJudW1iZXJcIj09PXR5cGVvZiBjW2JdP2NbYl06bnVsbH1mdW5jdGlvbiBhYShhLGIpe3ZhciBjPW5hKGEsXCJiVmlzaWJsZVwiKSxjPWguaW5BcnJheShiLFxyXG4gICAgYyk7cmV0dXJuLTEhPT1jP2M6bnVsbH1mdW5jdGlvbiBiYShhKXt2YXIgYj0wO2guZWFjaChhLmFvQ29sdW1ucyxmdW5jdGlvbihhLGQpe2QuYlZpc2libGUmJlwibm9uZVwiIT09aChkLm5UaCkuY3NzKFwiZGlzcGxheVwiKSYmYisrfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYz1bXTtoLm1hcChhLmFvQ29sdW1ucyxmdW5jdGlvbihhLGUpe2FbYl0mJmMucHVzaChlKX0pO3JldHVybiBjfWZ1bmN0aW9uIElhKGEpe3ZhciBiPWEuYW9Db2x1bW5zLGM9YS5hb0RhdGEsZD1tLmV4dC50eXBlLmRldGVjdCxlLGYsZyxqLGksaCxsLHEscjtlPTA7Zm9yKGY9Yi5sZW5ndGg7ZTxmO2UrKylpZihsPWJbZV0scj1bXSwhbC5zVHlwZSYmbC5fc01hbnVhbFR5cGUpbC5zVHlwZT1sLl9zTWFudWFsVHlwZTtlbHNlIGlmKCFsLnNUeXBlKXtnPTA7Zm9yKGo9ZC5sZW5ndGg7ZzxqO2crKyl7aT0wO2ZvcihoPWMubGVuZ3RoO2k8aDtpKyspe3JbaV09PT1rJiYocltpXT1CKGEsaSxlLFwidHlwZVwiKSk7XHJcbiAgICBxPWRbZ10ocltpXSxhKTtpZighcSYmZyE9PWQubGVuZ3RoLTEpYnJlYWs7aWYoXCJodG1sXCI9PT1xKWJyZWFrfWlmKHEpe2wuc1R5cGU9cTticmVha319bC5zVHlwZXx8KGwuc1R5cGU9XCJzdHJpbmdcIil9fWZ1bmN0aW9uIGtiKGEsYixjLGQpe3ZhciBlLGYsZyxqLGksbixsPWEuYW9Db2x1bW5zO2lmKGIpZm9yKGU9Yi5sZW5ndGgtMTswPD1lO2UtLSl7bj1iW2VdO3ZhciBxPW4udGFyZ2V0cyE9PWs/bi50YXJnZXRzOm4uYVRhcmdldHM7aC5pc0FycmF5KHEpfHwocT1bcV0pO2Y9MDtmb3IoZz1xLmxlbmd0aDtmPGc7ZisrKWlmKFwibnVtYmVyXCI9PT10eXBlb2YgcVtmXSYmMDw9cVtmXSl7Zm9yKDtsLmxlbmd0aDw9cVtmXTspR2EoYSk7ZChxW2ZdLG4pfWVsc2UgaWYoXCJudW1iZXJcIj09PXR5cGVvZiBxW2ZdJiYwPnFbZl0pZChsLmxlbmd0aCtxW2ZdLG4pO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBxW2ZdKXtqPTA7Zm9yKGk9bC5sZW5ndGg7ajxpO2orKykoXCJfYWxsXCI9PXFbZl18fGgobFtqXS5uVGgpLmhhc0NsYXNzKHFbZl0pKSYmXHJcbmQoaixuKX19aWYoYyl7ZT0wO2ZvcihhPWMubGVuZ3RoO2U8YTtlKyspZChlLGNbZV0pfX1mdW5jdGlvbiBOKGEsYixjLGQpe3ZhciBlPWEuYW9EYXRhLmxlbmd0aCxmPWguZXh0ZW5kKCEwLHt9LG0ubW9kZWxzLm9Sb3cse3NyYzpjP1wiZG9tXCI6XCJkYXRhXCIsaWR4OmV9KTtmLl9hRGF0YT1iO2EuYW9EYXRhLnB1c2goZik7Zm9yKHZhciBnPWEuYW9Db2x1bW5zLGo9MCxpPWcubGVuZ3RoO2o8aTtqKyspZ1tqXS5zVHlwZT1udWxsO2EuYWlEaXNwbGF5TWFzdGVyLnB1c2goZSk7Yj1hLnJvd0lkRm4oYik7YiE9PWsmJihhLmFJZHNbYl09Zik7KGN8fCFhLm9GZWF0dXJlcy5iRGVmZXJSZW5kZXIpJiZKYShhLGUsYyxkKTtyZXR1cm4gZX1mdW5jdGlvbiBvYShhLGIpe3ZhciBjO2IgaW5zdGFuY2VvZiBofHwoYj1oKGIpKTtyZXR1cm4gYi5tYXAoZnVuY3Rpb24oYixlKXtjPUthKGEsZSk7cmV0dXJuIE4oYSxjLmRhdGEsZSxjLmNlbGxzKX0pfWZ1bmN0aW9uIEIoYSxiLGMsZCl7dmFyIGU9YS5pRHJhdyxcclxuICAgIGY9YS5hb0NvbHVtbnNbY10sZz1hLmFvRGF0YVtiXS5fYURhdGEsaj1mLnNEZWZhdWx0Q29udGVudCxpPWYuZm5HZXREYXRhKGcsZCx7c2V0dGluZ3M6YSxyb3c6Yixjb2w6Y30pO2lmKGk9PT1rKXJldHVybiBhLmlEcmF3RXJyb3IhPWUmJm51bGw9PT1qJiYoSyhhLDAsXCJSZXF1ZXN0ZWQgdW5rbm93biBwYXJhbWV0ZXIgXCIrKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYubURhdGE/XCJ7ZnVuY3Rpb259XCI6XCInXCIrZi5tRGF0YStcIidcIikrXCIgZm9yIHJvdyBcIitiK1wiLCBjb2x1bW4gXCIrYyw0KSxhLmlEcmF3RXJyb3I9ZSksajtpZigoaT09PWd8fG51bGw9PT1pKSYmbnVsbCE9PWomJmQhPT1rKWk9ajtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBpKXJldHVybiBpLmNhbGwoZyk7cmV0dXJuIG51bGw9PT1pJiZcImRpc3BsYXlcIj09ZD9cIlwiOml9ZnVuY3Rpb24gbGIoYSxiLGMsZCl7YS5hb0NvbHVtbnNbY10uZm5TZXREYXRhKGEuYW9EYXRhW2JdLl9hRGF0YSxkLHtzZXR0aW5nczphLHJvdzpiLGNvbDpjfSl9XHJcbiAgICBmdW5jdGlvbiBMYShhKXtyZXR1cm4gaC5tYXAoYS5tYXRjaCgvKFxcXFwufFteXFwuXSkrL2cpfHxbXCJcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxcXFxcLi9nLFwiLlwiKX0pfWZ1bmN0aW9uIFIoYSl7aWYoaC5pc1BsYWluT2JqZWN0KGEpKXt2YXIgYj17fTtoLmVhY2goYSxmdW5jdGlvbihhLGMpe2MmJihiW2FdPVIoYykpfSk7cmV0dXJuIGZ1bmN0aW9uKGEsYyxmLGcpe3ZhciBqPWJbY118fGIuXztyZXR1cm4gaiE9PWs/aihhLGMsZixnKTphfX1pZihudWxsPT09YSlyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBmdW5jdGlvbihiLGMsZixnKXtyZXR1cm4gYShiLGMsZixnKX07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoLTEhPT1hLmluZGV4T2YoXCIuXCIpfHwtMSE9PWEuaW5kZXhPZihcIltcIil8fC0xIT09YS5pbmRleE9mKFwiKFwiKSkpe3ZhciBjPWZ1bmN0aW9uKGEsYixmKXt2YXIgZyxqO2lmKFwiXCIhPT1mKXtqPUxhKGYpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wLG49ai5sZW5ndGg7aTxuO2krKyl7Zj1qW2ldLm1hdGNoKGNhKTtnPWpbaV0ubWF0Y2goVik7aWYoZil7altpXT1qW2ldLnJlcGxhY2UoY2EsXCJcIik7XCJcIiE9PWpbaV0mJihhPWFbaltpXV0pO2c9W107ai5zcGxpY2UoMCxpKzEpO2o9ai5qb2luKFwiLlwiKTtpZihoLmlzQXJyYXkoYSkpe2k9MDtmb3Iobj1hLmxlbmd0aDtpPG47aSsrKWcucHVzaChjKGFbaV0sYixqKSl9YT1mWzBdLnN1YnN0cmluZygxLGZbMF0ubGVuZ3RoLTEpO2E9XCJcIj09PWE/ZzpnLmpvaW4oYSk7YnJlYWt9ZWxzZSBpZihnKXtqW2ldPWpbaV0ucmVwbGFjZShWLFwiXCIpO2E9YVtqW2ldXSgpO2NvbnRpbnVlfWlmKG51bGw9PT1hfHxhW2pbaV1dPT09aylyZXR1cm4gazthPWFbaltpXV19fXJldHVybiBhfTtyZXR1cm4gZnVuY3Rpb24oYixlKXtyZXR1cm4gYyhiLGUsYSl9fXJldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYlthXX19ZnVuY3Rpb24gUyhhKXtpZihoLmlzUGxhaW5PYmplY3QoYSkpcmV0dXJuIFMoYS5fKTtcclxuICAgICAgICBpZihudWxsPT09YSlyZXR1cm4gZnVuY3Rpb24oKXt9O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBmdW5jdGlvbihiLGQsZSl7YShiLFwic2V0XCIsZCxlKX07aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoLTEhPT1hLmluZGV4T2YoXCIuXCIpfHwtMSE9PWEuaW5kZXhPZihcIltcIil8fC0xIT09YS5pbmRleE9mKFwiKFwiKSkpe3ZhciBiPWZ1bmN0aW9uKGEsZCxlKXt2YXIgZT1MYShlKSxmO2Y9ZVtlLmxlbmd0aC0xXTtmb3IodmFyIGcsaixpPTAsbj1lLmxlbmd0aC0xO2k8bjtpKyspe2c9ZVtpXS5tYXRjaChjYSk7aj1lW2ldLm1hdGNoKFYpO2lmKGcpe2VbaV09ZVtpXS5yZXBsYWNlKGNhLFwiXCIpO2FbZVtpXV09W107Zj1lLnNsaWNlKCk7Zi5zcGxpY2UoMCxpKzEpO2c9Zi5qb2luKFwiLlwiKTtpZihoLmlzQXJyYXkoZCkpe2o9MDtmb3Iobj1kLmxlbmd0aDtqPG47aisrKWY9e30sYihmLGRbal0sZyksYVtlW2ldXS5wdXNoKGYpfWVsc2UgYVtlW2ldXT1kO3JldHVybn1qJiYoZVtpXT1lW2ldLnJlcGxhY2UoVixcclxuICAgICAgICAgICAgXCJcIiksYT1hW2VbaV1dKGQpKTtpZihudWxsPT09YVtlW2ldXXx8YVtlW2ldXT09PWspYVtlW2ldXT17fTthPWFbZVtpXV19aWYoZi5tYXRjaChWKSlhW2YucmVwbGFjZShWLFwiXCIpXShkKTtlbHNlIGFbZi5yZXBsYWNlKGNhLFwiXCIpXT1kfTtyZXR1cm4gZnVuY3Rpb24oYyxkKXtyZXR1cm4gYihjLGQsYSl9fXJldHVybiBmdW5jdGlvbihiLGQpe2JbYV09ZH19ZnVuY3Rpb24gTWEoYSl7cmV0dXJuIEQoYS5hb0RhdGEsXCJfYURhdGFcIil9ZnVuY3Rpb24gcGEoYSl7YS5hb0RhdGEubGVuZ3RoPTA7YS5haURpc3BsYXlNYXN0ZXIubGVuZ3RoPTA7YS5haURpc3BsYXkubGVuZ3RoPTA7YS5hSWRzPXt9fWZ1bmN0aW9uIHFhKGEsYixjKXtmb3IodmFyIGQ9LTEsZT0wLGY9YS5sZW5ndGg7ZTxmO2UrKylhW2VdPT1iP2Q9ZTphW2VdPmImJmFbZV0tLTsgLTEhPWQmJmM9PT1rJiZhLnNwbGljZShkLDEpfWZ1bmN0aW9uIGRhKGEsYixjLGQpe3ZhciBlPWEuYW9EYXRhW2JdLGYsZz1mdW5jdGlvbihjLGQpe2Zvcig7Yy5jaGlsZE5vZGVzLmxlbmd0aDspYy5yZW1vdmVDaGlsZChjLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIGMuaW5uZXJIVE1MPUIoYSxiLGQsXCJkaXNwbGF5XCIpfTtpZihcImRvbVwiPT09Y3x8KCFjfHxcImF1dG9cIj09PWMpJiZcImRvbVwiPT09ZS5zcmMpZS5fYURhdGE9S2EoYSxlLGQsZD09PWs/azplLl9hRGF0YSkuZGF0YTtlbHNle3ZhciBqPWUuYW5DZWxscztpZihqKWlmKGQhPT1rKWcoaltkXSxkKTtlbHNle2M9MDtmb3IoZj1qLmxlbmd0aDtjPGY7YysrKWcoaltjXSxjKX19ZS5fYVNvcnREYXRhPW51bGw7ZS5fYUZpbHRlckRhdGE9bnVsbDtnPWEuYW9Db2x1bW5zO2lmKGQhPT1rKWdbZF0uc1R5cGU9bnVsbDtlbHNle2M9MDtmb3IoZj1nLmxlbmd0aDtjPGY7YysrKWdbY10uc1R5cGU9bnVsbDtOYShhLGUpfX1mdW5jdGlvbiBLYShhLGIsYyxkKXt2YXIgZT1bXSxmPWIuZmlyc3RDaGlsZCxnLGosaT0wLG4sbD1hLmFvQ29sdW1ucyxxPWEuX3Jvd1JlYWRPYmplY3QsZD1kIT09az9kOnE/e306W10scj1mdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSl7dmFyIGM9YS5pbmRleE9mKFwiQFwiKTtcclxuICAgICAgICAtMSE9PWMmJihjPWEuc3Vic3RyaW5nKGMrMSksUyhhKShkLGIuZ2V0QXR0cmlidXRlKGMpKSl9fSxtPWZ1bmN0aW9uKGEpe2lmKGM9PT1rfHxjPT09aSlqPWxbaV0sbj1oLnRyaW0oYS5pbm5lckhUTUwpLGomJmouX2JBdHRyU3JjPyhTKGoubURhdGEuXykoZCxuKSxyKGoubURhdGEuc29ydCxhKSxyKGoubURhdGEudHlwZSxhKSxyKGoubURhdGEuZmlsdGVyLGEpKTpxPyhqLl9zZXR0ZXJ8fChqLl9zZXR0ZXI9UyhqLm1EYXRhKSksai5fc2V0dGVyKGQsbikpOmRbaV09bjtpKyt9O2lmKGYpZm9yKDtmOyl7Zz1mLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7aWYoXCJURFwiPT1nfHxcIlRIXCI9PWcpbShmKSxlLnB1c2goZik7Zj1mLm5leHRTaWJsaW5nfWVsc2V7ZT1iLmFuQ2VsbHM7Zj0wO2ZvcihnPWUubGVuZ3RoO2Y8ZztmKyspbShlW2ZdKX1pZihiPWIuZmlyc3RDaGlsZD9iOmIublRyKShiPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpJiZTKGEucm93SWQpKGQsYik7cmV0dXJue2RhdGE6ZCxjZWxsczplfX1cclxuICAgIGZ1bmN0aW9uIEphKGEsYixjLGQpe3ZhciBlPWEuYW9EYXRhW2JdLGY9ZS5fYURhdGEsZz1bXSxqLGksbixsLHE7aWYobnVsbD09PWUublRyKXtqPWN8fEguY3JlYXRlRWxlbWVudChcInRyXCIpO2UublRyPWo7ZS5hbkNlbGxzPWc7ai5fRFRfUm93SW5kZXg9YjtOYShhLGUpO2w9MDtmb3IocT1hLmFvQ29sdW1ucy5sZW5ndGg7bDxxO2wrKyl7bj1hLmFvQ29sdW1uc1tsXTtpPWM/ZFtsXTpILmNyZWF0ZUVsZW1lbnQobi5zQ2VsbFR5cGUpO2kuX0RUX0NlbGxJbmRleD17cm93OmIsY29sdW1uOmx9O2cucHVzaChpKTtpZigoIWN8fG4ubVJlbmRlcnx8bi5tRGF0YSE9PWwpJiYoIWguaXNQbGFpbk9iamVjdChuLm1EYXRhKXx8bi5tRGF0YS5fIT09bCtcIi5kaXNwbGF5XCIpKWkuaW5uZXJIVE1MPUIoYSxiLGwsXCJkaXNwbGF5XCIpO24uc0NsYXNzJiYoaS5jbGFzc05hbWUrPVwiIFwiK24uc0NsYXNzKTtuLmJWaXNpYmxlJiYhYz9qLmFwcGVuZENoaWxkKGkpOiFuLmJWaXNpYmxlJiZjJiZpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSk7XHJcbiAgICAgICAgbi5mbkNyZWF0ZWRDZWxsJiZuLmZuQ3JlYXRlZENlbGwuY2FsbChhLm9JbnN0YW5jZSxpLEIoYSxiLGwpLGYsYixsKX1zKGEsXCJhb1Jvd0NyZWF0ZWRDYWxsYmFja1wiLG51bGwsW2osZixiXSl9ZS5uVHIuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwicm93XCIpfWZ1bmN0aW9uIE5hKGEsYil7dmFyIGM9Yi5uVHIsZD1iLl9hRGF0YTtpZihjKXt2YXIgZT1hLnJvd0lkRm4oZCk7ZSYmKGMuaWQ9ZSk7ZC5EVF9Sb3dDbGFzcyYmKGU9ZC5EVF9Sb3dDbGFzcy5zcGxpdChcIiBcIiksYi5fX3Jvd2M9Yi5fX3Jvd2M/c2EoYi5fX3Jvd2MuY29uY2F0KGUpKTplLGgoYykucmVtb3ZlQ2xhc3MoYi5fX3Jvd2Muam9pbihcIiBcIikpLmFkZENsYXNzKGQuRFRfUm93Q2xhc3MpKTtkLkRUX1Jvd0F0dHImJmgoYykuYXR0cihkLkRUX1Jvd0F0dHIpO2QuRFRfUm93RGF0YSYmaChjKS5kYXRhKGQuRFRfUm93RGF0YSl9fWZ1bmN0aW9uIG1iKGEpe3ZhciBiLGMsZCxlLGYsZz1hLm5USGVhZCxqPWEublRGb290LGk9MD09PVxyXG4gICAgICAgIGgoXCJ0aCwgdGRcIixnKS5sZW5ndGgsbj1hLm9DbGFzc2VzLGw9YS5hb0NvbHVtbnM7aSYmKGU9aChcIjx0ci8+XCIpLmFwcGVuZFRvKGcpKTtiPTA7Zm9yKGM9bC5sZW5ndGg7YjxjO2IrKylmPWxbYl0sZD1oKGYublRoKS5hZGRDbGFzcyhmLnNDbGFzcyksaSYmZC5hcHBlbmRUbyhlKSxhLm9GZWF0dXJlcy5iU29ydCYmKGQuYWRkQ2xhc3MoZi5zU29ydGluZ0NsYXNzKSwhMSE9PWYuYlNvcnRhYmxlJiYoZC5hdHRyKFwidGFiaW5kZXhcIixhLmlUYWJJbmRleCkuYXR0cihcImFyaWEtY29udHJvbHNcIixhLnNUYWJsZUlkKSxPYShhLGYublRoLGIpKSksZi5zVGl0bGUhPWRbMF0uaW5uZXJIVE1MJiZkLmh0bWwoZi5zVGl0bGUpLFBhKGEsXCJoZWFkZXJcIikoYSxkLGYsbik7aSYmZWEoYS5hb0hlYWRlcixnKTtoKGcpLmZpbmQoXCI+dHJcIikuYXR0cihcInJvbGVcIixcInJvd1wiKTtoKGcpLmZpbmQoXCI+dHI+dGgsID50cj50ZFwiKS5hZGRDbGFzcyhuLnNIZWFkZXJUSCk7aChqKS5maW5kKFwiPnRyPnRoLCA+dHI+dGRcIikuYWRkQ2xhc3Mobi5zRm9vdGVyVEgpO1xyXG4gICAgICAgIGlmKG51bGwhPT1qKXthPWEuYW9Gb290ZXJbMF07Yj0wO2ZvcihjPWEubGVuZ3RoO2I8YztiKyspZj1sW2JdLGYublRmPWFbYl0uY2VsbCxmLnNDbGFzcyYmaChmLm5UZikuYWRkQ2xhc3MoZi5zQ2xhc3MpfX1mdW5jdGlvbiBmYShhLGIsYyl7dmFyIGQsZSxmLGc9W10saj1bXSxpPWEuYW9Db2x1bW5zLmxlbmd0aCxuO2lmKGIpe2M9PT1rJiYoYz0hMSk7ZD0wO2ZvcihlPWIubGVuZ3RoO2Q8ZTtkKyspe2dbZF09YltkXS5zbGljZSgpO2dbZF0ublRyPWJbZF0ublRyO2ZvcihmPWktMTswPD1mO2YtLSkhYS5hb0NvbHVtbnNbZl0uYlZpc2libGUmJiFjJiZnW2RdLnNwbGljZShmLDEpO2oucHVzaChbXSl9ZD0wO2ZvcihlPWcubGVuZ3RoO2Q8ZTtkKyspe2lmKGE9Z1tkXS5uVHIpZm9yKDtmPWEuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChmKTtmPTA7Zm9yKGI9Z1tkXS5sZW5ndGg7ZjxiO2YrKylpZihuPWk9MSxqW2RdW2ZdPT09ayl7YS5hcHBlbmRDaGlsZChnW2RdW2ZdLmNlbGwpO1xyXG4gICAgICAgIGZvcihqW2RdW2ZdPTE7Z1tkK2ldIT09ayYmZ1tkXVtmXS5jZWxsPT1nW2QraV1bZl0uY2VsbDspaltkK2ldW2ZdPTEsaSsrO2Zvcig7Z1tkXVtmK25dIT09ayYmZ1tkXVtmXS5jZWxsPT1nW2RdW2Yrbl0uY2VsbDspe2ZvcihjPTA7YzxpO2MrKylqW2QrY11bZituXT0xO24rK31oKGdbZF1bZl0uY2VsbCkuYXR0cihcInJvd3NwYW5cIixpKS5hdHRyKFwiY29sc3BhblwiLG4pfX19fWZ1bmN0aW9uIE8oYSl7dmFyIGI9cyhhLFwiYW9QcmVEcmF3Q2FsbGJhY2tcIixcInByZURyYXdcIixbYV0pO2lmKC0xIT09aC5pbkFycmF5KCExLGIpKUMoYSwhMSk7ZWxzZXt2YXIgYj1bXSxjPTAsZD1hLmFzU3RyaXBlQ2xhc3NlcyxlPWQubGVuZ3RoLGY9YS5vTGFuZ3VhZ2UsZz1hLmlJbml0RGlzcGxheVN0YXJ0LGo9XCJzc3BcIj09eShhKSxpPWEuYWlEaXNwbGF5O2EuYkRyYXdpbmc9ITA7ZyE9PWsmJi0xIT09ZyYmKGEuX2lEaXNwbGF5U3RhcnQ9aj9nOmc+PWEuZm5SZWNvcmRzRGlzcGxheSgpPzA6ZyxhLmlJbml0RGlzcGxheVN0YXJ0PVxyXG4gICAgICAgIC0xKTt2YXIgZz1hLl9pRGlzcGxheVN0YXJ0LG49YS5mbkRpc3BsYXlFbmQoKTtpZihhLmJEZWZlckxvYWRpbmcpYS5iRGVmZXJMb2FkaW5nPSExLGEuaURyYXcrKyxDKGEsITEpO2Vsc2UgaWYoail7aWYoIWEuYkRlc3Ryb3lpbmcmJiFuYihhKSlyZXR1cm59ZWxzZSBhLmlEcmF3Kys7aWYoMCE9PWkubGVuZ3RoKXtmPWo/YS5hb0RhdGEubGVuZ3RoOm47Zm9yKGo9aj8wOmc7ajxmO2orKyl7dmFyIGw9aVtqXSxxPWEuYW9EYXRhW2xdO251bGw9PT1xLm5UciYmSmEoYSxsKTtsPXEublRyO2lmKDAhPT1lKXt2YXIgcj1kW2MlZV07cS5fc1Jvd1N0cmlwZSE9ciYmKGgobCkucmVtb3ZlQ2xhc3MocS5fc1Jvd1N0cmlwZSkuYWRkQ2xhc3MocikscS5fc1Jvd1N0cmlwZT1yKX1zKGEsXCJhb1Jvd0NhbGxiYWNrXCIsbnVsbCxbbCxxLl9hRGF0YSxjLGpdKTtiLnB1c2gobCk7YysrfX1lbHNlIGM9Zi5zWmVyb1JlY29yZHMsMT09YS5pRHJhdyYmXCJhamF4XCI9PXkoYSk/Yz1mLnNMb2FkaW5nUmVjb3JkczpcclxuICAgICAgICBmLnNFbXB0eVRhYmxlJiYwPT09YS5mblJlY29yZHNUb3RhbCgpJiYoYz1mLnNFbXB0eVRhYmxlKSxiWzBdPWgoXCI8dHIvPlwiLHtcImNsYXNzXCI6ZT9kWzBdOlwiXCJ9KS5hcHBlbmQoaChcIjx0ZCAvPlwiLHt2YWxpZ246XCJ0b3BcIixjb2xTcGFuOmJhKGEpLFwiY2xhc3NcIjphLm9DbGFzc2VzLnNSb3dFbXB0eX0pLmh0bWwoYykpWzBdO3MoYSxcImFvSGVhZGVyQ2FsbGJhY2tcIixcImhlYWRlclwiLFtoKGEublRIZWFkKS5jaGlsZHJlbihcInRyXCIpWzBdLE1hKGEpLGcsbixpXSk7cyhhLFwiYW9Gb290ZXJDYWxsYmFja1wiLFwiZm9vdGVyXCIsW2goYS5uVEZvb3QpLmNoaWxkcmVuKFwidHJcIilbMF0sTWEoYSksZyxuLGldKTtkPWgoYS5uVEJvZHkpO2QuY2hpbGRyZW4oKS5kZXRhY2goKTtkLmFwcGVuZChoKGIpKTtzKGEsXCJhb0RyYXdDYWxsYmFja1wiLFwiZHJhd1wiLFthXSk7YS5iU29ydGVkPSExO2EuYkZpbHRlcmVkPSExO2EuYkRyYXdpbmc9ITF9fWZ1bmN0aW9uIFQoYSxiKXt2YXIgYz1hLm9GZWF0dXJlcyxkPWMuYkZpbHRlcjtcclxuICAgICAgICBjLmJTb3J0JiZvYihhKTtkP2dhKGEsYS5vUHJldmlvdXNTZWFyY2gpOmEuYWlEaXNwbGF5PWEuYWlEaXNwbGF5TWFzdGVyLnNsaWNlKCk7ITAhPT1iJiYoYS5faURpc3BsYXlTdGFydD0wKTthLl9kcmF3SG9sZD1iO08oYSk7YS5fZHJhd0hvbGQ9ITF9ZnVuY3Rpb24gcGIoYSl7dmFyIGI9YS5vQ2xhc3NlcyxjPWgoYS5uVGFibGUpLGM9aChcIjxkaXYvPlwiKS5pbnNlcnRCZWZvcmUoYyksZD1hLm9GZWF0dXJlcyxlPWgoXCI8ZGl2Lz5cIix7aWQ6YS5zVGFibGVJZCtcIl93cmFwcGVyXCIsXCJjbGFzc1wiOmIuc1dyYXBwZXIrKGEublRGb290P1wiXCI6XCIgXCIrYi5zTm9Gb290ZXIpfSk7YS5uSG9sZGluZz1jWzBdO2EublRhYmxlV3JhcHBlcj1lWzBdO2EublRhYmxlUmVpbnNlcnRCZWZvcmU9YS5uVGFibGUubmV4dFNpYmxpbmc7Zm9yKHZhciBmPWEuc0RvbS5zcGxpdChcIlwiKSxnLGosaSxuLGwscSxrPTA7azxmLmxlbmd0aDtrKyspe2c9bnVsbDtqPWZba107aWYoXCI8XCI9PWope2k9aChcIjxkaXYvPlwiKVswXTtcclxuICAgICAgICBuPWZbaysxXTtpZihcIidcIj09bnx8J1wiJz09bil7bD1cIlwiO2ZvcihxPTI7ZltrK3FdIT1uOylsKz1mW2srcV0scSsrO1wiSFwiPT1sP2w9Yi5zSlVJSGVhZGVyOlwiRlwiPT1sJiYobD1iLnNKVUlGb290ZXIpOy0xIT1sLmluZGV4T2YoXCIuXCIpPyhuPWwuc3BsaXQoXCIuXCIpLGkuaWQ9blswXS5zdWJzdHIoMSxuWzBdLmxlbmd0aC0xKSxpLmNsYXNzTmFtZT1uWzFdKTpcIiNcIj09bC5jaGFyQXQoMCk/aS5pZD1sLnN1YnN0cigxLGwubGVuZ3RoLTEpOmkuY2xhc3NOYW1lPWw7ays9cX1lLmFwcGVuZChpKTtlPWgoaSl9ZWxzZSBpZihcIj5cIj09aillPWUucGFyZW50KCk7ZWxzZSBpZihcImxcIj09aiYmZC5iUGFnaW5hdGUmJmQuYkxlbmd0aENoYW5nZSlnPXFiKGEpO2Vsc2UgaWYoXCJmXCI9PWomJmQuYkZpbHRlcilnPXJiKGEpO2Vsc2UgaWYoXCJyXCI9PWomJmQuYlByb2Nlc3NpbmcpZz1zYihhKTtlbHNlIGlmKFwidFwiPT1qKWc9dGIoYSk7ZWxzZSBpZihcImlcIj09aiYmZC5iSW5mbylnPXViKGEpO2Vsc2UgaWYoXCJwXCI9PVxyXG4gICAgICAgIGomJmQuYlBhZ2luYXRlKWc9dmIoYSk7ZWxzZSBpZigwIT09bS5leHQuZmVhdHVyZS5sZW5ndGgpe2k9bS5leHQuZmVhdHVyZTtxPTA7Zm9yKG49aS5sZW5ndGg7cTxuO3ErKylpZihqPT1pW3FdLmNGZWF0dXJlKXtnPWlbcV0uZm5Jbml0KGEpO2JyZWFrfX1nJiYoaT1hLmFhbkZlYXR1cmVzLGlbal18fChpW2pdPVtdKSxpW2pdLnB1c2goZyksZS5hcHBlbmQoZykpfWMucmVwbGFjZVdpdGgoZSk7YS5uSG9sZGluZz1udWxsfWZ1bmN0aW9uIGVhKGEsYil7dmFyIGM9aChiKS5jaGlsZHJlbihcInRyXCIpLGQsZSxmLGcsaixpLG4sbCxxLGs7YS5zcGxpY2UoMCxhLmxlbmd0aCk7Zj0wO2ZvcihpPWMubGVuZ3RoO2Y8aTtmKyspYS5wdXNoKFtdKTtmPTA7Zm9yKGk9Yy5sZW5ndGg7ZjxpO2YrKyl7ZD1jW2ZdO2ZvcihlPWQuZmlyc3RDaGlsZDtlOyl7aWYoXCJURFwiPT1lLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCl8fFwiVEhcIj09ZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKXtsPTEqZS5nZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIpO1xyXG4gICAgICAgIHE9MSplLmdldEF0dHJpYnV0ZShcInJvd3NwYW5cIik7bD0hbHx8MD09PWx8fDE9PT1sPzE6bDtxPSFxfHwwPT09cXx8MT09PXE/MTpxO2c9MDtmb3Ioaj1hW2ZdO2pbZ107KWcrKztuPWc7az0xPT09bD8hMDohMTtmb3Ioaj0wO2o8bDtqKyspZm9yKGc9MDtnPHE7ZysrKWFbZitnXVtuK2pdPXtjZWxsOmUsdW5pcXVlOmt9LGFbZitnXS5uVHI9ZH1lPWUubmV4dFNpYmxpbmd9fX1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9W107Y3x8KGM9YS5hb0hlYWRlcixiJiYoYz1bXSxlYShjLGIpKSk7Zm9yKHZhciBiPTAsZT1jLmxlbmd0aDtiPGU7YisrKWZvcih2YXIgZj0wLGc9Y1tiXS5sZW5ndGg7ZjxnO2YrKylpZihjW2JdW2ZdLnVuaXF1ZSYmKCFkW2ZdfHwhYS5iU29ydENlbGxzVG9wKSlkW2ZdPWNbYl1bZl0uY2VsbDtyZXR1cm4gZH1mdW5jdGlvbiB1YShhLGIsYyl7cyhhLFwiYW9TZXJ2ZXJQYXJhbXNcIixcInNlcnZlclBhcmFtc1wiLFtiXSk7aWYoYiYmaC5pc0FycmF5KGIpKXt2YXIgZD17fSxcclxuICAgICAgICBlPS8oLio/KVxcW1xcXSQvO2guZWFjaChiLGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5uYW1lLm1hdGNoKGUpO2M/KGM9Y1swXSxkW2NdfHwoZFtjXT1bXSksZFtjXS5wdXNoKGIudmFsdWUpKTpkW2IubmFtZV09Yi52YWx1ZX0pO2I9ZH12YXIgZixnPWEuYWpheCxqPWEub0luc3RhbmNlLGk9ZnVuY3Rpb24oYil7cyhhLG51bGwsXCJ4aHJcIixbYSxiLGEuanFYSFJdKTtjKGIpfTtpZihoLmlzUGxhaW5PYmplY3QoZykmJmcuZGF0YSl7Zj1nLmRhdGE7dmFyIG49aC5pc0Z1bmN0aW9uKGYpP2YoYixhKTpmLGI9aC5pc0Z1bmN0aW9uKGYpJiZuP246aC5leHRlbmQoITAsYixuKTtkZWxldGUgZy5kYXRhfW49e2RhdGE6YixzdWNjZXNzOmZ1bmN0aW9uKGIpe3ZhciBjPWIuZXJyb3J8fGIuc0Vycm9yO2MmJksoYSwwLGMpO2EuanNvbj1iO2koYil9LGRhdGFUeXBlOlwianNvblwiLGNhY2hlOiExLHR5cGU6YS5zU2VydmVyTWV0aG9kLGVycm9yOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9cyhhLG51bGwsXCJ4aHJcIixcclxuICAgICAgICBbYSxudWxsLGEuanFYSFJdKTstMT09PWguaW5BcnJheSghMCxkKSYmKFwicGFyc2VyZXJyb3JcIj09Yz9LKGEsMCxcIkludmFsaWQgSlNPTiByZXNwb25zZVwiLDEpOjQ9PT1iLnJlYWR5U3RhdGUmJksoYSwwLFwiQWpheCBlcnJvclwiLDcpKTtDKGEsITEpfX07YS5vQWpheERhdGE9YjtzKGEsbnVsbCxcInByZVhoclwiLFthLGJdKTthLmZuU2VydmVyRGF0YT9hLmZuU2VydmVyRGF0YS5jYWxsKGosYS5zQWpheFNvdXJjZSxoLm1hcChiLGZ1bmN0aW9uKGEsYil7cmV0dXJue25hbWU6Yix2YWx1ZTphfX0pLGksYSk6YS5zQWpheFNvdXJjZXx8XCJzdHJpbmdcIj09PXR5cGVvZiBnP2EuanFYSFI9aC5hamF4KGguZXh0ZW5kKG4se3VybDpnfHxhLnNBamF4U291cmNlfSkpOmguaXNGdW5jdGlvbihnKT9hLmpxWEhSPWcuY2FsbChqLGIsaSxhKTooYS5qcVhIUj1oLmFqYXgoaC5leHRlbmQobixnKSksZy5kYXRhPWYpfWZ1bmN0aW9uIG5iKGEpe3JldHVybiBhLmJBamF4RGF0YUdldD8oYS5pRHJhdysrLEMoYSxcclxuICAgICAgICAgICAgITApLHVhKGEsd2IoYSksZnVuY3Rpb24oYil7eGIoYSxiKX0pLCExKTohMH1mdW5jdGlvbiB3YihhKXt2YXIgYj1hLmFvQ29sdW1ucyxjPWIubGVuZ3RoLGQ9YS5vRmVhdHVyZXMsZT1hLm9QcmV2aW91c1NlYXJjaCxmPWEuYW9QcmVTZWFyY2hDb2xzLGcsaj1bXSxpLG4sbCxrPVcoYSk7Zz1hLl9pRGlzcGxheVN0YXJ0O2k9ITEhPT1kLmJQYWdpbmF0ZT9hLl9pRGlzcGxheUxlbmd0aDotMTt2YXIgcj1mdW5jdGlvbihhLGIpe2oucHVzaCh7bmFtZTphLHZhbHVlOmJ9KX07cihcInNFY2hvXCIsYS5pRHJhdyk7cihcImlDb2x1bW5zXCIsYyk7cihcInNDb2x1bW5zXCIsRChiLFwic05hbWVcIikuam9pbihcIixcIikpO3IoXCJpRGlzcGxheVN0YXJ0XCIsZyk7cihcImlEaXNwbGF5TGVuZ3RoXCIsaSk7dmFyIHJhPXtkcmF3OmEuaURyYXcsY29sdW1uczpbXSxvcmRlcjpbXSxzdGFydDpnLGxlbmd0aDppLHNlYXJjaDp7dmFsdWU6ZS5zU2VhcmNoLHJlZ2V4OmUuYlJlZ2V4fX07Zm9yKGc9MDtnPGM7ZysrKW49YltnXSxcclxuICAgICAgICBsPWZbZ10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLm1EYXRhP1wiZnVuY3Rpb25cIjpuLm1EYXRhLHJhLmNvbHVtbnMucHVzaCh7ZGF0YTppLG5hbWU6bi5zTmFtZSxzZWFyY2hhYmxlOm4uYlNlYXJjaGFibGUsb3JkZXJhYmxlOm4uYlNvcnRhYmxlLHNlYXJjaDp7dmFsdWU6bC5zU2VhcmNoLHJlZ2V4OmwuYlJlZ2V4fX0pLHIoXCJtRGF0YVByb3BfXCIrZyxpKSxkLmJGaWx0ZXImJihyKFwic1NlYXJjaF9cIitnLGwuc1NlYXJjaCkscihcImJSZWdleF9cIitnLGwuYlJlZ2V4KSxyKFwiYlNlYXJjaGFibGVfXCIrZyxuLmJTZWFyY2hhYmxlKSksZC5iU29ydCYmcihcImJTb3J0YWJsZV9cIitnLG4uYlNvcnRhYmxlKTtkLmJGaWx0ZXImJihyKFwic1NlYXJjaFwiLGUuc1NlYXJjaCkscihcImJSZWdleFwiLGUuYlJlZ2V4KSk7ZC5iU29ydCYmKGguZWFjaChrLGZ1bmN0aW9uKGEsYil7cmEub3JkZXIucHVzaCh7Y29sdW1uOmIuY29sLGRpcjpiLmRpcn0pO3IoXCJpU29ydENvbF9cIithLGIuY29sKTtyKFwic1NvcnREaXJfXCIrXHJcbiAgICAgICAgYSxiLmRpcil9KSxyKFwiaVNvcnRpbmdDb2xzXCIsay5sZW5ndGgpKTtiPW0uZXh0LmxlZ2FjeS5hamF4O3JldHVybiBudWxsPT09Yj9hLnNBamF4U291cmNlP2o6cmE6Yj9qOnJhfWZ1bmN0aW9uIHhiKGEsYil7dmFyIGM9dmEoYSxiKSxkPWIuc0VjaG8hPT1rP2Iuc0VjaG86Yi5kcmF3LGU9Yi5pVG90YWxSZWNvcmRzIT09az9iLmlUb3RhbFJlY29yZHM6Yi5yZWNvcmRzVG90YWwsZj1iLmlUb3RhbERpc3BsYXlSZWNvcmRzIT09az9iLmlUb3RhbERpc3BsYXlSZWNvcmRzOmIucmVjb3Jkc0ZpbHRlcmVkO2lmKGQpe2lmKDEqZDxhLmlEcmF3KXJldHVybjthLmlEcmF3PTEqZH1wYShhKTthLl9pUmVjb3Jkc1RvdGFsPXBhcnNlSW50KGUsMTApO2EuX2lSZWNvcmRzRGlzcGxheT1wYXJzZUludChmLDEwKTtkPTA7Zm9yKGU9Yy5sZW5ndGg7ZDxlO2QrKylOKGEsY1tkXSk7YS5haURpc3BsYXk9YS5haURpc3BsYXlNYXN0ZXIuc2xpY2UoKTthLmJBamF4RGF0YUdldD0hMTtPKGEpO2EuX2JJbml0Q29tcGxldGV8fFxyXG4gICAgd2EoYSxiKTthLmJBamF4RGF0YUdldD0hMDtDKGEsITEpfWZ1bmN0aW9uIHZhKGEsYil7dmFyIGM9aC5pc1BsYWluT2JqZWN0KGEuYWpheCkmJmEuYWpheC5kYXRhU3JjIT09az9hLmFqYXguZGF0YVNyYzphLnNBamF4RGF0YVByb3A7cmV0dXJuXCJkYXRhXCI9PT1jP2IuYWFEYXRhfHxiW2NdOlwiXCIhPT1jP1IoYykoYik6Yn1mdW5jdGlvbiByYihhKXt2YXIgYj1hLm9DbGFzc2VzLGM9YS5zVGFibGVJZCxkPWEub0xhbmd1YWdlLGU9YS5vUHJldmlvdXNTZWFyY2gsZj1hLmFhbkZlYXR1cmVzLGc9JzxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3M9XCInK2Iuc0ZpbHRlcklucHV0KydcIi8+JyxqPWQuc1NlYXJjaCxqPWoubWF0Y2goL19JTlBVVF8vKT9qLnJlcGxhY2UoXCJfSU5QVVRfXCIsZyk6aitnLGI9aChcIjxkaXYvPlwiLHtpZDohZi5mP2MrXCJfZmlsdGVyXCI6bnVsbCxcImNsYXNzXCI6Yi5zRmlsdGVyfSkuYXBwZW5kKGgoXCI8bGFiZWwvPlwiKS5hcHBlbmQoaikpLGY9ZnVuY3Rpb24oKXt2YXIgYj0hdGhpcy52YWx1ZT9cclxuICAgICAgICBcIlwiOnRoaXMudmFsdWU7YiE9ZS5zU2VhcmNoJiYoZ2EoYSx7c1NlYXJjaDpiLGJSZWdleDplLmJSZWdleCxiU21hcnQ6ZS5iU21hcnQsYkNhc2VJbnNlbnNpdGl2ZTplLmJDYXNlSW5zZW5zaXRpdmV9KSxhLl9pRGlzcGxheVN0YXJ0PTAsTyhhKSl9LGc9bnVsbCE9PWEuc2VhcmNoRGVsYXk/YS5zZWFyY2hEZWxheTpcInNzcFwiPT09eShhKT80MDA6MCxpPWgoXCJpbnB1dFwiLGIpLnZhbChlLnNTZWFyY2gpLmF0dHIoXCJwbGFjZWhvbGRlclwiLGQuc1NlYXJjaFBsYWNlaG9sZGVyKS5vbihcImtleXVwLkRUIHNlYXJjaC5EVCBpbnB1dC5EVCBwYXN0ZS5EVCBjdXQuRFRcIixnP1FhKGYsZyk6Zikub24oXCJrZXlwcmVzcy5EVFwiLGZ1bmN0aW9uKGEpe2lmKDEzPT1hLmtleUNvZGUpcmV0dXJuITF9KS5hdHRyKFwiYXJpYS1jb250cm9sc1wiLGMpO2goYS5uVGFibGUpLm9uKFwic2VhcmNoLmR0LkRUXCIsZnVuY3Rpb24oYixjKXtpZihhPT09Yyl0cnl7aVswXSE9PUguYWN0aXZlRWxlbWVudCYmaS52YWwoZS5zU2VhcmNoKX1jYXRjaChkKXt9fSk7XHJcbiAgICAgICAgcmV0dXJuIGJbMF19ZnVuY3Rpb24gZ2EoYSxiLGMpe3ZhciBkPWEub1ByZXZpb3VzU2VhcmNoLGU9YS5hb1ByZVNlYXJjaENvbHMsZj1mdW5jdGlvbihhKXtkLnNTZWFyY2g9YS5zU2VhcmNoO2QuYlJlZ2V4PWEuYlJlZ2V4O2QuYlNtYXJ0PWEuYlNtYXJ0O2QuYkNhc2VJbnNlbnNpdGl2ZT1hLmJDYXNlSW5zZW5zaXRpdmV9O0lhKGEpO2lmKFwic3NwXCIhPXkoYSkpe3liKGEsYi5zU2VhcmNoLGMsYi5iRXNjYXBlUmVnZXghPT1rPyFiLmJFc2NhcGVSZWdleDpiLmJSZWdleCxiLmJTbWFydCxiLmJDYXNlSW5zZW5zaXRpdmUpO2YoYik7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKyl6YihhLGVbYl0uc1NlYXJjaCxiLGVbYl0uYkVzY2FwZVJlZ2V4IT09az8hZVtiXS5iRXNjYXBlUmVnZXg6ZVtiXS5iUmVnZXgsZVtiXS5iU21hcnQsZVtiXS5iQ2FzZUluc2Vuc2l0aXZlKTtBYihhKX1lbHNlIGYoYik7YS5iRmlsdGVyZWQ9ITA7cyhhLG51bGwsXCJzZWFyY2hcIixbYV0pfWZ1bmN0aW9uIEFiKGEpe2Zvcih2YXIgYj1cclxuICAgICAgICBtLmV4dC5zZWFyY2gsYz1hLmFpRGlzcGxheSxkLGUsZj0wLGc9Yi5sZW5ndGg7ZjxnO2YrKyl7Zm9yKHZhciBqPVtdLGk9MCxuPWMubGVuZ3RoO2k8bjtpKyspZT1jW2ldLGQ9YS5hb0RhdGFbZV0sYltmXShhLGQuX2FGaWx0ZXJEYXRhLGUsZC5fYURhdGEsaSkmJmoucHVzaChlKTtjLmxlbmd0aD0wO2gubWVyZ2UoYyxqKX19ZnVuY3Rpb24gemIoYSxiLGMsZCxlLGYpe2lmKFwiXCIhPT1iKXtmb3IodmFyIGc9W10saj1hLmFpRGlzcGxheSxkPVJhKGIsZCxlLGYpLGU9MDtlPGoubGVuZ3RoO2UrKyliPWEuYW9EYXRhW2pbZV1dLl9hRmlsdGVyRGF0YVtjXSxkLnRlc3QoYikmJmcucHVzaChqW2VdKTthLmFpRGlzcGxheT1nfX1mdW5jdGlvbiB5YihhLGIsYyxkLGUsZil7dmFyIGQ9UmEoYixkLGUsZiksZj1hLm9QcmV2aW91c1NlYXJjaC5zU2VhcmNoLGc9YS5haURpc3BsYXlNYXN0ZXIsaixlPVtdOzAhPT1tLmV4dC5zZWFyY2gubGVuZ3RoJiYoYz0hMCk7aj1CYihhKTtpZigwPj1iLmxlbmd0aClhLmFpRGlzcGxheT1cclxuICAgICAgICBnLnNsaWNlKCk7ZWxzZXtpZihqfHxjfHxmLmxlbmd0aD5iLmxlbmd0aHx8MCE9PWIuaW5kZXhPZihmKXx8YS5iU29ydGVkKWEuYWlEaXNwbGF5PWcuc2xpY2UoKTtiPWEuYWlEaXNwbGF5O2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspZC50ZXN0KGEuYW9EYXRhW2JbY11dLl9zRmlsdGVyUm93KSYmZS5wdXNoKGJbY10pO2EuYWlEaXNwbGF5PWV9fWZ1bmN0aW9uIFJhKGEsYixjLGQpe2E9Yj9hOlNhKGEpO2MmJihhPVwiXig/PS4qP1wiK2gubWFwKGEubWF0Y2goL1wiW15cIl0rXCJ8W14gXSsvZyl8fFtcIlwiXSxmdW5jdGlvbihhKXtpZignXCInPT09YS5jaGFyQXQoMCkpdmFyIGI9YS5tYXRjaCgvXlwiKC4qKVwiJC8pLGE9Yj9iWzFdOmE7cmV0dXJuIGEucmVwbGFjZSgnXCInLFwiXCIpfSkuam9pbihcIikoPz0uKj9cIikrXCIpLiokXCIpO3JldHVybiBSZWdFeHAoYSxkP1wiaVwiOlwiXCIpfWZ1bmN0aW9uIEJiKGEpe3ZhciBiPWEuYW9Db2x1bW5zLGMsZCxlLGYsZyxqLGksaCxsPW0uZXh0LnR5cGUuc2VhcmNoO2M9ITE7XHJcbiAgICAgICAgZD0wO2ZvcihmPWEuYW9EYXRhLmxlbmd0aDtkPGY7ZCsrKWlmKGg9YS5hb0RhdGFbZF0sIWguX2FGaWx0ZXJEYXRhKXtqPVtdO2U9MDtmb3IoZz1iLmxlbmd0aDtlPGc7ZSsrKWM9YltlXSxjLmJTZWFyY2hhYmxlPyhpPUIoYSxkLGUsXCJmaWx0ZXJcIiksbFtjLnNUeXBlXSYmKGk9bFtjLnNUeXBlXShpKSksbnVsbD09PWkmJihpPVwiXCIpLFwic3RyaW5nXCIhPT10eXBlb2YgaSYmaS50b1N0cmluZyYmKGk9aS50b1N0cmluZygpKSk6aT1cIlwiLGkuaW5kZXhPZiYmLTEhPT1pLmluZGV4T2YoXCImXCIpJiYoeGEuaW5uZXJIVE1MPWksaT0kYj94YS50ZXh0Q29udGVudDp4YS5pbm5lclRleHQpLGkucmVwbGFjZSYmKGk9aS5yZXBsYWNlKC9bXFxyXFxuXS9nLFwiXCIpKSxqLnB1c2goaSk7aC5fYUZpbHRlckRhdGE9ajtoLl9zRmlsdGVyUm93PWouam9pbihcIiAgXCIpO2M9ITB9cmV0dXJuIGN9ZnVuY3Rpb24gQ2IoYSl7cmV0dXJue3NlYXJjaDphLnNTZWFyY2gsc21hcnQ6YS5iU21hcnQscmVnZXg6YS5iUmVnZXgsXHJcbiAgICAgICAgY2FzZUluc2Vuc2l0aXZlOmEuYkNhc2VJbnNlbnNpdGl2ZX19ZnVuY3Rpb24gRGIoYSl7cmV0dXJue3NTZWFyY2g6YS5zZWFyY2gsYlNtYXJ0OmEuc21hcnQsYlJlZ2V4OmEucmVnZXgsYkNhc2VJbnNlbnNpdGl2ZTphLmNhc2VJbnNlbnNpdGl2ZX19ZnVuY3Rpb24gdWIoYSl7dmFyIGI9YS5zVGFibGVJZCxjPWEuYWFuRmVhdHVyZXMuaSxkPWgoXCI8ZGl2Lz5cIix7XCJjbGFzc1wiOmEub0NsYXNzZXMuc0luZm8saWQ6IWM/YitcIl9pbmZvXCI6bnVsbH0pO2N8fChhLmFvRHJhd0NhbGxiYWNrLnB1c2goe2ZuOkViLHNOYW1lOlwiaW5mb3JtYXRpb25cIn0pLGQuYXR0cihcInJvbGVcIixcInN0YXR1c1wiKS5hdHRyKFwiYXJpYS1saXZlXCIsXCJwb2xpdGVcIiksaChhLm5UYWJsZSkuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixiK1wiX2luZm9cIikpO3JldHVybiBkWzBdfWZ1bmN0aW9uIEViKGEpe3ZhciBiPWEuYWFuRmVhdHVyZXMuaTtpZigwIT09Yi5sZW5ndGgpe3ZhciBjPWEub0xhbmd1YWdlLGQ9YS5faURpc3BsYXlTdGFydCtcclxuICAgICAgICAxLGU9YS5mbkRpc3BsYXlFbmQoKSxmPWEuZm5SZWNvcmRzVG90YWwoKSxnPWEuZm5SZWNvcmRzRGlzcGxheSgpLGo9Zz9jLnNJbmZvOmMuc0luZm9FbXB0eTtnIT09ZiYmKGorPVwiIFwiK2Muc0luZm9GaWx0ZXJlZCk7ais9Yy5zSW5mb1Bvc3RGaXg7aj1GYihhLGopO2M9Yy5mbkluZm9DYWxsYmFjaztudWxsIT09YyYmKGo9Yy5jYWxsKGEub0luc3RhbmNlLGEsZCxlLGYsZyxqKSk7aChiKS5odG1sKGopfX1mdW5jdGlvbiBGYihhLGIpe3ZhciBjPWEuZm5Gb3JtYXROdW1iZXIsZD1hLl9pRGlzcGxheVN0YXJ0KzEsZT1hLl9pRGlzcGxheUxlbmd0aCxmPWEuZm5SZWNvcmRzRGlzcGxheSgpLGc9LTE9PT1lO3JldHVybiBiLnJlcGxhY2UoL19TVEFSVF8vZyxjLmNhbGwoYSxkKSkucmVwbGFjZSgvX0VORF8vZyxjLmNhbGwoYSxhLmZuRGlzcGxheUVuZCgpKSkucmVwbGFjZSgvX01BWF8vZyxjLmNhbGwoYSxhLmZuUmVjb3Jkc1RvdGFsKCkpKS5yZXBsYWNlKC9fVE9UQUxfL2csYy5jYWxsKGEsXHJcbiAgICAgICAgZikpLnJlcGxhY2UoL19QQUdFXy9nLGMuY2FsbChhLGc/MTpNYXRoLmNlaWwoZC9lKSkpLnJlcGxhY2UoL19QQUdFU18vZyxjLmNhbGwoYSxnPzE6TWF0aC5jZWlsKGYvZSkpKX1mdW5jdGlvbiBoYShhKXt2YXIgYixjLGQ9YS5pSW5pdERpc3BsYXlTdGFydCxlPWEuYW9Db2x1bW5zLGY7Yz1hLm9GZWF0dXJlczt2YXIgZz1hLmJEZWZlckxvYWRpbmc7aWYoYS5iSW5pdGlhbGlzZWQpe3BiKGEpO21iKGEpO2ZhKGEsYS5hb0hlYWRlcik7ZmEoYSxhLmFvRm9vdGVyKTtDKGEsITApO2MuYkF1dG9XaWR0aCYmSGEoYSk7Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspZj1lW2JdLGYuc1dpZHRoJiYoZi5uVGguc3R5bGUud2lkdGg9dihmLnNXaWR0aCkpO3MoYSxudWxsLFwicHJlSW5pdFwiLFthXSk7VChhKTtlPXkoYSk7aWYoXCJzc3BcIiE9ZXx8ZylcImFqYXhcIj09ZT91YShhLFtdLGZ1bmN0aW9uKGMpe3ZhciBmPXZhKGEsYyk7Zm9yKGI9MDtiPGYubGVuZ3RoO2IrKylOKGEsZltiXSk7YS5pSW5pdERpc3BsYXlTdGFydD1cclxuICAgICAgICAgICAgZDtUKGEpO0MoYSwhMSk7d2EoYSxjKX0sYSk6KEMoYSwhMSksd2EoYSkpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2hhKGEpfSwyMDApfWZ1bmN0aW9uIHdhKGEsYil7YS5fYkluaXRDb21wbGV0ZT0hMDsoYnx8YS5vSW5pdC5hYURhdGEpJiZaKGEpO3MoYSxudWxsLFwicGx1Z2luLWluaXRcIixbYSxiXSk7cyhhLFwiYW9Jbml0Q29tcGxldGVcIixcImluaXRcIixbYSxiXSl9ZnVuY3Rpb24gVGEoYSxiKXt2YXIgYz1wYXJzZUludChiLDEwKTthLl9pRGlzcGxheUxlbmd0aD1jO1VhKGEpO3MoYSxudWxsLFwibGVuZ3RoXCIsW2EsY10pfWZ1bmN0aW9uIHFiKGEpe2Zvcih2YXIgYj1hLm9DbGFzc2VzLGM9YS5zVGFibGVJZCxkPWEuYUxlbmd0aE1lbnUsZT1oLmlzQXJyYXkoZFswXSksZj1lP2RbMF06ZCxkPWU/ZFsxXTpkLGU9aChcIjxzZWxlY3QvPlwiLHtuYW1lOmMrXCJfbGVuZ3RoXCIsXCJhcmlhLWNvbnRyb2xzXCI6YyxcImNsYXNzXCI6Yi5zTGVuZ3RoU2VsZWN0fSksZz0wLGo9Zi5sZW5ndGg7ZzxqO2crKyllWzBdW2ddPVxyXG4gICAgICAgIG5ldyBPcHRpb24oZFtnXSxmW2ddKTt2YXIgaT1oKFwiPGRpdj48bGFiZWwvPjwvZGl2PlwiKS5hZGRDbGFzcyhiLnNMZW5ndGgpO2EuYWFuRmVhdHVyZXMubHx8KGlbMF0uaWQ9YytcIl9sZW5ndGhcIik7aS5jaGlsZHJlbigpLmFwcGVuZChhLm9MYW5ndWFnZS5zTGVuZ3RoTWVudS5yZXBsYWNlKFwiX01FTlVfXCIsZVswXS5vdXRlckhUTUwpKTtoKFwic2VsZWN0XCIsaSkudmFsKGEuX2lEaXNwbGF5TGVuZ3RoKS5vbihcImNoYW5nZS5EVFwiLGZ1bmN0aW9uKCl7VGEoYSxoKHRoaXMpLnZhbCgpKTtPKGEpfSk7aChhLm5UYWJsZSkub24oXCJsZW5ndGguZHQuRFRcIixmdW5jdGlvbihiLGMsZCl7YT09PWMmJmgoXCJzZWxlY3RcIixpKS52YWwoZCl9KTtyZXR1cm4gaVswXX1mdW5jdGlvbiB2YihhKXt2YXIgYj1hLnNQYWdpbmF0aW9uVHlwZSxjPW0uZXh0LnBhZ2VyW2JdLGQ9XCJmdW5jdGlvblwiPT09dHlwZW9mIGMsZT1mdW5jdGlvbihhKXtPKGEpfSxiPWgoXCI8ZGl2Lz5cIikuYWRkQ2xhc3MoYS5vQ2xhc3Nlcy5zUGFnaW5nK1xyXG4gICAgICAgIGIpWzBdLGY9YS5hYW5GZWF0dXJlcztkfHxjLmZuSW5pdChhLGIsZSk7Zi5wfHwoYi5pZD1hLnNUYWJsZUlkK1wiX3BhZ2luYXRlXCIsYS5hb0RyYXdDYWxsYmFjay5wdXNoKHtmbjpmdW5jdGlvbihhKXtpZihkKXt2YXIgYj1hLl9pRGlzcGxheVN0YXJ0LGk9YS5faURpc3BsYXlMZW5ndGgsaD1hLmZuUmVjb3Jkc0Rpc3BsYXkoKSxsPS0xPT09aSxiPWw/MDpNYXRoLmNlaWwoYi9pKSxpPWw/MTpNYXRoLmNlaWwoaC9pKSxoPWMoYixpKSxrLGw9MDtmb3Ioaz1mLnAubGVuZ3RoO2w8aztsKyspUGEoYSxcInBhZ2VCdXR0b25cIikoYSxmLnBbbF0sbCxoLGIsaSl9ZWxzZSBjLmZuVXBkYXRlKGEsZSl9LHNOYW1lOlwicGFnaW5hdGlvblwifSkpO3JldHVybiBifWZ1bmN0aW9uIFZhKGEsYixjKXt2YXIgZD1hLl9pRGlzcGxheVN0YXJ0LGU9YS5faURpc3BsYXlMZW5ndGgsZj1hLmZuUmVjb3Jkc0Rpc3BsYXkoKTswPT09Znx8LTE9PT1lP2Q9MDpcIm51bWJlclwiPT09dHlwZW9mIGI/KGQ9YiplLGQ+ZiYmXHJcbiAgICAgICAgICAgIChkPTApKTpcImZpcnN0XCI9PWI/ZD0wOlwicHJldmlvdXNcIj09Yj8oZD0wPD1lP2QtZTowLDA+ZCYmKGQ9MCkpOlwibmV4dFwiPT1iP2QrZTxmJiYoZCs9ZSk6XCJsYXN0XCI9PWI/ZD1NYXRoLmZsb29yKChmLTEpL2UpKmU6SyhhLDAsXCJVbmtub3duIHBhZ2luZyBhY3Rpb246IFwiK2IsNSk7Yj1hLl9pRGlzcGxheVN0YXJ0IT09ZDthLl9pRGlzcGxheVN0YXJ0PWQ7YiYmKHMoYSxudWxsLFwicGFnZVwiLFthXSksYyYmTyhhKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gc2IoYSl7cmV0dXJuIGgoXCI8ZGl2Lz5cIix7aWQ6IWEuYWFuRmVhdHVyZXMucj9hLnNUYWJsZUlkK1wiX3Byb2Nlc3NpbmdcIjpudWxsLFwiY2xhc3NcIjphLm9DbGFzc2VzLnNQcm9jZXNzaW5nfSkuaHRtbChhLm9MYW5ndWFnZS5zUHJvY2Vzc2luZykuaW5zZXJ0QmVmb3JlKGEublRhYmxlKVswXX1mdW5jdGlvbiBDKGEsYil7YS5vRmVhdHVyZXMuYlByb2Nlc3NpbmcmJmgoYS5hYW5GZWF0dXJlcy5yKS5jc3MoXCJkaXNwbGF5XCIsYj9cImJsb2NrXCI6XCJub25lXCIpO1xyXG4gICAgICAgIHMoYSxudWxsLFwicHJvY2Vzc2luZ1wiLFthLGJdKX1mdW5jdGlvbiB0YihhKXt2YXIgYj1oKGEublRhYmxlKTtiLmF0dHIoXCJyb2xlXCIsXCJncmlkXCIpO3ZhciBjPWEub1Njcm9sbDtpZihcIlwiPT09Yy5zWCYmXCJcIj09PWMuc1kpcmV0dXJuIGEublRhYmxlO3ZhciBkPWMuc1gsZT1jLnNZLGY9YS5vQ2xhc3NlcyxnPWIuY2hpbGRyZW4oXCJjYXB0aW9uXCIpLGo9Zy5sZW5ndGg/Z1swXS5fY2FwdGlvblNpZGU6bnVsbCxpPWgoYlswXS5jbG9uZU5vZGUoITEpKSxuPWgoYlswXS5jbG9uZU5vZGUoITEpKSxsPWIuY2hpbGRyZW4oXCJ0Zm9vdFwiKTtsLmxlbmd0aHx8KGw9bnVsbCk7aT1oKFwiPGRpdi8+XCIse1wiY2xhc3NcIjpmLnNTY3JvbGxXcmFwcGVyfSkuYXBwZW5kKGgoXCI8ZGl2Lz5cIix7XCJjbGFzc1wiOmYuc1Njcm9sbEhlYWR9KS5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLGJvcmRlcjowLHdpZHRoOmQ/IWQ/bnVsbDp2KGQpOlwiMTAwJVwifSkuYXBwZW5kKGgoXCI8ZGl2Lz5cIixcclxuICAgICAgICB7XCJjbGFzc1wiOmYuc1Njcm9sbEhlYWRJbm5lcn0pLmNzcyh7XCJib3gtc2l6aW5nXCI6XCJjb250ZW50LWJveFwiLHdpZHRoOmMuc1hJbm5lcnx8XCIxMDAlXCJ9KS5hcHBlbmQoaS5yZW1vdmVBdHRyKFwiaWRcIikuY3NzKFwibWFyZ2luLWxlZnRcIiwwKS5hcHBlbmQoXCJ0b3BcIj09PWo/ZzpudWxsKS5hcHBlbmQoYi5jaGlsZHJlbihcInRoZWFkXCIpKSkpKS5hcHBlbmQoaChcIjxkaXYvPlwiLHtcImNsYXNzXCI6Zi5zU2Nyb2xsQm9keX0pLmNzcyh7cG9zaXRpb246XCJyZWxhdGl2ZVwiLG92ZXJmbG93OlwiYXV0b1wiLHdpZHRoOiFkP251bGw6dihkKX0pLmFwcGVuZChiKSk7bCYmaS5hcHBlbmQoaChcIjxkaXYvPlwiLHtcImNsYXNzXCI6Zi5zU2Nyb2xsRm9vdH0pLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixib3JkZXI6MCx3aWR0aDpkPyFkP251bGw6dihkKTpcIjEwMCVcIn0pLmFwcGVuZChoKFwiPGRpdi8+XCIse1wiY2xhc3NcIjpmLnNTY3JvbGxGb290SW5uZXJ9KS5hcHBlbmQobi5yZW1vdmVBdHRyKFwiaWRcIikuY3NzKFwibWFyZ2luLWxlZnRcIixcclxuICAgICAgICAwKS5hcHBlbmQoXCJib3R0b21cIj09PWo/ZzpudWxsKS5hcHBlbmQoYi5jaGlsZHJlbihcInRmb290XCIpKSkpKTt2YXIgYj1pLmNoaWxkcmVuKCksaz1iWzBdLGY9YlsxXSxyPWw/YlsyXTpudWxsO2lmKGQpaChmKS5vbihcInNjcm9sbC5EVFwiLGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zY3JvbGxMZWZ0O2suc2Nyb2xsTGVmdD1hO2wmJihyLnNjcm9sbExlZnQ9YSl9KTtoKGYpLmNzcyhlJiZjLmJDb2xsYXBzZT9cIm1heC1oZWlnaHRcIjpcImhlaWdodFwiLGUpO2EublNjcm9sbEhlYWQ9azthLm5TY3JvbGxCb2R5PWY7YS5uU2Nyb2xsRm9vdD1yO2EuYW9EcmF3Q2FsbGJhY2sucHVzaCh7Zm46bWEsc05hbWU6XCJzY3JvbGxpbmdcIn0pO3JldHVybiBpWzBdfWZ1bmN0aW9uIG1hKGEpe3ZhciBiPWEub1Njcm9sbCxjPWIuc1gsZD1iLnNYSW5uZXIsZT1iLnNZLGI9Yi5pQmFyV2lkdGgsZj1oKGEublNjcm9sbEhlYWQpLGc9ZlswXS5zdHlsZSxqPWYuY2hpbGRyZW4oXCJkaXZcIiksaT1qWzBdLnN0eWxlLG49ai5jaGlsZHJlbihcInRhYmxlXCIpLFxyXG4gICAgICAgIGo9YS5uU2Nyb2xsQm9keSxsPWgoaikscT1qLnN0eWxlLHI9aChhLm5TY3JvbGxGb290KS5jaGlsZHJlbihcImRpdlwiKSxtPXIuY2hpbGRyZW4oXCJ0YWJsZVwiKSxwPWgoYS5uVEhlYWQpLG89aChhLm5UYWJsZSksdD1vWzBdLHM9dC5zdHlsZSx1PWEublRGb290P2goYS5uVEZvb3QpOm51bGwseD1hLm9Ccm93c2VyLFU9eC5iU2Nyb2xsT3ZlcnNpemUsYWM9RChhLmFvQ29sdW1ucyxcIm5UaFwiKSxQLEwsUSx3LFdhPVtdLHk9W10sej1bXSxBPVtdLEIsQz1mdW5jdGlvbihhKXthPWEuc3R5bGU7YS5wYWRkaW5nVG9wPVwiMFwiO2EucGFkZGluZ0JvdHRvbT1cIjBcIjthLmJvcmRlclRvcFdpZHRoPVwiMFwiO2EuYm9yZGVyQm90dG9tV2lkdGg9XCIwXCI7YS5oZWlnaHQ9MH07TD1qLnNjcm9sbEhlaWdodD5qLmNsaWVudEhlaWdodDtpZihhLnNjcm9sbEJhclZpcyE9PUwmJmEuc2Nyb2xsQmFyVmlzIT09aylhLnNjcm9sbEJhclZpcz1MLFooYSk7ZWxzZXthLnNjcm9sbEJhclZpcz1MO28uY2hpbGRyZW4oXCJ0aGVhZCwgdGZvb3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgdSYmKFE9dS5jbG9uZSgpLnByZXBlbmRUbyhvKSxQPXUuZmluZChcInRyXCIpLFE9US5maW5kKFwidHJcIikpO3c9cC5jbG9uZSgpLnByZXBlbmRUbyhvKTtwPXAuZmluZChcInRyXCIpO0w9dy5maW5kKFwidHJcIik7dy5maW5kKFwidGgsIHRkXCIpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTtjfHwocS53aWR0aD1cIjEwMCVcIixmWzBdLnN0eWxlLndpZHRoPVwiMTAwJVwiKTtoLmVhY2godGEoYSx3KSxmdW5jdGlvbihiLGMpe0I9JChhLGIpO2Muc3R5bGUud2lkdGg9YS5hb0NvbHVtbnNbQl0uc1dpZHRofSk7dSYmSShmdW5jdGlvbihhKXthLnN0eWxlLndpZHRoPVwiXCJ9LFEpO2Y9by5vdXRlcldpZHRoKCk7aWYoXCJcIj09PWMpe3Mud2lkdGg9XCIxMDAlXCI7aWYoVSYmKG8uZmluZChcInRib2R5XCIpLmhlaWdodCgpPmoub2Zmc2V0SGVpZ2h0fHxcInNjcm9sbFwiPT1sLmNzcyhcIm92ZXJmbG93LXlcIikpKXMud2lkdGg9dihvLm91dGVyV2lkdGgoKS1iKTtmPW8ub3V0ZXJXaWR0aCgpfWVsc2VcIlwiIT09ZCYmKHMud2lkdGg9XHJcbiAgICAgICAgICAgIHYoZCksZj1vLm91dGVyV2lkdGgoKSk7SShDLEwpO0koZnVuY3Rpb24oYSl7ei5wdXNoKGEuaW5uZXJIVE1MKTtXYS5wdXNoKHYoaChhKS5jc3MoXCJ3aWR0aFwiKSkpfSxMKTtJKGZ1bmN0aW9uKGEsYil7aWYoaC5pbkFycmF5KGEsYWMpIT09LTEpYS5zdHlsZS53aWR0aD1XYVtiXX0scCk7aChMKS5oZWlnaHQoMCk7dSYmKEkoQyxRKSxJKGZ1bmN0aW9uKGEpe0EucHVzaChhLmlubmVySFRNTCk7eS5wdXNoKHYoaChhKS5jc3MoXCJ3aWR0aFwiKSkpfSxRKSxJKGZ1bmN0aW9uKGEsYil7YS5zdHlsZS53aWR0aD15W2JdfSxQKSxoKFEpLmhlaWdodCgwKSk7SShmdW5jdGlvbihhLGIpe2EuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiZGF0YVRhYmxlc19zaXppbmdcIiBzdHlsZT1cImhlaWdodDowO292ZXJmbG93OmhpZGRlbjtcIj4nK3pbYl0rXCI8L2Rpdj5cIjthLnN0eWxlLndpZHRoPVdhW2JdfSxMKTt1JiZJKGZ1bmN0aW9uKGEsYil7YS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJkYXRhVGFibGVzX3NpemluZ1wiIHN0eWxlPVwiaGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO1wiPicrXHJcbiAgICAgICAgICAgIEFbYl0rXCI8L2Rpdj5cIjthLnN0eWxlLndpZHRoPXlbYl19LFEpO2lmKG8ub3V0ZXJXaWR0aCgpPGYpe1A9ai5zY3JvbGxIZWlnaHQ+ai5vZmZzZXRIZWlnaHR8fFwic2Nyb2xsXCI9PWwuY3NzKFwib3ZlcmZsb3cteVwiKT9mK2I6ZjtpZihVJiYoai5zY3JvbGxIZWlnaHQ+ai5vZmZzZXRIZWlnaHR8fFwic2Nyb2xsXCI9PWwuY3NzKFwib3ZlcmZsb3cteVwiKSkpcy53aWR0aD12KFAtYik7KFwiXCI9PT1jfHxcIlwiIT09ZCkmJksoYSwxLFwiUG9zc2libGUgY29sdW1uIG1pc2FsaWdubWVudFwiLDYpfWVsc2UgUD1cIjEwMCVcIjtxLndpZHRoPXYoUCk7Zy53aWR0aD12KFApO3UmJihhLm5TY3JvbGxGb290LnN0eWxlLndpZHRoPXYoUCkpOyFlJiZVJiYocS5oZWlnaHQ9dih0Lm9mZnNldEhlaWdodCtiKSk7Yz1vLm91dGVyV2lkdGgoKTtuWzBdLnN0eWxlLndpZHRoPXYoYyk7aS53aWR0aD12KGMpO2Q9by5oZWlnaHQoKT5qLmNsaWVudEhlaWdodHx8XCJzY3JvbGxcIj09bC5jc3MoXCJvdmVyZmxvdy15XCIpO2U9XCJwYWRkaW5nXCIrXHJcbiAgICAgICAgICAgICh4LmJTY3JvbGxiYXJMZWZ0P1wiTGVmdFwiOlwiUmlnaHRcIik7aVtlXT1kP2IrXCJweFwiOlwiMHB4XCI7dSYmKG1bMF0uc3R5bGUud2lkdGg9dihjKSxyWzBdLnN0eWxlLndpZHRoPXYoYyksclswXS5zdHlsZVtlXT1kP2IrXCJweFwiOlwiMHB4XCIpO28uY2hpbGRyZW4oXCJjb2xncm91cFwiKS5pbnNlcnRCZWZvcmUoby5jaGlsZHJlbihcInRoZWFkXCIpKTtsLnNjcm9sbCgpO2lmKChhLmJTb3J0ZWR8fGEuYkZpbHRlcmVkKSYmIWEuX2RyYXdIb2xkKWouc2Nyb2xsVG9wPTB9fWZ1bmN0aW9uIEkoYSxiLGMpe2Zvcih2YXIgZD0wLGU9MCxmPWIubGVuZ3RoLGcsajtlPGY7KXtnPWJbZV0uZmlyc3RDaGlsZDtmb3Ioaj1jP2NbZV0uZmlyc3RDaGlsZDpudWxsO2c7KTE9PT1nLm5vZGVUeXBlJiYoYz9hKGcsaixkKTphKGcsZCksZCsrKSxnPWcubmV4dFNpYmxpbmcsaj1jP2oubmV4dFNpYmxpbmc6bnVsbDtlKyt9fWZ1bmN0aW9uIEhhKGEpe3ZhciBiPWEublRhYmxlLGM9YS5hb0NvbHVtbnMsZD1hLm9TY3JvbGwsXHJcbiAgICAgICAgZT1kLnNZLGY9ZC5zWCxnPWQuc1hJbm5lcixqPWMubGVuZ3RoLGk9bmEoYSxcImJWaXNpYmxlXCIpLG49aChcInRoXCIsYS5uVEhlYWQpLGw9Yi5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSxrPWIucGFyZW50Tm9kZSxyPSExLG0scCxvPWEub0Jyb3dzZXIsZD1vLmJTY3JvbGxPdmVyc2l6ZTsobT1iLnN0eWxlLndpZHRoKSYmLTEhPT1tLmluZGV4T2YoXCIlXCIpJiYobD1tKTtmb3IobT0wO208aS5sZW5ndGg7bSsrKXA9Y1tpW21dXSxudWxsIT09cC5zV2lkdGgmJihwLnNXaWR0aD1HYihwLnNXaWR0aE9yaWcsaykscj0hMCk7aWYoZHx8IXImJiFmJiYhZSYmaj09YmEoYSkmJmo9PW4ubGVuZ3RoKWZvcihtPTA7bTxqO20rKylpPSQoYSxtKSxudWxsIT09aSYmKGNbaV0uc1dpZHRoPXYobi5lcShtKS53aWR0aCgpKSk7ZWxzZXtqPWgoYikuY2xvbmUoKS5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIikucmVtb3ZlQXR0cihcImlkXCIpO2ouZmluZChcInRib2R5IHRyXCIpLnJlbW92ZSgpO3ZhciB0PWgoXCI8dHIvPlwiKS5hcHBlbmRUbyhqLmZpbmQoXCJ0Ym9keVwiKSk7XHJcbiAgICAgICAgai5maW5kKFwidGhlYWQsIHRmb290XCIpLnJlbW92ZSgpO2ouYXBwZW5kKGgoYS5uVEhlYWQpLmNsb25lKCkpLmFwcGVuZChoKGEublRGb290KS5jbG9uZSgpKTtqLmZpbmQoXCJ0Zm9vdCB0aCwgdGZvb3QgdGRcIikuY3NzKFwid2lkdGhcIixcIlwiKTtuPXRhKGEsai5maW5kKFwidGhlYWRcIilbMF0pO2ZvcihtPTA7bTxpLmxlbmd0aDttKyspcD1jW2lbbV1dLG5bbV0uc3R5bGUud2lkdGg9bnVsbCE9PXAuc1dpZHRoT3JpZyYmXCJcIiE9PXAuc1dpZHRoT3JpZz92KHAuc1dpZHRoT3JpZyk6XCJcIixwLnNXaWR0aE9yaWcmJmYmJmgoblttXSkuYXBwZW5kKGgoXCI8ZGl2Lz5cIikuY3NzKHt3aWR0aDpwLnNXaWR0aE9yaWcsbWFyZ2luOjAscGFkZGluZzowLGJvcmRlcjowLGhlaWdodDoxfSkpO2lmKGEuYW9EYXRhLmxlbmd0aClmb3IobT0wO208aS5sZW5ndGg7bSsrKXI9aVttXSxwPWNbcl0saChIYihhLHIpKS5jbG9uZSghMSkuYXBwZW5kKHAuc0NvbnRlbnRQYWRkaW5nKS5hcHBlbmRUbyh0KTtoKFwiW25hbWVdXCIsXHJcbiAgICAgICAgICAgIGopLnJlbW92ZUF0dHIoXCJuYW1lXCIpO3A9aChcIjxkaXYvPlwiKS5jc3MoZnx8ZT97cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDowLGxlZnQ6MCxoZWlnaHQ6MSxyaWdodDowLG92ZXJmbG93OlwiaGlkZGVuXCJ9Ont9KS5hcHBlbmQoaikuYXBwZW5kVG8oayk7ZiYmZz9qLndpZHRoKGcpOmY/KGouY3NzKFwid2lkdGhcIixcImF1dG9cIiksai5yZW1vdmVBdHRyKFwid2lkdGhcIiksai53aWR0aCgpPGsuY2xpZW50V2lkdGgmJmwmJmoud2lkdGgoay5jbGllbnRXaWR0aCkpOmU/ai53aWR0aChrLmNsaWVudFdpZHRoKTpsJiZqLndpZHRoKGwpO2ZvcihtPWU9MDttPGkubGVuZ3RoO20rKylrPWgoblttXSksZz1rLm91dGVyV2lkdGgoKS1rLndpZHRoKCksaz1vLmJCb3VuZGluZz9NYXRoLmNlaWwoblttXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk6ay5vdXRlcldpZHRoKCksZSs9ayxjW2lbbV1dLnNXaWR0aD12KGstZyk7Yi5zdHlsZS53aWR0aD12KGUpO3AucmVtb3ZlKCl9bCYmKGIuc3R5bGUud2lkdGg9XHJcbiAgICAgICAgdihsKSk7aWYoKGx8fGYpJiYhYS5fcmVzekV2dCliPWZ1bmN0aW9uKCl7aChFKS5vbihcInJlc2l6ZS5EVC1cIithLnNJbnN0YW5jZSxRYShmdW5jdGlvbigpe1ooYSl9KSl9LGQ/c2V0VGltZW91dChiLDFFMyk6YigpLGEuX3Jlc3pFdnQ9ITB9ZnVuY3Rpb24gR2IoYSxiKXtpZighYSlyZXR1cm4gMDt2YXIgYz1oKFwiPGRpdi8+XCIpLmNzcyhcIndpZHRoXCIsdihhKSkuYXBwZW5kVG8oYnx8SC5ib2R5KSxkPWNbMF0ub2Zmc2V0V2lkdGg7Yy5yZW1vdmUoKTtyZXR1cm4gZH1mdW5jdGlvbiBIYihhLGIpe3ZhciBjPUliKGEsYik7aWYoMD5jKXJldHVybiBudWxsO3ZhciBkPWEuYW9EYXRhW2NdO3JldHVybiFkLm5Ucj9oKFwiPHRkLz5cIikuaHRtbChCKGEsYyxiLFwiZGlzcGxheVwiKSlbMF06ZC5hbkNlbGxzW2JdfWZ1bmN0aW9uIEliKGEsYil7Zm9yKHZhciBjLGQ9LTEsZT0tMSxmPTAsZz1hLmFvRGF0YS5sZW5ndGg7ZjxnO2YrKyljPUIoYSxmLGIsXCJkaXNwbGF5XCIpK1wiXCIsYz1jLnJlcGxhY2UoYmMsXHJcbiAgICAgICAgXCJcIiksYz1jLnJlcGxhY2UoLyZuYnNwOy9nLFwiIFwiKSxjLmxlbmd0aD5kJiYoZD1jLmxlbmd0aCxlPWYpO3JldHVybiBlfWZ1bmN0aW9uIHYoYSl7cmV0dXJuIG51bGw9PT1hP1wiMHB4XCI6XCJudW1iZXJcIj09dHlwZW9mIGE/MD5hP1wiMHB4XCI6YStcInB4XCI6YS5tYXRjaCgvXFxkJC8pP2ErXCJweFwiOmF9ZnVuY3Rpb24gVyhhKXt2YXIgYixjLGQ9W10sZT1hLmFvQ29sdW1ucyxmLGcsaixpO2I9YS5hYVNvcnRpbmdGaXhlZDtjPWguaXNQbGFpbk9iamVjdChiKTt2YXIgbj1bXTtmPWZ1bmN0aW9uKGEpe2EubGVuZ3RoJiYhaC5pc0FycmF5KGFbMF0pP24ucHVzaChhKTpoLm1lcmdlKG4sYSl9O2guaXNBcnJheShiKSYmZihiKTtjJiZiLnByZSYmZihiLnByZSk7ZihhLmFhU29ydGluZyk7YyYmYi5wb3N0JiZmKGIucG9zdCk7Zm9yKGE9MDthPG4ubGVuZ3RoO2ErKyl7aT1uW2FdWzBdO2Y9ZVtpXS5hRGF0YVNvcnQ7Yj0wO2ZvcihjPWYubGVuZ3RoO2I8YztiKyspZz1mW2JdLGo9ZVtnXS5zVHlwZXx8XHJcbiAgICAgICAgXCJzdHJpbmdcIixuW2FdLl9pZHg9PT1rJiYoblthXS5faWR4PWguaW5BcnJheShuW2FdWzFdLGVbZ10uYXNTb3J0aW5nKSksZC5wdXNoKHtzcmM6aSxjb2w6ZyxkaXI6blthXVsxXSxpbmRleDpuW2FdLl9pZHgsdHlwZTpqLGZvcm1hdHRlcjptLmV4dC50eXBlLm9yZGVyW2orXCItcHJlXCJdfSl9cmV0dXJuIGR9ZnVuY3Rpb24gb2IoYSl7dmFyIGIsYyxkPVtdLGU9bS5leHQudHlwZS5vcmRlcixmPWEuYW9EYXRhLGc9MCxqLGk9YS5haURpc3BsYXlNYXN0ZXIsaDtJYShhKTtoPVcoYSk7Yj0wO2ZvcihjPWgubGVuZ3RoO2I8YztiKyspaj1oW2JdLGouZm9ybWF0dGVyJiZnKyssSmIoYSxqLmNvbCk7aWYoXCJzc3BcIiE9eShhKSYmMCE9PWgubGVuZ3RoKXtiPTA7Zm9yKGM9aS5sZW5ndGg7YjxjO2IrKylkW2lbYl1dPWI7Zz09PWgubGVuZ3RoP2kuc29ydChmdW5jdGlvbihhLGIpe3ZhciBjLGUsZyxqLGk9aC5sZW5ndGgsaz1mW2FdLl9hU29ydERhdGEsbT1mW2JdLl9hU29ydERhdGE7Zm9yKGc9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwO2c8aTtnKyspaWYoaj1oW2ddLGM9a1tqLmNvbF0sZT1tW2ouY29sXSxjPWM8ZT8tMTpjPmU/MTowLDAhPT1jKXJldHVyblwiYXNjXCI9PT1qLmRpcj9jOi1jO2M9ZFthXTtlPWRbYl07cmV0dXJuIGM8ZT8tMTpjPmU/MTowfSk6aS5zb3J0KGZ1bmN0aW9uKGEsYil7dmFyIGMsZyxqLGksaz1oLmxlbmd0aCxtPWZbYV0uX2FTb3J0RGF0YSxwPWZbYl0uX2FTb3J0RGF0YTtmb3Ioaj0wO2o8aztqKyspaWYoaT1oW2pdLGM9bVtpLmNvbF0sZz1wW2kuY29sXSxpPWVbaS50eXBlK1wiLVwiK2kuZGlyXXx8ZVtcInN0cmluZy1cIitpLmRpcl0sYz1pKGMsZyksMCE9PWMpcmV0dXJuIGM7Yz1kW2FdO2c9ZFtiXTtyZXR1cm4gYzxnPy0xOmM+Zz8xOjB9KX1hLmJTb3J0ZWQ9ITB9ZnVuY3Rpb24gS2IoYSl7Zm9yKHZhciBiLGMsZD1hLmFvQ29sdW1ucyxlPVcoYSksYT1hLm9MYW5ndWFnZS5vQXJpYSxmPTAsZz1kLmxlbmd0aDtmPGc7ZisrKXtjPWRbZl07dmFyIGo9Yy5hc1NvcnRpbmc7Yj1jLnNUaXRsZS5yZXBsYWNlKC88Lio/Pi9nLFxyXG4gICAgICAgIFwiXCIpO3ZhciBpPWMublRoO2kucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1zb3J0XCIpO2MuYlNvcnRhYmxlJiYoMDxlLmxlbmd0aCYmZVswXS5jb2w9PWY/KGkuc2V0QXR0cmlidXRlKFwiYXJpYS1zb3J0XCIsXCJhc2NcIj09ZVswXS5kaXI/XCJhc2NlbmRpbmdcIjpcImRlc2NlbmRpbmdcIiksYz1qW2VbMF0uaW5kZXgrMV18fGpbMF0pOmM9alswXSxiKz1cImFzY1wiPT09Yz9hLnNTb3J0QXNjZW5kaW5nOmEuc1NvcnREZXNjZW5kaW5nKTtpLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixiKX19ZnVuY3Rpb24gWGEoYSxiLGMsZCl7dmFyIGU9YS5hYVNvcnRpbmcsZj1hLmFvQ29sdW1uc1tiXS5hc1NvcnRpbmcsZz1mdW5jdGlvbihhLGIpe3ZhciBjPWEuX2lkeDtjPT09ayYmKGM9aC5pbkFycmF5KGFbMV0sZikpO3JldHVybiBjKzE8Zi5sZW5ndGg/YysxOmI/bnVsbDowfTtcIm51bWJlclwiPT09dHlwZW9mIGVbMF0mJihlPWEuYWFTb3J0aW5nPVtlXSk7YyYmYS5vRmVhdHVyZXMuYlNvcnRNdWx0aT8oYz1oLmluQXJyYXkoYixcclxuICAgICAgICAgICAgRChlLFwiMFwiKSksLTEhPT1jPyhiPWcoZVtjXSwhMCksbnVsbD09PWImJjE9PT1lLmxlbmd0aCYmKGI9MCksbnVsbD09PWI/ZS5zcGxpY2UoYywxKTooZVtjXVsxXT1mW2JdLGVbY10uX2lkeD1iKSk6KGUucHVzaChbYixmWzBdLDBdKSxlW2UubGVuZ3RoLTFdLl9pZHg9MCkpOmUubGVuZ3RoJiZlWzBdWzBdPT1iPyhiPWcoZVswXSksZS5sZW5ndGg9MSxlWzBdWzFdPWZbYl0sZVswXS5faWR4PWIpOihlLmxlbmd0aD0wLGUucHVzaChbYixmWzBdXSksZVswXS5faWR4PTApO1QoYSk7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZChhKX1mdW5jdGlvbiBPYShhLGIsYyxkKXt2YXIgZT1hLmFvQ29sdW1uc1tjXTtZYShiLHt9LGZ1bmN0aW9uKGIpeyExIT09ZS5iU29ydGFibGUmJihhLm9GZWF0dXJlcy5iUHJvY2Vzc2luZz8oQyhhLCEwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7WGEoYSxjLGIuc2hpZnRLZXksZCk7XCJzc3BcIiE9PXkoYSkmJkMoYSwhMSl9LDApKTpYYShhLGMsYi5zaGlmdEtleSxkKSl9KX1cclxuICAgIGZ1bmN0aW9uIHlhKGEpe3ZhciBiPWEuYUxhc3RTb3J0LGM9YS5vQ2xhc3Nlcy5zU29ydENvbHVtbixkPVcoYSksZT1hLm9GZWF0dXJlcyxmLGc7aWYoZS5iU29ydCYmZS5iU29ydENsYXNzZXMpe2U9MDtmb3IoZj1iLmxlbmd0aDtlPGY7ZSsrKWc9YltlXS5zcmMsaChEKGEuYW9EYXRhLFwiYW5DZWxsc1wiLGcpKS5yZW1vdmVDbGFzcyhjKygyPmU/ZSsxOjMpKTtlPTA7Zm9yKGY9ZC5sZW5ndGg7ZTxmO2UrKylnPWRbZV0uc3JjLGgoRChhLmFvRGF0YSxcImFuQ2VsbHNcIixnKSkuYWRkQ2xhc3MoYysoMj5lP2UrMTozKSl9YS5hTGFzdFNvcnQ9ZH1mdW5jdGlvbiBKYihhLGIpe3ZhciBjPWEuYW9Db2x1bW5zW2JdLGQ9bS5leHQub3JkZXJbYy5zU29ydERhdGFUeXBlXSxlO2QmJihlPWQuY2FsbChhLm9JbnN0YW5jZSxhLGIsYWEoYSxiKSkpO2Zvcih2YXIgZixnPW0uZXh0LnR5cGUub3JkZXJbYy5zVHlwZStcIi1wcmVcIl0saj0wLGk9YS5hb0RhdGEubGVuZ3RoO2o8aTtqKyspaWYoYz1hLmFvRGF0YVtqXSxcclxuICAgICAgICBjLl9hU29ydERhdGF8fChjLl9hU29ydERhdGE9W10pLCFjLl9hU29ydERhdGFbYl18fGQpZj1kP2Vbal06QihhLGosYixcInNvcnRcIiksYy5fYVNvcnREYXRhW2JdPWc/ZyhmKTpmfWZ1bmN0aW9uIHphKGEpe2lmKGEub0ZlYXR1cmVzLmJTdGF0ZVNhdmUmJiFhLmJEZXN0cm95aW5nKXt2YXIgYj17dGltZTorbmV3IERhdGUsc3RhcnQ6YS5faURpc3BsYXlTdGFydCxsZW5ndGg6YS5faURpc3BsYXlMZW5ndGgsb3JkZXI6aC5leHRlbmQoITAsW10sYS5hYVNvcnRpbmcpLHNlYXJjaDpDYihhLm9QcmV2aW91c1NlYXJjaCksY29sdW1uczpoLm1hcChhLmFvQ29sdW1ucyxmdW5jdGlvbihiLGQpe3JldHVybnt2aXNpYmxlOmIuYlZpc2libGUsc2VhcmNoOkNiKGEuYW9QcmVTZWFyY2hDb2xzW2RdKX19KX07cyhhLFwiYW9TdGF0ZVNhdmVQYXJhbXNcIixcInN0YXRlU2F2ZVBhcmFtc1wiLFthLGJdKTthLm9TYXZlZFN0YXRlPWI7YS5mblN0YXRlU2F2ZUNhbGxiYWNrLmNhbGwoYS5vSW5zdGFuY2UsYSxcclxuICAgICAgICBiKX19ZnVuY3Rpb24gTGIoYSxiLGMpe3ZhciBkLGUsZj1hLmFvQ29sdW1ucyxiPWZ1bmN0aW9uKGIpe2lmKGImJmIudGltZSl7dmFyIGc9cyhhLFwiYW9TdGF0ZUxvYWRQYXJhbXNcIixcInN0YXRlTG9hZFBhcmFtc1wiLFthLGJdKTtpZigtMT09PWguaW5BcnJheSghMSxnKSYmKGc9YS5pU3RhdGVEdXJhdGlvbiwhKDA8ZyYmYi50aW1lPCtuZXcgRGF0ZS0xRTMqZykmJiEoYi5jb2x1bW5zJiZmLmxlbmd0aCE9PWIuY29sdW1ucy5sZW5ndGgpKSl7YS5vTG9hZGVkU3RhdGU9aC5leHRlbmQoITAse30sYik7Yi5zdGFydCE9PWsmJihhLl9pRGlzcGxheVN0YXJ0PWIuc3RhcnQsYS5pSW5pdERpc3BsYXlTdGFydD1iLnN0YXJ0KTtiLmxlbmd0aCE9PWsmJihhLl9pRGlzcGxheUxlbmd0aD1iLmxlbmd0aCk7Yi5vcmRlciE9PWsmJihhLmFhU29ydGluZz1bXSxoLmVhY2goYi5vcmRlcixmdW5jdGlvbihiLGMpe2EuYWFTb3J0aW5nLnB1c2goY1swXT49Zi5sZW5ndGg/WzAsY1sxXV06Yyl9KSk7Yi5zZWFyY2ghPT1cclxuICAgIGsmJmguZXh0ZW5kKGEub1ByZXZpb3VzU2VhcmNoLERiKGIuc2VhcmNoKSk7aWYoYi5jb2x1bW5zKXtkPTA7Zm9yKGU9Yi5jb2x1bW5zLmxlbmd0aDtkPGU7ZCsrKWc9Yi5jb2x1bW5zW2RdLGcudmlzaWJsZSE9PWsmJihmW2RdLmJWaXNpYmxlPWcudmlzaWJsZSksZy5zZWFyY2ghPT1rJiZoLmV4dGVuZChhLmFvUHJlU2VhcmNoQ29sc1tkXSxEYihnLnNlYXJjaCkpfXMoYSxcImFvU3RhdGVMb2FkZWRcIixcInN0YXRlTG9hZGVkXCIsW2EsYl0pfX1jKCl9O2lmKGEub0ZlYXR1cmVzLmJTdGF0ZVNhdmUpe3ZhciBnPWEuZm5TdGF0ZUxvYWRDYWxsYmFjay5jYWxsKGEub0luc3RhbmNlLGEsYik7ZyE9PWsmJmIoZyl9ZWxzZSBjKCl9ZnVuY3Rpb24gQWEoYSl7dmFyIGI9bS5zZXR0aW5ncyxhPWguaW5BcnJheShhLEQoYixcIm5UYWJsZVwiKSk7cmV0dXJuLTEhPT1hP2JbYV06bnVsbH1mdW5jdGlvbiBLKGEsYixjLGQpe2M9XCJEYXRhVGFibGVzIHdhcm5pbmc6IFwiKyhhP1widGFibGUgaWQ9XCIrYS5zVGFibGVJZCtcclxuICAgICAgICAgICAgXCIgLSBcIjpcIlwiKStjO2QmJihjKz1cIi4gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBlcnJvciwgcGxlYXNlIHNlZSBodHRwOi8vZGF0YXRhYmxlcy5uZXQvdG4vXCIrZCk7aWYoYilFLmNvbnNvbGUmJmNvbnNvbGUubG9nJiZjb25zb2xlLmxvZyhjKTtlbHNlIGlmKGI9bS5leHQsYj1iLnNFcnJNb2RlfHxiLmVyck1vZGUsYSYmcyhhLG51bGwsXCJlcnJvclwiLFthLGQsY10pLFwiYWxlcnRcIj09YilhbGVydChjKTtlbHNle2lmKFwidGhyb3dcIj09Yil0aHJvdyBFcnJvcihjKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZiKGEsZCxjKX19ZnVuY3Rpb24gRihhLGIsYyxkKXtoLmlzQXJyYXkoYyk/aC5lYWNoKGMsZnVuY3Rpb24oYyxkKXtoLmlzQXJyYXkoZCk/RihhLGIsZFswXSxkWzFdKTpGKGEsYixkKX0pOihkPT09ayYmKGQ9YyksYltjXSE9PWsmJihhW2RdPWJbY10pKX1mdW5jdGlvbiBNYihhLGIsYyl7dmFyIGQsZTtmb3IoZSBpbiBiKWIuaGFzT3duUHJvcGVydHkoZSkmJihkPWJbZV0sXHJcbiAgICAgICAgaC5pc1BsYWluT2JqZWN0KGQpPyhoLmlzUGxhaW5PYmplY3QoYVtlXSl8fChhW2VdPXt9KSxoLmV4dGVuZCghMCxhW2VdLGQpKTphW2VdPWMmJlwiZGF0YVwiIT09ZSYmXCJhYURhdGFcIiE9PWUmJmguaXNBcnJheShkKT9kLnNsaWNlKCk6ZCk7cmV0dXJuIGF9ZnVuY3Rpb24gWWEoYSxiLGMpe2goYSkub24oXCJjbGljay5EVFwiLGIsZnVuY3Rpb24oYil7YS5ibHVyKCk7YyhiKX0pLm9uKFwia2V5cHJlc3MuRFRcIixiLGZ1bmN0aW9uKGEpezEzPT09YS53aGljaCYmKGEucHJldmVudERlZmF1bHQoKSxjKGEpKX0pLm9uKFwic2VsZWN0c3RhcnQuRFRcIixmdW5jdGlvbigpe3JldHVybiExfSl9ZnVuY3Rpb24geihhLGIsYyxkKXtjJiZhW2JdLnB1c2goe2ZuOmMsc05hbWU6ZH0pfWZ1bmN0aW9uIHMoYSxiLGMsZCl7dmFyIGU9W107YiYmKGU9aC5tYXAoYVtiXS5zbGljZSgpLnJldmVyc2UoKSxmdW5jdGlvbihiKXtyZXR1cm4gYi5mbi5hcHBseShhLm9JbnN0YW5jZSxkKX0pKTtudWxsIT09YyYmKGI9aC5FdmVudChjK1xyXG4gICAgICAgIFwiLmR0XCIpLGgoYS5uVGFibGUpLnRyaWdnZXIoYixkKSxlLnB1c2goYi5yZXN1bHQpKTtyZXR1cm4gZX1mdW5jdGlvbiBVYShhKXt2YXIgYj1hLl9pRGlzcGxheVN0YXJ0LGM9YS5mbkRpc3BsYXlFbmQoKSxkPWEuX2lEaXNwbGF5TGVuZ3RoO2I+PWMmJihiPWMtZCk7Yi09YiVkO2lmKC0xPT09ZHx8MD5iKWI9MDthLl9pRGlzcGxheVN0YXJ0PWJ9ZnVuY3Rpb24gUGEoYSxiKXt2YXIgYz1hLnJlbmRlcmVyLGQ9bS5leHQucmVuZGVyZXJbYl07cmV0dXJuIGguaXNQbGFpbk9iamVjdChjKSYmY1tiXT9kW2NbYl1dfHxkLl86XCJzdHJpbmdcIj09PXR5cGVvZiBjP2RbY118fGQuXzpkLl99ZnVuY3Rpb24geShhKXtyZXR1cm4gYS5vRmVhdHVyZXMuYlNlcnZlclNpZGU/XCJzc3BcIjphLmFqYXh8fGEuc0FqYXhTb3VyY2U/XCJhamF4XCI6XCJkb21cIn1mdW5jdGlvbiBpYShhLGIpe3ZhciBjPVtdLGM9TmIubnVtYmVyc19sZW5ndGgsZD1NYXRoLmZsb29yKGMvMik7Yjw9Yz9jPVgoMCxiKTphPD1kPyhjPVgoMCxcclxuICAgICAgICAgICAgICAgIGMtMiksYy5wdXNoKFwiZWxsaXBzaXNcIiksYy5wdXNoKGItMSkpOihhPj1iLTEtZD9jPVgoYi0oYy0yKSxiKTooYz1YKGEtZCsyLGErZC0xKSxjLnB1c2goXCJlbGxpcHNpc1wiKSxjLnB1c2goYi0xKSksYy5zcGxpY2UoMCwwLFwiZWxsaXBzaXNcIiksYy5zcGxpY2UoMCwwLDApKTtjLkRUX2VsPVwic3BhblwiO3JldHVybiBjfWZ1bmN0aW9uIGZiKGEpe2guZWFjaCh7bnVtOmZ1bmN0aW9uKGIpe3JldHVybiBCYShiLGEpfSxcIm51bS1mbXRcIjpmdW5jdGlvbihiKXtyZXR1cm4gQmEoYixhLFphKX0sXCJodG1sLW51bVwiOmZ1bmN0aW9uKGIpe3JldHVybiBCYShiLGEsQ2EpfSxcImh0bWwtbnVtLWZtdFwiOmZ1bmN0aW9uKGIpe3JldHVybiBCYShiLGEsQ2EsWmEpfX0sZnVuY3Rpb24oYixjKXt4LnR5cGUub3JkZXJbYithK1wiLXByZVwiXT1jO2IubWF0Y2goL15odG1sXFwtLykmJih4LnR5cGUuc2VhcmNoW2IrYV09eC50eXBlLnNlYXJjaC5odG1sKX0pfWZ1bmN0aW9uIE9iKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPVxyXG4gICAgICAgIFtBYSh0aGlzW20uZXh0LmlBcGlJbmRleF0pXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7cmV0dXJuIG0uZXh0LmludGVybmFsW2FdLmFwcGx5KHRoaXMsYil9fXZhciBtPWZ1bmN0aW9uKGEpe3RoaXMuJD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFwaSghMCkuJChhLGIpfTt0aGlzLl89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hcGkoITApLnJvd3MoYSxiKS5kYXRhKCl9O3RoaXMuYXBpPWZ1bmN0aW9uKGEpe3JldHVybiBhP25ldyB0KEFhKHRoaXNbeC5pQXBpSW5kZXhdKSk6bmV3IHQodGhpcyl9O3RoaXMuZm5BZGREYXRhPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5hcGkoITApLGQ9aC5pc0FycmF5KGEpJiYoaC5pc0FycmF5KGFbMF0pfHxoLmlzUGxhaW5PYmplY3QoYVswXSkpP2Mucm93cy5hZGQoYSk6Yy5yb3cuYWRkKGEpOyhiPT09a3x8YikmJmMuZHJhdygpO3JldHVybiBkLmZsYXR0ZW4oKS50b0FycmF5KCl9O3RoaXMuZm5BZGp1c3RDb2x1bW5TaXppbmc9XHJcbiAgICAgICAgZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hcGkoITApLmNvbHVtbnMuYWRqdXN0KCksYz1iLnNldHRpbmdzKClbMF0sZD1jLm9TY3JvbGw7YT09PWt8fGE/Yi5kcmF3KCExKTooXCJcIiE9PWQuc1h8fFwiXCIhPT1kLnNZKSYmbWEoYyl9O3RoaXMuZm5DbGVhclRhYmxlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYXBpKCEwKS5jbGVhcigpOyhhPT09a3x8YSkmJmIuZHJhdygpfTt0aGlzLmZuQ2xvc2U9ZnVuY3Rpb24oYSl7dGhpcy5hcGkoITApLnJvdyhhKS5jaGlsZC5oaWRlKCl9O3RoaXMuZm5EZWxldGVSb3c9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuYXBpKCEwKSxhPWQucm93cyhhKSxlPWEuc2V0dGluZ3MoKVswXSxoPWUuYW9EYXRhW2FbMF1bMF1dO2EucmVtb3ZlKCk7YiYmYi5jYWxsKHRoaXMsZSxoKTsoYz09PWt8fGMpJiZkLmRyYXcoKTtyZXR1cm4gaH07dGhpcy5mbkRlc3Ryb3k9ZnVuY3Rpb24oYSl7dGhpcy5hcGkoITApLmRlc3Ryb3koYSl9O3RoaXMuZm5EcmF3PWZ1bmN0aW9uKGEpe3RoaXMuYXBpKCEwKS5kcmF3KGEpfTtcclxuICAgICAgICB0aGlzLmZuRmlsdGVyPWZ1bmN0aW9uKGEsYixjLGQsZSxoKXtlPXRoaXMuYXBpKCEwKTtudWxsPT09Ynx8Yj09PWs/ZS5zZWFyY2goYSxjLGQsaCk6ZS5jb2x1bW4oYikuc2VhcmNoKGEsYyxkLGgpO2UuZHJhdygpfTt0aGlzLmZuR2V0RGF0YT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuYXBpKCEwKTtpZihhIT09ayl7dmFyIGQ9YS5ub2RlTmFtZT9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk6XCJcIjtyZXR1cm4gYiE9PWt8fFwidGRcIj09ZHx8XCJ0aFwiPT1kP2MuY2VsbChhLGIpLmRhdGEoKTpjLnJvdyhhKS5kYXRhKCl8fG51bGx9cmV0dXJuIGMuZGF0YSgpLnRvQXJyYXkoKX07dGhpcy5mbkdldE5vZGVzPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYXBpKCEwKTtyZXR1cm4gYSE9PWs/Yi5yb3coYSkubm9kZSgpOmIucm93cygpLm5vZGVzKCkuZmxhdHRlbigpLnRvQXJyYXkoKX07dGhpcy5mbkdldFBvc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYXBpKCEwKSxjPWEubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuXCJUUlwiPT1jP2Iucm93KGEpLmluZGV4KCk6XCJURFwiPT1jfHxcIlRIXCI9PWM/KGE9Yi5jZWxsKGEpLmluZGV4KCksW2Eucm93LGEuY29sdW1uVmlzaWJsZSxhLmNvbHVtbl0pOm51bGx9O3RoaXMuZm5Jc09wZW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBpKCEwKS5yb3coYSkuY2hpbGQuaXNTaG93bigpfTt0aGlzLmZuT3Blbj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuYXBpKCEwKS5yb3coYSkuY2hpbGQoYixjKS5zaG93KCkuY2hpbGQoKVswXX07dGhpcy5mblBhZ2VDaGFuZ2U9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmFwaSghMCkucGFnZShhKTsoYj09PWt8fGIpJiZjLmRyYXcoITEpfTt0aGlzLmZuU2V0Q29sdW1uVmlzPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMuYXBpKCEwKS5jb2x1bW4oYSkudmlzaWJsZShiKTsoYz09PWt8fGMpJiZhLmNvbHVtbnMuYWRqdXN0KCkuZHJhdygpfTt0aGlzLmZuU2V0dGluZ3M9ZnVuY3Rpb24oKXtyZXR1cm4gQWEodGhpc1t4LmlBcGlJbmRleF0pfTtcclxuICAgICAgICB0aGlzLmZuU29ydD1mdW5jdGlvbihhKXt0aGlzLmFwaSghMCkub3JkZXIoYSkuZHJhdygpfTt0aGlzLmZuU29ydExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmFwaSghMCkub3JkZXIubGlzdGVuZXIoYSxiLGMpfTt0aGlzLmZuVXBkYXRlPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGg9dGhpcy5hcGkoITApO2M9PT1rfHxudWxsPT09Yz9oLnJvdyhiKS5kYXRhKGEpOmguY2VsbChiLGMpLmRhdGEoYSk7KGU9PT1rfHxlKSYmaC5jb2x1bW5zLmFkanVzdCgpOyhkPT09a3x8ZCkmJmguZHJhdygpO3JldHVybiAwfTt0aGlzLmZuVmVyc2lvbkNoZWNrPXguZm5WZXJzaW9uQ2hlY2s7dmFyIGI9dGhpcyxjPWE9PT1rLGQ9dGhpcy5sZW5ndGg7YyYmKGE9e30pO3RoaXMub0FwaT10aGlzLmludGVybmFsPXguaW50ZXJuYWw7Zm9yKHZhciBlIGluIG0uZXh0LmludGVybmFsKWUmJih0aGlzW2VdPU9iKGUpKTt0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT17fSxnPTE8ZD9NYihlLGEsITApOlxyXG4gICAgICAgICAgICBhLGo9MCxpLGU9dGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFwiKSxuPSExLGw9bS5kZWZhdWx0cyxxPWgodGhpcyk7aWYoXCJ0YWJsZVwiIT10aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpSyhudWxsLDAsXCJOb24tdGFibGUgbm9kZSBpbml0aWFsaXNhdGlvbiAoXCIrdGhpcy5ub2RlTmFtZStcIilcIiwyKTtlbHNle2diKGwpO2hiKGwuY29sdW1uKTtKKGwsbCwhMCk7SihsLmNvbHVtbixsLmNvbHVtbiwhMCk7SihsLGguZXh0ZW5kKGcscS5kYXRhKCkpKTt2YXIgcj1tLnNldHRpbmdzLGo9MDtmb3IoaT1yLmxlbmd0aDtqPGk7aisrKXt2YXIgcD1yW2pdO2lmKHAublRhYmxlPT10aGlzfHxwLm5USGVhZC5wYXJlbnROb2RlPT10aGlzfHxwLm5URm9vdCYmcC5uVEZvb3QucGFyZW50Tm9kZT09dGhpcyl7dmFyIHQ9Zy5iUmV0cmlldmUhPT1rP2cuYlJldHJpZXZlOmwuYlJldHJpZXZlO2lmKGN8fHQpcmV0dXJuIHAub0luc3RhbmNlO2lmKGcuYkRlc3Ryb3khPT1rP2cuYkRlc3Ryb3k6bC5iRGVzdHJveSl7cC5vSW5zdGFuY2UuZm5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGJyZWFrfWVsc2V7SyhwLDAsXCJDYW5ub3QgcmVpbml0aWFsaXNlIERhdGFUYWJsZVwiLDMpO3JldHVybn19aWYocC5zVGFibGVJZD09dGhpcy5pZCl7ci5zcGxpY2UoaiwxKTticmVha319aWYobnVsbD09PWV8fFwiXCI9PT1lKXRoaXMuaWQ9ZT1cIkRhdGFUYWJsZXNfVGFibGVfXCIrbS5leHQuX3VuaXF1ZSsrO3ZhciBvPWguZXh0ZW5kKCEwLHt9LG0ubW9kZWxzLm9TZXR0aW5ncyx7c0Rlc3Ryb3lXaWR0aDpxWzBdLnN0eWxlLndpZHRoLHNJbnN0YW5jZTplLHNUYWJsZUlkOmV9KTtvLm5UYWJsZT10aGlzO28ub0FwaT1iLmludGVybmFsO28ub0luaXQ9ZztyLnB1c2gobyk7by5vSW5zdGFuY2U9MT09PWIubGVuZ3RoP2I6cS5kYXRhVGFibGUoKTtnYihnKTtnLm9MYW5ndWFnZSYmRmEoZy5vTGFuZ3VhZ2UpO2cuYUxlbmd0aE1lbnUmJiFnLmlEaXNwbGF5TGVuZ3RoJiYoZy5pRGlzcGxheUxlbmd0aD1oLmlzQXJyYXkoZy5hTGVuZ3RoTWVudVswXSk/Zy5hTGVuZ3RoTWVudVswXVswXTpnLmFMZW5ndGhNZW51WzBdKTtcclxuICAgICAgICAgICAgZz1NYihoLmV4dGVuZCghMCx7fSxsKSxnKTtGKG8ub0ZlYXR1cmVzLGcsXCJiUGFnaW5hdGUgYkxlbmd0aENoYW5nZSBiRmlsdGVyIGJTb3J0IGJTb3J0TXVsdGkgYkluZm8gYlByb2Nlc3NpbmcgYkF1dG9XaWR0aCBiU29ydENsYXNzZXMgYlNlcnZlclNpZGUgYkRlZmVyUmVuZGVyXCIuc3BsaXQoXCIgXCIpKTtGKG8sZyxbXCJhc1N0cmlwZUNsYXNzZXNcIixcImFqYXhcIixcImZuU2VydmVyRGF0YVwiLFwiZm5Gb3JtYXROdW1iZXJcIixcInNTZXJ2ZXJNZXRob2RcIixcImFhU29ydGluZ1wiLFwiYWFTb3J0aW5nRml4ZWRcIixcImFMZW5ndGhNZW51XCIsXCJzUGFnaW5hdGlvblR5cGVcIixcInNBamF4U291cmNlXCIsXCJzQWpheERhdGFQcm9wXCIsXCJpU3RhdGVEdXJhdGlvblwiLFwic0RvbVwiLFwiYlNvcnRDZWxsc1RvcFwiLFwiaVRhYkluZGV4XCIsXCJmblN0YXRlTG9hZENhbGxiYWNrXCIsXCJmblN0YXRlU2F2ZUNhbGxiYWNrXCIsXCJyZW5kZXJlclwiLFwic2VhcmNoRGVsYXlcIixcInJvd0lkXCIsW1wiaUNvb2tpZUR1cmF0aW9uXCIsXCJpU3RhdGVEdXJhdGlvblwiXSxcclxuICAgICAgICAgICAgICAgIFtcIm9TZWFyY2hcIixcIm9QcmV2aW91c1NlYXJjaFwiXSxbXCJhb1NlYXJjaENvbHNcIixcImFvUHJlU2VhcmNoQ29sc1wiXSxbXCJpRGlzcGxheUxlbmd0aFwiLFwiX2lEaXNwbGF5TGVuZ3RoXCJdLFtcImJKUXVlcnlVSVwiLFwiYkpVSVwiXV0pO0Yoby5vU2Nyb2xsLGcsW1tcInNTY3JvbGxYXCIsXCJzWFwiXSxbXCJzU2Nyb2xsWElubmVyXCIsXCJzWElubmVyXCJdLFtcInNTY3JvbGxZXCIsXCJzWVwiXSxbXCJiU2Nyb2xsQ29sbGFwc2VcIixcImJDb2xsYXBzZVwiXV0pO0Yoby5vTGFuZ3VhZ2UsZyxcImZuSW5mb0NhbGxiYWNrXCIpO3oobyxcImFvRHJhd0NhbGxiYWNrXCIsZy5mbkRyYXdDYWxsYmFjayxcInVzZXJcIik7eihvLFwiYW9TZXJ2ZXJQYXJhbXNcIixnLmZuU2VydmVyUGFyYW1zLFwidXNlclwiKTt6KG8sXCJhb1N0YXRlU2F2ZVBhcmFtc1wiLGcuZm5TdGF0ZVNhdmVQYXJhbXMsXCJ1c2VyXCIpO3oobyxcImFvU3RhdGVMb2FkUGFyYW1zXCIsZy5mblN0YXRlTG9hZFBhcmFtcyxcInVzZXJcIik7eihvLFwiYW9TdGF0ZUxvYWRlZFwiLGcuZm5TdGF0ZUxvYWRlZCxcclxuICAgICAgICAgICAgICAgIFwidXNlclwiKTt6KG8sXCJhb1Jvd0NhbGxiYWNrXCIsZy5mblJvd0NhbGxiYWNrLFwidXNlclwiKTt6KG8sXCJhb1Jvd0NyZWF0ZWRDYWxsYmFja1wiLGcuZm5DcmVhdGVkUm93LFwidXNlclwiKTt6KG8sXCJhb0hlYWRlckNhbGxiYWNrXCIsZy5mbkhlYWRlckNhbGxiYWNrLFwidXNlclwiKTt6KG8sXCJhb0Zvb3RlckNhbGxiYWNrXCIsZy5mbkZvb3RlckNhbGxiYWNrLFwidXNlclwiKTt6KG8sXCJhb0luaXRDb21wbGV0ZVwiLGcuZm5Jbml0Q29tcGxldGUsXCJ1c2VyXCIpO3oobyxcImFvUHJlRHJhd0NhbGxiYWNrXCIsZy5mblByZURyYXdDYWxsYmFjayxcInVzZXJcIik7by5yb3dJZEZuPVIoZy5yb3dJZCk7aWIobyk7dmFyIHU9by5vQ2xhc3NlcztnLmJKUXVlcnlVST8oaC5leHRlbmQodSxtLmV4dC5vSlVJQ2xhc3NlcyxnLm9DbGFzc2VzKSxnLnNEb209PT1sLnNEb20mJlwibGZydGlwXCI9PT1sLnNEb20mJihvLnNEb209JzxcIkhcImxmcj50PFwiRlwiaXA+Jyksby5yZW5kZXJlcik/aC5pc1BsYWluT2JqZWN0KG8ucmVuZGVyZXIpJiZcclxuICAgICAgICAgICAgICAgICAgICAhby5yZW5kZXJlci5oZWFkZXImJihvLnJlbmRlcmVyLmhlYWRlcj1cImpxdWVyeXVpXCIpOm8ucmVuZGVyZXI9XCJqcXVlcnl1aVwiOmguZXh0ZW5kKHUsbS5leHQuY2xhc3NlcyxnLm9DbGFzc2VzKTtxLmFkZENsYXNzKHUuc1RhYmxlKTtvLmlJbml0RGlzcGxheVN0YXJ0PT09ayYmKG8uaUluaXREaXNwbGF5U3RhcnQ9Zy5pRGlzcGxheVN0YXJ0LG8uX2lEaXNwbGF5U3RhcnQ9Zy5pRGlzcGxheVN0YXJ0KTtudWxsIT09Zy5pRGVmZXJMb2FkaW5nJiYoby5iRGVmZXJMb2FkaW5nPSEwLGU9aC5pc0FycmF5KGcuaURlZmVyTG9hZGluZyksby5faVJlY29yZHNEaXNwbGF5PWU/Zy5pRGVmZXJMb2FkaW5nWzBdOmcuaURlZmVyTG9hZGluZyxvLl9pUmVjb3Jkc1RvdGFsPWU/Zy5pRGVmZXJMb2FkaW5nWzFdOmcuaURlZmVyTG9hZGluZyk7dmFyIHY9by5vTGFuZ3VhZ2U7aC5leHRlbmQoITAsdixnLm9MYW5ndWFnZSk7di5zVXJsJiYoaC5hamF4KHtkYXRhVHlwZTpcImpzb25cIix1cmw6di5zVXJsLHN1Y2Nlc3M6ZnVuY3Rpb24oYSl7RmEoYSk7XHJcbiAgICAgICAgICAgICAgICBKKGwub0xhbmd1YWdlLGEpO2guZXh0ZW5kKHRydWUsdixhKTtoYShvKX0sZXJyb3I6ZnVuY3Rpb24oKXtoYShvKX19KSxuPSEwKTtudWxsPT09Zy5hc1N0cmlwZUNsYXNzZXMmJihvLmFzU3RyaXBlQ2xhc3Nlcz1bdS5zU3RyaXBlT2RkLHUuc1N0cmlwZUV2ZW5dKTt2YXIgZT1vLmFzU3RyaXBlQ2xhc3Nlcyx4PXEuY2hpbGRyZW4oXCJ0Ym9keVwiKS5maW5kKFwidHJcIikuZXEoMCk7LTEhPT1oLmluQXJyYXkoITAsaC5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4geC5oYXNDbGFzcyhhKX0pKSYmKGgoXCJ0Ym9keSB0clwiLHRoaXMpLnJlbW92ZUNsYXNzKGUuam9pbihcIiBcIikpLG8uYXNEZXN0cm95U3RyaXBlcz1lLnNsaWNlKCkpO2U9W107cj10aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIik7MCE9PXIubGVuZ3RoJiYoZWEoby5hb0hlYWRlcixyWzBdKSxlPXRhKG8pKTtpZihudWxsPT09Zy5hb0NvbHVtbnMpe3I9W107aj0wO2ZvcihpPWUubGVuZ3RoO2o8aTtqKyspci5wdXNoKG51bGwpfWVsc2Ugcj1cclxuICAgICAgICAgICAgICAgIGcuYW9Db2x1bW5zO2o9MDtmb3IoaT1yLmxlbmd0aDtqPGk7aisrKUdhKG8sZT9lW2pdOm51bGwpO2tiKG8sZy5hb0NvbHVtbkRlZnMscixmdW5jdGlvbihhLGIpe2xhKG8sYSxiKX0pO2lmKHgubGVuZ3RoKXt2YXIgdz1mdW5jdGlvbihhLGIpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImRhdGEtXCIrYikhPT1udWxsP2I6bnVsbH07aCh4WzBdKS5jaGlsZHJlbihcInRoLCB0ZFwiKS5lYWNoKGZ1bmN0aW9uKGEsYil7dmFyIGM9by5hb0NvbHVtbnNbYV07aWYoYy5tRGF0YT09PWEpe3ZhciBkPXcoYixcInNvcnRcIil8fHcoYixcIm9yZGVyXCIpLGU9dyhiLFwiZmlsdGVyXCIpfHx3KGIsXCJzZWFyY2hcIik7aWYoZCE9PW51bGx8fGUhPT1udWxsKXtjLm1EYXRhPXtfOmErXCIuZGlzcGxheVwiLHNvcnQ6ZCE9PW51bGw/YStcIi5AZGF0YS1cIitkOmssdHlwZTpkIT09bnVsbD9hK1wiLkBkYXRhLVwiK2Q6ayxmaWx0ZXI6ZSE9PW51bGw/YStcIi5AZGF0YS1cIitlOmt9O2xhKG8sYSl9fX0pfXZhciBVPW8ub0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICAgICAgZT1mdW5jdGlvbigpe2lmKGcuYWFTb3J0aW5nPT09ayl7dmFyIGE9by5hYVNvcnRpbmc7aj0wO2ZvcihpPWEubGVuZ3RoO2o8aTtqKyspYVtqXVsxXT1vLmFvQ29sdW1uc1tqXS5hc1NvcnRpbmdbMF19eWEobyk7VS5iU29ydCYmeihvLFwiYW9EcmF3Q2FsbGJhY2tcIixmdW5jdGlvbigpe2lmKG8uYlNvcnRlZCl7dmFyIGE9VyhvKSxiPXt9O2guZWFjaChhLGZ1bmN0aW9uKGEsYyl7YltjLnNyY109Yy5kaXJ9KTtzKG8sbnVsbCxcIm9yZGVyXCIsW28sYSxiXSk7S2Iobyl9fSk7eihvLFwiYW9EcmF3Q2FsbGJhY2tcIixmdW5jdGlvbigpeyhvLmJTb3J0ZWR8fHkobyk9PT1cInNzcFwifHxVLmJEZWZlclJlbmRlcikmJnlhKG8pfSxcInNjXCIpO3ZhciBhPXEuY2hpbGRyZW4oXCJjYXB0aW9uXCIpLmVhY2goZnVuY3Rpb24oKXt0aGlzLl9jYXB0aW9uU2lkZT1oKHRoaXMpLmNzcyhcImNhcHRpb24tc2lkZVwiKX0pLGI9cS5jaGlsZHJlbihcInRoZWFkXCIpO2IubGVuZ3RoPT09MCYmKGI9aChcIjx0aGVhZC8+XCIpLmFwcGVuZFRvKHEpKTtcclxuICAgICAgICAgICAgICAgICAgICBvLm5USGVhZD1iWzBdO2I9cS5jaGlsZHJlbihcInRib2R5XCIpO2IubGVuZ3RoPT09MCYmKGI9aChcIjx0Ym9keS8+XCIpLmFwcGVuZFRvKHEpKTtvLm5UQm9keT1iWzBdO2I9cS5jaGlsZHJlbihcInRmb290XCIpO2lmKGIubGVuZ3RoPT09MCYmYS5sZW5ndGg+MCYmKG8ub1Njcm9sbC5zWCE9PVwiXCJ8fG8ub1Njcm9sbC5zWSE9PVwiXCIpKWI9aChcIjx0Zm9vdC8+XCIpLmFwcGVuZFRvKHEpO2lmKGIubGVuZ3RoPT09MHx8Yi5jaGlsZHJlbigpLmxlbmd0aD09PTApcS5hZGRDbGFzcyh1LnNOb0Zvb3Rlcik7ZWxzZSBpZihiLmxlbmd0aD4wKXtvLm5URm9vdD1iWzBdO2VhKG8uYW9Gb290ZXIsby5uVEZvb3QpfWlmKGcuYWFEYXRhKWZvcihqPTA7ajxnLmFhRGF0YS5sZW5ndGg7aisrKU4obyxnLmFhRGF0YVtqXSk7ZWxzZShvLmJEZWZlckxvYWRpbmd8fHkobyk9PVwiZG9tXCIpJiZvYShvLGgoby5uVEJvZHkpLmNoaWxkcmVuKFwidHJcIikpO28uYWlEaXNwbGF5PW8uYWlEaXNwbGF5TWFzdGVyLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgby5iSW5pdGlhbGlzZWQ9dHJ1ZTtuPT09ZmFsc2UmJmhhKG8pfTtnLmJTdGF0ZVNhdmU/KFUuYlN0YXRlU2F2ZT0hMCx6KG8sXCJhb0RyYXdDYWxsYmFja1wiLHphLFwic3RhdGVfc2F2ZVwiKSxMYihvLGcsZSkpOmUoKX19KTtiPW51bGw7cmV0dXJuIHRoaXN9LHgsdCxwLHUsJGE9e30sUGI9L1tcXHJcXG5dL2csQ2E9LzwuKj8+L2csY2M9L15cXGR7Miw0fVtcXC5cXC9cXC1dXFxkezEsMn1bXFwuXFwvXFwtXVxcZHsxLDJ9KFtUIF17MX1cXGR7MSwyfVs6XFwuXVxcZHsyfShbXFwuOl1cXGR7Mn0pPyk/JC8sZGM9UmVnRXhwKFwiKFxcXFwvfFxcXFwufFxcXFwqfFxcXFwrfFxcXFw/fFxcXFx8fFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdfFxcXFx7fFxcXFx9fFxcXFxcXFxcfFxcXFwkfFxcXFxefFxcXFwtKVwiLFwiZ1wiKSxaYT0vWycsJMKj4oKswqUlXFx1MjAwOVxcdTIwMkZcXHUyMEJEXFx1MjBhOVxcdTIwQkFyZmtdL2dpLE09ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCEwPT09YXx8XCItXCI9PT1hPyEwOiExfSxRYj1mdW5jdGlvbihhKXt2YXIgYj1wYXJzZUludChhLDEwKTtyZXR1cm4haXNOYU4oYikmJlxyXG4gICAgaXNGaW5pdGUoYSk/YjpudWxsfSxSYj1mdW5jdGlvbihhLGIpeyRhW2JdfHwoJGFbYl09UmVnRXhwKFNhKGIpLFwiZ1wiKSk7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhJiZcIi5cIiE9PWI/YS5yZXBsYWNlKC9cXC4vZyxcIlwiKS5yZXBsYWNlKCRhW2JdLFwiLlwiKTphfSxhYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCJzdHJpbmdcIj09PXR5cGVvZiBhO2lmKE0oYSkpcmV0dXJuITA7YiYmZCYmKGE9UmIoYSxiKSk7YyYmZCYmKGE9YS5yZXBsYWNlKFphLFwiXCIpKTtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChhKSkmJmlzRmluaXRlKGEpfSxTYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIE0oYSk/ITA6IShNKGEpfHxcInN0cmluZ1wiPT09dHlwZW9mIGEpP251bGw6YWIoYS5yZXBsYWNlKENhLFwiXCIpLGIsYyk/ITA6bnVsbH0sRD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT0wLGY9YS5sZW5ndGg7aWYoYyE9PWspZm9yKDtlPGY7ZSsrKWFbZV0mJmFbZV1bYl0mJmQucHVzaChhW2VdW2JdW2NdKTtlbHNlIGZvcig7ZTxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZjtlKyspYVtlXSYmZC5wdXNoKGFbZV1bYl0pO3JldHVybiBkfSxqYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1bXSxmPTAsZz1iLmxlbmd0aDtpZihkIT09aylmb3IoO2Y8ZztmKyspYVtiW2ZdXVtjXSYmZS5wdXNoKGFbYltmXV1bY11bZF0pO2Vsc2UgZm9yKDtmPGc7ZisrKWUucHVzaChhW2JbZl1dW2NdKTtyZXR1cm4gZX0sWD1mdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ7Yj09PWs/KGI9MCxkPWEpOihkPWIsYj1hKTtmb3IodmFyIGU9YjtlPGQ7ZSsrKWMucHVzaChlKTtyZXR1cm4gY30sVGI9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspYVtjXSYmYi5wdXNoKGFbY10pO3JldHVybiBifSxzYT1mdW5jdGlvbihhKXt2YXIgYjthOntpZighKDI+YS5sZW5ndGgpKXtiPWEuc2xpY2UoKS5zb3J0KCk7Zm9yKHZhciBjPWJbMF0sZD0xLGU9Yi5sZW5ndGg7ZDxlO2QrKyl7aWYoYltkXT09PWMpe2I9ITE7YnJlYWsgYX1jPWJbZF19fWI9ITB9aWYoYilyZXR1cm4gYS5zbGljZSgpO1xyXG4gICAgICAgIGI9W107dmFyIGU9YS5sZW5ndGgsZixnPTAsZD0wO2E6Zm9yKDtkPGU7ZCsrKXtjPWFbZF07Zm9yKGY9MDtmPGc7ZisrKWlmKGJbZl09PT1jKWNvbnRpbnVlIGE7Yi5wdXNoKGMpO2crK31yZXR1cm4gYn07bS51dGlsPXt0aHJvdHRsZTpmdW5jdGlvbihhLGIpe3ZhciBjPWIhPT1rP2I6MjAwLGQsZTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj10aGlzLGc9K25ldyBEYXRlLGg9YXJndW1lbnRzO2QmJmc8ZCtjPyhjbGVhclRpbWVvdXQoZSksZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZD1rO2EuYXBwbHkoYixoKX0sYykpOihkPWcsYS5hcHBseShiLGgpKX19LGVzY2FwZVJlZ2V4OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoZGMsXCJcXFxcJDFcIil9fTt2YXIgQT1mdW5jdGlvbihhLGIsYyl7YVtiXSE9PWsmJihhW2NdPWFbYl0pfSxjYT0vXFxbLio/XFxdJC8sVj0vXFwoXFwpJC8sU2E9bS51dGlsLmVzY2FwZVJlZ2V4LHhhPWgoXCI8ZGl2PlwiKVswXSwkYj14YS50ZXh0Q29udGVudCE9PWssYmM9XHJcbiAgICAgICAgLzwuKj8+L2csUWE9bS51dGlsLnRocm90dGxlLFViPVtdLHc9QXJyYXkucHJvdG90eXBlLGVjPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD1tLnNldHRpbmdzLGU9aC5tYXAoZCxmdW5jdGlvbihhKXtyZXR1cm4gYS5uVGFibGV9KTtpZihhKXtpZihhLm5UYWJsZSYmYS5vQXBpKXJldHVyblthXTtpZihhLm5vZGVOYW1lJiZcInRhYmxlXCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGI9aC5pbkFycmF5KGEsZSksLTEhPT1iP1tkW2JdXTpudWxsO2lmKGEmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNldHRpbmdzKXJldHVybiBhLnNldHRpbmdzKCkudG9BcnJheSgpO1wic3RyaW5nXCI9PT10eXBlb2YgYT9jPWgoYSk6YSBpbnN0YW5jZW9mIGgmJihjPWEpfWVsc2UgcmV0dXJuW107aWYoYylyZXR1cm4gYy5tYXAoZnVuY3Rpb24oKXtiPWguaW5BcnJheSh0aGlzLGUpO3JldHVybi0xIT09Yj9kW2JdOm51bGx9KS50b0FycmF5KCl9O3Q9ZnVuY3Rpb24oYSxiKXtpZighKHRoaXMgaW5zdGFuY2VvZlxyXG4gICAgICAgIHQpKXJldHVybiBuZXcgdChhLGIpO3ZhciBjPVtdLGQ9ZnVuY3Rpb24oYSl7KGE9ZWMoYSkpJiYoYz1jLmNvbmNhdChhKSl9O2lmKGguaXNBcnJheShhKSlmb3IodmFyIGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspZChhW2VdKTtlbHNlIGQoYSk7dGhpcy5jb250ZXh0PXNhKGMpO2ImJmgubWVyZ2UodGhpcyxiKTt0aGlzLnNlbGVjdG9yPXtyb3dzOm51bGwsY29sczpudWxsLG9wdHM6bnVsbH07dC5leHRlbmQodGhpcyx0aGlzLFViKX07bS5BcGk9dDtoLmV4dGVuZCh0LnByb3RvdHlwZSx7YW55OmZ1bmN0aW9uKCl7cmV0dXJuIDAhPT10aGlzLmNvdW50KCl9LGNvbmNhdDp3LmNvbmNhdCxjb250ZXh0OltdLGNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmxhdHRlbigpLmxlbmd0aH0sZWFjaDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMubGVuZ3RoO2I8YztiKyspYS5jYWxsKHRoaXMsdGhpc1tiXSxiLHRoaXMpO3JldHVybiB0aGlzfSxlcTpmdW5jdGlvbihhKXt2YXIgYj1cclxuICAgICAgICB0aGlzLmNvbnRleHQ7cmV0dXJuIGIubGVuZ3RoPmE/bmV3IHQoYlthXSx0aGlzW2FdKTpudWxsfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7dmFyIGI9W107aWYody5maWx0ZXIpYj13LmZpbHRlci5jYWxsKHRoaXMsYSx0aGlzKTtlbHNlIGZvcih2YXIgYz0wLGQ9dGhpcy5sZW5ndGg7YzxkO2MrKylhLmNhbGwodGhpcyx0aGlzW2NdLGMsdGhpcykmJmIucHVzaCh0aGlzW2NdKTtyZXR1cm4gbmV3IHQodGhpcy5jb250ZXh0LGIpfSxmbGF0dGVuOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIG5ldyB0KHRoaXMuY29udGV4dCxhLmNvbmNhdC5hcHBseShhLHRoaXMudG9BcnJheSgpKSl9LGpvaW46dy5qb2luLGluZGV4T2Y6dy5pbmRleE9mfHxmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1ifHwwLGQ9dGhpcy5sZW5ndGg7YzxkO2MrKylpZih0aGlzW2NdPT09YSlyZXR1cm4gYztyZXR1cm4tMX0saXRlcmF0b3I6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9W10sZixnLGgsaSxuLGw9dGhpcy5jb250ZXh0LFxyXG4gICAgICAgIG0scCx1PXRoaXMuc2VsZWN0b3I7XCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoZD1jLGM9YixiPWEsYT0hMSk7Zz0wO2ZvcihoPWwubGVuZ3RoO2c8aDtnKyspe3ZhciBzPW5ldyB0KGxbZ10pO2lmKFwidGFibGVcIj09PWIpZj1jLmNhbGwocyxsW2ddLGcpLGYhPT1rJiZlLnB1c2goZik7ZWxzZSBpZihcImNvbHVtbnNcIj09PWJ8fFwicm93c1wiPT09YilmPWMuY2FsbChzLGxbZ10sdGhpc1tnXSxnKSxmIT09ayYmZS5wdXNoKGYpO2Vsc2UgaWYoXCJjb2x1bW5cIj09PWJ8fFwiY29sdW1uLXJvd3NcIj09PWJ8fFwicm93XCI9PT1ifHxcImNlbGxcIj09PWIpe3A9dGhpc1tnXTtcImNvbHVtbi1yb3dzXCI9PT1iJiYobT1EYShsW2ddLHUub3B0cykpO2k9MDtmb3Iobj1wLmxlbmd0aDtpPG47aSsrKWY9cFtpXSxmPVwiY2VsbFwiPT09Yj9jLmNhbGwocyxsW2ddLGYucm93LGYuY29sdW1uLGcsaSk6Yy5jYWxsKHMsbFtnXSxmLGcsaSxtKSxmIT09ayYmZS5wdXNoKGYpfX1yZXR1cm4gZS5sZW5ndGh8fGQ/KGE9bmV3IHQobCxhP1xyXG4gICAgICAgICAgICBlLmNvbmNhdC5hcHBseShbXSxlKTplKSxiPWEuc2VsZWN0b3IsYi5yb3dzPXUucm93cyxiLmNvbHM9dS5jb2xzLGIub3B0cz11Lm9wdHMsYSk6dGhpc30sbGFzdEluZGV4T2Y6dy5sYXN0SW5kZXhPZnx8ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5pbmRleE9mLmFwcGx5KHRoaXMudG9BcnJheS5yZXZlcnNlKCksYXJndW1lbnRzKX0sbGVuZ3RoOjAsbWFwOmZ1bmN0aW9uKGEpe3ZhciBiPVtdO2lmKHcubWFwKWI9dy5tYXAuY2FsbCh0aGlzLGEsdGhpcyk7ZWxzZSBmb3IodmFyIGM9MCxkPXRoaXMubGVuZ3RoO2M8ZDtjKyspYi5wdXNoKGEuY2FsbCh0aGlzLHRoaXNbY10sYykpO3JldHVybiBuZXcgdCh0aGlzLmNvbnRleHQsYil9LHBsdWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYlthXX0pfSxwb3A6dy5wb3AscHVzaDp3LnB1c2gscmVkdWNlOncucmVkdWNlfHxmdW5jdGlvbihhLGIpe3JldHVybiBqYih0aGlzLGEsYiwwLHRoaXMubGVuZ3RoLFxyXG4gICAgICAgIDEpfSxyZWR1Y2VSaWdodDp3LnJlZHVjZVJpZ2h0fHxmdW5jdGlvbihhLGIpe3JldHVybiBqYih0aGlzLGEsYix0aGlzLmxlbmd0aC0xLC0xLC0xKX0scmV2ZXJzZTp3LnJldmVyc2Usc2VsZWN0b3I6bnVsbCxzaGlmdDp3LnNoaWZ0LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMuY29udGV4dCx0aGlzKX0sc29ydDp3LnNvcnQsc3BsaWNlOncuc3BsaWNlLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdy5zbGljZS5jYWxsKHRoaXMpfSx0byQ6ZnVuY3Rpb24oKXtyZXR1cm4gaCh0aGlzKX0sdG9KUXVlcnk6ZnVuY3Rpb24oKXtyZXR1cm4gaCh0aGlzKX0sdW5pcXVlOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMuY29udGV4dCxzYSh0aGlzKSl9LHVuc2hpZnQ6dy51bnNoaWZ0fSk7dC5leHRlbmQ9ZnVuY3Rpb24oYSxiLGMpe2lmKGMubGVuZ3RoJiZiJiYoYiBpbnN0YW5jZW9mIHR8fGIuX19kdF93cmFwcGVyKSl7dmFyIGQsZSxmLGc9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPVxyXG4gICAgICAgIGIuYXBwbHkoYSxhcmd1bWVudHMpO3QuZXh0ZW5kKGQsZCxjLm1ldGhvZEV4dCk7cmV0dXJuIGR9fTtkPTA7Zm9yKGU9Yy5sZW5ndGg7ZDxlO2QrKylmPWNbZF0sYltmLm5hbWVdPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLnZhbD9nKGEsZi52YWwsZik6aC5pc1BsYWluT2JqZWN0KGYudmFsKT97fTpmLnZhbCxiW2YubmFtZV0uX19kdF93cmFwcGVyPSEwLHQuZXh0ZW5kKGEsYltmLm5hbWVdLGYucHJvcEV4dCl9fTt0LnJlZ2lzdGVyPXA9ZnVuY3Rpb24oYSxiKXtpZihoLmlzQXJyYXkoYSkpZm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKXQucmVnaXN0ZXIoYVtjXSxiKTtlbHNlIGZvcih2YXIgZT1hLnNwbGl0KFwiLlwiKSxmPVViLGcsaixjPTAsZD1lLmxlbmd0aDtjPGQ7YysrKXtnPShqPS0xIT09ZVtjXS5pbmRleE9mKFwiKClcIikpP2VbY10ucmVwbGFjZShcIigpXCIsXCJcIik6ZVtjXTt2YXIgaTthOntpPTA7Zm9yKHZhciBuPWYubGVuZ3RoO2k8bjtpKyspaWYoZltpXS5uYW1lPT09Zyl7aT1cclxuICAgICAgICBmW2ldO2JyZWFrIGF9aT1udWxsfWl8fChpPXtuYW1lOmcsdmFsOnt9LG1ldGhvZEV4dDpbXSxwcm9wRXh0OltdfSxmLnB1c2goaSkpO2M9PT1kLTE/aS52YWw9YjpmPWo/aS5tZXRob2RFeHQ6aS5wcm9wRXh0fX07dC5yZWdpc3RlclBsdXJhbD11PWZ1bmN0aW9uKGEsYixjKXt0LnJlZ2lzdGVyKGEsYyk7dC5yZWdpc3RlcihiLGZ1bmN0aW9uKCl7dmFyIGE9Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGE9PT10aGlzP3RoaXM6YSBpbnN0YW5jZW9mIHQ/YS5sZW5ndGg/aC5pc0FycmF5KGFbMF0pP25ldyB0KGEuY29udGV4dCxhWzBdKTphWzBdOms6YX0pfTtwKFwidGFibGVzKClcIixmdW5jdGlvbihhKXt2YXIgYjtpZihhKXtiPXQ7dmFyIGM9dGhpcy5jb250ZXh0O2lmKFwibnVtYmVyXCI9PT10eXBlb2YgYSlhPVtjW2FdXTtlbHNlIHZhciBkPWgubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJuIGEublRhYmxlfSksYT1oKGQpLmZpbHRlcihhKS5tYXAoZnVuY3Rpb24oKXt2YXIgYT1oLmluQXJyYXkodGhpcyxcclxuICAgICAgICBkKTtyZXR1cm4gY1thXX0pLnRvQXJyYXkoKTtiPW5ldyBiKGEpfWVsc2UgYj10aGlzO3JldHVybiBifSk7cChcInRhYmxlKClcIixmdW5jdGlvbihhKXt2YXIgYT10aGlzLnRhYmxlcyhhKSxiPWEuY29udGV4dDtyZXR1cm4gYi5sZW5ndGg/bmV3IHQoYlswXSk6YX0pO3UoXCJ0YWJsZXMoKS5ub2RlcygpXCIsXCJ0YWJsZSgpLm5vZGUoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5UYWJsZX0sMSl9KTt1KFwidGFibGVzKCkuYm9keSgpXCIsXCJ0YWJsZSgpLmJvZHkoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5UQm9keX0sMSl9KTt1KFwidGFibGVzKCkuaGVhZGVyKClcIixcInRhYmxlKCkuaGVhZGVyKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5uVEhlYWR9LDEpfSk7dShcInRhYmxlcygpLmZvb3RlcigpXCIsXHJcbiAgICAgICAgXCJ0YWJsZSgpLmZvb3RlcigpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEublRGb290fSwxKX0pO3UoXCJ0YWJsZXMoKS5jb250YWluZXJzKClcIixcInRhYmxlKCkuY29udGFpbmVyKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5uVGFibGVXcmFwcGVyfSwxKX0pO3AoXCJkcmF3KClcIixmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYil7XCJwYWdlXCI9PT1hP08oYik6KFwic3RyaW5nXCI9PT10eXBlb2YgYSYmKGE9XCJmdWxsLWhvbGRcIj09PWE/ITE6ITApLFQoYiwhMT09PWEpKX0pfSk7cChcInBhZ2UoKVwiLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09az90aGlzLnBhZ2UuaW5mbygpLnBhZ2U6dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYil7VmEoYixhKX0pfSk7cChcInBhZ2UuaW5mbygpXCIsZnVuY3Rpb24oKXtpZigwPT09XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lmxlbmd0aClyZXR1cm4gazt2YXIgYT10aGlzLmNvbnRleHRbMF0sYj1hLl9pRGlzcGxheVN0YXJ0LGM9YS5vRmVhdHVyZXMuYlBhZ2luYXRlP2EuX2lEaXNwbGF5TGVuZ3RoOi0xLGQ9YS5mblJlY29yZHNEaXNwbGF5KCksZT0tMT09PWM7cmV0dXJue3BhZ2U6ZT8wOk1hdGguZmxvb3IoYi9jKSxwYWdlczplPzE6TWF0aC5jZWlsKGQvYyksc3RhcnQ6YixlbmQ6YS5mbkRpc3BsYXlFbmQoKSxsZW5ndGg6YyxyZWNvcmRzVG90YWw6YS5mblJlY29yZHNUb3RhbCgpLHJlY29yZHNEaXNwbGF5OmQsc2VydmVyU2lkZTpcInNzcFwiPT09eShhKX19KTtwKFwicGFnZS5sZW4oKVwiLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09az8wIT09dGhpcy5jb250ZXh0Lmxlbmd0aD90aGlzLmNvbnRleHRbMF0uX2lEaXNwbGF5TGVuZ3RoOms6dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYil7VGEoYixhKX0pfSk7dmFyIFZiPWZ1bmN0aW9uKGEsYixjKXtpZihjKXt2YXIgZD1uZXcgdChhKTtcclxuICAgICAgICBkLm9uZShcImRyYXdcIixmdW5jdGlvbigpe2MoZC5hamF4Lmpzb24oKSl9KX1pZihcInNzcFwiPT15KGEpKVQoYSxiKTtlbHNle0MoYSwhMCk7dmFyIGU9YS5qcVhIUjtlJiY0IT09ZS5yZWFkeVN0YXRlJiZlLmFib3J0KCk7dWEoYSxbXSxmdW5jdGlvbihjKXtwYShhKTtmb3IodmFyIGM9dmEoYSxjKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKU4oYSxjW2RdKTtUKGEsYik7QyhhLCExKX0pfX07cChcImFqYXguanNvbigpXCIsZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNvbnRleHQ7aWYoMDxhLmxlbmd0aClyZXR1cm4gYVswXS5qc29ufSk7cChcImFqYXgucGFyYW1zKClcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29udGV4dDtpZigwPGEubGVuZ3RoKXJldHVybiBhWzBdLm9BamF4RGF0YX0pO3AoXCJhamF4LnJlbG9hZCgpXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYyl7VmIoYywhMT09PWIsYSl9KX0pO3AoXCJhamF4LnVybCgpXCIsZnVuY3Rpb24oYSl7dmFyIGI9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0O2lmKGE9PT1rKXtpZigwPT09Yi5sZW5ndGgpcmV0dXJuIGs7Yj1iWzBdO3JldHVybiBiLmFqYXg/aC5pc1BsYWluT2JqZWN0KGIuYWpheCk/Yi5hamF4LnVybDpiLmFqYXg6Yi5zQWpheFNvdXJjZX1yZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYil7aC5pc1BsYWluT2JqZWN0KGIuYWpheCk/Yi5hamF4LnVybD1hOmIuYWpheD1hfSl9KTtwKFwiYWpheC51cmwoKS5sb2FkKClcIixmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihjKXtWYihjLCExPT09YixhKX0pfSk7dmFyIGJiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9W10sZyxqLGksbixsLG07aT10eXBlb2YgYjtpZighYnx8XCJzdHJpbmdcIj09PWl8fFwiZnVuY3Rpb25cIj09PWl8fGIubGVuZ3RoPT09ayliPVtiXTtpPTA7Zm9yKG49Yi5sZW5ndGg7aTxuO2krKyl7aj1iW2ldJiZiW2ldLnNwbGl0JiYhYltpXS5tYXRjaCgvW1xcW1xcKDpdLyk/YltpXS5zcGxpdChcIixcIik6XHJcbiAgICAgICAgW2JbaV1dO2w9MDtmb3IobT1qLmxlbmd0aDtsPG07bCsrKShnPWMoXCJzdHJpbmdcIj09PXR5cGVvZiBqW2xdP2gudHJpbShqW2xdKTpqW2xdKSkmJmcubGVuZ3RoJiYoZj1mLmNvbmNhdChnKSl9YT14LnNlbGVjdG9yW2FdO2lmKGEubGVuZ3RoKXtpPTA7Zm9yKG49YS5sZW5ndGg7aTxuO2krKylmPWFbaV0oZCxlLGYpfXJldHVybiBzYShmKX0sY2I9ZnVuY3Rpb24oYSl7YXx8KGE9e30pO2EuZmlsdGVyJiZhLnNlYXJjaD09PWsmJihhLnNlYXJjaD1hLmZpbHRlcik7cmV0dXJuIGguZXh0ZW5kKHtzZWFyY2g6XCJub25lXCIsb3JkZXI6XCJjdXJyZW50XCIscGFnZTpcImFsbFwifSxhKX0sZGI9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKWlmKDA8YVtiXS5sZW5ndGgpcmV0dXJuIGFbMF09YVtiXSxhWzBdLmxlbmd0aD0xLGEubGVuZ3RoPTEsYS5jb250ZXh0PVthLmNvbnRleHRbYl1dLGE7YS5sZW5ndGg9MDtyZXR1cm4gYX0sRGE9ZnVuY3Rpb24oYSxiKXt2YXIgYyxcclxuICAgICAgICBkLGUsZj1bXSxnPWEuYWlEaXNwbGF5O2M9YS5haURpc3BsYXlNYXN0ZXI7dmFyIGo9Yi5zZWFyY2g7ZD1iLm9yZGVyO2U9Yi5wYWdlO2lmKFwic3NwXCI9PXkoYSkpcmV0dXJuXCJyZW1vdmVkXCI9PT1qP1tdOlgoMCxjLmxlbmd0aCk7aWYoXCJjdXJyZW50XCI9PWUpe2M9YS5faURpc3BsYXlTdGFydDtmb3IoZD1hLmZuRGlzcGxheUVuZCgpO2M8ZDtjKyspZi5wdXNoKGdbY10pfWVsc2UgaWYoXCJjdXJyZW50XCI9PWR8fFwiYXBwbGllZFwiPT1kKWY9XCJub25lXCI9PWo/Yy5zbGljZSgpOlwiYXBwbGllZFwiPT1qP2cuc2xpY2UoKTpoLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybi0xPT09aC5pbkFycmF5KGEsZyk/YTpudWxsfSk7ZWxzZSBpZihcImluZGV4XCI9PWR8fFwib3JpZ2luYWxcIj09ZCl7Yz0wO2ZvcihkPWEuYW9EYXRhLmxlbmd0aDtjPGQ7YysrKVwibm9uZVwiPT1qP2YucHVzaChjKTooZT1oLmluQXJyYXkoYyxnKSwoLTE9PT1lJiZcInJlbW92ZWRcIj09anx8MDw9ZSYmXCJhcHBsaWVkXCI9PWopJiZmLnB1c2goYykpfXJldHVybiBmfTtcclxuICAgIHAoXCJyb3dzKClcIixmdW5jdGlvbihhLGIpe2E9PT1rP2E9XCJcIjpoLmlzUGxhaW5PYmplY3QoYSkmJihiPWEsYT1cIlwiKTt2YXIgYj1jYihiKSxjPXRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGMpe3ZhciBlPWIsZjtyZXR1cm4gYmIoXCJyb3dcIixhLGZ1bmN0aW9uKGEpe3ZhciBiPVFiKGEpO2lmKGIhPT1udWxsJiYhZSlyZXR1cm5bYl07Znx8KGY9RGEoYyxlKSk7aWYoYiE9PW51bGwmJmguaW5BcnJheShiLGYpIT09LTEpcmV0dXJuW2JdO2lmKGE9PT1udWxsfHxhPT09a3x8YT09PVwiXCIpcmV0dXJuIGY7aWYodHlwZW9mIGE9PT1cImZ1bmN0aW9uXCIpcmV0dXJuIGgubWFwKGYsZnVuY3Rpb24oYil7dmFyIGU9Yy5hb0RhdGFbYl07cmV0dXJuIGEoYixlLl9hRGF0YSxlLm5Ucik/YjpudWxsfSk7Yj1UYihqYShjLmFvRGF0YSxmLFwiblRyXCIpKTtpZihhLm5vZGVOYW1lKXtpZihhLl9EVF9Sb3dJbmRleCE9PWspcmV0dXJuW2EuX0RUX1Jvd0luZGV4XTtpZihhLl9EVF9DZWxsSW5kZXgpcmV0dXJuW2EuX0RUX0NlbGxJbmRleC5yb3ddO1xyXG4gICAgICAgIGI9aChhKS5jbG9zZXN0KFwiKltkYXRhLWR0LXJvd11cIik7cmV0dXJuIGIubGVuZ3RoP1tiLmRhdGEoXCJkdC1yb3dcIildOltdfWlmKHR5cGVvZiBhPT09XCJzdHJpbmdcIiYmYS5jaGFyQXQoMCk9PT1cIiNcIil7dmFyIGk9Yy5hSWRzW2EucmVwbGFjZSgvXiMvLFwiXCIpXTtpZihpIT09aylyZXR1cm5baS5pZHhdfXJldHVybiBoKGIpLmZpbHRlcihhKS5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fRFRfUm93SW5kZXh9KS50b0FycmF5KCl9LGMsZSl9LDEpO2Muc2VsZWN0b3Iucm93cz1hO2Muc2VsZWN0b3Iub3B0cz1iO3JldHVybiBjfSk7cChcInJvd3MoKS5ub2RlcygpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInJvd1wiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuYW9EYXRhW2JdLm5Ucnx8a30sMSl9KTtwKFwicm93cygpLmRhdGEoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoITAsXCJyb3dzXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gamEoYS5hb0RhdGEsYixcIl9hRGF0YVwiKX0sXHJcbiAgICAgICAgMSl9KTt1KFwicm93cygpLmNhY2hlKClcIixcInJvdygpLmNhY2hlKClcIixmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInJvd1wiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5hb0RhdGFbY107cmV0dXJuXCJzZWFyY2hcIj09PWE/ZC5fYUZpbHRlckRhdGE6ZC5fYVNvcnREYXRhfSwxKX0pO3UoXCJyb3dzKCkuaW52YWxpZGF0ZSgpXCIsXCJyb3coKS5pbnZhbGlkYXRlKClcIixmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInJvd1wiLGZ1bmN0aW9uKGIsYyl7ZGEoYixjLGEpfSl9KTt1KFwicm93cygpLmluZGV4ZXMoKVwiLFwicm93KCkuaW5kZXgoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJyb3dcIixmdW5jdGlvbihhLGIpe3JldHVybiBifSwxKX0pO3UoXCJyb3dzKCkuaWRzKClcIixcInJvdygpLmlkKClcIixmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz10aGlzLmNvbnRleHQsZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylmb3IodmFyIGY9MCxnPXRoaXNbZF0ubGVuZ3RoO2Y8XHJcbiAgICBnO2YrKyl7dmFyIGg9Y1tkXS5yb3dJZEZuKGNbZF0uYW9EYXRhW3RoaXNbZF1bZl1dLl9hRGF0YSk7Yi5wdXNoKCghMD09PWE/XCIjXCI6XCJcIikraCl9cmV0dXJuIG5ldyB0KGMsYil9KTt1KFwicm93cygpLnJlbW92ZSgpXCIsXCJyb3coKS5yZW1vdmUoKVwiLGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLml0ZXJhdG9yKFwicm93XCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlPWIuYW9EYXRhLGY9ZVtjXSxnLGgsaSxuLGw7ZS5zcGxpY2UoYywxKTtnPTA7Zm9yKGg9ZS5sZW5ndGg7ZzxoO2crKylpZihpPWVbZ10sbD1pLmFuQ2VsbHMsbnVsbCE9PWkublRyJiYoaS5uVHIuX0RUX1Jvd0luZGV4PWcpLG51bGwhPT1sKXtpPTA7Zm9yKG49bC5sZW5ndGg7aTxuO2krKylsW2ldLl9EVF9DZWxsSW5kZXgucm93PWd9cWEoYi5haURpc3BsYXlNYXN0ZXIsYyk7cWEoYi5haURpc3BsYXksYyk7cWEoYVtkXSxjLCExKTtVYShiKTtjPWIucm93SWRGbihmLl9hRGF0YSk7YyE9PWsmJmRlbGV0ZSBiLmFJZHNbY119KTtcclxuICAgICAgICB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihhKXtmb3IodmFyIGM9MCxkPWEuYW9EYXRhLmxlbmd0aDtjPGQ7YysrKWEuYW9EYXRhW2NdLmlkeD1jfSk7cmV0dXJuIHRoaXN9KTtwKFwicm93cy5hZGQoKVwiLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGIpe3ZhciBjLGYsZyxoPVtdO2Y9MDtmb3IoZz1hLmxlbmd0aDtmPGc7ZisrKWM9YVtmXSxjLm5vZGVOYW1lJiZcIlRSXCI9PT1jLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk/aC5wdXNoKG9hKGIsYylbMF0pOmgucHVzaChOKGIsYykpO3JldHVybiBofSwxKSxjPXRoaXMucm93cygtMSk7Yy5wb3AoKTtoLm1lcmdlKGMsYik7cmV0dXJuIGN9KTtwKFwicm93KClcIixmdW5jdGlvbihhLGIpe3JldHVybiBkYih0aGlzLnJvd3MoYSxiKSl9KTtwKFwicm93KCkuZGF0YSgpXCIsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jb250ZXh0O2lmKGE9PT1rKXJldHVybiBiLmxlbmd0aCYmdGhpcy5sZW5ndGg/YlswXS5hb0RhdGFbdGhpc1swXV0uX2FEYXRhOlxyXG4gICAgICAgIGs7YlswXS5hb0RhdGFbdGhpc1swXV0uX2FEYXRhPWE7ZGEoYlswXSx0aGlzWzBdLFwiZGF0YVwiKTtyZXR1cm4gdGhpc30pO3AoXCJyb3coKS5ub2RlKClcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29udGV4dDtyZXR1cm4gYS5sZW5ndGgmJnRoaXMubGVuZ3RoP2FbMF0uYW9EYXRhW3RoaXNbMF1dLm5Ucnx8bnVsbDpudWxsfSk7cChcInJvdy5hZGQoKVwiLGZ1bmN0aW9uKGEpe2EgaW5zdGFuY2VvZiBoJiZhLmxlbmd0aCYmKGE9YVswXSk7dmFyIGI9dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYil7cmV0dXJuIGEubm9kZU5hbWUmJlwiVFJcIj09PWEubm9kZU5hbWUudG9VcHBlckNhc2UoKT9vYShiLGEpWzBdOk4oYixhKX0pO3JldHVybiB0aGlzLnJvdyhiWzBdKX0pO3ZhciBlYj1mdW5jdGlvbihhLGIpe3ZhciBjPWEuY29udGV4dDtpZihjLmxlbmd0aCYmKGM9Y1swXS5hb0RhdGFbYiE9PWs/YjphWzBdXSkmJmMuX2RldGFpbHMpYy5fZGV0YWlscy5yZW1vdmUoKSxjLl9kZXRhaWxzU2hvdz1cclxuICAgICAgICBrLGMuX2RldGFpbHM9a30sV2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmNvbnRleHQ7aWYoYy5sZW5ndGgmJmEubGVuZ3RoKXt2YXIgZD1jWzBdLmFvRGF0YVthWzBdXTtpZihkLl9kZXRhaWxzKXsoZC5fZGV0YWlsc1Nob3c9Yik/ZC5fZGV0YWlscy5pbnNlcnRBZnRlcihkLm5Ucik6ZC5fZGV0YWlscy5kZXRhY2goKTt2YXIgZT1jWzBdLGY9bmV3IHQoZSksZz1lLmFvRGF0YTtmLm9mZihcImRyYXcuZHQuRFRfZGV0YWlscyBjb2x1bW4tdmlzaWJpbGl0eS5kdC5EVF9kZXRhaWxzIGRlc3Ryb3kuZHQuRFRfZGV0YWlsc1wiKTswPEQoZyxcIl9kZXRhaWxzXCIpLmxlbmd0aCYmKGYub24oXCJkcmF3LmR0LkRUX2RldGFpbHNcIixmdW5jdGlvbihhLGIpe2U9PT1iJiZmLnJvd3Moe3BhZ2U6XCJjdXJyZW50XCJ9KS5lcSgwKS5lYWNoKGZ1bmN0aW9uKGEpe2E9Z1thXTthLl9kZXRhaWxzU2hvdyYmYS5fZGV0YWlscy5pbnNlcnRBZnRlcihhLm5Ucil9KX0pLGYub24oXCJjb2x1bW4tdmlzaWJpbGl0eS5kdC5EVF9kZXRhaWxzXCIsXHJcbiAgICAgICAgZnVuY3Rpb24oYSxiKXtpZihlPT09Yilmb3IodmFyIGMsZD1iYShiKSxmPTAsaD1nLmxlbmd0aDtmPGg7ZisrKWM9Z1tmXSxjLl9kZXRhaWxzJiZjLl9kZXRhaWxzLmNoaWxkcmVuKFwidGRbY29sc3Bhbl1cIikuYXR0cihcImNvbHNwYW5cIixkKX0pLGYub24oXCJkZXN0cm95LmR0LkRUX2RldGFpbHNcIixmdW5jdGlvbihhLGIpe2lmKGU9PT1iKWZvcih2YXIgYz0wLGQ9Zy5sZW5ndGg7YzxkO2MrKylnW2NdLl9kZXRhaWxzJiZlYihmLGMpfSkpfX19O3AoXCJyb3coKS5jaGlsZCgpXCIsZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNvbnRleHQ7aWYoYT09PWspcmV0dXJuIGMubGVuZ3RoJiZ0aGlzLmxlbmd0aD9jWzBdLmFvRGF0YVt0aGlzWzBdXS5fZGV0YWlsczprO2lmKCEwPT09YSl0aGlzLmNoaWxkLnNob3coKTtlbHNlIGlmKCExPT09YSllYih0aGlzKTtlbHNlIGlmKGMubGVuZ3RoJiZ0aGlzLmxlbmd0aCl7dmFyIGQ9Y1swXSxjPWNbMF0uYW9EYXRhW3RoaXNbMF1dLGU9W10sZj1mdW5jdGlvbihhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIpe2lmKGguaXNBcnJheShhKXx8YSBpbnN0YW5jZW9mIGgpZm9yKHZhciBjPTAsaz1hLmxlbmd0aDtjPGs7YysrKWYoYVtjXSxiKTtlbHNlIGEubm9kZU5hbWUmJlwidHJcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9lLnB1c2goYSk6KGM9aChcIjx0cj48dGQvPjwvdHI+XCIpLmFkZENsYXNzKGIpLGgoXCJ0ZFwiLGMpLmFkZENsYXNzKGIpLmh0bWwoYSlbMF0uY29sU3Bhbj1iYShkKSxlLnB1c2goY1swXSkpfTtmKGEsYik7Yy5fZGV0YWlscyYmYy5fZGV0YWlscy5kZXRhY2goKTtjLl9kZXRhaWxzPWgoZSk7Yy5fZGV0YWlsc1Nob3cmJmMuX2RldGFpbHMuaW5zZXJ0QWZ0ZXIoYy5uVHIpfXJldHVybiB0aGlzfSk7cChbXCJyb3coKS5jaGlsZC5zaG93KClcIixcInJvdygpLmNoaWxkKCkuc2hvdygpXCJdLGZ1bmN0aW9uKCl7V2IodGhpcywhMCk7cmV0dXJuIHRoaXN9KTtwKFtcInJvdygpLmNoaWxkLmhpZGUoKVwiLFwicm93KCkuY2hpbGQoKS5oaWRlKClcIl0sZnVuY3Rpb24oKXtXYih0aGlzLCExKTtcclxuICAgICAgICByZXR1cm4gdGhpc30pO3AoW1wicm93KCkuY2hpbGQucmVtb3ZlKClcIixcInJvdygpLmNoaWxkKCkucmVtb3ZlKClcIl0sZnVuY3Rpb24oKXtlYih0aGlzKTtyZXR1cm4gdGhpc30pO3AoXCJyb3coKS5jaGlsZC5pc1Nob3duKClcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29udGV4dDtyZXR1cm4gYS5sZW5ndGgmJnRoaXMubGVuZ3RoP2FbMF0uYW9EYXRhW3RoaXNbMF1dLl9kZXRhaWxzU2hvd3x8ITE6ITF9KTt2YXIgZmM9L14oW146XSspOihuYW1lfHZpc0lkeHx2aXNpYmxlKSQvLFhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7Zm9yKHZhciBjPVtdLGQ9MCxmPWUubGVuZ3RoO2Q8ZjtkKyspYy5wdXNoKEIoYSxlW2RdLGIpKTtyZXR1cm4gY307cChcImNvbHVtbnMoKVwiLGZ1bmN0aW9uKGEsYil7YT09PWs/YT1cIlwiOmguaXNQbGFpbk9iamVjdChhKSYmKGI9YSxhPVwiXCIpO3ZhciBiPWNiKGIpLGM9dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYyl7dmFyIGU9YSxmPWIsZz1jLmFvQ29sdW1ucyxcclxuICAgICAgICBqPUQoZyxcInNOYW1lXCIpLGk9RChnLFwiblRoXCIpO3JldHVybiBiYihcImNvbHVtblwiLGUsZnVuY3Rpb24oYSl7dmFyIGI9UWIoYSk7aWYoYT09PVwiXCIpcmV0dXJuIFgoZy5sZW5ndGgpO2lmKGIhPT1udWxsKXJldHVybltiPj0wP2I6Zy5sZW5ndGgrYl07aWYodHlwZW9mIGE9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPURhKGMsZik7cmV0dXJuIGgubWFwKGcsZnVuY3Rpb24oYixmKXtyZXR1cm4gYShmLFhiKGMsZiwwLDAsZSksaVtmXSk/ZjpudWxsfSl9dmFyIGs9dHlwZW9mIGE9PT1cInN0cmluZ1wiP2EubWF0Y2goZmMpOlwiXCI7aWYoaylzd2l0Y2goa1syXSl7Y2FzZSBcInZpc0lkeFwiOmNhc2UgXCJ2aXNpYmxlXCI6Yj1wYXJzZUludChrWzFdLDEwKTtpZihiPDApe3ZhciBtPWgubWFwKGcsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5iVmlzaWJsZT9iOm51bGx9KTtyZXR1cm5bbVttLmxlbmd0aCtiXV19cmV0dXJuWyQoYyxiKV07Y2FzZSBcIm5hbWVcIjpyZXR1cm4gaC5tYXAoaixmdW5jdGlvbihhLGIpe3JldHVybiBhPT09XHJcbiAgICBrWzFdP2I6bnVsbH0pO2RlZmF1bHQ6cmV0dXJuW119aWYoYS5ub2RlTmFtZSYmYS5fRFRfQ2VsbEluZGV4KXJldHVyblthLl9EVF9DZWxsSW5kZXguY29sdW1uXTtiPWgoaSkuZmlsdGVyKGEpLm1hcChmdW5jdGlvbigpe3JldHVybiBoLmluQXJyYXkodGhpcyxpKX0pLnRvQXJyYXkoKTtpZihiLmxlbmd0aHx8IWEubm9kZU5hbWUpcmV0dXJuIGI7Yj1oKGEpLmNsb3Nlc3QoXCIqW2RhdGEtZHQtY29sdW1uXVwiKTtyZXR1cm4gYi5sZW5ndGg/W2IuZGF0YShcImR0LWNvbHVtblwiKV06W119LGMsZil9LDEpO2Muc2VsZWN0b3IuY29scz1hO2Muc2VsZWN0b3Iub3B0cz1iO3JldHVybiBjfSk7dShcImNvbHVtbnMoKS5oZWFkZXIoKVwiLFwiY29sdW1uKCkuaGVhZGVyKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwiY29sdW1uXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5hb0NvbHVtbnNbYl0ublRofSwxKX0pO3UoXCJjb2x1bW5zKCkuZm9vdGVyKClcIixcImNvbHVtbigpLmZvb3RlcigpXCIsXHJcbiAgICAgICAgZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNvbHVtblwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuYW9Db2x1bW5zW2JdLm5UZn0sMSl9KTt1KFwiY29sdW1ucygpLmRhdGEoKVwiLFwiY29sdW1uKCkuZGF0YSgpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNvbHVtbi1yb3dzXCIsWGIsMSl9KTt1KFwiY29sdW1ucygpLmRhdGFTcmMoKVwiLFwiY29sdW1uKCkuZGF0YVNyYygpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNvbHVtblwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuYW9Db2x1bW5zW2JdLm1EYXRhfSwxKX0pO3UoXCJjb2x1bW5zKCkuY2FjaGUoKVwiLFwiY29sdW1uKCkuY2FjaGUoKVwiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwiY29sdW1uLXJvd3NcIixmdW5jdGlvbihiLGMsZCxlLGYpe3JldHVybiBqYShiLmFvRGF0YSxmLFwic2VhcmNoXCI9PT1hP1wiX2FGaWx0ZXJEYXRhXCI6XCJfYVNvcnREYXRhXCIsYyl9LDEpfSk7dShcImNvbHVtbnMoKS5ub2RlcygpXCIsXHJcbiAgICAgICAgXCJjb2x1bW4oKS5ub2RlcygpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNvbHVtbi1yb3dzXCIsZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gamEoYS5hb0RhdGEsZSxcImFuQ2VsbHNcIixiKX0sMSl9KTt1KFwiY29sdW1ucygpLnZpc2libGUoKVwiLFwiY29sdW1uKCkudmlzaWJsZSgpXCIsZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLml0ZXJhdG9yKFwiY29sdW1uXCIsZnVuY3Rpb24oYixjKXtpZihhPT09aylyZXR1cm4gYi5hb0NvbHVtbnNbY10uYlZpc2libGU7dmFyIGY9Yi5hb0NvbHVtbnMsZz1mW2NdLGo9Yi5hb0RhdGEsaSxuLGw7aWYoYSE9PWsmJmcuYlZpc2libGUhPT1hKXtpZihhKXt2YXIgbT1oLmluQXJyYXkoITAsRChmLFwiYlZpc2libGVcIiksYysxKTtpPTA7Zm9yKG49ai5sZW5ndGg7aTxuO2krKylsPWpbaV0ublRyLGY9altpXS5hbkNlbGxzLGwmJmwuaW5zZXJ0QmVmb3JlKGZbY10sZlttXXx8bnVsbCl9ZWxzZSBoKEQoYi5hb0RhdGEsXCJhbkNlbGxzXCIsYykpLmRldGFjaCgpO1xyXG4gICAgICAgIGcuYlZpc2libGU9YTtmYShiLGIuYW9IZWFkZXIpO2ZhKGIsYi5hb0Zvb3Rlcik7emEoYil9fSk7YSE9PWsmJih0aGlzLml0ZXJhdG9yKFwiY29sdW1uXCIsZnVuY3Rpb24oYyxlKXtzKGMsbnVsbCxcImNvbHVtbi12aXNpYmlsaXR5XCIsW2MsZSxhLGJdKX0pLChiPT09a3x8YikmJnRoaXMuY29sdW1ucy5hZGp1c3QoKSk7cmV0dXJuIGN9KTt1KFwiY29sdW1ucygpLmluZGV4ZXMoKVwiLFwiY29sdW1uKCkuaW5kZXgoKVwiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwiY29sdW1uXCIsZnVuY3Rpb24oYixjKXtyZXR1cm5cInZpc2libGVcIj09PWE/YWEoYixjKTpjfSwxKX0pO3AoXCJjb2x1bW5zLmFkanVzdCgpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYSl7WihhKX0sMSl9KTtwKFwiY29sdW1uLmluZGV4KClcIixmdW5jdGlvbihhLGIpe2lmKDAhPT10aGlzLmNvbnRleHQubGVuZ3RoKXt2YXIgYz10aGlzLmNvbnRleHRbMF07aWYoXCJmcm9tVmlzaWJsZVwiPT09XHJcbiAgICAgICAgYXx8XCJ0b0RhdGFcIj09PWEpcmV0dXJuICQoYyxiKTtpZihcImZyb21EYXRhXCI9PT1hfHxcInRvVmlzaWJsZVwiPT09YSlyZXR1cm4gYWEoYyxiKX19KTtwKFwiY29sdW1uKClcIixmdW5jdGlvbihhLGIpe3JldHVybiBkYih0aGlzLmNvbHVtbnMoYSxiKSl9KTtwKFwiY2VsbHMoKVwiLGZ1bmN0aW9uKGEsYixjKXtoLmlzUGxhaW5PYmplY3QoYSkmJihhLnJvdz09PWs/KGM9YSxhPW51bGwpOihjPWIsYj1udWxsKSk7aC5pc1BsYWluT2JqZWN0KGIpJiYoYz1iLGI9bnVsbCk7aWYobnVsbD09PWJ8fGI9PT1rKXJldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihiKXt2YXIgZD1hLGU9Y2IoYyksZj1iLmFvRGF0YSxnPURhKGIsZSksaj1UYihqYShmLGcsXCJhbkNlbGxzXCIpKSxpPWgoW10uY29uY2F0LmFwcGx5KFtdLGopKSxsLG49Yi5hb0NvbHVtbnMubGVuZ3RoLG0scCx1LHQscyx2O3JldHVybiBiYihcImNlbGxcIixkLGZ1bmN0aW9uKGEpe3ZhciBjPXR5cGVvZiBhPT09XCJmdW5jdGlvblwiO1xyXG4gICAgICAgIGlmKGE9PT1udWxsfHxhPT09a3x8Yyl7bT1bXTtwPTA7Zm9yKHU9Zy5sZW5ndGg7cDx1O3ArKyl7bD1nW3BdO2Zvcih0PTA7dDxuO3QrKyl7cz17cm93OmwsY29sdW1uOnR9O2lmKGMpe3Y9ZltsXTthKHMsQihiLGwsdCksdi5hbkNlbGxzP3YuYW5DZWxsc1t0XTpudWxsKSYmbS5wdXNoKHMpfWVsc2UgbS5wdXNoKHMpfX1yZXR1cm4gbX1pZihoLmlzUGxhaW5PYmplY3QoYSkpcmV0dXJuW2FdO2M9aS5maWx0ZXIoYSkubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJue3JvdzpiLl9EVF9DZWxsSW5kZXgucm93LGNvbHVtbjpiLl9EVF9DZWxsSW5kZXguY29sdW1ufX0pLnRvQXJyYXkoKTtpZihjLmxlbmd0aHx8IWEubm9kZU5hbWUpcmV0dXJuIGM7dj1oKGEpLmNsb3Nlc3QoXCIqW2RhdGEtZHQtcm93XVwiKTtyZXR1cm4gdi5sZW5ndGg/W3tyb3c6di5kYXRhKFwiZHQtcm93XCIpLGNvbHVtbjp2LmRhdGEoXCJkdC1jb2x1bW5cIil9XTpbXX0sYixlKX0pO3ZhciBkPXRoaXMuY29sdW1ucyhiLGMpLGU9dGhpcy5yb3dzKGEsXHJcbiAgICAgICAgYyksZixnLGosaSxuLGw9dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYSxiKXtmPVtdO2c9MDtmb3Ioaj1lW2JdLmxlbmd0aDtnPGo7ZysrKXtpPTA7Zm9yKG49ZFtiXS5sZW5ndGg7aTxuO2krKylmLnB1c2goe3JvdzplW2JdW2ddLGNvbHVtbjpkW2JdW2ldfSl9cmV0dXJuIGZ9LDEpO2guZXh0ZW5kKGwuc2VsZWN0b3Ise2NvbHM6Yixyb3dzOmEsb3B0czpjfSk7cmV0dXJuIGx9KTt1KFwiY2VsbHMoKS5ub2RlcygpXCIsXCJjZWxsKCkubm9kZSgpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNlbGxcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuKGE9YS5hb0RhdGFbYl0pJiZhLmFuQ2VsbHM/YS5hbkNlbGxzW2NdOmt9LDEpfSk7cChcImNlbGxzKCkuZGF0YSgpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNlbGxcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIEIoYSxiLGMpfSwxKX0pO3UoXCJjZWxscygpLmNhY2hlKClcIixcImNlbGwoKS5jYWNoZSgpXCIsZnVuY3Rpb24oYSl7YT1cclxuICAgICAgICBcInNlYXJjaFwiPT09YT9cIl9hRmlsdGVyRGF0YVwiOlwiX2FTb3J0RGF0YVwiO3JldHVybiB0aGlzLml0ZXJhdG9yKFwiY2VsbFwiLGZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYi5hb0RhdGFbY11bYV1bZF19LDEpfSk7dShcImNlbGxzKCkucmVuZGVyKClcIixcImNlbGwoKS5yZW5kZXIoKVwiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwiY2VsbFwiLGZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gQihiLGMsZCxhKX0sMSl9KTt1KFwiY2VsbHMoKS5pbmRleGVzKClcIixcImNlbGwoKS5pbmRleCgpXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pdGVyYXRvcihcImNlbGxcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJue3JvdzpiLGNvbHVtbjpjLGNvbHVtblZpc2libGU6YWEoYSxjKX19LDEpfSk7dShcImNlbGxzKCkuaW52YWxpZGF0ZSgpXCIsXCJjZWxsKCkuaW52YWxpZGF0ZSgpXCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJjZWxsXCIsZnVuY3Rpb24oYixjLGQpe2RhKGIsYyxhLGQpfSl9KTtwKFwiY2VsbCgpXCIsXHJcbiAgICAgICAgZnVuY3Rpb24oYSxiLGMpe3JldHVybiBkYih0aGlzLmNlbGxzKGEsYixjKSl9KTtwKFwiY2VsbCgpLmRhdGEoKVwiLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY29udGV4dCxjPXRoaXNbMF07aWYoYT09PWspcmV0dXJuIGIubGVuZ3RoJiZjLmxlbmd0aD9CKGJbMF0sY1swXS5yb3csY1swXS5jb2x1bW4pOms7bGIoYlswXSxjWzBdLnJvdyxjWzBdLmNvbHVtbixhKTtkYShiWzBdLGNbMF0ucm93LFwiZGF0YVwiLGNbMF0uY29sdW1uKTtyZXR1cm4gdGhpc30pO3AoXCJvcmRlcigpXCIsZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNvbnRleHQ7aWYoYT09PWspcmV0dXJuIDAhPT1jLmxlbmd0aD9jWzBdLmFhU29ydGluZzprO1wibnVtYmVyXCI9PT10eXBlb2YgYT9hPVtbYSxiXV06YS5sZW5ndGgmJiFoLmlzQXJyYXkoYVswXSkmJihhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihiKXtiLmFhU29ydGluZz1hLnNsaWNlKCl9KX0pO1xyXG4gICAgcChcIm9yZGVyLmxpc3RlbmVyKClcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGQpe09hKGQsYSxiLGMpfSl9KTtwKFwib3JkZXIuZml4ZWQoKVwiLGZ1bmN0aW9uKGEpe2lmKCFhKXt2YXIgYj10aGlzLmNvbnRleHQsYj1iLmxlbmd0aD9iWzBdLmFhU29ydGluZ0ZpeGVkOms7cmV0dXJuIGguaXNBcnJheShiKT97cHJlOmJ9OmJ9cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGIpe2IuYWFTb3J0aW5nRml4ZWQ9aC5leHRlbmQoITAse30sYSl9KX0pO3AoW1wiY29sdW1ucygpLm9yZGVyKClcIixcImNvbHVtbigpLm9yZGVyKClcIl0sZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gdGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oYyxkKXt2YXIgZT1bXTtoLmVhY2goYltkXSxmdW5jdGlvbihiLGMpe2UucHVzaChbYyxhXSl9KTtjLmFhU29ydGluZz1lfSl9KTtwKFwic2VhcmNoKClcIixmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cclxuICAgICAgICB0aGlzLmNvbnRleHQ7cmV0dXJuIGE9PT1rPzAhPT1lLmxlbmd0aD9lWzBdLm9QcmV2aW91c1NlYXJjaC5zU2VhcmNoOms6dGhpcy5pdGVyYXRvcihcInRhYmxlXCIsZnVuY3Rpb24oZSl7ZS5vRmVhdHVyZXMuYkZpbHRlciYmZ2EoZSxoLmV4dGVuZCh7fSxlLm9QcmV2aW91c1NlYXJjaCx7c1NlYXJjaDphK1wiXCIsYlJlZ2V4Om51bGw9PT1iPyExOmIsYlNtYXJ0Om51bGw9PT1jPyEwOmMsYkNhc2VJbnNlbnNpdGl2ZTpudWxsPT09ZD8hMDpkfSksMSl9KX0pO3UoXCJjb2x1bW5zKCkuc2VhcmNoKClcIixcImNvbHVtbigpLnNlYXJjaCgpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJjb2x1bW5cIixmdW5jdGlvbihlLGYpe3ZhciBnPWUuYW9QcmVTZWFyY2hDb2xzO2lmKGE9PT1rKXJldHVybiBnW2ZdLnNTZWFyY2g7ZS5vRmVhdHVyZXMuYkZpbHRlciYmKGguZXh0ZW5kKGdbZl0se3NTZWFyY2g6YStcIlwiLGJSZWdleDpudWxsPT09Yj8hMTpiLGJTbWFydDpudWxsPT09Yz9cclxuICAgICAgICAhMDpjLGJDYXNlSW5zZW5zaXRpdmU6bnVsbD09PWQ/ITA6ZH0pLGdhKGUsZS5vUHJldmlvdXNTZWFyY2gsMSkpfSl9KTtwKFwic3RhdGUoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dC5sZW5ndGg/dGhpcy5jb250ZXh0WzBdLm9TYXZlZFN0YXRlOm51bGx9KTtwKFwic3RhdGUuY2xlYXIoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGEpe2EuZm5TdGF0ZVNhdmVDYWxsYmFjay5jYWxsKGEub0luc3RhbmNlLGEse30pfSl9KTtwKFwic3RhdGUubG9hZGVkKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHQubGVuZ3RoP3RoaXMuY29udGV4dFswXS5vTG9hZGVkU3RhdGU6bnVsbH0pO3AoXCJzdGF0ZS5zYXZlKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihhKXt6YShhKX0pfSk7bS52ZXJzaW9uQ2hlY2s9bS5mblZlcnNpb25DaGVjaz1mdW5jdGlvbihhKXtmb3IodmFyIGI9bS52ZXJzaW9uLnNwbGl0KFwiLlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE9YS5zcGxpdChcIi5cIiksYyxkLGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspaWYoYz1wYXJzZUludChiW2VdLDEwKXx8MCxkPXBhcnNlSW50KGFbZV0sMTApfHwwLGMhPT1kKXJldHVybiBjPmQ7cmV0dXJuITB9O20uaXNEYXRhVGFibGU9bS5mbklzRGF0YVRhYmxlPWZ1bmN0aW9uKGEpe3ZhciBiPWgoYSkuZ2V0KDApLGM9ITE7aWYoYSBpbnN0YW5jZW9mIG0uQXBpKXJldHVybiEwO2guZWFjaChtLnNldHRpbmdzLGZ1bmN0aW9uKGEsZSl7dmFyIGY9ZS5uU2Nyb2xsSGVhZD9oKFwidGFibGVcIixlLm5TY3JvbGxIZWFkKVswXTpudWxsLGc9ZS5uU2Nyb2xsRm9vdD9oKFwidGFibGVcIixlLm5TY3JvbGxGb290KVswXTpudWxsO2lmKGUublRhYmxlPT09Ynx8Zj09PWJ8fGc9PT1iKWM9ITB9KTtyZXR1cm4gY307bS50YWJsZXM9bS5mblRhYmxlcz1mdW5jdGlvbihhKXt2YXIgYj0hMTtoLmlzUGxhaW5PYmplY3QoYSkmJihiPWEuYXBpLGE9YS52aXNpYmxlKTt2YXIgYz1oLm1hcChtLnNldHRpbmdzLFxyXG4gICAgICAgIGZ1bmN0aW9uKGIpe2lmKCFhfHxhJiZoKGIublRhYmxlKS5pcyhcIjp2aXNpYmxlXCIpKXJldHVybiBiLm5UYWJsZX0pO3JldHVybiBiP25ldyB0KGMpOmN9O20uY2FtZWxUb0h1bmdhcmlhbj1KO3AoXCIkKClcIixmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMucm93cyhiKS5ub2RlcygpLGM9aChjKTtyZXR1cm4gaChbXS5jb25jYXQoYy5maWx0ZXIoYSkudG9BcnJheSgpLGMuZmluZChhKS50b0FycmF5KCkpKX0pO2guZWFjaChbXCJvblwiLFwib25lXCIsXCJvZmZcIl0sZnVuY3Rpb24oYSxiKXtwKGIrXCIoKVwiLGZ1bmN0aW9uKCl7dmFyIGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTthWzBdPWgubWFwKGFbMF0uc3BsaXQoL1xccy8pLGZ1bmN0aW9uKGEpe3JldHVybiFhLm1hdGNoKC9cXC5kdFxcYi8pP2ErXCIuZHRcIjphfSkuam9pbihcIiBcIik7dmFyIGQ9aCh0aGlzLnRhYmxlcygpLm5vZGVzKCkpO2RbYl0uYXBwbHkoZCxhKTtyZXR1cm4gdGhpc30pfSk7cChcImNsZWFyKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixcclxuICAgICAgICBmdW5jdGlvbihhKXtwYShhKX0pfSk7cChcInNldHRpbmdzKClcIixmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLmNvbnRleHQsdGhpcy5jb250ZXh0KX0pO3AoXCJpbml0KClcIixmdW5jdGlvbigpe3ZhciBhPXRoaXMuY29udGV4dDtyZXR1cm4gYS5sZW5ndGg/YVswXS5vSW5pdDpudWxsfSk7cChcImRhdGEoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBEKGEuYW9EYXRhLFwiX2FEYXRhXCIpfSkuZmxhdHRlbigpfSk7cChcImRlc3Ryb3koKVwiLGZ1bmN0aW9uKGEpe2E9YXx8ITE7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWIublRhYmxlV3JhcHBlci5wYXJlbnROb2RlLGQ9Yi5vQ2xhc3NlcyxlPWIublRhYmxlLGY9Yi5uVEJvZHksZz1iLm5USGVhZCxqPWIublRGb290LGk9aChlKSxmPWgoZiksaz1oKGIublRhYmxlV3JhcHBlciksbD1oLm1hcChiLmFvRGF0YSxmdW5jdGlvbihhKXtyZXR1cm4gYS5uVHJ9KSxcclxuICAgICAgICBwO2IuYkRlc3Ryb3lpbmc9ITA7cyhiLFwiYW9EZXN0cm95Q2FsbGJhY2tcIixcImRlc3Ryb3lcIixbYl0pO2F8fChuZXcgdChiKSkuY29sdW1ucygpLnZpc2libGUoITApO2sub2ZmKFwiLkRUXCIpLmZpbmQoXCI6bm90KHRib2R5ICopXCIpLm9mZihcIi5EVFwiKTtoKEUpLm9mZihcIi5EVC1cIitiLnNJbnN0YW5jZSk7ZSE9Zy5wYXJlbnROb2RlJiYoaS5jaGlsZHJlbihcInRoZWFkXCIpLmRldGFjaCgpLGkuYXBwZW5kKGcpKTtqJiZlIT1qLnBhcmVudE5vZGUmJihpLmNoaWxkcmVuKFwidGZvb3RcIikuZGV0YWNoKCksaS5hcHBlbmQoaikpO2IuYWFTb3J0aW5nPVtdO2IuYWFTb3J0aW5nRml4ZWQ9W107eWEoYik7aChsKS5yZW1vdmVDbGFzcyhiLmFzU3RyaXBlQ2xhc3Nlcy5qb2luKFwiIFwiKSk7aChcInRoLCB0ZFwiLGcpLnJlbW92ZUNsYXNzKGQuc1NvcnRhYmxlK1wiIFwiK2Quc1NvcnRhYmxlQXNjK1wiIFwiK2Quc1NvcnRhYmxlRGVzYytcIiBcIitkLnNTb3J0YWJsZU5vbmUpO2IuYkpVSSYmKGgoXCJ0aCBzcGFuLlwiK2Quc1NvcnRJY29uK1xyXG4gICAgICAgIFwiLCB0ZCBzcGFuLlwiK2Quc1NvcnRJY29uLGcpLmRldGFjaCgpLGgoXCJ0aCwgdGRcIixnKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGE9aChcImRpdi5cIitkLnNTb3J0SlVJV3JhcHBlcix0aGlzKTtoKHRoaXMpLmFwcGVuZChhLmNvbnRlbnRzKCkpO2EuZGV0YWNoKCl9KSk7Zi5jaGlsZHJlbigpLmRldGFjaCgpO2YuYXBwZW5kKGwpO2c9YT9cInJlbW92ZVwiOlwiZGV0YWNoXCI7aVtnXSgpO2tbZ10oKTshYSYmYyYmKGMuaW5zZXJ0QmVmb3JlKGUsYi5uVGFibGVSZWluc2VydEJlZm9yZSksaS5jc3MoXCJ3aWR0aFwiLGIuc0Rlc3Ryb3lXaWR0aCkucmVtb3ZlQ2xhc3MoZC5zVGFibGUpLChwPWIuYXNEZXN0cm95U3RyaXBlcy5sZW5ndGgpJiZmLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihhKXtoKHRoaXMpLmFkZENsYXNzKGIuYXNEZXN0cm95U3RyaXBlc1thJXBdKX0pKTtjPWguaW5BcnJheShiLG0uc2V0dGluZ3MpOy0xIT09YyYmbS5zZXR0aW5ncy5zcGxpY2UoYywxKX0pfSk7aC5lYWNoKFtcImNvbHVtblwiLFxyXG4gICAgICAgIFwicm93XCIsXCJjZWxsXCJdLGZ1bmN0aW9uKGEsYil7cChiK1wicygpLmV2ZXJ5KClcIixmdW5jdGlvbihhKXt2YXIgZD10aGlzLnNlbGVjdG9yLm9wdHMsZT10aGlzO3JldHVybiB0aGlzLml0ZXJhdG9yKGIsZnVuY3Rpb24oZixnLGgsaSxtKXthLmNhbGwoZVtiXShnLFwiY2VsbFwiPT09Yj9oOmQsXCJjZWxsXCI9PT1iP2Q6ayksZyxoLGksbSl9KX0pfSk7cChcImkxOG4oKVwiLGZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLmNvbnRleHRbMF0sYT1SKGEpKGQub0xhbmd1YWdlKTthPT09ayYmKGE9Yik7YyE9PWsmJmguaXNQbGFpbk9iamVjdChhKSYmKGE9YVtjXSE9PWs/YVtjXTphLl8pO3JldHVybiBhLnJlcGxhY2UoXCIlZFwiLGMpfSk7bS52ZXJzaW9uPVwiMS4xMC4xNVwiO20uc2V0dGluZ3M9W107bS5tb2RlbHM9e307bS5tb2RlbHMub1NlYXJjaD17YkNhc2VJbnNlbnNpdGl2ZTohMCxzU2VhcmNoOlwiXCIsYlJlZ2V4OiExLGJTbWFydDohMH07bS5tb2RlbHMub1Jvdz17blRyOm51bGwsYW5DZWxsczpudWxsLFxyXG4gICAgICAgIF9hRGF0YTpbXSxfYVNvcnREYXRhOm51bGwsX2FGaWx0ZXJEYXRhOm51bGwsX3NGaWx0ZXJSb3c6bnVsbCxfc1Jvd1N0cmlwZTpcIlwiLHNyYzpudWxsLGlkeDotMX07bS5tb2RlbHMub0NvbHVtbj17aWR4Om51bGwsYURhdGFTb3J0Om51bGwsYXNTb3J0aW5nOm51bGwsYlNlYXJjaGFibGU6bnVsbCxiU29ydGFibGU6bnVsbCxiVmlzaWJsZTpudWxsLF9zTWFudWFsVHlwZTpudWxsLF9iQXR0clNyYzohMSxmbkNyZWF0ZWRDZWxsOm51bGwsZm5HZXREYXRhOm51bGwsZm5TZXREYXRhOm51bGwsbURhdGE6bnVsbCxtUmVuZGVyOm51bGwsblRoOm51bGwsblRmOm51bGwsc0NsYXNzOm51bGwsc0NvbnRlbnRQYWRkaW5nOm51bGwsc0RlZmF1bHRDb250ZW50Om51bGwsc05hbWU6bnVsbCxzU29ydERhdGFUeXBlOlwic3RkXCIsc1NvcnRpbmdDbGFzczpudWxsLHNTb3J0aW5nQ2xhc3NKVUk6bnVsbCxzVGl0bGU6bnVsbCxzVHlwZTpudWxsLHNXaWR0aDpudWxsLHNXaWR0aE9yaWc6bnVsbH07bS5kZWZhdWx0cz1cclxuICAgICAgICB7YWFEYXRhOm51bGwsYWFTb3J0aW5nOltbMCxcImFzY1wiXV0sYWFTb3J0aW5nRml4ZWQ6W10sYWpheDpudWxsLGFMZW5ndGhNZW51OlsxMCwyNSw1MCwxMDBdLGFvQ29sdW1uczpudWxsLGFvQ29sdW1uRGVmczpudWxsLGFvU2VhcmNoQ29sczpbXSxhc1N0cmlwZUNsYXNzZXM6bnVsbCxiQXV0b1dpZHRoOiEwLGJEZWZlclJlbmRlcjohMSxiRGVzdHJveTohMSxiRmlsdGVyOiEwLGJJbmZvOiEwLGJKUXVlcnlVSTohMSxiTGVuZ3RoQ2hhbmdlOiEwLGJQYWdpbmF0ZTohMCxiUHJvY2Vzc2luZzohMSxiUmV0cmlldmU6ITEsYlNjcm9sbENvbGxhcHNlOiExLGJTZXJ2ZXJTaWRlOiExLGJTb3J0OiEwLGJTb3J0TXVsdGk6ITAsYlNvcnRDZWxsc1RvcDohMSxiU29ydENsYXNzZXM6ITAsYlN0YXRlU2F2ZTohMSxmbkNyZWF0ZWRSb3c6bnVsbCxmbkRyYXdDYWxsYmFjazpudWxsLGZuRm9vdGVyQ2FsbGJhY2s6bnVsbCxmbkZvcm1hdE51bWJlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXHJcbiAgICAgICAgICAgIHRoaXMub0xhbmd1YWdlLnNUaG91c2FuZHMpfSxmbkhlYWRlckNhbGxiYWNrOm51bGwsZm5JbmZvQ2FsbGJhY2s6bnVsbCxmbkluaXRDb21wbGV0ZTpudWxsLGZuUHJlRHJhd0NhbGxiYWNrOm51bGwsZm5Sb3dDYWxsYmFjazpudWxsLGZuU2VydmVyRGF0YTpudWxsLGZuU2VydmVyUGFyYW1zOm51bGwsZm5TdGF0ZUxvYWRDYWxsYmFjazpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIEpTT04ucGFyc2UoKC0xPT09YS5pU3RhdGVEdXJhdGlvbj9zZXNzaW9uU3RvcmFnZTpsb2NhbFN0b3JhZ2UpLmdldEl0ZW0oXCJEYXRhVGFibGVzX1wiK2Euc0luc3RhbmNlK1wiX1wiK2xvY2F0aW9uLnBhdGhuYW1lKSl9Y2F0Y2goYil7fX0sZm5TdGF0ZUxvYWRQYXJhbXM6bnVsbCxmblN0YXRlTG9hZGVkOm51bGwsZm5TdGF0ZVNhdmVDYWxsYmFjazpmdW5jdGlvbihhLGIpe3RyeXsoLTE9PT1hLmlTdGF0ZUR1cmF0aW9uP3Nlc3Npb25TdG9yYWdlOmxvY2FsU3RvcmFnZSkuc2V0SXRlbShcIkRhdGFUYWJsZXNfXCIrYS5zSW5zdGFuY2UrXHJcbiAgICAgICAgICAgIFwiX1wiK2xvY2F0aW9uLnBhdGhuYW1lLEpTT04uc3RyaW5naWZ5KGIpKX1jYXRjaChjKXt9fSxmblN0YXRlU2F2ZVBhcmFtczpudWxsLGlTdGF0ZUR1cmF0aW9uOjcyMDAsaURlZmVyTG9hZGluZzpudWxsLGlEaXNwbGF5TGVuZ3RoOjEwLGlEaXNwbGF5U3RhcnQ6MCxpVGFiSW5kZXg6MCxvQ2xhc3Nlczp7fSxvTGFuZ3VhZ2U6e29BcmlhOntzU29ydEFzY2VuZGluZzpcIjogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gYXNjZW5kaW5nXCIsc1NvcnREZXNjZW5kaW5nOlwiOiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiBkZXNjZW5kaW5nXCJ9LG9QYWdpbmF0ZTp7c0ZpcnN0OlwiRmlyc3RcIixzTGFzdDpcIkxhc3RcIixzTmV4dDpcIk5leHRcIixzUHJldmlvdXM6XCJQcmV2aW91c1wifSxzRW1wdHlUYWJsZTpcIk5vIGRhdGEgYXZhaWxhYmxlIGluIHRhYmxlXCIsc0luZm86XCJTaG93aW5nIF9TVEFSVF8gdG8gX0VORF8gb2YgX1RPVEFMXyBlbnRyaWVzXCIsc0luZm9FbXB0eTpcIlNob3dpbmcgMCB0byAwIG9mIDAgZW50cmllc1wiLFxyXG4gICAgICAgICAgICBzSW5mb0ZpbHRlcmVkOlwiKGZpbHRlcmVkIGZyb20gX01BWF8gdG90YWwgZW50cmllcylcIixzSW5mb1Bvc3RGaXg6XCJcIixzRGVjaW1hbDpcIlwiLHNUaG91c2FuZHM6XCIsXCIsc0xlbmd0aE1lbnU6XCJTaG93IF9NRU5VXyBlbnRyaWVzXCIsc0xvYWRpbmdSZWNvcmRzOlwiTG9hZGluZy4uLlwiLHNQcm9jZXNzaW5nOlwiUHJvY2Vzc2luZy4uLlwiLHNTZWFyY2g6XCJTZWFyY2g6XCIsc1NlYXJjaFBsYWNlaG9sZGVyOlwiXCIsc1VybDpcIlwiLHNaZXJvUmVjb3JkczpcIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmRcIn0sb1NlYXJjaDpoLmV4dGVuZCh7fSxtLm1vZGVscy5vU2VhcmNoKSxzQWpheERhdGFQcm9wOlwiZGF0YVwiLHNBamF4U291cmNlOm51bGwsc0RvbTpcImxmcnRpcFwiLHNlYXJjaERlbGF5Om51bGwsc1BhZ2luYXRpb25UeXBlOlwic2ltcGxlX251bWJlcnNcIixzU2Nyb2xsWDpcIlwiLHNTY3JvbGxYSW5uZXI6XCJcIixzU2Nyb2xsWTpcIlwiLHNTZXJ2ZXJNZXRob2Q6XCJHRVRcIixyZW5kZXJlcjpudWxsLHJvd0lkOlwiRFRfUm93SWRcIn07XHJcbiAgICBZKG0uZGVmYXVsdHMpO20uZGVmYXVsdHMuY29sdW1uPXthRGF0YVNvcnQ6bnVsbCxpRGF0YVNvcnQ6LTEsYXNTb3J0aW5nOltcImFzY1wiLFwiZGVzY1wiXSxiU2VhcmNoYWJsZTohMCxiU29ydGFibGU6ITAsYlZpc2libGU6ITAsZm5DcmVhdGVkQ2VsbDpudWxsLG1EYXRhOm51bGwsbVJlbmRlcjpudWxsLHNDZWxsVHlwZTpcInRkXCIsc0NsYXNzOlwiXCIsc0NvbnRlbnRQYWRkaW5nOlwiXCIsc0RlZmF1bHRDb250ZW50Om51bGwsc05hbWU6XCJcIixzU29ydERhdGFUeXBlOlwic3RkXCIsc1RpdGxlOm51bGwsc1R5cGU6bnVsbCxzV2lkdGg6bnVsbH07WShtLmRlZmF1bHRzLmNvbHVtbik7bS5tb2RlbHMub1NldHRpbmdzPXtvRmVhdHVyZXM6e2JBdXRvV2lkdGg6bnVsbCxiRGVmZXJSZW5kZXI6bnVsbCxiRmlsdGVyOm51bGwsYkluZm86bnVsbCxiTGVuZ3RoQ2hhbmdlOm51bGwsYlBhZ2luYXRlOm51bGwsYlByb2Nlc3Npbmc6bnVsbCxiU2VydmVyU2lkZTpudWxsLGJTb3J0Om51bGwsYlNvcnRNdWx0aTpudWxsLFxyXG4gICAgICAgIGJTb3J0Q2xhc3NlczpudWxsLGJTdGF0ZVNhdmU6bnVsbH0sb1Njcm9sbDp7YkNvbGxhcHNlOm51bGwsaUJhcldpZHRoOjAsc1g6bnVsbCxzWElubmVyOm51bGwsc1k6bnVsbH0sb0xhbmd1YWdlOntmbkluZm9DYWxsYmFjazpudWxsfSxvQnJvd3Nlcjp7YlNjcm9sbE92ZXJzaXplOiExLGJTY3JvbGxiYXJMZWZ0OiExLGJCb3VuZGluZzohMSxiYXJXaWR0aDowfSxhamF4Om51bGwsYWFuRmVhdHVyZXM6W10sYW9EYXRhOltdLGFpRGlzcGxheTpbXSxhaURpc3BsYXlNYXN0ZXI6W10sYUlkczp7fSxhb0NvbHVtbnM6W10sYW9IZWFkZXI6W10sYW9Gb290ZXI6W10sb1ByZXZpb3VzU2VhcmNoOnt9LGFvUHJlU2VhcmNoQ29sczpbXSxhYVNvcnRpbmc6bnVsbCxhYVNvcnRpbmdGaXhlZDpbXSxhc1N0cmlwZUNsYXNzZXM6bnVsbCxhc0Rlc3Ryb3lTdHJpcGVzOltdLHNEZXN0cm95V2lkdGg6MCxhb1Jvd0NhbGxiYWNrOltdLGFvSGVhZGVyQ2FsbGJhY2s6W10sYW9Gb290ZXJDYWxsYmFjazpbXSxcclxuICAgICAgICBhb0RyYXdDYWxsYmFjazpbXSxhb1Jvd0NyZWF0ZWRDYWxsYmFjazpbXSxhb1ByZURyYXdDYWxsYmFjazpbXSxhb0luaXRDb21wbGV0ZTpbXSxhb1N0YXRlU2F2ZVBhcmFtczpbXSxhb1N0YXRlTG9hZFBhcmFtczpbXSxhb1N0YXRlTG9hZGVkOltdLHNUYWJsZUlkOlwiXCIsblRhYmxlOm51bGwsblRIZWFkOm51bGwsblRGb290Om51bGwsblRCb2R5Om51bGwsblRhYmxlV3JhcHBlcjpudWxsLGJEZWZlckxvYWRpbmc6ITEsYkluaXRpYWxpc2VkOiExLGFvT3BlblJvd3M6W10sc0RvbTpudWxsLHNlYXJjaERlbGF5Om51bGwsc1BhZ2luYXRpb25UeXBlOlwidHdvX2J1dHRvblwiLGlTdGF0ZUR1cmF0aW9uOjAsYW9TdGF0ZVNhdmU6W10sYW9TdGF0ZUxvYWQ6W10sb1NhdmVkU3RhdGU6bnVsbCxvTG9hZGVkU3RhdGU6bnVsbCxzQWpheFNvdXJjZTpudWxsLHNBamF4RGF0YVByb3A6bnVsbCxiQWpheERhdGFHZXQ6ITAsanFYSFI6bnVsbCxqc29uOmssb0FqYXhEYXRhOmssZm5TZXJ2ZXJEYXRhOm51bGwsXHJcbiAgICAgICAgYW9TZXJ2ZXJQYXJhbXM6W10sc1NlcnZlck1ldGhvZDpudWxsLGZuRm9ybWF0TnVtYmVyOm51bGwsYUxlbmd0aE1lbnU6bnVsbCxpRHJhdzowLGJEcmF3aW5nOiExLGlEcmF3RXJyb3I6LTEsX2lEaXNwbGF5TGVuZ3RoOjEwLF9pRGlzcGxheVN0YXJ0OjAsX2lSZWNvcmRzVG90YWw6MCxfaVJlY29yZHNEaXNwbGF5OjAsYkpVSTpudWxsLG9DbGFzc2VzOnt9LGJGaWx0ZXJlZDohMSxiU29ydGVkOiExLGJTb3J0Q2VsbHNUb3A6bnVsbCxvSW5pdDpudWxsLGFvRGVzdHJveUNhbGxiYWNrOltdLGZuUmVjb3Jkc1RvdGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJzc3BcIj09eSh0aGlzKT8xKnRoaXMuX2lSZWNvcmRzVG90YWw6dGhpcy5haURpc3BsYXlNYXN0ZXIubGVuZ3RofSxmblJlY29yZHNEaXNwbGF5OmZ1bmN0aW9uKCl7cmV0dXJuXCJzc3BcIj09eSh0aGlzKT8xKnRoaXMuX2lSZWNvcmRzRGlzcGxheTp0aGlzLmFpRGlzcGxheS5sZW5ndGh9LGZuRGlzcGxheUVuZDpmdW5jdGlvbigpe3ZhciBhPVxyXG4gICAgICAgICAgICB0aGlzLl9pRGlzcGxheUxlbmd0aCxiPXRoaXMuX2lEaXNwbGF5U3RhcnQsYz1iK2EsZD10aGlzLmFpRGlzcGxheS5sZW5ndGgsZT10aGlzLm9GZWF0dXJlcyxmPWUuYlBhZ2luYXRlO3JldHVybiBlLmJTZXJ2ZXJTaWRlPyExPT09Znx8LTE9PT1hP2IrZDpNYXRoLm1pbihiK2EsdGhpcy5faVJlY29yZHNEaXNwbGF5KTohZnx8Yz5kfHwtMT09PWE/ZDpjfSxvSW5zdGFuY2U6bnVsbCxzSW5zdGFuY2U6bnVsbCxpVGFiSW5kZXg6MCxuU2Nyb2xsSGVhZDpudWxsLG5TY3JvbGxGb290Om51bGwsYUxhc3RTb3J0OltdLG9QbHVnaW5zOnt9LHJvd0lkRm46bnVsbCxyb3dJZDpudWxsfTttLmV4dD14PXtidXR0b25zOnt9LGNsYXNzZXM6e30sYnVpbGRlcjpcIi1zb3VyY2UtXCIsZXJyTW9kZTpcImFsZXJ0XCIsZmVhdHVyZTpbXSxzZWFyY2g6W10sc2VsZWN0b3I6e2NlbGw6W10sY29sdW1uOltdLHJvdzpbXX0saW50ZXJuYWw6e30sbGVnYWN5OnthamF4Om51bGx9LHBhZ2VyOnt9LHJlbmRlcmVyOntwYWdlQnV0dG9uOnt9LFxyXG4gICAgICAgIGhlYWRlcjp7fX0sb3JkZXI6e30sdHlwZTp7ZGV0ZWN0OltdLHNlYXJjaDp7fSxvcmRlcjp7fX0sX3VuaXF1ZTowLGZuVmVyc2lvbkNoZWNrOm0uZm5WZXJzaW9uQ2hlY2ssaUFwaUluZGV4OjAsb0pVSUNsYXNzZXM6e30sc1ZlcnNpb246bS52ZXJzaW9ufTtoLmV4dGVuZCh4LHthZm5GaWx0ZXJpbmc6eC5zZWFyY2gsYVR5cGVzOngudHlwZS5kZXRlY3Qsb2ZuU2VhcmNoOngudHlwZS5zZWFyY2gsb1NvcnQ6eC50eXBlLm9yZGVyLGFmblNvcnREYXRhOngub3JkZXIsYW9GZWF0dXJlczp4LmZlYXR1cmUsb0FwaTp4LmludGVybmFsLG9TdGRDbGFzc2VzOnguY2xhc3NlcyxvUGFnaW5hdGlvbjp4LnBhZ2VyfSk7aC5leHRlbmQobS5leHQuY2xhc3Nlcyx7c1RhYmxlOlwiZGF0YVRhYmxlXCIsc05vRm9vdGVyOlwibm8tZm9vdGVyXCIsc1BhZ2VCdXR0b246XCJwYWdpbmF0ZV9idXR0b25cIixzUGFnZUJ1dHRvbkFjdGl2ZTpcImN1cnJlbnRcIixzUGFnZUJ1dHRvbkRpc2FibGVkOlwiZGlzYWJsZWRcIixzU3RyaXBlT2RkOlwib2RkXCIsXHJcbiAgICAgICAgc1N0cmlwZUV2ZW46XCJldmVuXCIsc1Jvd0VtcHR5OlwiZGF0YVRhYmxlc19lbXB0eVwiLHNXcmFwcGVyOlwiZGF0YVRhYmxlc193cmFwcGVyXCIsc0ZpbHRlcjpcImRhdGFUYWJsZXNfZmlsdGVyXCIsc0luZm86XCJkYXRhVGFibGVzX2luZm9cIixzUGFnaW5nOlwiZGF0YVRhYmxlc19wYWdpbmF0ZSBwYWdpbmdfXCIsc0xlbmd0aDpcImRhdGFUYWJsZXNfbGVuZ3RoXCIsc1Byb2Nlc3Npbmc6XCJkYXRhVGFibGVzX3Byb2Nlc3NpbmdcIixzU29ydEFzYzpcInNvcnRpbmdfYXNjXCIsc1NvcnREZXNjOlwic29ydGluZ19kZXNjXCIsc1NvcnRhYmxlOlwic29ydGluZ1wiLHNTb3J0YWJsZUFzYzpcInNvcnRpbmdfYXNjX2Rpc2FibGVkXCIsc1NvcnRhYmxlRGVzYzpcInNvcnRpbmdfZGVzY19kaXNhYmxlZFwiLHNTb3J0YWJsZU5vbmU6XCJzb3J0aW5nX2Rpc2FibGVkXCIsc1NvcnRDb2x1bW46XCJzb3J0aW5nX1wiLHNGaWx0ZXJJbnB1dDpcIlwiLHNMZW5ndGhTZWxlY3Q6XCJcIixzU2Nyb2xsV3JhcHBlcjpcImRhdGFUYWJsZXNfc2Nyb2xsXCIsc1Njcm9sbEhlYWQ6XCJkYXRhVGFibGVzX3Njcm9sbEhlYWRcIixcclxuICAgICAgICBzU2Nyb2xsSGVhZElubmVyOlwiZGF0YVRhYmxlc19zY3JvbGxIZWFkSW5uZXJcIixzU2Nyb2xsQm9keTpcImRhdGFUYWJsZXNfc2Nyb2xsQm9keVwiLHNTY3JvbGxGb290OlwiZGF0YVRhYmxlc19zY3JvbGxGb290XCIsc1Njcm9sbEZvb3RJbm5lcjpcImRhdGFUYWJsZXNfc2Nyb2xsRm9vdElubmVyXCIsc0hlYWRlclRIOlwiXCIsc0Zvb3RlclRIOlwiXCIsc1NvcnRKVUlBc2M6XCJcIixzU29ydEpVSURlc2M6XCJcIixzU29ydEpVSTpcIlwiLHNTb3J0SlVJQXNjQWxsb3dlZDpcIlwiLHNTb3J0SlVJRGVzY0FsbG93ZWQ6XCJcIixzU29ydEpVSVdyYXBwZXI6XCJcIixzU29ydEljb246XCJcIixzSlVJSGVhZGVyOlwiXCIsc0pVSUZvb3RlcjpcIlwifSk7dmFyIEVhPVwiXCIsRWE9XCJcIixHPUVhK1widWktc3RhdGUtZGVmYXVsdFwiLGthPUVhK1wiY3NzX3JpZ2h0IHVpLWljb24gdWktaWNvbi1cIixZYj1FYStcImZnLXRvb2xiYXIgdWktdG9vbGJhciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeFwiO2guZXh0ZW5kKG0uZXh0Lm9KVUlDbGFzc2VzLFxyXG4gICAgICAgIG0uZXh0LmNsYXNzZXMse3NQYWdlQnV0dG9uOlwiZmctYnV0dG9uIHVpLWJ1dHRvbiBcIitHLHNQYWdlQnV0dG9uQWN0aXZlOlwidWktc3RhdGUtZGlzYWJsZWRcIixzUGFnZUJ1dHRvbkRpc2FibGVkOlwidWktc3RhdGUtZGlzYWJsZWRcIixzUGFnaW5nOlwiZGF0YVRhYmxlc19wYWdpbmF0ZSBmZy1idXR0b25zZXQgdWktYnV0dG9uc2V0IGZnLWJ1dHRvbnNldC1tdWx0aSB1aS1idXR0b25zZXQtbXVsdGkgcGFnaW5nX1wiLHNTb3J0QXNjOkcrXCIgc29ydGluZ19hc2NcIixzU29ydERlc2M6RytcIiBzb3J0aW5nX2Rlc2NcIixzU29ydGFibGU6RytcIiBzb3J0aW5nXCIsc1NvcnRhYmxlQXNjOkcrXCIgc29ydGluZ19hc2NfZGlzYWJsZWRcIixzU29ydGFibGVEZXNjOkcrXCIgc29ydGluZ19kZXNjX2Rpc2FibGVkXCIsc1NvcnRhYmxlTm9uZTpHK1wiIHNvcnRpbmdfZGlzYWJsZWRcIixzU29ydEpVSUFzYzprYStcInRyaWFuZ2xlLTEtblwiLHNTb3J0SlVJRGVzYzprYStcInRyaWFuZ2xlLTEtc1wiLHNTb3J0SlVJOmthK1wiY2FyYXQtMi1uLXNcIixcclxuICAgICAgICAgICAgc1NvcnRKVUlBc2NBbGxvd2VkOmthK1wiY2FyYXQtMS1uXCIsc1NvcnRKVUlEZXNjQWxsb3dlZDprYStcImNhcmF0LTEtc1wiLHNTb3J0SlVJV3JhcHBlcjpcIkRhdGFUYWJsZXNfc29ydF93cmFwcGVyXCIsc1NvcnRJY29uOlwiRGF0YVRhYmxlc19zb3J0X2ljb25cIixzU2Nyb2xsSGVhZDpcImRhdGFUYWJsZXNfc2Nyb2xsSGVhZCBcIitHLHNTY3JvbGxGb290OlwiZGF0YVRhYmxlc19zY3JvbGxGb290IFwiK0csc0hlYWRlclRIOkcsc0Zvb3RlclRIOkcsc0pVSUhlYWRlcjpZYitcIiB1aS1jb3JuZXItdGwgdWktY29ybmVyLXRyXCIsc0pVSUZvb3RlcjpZYitcIiB1aS1jb3JuZXItYmwgdWktY29ybmVyLWJyXCJ9KTt2YXIgTmI9bS5leHQucGFnZXI7aC5leHRlbmQoTmIse3NpbXBsZTpmdW5jdGlvbigpe3JldHVybltcInByZXZpb3VzXCIsXCJuZXh0XCJdfSxmdWxsOmZ1bmN0aW9uKCl7cmV0dXJuW1wiZmlyc3RcIixcInByZXZpb3VzXCIsXCJuZXh0XCIsXCJsYXN0XCJdfSxudW1iZXJzOmZ1bmN0aW9uKGEsYil7cmV0dXJuW2lhKGEsXHJcbiAgICAgICAgYildfSxzaW1wbGVfbnVtYmVyczpmdW5jdGlvbihhLGIpe3JldHVybltcInByZXZpb3VzXCIsaWEoYSxiKSxcIm5leHRcIl19LGZ1bGxfbnVtYmVyczpmdW5jdGlvbihhLGIpe3JldHVybltcImZpcnN0XCIsXCJwcmV2aW91c1wiLGlhKGEsYiksXCJuZXh0XCIsXCJsYXN0XCJdfSxmaXJzdF9sYXN0X251bWJlcnM6ZnVuY3Rpb24oYSxiKXtyZXR1cm5bXCJmaXJzdFwiLGlhKGEsYiksXCJsYXN0XCJdfSxfbnVtYmVyczppYSxudW1iZXJzX2xlbmd0aDo3fSk7aC5leHRlbmQoITAsbS5leHQucmVuZGVyZXIse3BhZ2VCdXR0b246e186ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnPWEub0NsYXNzZXMsaj1hLm9MYW5ndWFnZS5vUGFnaW5hdGUsaT1hLm9MYW5ndWFnZS5vQXJpYS5wYWdpbmF0ZXx8e30sbSxsLHA9MCxyPWZ1bmN0aW9uKGIsZCl7dmFyIGssdCx1LHMsdj1mdW5jdGlvbihiKXtWYShhLGIuZGF0YS5hY3Rpb24sdHJ1ZSl9O2s9MDtmb3IodD1kLmxlbmd0aDtrPHQ7aysrKXtzPWRba107aWYoaC5pc0FycmF5KHMpKXt1PVxyXG4gICAgICAgIGgoXCI8XCIrKHMuRFRfZWx8fFwiZGl2XCIpK1wiLz5cIikuYXBwZW5kVG8oYik7cih1LHMpfWVsc2V7bT1udWxsO2w9XCJcIjtzd2l0Y2gocyl7Y2FzZSBcImVsbGlwc2lzXCI6Yi5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxsaXBzaXNcIj4mI3gyMDI2Ozwvc3Bhbj4nKTticmVhaztjYXNlIFwiZmlyc3RcIjptPWouc0ZpcnN0O2w9cysoZT4wP1wiXCI6XCIgXCIrZy5zUGFnZUJ1dHRvbkRpc2FibGVkKTticmVhaztjYXNlIFwicHJldmlvdXNcIjptPWouc1ByZXZpb3VzO2w9cysoZT4wP1wiXCI6XCIgXCIrZy5zUGFnZUJ1dHRvbkRpc2FibGVkKTticmVhaztjYXNlIFwibmV4dFwiOm09ai5zTmV4dDtsPXMrKGU8Zi0xP1wiXCI6XCIgXCIrZy5zUGFnZUJ1dHRvbkRpc2FibGVkKTticmVhaztjYXNlIFwibGFzdFwiOm09ai5zTGFzdDtsPXMrKGU8Zi0xP1wiXCI6XCIgXCIrZy5zUGFnZUJ1dHRvbkRpc2FibGVkKTticmVhaztkZWZhdWx0Om09cysxO2w9ZT09PXM/Zy5zUGFnZUJ1dHRvbkFjdGl2ZTpcIlwifWlmKG0hPT1udWxsKXt1PWgoXCI8YT5cIix7XCJjbGFzc1wiOmcuc1BhZ2VCdXR0b24rXHJcbiAgICBcIiBcIitsLFwiYXJpYS1jb250cm9sc1wiOmEuc1RhYmxlSWQsXCJhcmlhLWxhYmVsXCI6aVtzXSxcImRhdGEtZHQtaWR4XCI6cCx0YWJpbmRleDphLmlUYWJJbmRleCxpZDpjPT09MCYmdHlwZW9mIHM9PT1cInN0cmluZ1wiP2Euc1RhYmxlSWQrXCJfXCIrczpudWxsfSkuaHRtbChtKS5hcHBlbmRUbyhiKTtZYSh1LHthY3Rpb246c30sdik7cCsrfX19fSx0O3RyeXt0PWgoYikuZmluZChILmFjdGl2ZUVsZW1lbnQpLmRhdGEoXCJkdC1pZHhcIil9Y2F0Y2godSl7fXIoaChiKS5lbXB0eSgpLGQpO3QhPT1rJiZoKGIpLmZpbmQoXCJbZGF0YS1kdC1pZHg9XCIrdCtcIl1cIikuZm9jdXMoKX19fSk7aC5leHRlbmQobS5leHQudHlwZS5kZXRlY3QsW2Z1bmN0aW9uKGEsYil7dmFyIGM9Yi5vTGFuZ3VhZ2Uuc0RlY2ltYWw7cmV0dXJuIGFiKGEsYyk/XCJudW1cIitjOm51bGx9LGZ1bmN0aW9uKGEpe2lmKGEmJiEoYSBpbnN0YW5jZW9mIERhdGUpJiYhY2MudGVzdChhKSlyZXR1cm4gbnVsbDt2YXIgYj1EYXRlLnBhcnNlKGEpO1xyXG4gICAgICAgIHJldHVybiBudWxsIT09YiYmIWlzTmFOKGIpfHxNKGEpP1wiZGF0ZVwiOm51bGx9LGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5vTGFuZ3VhZ2Uuc0RlY2ltYWw7cmV0dXJuIGFiKGEsYywhMCk/XCJudW0tZm10XCIrYzpudWxsfSxmdW5jdGlvbihhLGIpe3ZhciBjPWIub0xhbmd1YWdlLnNEZWNpbWFsO3JldHVybiBTYihhLGMpP1wiaHRtbC1udW1cIitjOm51bGx9LGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5vTGFuZ3VhZ2Uuc0RlY2ltYWw7cmV0dXJuIFNiKGEsYywhMCk/XCJodG1sLW51bS1mbXRcIitjOm51bGx9LGZ1bmN0aW9uKGEpe3JldHVybiBNKGEpfHxcInN0cmluZ1wiPT09dHlwZW9mIGEmJi0xIT09YS5pbmRleE9mKFwiPFwiKT9cImh0bWxcIjpudWxsfV0pO2guZXh0ZW5kKG0uZXh0LnR5cGUuc2VhcmNoLHtodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBNKGEpP2E6XCJzdHJpbmdcIj09PXR5cGVvZiBhP2EucmVwbGFjZShQYixcIiBcIikucmVwbGFjZShDYSxcIlwiKTpcIlwifSxzdHJpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuIE0oYSk/XHJcbiAgICAgICAgYTpcInN0cmluZ1wiPT09dHlwZW9mIGE/YS5yZXBsYWNlKFBiLFwiIFwiKTphfX0pO3ZhciBCYT1mdW5jdGlvbihhLGIsYyxkKXtpZigwIT09YSYmKCFhfHxcIi1cIj09PWEpKXJldHVybi1JbmZpbml0eTtiJiYoYT1SYihhLGIpKTthLnJlcGxhY2UmJihjJiYoYT1hLnJlcGxhY2UoYyxcIlwiKSksZCYmKGE9YS5yZXBsYWNlKGQsXCJcIikpKTtyZXR1cm4gMSphfTtoLmV4dGVuZCh4LnR5cGUub3JkZXIse1wiZGF0ZS1wcmVcIjpmdW5jdGlvbihhKXtyZXR1cm4gRGF0ZS5wYXJzZShhKXx8LUluZmluaXR5fSxcImh0bWwtcHJlXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIE0oYSk/XCJcIjphLnJlcGxhY2U/YS5yZXBsYWNlKC88Lio/Pi9nLFwiXCIpLnRvTG93ZXJDYXNlKCk6YStcIlwifSxcInN0cmluZy1wcmVcIjpmdW5jdGlvbihhKXtyZXR1cm4gTShhKT9cIlwiOlwic3RyaW5nXCI9PT10eXBlb2YgYT9hLnRvTG93ZXJDYXNlKCk6IWEudG9TdHJpbmc/XCJcIjphLnRvU3RyaW5nKCl9LFwic3RyaW5nLWFzY1wiOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8XHJcbiAgICBiPy0xOmE+Yj8xOjB9LFwic3RyaW5nLWRlc2NcIjpmdW5jdGlvbihhLGIpe3JldHVybiBhPGI/MTphPmI/LTE6MH19KTtmYihcIlwiKTtoLmV4dGVuZCghMCxtLmV4dC5yZW5kZXJlcix7aGVhZGVyOntfOmZ1bmN0aW9uKGEsYixjLGQpe2goYS5uVGFibGUpLm9uKFwib3JkZXIuZHQuRFRcIixmdW5jdGlvbihlLGYsZyxoKXtpZihhPT09Zil7ZT1jLmlkeDtiLnJlbW92ZUNsYXNzKGMuc1NvcnRpbmdDbGFzcytcIiBcIitkLnNTb3J0QXNjK1wiIFwiK2Quc1NvcnREZXNjKS5hZGRDbGFzcyhoW2VdPT1cImFzY1wiP2Quc1NvcnRBc2M6aFtlXT09XCJkZXNjXCI/ZC5zU29ydERlc2M6Yy5zU29ydGluZ0NsYXNzKX19KX0sanF1ZXJ5dWk6ZnVuY3Rpb24oYSxiLGMsZCl7aChcIjxkaXYvPlwiKS5hZGRDbGFzcyhkLnNTb3J0SlVJV3JhcHBlcikuYXBwZW5kKGIuY29udGVudHMoKSkuYXBwZW5kKGgoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKGQuc1NvcnRJY29uK1wiIFwiK2Muc1NvcnRpbmdDbGFzc0pVSSkpLmFwcGVuZFRvKGIpO1xyXG4gICAgICAgIGgoYS5uVGFibGUpLm9uKFwib3JkZXIuZHQuRFRcIixmdW5jdGlvbihlLGYsZyxoKXtpZihhPT09Zil7ZT1jLmlkeDtiLnJlbW92ZUNsYXNzKGQuc1NvcnRBc2MrXCIgXCIrZC5zU29ydERlc2MpLmFkZENsYXNzKGhbZV09PVwiYXNjXCI/ZC5zU29ydEFzYzpoW2VdPT1cImRlc2NcIj9kLnNTb3J0RGVzYzpjLnNTb3J0aW5nQ2xhc3MpO2IuZmluZChcInNwYW4uXCIrZC5zU29ydEljb24pLnJlbW92ZUNsYXNzKGQuc1NvcnRKVUlBc2MrXCIgXCIrZC5zU29ydEpVSURlc2MrXCIgXCIrZC5zU29ydEpVSStcIiBcIitkLnNTb3J0SlVJQXNjQWxsb3dlZCtcIiBcIitkLnNTb3J0SlVJRGVzY0FsbG93ZWQpLmFkZENsYXNzKGhbZV09PVwiYXNjXCI/ZC5zU29ydEpVSUFzYzpoW2VdPT1cImRlc2NcIj9kLnNTb3J0SlVJRGVzYzpjLnNTb3J0aW5nQ2xhc3NKVUkpfX0pfX19KTt2YXIgWmI9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhP2EucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXHJcbiAgICAgICAgICAgIFwiJnF1b3Q7XCIpOmF9O20ucmVuZGVyPXtudW1iZXI6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm57ZGlzcGxheTpmdW5jdGlvbihmKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGYmJlwic3RyaW5nXCIhPT10eXBlb2YgZilyZXR1cm4gZjt2YXIgZz0wPmY/XCItXCI6XCJcIixoPXBhcnNlRmxvYXQoZik7aWYoaXNOYU4oaCkpcmV0dXJuIFpiKGYpO2g9aC50b0ZpeGVkKGMpO2Y9TWF0aC5hYnMoaCk7aD1wYXJzZUludChmLDEwKTtmPWM/YisoZi1oKS50b0ZpeGVkKGMpLnN1YnN0cmluZygyKTpcIlwiO3JldHVybiBnKyhkfHxcIlwiKStoLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyxhKStmKyhlfHxcIlwiKX19fSx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJue2Rpc3BsYXk6WmJ9fX07aC5leHRlbmQobS5leHQuaW50ZXJuYWwse19mbkV4dGVybkFwaUZ1bmM6T2IsX2ZuQnVpbGRBamF4OnVhLF9mbkFqYXhVcGRhdGU6bmIsX2ZuQWpheFBhcmFtZXRlcnM6d2IsX2ZuQWpheFVwZGF0ZURyYXc6eGIsXHJcbiAgICAgICAgX2ZuQWpheERhdGFTcmM6dmEsX2ZuQWRkQ29sdW1uOkdhLF9mbkNvbHVtbk9wdGlvbnM6bGEsX2ZuQWRqdXN0Q29sdW1uU2l6aW5nOlosX2ZuVmlzaWJsZVRvQ29sdW1uSW5kZXg6JCxfZm5Db2x1bW5JbmRleFRvVmlzaWJsZTphYSxfZm5WaXNibGVDb2x1bW5zOmJhLF9mbkdldENvbHVtbnM6bmEsX2ZuQ29sdW1uVHlwZXM6SWEsX2ZuQXBwbHlDb2x1bW5EZWZzOmtiLF9mbkh1bmdhcmlhbk1hcDpZLF9mbkNhbWVsVG9IdW5nYXJpYW46SixfZm5MYW5ndWFnZUNvbXBhdDpGYSxfZm5Ccm93c2VyRGV0ZWN0OmliLF9mbkFkZERhdGE6TixfZm5BZGRUcjpvYSxfZm5Ob2RlVG9EYXRhSW5kZXg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5fRFRfUm93SW5kZXghPT1rP2IuX0RUX1Jvd0luZGV4Om51bGx9LF9mbk5vZGVUb0NvbHVtbkluZGV4OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gaC5pbkFycmF5KGMsYS5hb0RhdGFbYl0uYW5DZWxscyl9LF9mbkdldENlbGxEYXRhOkIsX2ZuU2V0Q2VsbERhdGE6bGIsXHJcbiAgICAgICAgX2ZuU3BsaXRPYmpOb3RhdGlvbjpMYSxfZm5HZXRPYmplY3REYXRhRm46UixfZm5TZXRPYmplY3REYXRhRm46UyxfZm5HZXREYXRhTWFzdGVyOk1hLF9mbkNsZWFyVGFibGU6cGEsX2ZuRGVsZXRlSW5kZXg6cWEsX2ZuSW52YWxpZGF0ZTpkYSxfZm5HZXRSb3dFbGVtZW50czpLYSxfZm5DcmVhdGVUcjpKYSxfZm5CdWlsZEhlYWQ6bWIsX2ZuRHJhd0hlYWQ6ZmEsX2ZuRHJhdzpPLF9mblJlRHJhdzpULF9mbkFkZE9wdGlvbnNIdG1sOnBiLF9mbkRldGVjdEhlYWRlcjplYSxfZm5HZXRVbmlxdWVUaHM6dGEsX2ZuRmVhdHVyZUh0bWxGaWx0ZXI6cmIsX2ZuRmlsdGVyQ29tcGxldGU6Z2EsX2ZuRmlsdGVyQ3VzdG9tOkFiLF9mbkZpbHRlckNvbHVtbjp6YixfZm5GaWx0ZXI6eWIsX2ZuRmlsdGVyQ3JlYXRlU2VhcmNoOlJhLF9mbkVzY2FwZVJlZ2V4OlNhLF9mbkZpbHRlckRhdGE6QmIsX2ZuRmVhdHVyZUh0bWxJbmZvOnViLF9mblVwZGF0ZUluZm86RWIsX2ZuSW5mb01hY3JvczpGYixfZm5Jbml0aWFsaXNlOmhhLFxyXG4gICAgICAgIF9mbkluaXRDb21wbGV0ZTp3YSxfZm5MZW5ndGhDaGFuZ2U6VGEsX2ZuRmVhdHVyZUh0bWxMZW5ndGg6cWIsX2ZuRmVhdHVyZUh0bWxQYWdpbmF0ZTp2YixfZm5QYWdlQ2hhbmdlOlZhLF9mbkZlYXR1cmVIdG1sUHJvY2Vzc2luZzpzYixfZm5Qcm9jZXNzaW5nRGlzcGxheTpDLF9mbkZlYXR1cmVIdG1sVGFibGU6dGIsX2ZuU2Nyb2xsRHJhdzptYSxfZm5BcHBseVRvQ2hpbGRyZW46SSxfZm5DYWxjdWxhdGVDb2x1bW5XaWR0aHM6SGEsX2ZuVGhyb3R0bGU6UWEsX2ZuQ29udmVydFRvV2lkdGg6R2IsX2ZuR2V0V2lkZXN0Tm9kZTpIYixfZm5HZXRNYXhMZW5TdHJpbmc6SWIsX2ZuU3RyaW5nVG9Dc3M6dixfZm5Tb3J0RmxhdHRlbjpXLF9mblNvcnQ6b2IsX2ZuU29ydEFyaWE6S2IsX2ZuU29ydExpc3RlbmVyOlhhLF9mblNvcnRBdHRhY2hMaXN0ZW5lcjpPYSxfZm5Tb3J0aW5nQ2xhc3Nlczp5YSxfZm5Tb3J0RGF0YTpKYixfZm5TYXZlU3RhdGU6emEsX2ZuTG9hZFN0YXRlOkxiLF9mblNldHRpbmdzRnJvbU5vZGU6QWEsXHJcbiAgICAgICAgX2ZuTG9nOkssX2ZuTWFwOkYsX2ZuQmluZEFjdGlvbjpZYSxfZm5DYWxsYmFja1JlZzp6LF9mbkNhbGxiYWNrRmlyZTpzLF9mbkxlbmd0aE92ZXJmbG93OlVhLF9mblJlbmRlcmVyOlBhLF9mbkRhdGFTb3VyY2U6eSxfZm5Sb3dBdHRyaWJ1dGVzOk5hLF9mbkNhbGN1bGF0ZUVuZDpmdW5jdGlvbigpe319KTtoLmZuLmRhdGFUYWJsZT1tO20uJD1oO2guZm4uZGF0YVRhYmxlU2V0dGluZ3M9bS5zZXR0aW5ncztoLmZuLmRhdGFUYWJsZUV4dD1tLmV4dDtoLmZuLkRhdGFUYWJsZT1mdW5jdGlvbihhKXtyZXR1cm4gaCh0aGlzKS5kYXRhVGFibGUoYSkuYXBpKCl9O2guZWFjaChtLGZ1bmN0aW9uKGEsYil7aC5mbi5EYXRhVGFibGVbYV09Yn0pO3JldHVybiBoLmZuLmRhdGFUYWJsZX0pO1xyXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xyXG5cclxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xyXG5cclxuLyohIGZsYXRwaWNrciB2My4wLjYsIEBsaWNlbnNlIE1JVCAqL1xyXG5mdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBjb25maWcpIHtcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdHNlbGYuXyA9IHt9O1xyXG5cdHNlbGYuXy5hZnRlckRheUFuaW0gPSBhZnRlckRheUFuaW07XHJcblx0c2VsZi5fYmluZCA9IGJpbmQ7XHJcblx0c2VsZi5fY29tcGFyZURhdGVzID0gY29tcGFyZURhdGVzO1xyXG5cdHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xyXG5cdHNlbGYuY2hhbmdlTW9udGggPSBjaGFuZ2VNb250aDtcclxuXHRzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xyXG5cdHNlbGYuY2xlYXIgPSBjbGVhcjtcclxuXHRzZWxmLmNsb3NlID0gY2xvc2U7XHJcblx0c2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XHJcblx0c2VsZi5kZXN0cm95ID0gZGVzdHJveTtcclxuXHRzZWxmLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuXHRzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xyXG5cdHNlbGYub3BlbiA9IG9wZW47XHJcblx0c2VsZi5yZWRyYXcgPSByZWRyYXc7XHJcblx0c2VsZi5zZXQgPSBzZXQ7XHJcblx0c2VsZi5zZXREYXRlID0gc2V0RGF0ZTtcclxuXHRzZWxmLnRvZ2dsZSA9IHRvZ2dsZTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRcdHNlbGYuZWxlbWVudCA9IHNlbGYuaW5wdXQgPSBlbGVtZW50O1xyXG5cdFx0c2VsZi5pbnN0YW5jZUNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHRcdHNlbGYucGFyc2VEYXRlID0gRmxhdHBpY2tySW5zdGFuY2UucHJvdG90eXBlLnBhcnNlRGF0ZS5iaW5kKHNlbGYpO1xyXG5cdFx0c2VsZi5mb3JtYXREYXRlID0gRmxhdHBpY2tySW5zdGFuY2UucHJvdG90eXBlLmZvcm1hdERhdGUuYmluZChzZWxmKTtcclxuXHJcblx0XHRzZXR1cEZvcm1hdHMoKTtcclxuXHRcdHBhcnNlQ29uZmlnKCk7XHJcblx0XHRzZXR1cExvY2FsZSgpO1xyXG5cdFx0c2V0dXBJbnB1dHMoKTtcclxuXHRcdHNldHVwRGF0ZXMoKTtcclxuXHRcdHNldHVwSGVscGVyRnVuY3Rpb25zKCk7XHJcblxyXG5cdFx0c2VsZi5pc09wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRzZWxmLmlzTW9iaWxlID0gIXNlbGYuY29uZmlnLmRpc2FibGVNb2JpbGUgJiYgIXNlbGYuY29uZmlnLmlubGluZSAmJiBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcud2Vla051bWJlcnMgJiYgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuXHRcdGlmICghc2VsZi5pc01vYmlsZSkgYnVpbGQoKTtcclxuXHJcblx0XHRiaW5kRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG5cdFx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG5cdFx0XHRcdHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubm9DYWxlbmRhciA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8IHNlbGYuY29uZmlnLm1pbkRhdGUgOiBudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cGRhdGVWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYuc2hvd1RpbWVJbnB1dCA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXI7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XHJcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPSBzZWxmLmRheXNDb250YWluZXIub2Zmc2V0V2lkdGggKyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghc2VsZi5pc01vYmlsZSkgcG9zaXRpb25DYWxlbmRhcigpO1xyXG5cclxuXHRcdHRyaWdnZXJFdmVudChcIlJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBCaW5kcyBhIGZ1bmN0aW9uIHRvIHRoZSBjdXJyZW50IGZsYXRwaWNrciBpbnN0YW5jZVxyXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uXHJcbiAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBpbnN0YW5jZVxyXG4gICovXHJcblx0ZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcclxuXHRcdHJldHVybiBmbi5iaW5kKHNlbGYpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBUaGUgaGFuZGxlciBmb3IgYWxsIGV2ZW50cyB0YXJnZXRpbmcgdGhlIHRpbWUgaW5wdXRzXHJcbiAgKiBAcGFyYW0ge0V2ZW50fSBlIHRoZSBldmVudCAtIFwiaW5wdXRcIiwgXCJ3aGVlbFwiLCBcImluY3JlbWVudFwiLCBldGNcclxuICAqL1xyXG5cdGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xyXG5cdFx0aWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiYgIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpXHJcblx0XHRcdC8vIHBpY2tpbmcgdGltZSBvbmx5XHJcblx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtzZWxmLm5vd107XHJcblxyXG5cdFx0dGltZVdyYXBwZXIoZSk7XHJcblxyXG5cdFx0aWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKCFzZWxmLm1pbkRhdGVIYXNUaW1lIHx8IGUudHlwZSAhPT0gXCJpbnB1dFwiIHx8IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSAyKSB7XHJcblx0XHRcdHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG5cdFx0XHR1cGRhdGVWYWx1ZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcblx0XHRcdFx0dXBkYXRlVmFsdWUoKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIFN5bmNzIHRoZSBzZWxlY3RlZCBkYXRlIG9iamVjdCB0aW1lIHdpdGggdXNlcidzIHRpbWUgaW5wdXRcclxuICAqL1xyXG5cdGZ1bmN0aW9uIHNldEhvdXJzRnJvbUlucHV0cygpIHtcclxuXHRcdGlmICghc2VsZi5jb25maWcuZW5hYmxlVGltZSkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciBob3VycyA9IChwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSAoc2VsZi5hbVBNID8gMTIgOiAyNCksXHJcblx0XHQgICAgbWludXRlcyA9IChwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwLFxyXG5cdFx0ICAgIHNlY29uZHMgPSBzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzID8gKHBhcnNlSW50KHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjAgOiAwO1xyXG5cclxuXHRcdGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkgaG91cnMgPSBob3VycyAlIDEyICsgMTIgKiAoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIpO1xyXG5cclxuXHRcdGlmIChzZWxmLm1pbkRhdGVIYXNUaW1lICYmIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSkgPT09IDApIHtcclxuXHJcblx0XHRcdGhvdXJzID0gTWF0aC5tYXgoaG91cnMsIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSk7XHJcblx0XHRcdGlmIChob3VycyA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpKSBtaW51dGVzID0gTWF0aC5tYXgobWludXRlcywgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZWxmLm1heERhdGVIYXNUaW1lICYmIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWF4RGF0ZSkgPT09IDApIHtcclxuXHRcdFx0aG91cnMgPSBNYXRoLm1pbihob3Vycywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKTtcclxuXHRcdFx0aWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpIG1pbnV0ZXMgPSBNYXRoLm1pbihtaW51dGVzLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBTeW5jcyB0aW1lIGlucHV0IHZhbHVlcyB3aXRoIGEgZGF0ZVxyXG4gICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIHRoZSBkYXRlIHRvIHN5bmMgd2l0aFxyXG4gICovXHJcblx0ZnVuY3Rpb24gc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKSB7XHJcblx0XHR2YXIgZGF0ZSA9IGRhdGVPYmogfHwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmo7XHJcblxyXG5cdFx0aWYgKGRhdGUpIHNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICogU2V0cyB0aGUgaG91cnMsIG1pbnV0ZXMsIGFuZCBvcHRpb25hbGx5IHNlY29uZHNcclxuICAqIG9mIHRoZSBsYXRlc3Qgc2VsZWN0ZWQgZGF0ZSBvYmplY3QgYW5kIHRoZVxyXG4gICogY29ycmVzcG9uZGluZyB0aW1lIGlucHV0c1xyXG4gICogQHBhcmFtIHtOdW1iZXJ9IGhvdXJzIHRoZSBob3VyLiB3aGV0aGVyIGl0cyBtaWxpdGFyeVxyXG4gICogICAgICAgICAgICAgICAgIG9yIGFtLXBtIGdldHMgaW5mZXJyZWQgZnJvbSBjb25maWdcclxuICAqIEBwYXJhbSB7TnVtYmVyfSBtaW51dGVzIHRoZSBtaW51dGVzXHJcbiAgKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyB0aGUgc2Vjb25kcyAob3B0aW9uYWwpXHJcbiAgKi9cclxuXHRmdW5jdGlvbiBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHtcclxuXHRcdFx0c2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouc2V0SG91cnMoaG91cnMgJSAyNCwgbWludXRlcywgc2Vjb25kcyB8fCAwLCAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLmVuYWJsZVRpbWUgfHwgc2VsZi5pc01vYmlsZSkgcmV0dXJuO1xyXG5cclxuXHRcdHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZCghc2VsZi5jb25maWcudGltZV8yNGhyID8gKDEyICsgaG91cnMpICUgMTIgKyAxMiAqIChob3VycyAlIDEyID09PSAwKSA6IGhvdXJzKTtcclxuXHJcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZChtaW51dGVzKTtcclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMgPT09IHRydWUpIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHNlbGYucGFkKHNlY29uZHMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBIYW5kbGVzIHRoZSB5ZWFyIGlucHV0IGFuZCBpbmNyZW1lbnRpbmcgZXZlbnRzXHJcbiAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCB0aGUga2V5dXAgb3IgaW5jcmVtZW50IGV2ZW50XHJcbiAgKi9cclxuXHRmdW5jdGlvbiBvblllYXJJbnB1dChldmVudCkge1xyXG5cdFx0dmFyIHllYXIgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHRpZiAoZXZlbnQuZGVsdGEpIHllYXIgPSAocGFyc2VJbnQoeWVhcikgKyBldmVudC5kZWx0YSkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRpZiAoeWVhci5sZW5ndGggPT09IDQgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuYmx1cigpO1xyXG5cdFx0XHRpZiAoIS9bXlxcZF0vLnRlc3QoeWVhcikpIGNoYW5nZVllYXIoeWVhcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIEVzc2VudGlhbGx5IGFkZEV2ZW50TGlzdGVuZXIgKyB0cmFja2luZ1xyXG4gICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZEV2ZW50TGlzdGVuZXIgdG9cclxuICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCB0aGUgZXZlbnQgbmFtZVxyXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciB0aGUgZXZlbnQgaGFuZGxlclxyXG4gICovXHJcblx0ZnVuY3Rpb24gYmluZChlbGVtZW50LCBldmVudCwgaGFuZGxlcikge1xyXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldikge1xyXG5cdFx0XHRyZXR1cm4gYmluZChlbGVtZW50LCBldiwgaGFuZGxlcik7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gZWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG5cdFx0XHRyZXR1cm4gYmluZChlbCwgZXZlbnQsIGhhbmRsZXIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuXHRcdHNlbGYuX2hhbmRsZXJzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50LCBldmVudDogZXZlbnQsIGhhbmRsZXI6IGhhbmRsZXIgfSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIEEgbW91c2Vkb3duIGhhbmRsZXIgd2hpY2ggbWltaWNzIGNsaWNrLlxyXG4gICogTWluaW1pemVzIGxhdGVuY3ksIHNpbmNlIHdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgbW91c2V1cCBpbiBtb3N0IGNhc2VzLlxyXG4gICogQWxzbywgYXZvaWRzIGhhbmRsaW5nIHJpZ2h0IGNsaWNrcy5cclxuICAqXHJcbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIHRoZSBldmVudCBoYW5kbGVyXHJcbiAgKi9cclxuXHRmdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XHJcblx0XHRcdHJldHVybiBldnQud2hpY2ggPT09IDEgJiYgaGFuZGxlcihldnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICogQWRkcyBhbGwgdGhlIG5lY2Vzc2FyeSBldmVudCBsaXN0ZW5lcnNcclxuICAqL1xyXG5cdGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcblx0XHRzZWxmLl9oYW5kbGVycyA9IFtdO1xyXG5cdFx0c2VsZi5fYW5pbWF0aW9uTG9vcCA9IFtdO1xyXG5cdFx0aWYgKHNlbGYuY29uZmlnLndyYXApIHtcclxuXHRcdFx0W1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiICsgZXZ0ICsgXCJdXCIpLCBmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRcdHJldHVybiBiaW5kKGVsLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGZbZXZ0XSkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5pc01vYmlsZSkgcmV0dXJuIHNldHVwTW9iaWxlKCk7XHJcblxyXG5cdFx0c2VsZi5kZWJvdW5jZWRSZXNpemUgPSBkZWJvdW5jZShvblJlc2l6ZSwgNTApO1xyXG5cdFx0c2VsZi50cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XHJcblx0XHR9O1xyXG5cdFx0c2VsZi5kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZShzZWxmLnRyaWdnZXJDaGFuZ2UsIDMwMCk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLmRheXNDb250YWluZXIpIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRyZXR1cm4gb25Nb3VzZU92ZXIoZS50YXJnZXQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0YmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcblxyXG5cdFx0aWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMpIGJpbmQoc2VsZi5faW5wdXQsIFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG5cclxuXHRcdGlmICghc2VsZi5jb25maWcuaW5saW5lICYmICFzZWxmLmNvbmZpZy5zdGF0aWMpIGJpbmQod2luZG93LCBcInJlc2l6ZVwiLCBzZWxmLmRlYm91bmNlZFJlc2l6ZSk7XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZCkgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwidG91Y2hzdGFydFwiLCBkb2N1bWVudENsaWNrKTtcclxuXHJcblx0XHRiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJtb3VzZWRvd25cIiwgb25DbGljayhkb2N1bWVudENsaWNrKSk7XHJcblx0XHRiaW5kKHNlbGYuX2lucHV0LCBcImJsdXJcIiwgZG9jdW1lbnRDbGljayk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMgPT09IHRydWUpIHtcclxuXHRcdFx0YmluZChzZWxmLl9pbnB1dCwgXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xyXG5cdFx0XHRiaW5kKHNlbGYuX2lucHV0LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGYub3BlbikpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG5cdFx0XHRzZWxmLm1vbnRoTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRiaW5kKHNlbGYubW9udGhOYXYsIFwid2hlZWxcIiwgZGVib3VuY2Uob25Nb250aE5hdlNjcm9sbCwgMTApKTtcclxuXHRcdFx0YmluZChzZWxmLm1vbnRoTmF2LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKG9uTW9udGhOYXZDbGljaykpO1xyXG5cclxuXHRcdFx0YmluZChzZWxmLm1vbnRoTmF2LCBbXCJrZXl1cFwiLCBcImluY3JlbWVudFwiXSwgb25ZZWFySW5wdXQpO1xyXG5cdFx0XHRiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxlY3REYXRlKSk7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5jb25maWcuYW5pbWF0ZSkge1xyXG5cdFx0XHRcdGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBbXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgXCJhbmltYXRpb25lbmRcIl0sIGFuaW1hdGVEYXlzKTtcclxuXHRcdFx0XHRiaW5kKHNlbGYubW9udGhOYXYsIFtcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCBcImFuaW1hdGlvbmVuZFwiXSwgYW5pbWF0ZU1vbnRocyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG5cdFx0XHR2YXIgc2VsVGV4dCA9IGZ1bmN0aW9uIHNlbFRleHQoZSkge1xyXG5cdFx0XHRcdHJldHVybiBlLnRhcmdldC5zZWxlY3QoKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0YmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcIndoZWVsXCIsIFwiaW5wdXRcIiwgXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xyXG5cdFx0XHRiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayh0aW1lSW5jcmVtZW50KSk7XHJcblxyXG5cdFx0XHRiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgW1wid2hlZWxcIiwgXCJpbmNyZW1lbnRcIl0sIHNlbGYuZGVib3VuY2VkQ2hhbmdlKTtcclxuXHRcdFx0YmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiaW5wdXRcIiwgc2VsZi50cmlnZ2VyQ2hhbmdlKTtcclxuXHJcblx0XHRcdGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFwiZm9jdXNcIiwgc2VsVGV4dCk7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpIGJpbmQoc2VsZi5zZWNvbmRFbGVtZW50LCBcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGJpbmQoc2VsZi5hbVBNLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVUaW1lKGUpO1xyXG5cdFx0XHRcdFx0c2VsZi50cmlnZ2VyQ2hhbmdlKGUpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKSB7XHJcblx0XHRmb3IgKHZhciBpID0gc2VsZi5fYW5pbWF0aW9uTG9vcC5sZW5ndGg7IGktLTspIHtcclxuXHRcdFx0c2VsZi5fYW5pbWF0aW9uTG9vcFtpXSgpO1xyXG5cdFx0XHRzZWxmLl9hbmltYXRpb25Mb29wLnNwbGljZShpLCAxKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICogUmVtb3ZlcyB0aGUgZGF5IGNvbnRhaW5lciB0aGF0IHNsaWRlZCBvdXQgb2Ygdmlld1xyXG4gICogQHBhcmFtIHtFdmVudH0gZSB0aGUgYW5pbWF0aW9uIGV2ZW50XHJcbiAgKi9cclxuXHRmdW5jdGlvbiBhbmltYXRlRGF5cyhlKSB7XHJcblx0XHRpZiAoc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRzd2l0Y2ggKGUuYW5pbWF0aW9uTmFtZSkge1xyXG5cdFx0XHRcdGNhc2UgXCJmcFNsaWRlTGVmdFwiOlxyXG5cdFx0XHRcdFx0c2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG5cdFx0XHRcdFx0c2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuXHRcdFx0XHRcdHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkO1xyXG5cdFx0XHRcdFx0cHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcImZwU2xpZGVSaWdodFwiOlxyXG5cdFx0XHRcdFx0c2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUmlnaHROZXdcIik7XHJcblx0XHRcdFx0XHRzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZCk7XHJcblx0XHRcdFx0XHRzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuXHRcdFx0XHRcdHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBSZW1vdmVzIHRoZSBtb250aCBlbGVtZW50IHRoYXQgYW5pbWF0ZWQgb3V0IG9mIHZpZXdcclxuICAqIEBwYXJhbSB7RXZlbnR9IGUgdGhlIGFuaW1hdGlvbiBldmVudFxyXG4gICovXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZU1vbnRocyhlKSB7XHJcblx0XHRzd2l0Y2ggKGUuYW5pbWF0aW9uTmFtZSkge1xyXG5cdFx0XHRjYXNlIFwiZnBTbGlkZUxlZnROZXdcIjpcclxuXHRcdFx0Y2FzZSBcImZwU2xpZGVSaWdodE5ld1wiOlxyXG5cdFx0XHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG5cdFx0XHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVSaWdodE5ld1wiKTtcclxuXHRcdFx0XHR2YXIgbmF2ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG5cclxuXHRcdFx0XHR3aGlsZSAobmF2Lm5leHRTaWJsaW5nICYmIC9jdXJyLy50ZXN0KG5hdi5uZXh0U2libGluZy5jbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0XHRzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5uZXh0U2libGluZyk7XHJcblx0XHRcdFx0fXdoaWxlIChuYXYucHJldmlvdXNTaWJsaW5nICYmIC9jdXJyLy50ZXN0KG5hdi5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKSkge1xyXG5cdFx0XHRcdFx0c2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYucHJldmlvdXNTaWJsaW5nKTtcclxuXHRcdFx0XHR9c2VsZi5vbGRDdXJNb250aCA9IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIFNldCB0aGUgY2FsZW5kYXIgdmlldyB0byBhIHBhcnRpY3VsYXIgZGF0ZS5cclxuICAqIEBwYXJhbSB7RGF0ZX0ganVtcERhdGUgdGhlIGRhdGUgdG8gc2V0IHRoZSB2aWV3IHRvXHJcbiAgKi9cclxuXHRmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlKSB7XHJcblx0XHRqdW1wRGF0ZSA9IGp1bXBEYXRlID8gc2VsZi5wYXJzZURhdGUoanVtcERhdGUpIDogc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHwgKHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1pbkRhdGUgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1heERhdGUgOiBzZWxmLm5vdyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0c2VsZi5jdXJyZW50WWVhciA9IGp1bXBEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdHNlbGYuY3VycmVudE1vbnRoID0ganVtcERhdGUuZ2V0TW9udGgoKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHRcdFx0Y29uc29sZS5lcnJvcihlLnN0YWNrKTtcclxuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHRcdFx0Y29uc29sZS53YXJuKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIGp1bXBEYXRlKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLnJlZHJhdygpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBUaGUgdXAvZG93biBhcnJvdyBoYW5kbGVyIGZvciB0aW1lIGlucHV0c1xyXG4gICogQHBhcmFtIHtFdmVudH0gZSB0aGUgY2xpY2sgZXZlbnRcclxuICAqL1xyXG5cdGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xyXG5cdFx0aWYgKH5lLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImFycm93XCIpKSBpbmNyZW1lbnROdW1JbnB1dChlLCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpID8gMSA6IC0xKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICogSW5jcmVtZW50cy9kZWNyZW1lbnRzIHRoZSB2YWx1ZSBvZiBpbnB1dCBhc3NvY2ktXHJcbiAgKiBhdGVkIHdpdGggdGhlIHVwL2Rvd24gYXJyb3cgYnkgZGlzcGF0Y2hpbmcgYW5cclxuICAqIFwiaW5jcmVtZW50XCIgZXZlbnQgb24gdGhlIGlucHV0LlxyXG4gICpcclxuICAqIEBwYXJhbSB7RXZlbnR9IGUgdGhlIGNsaWNrIGV2ZW50XHJcbiAgKiBAcGFyYW0ge051bWJlcn0gZGVsdGEgdGhlIGRpZmYgKHVzdWFsbHkgMSBvciAtMSlcclxuICAqIEBwYXJhbSB7RWxlbWVudH0gaW5wdXRFbGVtIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgKi9cclxuXHRmdW5jdGlvbiBpbmNyZW1lbnROdW1JbnB1dChlLCBkZWx0YSwgaW5wdXRFbGVtKSB7XHJcblx0XHR2YXIgaW5wdXQgPSBpbnB1dEVsZW0gfHwgZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdO1xyXG5cdFx0dmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQoXCJpbmNyZW1lbnRcIik7XHJcblx0XHRldmVudC5kZWx0YSA9IGRlbHRhO1xyXG5cdFx0aW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSkge1xyXG5cdFx0dmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibnVtSW5wdXRXcmFwcGVyXCIpLFxyXG5cdFx0ICAgIG51bUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibnVtSW5wdXQgXCIgKyBpbnB1dENsYXNzTmFtZSksXHJcblx0XHQgICAgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSxcclxuXHRcdCAgICBhcnJvd0Rvd24gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93RG93blwiKTtcclxuXHJcblx0XHRudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcblx0XHRudW1JbnB1dC5wYXR0ZXJuID0gXCJcXFxcZCpcIjtcclxuXHJcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcclxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dVcCk7XHJcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93RG93bik7XHJcblxyXG5cdFx0cmV0dXJuIHdyYXBwZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBidWlsZCgpIHtcclxuXHRcdHZhciBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcclxuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcclxuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcclxuXHRcdFx0c2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMpIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWVrcygpKTtcclxuXHJcblx0XHRcdHNlbGYuckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItckNvbnRhaW5lclwiKTtcclxuXHRcdFx0c2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkV2Vla2RheXMoKSk7XHJcblxyXG5cdFx0XHRpZiAoIXNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG5cdFx0XHRcdHNlbGYuZGF5c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItZGF5c1wiKTtcclxuXHRcdFx0XHRzZWxmLmRheXNDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnVpbGREYXlzKCk7XHJcblx0XHRcdHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xyXG5cclxuXHRcdFx0c2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xyXG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmlubmVyQ29udGFpbmVyKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRUaW1lKCkpO1xyXG5cclxuXHRcdHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmFuZ2VNb2RlXCIsIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIik7XHJcblx0XHR0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFuaW1hdGVcIiwgc2VsZi5jb25maWcuYW5pbWF0ZSk7XHJcblxyXG5cdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcblxyXG5cdFx0dmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICYmIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XHJcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5jb25maWcuaW5saW5lICYmICFjdXN0b21BcHBlbmQpIHtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIHNlbGYuX2lucHV0Lm5leHRTaWJsaW5nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xyXG5cdFx0XHRcdHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13cmFwcGVyXCIpO1xyXG5cdFx0XHRcdHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBzZWxmLmVsZW1lbnQpO1xyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5lbGVtZW50KTtcclxuXHJcblx0XHRcdFx0aWYgKHNlbGYuYWx0SW5wdXQpIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XHJcblxyXG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0KGN1c3RvbUFwcGVuZCA/IHNlbGYuY29uZmlnLmFwcGVuZFRvIDogd2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlRGF5KGNsYXNzTmFtZSwgZGF0ZSwgZGF5TnVtYmVyLCBpKSB7XHJcblx0XHR2YXIgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSxcclxuXHRcdCAgICBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItZGF5IFwiICsgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKSk7XHJcblxyXG5cdFx0ZGF5RWxlbWVudC5kYXRlT2JqID0gZGF0ZTtcclxuXHRcdGRheUVsZW1lbnQuJGkgPSBpO1xyXG5cdFx0ZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYuZm9ybWF0RGF0ZShkYXRlLCBzZWxmLmNvbmZpZy5hcmlhRGF0ZUZvcm1hdCkpO1xyXG5cclxuXHRcdGlmIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5ub3cpID09PSAwKSB7XHJcblx0XHRcdHNlbGYudG9kYXlEYXRlRWxlbSA9IGRheUVsZW1lbnQ7XHJcblx0XHRcdGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkYXRlSXNFbmFibGVkKSB7XHJcblx0XHRcdGRheUVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuXHRcdFx0aWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XHJcblx0XHRcdFx0ZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcblx0XHRcdFx0c2VsZi5zZWxlY3RlZERhdGVFbGVtID0gZGF5RWxlbWVudDtcclxuXHRcdFx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcblx0XHRcdFx0XHR0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPT09IDApO1xyXG5cclxuXHRcdFx0XHRcdHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwiZW5kUmFuZ2VcIiwgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPT09IDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiYgZGF0ZSA+IHNlbGYubWluUmFuZ2VEYXRlICYmIGRhdGUgPCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pIHNlbGYubWluUmFuZ2VEYXRlID0gZGF0ZTtlbHNlIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiYgZGF0ZSA8IHNlbGYubWF4UmFuZ2VEYXRlICYmIGRhdGUgPiBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pIHNlbGYubWF4UmFuZ2VEYXRlID0gZGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcblx0XHRcdGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSkgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcclxuXHJcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxICYmIChkYXRlIDwgc2VsZi5taW5SYW5nZURhdGUgfHwgZGF0ZSA+IHNlbGYubWF4UmFuZ2VEYXRlKSkgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMgJiYgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmIGRheU51bWJlciAlIDcgPT09IDEpIHtcclxuXHRcdFx0c2VsZi53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8c3BhbiBjbGFzcz0nZGlzYWJsZWQgZmxhdHBpY2tyLWRheSc+XCIgKyBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICsgXCI8L3NwYW4+XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyaWdnZXJFdmVudChcIkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcclxuXHJcblx0XHRyZXR1cm4gZGF5RWxlbWVudDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudEluZGV4LCBvZmZzZXQpIHtcclxuXHRcdHZhciBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIG9mZnNldCB8fCAwLFxyXG5cdFx0ICAgIHRhcmdldE5vZGUgPSBjdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZCA/IHNlbGYuZGF5cy5jaGlsZE5vZGVzW25ld0luZGV4XSA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSB8fCBzZWxmLnRvZGF5RGF0ZUVsZW0gfHwgc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0sXHJcblx0XHQgICAgZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcclxuXHRcdFx0dGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGUgfHwgc2VsZi5kYXlzLmNoaWxkTm9kZXNbbmV3SW5kZXhdO1xyXG5cdFx0XHR0YXJnZXROb2RlLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKHRhcmdldE5vZGUgPT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IDApIHtcclxuXHRcdFx0aWYgKG9mZnNldCA+IDApIHtcclxuXHRcdFx0XHRzZWxmLmNoYW5nZU1vbnRoKDEpO1xyXG5cdFx0XHRcdG5ld0luZGV4ID0gbmV3SW5kZXggJSA0MjtcclxuXHRcdFx0fSBlbHNlIGlmIChvZmZzZXQgPCAwKSB7XHJcblx0XHRcdFx0c2VsZi5jaGFuZ2VNb250aCgtMSk7XHJcblx0XHRcdFx0bmV3SW5kZXggKz0gNDI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBhZnRlckRheUFuaW0oZm9jdXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvY3VzKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZnRlckRheUFuaW0oZm4pIHtcclxuXHRcdGlmIChzZWxmLmNvbmZpZy5hbmltYXRlID09PSB0cnVlKSByZXR1cm4gc2VsZi5fYW5pbWF0aW9uTG9vcC5wdXNoKGZuKTtcclxuXHRcdGZuKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBidWlsZERheXMoZGVsdGEpIHtcclxuXHRcdHZhciBmaXJzdE9mTW9udGggPSAobmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpLmdldERheSgpIC0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrICsgNykgJSA3LFxyXG5cdFx0ICAgIGlzUmFuZ2VNb2RlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiO1xyXG5cclxuXHRcdHNlbGYucHJldk1vbnRoRGF5cyA9IHNlbGYudXRpbHMuZ2V0RGF5c2luTW9udGgoKHNlbGYuY3VycmVudE1vbnRoIC0gMSArIDEyKSAlIDEyKTtcclxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IHVuZGVmaW5lZDtcclxuXHRcdHNlbGYudG9kYXlEYXRlRWxlbSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHR2YXIgZGF5c0luTW9udGggPSBzZWxmLnV0aWxzLmdldERheXNpbk1vbnRoKCksXHJcblx0XHQgICAgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG5cdFx0dmFyIGRheU51bWJlciA9IHNlbGYucHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsXHJcblx0XHQgICAgZGF5SW5kZXggPSAwO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJiBzZWxmLndlZWtOdW1iZXJzLmZpcnN0Q2hpbGQpIHNlbGYud2Vla051bWJlcnMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuXHRcdGlmIChpc1JhbmdlTW9kZSkge1xyXG5cdFx0XHQvLyBjb25zdCBkYXRlTGltaXRzID0gc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5taXhEYXRlIHx8IHNlbGYuY29uZmlnLm1heERhdGU7XHJcblx0XHRcdHNlbGYubWluUmFuZ2VEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpO1xyXG5cdFx0XHRzZWxmLm1heFJhbmdlRGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgKDQyIC0gZmlyc3RPZk1vbnRoKSAlIGRheXNJbk1vbnRoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwcmVwZW5kIGRheXMgZnJvbSB0aGUgZW5kaW5nIG9mIHByZXZpb3VzIG1vbnRoXHJcblx0XHRmb3IgKDsgZGF5TnVtYmVyIDw9IHNlbGYucHJldk1vbnRoRGF5czsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJwcmV2TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3RhcnQgYXQgMSBzaW5jZSB0aGVyZSBpcyBubyAwdGggZGF5XHJcblx0XHRmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhcHBlbmQgZGF5cyBmcm9tIHRoZSBuZXh0IG1vbnRoXHJcblx0XHRmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aDsgZGF5TnVtKyssIGRheUluZGV4KyspIHtcclxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJuZXh0TW9udGhEYXlcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCBkYXlOdW0gJSBkYXlzSW5Nb250aCksIGRheU51bSwgZGF5SW5kZXgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNSYW5nZU1vZGUgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSAmJiBkYXlzLmNoaWxkTm9kZXNbMF0pIHtcclxuXHRcdFx0c2VsZi5faGlkZVByZXZNb250aEFycm93ID0gc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8IHNlbGYubWluUmFuZ2VEYXRlID4gZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmo7XHJcblxyXG5cdFx0XHRzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPSBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHwgc2VsZi5tYXhSYW5nZURhdGUgPCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIDEpO1xyXG5cdFx0fSBlbHNlIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuXHJcblx0XHR2YXIgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcclxuXHRcdGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlzKTtcclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLmFuaW1hdGUgfHwgZGVsdGEgPT09IHVuZGVmaW5lZCkgY2xlYXJOb2RlKHNlbGYuZGF5c0NvbnRhaW5lcik7ZWxzZSB7XHJcblx0XHRcdHdoaWxlIChzZWxmLmRheXNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0c2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChkZWx0YSA+PSAwKSBzZWxmLmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtlbHNlIHNlbGYuZGF5c0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZGF5Q29udGFpbmVyLCBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcblxyXG5cdFx0c2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcblx0XHRyZXR1cm4gc2VsZi5kYXlzQ29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcclxuXHRcdHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0bm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcclxuXHRcdHZhciBtb250aE5hdkZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdHNlbGYubW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoXCIpO1xyXG5cclxuXHRcdHNlbGYucHJldk1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItcHJldi1tb250aFwiKTtcclxuXHRcdHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcclxuXHJcblx0XHRzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1ci1tb250aFwiKTtcclxuXHRcdHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuXHJcblx0XHR2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiKTtcclxuXHRcdHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0geWVhcklucHV0LmNoaWxkTm9kZXNbMF07XHJcblx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcubWluRGF0ZSkgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluID0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XHJcblx0XHRcdHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0XHRcdHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID0gc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLm5leHRNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLW5leHQtbW9udGhcIik7XHJcblx0XHRzZWxmLm5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XHJcblxyXG5cdFx0c2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtcclxuXHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQpO1xyXG5cdFx0c2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XHJcblxyXG5cdFx0bW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLnByZXZNb250aE5hdik7XHJcblx0XHRtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCk7XHJcblx0XHRtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcclxuXHRcdHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQobW9udGhOYXZGcmFnbWVudCk7XHJcblxyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9faGlkZVByZXZNb250aEFycm93O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChib29sKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX19oaWRlUHJldk1vbnRoQXJyb3cgIT09IGJvb2wpIHNlbGYucHJldk1vbnRoTmF2LnN0eWxlLmRpc3BsYXkgPSBib29sID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcblx0XHRcdFx0dGhpcy5fX2hpZGVQcmV2TW9udGhBcnJvdyA9IGJvb2w7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fX2hpZGVOZXh0TW9udGhBcnJvdztcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKSBzZWxmLm5leHRNb250aE5hdi5zdHlsZS5kaXNwbGF5ID0gYm9vbCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG5cdFx0XHRcdHRoaXMuX19oaWRlTmV4dE1vbnRoQXJyb3cgPSBib29sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGYubW9udGhOYXY7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBidWlsZFRpbWUoKSB7XHJcblx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xyXG5cdFx0aWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vQ2FsZW5kYXJcIik7XHJcblx0XHRzZWxmLnRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXRpbWVcIik7XHJcblx0XHRzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuXHRcdHZhciBzZXBhcmF0b3IgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIik7XHJcblxyXG5cdFx0dmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIik7XHJcblx0XHRzZWxmLmhvdXJFbGVtZW50ID0gaG91cklucHV0LmNoaWxkTm9kZXNbMF07XHJcblxyXG5cdFx0dmFyIG1pbnV0ZUlucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItbWludXRlXCIpO1xyXG5cdFx0c2VsZi5taW51dGVFbGVtZW50ID0gbWludXRlSW5wdXQuY2hpbGROb2Rlc1swXTtcclxuXHJcblx0XHRzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XHJcblxyXG5cdFx0c2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHNlbGYucGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKSA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKTtcclxuXHJcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKSA6IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUpO1xyXG5cclxuXHRcdHNlbGYuaG91ckVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLmhvdXJJbmNyZW1lbnQ7XHJcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudDtcclxuXHJcblx0XHRzZWxmLmhvdXJFbGVtZW50Lm1pbiA9IHNlbGYuY29uZmlnLnRpbWVfMjRociA/IDAgOiAxO1xyXG5cdFx0c2VsZi5ob3VyRWxlbWVudC5tYXggPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyAyMyA6IDEyO1xyXG5cclxuXHRcdHNlbGYubWludXRlRWxlbWVudC5taW4gPSAwO1xyXG5cdFx0c2VsZi5taW51dGVFbGVtZW50Lm1heCA9IDU5O1xyXG5cclxuXHRcdHNlbGYuaG91ckVsZW1lbnQudGl0bGUgPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcblxyXG5cdFx0c2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbnB1dCk7XHJcblx0XHRzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcclxuXHRcdHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLnRpbWVfMjRocikgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xyXG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7XHJcblxyXG5cdFx0XHR2YXIgc2Vjb25kSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1zZWNvbmRcIik7XHJcblx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudCA9IHNlY29uZElucHV0LmNoaWxkTm9kZXNbMF07XHJcblxyXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYucGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKSkgOiBcIjAwXCI7XHJcblxyXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuc3RlcCA9IHNlbGYubWludXRlRWxlbWVudC5zdGVwO1xyXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQubWluID0gc2VsZi5taW51dGVFbGVtZW50Lm1pbjtcclxuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50Lm1heCA9IHNlbGYubWludXRlRWxlbWVudC5tYXg7XHJcblxyXG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcclxuXHRcdFx0c2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZElucHV0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xyXG5cdFx0XHQvLyBhZGQgc2VsZi5hbVBNIGlmIGFwcHJvcHJpYXRlXHJcblx0XHRcdHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIFtcIkFNXCIsIFwiUE1cIl1bc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA+IDExIHwgMF0pO1xyXG5cdFx0XHRzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XHJcblx0XHRcdHNlbGYuYW1QTS50YWJJbmRleCA9IC0xO1xyXG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc2VsZi50aW1lQ29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcclxuXHRcdGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKSBzZWxmLndlZWtkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlzXCIpO1xyXG5cclxuXHRcdHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcclxuXHRcdHZhciB3ZWVrZGF5cyA9IHNlbGYubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmQuc2xpY2UoKTtcclxuXHJcblx0XHRpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XHJcblx0XHRcdHdlZWtkYXlzID0gW10uY29uY2F0KHdlZWtkYXlzLnNwbGljZShmaXJzdERheU9mV2Vlaywgd2Vla2RheXMubGVuZ3RoKSwgd2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi53ZWVrZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXFxuXFx0XFx0PHNwYW4gY2xhc3M9ZmxhdHBpY2tyLXdlZWtkYXk+XFxuXFx0XFx0XFx0XCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlwiKSArIFwiXFxuXFx0XFx0PC9zcGFuPlxcblxcdFxcdFwiO1xyXG5cclxuXHRcdHJldHVybiBzZWxmLndlZWtkYXlDb250YWluZXI7XHJcblx0fVxyXG5cclxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XHJcblx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcclxuXHRcdHNlbGYud2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xyXG5cdFx0c2VsZi53ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XHJcblx0XHRzZWxmLndlZWtOdW1iZXJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrc1wiKTtcclxuXHRcdHNlbGYud2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi53ZWVrTnVtYmVycyk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGYud2Vla1dyYXBwZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjaGFuZ2VNb250aCh2YWx1ZSwgaXNfb2Zmc2V0LCBhbmltYXRlKSB7XHJcblx0XHRpc19vZmZzZXQgPSBpc19vZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBpc19vZmZzZXQ7XHJcblx0XHR2YXIgZGVsdGEgPSBpc19vZmZzZXQgPyB2YWx1ZSA6IHZhbHVlIC0gc2VsZi5jdXJyZW50TW9udGg7XHJcblx0XHR2YXIgc2tpcEFuaW1hdGlvbnMgPSAhc2VsZi5jb25maWcuYW5pbWF0ZSB8fCBhbmltYXRlID09PSBmYWxzZTtcclxuXHJcblx0XHRpZiAoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fCBkZWx0YSA+IDAgJiYgc2VsZi5faGlkZU5leHRNb250aEFycm93KSByZXR1cm47XHJcblxyXG5cdFx0c2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XHJcblxyXG5cdFx0aWYgKHNlbGYuY3VycmVudE1vbnRoIDwgMCB8fCBzZWxmLmN1cnJlbnRNb250aCA+IDExKSB7XHJcblx0XHRcdHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggPiAxMSA/IDEgOiAtMTtcclxuXHRcdFx0c2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcclxuXHJcblx0XHRcdHRyaWdnZXJFdmVudChcIlllYXJDaGFuZ2VcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0YnVpbGREYXlzKCFza2lwQW5pbWF0aW9ucyA/IGRlbHRhIDogdW5kZWZpbmVkKTtcclxuXHJcblx0XHRpZiAoc2tpcEFuaW1hdGlvbnMpIHtcclxuXHRcdFx0dHJpZ2dlckV2ZW50KFwiTW9udGhDaGFuZ2VcIik7XHJcblx0XHRcdHJldHVybiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIHBvc3NpYmxlIHJlbW5hbnRzIGZyb20gY2xpY2tpbmcgdG9vIGZhc3RcclxuXHRcdHZhciBuYXYgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcblx0XHRpZiAoZGVsdGEgPCAwKSB7XHJcblx0XHRcdHdoaWxlIChuYXYubmV4dFNpYmxpbmcgJiYgL2N1cnIvLnRlc3QobmF2Lm5leHRTaWJsaW5nLmNsYXNzTmFtZSkpIHtcclxuXHRcdFx0XHRzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5uZXh0U2libGluZyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoZGVsdGEgPiAwKSB7XHJcblx0XHRcdHdoaWxlIChuYXYucHJldmlvdXNTaWJsaW5nICYmIC9jdXJyLy50ZXN0KG5hdi5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKSkge1xyXG5cdFx0XHRcdHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2LnByZXZpb3VzU2libGluZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLm9sZEN1ck1vbnRoID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG5cclxuXHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IHNlbGYubW9udGhOYXYuaW5zZXJ0QmVmb3JlKHNlbGYub2xkQ3VyTW9udGguY2xvbmVOb2RlKHRydWUpLCBkZWx0YSA+IDAgPyBzZWxmLm9sZEN1ck1vbnRoLm5leHRTaWJsaW5nIDogc2VsZi5vbGRDdXJNb250aCk7XHJcblxyXG5cdFx0aWYgKGRlbHRhID4gMCkge1xyXG5cdFx0XHRzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG5cdFx0XHRzZWxmLmRheXNDb250YWluZXIubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnROZXdcIik7XHJcblxyXG5cdFx0XHRzZWxmLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRcIik7XHJcblx0XHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG5cdFx0fSBlbHNlIGlmIChkZWx0YSA8IDApIHtcclxuXHRcdFx0c2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcblx0XHRcdHNlbGYuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHRcIik7XHJcblxyXG5cdFx0XHRzZWxmLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpO1xyXG5cdFx0XHRzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHROZXdcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5jdXJyZW50TW9udGhFbGVtZW50ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmZpcnN0Q2hpbGQ7XHJcblx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5sYXN0Q2hpbGQuY2hpbGROb2Rlc1swXTtcclxuXHJcblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcblx0XHRzZWxmLm9sZEN1ck1vbnRoLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBzZWxmLnV0aWxzLm1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGggLSBkZWx0YSk7XHJcblxyXG5cdFx0dHJpZ2dlckV2ZW50KFwiTW9udGhDaGFuZ2VcIik7XHJcblxyXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC4kaSkge1xyXG5cdFx0XHR2YXIgaW5kZXggPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LiRpO1xyXG5cdFx0XHRhZnRlckRheUFuaW0oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGZvY3VzT25EYXkoaW5kZXgsIDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xyXG5cdFx0c2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG5cdFx0aWYgKHNlbGYuYWx0SW5wdXQpIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuXHRcdGlmIChzZWxmLm1vYmlsZUlucHV0KSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcclxuXHRcdHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xyXG5cdFx0c2VsZi5zaG93VGltZUlucHV0ID0gZmFsc2U7XHJcblxyXG5cdFx0c2VsZi5yZWRyYXcoKTtcclxuXHJcblx0XHRpZiAodHJpZ2dlckNoYW5nZUV2ZW50ICE9PSBmYWxzZSlcclxuXHRcdFx0Ly8gdHJpZ2dlckNoYW5nZUV2ZW50IGlzIHRydWUgKGRlZmF1bHQpIG9yIGFuIEV2ZW50XHJcblx0XHRcdHRyaWdnZXJFdmVudChcIkNoYW5nZVwiKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlKCkge1xyXG5cdFx0c2VsZi5pc09wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIXNlbGYuaXNNb2JpbGUpIHtcclxuXHRcdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuXHRcdFx0c2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0cmlnZ2VyRXZlbnQoXCJDbG9zZVwiKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcblx0XHRpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZCkgdHJpZ2dlckV2ZW50KFwiRGVzdHJveVwiKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gc2VsZi5faGFuZGxlcnMubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdHZhciBoID0gc2VsZi5faGFuZGxlcnNbaV07XHJcblx0XHRcdGguZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGguZXZlbnQsIGguaGFuZGxlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5faGFuZGxlcnMgPSBbXTtcclxuXHJcblx0XHRpZiAoc2VsZi5tb2JpbGVJbnB1dCkge1xyXG5cdFx0XHRpZiAoc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlKSBzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5tb2JpbGVJbnB1dCk7XHJcblx0XHRcdHNlbGYubW9iaWxlSW5wdXQgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSkgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG5cclxuXHRcdGlmIChzZWxmLmFsdElucHV0KSB7XHJcblx0XHRcdHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG5cdFx0XHRpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKSBzZWxmLmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XHJcblx0XHRcdGRlbGV0ZSBzZWxmLmFsdElucHV0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZWxmLmlucHV0KSB7XHJcblx0XHRcdHNlbGYuaW5wdXQudHlwZSA9IHNlbGYuaW5wdXQuX3R5cGU7XHJcblx0XHRcdHNlbGYuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKTtcclxuXHRcdFx0c2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuXHRcdFx0c2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0W1wiX3Nob3dUaW1lSW5wdXRcIiwgXCJsYXRlc3RTZWxlY3RlZERhdGVPYmpcIiwgXCJfaGlkZU5leHRNb250aEFycm93XCIsIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLCBcIl9faGlkZU5leHRNb250aEFycm93XCIsIFwiX19oaWRlUHJldk1vbnRoQXJyb3dcIiwgXCJpc01vYmlsZVwiLCBcImlzT3BlblwiLCBcInNlbGVjdGVkRGF0ZUVsZW1cIiwgXCJtaW5EYXRlSGFzVGltZVwiLCBcIm1heERhdGVIYXNUaW1lXCIsIFwiZGF5c1wiLCBcImRheXNDb250YWluZXJcIiwgXCJfaW5wdXRcIiwgXCJfcG9zaXRpb25FbGVtZW50XCIsIFwiaW5uZXJDb250YWluZXJcIiwgXCJyQ29udGFpbmVyXCIsIFwibW9udGhOYXZcIiwgXCJ0b2RheURhdGVFbGVtXCIsIFwiY2FsZW5kYXJDb250YWluZXJcIiwgXCJ3ZWVrZGF5Q29udGFpbmVyXCIsIFwicHJldk1vbnRoTmF2XCIsIFwibmV4dE1vbnRoTmF2XCIsIFwiY3VycmVudE1vbnRoRWxlbWVudFwiLCBcImN1cnJlbnRZZWFyRWxlbWVudFwiLCBcIm5hdmlnYXRpb25DdXJyZW50TW9udGhcIiwgXCJzZWxlY3RlZERhdGVFbGVtXCIsIFwiY29uZmlnXCJdLmZvckVhY2goZnVuY3Rpb24gKGspIHtcclxuXHRcdFx0cmV0dXJuIGRlbGV0ZSBzZWxmW2tdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpc0NhbGVuZGFyRWxlbShlbGVtKSB7XHJcblx0XHRpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpIHJldHVybiB0cnVlO1xyXG5cclxuXHRcdHJldHVybiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XHJcblx0XHRpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLmlubGluZSkge1xyXG5cdFx0XHR2YXIgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCk7XHJcblx0XHRcdHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuaW5wdXQgfHwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fFxyXG5cdFx0XHQvLyB3ZWIgY29tcG9uZW50c1xyXG5cdFx0XHRlLnBhdGggJiYgZS5wYXRoLmluZGV4T2YgJiYgKH5lLnBhdGguaW5kZXhPZihzZWxmLmlucHV0KSB8fCB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpO1xyXG5cclxuXHRcdFx0dmFyIGxvc3RGb2N1cyA9IGUudHlwZSA9PT0gXCJibHVyXCIgPyBpc0lucHV0ICYmIGUucmVsYXRlZFRhcmdldCAmJiAhaXNDYWxlbmRhckVsZW0oZS5yZWxhdGVkVGFyZ2V0KSA6ICFpc0lucHV0ICYmICFpc0NhbGVuZGFyRWxlbWVudDtcclxuXHJcblx0XHRcdGlmIChsb3N0Rm9jdXMgJiYgc2VsZi5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XHJcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGYuY2xlYXIoZmFsc2UpO1xyXG5cdFx0XHRcdFx0c2VsZi5yZWRyYXcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xyXG5cdFx0aWYgKCFuZXdZZWFyIHx8IHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbiAmJiBuZXdZZWFyIDwgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluIHx8IHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCAmJiBuZXdZZWFyID4gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4KSByZXR1cm47XHJcblxyXG5cdFx0dmFyIG5ld1llYXJOdW0gPSBwYXJzZUludChuZXdZZWFyLCAxMCksXHJcblx0XHQgICAgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gbmV3WWVhck51bTtcclxuXHJcblx0XHRzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWF4KHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc05ld1llYXIpIHtcclxuXHRcdFx0c2VsZi5yZWRyYXcoKTtcclxuXHRcdFx0dHJpZ2dlckV2ZW50KFwiWWVhckNoYW5nZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcykge1xyXG5cdFx0aWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuY29uZmlnLm1pbkRhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1pbkRhdGVIYXNUaW1lKSA8IDAgfHwgc2VsZi5jb25maWcubWF4RGF0ZSAmJiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdGlmICghc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGgpIHJldHVybiB0cnVlO1xyXG5cclxuXHRcdHZhciBkYXRlVG9DaGVjayA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIG51bGwsIHRydWUpOyAvLyB0aW1lbGVzc1xyXG5cclxuXHRcdHZhciBib29sID0gc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCA+IDAsXHJcblx0XHQgICAgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMCwgZDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGQgPSBhcnJheVtpXTtcclxuXHJcblx0XHRcdGlmIChkIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgZChkYXRlVG9DaGVjaykpIC8vIGRpc2FibGVkIGJ5IGZ1bmN0aW9uXHJcblx0XHRcdFx0cmV0dXJuIGJvb2w7ZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiYgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcclxuXHRcdFx0XHQvLyBkaXNhYmxlZCBieSBkYXRlXHJcblx0XHRcdFx0cmV0dXJuIGJvb2w7ZWxzZSBpZiAodHlwZW9mIGQgPT09IFwic3RyaW5nXCIgJiYgc2VsZi5wYXJzZURhdGUoZCwgbnVsbCwgdHJ1ZSkuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpXHJcblx0XHRcdFx0Ly8gZGlzYWJsZWQgYnkgZGF0ZSBzdHJpbmdcclxuXHRcdFx0XHRyZXR1cm4gYm9vbDtlbHNlIGlmICggLy8gZGlzYWJsZWQgYnkgcmFuZ2VcclxuXHRcdFx0KHR5cGVvZiBkID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZCkpID09PSBcIm9iamVjdFwiICYmIGQuZnJvbSAmJiBkLnRvICYmIGRhdGVUb0NoZWNrID49IGQuZnJvbSAmJiBkYXRlVG9DaGVjayA8PSBkLnRvKSByZXR1cm4gYm9vbDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gIWJvb2w7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbktleURvd24oZSkge1xyXG5cdFx0dmFyIGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gc2VsZi5faW5wdXQ7XHJcblx0XHR2YXIgY2FsZW5kYXJFbGVtID0gaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpO1xyXG5cdFx0dmFyIGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xyXG5cdFx0dmFyIGFsbG93S2V5ZG93biA9IHNlbGYuaXNPcGVuICYmICghYWxsb3dJbnB1dCB8fCAhaXNJbnB1dCk7XHJcblx0XHR2YXIgYWxsb3dJbmxpbmVLZXlkb3duID0gc2VsZi5jb25maWcuaW5saW5lICYmIGlzSW5wdXQgJiYgIWFsbG93SW5wdXQ7XHJcblxyXG5cdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgYWxsb3dJbnB1dCAmJiBpc0lucHV0KSB7XHJcblx0XHRcdHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXQgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXQgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcclxuXHRcdFx0cmV0dXJuIGUudGFyZ2V0LmJsdXIoKTtcclxuXHRcdH0gZWxzZSBpZiAoY2FsZW5kYXJFbGVtIHx8IGFsbG93S2V5ZG93biB8fCBhbGxvd0lubGluZUtleWRvd24pIHtcclxuXHRcdFx0dmFyIGlzVGltZU9iaiA9IHNlbGYudGltZUNvbnRhaW5lciAmJiBzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpO1xyXG5cdFx0XHRzd2l0Y2ggKGUua2V5KSB7XHJcblx0XHRcdFx0Y2FzZSBcIkVudGVyXCI6XHJcblx0XHRcdFx0XHRpZiAoaXNUaW1lT2JqKSB1cGRhdGVWYWx1ZSgpO2Vsc2Ugc2VsZWN0RGF0ZShlKTtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcIkVzY2FwZVwiOlxyXG5cdFx0XHRcdFx0Ly8gZXNjYXBlXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRzZWxmLmNsb3NlKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcIkFycm93TGVmdFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcblx0XHRcdFx0XHRpZiAoIWlzVGltZU9iaikge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIF9kZWx0YSA9IGUua2V5ID09PSBcIkFycm93UmlnaHRcIiA/IDEgOiAtMTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFlLmN0cmxLZXkpIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIF9kZWx0YSk7ZWxzZSBjaGFuZ2VNb250aChfZGVsdGEsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgJiYgIWlzVGltZU9iaikgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwiQXJyb3dVcFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHZhciBkZWx0YSA9IGUua2V5ID09PSBcIkFycm93RG93blwiID8gMSA6IC0xO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGUuY3RybEtleSkge1xyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcclxuXHRcdFx0XHRcdFx0XHRmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCAwKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICghaXNUaW1lT2JqKSBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCBkZWx0YSAqIDcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcblx0XHRcdFx0XHRcdGlmICghaXNUaW1lT2JqKSBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVRpbWUoZSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJUYWJcIjpcclxuXHRcdFx0XHRcdGlmIChlLnRhcmdldCA9PT0gc2VsZi5ob3VyRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdHNlbGYubWludXRlRWxlbWVudC5zZWxlY3QoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHNlbGYubWludXRlRWxlbWVudCAmJiAoc2VsZi5zZWNvbmRFbGVtZW50IHx8IHNlbGYuYW1QTSkpIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHQoc2VsZi5zZWNvbmRFbGVtZW50IHx8IHNlbGYuYW1QTSkuZm9jdXMoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHNlbGYuc2Vjb25kRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdHNlbGYuYW1QTS5mb2N1cygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwiYVwiOlxyXG5cdFx0XHRcdFx0aWYgKGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJBTVwiO1xyXG5cdFx0XHRcdFx0XHRzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuXHRcdFx0XHRcdFx0dXBkYXRlVmFsdWUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIFwicFwiOlxyXG5cdFx0XHRcdFx0aWYgKGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJQTVwiO1xyXG5cdFx0XHRcdFx0XHRzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuXHRcdFx0XHRcdFx0dXBkYXRlVmFsdWUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJLZXlEb3duXCIsIGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZU92ZXIoZWxlbSkge1xyXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggIT09IDEgfHwgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciBob3ZlckRhdGUgPSBlbGVtLmRhdGVPYmosXHJcblx0XHQgICAgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIG51bGwsIHRydWUpLFxyXG5cdFx0ICAgIHJhbmdlU3RhcnREYXRlID0gTWF0aC5taW4oaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksXHJcblx0XHQgICAgcmFuZ2VFbmREYXRlID0gTWF0aC5tYXgoaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksXHJcblx0XHQgICAgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdGZvciAodmFyIHQgPSByYW5nZVN0YXJ0RGF0ZTsgdCA8IHJhbmdlRW5kRGF0ZTsgdCArPSBzZWxmLnV0aWxzLmR1cmF0aW9uLkRBWSkge1xyXG5cdFx0XHRpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSkpIHtcclxuXHRcdFx0XHRjb250YWluc0Rpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHRpbWVzdGFtcCwgaSkge1xyXG5cdFx0XHR2YXIgb3V0T2ZSYW5nZSA9IHRpbWVzdGFtcCA8IHNlbGYubWluUmFuZ2VEYXRlLmdldFRpbWUoKSB8fCB0aW1lc3RhbXAgPiBzZWxmLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksXHJcblx0XHRcdCAgICBkYXlFbGVtID0gc2VsZi5kYXlzLmNoaWxkTm9kZXNbaV07XHJcblxyXG5cdFx0XHRpZiAob3V0T2ZSYW5nZSkge1xyXG5cdFx0XHRcdHNlbGYuZGF5cy5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xyXG5cdFx0XHRcdFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG5cdFx0XHRcdFx0ZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBcImNvbnRpbnVlXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGFpbnNEaXNhYmxlZCAmJiAhb3V0T2ZSYW5nZSkgcmV0dXJuIFwiY29udGludWVcIjtcclxuXHJcblx0XHRcdFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0XHRkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dmFyIG1pblJhbmdlRGF0ZSA9IE1hdGgubWF4KHNlbGYubWluUmFuZ2VEYXRlLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUpLFxyXG5cdFx0XHQgICAgbWF4UmFuZ2VEYXRlID0gTWF0aC5taW4oc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZUVuZERhdGUpO1xyXG5cclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSA/IFwic3RhcnRSYW5nZVwiIDogXCJlbmRSYW5nZVwiKTtcclxuXHJcblx0XHRcdGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSkgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTtlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSkgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiZW5kUmFuZ2VcIik7XHJcblxyXG5cdFx0XHRpZiAodGltZXN0YW1wID49IG1pblJhbmdlRGF0ZSAmJiB0aW1lc3RhbXAgPD0gbWF4UmFuZ2VEYXRlKSBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRmb3IgKHZhciB0aW1lc3RhbXAgPSBzZWxmLmRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqLmdldFRpbWUoKSwgaSA9IDA7IGkgPCA0MjsgaSsrLCB0aW1lc3RhbXAgKz0gc2VsZi51dGlscy5kdXJhdGlvbi5EQVkpIHtcclxuXHRcdFx0dmFyIF9yZXQgPSBfbG9vcCh0aW1lc3RhbXAsIGkpO1xyXG5cclxuXHRcdFx0aWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuXHRcdGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW4oZSwgcG9zaXRpb25FbGVtZW50KSB7XHJcblx0XHRpZiAoc2VsZi5pc01vYmlsZSkge1xyXG5cdFx0XHRpZiAoZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRlLnRhcmdldC5ibHVyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcclxuXHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJPcGVuXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbGYuaXNPcGVuIHx8IHNlbGYuX2lucHV0LmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSkgcmV0dXJuO1xyXG5cclxuXHRcdHNlbGYuaXNPcGVuID0gdHJ1ZTtcclxuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcblx0XHRwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCk7XHJcblx0XHRzZWxmLl9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuXHRcdHRyaWdnZXJFdmVudChcIk9wZW5cIik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBtaW5NYXhEYXRlU2V0dGVyKHR5cGUpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xyXG5cdFx0XHR2YXIgZGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgdHlwZSArIFwiRGF0ZVwiXSA9IHNlbGYucGFyc2VEYXRlKGRhdGUpO1xyXG5cclxuXHRcdFx0dmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcclxuXHRcdFx0dmFyIGlzVmFsaWREYXRlID0gZGF0ZSAmJiBkYXRlT2JqIGluc3RhbmNlb2YgRGF0ZTtcclxuXHJcblx0XHRcdGlmIChpc1ZhbGlkRGF0ZSkge1xyXG5cdFx0XHRcdHNlbGZbdHlwZSArIFwiRGF0ZUhhc1RpbWVcIl0gPSBkYXRlT2JqLmdldEhvdXJzKCkgfHwgZGF0ZU9iai5nZXRNaW51dGVzKCkgfHwgZGF0ZU9iai5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMpIHtcclxuXHRcdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZXMgPSBzZWxmLnNlbGVjdGVkRGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXNFbmFibGVkKGQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAmJiB0eXBlID09PSBcIm1pblwiKSBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbHVlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcclxuXHRcdFx0XHRyZWRyYXcoKTtcclxuXHJcblx0XHRcdFx0aWYgKGlzVmFsaWREYXRlKSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtlbHNlIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0eXBlKTtcclxuXHJcblx0XHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPSBpbnZlcnNlRGF0ZU9iaiAmJiBkYXRlT2JqICYmIGludmVyc2VEYXRlT2JqLmdldEZ1bGxZZWFyKCkgPT09IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHBhcnNlQ29uZmlnKCkge1xyXG5cdFx0dmFyIGJvb2xPcHRzID0gW1wid3JhcFwiLCBcIndlZWtOdW1iZXJzXCIsIFwiYWxsb3dJbnB1dFwiLCBcImNsaWNrT3BlbnNcIiwgXCJ0aW1lXzI0aHJcIiwgXCJlbmFibGVUaW1lXCIsIFwibm9DYWxlbmRhclwiLCBcImFsdElucHV0XCIsIFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsIFwiaW5saW5lXCIsIFwic3RhdGljXCIsIFwiZW5hYmxlU2Vjb25kc1wiLCBcImRpc2FibGVNb2JpbGVcIl07XHJcblxyXG5cdFx0dmFyIGhvb2tzID0gW1wib25DaGFuZ2VcIiwgXCJvbkNsb3NlXCIsIFwib25EYXlDcmVhdGVcIiwgXCJvbkRlc3Ryb3lcIiwgXCJvbktleURvd25cIiwgXCJvbk1vbnRoQ2hhbmdlXCIsIFwib25PcGVuXCIsIFwib25QYXJzZUNvbmZpZ1wiLCBcIm9uUmVhZHlcIiwgXCJvblZhbHVlVXBkYXRlXCIsIFwib25ZZWFyQ2hhbmdlXCJdO1xyXG5cclxuXHRcdHNlbGYuY29uZmlnID0gT2JqZWN0LmNyZWF0ZShmbGF0cGlja3IuZGVmYXVsdENvbmZpZyk7XHJcblxyXG5cdFx0dmFyIHVzZXJDb25maWcgPSBfZXh0ZW5kcyh7fSwgc2VsZi5pbnN0YW5jZUNvbmZpZywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZWxmLmVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKTtcclxuXHJcblx0XHRzZWxmLmNvbmZpZy5wYXJzZURhdGUgPSB1c2VyQ29uZmlnLnBhcnNlRGF0ZTtcclxuXHRcdHNlbGYuY29uZmlnLmZvcm1hdERhdGUgPSB1c2VyQ29uZmlnLmZvcm1hdERhdGU7XHJcblxyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlIHx8IFtdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChkYXRlcykge1xyXG5cdFx0XHRcdHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoZGF0ZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZGlzYWJsZVwiLCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiBzZWxmLmNvbmZpZy5fZGlzYWJsZSB8fCBbXTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoZGF0ZXMpIHtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdF9leHRlbmRzKHNlbGYuY29uZmlnLCB1c2VyQ29uZmlnKTtcclxuXHJcblx0XHRpZiAoIXVzZXJDb25maWcuZGF0ZUZvcm1hdCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUpIHtcclxuXHRcdFx0c2VsZi5jb25maWcuZGF0ZUZvcm1hdCA9IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyBcIkg6aVwiICsgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSA6IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgKyBcIiBIOmlcIiArIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHVzZXJDb25maWcuYWx0SW5wdXQgJiYgdXNlckNvbmZpZy5lbmFibGVUaW1lICYmICF1c2VyQ29uZmlnLmFsdEZvcm1hdCkge1xyXG5cdFx0XHRzZWxmLmNvbmZpZy5hbHRGb3JtYXQgPSBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gXCJoOmlcIiArIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6UyBLXCIgOiBcIiBLXCIpIDogZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuYWx0Rm9ybWF0ICsgKFwiIGg6aVwiICsgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSArIFwiIEtcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpXHJcblx0XHR9KTtcclxuXHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9tYXhEYXRlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIilcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNlbGYuY29uZmlnLm1pbkRhdGUgPSB1c2VyQ29uZmlnLm1pbkRhdGU7XHJcblx0XHRzZWxmLmNvbmZpZy5tYXhEYXRlID0gdXNlckNvbmZpZy5tYXhEYXRlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID0gc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSB0cnVlIHx8IHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gXCJ0cnVlXCI7XHJcblx0XHR9Zm9yICh2YXIgX2kgPSBob29rcy5sZW5ndGg7IF9pLS07KSB7XHJcblx0XHRcdGlmIChzZWxmLmNvbmZpZ1tob29rc1tfaV1dICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRzZWxmLmNvbmZpZ1tob29rc1tfaV1dID0gYXJyYXlpZnkoc2VsZi5jb25maWdbaG9va3NbX2ldXSB8fCBbXSkubWFwKGJpbmRUb0luc3RhbmNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBfaTIrKykge1xyXG5cdFx0XHR2YXIgcGx1Z2luQ29uZiA9IHNlbGYuY29uZmlnLnBsdWdpbnNbX2kyXShzZWxmKSB8fCB7fTtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHBsdWdpbkNvbmYpIHtcclxuXHJcblx0XHRcdFx0aWYgKHNlbGYuY29uZmlnW2tleV0gaW5zdGFuY2VvZiBBcnJheSB8fCB+aG9va3MuaW5kZXhPZihrZXkpKSB7XHJcblx0XHRcdFx0XHRzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKS5tYXAoYmluZFRvSW5zdGFuY2UpLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0cmlnZ2VyRXZlbnQoXCJQYXJzZUNvbmZpZ1wiKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xyXG5cdFx0aWYgKF90eXBlb2Yoc2VsZi5jb25maWcubG9jYWxlKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpIGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpO1xyXG5cclxuXHRcdHNlbGYubDEwbiA9IF9leHRlbmRzKE9iamVjdC5jcmVhdGUoZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQpLCBfdHlwZW9mKHNlbGYuY29uZmlnLmxvY2FsZSkgPT09IFwib2JqZWN0XCIgPyBzZWxmLmNvbmZpZy5sb2NhbGUgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiID8gZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gfHwge30gOiB7fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwb3NpdGlvbkNhbGVuZGFyKCkge1xyXG5cdFx0dmFyIHBvc2l0aW9uRWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogc2VsZi5fcG9zaXRpb25FbGVtZW50O1xyXG5cclxuXHRcdGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcblx0XHR2YXIgY2FsZW5kYXJIZWlnaHQgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldEhlaWdodCxcclxuXHRcdCAgICBjYWxlbmRhcldpZHRoID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuXHRcdCAgICBjb25maWdQb3MgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbixcclxuXHRcdCAgICBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdCAgICBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sXHJcblx0XHQgICAgc2hvd09uVG9wID0gY29uZmlnUG9zID09PSBcImFib3ZlXCIgfHwgY29uZmlnUG9zICE9PSBcImJlbG93XCIgJiYgZGlzdGFuY2VGcm9tQm90dG9tIDwgY2FsZW5kYXJIZWlnaHQgJiYgaW5wdXRCb3VuZHMudG9wID4gY2FsZW5kYXJIZWlnaHQ7XHJcblxyXG5cdFx0dmFyIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIGlucHV0Qm91bmRzLnRvcCArICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcclxuXHJcblx0XHR0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93VG9wXCIsICFzaG93T25Ub3ApO1xyXG5cdFx0dG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHJldHVybjtcclxuXHJcblx0XHR2YXIgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLmxlZnQ7XHJcblx0XHR2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtIGlucHV0Qm91bmRzLnJpZ2h0O1xyXG5cdFx0dmFyIHJpZ2h0TW9zdCA9IGxlZnQgKyBjYWxlbmRhcldpZHRoID4gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XHJcblxyXG5cdFx0dG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcuc3RhdGljKSByZXR1cm47XHJcblxyXG5cdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcblxyXG5cdFx0aWYgKCFyaWdodE1vc3QpIHtcclxuXHRcdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuXHRcdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XHJcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSByaWdodCArIFwicHhcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcclxuXHRcdGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUpIHJldHVybjtcclxuXHJcblx0XHRidWlsZFdlZWtkYXlzKCk7XHJcblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcblx0XHRidWlsZERheXMoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKSkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciBzZWxlY3RlZERhdGUgPSBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IG5ldyBEYXRlKGUudGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKTtcclxuXHJcblx0XHR2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAhPT0gc2VsZi5jdXJyZW50TW9udGggJiYgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiO1xyXG5cclxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiKSBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcIm11bHRpcGxlXCIpIHtcclxuXHRcdFx0dmFyIHNlbGVjdGVkSW5kZXggPSBpc0RhdGVTZWxlY3RlZChzZWxlY3RlZERhdGUpO1xyXG5cdFx0XHRpZiAoc2VsZWN0ZWRJbmRleCkgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShzZWxlY3RlZEluZGV4LCAxKTtlbHNlIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XHJcblx0XHR9IGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG5cdFx0XHRpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMikgc2VsZi5jbGVhcigpO1xyXG5cclxuXHRcdFx0c2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcclxuXHJcblx0XHRcdC8vIHVubGVzcyBzZWxlY3Rpbmcgc2FtZSBkYXRlIHR3aWNlLCBzb3J0IGFzY2VuZGluZ2x5XHJcblx0XHRcdGlmIChjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpICE9PSAwKSBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuXHJcblx0XHRpZiAoc2hvdWxkQ2hhbmdlTW9udGgpIHtcclxuXHRcdFx0dmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRzZWxmLmN1cnJlbnRZZWFyID0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XHJcblxyXG5cdFx0XHRpZiAoaXNOZXdZZWFyKSB0cmlnZ2VyRXZlbnQoXCJZZWFyQ2hhbmdlXCIpO1xyXG5cclxuXHRcdFx0dHJpZ2dlckV2ZW50KFwiTW9udGhDaGFuZ2VcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0YnVpbGREYXlzKCk7XHJcblxyXG5cdFx0aWYgKHNlbGYubWluRGF0ZUhhc1RpbWUgJiYgc2VsZi5jb25maWcuZW5hYmxlVGltZSAmJiBjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMCkgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlKTtcclxuXHJcblx0XHR1cGRhdGVWYWx1ZSgpO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHNlbGYuc2hvd1RpbWVJbnB1dCA9IHRydWU7XHJcblx0XHR9LCA1MCk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG5cdFx0XHRpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdG9uTW91c2VPdmVyKGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdFx0c2VsZi5faGlkZVByZXZNb250aEFycm93ID0gc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8IHNlbGYubWluUmFuZ2VEYXRlID4gc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iajtcclxuXHJcblx0XHRcdFx0c2VsZi5faGlkZU5leHRNb250aEFycm93ID0gc2VsZi5faGlkZU5leHRNb250aEFycm93IHx8IHNlbGYubWF4UmFuZ2VEYXRlIDwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCAxKTtcclxuXHRcdFx0fSBlbHNlIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XHJcblxyXG5cdFx0Ly8gbWFpbnRhaW4gZm9jdXNcclxuXHRcdGlmICghc2hvdWxkQ2hhbmdlTW9udGgpIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIDApO2Vsc2UgYWZ0ZXJEYXlBbmltKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlRWxlbS5mb2N1cygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gc2VsZi5ob3VyRWxlbWVudC5zZWxlY3QoKTtcclxuXHRcdH0sIDQ1MSk7XHJcblxyXG5cdFx0aWYgKHNlbGYuY29uZmlnLmNsb3NlT25TZWxlY3QpIHtcclxuXHRcdFx0dmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XHJcblx0XHRcdHZhciByYW5nZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyICYmICFzZWxmLmNvbmZpZy5lbmFibGVUaW1lO1xyXG5cclxuXHRcdFx0aWYgKHNpbmdsZSB8fCByYW5nZSkgc2VsZi5jbG9zZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0KG9wdGlvbiwgdmFsdWUpIHtcclxuXHRcdHNlbGYuY29uZmlnW29wdGlvbl0gPSB2YWx1ZTtcclxuXHRcdHNlbGYucmVkcmF3KCk7XHJcblx0XHRqdW1wVG9EYXRlKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRTZWxlY3RlZERhdGUoaW5wdXREYXRlLCBmb3JtYXQpIHtcclxuXHRcdGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBBcnJheSkgc2VsZi5zZWxlY3RlZERhdGVzID0gaW5wdXREYXRlLm1hcChmdW5jdGlvbiAoZCkge1xyXG5cdFx0XHRyZXR1cm4gc2VsZi5wYXJzZURhdGUoZCwgZm9ybWF0KTtcclxuXHRcdH0pO2Vsc2UgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgIWlzTmFOKGlucHV0RGF0ZSkpIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO2Vsc2UgaWYgKGlucHV0RGF0ZSAmJiBpbnB1dERhdGUuc3Vic3RyaW5nKSB7XHJcblx0XHRcdHN3aXRjaCAoc2VsZi5jb25maWcubW9kZSkge1xyXG5cdFx0XHRcdGNhc2UgXCJzaW5nbGVcIjpcclxuXHRcdFx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJtdWx0aXBsZVwiOlxyXG5cdFx0XHRcdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gaW5wdXREYXRlLnNwbGl0KFwiOyBcIikubWFwKGZ1bmN0aW9uIChkYXRlKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcInJhbmdlXCI6XHJcblx0XHRcdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZXMgPSBpbnB1dERhdGUuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKS5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkge1xyXG5cdFx0XHRyZXR1cm4gZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNFbmFibGVkKGQsIGZhbHNlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UsIGZvcm1hdCkge1xyXG5cdFx0aWYgKGRhdGUgIT09IDAgJiYgIWRhdGUpIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xyXG5cclxuXHRcdHNldFNlbGVjdGVkRGF0ZShkYXRlLCBmb3JtYXQpO1xyXG5cclxuXHRcdHNlbGYuc2hvd1RpbWVJbnB1dCA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwO1xyXG5cdFx0c2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XHJcblxyXG5cdFx0c2VsZi5yZWRyYXcoKTtcclxuXHRcdGp1bXBUb0RhdGUoKTtcclxuXHJcblx0XHRzZXRIb3Vyc0Zyb21EYXRlKCk7XHJcblx0XHR1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKTtcclxuXHJcblx0XHRpZiAodHJpZ2dlckNoYW5nZSkgdHJpZ2dlckV2ZW50KFwiQ2hhbmdlXCIpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcGFyc2VEYXRlUnVsZXMoYXJyKSB7XHJcblx0XHRmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgaS0tOykge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFycltpXSA9PT0gXCJzdHJpbmdcIiB8fCArYXJyW2ldKSBhcnJbaV0gPSBzZWxmLnBhcnNlRGF0ZShhcnJbaV0sIG51bGwsIHRydWUpO2Vsc2UgaWYgKGFycltpXSAmJiBhcnJbaV0uZnJvbSAmJiBhcnJbaV0udG8pIHtcclxuXHRcdFx0XHRhcnJbaV0uZnJvbSA9IHNlbGYucGFyc2VEYXRlKGFycltpXS5mcm9tKTtcclxuXHRcdFx0XHRhcnJbaV0udG8gPSBzZWxmLnBhcnNlRGF0ZShhcnJbaV0udG8pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcclxuXHRcdFx0cmV0dXJuIHg7XHJcblx0XHR9KTsgLy8gcmVtb3ZlIGZhbHN5IHZhbHVlc1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0dXBEYXRlcygpIHtcclxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xyXG5cdFx0c2VsZi5ub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdHZhciBwcmVsb2FkZWREYXRlID0gc2VsZi5jb25maWcuZGVmYXVsdERhdGUgfHwgc2VsZi5pbnB1dC52YWx1ZTtcclxuXHRcdGlmIChwcmVsb2FkZWREYXRlKSBzZXRTZWxlY3RlZERhdGUocHJlbG9hZGVkRGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XHJcblxyXG5cdFx0dmFyIGluaXRpYWxEYXRlID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA/IHNlbGYuc2VsZWN0ZWREYXRlc1swXSA6IHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1pbkRhdGUgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0VGltZSgpIDwgc2VsZi5ub3cgPyBzZWxmLmNvbmZpZy5tYXhEYXRlIDogc2VsZi5ub3c7XHJcblxyXG5cdFx0c2VsZi5jdXJyZW50WWVhciA9IGluaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRzZWxmLmN1cnJlbnRNb250aCA9IGluaXRpYWxEYXRlLmdldE1vbnRoKCk7XHJcblxyXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xyXG5cclxuXHRcdHNlbGYubWluRGF0ZUhhc1RpbWUgPSBzZWxmLmNvbmZpZy5taW5EYXRlICYmIChzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkgfHwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkgfHwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cclxuXHRcdHNlbGYubWF4RGF0ZUhhc1RpbWUgPSBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIChzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkgfHwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgfHwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLCB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiBzZWxmLl9zZWxlY3RlZERhdGVPYmogfHwgc2VsZi5zZWxlY3RlZERhdGVzW3NlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xyXG5cdFx0XHRcdHNlbGYuX3NlbGVjdGVkRGF0ZU9iaiA9IGRhdGU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICghc2VsZi5pc01vYmlsZSkge1xyXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJzaG93VGltZUlucHV0XCIsIHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzZWxmLl9zaG93VGltZUlucHV0O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xyXG5cdFx0XHRcdFx0c2VsZi5fc2hvd1RpbWVJbnB1dCA9IGJvb2w7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lcikgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJzaG93VGltZUlucHV0XCIsIGJvb2wpO1xyXG5cdFx0XHRcdFx0cG9zaXRpb25DYWxlbmRhcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcclxuXHRcdHNlbGYudXRpbHMgPSB7XHJcblx0XHRcdGR1cmF0aW9uOiB7XHJcblx0XHRcdFx0REFZOiA4NjQwMDAwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXREYXlzaW5Nb250aDogZnVuY3Rpb24gZ2V0RGF5c2luTW9udGgobW9udGgsIHlyKSB7XHJcblx0XHRcdFx0bW9udGggPSB0eXBlb2YgbW9udGggPT09IFwidW5kZWZpbmVkXCIgPyBzZWxmLmN1cnJlbnRNb250aCA6IG1vbnRoO1xyXG5cclxuXHRcdFx0XHR5ciA9IHR5cGVvZiB5ciA9PT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYuY3VycmVudFllYXIgOiB5cjtcclxuXHJcblx0XHRcdFx0aWYgKG1vbnRoID09PSAxICYmICh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDAgfHwgeXIgJSA0MDAgPT09IDApKSByZXR1cm4gMjk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb250aFRvU3RyOiBmdW5jdGlvbiBtb250aFRvU3RyKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQpIHtcclxuXHRcdFx0XHRzaG9ydGhhbmQgPSB0eXBlb2Ygc2hvcnRoYW5kID09PSBcInVuZGVmaW5lZFwiID8gc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoIDogc2hvcnRoYW5kO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5sMTBuLm1vbnRoc1soc2hvcnRoYW5kID8gXCJzaG9ydFwiIDogXCJsb25nXCIpICsgXCJoYW5kXCJdW21vbnRoTnVtYmVyXTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0ZnVuY3Rpb24gc2V0dXBGb3JtYXRzKCkge1xyXG5cdFx0c2VsZi5mb3JtYXRzID0gT2JqZWN0LmNyZWF0ZShGbGF0cGlja3JJbnN0YW5jZS5wcm90b3R5cGUuZm9ybWF0cyk7XHJcblx0XHRbXCJEXCIsIFwiRlwiLCBcIkpcIiwgXCJNXCIsIFwiV1wiLCBcImxcIl0uZm9yRWFjaChmdW5jdGlvbiAoZikge1xyXG5cdFx0XHRzZWxmLmZvcm1hdHNbZl0gPSBGbGF0cGlja3JJbnN0YW5jZS5wcm90b3R5cGUuZm9ybWF0c1tmXS5iaW5kKHNlbGYpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c2VsZi5yZXZGb3JtYXQuRiA9IEZsYXRwaWNrckluc3RhbmNlLnByb3RvdHlwZS5yZXZGb3JtYXQuRi5iaW5kKHNlbGYpO1xyXG5cdFx0c2VsZi5yZXZGb3JtYXQuTSA9IEZsYXRwaWNrckluc3RhbmNlLnByb3RvdHlwZS5yZXZGb3JtYXQuTS5iaW5kKHNlbGYpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0dXBJbnB1dHMoKSB7XHJcblx0XHRzZWxmLmlucHV0ID0gc2VsZi5jb25maWcud3JhcCA/IHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpIDogc2VsZi5lbGVtZW50O1xyXG5cclxuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0XHRpZiAoIXNlbGYuaW5wdXQpIHJldHVybiBjb25zb2xlLndhcm4oXCJFcnJvcjogaW52YWxpZCBpbnB1dCBlbGVtZW50IHNwZWNpZmllZFwiLCBzZWxmLmlucHV0KTtcclxuXHJcblx0XHRzZWxmLmlucHV0Ll90eXBlID0gc2VsZi5pbnB1dC50eXBlO1xyXG5cdFx0c2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcblxyXG5cdFx0c2VsZi5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xyXG5cdFx0c2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5hbHRJbnB1dCkge1xyXG5cdFx0XHQvLyByZXBsaWNhdGUgc2VsZi5lbGVtZW50XHJcblx0XHRcdHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgXCIgKyBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzKTtcclxuXHRcdFx0c2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xyXG5cdFx0XHRzZWxmLmFsdElucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcclxuXHRcdFx0c2VsZi5hbHRJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XHJcblx0XHRcdHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xyXG5cdFx0XHRzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuXHRcdFx0c2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcclxuXHJcblx0XHRcdGlmICghc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuaW5wdXQucGFyZW50Tm9kZSkgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmFsdElucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XHJcblxyXG5cdFx0c2VsZi5fcG9zaXRpb25FbGVtZW50ID0gc2VsZi5jb25maWcucG9zaXRpb25FbGVtZW50IHx8IHNlbGYuX2lucHV0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XHJcblx0XHR2YXIgaW5wdXRUeXBlID0gc2VsZi5jb25maWcuZW5hYmxlVGltZSA/IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyBcInRpbWVcIiA6IFwiZGF0ZXRpbWUtbG9jYWxcIiA6IFwiZGF0ZVwiO1xyXG5cclxuXHRcdHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xyXG5cdFx0c2VsZi5tb2JpbGVJbnB1dC5zdGVwID0gXCJhbnlcIjtcclxuXHRcdHNlbGYubW9iaWxlSW5wdXQudGFiSW5kZXggPSAxO1xyXG5cdFx0c2VsZi5tb2JpbGVJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xyXG5cdFx0c2VsZi5tb2JpbGVJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XHJcblx0XHRzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcclxuXHJcblx0XHRzZWxmLm1vYmlsZUZvcm1hdFN0ciA9IGlucHV0VHlwZSA9PT0gXCJkYXRldGltZS1sb2NhbFwiID8gXCJZLW0tZFxcXFxUSDppOlNcIiA6IGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgPyBcIlktbS1kXCIgOiBcIkg6aTpTXCI7XHJcblxyXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHtcclxuXHRcdFx0c2VsZi5tb2JpbGVJbnB1dC5kZWZhdWx0VmFsdWUgPSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xyXG5cclxuXHRcdGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSBzZWxmLm1vYmlsZUlucHV0Lm1heCA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5tYXhEYXRlLCBcIlktbS1kXCIpO1xyXG5cclxuXHRcdHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcblx0XHRpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0c2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLm1vYmlsZUlucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly9cclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLm1vYmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0c2VsZi5zZXREYXRlKGUudGFyZ2V0LnZhbHVlLCBmYWxzZSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XHJcblx0XHRcdHRyaWdnZXJFdmVudChcIkNsb3NlXCIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGUoKSB7XHJcblx0XHRpZiAoc2VsZi5pc09wZW4pIHJldHVybiBzZWxmLmNsb3NlKCk7XHJcblx0XHRzZWxmLm9wZW4oKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRyaWdnZXJFdmVudChldmVudCwgZGF0YSkge1xyXG5cdFx0dmFyIGhvb2tzID0gc2VsZi5jb25maWdbXCJvblwiICsgZXZlbnRdO1xyXG5cclxuXHRcdGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGhvb2tzW2ldICYmIGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGhvb2tzW2ldKHNlbGYuc2VsZWN0ZWREYXRlcywgc2VsZi5pbnB1dC52YWx1ZSwgc2VsZiwgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZXZlbnQgPT09IFwiQ2hhbmdlXCIpIHtcclxuXHRcdFx0c2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdC8vIG1hbnkgZnJvbnQtZW5kIGZyYW1ld29ya3MgYmluZCB0byB0aGUgaW5wdXQgZXZlbnRcclxuXHRcdFx0c2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiaW5wdXRcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgKiBDcmVhdGVzIGFuIEV2ZW50LCBub3JtYWxpemVkIGFjcm9zcyBicm93c2Vyc1xyXG4gICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIGV2ZW50IG5hbWUsIGUuZy4gXCJjbGlja1wiXHJcbiAgKiBAcmV0dXJuIHtFdmVudH0gdGhlIGNyZWF0ZWQgZXZlbnRcclxuICAqL1xyXG5cdGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcclxuXHRcdGlmIChzZWxmLl9zdXBwb3J0c0V2ZW50cykgcmV0dXJuIG5ldyBFdmVudChuYW1lLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcblxyXG5cdFx0c2VsZi5fW25hbWUgKyBcIkV2ZW50XCJdID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdHNlbGYuX1tuYW1lICsgXCJFdmVudFwiXS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gc2VsZi5fW25hbWUgKyBcIkV2ZW50XCJdO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNEYXRlU2VsZWN0ZWQoZGF0ZSkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGNvbXBhcmVEYXRlcyhzZWxmLnNlbGVjdGVkRGF0ZXNbaV0sIGRhdGUpID09PSAwKSByZXR1cm4gXCJcIiArIGk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlKSB7XHJcblx0XHRpZiAoc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPj0gMCAmJiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcclxuXHRcdGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUgfHwgIXNlbGYubW9udGhOYXYpIHJldHVybjtcclxuXHJcblx0XHRzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBzZWxmLnV0aWxzLm1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGgpICsgXCIgXCI7XHJcblx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXI7XHJcblxyXG5cdFx0c2VsZi5faGlkZVByZXZNb250aEFycm93ID0gc2VsZi5jb25maWcubWluRGF0ZSAmJiAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID8gc2VsZi5jdXJyZW50TW9udGggPD0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpIDogc2VsZi5jdXJyZW50WWVhciA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG5cdFx0c2VsZi5faGlkZU5leHRNb250aEFycm93ID0gc2VsZi5jb25maWcubWF4RGF0ZSAmJiAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpID8gc2VsZi5jdXJyZW50TW9udGggKyAxID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpIDogc2VsZi5jdXJyZW50WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIFVwZGF0ZXMgdGhlIHZhbHVlcyBvZiBpbnB1dHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYWxlbmRhclxyXG4gICogQHJldHVybiB7dm9pZH1cclxuICAqL1xyXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpIHtcclxuXHRcdGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCkgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XHJcblxyXG5cdFx0aWYgKHNlbGYuaXNNb2JpbGUpIHtcclxuXHRcdFx0c2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPyBzZWxmLmZvcm1hdERhdGUoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYubW9iaWxlRm9ybWF0U3RyKSA6IFwiXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGpvaW5DaGFyID0gc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiID8gXCI7IFwiIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yO1xyXG5cclxuXHRcdHNlbGYuaW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubWFwKGZ1bmN0aW9uIChkT2JqKSB7XHJcblx0XHRcdHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XHJcblx0XHR9KS5qb2luKGpvaW5DaGFyKTtcclxuXHJcblx0XHRpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcclxuXHRcdFx0c2VsZi5hbHRJbnB1dC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlcy5tYXAoZnVuY3Rpb24gKGRPYmopIHtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7XHJcblx0XHRcdH0pLmpvaW4oam9pbkNoYXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0cmlnZ2VyQ2hhbmdlICE9PSBmYWxzZSkgdHJpZ2dlckV2ZW50KFwiVmFsdWVVcGRhdGVcIik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBtb3VzZURlbHRhKGUpIHtcclxuXHRcdHJldHVybiBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSkpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb250aE5hdlNjcm9sbChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgaXNZZWFyID0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucGFyZW50Tm9kZS5jb250YWlucyhlLnRhcmdldCk7XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0ID09PSBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgfHwgaXNZZWFyKSB7XHJcblxyXG5cdFx0XHR2YXIgZGVsdGEgPSBtb3VzZURlbHRhKGUpO1xyXG5cclxuXHRcdFx0aWYgKGlzWWVhcikge1xyXG5cdFx0XHRcdGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciArIGRlbHRhKTtcclxuXHRcdFx0XHRlLnRhcmdldC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXI7XHJcblx0XHRcdH0gZWxzZSBzZWxmLmNoYW5nZU1vbnRoKGRlbHRhLCB0cnVlLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vbnRoTmF2Q2xpY2soZSkge1xyXG5cdFx0dmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG5cdFx0dmFyIGlzTmV4dE1vbnRoID0gc2VsZi5uZXh0TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG5cclxuXHRcdGlmIChpc1ByZXZNb250aCB8fCBpc05leHRNb250aCkgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO2Vsc2UgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHNlbGYuY3VycmVudFllYXJFbGVtZW50LnNlbGVjdCgpO1xyXG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYXJyb3dVcFwiKSBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciArIDEpO2Vsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhcnJvd0Rvd25cIikgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSAxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICogQ3JlYXRlcyBhbiBIVE1MRWxlbWVudCB3aXRoIGdpdmVuIHRhZywgY2xhc3MsIGFuZCB0ZXh0dWFsIGNvbnRlbnRcclxuICAqIEBwYXJhbSB7U3RyaW5nfSB0YWcgdGhlIEhUTUwgdGFnXHJcbiAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIHRoZSBuZXcgZWxlbWVudCdzIGNsYXNzIG5hbWVcclxuICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50IFRoZSBuZXcgZWxlbWVudCdzIHRleHQgY29udGVudFxyXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IHRoZSBjcmVhdGVkIEhUTUwgZWxlbWVudFxyXG4gICovXHJcblx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xyXG5cdFx0dmFyIGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcblx0XHRjb250ZW50ID0gY29udGVudCB8fCBcIlwiO1xyXG5cclxuXHRcdGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG5cclxuXHRcdGlmIChjb250ZW50ICE9PSB1bmRlZmluZWQpIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdHJldHVybiBlO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXJyYXlpZnkob2JqKSB7XHJcblx0XHRpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBvYmo7XHJcblx0XHRyZXR1cm4gW29ial07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBjbGFzc05hbWUsIGJvb2wpIHtcclxuXHRcdGlmIChib29sKSByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcblx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHR9XHJcblxyXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcblx0ZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcblx0XHR2YXIgdGltZW91dCA9IHZvaWQgMDtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcyxcclxuXHRcdFx0ICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHR9LCB3YWl0KTtcclxuXHRcdFx0aWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dCkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAqIENvbXB1dGUgdGhlIGRpZmZlcmVuY2UgaW4gZGF0ZXMsIG1lYXN1cmVkIGluIG1zXHJcbiAgKiBAcGFyYW0ge0RhdGV9IGRhdGUxXHJcbiAgKiBAcGFyYW0ge0RhdGV9IGRhdGUyXHJcbiAgKiBAcGFyYW0ge0Jvb2xlYW59IHRpbWVsZXNzIHdoZXRoZXIgdG8gcmVzZXQgdGltZXMgb2YgYm90aCBkYXRlcyB0byAwMDowMFxyXG4gICogQHJldHVybiB7TnVtYmVyfSB0aGUgZGlmZmVyZW5jZSBpbiBtc1xyXG4gICovXHJcblx0ZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MpIHtcclxuXHRcdGlmICghKGRhdGUxIGluc3RhbmNlb2YgRGF0ZSkgfHwgIShkYXRlMiBpbnN0YW5jZW9mIERhdGUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZTEuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKGRhdGUyLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR2YXIgaXNLZXlEb3duID0gZS50eXBlID09PSBcImtleWRvd25cIixcclxuXHRcdCAgICBpc1doZWVsID0gZS50eXBlID09PSBcIndoZWVsXCIsXHJcblx0XHQgICAgaXNJbmNyZW1lbnQgPSBlLnR5cGUgPT09IFwiaW5jcmVtZW50XCIsXHJcblx0XHQgICAgaW5wdXQgPSBlLnRhcmdldDtcclxuXHJcblx0XHRpZiAoc2VsZi5hbVBNICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHJldHVybiBlLnRhcmdldC50ZXh0Q29udGVudCA9IFtcIkFNXCIsIFwiUE1cIl1bZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiQU1cIiB8IDBdO1xyXG5cclxuXHRcdHZhciBtaW4gPSBOdW1iZXIoaW5wdXQubWluKSxcclxuXHRcdCAgICBtYXggPSBOdW1iZXIoaW5wdXQubWF4KSxcclxuXHRcdCAgICBzdGVwID0gTnVtYmVyKGlucHV0LnN0ZXApLFxyXG5cdFx0ICAgIGN1clZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSxcclxuXHRcdCAgICBkZWx0YSA9IGUuZGVsdGEgfHwgKCFpc0tleURvd24gPyBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSkpIHx8IDAgOiBlLndoaWNoID09PSAzOCA/IDEgOiAtMSk7XHJcblxyXG5cdFx0dmFyIG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBpbnB1dC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0dmFyIGlzSG91ckVsZW0gPSBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCxcclxuXHRcdFx0ICAgIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XHJcblxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPCBtaW4pIHtcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1heCArIG5ld1ZhbHVlICsgIWlzSG91ckVsZW0gKyAoaXNIb3VyRWxlbSAmJiAhc2VsZi5hbVBNKTtcclxuXHJcblx0XHRcdFx0aWYgKGlzTWludXRlRWxlbSkgaW5jcmVtZW50TnVtSW5wdXQobnVsbCwgLTEsIHNlbGYuaG91ckVsZW1lbnQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4KSB7XHJcblx0XHRcdFx0bmV3VmFsdWUgPSBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gIXNlbGYuYW1QTSA6IG1pbjtcclxuXHJcblx0XHRcdFx0aWYgKGlzTWludXRlRWxlbSkgaW5jcmVtZW50TnVtSW5wdXQobnVsbCwgMSwgc2VsZi5ob3VyRWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChzZWxmLmFtUE0gJiYgaXNIb3VyRWxlbSAmJiAoc3RlcCA9PT0gMSA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSkgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIgPyBcIkFNXCIgOiBcIlBNXCI7XHJcblxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IHNlbGYucGFkKG5ld1ZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXQoKTtcclxuXHRyZXR1cm4gc2VsZjtcclxufVxyXG5cclxuRmxhdHBpY2tySW5zdGFuY2UucHJvdG90eXBlID0ge1xyXG5cdGZvcm1hdHM6IHtcclxuXHRcdC8vIGdldCB0aGUgZGF0ZSBpbiBVVENcclxuXHRcdFo6IGZ1bmN0aW9uIFooZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyB3ZWVrZGF5IG5hbWUsIHNob3J0LCBlLmcuIFRodVxyXG5cdFx0RDogZnVuY3Rpb24gRChkYXRlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kW3RoaXMuZm9ybWF0cy53KGRhdGUpXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gZnVsbCBtb250aCBuYW1lIGUuZy4gSmFudWFyeVxyXG5cdFx0RjogZnVuY3Rpb24gRihkYXRlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnV0aWxzLm1vbnRoVG9TdHIodGhpcy5mb3JtYXRzLm4oZGF0ZSkgLSAxLCBmYWxzZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHBhZGRlZCBob3VyIDEtMTJcclxuXHRcdEc6IGZ1bmN0aW9uIEcoZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gRmxhdHBpY2tySW5zdGFuY2UucHJvdG90eXBlLnBhZChGbGF0cGlja3JJbnN0YW5jZS5wcm90b3R5cGUuZm9ybWF0cy5oKGRhdGUpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaG91cnMgd2l0aCBsZWFkaW5nIHplcm8gZS5nLiAwM1xyXG5cdFx0SDogZnVuY3Rpb24gSChkYXRlKSB7XHJcblx0XHRcdHJldHVybiBGbGF0cGlja3JJbnN0YW5jZS5wcm90b3R5cGUucGFkKGRhdGUuZ2V0SG91cnMoKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGRheSAoMS0zMCkgd2l0aCBvcmRpbmFsIHN1ZmZpeCBlLmcuIDFzdCwgMm5kXHJcblx0XHRKOiBmdW5jdGlvbiBKKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgdGhpcy5sMTBuLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBBTS9QTVxyXG5cdFx0SzogZnVuY3Rpb24gSyhkYXRlKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmdldEhvdXJzKCkgPiAxMSA/IFwiUE1cIiA6IFwiQU1cIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gc2hvcnRoYW5kIG1vbnRoIGUuZy4gSmFuLCBTZXAsIE9jdCwgZXRjXHJcblx0XHRNOiBmdW5jdGlvbiBNKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXRpbHMubW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBzZWNvbmRzIDAwLTU5XHJcblx0XHRTOiBmdW5jdGlvbiBTKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIEZsYXRwaWNrckluc3RhbmNlLnByb3RvdHlwZS5wYWQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyB1bml4IHRpbWVzdGFtcFxyXG5cdFx0VTogZnVuY3Rpb24gVShkYXRlKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDA7XHJcblx0XHR9LFxyXG5cclxuXHRcdFc6IGZ1bmN0aW9uIFcoZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcuZ2V0V2VlayhkYXRlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gZnVsbCB5ZWFyIGUuZy4gMjAxNlxyXG5cdFx0WTogZnVuY3Rpb24gWShkYXRlKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGRheSBpbiBtb250aCwgcGFkZGVkICgwMS0zMClcclxuXHRcdGQ6IGZ1bmN0aW9uIGQoZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gRmxhdHBpY2tySW5zdGFuY2UucHJvdG90eXBlLnBhZChkYXRlLmdldERhdGUoKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGhvdXIgZnJvbSAxLTEyIChhbS9wbSlcclxuXHRcdGg6IGZ1bmN0aW9uIGgoZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBtaW51dGVzLCBwYWRkZWQgd2l0aCBsZWFkaW5nIHplcm8gZS5nLiAwOVxyXG5cdFx0aTogZnVuY3Rpb24gaShkYXRlKSB7XHJcblx0XHRcdHJldHVybiBGbGF0cGlja3JJbnN0YW5jZS5wcm90b3R5cGUucGFkKGRhdGUuZ2V0TWludXRlcygpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gZGF5IGluIG1vbnRoICgxLTMwKVxyXG5cdFx0ajogZnVuY3Rpb24gaihkYXRlKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmdldERhdGUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gd2Vla2RheSBuYW1lLCBmdWxsLCBlLmcuIFRodXJzZGF5XHJcblx0XHRsOiBmdW5jdGlvbiBsKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubDEwbi53ZWVrZGF5cy5sb25naGFuZFtkYXRlLmdldERheSgpXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcGFkZGVkIG1vbnRoIG51bWJlciAoMDEtMTIpXHJcblx0XHRtOiBmdW5jdGlvbiBtKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIEZsYXRwaWNrckluc3RhbmNlLnByb3RvdHlwZS5wYWQoZGF0ZS5nZXRNb250aCgpICsgMSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHRoZSBtb250aCBudW1iZXIgKDEtMTIpXHJcblx0XHRuOiBmdW5jdGlvbiBuKGRhdGUpIHtcclxuXHRcdFx0cmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHNlY29uZHMgMC01OVxyXG5cdFx0czogZnVuY3Rpb24gcyhkYXRlKSB7XHJcblx0XHRcdHJldHVybiBkYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gbnVtYmVyIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcclxuXHRcdHc6IGZ1bmN0aW9uIHcoZGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gZGF0ZS5nZXREYXkoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gbGFzdCB0d28gZGlnaXRzIG9mIHllYXIgZS5nLiAxNiBmb3IgMjAxNlxyXG5cdFx0eTogZnVuY3Rpb24geShkYXRlKSB7XHJcblx0XHRcdHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcbiAgKiBGb3JtYXRzIGEgZ2l2ZW4gRGF0ZSBvYmplY3QgaW50byBhIHN0cmluZyBiYXNlZCBvbiBzdXBwbGllZCBmb3JtYXRcclxuICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiB0aGUgZGF0ZSBvYmplY3RcclxuICAqIEBwYXJhbSB7U3RyaW5nfSBmcm10IGEgc3RyaW5nIGNvbXBvc2VkIG9mIGZvcm1hdHRpbmcgdG9rZW5zIGUuZy4gXCJZLW0tZFwiXHJcbiAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXRlIGUuZy4gMjAxNy0wMi0wM1xyXG4gICovXHJcblx0Zm9ybWF0RGF0ZTogZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10KSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY29uZmlnLmZvcm1hdERhdGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuY29uZmlnLmZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCk7XHJcblxyXG5cdFx0cmV0dXJuIGZybXQuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uIChjLCBpLCBhcnIpIHtcclxuXHRcdFx0cmV0dXJuIF90aGlzLmZvcm1hdHNbY10gJiYgYXJyW2kgLSAxXSAhPT0gXCJcXFxcXCIgPyBfdGhpcy5mb3JtYXRzW2NdKGRhdGVPYmopIDogYyAhPT0gXCJcXFxcXCIgPyBjIDogXCJcIjtcclxuXHRcdH0pLmpvaW4oXCJcIik7XHJcblx0fSxcclxuXHJcblxyXG5cdHJldkZvcm1hdDoge1xyXG5cdFx0RDogZnVuY3Rpb24gRCgpIHt9LFxyXG5cdFx0RjogZnVuY3Rpb24gRihkYXRlT2JqLCBtb250aE5hbWUpIHtcclxuXHRcdFx0ZGF0ZU9iai5zZXRNb250aCh0aGlzLmwxMG4ubW9udGhzLmxvbmdoYW5kLmluZGV4T2YobW9udGhOYW1lKSk7XHJcblx0XHR9LFxyXG5cdFx0RzogZnVuY3Rpb24gRyhkYXRlT2JqLCBob3VyKSB7XHJcblx0XHRcdGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcblx0XHR9LFxyXG5cdFx0SDogZnVuY3Rpb24gSChkYXRlT2JqLCBob3VyKSB7XHJcblx0XHRcdGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcblx0XHR9LFxyXG5cdFx0SjogZnVuY3Rpb24gSihkYXRlT2JqLCBkYXkpIHtcclxuXHRcdFx0ZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcblx0XHR9LFxyXG5cdFx0SzogZnVuY3Rpb24gSyhkYXRlT2JqLCBhbVBNKSB7XHJcblx0XHRcdHZhciBob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKTtcclxuXHJcblx0XHRcdGlmIChob3VycyAhPT0gMTIpIGRhdGVPYmouc2V0SG91cnMoaG91cnMgJSAxMiArIDEyICogL3BtL2kudGVzdChhbVBNKSk7XHJcblx0XHR9LFxyXG5cdFx0TTogZnVuY3Rpb24gTShkYXRlT2JqLCBzaG9ydE1vbnRoKSB7XHJcblx0XHRcdGRhdGVPYmouc2V0TW9udGgodGhpcy5sMTBuLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZihzaG9ydE1vbnRoKSk7XHJcblx0XHR9LFxyXG5cdFx0UzogZnVuY3Rpb24gUyhkYXRlT2JqLCBzZWNvbmRzKSB7XHJcblx0XHRcdGRhdGVPYmouc2V0U2Vjb25kcyhzZWNvbmRzKTtcclxuXHRcdH0sXHJcblx0XHRVOiBmdW5jdGlvbiBVKGRhdGVPYmosIHVuaXhTZWNvbmRzKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhTZWNvbmRzKSAqIDEwMDApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRXOiBmdW5jdGlvbiBXKGRhdGVPYmosIHdlZWtOdW1iZXIpIHtcclxuXHRcdFx0d2Vla051bWJlciA9IHBhcnNlSW50KHdlZWtOdW1iZXIpO1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDAsIDApO1xyXG5cdFx0fSxcclxuXHRcdFk6IGZ1bmN0aW9uIFkoZGF0ZU9iaiwgeWVhcikge1xyXG5cdFx0XHRkYXRlT2JqLnNldEZ1bGxZZWFyKHllYXIpO1xyXG5cdFx0fSxcclxuXHRcdFo6IGZ1bmN0aW9uIFooZGF0ZU9iaiwgSVNPRGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGUoSVNPRGF0ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGQ6IGZ1bmN0aW9uIGQoZGF0ZU9iaiwgZGF5KSB7XHJcblx0XHRcdGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG5cdFx0fSxcclxuXHRcdGg6IGZ1bmN0aW9uIGgoZGF0ZU9iaiwgaG91cikge1xyXG5cdFx0XHRkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG5cdFx0fSxcclxuXHRcdGk6IGZ1bmN0aW9uIGkoZGF0ZU9iaiwgbWludXRlcykge1xyXG5cdFx0XHRkYXRlT2JqLnNldE1pbnV0ZXMocGFyc2VGbG9hdChtaW51dGVzKSk7XHJcblx0XHR9LFxyXG5cdFx0ajogZnVuY3Rpb24gaihkYXRlT2JqLCBkYXkpIHtcclxuXHRcdFx0ZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcblx0XHR9LFxyXG5cdFx0bDogZnVuY3Rpb24gbCgpIHt9LFxyXG5cdFx0bTogZnVuY3Rpb24gbShkYXRlT2JqLCBtb250aCkge1xyXG5cdFx0XHRkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XHJcblx0XHR9LFxyXG5cdFx0bjogZnVuY3Rpb24gbihkYXRlT2JqLCBtb250aCkge1xyXG5cdFx0XHRkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XHJcblx0XHR9LFxyXG5cdFx0czogZnVuY3Rpb24gcyhkYXRlT2JqLCBzZWNvbmRzKSB7XHJcblx0XHRcdGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcclxuXHRcdH0sXHJcblx0XHR3OiBmdW5jdGlvbiB3KCkge30sXHJcblx0XHR5OiBmdW5jdGlvbiB5KGRhdGVPYmosIHllYXIpIHtcclxuXHRcdFx0ZGF0ZU9iai5zZXRGdWxsWWVhcigyMDAwICsgcGFyc2VGbG9hdCh5ZWFyKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0dG9rZW5SZWdleDoge1xyXG5cdFx0RDogXCIoXFxcXHcrKVwiLFxyXG5cdFx0RjogXCIoXFxcXHcrKVwiLFxyXG5cdFx0RzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuXHRcdEg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcblx0XHRKOiBcIihcXFxcZFxcXFxkfFxcXFxkKVxcXFx3K1wiLFxyXG5cdFx0SzogXCIoYW18QU18QW18YU18cG18UE18UG18cE0pXCIsXHJcblx0XHRNOiBcIihcXFxcdyspXCIsXHJcblx0XHRTOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG5cdFx0VTogXCIoLispXCIsXHJcblx0XHRXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG5cdFx0WTogXCIoXFxcXGR7NH0pXCIsXHJcblx0XHRaOiBcIiguKylcIixcclxuXHRcdGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcblx0XHRoOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG5cdFx0aTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuXHRcdGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcblx0XHRsOiBcIihcXFxcdyspXCIsXHJcblx0XHRtOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG5cdFx0bjogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuXHRcdHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcblx0XHR3OiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG5cdFx0eTogXCIoXFxcXGR7Mn0pXCJcclxuXHR9LFxyXG5cclxuXHRwYWQ6IGZ1bmN0aW9uIHBhZChudW1iZXIpIHtcclxuXHRcdHJldHVybiAoXCIwXCIgKyBudW1iZXIpLnNsaWNlKC0yKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuICAqIFBhcnNlcyBhIGRhdGUoK3RpbWUpIHN0cmluZyBpbnRvIGEgRGF0ZSBvYmplY3RcclxuICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlIHRoZSBkYXRlIHN0cmluZywgZS5nLiAyMDE3LTAyLTAzIDE0OjQ1XHJcbiAgKiBAcGFyYW0ge1N0cmluZ30gZ2l2ZW5Gb3JtYXQgdGhlIGRhdGUgZm9ybWF0LCBlLmcuIFktbS1kIEg6aVxyXG4gICogQHBhcmFtIHtCb29sZWFufSB0aW1lbGVzcyB3aGV0aGVyIHRvIHJlc2V0IHRoZSB0aW1lIG9mIERhdGUgb2JqZWN0XHJcbiAgKiBAcmV0dXJuIHtEYXRlfSB0aGUgcGFyc2VkIERhdGUgb2JqZWN0XHJcbiAgKi9cclxuXHRwYXJzZURhdGU6IGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MpIHtcclxuXHRcdGlmIChkYXRlICE9PSAwICYmICFkYXRlKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHR2YXIgZGF0ZV9vcmlnID0gZGF0ZTtcclxuXHJcblx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7IC8vIGNyZWF0ZSBhIGNvcHlcclxuXHJcblx0XHRlbHNlIGlmIChkYXRlLnRvRml4ZWQgIT09IHVuZGVmaW5lZCkgLy8gdGltZXN0YW1wXHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO2Vsc2Uge1xyXG5cdFx0XHRcdC8vIGRhdGUgc3RyaW5nXHJcblx0XHRcdFx0dmFyIGZvcm1hdCA9IGdpdmVuRm9ybWF0IHx8ICh0aGlzLmNvbmZpZyB8fCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZykuZGF0ZUZvcm1hdDtcclxuXHRcdFx0XHRkYXRlID0gU3RyaW5nKGRhdGUpLnRyaW0oKTtcclxuXHJcblx0XHRcdFx0aWYgKGRhdGUgPT09IFwidG9kYXlcIikge1xyXG5cdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0XHR0aW1lbGVzcyA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIGlmICgvWiQvLnRlc3QoZGF0ZSkgfHwgL0dNVCQvLnRlc3QoZGF0ZSkpIC8vIGRhdGVzdHJpbmdzIHcvIHRpbWV6b25lXHJcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSk7ZWxzZSBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucGFyc2VEYXRlKSBkYXRlID0gdGhpcy5jb25maWcucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7ZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyc2VkRGF0ZSA9ICF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcubm9DYWxlbmRhciA/IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSwgMCwgMCwgMCwgMCkgOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgbWF0Y2hlZCA9IHZvaWQgMDtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbWF0Y2hJbmRleCA9IDAsIHJlZ2V4U3RyID0gXCJcIjsgaSA8IGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgdG9rZW4gPSBmb3JtYXRbaV07XHJcblx0XHRcdFx0XHRcdHZhciBpc0JhY2tTbGFzaCA9IHRva2VuID09PSBcIlxcXFxcIjtcclxuXHRcdFx0XHRcdFx0dmFyIGVzY2FwZWQgPSBmb3JtYXRbaSAtIDFdID09PSBcIlxcXFxcIiB8fCBpc0JhY2tTbGFzaDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRva2VuUmVnZXhbdG9rZW5dICYmICFlc2NhcGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVnZXhTdHIgKz0gdGhpcy50b2tlblJlZ2V4W3Rva2VuXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKS5leGVjKGRhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtYXRjaCAmJiAobWF0Y2hlZCA9IHRydWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJzZWREYXRlID0gdGhpcy5yZXZGb3JtYXRbdG9rZW5dKHBhcnNlZERhdGUsIG1hdGNoWysrbWF0Y2hJbmRleF0pIHx8IHBhcnNlZERhdGU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCFpc0JhY2tTbGFzaCkgcmVnZXhTdHIgKz0gXCIuXCI7IC8vIGRvbid0IHJlYWxseSBjYXJlXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZGF0ZSA9IG1hdGNoZWQgPyBwYXJzZWREYXRlIDogbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5cdFx0aWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBkYXRlIFwiICsgZGF0ZV9vcmlnKTtcclxuXHRcdFx0Y29uc29sZS5pbmZvKHRoaXMuZWxlbWVudCk7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSkgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9XHJcbn07XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5mdW5jdGlvbiBfZmxhdHBpY2tyKG5vZGVMaXN0LCBjb25maWcpIHtcclxuXHR2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7IC8vIHN0YXRpYyBsaXN0XHJcblx0dmFyIGluc3RhbmNlcyA9IFtdO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmIChub2Rlc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0aWYgKG5vZGVzW2ldLl9mbGF0cGlja3IpIHtcclxuXHRcdFx0XHRub2Rlc1tpXS5fZmxhdHBpY2tyLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRub2Rlc1tpXS5fZmxhdHBpY2tyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bm9kZXNbaV0uX2ZsYXRwaWNrciA9IG5ldyBGbGF0cGlja3JJbnN0YW5jZShub2Rlc1tpXSwgY29uZmlnIHx8IHt9KTtcclxuXHRcdFx0aW5zdGFuY2VzLnB1c2gobm9kZXNbaV0uX2ZsYXRwaWNrcik7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihlLCBlLnN0YWNrKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID09PSAxID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0Ly8gYnJvd3NlciBlbnZcclxuXHRIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyID0gTm9kZUxpc3QucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHRcdHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XHJcblx0fTtcclxuXHJcblx0SFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHRcdHJldHVybiBfZmxhdHBpY2tyKFt0aGlzXSwgY29uZmlnKTtcclxuXHR9O1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5mdW5jdGlvbiBmbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZykge1xyXG5cdGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSByZXR1cm4gX2ZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKTtlbHNlIGlmICghKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gX2ZsYXRwaWNrcih3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNvbmZpZyk7XHJcblxyXG5cdHJldHVybiBfZmxhdHBpY2tyKFtzZWxlY3Rvcl0sIGNvbmZpZyk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gRmxhdHBpY2tySW5zdGFuY2UuZGVmYXVsdENvbmZpZyA9IHtcclxuXHRtb2RlOiBcInNpbmdsZVwiLFxyXG5cclxuXHRwb3NpdGlvbjogXCJhdXRvXCIsXHJcblxyXG5cdGFuaW1hdGU6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpID09PSAtMSxcclxuXHJcblx0Ly8gd3JhcDogc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZmxhdHBpY2tyLWV4dGVybmFsLWVsZW1lbnRzXHJcblx0d3JhcDogZmFsc2UsXHJcblxyXG5cdC8vIGVuYWJsZXMgd2VlayBudW1iZXJzXHJcblx0d2Vla051bWJlcnM6IGZhbHNlLFxyXG5cclxuXHQvLyBhbGxvdyBtYW51YWwgZGF0ZXRpbWUgaW5wdXRcclxuXHRhbGxvd0lucHV0OiBmYWxzZSxcclxuXHJcblx0LypcclxuIFx0Y2xpY2tpbmcgb24gaW5wdXQgb3BlbnMgdGhlIGRhdGUodGltZSlwaWNrZXIuXHJcbiBcdGRpc2FibGUgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgd2l0aCAub3BlbigpXHJcbiAqL1xyXG5cdGNsaWNrT3BlbnM6IHRydWUsXHJcblxyXG5cdC8qXHJcbiBcdGNsb3NlcyBjYWxlbmRhciBhZnRlciBkYXRlIHNlbGVjdGlvbixcclxuIFx0dW5sZXNzICdtb2RlJyBpcyAnbXVsdGlwbGUnIG9yIGVuYWJsZVRpbWUgaXMgdHJ1ZVxyXG4gKi9cclxuXHRjbG9zZU9uU2VsZWN0OiB0cnVlLFxyXG5cclxuXHQvLyBkaXNwbGF5IHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZVxyXG5cdHRpbWVfMjRocjogZmFsc2UsXHJcblxyXG5cdC8vIGVuYWJsZXMgdGhlIHRpbWUgcGlja2VyIGZ1bmN0aW9uYWxpdHlcclxuXHRlbmFibGVUaW1lOiBmYWxzZSxcclxuXHJcblx0Ly8gbm9DYWxlbmRhcjogdHJ1ZSB3aWxsIGhpZGUgdGhlIGNhbGVuZGFyLiB1c2UgZm9yIGEgdGltZSBwaWNrZXIgYWxvbmcgdy8gZW5hYmxlVGltZVxyXG5cdG5vQ2FsZW5kYXI6IGZhbHNlLFxyXG5cclxuXHQvLyBtb3JlIGRhdGUgZm9ybWF0IGNoYXJzIGF0IGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jZGF0ZWZvcm1hdFxyXG5cdGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcclxuXHJcblx0Ly8gZGF0ZSBmb3JtYXQgdXNlZCBpbiBhcmlhLWxhYmVsIGZvciBkYXlzXHJcblx0YXJpYURhdGVGb3JtYXQ6IFwiRiBqLCBZXCIsXHJcblxyXG5cdC8vIGFsdElucHV0IC0gc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jYWx0aW5wdXRcclxuXHRhbHRJbnB1dDogZmFsc2UsXHJcblxyXG5cdC8vIHRoZSBjcmVhdGVkIGFsdElucHV0IGVsZW1lbnQgd2lsbCBoYXZlIHRoaXMgY2xhc3MuXHJcblx0YWx0SW5wdXRDbGFzczogXCJmb3JtLWNvbnRyb2wgaW5wdXRcIixcclxuXHJcblx0Ly8gc2FtZSBhcyBkYXRlRm9ybWF0LCBidXQgZm9yIGFsdElucHV0XHJcblx0YWx0Rm9ybWF0OiBcIkYgaiwgWVwiLCAvLyBkZWZhdWx0cyB0byBlLmcuIEp1bmUgMTAsIDIwMTZcclxuXHJcblx0Ly8gZGVmYXVsdERhdGUgLSBlaXRoZXIgYSBkYXRlc3RyaW5nIG9yIGEgZGF0ZSBvYmplY3QuIHVzZWQgZm9yIGRhdGV0aW1lcGlja2VyXCJzIGluaXRpYWwgdmFsdWVcclxuXHRkZWZhdWx0RGF0ZTogbnVsbCxcclxuXHJcblx0Ly8gdGhlIG1pbmltdW0gZGF0ZSB0aGF0IHVzZXIgY2FuIHBpY2sgKGluY2x1c2l2ZSlcclxuXHRtaW5EYXRlOiBudWxsLFxyXG5cclxuXHQvLyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgdXNlciBjYW4gcGljayAoaW5jbHVzaXZlKVxyXG5cdG1heERhdGU6IG51bGwsXHJcblxyXG5cdC8vIGRhdGVwYXJzZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZ2l2ZW4gc3RyaW5nIHRvIGEgZGF0ZSBvYmplY3RcclxuXHRwYXJzZURhdGU6IG51bGwsXHJcblxyXG5cdC8vIGRhdGVmb3JtYXR0ZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZ2l2ZW4gZGF0ZSBvYmplY3QgdG8gYSBzdHJpbmcsIGFjY29yZGluZyB0byBwYXNzZWQgZm9ybWF0XHJcblx0Zm9ybWF0RGF0ZTogbnVsbCxcclxuXHJcblx0Z2V0V2VlazogZnVuY3Rpb24gZ2V0V2VlayhnaXZlbkRhdGUpIHtcclxuXHRcdHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XHJcblx0XHR2YXIgb25lamFuID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuXHRcdHJldHVybiBNYXRoLmNlaWwoKChkYXRlIC0gb25lamFuKSAvIDg2NDAwMDAwICsgb25lamFuLmdldERheSgpICsgMSkgLyA3KTtcclxuXHR9LFxyXG5cclxuXHJcblx0Ly8gc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jZGlzYWJsZVxyXG5cdGVuYWJsZTogW10sXHJcblxyXG5cdC8vIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2Rpc2FibGVcclxuXHRkaXNhYmxlOiBbXSxcclxuXHJcblx0Ly8gZGlzcGxheSB0aGUgc2hvcnQgdmVyc2lvbiBvZiBtb250aCBuYW1lcyAtIGUuZy4gU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyXHJcblx0c2hvcnRoYW5kQ3VycmVudE1vbnRoOiBmYWxzZSxcclxuXHJcblx0Ly8gZGlzcGxheXMgY2FsZW5kYXIgaW5saW5lLiBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNpbmxpbmUtY2FsZW5kYXJcclxuXHRpbmxpbmU6IGZhbHNlLFxyXG5cclxuXHQvLyBwb3NpdGlvbiBjYWxlbmRhciBpbnNpZGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudFxyXG5cdC8vIGxlYXZlIGF0IGZhbHNlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdVwicmUgZG9pbmdcclxuXHRcInN0YXRpY1wiOiBmYWxzZSxcclxuXHJcblx0Ly8gRE9NIG5vZGUgdG8gYXBwZW5kIHRoZSBjYWxlbmRhciB0byBpbiAqc3RhdGljKiBtb2RlXHJcblx0YXBwZW5kVG86IG51bGwsXHJcblxyXG5cdC8vIGNvZGUgZm9yIHByZXZpb3VzL25leHQgaWNvbnMuIHRoaXMgaXMgd2hlcmUgeW91IHB1dCB5b3VyIGN1c3RvbSBpY29uIGNvZGUgZS5nLiBmb250YXdlc29tZVxyXG5cdHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcclxuXHRuZXh0QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixcclxuXHJcblx0Ly8gZW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlclxyXG5cdGVuYWJsZVNlY29uZHM6IGZhbHNlLFxyXG5cclxuXHQvLyBzdGVwIHNpemUgdXNlZCB3aGVuIHNjcm9sbGluZy9pbmNyZW1lbnRpbmcgdGhlIGhvdXIgZWxlbWVudFxyXG5cdGhvdXJJbmNyZW1lbnQ6IDEsXHJcblxyXG5cdC8vIHN0ZXAgc2l6ZSB1c2VkIHdoZW4gc2Nyb2xsaW5nL2luY3JlbWVudGluZyB0aGUgbWludXRlIGVsZW1lbnRcclxuXHRtaW51dGVJbmNyZW1lbnQ6IDUsXHJcblxyXG5cdC8vIGluaXRpYWwgdmFsdWUgaW4gdGhlIGhvdXIgZWxlbWVudFxyXG5cdGRlZmF1bHRIb3VyOiAxMixcclxuXHJcblx0Ly8gaW5pdGlhbCB2YWx1ZSBpbiB0aGUgbWludXRlIGVsZW1lbnRcclxuXHRkZWZhdWx0TWludXRlOiAwLFxyXG5cclxuXHQvLyBkaXNhYmxlIG5hdGl2ZSBtb2JpbGUgZGF0ZXRpbWUgaW5wdXQgc3VwcG9ydFxyXG5cdGRpc2FibGVNb2JpbGU6IGZhbHNlLFxyXG5cclxuXHQvLyBkZWZhdWx0IGxvY2FsZVxyXG5cdGxvY2FsZTogXCJkZWZhdWx0XCIsXHJcblxyXG5cdHBsdWdpbnM6IFtdLFxyXG5cclxuXHRpZ25vcmVkRm9jdXNFbGVtZW50czogW10sXHJcblxyXG5cdC8vIGNhbGxlZCBldmVyeSB0aW1lIGNhbGVuZGFyIGlzIGNsb3NlZFxyXG5cdG9uQ2xvc2U6IHVuZGVmaW5lZCwgLy8gZnVuY3Rpb24gKGRhdGVPYmosIGRhdGVTdHIpIHt9XHJcblxyXG5cdC8vIG9uQ2hhbmdlIGNhbGxiYWNrIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSBvciB0aW1lXHJcblx0b25DaGFuZ2U6IHVuZGVmaW5lZCwgLy8gZnVuY3Rpb24gKGRhdGVPYmosIGRhdGVTdHIpIHt9XHJcblxyXG5cdC8vIGNhbGxlZCBmb3IgZXZlcnkgZGF5IGVsZW1lbnRcclxuXHRvbkRheUNyZWF0ZTogdW5kZWZpbmVkLFxyXG5cclxuXHQvLyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgbW9udGggaXMgY2hhbmdlZFxyXG5cdG9uTW9udGhDaGFuZ2U6IHVuZGVmaW5lZCxcclxuXHJcblx0Ly8gY2FsbGVkIGV2ZXJ5IHRpbWUgY2FsZW5kYXIgaXMgb3BlbmVkXHJcblx0b25PcGVuOiB1bmRlZmluZWQsIC8vIGZ1bmN0aW9uIChkYXRlT2JqLCBkYXRlU3RyKSB7fVxyXG5cclxuXHQvLyBjYWxsZWQgYWZ0ZXIgdGhlIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gcGFyc2VkXHJcblx0b25QYXJzZUNvbmZpZzogdW5kZWZpbmVkLFxyXG5cclxuXHQvLyBjYWxsZWQgYWZ0ZXIgY2FsZW5kYXIgaXMgcmVhZHlcclxuXHRvblJlYWR5OiB1bmRlZmluZWQsIC8vIGZ1bmN0aW9uIChkYXRlT2JqLCBkYXRlU3RyKSB7fVxyXG5cclxuXHQvLyBjYWxsZWQgYWZ0ZXIgaW5wdXQgdmFsdWUgdXBkYXRlZFxyXG5cdG9uVmFsdWVVcGRhdGU6IHVuZGVmaW5lZCxcclxuXHJcblx0Ly8gY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHllYXIgaXMgY2hhbmdlZFxyXG5cdG9uWWVhckNoYW5nZTogdW5kZWZpbmVkLFxyXG5cclxuXHRvbktleURvd246IHVuZGVmaW5lZCxcclxuXHJcblx0b25EZXN0cm95OiB1bmRlZmluZWRcclxufTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbmZsYXRwaWNrci5sMTBucyA9IHtcclxuXHRlbjoge1xyXG5cdFx0d2Vla2RheXM6IHtcclxuXHRcdFx0c2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXHJcblx0XHRcdGxvbmdoYW5kOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXVxyXG5cdFx0fSxcclxuXHRcdG1vbnRoczoge1xyXG5cdFx0XHRzaG9ydGhhbmQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcclxuXHRcdFx0bG9uZ2hhbmQ6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXHJcblx0XHR9LFxyXG5cdFx0ZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcclxuXHRcdGZpcnN0RGF5T2ZXZWVrOiAwLFxyXG5cdFx0b3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChudGgpIHtcclxuXHRcdFx0dmFyIHMgPSBudGggJSAxMDA7XHJcblx0XHRcdGlmIChzID4gMyAmJiBzIDwgMjEpIHJldHVybiBcInRoXCI7XHJcblx0XHRcdHN3aXRjaCAocyAlIDEwKSB7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0cmV0dXJuIFwic3RcIjtcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRyZXR1cm4gXCJuZFwiO1xyXG5cdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdHJldHVybiBcInJkXCI7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHJldHVybiBcInRoXCI7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRyYW5nZVNlcGFyYXRvcjogXCIgdG8gXCIsXHJcblx0XHR3ZWVrQWJicmV2aWF0aW9uOiBcIldrXCIsXHJcblx0XHRzY3JvbGxUaXRsZTogXCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsXHJcblx0XHR0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIlxyXG5cdH1cclxufTtcclxuXHJcbmZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZShmbGF0cGlja3IubDEwbnMuZW4pO1xyXG5mbGF0cGlja3IubG9jYWxpemUgPSBmdW5jdGlvbiAobDEwbikge1xyXG5cdHJldHVybiBfZXh0ZW5kcyhmbGF0cGlja3IubDEwbnMuZGVmYXVsdCwgbDEwbiB8fCB7fSk7XHJcbn07XHJcbmZsYXRwaWNrci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHRyZXR1cm4gX2V4dGVuZHMoZmxhdHBpY2tyLmRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XHJcbn07XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG5pZiAodHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcblx0XHRyZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xyXG5cdH07XHJcbn1cclxuXHJcbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xyXG5cdHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyBwYXJzZUludChkYXlzLCAxMCkpO1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIG1vZHVsZS5leHBvcnRzID0gZmxhdHBpY2tyO1xyXG4vKlxyXG4gKiBTT0wgLSBTZWFyY2hhYmxlIE9wdGlvbiBMaXN0IGpRdWVyeSBwbHVnaW5cclxuICogVmVyc2lvbiAyLjAuMlxyXG4gKiBodHRwczovL3BiYXVlcm9jaHNlLmdpdGh1Yi5pby9zZWFyY2hhYmxlLW9wdGlvbi1saXN0L1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNSwgUGF0cmljayBCYXVlcm9jaHNlXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcclxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuICpcclxuICovXHJcblxyXG4vKmpzbGludCBub21lbjogdHJ1ZSAqL1xyXG47XHJcbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICB2YXIgU2VhcmNoYWJsZU9wdGlvbkxpc3QgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLiRvcmlnaW5hbEVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAvLyBhbGxvdyBzZXR0aW5nIG9wdGlvbnMgYXMgZGF0YSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBlLmcuIDxzZWxlY3QgZGF0YS1zb2wtb3B0aW9ucz1cInsnYWxsb3dOdWxsU2VsZWN0aW9uJzp0cnVlfVwiPlxyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB0aGlzLiRvcmlnaW5hbEVsZW1lbnQuZGF0YSgnc29sLW9wdGlvbnMnKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gcGx1Z2luIHByb3RvdHlwZVxyXG4gICAgU2VhcmNoYWJsZU9wdGlvbkxpc3QucHJvdG90eXBlID0ge1xyXG5cclxuICAgICAgICBTT0xfT1BUSU9OX0ZPUk1BVDoge1xyXG4gICAgICAgICAgICB0eXBlOiAgICAgJ29wdGlvbicsICAgICAgICAvLyBmaXhlZFxyXG4gICAgICAgICAgICB2YWx1ZTogICAgdW5kZWZpbmVkLCAgICAgICAvLyB2YWx1ZSB0aGF0IHdpbGwgYmUgc3VibWl0dGVkXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSwgICAgICAgICAgIC8vIGJvb2xlYW4gc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLCAgICAgICAgICAgLy8gYm9vbGVhbiBkaXNhYmxlZCBzdGF0ZVxyXG4gICAgICAgICAgICBsYWJlbDogICAgdW5kZWZpbmVkLCAgICAgICAvLyBsYWJlbCBzdHJpbmdcclxuICAgICAgICAgICAgdG9vbHRpcDogIHVuZGVmaW5lZCwgICAgICAgLy8gdG9vbHRpcCBzdHJpbmdcclxuICAgICAgICAgICAgY3NzQ2xhc3M6ICcnICAgICAgICAgICAgICAgLy8gY3VzdG9tIGNzcyBjbGFzcyBmb3IgY29udGFpbmVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTT0xfT1BUSU9OR1JPVVBfRk9STUFUOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICAgICAnb3B0aW9uZ3JvdXAnLCAgICAvLyBmaXhlZFxyXG4gICAgICAgICAgICBsYWJlbDogICAgdW5kZWZpbmVkLCAgICAgICAgLy8gbGFiZWwgc3RyaW5nXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICB1bmRlZmluZWQsICAgICAgICAvLyB0b29sdGlwIHN0cmluZ1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsICAgICAgICAgICAgLy8gYWxsIGNoaWxkcmVuIGRpc2FibGVkIGJvb2xlYW4gcHJvcGVydHlcclxuICAgICAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZCAgICAgICAgIC8vIGFycmF5IG9mIFNPTF9PUFRJT05fRk9STUFUIG9iamVjdHNcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBEQVRBX0tFWTogJ3NvbC1lbGVtZW50JyxcclxuICAgICAgICBXSU5ET1dfRVZFTlRTX0tFWTogJ3NvbC13aW5kb3ctZXZlbnRzJyxcclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgZGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsICAgICAgICAgICAvLyBuYW1lIGF0dHJpYnV0ZSwgY2FuIGFsc28gYmUgc2V0IGFzIG5hbWU9XCJcIiBhdHRyaWJ1dGUgb24gb3JpZ2luYWwgZWxlbWVudCBvciBkYXRhLXNvbC1uYW1lPVwiXCJcclxuXHJcbiAgICAgICAgICAgIHRleHRzOiB7XHJcbiAgICAgICAgICAgICAgICBub0l0ZW1zQXZhaWxhYmxlOiAnTm8gZW50cmllcyBmb3VuZCcsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdE5vbmU6ICdTZWxlY3Qgbm9uZScsXHJcbiAgICAgICAgICAgICAgICBxdWlja0RlbGV0ZTogJyZ0aW1lczsnLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNocGxhY2Vob2xkZXI6ICdDbGljayBoZXJlIHRvIHNlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YTogJ1N0aWxsIGxvYWRpbmcgZGF0YS4uLicsXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NlbGVjdGVkOiAneyRhfSBpdGVtcyBzZWxlY3RlZCdcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb25SZW5kZXJlZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb25PcGVuOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkNvbnRhaW5lcllQb3MgPSB0aGlzLiRpbnB1dC5vZmZzZXQoKS50b3AgLSB0aGlzLmNvbmZpZy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKCkgKyB0aGlzLiRpbnB1dC5vdXRlckhlaWdodChmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lckhlaWdodCA9IHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lckJvdHRvbSA9IHNlbGVjdGlvbkNvbnRhaW5lcllQb3MgKyBzZWxlY3Rpb25Db250YWluZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0ID0gdGhpcy5jb25maWcuZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuY29uZmlnLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AoKSA8IHNlbGVjdGlvbkNvbnRhaW5lckJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29udGFpbmVyV2lkdGggPSB0aGlzLiRpbm5lckNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSAtIHBhcnNlSW50KHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJyksIDEwKSAtIHBhcnNlSW50KHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiB0aGUgcG9wdXAgYWJvdmUgdGhlIGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lcllQb3MgPSB0aGlzLiRpbnB1dC5vZmZzZXQoKS50b3AgLSBzZWxlY3Rpb25Db250YWluZXJIZWlnaHQgLSB0aGlzLmNvbmZpZy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKCkgKyBwYXJzZUludCh0aGlzLiRzZWxlY3Rpb25Db250YWluZXIuY3NzKCdib3JkZXItYm90dG9tLXdpZHRoJyksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NvbC1zZWxlY3Rpb24tYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc29sLXNlbGVjdGlvbi10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc29sLXNlbGVjdGlvbi10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb2wtc2VsZWN0aW9uLWJvdHRvbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJGlubmVyQ29udGFpbmVyLmNzcygnZGlzcGxheScpICE9PSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lciBoYXMgYSBjZXJ0YWluIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugc2VsZWN0aW9uIGNvbnRhaW5lciBhIGJpdCB3aWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db250YWluZXJXaWR0aCA9IHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoICogMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9yZGVyUmFkaXVzU2VsZWN0b3IgPSBkaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCA/ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycgOiAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gYm9yZGVyIHJhZGl1cyBvbiB0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKGJvcmRlclJhZGl1c1NlbGVjdG9yLCAnaW5pdGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJGFjdGlvbkJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFjdGlvbkJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKGJvcmRlclJhZGl1c1NlbGVjdG9yLCAnaW5pdGlhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb25Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygndG9wJywgTWF0aC5mbG9vcihzZWxlY3Rpb25Db250YWluZXJZUG9zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnbGVmdCcsIE1hdGguZmxvb3IodGhpcy4kY29udGFpbmVyLm9mZnNldCgpLmxlZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgPSBkaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdEFsbE1heEl0ZW1zVGhyZXNob2xkOiAzMCxcclxuICAgICAgICAgICAgc2hvd1NlbGVjdEFsbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm11bHRpcGxlICYmIHRoaXMuY29uZmlnLnNlbGVjdEFsbE1heEl0ZW1zVGhyZXNob2xkICYmIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPD0gdGhpcy5jb25maWcuc2VsZWN0QWxsTWF4SXRlbXNUaHJlc2hvbGQ7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB1c2VCcmFja2V0UGFyYW1ldGVyczogZmFsc2UsXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXI6IHVuZGVmaW5lZCwgLy8ganF1ZXJ5IGVsZW1lbnQgd2hlcmUgdGhlIHJlc3VsdHMgc2hvdWxkIGJlIGFwcGVuZGVkXHJcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSwgLy8gY2xvc2Ugd2hlbiB1c2VyIGNsaWNrZWQgJ3NlbGVjdCBhbGwnIG9yICdkZXNlbGVjdCBhbGwnXHJcbiAgICAgICAgICAgIHNob3dTZWxlY3Rpb25CZWxvd0xpc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxvd051bGxTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGNvbnZlcnRlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBhc3luY0JhdGNoU2l6ZTogMzAwLFxyXG4gICAgICAgICAgICBtYXhTaG93OiAwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMsIHRoaXMubWV0YWRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsTmFtZSA9IHRoaXMuX2dldE5hbWVBdHRyaWJ1dGUoKSxcclxuICAgICAgICAgICAgICAgIHNvbCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9yaWdpbmFsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0Vycm9yTGFiZWwoJ25hbWUgYXR0cmlidXRlIGlzIHJlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG9sZCBJRSBkb2VzIG5vdCBzdXBwb3J0IHRyaW1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnRyaW0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm11bHRpcGxlID0gdGhpcy5jb25maWcubXVsdGlwbGUgfHwgdGhpcy4kb3JpZ2luYWxFbGVtZW50LmF0dHIoJ211bHRpcGxlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnNjcm9sbFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2Nyb2xsVGFyZ2V0ID0gJCh3aW5kb3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcldpbmRvd0V2ZW50c0lmTmVjY2Vzc2FyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplVWlFbGVtZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplSW5wdXRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc29sLl9pbml0aWFsaXplRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRha2Ugb3JpZ2luYWwgZm9ybSBlbGVtZW50IG91dCBvZiBmb3JtIHN1Ym1pc3Npb25cclxuICAgICAgICAgICAgICAgIC8vIGJ5IHJlbW92aW5nIHRoZSBuYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgc29sLiRvcmlnaW5hbEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YShzb2wuREFUQV9LRVksIHNvbClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignbmFtZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ3NvbC1uYW1lJywgb3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRvcmlnaW5hbEVsZW1lbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5jc3MoJ3Zpc2liaWxpdHknLCAnaW5pdGlhbCcpXHJcbiAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX2dldE5hbWVBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm5hbWUgfHwgdGhpcy4kb3JpZ2luYWxFbGVtZW50LmRhdGEoJ3NvbC1uYW1lJykgfHwgdGhpcy4kb3JpZ2luYWxFbGVtZW50LmF0dHIoJ25hbWUnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaG93cyBhbiBlcnJvciBsYWJlbFxyXG4gICAgICAgIF9zaG93RXJyb3JMYWJlbDogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyICRlcnJvck1lc3NhZ2UgPSAkKCc8ZGl2IHN0eWxlPVwiY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgLz4nKS5odG1sKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgJGVycm9yTWVzc2FnZS5pbnNlcnRBZnRlcih0aGlzLiRvcmlnaW5hbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLmFwcGVuZCgkZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGNsaWNrIGhhbmRsZXIgdG8gZGV0ZXJtaW5lIHdoZW4gdG8gdHJpZ2dlciB0aGUgY2xvc2UgZXZlbnRcclxuICAgICAgICBfcmVnaXN0ZXJXaW5kb3dFdmVudHNJZk5lY2Nlc3Nhcnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3dbdGhpcy5XSU5ET1dfRVZFTlRTX0tFWV0pIHtcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGNsaWNrZWQgaW5zaWRlIGEgc29sIGVsZW1lbnQgY2xvc2UgYWxsIG90aGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgY2xvc2UgYWxsIHNvbCBjb250YWluZXJzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkY2xpY2tlZEVsZW1lbnQgPSAkKGV2ZW50LnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjbG9zZXN0U2VsZWN0aW9uQ29udGFpbmVyID0gJGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJy5zb2wtc2VsZWN0aW9uLWNvbnRhaW5lcicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2xvc2VzdElubmVyQ29udGFpbmVyID0gJGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJy5zb2wtaW5uZXItY29udGFpbmVyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjbGlja2VkV2l0aGluVGhpc1NvbENvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjbG9zZXN0SW5uZXJDb250YWluZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjbGlja2VkV2l0aGluVGhpc1NvbENvbnRhaW5lciA9ICRjbG9zZXN0SW5uZXJDb250YWluZXIuZmlyc3QoKS5wYXJlbnQoJy5zb2wtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkY2xvc2VzdFNlbGVjdGlvbkNvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNsaWNrZWRXaXRoaW5UaGlzU29sQ29udGFpbmVyID0gJGNsb3Nlc3RTZWxlY3Rpb25Db250YWluZXIuZmlyc3QoKS5wYXJlbnQoJy5zb2wtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuc29sLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ub3QoJGNsaWNrZWRXaXRoaW5UaGlzU29sQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShTZWFyY2hhYmxlT3B0aW9uTGlzdC5wcm90b3R5cGUuREFUQV9LRVkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgd2UgYWxyZWFkeSByZWdpc3RlcmVkIHRoZSBnbG9iYWwgZXZlbnRzXHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbdGhpcy5XSU5ET1dfRVZFTlRTX0tFWV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gYWRkIHNvbCB1aSBlbGVtZW50c1xyXG4gICAgICAgIF9pbml0aWFsaXplVWlFbGVtZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU2Nyb2xsV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2VsZi5jb25maWcuZXZlbnRzLm9uU2Nyb2xsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmV2ZW50cy5vblNjcm9sbC5jYWxsKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cInRleHRcIi8+JylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdwbGFjZWhvbGRlcicsIHRoaXMuY29uZmlnLnRleHRzLnNlYXJjaHBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJG5vUmVzdWx0c0l0ZW0gPSAkKCc8ZGl2IGNsYXNzPVwic29sLW5vLXJlc3VsdHNcIi8+JykuaHRtbCh0aGlzLmNvbmZpZy50ZXh0cy5ub0l0ZW1zQXZhaWxhYmxlKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGxvYWRpbmdEYXRhID0gJCgnPGRpdiBjbGFzcz1cInNvbC1sb2FkaW5nLWRhdGFcIi8+JykuaHRtbCh0aGlzLmNvbmZpZy50ZXh0cy5sb2FkaW5nRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHhJdGVtc1NlbGVjdGVkID0gJCgnPGRpdiBjbGFzcz1cInNvbC1yZXN1bHRzLWNvdW50XCIvPicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kY2FyZXQgPSAkKCc8ZGl2IGNsYXNzPVwic29sLWNhcmV0LWNvbnRhaW5lclwiPjxiIGNsYXNzPVwic29sLWNhcmV0XCIvPjwvZGl2PicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkaW5wdXRDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwic29sLWlucHV0LWNvbnRhaW5lclwiLz4nKS5hcHBlbmQodGhpcy4kaW5wdXQpO1xyXG4gICAgICAgICAgICB0aGlzLiRpbm5lckNvbnRhaW5lciA9ICQoJzxkaXYgY2xhc3M9XCJzb2wtaW5uZXItY29udGFpbmVyXCIvPicpLmFwcGVuZCgkaW5wdXRDb250YWluZXIpLmFwcGVuZCh0aGlzLiRjYXJldCk7XHJcbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJzb2wtc2VsZWN0aW9uXCIvPicpO1xyXG4gICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb25Db250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwic29sLXNlbGVjdGlvbi1jb250YWluZXJcIi8+JylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy4kbm9SZXN1bHRzSXRlbSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy4kbG9hZGluZ0RhdGEpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKHRoaXMuJHNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwic29sLWNvbnRhaW5lclwiLz4nKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEodGhpcy5EQVRBX0tFWSwgdGhpcylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQodGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLiRpbm5lckNvbnRhaW5lcilcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRCZWZvcmUodGhpcy4kb3JpZ2luYWxFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBzZWxlY3RlZCBpdGVtcyBkaXNwbGF5IGNvbnRhaW5lclxyXG4gICAgICAgICAgICB0aGlzLiRzaG93U2VsZWN0aW9uQ29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cInNvbC1jdXJyZW50LXNlbGVjdGlvblwiLz4nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkZWwgPSB0aGlzLmNvbmZpZy5yZXN1bHRzQ29udGFpbmVyIHx8IHRoaXMuJGlubmVyQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXN1bHRzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93U2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZFRvKCRlbClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5zaG93U2VsZWN0aW9uQmVsb3dMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2hvd1NlbGVjdGlvbkNvbnRhaW5lci5pbnNlcnRBZnRlcigkZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaG93U2VsZWN0aW9uQ29udGFpbmVyLmluc2VydEJlZm9yZSgkZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gZGltZW5zaW9uc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24uY3NzKCdtYXgtaGVpZ2h0JywgdGhpcy5jb25maWcubWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGlubGluZSBjc3MgY2xhc3NlcyBhbmQgc3R5bGVzXHJcbiAgICAgICAgICAgIHZhciBjc3NDbGFzc2VzQXNTdHJpbmcgPSB0aGlzLiRvcmlnaW5hbEVsZW1lbnQuYXR0cignY2xhc3MnKSxcclxuICAgICAgICAgICAgICAgIGNzc1N0eWxlc0FzU3RyaW5nID0gdGhpcy4kb3JpZ2luYWxFbGVtZW50LmF0dHIoJ3N0eWxlJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzc0xpc3QgPSBbXSxcclxuICAgICAgICAgICAgICAgIHN0eWxlc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjc3NDbGFzc2VzQXNTdHJpbmcgJiYgY3NzQ2xhc3Nlc0FzU3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzTGlzdCA9IGNzc0NsYXNzZXNBc1N0cmluZy5zcGxpdCgvXFxzKy8pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGNzcyBjbGFzc2VzIHRvICRjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3NzQ2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKGNzc0NsYXNzTGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjc3NTdHlsZXNBc1N0cmluZyAmJiBjc3NTdHlsZXNBc1N0cmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNMaXN0ID0gY3NzU3R5bGVzQXNTdHJpbmcuc3BsaXQoL1xcOy8pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGNzcyBpbmxpbmUgc3R5bGVzIHRvICRjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZCA9IHN0eWxlc0xpc3RbaV0uc3BsaXQoL1xccypcXDpcXHMqL2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXR0ZWRbMF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoZWlnaHQnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQgcHJvcGVydHksIGFwcGx5IHRvIGlubmVyQ29udGFpbmVyIGluc3RlYWQgb2Ygb3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGlubmVyQ29udGFpbmVyLmNzcyhzcGxpdHRlZFswXS50cmltKCksIHNwbGl0dGVkWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIuY3NzKHNwbGl0dGVkWzBdLnRyaW0oKSwgc3BsaXR0ZWRbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJG9yaWdpbmFsRWxlbWVudC5jc3MoJ2Rpc3BsYXknKSAhPT0gJ2Jsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCB0aGlzLl9nZXRBY3R1YWxDc3NQcm9wZXJ0eVZhbHVlKHRoaXMuJG9yaWdpbmFsRWxlbWVudCwgJ3dpZHRoJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmV2ZW50cy5vblJlbmRlcmVkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLm9uUmVuZGVyZWQuY2FsbCh0aGlzLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9nZXRBY3R1YWxDc3NQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiAoJGVsZW1lbnQsIHByb3BlcnR5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZG9tRWxlbWVudCA9ICRlbGVtZW50LmdldCgwKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRGlzcGxheVByb3BlcnR5ID0gJGVsZW1lbnQuY3NzKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgaW52aXNpYmxlIHRvIGdldCBvcmlnaW5hbCB3aWR0aCBzZXR0aW5nIGluc3RlYWQgb2YgdHJhbnNsYXRlZCB0byBweFxyXG4gICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzA3NjkxI2M3XHJcbiAgICAgICAgICAgICRlbGVtZW50LmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9tRWxlbWVudC5jdXJyZW50U3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb21FbGVtZW50LmN1cnJlbnRTdHlsZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGRvbUVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCBvcmlnaW5hbERpc3BsYXlQcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuY3NzKHByb3BlcnR5KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfaW5pdGlhbGl6ZUlucHV0RXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGZvcm0gZXZlbnRcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgJGZvcm0gPSB0aGlzLiRpbnB1dC5wYXJlbnRzKCdmb3JtJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkZm9ybSAmJiAkZm9ybS5sZW5ndGggPT09IDEgJiYgISRmb3JtLmRhdGEodGhpcy5XSU5ET1dfRVZFTlRTX0tFWSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNldEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlZEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJy5zb2wtb3B0aW9uIGlucHV0JykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpdGVtID0gJChpdGVtKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9ICRpdGVtLmRhdGEoJ3NvbC1pdGVtJykuc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGl0ZW0ucHJvcCgnY2hlY2tlZCcpICE9PSBpbml0aWFsU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ3NvbC1jaGFuZ2UnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGFuZ2VkSXRlbXMucHVzaCgkaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjaGFuZ2VkSXRlbXMubGVuZ3RoID4gMCAmJiAkLmlzRnVuY3Rpb24oc2VsZi5jb25maWcuZXZlbnRzLm9uQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5ldmVudHMub25DaGFuZ2UuY2FsbChzZWxmLCBzZWxmLCAkY2hhbmdlZEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtLm9uKCdyZXNldCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZm9ydHVuYXRlbHkgdGhlIHJlc2V0IGV2ZW50IGdldHMgZmlyZWQgX2JlZm9yZV9cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaW5wdXRzIGFyZSBhY3R1YWxseSByZXNldC4gVGhlIG9ubHkgcG9zc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBvdmVyY29tZSB0aGlzIGlzIHRvIHNldCBhbiBpbnRlcnZhbCB0byBleGVjdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3duIHNjcmlwdHMgc29tZSB0aW1lIGFmdGVyIHRoZSBhY3R1YWwgcmVzZXQgZXZlbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVmb3JlIGZpZWxkcyBhcmUgYWN0dWFsbHkgcmVzZXQgYnkgdGhlIGJyb3dzZXJcclxuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkZWQgdG8gcmVzZXQgbmV3bHkgY2hlY2tlZCBmaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICByZXNldEZ1bmN0aW9uLmNhbGwoc2VsZik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWVvdXQgZm9yIHNlbGVjdGlvbiBhZnRlciBmb3JtIHJlc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZGVkIHRvIHJlc2V0IHByZXZpb3VzbHkgY2hlY2tlZCBmaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGdW5jdGlvbi5jYWxsKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybS5kYXRhKHRoaXMuV0lORE9XX0VWRU5UU19LRVksIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0ZXh0IGlucHV0IGV2ZW50c1xyXG4gICAgICAgICAgICB0aGlzLiRpbnB1dFxyXG4gICAgICAgICAgICAgICAgLmZvY3VzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub24oJ3Byb3BlcnR5Y2hhbmdlIGlucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlPT0ncHJvcGVydHljaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKT09J3ZhbHVlJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9hcHBseVNlYXJjaFRlcm1GaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBldmVudCBoYW5kbGluZyBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgd2hlbiB0aGVyZSBhcmUgcmVzdWx0cyB0byBiZSBzaG93blxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi4kbm9SZXN1bHRzSXRlbS5pcygnOnZpc2libGUnKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50SGlnaGxpZ2h0ZWRPcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbmV4dEhpZ2hsaWdodGVkT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFsbFZpc2libGVPcHRpb25zID0gc2VsZi4kc2VsZWN0aW9uLmZpbmQoJy5zb2wtb3B0aW9uOnZpc2libGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSA0MCB8fCBrZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3cgdXAgb3IgZG93biB0byBzZWxlY3QgYW4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2V0S2V5Qm9hcmROYXZpZ2F0aW9uTW9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudEhpZ2hsaWdodGVkT3B0aW9uID0gc2VsZi4kc2VsZWN0aW9uLmZpbmQoJy5zb2wtb3B0aW9uLmtleWJvYXJkLXNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uVmFsdWUgPSAoa2V5Q29kZSA9PT0gMzgpID8gLTEgOiAxOyAgIC8vIG5lZ2F0aXZlIGZvciB1cCwgcG9zaXRpdmUgZm9yIGRvd25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZk5leHRIaWdobGlnaHRlZE9wdGlvbiA9ICRhbGxWaXNpYmxlT3B0aW9ucy5pbmRleCgkY3VycmVudEhpZ2hsaWdodGVkT3B0aW9uKSArIGRpcmVjdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZOZXh0SGlnaGxpZ2h0ZWRPcHRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhPZk5leHRIaWdobGlnaHRlZE9wdGlvbiA9ICRhbGxWaXNpYmxlT3B0aW9ucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleE9mTmV4dEhpZ2hsaWdodGVkT3B0aW9uID49ICRhbGxWaXNpYmxlT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleE9mTmV4dEhpZ2hsaWdodGVkT3B0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudEhpZ2hsaWdodGVkT3B0aW9uLnJlbW92ZUNsYXNzKCdrZXlib2FyZC1zZWxlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRuZXh0SGlnaGxpZ2h0ZWRPcHRpb24gPSAkKCRhbGxWaXNpYmxlT3B0aW9uc1tpbmRleE9mTmV4dEhpZ2hsaWdodGVkT3B0aW9uXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2tleWJvYXJkLXNlbGVjdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5zY3JvbGxUb3Aoc2VsZi4kc2VsZWN0aW9uLnNjcm9sbFRvcCgpICsgJG5leHRIaWdobGlnaHRlZE9wdGlvbi5wb3NpdGlvbigpLnRvcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYua2V5Ym9hcmROYXZpZ2F0aW9uTW9kZSA9PT0gdHJ1ZSAmJiBrZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9nZ2xlIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbSB3aXRoIHNwYWNlIGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRIaWdobGlnaHRlZE9wdGlvbiA9IHNlbGYuJHNlbGVjdGlvbi5maW5kKCcuc29sLW9wdGlvbi5rZXlib2FyZC1zZWxlY3Rpb24gaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50SGlnaGxpZ2h0ZWRPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsICEkY3VycmVudEhpZ2hsaWdodGVkT3B0aW9uLnByb3AoJ2NoZWNrZWQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvbnQgdHJpZ2dlciBhbnkgZXZlbnRzIGluIHRoZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5rZXlib2FyZE5hdmlnYXRpb25Nb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZXRLZXlCb2FyZE5hdmlnYXRpb25Nb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLiRpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgY2xvc2luZyBvZiBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGNhcmV0LnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRpbnB1dC50cmlnZ2VyKCdibHVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBpbnB1dCBhbmQgcmVzdWx0IGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kaW5wdXQudmFsKCcnKS50cmlnZ2VyKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAxNiB8fCBrZXlDb2RlID09PSAxNyB8fCBrZXlDb2RlID09PSAxOCB8fCBrZXlDb2RlID09PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGV2ZW50cyBsaWtlIHNoaWZ0IGFuZCBjb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfc2V0S2V5Qm9hcmROYXZpZ2F0aW9uTW9kZTogZnVuY3Rpb24gKGtleWJvYXJkTmF2aWdhdGlvbk9uKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5Ym9hcmROYXZpZ2F0aW9uT24pIHtcclxuICAgICAgICAgICAgICAgIC8vIG9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkTmF2aWdhdGlvbk1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLmFkZENsYXNzKCdzb2wta2V5Ym9hcmQtbmF2aWdhdGlvbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2ZmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkTmF2aWdhdGlvbk1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc29sLW9wdGlvbi5rZXlib2FyZC1zZWxlY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLnJlbW92ZUNsYXNzKCdzb2wta2V5Ym9hcmQtbmF2aWdhdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLmZpbmQoJy5zb2wtb3B0aW9uLmtleWJvYXJkLXNlbGVjdGlvbicpLnJlbW92ZUNsYXNzKCdrZXlib2FyZC1zZWxlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5zY3JvbGxUb3AoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfYXBwbHlTZWFyY2hUZXJtRmlsdGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtcyB8fCB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VhcmNoVGVybSA9IHRoaXMuJGlucHV0LnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgbG93ZXJDYXNlZCA9IChzZWFyY2hUZXJtIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2hvdyBwcmV2aW91c2x5IGZpbHRlcmVkIGVsZW1lbnRzIGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5maW5kKCcuc29sLWZpbHRlcmVkLXNlYXJjaCcpLnJlbW92ZUNsYXNzKCdzb2wtZmlsdGVyZWQtc2VhcmNoJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE5vUmVzdWx0c0l0ZW1WaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb3dlckNhc2VkLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kVGVybXModGhpcy5pdGVtcywgbG93ZXJDYXNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGwgb25TY3JvbGwgdG8gcG9zaXRpb24gdGhlIHBvcHVwIGFnYWluXHJcbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBpZiBzaG93aW5nIHBvcHVwIGFib3ZlIGxpc3RcclxuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5ldmVudHMub25TY3JvbGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmVudHMub25TY3JvbGwuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9maW5kVGVybXM6IGZ1bmN0aW9uIChkYXRhQXJyYXksIHNlYXJjaFRlcm0pIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRhQXJyYXkgfHwgISQuaXNBcnJheShkYXRhQXJyYXkpIHx8IGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXQga2V5Ym9hcmQgbmF2aWdhdGlvbiBtb2RlIHdoZW4gYXBwbHlpbmcgbmV3IGZpbHRlclxyXG4gICAgICAgICAgICB0aGlzLl9zZXRLZXlCb2FyZE5hdmlnYXRpb25Nb2RlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhQXJyYXksIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSBpdGVtLmRpc3BsYXlFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50U2VhcmNoYWJsZVRlcm1zID0gKGl0ZW0ubGFiZWwgKyAnICcgKyBpdGVtLnRvb2x0aXApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFNlYXJjaGFibGVUZXJtcy5pbmRleE9mKHNlYXJjaFRlcm0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygnc29sLWZpbHRlcmVkLXNlYXJjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZmluZFRlcm1zKGl0ZW0uY2hpbGRyZW4sIHNlYXJjaFRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbW91bnRPZlVuZmlsdGVyZWRDaGlsZHJlbiA9IGl0ZW0uZGlzcGxheUVsZW1lbnQuZmluZCgnLnNvbC1vcHRpb246bm90KC5zb2wtZmlsdGVyZWQtc2VhcmNoKScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZVbmZpbHRlcmVkQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzcGxheUVsZW1lbnQuYWRkQ2xhc3MoJ3NvbC1maWx0ZXJlZC1zZWFyY2gnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0Tm9SZXN1bHRzSXRlbVZpc2libGUodGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLmZpbmQoJy5zb2wtb3B0aW9uOm5vdCguc29sLWZpbHRlcmVkLXNlYXJjaCknKS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9pbml0aWFsaXplRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9kZXRlY3REYXRhRnJvbU9yaWdpbmFsRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuX2ZldGNoRGF0YUZyb21GdW5jdGlvbih0aGlzLmNvbmZpZy5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkLmlzQXJyYXkodGhpcy5jb25maWcuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9mZXRjaERhdGFGcm9tQXJyYXkodGhpcy5jb25maWcuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmRhdGEgPT09ICh0eXBlb2YgJ2Egc3RyaW5nJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRJdGVtc0Zyb21VcmwodGhpcy5jb25maWcuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93RXJyb3JMYWJlbCgnVW5rbm93biBkYXRhIHR5cGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbmUgcmlnaHQgYXdheSAtPiBpbnZva2UgcG9zdHByb2Nlc3NpbmdcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NEYXRhSXRlbXModGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfZGV0ZWN0RGF0YUZyb21PcmlnaW5hbEVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJG9yaWdpbmFsRWxlbWVudC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBzb2xEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHRoaXMuJG9yaWdpbmFsRWxlbWVudC5jaGlsZHJlbigpLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSAkKGl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGFnTmFtZSA9ICRpdGVtLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xEYXRhSXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1UYWdOYW1lID09PSAnb3B0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xEYXRhSXRlbSA9IHNlbGYuX3Byb2Nlc3NTZWxlY3RPcHRpb24oJGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29sRGF0YUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbERhdGEucHVzaChzb2xEYXRhSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1UYWdOYW1lID09PSAnb3B0Z3JvdXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbERhdGFJdGVtID0gc2VsZi5fcHJvY2Vzc1NlbGVjdE9wdGdyb3VwKCRpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvbERhdGFJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xEYXRhLnB1c2goc29sRGF0YUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2hvd0Vycm9yTGFiZWwoJ0ludmFsaWQgZWxlbWVudCBmb3VuZCBpbiBzZWxlY3Q6ICcgKyBpdGVtVGFnTmFtZSArICcuIE9ubHkgb3B0aW9uIGFuZCBvcHRncm91cCBhcmUgYWxsb3dlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZUNvbnZlcnRlcklmTmVjY2Vzc2FyeShzb2xEYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRvcmlnaW5hbEVsZW1lbnQuZGF0YSgnc29sLWRhdGEnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvbERhdGFBdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuJG9yaWdpbmFsRWxlbWVudC5kYXRhKCdzb2wtZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZUNvbnZlcnRlcklmTmVjY2Vzc2FyeShzb2xEYXRhQXR0cmlidXRlVmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0Vycm9yTGFiZWwoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgZGF0YSBmcm9tIG9yaWdpbmFsIGVsZW1lbnQuIE11c3QgYmUgYSBzZWxlY3Qgb3IgZGF0YSBtdXN0IGJlIHByb3ZpZGVkIGFzIGRhdGEtc29sLWRhdGE9XCJcIiBhdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9wcm9jZXNzU2VsZWN0T3B0aW9uOiBmdW5jdGlvbiAoJG9wdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIHRoaXMuU09MX09QVElPTl9GT1JNQVQsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAkb3B0aW9uLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICRvcHRpb24ucHJvcCgnc2VsZWN0ZWQnKSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJG9wdGlvbi5hdHRyKCdjbGFzcycpLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICRvcHRpb24uaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJG9wdGlvbi5hdHRyKCd0aXRsZScpLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJG9wdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfcHJvY2Vzc1NlbGVjdE9wdGdyb3VwOiBmdW5jdGlvbiAoJG9wdGdyb3VwKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHNvbE9wdGlvbmdyb3VwID0gJC5leHRlbmQoe30sIHRoaXMuU09MX09QVElPTkdST1VQX0ZPUk1BVCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkb3B0Z3JvdXAuYXR0cignbGFiZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAkb3B0Z3JvdXAuYXR0cigndGl0bGUnKSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJG9wdGdyb3VwLnByb3AoJ2Rpc2FibGVkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG9wdGdyb3VwQ2hpbGRyZW4gPSAkb3B0Z3JvdXAuY2hpbGRyZW4oJ29wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKG9wdGdyb3VwQ2hpbGRyZW4sIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjaGlsZCA9ICQoaXRlbSksXHJcbiAgICAgICAgICAgICAgICAgICAgc29sT3B0aW9uID0gc2VsZi5fcHJvY2Vzc1NlbGVjdE9wdGlvbigkY2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGV4cGxpY2l0bHkgZGlzYWJsZSBjaGlsZHJlbiB3aGVuIG9wdGdyb3VwIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoc29sT3B0aW9uZ3JvdXAuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb2xPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNvbE9wdGlvbmdyb3VwLmNoaWxkcmVuLnB1c2goc29sT3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc29sT3B0aW9uZ3JvdXA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX2ZldGNoRGF0YUZyb21GdW5jdGlvbjogZnVuY3Rpb24gKGRhdGFGdW5jdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlQ29udmVydGVySWZOZWNjZXNzYXJ5KGRhdGFGdW5jdGlvbih0aGlzKSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX2ZldGNoRGF0YUZyb21BcnJheTogZnVuY3Rpb24gKGRhdGFBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlQ29udmVydGVySWZOZWNjZXNzYXJ5KGRhdGFBcnJheSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX2xvYWRJdGVtc0Zyb21Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAkLmFqYXgodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoYWN0dWFsRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXRlbXMgPSBzZWxmLl9pbnZva2VDb252ZXJ0ZXJJZk5lY2Nlc3NhcnkoYWN0dWFsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcHJvY2Vzc0RhdGFJdGVtcyhzZWxmLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dFcnJvckxhYmVsKCdFcnJvciBsb2FkaW5nIGZyb20gdXJsICcgKyB1cmwgKyAnOiAnICsgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfaW52b2tlQ29udmVydGVySWZOZWNjZXNzYXJ5OiBmdW5jdGlvbiAoZGF0YUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY29udmVydGVyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbnZlcnRlci5jYWxsKHRoaXMsIHRoaXMsIGRhdGFJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFJdGVtcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfcHJvY2Vzc0RhdGFJdGVtczogZnVuY3Rpb24gKHNvbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmICghc29sSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dFcnJvckxhYmVsKCdEYXRhIGl0ZW1zIG5vdCBwcmVzZW50LiBNYXliZSB0aGUgY29udmVydGVyIGRpZCBub3QgcmV0dXJuIGFueSB2YWx1ZXMnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvbEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Tm9SZXN1bHRzSXRlbVZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkaW5nRGF0YS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMCxcclxuICAgICAgICAgICAgICAgIGRhdGFQcm9jZXNzZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIFwibG9hZGluZyBkYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRsb2FkaW5nRGF0YS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplU2VsZWN0QWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5jb25maWcuZXZlbnRzLm9uSW5pdGlhbGl6ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV2ZW50cy5vbkluaXRpYWxpemVkLmNhbGwodGhpcywgdGhpcywgc29sSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsb29wRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QmF0Y2ggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudEJhdGNoKysgPCBzZWxmLmNvbmZpZy5hc3luY0JhdGNoU2l6ZSAmJiBuZXh0SW5kZXggPCBzb2xJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHNvbEl0ZW1zW25leHRJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gc2VsZi5TT0xfT1BUSU9OX0ZPUk1BVC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZW5kZXJPcHRpb24oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSBzZWxmLlNPTF9PUFRJT05HUk9VUF9GT1JNQVQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVuZGVyT3B0aW9uZ3JvdXAoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9zaG93RXJyb3JMYWJlbCgnSW52YWxpZCBpdGVtIHR5cGUgZm91bmQgJyArIGl0ZW0udHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPj0gc29sSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9jZXNzZWRGdW5jdGlvbi5jYWxsKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcEZ1bmN0aW9uLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhcnQgYXN5bmMgcmVuZGVyaW5nIG9mIGh0bWwgZWxlbWVudHNcclxuICAgICAgICAgICAgbG9vcEZ1bmN0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX3JlbmRlck9wdGlvbjogZnVuY3Rpb24gKHNvbE9wdGlvbiwgJG9wdGlvbmFsVGFyZ2V0Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICRhY3R1YWxUYXJnZXRDb250YWluZXIgPSAkb3B0aW9uYWxUYXJnZXRDb250YWluZXIgfHwgdGhpcy4kc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgJGlucHV0RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICRsYWJlbFRleHQgPSAkKCc8ZGl2IGNsYXNzPVwic29sLWxhYmVsLXRleHRcIi8+JylcclxuICAgICAgICAgICAgICAgICAgICAuaHRtbChzb2xPcHRpb24ubGFiZWwudHJpbSgpLmxlbmd0aCA9PT0gMCA/ICcmbmJzcDsnIDogc29sT3B0aW9uLmxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhzb2xPcHRpb24uY3NzQ2xhc3MpLFxyXG4gICAgICAgICAgICAgICAgJGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgJGRpc3BsYXlFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgaW5wdXROYW1lID0gdGhpcy5fZ2V0TmFtZUF0dHJpYnV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgY2hlY2tib3hlc1xyXG4gICAgICAgICAgICAgICAgJGlucHV0RWxlbWVudCA9ICQoJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNvbC1jaGVja2JveFwiLz4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcudXNlQnJhY2tldFBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWUgKz0gJ1tdJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHVzZSByYWRpbyBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAkaW5wdXRFbGVtZW50ID0gJCgnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic29sLXJhZGlvXCIvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gc2VsZWN0ZWQgbm90aWZ5IGFsbCBvdGhlcnMgb2YgYmVpbmcgZGVzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb25Db250YWluZXIuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgaW5wdXROYW1lICsgJ1wiXScpLm5vdCgkKHRoaXMpKS50cmlnZ2VyKCdzb2wtZGVzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignc29sLWRlc2VsZWN0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZGlzcGxheSBzZWxlY3Rpb24gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGFsc28gYmV0dGVyIHNob3cgaXQgaW5saW5lIGluc3RlYWQgb2YgYWJvdmUgb3IgYmVsb3cgdG8gc2F2ZSBzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZW1vdmVTZWxlY3Rpb25EaXNwbGF5SXRlbSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGlucHV0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNraXBDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudHJpZ2dlcignc29sLWNoYW5nZScsIHNraXBDYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdzb2wtY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBza2lwQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZWxlY3Rpb25DaGFuZ2UoJCh0aGlzKSwgc2tpcENhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZGF0YSgnc29sLWl0ZW0nLCBzb2xPcHRpb24pXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHNvbE9wdGlvbi5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHNvbE9wdGlvbi5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCduYW1lJywgaW5wdXROYW1lKVxyXG4gICAgICAgICAgICAgICAgLnZhbChzb2xPcHRpb24udmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgJGxhYmVsID0gJCgnPGxhYmVsIGNsYXNzPVwic29sLWxhYmVsXCIvPicpXHJcbiAgICAgICAgICAgICAgICAuYXR0cigndGl0bGUnLCBzb2xPcHRpb24udG9vbHRpcClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJGlucHV0RWxlbWVudClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJGxhYmVsVGV4dCk7XHJcblxyXG4gICAgICAgICAgICAkZGlzcGxheUVsZW1lbnQgPSAkKCc8ZGl2IGNsYXNzPVwic29sLW9wdGlvblwiLz4nKS5hcHBlbmQoJGxhYmVsKTtcclxuICAgICAgICAgICAgc29sT3B0aW9uLmRpc3BsYXlFbGVtZW50ID0gJGRpc3BsYXlFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgJGFjdHVhbFRhcmdldENvbnRhaW5lci5hcHBlbmQoJGRpc3BsYXlFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzb2xPcHRpb24uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGlvbkRpc3BsYXlJdGVtKCRpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX3JlbmRlck9wdGlvbmdyb3VwOiBmdW5jdGlvbiAoc29sT3B0aW9uZ3JvdXApIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgJGdyb3VwQ2FwdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJzb2wtb3B0aW9uZ3JvdXAtbGFiZWxcIi8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndGl0bGUnLCBzb2xPcHRpb25ncm91cC50b29sdGlwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKHNvbE9wdGlvbmdyb3VwLmxhYmVsKSxcclxuICAgICAgICAgICAgICAgICRncm91cEl0ZW0gPSAkKCc8ZGl2IGNsYXNzPVwic29sLW9wdGlvbmdyb3VwXCIvPicpLmFwcGVuZCgkZ3JvdXBDYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzb2xPcHRpb25ncm91cC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgJGdyb3VwSXRlbS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQuaXNBcnJheShzb2xPcHRpb25ncm91cC5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChzb2xPcHRpb25ncm91cC5jaGlsZHJlbiwgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVuZGVyT3B0aW9uKGl0ZW0sICRncm91cEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNvbE9wdGlvbmdyb3VwLmRpc3BsYXlFbGVtZW50ID0gJGdyb3VwSXRlbTtcclxuICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLmFwcGVuZCgkZ3JvdXBJdGVtKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfaW5pdGlhbGl6ZVNlbGVjdEFsbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgc2VsZWN0YWJsZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuc2hvd1NlbGVjdEFsbCA9PT0gdHJ1ZSB8fCAoJC5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLnNob3dTZWxlY3RBbGwpICYmIHRoaXMuY29uZmlnLnNob3dTZWxlY3RBbGwuY2FsbCh0aGlzKSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbnMgZm9yIChkZS0pc2VsZWN0IGFsbFxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICRkZXNlbGVjdEFsbEJ1dHRvbiA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb2wtZGVzZWxlY3QtYWxsXCIvPicpLmh0bWwodGhpcy5jb25maWcudGV4dHMuc2VsZWN0Tm9uZSkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0QWxsQnV0dG9uID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNvbC1zZWxlY3QtYWxsXCIvPicpLmh0bWwodGhpcy5jb25maWcudGV4dHMuc2VsZWN0QWxsKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhY3Rpb25CdXR0b25zID0gJCgnPGRpdiBjbGFzcz1cInNvbC1hY3Rpb24tYnV0dG9uc1wiLz4nKS5hcHBlbmQoJHNlbGVjdEFsbEJ1dHRvbikuYXBwZW5kKCRkZXNlbGVjdEFsbEJ1dHRvbikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic29sLWNsZWFyZml4XCIvPicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLnByZXBlbmQodGhpcy4kYWN0aW9uQnV0dG9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfc2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbiAoJGNoYW5nZUl0ZW0sIHNraXBDYWxsYmFjaykge1xyXG5cclxuICAgICAgICAgICAgLy8gYXBwbHkgc3RhdGUgdG8gb3JpZ2luYWwgc2VsZWN0IGlmIG5lY2Nlc3NhcnlcclxuICAgICAgICAgICAgLy8gaGVscHMgdG8ga2VlcCBvbGQgbGVnYWN5IGNvZGUgcnVubmluZyB3aGljaCBkZXBlbmRzXHJcbiAgICAgICAgICAgIC8vIG9uIHJldHJpZXZpbmcgdGhlIHZhbHVlIHZpYSBqUXVlcnkgb3B0aW9uIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICAvLyBlLmcuICQoJyNteVByZXZpb3VzU2VsZWN0V2hpY2hOb3dJc1NvbCcpLnZhbCgpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRvcmlnaW5hbEVsZW1lbnQgJiYgdGhpcy4kb3JpZ2luYWxFbGVtZW50LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kb3JpZ2luYWxFbGVtZW50LmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50T3JpZ2luYWxPcHRpb24gPSAkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY3VycmVudE9yaWdpbmFsT3B0aW9uLnZhbCgpID09PSAkY2hhbmdlSXRlbS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudE9yaWdpbmFsT3B0aW9uLnByb3AoJ3NlbGVjdGVkJywgJGNoYW5nZUl0ZW0ucHJvcCgnY2hlY2tlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kb3JpZ2luYWxFbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkY2hhbmdlSXRlbS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGlvbkRpc3BsYXlJdGVtKCRjaGFuZ2VJdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVNlbGVjdGlvbkRpc3BsYXlJdGVtKCRjaGFuZ2VJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb24gb2Ygc2VsZWN0aW9uIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgc2VsZWN0aW5nIG1vcmUgZW50cmllc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2Nyb2xsVGFyZ2V0LnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb25seSBvbmUgb3B0aW9uIHNlbGVjdGFibGVcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHNlbGVjdGlvbiBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy4kc2hvd1NlbGVjdGlvbkNvbnRhaW5lci5jaGlsZHJlbignLnNvbC1zZWxlY3RlZC1kaXNwbGF5LWl0ZW0nKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heFNob3cgIT0gMCAmJiBzZWxlY3RlZC5sZW5ndGggPiB0aGlzLmNvbmZpZy5tYXhTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeGl0ZW1zdGV4dCA9IHRoaXMuY29uZmlnLnRleHRzLml0ZW1zU2VsZWN0ZWQucmVwbGFjZSgneyRhfScsIHNlbGVjdGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR4SXRlbXNTZWxlY3RlZC5odG1sKCc8ZGl2IGNsYXNzPVwic29sLXNlbGVjdGVkLWRpc3BsYXktaXRlbS10ZXh0XCI+JyArIHhpdGVtc3RleHQgKyAnPGRpdj4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dTZWxlY3Rpb25Db250YWluZXIuYXBwZW5kKHRoaXMuJHhJdGVtc1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHhJdGVtc1NlbGVjdGVkLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHhJdGVtc1NlbGVjdGVkLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFza2lwQ2FsbGJhY2sgJiYgJC5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmV2ZW50cy5vbkNoYW5nZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV2ZW50cy5vbkNoYW5nZS5jYWxsKHRoaXMsIHRoaXMsICRjaGFuZ2VJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9hZGRTZWxlY3Rpb25EaXNwbGF5SXRlbTogZnVuY3Rpb24gKCRjaGFuZ2VkSXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgc29sT3B0aW9uSXRlbSA9ICRjaGFuZ2VkSXRlbS5kYXRhKCdzb2wtaXRlbScpLFxyXG4gICAgICAgICAgICAgICAgJGV4aXN0aW5nRGlzcGxheUl0ZW0gPSBzb2xPcHRpb25JdGVtLmRpc3BsYXlTZWxlY3Rpb25JdGVtLFxyXG4gICAgICAgICAgICAgICAgJGRpc3BsYXlJdGVtVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGV4aXN0aW5nRGlzcGxheUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICRkaXNwbGF5SXRlbVRleHQgPSAkKCc8c3BhbiBjbGFzcz1cInNvbC1zZWxlY3RlZC1kaXNwbGF5LWl0ZW0tdGV4dFwiIC8+JykuaHRtbChzb2xPcHRpb25JdGVtLmxhYmVsKTtcclxuICAgICAgICAgICAgICAgICRleGlzdGluZ0Rpc3BsYXlJdGVtID0gJCgnPGRpdiBjbGFzcz1cInNvbC1zZWxlY3RlZC1kaXNwbGF5LWl0ZW1cIi8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRkaXNwbGF5SXRlbVRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RpdGxlJywgc29sT3B0aW9uSXRlbS50b29sdGlwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh0aGlzLiRzaG93U2VsZWN0aW9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHJlbW92ZSBidXR0b24gb24gZGlzcGxheSBpdGVtcyBpZiBub3QgZGlzYWJsZWQgYW5kIG51bGwgc2VsZWN0aW9uIGFsbG93ZWRcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5jb25maWcubXVsdGlwbGUgfHwgdGhpcy5jb25maWcuYWxsb3dOdWxsU2VsZWN0aW9uKSAmJiAhJGNoYW5nZWRJdGVtLnByb3AoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCc8c3BhbiBjbGFzcz1cInNvbC1xdWljay1kZWxldGVcIi8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwodGhpcy5jb25maWcudGV4dHMucXVpY2tEZWxldGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hhbmdlZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbygkZXhpc3RpbmdEaXNwbGF5SXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc29sT3B0aW9uSXRlbS5kaXNwbGF5U2VsZWN0aW9uSXRlbSA9ICRleGlzdGluZ0Rpc3BsYXlJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgX3JlbW92ZVNlbGVjdGlvbkRpc3BsYXlJdGVtOiBmdW5jdGlvbiAoJGNoYW5nZWRJdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBzb2xPcHRpb25JdGVtID0gJGNoYW5nZWRJdGVtLmRhdGEoJ3NvbC1pdGVtJyksXHJcbiAgICAgICAgICAgICAgICAkbXlEaXNwbGF5SXRlbSA9IHNvbE9wdGlvbkl0ZW0uZGlzcGxheVNlbGVjdGlvbkl0ZW07XHJcblxyXG4gICAgICAgICAgICBpZiAoJG15RGlzcGxheUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICRteURpc3BsYXlJdGVtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgc29sT3B0aW9uSXRlbS5kaXNwbGF5U2VsZWN0aW9uSXRlbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIF9zZXROb1Jlc3VsdHNJdGVtVmlzaWJsZTogZnVuY3Rpb24gKHZpc2libGUpIHtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5vUmVzdWx0c0l0ZW0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kYWN0aW9uQnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFjdGlvbkJ1dHRvbnMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbm9SZXN1bHRzSXRlbS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24uc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRhY3Rpb25CdXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYWN0aW9uQnV0dG9ucy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc09wZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc29sLWFjdGl2ZScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzQ2xvc2VkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc09wZW4oKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb3BlbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Nsb3NlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NvbC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNjcm9sbFRhcmdldC5iaW5kKCdzY3JvbGwnLCB0aGlzLmludGVybmFsU2Nyb2xsV3JhcHBlcikudHJpZ2dlcignc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMuaW50ZXJuYWxTY3JvbGxXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmV2ZW50cy5vbk9wZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLm9uT3Blbi5jYWxsKHRoaXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEtleUJvYXJkTmF2aWdhdGlvbk1vZGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NvbC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNjcm9sbFRhcmdldC51bmJpbmQoJ3Njcm9sbCcsIHRoaXMuaW50ZXJuYWxTY3JvbGxXcmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHNlYXJjaCBvbiBjbG9zZVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGx5U2VhcmNoVGVybUZpbHRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRvIHJlY2FsY3VsYXRlIHBvc2l0aW9uIGFnYWluIHRoZSBuZXh0IHRpbWUgc29sIGlzIG9wZW5lZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5ldmVudHMub25DbG9zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmVudHMub25DbG9zZS5jYWxsKHRoaXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2VsZWN0QWxsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjaGFuZ2VkSW5wdXRzID0gdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoW2Rpc2FibGVkXSwgOmNoZWNrZWQpJylcclxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNsb3NlT25DbGljayAmJiB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5ldmVudHMub25DaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLm9uQ2hhbmdlLmNhbGwodGhpcywgdGhpcywgJGNoYW5nZWRJbnB1dHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZlcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkY2xvc2VkSW5wdXRzID0gdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoW2Rpc2FibGVkXSwgOmNoZWNrZWQpJylcclxuICAgICAgICAgICAgICAgIHZhciAkb3BlbmVkSW5wdXRzID0gdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmZpbHRlcignW2Rpc2FibGVkXSwgOmNoZWNrZWQnKVxyXG5cclxuICAgICAgICAgICAgICAgICRvcGVuZWRJbnB1dHMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICRjbG9zZWRJbnB1dHMucHJvcCgnY2hlY2tlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScsIHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNsb3NlT25DbGljayAmJiB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5ldmVudHMub25DaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLm9uQ2hhbmdlLmNhbGwodGhpcywgdGhpcywgJG9wZW5lZElucHV0cy5hZGQoJGNsb3NlZElucHV0cykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNlbGVjdEFsbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkY2hhbmdlZElucHV0cyA9IHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNsb3NlT25DbGljayAmJiB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5ldmVudHMub25DaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLm9uQ2hhbmdlLmNhbGwodGhpcywgdGhpcywgJGNoYW5nZWRJbnB1dHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0U2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzZWxlY3Rpb24uZmluZCgnaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8ganF1ZXJ5IHBsdWdpbiBib2lsZXIgcGxhdGUgY29kZVxyXG4gICAgU2VhcmNoYWJsZU9wdGlvbkxpc3QuZGVmYXVsdHMgPSBTZWFyY2hhYmxlT3B0aW9uTGlzdC5wcm90b3R5cGUuZGVmYXVsdHM7XHJcbiAgICB3aW5kb3cuU2VhcmNoYWJsZU9wdGlvbkxpc3QgPSBTZWFyY2hhYmxlT3B0aW9uTGlzdDtcclxuXHJcbiAgICAkLmZuLnNlYXJjaGFibGVPcHRpb25MaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICRhbHJlYWR5SW5pdGlhbGl6ZWRTb2wgPSAkdGhpcy5kYXRhKFNlYXJjaGFibGVPcHRpb25MaXN0LnByb3RvdHlwZS5EQVRBX0tFWSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGFscmVhZHlJbml0aWFsaXplZFNvbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJGFscmVhZHlJbml0aWFsaXplZFNvbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3U29sID0gbmV3IFNlYXJjaGFibGVPcHRpb25MaXN0KCR0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ld1NvbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTb2wuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxufShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpKTtcclxuLyohXHJcbiAqIGpxdWVyeS5zdW1vc2VsZWN0IC0gdjMuMC4zXHJcbiAqIGh0dHA6Ly9oZW1hbnRuZWdpLmdpdGh1Yi5pby9qcXVlcnkuc3Vtb3NlbGVjdFxyXG4gKiAyMDE2LTEyLTEyXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE1IEhlbWFudCBOZWdpXHJcbiAqIEVtYWlsIDogaGVtYW50LmZybnpAZ21haWwuY29tXHJcbiAqIENvbXByZXNzb3IgaHR0cDovL3JlZnJlc2gtc2YuY29tL1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XHJcbiAgICB9XHJcblxyXG59KShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgICduYW1lc3BhY2Ugc3Vtbyc7XHJcbiAgICAkLmZuLlN1bW9TZWxlY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBlYXNpZXN0IHdheSB0byBoYXZlIGRlZmF1bHQgb3B0aW9ucy5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IEhlcmUnLCAgIC8vIERvbnQgY2hhbmdlIGl0IGhlcmUuXHJcbiAgICAgICAgICAgIGNzdkRpc3BDb3VudDogMywgICAgICAgICAgICAgIC8vIGRpc3BsYXkgbm8uIG9mIGl0ZW1zIGluIG11bHRpc2VsZWN0LiAwIHRvIGRpc3BsYXkgYWxsLlxyXG4gICAgICAgICAgICBjYXB0aW9uRm9ybWF0Oid7MH0gU2VsZWN0ZWQnLCAvLyBmb3JtYXQgb2YgY2FwdGlvbiB0ZXh0LiB5b3UgY2FuIHNldCB5b3VyIGxvY2FsZS5cclxuICAgICAgICAgICAgY2FwdGlvbkZvcm1hdEFsbFNlbGVjdGVkOid7MH0gYWxsIHNlbGVjdGVkIScsIC8vIGZvcm1hdCBvZiBjYXB0aW9uIHRleHQgd2hlbiBhbGwgZWxlbWVudHMgYXJlIHNlbGVjdGVkLiBzZXQgbnVsbCB0byB1c2UgY2FwdGlvbkZvcm1hdC4gSXQgd2lsbCBub3Qgd29yayBpZiB0aGVyZSBhcmUgZGlzYWJsZWQgZWxlbWVudHMgaW4gc2VsZWN0LlxyXG4gICAgICAgICAgICBmbG9hdFdpZHRoOiA0MDAsICAgICAgICAgICAgICAvLyBTY3JlZW4gd2lkdGggb2YgZGV2aWNlIGF0IHdoaWNoIHRoZSBsaXN0IGlzIHJlbmRlcmVkIGluIGZsb2F0aW5nIHBvcHVwIGZhc2hpb24uXHJcbiAgICAgICAgICAgIGZvcmNlQ3VzdG9tUmVuZGVyaW5nOiBmYWxzZSwgIC8vIGZvcmNlIHRoZSBjdXN0b20gbW9kYWwgb24gYWxsIGRldmljZXMgYmVsb3cgZmxvYXRXaWR0aCByZXNvbHV0aW9uLlxyXG4gICAgICAgICAgICBuYXRpdmVPbkRldmljZTogWydBbmRyb2lkJywgJ0JsYWNrQmVycnknLCAnaVBob25lJywgJ2lQYWQnLCAnaVBvZCcsICdPcGVyYSBNaW5pJywgJ0lFTW9iaWxlJywgJ1NpbGsnXSwgLy9cclxuICAgICAgICAgICAgb3V0cHV0QXNDU1Y6IGZhbHNlLCAgICAgICAgICAgLy8gdHJ1ZSB0byBQT1NUIGRhdGEgYXMgY3N2ICggZmFsc2UgZm9yIEh0bWwgY29udHJvbCBhcnJheSBpZS4gZGVmYXVsdCBzZWxlY3QgKVxyXG4gICAgICAgICAgICBjc3ZTZXBDaGFyOiAnLCcsICAgICAgICAgICAgICAvLyBzZXBhcmF0aW9uIGNoYXIgaW4gY3N2IG1vZGVcclxuICAgICAgICAgICAgb2tDYW5jZWxJbk11bHRpOiBmYWxzZSwgICAgICAgLy8gZGlzcGxheSBvayBjYW5jZWwgYnV0dG9ucyBpbiBkZXNrdG9wIG1vZGUgbXVsdGlzZWxlY3QgYWxzby5cclxuICAgICAgICAgICAgaXNDbGlja0F3YXlPazogZmFsc2UsICAgICAgICAgLy8gZm9yIG9rQ2FuY2VsSW5NdWx0aT10cnVlLiBzZXRzIHdoZXRoZXIgY2xpY2sgb3V0c2lkZSB3aWxsIHRyaWdnZXIgT2sgb3IgQ2FuY2VsIChkZWZhdWx0IGlzIGNhbmNlbCkuXHJcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VDb21iaW5lZDogdHJ1ZSwgIC8vIGltIG11bHRpIHNlbGVjdCBtb2RlIHdoZXRoZXIgdG8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgb24gaW5kaXZpZHVhbCBzZWxlY3Rpb24gb3IgY29tYmluZWQgc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICBzZWxlY3RBbGw6IGZhbHNlLCAgICAgICAgICAgICAvLyB0byBkaXNwbGF5IHNlbGVjdCBhbGwgYnV0dG9uIGluIG11bHRpc2VsZWN0IG1vZGUufHwgYWxzbyBzZWxlY3QgYWxsIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBvbiBtb2JpbGUgZGV2aWNlcy5cclxuXHJcbiAgICAgICAgICAgIHNlYXJjaDogZmFsc2UsICAgICAgICAgICAgICAgIC8vIHRvIGRpc3BsYXkgaW5wdXQgZm9yIGZpbHRlcmluZyBjb250ZW50LiBzZWxlY3RBbGx0ZXh0IHdpbGwgYmUgaW5wdXQgdGV4dCBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0OiAnU2VhcmNoLi4uJywgICAgICAvLyBwbGFjZWhvbGRlciBmb3Igc2VhcmNoIGlucHV0XHJcbiAgICAgICAgICAgIG5vTWF0Y2g6ICdObyBtYXRjaGVzIGZvciBcInswfVwiJyxcclxuICAgICAgICAgICAgcHJlZml4OiAnJywgICAgICAgICAgICAgICAgICAgLy8gc29tZSBwcmVmaXggdXN1YWxseSB0aGUgZmllbGQgbmFtZS4gZWcuICc8Yj5IZWxsbzwvYj4nXHJcbiAgICAgICAgICAgIGxvY2FsZTogWydPSycsICdDYW5jZWwnLCAnU2VsZWN0IEFsbCddLCAgLy8gYWxsIHRleHQgdGhhdCBpcyB1c2VkLiBkb24ndCBjaGFuZ2UgdGhlIGluZGV4LlxyXG4gICAgICAgICAgICB1cDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdHJ1ZSB0byBvcGVuIHVwc2lkZS5cclxuICAgICAgICAgICAgc2hvd1RpdGxlOiB0cnVlICAgICAgICAgICAgICAgLy8gc2V0IHRvIGZhbHNlIHRvIHByZXZlbnQgdGl0bGUgKHRvb2x0aXApIGZyb20gYXBwZWFyaW5nXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHZhciByZXQgPSB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsT2JqID0gdGhpczsgLy8gdGhlIG9yaWdpbmFsIHNlbGVjdCBvYmplY3QuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN1bW8gfHwgISQodGhpcykuaXMoJ3NlbGVjdCcpKSByZXR1cm47IC8vYWxyZWFkeSBpbml0aWFsaXplZFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdW1vID0ge1xyXG4gICAgICAgICAgICAgICAgRTogJChzZWxPYmopLCAgIC8vdGhlIGpxdWVyeSBvYmplY3Qgb2Ygb3JpZ2luYWwgc2VsZWN0IGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBpc19tdWx0aTogJChzZWxPYmopLmF0dHIoJ211bHRpcGxlJyksICAvL2lmIGl0cyBhIG11bHRpcGxlIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAnJyxcclxuICAgICAgICAgICAgICAgIGNhcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3B0RGl2OiAnJyxcclxuICAgICAgICAgICAgICAgIENhcHRpb25Db250OiAnJyxcclxuICAgICAgICAgICAgICAgIHVsOicnLFxyXG4gICAgICAgICAgICAgICAgaXNfZmxvYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNfb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vYmFja2Ryb3A6ICcnLFxyXG4gICAgICAgICAgICAgICAgbW9iOmZhbHNlLCAvLyBpZiB0byBvcGVuIGRldmljZSBkZWZhdWx0IHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgUHN0YXRlOiBbXSxcclxuXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLkUud3JhcCgnPGRpdiBjbGFzcz1cIlN1bW9TZWxlY3RcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QgPSBPLkUucGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5jYXB0aW9uID0gJCgnPHNwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5DYXB0aW9uQ29udCA9ICQoJzxwIGNsYXNzPVwiQ2FwdGlvbkNvbnQgU2VsZWN0Qm94XCIgPjxsYWJlbD48aT48L2k+PC9sYWJlbD48L3A+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0eWxlJywgTy5FLmF0dHIoJ3N0eWxlJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kKE8uY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QuYXBwZW5kKE8uQ2FwdGlvbkNvbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHR1cm4gb2ZmIGlmIG5vIG11bHRpc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU8uaXNfbXVsdGkpc2V0dGluZ3Mub2tDYW5jZWxJbk11bHRpID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTy5FLmF0dHIoJ2Rpc2FibGVkJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LmFkZENsYXNzKCdkaXNhYmxlZCcpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgb3V0cHV0IGFzIGNzdiBhbmQgaXMgYSBtdWx0aXNlbGVjdC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Mub3V0cHV0QXNDU1YgJiYgTy5pc19tdWx0aSAmJiBPLkUuYXR0cignbmFtZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlIGEgaGlkZGVuIGZpZWxkIHRvIHN0b3JlIGNzdiB2YWx1ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QuYXBwZW5kKCQoJzxpbnB1dCBjbGFzcz1cIkhFTUFOVDEyM1wiIHR5cGU9XCJoaWRkZW5cIiAvPicpLmF0dHIoJ25hbWUnLCBPLkUuYXR0cignbmFtZScpKS52YWwoTy5nZXRTZWxTdHIoKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gaXQgY2FuIG5vdCBwb3N0IHRoZSBvcmlnaW5hbCBzZWxlY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uRS5yZW1vdmVBdHRyKCduYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2JyZWFrIGZvciBtb2JpbGUgcmVuZHJpbmcuLiBpZiBmb3JjZUN1c3RvbVJlbmRlcmluZyBpcyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPLmlzTW9iaWxlKCkgJiYgIXNldHRpbmdzLmZvcmNlQ3VzdG9tUmVuZGVyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2V0TmF0aXZlTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbmFtZSBhdHRyIGluIHNlbGVjdCBhZGQgYSBjbGFzcyB0byBjb250YWluZXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTy5FLmF0dHIoJ25hbWUnKSkgTy5zZWxlY3QuYWRkQ2xhc3MoJ3N1bW9fJytPLkUuYXR0cignbmFtZScpLnJlcGxhY2UoL1xcW1xcXS8sICcnKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWRlIG9yaWdpbmFsIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIE8uRS5hZGRDbGFzcygnU3Vtb1VuZGVyJykuYXR0cigndGFiaW5kZXgnLCctMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyMjIENyZWF0aW5nIHRoZSBsaXN0Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYgPSAkKCc8ZGl2IGNsYXNzPVwib3B0V3JhcHBlciAnKyAoc2V0dGluZ3MudXA/J3VwJzonJykgKydcIj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9icmFuY2ggZm9yIGZsb2F0aW5nIGxpc3QgaW4gbG93IHJlcyBkZXZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgIE8uZmxvYXRpbmdMaXN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRpbmcgdGhlIG1hcmt1cCBmb3IgdGhlIGF2YWlsYWJsZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgTy51bCA9ICQoJzx1bCBjbGFzcz1cIm9wdGlvbnNcIj4nKTtcclxuICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5hcHBlbmQoTy51bCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBhbGwgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLnNlbGVjdEFsbCAmJiBPLmlzX211bHRpKSBPLlNlbEFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2ggZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLnNlYXJjaCkgTy5TZWFyY2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTy51bC5hcHBlbmQoTy5wcmVwSXRlbXMoTy5FLmNoaWxkcmVuKCkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBtdWx0aXBsZSB0aGVuIGFkZCB0aGUgY2xhc3MgbXVsdGlwbGUgYW5kIGFkZCBPSyAvIENBTkNFTCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19tdWx0aSkgTy5tdWx0aVNlbGVsZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LmFwcGVuZChPLm9wdERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5iYXNpY0V2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsQWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgcHJlcEl0ZW1zOiBmdW5jdGlvbihvcHRzLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzID0gW10sIE89dGhpcztcclxuICAgICAgICAgICAgICAgICAgICAkKG9wdHMpLmVhY2goZnVuY3Rpb24gKGksIG9wdCkgeyAgICAgICAvLyBwYXJzaW5nIG9wdGlvbnMgdG8gbGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0ID0gJChvcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXMucHVzaChvcHQuaXMoJ29wdGdyb3VwJyk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCc8bGkgY2xhc3M9XCJncm91cCAnKyAob3B0WzBdLmRpc2FibGVkPydkaXNhYmxlZCc6JycpICsnXCI+PGxhYmVsPicgKyBvcHQuYXR0cignbGFiZWwnKSArJzwvbGFiZWw+PHVsPjwvdWw+PC9saT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ3VsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoTy5wcmVwSXRlbXMob3B0LmNoaWxkcmVuKCksIG9wdFswXS5kaXNhYmxlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uY3JlYXRlTGkob3B0LCBkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIyMgQ3JlYXRlcyBhIExJIGVsZW1lbnQgZnJvbSBhIGdpdmVuIG9wdGlvbiBhbmQgYmluZHMgZXZlbnRzIHRvIGl0XHJcbiAgICAgICAgICAgICAgICAvLyMjIHJldHVybnMgdGhlIGpxdWVyeSBpbnN0YW5jZSBvZiBsaSAobm90IGluc2VydGVkIGluIGRvbSlcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUxpOiBmdW5jdGlvbiAob3B0LCBkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighb3B0LmF0dHIoJ3ZhbHVlJykpb3B0LmF0dHIoJ3ZhbHVlJyxvcHQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaSA9ICQoJzxsaSBjbGFzcz1cIm9wdFwiPjxsYWJlbD4nICsgb3B0LnRleHQoKSArICc8L2xhYmVsPjwvbGk+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpLmRhdGEoJ29wdCcsIG9wdCk7ICAgIC8vIHN0b3JlIGEgZGlyZWN0IHJlZmVyZW5jZSB0byBvcHRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0LmRhdGEoJ2xpJywgbGkpOyAgICAvLyBzdG9yZSBhIGRpcmVjdCByZWZlcmVuY2UgdG8gbGlzdCBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPLmlzX211bHRpKSBsaS5wcmVwZW5kKCc8c3Bhbj48aT48L2k+PC9zcGFuPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0WzBdLmRpc2FibGVkIHx8IGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpID0gbGkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE8ub25PcHRDbGljayhsaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRbMF0uc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0LmF0dHIoJ2NsYXNzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFkZENsYXNzKG9wdC5hdHRyKCdjbGFzcycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdC5hdHRyKCd0aXRsZScpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaS5hdHRyKCd0aXRsZScsIG9wdC5hdHRyKCd0aXRsZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIFJldHVybnMgdGhlIHNlbGVjdGVkIGl0ZW1zIGFzIHN0cmluZyBpbiBhIE11bHRpc2VsZWN0LlxyXG4gICAgICAgICAgICAgICAgZ2V0U2VsU3RyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmUgc2VsZWN0ZWQgaXRlbXMuXHJcbiAgICAgICAgICAgICAgICAgICAgc29wdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHsgc29wdC5wdXNoKCQodGhpcykudmFsKCkpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29wdC5qb2luKHNldHRpbmdzLmNzdlNlcENoYXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIFRIT1NFIE9LL0NBTkNFTCBCVVRUT05TIE9OIE1VTFRJUExFIFNFTEVDVC5cclxuICAgICAgICAgICAgICAgIG11bHRpU2VsZWxlY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYuYWRkQ2xhc3MoJ211bHRpcGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5va2J0biA9ICQoJzxwIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYnRuT2tcIj4nK3NldHRpbmdzLmxvY2FsZVswXSsnPC9wPicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBjb21iaW5lZCBjaGFuZ2UgZXZlbnQgaXMgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLl9va2J0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLmhpZGVPcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5jYW5jZWxCdG4gPSAkKCc8cCB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImJ0bkNhbmNlbFwiPicrc2V0dGluZ3MubG9jYWxlWzFdKyc8L3A+JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLl9jbmJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLmhpZGVPcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ0bnMgPSBPLm9rYnRuLmFkZChPLmNhbmNlbEJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYuYXBwZW5kKCQoJzxkaXYgY2xhc3M9XCJNdWx0aUNvbnRyb2xzXCI+JykuYXBwZW5kKGJ0bnMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbiBvbiBvayBjYW5jZWwgYnV0dG9ucy5cclxuICAgICAgICAgICAgICAgICAgICBidG5zLm9uKCdrZXlkb3duLnN1bW8nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzI6IC8vIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogLy8gZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTogIC8vdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsLmhhc0NsYXNzKCdidG5PaycpKXJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OiAvLyBlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5fY25idG4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5oaWRlT3B0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgX29rYnRuOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzLCBjZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBjb21iaW5lZCBjaGFuZ2UgZXZlbnQgaXMgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy50cmlnZ2VyQ2hhbmdlQ29tYmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBmb3IgYSBjaGFuZ2UgaW4gdGhlIHNlbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE8uRS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5sZW5ndGggIT0gTy5Qc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLkUuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoaSxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5zZWxlY3RlZCAmJiBPLlBzdGF0ZS5pbmRleE9mKGkpIDwgMCkgY2cgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5jYWxsQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLnNldFRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBfY25idG46ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIHNlbGVjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBPLkUuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7IHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYuZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3Jlc3RvcmUgc2VsZWN0aW9ucyBmcm9tIHNhdmVkIHN0YXRlLlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBPLlBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUuZmluZCgnb3B0aW9uJylbTy5Qc3RhdGVbaV1dLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy51bC5maW5kKCdsaS5vcHQnKS5lcShPLlBzdGF0ZVtpXSkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsQWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgU2VsQWxsOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPLmlzX211bHRpKXJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBPLnNlbEFsbCA9ICQoJzxwIGNsYXNzPVwic2VsZWN0LWFsbFwiPjxzcGFuPjxpPjwvaT48L3NwYW4+PGxhYmVsPicgKyBzZXR0aW5ncy5sb2NhbGVbMl0gKyAnPC9sYWJlbD48L3A+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYuYWRkQ2xhc3MoJ3NlbGFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsQWxsLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZWxBbGwudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8udG9nZ1NlbEFsbChPLnNlbEFsbC5oYXNDbGFzcygnc2VsZWN0ZWQnKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTy5zZWxBbGxTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5wcmVwZW5kKE8uc2VsQWxsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIG1vZHVsZSAoY2FuIGJlIHJlbW92ZWQgaWYgbm90IHJlcXVpcmVkLilcclxuICAgICAgICAgICAgICAgIFNlYXJjaDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjID0gTy5DYXB0aW9uQ29udC5hZGRDbGFzcygnc2VhcmNoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFAgPSAkKCc8cCBjbGFzcz1cIm5vLW1hdGNoXCI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE8uZnR4dCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoLXR4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCInICsgc2V0dGluZ3Muc2VhcmNoVGV4dCArICdcIj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hcHBlbmQoTy5mdHh0KTtcclxuICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5jaGlsZHJlbigndWwnKS5hZnRlcihQKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTy5mdHh0Lm9uKCdrZXl1cC5zdW1vJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlkID0gTy5vcHREaXYuZmluZCgndWwub3B0aW9ucyBsaS5vcHQnKS5lYWNoKGZ1bmN0aW9uKGl4LGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkKGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdCA9IGUuZGF0YSgnb3B0JylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHQuaGlkZGVuID0gZS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKE8uZnR4dC52YWwoKS50b0xvd2VyQ2FzZSgpKSA8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRvZ2dsZUNsYXNzKCdoaWRkZW4nLCBvcHQuaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkubm90KCcuaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQLmh0bWwoc2V0dGluZ3Mubm9NYXRjaC5yZXBsYWNlKC9cXHswXFx9L2csICc8ZW0+PC9lbT4nKSkudG9nZ2xlKCFoaWQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUC5maW5kKCdlbScpLnRleHQoTy5mdHh0LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZWxBbGxTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxBbGxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc2VsZWN0QWxsICYmIE8uaXNfbXVsdGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjID0gMCwgdmMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5maW5kKCdsaS5vcHQnKS5ub3QoJy5oaWRkZW4nKS5lYWNoKGZ1bmN0aW9uIChpeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoZSkuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHNjKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISQoZSkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHZjKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGVjdCBhbGwgY2hlY2tib3ggc3RhdGUgY2hhbmdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2MgPT0gdmMpIE8uc2VsQWxsLnJlbW92ZUNsYXNzKCdwYXJ0aWFsJykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNjID09IDApIE8uc2VsQWxsLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCBwYXJ0aWFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgTy5zZWxBbGwuYWRkQ2xhc3MoJ3BhcnRpYWwnKS8vLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd09wdHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE8uRS5hdHRyKCdkaXNhYmxlZCcpKSByZXR1cm47IC8vIGlmIHNlbGVjdCBpcyBkaXNhYmxlZCB0aGVuIHJldHJ1blxyXG4gICAgICAgICAgICAgICAgICAgIE8uRS50cmlnZ2VyKCdzdW1vOm9wZW5pbmcnLCBPKTtcclxuICAgICAgICAgICAgICAgICAgICBPLmlzX29wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QuYWRkQ2xhc3MoJ29wZW4nKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBPLkUudHJpZ2dlcignc3VtbzpvcGVuZWQnLCBPKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTy5mdHh0KU8uZnR4dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgTy5zZWxlY3QuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBvcHRpb25zIG9uIGNsaWNrIG91dHNpZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLnN1bW8nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU8uc2VsZWN0LmlzKGUudGFyZ2V0KSAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgb2YgdGhlIGNsaWNrIGlzbid0IHRoZSBjb250YWluZXIuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIE8uc2VsZWN0LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXsgLy8gLi4uIG5vciBhIGRlc2NlbmRhbnQgb2YgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIU8uaXNfb3BlbmVkKXJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uaGlkZU9wdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5va0NhbmNlbEluTXVsdGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5pc0NsaWNrQXdheU9rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uX29rYnRuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLl9jbmJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPLmlzX2Zsb2F0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEggPSBPLm9wdERpdi5jaGlsZHJlbigndWwnKS5vdXRlckhlaWdodCgpICsgMjsgIC8vICsyIGlzIGNsZWFyIGZpeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19tdWx0aSkgSCA9IEggKyBwYXJzZUludChPLm9wdERpdi5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5jc3MoJ2hlaWdodCcsIEgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N1bW9TdG9wU2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPLnNldFBzdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL21haW50YWluIHN0YXRlIHdoZW4gb2svY2FuY2VsIGJ1dHRvbnMgYXJlIGF2YWlsYWJsZSBzdG9yaW5nIHRoZSBpbmRleGVzLlxyXG4gICAgICAgICAgICAgICAgc2V0UHN0YXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19tdWx0aSAmJiAoTy5pc19mbG9hdGluZyB8fCBzZXR0aW5ncy5va0NhbmNlbEluTXVsdGkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5Qc3RhdGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1pbmcgdGhhdCBmaW5kIHJldHVybnMgZWxlbWVudHMgaW4gdHJlZSBvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoaSwgZSl7aWYoZS5zZWxlY3RlZCkgTy5Qc3RhdGUucHVzaChpKTt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxDaGFuZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkUudHJpZ2dlcignY2hhbmdlJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaGlkZU9wdHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTy5pc19vcGVuZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUudHJpZ2dlcignc3VtbzpjbG9zaW5nJywgTyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uaXNfb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LnJlbW92ZUNsYXNzKCdvcGVuJykuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJykuZmluZCgndWwgbGkuc2VsJykucmVtb3ZlQ2xhc3MoJ3NlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUudHJpZ2dlcignc3VtbzpjbG9zZWQnLCBPKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5zdW1vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc3Vtb1N0b3BTY3JvbGwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VhcmNoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uZnR4dC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5mdHh0LnRyaWdnZXIoJ2tleXVwLnN1bW8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXRPbk9wZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpID0gTy5vcHREaXYuZmluZCgnbGkub3B0Om5vdCguaGlkZGVuKScpLmVxKHNldHRpbmdzLnNlYXJjaD8wOk8uRVswXS5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihsaS5oYXNDbGFzcygnZGlzYWJsZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpID0gbGkubmV4dCgnOm5vdChkaXNhYmxlZCknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighbGkubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBPLm9wdERpdi5maW5kKCdsaS5zZWwnKS5yZW1vdmVDbGFzcygnc2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYWRkQ2xhc3MoJ3NlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIE8uc2hvd09wdHMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYXY6IGZ1bmN0aW9uICh1cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcywgYyxcclxuICAgICAgICAgICAgICAgICAgICBzPU8udWwuZmluZCgnbGkub3B0Om5vdCguZGlzYWJsZWQsIC5oaWRkZW4pJyksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsID0gTy51bC5maW5kKCdsaS5vcHQuc2VsOm5vdCguaGlkZGVuKScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHMuaW5kZXgoc2VsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19vcGVuZWQgJiYgc2VsLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwICYmIGlkeCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gcy5lcShpZHgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXVwICYmIGlkeCA8IHMubGVuZ3RoLTEgJiYgaWR4ID4gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gcy5lcShpZHgrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuOyAvLyBpZiBubyBpdGVtcyBiZWZvcmUgb3IgYWZ0ZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVDbGFzcygnc2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbCA9IGMuYWRkQ2xhc3MoJ3NlbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZyBzZWwgaXRlbSB0byB2aXNpYmxlIHZpZXcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bCA9IE8udWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdCA9IHVsLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHNlbC5wb3NpdGlvbigpLnRvcCArIHN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ID49IHN0ICsgdWwuaGVpZ2h0KCktc2VsLm91dGVySGVpZ2h0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5zY3JvbGxUb3AodCAtIHVsLmhlaWdodCgpICsgc2VsLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0PHN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuc2Nyb2xsVG9wKHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLnNldE9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBiYXNpY0V2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLkNhcHRpb25Db250LmNsaWNrKGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5FLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPLmlzX29wZW5lZCkgTy5oaWRlT3B0cygpOyBlbHNlIE8uc2hvd09wdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPLnNlbGVjdC5vbigna2V5ZG93bi5zdW1vJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM4OiAvLyB1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8ubmF2KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDA6IC8vIGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLm5hdihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2NTogLy8gc2hvcnRjdXQgY3RybCArIGEgdG8gc2VsZWN0IGFsbCBhbmQgY3RybCArIHNoaWZ0ICsgYSB0byB1bnNlbGVjdCBhbGwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE8uaXNfbXVsdGkgJiYgZS5jdHJsS2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTy50b2dnU2VsQWxsKCFlLnNoaWZ0S2V5LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzI6IC8vIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VhcmNoICYmIE8uZnR4dC5pcyhlLnRhcmdldCkpcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzogLy8gZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19vcGVuZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8ub3B0RGl2LmZpbmQoJ3VsIGxpLnNlbCcpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLnNldE9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5Olx0IC8vdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXNldHRpbmdzLm9rQ2FuY2VsSW5NdWx0aSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5oaWRlT3B0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6IC8vIGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLm9rQ2FuY2VsSW5NdWx0aSlPLl9jbmJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uaGlkZU9wdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiAoc2Nyb2xsIC8gbW92ZSBjYXJldClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc3VtbycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5mbG9hdGluZ0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25PcHRDbGljazogZnVuY3Rpb24gKGxpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE8uaXNfbXVsdGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuZGF0YSgnb3B0JylbMF0uc2VsZWN0ZWQgPSBsaS5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsQWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLnBhcmVudCgpLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7IC8vaWYgbm90IG11bHRpc2VsZWN0IHRoZW4gcmVtb3ZlIGFsbCBzZWxlY3Rpb25zIGZyb20gdGhpcyBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS50b2dnbGVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmRhdGEoJ29wdCcpWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9icmFuY2ggZm9yIGNvbWJpbmVkIGNoYW5nZSBldmVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoTy5pc19tdWx0aSAmJiBzZXR0aW5ncy50cmlnZ2VyQ2hhbmdlQ29tYmluZWQgJiYgKE8uaXNfZmxvYXRpbmcgfHwgc2V0dGluZ3Mub2tDYW5jZWxJbk11bHRpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8uc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5jYWxsQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTy5pc19tdWx0aSkgTy5oaWRlT3B0cygpOyAvL2lmIGl0cyBub3QgYSBtdWx0aXNlbGVjdCB0aGVuIGhpZGUgb24gc2luZ2xlIHNlbGVjdC5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTy5pc19tdWx0aSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxzID0gTy5FLmZpbmQoJzpzZWxlY3RlZCcpLm5vdCgnOmRpc2FibGVkJyk7IC8vc2VsZWN0ZWQgb3B0aW9ucy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPj0gc2V0dGluZ3MuY3N2RGlzcENvdW50ICYmIHNldHRpbmdzLmNzdkRpc3BDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxzLmxlbmd0aCA9PSBPLkUuZmluZCgnb3B0aW9uJykubGVuZ3RoICYmIHNldHRpbmdzLmNhcHRpb25Gb3JtYXRBbGxTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gc2V0dGluZ3MuY2FwdGlvbkZvcm1hdEFsbFNlbGVjdGVkLnJlcGxhY2UoL1xcezBcXH0vZywgc2Vscy5sZW5ndGgpKycsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gc2V0dGluZ3MuY2FwdGlvbkZvcm1hdC5yZXBsYWNlKC9cXHswXFx9L2csIHNlbHMubGVuZ3RoKSsnLCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgTy5wbGFjZWhvbGRlciArPSAkKHNlbHNbaV0pLnRleHQoKSArIFwiLCBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gTy5wbGFjZWhvbGRlci5yZXBsYWNlKC8sKFteLF0qKSQvLCAnJDEnKTsgLy9yZW1vdmUgdW5leHBlY3RlZCBcIixcIiBmcm9tIGxhc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gTy5FLmZpbmQoJzpzZWxlY3RlZCcpLm5vdCgnOmRpc2FibGVkJykudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzX3BsYWNlaG9sZGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghTy5wbGFjZWhvbGRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhY2Vob2xkZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5wbGFjZWhvbGRlciA9IE8uRS5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU8ucGxhY2Vob2xkZXIpICAgICAgICAgICAgICAgICAgLy9pZiBwbGFjZWhvbGRlciBpcyB0aGVyZSB0aGVuIHNldCBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTy5wbGFjZWhvbGRlciA9IE8uRS5maW5kKCdvcHRpb246ZGlzYWJsZWQ6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPLnBsYWNlaG9sZGVyID0gTy5wbGFjZWhvbGRlciA/IChzZXR0aW5ncy5wcmVmaXggKyAnICcgKyBPLnBsYWNlaG9sZGVyKSA6IHNldHRpbmdzLnBsYWNlaG9sZGVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IGRpc3BsYXkgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIE8uY2FwdGlvbi5odG1sKE8ucGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zaG93VGl0bGUpIE8uQ2FwdGlvbkNvbnQuYXR0cigndGl0bGUnLCBPLnBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIGhpZGRlbiBmaWVsZCBpZiBwb3N0IGFzIGNzdiBpcyB0cnVlLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3ZGaWVsZCA9IE8uc2VsZWN0LmZpbmQoJ2lucHV0LkhFTUFOVDEyMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3ZGaWVsZC5sZW5ndGgpIGNzdkZpZWxkLnZhbChPLmdldFNlbFN0cigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hZGQgY2xhc3MgcGxhY2Vob2xkZXIgaWYgaXRzIGEgcGxhY2Vob2xkZXIgdGV4dC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNfcGxhY2Vob2xkZXIpIE8uY2FwdGlvbi5hZGRDbGFzcygncGxhY2Vob2xkZXInKTsgZWxzZSBPLmNhcHRpb24ucmVtb3ZlQ2xhc3MoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE8ucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkYXB0ZWQgZnJvbSBodHRwOi8vd3d3LmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrcyBmb3IgaU9zLCBBbmRyb2lkLCBCbGFja2JlcnJ5LCBPcGVyYSBNaW5pLCBhbmQgV2luZG93cyBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0dGluZ3MubmF0aXZlT25EZXZpY2UubGVuZ3RoOyBpKyspIGlmICh1YS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZXR0aW5ncy5uYXRpdmVPbkRldmljZVtpXS50b0xvd2VyQ2FzZSgpKSA+IDApIHJldHVybiBzZXR0aW5ncy5uYXRpdmVPbkRldmljZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZU1vYmlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLkUuYWRkQ2xhc3MoJ1NlbGVjdENsYXNzJykvLy5jc3MoJ2hlaWdodCcsIE8uc2VsZWN0Lm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIE8ubW9iID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBPLkUuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nTGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAvL2NhbGxlZCBvbiBpbml0IGFuZCBhbHNvIG9uIHJlc2l6ZS5cclxuICAgICAgICAgICAgICAgICAgICAvL08uaXNfZmxvYXRpbmcgPSB0cnVlIGlmIHdpbmRvdyB3aWR0aCBpcyA8IHNwZWNpZmllZCBmbG9hdCB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIE8uaXNfZmxvYXRpbmcgPSAkKHdpbmRvdykud2lkdGgoKSA8PSBzZXR0aW5ncy5mbG9hdFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NldCBjbGFzcyBpc0Zsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYudG9nZ2xlQ2xhc3MoJ2lzRmxvYXRpbmcnLCBPLmlzX2Zsb2F0aW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmUgaGVpZ2h0IGlmIG5vdCBmbG9hdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghTy5pc19mbG9hdGluZykgTy5vcHREaXYuY3NzKCdoZWlnaHQnLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdG9nZ2xlIGNsYXNzIGFjY29yZGluZyB0byBva0NhbmNlbEluTXVsdGkgZmxhZyBvbmx5IHdoZW4gaXQgaXMgbm90IGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgTy5vcHREaXYudG9nZ2xlQ2xhc3MoJ29rQ2FuY2VsSW5NdWx0aScsIHNldHRpbmdzLm9rQ2FuY2VsSW5NdWx0aSAmJiAhTy5pc19mbG9hdGluZyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vSEVMUEVSUyBGT1IgT1VUU0lERVJTXHJcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZXMgcmFuZ2Ugb2YgZ2l2ZW4gaXRlbSBvcGVyYXRpb25zXHJcbiAgICAgICAgICAgICAgICB2UmFuZ2U6IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRzID0gTy5FLmZpbmQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmxlbmd0aCA8PSBpIHx8IGkgPCAwKSB0aHJvdyBcImluZGV4IG91dCBvZiBib3VuZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RvZ2dsZXMgc2VsZWN0aW9uIG9uIGMgYXMgYm9vbGVhbi5cclxuICAgICAgICAgICAgICAgIHRvZ2dTZWw6IGZ1bmN0aW9uIChjLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihpKSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8udlJhbmdlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHQgPSBPLkUuZmluZCgnb3B0aW9uJylbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdCA9IE8uRS5maW5kKCdvcHRpb25bdmFsdWU9XCInK2krJ1wiXScpWzBdfHwwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdCB8fCBvcHQuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0LnNlbGVjdGVkICE9IGMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHQuc2VsZWN0ZWQgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighTy5tb2IpICQob3B0KS5kYXRhKCdsaScpLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZCcsYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLmNhbGxDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZXRQc3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsQWxsU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vdG9nZ2xlcyBkaXNhYmxlZCBvbiBjIGFzIGJvb2xlYW4uXHJcbiAgICAgICAgICAgICAgICB0b2dnRGlzOiBmdW5jdGlvbiAoYywgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcy52UmFuZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5FLmZpbmQoJ29wdGlvbicpW2ldLmRpc2FibGVkID0gYztcclxuICAgICAgICAgICAgICAgICAgICBpZihjKU8uRS5maW5kKCdvcHRpb24nKVtpXS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPLm1vYilPLm9wdERpdi5maW5kKCd1bC5vcHRpb25zIGxpJykuZXEoaSkudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgYykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvZ2dsZSBkaXNhYmxlL2VuYWJsZSBvbiBjb21wbGV0ZSBzZWxlY3QgY29udHJvbFxyXG4gICAgICAgICAgICAgICAgdG9nZ1N1bW86IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLmVuYWJsZWQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5zZWxlY3QucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5FLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LmF0dHIoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE87XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvZ2dsZXMgYWxsIG9wdGlvbiBvbiBjIGFzIGJvb2xlYW4uXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgZGlyZWN0PWZhbHNlLzAgYnlwYXNzZXMgb2tDYW5jZWxJbk11bHRpIGJlaGF2aW91ci5cclxuICAgICAgICAgICAgICAgIHRvZ2dTZWxBbGw6IGZ1bmN0aW9uIChjLCBkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5FLmZpbmQoJ29wdGlvbjpub3QoOmRpc2FibGVkLDpoaWRkZW4pJylcclxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihpeCxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzX3NlbGVjdGVkPWUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gJChlKS5kYXRhKCdsaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLmhhc0NsYXNzKCdoaWRkZW4nKSlyZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEhYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaXNfc2VsZWN0ZWQpZS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc19zZWxlY3RlZCllLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWRpcmVjdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFPLm1vYiAmJiBPLnNlbEFsbClPLnNlbEFsbC5yZW1vdmVDbGFzcygncGFydGlhbCcpLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZCcsISFjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTy5jYWxsQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE8uc2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLnNldFBzdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgLyogb3V0c2lkZSBhY2Nlc3NpYmlsaXR5IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICB3aGljaCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgZWxlbWVudCBpbnN0YW5jZS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcmVsb2FkOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsbSA9IHRoaXMudW5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZWxtKS5TdW1vU2VsZWN0KHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LmJlZm9yZShPLkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIE8uRS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vdXRwdXRBc0NTViAmJiBPLmlzX211bHRpICYmIE8uc2VsZWN0LmZpbmQoJ2lucHV0LkhFTUFOVDEyMycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUuYXR0cignbmFtZScsIE8uc2VsZWN0LmZpbmQoJ2lucHV0LkhFTUFOVDEyMycpLmF0dHIoJ25hbWUnKSk7IC8vIHJlc3RvcmUgdGhlIG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIE8uc2VsZWN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxPYmouc3VtbztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsT2JqO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIGFkZCBhIG5ldyBvcHRpb24gdG8gc2VsZWN0IGF0IGEgZ2l2ZW4gaW5kZXguXHJcbiAgICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICh2YWwsIHR4dCwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09IFwidW5kZWZpbmVkXCIpIHRocm93IFwiTm8gdmFsdWUgdG8gYWRkXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHM9Ty5FLmZpbmQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0eHQgPT0gXCJudW1iZXJcIikgeyBpID0gdHh0OyB0eHQgPSB2YWw7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHR4dCA9PSBcInVuZGVmaW5lZFwiKSB7IHR4dCA9IHZhbDsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHQgPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIikudmFsKHZhbCkuaHRtbCh0eHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5sZW5ndGggPCBpKSB0aHJvdyBcImluZGV4IG91dCBvZiBib3VuZHNcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkgPT0gXCJ1bmRlZmluZWRcIiB8fCBvcHRzLmxlbmd0aCA9PSBpKSB7IC8vIGFkZCBpdCB0byB0aGUgbGFzdCBpZiBnaXZlbiBpbmRleCBpcyBsYXN0IG5vIG9yIG5vIGluZGV4IHByb3ZpZGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPLkUuYXBwZW5kKG9wdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFPLm1vYilPLnVsLmFwcGVuZChPLmNyZWF0ZUxpKG9wdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5lcShpKS5iZWZvcmUob3B0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIU8ubW9iKU8udWwuZmluZCgnbGkub3B0JykuZXEoaSkuYmVmb3JlKE8uY3JlYXRlTGkob3B0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsT2JqO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIHJlbW92ZXMgYW4gaXRlbSBhdCBhIGdpdmVuIGluZGV4LlxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcy52UmFuZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5FLmZpbmQoJ29wdGlvbicpLmVxKGkpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPLm1vYilPLm9wdERpdi5maW5kKCd1bC5vcHRpb25zIGxpJykuZXEoaSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIyMgU2VsZWN0IGFuIGl0ZW0gYXQgYSBnaXZlbiBpbmRleC5cclxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW06IGZ1bmN0aW9uIChpKSB7IHRoaXMudG9nZ1NlbCh0cnVlLCBpKTsgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIFVuU2VsZWN0IGFuIGl0ZW4gYXQgYSBnaXZlbiBpbmRleC5cclxuICAgICAgICAgICAgICAgIHVuU2VsZWN0SXRlbTogZnVuY3Rpb24gKGkpIHsgdGhpcy50b2dnU2VsKGZhbHNlLCBpKTsgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIFNlbGVjdCBhbGwgaXRlbXMgIG9mIHRoZSBzZWxlY3QuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RBbGw6IGZ1bmN0aW9uICgpIHsgdGhpcy50b2dnU2VsQWxsKHRydWUpOyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIyMgVW5TZWxlY3QgYWxsIGl0ZW1zIG9mIHRoZSBzZWxlY3QuXHJcbiAgICAgICAgICAgICAgICB1blNlbGVjdEFsbDogZnVuY3Rpb24gKCkgeyB0aGlzLnRvZ2dTZWxBbGwoZmFsc2UpOyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIyMgRGlzYWJsZSBhbiBpdGVuIGF0IGEgZ2l2ZW4gaW5kZXguXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlSXRlbTogZnVuY3Rpb24gKGkpIHsgdGhpcy50b2dnRGlzKHRydWUsIGkpIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgLy8jIyBSZW1vdmVzIGRpc2FibGVkIGFuIGl0ZW4gYXQgYSBnaXZlbiBpbmRleC5cclxuICAgICAgICAgICAgICAgIGVuYWJsZUl0ZW06IGZ1bmN0aW9uIChpKSB7IHRoaXMudG9nZ0RpcyhmYWxzZSwgaSkgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIE5ldyBzaW1wbGUgbWV0aG9kcyBhcyBnZXR0ZXIgYW5kIHNldHRlciBhcmUgbm90IHdvcmtpbmcgZmluZSBpbiBpZTgtXHJcbiAgICAgICAgICAgICAgICAvLyMjIHZhcmlhYmxlIHRvIGNoZWNrIHN0YXRlIG9mIGNvbnRyb2wgaWYgZW5hYmxlZCBvciBkaXNhYmxlZC5cclxuICAgICAgICAgICAgICAgIGVuYWJsZWQgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8jIyBFbmFibGVzIHRoZSBjb250cm9sXHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9nZ1N1bW8oZmFsc2UpfSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyMjIERpc2FibGVzIHRoZSBjb250cm9sXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbigpe3JldHVybiB0aGlzLnRvZ2dTdW1vKHRydWUpfSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBPID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBPLmNyZWF0ZUVsZW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTy5zZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZWxPYmouc3Vtby5pbml0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQubGVuZ3RoID09IDEgPyByZXRbMF0gOiByZXQ7XHJcbiAgICB9O1xyXG5cclxuXHJcbn0pO1xyXG4vKiFcclxuIFJlc3BvbnNpdmUgMi4xLjFcclxuIDIwMTQtMjAxNiBTcHJ5TWVkaWEgTHRkIC0gZGF0YXRhYmxlcy5uZXQvbGljZW5zZVxyXG4gKi9cclxuKGZ1bmN0aW9uKGMpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiZGF0YXRhYmxlcy5uZXRcIl0sZnVuY3Rpb24obCl7cmV0dXJuIGMobCx3aW5kb3csZG9jdW1lbnQpfSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGwsayl7bHx8KGw9d2luZG93KTtpZigha3x8IWsuZm4uZGF0YVRhYmxlKWs9cmVxdWlyZShcImRhdGF0YWJsZXMubmV0XCIpKGwsaykuJDtyZXR1cm4gYyhrLGwsbC5kb2N1bWVudCl9OmMoalF1ZXJ5LHdpbmRvdyxkb2N1bWVudCl9KShmdW5jdGlvbihjLGwsayxwKXt2YXIgbT1jLmZuLmRhdGFUYWJsZSxqPWZ1bmN0aW9uKGIsYSl7aWYoIW0udmVyc2lvbkNoZWNrfHwhbS52ZXJzaW9uQ2hlY2soXCIxLjEwLjNcIikpdGhyb3dcIkRhdGFUYWJsZXMgUmVzcG9uc2l2ZSByZXF1aXJlcyBEYXRhVGFibGVzIDEuMTAuMyBvciBuZXdlclwiO3RoaXMucz17ZHQ6bmV3IG0uQXBpKGIpLGNvbHVtbnM6W10sXHJcbiAgICBjdXJyZW50OltdfTt0aGlzLnMuZHQuc2V0dGluZ3MoKVswXS5yZXNwb25zaXZlfHwoYSYmXCJzdHJpbmdcIj09PXR5cGVvZiBhLmRldGFpbHM/YS5kZXRhaWxzPXt0eXBlOmEuZGV0YWlsc306YSYmITE9PT1hLmRldGFpbHM/YS5kZXRhaWxzPXt0eXBlOiExfTphJiYhMD09PWEuZGV0YWlscyYmKGEuZGV0YWlscz17dHlwZTpcImlubGluZVwifSksdGhpcy5jPWMuZXh0ZW5kKCEwLHt9LGouZGVmYXVsdHMsbS5kZWZhdWx0cy5yZXNwb25zaXZlLGEpLGIucmVzcG9uc2l2ZT10aGlzLHRoaXMuX2NvbnN0cnVjdG9yKCkpfTtjLmV4dGVuZChqLnByb3RvdHlwZSx7X2NvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxhPXRoaXMucy5kdCxkPWEuc2V0dGluZ3MoKVswXSxlPWMobCkud2lkdGgoKTthLnNldHRpbmdzKClbMF0uX3Jlc3BvbnNpdmU9dGhpcztjKGwpLm9uKFwicmVzaXplLmR0ciBvcmllbnRhdGlvbmNoYW5nZS5kdHJcIixtLnV0aWwudGhyb3R0bGUoZnVuY3Rpb24oKXt2YXIgYT1cclxuICAgIGMobCkud2lkdGgoKTthIT09ZSYmKGIuX3Jlc2l6ZSgpLGU9YSl9KSk7ZC5vQXBpLl9mbkNhbGxiYWNrUmVnKGQsXCJhb1Jvd0NyZWF0ZWRDYWxsYmFja1wiLGZ1bmN0aW9uKGUpey0xIT09Yy5pbkFycmF5KCExLGIucy5jdXJyZW50KSYmYyhcIj50ZCwgPnRoXCIsZSkuZWFjaChmdW5jdGlvbihlKXtlPWEuY29sdW1uLmluZGV4KFwidG9EYXRhXCIsZSk7ITE9PT1iLnMuY3VycmVudFtlXSYmYyh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpfSl9KTthLm9uKFwiZGVzdHJveS5kdHJcIixmdW5jdGlvbigpe2Eub2ZmKFwiLmR0clwiKTtjKGEudGFibGUoKS5ib2R5KCkpLm9mZihcIi5kdHJcIik7YyhsKS5vZmYoXCJyZXNpemUuZHRyIG9yaWVudGF0aW9uY2hhbmdlLmR0clwiKTtjLmVhY2goYi5zLmN1cnJlbnQsZnVuY3Rpb24oYSxlKXshMT09PWUmJmIuX3NldENvbHVtblZpcyhhLCEwKX0pfSk7dGhpcy5jLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS53aWR0aDxiLndpZHRoPzE6YS53aWR0aD5cclxuICAgIGIud2lkdGg/LTE6MH0pO3RoaXMuX2NsYXNzTG9naWMoKTt0aGlzLl9yZXNpemVBdXRvKCk7ZD10aGlzLmMuZGV0YWlsczshMSE9PWQudHlwZSYmKGIuX2RldGFpbHNJbml0KCksYS5vbihcImNvbHVtbi12aXNpYmlsaXR5LmR0clwiLGZ1bmN0aW9uKCl7Yi5fY2xhc3NMb2dpYygpO2IuX3Jlc2l6ZUF1dG8oKTtiLl9yZXNpemUoKX0pLGEub24oXCJkcmF3LmR0clwiLGZ1bmN0aW9uKCl7Yi5fcmVkcmF3Q2hpbGRyZW4oKX0pLGMoYS50YWJsZSgpLm5vZGUoKSkuYWRkQ2xhc3MoXCJkdHItXCIrZC50eXBlKSk7YS5vbihcImNvbHVtbi1yZW9yZGVyLmR0clwiLGZ1bmN0aW9uKCl7Yi5fY2xhc3NMb2dpYygpO2IuX3Jlc2l6ZUF1dG8oKTtiLl9yZXNpemUoKX0pO2Eub24oXCJjb2x1bW4tc2l6aW5nLmR0clwiLGZ1bmN0aW9uKCl7Yi5fcmVzaXplQXV0bygpO2IuX3Jlc2l6ZSgpfSk7YS5vbihcInByZVhoci5kdHJcIixmdW5jdGlvbigpe3ZhciBlPVtdO2Eucm93cygpLmV2ZXJ5KGZ1bmN0aW9uKCl7dGhpcy5jaGlsZC5pc1Nob3duKCkmJlxyXG5lLnB1c2godGhpcy5pZCh0cnVlKSl9KTthLm9uZShcImRyYXcuZHRyXCIsZnVuY3Rpb24oKXthLnJvd3MoZSkuZXZlcnkoZnVuY3Rpb24oKXtiLl9kZXRhaWxzRGlzcGxheSh0aGlzLGZhbHNlKX0pfSl9KTthLm9uKFwiaW5pdC5kdHJcIixmdW5jdGlvbigpe2IuX3Jlc2l6ZUF1dG8oKTtiLl9yZXNpemUoKTtjLmluQXJyYXkoZmFsc2UsYi5zLmN1cnJlbnQpJiZhLmNvbHVtbnMuYWRqdXN0KCl9KTt0aGlzLl9yZXNpemUoKX0sX2NvbHVtbnNWaXNpYmxpdHk6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zLmR0LGQ9dGhpcy5zLmNvbHVtbnMsZSxmLGc9ZC5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm57Y29sdW1uSWR4OmIscHJpb3JpdHk6YS5wcmlvcml0eX19KS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEucHJpb3JpdHkhPT1iLnByaW9yaXR5P2EucHJpb3JpdHktYi5wcmlvcml0eTphLmNvbHVtbklkeC1iLmNvbHVtbklkeH0pLGg9Yy5tYXAoZCxmdW5jdGlvbihhKXtyZXR1cm4gYS5hdXRvJiZcclxubnVsbD09PWEubWluV2lkdGg/ITE6ITA9PT1hLmF1dG8/XCItXCI6LTEhPT1jLmluQXJyYXkoYixhLmluY2x1ZGVJbil9KSxuPTA7ZT0wO2ZvcihmPWgubGVuZ3RoO2U8ZjtlKyspITA9PT1oW2VdJiYobis9ZFtlXS5taW5XaWR0aCk7ZT1hLnNldHRpbmdzKClbMF0ub1Njcm9sbDtlPWUuc1l8fGUuc1g/ZS5pQmFyV2lkdGg6MDthPWEudGFibGUoKS5jb250YWluZXIoKS5vZmZzZXRXaWR0aC1lLW47ZT0wO2ZvcihmPWgubGVuZ3RoO2U8ZjtlKyspZFtlXS5jb250cm9sJiYoYS09ZFtlXS5taW5XaWR0aCk7bj0hMTtlPTA7Zm9yKGY9Zy5sZW5ndGg7ZTxmO2UrKyl7dmFyIGk9Z1tlXS5jb2x1bW5JZHg7XCItXCI9PT1oW2ldJiYoIWRbaV0uY29udHJvbCYmZFtpXS5taW5XaWR0aCkmJihufHwwPmEtZFtpXS5taW5XaWR0aD8obj0hMCxoW2ldPSExKTpoW2ldPSEwLGEtPWRbaV0ubWluV2lkdGgpfWc9ITE7ZT0wO2ZvcihmPWQubGVuZ3RoO2U8ZjtlKyspaWYoIWRbZV0uY29udHJvbCYmIWRbZV0ubmV2ZXImJlxyXG4gICAgIWhbZV0pe2c9ITA7YnJlYWt9ZT0wO2ZvcihmPWQubGVuZ3RoO2U8ZjtlKyspZFtlXS5jb250cm9sJiYoaFtlXT1nKTstMT09PWMuaW5BcnJheSghMCxoKSYmKGhbMF09ITApO3JldHVybiBofSxfY2xhc3NMb2dpYzpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYT10aGlzLmMuYnJlYWtwb2ludHMsZD10aGlzLnMuZHQsZT1kLmNvbHVtbnMoKS5lcSgwKS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jb2x1bW4oYSksZT1iLmhlYWRlcigpLmNsYXNzTmFtZSxhPWQuc2V0dGluZ3MoKVswXS5hb0NvbHVtbnNbYV0ucmVzcG9uc2l2ZVByaW9yaXR5O2E9PT1wJiYoYj1jKGIuaGVhZGVyKCkpLmRhdGEoXCJwcmlvcml0eVwiKSxhPWIhPT1wPzEqYjoxRTQpO3JldHVybntjbGFzc05hbWU6ZSxpbmNsdWRlSW46W10sYXV0bzohMSxjb250cm9sOiExLG5ldmVyOmUubWF0Y2goL1xcYm5ldmVyXFxiLyk/ITA6ITEscHJpb3JpdHk6YX19KSxmPWZ1bmN0aW9uKGEsYil7dmFyIGQ9ZVthXS5pbmNsdWRlSW47LTE9PT1cclxuYy5pbkFycmF5KGIsZCkmJmQucHVzaChiKX0sZz1mdW5jdGlvbihjLGQsaSxnKXtpZihpKWlmKFwibWF4LVwiPT09aSl7Zz1iLl9maW5kKGQpLndpZHRoO2Q9MDtmb3IoaT1hLmxlbmd0aDtkPGk7ZCsrKWFbZF0ud2lkdGg8PWcmJmYoYyxhW2RdLm5hbWUpfWVsc2UgaWYoXCJtaW4tXCI9PT1pKXtnPWIuX2ZpbmQoZCkud2lkdGg7ZD0wO2ZvcihpPWEubGVuZ3RoO2Q8aTtkKyspYVtkXS53aWR0aD49ZyYmZihjLGFbZF0ubmFtZSl9ZWxzZXtpZihcIm5vdC1cIj09PWkpe2Q9MDtmb3IoaT1hLmxlbmd0aDtkPGk7ZCsrKS0xPT09YVtkXS5uYW1lLmluZGV4T2YoZykmJmYoYyxhW2RdLm5hbWUpfX1lbHNlIGVbY10uaW5jbHVkZUluLnB1c2goZCl9O2UuZWFjaChmdW5jdGlvbihiLGUpe2Zvcih2YXIgZD1iLmNsYXNzTmFtZS5zcGxpdChcIiBcIiksZj0hMSxqPTAsbD1kLmxlbmd0aDtqPGw7aisrKXt2YXIgaz1jLnRyaW0oZFtqXSk7aWYoXCJhbGxcIj09PWspe2Y9ITA7Yi5pbmNsdWRlSW49Yy5tYXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lfSk7XHJcbiAgICByZXR1cm59aWYoXCJub25lXCI9PT1rfHxiLm5ldmVyKXtmPSEwO3JldHVybn1pZihcImNvbnRyb2xcIj09PWspe2Y9ITA7Yi5jb250cm9sPSEwO3JldHVybn1jLmVhY2goYSxmdW5jdGlvbihhLGIpe3ZhciBkPWIubmFtZS5zcGxpdChcIi1cIiksYz1rLm1hdGNoKFJlZ0V4cChcIihtaW5cXFxcLXxtYXhcXFxcLXxub3RcXFxcLSk/KFwiK2RbMF0rXCIpKFxcXFwtW19hLXpBLVowLTldKT9cIikpO2MmJihmPSEwLGNbMl09PT1kWzBdJiZjWzNdPT09XCItXCIrZFsxXT9nKGUsYi5uYW1lLGNbMV0sY1syXStjWzNdKTpjWzJdPT09ZFswXSYmIWNbM10mJmcoZSxiLm5hbWUsY1sxXSxjWzJdKSl9KX1mfHwoYi5hdXRvPSEwKX0pO3RoaXMucy5jb2x1bW5zPWV9LF9kZXRhaWxzRGlzcGxheTpmdW5jdGlvbihiLGEpe3ZhciBkPXRoaXMsZT10aGlzLnMuZHQsZj10aGlzLmMuZGV0YWlscztpZihmJiYhMSE9PWYudHlwZSl7dmFyIGc9Zi5kaXNwbGF5KGIsYSxmdW5jdGlvbigpe3JldHVybiBmLnJlbmRlcmVyKGUsYlswXSxkLl9kZXRhaWxzT2JqKGJbMF0pKX0pO1xyXG4gICAgKCEwPT09Z3x8ITE9PT1nKSYmYyhlLnRhYmxlKCkubm9kZSgpKS50cmlnZ2VySGFuZGxlcihcInJlc3BvbnNpdmUtZGlzcGxheS5kdFwiLFtlLGIsZyxhXSl9fSxfZGV0YWlsc0luaXQ6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGE9dGhpcy5zLmR0LGQ9dGhpcy5jLmRldGFpbHM7XCJpbmxpbmVcIj09PWQudHlwZSYmKGQudGFyZ2V0PVwidGQ6Zmlyc3QtY2hpbGQsIHRoOmZpcnN0LWNoaWxkXCIpO2Eub24oXCJkcmF3LmR0clwiLGZ1bmN0aW9uKCl7Yi5fdGFiSW5kZXhlcygpfSk7Yi5fdGFiSW5kZXhlcygpO2MoYS50YWJsZSgpLmJvZHkoKSkub24oXCJrZXl1cC5kdHJcIixcInRkLCB0aFwiLGZ1bmN0aW9uKGIpe2Iua2V5Q29kZT09PTEzJiZjKHRoaXMpLmRhdGEoXCJkdHIta2V5Ym9hcmRcIikmJmModGhpcykuY2xpY2soKX0pO3ZhciBlPWQudGFyZ2V0O2MoYS50YWJsZSgpLmJvZHkoKSkub24oXCJjbGljay5kdHIgbW91c2Vkb3duLmR0ciBtb3VzZXVwLmR0clwiLFwic3RyaW5nXCI9PT10eXBlb2YgZT9lOlwidGQsIHRoXCIsXHJcbiAgICBmdW5jdGlvbihkKXtpZihjKGEudGFibGUoKS5ub2RlKCkpLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpJiZjLmluQXJyYXkoYyh0aGlzKS5jbG9zZXN0KFwidHJcIikuZ2V0KDApLGEucm93cygpLm5vZGVzKCkudG9BcnJheSgpKSE9PS0xKXtpZih0eXBlb2YgZT09PVwibnVtYmVyXCIpe3ZhciBnPWU8MD9hLmNvbHVtbnMoKS5lcSgwKS5sZW5ndGgrZTplO2lmKGEuY2VsbCh0aGlzKS5pbmRleCgpLmNvbHVtbiE9PWcpcmV0dXJufWc9YS5yb3coYyh0aGlzKS5jbG9zZXN0KFwidHJcIikpO2QudHlwZT09PVwiY2xpY2tcIj9iLl9kZXRhaWxzRGlzcGxheShnLGZhbHNlKTpkLnR5cGU9PT1cIm1vdXNlZG93blwiP2ModGhpcykuY3NzKFwib3V0bGluZVwiLFwibm9uZVwiKTpkLnR5cGU9PT1cIm1vdXNldXBcIiYmYyh0aGlzKS5ibHVyKCkuY3NzKFwib3V0bGluZVwiLFwiXCIpfX0pfSxfZGV0YWlsc09iajpmdW5jdGlvbihiKXt2YXIgYT10aGlzLGQ9dGhpcy5zLmR0O3JldHVybiBjLm1hcCh0aGlzLnMuY29sdW1ucyxmdW5jdGlvbihlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjKXtpZighZS5uZXZlciYmIWUuY29udHJvbClyZXR1cm57dGl0bGU6ZC5zZXR0aW5ncygpWzBdLmFvQ29sdW1uc1tjXS5zVGl0bGUsZGF0YTpkLmNlbGwoYixjKS5yZW5kZXIoYS5jLm9ydGhvZ29uYWwpLGhpZGRlbjpkLmNvbHVtbihjKS52aXNpYmxlKCkmJiFhLnMuY3VycmVudFtjXSxjb2x1bW5JbmRleDpjLHJvd0luZGV4OmJ9fSl9LF9maW5kOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYT10aGlzLmMuYnJlYWtwb2ludHMsZD0wLGM9YS5sZW5ndGg7ZDxjO2QrKylpZihhW2RdLm5hbWU9PT1iKXJldHVybiBhW2RdfSxfcmVkcmF3Q2hpbGRyZW46ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGE9dGhpcy5zLmR0O2Eucm93cyh7cGFnZTpcImN1cnJlbnRcIn0pLml0ZXJhdG9yKFwicm93XCIsZnVuY3Rpb24oYyxlKXthLnJvdyhlKTtiLl9kZXRhaWxzRGlzcGxheShhLnJvdyhlKSwhMCl9KX0sX3Jlc2l6ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYT10aGlzLnMuZHQsZD1jKGwpLndpZHRoKCksZT10aGlzLmMuYnJlYWtwb2ludHMsXHJcbiAgICBmPWVbMF0ubmFtZSxnPXRoaXMucy5jb2x1bW5zLGgsaj10aGlzLnMuY3VycmVudC5zbGljZSgpO2ZvcihoPWUubGVuZ3RoLTE7MDw9aDtoLS0paWYoZDw9ZVtoXS53aWR0aCl7Zj1lW2hdLm5hbWU7YnJlYWt9dmFyIGk9dGhpcy5fY29sdW1uc1Zpc2libGl0eShmKTt0aGlzLnMuY3VycmVudD1pO2U9ITE7aD0wO2ZvcihkPWcubGVuZ3RoO2g8ZDtoKyspaWYoITE9PT1pW2hdJiYhZ1toXS5uZXZlciYmIWdbaF0uY29udHJvbCl7ZT0hMDticmVha31jKGEudGFibGUoKS5ub2RlKCkpLnRvZ2dsZUNsYXNzKFwiY29sbGFwc2VkXCIsZSk7dmFyIGs9ITE7YS5jb2x1bW5zKCkuZXEoMCkuZWFjaChmdW5jdGlvbihhLGMpe2lbY10hPT1qW2NdJiYoaz0hMCxiLl9zZXRDb2x1bW5WaXMoYSxpW2NdKSl9KTtrJiYodGhpcy5fcmVkcmF3Q2hpbGRyZW4oKSxjKGEudGFibGUoKS5ub2RlKCkpLnRyaWdnZXIoXCJyZXNwb25zaXZlLXJlc2l6ZS5kdFwiLFthLHRoaXMucy5jdXJyZW50XSkpfSxfcmVzaXplQXV0bzpmdW5jdGlvbigpe3ZhciBiPVxyXG4gICAgdGhpcy5zLmR0LGE9dGhpcy5zLmNvbHVtbnM7aWYodGhpcy5jLmF1dG8mJi0xIT09Yy5pbkFycmF5KCEwLGMubWFwKGEsZnVuY3Rpb24oYil7cmV0dXJuIGIuYXV0b30pKSl7Yi50YWJsZSgpLm5vZGUoKTt2YXIgZD1iLnRhYmxlKCkubm9kZSgpLmNsb25lTm9kZSghMSksZT1jKGIudGFibGUoKS5oZWFkZXIoKS5jbG9uZU5vZGUoITEpKS5hcHBlbmRUbyhkKSxmPWMoYi50YWJsZSgpLmJvZHkoKSkuY2xvbmUoITEsITEpLmVtcHR5KCkuYXBwZW5kVG8oZCksZz1iLmNvbHVtbnMoKS5oZWFkZXIoKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGIuY29sdW1uKGEpLnZpc2libGUoKX0pLnRvJCgpLmNsb25lKCExKS5jc3MoXCJkaXNwbGF5XCIsXCJ0YWJsZS1jZWxsXCIpO2MoZikuYXBwZW5kKGMoYi5yb3dzKHtwYWdlOlwiY3VycmVudFwifSkubm9kZXMoKSkuY2xvbmUoITEpKS5maW5kKFwidGgsIHRkXCIpLmNzcyhcImRpc3BsYXlcIixcIlwiKTtpZihmPWIudGFibGUoKS5mb290ZXIoKSl7dmFyIGY9YyhmLmNsb25lTm9kZSghMSkpLmFwcGVuZFRvKGQpLFxyXG4gICAgaD1iLmNvbHVtbnMoKS5mb290ZXIoKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGIuY29sdW1uKGEpLnZpc2libGUoKX0pLnRvJCgpLmNsb25lKCExKS5jc3MoXCJkaXNwbGF5XCIsXCJ0YWJsZS1jZWxsXCIpO2MoXCI8dHIvPlwiKS5hcHBlbmQoaCkuYXBwZW5kVG8oZil9YyhcIjx0ci8+XCIpLmFwcGVuZChnKS5hcHBlbmRUbyhlKTtcImlubGluZVwiPT09dGhpcy5jLmRldGFpbHMudHlwZSYmYyhkKS5hZGRDbGFzcyhcImR0ci1pbmxpbmUgY29sbGFwc2VkXCIpO2MoZCkuZmluZChcIltuYW1lXVwiKS5yZW1vdmVBdHRyKFwibmFtZVwiKTtkPWMoXCI8ZGl2Lz5cIikuY3NzKHt3aWR0aDoxLGhlaWdodDoxLG92ZXJmbG93OlwiaGlkZGVuXCJ9KS5hcHBlbmQoZCk7ZC5pbnNlcnRCZWZvcmUoYi50YWJsZSgpLm5vZGUoKSk7Zy5lYWNoKGZ1bmN0aW9uKGMpe2M9Yi5jb2x1bW4uaW5kZXgoXCJmcm9tVmlzaWJsZVwiLGMpO2FbY10ubWluV2lkdGg9dGhpcy5vZmZzZXRXaWR0aHx8MH0pO2QucmVtb3ZlKCl9fSxfc2V0Q29sdW1uVmlzOmZ1bmN0aW9uKGIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhKXt2YXIgZD10aGlzLnMuZHQsZT1hP1wiXCI6XCJub25lXCI7YyhkLmNvbHVtbihiKS5oZWFkZXIoKSkuY3NzKFwiZGlzcGxheVwiLGUpO2MoZC5jb2x1bW4oYikuZm9vdGVyKCkpLmNzcyhcImRpc3BsYXlcIixlKTtkLmNvbHVtbihiKS5ub2RlcygpLnRvJCgpLmNzcyhcImRpc3BsYXlcIixlKX0sX3RhYkluZGV4ZXM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLnMuZHQsYT1iLmNlbGxzKHtwYWdlOlwiY3VycmVudFwifSkubm9kZXMoKS50byQoKSxkPWIuc2V0dGluZ3MoKVswXSxlPXRoaXMuYy5kZXRhaWxzLnRhcmdldDthLmZpbHRlcihcIltkYXRhLWR0ci1rZXlib2FyZF1cIikucmVtb3ZlRGF0YShcIltkYXRhLWR0ci1rZXlib2FyZF1cIik7YT1cIm51bWJlclwiPT09dHlwZW9mIGU/XCI6ZXEoXCIrZStcIilcIjplO1widGQ6Zmlyc3QtY2hpbGQsIHRoOmZpcnN0LWNoaWxkXCI9PT1hJiYoYT1cIj50ZDpmaXJzdC1jaGlsZCwgPnRoOmZpcnN0LWNoaWxkXCIpO2MoYSxiLnJvd3Moe3BhZ2U6XCJjdXJyZW50XCJ9KS5ub2RlcygpKS5hdHRyKFwidGFiSW5kZXhcIixcclxuICAgIGQuaVRhYkluZGV4KS5kYXRhKFwiZHRyLWtleWJvYXJkXCIsMSl9fSk7ai5icmVha3BvaW50cz1be25hbWU6XCJkZXNrdG9wXCIsd2lkdGg6SW5maW5pdHl9LHtuYW1lOlwidGFibGV0LWxcIix3aWR0aDoxMDI0fSx7bmFtZTpcInRhYmxldC1wXCIsd2lkdGg6NzY4fSx7bmFtZTpcIm1vYmlsZS1sXCIsd2lkdGg6NDgwfSx7bmFtZTpcIm1vYmlsZS1wXCIsd2lkdGg6MzIwfV07ai5kaXNwbGF5PXtjaGlsZFJvdzpmdW5jdGlvbihiLGEsZCl7aWYoYSl7aWYoYyhiLm5vZGUoKSkuaGFzQ2xhc3MoXCJwYXJlbnRcIikpcmV0dXJuIGIuY2hpbGQoZCgpLFwiY2hpbGRcIikuc2hvdygpLCEwfWVsc2V7aWYoYi5jaGlsZC5pc1Nob3duKCkpcmV0dXJuIGIuY2hpbGQoITEpLGMoYi5ub2RlKCkpLnJlbW92ZUNsYXNzKFwicGFyZW50XCIpLCExO2IuY2hpbGQoZCgpLFwiY2hpbGRcIikuc2hvdygpO2MoYi5ub2RlKCkpLmFkZENsYXNzKFwicGFyZW50XCIpO3JldHVybiEwfX0sY2hpbGRSb3dJbW1lZGlhdGU6ZnVuY3Rpb24oYixhLGQpe2lmKCFhJiZcclxuICAgIGIuY2hpbGQuaXNTaG93bigpfHwhYi5yZXNwb25zaXZlLmhhc0hpZGRlbigpKXJldHVybiBiLmNoaWxkKCExKSxjKGIubm9kZSgpKS5yZW1vdmVDbGFzcyhcInBhcmVudFwiKSwhMTtiLmNoaWxkKGQoKSxcImNoaWxkXCIpLnNob3coKTtjKGIubm9kZSgpKS5hZGRDbGFzcyhcInBhcmVudFwiKTtyZXR1cm4hMH0sbW9kYWw6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXtpZihkKWMoXCJkaXYuZHRyLW1vZGFsLWNvbnRlbnRcIikuZW1wdHkoKS5hcHBlbmQoZSgpKTtlbHNle3ZhciBmPWZ1bmN0aW9uKCl7Zy5yZW1vdmUoKTtjKGspLm9mZihcImtleXByZXNzLmR0clwiKX0sZz1jKCc8ZGl2IGNsYXNzPVwiZHRyLW1vZGFsXCIvPicpLmFwcGVuZChjKCc8ZGl2IGNsYXNzPVwiZHRyLW1vZGFsLWRpc3BsYXlcIi8+JykuYXBwZW5kKGMoJzxkaXYgY2xhc3M9XCJkdHItbW9kYWwtY29udGVudFwiLz4nKS5hcHBlbmQoZSgpKSkuYXBwZW5kKGMoJzxkaXYgY2xhc3M9XCJkdHItbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9kaXY+JykuY2xpY2soZnVuY3Rpb24oKXtmKCl9KSkpLmFwcGVuZChjKCc8ZGl2IGNsYXNzPVwiZHRyLW1vZGFsLWJhY2tncm91bmRcIi8+JykuY2xpY2soZnVuY3Rpb24oKXtmKCl9KSkuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgYyhrKS5vbihcImtleXVwLmR0clwiLGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiYoYS5zdG9wUHJvcGFnYXRpb24oKSxmKCkpfSl9YiYmYi5oZWFkZXImJmMoXCJkaXYuZHRyLW1vZGFsLWNvbnRlbnRcIikucHJlcGVuZChcIjxoMj5cIitiLmhlYWRlcihhKStcIjwvaDI+XCIpfX19O2oucmVuZGVyZXI9e2xpc3RIaWRkZW46ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYixhLGQpe3JldHVybihiPWMubWFwKGQsZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGlkZGVuPyc8bGkgZGF0YS1kdHItaW5kZXg9XCInK2EuY29sdW1uSW5kZXgrJ1wiIGRhdGEtZHQtcm93PVwiJythLnJvd0luZGV4KydcIiBkYXRhLWR0LWNvbHVtbj1cIicrYS5jb2x1bW5JbmRleCsnXCI+PHNwYW4gY2xhc3M9XCJkdHItdGl0bGVcIj4nK2EudGl0bGUrJzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJkdHItZGF0YVwiPicrYS5kYXRhK1wiPC9zcGFuPjwvbGk+XCI6XCJcIn0pLmpvaW4oXCJcIikpP2MoJzx1bCBkYXRhLWR0ci1pbmRleD1cIicrYSsnXCIgY2xhc3M9XCJkdHItZGV0YWlsc1wiLz4nKS5hcHBlbmQoYik6XHJcbiAgICAhMX19LHRhYmxlQWxsOmZ1bmN0aW9uKGIpe2I9Yy5leHRlbmQoe3RhYmxlQ2xhc3M6XCJcIn0sYik7cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXthPWMubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuJzx0ciBkYXRhLWR0LXJvdz1cIicrYS5yb3dJbmRleCsnXCIgZGF0YS1kdC1jb2x1bW49XCInK2EuY29sdW1uSW5kZXgrJ1wiPjx0ZD4nK2EudGl0bGUrXCI6PC90ZD4gPHRkPlwiK2EuZGF0YStcIjwvdGQ+PC90cj5cIn0pLmpvaW4oXCJcIik7cmV0dXJuIGMoJzx0YWJsZSBjbGFzcz1cIicrYi50YWJsZUNsYXNzKycgZHRyLWRldGFpbHNcIiB3aWR0aD1cIjEwMCVcIi8+JykuYXBwZW5kKGEpfX19O2ouZGVmYXVsdHM9e2JyZWFrcG9pbnRzOmouYnJlYWtwb2ludHMsYXV0bzohMCxkZXRhaWxzOntkaXNwbGF5OmouZGlzcGxheS5jaGlsZFJvdyxyZW5kZXJlcjpqLnJlbmRlcmVyLmxpc3RIaWRkZW4oKSx0YXJnZXQ6MCx0eXBlOlwiaW5saW5lXCJ9LG9ydGhvZ29uYWw6XCJkaXNwbGF5XCJ9O3ZhciBvPWMuZm4uZGF0YVRhYmxlLkFwaTtcclxuICAgIG8ucmVnaXN0ZXIoXCJyZXNwb25zaXZlKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzfSk7by5yZWdpc3RlcihcInJlc3BvbnNpdmUuaW5kZXgoKVwiLGZ1bmN0aW9uKGIpe2I9YyhiKTtyZXR1cm57Y29sdW1uOmIuZGF0YShcImR0ci1pbmRleFwiKSxyb3c6Yi5wYXJlbnQoKS5kYXRhKFwiZHRyLWluZGV4XCIpfX0pO28ucmVnaXN0ZXIoXCJyZXNwb25zaXZlLnJlYnVpbGQoKVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0b3IoXCJ0YWJsZVwiLGZ1bmN0aW9uKGIpe2IuX3Jlc3BvbnNpdmUmJmIuX3Jlc3BvbnNpdmUuX2NsYXNzTG9naWMoKX0pfSk7by5yZWdpc3RlcihcInJlc3BvbnNpdmUucmVjYWxjKClcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdG9yKFwidGFibGVcIixmdW5jdGlvbihiKXtiLl9yZXNwb25zaXZlJiYoYi5fcmVzcG9uc2l2ZS5fcmVzaXplQXV0bygpLGIuX3Jlc3BvbnNpdmUuX3Jlc2l6ZSgpKX0pfSk7by5yZWdpc3RlcihcInJlc3BvbnNpdmUuaGFzSGlkZGVuKClcIixmdW5jdGlvbigpe3ZhciBiPVxyXG4gICAgICAgIHRoaXMuY29udGV4dFswXTtyZXR1cm4gYi5fcmVzcG9uc2l2ZT8tMSE9PWMuaW5BcnJheSghMSxiLl9yZXNwb25zaXZlLnMuY3VycmVudCk6ITF9KTtqLnZlcnNpb249XCIyLjEuMVwiO2MuZm4uZGF0YVRhYmxlLlJlc3BvbnNpdmU9ajtjLmZuLkRhdGFUYWJsZS5SZXNwb25zaXZlPWo7YyhrKS5vbihcInByZUluaXQuZHQuZHRyXCIsZnVuY3Rpb24oYixhKXtpZihcImR0XCI9PT1iLm5hbWVzcGFjZSYmKGMoYS5uVGFibGUpLmhhc0NsYXNzKFwicmVzcG9uc2l2ZVwiKXx8YyhhLm5UYWJsZSkuaGFzQ2xhc3MoXCJkdC1yZXNwb25zaXZlXCIpfHxhLm9Jbml0LnJlc3BvbnNpdmV8fG0uZGVmYXVsdHMucmVzcG9uc2l2ZSkpe3ZhciBkPWEub0luaXQucmVzcG9uc2l2ZTshMSE9PWQmJm5ldyBqKGEsYy5pc1BsYWluT2JqZWN0KGQpP2Q6e30pfX0pO3JldHVybiBqfSk7XHJcblxyXG4vKlxyXG4gKiBDdXN0b21cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoXCIuZGF0ZS1waWNrZXItYmxvY2tcIikuZmxhdHBpY2tyKHtcclxuICAgICAgICB3cmFwOiB0cnVlLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZC9tL1lcIixcclxuICAgICAgICBkaXNhYmxlTW9iaWxlOiBcInRydWVcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi50aW1lLXBpY2tlci1ibG9ja1wiKS5mbGF0cGlja3Ioe1xyXG4gICAgICAgIHdyYXA6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcclxuICAgICAgICBub0NhbGVuZGFyOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZVNlY29uZHM6IHRydWUsXHJcbiAgICAgICAgdGltZV8yNGhyOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVNb2JpbGU6IFwidHJ1ZVwiLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiSDppOnNcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdCcpLnNlYXJjaGFibGVPcHRpb25MaXN0KHtcclxuICAgICAgICBzaG93U2VsZWN0aW9uQmVsb3dMaXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dTZWxlY3RBbGw6IGZhbHNlLFxyXG4gICAgICAgIHRleHRzOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaHBsYWNlaG9sZGVyOiAnQ2hvb3NlIGFjY291bnRzLi4uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lcjogJChcIi5jb2x1bW4tMi5jb2x1bW4tYWNjb3VudFwiKSxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgb25Jbml0aWFsaXplZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvblJlbmRlcmVkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uT3BlbjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvbkNsb3NlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLnNvbC1pbm5lci1jb250YWluZXInKS5jc3MoJ3dpZHRoJywgTWF0aC5mbG9vcih0aGlzLiRpbm5lckNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25Db250YWluZXJZUG9zID0gdGhpcy4kaW5wdXQub2Zmc2V0KCkudG9wIC0gdGhpcy5jb25maWcuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCgpICsgdGhpcy4kaW5wdXQub3V0ZXJIZWlnaHQoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lckhlaWdodCA9IHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29udGFpbmVyQm90dG9tID0gc2VsZWN0aW9uQ29udGFpbmVyWVBvcyArIHNlbGVjdGlvbkNvbnRhaW5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCA9IHRoaXMuY29uZmlnLmRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLmNvbmZpZy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKCkgPCBzZWxlY3Rpb25Db250YWluZXJCb3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29udGFpbmVyV2lkdGggPSB0aGlzLiRpbm5lckNvbnRhaW5lci5vdXRlcldpZHRoKGZhbHNlKSAtIHBhcnNlSW50KHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJyksIDEwKSAtIHBhcnNlSW50KHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lci5jc3MoJ2JvcmRlci1yaWdodC13aWR0aCcpLCAxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzb2wtc2VsZWN0aW9uLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb2wtc2VsZWN0aW9uLWJvdHRvbScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRpbm5lckNvbnRhaW5lci5jc3MoJ2Rpc3BsYXknKSAhPT0gJ2Jsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoID0gc2VsZWN0aW9uQ29udGFpbmVyV2lkdGggKiAxLjI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9yZGVyUmFkaXVzU2VsZWN0b3IgPSBkaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCA/ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycgOiAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKGJvcmRlclJhZGl1c1NlbGVjdG9yLCAnaW5pdGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kYWN0aW9uQnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhY3Rpb25CdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKGJvcmRlclJhZGl1c1NlbGVjdG9yLCAnaW5pdGlhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb25Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd0b3AnLCBNYXRoLmZsb29yKHNlbGVjdGlvbkNvbnRhaW5lcllQb3MpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2xlZnQnLCBNYXRoLmZsb29yKHRoaXMuJGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsIE1hdGguZmxvb3Ioc2VsZWN0aW9uQ29udGFpbmVyV2lkdGgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5kaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCA9IGRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdC1wbGFjZScpLnNlYXJjaGFibGVPcHRpb25MaXN0KHtcclxuICAgICAgICBzaG93U2VsZWN0aW9uQmVsb3dMaXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dTZWxlY3RBbGw6IGZhbHNlLFxyXG4gICAgICAgIHRleHRzOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaHBsYWNlaG9sZGVyOiAnQ2hvb3NlIGNpdGllcy4uLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICBvbkluaXRpYWxpemVkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uUmVuZGVyZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb25PcGVuOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uQ29udGFpbmVyWVBvcyA9IHRoaXMuJGlucHV0Lm9mZnNldCgpLnRvcCAtIHRoaXMuY29uZmlnLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AoKSArIHRoaXMuJGlucHV0Lm91dGVySGVpZ2h0KGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db250YWluZXJIZWlnaHQgPSB0aGlzLiRzZWxlY3Rpb25Db250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lckJvdHRvbSA9IHNlbGVjdGlvbkNvbnRhaW5lcllQb3MgKyBzZWxlY3Rpb25Db250YWluZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgPSB0aGlzLmNvbmZpZy5kaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gdGhpcy5jb25maWcuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCgpIDwgc2VsZWN0aW9uQ29udGFpbmVyQm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoID0gdGhpcy4kaW5uZXJDb250YWluZXIub3V0ZXJXaWR0aChmYWxzZSkgLSBwYXJzZUludCh0aGlzLiRzZWxlY3Rpb25Db250YWluZXIuY3NzKCdib3JkZXItbGVmdC13aWR0aCcpLCAxMCkgLSBwYXJzZUludCh0aGlzLiRzZWxlY3Rpb25Db250YWluZXIuY3NzKCdib3JkZXItcmlnaHQtd2lkdGgnKSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc29sLXNlbGVjdGlvbi10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc29sLXNlbGVjdGlvbi1ib3R0b20nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kaW5uZXJDb250YWluZXIuY3NzKCdkaXNwbGF5JykgIT09ICdibG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db250YWluZXJXaWR0aCA9IHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoICogMS4yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvcmRlclJhZGl1c1NlbGVjdG9yID0gZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgPyAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnIDogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb25Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhib3JkZXJSYWRpdXNTZWxlY3RvciwgJ2luaXRpYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJGFjdGlvbkJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYWN0aW9uQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhib3JkZXJSYWRpdXNTZWxlY3RvciwgJ2luaXRpYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygndG9wJywgTWF0aC5mbG9vcihzZWxlY3Rpb25Db250YWluZXJZUG9zKSlcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdsZWZ0JywgTWF0aC5mbG9vcih0aGlzLiRjb250YWluZXIub2Zmc2V0KCkubGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnd2lkdGgnLCBNYXRoLmZsb29yKHNlbGVjdGlvbkNvbnRhaW5lcldpZHRoKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0ID0gZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsZWN0LW11bHRpJykuc2VhcmNoYWJsZU9wdGlvbkxpc3Qoe1xyXG4gICAgICAgIHNob3dTZWxlY3Rpb25CZWxvd0xpc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1NlbGVjdEFsbDogZmFsc2UsXHJcbiAgICAgICAgdGV4dHM6IHtcclxuICAgICAgICAgICAgc2VhcmNocGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgb25Jbml0aWFsaXplZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvblJlbmRlcmVkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uT3BlbjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvbkNsb3NlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIG9uU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkNvbnRhaW5lcllQb3MgPSB0aGlzLiRpbnB1dC5vZmZzZXQoKS50b3AgLSB0aGlzLmNvbmZpZy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wKCkgKyB0aGlzLiRpbnB1dC5vdXRlckhlaWdodChmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29udGFpbmVySGVpZ2h0ID0gdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db250YWluZXJCb3R0b20gPSBzZWxlY3Rpb25Db250YWluZXJZUG9zICsgc2VsZWN0aW9uQ29udGFpbmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0ID0gdGhpcy5jb25maWcuZGlzcGxheUNvbnRhaW5lckFib3ZlSW5wdXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuY29uZmlnLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AoKSA8IHNlbGVjdGlvbkNvbnRhaW5lckJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db250YWluZXJXaWR0aCA9IHRoaXMuJGlubmVyQ29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpIC0gcGFyc2VJbnQodGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSwgMTApIC0gcGFyc2VJbnQodGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NvbC1zZWxlY3Rpb24tdG9wJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NvbC1zZWxlY3Rpb24tYm90dG9tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJGlubmVyQ29udGFpbmVyLmNzcygnZGlzcGxheScpICE9PSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29udGFpbmVyV2lkdGggPSBzZWxlY3Rpb25Db250YWluZXJXaWR0aCAqIDEuMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib3JkZXJSYWRpdXNTZWxlY3RvciA9IGRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0ID8gJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyA6ICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoYm9yZGVyUmFkaXVzU2VsZWN0b3IsICdpbml0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRhY3Rpb25CdXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFjdGlvbkJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoYm9yZGVyUmFkaXVzU2VsZWN0b3IsICdpbml0aWFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbkNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3RvcCcsIE1hdGguZmxvb3Ioc2VsZWN0aW9uQ29udGFpbmVyWVBvcykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcygnbGVmdCcsIE1hdGguZmxvb3IodGhpcy4kY29udGFpbmVyLm9mZnNldCgpLmxlZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgTWF0aC5mbG9vcihzZWxlY3Rpb25Db250YWluZXJXaWR0aCkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5kaXNwbGF5Q29udGFpbmVyQWJvdmVJbnB1dCA9IGRpc3BsYXlDb250YWluZXJBYm92ZUlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnN1bW9zZWxlY3QnKS5TdW1vU2VsZWN0KCk7XHJcblxyXG4gICAgJCgnLmFjY29yZGlvbi10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiggJCh0aGlzKS5oYXNDbGFzcygnb3BlbicpID09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmFjY29yZGlvbi1jb250YWluZXInKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ1dHRvbi1zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5yZXN1bHRzLXdyYXAnKS50b2dnbGUoKTtcclxuICAgICAgICB9KS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjcmVzdWx0cy10YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBcImRvbVwiOiAndCcsXHJcbiAgICAgICAgICAgICAgICBcImluZm9cIjogICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsWTogJzUwdmgnLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29sbGFwc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkdC1sZWZ0XCIsICd0YXJnZXRzJzogWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkdC1jZW50ZXJcIiwgdGFyZ2V0czogJ19hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvL21vZGFsXHJcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBZGQnKTtcclxuICAgIHZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQnRuXCIpO1xyXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlQWRkXCIpO1xyXG5cclxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=

"use strict";(self.webpackChunkanpan_webpage=self.webpackChunkanpan_webpage||[]).push([[7508,6403],{9962:(e,a,n)=>{var t=n(6876);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},6876:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,o){if(n.language===t){var r=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"==typeof o&&!o(e))return e;for(var s,i=r.length;-1!==n.code.indexOf(s=a(t,i));)++i;return r[i]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,o=Object.keys(n.tokenStack);!function r(i){for(var u=0;u<i.length&&!(s>=o.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var l=o[s],p=n.tokenStack[l],c="string"==typeof g?g:g.content,f=a(t,l),k=c.indexOf(f);if(k>-1){++s;var d=c.substring(0,k),m=new e.Token(t,e.tokenize(p,n.grammar),"language-"+t,p),h=c.substring(k+f.length),v=[];d&&v.push.apply(v,r([d])),v.push(m),h&&v.push.apply(v,r([h])),"string"==typeof g?i.splice.apply(i,[u,1].concat(v)):g.content=v}}else g.content&&r(g.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(4),i=n.n(s),u=(n(21),n(8)),d=(n.p,n(22),n(3)),l=function(e){var t=function(t,n,c,a){e.updateNestedKeyValue({key:t,nestedKey:n,language:c,value:a})};return Object(c.jsx)(c.Fragment,{children:e.i18n.map((function(n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"horizontalRow",children:[Object(c.jsx)("input",{type:"text",value:n.key,onChange:function(t){e.changeMainKeyName(n.key,t.target.value)}}),Object(c.jsx)("button",{onClick:function(){return e.createNewNestedKey(n.key)},children:"Add item"}),Object(c.jsx)("button",{onClick:function(){return t=n.key,void("yes"===prompt("Are you sure to delete? Type 'yes' to confirm").toLocaleLowerCase()&&e.deleteMainKey(t));var t},children:"Delete Nested Item"})]}),Object.entries(n.values).length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"key"}),Object(c.jsx)("th",{children:"en"}),Object(c.jsx)("th",{children:"tc"}),Object(c.jsx)("th",{children:"Del"})]}),n.values.map((function(a){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("input",{type:"text",value:a.key,onChange:function(t){return c=n.key,r=a.key,s=t.target.value,void e.updateNestedKey(c,r,s);var c,r,s}}),Object(c.jsx)("button",{class:"copy-button","data-clipboard-text":"FlutterI18n.translate(context, '".concat(n.key,".").concat(a.key,"')"),children:"Copy"})]}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",value:a.en,onChange:function(e){return t(n.key,a.key,"en",e.target.value)},onBlur:function(){return t=n.key,c=a.key,""===(r=a.en).tc&&e.updateNestedKeyValue({key:t,nestedKey:c,language:"tc",value:r.en}),void(""===r.sc&&e.updateNestedKeyValue({key:t,nestedKey:c,language:"sc",value:r.en}));var t,c,r}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",value:a.tc,onChange:function(e){return t(n.key,a.key,"tc",e.target.value)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return e.deleteNestedKeyValue(n.key,a.key)},children:"del"})})]})}))]}),Object(c.jsx)("br",{})]}):null]})}))})};var o=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.i18n})),n=function(e){var n,c={},a=Object(u.a)(t);try{for(a.s();!(n=a.n()).done;){var r,s=n.value,i={},d=Object(u.a)(s.values);try{for(d.s();!(r=d.n()).done;){var l=r.value;i[l.key]=l[e]}}catch(o){d.e(o)}finally{d.f()}c[s.key]=i}}catch(o){a.e(o)}finally{a.f()}return JSON.stringify(c,void 0,4)},r=n("tc");console.log("output",r);var s=a.useRef(),i=a.useRef(),o=a.useRef(),y=a.useRef();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{id:"heading",children:"Flutter i18n Manager"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"header-button",onClick:function(){var t=prompt("Enter the new key name: ");t&&e.i18n.createNewMainKey({key:t})},children:"Add main category"}),Object(c.jsx)("button",{className:"header-button",onClick:function(){var t=prompt("Input the backup below");t&&e.i18n.importFromBackup(JSON.parse(t))},children:"Import"}),Object(c.jsx)("button",{className:"header-button",onClick:function(){s.current.click(),i.current.click(),o.current.click(),y.current.click()},children:"Download"})]})]}),Object(c.jsxs)("main",{children:[Object(c.jsxs)("div",{className:"card horizontalRow",children:[Object(c.jsx)("a",{ref:s,style:{display:"none"},href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),download:"backup.json",children:"Backup"}),Object(c.jsx)("a",{ref:i,style:{display:"none"},href:"data:text/plain;charset=utf-8,"+encodeURIComponent(n("en")),download:"en.json",children:"EN"}),Object(c.jsx)("a",{ref:o,style:{display:"none"},href:"data:text/plain;charset=utf-8,"+encodeURIComponent(n("tc")),download:"tc.json",children:"TC"}),Object(c.jsx)("a",{ref:y,style:{display:"none"},href:"data:text/plain;charset=utf-8,"+encodeURIComponent(n("sc")),download:"sc.json",children:"SC"})]}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{children:Object(c.jsx)(l,{i18n:t,changeMainKeyName:function(t,n){e.i18n.changeMainKeyName({key:t,value:n})},deleteMainKey:function(t){e.i18n.deleteMainKey({key:t})},createNewNestedKey:function(t){var n=prompt("Enter the new nested key name: ");n&&e.i18n.newNestedKey({key:t,nestedKey:n})},updateNestedKey:function(t,n,c){e.i18n.updateNestedKey({mainKey:t,nestedKey:n,newNestedKey:c})},updateNestedKeyValue:function(t){var n=t.key,c=t.nestedKey,a=t.language,r=t.value;e.i18n.updateNestedKeyValue({key:n,nestedKey:c,language:a,value:r})},deleteNestedKeyValue:function(t,n){"yes"===prompt("Are you sure to delete? type 'yes' to cofirm")&&e.i18n.deleteNestedKeyValue({key:t,nestedKey:n})}})})}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h2",{children:"Output"}),Object(c.jsx)("p",{children:JSON.stringify(t)}),Object(c.jsx)("h3",{children:"en"}),Object(c.jsx)("p",{children:n("en")}),Object(c.jsx)("h3",{children:"tc"}),Object(c.jsx)("p",{children:n("tc")}),Object(c.jsx)("h3",{children:"sc"}),Object(c.jsx)("p",{children:n("sc")})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},j=n(11),h=n(15),f=n(12),b=n.n(f),p=n(14),k=n(13),O=(n(32),{state:[],reducers:{importFromBackup:function(e,t){return t},createNewMainKey:function(e,t){return e.some((function(e){return e.key===t.key}))||e.push({key:t.key,values:[]}),e},changeMainKeyName:function(e,t){return e.find((function(e){return e.key===t.key})).key=t.value,e},deleteMainKey:function(e,t){var n=e.findIndex((function(e){return e.key===t.key}));return e.splice(n,1),e},newNestedKey:function(e,t){var n=e.find((function(e){return e.key===t.key}));return n.values.find((function(e){return e.key===t.nestedKey}))||n.values.push({key:t.nestedKey,en:"",tc:"",sc:""}),e},updateNestedKey:function(e,t){return e.find((function(e){return e.key===t.mainKey})).values.find((function(e){return e.key===t.nestedKey})).key=t.newNestedKey,e},updateNestedKeyValue:function(e,t){var n=t.key,c=t.nestedKey,a=t.language,r=t.value,s=e.find((function(e){return e.key===n})).values.find((function(e){return e.key===c}));return s[a]=r,s.sc=Object(k.sify)(s.tc),e},deleteNestedKeyValue:function(e,t){var n=t.key,c=t.nestedKey,a=e.find((function(e){return e.key===n})),r=a.values.findIndex((function(e){return e.key===c}));return a.values.splice(r,1),e}}}),x={key:"root",storage:b.a},v=Object(j.a)({models:{i18n:O},plugins:[Object(h.a)(),Object(p.a)(x)]});i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d.a,{store:v,children:Object(c.jsx)(o,{})})}),document.getElementById("root")),y()}},[[35,1,2]]]);
//# sourceMappingURL=main.fc5e0ca6.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={notfound:"Error404_notfound__1FruR",row:"Error404_row__1xNtj",centered:"Error404_centered__1Wn7R",inverted:"Error404_inverted__ewOoy",shadow:"Error404_shadow__1eIts",blink:"Error404_blink__3KHUx",blinkingText:"Error404_blinkingText__1JAN3"}},,,,,function(e,a,t){e.exports={app:"Affairs_app__2qQXA",affair:"Affairs_affair__1dyBE",filterButton:"Affairs_filterButton__3kk9_"}},function(e,a,t){e.exports={active:"Header_active__lS89J",header:"Header_header__DzC6z"}},function(e,a,t){e.exports={message:"Message_message__1ZLZz",inform:"Message_inform__GD2u4",name:"Message_name__3Da9_",text:"Message_text__1mmY6",clock:"Message_clock__2dTf7",comment_bubble:"Message_comment_bubble__3_k3-"}},,,,,function(e,a,t){e.exports={container:"Greeting_container__2oONp",inputContainer:"Greeting_inputContainer__iblyH",error:"Greeting_error__2WqJg"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__34WLl",errorInput:"SuperInputText_errorInput__1JKKf",error:"SuperInputText_error__1L36l"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__1blGH",column:"HW4_column__1Yex_"}},function(e,a,t){e.exports={default:"SuperButton_default__12KdO",red:"SuperButton_red__hNbyq"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__35nmC",spanClassName:"SuperCheckbox_spanClassName__L4I1G"}},,,,function(e,a,t){e.exports={App:"App_App__3vHda"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(34),t(26)),s=t.n(o),i=t(3),m=t(7),u=t.n(m),d=t(9);var E=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:u.a.header,onClick:function(){l(!t)}},t&&r.a.createElement("ul",{className:u.a.ul},r.a.createElement("li",{className:u.a.li},r.a.createElement(d.b,{activeClassName:u.a.active,to:"/pre-junior"},"Pre Junior")),r.a.createElement("li",{className:u.a.li},r.a.createElement(d.b,{activeClassName:u.a.active,to:"/junior"},"Junior")),r.a.createElement("li",{className:u.a.li},r.a.createElement(d.b,{activeClassName:u.a.active,to:"/junior-plus"},"Junior Plus"))))},p=t(2),_=t(8),f=t.n(_);var v=function(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{id:f.a.comment_bubble,className:f.a.inform},r.a.createElement("div",{className:f.a.user},r.a.createElement("p",{className:f.a.name},e.name),r.a.createElement("p",{className:f.a.text},e.message)),r.a.createElement("div",null,r.a.createElement("p",{className:f.a.clock},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",N="some text",k="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:b,message:N,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(6),w=t.n(C);var x=function(e){return r.a.createElement("div",{className:w.a.affair},e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:w.a.filterButton,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:w.a.filterButton,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:w.a.filterButton,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:w.a.filterButton,onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(y),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),s=o[0],m=o[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",{className:w.a.app},r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:u,setFilter:m,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(28),S=t(13),T=t.n(S),B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l.trim()?T.a.error:"";return r.a.createElement("div",{className:T.a.inputContainer},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],E=u[1],p=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){E(""),s(e.currentTarget.value)},addUser:function(){o.trim()?(t(o),alert("Hello  ".concat(o,"!")),s("")):E("error")},error:d,totalUsers:p})},J=t(42);var H=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:T.a.container},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(J.a)(),name:e};l([a].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(10),W=t(15),D=t.n(W),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(D.a.error," ").concat(s||""),u="".concat(c?D.a.errorInput:D.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},L=t(20),M=t.n(L),G=t(21),K=t.n(G),U=function(e){var a=e.red,t=e.className,n=Object(P.a)(e,["red","className"]),l="".concat(a?K.a.red:K.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},q=t(22),R=t.n(q),Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(R.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t?t(e.currentTarget.checked):a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:R.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:o,error:c,className:M.a.blue}),r.a.createElement(U,{red:!!c,onClick:o},"delete "),r.a.createElement(Y,{checked:u,onChangeChecked:d},"some text "),r.a.createElement(Y,{checked:u,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(H,null),r.a.createElement(z,null))},Z=t(1),Q=t.n(Z);var $=function(){return r.a.createElement("div",{className:Q.a.notfound},r.a.createElement("div",{className:Q.a.centered},r.a.createElement("span",{className:Q.a.inverted},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),"\xa0"),r.a.createElement("div",{className:Q.a.centered},r.a.createElement("span",{className:Q.a.inverted},"\xa04\xa00\xa04\xa0"),r.a.createElement("span",{className:Q.a.shadow},"\xa0")),r.a.createElement("div",{className:Q.a.centered},r.a.createElement("span",{className:Q.a.inverted},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),r.a.createElement("span",{className:Q.a.shadow},"\xa0")),r.a.createElement("div",{className:Q.a.centered},"\xa0",r.a.createElement("span",{className:Q.a.shadow},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),r.a.createElement("div",{className:Q.a.row},"\xa0"),r.a.createElement("div",{className:Q.a.row},"A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E."),r.a.createElement("div",{className:Q.a.row},"The current request will be terminated."),r.a.createElement("div",{className:Q.a.row},"\xa0"),r.a.createElement("div",{className:Q.a.row},"* Press any key to return to the previous page."),r.a.createElement("div",{className:Q.a.row},"* Press CTRL+ALT+DEL to restart your computer. You will"),r.a.createElement("div",{className:Q.a.row},"\xa0\xa0lose any unsaved information in all applications."),r.a.createElement("div",{className:Q.a.row},"\xa0"),r.a.createElement("div",{className:Q.a.centered},"Press any key to continue...",r.a.createElement("span",{className:Q.a.blink},"\u2588")))};var V=function(){return r.a.createElement("div",null,"Junior page")};var ee=function(){return r.a.createElement("div",null,"Junior Plus Page")},ae="/pre-junior",te="/junior",ne="/junior-plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:ae})}}),r.a.createElement(p.b,{path:ae,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(p.b,{path:te,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(p.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement($,null)}})))};var le=function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(E,null),r.a.createElement(re,null)))};var ce=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.aa603296.chunk.js.map
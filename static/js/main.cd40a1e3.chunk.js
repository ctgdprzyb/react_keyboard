(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),c=n(4),s=n(5),a=n(7),u=n(6),i=n(1),l=n.n(i),p=n(0),d=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){console.log(t.key),e.setState({pressedKey:t.key})}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",(function(e){console.log(e.key)}))}},{key:"render",value:function(){var e=this.state.pressedKey;return e?Object(p.jsx)("p",{children:"The last pressed key is [".concat(e,"]")}):Object(p.jsx)("p",{children:"Nothing was pressed yet"})}}]),n}(l.a.Component);n(13);r.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd40a1e3.chunk.js.map
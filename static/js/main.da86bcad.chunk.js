(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),s=n(4),c=n(5),u=n(7),l=n(6),d=n(1),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={longitude:null,latitude:null,err:""},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){return t.setState({latitude:e.coords.latitude,longitude:e.coords.longitude})}),(function(e){return t.setState({err:e})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.state.err?alert("There is an error. Maybe you dont give location permission"):window.location.replace("https://maps.google.com/?q=".concat(this.state.latitude,",").concat(this.state.longitude))})}}]),n}(r.a.Component);i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.da86bcad.chunk.js.map
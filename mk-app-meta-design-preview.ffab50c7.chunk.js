webpackJsonp([27],{1873:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u,a=n(2),r=i(a),s=n(62),c=i(s),f=n(5),d=i(f),l=n(10),p=i(l),m=n(7),v=i(m),h=n(8),_=i(h),M=n(0),g=(i(M),n(289)),w=n(696),y=i(w),A=(o=(0,g.wrapper)(y.default))(u=function(t){function e(){return(0,d.default)(this,e),(0,v.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,p.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.props.uiMeta==t.uiMeta&&this.props.uiData==t.uiData||this.props.componentWillReceiveProps(t)}},{key:"render",value:function(){return this.props.monkeyKing((0,r.default)({},this.props,{path:"root"}))}}]),e}(M.Component))||u;e.default=A,t.exports=e.default},1874:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new f.action(t),n=new h((0,a.default)({},t,{metaAction:e})),i=(0,a.default)({},e,n);return e.config({metaHandlers:i}),i}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),a=i(u),r=n(5),s=i(r);e.default=o;var c=n(0),f=(i(c),n(289)),d=n(647),l=i(d),p=n(189),m=n(12),v=i(m),h=function t(e){var n=this;(0,s.default)(this,t),this.onInit=function(t){var e=t.component,i=t.injections;n.component=e,n.injections=i,i.reduce("init"),n.metaAction.setMetaForce("mk-app-meta-design-preview",v.default.string.toJson(n.component.props.uiMeta)),n.metaAction.sf("data",(0,p.fromJS)(v.default.string.toJson(n.component.props.uiData)))},this.componentWillReceiveProps=function(t){setTimeout(function(){n.metaAction.setMetaForce("mk-app-meta-design-preview",v.default.string.toJson(t.uiMeta)),n.metaAction.sf("data",(0,p.fromJS)(v.default.string.toJson(t.uiData)))},0)},this.metaAction=e.metaAction,this.config=l.default.current};t.exports=e.default},1875:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new c.reducer(t),n=new p((0,a.default)({},t,{metaReducer:e}));return(0,a.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),a=i(u),r=n(5),s=i(r);e.default=o;var c=(n(189),n(289)),f=n(647),d=i(f),l=n(697),p=function t(e){var n=this;(0,s.default)(this,t),this.init=function(t,e){var i=(0,l.getInitState)();return n.metaReducer.init(t,i)},this.metaReducer=e.metaReducer,this.config=d.default.current};t.exports=e.default}});
"use strict";(self["webpackChunkwhereismyhome_vue"]=self["webpackChunkwhereismyhome_vue"]||[]).push([[316],{5316:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var s=e(8668),r=e(4488),i=e(3796),n=e(9832),c=e(9664),o=e(3700),l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"py-8"},[a(n.c,{staticClass:"black"}),a(c.c,{staticClass:"my-4",attrs:{justify:"space-between"}},[a(r.c,[a("div",[t._v(t._s(t.article.title))]),a("div",{staticClass:"grey--text"},[t._v(t._s(t.article.nickname)+" | "+t._s(t.article.registerTime))])]),a(c.c,{staticClass:"mr-3",attrs:{justify:"end",align:"center"}},[a(s.c,{staticClass:"ma-1",attrs:{to:{name:"boardupdate",params:{articleNo:t.articleNo}}}},[t._v("수정")]),a(s.c,{staticClass:"ma-1",on:{click:t.deleteArticle}},[t._v("삭제")])],1)],1),a(n.c),a(i.c,{staticClass:"my-4",domProps:{innerHTML:t._s(t.article.content)}}),a(n.c),a(c.c,{staticClass:"my-4",attrs:{justify:"center"}},[a(s.c,{staticClass:"ma-2",attrs:{large:"",color:"primary",width:"150px"},on:{click:t.moveList}},[t._v("목록")])],1),a(c.c,{staticClass:"grey lighten-4 pa-6 my-6",attrs:{align:"center"}},[a(o.c,{staticClass:"mr-4 white",attrs:{placeholder:"댓글을 입력해주세요.",outlined:"","hide-details":""}}),a(s.c,{attrs:{large:""}},[t._v("등록")])],1),t._l(3,(function(t){return a("board-comment-item",{key:t})}))],2)},u=[],d=(e(1960),e(8192)),m=e(8352),f=e(8792),p=function(){var t=this,a=t._self._c;return a(r.c,{staticClass:"pa-0"},[a(c.c,{attrs:{justify:"space-between"}},[a(c.c,{staticClass:"ma-1",attrs:{align:"center"}},[a(m.c,{staticClass:"ma-1",attrs:{size:"32"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),a(r.c,[a("div",[t._v("작성자")]),a("div",{staticClass:"grey--text"},[t._v("2022.11.22 11:38:05")])])],1),a(c.c,{staticClass:"ma-2",attrs:{align:"center",justify:"end"}},[a(s.c,{staticClass:"ma-1",attrs:{fab:"",elevation:"1",small:""}},[a(f.c,[t._v("mdi-delete")])],1),a(s.c,{staticClass:"ma-1",attrs:{fab:"",elevation:"1",small:""}},[a(f.c,[t._v("mdi-pencil")])],1)],1)],1),a("div",{staticClass:"pa-2"},[t._v(" 코딩테스트만 준비하면 될 것 같은데 적성검사 까지 준비하려니 너무 힘에 부칩니다. 이에 대한 여러분의 대비책이 있으신지 궁금합니다. ")]),a(n.c,{staticClass:"my-2"})],1)},h=[],g={name:"BoardCommentItem"},v=g,y=e(2528),C=(0,y.c)(v,p,h,!1,null,null,null),_=C.exports,$={components:{BoardCommentItem:_},name:"BoardDetail",data(){return{mainWidth:this.$store.state.mainStore.mainWidth,articleNo:this.$route.params.articleNo,article:{}}},created(){let t=this.$route.params.articleNo;(0,d.io)(t,(({data:t})=>{this.article=t}),(t=>{console.log(t)}))},methods:{deleteArticle(){let t=this.$route.params.articleNo;confirm("정말로 삭제?")&&(0,d.K2)(t,(({data:t})=>{let a="삭제 처리시 문제가 발생했습니다.";!0===t&&(a="삭제가 완료되었습니다."),alert(a),this.$router.push({name:"community"})}),(t=>{console.log(t)}))},moveList(){let t=this.$store.state.boardStore.categoryTab,a=2==t?"notice":3==t?"helpcenter":"community";this.$router.push({name:a})}}},b=$,j=(0,y.c)(b,l,u,!1,null,null,null),k=j.exports},3796:function(t,a,e){e(5596),e(4420);var s=e(5916),r=e(1872);a.c=(0,s.c)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:e,children:s}){let i;const{attrs:n}=e;return n&&(e.attrs={},i=Object.keys(n).filter((t=>{if("slot"===t)return!1;const a=n[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a}))),a.id&&(e.domProps=e.domProps||{},e.domProps.id=a.id),t(a.tag,(0,r.cp)(e,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),s)}})},5916:function(t,a,e){e.d(a,{c:function(){return r}});var s=e(7768);function r(t){return s["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:e,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:i}=s;if(i){s.attrs={};const t=Object.keys(i).filter((t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),a(e.tag,s,r)}})}},8192:function(t,a,e){e.d(a,{GY:function(){return c},K2:function(){return d},_i:function(){return n},gh:function(){return l},iC:function(){return u},io:function(){return o}});var s=e(488);const r=(0,s.I)(),i="/board";function n(t,a,e){r.get(`${i}`,{params:t}).then(a).catch(e)}function c(t,a,e){r.get(`${i}/count`,{params:t}).then(a).catch(e)}function o(t,a,e){r.get(`${i}/${t}`).then(a).catch(e)}function l(t,a,e){r.post(`${i}`,JSON.stringify(t)).then(a).catch(e)}function u(t,a,e){r.put(`${i}`,JSON.stringify(t)).then(a).catch(e)}function d(t,a,e){r.delete(`${i}/${t}`).then(a).catch(e)}}}]);
//# sourceMappingURL=316.977f24f9.js.map
"use strict";(self["webpackChunkwhereismyhome_vue"]=self["webpackChunkwhereismyhome_vue"]||[]).push([[740],{7136:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var a=i(4252),s=i(9664),n=i(1464),r=function(){var t=this,e=t._self._c;return e("div",[e(s.c,{staticClass:"my-4"},[e(n.c),e("search-bar"),e(n.c)],1),e("board-list"),e("div",{staticClass:"text-center my-8"},[e(a.c,{attrs:{length:t.getPageLen},on:{input:t.clickPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},o=[],l=i(8416),h=i(4344),u=i(5166),c={name:"NoticeMain",components:{SearchBar:h.c,BoardList:u.c},data(){return{mainWidth:this.$store.state.mainStore.mainWidth,page:this.$store.state.boardStore.pgno,options:[{text:"제목",value:"title"},{text:"내용",value:"contents"}]}},methods:{...(0,l.sR)("boardStore",["SET_PAGE_SIZE","SET_SEARCH_OPTIONS","SET_CATEGORY_TAB","SET_PGNO"]),clickPage(){this.SET_PGNO(this.page),this.$router.go()}},created(){this.SET_SEARCH_OPTIONS(this.options),this.SET_CATEGORY_TAB(2),this.SET_PAGE_SIZE("10")},computed:{getPageLen(){return parseInt(this.$store.state.boardStore.pageLength)}}},p=c,g=i(2528),d=(0,g.c)(p,r,o,!1,null,null,null),v=d.exports},4344:function(t,e,i){i.d(e,{c:function(){return v}});var a=i(8668),s=i(4488),n=i(9664),r=i(8916),o=i(3700),l=function(){var t=this,e=t._self._c;return e("div",[e(n.c,{staticClass:"my-1 pa-1",attrs:{align:"center"}},[e(s.c,{staticClass:"pa-1",attrs:{cols:"3"}},[e(r.c,{attrs:{items:t.getOptions,dense:"",outlined:"","hide-details":""},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}})],1),e(s.c,{staticClass:"pa-2",attrs:{cols:"7"}},[e(o.c,{attrs:{type:"text",outlined:"","hide-details":"",dense:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),e(s.c,{staticClass:"pa-1",attrs:{cols:"2"}},[e(a.c,{attrs:{color:"primary",width:"100%"},on:{click:t.search}},[t._v("검색")])],1)],1)],1)},h=[],u=i(8416),c={name:"BoardSearch",data(){return{option:this.$store.state.boardStore.option,keyword:this.$store.state.boardStore.keyword}},computed:{getOptions(){return this.$store.state.boardStore.searchOptions}},methods:{...(0,u.sR)("boardStore",["SET_OPTION","SET_KEYWORD","SET_PGNO"]),search(){this.SET_OPTION(this.option),this.SET_KEYWORD(this.keyword),this.SET_PGNO(1),this.$router.go()}}},p=c,g=i(2528),d=(0,g.c)(p,l,h,!1,null,null,null),v=d.exports},4252:function(t,e,i){i.d(e,{c:function(){return h}});i(1960);var a=i(8568),s=i(5976),n=i(672),r=i(240),o=i(6236),l=i(2752),h=(0,l.c)(n.c,(0,r.c)({onVisible:["init"]}),o.c).extend({name:"v-pagination",directives:{Resize:s.c},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+i;if(this.value>a&&this.value<s){const t=1,e=this.length,s=this.value-a+2,n=this.value+a-2-i,r=s-1===t+1?2:"...",o=n+1===e-1?n+1:"...";return[1,r,...this.range(s,n),o,this.length]}if(this.value===a){const t=this.value+a-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===s){const t=this.value-a+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,a),"...",...this.range(s,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let a=t;a<=e;a++)i.push(a);return i},genIcon(t,e,i,s,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:s}},[t(a.c,[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),a=e===this.value,s=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=740.32a7f2ce.js.map
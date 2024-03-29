import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/AppMain"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/AppCommunity"),
    redirect: "/community/main",
    children: [
      {
        path: "main",
        name: "boardmain",
        component: () => import("@/components/board/BoardMain"),
      },
      {
        path: "write",
        name: "boardwrite",
        component: () => import("@/components/board/BoardWrite"),
      },
      {
        path: "detail/:articleNo",
        name: "boarddetail",
        component: () => import("@/components/board/BoardDetail"),
      },
      {
        path: "update",
        name: "boardupdate",
        component: () => import("@/components/board/BoardUpdate"),
      },
    ],
  },
  {
    path: "/groupbuy",
    name: "groupbuy",
    component: () => import("@/views/AppGroupbuy"),
  },
  {
    path: "/member",
    name: "member",
    component: () => import("@/views/AppMember"),
    redirect: "/member/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/member/MemberLogin"),
      },
      {
        path: "findpw",
        name: "findpw",
        component: () => import("@/components/member/MemberFindPw"),
      },
      {
        path: "auth",
        name: "auth",
        component: () => import("@/components/member/MemberAuth"),
      },
      {
        path: "updatepw",
        name: "updatepw",
        component: () => import("@/components/member/MemberUpdatePw"),
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/member/MemberJoin"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/AppMypage"),
    children: [
      {
        path: "myinfo",
        name: "myinfo",
        component: () => import("@/components/mypage/MyInfo"),
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: () => import("@/components/mypage/MyWishlist"),
      },
      {
        path: "mycommunity",
        name: "mycommunity",
        component: () => import("@/components/mypage/MyCommunity"),
      },
    ],
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/AppNotice"),
    redirect: "/notice/main",
    children: [
      {
        path: "main",
        name: "noticemain",
        component: () => import("@/components/etc/NoticeMain"),
      },
      {
        path: "detail/:articleNo",
        name: "noticedetail",
        component: () => import("@/components/board/BoardDetail"),
      },
    ],
  },
  {
    path: "/helpcenter",
    name: "helpcenter",
    component: () => import("@/views/AppHelpcenter"),
    redirect: "/helpcenter/qna",
    children: [
      {
        path: "qna",
        name: "qna",
        component: () => import("@/components/etc/TheQna"),
        children: [
          {
            path: "detail/:articleNo",
            name: "qnadetail",
            component: () => import("@/components/board/BoardDetail"),
          },
        ],
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/components/etc/TheFaq"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

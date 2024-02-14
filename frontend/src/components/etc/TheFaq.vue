<template>
  <div class="mt-12" style="height: 60vh">
    <v-expansion-panels v-model="panel" multiple accordion focusable>
      <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
        <v-expansion-panel-header class="font-weight-bold">Q. {{faq.q}}</v-expansion-panel-header>
        <v-expansion-panel-content class="font-weight-bold">
          <br>
          A. {{faq.a}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "TheFaq",
  data() {
    return {
      panel: [],
      items: 5,
      // temp data
      faqs: [
        {
          q: "KEY BOARD는 어떤 서비스인가요?",
          a: "키보드 커뮤니티인 'KEY BOARD'는 키보드 관련 정보를 사람들과 공유할 수 있는 게시판이에요."
        },
        {
          q: "KEY BOARD에서 어떤 활동을 할 수 있나요?",
          a: "키보드 구매/공제 정보나 키보드 관련 지식 공유를 하고 있어요."
        },
        {
          q: "커뮤니티에 등록한 글을 수정/삭제 하고 싶어요.",
          a: "[우측 상단 프로필 > 내글 목록] 에 들어가시면 수정/삭제 가능합니다."
        },
      ]
    }
  },
};
</script>
<template>
  <div class="index-container d-flex justify-center align-center align-content-center flex-wrap line">
    <v-row class="index-container__topic">
      <v-col class="index-container__title d-flex justify-center align-center pb-0 cursor-default" cols="12"
        style="font-size: 3rem;">RETURN</v-col>
      <v-col class="index-container__subtitle d-flex justify-center align-center pt-0 cursor-default" cols="12">By
        LikeDreamwalker</v-col>
    </v-row>
    <!-- <v-row class="index-container__menu">
      <v-col class="index-container__menu-item d-flex justify-center align-baseline" cols="12" v-for="item, index in menu"
        :key="index">
        <span class="index-container__menu-item--chn"> {{ item.renderTitleName }}</span>
        <span class="index-container__menu-item--eng"> / {{ item.renderTitleText }}</span>
      </v-col>
    </v-row> -->
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'default',
  renderTitleName: 'LDWINDEX',
  keepalive: true
})
const menu = ref([
  {
    renderTitleName: "应用",
    renderTitleText: "APPS",
    to: "/apps",
  },
  {
    renderTitleName: "故事",
    renderTitleText: "STORIES",
    to: "https://stories.ldwid.com/",
  },
  {
    renderTitleName: "相册",
    renderTitleText: "STORIES",
    to: "https://stories.ldwid.com/",
  },
])
</script>
<style lang="scss" scoped>
.index-container {

  &__title {
    font-size: 3.25rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    font-family: "Cormorant Garamond", serif;
  }

  &__subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
  }

  &__menu-item {


    &--chn {
      font-size: 2rem;
      font-weight: 700;
    }

    &--eng {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>
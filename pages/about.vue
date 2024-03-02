<template>
  <v-row class="about-container flex-wrap align-content-center flex-wrap" style="height: 80vh;">
    <v-col class="d-flex justify-center align-center" cols="12">
      <ldw v-if="mdAndUp" :size="5"></ldw>
    </v-col>
    <v-col class="d-flex justify-center align-center text-center mt-n6 px-16" cols="12">
      <span class="about-container__link"
        :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">前端开发工程师、技术作家、创作者与前校园电台主持人和制作人
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-center text-center mt-n6 px-16" cols="12">
      <span class="about-container__link" :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">Frontend engineer,
        technical writer, creator and former university radio
        host and producer
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-16" cols="12">
      <a href="https://stories.ldwid.com" class="about-container__link about-container__link--blue">stories.ldwid.com</a>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-n4" cols="12">
      <a href="https://likedreamwalker.space"
        class="about-container__link about-container__link--blue">likedreamwalker.space</a>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-n4" cols="12">
      <span class="about-container__link about-container__link--blue">a@ldwid.com</span>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
definePageMeta({
  layout: 'detail-layout',
  renderTitleName: '关于',
  renderTitleText: 'ABOUT',
  keepalive: true
})
</script>
<style lang="scss">
.about-container {
  height: 100%;

  &__link {
    font-size: 1rem;
    font-weight: 400;
    color: #c0c0c0cc;
    font-style: italic;


    &--blue {
      color: #0066ff;
      font-weight: 600;
      font-style: normal;
      font-size: 1.5rem;
    }
  }
}
</style>
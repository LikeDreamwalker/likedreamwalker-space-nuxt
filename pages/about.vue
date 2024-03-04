<template>
  <v-row v-if="ready" class="about-container flex-wrap align-content-center flex-wrap" style="height: 80vh;">
    <v-col class="d-flex justify-center align-center mt-4 mb-10 px-16" cols="12">
      <v-avatar class="elevation-24 rounded-pill"
        image="https://ldwid-1258491808.file.myqcloud.com/ldwid.com/LNOE_Profile_WEB.png" rounded
        :size="mdAndUp ? '20vw' : '50vw'"></v-avatar>
    </v-col>
    <v-col class="d-flex justify-center align-center text-center mt-n6 px-16" cols="12">
      <ldw :size="1"></ldw>
    </v-col>
    <v-col class="d-flex justify-center align-center text-center mt-n6 px-16" cols="12">
      <span class="about-container__link opacity-90"
        :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">前端开发工程师、技术作家、创作者与前校园电台主持人和制作人
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-center text-center mt-n6 px-16" cols="12">
      <span class="about-container__link opacity-90" :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">Frontend
        engineer,
        technical writer, creator and former university radio
        host and producer
      </span>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-16" cols="12">
      <a href="https://stories.ldwid.com" class="about-container__link about-container__link--blue"
        :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">stories.ldwid.com</a>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-n6" cols="12">
      <a href="https://likedreamwalker.space" class="about-container__link about-container__link--blue"
        :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">likedreamwalker.space</a>
    </v-col>
    <v-col class="d-flex justify-center align-center mt-n6 mb-10" cols="12">
      <a href="mailto:a@ldwid.com" class="about-container__link about-container__link--blue"
        :style="`font-size: ${mdAndUp ? '1rem' : '0.8rem'}`">a@ldwid.com</a>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
const ready = ref(false)
definePageMeta({
  layout: 'detail-layout',
  renderTitleName: '关于',
  renderTitleText: 'ABOUT',
  keepalive: true
})
onMounted(() => {
  ready.value = true
})
</script>

<style lang="scss">
.about-container {
  height: 100%;

  &__link {
    font-size: 0.75rem;
    font-weight: 400;
    // color: #c0c0c0;
    font-style: italic;


    &--blue {
      color: #0066ff;
      font-weight: 400;
      font-style: normal;
      font-size: 0.75rem;
      text-decoration: none;
    }
  }
}
</style>
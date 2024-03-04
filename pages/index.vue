<template>
  <div class="index-container d-flex justify-center align-center align-content-center flex-wrap line">
    <v-row class="index-container__topic line">
      <v-col class="index-container__title d-flex justify-center align-center pa-0 cursor-default line" cols="12">
        <span>RETURN</span>
      </v-col>
      <v-col class="index-container__subtitle d-flex justify-center align-center pa-0 mt-n4 cursor-default flex-wrap"
        cols="12">
        by
      </v-col>
      <v-col class="index-container__subtitle d-flex justify-center align-center pa-0  cursor-default" cols="12">
        <ldw :size="1.5"></ldw>
      </v-col>
    </v-row>
    <v-row class="index-container__menu mt-16 line">
      <v-col class="index-container__menu-item d-flex justify-center align-center pa-0 ma-0 mt-2" cols="12"
        v-for="item, index in menu" :key="index">
        <hover-card :disabled="item.disabled" @click="next(item.to)">
          <template v-slot:default="props">
            <div class="my-1 mx-4 cursor-pointer d-flex align-center"
              :class="item.disabled ? 'opacity-25' : 'opacity-90'">
              <span class="index-container__menu-item--chn">
                {{ item.renderTitleName }}</span>
              <span class="index-container__menu-item--eng mx-1"></span>
              <span class="index-container__menu-item--eng">
                {{ item.renderTitleText }}</span>
            </div>
          </template>

        </hover-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
definePageMeta({
  layout: 'default',
  renderTitleName: 'LDWINDEX',
  keepalive: true
})
const menu = ref([
  {
    renderTitleName: "应用",
    renderTitleText: "APP",
    to: "/apps",
    disabled: false,
  },
  {
    renderTitleName: "故事",
    renderTitleText: "STORY",
    to: "https://stories.ldwid.com/",
    disabled: false,
  },
  {
    renderTitleName: "创作者",
    renderTitleText: "CREATOR",
    to: "https://stories.ldwid.com/",
    disabled: true,
  },
  {
    renderTitleName: "访问旧版",
    renderTitleText: "BEFORE",
    to: "https://v2.ldwid.com/",
    disabled: false,
  },
  {
    renderTitleName: "关于",
    renderTitleText: "ABOUT",
    to: "/about",
    disabled: false,
  },
])
</script>
<style lang="scss" scoped>
.index-container {
  width: 100vw;
  overflow: hidden;

  &__title {
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: -0.1rem;
    font-family: Raleway, sans-serif;
    text-shadow: 0.5rem 0.5rem 2rem #c0c0c066;
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    font-family: Raleway, sans-serif;
  }

  &__menu-item {
    text-shadow: 0.1rem 0.1rem 0.5rem #c0c0c066;

    &--chn {
      font-size: 1.5rem;
      font-weight: 700;
    }

    &--eng {
      font-size: 1.25rem;
      font-weight: 400;
      font-family: Raleway, sans-serif;
    }
  }
}
</style>
<template>
  <div class="index-container d-flex justify-center align-center align-content-center flex-wrap line">
    <v-row class="index-container__topic">
      <v-col class="index-container__title d-flex justify-center align-center py-0 cursor-default"
        cols="12">RETURN</v-col>

      <v-col class="index-container__subtitle d-flex justify-center align-center py-0 mt-n2 cursor-default" cols="12">
        by
      </v-col>
      <v-col class="index-container__subtitle d-flex justify-center align-center py-0  cursor-default" cols="12">
        <ldw :size="1"></ldw>
      </v-col>
    </v-row>
    <v-row class="index-container__menu mt-10 line">
      <v-col class="index-container__menu-item d-flex justify-center align-center pa-0 ma-0 mt-2" cols="12"
        v-for="item, index in menu" :key="index">
        <hover-card @click="next(item.to)">
          <div class="my-2 mx-4 cursor-pointer d-flex align-center">
            <span class="index-container__menu-item--chn"> {{ item.renderTitleName }}</span>
            <span class="index-container__menu-item--eng mx-1"></span>
            <span class="index-container__menu-item--eng">{{ item.renderTitleText }}</span>
          </div>

        </hover-card>
      </v-col>
    </v-row>
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
  // {
  //   renderTitleName: "相册",
  //   renderTitleText: "GALLERY",
  //   to: "https://stories.ldwid.com/",
  // },
])
</script>
<style lang="scss" scoped>
.index-container {

  &__title {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
    font-family: Raleway, sans-serif;
  }

  &__subtitle {
    font-size: 1rem;
    font-weight: 300;
    font-family: Raleway, sans-serif;
  }

  &__menu-item {
    &--chn {
      font-size: 1.5rem;
      font-weight: 600;
    }

    &--eng {
      font-size: 1.5rem;
      font-weight: 200;
      font-family: Raleway, sans-serif;
    }
  }
}
</style>
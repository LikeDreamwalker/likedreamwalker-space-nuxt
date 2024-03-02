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
          <template v-slot:default="props">
            <div class="my-2 mx-4 cursor-pointer d-flex align-center opacity-75">
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
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: -0.1rem;
    font-family: Raleway, sans-serif;
    text-shadow: 0.5rem 0.5rem 2rem #c0c0c066;
  }

  &__subtitle {
    font-size: 1rem;
    font-weight: 300;
    font-family: Raleway, sans-serif;
  }

  &__menu-item {
    text-shadow: 2rem;

    &--chn {
      font-size: 1.5rem;
      font-weight: 900;
    }

    &--eng {
      font-size: 1.5rem;
      font-weight: 400;
      font-family: Raleway, sans-serif;
    }
  }
}
</style>
<template>
  <div class="likedreamwalker d-flex justify-center align-center">
    <v-img :width="`${size * 1.5}rem`" :height="`${size * 2}rem`" class="mr-1"
      src="https://ldwid-1258491808.cos.accelerate.myqcloud.com/likedreamwalker.space/logo-square-2%400.33x.png">
    </v-img>
    <span class="like" :style="`font-size: ${size}rem;`">LIKE</span>
    <span class="dreamwalker" :style="`font-size: ${size}rem;`">DREAMWALKER</span>
  </div>
</template>

<script setup>
// Props
import { defineProps } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    default: 1.75
  }
})
</script>

<style lang="scss">
.likedreamwalker {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #0066ff !important;

  .like {
    font-weight: 900 !important;
    font-style: italic !important;
    letter-spacing: 0rem !important;
    margin-right: 0.1rem;
    margin-left: -0.3rem;
  }

  .dreamwalker {
    font-weight: 500 !important;
    letter-spacing: 0rem !important;
  }
}
</style>
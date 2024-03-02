<template>
  <div>
    <div v-if="!isNestedRoute">
      <slot></slot>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

let isNestedRoute = ref(false)
const route = useRoute()
watch(() => route.matched, (matched) => {
  isNestedRoute.value = matched.length > 1
})
</script>
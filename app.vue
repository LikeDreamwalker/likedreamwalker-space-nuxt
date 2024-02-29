<template>
  <v-theme-provider :theme="theme">
    <NuxtLayout class="likedreamwalker-space">
      <v-defaults-provider :defaults="{ VApp: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
        <v-app>
          <NuxtPage />
        </v-app>
      </v-defaults-provider>
    </NuxtLayout>
  </v-theme-provider>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

let mql

onMounted(() => {
  if (typeof window !== 'undefined') {
    mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addListener(e => {
      theme.value = e.matches
        ? 'dark'
        : 'light'
    })
    theme.value = mql.matches
      ? 'dark'
      : 'light'
  }
})

onUnmounted(() => {
  if (mql) {
    mql.removeListener(e => {
      theme.value = e.matches
        ? 'dark'
        : 'light'
    })
  }
})
</script>

<style lang="scss" scoped>
.likedreamwalker-space {
  height: 100vh;
}
</style>

<style lang="scss">
.line {
  flex: 0 0 100% !important
}
</style>
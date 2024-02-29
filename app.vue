<template>
  <v-theme-provider :theme="theme">
    <NuxtLayout class="likedreamwalker-space">
      <!-- <div class="animation-container">
        <svg v-for="circle in circles" :key="circle.id" class="circle-animation" :style="circle.style"
          viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#0066ff" />
        </svg>
      </div> -->

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
const circles = ref([]);
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
  for (let i = 0; i < 10; i++) {
    circles.value.push({
      id: i,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 1}s`,
        animationDelay: `${Math.random() * 2}s`,
      },
    });
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
  width: 100vw;
  overflow: hidden;

  .animation-container {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .circle-animation {
      position: absolute;
      width: 200px;
      height: 200px;
      animation: move 5s infinite linear;
    }


  }
}

@keyframes move {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }

  100% {
    transform: translate(150%, 150%) scale(1);
    opacity: 0;
  }
}
</style>

<style lang="scss">
.line {
  flex: 0 0 100% !important
}
</style>
<template>
  <v-theme-provider :theme="globalState.theme">
    <div class="likedreamwalker-space">
      <div class="animation-container">
        <svg v-for="circle in circles" :key="circle.id" class="circle-animation" :style="circle.style"
          viewBox="0 0 100 100">
          <circle cx="50" cy="50" :r="circle.radius" :fill="circle.color" />
        </svg>
      </div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </v-theme-provider>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const circles = ref([]);
let mql
const globalState = useGlobalState()
onMounted(() => {
  if (typeof window !== 'undefined') {
    mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addListener(e => {
      globalState.value.theme = e.matches
        ? 'dark'
        : 'light'
    })
    globalState.value.theme = mql.matches
      ? 'dark'
      : 'light'
  }
  const colors = ['#ff450099', '#c0c0c033', '#0066ff99', '#00bbff33'];
  for (let i = 0; i < 40; i++) {
    circles.value.push({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 3}s`,
      },
      radius: Math.random() * 45 + 35,
    });
  }
})

onUnmounted(() => {
  if (mql) {
    mql.removeListener(e => {
      globalState.value.theme = e.matches
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
    filter: blur(2rem);

    .circle-animation {
      position: absolute;
      width: 17rem;
      height: 17rem;
      // Only use animation name here
      animation: move 17s infinite linear;
    }
  }
}

@keyframes move {
  0% {
    transform: translate(0, 100%) scale(0);
    opacity: 1;
  }

  100% {
    transform: translate(0, -100%) scale(1);
    opacity: 0;
  }
}
</style>

<style lang="scss">
.line {
  flex: 0 0 100% !important
}
</style>
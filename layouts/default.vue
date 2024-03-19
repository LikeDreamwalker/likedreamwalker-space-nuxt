<template>
  <SpeedInsights />
  <v-app>
    <slot />
  </v-app>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
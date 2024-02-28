<template>
  <div>
    <v-card>
      <v-card-title>LIKEDREAMWALKER</v-card-title>
      <v-btn to="apps">Apps</v-btn>
    </v-card>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'detail-layout',
  renderTitleName: 'LDWINDEX',
  keepalive: true
})
const state = useGlobalState()
console.log(state.value.count)
</script>
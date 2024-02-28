<template>
  <div>
    <v-card>
      <v-card-title>应用</v-card-title>
      <v-btn to="/apps/field-splicer">field-splicer</v-btn>
    </v-card>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'detail-layout',
  renderTitleName: '应用 APPS',
  keepalive: true
})
</script>
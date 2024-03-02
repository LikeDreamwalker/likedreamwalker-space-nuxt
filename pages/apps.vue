<template>
  <page-container>
    <v-card>
      <v-card-title>应用</v-card-title>
      <v-btn to="/apps/field-splicer">field-splicer</v-btn>
    </v-card>
  </page-container>
</template>
<script setup>
definePageMeta({
  layout: 'detail-layout',
  renderTitleName: '应用',
  renderTitleText: 'APPS',
  keepalive: true
})
const appsList = ref([
  {
    title: '镜湖',
    subtitle: 'Mirror Lake',
    description: ''
  }
])
</script>
<template>
  <page-container class="d-flex justify-center align-center">
    <hover-card custom-class="d-flex justify-center align-start align-content-start pa-8 flex-wrap" width="90vw"
      height="80vh">
      <hover-card custom-class="line mt-4 pa-2" v-for="app in appsList" append-icon="mdi-open-in-new" :title="app.title"
        :subtitle="app.subtitle.toUpperCase()" :disabled="app.disabled" @click="next(app.to)">
      </hover-card>
    </hover-card>
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
    src: '',
    to: 'https://lte.ldwid.com/#/',
    disabled: false,
  },
  {
    title: '字段编辑器',
    subtitle: 'Field Splicer',
    src: '',
    to: 'https://fieldsplicer.ldwid.com/',
    disabled: false,
  },
  {
    title: 'VTE',
    subtitle: 'Vuetify Theme Editor',
    src: '',
    to: 'https://vte.ldwid.com/#/',
    disabled: false,
  },

])
</script>
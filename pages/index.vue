<template>
  <div class="index-container d-flex justify-center align-center align-content-center flex-wrap line">
    <v-row>
      <v-col class="index-container__title d-flex justify-center align-center" cols="12" style="font-size: 3rem;">RETURN</v-col>
      <v-col class="index-container__subtitle d-flex justify-center align-center" cols="12">By LikeDreamwalker</v-col>
    </v-row>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'default',
  renderTitleName: 'LDWINDEX',
  keepalive: true
})
const state = useGlobalState()
</script>
<style lang="scss" scoped>
.index-container {
  &__title {
    font-size: 3rem;
  }
}
</style>
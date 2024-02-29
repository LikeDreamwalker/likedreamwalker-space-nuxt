<template>
  <NuxtLayout class="likedreamwalker-space">
    <v-defaults-provider :defaults="{ VApp: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
      <v-app>
        <NuxtPage />
      </v-app>
    </v-defaults-provider>
  </NuxtLayout>
</template>

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
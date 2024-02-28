<template>
  <NuxtLayout>
    <v-defaults-provider :defaults="{ VApp: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
      <v-app>
        <NuxtPage />
      </v-app>
    </v-defaults-provider>
  </NuxtLayout>
</template>
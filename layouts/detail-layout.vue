<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:prepend>
        <v-icon size="small" icon="$vuetify"></v-icon>
      </template>
    </v-breadcrumbs>
    <slot />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let routes = []

onMounted(async () => {
  routes = router.getRoutes()
})

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(n => n)
  let breadcrumbs = [{
    title: 'LDWINDEX',
    href: 'index'
  }]
  pathArray.forEach((path, i) => {
    const route = routes.find(route => route.path === `/${pathArray.slice(0, i + 1).join('/')}`)
    breadcrumbs.push({
      title: route.meta.renderTitleName,
      href: route.name
    })
  })
  return breadcrumbs
})

</script>
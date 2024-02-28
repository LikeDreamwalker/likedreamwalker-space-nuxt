<template>
  <div>
    <v-defaults-provider :defaults="{ VBreadcrumbs: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
      <v-breadcrumbs :items="breadcrumbs">
        <template v-slot:prepend>
          <v-icon size="small" icon="$vuetify"></v-icon>
        </template>
        <template v-slot:title="{ item }">
          <div class="cursor-pointer" @click="go(item.title)">
            <div v-if="item.title === 'LDWINDEX'">
              LIKEDREAMWALKER
            </div>
            <div v-else>
              {{ item.title.toUpperCase() }}
            </div>
          </div>
        </template>
      </v-breadcrumbs>
    </v-defaults-provider>
    <slot />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
// import { useRouter, useRoute } from 'vue-router'

let routes = []
const breadcrumbs = ref([])
const breadcrumbsMap = ref([])
const router = useRouter()
const route = useRoute()

onMounted(async () => {
  routes = router.getRoutes()
  updateBreadcrumbs()
})

watchEffect(() => {
  updateBreadcrumbs()
})

function updateBreadcrumbs() {
  const pathArray = route.path.split('/').filter(n => n)
  breadcrumbs.value = [{
    title: 'LDWINDEX',
    // href: '/'
  }]
  breadcrumbsMap.value = [{
    title: 'LDWINDEX',
    href: '/'
  }]
  pathArray.forEach((path, i) => {
    const route = routes.find(route => route.path === `/${pathArray.slice(0, i + 1).join('/')}`)
    if (route) {
      breadcrumbs.value.push({
        title: route.meta.renderTitleName,
        // href: route.path
      })
      breadcrumbsMap.value.push({
        title: route.meta.renderTitleName,
        href: route.path
      })
    }
  })
}

function go(title) {
  const link = breadcrumbsMap.value.find(item => item.title === title).href
  console.log(title, link)
  navigateTo(link)
}

</script>
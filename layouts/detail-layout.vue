<template>
  <v-defaults-provider :defaults="{ VApp: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
    <v-app>
      <v-breadcrumbs class="flex-wrap" :items="breadcrumbs">
        <template v-slot:divider></template>
        <template v-slot:title="{ item }">
          <div class="cursor-pointer" @click="go(item.title)">
            <div v-if="item.title === 'LDWINDEX'">
              <ldw></ldw>
            </div>
            <div v-else class="d-flex justify-start align-center flex-wrap my-1">
              <div class="mx-1">/</div>
              <div style="font-weight: 700;">{{ item.title + '&nbsp;' }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </template>
      </v-breadcrumbs>

      <slot />
    </v-app>
  </v-defaults-provider>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()

let routes = []
const breadcrumbs = ref([])
const breadcrumbsMap = ref([])
const router = useRouter()
const route = useRoute()
const globalState = useGlobalState()

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
        text: route.meta.renderTitleText,
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
  navigateTo(link)
}

</script>
<template>
  <v-app>
    <v-defaults-provider :defaults="{ VBreadcrumbs: { style: 'font-family: Raleway, sans-serif;font-weight: 400;' } }">
      <v-breadcrumbs :items="breadcrumbs">
        <template v-slot:prepend>
          <v-img width="1.75rem" height="1.75rem"
            src="https://ldwid-1258491808.cos.accelerate.myqcloud.com/likedreamwalker.space/logo-square-2%400.33x.png">
          </v-img>
        </template>
        <template v-slot:title="{ item }">
          <div class="cursor-pointer" @click="go(item.title)">
            <ldw v-if="item.title === 'LDWINDEX'"></ldw>
            <div v-else class="d-flex justify-start align-center flex-wrap" style="font-size: 1.25rem;">
              <div style="font-weight: 900;">{{ item.title + '&nbsp;' }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </template>
      </v-breadcrumbs>

    </v-defaults-provider>
    <slot />
  </v-app>
</template>

<script setup>
import { computed, onMounted } from 'vue'

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
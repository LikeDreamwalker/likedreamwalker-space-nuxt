<template>
  <div>
    <v-breadcrumbs :items="['首页 Home', '应用 Apps', '字段拼接器 Field-Splicer']">
      <template v-slot:prepend>
        <v-icon size="small" icon="$vuetify"></v-icon>
      </template>
    </v-breadcrumbs>
    <slot />
  </div>
</template>

<script setup>
// import { ref, computed } from 'vue'

onMounted(() => {
  const router = useRouter()
  console.log(router.getRoutes())
})

</script>
<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card class="rounded-pill pa-0 ma-0" :class="isHovering ? '' : 'bg-transparent'" v-bind="props"
        :elevation="isHovering ? 24 : 0" :to="to" @click="handleClick">
        <slot :isHovering="isHovering"></slot>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: false,
  }
});

let to = ref(props.to);

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped></style>
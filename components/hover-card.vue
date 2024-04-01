<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card :class="isHovering ? '' + classString : 'bg-transparent ' + classString" v-bind="props"
        :elevation="isHovering ? 24 : 0" :to="to" :width="width" :height="height" :append-icon="appendIcon"
        :title="title" :subtitle="subtitle" :disabled="disabled" :link="false" @click="handleClick">
        <slot :isHovering="isHovering"></slot>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: false,
  },
  width: {
    type: [String, Number],
    required: false,
  },
  height: {
    type: [String, Number],
    required: false,
  },
  customClass: {
    type: String,
    required: false,
  },
  appendIcon: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});

const classString = computed(() => {
  const basic = `rounded-xl pa-0 ma-0 ${props.customClass}`;
  return basic;
});

let to = ref(props.to);

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped></style>

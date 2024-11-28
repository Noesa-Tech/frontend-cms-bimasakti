<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
  customClass: {
    type: String,
    required: false,
    default: "",
  },
  severity: {
    type: String,
    required: false,
    default: "info", // Set default severity to 'info'
  },
});
</script>

<template>
  <Message :class="['text-start', 'w-fit', customClass]" :severity="props.severity">
    <h1 class="font-medium">{{ title }}</h1>
    <p class="text-surface-400 text-sm">{{ subtitle }}</p>
  </Message>
</template>

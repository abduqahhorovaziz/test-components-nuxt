<template>
  <span v-bind="$attrs" :class="`icon-${name}`"></span>
</template>

<script lang="ts" setup>
interface Props {
  name: string | "chevron-down" | "copy" | "telegram" | "share";
}
defineProps<Props>();
</script>

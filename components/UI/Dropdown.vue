<template>
  <div ref="dropdownEl" class="relative">
    <button
      ref="triggerEl"
      class="flex items-center gap-1"
      :class="triggerClass"
      type="button"
      @click="isOpen = !isOpen"
    >
      <slot name="trigger" />
      <UIIcon
        name="chevron-down"
        class="text-xl text-gray-300 transition-all duration-300"
        :class="[{ 'rotate-180': isOpen }, chevronIconClass]"
      />
    </button>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        :class="dropdownClass"
        :style="`--bottom: ${bottom}; bottom: ${bottom}`"
        class="absolute z-30 translate-y-full"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import type { TClassName } from "~/types/common";
interface Props {
  autoClose?: boolean;
  dropdownClass?: TClassName;
  triggerClass?: TClassName;
  bottom?: string;
  chevronIconClass?: TClassName;
}
const props = withDefaults(defineProps<Props>(), { bottom: "0px" });
const isOpen = ref(false);
const dropdownEl = ref<HTMLDivElement | null>(null);
const triggerEl = ref<HTMLButtonElement | null>(null);
const handleClickOutside = (event: MouseEvent) => {
  if (
    props?.autoClose &&
    event.target != triggerEl.value &&
    !triggerEl.value?.contains(event.target as Node)
  ) {
    isOpen.value = false;
  } else if (
    (dropdownEl.value && !dropdownEl.value.contains(event!.target as Node)) ||
    (event!.target as Element).getAttribute("data-close-on-click") == "true"
  ) {
    isOpen.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
<style scoped>
@keyframes dropdown {
  from {
    opacity: 0;
    bottom: calc(var(--bottom) - 12px);
  }
  to {
    opacity: 1;
    bottom: var(--bottom);
  }
}
.dropdown-enter-active {
  animation: dropdown 0.3s;
}
.dropdown-leave-active {
  animation: dropdown 0.2s reverse;
}
</style>

<template>
  <div>
    <label
      v-if="label || $slots?.label"
      :for="inputId"
      class="mb-1 inline-flex items-start gap-x-1 text-sm font-medium text-dark"
    >
      <slot name="label">
        {{ label }}
      </slot>
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div
      :class="{ '!border-red-500': invalid }"
      class="flex w-full items-center overflow-hidden rounded-lg border border-transparent bg-white transition-all duration-300"
    >
      <slot name="prefix" />
      <input
        :id="inputId"
        v-model="mv"
        class="size-full bg-transparent px-4 py-3 text-[15px] text-dark"
        :required="required"
        :placeholder="placeholder"
        :type="type"
        :class="inputClass"
      />
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TClassName } from "~/types/common";

interface Props {
  modelValue: string | number | null;
  placeholder?: string;
  invalid?: boolean;
  required?: boolean;
  // eslint-disable-next-line
  errorMessages?: Array<string | Record<string, any>>;
  errorKey?: string;
  hint?: string;
  label?: string;
  type?: string;
  inputClass?: TClassName;
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
});

interface Emits {
  (e: "update:modelValue", val: Props["modelValue"]): void;
}
const emit = defineEmits<Emits>();

const mv = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const inputId = useId();
</script>

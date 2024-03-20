<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  icon?: string;
}>();
</script>

<template lang="pug">

button.inline-flex.items-center.gap-2.font-semibold.text-lg.text-slate-800.bg-slate-200.px-3.py-2

  Icon.inline.my-1(
    v-if="icon != null"
    :icon="icon"
  )

  slot

</template>

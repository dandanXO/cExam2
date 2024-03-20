<script setup lang="ts">
import * as Vue from 'vue';
import { pathSymbol, valueSymbol } from '@/symbol';
import { type TreeObject } from '@/utils';

defineProps<{
  node: TreeObject;
}>();

const foldedKeys = Vue.reactive(new Set<string>());

function toggleFolding(k: string) {
  if (!foldedKeys.has(k)) {
    foldedKeys.add(k);
  } else {
    foldedKeys.delete(k);
  }
}

function getFoldingIcon(k: string, v: TreeObject) {
  // 是否有多層判斷
  if (Object.keys(v).length === 0) return '|';

  return foldedKeys.has(k) ? '+' : '-';
}


</script>

<template lang="pug">

ul

  li(v-for="[k, v] in Object.entries(node)")

    label.text-gray-300.cursor-pointer.select-none(
      @click="toggleFolding(k);"
    )

      //- folding icon
      span.inline.mr-2 {{ getFoldingIcon(k, v) }}

      //- key
      span.font-mono.font-bold(:title="v[pathSymbol]") {{ k }}

      //- ":"
      span.font-mono(v-if="v[valueSymbol] !== undefined") {{ ': ' }}

    //- vlue
    span.font-mono.text-blue-400(v-if="v[valueSymbol] !== undefined") {{ v[valueSymbol] }}

    //- 地回到沒有
    KVTree.pl-8(
      v-show="!foldedKeys.has(k)"
      :node="v"
    )

</template>

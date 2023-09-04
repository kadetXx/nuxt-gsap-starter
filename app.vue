<template>
  <Hello />
</template>

<script setup lang="ts">
import { Interactions } from "@/interactions";

onMounted(() => {
  new Interactions();
});
</script>

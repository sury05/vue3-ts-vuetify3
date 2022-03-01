<template>
  <div class="pa-10">
    <div class="d-flex justify-space-between align-center mb-10">
      <div class="text-h5">Dashboard</div>
      <AddDialog />
    </div>
    <Board :list="deserts" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Board from "@/components/Board.vue";
import AddDialog from "@/components/AddDialog.vue";

const store = useStore();
const deserts = computed(() => store.state.deserts.items);
</script>

<style scoped></style>

<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ props }">
      <v-btn :prepend-icon="buttonIcon" color="primary" v-bind="props">{{
        buttonName
      }}</v-btn>
    </template>
    <slot name="default" :close="close" />
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps({
  buttonIcon: {
    type: String,
    required: false,
  },
  buttonName: {
    type: String,
    required: false,
  },
});
const dialog = ref(false);

function close() {
  dialog.value = false;
}
</script>

<style scoped></style>

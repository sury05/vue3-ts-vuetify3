<template>
  <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script setup lang="ts">
interface Item {
  name: string;
  calories: number;
}

import { defineProps, PropType } from "vue";

defineProps({
  list: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});
</script>

<style scoped></style>

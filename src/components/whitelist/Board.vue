<template>
  <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">호스트</th>
          <th class="text-left">포트</th>
          <th class="text-left">업데이트</th>
          <th class="text-left">수정</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ host, port, updated_at } in list" :key="host + port">
          <td>
            {{ host }}
          </td>
          <td>{{ port }}</td>
          <td>{{ updated_at }}</td>
          <td>
            <AddDialog
              button-icon="mdi-cog-outline"
              :host="host"
              :port="port"
              popup-title="수정"
            />
          </td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script setup lang="ts">
import { AllowUrl } from "@/api/instance/whitelist";

import { defineProps, PropType } from "vue";
import AddDialog from "@/components/whitelist/AddDialog.vue";

defineProps({
  list: {
    type: Array as PropType<AllowUrl[]>,
    required: true,
  },
});
</script>

<style scoped></style>

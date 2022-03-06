<template>
  <div class="pa-10">
    <div class="d-flex justify-space-between align-center mb-10">
      <div class="text-h5">화이트리스트</div>
      <AddDialog @add="addAllowUrl" button-name="등록" />
    </div>
    <Board :list="whitelist" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import Board from "@/components/whitelist/Board.vue";
import AddDialog from "@/components/whitelist/AddDialog.vue";
import {
  AllowUrl,
  fetchAllWhitelist,
  saveWhitelist,
} from "@/api/instance/whitelist";

let whitelist: Ref<AllowUrl[]> = ref([]);
onMounted(async () => {
  //const { data } = await fetchAllWhitelist();
  whitelist.value = [
    {
      host: "test1.com",
      port: 111,
      updated_at: "2022-01-01",
    },
    {
      host: "test2.com",
      port: 222,
      updated_at: "2022-01-01",
    },
  ];
});

async function addAllowUrl(allowUrl: AllowUrl) {
  await saveWhitelist(allowUrl);
}
</script>

<style scoped></style>

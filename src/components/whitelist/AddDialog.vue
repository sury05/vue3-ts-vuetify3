<template>
  <Dialog :buttonName="buttonName" :button-icon="buttonIcon">
    <template v-slot:default="{ close }">
      <WhitelistPopup
        @close="close"
        @save="save"
        :title="popupTitle"
        :host="host"
        :port="port"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Dialog from "@/components/common/Dialog.vue";
import WhitelistPopup from "@/components/whitelist/WhitelistPopup.vue";
import { AllowUrl } from "@/api/instance/whitelist";

const emit = defineEmits(["add"]);
defineProps({
  buttonIcon: {
    type: String,
  },
  buttonName: {
    type: String,
  },
  popupTitle: {
    type: String,
  },
  host: {
    type: String,
  },
  port: {
    type: Number,
  },
});

function save(allowUrl: AllowUrl) {
  emit("add", allowUrl);
}
</script>

<style scoped></style>

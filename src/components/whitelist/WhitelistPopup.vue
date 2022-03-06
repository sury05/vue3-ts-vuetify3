<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="allowUrl.host"
              label="Host*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="allowUrl.port"
              label="Port*"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="close">닫기</v-btn>
      <v-btn color="primary" text @click="save">저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";

const prop = defineProps({
  title: {
    type: String,
    default: "등록",
  },
  host: {
    type: String,
    default: "",
  },
  port: {
    type: Number,
    default: null,
  },
});

const allowUrl = reactive({
  host: prop.host,
  port: prop.port,
});

const emit = defineEmits(["close", "save"]);

function save() {
  emit("save", { ...allowUrl });
}

function close() {
  emit("close");
}
</script>

<style scoped></style>

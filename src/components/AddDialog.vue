<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props">Add</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add Desert</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="desert.name"
                label="Name*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="desert.calories"
                label="Calories*"
                type="n"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        <v-btn color="primary" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const dialog = ref(false);
let desert = ref({
  name: "",
  calories: null,
});

function save() {
  store.commit("deserts/addDesertItem", { ...desert.value });

  desert.value = {
    name: "",
    calories: null,
  };
  dialog.value = false;
}
</script>

<style scoped></style>

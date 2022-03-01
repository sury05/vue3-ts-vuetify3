<template>
  <v-navigation-drawer color="#fff" permanent>
    <v-list nav>
      <template v-for="{ name, icon, subMenus, path } in menus" :key="name">
        <template v-if="subMenus?.length > 0">
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="icon"
                :title="name"
                :value="name"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="{ name, icon, path } in subMenus"
              :key="name"
              :value="name"
              :title="name"
              :prepend-icon="icon"
              @click="moveToPage(path)"
            />
          </v-list-group>
        </template>
        <template v-else>
          <v-list-item
            :prepend-icon="icon"
            :title="name"
            :value="name"
            @click="moveToPage(path)"
          />
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NAVIGATION_MENU from "@/constants/layout/menu";
import { useRouter } from "vue-router";

const menus = ref(NAVIGATION_MENU);
const router = useRouter();

function moveToPage(path: string) {
  router.push(path);
}
</script>

<style scoped></style>

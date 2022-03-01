<template>
  <v-app>
    <HeaderBar />
    <NavigationBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavigationBar from "@/layouts/NavigationBar.vue";
import HeaderBar from "@/layouts/HeaderBar.vue";
</script>

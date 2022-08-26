<template>
  <div class="pt-4">
    <HeaderComponent />

    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "HomeView",
  components: { HeaderComponent },
};
</script>

<style scoped>
</style>

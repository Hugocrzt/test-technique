<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>

<style></style>

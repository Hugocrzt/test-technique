<template>
  <section class="banner-large-section">
    <div v-if="this.$route.path === '/'" class="banner-large-container">
      <h1>Femme</h1>
      <router-link class="standard-btn white" to="#Homme"
        >Découvrir</router-link
      >
    </div>
    <div
      v-if="this.$route.path === '/faq'"
      class="banner-large-container faq-adaptation"
    >
      <h1>F.A.Q</h1>
      <img src="@/assets/images/scroll.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerLarge",
  mounted() {},
};
</script>

<style lang="css" src="@/assets/css/banner_large.css"></style>

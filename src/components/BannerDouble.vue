<template>
  <section class="banner-double-section">
    <div class="banner-double-container">
      <router-link class="banner-double-wrapper" to="#Homme">
        <h2>Collection Femme</h2>
        <img src="@/assets/images/robe.jpeg" alt="" />
      </router-link>
      <router-link class="banner-double-wrapper" to="#Homme">
        <h2>Collection Homme</h2>
        <img src="@/assets/images/homme.jpeg" alt="" />
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerLarge",
  mounted() {},
};
</script>

<style lang="css" src="@/assets/css/banner_double.css"></style>

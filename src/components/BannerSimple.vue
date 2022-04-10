<template>
  <section class="banner-simple">
    <div class="banner-simple-container">
      <div class="banner-simple-wrapper">
        <img src="@/assets/images/store.jpeg" alt="" />
      </div>
      <div class="banner-simple-wrapper grey">
        <router-link class="standard-btn black" to="#Homme"
          >Découvrir</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerLarge",
  mounted() {},
};
</script>

<style lang="css" src="@/assets/css/banner_simple.css"></style>

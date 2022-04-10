<template>
  <div class="footer">
    <div class="footer-container">
      <ul>
        <li>
          <router-link to="/faq">Faq</router-link>
        </li>
        <li>
          <router-link to="/">Mentions légales</router-link>
        </li>
        <li>
          <router-link to="/">CGV</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerLarge",
  mounted() {},
};
</script>

<style lang="css" src="@/assets/css/footer.css"></style>

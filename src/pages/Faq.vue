<template>
  <div>
    <BannerLarge />
    <BannerFaq />
    <CartPopin />
  </div>
</template>

<script>
import BannerLarge from "@/components/BannerLarge";
import BannerFaq from "@/components/BannerFaq";
import CartPopin from "@/components/CartPopin";

export default {
  name: "HomePage",
  components: {
    BannerLarge,
    BannerFaq,
    CartPopin,
  },
  mounted() {
    this.ChangeColorHeader();
  },
  methods: {
    // Toggle Menu Color Landing
    ChangeColorHeader() {
      window.scrollTo(0, 0);
      const HeaderContainer = document.querySelector(".header");
      const LandingSection = document.querySelector(".banner-large-section");

      window.addEventListener("scroll", function () {
        const distanceToTop = LandingSection.getBoundingClientRect().top;
        if (distanceToTop < 0) {
          HeaderContainer.classList.remove("is-landing");
        } else {
          HeaderContainer.classList.add("is-landing");
        }
      });
    },
  },
};
</script>

<style lang="css" src="@/assets/css/main.css"></style>

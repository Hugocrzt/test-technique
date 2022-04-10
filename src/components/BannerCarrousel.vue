<template>
  <section class="banner-caroussel-section">
    <div class="banner-caroussel-container">
      <div class="subtitle-left-wrapper">
        <h2>Notre Sélection</h2>
      </div>
      <div class="banner-caroussel-wrapper">
        <div class="swiper product-container">
          <div class="swiper-wrapper products-wrapper">
            <div
              v-for="product in products"
              :key="product.id"
              class="swiper-slide"
            >
              <router-link to="#product" class="products-space-image">
                <img class="product-image" :src="product.image" alt="" />
                <img
                  class="rollover-product-image"
                  :src="product.image"
                  alt=""
                />
              </router-link>
              <div class="products-space-text">
                <router-link to="#product"
                  ><p class="product-title">{{ product.title }}</p></router-link
                >
                <router-link to="#product"
                  ><p class="product-price">
                    {{ product.price }} €
                  </p></router-link
                >
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "BannerLarge",

  computed: {
    ...mapState(["products"]),
  },

  mounted: function () {
    this.SwiperCarrousel();
  },

  methods: {
    // SwiperCarrousel Init
    SwiperCarrousel() {
      const that = this;

      function SwiperInit() {
        new Swiper(".swiper", {
          modules: [Pagination],
          // when window width is < 767px (Mobile)
          loop: true,
          speed: 1000,
          slidesPerView: 2,
          spaceBetween: 25,
          breakpoints: {
            // when window width is >= 1023px (Desktop)
            1023: {
              slidesPerView: 4,
              spaceBetween: 20,
              noSwiping: true,
              noSwipingClass: "swiper-wrapper",
              pagination: false,
            },
          },
          pagination: {
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          },
        });
      }

      const SwiperInitInterval = setInterval(function () {
        if (that.products.length !== 0) {
          SwiperInit();
          clearInterval(SwiperInitInterval);
        }
      }, 100);
    },
    ...mapActions(["fetchAllProducts"]),
  },

  created() {
    this.fetchAllProducts();
  },
};
</script>

<style lang="css" src="@/assets/css/banner_carrousel.css"></style>

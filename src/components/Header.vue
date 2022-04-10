<template>
  <div class="header is-landing">
    <div class="header-container">
      <div class="header-menu-wrapper desktop">
        <ul>
          <li>
            <router-link to="/">Homme</router-link>
          </li>
          <li>
            <router-link to="/">Femme</router-link>
          </li>
          <li>
            <router-link to="/">Concept</router-link>
          </li>
          <li>
            <router-link to="/faq">Faq</router-link>
          </li>
        </ul>
      </div>
      <div class="header-menu-wrapper mobile">
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" class="menu-open">
          <div id="open" class="home-burger"></div>
        </label>
        <div class="menu-mobile menu-effects">
          <ul>
            <li>
              <router-link to="/">Homme</router-link>
            </li>
            <li>
              <router-link to="/">Femme</router-link>
            </li>
            <li>
              <router-link to="/">Concept</router-link>
            </li>
            <li>
              <router-link to="/faq">Faq</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-logo-wrapper">
        <router-link to="/">
          <img
            src="@/assets/images/logo.svg"
            alt="Logo The Kooples Second Love"
          />
        </router-link>
      </div>
      <div class="header-cart-wrapper">
        <div class="header-cart-btn">
          <img
            src="@/assets/images/icon-cart.png"
            alt="Logo The Kooples Second Love"
          />
          <p class="cart-quantity">{{ cart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BannerLarge",

  mounted() {
    this.MobileCheckedMenuAdaptation();
  },
  methods: {
    // Toggle Mobile Menu Adaptation
    MobileCheckedMenuAdaptation() {
      const MenuToggle = document.querySelector("#menu-toggle");
      const MenuBtn = document.querySelector(".menu-open");
      const HeaderLogo = document.querySelector(".header-logo-wrapper a img");
      const HeaderCart = document.querySelector(
        ".header-cart-wrapper .header-cart-btn img"
      );
      const MenuLinks = document.querySelectorAll(
        ".header-menu-wrapper.mobile ul li a"
      );

      MenuBtn.addEventListener("click", toggleCheckedClass);
      MenuLinks.forEach(function (MenuLink) {
        MenuLink.addEventListener("click", closeMenu);
      });

      function toggleCheckedClass() {
        if (MenuToggle.checked) {
          HeaderLogo.classList.remove("checked");
          HeaderCart.classList.remove("checked");
        } else {
          HeaderLogo.classList.add("checked");
          HeaderCart.classList.add("checked");
        }
      }
      function closeMenu() {
        if (MenuToggle.checked) {
          MenuToggle.checked = false;
          HeaderLogo.classList.remove("checked");
          HeaderCart.classList.remove("checked");
        } else {
          //
        }
      }
    },
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style lang="css" src="@/assets/css/header.css"></style>

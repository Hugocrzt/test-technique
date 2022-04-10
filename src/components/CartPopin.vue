<template>
  <div class="cart-popin-container">
    <div class="cart-popin-voile"></div>
    <div class="cart-popin-wrapper">
      <div class="cart-header">
        <h2>Order Summary</h2>
        <p class="cart-close">Close</p>
      </div>
      <div class="carte-order-summary">
        <p>Your Cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPopin",
  mounted: function () {
    this.ToogleCart();
  },
  methods: {
    // Toggle Cart Interface
    ToogleCart() {
      const CartContainer = document.querySelector(".cart-popin-container");
      const CartVoile = document.querySelector(".cart-popin-voile");
      const CartIcon = document.querySelector(
        ".header-cart-wrapper .header-cart-btn"
      );
      const LogoIcon = document.querySelector(".header-logo-wrapper a");
      const MenuIcon = document.querySelector(".menu-open");
      const CartClose = document.querySelector(".cart-close");

      CartIcon.addEventListener("click", ToggleClassCart);
      CartClose.addEventListener("click", ToggleClassCart);
      CartVoile.addEventListener("click", ToggleClassCart);

      function ToggleClassCart() {
        if (CartContainer.classList.contains("cart-is-active")) {
          CartContainer.classList.remove("cart-is-active");
          CartIcon.classList.remove("cart-is-active");
          LogoIcon.classList.remove("cart-is-active");
          MenuIcon.classList.remove("cart-is-active");
        } else {
          CartContainer.classList.add("cart-is-active");
          CartIcon.classList.add("cart-is-active");
          LogoIcon.classList.add("cart-is-active");
          MenuIcon.classList.add("cart-is-active");
        }
      }
    },
  },
};
</script>

<style lang="css" src="@/assets/css/cart_popin.css"></style>

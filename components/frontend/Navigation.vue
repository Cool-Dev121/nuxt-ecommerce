<template lang="pug">
  .navigation
    .navigation__wrap
      .navigation__logo
        nuxt-link(to="/") Proshop
      .navigation__menu(:class="{'active': menuMobileActive}")
        AppMenu
      .navigation__sandwitch
        Sandwich(@click.native="toggleSandwich" :active="sandwichActive")
      .navigation__right
        n-link(to="/cart").navigation__cart
          span.el-icon-shopping-cart-2
          span.navigation__qty
            pre 3
        n-link(to="/admin").navigation__login
          .el-icon-unlock
</template>

<script>
import AppMenu from "./AppMenu";
import Sandwich from "./Sandwich";

export default {
  data() {
    return {
      sandwichActive: false,
      menuMobileActive: false
    };
  },
  methods: {
    toggleSandwich() {
      this.sandwichActive = !this.sandwichActive;
      this.menuMobileActive = !this.menuMobileActive;
    },
  },
  components: {
    Sandwich,
    AppMenu
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/partials/variables.scss";
.navigation {
  position: relative;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
  z-index: 4;
  @media screen and (max-width: 1600px) {
    padding-left: 3rem;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1620px;
    height: 6rem;
    @media screen and (max-width: 1600px) {
      width: auto;
      height: 7rem;
    }
  }
  &__logo {
    a {
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
      @media screen and (max-width: 1600px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
    svg {
      @media screen and (max-width: 1600px) {
        display: inline-block;
        width: 18rem;
      }
      @media screen and (max-width: 576px) {
        width: 12rem;
      }
    }
  }
  a.navigation__cart {
    position: absolute;
    top: 1rem;
    right: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: $accent;
    border-radius: 50%;
    @media screen and (max-width: 1600px) {
      top: 1.5rem;
    }
    @media screen and (max-width: 1420px) {
      right: 10rem;
    }
    .el-icon-shopping-cart-2 {
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      color: white;
    }
    .navigation__qty {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      font-size: 1rem;
      font-weight: bold;
      color: #444;
      background-color: white;
      border-radius: 50%;
      border: 2px solid $accent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    }
  }
  &__sandwitch {
    position: absolute;
    top: 30%;
    right: 22rem;
    display: none;
    @media screen and (max-width: 1420px) {
      top: 20%;
      display: block;
    }
    @media screen and (max-width: 1200px) {
      top: -0.6rem;
      right: 14rem;
    }
  }
  &__menu {
    position: relative;
    margin-right: auto;
    margin-left: 4rem;
    z-index: 3;
    @media screen and (max-width: 1820px) {
      margin-right: auto;
      margin-left: 4rem;
    }
    @media screen and (max-width: 1420px) {
      position: fixed;
      top: 7rem;
      left: 0;
      margin-left: 0;
      width: 40rem;
      height: 100%;
      background-color: white;
      transform: translateX(-200%);
      opacity: 0;
      pointer-events: none;
      transition: all 0.6s;
      box-shadow: 0 8px 8px rgba(0, 0, 0, .2);
    }
    &.active {
      transform: translateX(0);
      opacity: 1;
      pointer-events: initial;
      z-index: 1000;
    }
  }
  &__right {
    position: absolute;
    top: 0;
    right: 0;
    width: 25.7rem;
    height: 100%;
    overflow: hidden;
    z-index: 2;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5rem;
      height: 100%;
      background-color: $accent;
      z-index: 1;
    }
  }
  &__login {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    width: 15px;
    height: 20px;
    color: white;
    z-index: 2;
    @media screen and (max-width: 1200px) {
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

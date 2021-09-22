<template lang="pug">
  ul.main-menu
    li
      nuxt-link(to="/") Home
    li
      nuxt-link(to="/products") Products
</template>
<style lang="scss">
@import "@/assets/scss/partials/variables";
.main-menu {
  display: flex;
  @media screen and (max-width: 1420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  li {
    @media screen and (max-width: 1420px) {
      width: 100%;
    }
  }
  a {
    display: block;
    margin-right: 1rem;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    border: 1px solid #eee;
    transition: all .4s;
    @media screen and (max-width: 1420px) {
      margin-right: 0;
      padding: 2rem 1rem;
      width: 100%;
      border-bottom: 1px solid rgba($accent, .3);
    }
    &:hover {
      color: white;
      background-color: $accent;
    }
    &.nuxt-link-exact-active {
      color: white;
      background-color: $accent;
      @media screen and (max-width: 1420px) {
        color: $accent;
      	background-color: transparent;
      }
    }
  }
}
</style>

<template>
  <div>
    <Navigation />
    <div class="main">
      <h2>Default</h2>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/frontend/Navigation";
import Footer from "../components/frontend/Footer";

export default {
  data() {
    return {
      currentMenu: []
    };
  },
  components: {
    Navigation,
    Footer
  },
  head() {
    return {
      // Установка rel="canonical" на всех страницах шаблона.
      link: [
        { rel: "canonical", href: `${process.env.baseUrl}${this.$route.path}` }
      ],
      // Пример установки общих мета-тегов на страницах.
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.baseUrl}${this.$route.path}`
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.main {
  position: relative;
  padding: 5rem 0;
  min-height: 100vh;
  z-index: 2;
}
</style>

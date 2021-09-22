<template>
  <div>
    <div class="main">
      <h2>Admin</h2>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMenu: []
    };
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

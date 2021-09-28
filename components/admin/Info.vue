<template lang="pug">
  .info(:style="`background: ${bg}`")
    .info__content
      .info__data
        .info__number {{ number }}
        .info__title {{ title }}
      .info__svg
        div(:class="icon + ' info__icon'")
    footer.info__footer
      nuxt-link(:to="link") More info
</template>

<script>
export default {
  props: ['number', 'title', 'icon', 'link', 'bg']
}
</script>

<style lang="scss">
.info {
  position: relative;
  display: block;
  margin-bottom: 20px;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.13), 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &__content {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    height: 13rem;
  }
  &__number {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: bold;
  }
  &__title {
    font-size: 2rem;
  }
  &__icon {
    font-size: 8rem;
    color: rgba(0, 0, 0, .15);
  }
  &__footer {
    display: block;
    padding: 1rem 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    color: rgba(255, 255, 255, .8);
    background-color: rgba(0, 0, 0, .1);
    z-index: 10;
    transition: all .4s;
    &:hover {
      color: white;
      background-color: rgba(0, 0, 0, .6);
    }
  }
}
</style>

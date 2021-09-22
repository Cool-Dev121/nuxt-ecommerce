<template lang="pug">
  #js-sandwich-wrap.sandwich-wrap
    .sandwich(:class="{'sandwich--active': active}")
      .sandwich__line.sandwich__line--top
      .sandwich__line.sandwich__line--middle
      .sandwich__line.sandwich__line--bottom
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/partials/variables";
.sandwich-wrap {
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 18px 10px;
  border-radius: 3px;
  z-index: 1001;
}
.sandwich {
  position: relative;
  display: block;
  width: 23px;
  height: 14px;
  cursor: pointer;
}
.sandwich--active .sandwich__line--top {
  top: 6px;
  transform: rotate(45deg);
}
.sandwich--active .sandwich__line--middle {
  opacity: 0;
}
.sandwich--active .sandwich__line--bottom {
  top: 6px;
  transform: rotate(-45deg);
}
.sandwich__line {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  transition: all linear 0.1s;
  background-color: $accent;
}
.sandwich__line--top {
  top: 0;
}
.sandwich__line--middle {
  top: 6px;
}
.sandwich__line--bottom {
  top: 12px;
}
</style>

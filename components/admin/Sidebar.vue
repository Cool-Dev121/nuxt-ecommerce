<template lang="pug">
  .sidebar
    el-menu.el-menu-vertical-demo(:default-active="$route.fullPath" router :unique-opened="true")
      el-menu-item(index="/")
        template(slot="title")
          i.el-icon-school
          span Frontend
      el-submenu(index="1")
        template(slot="title")
          i.el-icon-location
          span Products
        el-menu-item(index="/admin/product/new")
          span New product
        el-menu-item(index="/admin/product")
          span List
      el-submenu(index="2")
        template(slot="title")
          i.el-icon-location
          span Categories
        el-menu-item(index="/admin/category/new")
          span New category
        el-menu-item(index="/admin/category")
          span List
</template>

<style lang="scss">
@import "assets/scss/partials/variables";
.el-menu {
  padding: 1rem;
  background-color: #414448;
}
.el-submenu {
  margin-bottom: 0.5rem;
  color: white;
  background-color: #525d61;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  &.is-opened {
    .el-submenu__title {
      background-color: #035494 !important;
    }
    .el-menu-item {
      background-color: darken(#545c64, 20%) !important;
      &.is-active {
        background-color: #968c1b !important;
      }
    }
  }
}
.el-submenu__title {
  color: white;
  background-color: #5a6367;
}
.el-menu-item:hover,
.el-submenu__title:hover {
  background-color: darken(#545c64, 10%);
}
.el-menu-item.is-active {
  color: white;
  background-color: darken(#545c64, 10%) !important;
}
.el-submenu .el-menu-item {
  margin-bottom: 0.5rem;
  background-color: #454e52;
}
.el-menu-item {
  margin-bottom: 0.6rem;
  color: white;
  background-color: #6a737b;
}
</style>

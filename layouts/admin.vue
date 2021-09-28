<template lang="pug">
  .admin
    .aside
      Sidebar
    .admin__main
      .admin__navigation
        nuxt-link.admin__url(to="/admin" class="btn green")
          .el-icon-menu
          span Admin
        nuxt-link(to="/admin/media/add-media" class="btn green") Add media
        nuxt-link(to="/admin/media" class="btn") List media
        a(class="logout" href="/")
          i.el-icon-platform-eleme
      .content
        nuxt
</template>
<script>
import Sidebar from "@/components/admin/Sidebar.vue";

export default {
  components: {
    Sidebar
  },
};
</script>

<style lang="scss">
.admin {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  &__url {
    margin-right: auto;
    span {
      margin-left: 0.5rem;
    }
  }
}
.aside {
  flex: 0 0 30rem;
  background-color: #545c64;
}
.aside .el-menu {
  border: none;
}
.admin__main {
  flex: 1;
  background-color: white;
}
.admin__title {
  margin-bottom: 3rem;
}
.content {
  padding: 3rem;
}
.admin__navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 2rem;
  color: white;
  background-color: #414448;
  a {
    margin-left: 3rem;
    display: block;
  }
  .logout {
    color: red;
  }
}
</style>

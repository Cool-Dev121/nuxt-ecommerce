<template lang="pug">
  .media-list
    header.media-grid__header
      input(type='text' @input="searchData" placeholder='Search media...' v-model="search_field")
    .media-grid
      .media-grid__wrap
        .media-grid__item(v-for="({name, id}) in result" :key="id")
          img(:src="`/uploads/${name}`" width="300")
          .media-grid__content
            h4.media-grid__title {{ name }}
            el-button(class="media-grid__button" type="danger" @click="removeFile(name)") Remove
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({ $axios }) {
    const { tableData } = await $axios.$get(process.env.baseUrl + '/api/v1/media');
    return { tableData };
  },
  data() {
    return {
      search: '',
      showOverlay: false,
      image: null,
      search_field: "",
      result: []
    }
  },
  methods: {
    searchData() {
      this.result = this.tableData.filter(item => item.name.toLowerCase().includes(this.search_field.toLowerCase()));
    },
    async removeFile(title) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        try {
          await this.$axios.$delete(process.env.baseUrl + '/api/v1/media/' + title);
          window.location.reload(true)
          this.$message.success(`File "${title}" was deleted...`);
        } catch (e) {
          console.log(e, 'e')
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
  },
  mounted() {
    if (this.tableData.length) {
      this.result = this.tableData;
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/blocks/media-grid";
.media-list {
  .media-grid {
    margin-bottom: 3rem;
  }
  .buttons {
    margin-bottom: 3rem;
  }
}
</style>

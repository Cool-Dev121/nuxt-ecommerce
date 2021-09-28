<template lang="pug">
  .media-grid
    .media-grid__body
      header.media-grid__header
        input(type="text" v-model="search_field" @input="searchData" placeholder="Search media...")
        el-button(@click="close" type="danger") Close
      .media-grid__wrap
        MediaGridItem(v-for="mediaItem in result" :mediaItem="mediaItem" :key="mediaItem.id" @addFileClick="addFileToFiles" @removeFileClick="removeFileFromFiles")
    footer.media-grid__footer
      el-button(type="success" @click="returnFiles") Add image
</template>

<script>
import MediaGridItem from "./MediaGridItem";

export default {
  props: ['file_field'],
  data() {
    return {
      search: '',
      showOverlay: false,
      search_field: '',
      result: [],
      files: []
    }
  },
  methods: {
    addFileToFiles(value) {
      this.files.push(value.file);
    },
    removeFileFromFiles(value) {
      this.files = this.files.filter(item => item !== value.file);
    },
    returnFiles() {
      this.$emit('returnFiles', { files: this.files, file_field: this.file_field })
      this.$emit('close')
    },
    close() {
      this.$emit('close')
    },
    searchData() {
      this.result = this.tableData.filter(item => item.name.toLowerCase().includes(this.search_field.toLowerCase()));
    }
  },
  computed: {
    tableData() {
      return this.$store.getters.media.tableData;
    },
  },
  components: {
    MediaGridItem
  },
  mounted() {
    this.result = this.tableData;
  }
}
</script>

<style lang="scss">
.media-grid {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    text-align: right;
    input {
      flex: 0 0 30rem;
      height: 4rem;
      text-indent: 2rem;
      border: 1px solid #aaa;
      outline: none;
    }
  }
  .el-checkbox {
    position: absolute;
    top: -6px;
    left: -3px;
    width: 3rem;
    height: 3rem;
    z-index: 100;
    opacity: 0;
    &.is-checked {
      opacity: 1;
    }
  }
  .el-checkbox__inner {
    border: 1px solid #16c9e7;
  }
  &__footer {
    position: fixed;
    bottom: 1rem;
    left: 0;
    text-align: right;
    width: 100%;
    height: 4rem;
    z-index: 100;
    .el-button {
      position: relative;
      right: 1rem;
    }
  }
}
.el-message-box {
  width: 900px;
}
</style>

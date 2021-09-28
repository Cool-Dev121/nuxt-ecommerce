<template lang="pug">
  .media-grid__item(@click="addFile(mediaItem.name)" :class="{active: checked}")
    el-checkbox(v-model='checked')
    img(:src="`/uploads/${mediaItem.name}`" width="300")
    .media-grid__content
      h4.media-grid__title {{ mediaItem.name }}
      el-button(class="media-grid__button" type="danger" @click="removeFile(mediaItem.name)") Remove
</template>

<script>
export default {
  props: ['mediaItem'],
  data() {
    return {
      checked: false
    }
  },
  methods: {
    async removeFile(title) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        await this.$axios.delete(process.env.baseUrl + '/api/v1/media/' + title);
        this.$message.success(`File "${title}" was deleted...`);
        await this.$nuxt.refresh()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    addFile(file) {
      this.checked = !this.checked;
      if (this.checked) {
        this.$emit('addFileClick', { file: file });
      } else if (this.checked === false) {
        this.$emit('removeFileClick', { file: file });
      }
    },
  }
}
</script>

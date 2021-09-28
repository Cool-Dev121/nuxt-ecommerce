<template lang="pug">
  .add-media
    .add-media__content
      h2.add-media__title Max upload files: {{maxUploadedFileCount}}

      form(:action="actionUrl" enctype="multipart/form-data" @submit.prevent="uploadFile" )
        input(type="file" @change="previewFiles" multiple)
        span.upload-file-btn.btn Add file

      ul.add-media__list
        li(v-for="({name, size, type}, index) in fileList" :key="name" :class="{error: type !== 'image/jpeg'}" @click="removeUploadFile(index)")
          strong  {{ name }}
          em ({{ formatBytes(size) }})
      h3.error(v-if="!isImage") Upload just jpeg image
      h3.error(v-if="isMoreMaxUploadedFiles") Max count for uploaded files is {{maxUploadedFileCount}}
      el-button(type="primary" @click.prevent="uploadFile" :disabled="!isImage || isMoreMaxUploadedFiles") Upload file
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      fileList: [],
      isImage: true
    }
  },
  computed: {
    actionUrl() {
      return process.env.baseUrl;
    },
    isMoreMaxUploadedFiles() {
      return this.fileList.length > process.env.MAX_UPLOAD_COUNT;
    },
    maxUploadedFileCount() {
      return process.env.MAX_UPLOAD_COUNT;
    }
  },
  methods: {
    removeUploadFile(itemIndex) {
      this.fileList = this.fileList.filter((item, index) => itemIndex !== index);
      this.checkIsImage();
    },
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    previewFiles(event) {
      this.fileList = [...event.target.files];
      this.checkIsImage();
    },
    checkIsImage() {
      this.isImage = this.fileList.every(item => item.type === "image/jpeg");
    },
    async uploadFile() {
      const formData = new FormData();

      for (let i = 0; i < this.fileList.length; i++) {
        formData.append('images', this.fileList[i])
      }

      for (let pair of formData.entries()) {
        // console.log(pair[0] + ", " + pair[1]);
      }

      try {
        await this.$axios.$post(this.actionUrl + '/api/v1/media', formData);
        this.$message.success('Image was uploaded');
        await this.$nuxt.refresh();
        window.location.href = '/admin/media';
      } catch (e) {
        console.log(e, 'e')
      }
    }
  }
}
</script>

<style lang="scss">
h3.error {
  margin-bottom: 3rem;
  text-align: center;
  color: #bb3232;
  text-shadow: 2px 2px rgba(0, 0, 0, .2);
}
.add-media {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #888;
  &__title {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: white;
  }
  .buttons {
    margin-bottom: 4rem;
  }
  .el-upload-list {
    padding: 1rem;
    background-color: white;
    border-radius: 0.6rem;
  }
  form {
    position: relative;
    margin-bottom: 8rem;
    width: 30rem;
    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 5rem;
      z-index: 1;
      cursor: pointer;
    }
  }
  .upload-file-btn {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    z-index: 2;
    pointer-events: none;
    cursor: pointer;
    color: #333;
    background-color: white;
    transition: all .4s;
  }
  &__list {
    li {
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: white;
    }
  }
}
</style>

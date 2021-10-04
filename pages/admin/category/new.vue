<template lang="pug">
  .new
    h2.admin__title Create new
    el-form.demo-ruleForm.admin-form(:model='ruleForm' :rules='rules' ref='ruleForm' )
      .el-form__flex
        el-form-item(label='Title' prop='title')
          el-input(v-model='ruleForm.title' @change="createSlug(ruleForm.title, 'slug')")
        el-form-item(label='Slug' prop='slug')
          el-input(v-model='slug')


      .buttons
        el-button(type="success" @click.prevent="() => {showModal = true; file_field_default = 'image'}")
          span(v-if="!image") Select file from media gallery
          span(v-else) {{ image }}

      el-form-item
        el-button(type='primary' :loading="loading" @click="submitForm()") Create


    .media-gallery(v-if="showModal" )
      MediaGrid(@close="showModal = false" @returnFiles="returnFiles" @file_name="file_name" :file_field="file_field_default")
</template>
<script>
import MediaGrid from "../../../components/admin/MediaGrid";
import mediaMixin from "../../../mixins/mediaMixin";

export default {
  layout: "admin",
  mixins: [mediaMixin],
  async asyncData({ $axios }) {
    const { tableData } = await $axios.$get(
      process.env.baseUrl + "/api/v1/media"
    );
    return { tableData };
  },
  data() {
    return {
      search: "",
      showModal: false,
      file_field_default: null,
      actionUrl: process.env.baseUrl + "/api/v1/category",
      loading: false,
      slug: "",
      image: "",
      ruleForm: {
        title: ""
      },
      rules: {
        title: [
          { required: true, message: "Field is required", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    MediaGrid
  },
  methods: {
    returnFiles({ files, file_field }) {
      console.log(files, "files");
      console.log(file_field, "file_field");
    },
    createSlug(value, prop) {
      let slug = value.toLowerCase();
      slug = slug
        .split(" ")
        .join("-")
        .replace(/[^\w-]+/g, "");
      this[prop] = slug;
    },
    async submitForm() {
      this.loading = true;

      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          const reqData = {
            title: this.ruleForm.title,
            slug: this.slug,
            image: this.image
          };
          this.$axios
            .$post(this.actionUrl, reqData)
            .then(() => {
              this.ruleForm.title = "";
              this.slug = "";
              this.image = null;
              //   this.$router.push("/admin/category");
              this.loading = false;
            })
            .catch(err => {
              if (err.response) {
                console.log(
                  err.response.data.message,
                  "err.response.data.message"
                );
                this.$message.error(err.response.data.message);
                this.loading = false;
              } else if (err.request) {
                this.$message.error(err.request);
                console.log(err.request, "err.request");
                this.loading = false;
              }
            });
        } else {
          this.$message.error("Form error");
          this.loading = false;
          return false;
        }
      });
    }
  }
};
</script>

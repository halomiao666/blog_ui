<template>
  <div class="blog_detail_content">
    <div v-html="blogDetail"></div>
  </div>
</template>

<script>
import api from "../../../service/api";
export default {
  name: "BlogDetailContent",
  props: {
    msg: String,
  },
  data() {
    return {
      blogDetail: "",
    };
  },
  created() {
    this.getBlogsDetail();
  },
  methods: {
    getBlogsDetail: function () {
      api
        .getBlogDetail("/blogs/getById/" + this.$route.params.id)
        .then((res) => {
          this.blogDetail = res.data.content;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style scoped>
.blog_detail_content {
  padding: 20px
}
</style>

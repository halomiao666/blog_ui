<template>
  <div id="blogs">
    <div id="content">
      <BlogSideBar id="side" msg="BlogSideBar" />
      <div class="blog_list" v-if="path.name === 'home'">
        <BlogList id="bloglist" :msg="path.name" />
      </div>
      <div class="blog_block_list" v-if="(path.name === 'block')">
        <BlogBlockList id="blogblocklist" :msg="path.name" />
      </div>
      <div class="blog_detail" v-if="path.name === 'detail'">
        <BlogDetail id="blogdetail" :msg="path.name" />
      </div>
    </div>
    <!-- <BlogBottom id="bottom" msg="BlogBottom" /> -->
  </div>
</template>

<script>
import BlogSideBar from "../components/BlogComponents/BlogSideBar";
import BlogList from "../components/BlogComponents/BlogList";
import BlogBlockList from "../components/BlogComponents/BlogBlockList";
import BlogDetail from "../components/BlogComponents/BlogDetail";

export default {
  name: "Blogs",
  components: {
    BlogSideBar,
    BlogList,
    BlogBlockList,
    BlogDetail,
    // BlogBottom,
  },
  data() {
    return {
      form_name: "",
      form_password: "",
      blogs: [],
      path: ""
    };
  },
  watch: {
    $route: "getPath"
  },
  created() {
    this.getPath()
  },
  methods: {
    getPath: function () {
      // console.log("path", this.$route.params.blockname);
      this.path = this.$route;
    },
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#header {
  width: 100%;
}
#content {
  width: 100%;
  height: 80%;
  display: flex;
}
#side {
  width: 10%;
  height: 100%;
}
.blog_block_list {
  width: 1200px;
}
#maincontent {
  width: 90%;
  height: 100%;
}
#blogdetail pre{
  background: rgb(40, 44, 52);
  padding: 10px 20px;
  color: #fff;
  border-radius: 15px;
}
#bottom {
  width: 100%;
  height: 10%;
  background: gray;
}
</style>

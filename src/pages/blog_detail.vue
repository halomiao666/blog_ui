<template>
  <div id="blog_detail">
    <div id="detail">
      <BlogSideBar id="side" msg="BlogSideBar" />
      <BlogDetailContent id="maindetail" msg="BlogDetail" />
    </div>
  </div>
</template>

<script>
import BlogSideBar from "../components/BlogComponents/BlogSideBar";
import BlogDetailContent from "../components/BlogComponents/BlogDetail";


export default {
  name: "BlogDetail",
  components: {
    BlogSideBar,
    BlogDetailContent
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
  text-align: center;
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
#detail {
  width: 100%;
  height: 80%;
  display: flex;
}
#side {
  width: 10%;
  height: 100%;
}
#maincontent {
  width: 90%;
  height: 100%;
}

#bottom {
  width: 100%;
  height: 10%;
  background: gray;
}
</style>

<template>
  <div id="app">
    <BlogHeader id="header" blogName="我的博客" />
    <router-view></router-view>
    <PopupLoginModal />
  </div>
</template>

<script>
import BlogHeader from "./components/BlogComponents/BlogHeader";
import PopupLoginModal from "./components/login/PopModel";

export default {
  name: "App",
  components: {
    BlogHeader,
    PopupLoginModal
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

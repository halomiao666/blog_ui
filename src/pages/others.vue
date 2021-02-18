<template>
  <div id="others">
    <div class="haha">others</div>
  </div>
</template>

<script>

export default {
  name: "Others",
  components: {
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

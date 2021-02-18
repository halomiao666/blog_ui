<template>
  <div class="blog_sidebar">
    <!-- <h1>{{ msg }}</h1> -->
    <ul>
      <li>
        <a><span>JS</span></a>
      </li>
      <li>
        <a><span>ES6</span></a>
      </li>
      <li>
        <a><span>CSS</span></a>
      </li>
      <li>
        <a><span>VUE</span></a>
      </li>
      <li>
        <a><span>React</span></a>
      </li>
      <li>
        <a><span>Webpack</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogSideBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding: 5px 0;
  display: block;
  cursor: pointer;
}
span {
  color: #333;
  font-size: 15px;
  line-height: 25px;
  display: block;
  font-weight: bold;
}
</style>

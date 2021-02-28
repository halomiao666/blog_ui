<template>
  <div class="blog_sidebar">
    <!-- <h1>{{ msg }}</h1> -->
    <ul>
      <li>
        <router-link :to="{name:'block',params:{blockname:'js'}}"><span>JS</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'es6'}}"><span>ES6</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'css'}}"><span>CSS</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'vue'}}"><span>VUE</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'react'}}"><span>React</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'webpack'}}"><span>Webpack</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'express'}}"><span>Express</span></router-link>
      </li>
      <li>
        <router-link :to="{name:'block',params:{blockname:'mongo'}}"><span>Mongo</span></router-link>
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

<template>
  <div class="blog_header">
    <div class="layout">
      <!-- <span>{{ blogName }}</span> -->
      <ul>
        <li>
          <router-link to="/"><span>我的博客</span></router-link>
        </li>
        <li>
          <router-link to="/achievements"><span>作品集</span></router-link>
        </li>
        <li>
          <router-link to="/others"><span>其他</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  props: {
    blogName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog_header {
  display: flex;
  border: 1px solid #666;
}
.layout {
  width: 1170px;
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
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
}
</style>

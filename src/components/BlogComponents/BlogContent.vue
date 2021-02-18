<template>
  <div class="blog_content">
    <ul>
      <li v-for="item in blogs" :key="item._id">
          <router-link :to="'/detail/'+item._id"><span>{{item.title}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../../service/api";
export default {
  name: "BlogContent",
  props: {
    msg: String,
  },
  data() {
    return {
      form_name: "",
      form_password: "",
      blogs: [],
    };
  },
  created(){
    this.getBlogs()
  },
  methods: {
    
    getBlogs: function () {
      api
        .getBlogList()
        .then((res) => {
          if (res.data.code === 1) {
            this.blogs = res.data.data
            console.log("getBlogs", res.data.data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
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
  padding: 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 4%);
}
a {
  padding: 10px 0;
  display: block;
  cursor: pointer;
}
span {
  color: #666;
  display: block;
  font-size: 12px;
  text-align: left;
}
</style>

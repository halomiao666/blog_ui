<template>
  <div class="login-form">
    <div class="username form-item">
      <input placeholder="请输入用户名" v-model="form_name" />
    </div>
    <div class="userpassword form-item">
      <input placeholder="请输入密码" type="password" v-model="form_password" />
    </div>
    <p>name is: {{ form_name }}</p>
    <p>password is: {{ form_password }}</p>
    <button id="login-form-btn" v-on:click="userlogin">登录</button>
  </div>
</template>
<script>
import api from "../../../service/api";
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
  data() {
    return {
      form_name: "",
      form_password: "",
    };
  },
  created(){
    this.getAllUserList()
  },
  methods: {
    userlogin: function () {
      let userParams = {
        username: this.form_name,
        password: this.form_password,
      };
      api
        .login(userParams)
        .then((res) => {
          if (res.data.code === 1) {
            console.log("res", res);
          } else if (res.data.code === 0) {
            console.log("res", res.data.message);
          }
          this.$emit('showCityName',res.data.code)
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    getAllUserList: function () {
      api
        .getAllUsers()
        .then((res) => {
          if (res.data.code === 1) {
            console.log("getAllUserList", res);
          }
          this.$emit('showCityName',res.data.code)
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>
<style scoped>
.login-form {
  padding: 0 72px 20px;
}
.form-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-bottom: 32px;
}
.form-item input {
  width: calc(100% - 72px);
  font-size: 14px;
  line-height: 28px;
  color: #262626;
  border: 0;
  outline: 0;
}
#login-form-btn {
  background: pink;
  cursor: default;
  margin-bottom: 32px;
  width: 100%;
  height: 48px;
  font-size: 14px;
  color: #fff;
  border: 1px solid pink;
  border-radius: 8px;
}
/* .username {
  border-color: #ff3537;
} */
</style>
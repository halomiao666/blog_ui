<template>
  <div class="popup-login-modal" v-show="show">
    <div class="modal-content">
      <div class="login-modal-header">
        <div class="login-title">Login</div>
      </div>
      <div class="login-modal-container">
        <LoginForm @showCityName="updateCity"></LoginForm>
      </div>
      <div class="login-modal-footer"></div>
    </div>
  </div>
</template>
<script>
import LoginForm from "./LoginForm";
export default {
  components: { LoginForm },
  name: "PopupLoginModal",
  props: {
    msg: String,
  },
  data() {
    return {
       show: false
    }
  },
  methods: {
    updateCity: function (data) {
      console.log('res code', data)
      if (data === 1) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
};
</script>
<style scoped>
.popup-login-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.4);
}
.popup-login-modal .modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: #fff;
  display: block;
}
.login-modal-header {
  display: flex;
  height: 72px;
  justify-content: center;
  align-items: center;
}
.login-title {
  cursor: pointer;
}
</style>
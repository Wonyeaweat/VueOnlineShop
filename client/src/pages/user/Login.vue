<template>
  <div>
    <h1 class="user-title">
      <router-link to="/" tag="div">用户界面</router-link>
    </h1>
    <div id="login-form"></div>
  </div>
</template>

<style>
.user-title:hover {
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  mounted() { 
    const appId = "5fbf8aab1539028fa240432a";
    const userPoolId = "5fbf8aaa7cedf0d1a0c760be";
    const domain = "https://wyw-vue-online-shop.authing.cn/";

    const form = new Guard(userPoolId, {
      title: "Yevii的Vue迷你电商",
      mountId: "login-form",
      hideClose: true
    });

    const that = this;

    form.on("authenticated", userInfo => {
      that.$store.commit("SET_USER", userInfo);
      localStorage.setItem("token", JSON.stringify(userInfo.token));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      that.$router.push("/");
    });
  }
};
</script>

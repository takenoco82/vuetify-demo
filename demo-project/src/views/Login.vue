<template>
  <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <ul>
          <li><input placeholder="username" v-model="username"></li>
          <li><input placeholder="password" v-model="password"></li>
          <li><button type="submit">login</button></li>
        </ul>
      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      console.log("login clicked");
      console.log(`username=${this.username},password=${this.password}`);

      // TODO ログインモジュールを実行する
    }
  }
}
</script>

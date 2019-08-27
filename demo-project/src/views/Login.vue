<template>
  <v-app>
    <v-content>
      <v-form @submit.prevent="login">
        <v-container>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-text-field label="username" v-model="username"></v-text-field>
          <v-text-field label="password" v-model="password"></v-text-field>
          <v-btn type="submit">login</v-btn>
        </v-container>
      </v-form>
    </v-content>
  </v-app>
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
      // TODO ホントはアクセストークンをローカルストレージに保存する
      // ストアにユーザ情報を保存する
      this.$store.commit("setUserName", this.username);
      this.$router.push("top");
    }
  }
}
</script>

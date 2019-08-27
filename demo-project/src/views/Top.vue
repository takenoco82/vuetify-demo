<template>
  <div>
    <h1>Top</h1>
    <p>username: {{userName}}</p>
    <button v-on:click="logout">logout</button>
  </div>
</template>

<script>
export default {
  name: 'top',
  computed: {
    userName() {
      return this.$store.state.userName
    }
  },
  methods: {
    logout() {
      console.log("logout clicked");
      // TODO ホントはローカルストレージに保存されたアクセストークンを削除する
      // ストアからユーザ情報を削除する
      this.$store.commit("removeUserName");
      this.$router.push("login");
    }
  }
}
</script>

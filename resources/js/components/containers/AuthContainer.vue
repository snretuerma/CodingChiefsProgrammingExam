<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click.once="logout">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
        <router-view :user_token="user_token" />
    </v-main>
  </v-app>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$route.name;
        },
        user_token() {
            return this.$store.state.auth.user_token;
        },
    },
    methods: {
        logout(){
            // this.$store.dispatch('startLoading');
            axios.get('/api/logout', {
                headers: {
                    'Authorization': `Bearer ${this.user_token.plainTextToken}`
                }
            }).then(response => {
                this.$store.dispatch('unsetAuthUserToken');
                window.localStorage.removeItem('vuex');
                this.$router.push({ name: "Login" });
            });
        }
    }
}
</script>
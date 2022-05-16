<template>
  <!-- eslint-disable -->
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <button @click="logIn">
    Log In
  </button>
  <button @click="logOut">
    Log Out
  </button>
  <RouterView />
  <!-- eslint-enable -->
</template>

<script>

export default {
  methods: {
    logIn() {
      this.$router.push('/login');
    },
    logOut() {
      this.$store.dispatch('user/logOut');
    }
  }
};
</script>
<template>
  <!-- eslint-disable -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink 
    :to="{ 
      name : 'docsId', 
      params: { id : '7777'},
      query: { name : 'Minje', age : 27, email : 'mieumje@abc.com' }
    }">
    Document ID
  </RouterLink>
  <button @click="$router.push({ name: 'home' })">
    Home
  </button>
  <button @click="$router.push({ name: 'about' })">
    About
  </button>
  <RouterView />
  <!-- eslint-enable -->
</template>

<script>

export default {
  data() {
    return {
      msg: 'Hello Vue!'
    };
  }
};
</script>
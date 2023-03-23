<template>
  <!-- routes 폴더 내부에 작성하는 컴포넌트들은 하나의 페이지 역할을 한다고 본다. -->
  <h1>Home.vue</h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  }
};
</script>
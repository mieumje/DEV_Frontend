<template>
  <!-- eslint-disable -->
  <div class="app__inner">
    <LNB />
    <div class="app__page">
      <Header />
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import LNB from '~/components/LNB';
import Header from '~/components/Header';

export default {
  components: {
    LNB,
    Header
  }
};
</script>

<style scoped lang="scss">
.app__inner {
  display: flex;
  height: 100vh;
  font-size: 14px;
  color: $color-font;
  line-height: 1.4;
  font-family: 'Noto Sans KR', sans-serif;

  .app__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    .page__header {
      height: 80px;
    }

    .page__container {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
}
</style>
<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
u,a {
  text-decoration: none;
}

.mint-loadmore {
  overflow: hidden;
  max-height: 420px;
  overflow-y: scroll;
}
.mint-loadmore-text {
  display: block;
  margin: 20px auto 0;
  width: fit-content;
}
</style>

<template>
  <div id="app">
    <keep-alive exclude="Detail"> //详情页面Detail不会被缓存
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

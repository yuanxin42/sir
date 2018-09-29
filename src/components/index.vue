<template>
  <div>
    <index-page></index-page>
  </div>
</template>

<script>
import indexPage from './indexPage/index'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    indexPage
  }
}
</script>

<style lang="less" scoped>
</style>

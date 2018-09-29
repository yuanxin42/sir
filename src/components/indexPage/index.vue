<template>
  <div>
    <page-head></page-head>
    <page-list></page-list>
    <div class="foot">Design by @原鑫</div>
  </div>
</template>

<script>
import pageHead from './pageHead'
import pageList from './pageList'
export default {
  data () {
    return {
    }
  },
  components: {
    pageHead,
    pageList
  }
}
</script>

<style lang="less" scoped>
.foot{
  height: 50px;
  background: #595d67;
  line-height: 50px;
  color: white;
  text-align: center;
}
</style>

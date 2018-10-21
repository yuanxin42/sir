<template>
  <div class="package">
    <page-head class="head" :istop='true'></page-head>

    <sir-tabs tabPosition='left'>
      <sir-tab label="contain布局" name="first1">我是tab11</sir-tab>
      <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
      <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
    </sir-tabs>
    <sir-scrolltop></sir-scrolltop>
  </div>
</template>

<script>
import pageHead from '../indexPage/pageHead'
export default {
  data () {
    return {
    }
  },
  components: {
    pageHead
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
/deep/ .navleft {
  width: 200px;
}

.package {
  height: 2000px;
  .head {
    border-bottom: 1px solid #ccc;
  }
}
</style>

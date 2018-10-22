<template>
  <div class="package">
    <page-head class="head" :istop='true'></page-head>

    <div class="contain">
      <sir-tabs class="sitTabs" tabPosition='left' labelwidth='120px'>
        <sir-tab label="contain布局" name="first1">我是tab11
          <sir-container></sir-container>
        </sir-tab>
        <sir-tab label="card卡片" name="first2">我是tab2</sir-tab>
        <sir-tab label="navmenu导航菜单" name="first3">我是tab4</sir-tab>
        <sir-tab label="scrolltop滚动条" name="first5">我是tab5</sir-tab>
        <sir-tab label="tabs选项卡" name="first4">我是tab6</sir-tab>
      </sir-tabs>
    </div>
    <sir-scrolltop></sir-scrolltop>
  </div>
</template>

<script>
import pageHead from '../indexPage/pageHead'
import sirContainer from './container'
export default {
  data () {
    return {
    }
  },
  components: {
    pageHead,
    sirContainer
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.package {
  height: 2000px;
  .head {
    /deep/ .title{
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .contain {
    width: 1200px;
    margin: 0 auto;
    .sitTabs {
      height: 2000px;
    }
  }
}
</style>

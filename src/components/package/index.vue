<template>
  <div class="package">
    <page-head class="head" :istop='true'></page-head>

    <div class="contain">
      <sir-tabs class="sitTabs" tabPosition='left' labelwidth='120px'>
        <sir-tab width="100%" label="contain布局" name="first1"><sirShowContainer></sirShowContainer></sir-tab>
        <sir-tab width="100%" label="card卡片" name="first2"><sirShowCard></sirShowCard></sir-tab>
        <sir-tab width="100%" label="navmenu导航菜单" name="first3"><sirShowNavmenu></sirShowNavmenu></sir-tab>
        <sir-tab width="100%" label="scrolltop滚动条" name="first333"><sirShowScrolltop></sirShowScrolltop></sir-tab>
        <sir-tab width="100%" label="tabs选项卡" name="first5"><sirShowTabs></sirShowTabs></sir-tab>
      </sir-tabs>
    </div>
     <sir-scrolltop></sir-scrolltop>
  </div>
</template>

<script>
import pageHead from '../indexPage/pageHead'
import sirShowContainer from './container'
import sirShowCard from './card'
import sirShowNavmenu from './navmenu'
import sirShowScrolltop from './scrolltop'
import sirShowTabs from './tabs'
export default {
  data () {
    return {
    }
  },
  components: {
    pageHead,
    sirShowContainer,
    sirShowCard,
    sirShowNavmenu,
    sirShowScrolltop,
    sirShowTabs
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.package {
  height: 100%;
  .head {
    /deep/ .title {
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .contain {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .sitTabs {
      height: 100%;
    }
  }
}
</style>

<template>
    <div>
        <page-head></page-head>
        <sir-tabs>
            <sir-tab label="用户管理" name="first1">我是tab11</sir-tab>
            <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
            <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
        </sir-tabs>
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
  }
}
</script>

<style lang="less" scoped>

</style>

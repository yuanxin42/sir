<template>
    <div class="sir-contain">
        <h3>tabs选项卡</h3>
        <p>横着的选项卡：</p>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-tabs labelwidth='200px'>
                    <sir-tab label="用户管理阿斯顿撒打算" name="first1">我是tab11</sir-tab>
                    <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
                    <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
                </sir-tabs>
            </div>
            <div slot="cardFotter">
                &lt;sir-tabs labelwidth='200px'&gt;
                    &lt;sir-tab label="用户管理阿斯顿撒打算" name="first1"&gt;我是tab11&lt;/sir-tab&gt;
                    &lt;sir-tab label="用户管2" name="first2"&gt;我是tab2&lt;/sir-tab&gt;
                    &lt;sir-tab label="用户管理33" name="first3"&gt;我是tab33&lt;/sir-tab&gt;
                &lt;/sir-tabs&gt;
            </div>
        </sir-codecard>
        <p>竖着的选项卡：</p>
        <p>可以通过tabPosition='left'属性进行设置，目前支持top和left两个属性</p>
         <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-tabs tabPosition='left' labelwidth='200px'>
                    <sir-tab label="用户管理阿斯顿撒打算" name="first1">我是tab11</sir-tab>
                    <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
                    <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
                </sir-tabs>
            </div>
            <div slot="cardFotter">
                &lt;sir-tabs  tabPosition='left' labelwidth='200px'&gt;
                    &lt;sir-tab label="用户管理阿斯顿撒打算" name="first1"&gt;我是tab11&lt;/sir-tab&gt;
                    &lt;sir-tab label="用户管2" name="first2"&gt;我是tab2&lt;/sir-tab&gt;
                    &lt;sir-tab label="用户管理33" name="first3"&gt;我是tab33&lt;/sir-tab&gt;
                &lt;/sir-tabs&gt;
            </div>
        </sir-codecard>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>

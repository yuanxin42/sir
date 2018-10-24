<template>
    <div class="sir-contain">
        <h3>navmenu导航菜单</h3>
        <!-- <sir-navmenu>
            <div slot="navtop">
                <a class="navTopBlock" href="https://www.baidu.com" alt="樱花庄的白猫">
                    樱花庄的白猫</a>
            </div>
            <div slot="allsubmenu">
                <sir-submenu>111</sir-submenu>
                <sir-submenu>222</sir-submenu>
                111 222
            </div>
        </sir-navmenu> -->
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-main>Main</sir-main>
                    <sir-footer>Footer</sir-footer>
                </sir-container>
            </div>
            <div slot="cardFotter">
                // 代码: &lt;sir-container&gt; &lt;sir-header&gt;Header&lt;/sir-header&gt; &lt;sir-main&gt;Main&lt;/sir-main&gt; &lt;sir-footer&gt;Footer&lt;/sir-footer&gt; &lt;/sir-container&gt;
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
    .sir-contain{
        // position: relative;
    }
</style>

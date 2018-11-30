<template>
    <div class="sir-contain">
        <h3>navmenu导航菜单</h3>
        <p>支持属性:width，height</p>
        <p>sirbac：默认的导航菜单背景</p>
        <p>declinecolor：下滑和鼠标移入时背景色</p>
        <p>issetlocation:  是否固定顶部</p>
        <p>isdeclinebackground: 鼠标下滑颜色是否改变</p>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                 <sir-navmenu width='1000px' sirbac="#2db7f5" declinecolor='#2db7f5' :issetlocation='false'  :isdeclinebackground='true'>
                    <div slot="navtop">
                        <a class="logolink" href="https://2heng.xin" alt="樱花庄的白猫">樱花庄的白猫</a>
                    </div>
                    <div slot="allsubmenu" class="blogitems">
                        <sir-submenu class="submenu">
                        首页
                        </sir-submenu>
                        <sir-submenu class="submenu">
                        成长历程
                        </sir-submenu>
                        <sir-submenu class="submenu">清单</sir-submenu>
                        <sir-submenu class="submenu">关于</sir-submenu>
                    </div>
                </sir-navmenu>
            </div>
            <div slot="cardFotter">
                &lt;sir-navmenu width='1000px' sirbac="#2db7f5" declinecolor='#2db7f5' :issetlocation='false'  :isdeclinebackground='true'&gt;
                    &lt;div slot="navtop"&gt;
                        &lt;a class="logolink" href="https://2heng.xin" alt="樱花庄的白猫"&gt;樱花庄的白猫&lt;/a&gt;
                    &lt;/div&gt;
                    &lt;div slot="allsubmenu" class="blogitems"&gt;
                        &lt;sir-submenu class="submenu"&gt;
                        首页
                        &lt;/sir-submenu&gt;
                        &lt;sir-submenu class="submenu"&gt;
                        成长历程
                        &lt;/sir-submenu&gt;
                        &lt;sir-submenu class="submenu"&gt;清单&lt;/sir-submenu&gt;
                        &lt;sir-submenu class="submenu"&gt;关于&lt;/sir-submenu&gt;
                    &lt;/div&gt;
                &lt;/sir-navmenu&gt;
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
.sir-contain {
    // position: relative;
}
</style>

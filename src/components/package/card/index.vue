<template>
    <div class="sir-contain">
        <h3>card卡片</h3>
        <p>支持widt和height属性，给卡片设置宽高</p>
        <p>效果：给cardHeader中加上class为cardHover会有hover效果。给cardHeader中加上class为cardTitle。</p>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-card width='400px'>
                    <div slot="cardHeader">
                        <img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt="">
                    </div>
                    <div slot="cardFotter">
                        <div class="cardTitle">
                            <a href="http://www.360.cn/n/10274.html">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="http://www.360.cn/n/10274.html">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                    </div>
                </sir-card>
            </div>
            <div slot="cardFotter">
                    &lt;sir-card width='400px'&gt;
                      &lt;div slot="cardHeader"&gt;
                          &lt;img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt=""&gt;
                      &lt;/div&gt;
                    &lt;div slot="cardFotter"&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="http://www.360.cn/n/10274.html"&gt;360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="http://www.360.cn/n/10274.html"&gt;360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/sir-card&gt;
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
    .cardimg{}
</style>

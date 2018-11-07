<template>
    <div class="sir-contain">
        <h3>card卡片</h3>
        <p>1.支持widt和height属性，给卡片设置宽高</p>
        <p>2.location属性，可以设置图片和描述块的位置</p>
        <p>效果：给cardHeader中加上class为cardHover会有hover效果。给cardHeader中加上class为cardTitle。</p>
        <sir-codecard width="100%" style="overflow:hidden">
            <div slot="cardHeader" class="cardstyle">
                <h5 style="margin:10px 0 10px 0;">emmm......这姿势好像在哪见过= 。=</h5>
                <sir-card width='300px' style="display:inline-block">
                    <div slot="cardHeader">
                        <img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt="">
                    </div>
                    <div slot="cardFotter">
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                    </div>
                </sir-card>
                <img style="display:inline-block;width:500px;height:350px;" src="../../../assets/image/QQ图片20181024230019.png" alt="">
            </div>
            <div slot="cardFotter">
                    // 敲黑板

                    &lt;sir-card width='400px'&gt;
                      &lt;div slot="cardHeader"&gt;
                          &lt;img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt=""&gt;
                      &lt;/div&gt;
                    &lt;div slot="cardFotter"&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="https://github.com/yuanxin666/sir-zujian"&gt;
                            360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="https://github.com/yuanxin666/sir-zujian"&gt;
                            360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/sir-card&gt;
            </div>
        </sir-codecard>
        <p>其实还可以这样location='left',目前支持left，right，top三个属性:</p>
        <sir-codecard width="100%" style="overflow:hidden">
            <div slot="cardHeader" class="cardstyle">
                <sir-card width='500px' location='left'>
                    <div slot="cardHeader">
                        <img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt="">
                    </div>
                    <div slot="cardFotter">
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                        <div class="cardTitle">
                            <a href="https://github.com/yuanxin666/sir-zujian">来我GitHub点个star吧，老铁！来我GitHub点个star吧，老铁！</a>
                        </div>
                    </div>
                </sir-card>
            </div>
            <div slot="cardFotter">
                    // 敲黑板

                    &lt;sir-card width='500px' location='left'&gt;
                      &lt;div slot="cardHeader"&gt;
                          &lt;img class="cardHover" src="../../../assets/image/20180827005509615.jpg" alt=""&gt;
                      &lt;/div&gt;
                    &lt;div slot="cardFotter"&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="https://github.com/yuanxin666/sir-zujian"&gt;
                            360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="cardTitle"&gt;
                            &lt;a href="https://github.com/yuanxin666/sir-zujian"&gt;
                            360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股&lt;/a&gt;
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
    .cardstyle{
        padding: 20px;
    }
</style>

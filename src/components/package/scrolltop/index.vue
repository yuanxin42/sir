<template>
    <div class="sir-contain">
        <h3>scrolltop滚动条</h3>
        <p>右侧小猫效果滚动条，支持属性：scrollTop='100px',默认是400px，超出显示小猫。sirSrc属性，点击小猫跳转的路径，可以设置锚点固定，默认跳www.baidu.com</p>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <img src="../../../assets/image/QQ图片20181024150320.png" alt="">
            </div>
            <div slot="cardFotter">
                // 代码:

                &lt;sir-scrolltop&gt;&lt;/sir-scrolltop&gt;
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

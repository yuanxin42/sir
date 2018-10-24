<template>
    <div class="sir-contain">
        <h3>codecard代码块</h3>
        <p>属性：width，height</p>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <h5>整个大边框就是我</h5>
                <h4>整个大边框就是我</h4>
                <h3>整个大边框就是我</h3>
                <h2>整个大边框就是我</h2>
                <h1>整个大边框就是我</h1>
            </div>
            <div slot="cardFotter">
                // 代码: 要展示的代码部分，已经对代码处理，保证传进来的是字符串就行
                        &lt;sir-codecard width="100%"&gt;
                            &lt;div slot="cardHeader"&gt;
                                &lt;h5&gt;整个大边框就是我&lt;/h5&gt;
                                &lt;h4&gt;整个大边框就是我&lt;/h4&gt;
                                &lt;h3&gt;整个大边框就是我&lt;/h3&gt;
                                &lt;h2&gt;整个大边框就是我&lt;/h2&gt;
                                &lt;h1&gt;整个大边框就是我&lt;/h1&gt;
                            &lt;/div&gt;
                            &lt;div slot="cardFotter"&gt;
                                // 代码: 要展示的代码部分，已经对代码处理，保证传进来的是字符串就行
                            &lt;/div&gt;
                        &lt;/sir-codecard&gt;
            </div>
        </sir-codecard>
        <p>上面就是这个代码卡片和整个代码，点击按钮可以隐藏和显示</p>
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

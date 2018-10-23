<template>
    <div class="sir-contain">
        <h3>contain布局</h3>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-main>Main</sir-main>
                    <sir-footer>Footer</sir-footer>
                </sir-container>
            </div>
            <div slot="cardFotter">
                // 代码:

                &lt;sir-container&gt;
                    &lt;sir-header&gt;Header&lt;/sir-header&gt;
                    &lt;sir-main&gt;Main&lt;/sir-main&gt;
                    &lt;sir-footer&gt;Footer&lt;/sir-footer&gt;
                &lt;/sir-container&gt;
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

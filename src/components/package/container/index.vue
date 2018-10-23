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
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-container>
                    <sir-aside width="200px">Aside</sir-aside>
                    <sir-main>Main</sir-main>
                </sir-container>
            </div>
            <div slot="cardFotter">
                &lt;sir-container&gt;
                    &lt;sir-aside width="200px"&gt;Aside&lt;/sir-aside&gt;
                    &lt;sir-main&gt;Main&lt;/sir-main&gt;
                &lt;/sir-container&gt;
            </div>
        </sir-codecard>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-container>
                        <sir-aside width="200px">Aside</sir-aside>
                        <sir-main>Main</sir-main>
                    </sir-container>
                </sir-container>
            </div>
            <div slot="cardFotter">
                &lt;sir-container&gt;
                    &lt;sir-header&gt;Header&lt;/sir-header&gt;
                    &lt;sir-container&gt;
                        &lt;sir-aside width="200px"&gt;Aside&lt;/sir-aside&gt;
                        &lt;sir-main&gt;Main&lt;/sir-main&gt;
                    &lt;/sir-container&gt;
                &lt;/sir-container&gt;
            </div>
        </sir-codecard>
        <sir-codecard width="100%">
            <div slot="cardHeader">
               <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-container>
                        <sir-aside width="200px">Aside1</sir-aside>
                        <sir-container>
                            <sir-main>Main</sir-main>
                            <sir-footer>Footer</sir-footer>
                        </sir-container>
                    </sir-container>
                </sir-container>
            </div>
            <div slot="cardFotter">
                &lt;sir-container&gt;
                    &lt;sir-header&gt;Header&lt;/sir-header&gt;
                    &lt;sir-container&gt;
                        &lt;sir-aside width="200px"&gt;Aside1&lt;/sir-aside&gt;
                        &lt;sir-container&gt;
                            &lt;sir-main&gt;Main&lt;/sir-main&gt;
                            &lt;sir-footer&gt;Footer&lt;/sir-footer&gt;
                        &lt;/sir-container&gt;
                    &lt;/sir-container&gt;
                &lt;/sir-container&gt;
            </div>
        </sir-codecard>
        <sir-codecard width="100%">
            <div slot="cardHeader">
                <sir-container>
                    <sir-aside width="200px">Aside1</sir-aside>
                    <sir-container>
                        <sir-header>Header</sir-header>
                        <sir-main>Main</sir-main>
                        <sir-footer>Footer</sir-footer>
                    </sir-container>
                </sir-container>
            </div>
            <div slot="cardFotter">
                &lt;sir-container&gt;
                    &lt;sir-aside width="200px"&gt;Aside1&lt;/sir-aside&gt;
                    &lt;sir-container&gt;
                        &lt;sir-header&gt;Header&lt;/sir-header&gt;
                        &lt;sir-main&gt;Main&lt;/sir-main&gt;
                        &lt;sir-footer&gt;Footer&lt;/sir-footer&gt;
                    &lt;/sir-container&gt;
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
.cardcenter {
    width: 100%; // text-align: center;
}
</style>

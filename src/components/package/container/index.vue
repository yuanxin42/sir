<template>
    <div class="sir-contain" :style="{width:width,height:height}">
        <sir-card width='900px'>
            <div slot="cardHeader">
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-main>Main</sir-main>
                </sir-container>
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-main>Main</sir-main>
                    <sir-footer>Footer</sir-footer>
                </sir-container>
                <sir-container>
                    <sir-aside width="200px">Aside</sir-aside>
                    <sir-main>Main</sir-main>
                </sir-container>
                <sir-container>
                    <sir-header>Header</sir-header>
                    <sir-container>
                        <sir-aside width="200px">Aside</sir-aside>
                        <sir-main>Main</sir-main>
                    </sir-container>
                </sir-container>
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

                <sir-container>
                    <sir-aside width="200px">Aside1</sir-aside>
                    <sir-container>
                        <sir-header>Header</sir-header>
                        <sir-main>Main</sir-main>
                    </sir-container>
                </sir-container>

                <sir-container>
                    <sir-aside width="200px">Aside</sir-aside>
                    <sir-container>
                        <sir-header>Header</sir-header>
                        <sir-main>Main</sir-main>
                        <sir-footer>Footer</sir-footer>
                    </sir-container>
                </sir-container>
                <sir-container>
                    <sir-aside width="200px">12121sa</sir-aside>
                    <sir-container>
                        <sir-header>121212</sir-header>
                        <sir-main>121212</sir-main>
                        <sir-footer>121212</sir-footer>
                    </sir-container>
                </sir-container>
            </div>
            <div slot="cardFotter">
                <div class="cardTitle">
                    <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股</a>
                </div>
                <div class="cardTitle">
                    <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股</a>
                </div>
            </div>
        </sir-card>
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

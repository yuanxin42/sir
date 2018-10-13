<template>
    <div class="block">
        <div class="blockMain">
            <p class="blockFont">sir-方便，快捷</p>
            <div class="blockDes">
                <div class="blockDesL">
                    <p>工具函数库</p>
                    <img title="0.0.1" src="@/assets/image/qnpm-0.0.3-red.svg">
                </div>
                <div class="blockDesR">
                    $ cnpm install @test/sir
                </div>
            </div>
            <p class="blockLast">使用过程中如果出现任何问题联系--
                <a href="https://github.com/yuanxin666">@autor</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
@white: #fff;
.block {
    width: 100%;
    height: 300px;
    background: #428bca;
    padding-top: 30px;
    .blockMain {
        width: 1200px;
        margin: 0 auto;
        .blockFont {
            color: @white;
            font-size: 45px;
            font-weight: bold;
        }
        .blockDes {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 20px;
                font-weight: normal;
                color: @white;
            }
            .blockDesR {
                height: 20px;
                margin-bottom: 20px;
                background: #333;
                color: #fff;
                border-radius: 6px;
                margin-top: 30px;
                padding: 10px 20px;
                word-wrap: break-word;
            }
        }
        .blockLast {
            a {
                color: #fff;
            }
            color: #fff;
            margin-top: 50px;
        }
    }
}
</style>

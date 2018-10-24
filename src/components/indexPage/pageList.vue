<template>
    <div class="list">
        <div class="listL">
            <h3 class="listTit">sir组件库</h3>
            <p>sir 库是一款基于vue项目的组件库，可以帮助你更便捷的搭建项目。</p>
            <p class="listDes">开源组件库，更方便，更便捷!</p>

            <ul class="listItems">
                <li>111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
            </ul>
            <h3 class="listTit">Notice</h3>
            <p>在vue项目开发中引用组件</p>
            <ul class="listItems">
                <li>111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
            </ul>
            <h3 class="listTit">author--@原鑫</h3>
            <p>现在就职于360企业安全，担任前端开发职位。</p>
            <ul class="listItems">
                <li>
                    <a target="black" href="https://github.com/yuanxin666">github</a>
                </li>
                <li>
                    <a href="https://blog.csdn.net/qq_37339364">csdn博客</a>
                </li>
                <li>333</li>
                <li>444</li>
            </ul>

        </div>
        <div class="listR"><a href="/package">组件文档</a></div>
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
.list {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    color: #333;
    .listL {
        flex: 8; // background: red;
        .listTit {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .listDes {
            margin-top: 10px;
            padding: 0 15px;
            color: #777;
            border-left: 4px solid #ddd;
        }
        .listItems {
            padding-left: 40px;
            margin-top: 10px;
            margin-bottom: 20px;
            li {
                margin-top: 10px;
                color: #333;
                a {
                    color: #333;
                }
            }
        }
    }
    .listR {
        flex: 3; // background: blue;
    }
}
</style>

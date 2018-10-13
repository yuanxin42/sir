<template>
  <div>
    <div class="title">
      <a href="#" class="logo">sir组件库</a>
      <input placeholder="Seach components" type="text" class="select">
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
.title {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  .logo {
    color: #2db7f5;
    font-size: 30px;
    font-weight: bold;
    flex: 2;
  }
  .select {
    height: 50px;
    border: 1px solid #d9d9d9;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 10px;
    outline: none;
    flex: 1;
  }
  .select::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #d9d9d9;
  }
}
</style>

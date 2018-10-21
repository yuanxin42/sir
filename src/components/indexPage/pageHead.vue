<template>
  <div class="header" :class="{header:true,scrolldown:(istop&&gotop)}">
    <div class="title">
      <a href="#" class="logo">sir组件库</a>
      <input placeholder="Seach components" type="text" class="select">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    istop: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      scrollTop: '100px',
      gotop: false
    }
  },
  components: {
  },
  methods: {
    handleScroll () {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let todown = +this.scrollTop.slice(0, this.scrollTop.match(/px$/).index)
      if (scroll > todown) {
        this.gotop = true
      } else {
        this.gotop = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
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
}
.scrolldown{
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>

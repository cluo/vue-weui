<template>
  <div class="page_button">
    <wi-button text="页面主操作 Normal" type="primary"></wi-button>
    <wi-button text="页面主操作 Loading" type="primary" loading></wi-button>
    <wi-button text="页面主操作 Disabled" type="primary" disabled></wi-button>
    <wi-button text="页面次要操作 Normal"></wi-button>
    <wi-button text="页面次操作 Loading" loading></wi-button>
    <wi-button text="页面次要操作 Disabled" disabled></wi-button>
    <wi-button text="警告类操作 Normal" type="warn"></wi-button>
    <wi-button text="警告类操作 Loading" type="warn" loading></wi-button>
    <wi-button text="警告类操作 Disabled" type="warn" disabled></wi-button>
    <div class="button-sp-area">
      <wi-button text="按钮" plain></wi-button>
      <wi-button text="按钮" plain disabled></wi-button>
      <wi-button text="按钮" type="primary" plain></wi-button>
      <wi-button text="按钮" type="primary" plain disabled></wi-button>
      <wi-button text="按钮" type="primary" mini></wi-button>
      <wi-button text="按钮" mini></wi-button>
      <wi-button text="按钮" type="warn" mini></wi-button>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {wiButton} from 'components'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      wiButton
    }
  }
</script>
<style lang="scss" type="text/css">
  .button-sp-area {
    margin: 0 auto;
    padding: 15px 0;
    width: 60%;
  }
</style>

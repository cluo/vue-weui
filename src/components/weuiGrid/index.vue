<template>
  <div class="weui-grids">
    <router-link class="weui-grid"
                 tag="span"
                 v-for="(item, key) in items"
                 :to="item.router"
                 :key="key">
      <div class="weui-grid__icon">
        <img :src="item.icon" :alt="item.text">
      </div>
      <p class="weui-grid__label" v-text="item.text"></p>
    </router-link>
  </div>
</template>
<script type="text/javascript">

  /**
   * 数据结构
   * {
   *  router: {
   *    name: 'home'
   *  },
   *  text: '',
   *  icon: ''
    * }
   */


  import 'weui/src/style/widget/weui-grid/weui-grid.less'

  export default{
    name: 'wiGrid',
    props: {
      items: {
        type: Array,
        default: () => {
          return [{
            router: {
              name: 'home'
            },
            text: '',
            icon: ''
          }]
        },
        require: true
      }
    }
  }
</script>

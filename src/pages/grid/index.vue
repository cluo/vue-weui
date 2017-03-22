<template>
  <div class="page_grid">
    <wi-grid :items="data"></wi-grid>
  </div>
</template>
<script type="text/javascript">
  import {wiGrid} from 'components'

  export default{
    data(){
      return {
        data: [{
          router: {
            path: '/'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }, {
          router: {
            name: 'home'
          },
          text: 'grid',
          icon: require('./images/icon_tabbar.png')
        }]
      }
    },
    components: {
      wiGrid
    }
  }
</script>

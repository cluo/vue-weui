<template>
  <div class="wrapper" ref="wrapper">
    <div class="inner">
      <div class="page__hd">
        <h1 class="page__title" v-text="$route.meta.title"></h1>
        <p class="page__desc" v-text="$route.meta.desc"></p>
      </div>
      <div class="page__bd_spacing">
        <router-view></router-view>
      </div>
      <div class="page__ft j_bottom">
        <router-link to="/">
          <img :src="getFootImg">
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {wiFlexGroup, wiFlexItem} from 'components'

  export default{
    name: 'app',
    components: {
      wiFlexGroup,
      wiFlexItem
    },
    computed: {
      getFootImg(){
        return require('assets/images/icon_footer.png')
      }
    }
  }
</script>
<style lang="scss" type="text/css">
  .page__hd {
    padding: 40px;
  }

  .page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
  }

  .page__desc {
    margin-top: 5px;
    color: #888;
    text-align: left;
    font-size: 14px;
  }

  .page__bd_spacing {
    padding: 0 15px;
  }

  .page__ft {
    padding-top: 40px;
    padding-bottom: 10px;
    text-align: center;
  }

  .page__ft img {
    height: 19px;
  }
</style>

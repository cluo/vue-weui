<template>
  <div class="page_home">
    <ul>
      <li class="item" v-for="(item, key) in data" :key="key">
        <div class="js_category"
             @click="on_click_category(key)"
             :class="{'active': (key === menu_index && item.is_show)}">
          <wi-flex-group>
            <wi-flex-item>
              <span v-text="item.text"></span>
            </wi-flex-item>
            <img :src="item.icon" alt="item.text" class="img"/>
          </wi-flex-group>
        </div>
        <div class="child_category" v-if="item.child" v-show="key === menu_index && item.is_show">
          <router-link
            :to="child_item.router" tag="div" class="chile_item" v-for="(child_item, child_key) in item.child"
            :key="child_key">
            <div class="weui-cell__bd">
              <p v-text="child_item.text"></p>
            </div>
            <div class="weui-cell__ft"></div>
          </router-link>
        </div>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import {wiFlexGroup, wiFlexItem} from 'components'

  export default{
    data() {
      return {
        data: [{
          text: '表单',
          icon: require('./images/icon_nav_form.png'),
          child: [{
            router: {name: 'button'},
            text: 'Button'
          }]
        }, {
          text: '基础组件',
          icon: require('./images/icon_nav_layout.png'),
          child: [{
            router: {name: 'grid'},
            text: 'Grid'
          }, {
            router: {name: 'icons'},
            text: 'Icons'
          }]
        }, {
          text: '操作反馈',
          icon: require('./images/icon_nav_feedback.png')
        }, {
          text: '导航相关',
          icon: require('./images/icon_nav_nav.png')
        }, {
          text: '搜索相关',
          icon: require('./images/icon_nav_search.png')
        }],
        menu_index: 0,
        hello_obj: ['sadada']
      }
    },
    methods: {
      on_click_category(index) {
        if (!this.data[index].child) return
        if (this.menu_index !== index) {
          this.$set(this.data[this.menu_index], 'is_show', false)
          this.menu_index = index
          this.$set(this.data[index], 'is_show', true)
        } else {
          this.$set(this.data[index], 'is_show', !this.data[index].is_show)
        }
      }
    },
    components: {
      wiFlexGroup,
      wiFlexItem
    },
    watch: {
      hello_obj: {
        handler (val, oldVal) {
          console.log(val, oldVal)
        },
        // 深度观察
        deep: true
      }
    }
  }
</script>
<style type="text/css" lang="scss">
  @import "./scss/style";
</style>

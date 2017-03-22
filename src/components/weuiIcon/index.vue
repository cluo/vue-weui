<template>
  <i :class="getIcon"></i>
</template>
<script type="text/javascript">
  import 'weui/src/style/icon/weui-icon_font.less'

  export default{
    name: 'wiIcon',
    props: {
      type: {
        type: String,
        default: null
      },
      icon: {
        type: String,
        default: 'success'
      }
    },
    computed: {
      getIcon() {
        if (this.type === 'msg') {
          return ['weui-icon_msg', 'weui-icon-' + this.icon]
        } else if (this.type === 'primary') {
          return ['weui-icon_msg-primary', 'weui-icon-' + this.icon]
        } else {
          return 'weui-icon-' + this.icon
        }
      }
    }
  }
</script>

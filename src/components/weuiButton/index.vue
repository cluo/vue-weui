<template>
  <button class="weui-btn"
          type="button"
          :disabled="disabled"
          :class="getTypeClass"
          @click="handleClick">
    <i class="weui-loading" v-if="loading"></i>
    <span v-if="text" v-text="text"></span>
  </button>
</template>
<script type="text/javascript">
  import 'weui/src/style/widget/weui-button/weui-button.less'
  import 'weui/src/style/widget/weui-loading/weui-loading.less'

  export default{
    name: 'wiButton',
    props: {
      text: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      mini: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getTypeClass(){
        let _dis = 'weui-btn_'
        let _type = 'weui-btn_'
        if (this.plain) {
          _dis += 'plain-disabled'
          _type += 'plain-' + this.type
        } else {
          _dis += 'disabled'
          _type += this.type
        }
        return [this.loading ? 'weui-btn_loading' : '', this.mini ? 'weui-btn_mini' : '', this.disabled ? _dis : '', _type]
      }
    },
    methods: {
      handleClick(e){
        this.$emit('click', e)
      }
    }
  }
</script>

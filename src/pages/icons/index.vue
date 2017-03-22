<template>
  <div class="page_icons">
    <div class="icon-box">
      <span style="margin-right: 18px;">
        <wi-icon icon="success" type="msg"></wi-icon>
      </span>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">成功</h3>
        <p class="icon-box__desc">用于表示操作顺利达成</p>
      </div>
    </div>
    <div class="icon-box">
      <span style="margin-right: 18px;">
        <wi-icon icon="info" type="msg"></wi-icon>
      </span>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">提示</h3>
        <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
      </div>
    </div>
    <div class="icon-box">
      <span style="margin-right: 18px;">
        <wi-icon icon="warn" type="primary"></wi-icon>
      </span>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">普通警告</h3>
        <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
      </div>
    </div>
    <div class="icon-box">
      <span style="margin-right: 18px;">
        <wi-icon icon="warn" type="msg"></wi-icon>
      </span>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">强烈警告</h3>
        <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
      </div>
    </div>
    <div class="icon-box">
      <span style="margin-right: 18px;">
        <wi-icon icon="waiting" type="msg"></wi-icon>
      </span>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">等待</h3>
        <p class="icon-box__desc">用于表示等待</p>
      </div>
    </div>
    <div class="icon_sp_area">
      <wi-icon icon="success"></wi-icon>
      <wi-icon icon="success-no-circle"></wi-icon>
      <wi-icon icon="circle"></wi-icon>
      <wi-icon icon="warn"></wi-icon>
      <wi-icon icon="download"></wi-icon>
      <wi-icon icon="info-circle"></wi-icon>
      <wi-icon icon="cancel"></wi-icon>
      <wi-icon icon="search"></wi-icon>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {wiIcon} from 'components'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      wiIcon
    }
  }
</script>
<style lang='scss' type="text/css">
  .page_icons {
    padding: 0 15px;
    text-align: left;

  .icon-box {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

  .icon-box__ctn {
    flex-shrink: 100;
  }

  .icon-box__title {
    font-weight: 400;
  }

  .icon-box__desc {
    margin-top: 6px;
    font-size: 12px;
    color: #888;
  }

  }
  .icon_sp_area {
    margin-top: 10px;
    text-align: left;
  }

  }
</style>

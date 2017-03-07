<template>
  <div id="live">
    <div class="main-left">
      <el-menu default-active="/activeLive" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeLive" :class="{'isActive': active}">直播浏览</el-menu-item>
        <el-menu-item index="/activeLive2" :class="{'isActive': !active}">直播管理</el-menu-item>
        <el-menu-item index="/activeLive3" :class="{'isActive': !active}">开启直播</el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧主内容区 -->
    <div  class="main-right" >
        <!-- 视图 -->
        <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'live',
    data: function(){
     return {
      active:true
      }
    }
  }
</script>
<style>

</style>

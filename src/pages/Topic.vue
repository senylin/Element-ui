<template>
<div id="topic">
  <div class="main-left">
    <el-menu default-active="/activeTopic/list" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/activeTopic/list" :class="{'isActive': active}">话题浏览</el-menu-item>
      <el-menu-item index="/activeTopic/table" :class="{'isActive': !active}">话题管理</el-menu-item>
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
    name: 'topic',
    data: function(){
     return {
      active:true
      }
    }
  }
</script>
<style>
#topic{display: -webkit-box;display: -ms-flexbox;display: flex;width:100%; }
</style>

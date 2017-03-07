<template>
  <div id="users">
    <div class="main-left">
      <el-menu default-active="/activeUsers" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeUsers" :class="{'isActive': active}">个人信息</el-menu-item>
        <el-menu-item index="/activeUsers2" :class="{'isActive': !active}">实名认证</el-menu-item>
        <el-menu-item index="/activeUsers3" :class="{'isActive': !active}">档案管理</el-menu-item>
        <el-menu-item index="/activeUsers4" :class="{'isActive': !active}">咨询管理</el-menu-item>
        <el-menu-item index="/activeUsers5" :class="{'isActive': !active}">用户反馈</el-menu-item>
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
    name: 'users',
    data: function(){
     return {
      active:true
      }
    }
  }
</script>
<style>

</style>

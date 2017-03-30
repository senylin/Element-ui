<template>
  <div id="users">
    <div class="main-left">
      <el-menu default-active="/activeUsers/userinfo" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeUsers/userinfo" :class="{'isActive': active}">用户信息</el-menu-item>
        <el-menu-item index="/activeUsers/userauth" :class="{'isActive': !active}">实名认证</el-menu-item>
        <el-menu-item index="/activeUsers/record" :class="{'isActive': !active}">档案管理</el-menu-item>
        <el-menu-item index="/activeUsers/service" :class="{'isActive': !active}">业务管理</el-menu-item>
        <el-menu-item index="/activeUsers/recall" :class="{'isActive': !active}">用户反馈</el-menu-item>
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
#users{display: -webkit-box;display: -ms-flexbox;display: flex;width:100%; }
</style>

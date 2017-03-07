<template>
  <div id="article">
    <div class="main-left">
      <el-menu default-active="/activeArticle" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeArticle" :class="{'isActive': active}">资讯浏览</el-menu-item>
        <el-menu-item index="/activeArticle2" :class="{'isActive': !active}">资讯统计</el-menu-item>
        <el-menu-item index="/activeArticle3" :class="{'isActive': !active}">资讯管理</el-menu-item>
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
    name: 'article',
    data: function(){
     return {
      active:true
      }
    }
  }
</script>
<style>
#article{display: -webkit-box;display: -ms-flexbox;display: flex; }
</style>

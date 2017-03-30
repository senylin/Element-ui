<template>
  <div id="article">
    <div class="main-left">
      <el-menu default-active="/activeArticle/view" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeArticle/view" :class="{'isActive': active}">资讯浏览</el-menu-item>
        <el-menu-item index="/activeArticle/sheet" :class="{'isActive': !active}">资讯统计</el-menu-item>
        <el-menu-item index="/activeArticle/table" :class="{'isActive': !active}">资讯管理</el-menu-item>
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
#article{display: -webkit-box;display: -ms-flexbox;display: flex;width:100%; }
</style>

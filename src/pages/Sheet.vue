<template>
  <div id="sheet">
    <div class="main-left">
      <el-menu default-active="/activeSheet" class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/activeSheet" :class="{'isActive': active}">数据统计</el-menu-item>
        <el-menu-item index="/activeSheet2" :class="{'isActive': !active}">标签统计</el-menu-item>
        <el-menu-item index="/activeSheet3" :class="{'isActive': !active}">数据分析</el-menu-item>
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
    name: 'sheet',
    data: function(){
     return {
      active:true
      }
    }
  }
</script>
<style>

</style>

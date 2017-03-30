<template>
  <div class="list-views">
   <!-- <h3 style="margin-top:0;color:#20a0ff;width:90%;text-align:right;">心理资讯</h3> -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-tabs  class="tab">
          <el-tab-pane label="心理健康"></el-tab-pane>
          <el-tab-pane label="工作压力"></el-tab-pane>
          <el-tab-pane label="学习障碍"></el-tab-pane>
          <el-tab-pane label="社会交际"></el-tab-pane>
          <el-tab-pane label="情感问题"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 12" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/rs.jpg" class="image">
          <div style="padding: 5px;">
            <span style='color:#333'>好吃的汉堡</span>
            <span style='float:right;font-size:11px;line-height:30px;color:gray;'>午夜电台</span>
            <div class="bottom clearfix">
              <time class="time">正在直播</time>
              <el-button type="text" class="button">进入直播间</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .el-tabs__item{padding:0 50px;}
  .time {
    font-size: 13px;
    color: #999;
  }
  .list-views .el-card{
    margin:10px!important;
    border-radius:2px;
  }
  .list-views .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .list-views .button {
    padding: 0;
    float: right;
  }

  .list-views .image {
    width: 100%;
    height:150px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

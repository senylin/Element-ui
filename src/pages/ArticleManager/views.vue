<template>
  <div class="article-views">
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
      <el-col :span="24" v-for="(o, index) in 4" :offset="0">
        <el-card :body-style="{ padding: '10px' }">
          <img src="../../assets/rs.jpg" class="image">
          <div style="padding: 14px;float:left;width:65%;height:100%;">
            <span class="a-title">好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .el-tabs__item{padding:0 40px;}
  .el-card{
    border-top:0 solid gray!important;
    border-left:0 solid gray!important;
    border-right:0 solid gray!important;
    padding-bottom:15px;
    padding-top:5px;
    border-radius:1px;
  }
  .el-card:hover{
    background:##CCFFCC;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .a-title{
    font-size:18px;
    color:#666!important;
    cursor:pointer;

  }
  .a-title:hover{
    color:#20a0ff!important;
  }
  .bottom {
    margin-top: 50px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 150px;
    height:100px;
    margin:5px 5px 5px 5px;
    float:left;
    display: block;
    border-radius:1px;
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
      currentDate: new Date()
    };
  }
}
</script>

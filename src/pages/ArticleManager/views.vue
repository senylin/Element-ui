<template>
  <div class="article-views">
   <!-- <h3 style="margin-top:0;color:#20a0ff;width:90%;text-align:right;">心理资讯</h3> -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-tabs  class="tab">
          <el-tab-pane label="家庭纠纷"></el-tab-pane>
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
      <el-col :span="24" v-for="(o, index) in articleData.length" :offset="0">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="articleData[index].img" class="image">
          <div style="padding: 14px;float:left;width:65%;height:100%;">
            <span class="a-title">{{ articleData[index].title }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ articleData[index].date }}</time>
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
  .article-views .el-card{
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
  .article-views .a-title{
    font-size:18px;
    color:#666!important;
    cursor:pointer;

  }
  .article-views .a-title:hover{
    color:#20a0ff!important;
  }
  .article-views .bottom {
    margin-top: 50px;
    line-height: 12px;
  }

  .article-views .button {
    padding: 0;
    float: right;
  }

  .article-views .image {
    width: 150px;
    height:100px;
    margin:5px 5px 5px 5px;
    float:left;
    display: block;
    border-radius:1px;
  }

  .article-views .clearfix:before,
  .article-views .clearfix:after {
      display: table;
      content: "";
  }

  .article-views .clearfix:after {
      clear: both
  }
</style>

<script>


export default {
  data() {
    return {
      currentDate: new Date(),
      total:3,
      types:['全部','家庭纠纷','工作压力','情感问题','社会交际','学习困扰'],
      articleData:[
      {
        aid:1,
        title:'你为什么邀召唤我',
        type:'家庭纠纷',
        author:'lin',
        date:new Date().getYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
        img:require('../../assets/article/h.jpg')
      },
      {
        aid:2,
        title:'你为什么邀召唤我',
        type:'家庭纠纷',
        author:'lin',
        date:new Date().getYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
        img:require('../../assets/article/h.jpg')
      },
      {
        aid:3,
        title:'你为什么邀召唤我',
        type:'家庭纠纷',
        author:'lin',
        date:new Date().getYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
        img:require('../../assets/article/h.jpg')
      },
      {
        aid:4,
        title:'你为什么邀召唤我',
        type:'家庭纠纷',
        author:'lin',
        date:new Date().getYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
        img:require('../../assets/article/h.jpg')
      },
      {
        aid:5,
        title:'你为什么邀召唤我',
        type:'家庭纠纷',
        author:'lin',
        date:new Date().getYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
        img:require('../../assets/article/h.jpg')
      }

      ]
    };
  }
}
</script>

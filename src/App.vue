<template>
  <div id="app">
    <!-- 头部导航 -->
    <header  :class="{'header-fixed': headerFixed}">
    <el-row>
        <el-col :span="24">
          <!-- logo -->
          <el-col :span="6" class="logo">
            <img src="./assets/logo.png" /><span class="txt">知心小筑</span>
          </el-col>
          <el-col :span="14">
            <el-menu default-active="/activeArticle" class="el-menu-demo" mode="horizontal" :router="true" style="float:right">
              <el-menu-item index="/activeArticle" :class="{'isActive': active}">文章资讯</el-menu-item>
              <el-menu-item index="/activeLive" :class="{'isActive': !active}">心理直播</el-menu-item>
              <el-menu-item index="/activeTopic" :class="{'isActive': !active}">话题圈子</el-menu-item>
              <el-menu-item index="/activeUsers" :class="{'isActive': !active}">帐号管理</el-menu-item>
              <el-menu-item index="/activeSheet" :class="{'isActive': !active}">健康统计</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4" class="userinfo">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link userinfo-inner"> <img src="./assets/rs.jpg" /> 野火</span>
              <el-dropdown-menu slot="dropdown" style="color:#666666">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
    </el-row>
    </header>
    <div style="position: relative;height: 60px;width: 100%;"></div>

    <main>
      <router-view class="view"></router-view>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import '../theme/index.css'

Vue.use(Element)

export default {
  name: 'app',
  data: function () {
    return {
      active: true,
      headerFixed : true
    }
  }
}
</script>

<style>
body{margin: 0;}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{z-index: 1000;min-width: 960px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: rgb(238, 241, 246);  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{margin-right: 50px!important;}
header .logo{height:60px;background-color:rgb(238, 241, 246);}
header .logo .txt{font-size:22x;color:#009966;line-height: 60px;font-family:"Microsoft YaHei";font-weight:100;opacity:0.8;}
.txt:hover{cursor:pointer;opacity:1;}
header .logo img{width:80px;height:80px;float:left;margin:8px 10px 0px 40px}
header .userinfo{background: rgb(238, 241, 246);font-size:16px;text-align:left;padding-right:50px;}
header .userinfo-inner{color:#20a0ff;cursor:pointer;line-height:60px;font-size:14px;}
header .userinfo-inner img{width:40px;height:40px;border-radius:20px;border:1px solid rgb(238, 241, 246);float:left;margin:10px 15px 0 20px;}
/* 主内容区 */
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0 0 250px;-ms-flex: 0 0 250px;flex: 0 0 250px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 30px 50px; }
main .el-menu{background-color: transparent!important;}
</style>

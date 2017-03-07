<template>
    <div class="activePublic ">
      <!-- 步骤组件 -->
      <el-steps :space="200" :active="step" class="step">
        <el-step title="活动信息" description=""></el-step>
        <el-step title="报名签到" description=""></el-step>
        <el-step title="分享设置" description=""></el-step>
        <el-step title="个性设置" description=""></el-step>
      </el-steps>

        <!-- 视图 -->
      <router-view class="view"></router-view>

      <div class="but-group">
        <el-button >预览</el-button>
        <el-button >上一步</el-button>
        <el-button  type="primary">下一步</el-button>
        <el-button  type="primary">发布活动</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

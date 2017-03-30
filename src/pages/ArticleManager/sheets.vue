<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartPie = echarts.init(document.getElementById('chartPie'));

            this.chartColumn.setOption({
                title: { text: '近五月心理文章统计(k)' },
                tooltip: {},
                xAxis: {
                    data: ['1月份','2月份','3月份','4月份','5月份'],
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                    name: '阅读量',
                    type: 'bar',
                    itemStyle: {
                        normal: {color: '#83bff6'}
                    },
                    data: [5, 20, 36, 58, 60]
                }]
            });

            this.chartBar.setOption({
                title: {
                    text: '对比图',
                    subtext: '数据来自app'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['阅读量', '关注量']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['家庭纠纷','工作压力','情感问题','社会交际','学习困扰','全部']
                },
                series: [
                    {
                        name: '阅读量',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    },
                    {
                        name: '关注量',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    }
                ]
            });

            this.chartLine.setOption({
                title: {
                    text: '用户浏览'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['专家专栏', '个人撰写', '来源网络']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '专家专栏',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '个人撰写',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '来源网络',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });

            this.chartPie.setOption({
                title: {
                    text: '心理问题分布',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['家庭纠纷','工作压力','情感问题','社会交际','学习困扰']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '家庭纠纷' },
                            { value: 310, name: '工作压力' },
                            { value: 234, name: '情感问题' },
                            { value: 135, name: '社会交际' },
                            { value: 1548, name: '学习困扰' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }

    }

</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>

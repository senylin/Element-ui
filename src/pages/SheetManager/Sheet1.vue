<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
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
                title: {
                    text: '咨询师业务分析'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['业务预约', '正在进行', '业务完成']
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
                    data: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周','第八周']
                },
                yAxis: {
                    type: 'value',
                    name: '业务单',
                    axisLabel: {
                      formatter:'{value}'
                    }
                },
                series: [
                    {
                        name: '业务完成',
                        type: 'line',
                        stack: '总量',
                        data: [100, 132, 141, 154, 160, 200, 210,220]
                    },
                    {
                        name: '正在进行',
                        type: 'line',
                        stack: '总量',
                        data: [220, 232, 241, 254, 290, 330, 360,365]
                    },
                    {
                        name: '业务预约',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 951, 999, 1290, 1330, 1350,1450]
                    }
                ]
            });

            this.chartLine.setOption({
                title: {
                    text: '系统咨询数据'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['私信咨询', '线上咨询', '线下咨询']
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
                    data: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周']
                },
                yAxis: {
                    type: 'value',
                    name: '咨询数',
                    axisLabel: {
                      formatter:'{value}'
                    }
                },
                series: [
                    {
                        name: '私信咨询',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '线上咨询',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '线下咨询',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
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

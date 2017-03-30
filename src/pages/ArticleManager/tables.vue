<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-select  v-model="currentType" placeholder="请选择文章标签" style="float:left">
        <el-option
          v-for="type in types"
          :value="type">
        </el-option>
      </el-select>
			<el-form :inline="true" :model="filters" style="float:right">
				<el-form-item>
					<el-input v-model="filters.title" placeholder="关键字"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="articleTable">查询文章</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="handleAdd">添加文章</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="articleTable" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;margin-bottom:30px;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="aid" label="编号" width="100" sortable>
			</el-table-column>
			<el-table-column prop="title" label="标题" width="150" sortable>
			</el-table-column>
			<el-table-column prop="type" label="标签" width="100" sortable>
			</el-table-column>
			<el-table-column prop="author" label="发布人" width="100" sortable>
			</el-table-column>
			<el-table-column prop="date" label="发布日期" min-width="100" sortable>
			</el-table-column>
			<el-table-column prop="status" label="状态" min-width="80" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
	//import util from './js/util'
	import NProgress from 'nprogress'
//	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from './js/api';

	export default {
		data() {
			return {
				filters: {
					title: ''
				},
				total: 3,
				page: 1,
				listLoading: false,
				currentType: '全部',
				types:['全部','家庭纠纷','工作压力','情感问题','社会交际','学习困扰'],
				sels: [],//列表选中列
        activeNum: 0,
				articleTableData: [
          {
              aid:'0001',
              title:'hello world',
              type:['家庭纠纷'],
              author:'firewood',
              pic:'https://..............',
              date:'2017-3-8',
              watched:200,
              click:10,
              status:0
          },
          {
              aid:'0010',
              title:'hello world',
              type:['家庭纠纷'],
              author:'firewood',
              pic:'https://..............',
              date:'2017-3-8',
              watched:200,
              click:10,
              status:0
          },
          {
              aid:'0011',
              title:'hello world',
              type:['家庭纠纷'],
              author:'firewood',
              pic:'https://..............',
              date:'2017-3-8',
              watched:200,
              click:10,
              status:0
          },
          {
              aid:'0100',
              title:'hello world',
              type:['家庭纠纷'],
              author:'firewood',
              pic:'https://..............',
              date:'2017-3-8',
              watched:200,
              click:10,
              status:0
          },
          {
              aid:'0101',
              title:'hello world',
              type:['家庭纠纷'],
              author:'firewood',
              pic:'https://..............',
              date:'2017-3-8',
              watched:200,
              click:10,
              status:0
          }
				]
			}
		},
		computed:{
		  articleTable: function(){
		    var type = this.currentType;
		    return this.articleTableData.filter(function(data){
          if(type=='全部'||type==''){
          return true
          }else{
          return data.type == type
          }
		    })
		  }
		},
		methods:{
		  selsChange: function(val){
        var arr =[] ;
        val.forEach(function(item){
          arr.push(item.id);
        });
        this.sels = arr;
        this.activeNum = this.sels.length;
		  },
		  handleEdit: function(index,row){

		  },
		  handleDel:function(index,row){
        this.$confirm('确认删除该记录吗?', '提示', {
              type: 'warning'
            }).then(() => {
              this.listLoading = true;
              NProgress.start();
              let para = { id: row.id };
              removeUser(para).then((res) => {
                this.listLoading = false;
                NProgress.done();
                this.$notify({
                  title: '成功',
                  message: '删除成功',
                  type: 'success'
                });
                this.articleTable();
              });
            }).catch(() => {
              this.$alert('boom!Boom!BOOM!','出错',{
                  type:''
              })
            });
		  },
      //批量删除
      batchRemove: function () {
        var ids = this.sels.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          NProgress.start();
            this.listLoading = false;
            NProgress.done();
        }).catch(() => {

        });
      },
      handleCurrentChange:function(val){
        this.page = val;
        this.articleTable();
      },
      //显示新增界面
      handleAdd: function () {

      }

		}
	}

</script>

<style scoped>

</style>

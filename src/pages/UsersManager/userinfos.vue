<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
     <el-breadcrumb separator="/" style='width:50%;float:left;font-size:18px;padding:10px 10px 10px 10px'>
        <el-breadcrumb-item :to="{ path: '/activeUsers/userinfo' }">用户信息</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
			<el-form :inline="true" :model="filters" style="float:right;">
				<el-form-item>
					<el-input v-model="filters.title" placeholder="数字id"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="articleTable">查询用户</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="articleTable" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;margin-bottom:30px;">
			<el-table-column type="index" width="55">
			</el-table-column>
			<el-table-column prop="name" label="用户昵称" width="120" sortable>
			</el-table-column>
      <el-table-column prop="sex" label="性别" width="100" sortable>
      </el-table-column>
			<el-table-column prop="city" label="所在城市" width="120" sortable>
			</el-table-column>
			<el-table-column prop="status" label="是否实名" width="120" sortable>
			</el-table-column>
			<el-table-column prop="mobile" label="登记手机" min-width="120" sortable>
			</el-table-column>
      <el-table-column prop="date" label="最近上线" min-width="120" sortable>
      </el-table-column>
      <el-table-column inline-template label="操作" align="center" property="id">
          <el-button type="text" size="mini" @click.native="">查看详情</el-button>
        </el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
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
              name:'fireWOOD',
              sex:'男',
              city:'宁波',
              status:'未实名',
              mobile:18888888888,
              date:'2017-3-8'
          },
          {
              name:'fireWOOD',
              sex:'男',
              city:'宁波',
              status:'未实名',
              mobile:18888888888,
              date:'2017-3-8'
          },
          {
              name:'fireWOOD',
              sex:'男',
              city:'宁波',
              status:'未实名',
              mobile:18888888888,
              date:'2017-3-8'
          },
          {
              name:'fireWOOD',
              sex:'男',
              city:'宁波',
              status:'未实名',
              mobile:18888888888,
              date:'2017-3-8'
          },
          {
              name:'fireWOOD',
              sex:'男',
              city:'宁波',
              status:'未实名',
              mobile:18888888888,
              date:'2017-3-8'
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

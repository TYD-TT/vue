<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 添加分类按钮 -->
      <el-row>
        <el-col>
          <el-button type="primary">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <tree-table class="treeTable" show-index index-text="#" border :show-row-hover="false" :data="catelist"
      :columns="columns" :expand-type="false" :selection-type="false">
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color:lightgreen"></i>
          <i class="el-icon-error" v-else style="color:red"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level===0">一级</el-tag>
          <el-tag type="success" size="mini" v-else-if="scope.row.cat_level===1">二级</el-tag>
          <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </tree-table>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.pagenum"
      :page-sizes="[3, 5, 10, 15]" :page-size="querInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>


    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 查询条件
      querInfo:{
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 商品分类的数据列表，默认为空
      catelist:[],
      // 总数据条数
      total:0,
      // 为table指定列定义
      columns:[
        {
          label:'分类名称',
          prop:'cat_name'
        },{
          label:'是否有效',
          // 表示将当前列定义为模板
          type:'template',
          // 表示当前这一列使用模板名称
          template:'isok'
        },{
          label:'排序',
          // 表示将当前列定义为模板
          type:'template',
          // 表示当前这一列使用模板名称
          template:'order'
        },{
          label:'操作',
          // 表示将当前列定义为模板
          type:'template',
          // 表示当前这一列使用模板名称
          template:'opt'
        },
        ]


    }
  },
  created(){
    this.getCateList()
  },
  methods:{
    // 获取商品分类数据
    async getCateList(){
      const {data:res} = await this.$http.get('categories', {params:this.querInfo})
      if(res.meta.status!==200){
        return this.$message.error('获取列表失败')
      }
      this.catelist=res.data.result
      this.total=res.data.total
    },
    // 监听 pagesize 改变
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听 pagenum 改变
    handleCurrentChange(newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },
  },


}
</script>

<style lang="less" scoped>
.treeTable{
  margin-top: 15px;
}

</style>

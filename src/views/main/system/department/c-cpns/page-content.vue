<template>
  <div class="content">
    <div class="header">
      <h2 class="title">部门列表</h2>
      <el-button type="primary" @click="handleNewBtnClick">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" stripe border style="width: 100%">
        <el-table-column
          type="selection"
          label=""
          width="50px"
          align="center"
        />
        <el-table-column
          type="index"
          label="序号"
          width="60px"
          align="center"
        />
        <el-table-column
          prop="name"
          label="部门名称"
          width="150px"
          align="center"
        />
        <el-table-column
          prop="leader"
          label="部门领导"
          width="150px"
          align="center"
        />
        <el-table-column
          prop="parentId"
          label="上级部门"
          width="150px"
          align="center"
        />
        <el-table-column prop="createAt" label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160px" align="center">
          <template #default="scope">
            <el-button
              link
              icon="Edit"
              type="primary"
              @click="handleEditBtnClick(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              link
              icon="Delete"
              type="danger"
              @click="handleDeleteClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

// 定义事件
const emit = defineEmits(['newClick', 'editClick'])

// 1.发起action, 请求usersList的数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageListData()

// 2.获取usersList数据, 进行展示
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.页码相关的逻辑
function handleSizeChange() {
  fetchPageListData()
}
function handleCurrentChange() {
  fetchPageListData()
}

// 4.定义函数 用于发送网络请求
function fetchPageListData(formData: any = {}) {
  // 1.获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const queryInfo = { size, offset, ...formData }
  // 发起网络请求
  systemStore.postPageListAction('department', queryInfo)
}

// 5. 新建/编辑/删除 功能
function handleNewBtnClick() {
  emit('newClick')
}

function handleEditBtnClick(itemData: any) {
  emit('editClick', itemData)
}

function handleDeleteClick(id: number) {
  systemStore.deletePageByIdAction('department', id)
}

defineExpose({
  fetchPageListData
})
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 20px;
  }
}

.table {
  :deep(el-table__cell) {
    padding: 12px 0;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
</style>

<script setup lang="ts">
// Pinia状态管理
import { useMySkillsStore } from '@/stores/mySkillsStore.ts'
import { storeToRefs } from 'pinia'
const { Skills } = storeToRefs(useMySkillsStore())

defineOptions({
  name: 'MySkills',
})
// 进度条文字与颜色渲染
const format = (percentage: number) => (percentage === 100 ? '基本掌握' : '正在学习')
const color = (percentage: number) => {
  if (percentage == 100) {
    return '#6f7ad3'
  } else if (percentage >= 80) {
    return '#1989fa'
  } else if (percentage >= 60) {
    return '#5cb87a'
  } else if (percentage >= 40) {
    return '#e6a23c'
  } else {
    return '#f56c6c'
  }
}
</script>

<template>
  <el-scrollbar>
    <el-card>
      <!-- 技能卡片（宝可梦这一块） -->
      <template #header>
        <div class="MySkill-container-header">
          <h4>技能</h4>
        </div>
      </template>
      <template #default>
        <div class="MySkill-container-desc">
          <p>
            在课余时间中，我深入学习探索了多个感兴趣的领域，并通过系统性的学习掌握了多种语言、框架、工具的使用方式。我认为能够将这些工具为我所用并像积木一样组装成自己想要的东西是非常有趣的事情，在今后我也会继续学习。
          </p>
        </div>
        <!-- 默认展开且不折叠 -->
        <el-collapse :model-value="[0, 1, 2, 3, 4]" :before-collapse="() => false">
          <el-collapse-item
            :name="category_index"
            v-for="(category, category_index) in Skills"
            :key="category_index"
          >
            <template #title>
              <div class="MySkill-container-title">
                <h4>{{ category.title }}</h4>
              </div>
            </template>
            <template #default>
              <div class="MySkill-container-content">
                <div
                  class="MySkill-container-content-item"
                  v-for="(item, index) in category.items"
                  :key="index"
                >
                  <span>{{ item.key }}</span>
                  <el-progress
                    :stroke-width="20"
                    :percentage="item.value"
                    :format="format"
                    :color="color(item.value)"
                  />
                </div>
              </div>
            </template>
          </el-collapse-item>
        </el-collapse>
      </template>
    </el-card>
  </el-scrollbar>
</template>

<style scoped>
.el-card {
  margin-top: 20px;
  .MySkill-container-header {
    h4 {
      margin: 0;
      font-size: 25px;
    }
  }
  .MySkill-container-desc {
    padding: 0 40px;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .MySkill-container-title {
    h4 {
      margin: 5px 0 0;
      font-size: 25px;
    }
  }
  .MySkill-container-content {
    padding: 0 50px;
    .MySkill-container-content-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 5px 0;
      span {
        font-size: 18px;
      }
      .el-progress--line {
        width: 80%;
      }
    }
  }
}
</style>

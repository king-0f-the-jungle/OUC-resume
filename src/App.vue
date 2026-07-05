<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useMySkillsStore } from '@/stores/mySkillsStore.ts'
import { useMyExperienceStore } from '@/stores/myExperienceStore.ts'
import { useFuturePlanStore } from '@/stores/futurePlanStore.ts'
import { useBaseInfoStore } from '@/stores/baseInfoStore.ts'
const defaultActive = ref('/base-info')

const { initSkillsStore } = useMySkillsStore()
const { initExperienceStore } = useMyExperienceStore()
const { initPlanStore } = useFuturePlanStore()
const { initInfoStore } = useBaseInfoStore()
onBeforeMount(() => {
  initSkillsStore()
  initExperienceStore()
  initPlanStore()
  initInfoStore()
})
</script>

<template>
  <el-container>
    <!-- 页眉 -->
    <el-header>
      <!-- 导航栏 -->
      <el-menu router mode="horizontal" :default-active="defaultActive">
        <el-menu-item index="/base-info">
          <template #title>
            <div class="App-title">
              <el-image src="/images/ouc.png" fit="contain" />
              <h1>研究生个人简历</h1>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item index="/my-skills"> 技能学习 </el-menu-item>
        <el-menu-item index="/my-experience"> 科研经历 </el-menu-item>
        <el-menu-item index="/future-plan"> 未来规划 </el-menu-item>
      </el-menu>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 路由出口 -->
      <main class="App-router">
          <router-view></router-view>
      </main>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.el-menu {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 1024px;
  width: 100%;
}
.el-main {
  padding: 0;
  height: calc(100vh - 60px);
  .App-router {
    width: 80%;
    margin: 20px auto;
    min-width: 1024px;
  }
}

.App-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 20px;
    margin: 0 20px 0;
  }
  .el-image {
    height: 40px;
  }
}
</style>

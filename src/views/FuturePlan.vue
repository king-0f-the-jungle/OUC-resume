<script setup lang="ts">
// Pinia状态管理
import { useFuturePlanStore } from '@/stores/futurePlanStore.ts'
import { storeToRefs } from 'pinia'
const { Plan } = storeToRefs(useFuturePlanStore())

</script>

<template>
  <el-card class="FuturePlan-interest">
    <template #header>
      <div class="FuturePlan-interest-header">
        <h4>研究兴趣</h4>
      </div>
    </template>
    <p>{{ Plan?.interest }}</p>
  </el-card>
  <el-divider />
  <el-card class="FuturePlan-interest">
    <template #header>
      <div class="FuturePlan-interest-header">
        <h4>未来规划</h4>
      </div>
    </template>
    <el-timeline>
      <el-timeline-item timestamp="研零" placement="top">
        <el-card>
          <div class="FuturePlan-timeline-content">
            <div v-for="(item, index) in Plan?.plan[0]" :key="index">
              <h4>{{ item.name }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="研一" placement="top">
        <el-card>
          <div class="FuturePlan-timeline-content">
            <div v-for="(item, index) in Plan?.plan[1]" :key="index">
              <h4>{{ item.name }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="研二" placement="top">
        <el-card>
          <div class="FuturePlan-timeline-content">
            <div v-for="(item, index) in Plan?.plan[2]" :key="index">
              <h4>{{ item.name }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="研三" placement="top">
        <el-card>
          <div class="FuturePlan-timeline-content">
            <div v-for="(item, index) in Plan?.plan[3]" :key="index">
              <h4>{{ item.name }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<style scoped lang="scss">
.FuturePlan-interest {
  margin: 0 auto;
  &-header {
    h4 {
      margin: 0;
      font-size: 25px;
    }
  }
}
.FuturePlan-timeline-content {
  h4 {
    font-size: 20px;
    margin: 10px 0;
  }
  p {
    font-size: 20px;
    text-indent: 2em;
  }
}
</style>

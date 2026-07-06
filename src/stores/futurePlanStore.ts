import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Plan } from '@/scripts/define.ts'
import requestJson from '@/request/requestJson.ts'

// 未来规划仓库
export const useFuturePlanStore = defineStore('FuturePlan', () => {
  // 定义数据
  const JSON_Name = 'plan'
  async function initPlanStore() {
    const response = await requestJson.get(JSON_Name)
    Plan.value = response.data
  }
  const Plan = ref<Plan | null>(null)

  return { Plan, initPlanStore }
})

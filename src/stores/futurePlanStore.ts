import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Plan } from '@/scripts/define.ts'
import { loadJSON } from '@/request/request.ts'

// 未来规划仓库
export const useFuturePlanStore = defineStore('FuturePlan', () => {
  // 定义数据
  const JSON_Name = 'plan'
  async function initPlanStore() {
    Plan.value = await loadJSON(JSON_Name)
  }
  const Plan = ref<Plan | null>(null)

  return { Plan, initPlanStore }
})

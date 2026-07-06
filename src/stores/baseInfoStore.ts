import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Info } from '@/scripts/define.ts'
import requestJson from '@/request/requestJson.ts'

// 未来规划仓库
export const useBaseInfoStore = defineStore('BaseInfo', () => {
  // 定义数据
  const JSON_Name = 'info'
  async function initInfoStore() {
    const response = await requestJson.get(JSON_Name)
    Info.value = response.data
  }
  const Info = ref<Info | null>(null)

  return { Info, initInfoStore }
})

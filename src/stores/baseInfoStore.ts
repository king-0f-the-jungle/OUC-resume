import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Info } from '@/scripts/define.ts'
import { loadJSON } from '@/request/request.ts'

// 未来规划仓库
export const useBaseInfoStore = defineStore('BaseInfo', () => {
  // 定义数据
  const JSON_Name = 'info'
  async function initInfoStore() {
    Info.value = await loadJSON(JSON_Name)
  }
  const Info = ref<Info | null>(null)

  return { Info, initInfoStore }
})

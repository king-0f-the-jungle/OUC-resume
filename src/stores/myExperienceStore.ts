import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Experience } from '@/scripts/define.ts'
import requestJson from '@/request/requestJson.ts'

// 定义Store
export const useMyExperienceStore = defineStore('MyExperience', () => {
  // 定义数据
  const JSON_Name = 'experiences'
  async function initExperienceStore() {
    const response = await requestJson.get(JSON_Name)
    Experience.value = response.data
  }
  const Experience = ref<Experience | null>(null)

  return { Experience, initExperienceStore }
})

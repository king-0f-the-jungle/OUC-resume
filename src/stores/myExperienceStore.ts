import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Experience } from '@/scripts/define.ts'
import { loadJSON } from '@/request/request.ts'

// 定义Store
export const useMyExperienceStore = defineStore('MyExperience', () => {
  // 定义数据
  const JSON_Name = 'experiences'
  async function initExperienceStore() {
    Experience.value = await loadJSON(JSON_Name)
  }
  const Experience = ref<Experience | null>(null)

  return { Experience, initExperienceStore }
})
